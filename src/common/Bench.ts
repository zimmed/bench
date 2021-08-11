import hrtime from 'browser-process-hrtime';
import prettyHrtime from 'pretty-hrtime';
import { version, name as packageName } from '../../package.json';
import mutexify from './mutexify';

export type Future<T> = Promise<T> & {
  next<R>(
    fn?: (r: any) => R
  ): R extends Future<infer X> ? Future<X> : R extends Promise<infer X> ? Future<X> : Future<R>;
  catch<R>(
    fn?: (e: any) => R
  ): R extends Future<infer X> ? Future<X> : R extends Promise<infer X> ? Future<X> : Future<R>;
  finally(fn?: () => void): void;
};

export type TrialBench = { start(): void; end(): void; log(msg: string, eol?: boolean): void };

export type TrialFn = (() => void) | ((b: TrialBench) => void);
export type TrialFnAsync = (() => void | Promise<void>) | ((b: TrialBench) => void | Promise<void>);

export type Trial =
  | { name: string; only: boolean; fn: TrialFn; async: false }
  | {
      name: string;
      only: boolean;
      fn: TrialFnAsync;
      async: true;
    };

export type Summary = {
  name: string;
  avg: number;
  dev: number;
  v: number;
  score: number;
};

export interface IBench {
  log(msg: string, eol?: boolean): void;
  error(msg: string): void;
  xbench(...args: any[]): void;
  bench(
    only: true,
    name: string,
    body: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>),
    iterations?: number
  ): Promise<Summary[]>;
  bench(
    name: string,
    body: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>),
    iterations?: number
  ): Promise<Summary[]>;
  xtrial(...args: any[]): void;
  trial(fn: TrialFn, isAsync?: false): void;
  trial(fn: TrialFnAsync, isAsync: true): void;
  trial(name: string, fn: TrialFn, isAsync?: false): void;
  trial(name: string, fn: TrialFnAsync, isAsync: true): void;
  trial(only: true, fn: TrialFn, isAsync?: false): void;
  trial(only: true, fn: TrialFnAsync, isAsync: true): void;
  trial(only: true, name: string, fn: TrialFn, isAsync?: false): void;
  trial(only: true, name: string, fn: TrialFnAsync, isAsync: true): void;
  setUp(fn: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>)): void;
  tearDown(fn: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>)): void;
  beforeEach(fn: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>)): void;
  afterEach(fn: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>)): void;
  assert(test: boolean | (() => boolean) | (() => Future<boolean>), message?: string): void;
  assertEq(actual: any, expected: any, message?: string): void;
  assertNotEq(actual: any, expected: any, message?: string): void;
  assertExists(actual: any, message?: string): void;
  assertNotExists(actual: any, message?: string): void;
  assertLength(actual: any, length: number, message?: string): void;
  assertNotLength(actual: any, length: number, message?: string): void;
  assertType(
    actual: any,
    typeOrClass: (new (...args: any[]) => any) | string,
    message?: string
  ): void;
  assertNotType(
    actual: any,
    typeOrClass: (new (...args: any[]) => any) | string,
    message?: string
  ): void;
  assertGt(actual: number, min: number, message?: string): void;
  assertGte(actual: number, min: number, message?: string): void;
  assertLte(actual: number, max: number, message?: string): void;
  assertLt(actual: number, max: number, message?: string): void;
}

function isFuture<T>(x: any): x is Future<T> {
  return !!x?.next;
}

function sum(a: number[]) {
  const l = a.length;
  let i = -1;
  let t = 0;

  while (++i < l) t += a[i];
  return t;
}

function avg(a: number[]) {
  return sum(a) / a.length;
}

export default class Bench implements IBench {
  static package = `${packageName} v${version}`;
  static readonly lock = mutexify.promise(setImmediate);

  static create(name?: string) {
    return new this(name);
  }

  static overallScores(results: Summary[][]) {
    const scoresByTrial = results
      .filter(Boolean)
      .flat(1)
      .reduce(
        (obj, r) => ({ ...obj, [r.name]: (obj[r.name as keyof typeof obj] || []).concat(r.score) }),
        {} as { [k: string]: number[] }
      );
    const keys = Object.keys(scoresByTrial);

    const averageByTrial = keys.reduce(
      (obj, k) => ({ ...obj, [k]: avg(scoresByTrial[k]) }),
      {} as { [k: string]: number }
    );
    const byScore = keys.slice().sort((a, b) => averageByTrial[b] - averageByTrial[a]);

    return keys.map((k) => ({
      name: k,
      score: averageByTrial[k],
      place: byScore.indexOf(k),
      winner: byScore.indexOf(k) === 0,
    }));
  }

