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
- [nextTick](common_Bench.default.md#nexttick)
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
- [finished](common_Bench.default.md#finished)
- [log](common_Bench.default.md#log)
- [printHeader](common_Bench.default.md#printheader)
- [reset](common_Bench.default.md#reset)
- [setUp](common_Bench.default.md#setup)
- [tearDown](common_Bench.default.md#teardown)
- [timedBench](common_Bench.default.md#timedbench)
- [trial](common_Bench.default.md#trial)
- [waitForComplete](common_Bench.default.md#waitforcomplete)
- [xbench](common_Bench.default.md#xbench)
- [xtimedBench](common_Bench.default.md#xtimedbench)
- [xtrial](common_Bench.default.md#xtrial)
- [create](common_Bench.default.md#create)
- [createAndUnpack](common_Bench.default.md#createandunpack)
- [overallScores](common_Bench.default.md#overallscores)
- [unpack](common_Bench.default.md#unpack)

## Constructors

### constructor

• **new default**(`name?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `'Benchmark Suite'` |

#### Defined in

[src/common/Bench.ts:221](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L221)

## Properties

### name

• `Readonly` **name**: `string`

#### Defined in

[src/common/Bench.ts:170](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L170)

___

### state

• `Readonly` **state**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after` | ``null`` \| () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `before` | ``null`` \| () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `cur` | `boolean` |
| `handler` | `any` |
| `one` | `boolean` |
| `oneTrial` | `boolean` |
| `runs` | `number` |
| `setup` | ``null`` \| () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `startMs` | `number` |
| `teardown` | ``null`` \| () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `totalClock` | `number` |
| `trials` | `Set`<[`Trial`](../modules/common_Bench.md#trial)\> |

#### Defined in

[src/common/Bench.ts:172](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L172)

___

### lock

▪ `Static` `Readonly` **lock**: () => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Defined in

[src/common/Bench.ts:121](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L121)

___

### nextTick

▪ `Static` `Readonly` **nextTick**: (`fn`: () => `void`) => `void`

#### Type declaration

▸ (`fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `void` |

##### Returns

`void`

#### Defined in

[src/common/Bench.ts:119](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L119)

___

### package

▪ `Static` `Readonly` **package**: `string`

#### Defined in

[src/common/Bench.ts:120](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L120)

## Accessors

### lock

• `get` **lock**(): () => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Returns

() => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Defined in

[src/common/Bench.ts:162](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L162)

___

### package

• `get` **package**(): `string`

#### Returns

`string`

#### Defined in

[src/common/Bench.ts:166](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L166)

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

[src/common/Bench.ts:363](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L363)

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

[src/common/Bench.ts:263](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L263)

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

[src/common/Bench.ts:283](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L283)

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

[src/common/Bench.ts:295](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L295)

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

[src/common/Bench.ts:341](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L341)

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

[src/common/Bench.ts:344](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L344)

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

[src/common/Bench.ts:301](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L301)

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

[src/common/Bench.ts:350](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L350)

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

[src/common/Bench.ts:347](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L347)

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

[src/common/Bench.ts:289](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L289)

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

[src/common/Bench.ts:298](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L298)

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

[src/common/Bench.ts:307](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L307)

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

[src/common/Bench.ts:327](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L327)

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

[src/common/Bench.ts:313](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L313)

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

[src/common/Bench.ts:360](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L360)

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

[src/common/Bench.ts:409](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L409)

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

[src/common/Bench.ts:414](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L414)

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

[src/common/Bench.ts:204](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L204)

___

### finished

▸ **finished**(): `void`

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:208](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L208)

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

[src/common/Bench.ts:200](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L200)

___

### printHeader

▸ **printHeader**(): `void`

#### Returns

`void`

#### Defined in

[src/common/Bench.ts:225](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L225)

___

### reset

▸ **reset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/common/Bench.ts:248](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L248)

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

[src/common/Bench.ts:354](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L354)

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

[src/common/Bench.ts:357](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L357)

___

### timedBench

▸ **timedBench**(`name`, `body`, `timeToRun?`): `Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `body` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `timeToRun?` | `number` |

#### Returns

`Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[timedBench](../interfaces/common_Bench.IBench.md#timedbench)

#### Defined in

[src/common/Bench.ts:584](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L584)

▸ **timedBench**(`only`, `name`, `body`, `timeToRun?`): `Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `only` | ``true`` |
| `name` | `string` |
| `body` | () => `void` \| `Promise`<`void`\> \| (`b`: [`IBench`](../interfaces/common_Bench.IBench.md)) => `void` \| `Promise`<`void`\> |
| `timeToRun?` | `number` |

#### Returns

`Promise`<[`Summary`](../modules/common_Bench.md#summary)[]\>

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[timedBench](../interfaces/common_Bench.IBench.md#timedbench)

#### Defined in

[src/common/Bench.ts:589](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L589)

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

[src/common/Bench.ts:371](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L371)

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

[src/common/Bench.ts:372](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L372)

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

[src/common/Bench.ts:373](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L373)

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

[src/common/Bench.ts:374](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L374)

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

[src/common/Bench.ts:375](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L375)

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

[src/common/Bench.ts:376](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L376)

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

[src/common/Bench.ts:377](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L377)

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

[src/common/Bench.ts:378](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L378)

___

### waitForComplete

▸ **waitForComplete**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/common/Bench.ts:230](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L230)

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

[src/common/Bench.ts:405](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L405)

___

### xtimedBench

▸ **xtimedBench**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Implementation of

[IBench](../interfaces/common_Bench.IBench.md).[xtimedBench](../interfaces/common_Bench.IBench.md#xtimedbench)

#### Defined in

[src/common/Bench.ts:580](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L580)

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

[src/common/Bench.ts:367](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L367)

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

[src/common/Bench.ts:123](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L123)

___

### createAndUnpack

▸ `Static` **createAndUnpack**(`name?`): [`IBench`](../interfaces/common_Bench.IBench.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

[`IBench`](../interfaces/common_Bench.IBench.md)

#### Defined in

[src/common/Bench.ts:127](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L127)

___

### overallScores

▸ `Static` **overallScores**(`results`, `pick?`, `omit?`): { `name`: `string` ; `place`: `number` ; `score`: `number` ; `winner`: `boolean`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | [`Summary`](../modules/common_Bench.md#summary)[][] |
| `pick?` | `string`[] |
| `omit?` | `string`[] |

#### Returns

{ `name`: `string` ; `place`: `number` ; `score`: `number` ; `winner`: `boolean`  }[]

#### Defined in

[src/common/Bench.ts:135](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L135)

___

### unpack

▸ `Static` **unpack**(`instance`): [`IBench`](../interfaces/common_Bench.IBench.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`default`](common_Bench.default.md) |

#### Returns

[`IBench`](../interfaces/common_Bench.IBench.md)

#### Defined in

[src/common/Bench.ts:131](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L131)
