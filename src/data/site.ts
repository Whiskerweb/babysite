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
