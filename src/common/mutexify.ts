type Release = (fn?: (e?: any, v?: any) => void, error?: any, value?: any) => void;
type Used = (fn: Release) => void;
type Acquire = ((fn: Used) => void) & { locked: boolean };

function mutexify(setNextTick: (f: () => void) => void) {
  const queue: Array<Used> = [];
  let used: Used | null = null;
  let locked = false;

  function acquire(fn: Used) {
    if (used) {
      queue.push(fn);
    } else {
      used = fn;
      locked = true;
      setNextTick(call);
    }
  }

  Object.defineProperty(acquire, 'locked', { get: () => locked, enumerable: true });

  function release(fn?: (e?: any, v?: any) => void, err?: any, value?: any) {
    used = null;
    locked = false;
    if (fn) fn(err, value);
    if (queue.length) acquire(queue.shift() as Used);
  }

  function call() {
    if (used) used(release);
  }

  return acquire as Acquire;
}

mutexify.promise = function mutexifyPromise(setNextTick: (f: () => void) => void) {
  const lock = mutexify(setNextTick);

  function acquire() {
    return new Promise(lock);
  }

  Object.defineProperty(acquire, 'locked', {
    get: () => lock.locked,
    enumerable: true,
  });

  return acquire as (() => Promise<Release>) & { locked: boolean };
};

export default mutexify;
