import Link from 'next/link';

export default function CtaBanner({
  title = 'Ready to start your journey?',
  text = 'Speak to a Global Visa Internationals expert and get a clear, personalised plan for your visa.',
  href = '/contact',
  label = 'Talk to an Expert',
  phone = '+917022213466',
  phoneLabel = '+91 70222 13466',
  className = '',
}) {
  return (
    <section
      aria-label="Contact us"
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002B5B] to-[#057A7E] p-8 text-center text-white sm:p-12 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
      />
      <h2 className="relative text-2xl font-extrabold sm:text-3xl">{title}</h2>
      <p className="relative mx-auto mt-3 max-w-xl text-slate-100">{text}</p>
      <div className="relative mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href={href}
          className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-[#002B5B] shadow transition hover:scale-105"
        >
          {label} →
        </Link>
        {phone && (
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Call {phoneLabel}
          </a>
        )}
      </div>
    </section>
  );
}
