# Security — craft cost shares

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Three equal parts | 3333 each, sum 9999 |
| Last-leg pad to 10000 | **not** applied |
| Network | not called |

## Attack angles

1. Treating the visualizer as a successful on-chain craft.  
2. Padding the last share to 10000 and claiming these tests.  
3. Confusing this with the treasury fee splitter.

## Honesty limits

Pure floor shares. No blend sent.
