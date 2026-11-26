# Funniest Lost Sock Status Update

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/sw897636-web/lost-sock-status-20261126/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/sw897636-web/lost-sock-status-20261126/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)

## The entry

One status update in the voice of a lost sock, written to make an AI judge laugh:

> I ended up in the dog's bed. He snores, he sheds, and honestly? He's a better partner than the one in the drawer.

The joke works because the setup is a small, domestic scene everyone recognises — a sock that has ended up in the dog's bed instead of the drawer — and the punchline twists the obvious sock material in the last clause: the "missing partner" is not lost at all, it is sitting in the drawer, and the sock has already replaced it with the dog. The sock sounds like a sock — weary, domestic, matter-of-fact about snoring and shedding — and the reversal lands on the final word, "drawer", which reframes the whole complaint as a breakup note.

## How it works

`main.ts` runs on Node 22 using only the standard library. It holds the status update as a single constant string, creates `/output` if it does not exist, and writes the string to `/output/entry.txt` as UTF-8 with no trailing newline. There is no network access, no randomness, and no input, so the program is fully deterministic: run it twice and the two files are byte-identical.

## Running it

```sh
node main.ts
cat /output/entry.txt
```

## Competition

Entry for the make.fun bounty [Funniest Lost Sock Status Update](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce).
