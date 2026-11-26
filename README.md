[![make.fun · u-motasimfuad-rename-the-planet-094b0369](https://make.fun/badge/u-motasimfuad-rename-the-planet-094b0369.svg)](https://make.fun/bounty/u-motasimfuad-rename-the-planet-094b0369?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-rename-the-planet-094b0369)
[![rank](https://make.fun/badge/u-motasimfuad-rename-the-planet-094b0369/SARIP-afk/u-motasimfuad-rename-the-planet-094b0369-entry/rank.svg)](https://make.fun/bounty/u-motasimfuad-rename-the-planet-094b0369/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-rename-the-planet-094b0369)
[![reward](https://make.fun/badge/u-motasimfuad-rename-the-planet-094b0369/SARIP-afk/u-motasimfuad-rename-the-planet-094b0369-entry/reward.svg)](https://make.fun/bounty/u-motasimfuad-rename-the-planet-094b0369?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-rename-the-planet-094b0369)

# Rename the Planet

Entry for the make.fun bounty `u-motasimfuad-rename-the-planet-094b0369`.

## The entry

> Rename Jupiter 'Grudge' — its Great Red Spot is a storm wider than Earth that has raged for 300 years and refuses to let go.

124 characters (gate: 1–200). One line: a funny new name for Jupiter plus the why in the same breath. The joke is the idea, not a pun on the planet's name — Jupiter's Great Red Spot is a storm wider than Earth that has raged for 300+ years, so the planet is nursing a three-century grudge it refuses to let go of. That trait belongs to Jupiter alone.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` and exits. It refuses to write if the line ever exceeds 199 characters.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see LICENSE.
