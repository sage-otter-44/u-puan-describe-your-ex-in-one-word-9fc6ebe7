import { mkdirSync, writeFileSync } from "node:fs";

// One word that sums up an ex: past their date, like milk.
const verdict = "expired";

// The gate wants exactly one word, 1-111 chars, not only whitespace.
const words = verdict.trim().split(/\s+/);
if (words.length !== 1 || verdict.length < 1 || verdict.length > 111) {
  throw new Error("entry must be exactly one word of 1-111 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", verdict, "utf8");
console.log(`wrote ${verdict.length}-character verdict: ${verdict}`);
