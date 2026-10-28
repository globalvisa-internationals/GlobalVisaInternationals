'use client';

function getRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push('…');
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push('…');
  pages.push(total);
  return pages;
}

const base =
  'inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#057A7E]/25';

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  return (
    <nav aria-label="Pagination" className="mt-12 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className={`${base} border border-slate-200 bg-white text-slate-700 hover:border-[#057A7E] disabled:cursor-not-allowed disabled:opacity-40`}
      >
        ← Prev
      </button>

      {getRange(page, totalPages).map((p, i) =>
        p === '…' ? (
          <span key={`dots-${i}`} className="px-1 text-slate-400">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onChange(p)}
            aria-current={p === page ? 'page' : undefined}
            aria-label={`Page ${p}`}
            className={`${base} ${
              p === page
                ? 'bg-[#002B5B] text-white shadow'
                : 'border border-slate-200 bg-white text-slate-700 hover:border-[#057A7E]'
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className={`${base} border border-slate-200 bg-white text-slate-700 hover:border-[#057A7E] disabled:cursor-not-allowed disabled:opacity-40`}
      >
        Next →
      </button>
    </nav>
  );
}
