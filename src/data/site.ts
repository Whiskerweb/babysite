// ============================================================
//  BABY GUY — single source of truth for copy and numbers.
//  Anything that can change lives here.
// ============================================================

/** Whitelist form endpoint (Formspree, Beehiiv, your own API...).
 *  While it is empty the form sends NOTHING and says so plainly.
 *  Paste your URL here to switch it on. */
export const FORM_ENDPOINT = '';

/** Whitelist spots. Static number, updated by hand. */
export const WHITELIST_PLACES = 200;

/** Free balance credited to whitelisted players at launch — one 5 USDC table. */
export const WHITELIST_GIFT = 5;

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
    text: 'Pick a 1, 2 or 5 {USDC} table. Your stake is charged when the match starts, not when it ends.',
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
    a: 'A 16-player battle royale. Everyone stakes 1, 2 or 5 {USDC}, three rounds are drawn at random, and the final standing decides how the pot is split.',
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
    q: 'When does it launch?',
    a: 'The whitelist is step one. The game is not playable today, and no public date goes out until it can be met. Whitelisted players hear first.',
  },
  {
    q: 'Which countries?',
    a: 'Real money is on the line: jurisdictions where this kind of game is restricted are excluded, and the list will be published before deposits open. 18+, no exceptions.',
  },
];