  get lock() {
    return (this.constructor as typeof Bench).lock;
  }

  get package() {
    return (this.constructor as typeof Bench).package;
  }

  readonly name: string;

  readonly state: {
    trials: Set<Trial>;
    one: boolean;
    oneTrial: boolean;
    runs: number;
    cur: boolean;
    totalClock: number;
    setup: null | (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>);
    teardown: null | (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>);
    before: null | (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>);
    after: null | (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>);
  } = {
    trials: new Set<Trial>(),
    one: false,
    oneTrial: false,
    runs: 0,
    cur: false,
    totalClock: 0,
    setup: null,
    teardown: null,
    before: null,
    after: null,
  };

  log(msg: string, eol?: boolean) {
    console.log(msg);
  }

  error(msg: string) {
    console.log(msg);
  }

  constructor(name = 'Benchmark') {
    this.name = name;
  }

  printHeader() {
    this.log(`\n${this.package}`);
    this.log(`# ${this.name} #\n`);
  }

  async waitForComplete() {
    if (this.state.cur) {
      await new Promise((res, rej) => {
        const start = Date.now();
        const handler = setInterval(() => {
          if (!this.state.cur) {
            clearInterval(handler);
            res(true);
          } else if (Date.now() > start + 10000) {
            clearInterval(handler);
            rej(new Error(`Timed out waiting for test to complete before resetting state.`));
          }
        }, 100);
      });
    }
    return true;
  }

  async reset() {
    const { state } = this;

    await this.waitForComplete();
    state.trials.clear();
    state.one = false;
    state.oneTrial = false;
    state.runs = 0;
    state.setup = null;
    state.teardown = null;
    state.cur = false;
    state.totalClock = 0;
  }

  assert(test: boolean | (() => boolean) | (() => Future<boolean>), message?: string) {
    if (typeof test === 'function') {
      const res = test();

      if (isFuture(res)) {
        res
          .next(() => {})
          .catch((e) => this.error(`Assertion failed: ${message || e?.message || e}`));
      } else if (!res) {
        this.error(message ? `Assertion failed: ${message}` : 'Assertion failed');
      }
    } else if (isFuture(test)) {
      test
        .next(() => {})
        .catch((e) => this.error(`Assertion failed: ${message || e?.message || e}`));
    } else if (!test) {
      this.error(message ? `Assertion failed: ${message}` : 'Assertion failed');
    }
  }

  assertEq(actual: any, expected: any, message = 'Inequal') {
    return this.assert(
      expected === actual,
      `${message} (expected: ${expected} | actual: ${actual})`
    );
  }
  assertNotEq(actual: any, expected: any, message = 'Equal') {
    return this.assert(
      expected !== actual,
      `${message} (expected: not ${expected} | actual: ${actual})`
    );
  }
  assertExists(actual: any, message = 'Nullish') {
    return this.assert(actual != null, `${message} (actual: ${actual})`);
  }
  assertNotExists(actual: any, message = 'Exists') {
    return this.assert(actual == null, `${message} (actual: ${actual})`);
  }
  assertLength(actual: any, length: number, message = 'Wrong Length') {
    return this.assert(
      (actual?.length ?? actual?.size) === length,
      `${message} (expected: ${length} | actual: ${actual?.length ?? actual?.size})`
    );
  }
  assertNotLength(actual: any, length: number, message = 'Wrong Length') {
    return this.assert(
      (actual?.length ?? actual?.size) !== length,
      `${message} (expected: not ${length} | actual: ${actual?.length ?? actual?.size})`
    );
  }
  assertType(
    actual: any,
    typeOrClass: (new (...args: any[]) => any) | string,
    message = 'Wrong Type'
  ) {
    return this.assert(
      typeof typeOrClass === 'string'
        ? typeof actual === typeOrClass
        : actual instanceof typeOrClass,
      `${message} (${actual} is not a(n) ${
        (typeOrClass as { name: string } | null)?.name || typeOrClass
      })`
    );
  }
  assertNotType(
    actual: any,
    typeOrClass: (new (...args: any[]) => any) | string,
    message = 'Wrong Type'
  ) {
    return this.assert(
      typeof typeOrClass === 'string'
        ? typeof actual !== typeOrClass
        : !(actual instanceof typeOrClass),
      `${message} (${actual} is a(n) ${
        (typeOrClass as { name: string } | null)?.name || typeOrClass
      })`
    );
  }
  assertGt(actual: number, min: number, message = 'Not Greater Than') {
    return this.assert(actual > min, `${message} (${actual} <= ${min})`);
  }
  assertGte(actual: number, min: number, message = 'Not Greater Than Or Equal To') {
    return this.assert(actual >= min, `${message} (${actual} < ${min})`);
  }
  assertLte(actual: number, max: number, message = 'Not Less Than Or Equal To') {
    return this.assert(actual <= max, `${message} (${actual} > ${max})`);
  }
  assertLt(actual: number, max: number, message = 'Not Less Than') {
    return this.assert(actual < max, `${message} (${actual} >= ${max})`);
  }

