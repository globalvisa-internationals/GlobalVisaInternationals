export default function CategoryBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-[#057A7E]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#057A7E] ${className}`}
    >
      {children}
    </span>
  );
}
