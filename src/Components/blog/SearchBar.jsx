'use client';
import { useEffect, useRef } from 'react';

// Press "/" anywhere on the page to focus the search box.
export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search visas, countries, study guides…',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      const el = document.activeElement;
      const typing =
        el && (['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName) || el.isContentEditable);
      if (e.key === '/' && !typing) {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <form role="search" onSubmit={(e) => e.preventDefault()} className="relative w-full">
      <label htmlFor="blog-search" className="sr-only">
        Search articles
      </label>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        id="blog-search"
        ref={ref}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="h-12 w-full rounded-full border border-slate-200 bg-white pl-12 pr-12 text-base text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#057A7E] focus:ring-4 focus:ring-[#057A7E]/15 [&::-webkit-search-cancel-button]:hidden"
      />
      {value ? (
        <button
          type="button"
          onClick={() => {
            onChange('');
            ref.current?.focus();
          }}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
        >
          ✕
        </button>
      ) : (
        <kbd className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-xs text-slate-400 sm:block">
          /
        </kbd>
      )}
    </form>
  );
}
