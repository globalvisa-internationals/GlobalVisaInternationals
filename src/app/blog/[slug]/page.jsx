// src/app/blog/[slug]/page.jsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { SITE, absoluteUrl, formatDate, getReadingTime, toListPost } from '@/lib/blog-config';
import { buildPostGraph } from '@/lib/blog-schema';
import JsonLd from '@/components/blog/JsonLd';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import CategoryBadge from '@/components/blog/CategoryBadge';
import ReadingProgress from '@/components/blog/ReadingProgress';
import TableOfContents from '@/components/blog/TableOfContents';
import ShareButtons from '@/components/blog/ShareButtons';
import AuthorCard from '@/components/blog/AuthorCard';
import FaqSection from '@/components/blog/FaqSection';
import RelatedPosts from '@/components/blog/RelatedPosts';
import CtaBanner from '@/components/blog/CtaBanner';

// Next.js 15+: viewport is exported separately from metadata.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0383C9',
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Not Found', robots: { index: false } };

  const url = `${SITE.url}/blog/${slug}`;
  const description = post.excerpt || post.description || '';
  const image = absoluteUrl(post.image);
  const author = post.author || SITE.name;
  const keywords = Array.isArray(post.keywords) ? post.keywords : post.keywords ? [post.keywords] : [];

  return {
    title: post.title || 'Untitled',
    description,
    authors: [{ name: author }],
    keywords,
    category: post.category,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      url,
      siteName: SITE.name,
      locale: 'en_IN',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      authors: [author],
      section: post.category,
      tags: keywords,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [image],
      creator: post.twitter?.creator || SITE.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post || !post.Content) notFound();

  const {
    title = 'Untitled',
    image = SITE.defaultOg,
    author = SITE.name,
    date,
    category = 'Blog',
    excerpt = '',
    faq = [],
  } = post;

  const postUrl = `${SITE.url}/blog/${slug}`;
  const imagePath = image.startsWith('/') || image.startsWith('http') ? image : `/${image}`;
  const readingTime = getReadingTime(post);

  // Related: same category first, then most recent others.
  const all = (await getAllPosts()).filter((p) => p.slug !== slug);
  const related = [
    ...all.filter((p) => p.category === category),
    ...all.filter((p) => p.category !== category),
  ]
    .slice(0, 3)
    .map(toListPost);

  return (
    <>
      <JsonLd data={buildPostGraph({ post: { ...post, title, image, author, category, faq }, slug })} />
      <ReadingProgress targetId="post-body" />

      <article className="pb-16">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-36">
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Blog', href: '/blog' },
                { name: title },
              ]}
            />
            <CategoryBadge className="mt-6">{category}</CategoryBadge>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#002B5B] sm:text-5xl">
              {title}
            </h1>
            {excerpt && <p className="mt-4 text-lg leading-relaxed text-slate-600">{excerpt}</p>}

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
              <span className="font-semibold text-slate-800">{author}</span>
              {date && (
                <>
                  <span aria-hidden="true">•</span>
                  <time dateTime={date}>{formatDate(date)}</time>
                </>
              )}
              {readingTime && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>{readingTime}</span>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Hero image (aspect matches 1200x630 OG image so nothing is cropped badly) */}
        <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
          <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
            <Image
              src={imagePath}
              alt={title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Body + TOC */}
        <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
            <div className="min-w-0">
              <TableOfContents targetId="post-body" />

              <div
                id="post-body"
                className="prose prose-base max-w-none sm:prose-lg prose-headings:font-extrabold prose-headings:text-[#002B5B] prose-a:text-[#057A7E] prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl"
              >
                <post.Content />
              </div>

              <ShareButtons url={postUrl} title={title} className="mt-10 border-t border-slate-200 pt-6" />
              <AuthorCard author={author} className="mt-6" />
              <FaqSection faq={faq} className="mt-12" />
            </div>

            <aside className="hidden lg:block">
              <TableOfContents targetId="post-body" variant="desktop" />
            </aside>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
          <RelatedPosts posts={related} />
          <CtaBanner className="mt-16" />
        </div>
      </article>
    </>
  );
}
