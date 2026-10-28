'use client';

// Horizontally scrollable chips (works on mobile and desktop, replaces sidebar + select).
export default function CategoryTabs({ categories, active, counts = {}, onChange }) {
  return (
    <div
      role="group"
      aria-label="Filter by category"
      className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(cat)}
            className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#057A7E]/25 ${
              isActive
                ? 'border-[#002B5B] bg-[#002B5B] text-white shadow'
                : 'border-slate-200 bg-white text-slate-700 hover:border-[#057A7E] hover:text-[#057A7E]'
            }`}
          >
            {cat}
            {typeof counts[cat] === 'number' && (
              <span
                className={`rounded-full px-1.5 text-xs ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {counts[cat]}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
