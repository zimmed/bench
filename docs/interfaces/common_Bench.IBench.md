[@zimmed/bench](../README.md) / [Exports](../modules.md) / [common/Bench](../modules/common_Bench.md) / IBench

# Interface: IBench

[common/Bench](../modules/common_Bench.md).IBench

## Implemented by

- [`default`](../classes/common_Bench.default.md)

## Table of contents

### Methods

- [afterEach](common_Bench.IBench.md#aftereach)
- [assert](common_Bench.IBench.md#assert)
- [assertEq](common_Bench.IBench.md#asserteq)
- [assertExists](common_Bench.IBench.md#assertexists)
- [assertGt](common_Bench.IBench.md#assertgt)
- [assertGte](common_Bench.IBench.md#assertgte)
- [assertLength](common_Bench.IBench.md#assertlength)
- [assertLt](common_Bench.IBench.md#assertlt)
- [assertLte](common_Bench.IBench.md#assertlte)
- [assertNotEq](common_Bench.IBench.md#assertnoteq)
- [assertNotExists](common_Bench.IBench.md#assertnotexists)
- [assertNotLength](common_Bench.IBench.md#assertnotlength)
- [assertNotType](common_Bench.IBench.md#assertnottype)
- [assertType](common_Bench.IBench.md#asserttype)
- [beforeEach](common_Bench.IBench.md#beforeeach)
- [bench](common_Bench.IBench.md#bench)
- [error](common_Bench.IBench.md#error)
- [log](common_Bench.IBench.md#log)
- [setUp](common_Bench.IBench.md#setup)
- [tearDown](common_Bench.IBench.md#teardown)
- [timedBench](common_Bench.IBench.md#timedbench)
- [trial](common_Bench.IBench.md#trial)
- [xbench](common_Bench.IBench.md#xbench)
- [xtimedBench](common_Bench.IBench.md#xtimedbench)
- [xtrial](common_Bench.IBench.md#xtrial)

## Methods

### afterEach

▸ **afterEach**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:77](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L77)

___

### assert

▸ **assert**(`test`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | `boolean` \| () => `boolean` \| () => [`Future`](../modules/common_Bench.md#future)<`boolean`\> |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:78](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L78)

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

[src/common/Bench.ts:79](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L79)

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

[src/common/Bench.ts:81](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L81)

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

[src/common/Bench.ts:95](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L95)

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

[src/common/Bench.ts:96](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L96)

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

[src/common/Bench.ts:83](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L83)

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

[src/common/Bench.ts:98](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L98)

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

[src/common/Bench.ts:97](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L97)

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

[src/common/Bench.ts:80](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L80)

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

[src/common/Bench.ts:82](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L82)

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

[src/common/Bench.ts:84](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L84)

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

[src/common/Bench.ts:90](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L90)

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

[src/common/Bench.ts:85](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L85)

___

### beforeEach

▸ **beforeEach**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:76](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L76)

___

### bench

▸ **bench**(`only`, `name`, `body`, `iterations?`): `Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `name` | `string` |
| `body` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `iterations?` | `number` |

#### Returns

`Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Defined in

[src/common/Bench.ts:42](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L42)

▸ **bench**(`name`, `body`, `iterations?`): `Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `body` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `iterations?` | `number` |

#### Returns

`Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Defined in

[src/common/Bench.ts:48](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L48)

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

[src/common/Bench.ts:40](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L40)

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

[src/common/Bench.ts:39](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L39)

___

### setUp

▸ **setUp**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:74](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L74)

___

### tearDown

▸ **tearDown**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:75](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L75)

___

### timedBench

▸ **timedBench**(`only`, `name`, `body`, `timeToRun?`): `Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `name` | `string` |
| `body` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `timeToRun?` | `number` |

#### Returns

`Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Defined in

[src/common/Bench.ts:54](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L54)

▸ **timedBench**(`name`, `body`, `timeToRun?`): `Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `body` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `timeToRun?` | `number` |

#### Returns

`Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Defined in

[src/common/Bench.ts:60](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L60)

___

### trial

▸ **trial**(`fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TrialFn`](../modules/common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:66](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L66)

▸ **trial**(`fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TrialFnAsync`](../modules/common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:67](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L67)

▸ **trial**(`name`, `fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`TrialFn`](../modules/common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:68](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L68)

▸ **trial**(`name`, `fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`TrialFnAsync`](../modules/common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:69](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L69)

▸ **trial**(`only`, `fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `fn` | [`TrialFn`](../modules/common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:70](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L70)

▸ **trial**(`only`, `fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `fn` | [`TrialFnAsync`](../modules/common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:71](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L71)

▸ **trial**(`only`, `name`, `fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `name` | `string` |
| `fn` | [`TrialFn`](../modules/common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:72](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L72)

▸ **trial**(`only`, `name`, `fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `name` | `string` |
| `fn` | [`TrialFnAsync`](../modules/common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:73](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L73)

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

[src/common/Bench.ts:41](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L41)

___

### xtimedBench

▸ **xtimedBench**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:53](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L53)

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

[src/common/Bench.ts:65](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L65)
