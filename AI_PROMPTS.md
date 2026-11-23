# AI handoff — equal craft cost shares

## Non-negotiables

1. Each share is `floor(units * 10000 / total)`. Rows are **not** required to sum to 10000.
2. Wood, ore, cloth at one unit each → **3333** bps each, sum **9999**. The missing basis point is not given to the last part.
3. Names are 1..16 of `a-z`, `0-9`, or hyphen, and unique. Units must be positive. One to eight parts.
4. No craft is sent. This is not the fee-splitter lab (that one *does* require sum 10000).
5. HTTP stays `executed: false`.

## Prompt seeds

- "Three equal units — each bps and the sum."
- "Is the missing point assigned to the last part?"
- "Contrast with px-treasury-incoming-fee-splitter."

## Do not

- Force sum 10000 by padding the last leg and still cite these tests.
- Broadcast a blend or craft from this visualizer.
