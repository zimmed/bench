[@zimmed/bench](../README.md) / [Exports](../modules.md) / node

# Module: node

## Table of contents

### Classes

- [default](../classes/node.default.md)

### Functions

- [afterEach](node.md#aftereach)
- [assert](node.md#assert)
- [assertEq](node.md#asserteq)
- [assertExists](node.md#assertexists)
- [assertGt](node.md#assertgt)
- [assertGte](node.md#assertgte)
- [assertLength](node.md#assertlength)
- [assertLt](node.md#assertlt)
- [assertLte](node.md#assertlte)
- [assertNotEq](node.md#assertnoteq)
- [assertNotExists](node.md#assertnotexists)
- [assertNotLength](node.md#assertnotlength)
- [assertNotType](node.md#assertnottype)
- [assertType](node.md#asserttype)
- [beforeEach](node.md#beforeeach)
- [bench](node.md#bench)
- [error](node.md#error)
- [log](node.md#log)
- [setUp](node.md#setup)
- [tearDown](node.md#teardown)
- [trial](node.md#trial)
- [xbench](node.md#xbench)
- [xtrial](node.md#xtrial)

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

common/Bench.ts:65

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

common/Bench.ts:66

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

common/Bench.ts:67

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

common/Bench.ts:69

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

common/Bench.ts:83

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

common/Bench.ts:84

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

common/Bench.ts:71

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

common/Bench.ts:86

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

common/Bench.ts:85

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

common/Bench.ts:68

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

common/Bench.ts:70

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

common/Bench.ts:72

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

common/Bench.ts:78

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

common/Bench.ts:73

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

common/Bench.ts:64

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

common/Bench.ts:42

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

common/Bench.ts:48

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

common/Bench.ts:40

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

common/Bench.ts:39

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

common/Bench.ts:62

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

common/Bench.ts:63

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

common/Bench.ts:54

▸ **trial**(`fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TrialFnAsync`](common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Defined in

common/Bench.ts:55

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

common/Bench.ts:56

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

common/Bench.ts:57

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

common/Bench.ts:58

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

common/Bench.ts:59

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

common/Bench.ts:60

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

common/Bench.ts:61

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

common/Bench.ts:41

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

common/Bench.ts:53
