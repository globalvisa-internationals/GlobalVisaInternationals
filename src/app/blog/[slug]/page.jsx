
// src/app/blog/[slug]/page.jsx
import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import styles from '@/content/blog/blog.module.css';

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ Await params
  const post = await getPostBySlug(slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params; // ✅ Await params
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { Content } = post;

  return (
    <article className={styles.article}>
      <h1 className={styles.blogTitle}>{post.title}</h1>
      <div className={styles.meta}>
        <span><strong>Category:</strong> {post.category}</span>
        <span> | </span>
        <span><strong>Author:</strong> {post.author}</span>
        <span> | </span>
        <span> <strong>Date</strong><em>{new Date(post.date).toLocaleDateString()}</em></span>
      </div>
      <div className={styles.content}>
        <Content />
      </div>
    </article>
  );
}
