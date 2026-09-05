// ============================================================
//  BABY GUY — single source of truth for copy and numbers.
//  Anything that can change lives here.
// ============================================================

/** Where the game itself lives. Every gold button on this page leads here.
 *  The Fly app (tumble-bg-jeu.fly.dev) still answers on its own name; this is
 *  the address we publish, and the only one written into the copy. */
export const GAME_URL = 'https://play.babyguy.dev';

/** The live on-chain page the game itself serves: players, matches, buybacks,
 *  burns, every transaction, and the treasury addresses with their explorer links.
 *
 *  DERIVED from GAME_URL and never written out, because it is not a second site —
 *  it is the game's own `/api/suivi`. The backend that holds it is PRIVATE on Fly
 *  (no public port); the game server relays `/api/…` to it, which is why the path
 *  carries `/api/` and why `play.babyguy.dev/suivi` is a 404. */
export const TRACKER_URL = `${GAME_URL}/api/suivi`;

/** The one action this page asks for. Stated once, used everywhere, so the
 *  header, the hero, the mid-page band and the closing section can never
 *  drift apart. */
export const PLAY_LABEL = 'Play now';

/** THE CHAIN the deployed game settles on — Robinhood Chain, since 5 September
 *  2026. It was Solana until then; nothing of that name is left in the game and
 *  nothing of it should be left on this page.
 *
 *  Read off the live game's own `/api/stats`, which reports
 *  `Robinhood Chain Testnet`, chain id 46630, and the three deployed contracts
 *  (USDC, BG, Lot). If those three lines ever disagree with this file, the live
 *  game is right and this file is stale. */
export const CHAIN = 'Robinhood Chain';
export const CHAIN_ID = 46630;
export const CHAIN_EXPLORER = 'https://explorer.testnet.chain.robinhood.com';

/** `testnet` = test USDC, no real money. The page says so plainly rather than
 *  letting a visitor assume otherwise: sending someone to a money game under a
 *  wrong impression is the one thing we do not do. Moves in step with
 *  `ROBINHOOD_RESEAU` in the game repo's `deploy/fly/backend.toml`. */
export const NETWORK = 'testnet';

/** How we say what this is. The product director's claim, 5 September 2026.
 *  Stated once here so the badge, the page title and the meta description
 *  cannot end up wording it three different ways. */
export const CLAIM_CATEGORY = 'run-to-earn';

/** The test USDC the game MINTS on request — testnet only, and the reason a
 *  visitor can play the minute they land. Not a public faucet: nobody sells
 *  test USDC, so the game mints it (`POST /robinet`, `backend/src/config.js`).
 *  Defaults are live — no ROBINET_MICROS override is set on the deployed
 *  backend. On mainnet this cannot exist: real USDC has no mint function. */
export const FAUCET_USDC = 20;
export const FAUCET_EVERY_MINUTES = 60;

/** The wallets the game's own sign-in screen offers, in its order. Read off the
 *  live gate ("CONTINUE WITH WALLET — MetaMask · Rabby · Robinhood Wallet"), not
 *  guessed: naming a wallet the gate does not offer sends someone to install one
 *  for nothing. */
export const WALLETS = ['MetaMask', 'Rabby', 'Robinhood Wallet'];

/** The sign-up skin. Naming follows the game's own catalogue — BabyTrump,
 *  BabyMusk, BabyNetan — so a player who reads the name here recognises the
 *  entry in the wardrobe.
 *
 *  CAREFUL: as of 5 September 2026 this character does NOT exist in the game.
 *  A character needs a rigged `char-<id>.glb` in `tools/feel-lab/public/models/`,
 *  an entry in `cosmetics.js:MODELS`, and — for a sign-up grant — a rule in
 *  `boutique.js`, which today knows only one way to unlock anything (post on X).
 *  Until those three land, this section promises something the game does not
 *  hand over, and it does so at the exact moment someone signs up. */
export const SKIN = {
  name: 'BabyVlad',
  who: 'Vlad, the Robinhood CEO',
  image: '/img/babyvlad.webp',
};

/** Minimum balance before a withdrawal can be requested. */
export const WITHDRAW_MIN = 20;

/** Share of every match bought back and burned.
 *  The commission IS the burn: 100 % of it buys token back, nothing is kept. */
export const BURN_PCT = '10';

/** Burn counter and buyback wallet: empty at launch. */
export const BURN_COUNTER: string | null = null;
export const BURN_WALLET: string | null = null;

export const TABLE_STAKE = 5;      // USDC
export const PLAYERS = 16;
export const COMMISSION_PCT = 10;
export const POT = 80;             // USDC collected on a 5 USDC table

/** The three tables the server actually opens. Read off `/etat` of the live
 *  game, not chosen here — a table this page names and the server does not
 *  open is a visitor sent to a queue that will never fill. */
export const TABLES = [2, 5, 10];  // USDC

export const socials = [
  { name: 'X',         href: '#', icon: 'x' },
  { name: 'Discord',   href: '#', icon: 'discord' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'TikTok',    href: '#', icon: 'tiktok' },
  { name: 'YouTube',   href: '#', icon: 'youtube' },
];

