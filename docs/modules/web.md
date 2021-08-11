[@zimmed/bench](../README.md) / [Exports](../modules.md) / web

# Module: web

## Table of contents

### References

- [default](web.md#default)

### Classes

- [WebBench](../classes/web.WebBench.md)

### Functions

- [afterEach](web.md#aftereach)
- [assert](web.md#assert)
- [assertEq](web.md#asserteq)
- [assertExists](web.md#assertexists)
- [assertGt](web.md#assertgt)
- [assertGte](web.md#assertgte)
- [assertLength](web.md#assertlength)
- [assertLt](web.md#assertlt)
- [assertLte](web.md#assertlte)
- [assertNotEq](web.md#assertnoteq)
- [assertNotExists](web.md#assertnotexists)
- [assertNotLength](web.md#assertnotlength)
- [assertNotType](web.md#assertnottype)
- [assertType](web.md#asserttype)
- [beforeEach](web.md#beforeeach)
- [bench](web.md#bench)
- [error](web.md#error)
- [log](web.md#log)
- [setUp](web.md#setup)
- [tearDown](web.md#teardown)
- [trial](web.md#trial)
- [xbench](web.md#xbench)
- [xtrial](web.md#xtrial)

## References

### default

Renames and exports: [WebBench](../classes/web.WebBench.md)

## Functions

### afterEach

▸ **afterEach**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[common/Bench.ts:65](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L65)

___

### assert

▸ **assert**(`test`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | `boolean` \| () => `boolean` \| () => [`Future`](common_Bench.md#future)<`boolean`\> |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:66](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L66)

___

### assertEq

▸ **assertEq**(`actual`, `expected`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `any` |
| `expected` | `any` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:67](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L67)

___

### assertExists

▸ **assertExists**(`actual`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `any` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:69](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L69)

___

### assertGt

▸ **assertGt**(`actual`, `min`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `number` |
| `min` | `number` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:83](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L83)

___

### assertGte

▸ **assertGte**(`actual`, `min`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `number` |
| `min` | `number` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:84](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L84)

___

### assertLength

▸ **assertLength**(`actual`, `length`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `any` |
| `length` | `number` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:71](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L71)

___

### assertLt

▸ **assertLt**(`actual`, `max`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `number` |
| `max` | `number` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:86](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L86)

___

### assertLte

▸ **assertLte**(`actual`, `max`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `number` |
| `max` | `number` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:85](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L85)

___

### assertNotEq

▸ **assertNotEq**(`actual`, `expected`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `any` |
| `expected` | `any` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:68](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L68)

___

### assertNotExists

▸ **assertNotExists**(`actual`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `any` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:70](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L70)

___

### assertNotLength

▸ **assertNotLength**(`actual`, `length`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `any` |
| `length` | `number` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:72](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L72)

___

### assertNotType

▸ **assertNotType**(`actual`, `typeOrClass`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `any` |
| `typeOrClass` | `string` \| (...`args`: `any`[]) => `any` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:78](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L78)

___

### assertType

▸ **assertType**(`actual`, `typeOrClass`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `any` |
| `typeOrClass` | `string` \| (...`args`: `any`[]) => `any` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:73](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L73)

___

### beforeEach

▸ **beforeEach**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[common/Bench.ts:64](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L64)

___

### bench

▸ **bench**(`only`, `name`, `body`, `iterations?`): `Promise`<[`Summary`](common_Bench.md#summary)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `name` | `string` |
| `body` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `iterations?` | `number` |

#### Returns

`Promise`<[`Summary`](common_Bench.md#summary)[]\>

#### Defined in

[common/Bench.ts:42](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L42)

▸ **bench**(`name`, `body`, `iterations?`): `Promise`<[`Summary`](common_Bench.md#summary)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `body` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `iterations?` | `number` |

#### Returns

`Promise`<[`Summary`](common_Bench.md#summary)[]\>

#### Defined in

[common/Bench.ts:48](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L48)

___

### error

▸ **error**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:40](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L40)

___

### log

▸ **log**(`msg`, `eol?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `eol?` | `boolean` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:39](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L39)

___

### setUp

▸ **setUp**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[common/Bench.ts:62](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L62)

___

### tearDown

▸ **tearDown**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[common/Bench.ts:63](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L63)

___

### trial

▸ **trial**(`fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TrialFn`](common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:54](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L54)

▸ **trial**(`fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TrialFnAsync`](common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:55](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L55)

▸ **trial**(`name`, `fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`TrialFn`](common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:56](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L56)

▸ **trial**(`name`, `fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`TrialFnAsync`](common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:57](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L57)

▸ **trial**(`only`, `fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `fn` | [`TrialFn`](common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:58](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L58)

▸ **trial**(`only`, `fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `fn` | [`TrialFnAsync`](common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:59](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L59)

▸ **trial**(`only`, `name`, `fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `name` | `string` |
| `fn` | [`TrialFn`](common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:60](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L60)

▸ **trial**(`only`, `name`, `fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `name` | `string` |
| `fn` | [`TrialFnAsync`](common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Defined in

[common/Bench.ts:61](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L61)

___

### xbench

▸ **xbench**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[common/Bench.ts:41](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L41)

___

### xtrial

▸ **xtrial**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[common/Bench.ts:53](https://github.com/zimmed/bench/blob/438f8af/src/common/Bench.ts#L53)
