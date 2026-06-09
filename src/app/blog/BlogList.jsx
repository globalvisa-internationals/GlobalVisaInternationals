//src\app\blog\BlogList.jsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = [
  'All',
  'Study Abroad',
  'Work & PR',
  'Tourism & Travel',
  'Visa Information',
  'Culture & Lifestyle',
  'Immigration News & Updates',
];
const POSTS_PER_PAGE = 9;

export default function BlogList({ posts }) {
  const [filteredCategory, setFilteredCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
    setCurrentPage(1);
  };

  const filteredPosts =
    filteredCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === filteredCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
      {/* Mobile category dropdown */}
      {isMobile && (
        <div className="mb-6">
          <select
            value={filteredCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800"
            aria-label="Filter by category"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Blog grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 3}
                  />
                </Link>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-teal-700 transition">
                      {post.title}
                    </Link>
                  </h2>
                  <div className="flex justify-between text-xs text-gray-500 mb-3">
                    <span>👤 {post.author}</span>
                    <span>
                      📅 {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-2 text-teal-700 font-semibold text-sm hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10 flex-wrap">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300 transition"
              >
                ← Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-md transition ${currentPage === i + 1
                    ? 'bg-teal-700 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300 transition"
              >
                Next →
              </button>
            </div>
          )}
        </div>

        {/* Desktop sidebar */}
        {!isMobile && (
          <aside className="w-64 shrink-0 sticky top-24 self-start">
            <div className="bg-white p-5 rounded-xl shadow-sm border">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`cursor-pointer px-3 py-2 rounded-full text-sm text-center transition ${filteredCategory === cat
                      ? 'bg-teal-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-teal-100'
                      }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}