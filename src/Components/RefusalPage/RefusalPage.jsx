// Reusable visa-refusal page. Server component: ships zero client JS except the lazy form.
// Usage: <RefusalPage data={canada} />   (data shape documented in README)
import Image from 'next/image';
import Link from 'next/link';
import styles from './RefusalPage.module.css';
import LazyVisaForm from './LazyVisaForm';
import { buildJsonLd } from './seo';
import { SITE, HOW_WE_HELP, TRUST_POINTS, DISCLAIMER } from '@/data/refusal/_shared';
import { COUNTRIES } from '@/data/refusal/countries';

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default function RefusalPage({ data: d }) {
  const others = COUNTRIES.filter((c) => c.slug !== d.slug);
  const toc = [
    ['reasons', 'Why visas get refused'],
    ['options', 'Your options'],
    ['how-we-help', 'How we help'],
    ['faq', 'FAQs'],
  ];

  return (
    <main className={styles.page} style={{ '--accent': d.accent }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: buildJsonLd(d) }} />

      {/* ---------- Hero ---------- */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <ol>
              <li><Link href="/">Home</Link></li>
              {SITE.hubEnabled && <li><Link href={SITE.refusalBasePath}>Visa refusal help</Link></li>}
              <li aria-current="page">{d.name}</li>
            </ol>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>{d.name} visa refusal help for Indian applicants</p>
              <h1 className={styles.h1}>{d.h1}</h1>
              <p className={styles.lead}>{d.lead}</p>
              <div className={styles.ctaRow}>
                <a href="#free-review" className={`${styles.btn} ${styles.btnOnDark}`}>Get a free case review</a>
                <a href={`tel:${SITE.phoneTel}`} className={`${styles.btn} ${styles.btnGhost}`}>Call {SITE.phone}</a>
              </div>
              <p className={styles.updated}>
                Updated <time dateTime={d.updated}>{fmtDate(d.updated)}</time>
              </p>
            </div>

            <div className={styles.heroMedia}>
              {d.image ? (
                <Image
                  src={d.image}
                  alt={`${d.name} visa refusal help from ${SITE.name}`}
                  fill
                  priority
                  sizes="(min-width: 960px) 460px, 100vw"
                  className={styles.heroImg}
                />
              ) : (
                <div className={styles.heroFallback} aria-hidden="true">{d.name}</div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className={styles.layout}>
        <article className={styles.content}>
          {/* ---------- Quick answer (good for search snippets + AI answers) ---------- */}
          <section className={styles.glance} aria-labelledby="quick-answer">
            <h2 id="quick-answer" className={styles.glanceTitle}>Quick answer</h2>
            <p className={styles.glanceText}>{d.quickAnswer}</p>
            <dl className={styles.facts}>
              {d.glance.map((g) => (
                <div key={g.label}>
                  <dt>{g.label}</dt>
                  <dd>{g.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <nav aria-label="On this page" className={styles.toc}>
            {toc.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>

          {/* ---------- Reasons ---------- */}
          <section id="reasons" className={styles.section} aria-labelledby="reasons-h">
            <h2 id="reasons-h" className={styles.h2}>{d.reasonsTitle ?? `Why ${d.name} visas get refused`}</h2>
            <p className={styles.intro}>{d.reasonsIntro}</p>
            <ul className={styles.cards}>
              {d.reasons.map((r) => (
                <li key={r.t} className={styles.card}>
                  <h3>{r.t}</h3>
                  <p>{r.d}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Options ---------- */}
          <section id="options" className={styles.section} aria-labelledby="options-h">
            <h2 id="options-h" className={styles.h2}>Your options after a {d.name} visa refusal</h2>
            <ol className={styles.steps}>
              {d.options.map((o) => (
                <li key={o.t}>
                  <h3>{o.t}</h3>
                  <p>{o.d}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ---------- How we help ---------- */}
          <section id="how-we-help" className={styles.section} aria-labelledby="help-h">
            <h2 id="help-h" className={styles.h2}>How we help with your {d.name} refusal</h2>
            <p className={styles.intro}>
              We support applicants across India with {d.services.map((s) => s.toLowerCase()).join(', ').replace(/, ([^,]*)$/, ' and $1')} refusals, in person in Bengaluru and online.
            </p>
            <ol className={styles.process}>
              {HOW_WE_HELP.map((s) => (
                <li key={s.t}>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>

            <h3 className={styles.h3}>Why applicants choose {SITE.name}</h3>
            <ul className={styles.trust}>
              {TRUST_POINTS.map((p) => (
                <li key={p.t}><strong>{p.t}.</strong> {p.d}</li>
              ))}
            </ul>
          </section>

          {/* ---------- FAQ (native <details>: no JS) ---------- */}
          <section id="faq" className={styles.section} aria-labelledby="faq-h">
            <h2 id="faq-h" className={styles.h2}>{d.name} visa refusal: frequently asked questions</h2>
            <div className={styles.faq}>
              {d.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {d.reviewsWidgetId && (
            <section className={styles.section} aria-labelledby="reviews-h">
              {/* <h2 id="reviews-h" className={styles.h2}>Client reviews</h2> */}
              <div className={`elfsight-app-${d.reviewsWidgetId}`} data-elfsight-app-lazy></div>
            </section>
          )}

          {/* ---------- Official sources (trust + outbound authority links) ---------- */}
          <section className={styles.section} aria-labelledby="sources-h">
            <h3 id="sources-h" className={styles.h3}>Official sources</h3>
            <ul className={styles.sources}>
              {d.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Internal links ---------- */}
          <section className={styles.section} aria-labelledby="more-h">
            <h3 id="more-h" className={styles.h3}>Refused by another country?</h3>
            <ul className={styles.chips}>
              {others.map((c) => (
                <li key={c.slug}>
                  <Link href={`${SITE.refusalBasePath}/${c.slug}`}>{c.name} visa refusal help</Link>
                </li>
              ))}
            </ul>
          </section>

          <p className={styles.disclaimer}>{DISCLAIMER}</p>
        </article>

        {/* ---------- Sticky form ---------- */}
        <aside id="free-review" className={styles.aside} aria-labelledby="form-h">
          <div className={styles.formCard}>
            <h2 id="form-h" className={styles.formTitle}>Free {d.name} refusal case review</h2>
            <p className={styles.formText}>Tell us what happened. We will tell you your realistic options.</p>
            <LazyVisaForm />
          </div>
        </aside>
      </div>

      {/* Mobile-only sticky action bar (pure CSS/HTML) */}
      <div className={styles.mobileBar}>
        <a href={`tel:${SITE.phoneTel}`} className={`${styles.btn} ${styles.btnGhostDark}`}>Call us</a>
        <a href="#free-review" className={styles.btn}>Free case review</a>
      </div>
    </main>
  );
}
