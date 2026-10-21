/**
 * Each part's share of a cost, in basis points.
 * Integer division, so the shares may not sum to 10000.
 */

const NAME = /^[a-z0-9-]{1,16}$/;

export type Part = { name: string; units: bigint };

export function shares(parts: readonly Part[]): { ok: false; reason: string } | { ok: true; rows: { name: string; units: bigint; bps: bigint }[] } {
  if (parts.length < 1 || parts.length > 8) return { ok: false, reason: "pass 1 to 8 parts" };
  let total = 0n;
  const seen = new Set<string>();
  for (const part of parts) {
    if (!NAME.test(part.name)) return { ok: false, reason: `${part.name} is not a part name` };
    if (seen.has(part.name)) return { ok: false, reason: `${part.name} is repeated` };
    if (part.units <= 0n) return { ok: false, reason: "units must be positive" };
    seen.add(part.name);
    total += part.units;
  }
  const rows = parts.map((part) => ({ name: part.name, units: part.units, bps: (part.units * 10_000n) / total }));
  return { ok: true, rows };
}
