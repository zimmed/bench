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
  'Scoped function execution',
  () => {
    function callback(a) {
      return a * this.foo;
    }
    const arg = 137;
    const thisArg = { foo: 10 };
    let r;

    trial('Function.prototype.bind', () => {
      r = callback.bind(thisArg)(arg);
    });
    trial('Function.prototype.apply', () => {
      r = callback.apply(thisArg, [arg]);
    });
    trial('Function.prototype.call', () => {
      r = callback.call(thisArg, arg);
    });
  },
  3000
);

timedBench(
  'Callback execution',
  () => {
    const callback = (a) => a * 10;
    const arg = 137;
    const thisArg = null;
    let r;

    trial('Function.prototype.bind', () => {
      r = callback.bind(thisArg)(arg);
    });
    trial('Function.prototype.apply', () => {
      r = callback.apply(thisArg, [arg]);
    });
    trial('Function.prototype.call', () => {
      r = callback.call(thisArg, arg);
    });
    trial('Function()', () => {
      r = callback(arg);
    });
  },
  5000
);
