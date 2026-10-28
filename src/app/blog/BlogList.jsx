// src/app/blog/BlogList.jsx
'use client';
import { useMemo, useRef, useState } from 'react';
import BlogHero from '@/components/blog/BlogHero';
import SearchBar from '@/components/blog/SearchBar';
import CategoryTabs from '@/components/blog/CategoryTabs';
import FeaturedPost from '@/components/blog/FeaturedPost';
import PostCard from '@/components/blog/PostCard';
import Pagination from '@/components/blog/Pagination';
import CtaBanner from '@/components/blog/CtaBanner';
import { CATEGORIES, POSTS_PER_PAGE } from '@/lib/blog-config';

export default function BlogList({ posts }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const gridRef = useRef(null);

  const sorted = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0)),
    [posts]
  );

  const counts = useMemo(() => {
    const c = { All: sorted.length };
    sorted.forEach((p) => {
      c[p.category] = (c[p.category] || 0) + 1;
    });
    return c;
  }, [sorted]);

  // Only show categories that actually have posts (plus "All").
  const visibleCategories = CATEGORIES.filter((c) => c === 'All' || counts[c] > 0);

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    return sorted.filter((p) => {
      if (category !== 'All' && p.category !== category) return false;
      if (!q) return true;
      const hay = [
        p.title,
        p.excerpt,
        p.author,
        p.category,
        ...(Array.isArray(p.keywords) ? p.keywords : [p.keywords]),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return q.split(/\s+/).every((term) => hay.includes(term));
    });
  }, [sorted, category, q]);

  const isDefaultView = category === 'All' && !q;
  const featured = isDefaultView && page === 1 ? filtered[0] : null;
  // In the default view the first post is the featured one and is excluded from the grid.
  const pool = isDefaultView ? filtered.slice(1) : filtered;

  const totalPages = Math.max(1, Math.ceil(pool.length / POSTS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pagePosts = pool.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE);

  const goToPage = (p) => {
    setPage(p);
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const onSearch = (v) => {
    setQuery(v);
    setPage(1);
  };
  const onCategory = (c) => {
    setCategory(c);
    setPage(1);
  };
  const reset = () => {
    setQuery('');
    setCategory('All');
    setPage(1);
  };

  return (
    <>
      <BlogHero />

      {/* Sticky toolbar: search + categories. Adjust `top-*` to match your navbar height. */}
      <div className="sticky top-16 z-30 border-b border-slate-200 bg-white/90 backdrop-blur sm:top-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:gap-6">
          <div className="lg:w-[380px] lg:shrink-0">
            <SearchBar value={query} onChange={onSearch} />
          </div>
          <div className="min-w-0 flex-1">
            <CategoryTabs
              categories={visibleCategories}
              active={category}
              counts={counts}
              onChange={onCategory}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <FeaturedPost post={featured} />

        <section ref={gridRef} aria-labelledby="latest-heading" className="scroll-mt-40">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
            <h2 id="latest-heading" className="text-2xl font-extrabold text-[#002B5B]">
              {isDefaultView ? 'Latest articles' : category !== 'All' && !q ? category : 'Search results'}
            </h2>
            <p aria-live="polite" className="text-sm text-slate-500">
              {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
              {q && <> for “{query.trim()}”</>}
              {q && category !== 'All' && <> in {category}</>}
            </p>
          </div>

          {pagePosts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pagePosts.map((post, i) => (
                <PostCard key={post.slug} post={post} priority={i < 3 && !featured && safePage === 1} />
              ))}
            </div>
          ) : (
            !featured && (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <p className="text-lg font-semibold text-slate-800">No articles found</p>
                <p className="mt-1 text-slate-500">Try a different keyword or browse another category.</p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-5 rounded-full bg-[#002B5B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#057A7E]"
                >
                  Clear filters
                </button>
              </div>
            )
          )}

          <Pagination page={safePage} totalPages={totalPages} onChange={goToPage} />
        </section>

        <CtaBanner className="mt-16" />
      </div>
    </>
  );
}
