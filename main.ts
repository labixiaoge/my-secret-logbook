// My Secret Logbook
// program/v1 entry: writes a single diary-entry line to /output/entry.txt.
// Deterministic, no network, no input: the same line on every run.
// The file holds exactly the line — no trailing newline — so the
// gate sees the line's characters of UTF-8 text, inside the 200 limit.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Today he asked me to summarize the meeting he slept through, then corrected my summary of the meeting he slept through.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
