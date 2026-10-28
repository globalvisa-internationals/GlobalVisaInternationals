import Link from 'next/link';

// items: [{ name, href? }] — last item is the current page (no href).
export default function Breadcrumbs({ items, tone = 'dark', className = '' }) {
  const light = tone === 'light';
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={`flex flex-wrap items-center gap-2 text-sm ${light ? 'text-slate-200' : 'text-slate-500'}`}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex min-w-0 items-center gap-2">
              {item.href && !last ? (
                <Link href={item.href} className={`transition ${light ? 'hover:text-white' : 'hover:text-[#057A7E]'}`}>
                  {item.name}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={`truncate ${light ? 'text-white' : 'text-slate-700'}`}>
                  {item.name}
                </span>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