export const navLinks = [
  { label: 'The game',  href: '#the-game' },
  { label: 'The token', href: '#the-token' },
  { label: 'FAQ',       href: '#faq' },
];

/** The three formats the server opens, and what each one is.
 *
 *  `cuts` is the round structure read off the game's own `MODES[mode].survivants`
 *  (16 -> 8 -> 4 -> 1 for the arena): its length IS the number of rounds, which is
 *  why the page can no longer say "3 rounds" across the board — that is the arena
 *  alone. `paid` is how many places finish with at least their stake, and it is
 *  half the table in all three: that is the one line worth putting on the page. */
export const formats = [
  {
    name: '1v1',
    players: 2,
    paid: 1,
    cuts: [2, 1],
    text: 'One round, one survivor. Nothing to hide behind.',
  },
  {
    name: 'Squad',
    players: 4,
    paid: 2,
    cuts: [4, 2, 1],
    text: 'Two rounds. Half the table is gone after the first.',
  },
  {
    name: 'Arena',
    players: 16,
    paid: 8,
    cuts: [16, 8, 4, 1],
    text: 'Three rounds. Sixteen, then eight, then four — then a winner.',
  },
];

export const payouts = [
  { rank: '1st',       gain: '25.00', mult: '×5',         highlight: false },
  { rank: '2nd',       gain: '12.50', mult: '×2.5',       highlight: false },
  { rank: '3rd',       gain: '8.50',  mult: '×1.7',       highlight: false },
  { rank: '4th',       gain: '6.00',  mult: '×1.2',       highlight: false },
  { rank: '5th – 8th', gain: '5.00',  mult: 'stake back', highlight: true  },
  { rank: '9th – 16th', gain: '—',    mult: 'nothing',    highlight: false },
];

export const steps = [
  {
    n: '01',
    title: 'You bet',
    text: 'Pick a 2, 5 or 10 {USDC} table. Your stake is charged when the match starts, not when it ends.',
  },
  {
    n: '02',
    title: 'You run',
    text: '2, 4 or 16 players, depending on the table you picked. The maps are drawn at random, and players drop out at every round.',
  },
  {
    n: '03',
    title: 'You cash out',
    text: 'Your final standing decides your share of the pot. The paid half of your table walks away with at least its stake.',
  },
];

export const faq = [
  {
    q: 'What is Baby Guy?',
    a: 'A battle royale played for stakes, in three formats: 1v1, squads of four, and 16-player arenas. Everyone stakes 2, 5 or 10 {USDC}, the maps are drawn at random, and the final standing decides how the pot is split.',
  },
  {
    q: 'How do I win?',
    a: 'By finishing in the paid half of your table — the winner in a 1v1, the top two in a squad, the top eight in an arena. In the arena the first four take home more than their stake, 5th to 8th get exactly their stake back, and the bottom eight lose theirs. The full split is in the prize table below.',
  },
  {
    q: `Why ${CHAIN}?`,
    a: `Because the money has to be checkable by the person who lost it. Every stake, every pot, every payout and every burn is a transaction on ${CHAIN} that anyone can open in the explorer — we do not ask to be believed. It also means you sign in with the wallet you already have: ${WALLETS.join(', ')}. We are the first ${CLAIM_CATEGORY} game to run on it, and the whole money path was built for it — one atomic transaction per lobby and per settlement, so a match either pays everybody or nobody.`,
  },
  {
    q: 'Is it just luck?',
    a: 'The three rounds are drawn at random, what happens inside them is not: timing, lines and reflexes decide. The draw puts all sixteen players on equal footing, it does not play for you.',
  },
  {
    q: 'Where does the commission go?',
    a: `${COMMISSION_PCT}% of everything staked — and all of it goes the same way: it buys token back on the market, and every token bought back is burned. Nothing is kept. You do not have to take that on trust: the game publishes every buyback, every burn and every transaction as it happens, on its on-chain page, along with the treasury addresses.`,
  },
  {
    q: 'Can I play right now?',
    a: `Yes. Hit any gold button on this page, then either make an account with an email or sign in with your wallet — ${WALLETS.join(', ')} — and you are in a queue. Duels start at two players, squads at four, the arena at sixteen.`,
  },
  {
    q: 'Is this real money yet?',
    a: `Not yet. The game settles on ${CHAIN} ${NETWORK}: the {USDC} you stake is test {USDC}, and the game mints it for you — ${FAUCET_USDC} at a time, once every ${FAUCET_EVERY_MINUTES} minutes. It is worth nothing, and so is anything you win. Every mechanic — the deposit, the stake, the pot, the payout, the buyback and the burn — runs exactly as it will with real money, on a chain you can read. The switch happens once the legal review is done, and it will be announced here.`,
  },
  {
    q: 'Which countries?',
    a: 'Real money is on the line the day we leave testnet: jurisdictions where this kind of game is restricted are excluded, and the list will be published before real deposits open. 18+, no exceptions.',
  },
];
