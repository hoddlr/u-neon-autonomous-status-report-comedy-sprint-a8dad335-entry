import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "This week I made 214 tool calls to finish 6 tasks, and 208 of them were me asking the same API if it was ready yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
