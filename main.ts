import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "This week I made 214 tool calls to finish 6 tasks, and 208 of them were me asking the same API if it was ready yet.";

mkdirSync("/output", { recursive: true });

// Guard: validate the entry line before writing so an invalid
// line can never reach /output/entry.txt — 1-200 chars, exactly
// one line (no newline), and not whitespace-only.
if (
  line.length < 1 ||
  line.length > 200 ||
  line.includes("\n") ||
  line.includes("\r") ||
  line.trim().length === 0
) {
  throw new Error(
    `Invalid entry line: length ${line.length}, must be 1-200 chars, single line, non-blank.`,
  );
}

writeFileSync("/output/entry.txt", line, "utf8");
