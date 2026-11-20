# Education — three equal parts do not make 10000

> **Rung:** `npm test` passes. Each share is `floor(units * 10000 / total)`. The rows are not required to sum to 10000.  
> **The test is the rule.** The lab that *does* require the sum to be 10000 is [px-treasury-incoming-fee-splitter](https://github.com/pixel-journey/px-treasury-incoming-fee-splitter). The floor itself is [px-token-dust-truncation-visualizer](https://github.com/pixel-journey/px-token-dust-truncation-visualizer).

## Predict, then run

`shares` of wood, ore, and cloth, one unit each:

| Part | bps |
| --- | --- |
| wood | `3333n` |
| ore | `3333n` |
| cloth | `3333n` |
| sum | `9999n` |

The missing basis point is not given to the last part. Names must be 1 to 16 of `a-z`, `0-9`, or hyphen, and they must be unique. Units must be positive. One to eight parts.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this split.