  setUp(fn: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>)) {
    this.state.setup = fn;
  }
  tearDown(fn: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>)) {
    this.state.teardown = fn;
  }
  beforeEach(fn: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>)) {
    this.state.before = fn;
  }
  afterEach(fn: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>)) {
    this.state.after = fn;
  }

  xtrial(...args: any[]) {
    // noop
  }

  trial(fn: TrialFn, isAsync?: false): void;
  trial(fn: TrialFnAsync, isAsync: true): void;
  trial(name: string, fn: TrialFn, isAsync?: false): void;
  trial(name: string, fn: TrialFnAsync, isAsync: true): void;
  trial(only: true, fn: TrialFn, isAsync?: false): void;
  trial(only: true, fn: TrialFnAsync, isAsync: true): void;
  trial(only: true, name: string, fn: TrialFn, isAsync?: false): void;
  trial(only: true, name: string, fn: TrialFnAsync, isAsync: true): void;
  trial(
    a: boolean | string | TrialFnAsync,
    b?: boolean | TrialFnAsync | string,
    c?: boolean | TrialFnAsync,
    d = false
  ) {
    const name = typeof a === 'string' ? a : typeof b === 'string' ? b : '';
    const fn =
      typeof a === 'function'
        ? a
        : typeof b === 'function'
        ? b
        : typeof c === 'function'
        ? c
        : undefined;
    const only = typeof a === 'boolean' ? a : false;
    const isAsync = typeof b === 'boolean' ? b : typeof c === 'boolean' ? c : d;

    if (!fn) throw new Error(`No function supplied to trial: ${name}`);
    if (only) {
      if (this.state.oneTrial) throw new Error('Cannot have more than one "only" trial.');
      this.state.oneTrial = true;
    }
    this.state.trials.add({ name, fn, only, async: isAsync });
  }

  xbench(...args: any[]) {
    // noop
  }

  bench(
    name: string,
    body: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>),
    iterations?: number
  ): Promise<Summary[]>;
  bench(
    only: true,
    name: string,
    body: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>),
    iterations?: number
  ): Promise<Summary[]>;
  bench(
    onlyOrName: boolean | string,
    nameOrBody: string | (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>),
    bodyOrIterations?:
      | number
      | (() => void | Promise<void>)
      | ((b: IBench) => void | Promise<void>),
    it = 1
  ) {
    const only: boolean = typeof onlyOrName === 'boolean' ? onlyOrName : false;
    const name: string = typeof onlyOrName === 'string' ? onlyOrName : (nameOrBody as string);
    const body: (() => void | Promise<void>) | ((b: IBench) => void | Promise<void>) =
      typeof nameOrBody === 'function'
        ? nameOrBody
        : (bodyOrIterations as
            | (() => void | Promise<void>)
            | ((b: IBench) => void | Promise<void>));
    const iterations: number = typeof bodyOrIterations === 'number' ? bodyOrIterations : it;

    if (only) {
      if (this.state.one) throw new Error('Cannot have more than one "only" benchmark');
      this.state.one = true;
    }

    return new Promise((res, rej) => {
      process.nextTick(async () => {
        try {
          let summaries = [];
          let i = 0;
          let clockStart = [0, 0];
          let clockEnd = [0, 0];
          let clockDiff = 0;

          if (this.state.one && !only) return res(undefined);
          if (!this.state.runs) this.printHeader();
          this.state.runs += 1;

          const release = await this.lock();

          this.state.cur = true;
          this.log(`OP: ${name} [x${iterations.toLocaleString()}]`);
          this.state.trials.clear();
          this.state.oneTrial = false;
          this.state.setup = null;
          this.state.teardown = null;
          await body(this);

          if (this.state.setup) await (this.state.setup as (b: IBench) => void)(this);
          for (const t of this.state.trials) {
            if (!this.state.oneTrial || t.only) {
              let results = [];
              let j = -1;
              let step = Math.ceil(iterations / 4);

              clockStart = hrtime();
              this.log(`    # ${t.name || `Trial ${i}`}`, false);
              while (++j < iterations) {
                let startTime = [0, 0];
                let endTime = [0, 0];
                let diff;
                const start = () => (startTime = hrtime());
                const end = () => (endTime = hrtime());
                const b = { start, end, log: this.log.bind(this) };

                if (this.state.before) {
                  await (this.state.before as (b: IBench) => void | Promise<void>)(this);
                }
                if (t.async) {
                  start();
                  await t.fn(b);
                  endTime ||= hrtime();
                } else {
                  start();
                  t.fn(b);
                  endTime ||= hrtime();
                }
                if (this.state.after) {
                  await (this.state.after as (b: IBench) => void | Promise<void>)(this);
                }
                diff = (endTime[0] - startTime[0]) * 1e9 + endTime[1] - startTime[1];
                results.push(diff);
                if (j > 0 && j < iterations && j % step === 0) this.log('.', false);
              }

              clockEnd = hrtime();
              clockDiff = (clockEnd[0] - clockStart[0]) * 1e9 + clockEnd[1] - clockStart[1];
              this.state.totalClock += clockDiff;

              this.log(` (${prettyHrtime([0, clockDiff])})`);

              if (results.length > 1) {
                const avg = results.reduce((t, r) => t + r, 0) / results.length;
                const dev = Math.sqrt(
                  results.reduce((t, r) => t + Math.pow(r - avg, 2), 0) / results.length - 1
                );

                this.log(`        Avg: ${prettyHrtime([0, avg])}/op σ ${prettyHrtime([0, dev])}`);
                summaries.push({
                  name: t.name || `Trial ${i}`,
                  avg,
                  dev,
                  v: avg + dev / 2,
                  score: 0,
                });
              } else if (results.length) {
                this.log(`        Time: ${prettyHrtime([0, results[0]])}/op`);
                summaries.push({
                  name: t.name || `Trial ${i}`,
                  avg: results[0],
                  dev: 0,
                  v: results[0],
                });
              } else {
                this.log(`        No results!`);
              }
            }
          }
          if (this.state.teardown) await (this.state.teardown as (b: IBench) => void)(this);

          if (summaries.length > 1) {
            const sorted = summaries.slice().sort((a, b) => a.v - b.v);
            const pivot =
              summaries.length === 2 ? sorted[1] : sorted[Math.floor(summaries.length / 2)];

            for (const s of summaries) {
              s.score = pivot.v / s.v;

              this.log(
                `${s === sorted[0] ? '>>>' : ' > '} ${s.name} ~${prettyHrtime([0, s.v])}/op (${(
                  s.score * 100
                ).toFixed(1)}%)`
              );
            }
          }

          this.state.cur = false;
          release();
          res(summaries.filter(Boolean));
          this.log('');
        } catch (e) {
          this.error(`[FATAL] ${e?.message || e}`);
          rej(e);
        }
      });
    });
  }
}

export function _singletonMethods(singleton = Bench.create('Default')): IBench {
  return `
    log error xbench bench xtrial trial setUp tearDown beforeEach afterEach assert
    assertExists assertEq assertNotEq assertLength assertType assertLt assertGt
    assertLte assertGte assertNotLength assertNotType assertNotExists
  `
    .split(/\s+/g)
    .filter(Boolean)
    .reduce(
      (o, k) => ({ ...o, [k]: (singleton[k as keyof Bench] as Function).bind(singleton) }),
      {} as { [k: string]: Function }
    ) as unknown as IBench;
}
