import Link from 'next/link';
import Image from 'next/image';
import CategoryBadge from './CategoryBadge';
import { formatDate, getReadingTime, SITE } from '@/lib/blog-config';

export default function FeaturedPost({ post }) {
  if (!post) return null;
  const href = `/blog/${post.slug}`;
  const readingTime = getReadingTime(post);

  return (
    <section aria-labelledby="featured-heading" className="mb-12">
      <h2 id="featured-heading" className="sr-only">
        Featured article
      </h2>
      <article className="group relative grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl hover:shadow-slate-900/5 lg:grid-cols-5">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 lg:col-span-3 lg:aspect-auto lg:min-h-[360px]">
          <Image
            src={post.image || SITE.defaultOg}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-[#002B5B] px-3 py-1 text-xs font-semibold text-white shadow">
            ★ Featured
          </span>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-2 lg:p-10">
          <CategoryBadge className="self-start">{post.category}</CategoryBadge>
          <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#002B5B] sm:text-3xl">
            <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
              {post.title}
            </Link>
          </h3>
          {post.excerpt && (
            <p className="mt-3 line-clamp-4 leading-relaxed text-slate-600">{post.excerpt}</p>
          )}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
            <span className="font-medium text-slate-700">{post.author}</span>
            {post.date && (
              <>
                <span aria-hidden="true">•</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </>
            )}
            {readingTime && (
              <>
                <span aria-hidden="true">•</span>
                <span>{readingTime}</span>
              </>
            )}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#057A7E]">
            Read the full guide
            <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
          </span>
        </div>
      </article>
    </section>
  );
}
