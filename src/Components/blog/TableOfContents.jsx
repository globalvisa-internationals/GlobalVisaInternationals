'use client';
import { useEffect, useState } from 'react';

const slugify = (s) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 80);

// Builds a TOC from the h2/h3 headings inside #targetId (works with MDX content, no changes to posts).
// variant: 'mobile' (collapsible, above the article) | 'desktop' (sticky sidebar column)
export default function TableOfContents({ targetId = 'post-body', variant = 'mobile' }) {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root) return;
    const used = new Set();
    const list = [...root.querySelectorAll('h2, h3')].map((h) => {
      let id = h.id || slugify(h.textContent || '') || 'section';
      let n = 2;
      const base = id;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id);
      h.id = id;
      h.style.scrollMarginTop = '96px';
      return { id, text: h.textContent || '', level: h.tagName === 'H3' ? 3 : 2, el: h };
    });
    setItems(list.map(({ el, ...rest }) => rest));

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-90px 0px -65% 0px' }
    );
    list.forEach(({ el }) => obs.observe(el));
    return () => obs.disconnect();
  }, [targetId]);

  if (items.length < 3) return null;

  const list = (
    <ul className="space-y-1 border-l border-slate-200">
      {items.map((it) => (
        <li key={it.id}>
          <a
            href={`#${it.id}`}
            className={`-ml-px block border-l-2 py-1 text-sm leading-snug transition ${
              it.level === 3 ? 'pl-6' : 'pl-4'
            } ${
              active === it.id
                ? 'border-[#057A7E] font-semibold text-[#057A7E]'
                : 'border-transparent text-slate-600 hover:text-[#002B5B]'
            }`}
          >
            {it.text}
          </a>
        </li>
      ))}
    </ul>
  );

  if (variant === 'desktop') {
    return (
      <nav aria-label="Table of contents" className="sticky top-24 hidden lg:block">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">On this page</p>
        {list}
      </nav>
    );
  }

  return (
    <details className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 lg:hidden">
      <summary className="cursor-pointer text-sm font-bold text-[#002B5B]">On this page</summary>
      <nav aria-label="Table of contents" className="mt-3">
        {list}
      </nav>
    </details>
  );
}
