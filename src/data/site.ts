// ============================================================
//  BABY GUY — single source of truth for copy and numbers.
//  Anything that can change lives here.
// ============================================================

/** Where the game itself lives. Every gold button on this page leads here.
 *  The Fly app (tumble-bg-jeu.fly.dev) still answers on its own name; this is
 *  the address we publish, and the only one written into the copy. */
export const GAME_URL = 'https://play.babyguy.dev';

/** The one action this page asks for. Stated once, used everywhere, so the
 *  header, the hero, the mid-page band and the closing section can never
 *  drift apart. */
export const PLAY_LABEL = 'Play now';

/** Solana network the deployed game settles on.
 *  `devnet` = test USDC, no real money, faucet-funded. The page says so
 *  plainly rather than letting a visitor assume otherwise: sending someone
 *  to a money game under a wrong impression is the one thing we do not do. */
export const NETWORK = 'devnet';

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
    text: '16 players, 3 rounds drawn at random. Players drop out every round.',
  },
  {
    n: '03',
    title: 'You cash out',
    text: 'Your final standing decides your share of the pot. The top eight walk away with at least their stake.',
  },
];

export const faq = [
  {
    q: 'What is Baby Guy?',
    a: 'A 16-player battle royale. Everyone stakes 2, 5 or 10 {USDC}, three rounds are drawn at random, and the final standing decides how the pot is split.',
  },
  {
    q: 'How do I win?',
    a: 'By finishing in the top eight. The first four take home more than their stake, 5th to 8th get exactly their stake back, the bottom eight lose theirs. The full split is in the prize table.',
  },
  {
    q: 'Is it just luck?',
    a: 'The three rounds are drawn at random, what happens inside them is not: timing, lines and reflexes decide. The draw puts all sixteen players on equal footing, it does not play for you.',
  },
  {
    q: 'Where does the commission go?',
    a: `${COMMISSION_PCT}% of everything staked — and all of it goes the same way: it buys token back on the market, and every token bought back is burned. Nothing is kept.`,
  },
  {
    q: 'Can I play right now?',
    a: 'Yes. Hit any gold button on this page, create an account, and you are in a queue. Duels start at two players, squads at four, the arena at sixteen.',
  },
  {
    q: 'Is this real money yet?',
    a: 'Not yet. The game settles on Solana devnet: the {USDC} you stake is test {USDC} from a public faucet, worth nothing, and so is anything you win. Every mechanic — deposits, stakes, the pot, the payout, the buyback — runs exactly as it will on mainnet, on a chain you can read. The switch to real money happens once the legal review is done, and it will be announced here.',
  },
  {
    q: 'Which countries?',
    a: 'Real money is on the line the day we leave devnet: jurisdictions where this kind of game is restricted are excluded, and the list will be published before real deposits open. 18+, no exceptions.',
  },
];
