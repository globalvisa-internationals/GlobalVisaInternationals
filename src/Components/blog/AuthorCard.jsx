export default function AuthorCard({ author, className = '' }) {
  const initials = (author || 'GV')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');

  return (
    <aside
      aria-label="About the author"
      className={`flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 ${className}`}
    >
      <div
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#002B5B] to-[#057A7E] text-lg font-bold text-white"
      >
        {initials}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Written by</p>
        <p className="text-lg font-bold text-[#002B5B]">{author}</p>
        <p className="text-sm text-slate-600">
          Visa and immigration specialists helping applicants plan study, work and travel abroad.
        </p>
      </div>
    </aside>
  );
}
