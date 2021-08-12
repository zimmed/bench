const Bench = require('@zimmed/bench/node').default;
const LinkedSet = require('../utils/LinkedSet');

const {
  bench,
  trial,
  tearDown,
  assertEq,
  assertExists,
  assertLength,
  assertType,
  afterEach,
  beforeEach,
  timedBench,
} = Bench.createAndUnpack('List Suite');

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
    timedBench(
      'Create list instance',
      () => {
        let list;

        tearDown(() => {
          assertExists(list);
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
      3000
    ),

    bench(
      'Clear 10k list',
      () => {
        const from = Array(1e4)
          .fill(0)
          .map((_, i) => i);
        let arr, set, linked;

        beforeEach(() => {
          arr = from.slice();
          set = new Set(from);
          linked = new LinkedSet(from);
        });

        trial('Array', () => {
          arr.splice(0);
        });
        trial('Set', () => {
          set.clear();
        });
        trial('LinkedSet', () => {
          linked.clear();
        });
      },
      1e3
    ),

    timedBench(
      'Append (clear over 10k)',
      () => {
        const arr = [];
        const set = new Set();
        const linked = new LinkedSet();
        const e = 17;

        trial('Array', () => {
          if (arr.length > 1e4) arr.splice(0);
          arr.push(e);
        });
        trial('Set', () => {
          if (set.size > 1e4) set.clear();
          set.add(e);
        });
        trial('LinkedSet', () => {
          if (linked.size > 1e4) linked.clear();
          linked.add(e);
        });
      },
      3000
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

    timedBench(
      'Prepend (clear over 10k)',
      () => {
        const arr = [];
        const linked = new LinkedSet();
        const e = 17;

        trial('Array', () => {
          if (arr.length > 1e4) arr.splice(0);
          arr.unshift(e);
        });
        trial('LinkedSet', () => {
          if (linked.size > 1e4) linked.clear();
          linked.insert(e);
        });
      },
      3000
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

    timedBench(
      'Iterate over 200 elements',
      () => {
        const arr = Array(200)
          .fill(0)
          .map((_, i) => i);
        const set = new Set(arr);
        const linked = new LinkedSet(arr);
        let j = 0;
        let k = 0;
        let l = 0;

        trial('Array', () => {
          const len = arr.length;
          let i = -1;

          while (++i < len) {
            if (arr[i] != null) j++;
          }
        });
        trial('Set', () => {
          for (const e of set) {
            if (e != null) k++;
          }
        });
        trial('LinkedSet', () => {
          for (const e of linked) {
            if (e != null) l++;
          }
        });
      },
      3000
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

    timedBench(
      'Successfull lookup on 200-element lists',
      () => {
        const arr = Array(200)
          .fill(0)
          .map((_, i) => i);
        const set = new Set(arr);
        const linked = new LinkedSet(arr);
        const e = 47;
        let j = 0;
        let k = 0;
        let l = 0;

        trial('Array', () => {
          if (arr.includes(e)) j++;
        });
        trial('Set', () => {
          if (set.has(e)) k++;
        });
        trial('LinkedSet', () => {
          if (linked.has(e)) l++;
        });
      },
      3000
    ),

    timedBench(
      'Unsuccessfull lookup on 200-element lists',
      () => {
        const arr = Array(200)
          .fill(0)
          .map((_, i) => i);
        const set = new Set(arr);
        const linked = new LinkedSet(arr);
        const e = 350;
        let j = 0;
        let k = 0;
        let l = 0;

        trial('Array', () => {
          if (!arr.includes(e)) j++;
        });
        trial('Set', () => {
          if (!set.has(e)) k++;
        });
        trial('LinkedSet', () => {
          if (!linked.has(e)) l++;
        });
      },
      3000
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
