// Visible FAQ (matches the FAQPage JSON-LD, which Google requires).
export default function FaqSection({ faq, className = '' }) {
  if (!Array.isArray(faq) || faq.length === 0) return null;
  return (
    <section aria-labelledby="faq-heading" className={className}>
      <h2 id="faq-heading" className="text-2xl font-extrabold text-[#002B5B]">
        Frequently asked questions
      </h2>
      <div className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {faq.map((item, i) => (
          <details key={i} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
              {item.question}
              <span aria-hidden="true" className="text-[#057A7E] transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
