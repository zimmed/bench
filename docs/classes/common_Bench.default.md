[@zimmed/bench](../README.md) / [Exports](../modules.md) / [common/Bench](../modules/common_Bench.md) / default

# Class: default

[common/Bench](../modules/common_Bench.md).default

## Hierarchy

- **`default`**

  ↳ [`NodeBench`](node.NodeBench.md)

  ↳ [`WebBench`](web.WebBench.md)

## Implements

- [`IBench`](../interfaces/common_Bench.IBench.md)

## Table of contents

### Constructors

- [constructor](common_Bench.default.md#constructor)

### Properties

- [name](common_Bench.default.md#name)
- [state](common_Bench.default.md#state)
- [lock](common_Bench.default.md#lock)
- [package](common_Bench.default.md#package)

### Accessors

- [lock](common_Bench.default.md#lock)
- [package](common_Bench.default.md#package)

### Methods

- [afterEach](common_Bench.default.md#aftereach)
- [assert](common_Bench.default.md#assert)
- [assertEq](common_Bench.default.md#asserteq)
- [assertExists](common_Bench.default.md#assertexists)
- [assertGt](common_Bench.default.md#assertgt)
- [assertGte](common_Bench.default.md#assertgte)
- [assertLength](common_Bench.default.md#assertlength)
- [assertLt](common_Bench.default.md#assertlt)
- [assertLte](common_Bench.default.md#assertlte)
- [assertNotEq](common_Bench.default.md#assertnoteq)
- [assertNotExists](common_Bench.default.md#assertnotexists)
- [assertNotLength](common_Bench.default.md#assertnotlength)
- [assertNotType](common_Bench.default.md#assertnottype)
- [assertType](common_Bench.default.md#asserttype)
- [beforeEach](common_Bench.default.md#beforeeach)
- [bench](common_Bench.default.md#bench)
- [error](common_Bench.default.md#error)
- [log](common_Bench.default.md#log)
- [printHeader](common_Bench.default.md#printheader)
- [reset](common_Bench.default.md#reset)
- [setUp](common_Bench.default.md#setup)
- [tearDown](common_Bench.default.md#teardown)
- [trial](common_Bench.default.md#trial)
- [waitForComplete](common_Bench.default.md#waitforcomplete)
- [xbench](common_Bench.default.md#xbench)
- [xtrial](common_Bench.default.md#xtrial)
- [create](common_Bench.default.md#create)
- [overallScores](common_Bench.default.md#overallscores)

## Constructors

### constructor

• **new default**(`name?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `'Benchmark'` |

#### Defined in

[common/Bench.ts:180](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L180)

## Properties

### name

• `Readonly` **name**: `string`

#### Defined in

[common/Bench.ts:146](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L146)

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

#### Defined in

[common/Bench.ts:148](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L148)

___

### lock

▪ `Static` `Readonly` **lock**: () => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Defined in

[common/Bench.ts:108](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L108)

___

### package

▪ `Static` **package**: `string`

#### Defined in

[common/Bench.ts:107](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L107)

## Accessors

### lock

• `get` **lock**(): () => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Returns

() => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Defined in

[common/Bench.ts:138](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L138)

___

### package

• `get` **package**(): `string`

#### Returns

`string`

#### Defined in

[common/Bench.ts:142](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L142)

## Methods

### afterEach

▸ **afterEach**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[afterEach](../interfaces/common_Bench.IBench.md#aftereach)

#### Defined in

[common/Bench.ts:321](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L321)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assert](../interfaces/common_Bench.IBench.md#assert)

#### Defined in

[common/Bench.ts:221](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L221)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertEq](../interfaces/common_Bench.IBench.md#asserteq)

#### Defined in

[common/Bench.ts:241](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L241)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertExists](../interfaces/common_Bench.IBench.md#assertexists)

#### Defined in

[common/Bench.ts:253](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L253)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertGt](../interfaces/common_Bench.IBench.md#assertgt)

#### Defined in

[common/Bench.ts:299](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L299)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertGte](../interfaces/common_Bench.IBench.md#assertgte)

#### Defined in

[common/Bench.ts:302](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L302)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertLength](../interfaces/common_Bench.IBench.md#assertlength)

#### Defined in

[common/Bench.ts:259](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L259)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertLt](../interfaces/common_Bench.IBench.md#assertlt)

#### Defined in

[common/Bench.ts:308](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L308)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertLte](../interfaces/common_Bench.IBench.md#assertlte)

#### Defined in

[common/Bench.ts:305](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L305)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertNotEq](../interfaces/common_Bench.IBench.md#assertnoteq)

#### Defined in

[common/Bench.ts:247](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L247)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertNotExists](../interfaces/common_Bench.IBench.md#assertnotexists)

#### Defined in

[common/Bench.ts:256](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L256)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertNotLength](../interfaces/common_Bench.IBench.md#assertnotlength)

#### Defined in

[common/Bench.ts:265](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L265)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertNotType](../interfaces/common_Bench.IBench.md#assertnottype)

#### Defined in

[common/Bench.ts:285](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L285)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[assertType](../interfaces/common_Bench.IBench.md#asserttype)

#### Defined in

[common/Bench.ts:271](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L271)

___

### beforeEach

▸ **beforeEach**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[beforeEach](../interfaces/common_Bench.IBench.md#beforeeach)

#### Defined in

[common/Bench.ts:318](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L318)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[bench](../interfaces/common_Bench.IBench.md#bench)

#### Defined in

[common/Bench.ts:367](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L367)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[bench](../interfaces/common_Bench.IBench.md#bench)

#### Defined in

[common/Bench.ts:372](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L372)

___

### error

▸ **error**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[error](../interfaces/common_Bench.IBench.md#error)

#### Defined in

[common/Bench.ts:176](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L176)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[log](../interfaces/common_Bench.IBench.md#log)

#### Defined in

[common/Bench.ts:172](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L172)

___

### printHeader

▸ **printHeader**(): `void`

#### Returns

`void`

#### Defined in

[common/Bench.ts:184](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L184)

___

### reset

▸ **reset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[common/Bench.ts:207](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L207)

___

### setUp

▸ **setUp**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[setUp](../interfaces/common_Bench.IBench.md#setup)

#### Defined in

[common/Bench.ts:312](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L312)

___

### tearDown

▸ **tearDown**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[tearDown](../interfaces/common_Bench.IBench.md#teardown)

#### Defined in

[common/Bench.ts:315](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L315)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[trial](../interfaces/common_Bench.IBench.md#trial)

#### Defined in

[common/Bench.ts:329](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L329)

▸ **trial**(`fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TrialFnAsync`](../modules/common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[trial](../interfaces/common_Bench.IBench.md#trial)

#### Defined in

[common/Bench.ts:330](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L330)

▸ **trial**(`name`, `fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`TrialFn`](../modules/common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[trial](../interfaces/common_Bench.IBench.md#trial)

#### Defined in

[common/Bench.ts:331](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L331)

▸ **trial**(`name`, `fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`TrialFnAsync`](../modules/common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[trial](../interfaces/common_Bench.IBench.md#trial)

#### Defined in

[common/Bench.ts:332](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L332)

▸ **trial**(`only`, `fn`, `isAsync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `fn` | [`TrialFn`](../modules/common_Bench.md#trialfn) |
| `isAsync?` | ``false`` |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[trial](../interfaces/common_Bench.IBench.md#trial)

#### Defined in

[common/Bench.ts:333](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L333)

▸ **trial**(`only`, `fn`, `isAsync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `fn` | [`TrialFnAsync`](../modules/common_Bench.md#trialfnasync) |
| `isAsync` | ``true`` |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[trial](../interfaces/common_Bench.IBench.md#trial)

#### Defined in

[common/Bench.ts:334](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L334)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[trial](../interfaces/common_Bench.IBench.md#trial)

#### Defined in

[common/Bench.ts:335](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L335)

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

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[trial](../interfaces/common_Bench.IBench.md#trial)

#### Defined in

[common/Bench.ts:336](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L336)

___

### waitForComplete

▸ **waitForComplete**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[common/Bench.ts:189](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L189)

___

### xbench

▸ **xbench**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[xbench](../interfaces/common_Bench.IBench.md#xbench)

#### Defined in

[common/Bench.ts:363](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L363)

___

### xtrial

▸ **xtrial**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[xtrial](../interfaces/common_Bench.IBench.md#xtrial)

#### Defined in

[common/Bench.ts:325](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L325)

___

### create

▸ `Static` **create**(`name?`): [`default`](common_Bench.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`default`](common_Bench.default.md)

#### Defined in

[common/Bench.ts:110](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L110)

___

### overallScores

▸ `Static` **overallScores**(`results`): { `name`: `string` ; `place`: `number` ; `score`: `number` ; `winner`: `boolean`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | [`Summary`](../modules/common_Bench.md#summary)[][] |

#### Returns

{ `name`: `string` ; `place`: `number` ; `score`: `number` ; `winner`: `boolean`  }[]

#### Defined in

[common/Bench.ts:114](https://github.com/zimmed/bench/blob/0c20fc7/src/common/Bench.ts#L114)
