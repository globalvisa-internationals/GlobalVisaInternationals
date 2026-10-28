// src/lib/blog-config.js
// Single source of truth for blog constants + helpers.

export const SITE = {
  name: 'Global Visa Internationals',
  url: 'https://www.globalvisainternationals.com',
  logo: 'https://www.globalvisainternationals.com/gvilogo.png',
  twitter: '@GLOBALVISA1505',
  locale: 'en-IN',
  defaultOg: '/default-og.jpg',
  sameAs: [
    'https://www.facebook.com/globalvisainternationals/',
    'https://www.instagram.com/globalvisa_internationals/',
    'https://www.linkedin.com/company/global-visa-internationals/',
    'https://x.com/GLOBALVISA1505',
    'https://www.youtube.com/@globalVisaInternationals',
  ],
};

export const CATEGORIES = [
  'All',
  'Study Abroad',
  'Work & PR',
  'Tourism & Travel',
  'Visa Information',
  'Culture & Lifestyle',
  'Immigration News & Updates',
];

export const POSTS_PER_PAGE = 9;

export function absoluteUrl(path) {
  const p = path || SITE.defaultOg;
  if (p.startsWith('http')) return p;
  return `${SITE.url}${p.startsWith('/') ? '' : '/'}${p}`;
}

// Fixed locale + UTC avoids server/client hydration mismatches.
export function formatDate(date) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

// Shown only if a post provides `readingTime` (minutes) in its frontmatter.
export function getReadingTime(post) {
  const n = Number(post?.readingTime);
  return Number.isFinite(n) && n > 0 ? `${Math.round(n)} min read` : null;
}

// Keeps only what the client list needs (smaller RSC payload).
export function toListPost(p) {
  return {
    slug: p.slug,
    title: p.title || 'Untitled',
    excerpt: p.excerpt || p.description || '',
    image: p.image || SITE.defaultOg,
    author: p.author || SITE.name,
    date: p.date || null,
    category: p.category || 'Blog',
    keywords: p.keywords || [],
    readingTime: p.readingTime || null,
  };
}
