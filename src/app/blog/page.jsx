// src/app/blog/page.jsx
import { getAllPosts } from '@/lib/blog';
import BlogList from './BlogList';
import JsonLd from '@/components/blog/JsonLd';
import { SITE, absoluteUrl, toListPost } from '@/lib/blog-config';
import { buildListGraph } from '@/lib/blog-schema';

const title = 'Blog – Visa, Immigration & Study Abroad Guides';
const description =
  'Expert articles on visas, immigration, study abroad, work permits and travel from Global Visa Internationals. Practical, up-to-date guidance for your move abroad.';

export const metadata = {
  title,
  description,
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title,
    description,
    url: `${SITE.url}/blog`,
    siteName: SITE.name,
    type: 'website',
    locale: 'en_IN',
    images: [{ url: absoluteUrl(SITE.defaultOg), width: 1200, height: 630, alt: 'Global Visa Internationals Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [absoluteUrl(SITE.defaultOg)],
    creator: SITE.twitter,
  },
  robots: { index: true, follow: true },
};

export default async function BlogPage() {
  const all = await getAllPosts();
  const posts = all.map(toListPost);

  return (
    <>
      <JsonLd data={buildListGraph({ posts })} />
      <BlogList posts={posts} />
    </>
  );
}
