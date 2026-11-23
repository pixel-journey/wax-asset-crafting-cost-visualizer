# Sources

| Source | Use |
| --- | --- |
| [fee splitter](https://github.com/pixel-journey/px-treasury-incoming-fee-splitter) | Requires sum **10000** (different product) |
| [dust visualizer](https://github.com/pixel-journey/px-token-dust-truncation-visualizer) | Floor truncation sibling |
| [docs.wax.io](https://docs.wax.io/) | Product context |

## Locked by tests

- `floor(units * 10000 / total)` per part.
- Three equal units → 3333 + 3333 + 3333 = 9999.
- No craft transaction.
