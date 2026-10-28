import Breadcrumbs from './Breadcrumbs';

export default function BlogHero({
  eyebrow = 'Global Visa Internationals Blog',
  title = 'Visa, Immigration & Study Abroad Insights',
  description = 'Practical guides, country updates and expert advice to help you plan your move abroad with confidence.',
}) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#002B5B] via-[#023d6b] to-[#057A7E]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,.35) 0, transparent 40%), radial-gradient(circle at 85% 80%, rgba(255,255,255,.25) 0, transparent 35%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
        <Breadcrumbs
          tone="light"
          items={[{ name: 'Home', href: '/' }, { name: 'Blog' }]}
        />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">{description}</p>
      </div>
    </header>
  );
}
