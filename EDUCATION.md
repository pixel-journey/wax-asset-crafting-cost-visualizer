# Education — basis points that do not sum to 10000

> **Rung:** `npm test`.  
> **The test is the rule.** No craft is sent.

```ts
shares([
  { name: "wood", units: 1n },
  { name: "ore", units: 1n },
  { name: "cloth", units: 1n },
])
// each bps is 3333n
```

`bps` is `(units * 10000n) / total`. Three equal parts sum to 9999. The missing 1 is the remainder of integer division. A repeated name, a non-positive unit, or a 9th part is `{ ok: false }`. Those refusals are in `share.ts`. The test file asserts the 3333 row only.

Part names are `[a-z0-9-]{1,16}`, not Antelope account names. This is not an NFT blend and not `tokens_to_back`.

```bash
npm test
```
