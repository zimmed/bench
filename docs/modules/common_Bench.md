[@zimmed/bench](../README.md) / [Exports](../modules.md) / common/Bench

# Module: common/Bench

## Table of contents

### Classes

- [default](../classes/common_Bench.default.md)

### Interfaces

- [IBench](../interfaces/common_Bench.IBench.md)

### Type aliases

- [Future](common_Bench.md#future)
- [Summary](common_Bench.md#summary)
- [Trial](common_Bench.md#trial)
- [TrialBench](common_Bench.md#trialbench)
- [TrialFn](common_Bench.md#trialfn)
- [TrialFnAsync](common_Bench.md#trialfnasync)

### Functions

- [\_singletonMethods](common_Bench.md#_singletonmethods)

## Type aliases

### Future

Ƭ **Future**<`T`\>: `Promise`<`T`\> & { `catch`: <R\>(`fn?`: (`e`: `any`) => `R`) => `R` extends [`Future`](common_Bench.md#future)<`X`\> ? [`Future`](common_Bench.md#future)<`X`\> : `R` extends `Promise`<`X`\> ? [`Future`](common_Bench.md#future)<`X`\> : [`Future`](common_Bench.md#future)<`R`\> ; `finally`: (`fn?`: () => `void`) => `void` ; `next`: <R\>(`fn?`: (`r`: `any`) => `R`) => `R` extends [`Future`](common_Bench.md#future)<`X`\> ? [`Future`](common_Bench.md#future)<`X`\> : `R` extends `Promise`<`X`\> ? [`Future`](common_Bench.md#future)<`X`\> : [`Future`](common_Bench.md#future)<`R`\>  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[common/Bench.ts:6](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L6)

___

### Summary

Ƭ **Summary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `avg` | `number` |
| `dev` | `number` |
| `name` | `string` |
| `score` | `number` |
| `v` | `number` |

#### Defined in

[common/Bench.ts:30](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L30)

___

### Trial

Ƭ **Trial**: { `async`: ``false`` ; `fn`: [`TrialFn`](common_Bench.md#trialfn) ; `name`: `string` ; `only`: `boolean`  } \| { `async`: ``true`` ; `fn`: [`TrialFnAsync`](common_Bench.md#trialfnasync) ; `name`: `string` ; `only`: `boolean`  }

#### Defined in

[common/Bench.ts:21](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L21)

___

### TrialBench

Ƭ **TrialBench**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end` | () => `void` |
| `log` | (`msg`: `string`, `eol?`: `boolean`) => `void` |
| `start` | () => `void` |

#### Defined in

[common/Bench.ts:16](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L16)

___

### TrialFn

Ƭ **TrialFn**: () => `void` \| (`b`: [`TrialBench`](common_Bench.md#trialbench)) => `void`

#### Defined in

[common/Bench.ts:18](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L18)

___

### TrialFnAsync

Ƭ **TrialFnAsync**: () => `void` \| `Promise`<`void`\> \| (`b`: [`TrialBench`](common_Bench.md#trialbench)) => `void` \| `Promise`<`void`\>

#### Defined in

[common/Bench.ts:19](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L19)

## Functions

### \_singletonMethods

▸ **_singletonMethods**(`singleton?`): [`IBench`](../interfaces/common_Bench.IBench.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `singleton` | [`default`](../classes/common_Bench.default.md) |

#### Returns

[`IBench`](../interfaces/common_Bench.IBench.md)

#### Defined in

[common/Bench.ts:518](https://github.com/zimmed/bench/blob/d62eac5/src/common/Bench.ts#L518)
