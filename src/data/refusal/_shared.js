// Shared business info + copy used by every refusal page.
// Change it here once and all pages update.

export const SITE = {
  name: 'Global Visa Internationals',
  url: 'https://www.globalvisainternationals.com',
  logo: '/gvilogo.png',
  phone: '+91 70222 13466',
  phoneTel: '+917022213466',
  twitter: '@GLOBALVISA1505',
  refusalBasePath: '/Visa/refusal-visa',
  // true = pages link to the hub page at /Visa/refusal-visa (app/Visa/refusal-visa/page.jsx in this kit).
  // Set to false if you do not add that file, so breadcrumbs never point to a 404.
  hubEnabled: true,
  address: {
    streetAddress: 'MG Road',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560025',
    addressCountry: 'IN',
  },
  geo: { latitude: 12.9716, longitude: 77.5946 },
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.facebook.com/globalvisainternationals/',
    'https://www.instagram.com/globalvisa_internationals/',
    'https://www.linkedin.com/company/global-visa-internationals/',
    'https://x.com/GLOBALVISA1505',
    'https://www.youtube.com/@globalVisaInternationals',
  ],
};

export const HOW_WE_HELP = [
  {
    t: 'Refusal review',
    d: 'We go through your refusal letter or notes line by line and match every stated reason to the evidence in your file.',
  },
  {
    t: 'Gap analysis',
    d: 'We pinpoint what was missing or unclear: funds, ties to India, travel or study plan, documents, or consistency.',
  },
  {
    t: 'Rebuild the file',
    d: 'We help you prepare fresh documents and a clear explanation letter so the new application tells one consistent story.',
  },
  {
    t: 'Reapply or challenge',
    d: 'We advise whether to reapply, request a review or appeal, and prepare you for the filing and any interview.',
  },
];

export const TRUST_POINTS = [
  { t: 'Country-specific advice', d: 'Each destination has its own rules, tests and deadlines. We treat them separately.' },
  { t: 'Honest assessment', d: 'If reapplying right now is unlikely to work, we will say so and tell you what to fix first.' },
  { t: 'Document-first approach', d: 'Most refusals come down to evidence. We focus on what an officer needs to see.' },
  { t: 'Clear next steps', d: 'You get a written plan with what to prepare, in what order, and what to watch for.' },
  { t: 'Legal referrals when needed', d: 'For court or tribunal challenges, we work with licensed lawyers and registered advisers.' },
];

export const DISCLAIMER =
  'Global Visa Internationals is an independent consultancy and is not affiliated with any government or embassy. ' +
  'This page is general information, not legal advice, and no outcome is guaranteed. ' +
  'Rules, fees and deadlines change, so check the official source before you act.';
