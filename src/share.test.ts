import { describe, expect, it } from "vitest";
import { shares } from "./share";

describe("cost shares", () => {
  it("does not force the basis points to 10000", () => {
    const split = shares([
      { name: "wood", units: 1n },
      { name: "ore", units: 1n },
      { name: "cloth", units: 1n },
    ]);
    expect(split.ok && split.rows.map((row) => row.bps)).toEqual([3333n, 3333n, 3333n]);
    if (split.ok) {
      const sum = split.rows.reduce((total, row) => total + row.bps, 0n);
      expect(sum).toBe(9999n);
    }
  });
});
