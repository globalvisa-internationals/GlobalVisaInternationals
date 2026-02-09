// src/app/blog/[slug]/page.jsx
import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from '@/content/blog/blog.module.css';
import Script from 'next/script';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: 'Post Not Found' };

  const baseUrl = "https://www.globalvisainternationals.com";
  const postUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl = `${baseUrl}${post.image}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: postUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { Content } = post;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://www.globalvisainternationals.com${post.image}`,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Global Visa Internationals",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.globalvisainternationals.com/gvilogo.png"
      }
    },
    "datePublished": post.date,
    "description": post.excerpt,
  };

  return (
    <article className={styles.article}>
      {/* JSON-LD for Search Engines */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className={styles.header}>
        <h1 className={styles.blogTitle}>{post.title}</h1>

        <div className={styles.meta}>
          <span><strong>Category: </strong> {post.category}</span>
          <span> | • | </span>
          <span><strong>Author: </strong> {post.author}</span>
          <span> | • | </span>
          <span> <strong>Date: </strong><em>{new Date(post.date).toLocaleDateString()}</em></span>
        </div>

        {/* Featured Image - Optimized for LCP */}
        {/* {post.image && (
          <div className={styles.featuredImageWrapper}>
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              priority={true} 
              className={styles.featuredImage}
              sizes="(max-width: 768px) 100vw, 1200px"
              quality={85}
            />
          </div>
        )} */}
      </header>

      <div className={styles.content}>
        {/* The Content component will handle its own internal lazy loading */}
        <Content />
      </div>

      <footer className={styles.blogFooter}>
        <div className={styles.ctaCard}>
          <h3>Ready to start your journey?</h3>
          <p>Contact Global Visa Internationals for expert guidance on the 2026 Italy Work Visa.</p>
          <a href="https://www.globalvisainternationals.com/contact" className={styles.ctaButton}>
            Talk to an Expert
          </a>
        </div>
      </footer>
    </article>
  );
}