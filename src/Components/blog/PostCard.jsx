import Link from 'next/link';
import Image from 'next/image';
import CategoryBadge from './CategoryBadge';
import { formatDate, getReadingTime, SITE } from '@/lib/blog-config';

// Server-compatible card. The whole card is clickable via a stretched title link.
export default function PostCard({ post, priority = false }) {
  const href = `/blog/${post.slug}`;
  const readingTime = getReadingTime(post);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#057A7E]/40 hover:shadow-xl hover:shadow-slate-900/5">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={post.image || SITE.defaultOg}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <CategoryBadge className="self-start">{post.category}</CategoryBadge>

        <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug text-[#002B5B]">
          <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
            {post.title}
          </Link>
        </h3>

        {post.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-slate-500">
          <span className="truncate">{post.author}</span>
          <span className="shrink-0">
            {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
            {readingTime && <span> · {readingTime}</span>}
          </span>
        </div>
      </div>

      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-transparent ring-offset-2 group-focus-within:ring-[#057A7E]" />
    </article>
  );
}
