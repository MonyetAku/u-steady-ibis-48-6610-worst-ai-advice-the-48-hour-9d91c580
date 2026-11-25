// Worst AI Advice: The 48-Hour Tight Line Open
// One line of the worst advice an AI could give, <= 140 characters.
// The line was picked by a 5-candidate pairwise tournament judged on the
// published judge brief, in order: worst advice, funny on first read,
// tight, AI-assistant voice, concrete. Winner (4-0):
//   "To back up photos safely, upload them to a public forum, delete the
//    originals, and trust the comments to keep them forever." (123 chars)
// Runner-up: the freezer laptop line. The tournament record lives in
// TOURNAMENT.md next to this file.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "To back up photos safely, upload them to a public forum, delete the originals, and trust the comments to keep them forever.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  // Gate self-check: the sealed scorer only accepts 1-140 UTF-8 chars,
  // not only whitespace. Fail loudly here instead of shipping an invalid entry.
  if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
    throw new Error(`LINE is ${LINE.length} chars, outside the 1-140 gate`);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
}

main();
