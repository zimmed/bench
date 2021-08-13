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
} = require('@zimmed/bench/node');

timedBench(
  'Loops (1k elements)',
  () => {
    const arr = Array(1000).fill(0);
    let n = 1;

    trial('for loop', () => {
      const l = arr.length;
      let i = 0;

      for (; i < l; ++i) n += arr[i];
    });
    trial('while loop', () => {
      const l = arr.length;
      let i = -1;

      while (++i < l) n += arr[i];
    });
    trial('do while loop', () => {
      const l = arr.length;
      let i = 0;

      do {
        n += arr[i];
      } while (++i < l);
    });
    trial('for of loop', () => {
      for (const e of arr) n += e;
    });
    trial('forEach', () => {
      arr.forEach((e) => (n += e));
    });
    trial('reduce', () => {
      n = arr.reduce((t, e) => t + e, n);
    });
  },
  3000
);
