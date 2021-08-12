import 'browser-hrtime';
import 'setimmediate';
import Bench, { _singletonMethods } from '../common/Bench';

export class WebBench extends Bench {
  logBuffer = '';

  log(msg: string, eol = true) {
    const fn =
      typeof console.info === 'function' ? console.info.bind(console) : console.log.bind(console);

    if (!eol) this.logBuffer += msg;
    else if (this.logBuffer) fn(`${this.logBuffer}\b${msg}`);
    else fn(msg);
  }

  error(msg: string) {
    if (typeof console.error === 'function') console.error(msg);
    else console.log(`[ERROR] ${msg}`);
  }

  printHeader() {
    this.log(`\n${this.package} [${navigator.userAgent}]`);
    this.log(`# ${this.name} #\n`);
  }
}

const {
  bench,
  xbench,
  timedBench,
  xtimedBench,
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
} = _singletonMethods(WebBench.create('Default'));

export {
  bench,
  xbench,
  timedBench,
  xtimedBench,
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

export default WebBench;
