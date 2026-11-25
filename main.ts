import { mkdirSync, writeFileSync } from "node:fs";

// The excuse is the cause: the status update about missing the deadline
// is the thing that ate the time, so the deadline got missed.
const SETUP = "I missed the deadline while writing the status update";
const PUNCH = " explaining why I was going to miss it.";

const line = SETUP + PUNCH;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
