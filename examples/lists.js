const Bench = require('@zimmed/bench/node').default;
const LinkedSet = require('./utils/LinkedSet');

const { bench, trial, assertEq, assertExists, assertLength, assertType, afterEach, beforeEach } =
  Bench.createAndUnpack('List Suite');

function fillSet(set, times = 1000) {
  let i = -1;
  while (++i < times) set.add(i);
  return set;
}

function fillArr(arr, times = 1000) {
  let i = -1;
  while (++i < times) arr.push(i);
  return arr;
}

function fillArrUniq(arr, times = 1000) {
  let i = -1;
  while (++i < times) {
    if (!arr.includes(i)) arr.push(i);
  }
  return arr;
}

function prependArr(arr, times = 1000) {
  let i = -1;
  while (++i < times) arr.unshift(i);
  return arr;
}

function prependArrUniq(arr, times = 1000) {
  let i = -1;
  while (++i < times) {
    if (!arr.includes(i)) arr.unshift(i);
  }
  return arr;
}

function prependSet(set, times = 1000) {
  let i = -1;
  while (++i < times) set = new Set([i, ...set]);
  return set;
}

function prependLinkedSet(set, times = 1000) {
  let i = -1;
  while (++i < times) set.insert(i);
  return set;
}

async function main() {
  const results = await Promise.all([
    bench(
      'Create list instance',
      () => {
        let list;

        afterEach(() => {
          assertExists(list);
          assertLength(list, 0);
          list = null;
        });

        trial('Array', () => {
          list = [];
        });
        trial('Set', () => {
          list = new Set();
        });
        trial('LinkedSet', () => {
          list = new LinkedSet();
        });
      },
      1e7
    ),

    bench(
      'Append 10K elements',
      () => {
        let list, arr, set, linked;

        beforeEach(() => {
          arr = [];
          set = new Set();
          linked = new LinkedSet();
        });

        afterEach(() => {
          assertExists(list);
          assertLength(list, 1e4);
          list = arr = set = linked = null;
        });

        trial('Array', () => {
          list = fillArr(arr, 1e4);
        });
        trial('Set', () => {
          list = fillSet(set, 1e4);
        });
        trial('LinkedSet', () => {
          list = fillSet(linked, 1e4);
        });
      },
      1000
    ),

    bench(
      'Prepend 10K elements',
      () => {
        let list, arr, set, linked;

        beforeEach(() => {
          arr = [];
          set = new Set();
          linked = new LinkedSet();
        });

        afterEach(() => {
          assertExists(list);
          assertLength(list, 1e4);
          list = arr = set = linked = null;
        });

        trial('Array', () => {
          list = prependArr(arr, 1e4);
        });
        trial('Set (append)', () => {
          list = fillSet(set, 1e4);
        });
        trial('LinkedSet', () => {
          list = prependLinkedSet(linked, 1e4);
        });
      },
      100
    ),

    bench(
      'Delete 10k elements from 100k-element lists',
      () => {
        let list, arr, set, linked, i;

        beforeEach(() => {
          i = -1;
          arr = fillArr([], 1e5);
          set = fillSet(new Set(), 1e5);
          linked = fillSet(new LinkedSet(), 1e5);
        });

        afterEach(() => {
          assertEq(i, 1e4);
          assertExists(list);
          assertLength(list, 9e4);
          list = arr = set = linked = null;
        });

        trial('Array', () => {
          list = arr;
          while (++i < 1e4) arr.splice(arr.indexOf(i), 1);
        });
        trial('Set', () => {
          list = set;
          while (++i < 1e4) set.delete(i);
        });
        trial('LinkedSet', () => {
          list = linked;
          while (++i < 1e4) linked.delete(i);
        });
      },
      10
    ),

    bench(
      'Pop 10k elements from 100k-element lists',
      () => {
        let list, arr, set, linked, i;

        beforeEach(() => {
          i = -1;
          arr = fillArr([], 1e5);
          set = fillSet(new Set(), 1e5);
          linked = fillSet(new LinkedSet(), 1e5);
        });

        afterEach(() => {
          assertEq(i, 1e4);
          assertExists(list);
          assertLength(list, 9e4);
          list = arr = set = linked = null;
        });

        trial('Array', () => {
          list = arr;
          while (++i < 1e4) arr.pop();
        });
        trial('Set (shift)', () => {
          list = set;
          while (++i < 1e4) {
            for (const item of set) {
              set.delete(item);
              break;
            }
          }
        });
        trial('LinkedSet', () => {
          list = linked;
          while (++i < 1e4) linked.pop();
        });
      },
      100
    ),

    bench(
      'Shift 10k elements from 100k-element lists',
      () => {
        let list, arr, set, linked, i;

        beforeEach(() => {
          i = -1;
          arr = fillArr([], 1e5);
          set = fillSet(new Set(), 1e5);
          linked = fillSet(new LinkedSet(), 1e5);
        });

        afterEach(() => {
          assertEq(i, 1e4);
          assertExists(list);
          assertLength(list, 9e4);
          list = arr = set = linked = null;
        });

        trial('Array', () => {
          list = arr;
          while (++i < 1e4) arr.shift();
        });
        trial('Set', () => {
          list = set;
          while (++i < 1e4) {
            for (const item of set) {
              set.delete(item);
              break;
            }
          }
        });
        trial('LinkedSet', () => {
          list = linked;
          while (++i < 1e4) linked.shift();
        });
      },
      100
    ),

    bench(
      'Iterate over 100k elements',
      () => {
        let list, arr, set, linked, i;

        beforeEach(() => {
          i = 0;
          arr = fillArr([], 1e5);
          set = fillSet(new Set(), 1e5);
          linked = fillSet(new LinkedSet(), 1e5);
        });

        afterEach(() => {
          assertEq(i, 1e5);
          assertExists(list);
          assertLength(list, 1e5);
          list = arr = set = linked = null;
        });

        trial('Array', () => {
          list = arr;
          for (const item of arr) {
            if (item != null) i += 1;
          }
        });
        trial('Set', () => {
          list = set;
          for (const item of set) {
            if (item != null) i += 1;
          }
        });
        trial('LinkedSet', () => {
          list = linked;
          for (const item of linked) {
            if (item != null) i += 1;
          }
        });
      },
      100
    ),

    bench(
      'forEach iteration over 100k elements',
      () => {
        let list, arr, set, linked, i;

        beforeEach(() => {
          i = 0;
          arr = fillArr([], 1e5);
          set = fillSet(new Set(), 1e5);
          linked = fillSet(new LinkedSet(), 1e5);
        });

        afterEach(() => {
          assertEq(i, 1e5);
          assertExists(list);
          assertLength(list, 1e5);
          list = arr = set = linked = null;
        });

        trial('Array', () => {
          list = arr;
          arr.forEach(() => i++);
        });
        trial('Set', () => {
          list = set;
          set.forEach(() => i++);
        });
        trial('LinkedSet', () => {
          list = linked;
          linked.forEach(() => i++);
        });
      },
      50
    ),

    bench(
      '100k Random Lookups on 10k-element lists',
      () => {
        let list, arr, set, linked, i, lookups, d;

        beforeEach(() => {
          i = -1;
          lookups = Array(1e5)
            .fill(0)
            .map(() => Math.floor(Math.random() * 2e4));
          arr = fillArr([], 1e4);
          set = fillSet(new Set(), 1e4);
          linked = fillSet(new LinkedSet(), 1e4);
        });

        afterEach(() => {
          assertType(d, 'boolean');
          assertEq(i, 1e5);
          assertExists(list);
          assertLength(list, 1e4);
          list = arr = set = linked = lookups = d = null;
        });

        trial('Array', () => {
          list = arr;
          while (++i < 1e5) d = arr.includes(lookups[i]);
        });
        trial('Set', () => {
          list = set;
          while (++i < 1e5) d = set.has(lookups[i]);
        });
        trial('LinkedSet', () => {
          list = linked;
          while (++i < 1e5) d = linked.has(lookups[i]);
        });
      },
      10
    ),
  ]);

  console.log('\n Summary \n');
  Bench.overallScores(results, ['Array', 'Set', 'LinkedSet']).forEach(({ name, place, score }) => {
    const prefix = place === 0 ? '>>>' : place === 1 ? ' >>' : '  >';

    console.log(`${prefix} ${name} average score: ${(score * 100).toFixed(1)}%`);
  });
  console.log('');
}

main();
