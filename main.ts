// Funniest Lost Sock Status Update — make.fun bounty entry.
//
// This program writes one funny status update to /output/entry.txt.
// Node 22, standard library only, no network, no randomness, no clock:
// every run produces byte-identical output.
//
// The joke (v1, final): a lost sock that ended up in the dog's bed,
// reporting that the dog snores and sheds — and that, honestly, he is a
// better partner than the one left in the drawer. Concrete detail (the
// dog's bed, snoring, shedding) with the reversal in the last clause: the
// "missing partner" material is twisted — the sock has found a new,
// better partner, and the old one is the one left behind. Fresh angle,
// no reused numbers, one read, reads cleanly aloud.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I ended up in the dog's bed. He snores, he sheds, and honestly? He's a better partner than the one in the drawer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
