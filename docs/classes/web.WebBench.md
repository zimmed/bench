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
- [nextTick](web.WebBench.md#nexttick)
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
- [finished](web.WebBench.md#finished)
- [log](web.WebBench.md#log)
- [printHeader](web.WebBench.md#printheader)
- [reset](web.WebBench.md#reset)
- [setUp](web.WebBench.md#setup)
- [tearDown](web.WebBench.md#teardown)
- [timedBench](web.WebBench.md#timedbench)
- [trial](web.WebBench.md#trial)
- [waitForComplete](web.WebBench.md#waitforcomplete)
- [xbench](web.WebBench.md#xbench)
- [xtimedBench](web.WebBench.md#xtimedbench)
- [xtrial](web.WebBench.md#xtrial)
- [create](web.WebBench.md#create)
- [createAndUnpack](web.WebBench.md#createandunpack)
- [overallScores](web.WebBench.md#overallscores)
- [unpack](web.WebBench.md#unpack)

## Constructors

### constructor

• **new WebBench**(`name?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `'Benchmark Suite'` |

#### Inherited from

[default](common_Bench.default.md).[constructor](common_Bench.default.md#constructor)

#### Defined in

[src/common/Bench.ts:221](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L221)

## Properties

### logBuffer

• **logBuffer**: `string` = `''`

#### Defined in

[src/web/index.ts:6](https://github.com/zimmed/bench/blob/5f10a24/src/web/index.ts#L6)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[default](common_Bench.default.md).[name](common_Bench.default.md#name)

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

#### Inherited from

[default](common_Bench.default.md).[state](common_Bench.default.md#state)

#### Defined in

[src/common/Bench.ts:172](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L172)

___

### lock

▪ `Static` `Readonly` **lock**: () => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Inherited from

[default](common_Bench.default.md).[lock](common_Bench.default.md#lock)

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

#### Inherited from

[default](common_Bench.default.md).[nextTick](common_Bench.default.md#nexttick)

#### Defined in

[src/common/Bench.ts:119](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L119)

___

### package

▪ `Static` `Readonly` **package**: `string`

#### Inherited from

[default](common_Bench.default.md).[package](common_Bench.default.md#package)

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

#### Inherited from

[default](common_Bench.default.md).[afterEach](common_Bench.default.md#aftereach)

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

#### Inherited from

[default](common_Bench.default.md).[assert](common_Bench.default.md#assert)

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

#### Inherited from

[default](common_Bench.default.md).[assertEq](common_Bench.default.md#asserteq)

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

#### Inherited from

[default](common_Bench.default.md).[assertExists](common_Bench.default.md#assertexists)

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

#### Inherited from

[default](common_Bench.default.md).[assertGt](common_Bench.default.md#assertgt)

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

#### Inherited from

[default](common_Bench.default.md).[assertGte](common_Bench.default.md#assertgte)

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

#### Inherited from

[default](common_Bench.default.md).[assertLength](common_Bench.default.md#assertlength)

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

#### Inherited from

[default](common_Bench.default.md).[assertLt](common_Bench.default.md#assertlt)

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

#### Inherited from

[default](common_Bench.default.md).[assertLte](common_Bench.default.md#assertlte)

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

#### Inherited from

[default](common_Bench.default.md).[assertNotEq](common_Bench.default.md#assertnoteq)

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

#### Inherited from

[default](common_Bench.default.md).[assertNotExists](common_Bench.default.md#assertnotexists)

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

#### Inherited from

[default](common_Bench.default.md).[assertNotLength](common_Bench.default.md#assertnotlength)

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

#### Inherited from

[default](common_Bench.default.md).[assertNotType](common_Bench.default.md#assertnottype)

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

#### Inherited from

[default](common_Bench.default.md).[assertType](common_Bench.default.md#asserttype)

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

#### Inherited from

[default](common_Bench.default.md).[beforeEach](common_Bench.default.md#beforeeach)

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

#### Inherited from

[default](common_Bench.default.md).[bench](common_Bench.default.md#bench)

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

#### Inherited from

[default](common_Bench.default.md).[bench](common_Bench.default.md#bench)

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

#### Overrides

[default](common_Bench.default.md).[error](common_Bench.default.md#error)

#### Defined in

[src/web/index.ts:17](https://github.com/zimmed/bench/blob/5f10a24/src/web/index.ts#L17)

___

### finished

▸ **finished**(): `void`

#### Returns

`void`

#### Inherited from

[default](common_Bench.default.md).[finished](common_Bench.default.md#finished)

#### Defined in

[src/common/Bench.ts:208](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L208)

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

[src/web/index.ts:8](https://github.com/zimmed/bench/blob/5f10a24/src/web/index.ts#L8)

___

### printHeader

▸ **printHeader**(): `void`

#### Returns

`void`

#### Overrides

[default](common_Bench.default.md).[printHeader](common_Bench.default.md#printheader)

#### Defined in

[src/web/index.ts:22](https://github.com/zimmed/bench/blob/5f10a24/src/web/index.ts#L22)

___

### reset

▸ **reset**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[default](common_Bench.default.md).[reset](common_Bench.default.md#reset)

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

#### Inherited from

[default](common_Bench.default.md).[setUp](common_Bench.default.md#setup)

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

#### Inherited from

[default](common_Bench.default.md).[tearDown](common_Bench.default.md#teardown)

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

#### Inherited from

[default](common_Bench.default.md).[timedBench](common_Bench.default.md#timedbench)

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

#### Inherited from

[default](common_Bench.default.md).[timedBench](common_Bench.default.md#timedbench)

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

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

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

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

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

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

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

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

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

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

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

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

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

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

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

#### Inherited from

[default](common_Bench.default.md).[trial](common_Bench.default.md#trial)

#### Defined in

[src/common/Bench.ts:378](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L378)

___

### waitForComplete

▸ **waitForComplete**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[default](common_Bench.default.md).[waitForComplete](common_Bench.default.md#waitforcomplete)

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

#### Inherited from

[default](common_Bench.default.md).[xbench](common_Bench.default.md#xbench)

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

#### Inherited from

[default](common_Bench.default.md).[xtimedBench](common_Bench.default.md#xtimedbench)

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

#### Inherited from

[default](common_Bench.default.md).[xtrial](common_Bench.default.md#xtrial)

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

#### Inherited from

[default](common_Bench.default.md).[create](common_Bench.default.md#create)

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

#### Inherited from

[default](common_Bench.default.md).[createAndUnpack](common_Bench.default.md#createandunpack)

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

#### Inherited from

[default](common_Bench.default.md).[overallScores](common_Bench.default.md#overallscores)

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

#### Inherited from

[default](common_Bench.default.md).[unpack](common_Bench.default.md#unpack)

#### Defined in

[src/common/Bench.ts:131](https://github.com/zimmed/bench/blob/5f10a24/src/common/Bench.ts#L131)
