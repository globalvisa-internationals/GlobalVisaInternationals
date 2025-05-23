//src\app\blog\[slug]\page.jsx
import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import styles from '@/content/blog/blog.module.css';


export async function generateMetadata({ params }) {
  const { slug } = params; // Destructure params to get the slug
  const post = await getPostBySlug(slug); // Await the post data

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = params; // Destructure params to get the slug
  const post = await getPostBySlug(slug); // Await the post data

  if (!post) {
    notFound(); // If the post is not found, call notFound
  }

  const { Content } = post;

  return (
    <article className={styles.article}>
      <h1 className={styles.blogTitle}>{post.title}</h1>
      <div className={styles.meta}>
        <span><strong>Category:</strong> {post.category}</span>
        <span>|</span>
        <span><strong>Author:</strong> {post.author}</span>
      </div>
      <p><em>{new Date(post.date).toLocaleDateString()}</em></p>

      <div className={styles.content}>
        <Content />
      </div>
    </article>
  );
}
