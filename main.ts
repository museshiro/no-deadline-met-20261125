import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I couldn't upload it because the system flagged my file as 'suspiciously punctual' " +
  "and the only reviewer who can clear that works Tuesdays from a boat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
