# Baby Guy — landing page

One page, English, built with [Astro](https://astro.build). Single goal: send the visitor
into the game. Every gold button on the page leads to `GAME_URL` — nothing else is asked
of them, there is no form left to fill.

Live at **https://babyguy.dev** (Vercel, static). The game it points at is
**https://play.babyguy.dev** (Fly.io, `tumble-bg-jeu`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Page order

| # | Section | File |
|---|---------|------|
| 1 | Hero — Bet. Run. Cash out. | `src/components/Hero.astro` |
| 2 | Trailer, full width, autoplay muted + sound toggle | `src/components/Trailer.astro` |
| 3 | How it works + **the three formats** + prize table | `src/components/HowToPlay.astro`, `src/components/Formats.astro` |
| 4 | Short play band | `src/components/PlayBar.astro` |
| 5 | Token & burn, ending on the on-chain proof | `src/components/Token.astro` |
| 6 | Play — what you need, and the door | `src/components/Play.astro` |
| — | FAQ (6 accordions) | `src/components/Faq.astro` |
| — | Footer (18+, jurisdiction) | `src/components/Footer.astro` |

Header: logo · three anchors (The game / The token / FAQ) · five socials · one gold
button. It becomes sticky past 600 px of scroll, reduced to logo + play button. The
burger menu carries the play link too — on mobile it is the panel the visitor has open.

## Everything you will want to edit

`src/data/site.ts` holds the copy and every number.

| Constant | Now | What it does |
|---|---|---|
| `GAME_URL` | `https://play.babyguy.dev` | **Where every gold button goes.** Six links on the built page read it; there is no second place to change. |
| `TRACKER_URL` | *derived* | The game's live on-chain page, `GAME_URL + /api/suivi` — never written out, so it cannot drift from `GAME_URL`. The `/api/` is not decorative: the backend that serves it is private on Fly and the game server relays `/api/…` to it, which is why `play.babyguy.dev/suivi` is a 404. Linked from the Token section and the footer. |
| `PLAY_LABEL` | `'Play now'` | The words on those six buttons. |
| `CHAIN` / `CHAIN_ID` / `CHAIN_EXPLORER` | Robinhood Chain, 46630 | The chain the game settles on, since 5 September 2026 (it was Solana until then). Read off the live game's own `/api/stats`; if they disagree, the live game is right. |
| `NETWORK` | `'testnet'` | Printed in the notice on the play section, the footer and the FAQ. While this says `testnet` the page states plainly that the {USDC} in play is test {USDC} and worth nothing. **Change it only when the deployed backend actually leaves testnet** (`ROBINHOOD_RESEAU` in the game repo's `deploy/fly/backend.toml`) — the two have to move together or the page lies. |
| `CLAIM_CATEGORY` | `'run-to-earn'` | How we name what this is. Stated once so the hero badge, the `<title>` and the meta description cannot word it three different ways. |
| `FAUCET_USDC` / `FAUCET_EVERY_MINUTES` | 20 / 60 | The test {USDC} the game **mints** on request — not a public faucet, nobody sells test {USDC}. Defaults from `backend/src/config.js`, live (no `ROBINET_MICROS` override is set). Cannot exist on mainnet: real USDC has no mint function. |
| `WALLETS` | MetaMask, Rabby, Robinhood Wallet | Read off the live sign-in gate, not guessed — naming a wallet the gate does not offer sends someone to install one for nothing. |
| `TABLES` | `[2, 5, 10]` | The tables the server opens, read off the live game's `/etat`. A table named here that the server does not open sends a visitor to a queue that never fills. |
| `formats` | 1v1 / Squad / Arena | The three formats, drawn as pips in `Formats.astro`. `cuts` is the game's own `MODES[mode].survivants` (`16 → 8 → 4 → 1`), so **its length is the round count** — 1, 2 and 3, which is why the page no longer says "3 rounds" outside the arena. `paid` is the count of non-bronze ranks from `grade(mode, rank)`: half the table, in all three. |
| `BURN_PCT` | `'10'` | Share of every match bought back and burned = the whole commission. |
| `BURN_COUNTER` | `null` | Burned-tokens counter. Shows `—` until you set it. |
| `BURN_WALLET` | `null` | Buyback wallet address. Shows `—`, becomes a Solscan link once set. |
| `socials` | `#` | Replace the five `href`s with the real accounts. |

Numbers used across the page (5 USDC table, 16 players, 10 % commission, 80 USDC pot,
25 / 12.50 / 8.50 / 6.00 / stake back / nothing) all come from `payouts`, `TABLE_STAKE`,
`PLAYERS`, `COMMISSION_PCT` and `POT` in the same file.

> **`payouts` no longer matches the shipped game.** The table here promises a fixed
> 25.00 for first place on a 5 USDC arena; the game draws the winner's gain on a wheel
> and pays anywhere from 12.50 to 39.50 (expectation 23.37). The `×5` / `×2.5` column is
> a multiplier, which the game itself is forbidden from showing a player. Fixing it is a
> product decision — the real per-rank ranges are one command away:
> `cd tools/feel-lab && node diag/economie.mjs` in the game repo.

## Media

```
public/videos/trailer.mp4      27 s, 1600×900, 7.2 MB (re-encoded from V1trailer-sous-titre.mp4)
public/posters/trailer.jpg     frame at 6 s
public/posters/jeu-course.jpg  poster for the gameplay loop
public/img/hero-bg.jpg         hero background
public/img/logo.png            official logo, grey background removed
```

**Missing:** `public/videos/jeu-course.mp4`. The section renders its poster until you
drop the file in — nothing breaks, no 404 is shown to the visitor.

Video rules already wired in `src/components/LoopVideo.astro` and `src/layouts/Layout.astro`:
`muted`, `loop`, `playsinline`, `preload="metadata"`, poster always set, lazy-loaded via
IntersectionObserver (the trailer is the only eager one), paused off screen, and under
`prefers-reduced-motion` the source is never attached at all — the poster stands in.

`assets/unused-posters/` holds the placeholder posters made for the trials and characters
sections, which were removed from the page.

## Deploying

Vercel, static, from `main`. `npm run build` locally reproduces exactly what it serves —
there is no server-side anything on this page.

## Design rules baked in

- Pastel palette, all tokens in `src/styles/global.css`: cream `#FBF6FF` (the line
  between sections), violet `#6E52D4`, deep violet `#34266F`, ink violet `#2A1E5E`,
  sky `#4A82D8`, pink `#FF7FB0`, gold `#FFC93C`.
- Sections are separated by **diagonal cuts** — `src/components/Divider.astro`, one per
  section, dropped at the top of the section it belongs to. Props: `color` (the section's
  own background), `dir` (`right` / `left`, alternate them) and `height`. Each cut is
  edged with a cream line. A section's vertical padding must stay above the cut height,
  otherwise content slides under the diagonal.
- **One gold button per screen** — gold is the action colour, and it now means exactly
  one thing: go and play. Everything else is ghost, pink or plain text.
- **Three visual idioms in `#the-game`, and they do not borrow from each other.** The
  three beats own the outlined numerals on a rail; the Token section owns the boxed
  look; the formats block owns the pips. Each shows its data rather than stating it —
  the prize chart is drawn to scale, the pips are one per seat.
- Mobile first. The prize table scrolls horizontally inside its own container.
- No promise of profit anywhere: the copy states a split rule, the footer says so too.
- **The devnet status is stated, not buried.** The play section carries it in a gold
  pill, the FAQ answers it outright, the footer repeats it. The page sends people to a
  game that takes stakes; letting them assume those stakes are real money would be the
  one dishonesty this page cannot afford.
