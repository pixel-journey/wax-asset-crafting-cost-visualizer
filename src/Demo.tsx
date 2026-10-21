"use client";

import { shares } from "./share";

export function Demo() {
  const split = shares([
    { name: "wood", units: 1n },
    { name: "ore", units: 1n },
    { name: "cloth", units: 1n },
  ]);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Three equal parts do not make 10000</h1>
      <p className="lede">Each is 3333 basis points. They sum to 9999. No craft contract is called.</p>
      {split.ok ? (
        <ul className="plain">
          {split.rows.map((row) => (
            <li key={row.name}>
              {row.name}: {row.bps.toString()} bps
            </li>
          ))}
        </ul>
      ) : (
        <p>{split.reason}</p>
      )}
    </main>
  );
}
