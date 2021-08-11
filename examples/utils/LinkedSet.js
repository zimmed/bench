'use strict';
var _a;
var _b;
const util = typeof globalThis === 'undefined' ? undefined : ((key) => globalThis[key])('util');
const inspectKey =
  typeof util === 'undefined'
    ? 'inspect'
    : ((_a = util.inspect) === null || _a === void 0 ? void 0 : _a.custom) || 'inspect';
const inspect = typeof window === 'undefined' ? undefined : ((key) => window[key])('inspect');
module.exports = class LinkedSet {
  constructor(iterable) {
    this._map = new Map();
    this[_b] = 'LinkedSet';
    if (iterable) {
      for (const item of iterable) this.append(item);
    }
  }
  static from(iterable) {
    return new this(iterable);
  }
  get size() {
    return this._map.size;
  }
  pop() {
    let item;
    if (this._tail) {
      item = this._tail.body;
      this._tail = this._tail.head;
      if (this._tail) this._tail.tail = undefined;
      this._map.delete(item);
    }
    return item;
  }
  shift() {
    let item;
    if (this._head) {
      item = this._head.body;
      this._head = this._head.tail;
      if (this._head) this._head.head = undefined;
      this._map.delete(item);
    }
    return item;
  }
  has(item) {
    return this._map.has(item);
  }
  append(item) {
    var _a;
    const map = this._map;
    if (!map.has(item)) {
      const t = (this._tail = { head: this._tail, body: item });
      if (t.head) t.head.tail = t;
      (_a = this._head) !== null && _a !== void 0 ? _a : (this._head = t);
      map.set(item, t);
    }
    return this;
  }
  insert(item) {
    var _a;
    const map = this._map;
    if (!map.has(item)) {
      const h = (this._head = { body: item, tail: this._head });
      if (h.tail) h.tail.head = h;
      (_a = this._tail) !== null && _a !== void 0 ? _a : (this._tail = h);
      map.set(item, h);
    }
    return this;
  }
  add(item) {
    var _a;
    const map = this._map;
    if (!map.has(item)) {
      const t = (this._tail = { head: this._tail, body: item });
      if (t.head) t.head.tail = t;
      (_a = this._head) !== null && _a !== void 0 ? _a : (this._head = t);
      map.set(item, t);
    }
    return this;
  }
  clear() {
    this._map.clear();
    this._head = undefined;
    this._tail = undefined;
  }
  delete(item) {
    const map = this._map;
    let cur = map.get(item);
    if (cur) {
      map.delete(item);
      if (this._head === cur) this._head = cur.tail;
      else if (this._tail === cur) this._tail = cur.head;
      else {
        if (cur.head) cur.head.tail = cur.tail;
        if (cur.tail) cur.tail.head = cur.head;
      }
      return true;
    }
    return false;
  }
  values() {
    return this._map.keys();
  }
  *entries() {
    for (const k of this._map.keys()) {
      yield [k, k];
    }
  }
  toArray() {
    return Array.from(this._map.keys());
  }
  keys() {
    return this._map.keys();
  }
  [((_b = Symbol.toStringTag), Symbol.iterator)]() {
    return this._map.keys();
  }
  toString() {
    return inspect == null ? '[object LinkedSet]' : inspect(this);
  }
  [inspectKey](depth = 0, opts) {
    if (inspect != null) return inspect(this);
    const items = this.toArray()
      .slice(0, 100)
      .map((x) => ((x === null || x === void 0 ? void 0 : x.inspect) ? x.inspect(depth + 1, opts) : `${x}`));
    if (items.length < 20) return `LinkedSet(${this.size}) { ${items.join(', ')} }`;
    return `LinkedSet(${this.size}) {\n\t${items.join(',\n\t')}\n${this.size > 100 ? '\t...\n' : ''}}`;
  }
  toJSON() {
    return this.toArray();
  }
  forEachOptimized(cb, thisArg) {
    var _a;
    const { _map } = this;
    let i = -1;
    for (const k of _map.keys()) {
      cb.apply(thisArg, [(_a = _map.get(k)) === null || _a === void 0 ? void 0 : _a.body, ++i, this]);
    }
  }
  forEach(cb, thisArg) {
    let cur = this._head;
    let i = 0;
    while (cur) {
      cb.apply(thisArg, [cur.body, i++, this]);
      cur = cur.tail;
    }
  }
  forEachRight(cb, thisArg) {
    let cur = this._tail;
    let i = this.size - 1;
    while (cur) {
      cb.apply(thisArg, [cur.body, i--, this]);
      cur = cur.head;
    }
  }
  reduce(cb, initialValue, thisArg) {
    let cur = this._head;
    let i = 0;
    let next = initialValue;
    while (cur) {
      next = cb.apply(thisArg, [next, cur.body, i++, this]);
      cur = cur.tail;
    }
    return next;
  }
  reduceRight(cb, initialValue, thisArg) {
    let cur = this._tail;
    let i = this.size - 1;
    let next = initialValue;
    while (cur) {
      next = cb.apply(thisArg, [next, cur.body, i--, this]);
      cur = cur.head;
    }
    return next;
  }
  map(cb, thisArg) {
    let cur = this._head;
    let i = 0;
    const arr = Array(this.size);
    while (cur) {
      arr[i++] = cb.apply(thisArg, [cur.body, i, this]);
      cur = cur.tail;
    }
    return arr;
  }
  mapRight(cb, thisArg) {
    let cur = this._tail;
    let i = this.size - 1;
    const arr = Array(this.size);
    while (cur) {
      arr[i--] = cb.apply(thisArg, [cur.body, i, this]);
      cur = cur.head;
    }
    return arr;
  }
};
