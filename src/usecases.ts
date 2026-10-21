import { ATOMIC_ORIGIN } from "./api";
import { shares } from "./share";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const split = shares([
  { name: "wood", units: 1n },
  { name: "ore", units: 1n },
  { name: "cloth", units: 1n },
]);
if (!split.ok) throw new Error(split.reason);
const rows = split;

export const USE_CASES: UseCase[] = [
  {
    title: "A template is not a bill of materials",
    detail: "Three equal parts are 3333 bps each. They sum to 9999. The template request is not sent.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/templates/pixeljourney/1`, executed: false },
    transaction: null,
  },
  {
    title: "No craft is sent",
    detail: "A share is not an action. Nothing is blended or burned.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets/1`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  const sum = rows.rows.reduce((total, row) => total + row.bps, 0n);
  if (sum !== 9999n) throw new Error(sum.toString());
}
