[@zimmed/bench](../README.md) / [Exports](../modules.md) / [web](../modules/web.md) / WebBench

# Class: WebBench

[web](../modules/web.md).WebBench

## Hierarchy

- [`default`](common_Bench.default.md)

  ↳ **`WebBench`**

## Table of contents

### Constructors

- [constructor](web.WebBench.md#constructor)

### Properties

- [logBuffer](web.WebBench.md#logbuffer)
- [name](web.WebBench.md#name)
- [state](web.WebBench.md#state)
- [lock](web.WebBench.md#lock)
- [package](web.WebBench.md#package)

### Accessors

- [lock](web.WebBench.md#lock)
- [package](web.WebBench.md#package)

### Methods

- [afterEach](web.WebBench.md#aftereach)
- [assert](web.WebBench.md#assert)
- [assertEq](web.WebBench.md#asserteq)
- [assertExists](web.WebBench.md#assertexists)
- [assertGt](web.WebBench.md#assertgt)
- [assertGte](web.WebBench.md#assertgte)
- [assertLength](web.WebBench.md#assertlength)
- [assertLt](web.WebBench.md#assertlt)
- [assertLte](web.WebBench.md#assertlte)
- [assertNotEq](web.WebBench.md#assertnoteq)
- [assertNotExists](web.WebBench.md#assertnotexists)
- [assertNotLength](web.WebBench.md#assertnotlength)
- [assertNotType](web.WebBench.md#assertnottype)
- [assertType](web.WebBench.md#asserttype)
- [beforeEach](web.WebBench.md#beforeeach)
- [bench](web.WebBench.md#bench)
- [error](web.WebBench.md#error)
- [log](web.WebBench.md#log)
- [printHeader](web.WebBench.md#printheader)
- [reset](web.WebBench.md#reset)
- [setUp](web.WebBench.md#setup)
- [tearDown](web.WebBench.md#teardown)
- [trial](web.WebBench.md#trial)
- [waitForComplete](web.WebBench.md#waitforcomplete)
- [xbench](web.WebBench.md#xbench)
- [xtrial](web.WebBench.md#xtrial)
- [create](web.WebBench.md#create)
- [overallScores](web.WebBench.md#overallscores)

## Constructors

### constructor

• **new WebBench**(`name?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `'Benchmark'` |

#### Inherited from

[default](common_Bench.default.md).[constructor](common_Bench.default.md#constructor)

#### Defined in

[common/Bench.ts:180](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L180)

## Properties

### logBuffer

• **logBuffer**: `string` = `''`

#### Defined in

[web/index.ts:4](https://github.com/zimmed/bench/blob/d62eac5/src/web/index.ts#L4)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[default](common_Bench.default.md).[name](common_Bench.default.md#name)

#### Defined in

[common/Bench.ts:146](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L146)

___

### state

• `Readonly` **state**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after` | ``null`` \| () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `before` | ``null`` \| () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `cur` | `boolean` |
| `one` | `boolean` |
| `oneTrial` | `boolean` |
| `runs` | `number` |
| `setup` | ``null`` \| () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `teardown` | ``null`` \| () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `totalClock` | `number` |
| `trials` | `Set`<[`Trial`](../modules/common_Bench.md#trial)\> |

#### Inherited from

[default](common_Bench.default.md).[state](common_Bench.default.md#state)

#### Defined in

[common/Bench.ts:148](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L148)

___

### lock

▪ `Static` `Readonly` **lock**: () => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Inherited from

[default](common_Bench.default.md).[lock](common_Bench.default.md#lock)

#### Defined in

[common/Bench.ts:108](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L108)

___

### package

▪ `Static` **package**: `string`

#### Inherited from

[default](common_Bench.default.md).[package](common_Bench.default.md#package)

#### Defined in

[common/Bench.ts:107](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L107)

## Accessors

### lock

• `get` **lock**(): () => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Returns

() => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Defined in

[common/Bench.ts:138](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L138)

___

### package

• `get` **package**(): `string`

#### Returns

`string`

#### Defined in

[common/Bench.ts:142](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L142)

## Methods

### afterEach

▸ **afterEach**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[afterEach](common_Bench.default.md#aftereach)

#### Defined in

[common/Bench.ts:321](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L321)

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

#### Inherited from

[default](common_Bench.default.md).[assert](common_Bench.default.md#assert)

#### Defined in

[common/Bench.ts:221](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L221)

___

### assertEq

▸ **assertEq**(`actual`, `expected`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `any` | `undefined` |
| `expected` | `any` | `undefined` |
| `message` | `string` | `'Inequal'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertEq](common_Bench.default.md#asserteq)

#### Defined in

[common/Bench.ts:241](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L241)

___

### assertExists

▸ **assertExists**(`actual`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `any` | `undefined` |
| `message` | `string` | `'Nullish'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertExists](common_Bench.default.md#assertexists)

#### Defined in

[common/Bench.ts:253](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L253)

___

### assertGt

▸ **assertGt**(`actual`, `min`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `number` | `undefined` |
| `min` | `number` | `undefined` |
| `message` | `string` | `'Not Greater Than'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertGt](common_Bench.default.md#assertgt)

#### Defined in

[common/Bench.ts:299](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L299)

___

### assertGte

▸ **assertGte**(`actual`, `min`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `number` | `undefined` |
| `min` | `number` | `undefined` |
| `message` | `string` | `'Not Greater Than Or Equal To'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertGte](common_Bench.default.md#assertgte)

#### Defined in

[common/Bench.ts:302](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L302)

___

### assertLength

▸ **assertLength**(`actual`, `length`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `any` | `undefined` |
| `length` | `number` | `undefined` |
| `message` | `string` | `'Wrong Length'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertLength](common_Bench.default.md#assertlength)

#### Defined in

[common/Bench.ts:259](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L259)

___

### assertLt

▸ **assertLt**(`actual`, `max`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `number` | `undefined` |
| `max` | `number` | `undefined` |
| `message` | `string` | `'Not Less Than'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertLt](common_Bench.default.md#assertlt)

#### Defined in

[common/Bench.ts:308](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L308)

___

### assertLte

▸ **assertLte**(`actual`, `max`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `number` | `undefined` |
| `max` | `number` | `undefined` |
| `message` | `string` | `'Not Less Than Or Equal To'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertLte](common_Bench.default.md#assertlte)

#### Defined in

[common/Bench.ts:305](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L305)

___

### assertNotEq

▸ **assertNotEq**(`actual`, `expected`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `any` | `undefined` |
| `expected` | `any` | `undefined` |
| `message` | `string` | `'Equal'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertNotEq](common_Bench.default.md#assertnoteq)

#### Defined in

[common/Bench.ts:247](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L247)

___

### assertNotExists

▸ **assertNotExists**(`actual`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `any` | `undefined` |
| `message` | `string` | `'Exists'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertNotExists](common_Bench.default.md#assertnotexists)

#### Defined in

[common/Bench.ts:256](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L256)

___

### assertNotLength

▸ **assertNotLength**(`actual`, `length`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `any` | `undefined` |
| `length` | `number` | `undefined` |
| `message` | `string` | `'Wrong Length'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertNotLength](common_Bench.default.md#assertnotlength)

#### Defined in

[common/Bench.ts:265](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L265)

___

### assertNotType

▸ **assertNotType**(`actual`, `typeOrClass`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `any` | `undefined` |
| `typeOrClass` | `string` \| (...`args`: `any`[]) => `any` | `undefined` |
| `message` | `string` | `'Wrong Type'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertNotType](common_Bench.default.md#assertnottype)

#### Defined in

[common/Bench.ts:285](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L285)

___

### assertType

▸ **assertType**(`actual`, `typeOrClass`, `message?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actual` | `any` | `undefined` |
| `typeOrClass` | `string` \| (...`args`: `any`[]) => `any` | `undefined` |
| `message` | `string` | `'Wrong Type'` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[assertType](common_Bench.default.md#asserttype)

#### Defined in

[common/Bench.ts:271](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L271)

___

### beforeEach

▸ **beforeEach**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[beforeEach](common_Bench.default.md#beforeeach)

#### Defined in

[common/Bench.ts:318](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L318)

___

### bench

▸ **bench**(`name`, `body`, `iterations?`): `Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `body` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `iterations?` | `number` |

#### Returns

`Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Inherited from

[default](common_Bench.default.md).[bench](common_Bench.default.md#bench)

#### Defined in

[common/Bench.ts:364](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L364)

▸ **bench**(`only`, `name`, `body`, `iterations?`): `Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `name` | `string` |
| `body` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `iterations?` | `number` |

#### Returns

`Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Inherited from

[default](common_Bench.default.md).[bench](common_Bench.default.md#bench)

#### Defined in

[common/Bench.ts:369](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L369)

___

### error

▸ **error**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Overrides

[default](common_Bench.default.md).[error](common_Bench.default.md#error)

#### Defined in

[web/index.ts:15](https://github.com/zimmed/bench/blob/d62eac5/src/web/index.ts#L15)

___

### log

▸ **log**(`msg`, `eol?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `string` | `undefined` |
| `eol` | `boolean` | `true` |

#### Returns

`void`

#### Overrides

[default](common_Bench.default.md).[log](common_Bench.default.md#log)

#### Defined in

[web/index.ts:6](https://github.com/zimmed/bench/blob/d62eac5/src/web/index.ts#L6)

___

### printHeader

▸ **printHeader**(): `void`

#### Returns

`void`

#### Overrides

[default](common_Bench.default.md).[printHeader](common_Bench.default.md#printheader)

#### Defined in

[web/index.ts:20](https://github.com/zimmed/bench/blob/d62eac5/src/web/index.ts#L20)

___

### reset

▸ **reset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[default](common_Bench.default.md).[reset](common_Bench.default.md#reset)

#### Defined in

[common/Bench.ts:207](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L207)

___

### setUp

▸ **setUp**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[setUp](common_Bench.default.md#setup)

#### Defined in

[common/Bench.ts:312](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L312)

___

### tearDown

▸ **tearDown**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[tearDown](common_Bench.default.md#teardown)

#### Defined in

[common/Bench.ts:315](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L315)

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

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

#### Defined in

[common/Bench.ts:329](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L329)

▸ **trial**(`fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TrialFnAsync`](../modules/common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

#### Defined in

[common/Bench.ts:330](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L330)

▸ **trial**(`name`, `fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`TrialFn`](../modules/common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

#### Defined in

[common/Bench.ts:331](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L331)

▸ **trial**(`name`, `fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`TrialFnAsync`](../modules/common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

#### Defined in

[common/Bench.ts:332](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L332)

▸ **trial**(`only`, `fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `fn` | [`TrialFn`](../modules/common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

#### Defined in

[common/Bench.ts:333](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L333)

▸ **trial**(`only`, `fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `fn` | [`TrialFnAsync`](../modules/common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

#### Defined in

[common/Bench.ts:334](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L334)

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

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

#### Defined in

[common/Bench.ts:335](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L335)

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

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

#### Defined in

[common/Bench.ts:336](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L336)

___

### waitForComplete

▸ **waitForComplete**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[default](common_Bench.default.md).[waitForComplete](common_Bench.default.md#waitforcomplete)

#### Defined in

[common/Bench.ts:189](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L189)

___

### xbench

▸ **xbench**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[xbench](common_Bench.default.md#xbench)

#### Defined in

[common/Bench.ts:360](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L360)

___

### xtrial

▸ **xtrial**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[xtrial](common_Bench.default.md#xtrial)

#### Defined in

[common/Bench.ts:325](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L325)

___

### create

▸ `Static` **create**(`name?`): [`default`](common_Bench.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`default`](common_Bench.default.md)

#### Inherited from

[default](common_Bench.default.md).[create](common_Bench.default.md#create)

#### Defined in

[common/Bench.ts:110](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L110)

___

### overallScores

▸ `Static` **overallScores**(`results`): { `name`: `string` ; `place`: `number` ; `score`: `number` ; `winner`: `boolean`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | [`Summary`](../modules/common_Bench.md#summary)[][] |

#### Returns

{ `name`: `string` ; `place`: `number` ; `score`: `number` ; `winner`: `boolean`  }[]

#### Inherited from

[default](common_Bench.default.md).[overallScores](common_Bench.default.md#overallscores)

#### Defined in

[common/Bench.ts:114](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L114)