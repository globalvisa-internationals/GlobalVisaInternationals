// src/app/blog/[slug]/page.jsx
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Image from 'next/image';


// ✅ Required for Next.js 15+ – viewport must be exported separately
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
  if (!post) return { title: 'Not Found' };

  const baseUrl = 'https://www.globalvisainternationals.com';
  const imageUrl = post.image ? `${baseUrl}${post.image}` : `${baseUrl}/default-og.jpg`;

  return {
    title: post.title || 'Untitled',
    description: post.excerpt || post.description || '',
    authors: [{ name: post.author || 'Global Visa Internationals' }],
    keywords: post.keywords || [],
    alternates: { canonical: `${baseUrl}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.description,
      url: `${baseUrl}/blog/${slug}`,
      siteName: 'Global Visa Internationals',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.description,
      images: [imageUrl],
      creator: post.twitter?.creator || '@GLOBALVISA1505',
    },
    // Add other metadata like robots, etc.
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post || !post.Content) notFound();


  // Destructure all possible metadata with fallbacks
  const {
    title = 'Untitled',
    image = '/default-og.jpg',
    author = 'Global Visa Internationals',
    date = new Date().toISOString(),
    category = 'Blog',
    keywords = [],
    excerpt = '',
    faq = [],           // Optional FAQ array: [{ question, answer }]
  } = post;

  const baseUrl = 'https://www.globalvisainternationals.com';
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const postUrl = `${baseUrl}/blog/${slug}`;
  const imagePath = image?.startsWith('/') ? image : `/${image || 'default-og.jpg'}`;

  // ----- 1. Organization Schema (global) -----
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Global Visa Internationals',
    url: baseUrl,
    logo: `${baseUrl}/gvilogo.png`,
    sameAs: [
      'https://www.facebook.com/globalvisainternationals/',
      'https://www.instagram.com/globalvisa_internationals/',
      'https://www.linkedin.com/company/global-visa-internationals/',
      'https://x.com/GLOBALVISA1505',
      'https://www.youtube.com/@globalVisaInternationals',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7022-213-466',
      contactType: 'customer service',
      email: 'operations@globalvisainternationals.com',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'GF-9, Business Point, Brigade Road',
      addressLocality: 'Bangalore',
      postalCode: '560025',
      addressCountry: 'IN',
    },
  };

  // ----- 2. Article Schema (dynamic) -----
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    image: imageUrl,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: 'Global Visa Internationals',
      logo: { '@type': 'ImageObject', url: `${baseUrl}/gvilogo.png` },
    },
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: postUrl,
    keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords,
    articleSection: category,
    inLanguage: 'en-IN',
  };

  // ----- 3. BreadcrumbList Schema -----
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: title, item: postUrl },
    ],
  };

  // ----- 4. WebPage Schema (enhances SEO) -----
  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: excerpt,
    url: postUrl,
    publisher: organizationSchema,
    mainEntity: articleSchema,
    breadcrumb: breadcrumbSchema,
    primaryImageOfPage: imageUrl,
    datePublished: date,
    dateModified: date,
  };

  // ----- 5. FAQPage Schema (optional, if post provides faq array) -----
  let faqSchema = null;
  if (Array.isArray(faq) && faq.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    };
  }

  return (
    <>
      {/* All structured data scripts */}
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      {faqSchema && <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 font-sans text-gray-800 mt-16">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 border-b pb-4">
            <span className="font-semibold">Category:</span> {category}
            <span className="text-gray-400">|</span>
            <span className="font-semibold">Author:</span> {author}
            <span className="text-gray-400">|</span>
            <span className="font-semibold">Date:</span>
            <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
          </div>
        </header>

        {image && (
          <div className="my-6 rounded-xl overflow-hidden shadow-md relative w-full h-96">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg prose-teal max-w-none">
          <post.Content />
        </div>

        <footer className="mt-12 pt-6 border-t text-center">
          <div className="bg-teal-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-teal-800">Ready to start your journey?</h3>
            <p className="text-gray-700 mt-2">Contact Global Visa Internationals for expert guidance.</p>
            <a href="/contact" className="inline-block mt-4 bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition">
              Talk to an Expert →
            </a>
          </div>
        </footer>
      </article>
    </>
  );
}