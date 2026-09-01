# Baby Guy — landing page

One page, English, built with [Astro](https://astro.build). Single goal: whitelist sign-ups.

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
| 3 | How it works + prize table + gameplay loop | `src/components/HowToPlay.astro` |
| 4 | Short whitelist bar | `src/components/WhitelistBar.astro` |
| 5 | Token & burn | `src/components/Token.astro` |
| 6 | Whitelist, full height | `src/components/Whitelist.astro` |
| — | FAQ (6 accordions) | `src/components/Faq.astro` |
| — | Footer (18+, jurisdiction) | `src/components/Footer.astro` |

Header: logo · three anchors (The game / The token / FAQ) · five socials · one gold
button. It becomes sticky past 600 px of scroll, reduced to logo + whitelist button.

## Everything you will want to edit

`src/data/site.ts` holds the copy and every number.

| Constant | Now | What it does |
|---|---|---|
| `FORM_ENDPOINT` | `''` | **Empty = the form sends nothing** and says so to the visitor. Paste a Formspree/Beehiiv/API URL to switch both forms on. |
| `WHITELIST_PLACES` | `200` | Scarcity figure. Static, update by hand — no fake ticking counter. |
| `BURN_PCT` | `'10'` | Share of every match bought back and burned = the whole commission. |
| `BURN_COUNTER` | `null` | Burned-tokens counter. Shows `—` until you set it. |
| `BURN_WALLET` | `null` | Buyback wallet address. Shows `—`, becomes a Solscan link once set. |
| `socials` | `#` | Replace the five `href`s with the real accounts. |

Numbers used across the page (5 USDC table, 16 players, 10 % commission, 80 USDC pot,
25 / 12.50 / 8.50 / 6.00 / stake back / nothing) all come from `payouts`, `TABLE_STAKE`,
`PLAYERS`, `COMMISSION_PCT` and `POT` in the same file.

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

## Design rules baked in

- Pastel palette, all tokens in `src/styles/global.css`: cream `#FBF6FF` (the line
  between sections), violet `#6E52D4`, deep violet `#34266F`, ink violet `#2A1E5E`,
  sky `#4A82D8`, pink `#FF7FB0`, gold `#FFC93C`.
- Sections are separated by **diagonal cuts** — `src/components/Divider.astro`, one per
  section, dropped at the top of the section it belongs to. Props: `color` (the section's
  own background), `dir` (`right` / `left`, alternate them) and `height`. Each cut is
  edged with a cream line. A section's vertical padding must stay above the cut height,
  otherwise content slides under the diagonal.
- **One gold button per screen** — gold is the action colour. Everything else is ghost,
  pink or plain text.
- Mobile first. The prize table scrolls horizontally inside its own container.
- No promise of profit anywhere: the copy states a split rule, the footer says so too.
