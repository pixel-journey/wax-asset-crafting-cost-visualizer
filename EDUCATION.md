# Education — three equal parts do not make 10000

> **Rung:** `npm test` passes. Each share is `floor(units * 10000 / total)`. Rows are **not** required to sum to 10000.  
> **The test is the rule.** Fee splitter that *does* require 10000: [px-treasury-incoming-fee-splitter](https://github.com/pixel-journey/px-treasury-incoming-fee-splitter).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Compute 3333+3333+3333 for three equal units |
| Intermediate | Explain the missing 1 bps and name rules |
| Masterclass | Separate visual shares from a craft transaction |

---

## Beginner — one scene

One unit each of wood, ore, cloth:

| Part | bps |
| --- | --- |
| wood | `3333n` |
| ore | `3333n` |
| cloth | `3333n` |
| sum | `9999n` |

The missing basis point is **not** given to the last part.

```bash
npm test
```

---

## Intermediate — rules

| Rule | Detail |
| --- | --- |
| Parts | 1 .. 8 |
| Name | 1 .. 16 of `a-z`, `0-9`, hyphen; unique |
| Units | positive |
| Share | `floor(units * 10000 / total)` |

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Force sum 10000 by padding last | not this lab |
| Duplicate names | refused |
| Zero units | refused |

### Exercises

1. Three equal units — each bps? (**3333**.)  
2. Sum? (**9999**.)  
3. Is a craft sent? (**No**.)

---

## Masterclass

This is a **cost visualization**. It does not debit inventory or call a blend contract.

---

## What this course will not teach

- Live crafting actions
- AtomicAssets blend rules
- That shares must sum to 10000 (use the treasury fee splitter for that)
