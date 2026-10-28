import PostCard from './PostCard';

export default function RelatedPosts({ posts, title = 'Keep reading', className = '' }) {
  if (!posts?.length) return null;
  return (
    <section aria-labelledby="related-heading" className={className}>
      <h2 id="related-heading" className="text-2xl font-extrabold text-[#002B5B]">
        {title}
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
