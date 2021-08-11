import process from 'process';
import os from 'os';
import path from 'path';
import prettyHrtime from 'pretty-hrtime';
import { mutexify, Bench } from '../common';
import { _singletonMethods } from '../common/Bench';

function command() {
  let argv = process.argv.slice(0);

  if (argv[0].endsWith('/node')) argv[0] = 'node';
  if (argv[1] === path.join(__dirname, 'run.js')) {
    argv.shift();
    argv[0] = 'bench';
  }
  argv = argv.map(function (name) {
    const cwd = process.cwd() + path.sep;

    return name.indexOf(cwd) === 0 ? name.slice(cwd.length) : name;
  });

  return argv.join(' ');
}

export default class NodeBench extends Bench {
  static lock = mutexify.promise(process.nextTick.bind(process));

  log(msg: string, eol = true) {
    process.stdout.write(msg + (eol ? '\n' : ''));
  }

  error(msg: string) {
    process.stderr.write('\n' + msg + '\n');
  }

  constructor(name?: string) {
    super(name);

    process.on('exit', () => {
      if (this.state.cur) {
        this.error(`Benchmark "${name}" was never finished`);
      } else {
        this.log(
          `All ${name} benchmarks completed in ${prettyHrtime([0, this.state.totalClock])}\n`
        );
      }
    });
  }

  printHeader() {
    const cpus = os
      .cpus()
      .reduce(
        (o, c) => ({ ...o, [c.model]: (o[c.model] || 0) + 1 }),
        {} as { [x: string]: number }
      );

    this.log(`\n${this.package} [Node.js v${process.versions.node} - v8 v${process.versions.v8}]`);
    this.log(os.version());
    Object.entries(cpus).forEach(([model, count]) => {
      this.log(`CPU: ${count}x ${model}`);
    });
    this.log(
      `RAM: ${(os.totalmem() / Math.pow(2, 30)).toFixed(0)} GiB Total - ${(
        os.freemem() / Math.pow(2, 30)
      ).toFixed(0)} GiB Free`
    );
    this.log(`> ${command()}`);
    this.log(`\n# ${this.name} #\n`);
  }
}

const {
  bench,
  xbench,
  trial,
  xtrial,
  log,
  error,
  setUp,
  tearDown,
  beforeEach,
  afterEach,
  assert,
  assertEq,
  assertNotEq,
  assertExists,
  assertLength,
  assertGt,
  assertLt,
  assertGte,
  assertLte,
  assertNotLength,
  assertNotExists,
  assertType,
  assertNotType,
} = _singletonMethods(NodeBench.create('Default'));

export {
  bench,
  xbench,
  trial,
  xtrial,
  log,
  error,
  setUp,
  tearDown,
  beforeEach,
  afterEach,
  assert,
  assertEq,
  assertNotEq,
  assertExists,
  assertLength,
  assertGt,
  assertLt,
  assertGte,
  assertLte,
  assertNotLength,
  assertNotExists,
  assertType,
  assertNotType,
};