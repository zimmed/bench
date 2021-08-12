@zimmed/bench / [Exports](modules.md)

# @zimmed/bench

A simple benchmarking / performance comparison library for node and web in TypeScript.

> [Typedocs](docs/modules.md)

## Credits

- Package is loosely based on [nanobench](https://www.npmjs.com/package/nanobench) by [Mathias Buus](https://github.com/mafintosh)

- Mutual-exclusion locking module based on [mutexify](https://www.npmjs.com/package/mutexify) by [Mathias Buus](https://github.com/mafintosh)

## Installation

First, edit existing or create new .npmrc file in your project root, and add:

`@zimmed:registry=https://npm.pkg.github.com`

Then you can use:

`$ npm i --save @zimmed/bench`

## Simple Usage

### Node.js

```typescript
// my-benchmark.ts
import { bench, trial, afterEach, assertLength } from '@zimmed/bench/node';

bench(
  'Splitting a string',
  () => {
    const str = 'The quick brown fox jumps over the lazy dog.';
    let result: string[] | null = null;

    afterEach(() => {
      assertLength(result, 9);
      result = null;
    });

    trial('String.prototype.split(string)', () => {
      result = str.split(' ');
    });

    trial('String.prototype.split(RegExp)', () => {
      result = str.split(/\s/g);
    });

    trial('Unnecessarily naive implementation', () => {
      const reg = /\s/g;
      let m: RegExpExecArray | null;
      let i = 0;

      result = [] as string[];
      while ((m = reg.exec(str))) {
        result.push(str.slice(i, m.index));
        i = m.index + 1;
      }
      if (i < str.length) result.push(str.slice(i));
    });
  },
  10000
);
```

```bash
ts-node my-benchmark.ts
```

### Web (TypeScript)

```typescript
import { bench, trial, afterEach, assertLength } from '@zimmed/bench/web';

bench(
  'Splitting a string',
  () => {
    const str = 'The quick brown fox jumps over the lazy dog.';
    let result: string[] | null = null;

    afterEach(() => {
      assertLength(result, 9);
      result = null;
    });

    trial('String.prototype.split(string)', () => {
      result = str.split(' ');
    });

    trial('String.prototype.split(RegExp)', () => {
      result = str.split(/\s/g);
    });

    trial('Unnecessarily naive implementation', () => {
      const reg = /\s/g;
      let m: RegExpExecArray | null;
      let i = 0;

      result = [] as string[];
      while ((m = reg.exec(str))) {
        result.push(str.slice(i, m.index));
        i = m.index + 1;
      }
      if (i < str.length) result.push(str.slice(i));
    });
  },
  10000
);
```

### Web (In-Browser)

```html
<script>
  $.ready(() => Bench.bench(
      'Splitting a string',
      () => {
        const str = 'The quick brown fox jumps over the lazy dog.';
        let result: string[] | null = null;

        Bench.afterEach(() => {
          assertLength(result, 9);
          result = null;
        });

        Bench.trial('String.prototype.split(string)', () => {
          result = str.split(' ');
        });

        Bench.trial('String.prototype.split(RegExp)', () => {
          result = str.split(/\s/g);
        });

        Bench.trial('Unnecessarily naive implementation', () => {
          const reg = /\s/g;
          let m: RegExpExecArray | null;
          let i = 0;

          result = [] as string[];
          while ((m = reg.exec(str))) {
            result.push(str.slice(i, m.index));
            i = m.index + 1;
          }
          if (i < str.length) result.push(str.slice(i));
        });
      },
      10000
    )
  );
</script>
```

## Advanced Usage

### Redirect Output

```typescript
import Bench from '@zimmed/bench/web';

const element = document.getElementById('output-div');

class MyBench extends Bench {
  element = document.createElement('div');

  log(msg: string, eol?: boolean) {
    this.element.innerHTML += `<span>${msg}</span>${eol ? '<br />' : ''}`;
  }

  error(msg: string) {
    this.element.innerHTML += `<br /><span class="error">${msg}</span><br />`;
  }

  constructor(name?: string) {
    super(name);

    document.body.append(this.element);
  }
}

export default MyBench.create('Default Suite');
```

### Multiple Suites

```typescript
// index.ts
import lists from './lists';
import maps from './maps';

export default function runBenchmarks() {
  return Promise.all([lists(), maps()]);
}
```

```typescript
// lists.ts
import Bench from '@zimmed/bench/node';

const benchmark = Bench.create('Lists');

export default async function main() {
  const results = await Promise.all([
    benchmark.bench('Iterate over 1K elements', () => {
      const arr = Array<number>(1000).fill(0);
      const set = new Set<number>(arr);
      let i = 0;

      benchmark.afterEach(() => {
        assertEq(i, 1000);
        i = 0;
      });

      benchmark.trial('Set', () => {
        for (const e of set) i++;
      });
      benchmark.trial('Array', () => {
        for (const e of arr) i++;
      });
    }, 1000),
    benchmark.bench('Random lookup by value in list of 1K elements', () => {
      const arr = Array<number>(1000).fill(0).map((_, i) => i);
      const set = new Set<number>(arr);
      let element = -1;
      let has: boolean | null = null;

      benchmark.beforeEach(() => {
        element = Math.floor(Math.random() * 2000);
        assertGte(element, 0);
      });
      benchmark.afterEach(() => {
        assertType(has, 'boolean');
        assert(element < 1000 ? has : !has);
        element = -1;
        has = null;
      });

      benchmark.trial('Set', () => {
        has = set.has(element);
      });
      benchmark.trial('Array', () => {
        has = arr.includes(element);
      });
    }, 10000),
  ]);

  console.log('\n Summary \n');
  Bench.overallScores(results).forEach(({ name, place, score }) => {
    const prefix = place === 0 ? '>>>' : place === 1 ? ' >>' : '  >';

    console.log(`${prefix} ${name} average score: ${(score * 100).toFixed(1)%}`);
  });
  console.log('');
}
```

```typescript
// maps.ts
import Bench from '@zimmed/bench/node';

const benchmark = Bench.create('Maps');

export default async function main() {
  const obj = Array(1000)
    .fill(0)
    .reduce((o, _, i) => ({ ...o, [`key-${i}`]: i }), {} as { [k: string]: number });
  const map = new Map(Object.entries(obj));
  const results = await Promise.all([
    benchmark.bench(
      'Iterate over 1000 keys',
      () => {
        let i = 0;

        benchmark.afterEach(() => {
          assertEq(i, 1000);
          i = 0;
        });

        benchmark.trial('Map', () => {
          for (const key of map) i++;
        });
        benchmark.trial('Object', () => {
          for (const key in obj) i++;
        });
        benchmark.trial('Object (safe)', () => {
          const keys = Object.keys(obj);

          for (const key of keys) i++;
        });
      },
      1000
    ),
    benchmark.bench(
      'Random lookup by key in map of 1K entries',
      () => {
        let index = -1;
        let key = '';
        let has: boolean | null = null;

        benchmark.beforeEach(() => {
          index = Math.floor(Math.random() * 2000);
          key = `key-${index}`;
          assertGte(element, 0);
        });
        benchmark.afterEach(() => {
          assertType(has, 'boolean');
          assert(index < 1000 ? has : !has);
          index = -1;
          key = '';
          has = null;
        });

        benchmark.trial('Set', () => {
          has = map.has(key);
        });
        benchmark.trial('Object', () => {
          has = typeof obj[key] === 'number';
        });
        benchmark.trial('Object (safe)', () => {
          has = Object.prototype.hasOwnProperty.apply(obj, [key]);
        });
      },
      10000
    ),
  ]);

  console.log('\n Summary \n');
  Bench.overallScores(results).forEach(({ name, place, score }) => {
    const prefix = place === 0 ? '>>>' : place === 1 ? ' >>' : '  >';

    console.log(`${prefix} ${name} average score: ${(score * 100).toFixed(1)}%`);
  });
  console.log('');
}
```
