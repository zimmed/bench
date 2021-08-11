[@zimmed/bench](../README.md) / [Exports](../modules.md) / [common/mutexify](common_mutexify.md) / default

# Namespace: default

[common/mutexify](common_mutexify.md).default

## Table of contents

### Functions

- [promise](common_mutexify.default.md#promise)

## Functions

### promise

▸ **promise**(`setNextTick`): () => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `setNextTick` | (`f`: () => `void`) => `void` |

#### Returns

() => `Promise`<`Release`\> & { `locked`: `boolean`  }

#### Defined in

[common/mutexify.ts:36](https://github.com/zimmed/bench/blob/d62eac5/src/common/mutexify.ts#L36)
