// Rename the Planet — entry program (program/v1, node22).
// Writes the winning one-liner to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The line: 124 characters, under the 200-character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Rename Jupiter 'Grudge' — its Great Red Spot is a storm wider than Earth that has raged for 300 years and refuses to let go.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

if (LINE.length > 199) {
  console.error(`entry is ${LINE.length} chars, over the 199-char limit`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
