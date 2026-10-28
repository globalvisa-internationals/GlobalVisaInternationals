// Components/BusinessVisa/BusinessVisaPage.js  (SERVER component: adds no client JS)
// Renders any country page from a data file. Design + SEO live here once.

import Image from "next/image";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import {
  Rocket, Briefcase, Landmark, Building2, TrendingUp, Globe, Lightbulb, Shield, ShieldCheck,
  Users, Award, Clock, FileText, Heart, MapPin, Coins, Languages, CheckCircle, Plane, Wallet,
  BadgeCheck, ClipboardCheck, Calendar, Info, Phone, MessageCircle, ChevronRight, ArrowRight,
} from "lucide-react";
import s from "./visapage.module.css";
import VisaForm from "@/Components/VisaForm";
import ReviewCarousel from "@/Components/ReviewCarousel";
import { ReviewSchema } from "@/Components/ReviewSchema";
import { SITE } from "./site";

const display = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-display" });
const body = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body" });

// Data files refer to icons by name (keeps them plain data)
const ICONS = {
  Rocket, Briefcase, Landmark, Building2, TrendingUp, Globe, Lightbulb, Shield, ShieldCheck, Users,
  Award, Clock, FileText, Heart, MapPin, Coins, Languages, CheckCircle, Plane, Wallet, BadgeCheck,
  ClipboardCheck, Calendar, Info,
};
const Ico = ({ name, size = 22, className }) => {
  const C = ICONS[name] || Briefcase;
  return <C size={size} className={className} aria-hidden="true" />;
};

const YEARS = new Date().getFullYear() - SITE.foundingYear;
const fill = (t) => String(t).replace(/\{YEARS\}/g, String(YEARS));
const rich = (t) =>
  fill(t)
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
const toArray = (v) => (Array.isArray(v) ? v : v ? [v] : []);
const pad = (n) => String(n).padStart(2, "0");

// ─── structured data: one connected graph ────────────────────────────────
function StructuredData({ d, pageUrl, heroUrl }) {
  const org = `${SITE.url}/#organization`;
  const nodes = [
    {
      "@type": "ProfessionalService",
      "@id": org,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}${SITE.logo}`,
      image: heroUrl,
      telephone: SITE.phoneIntl,
      priceRange: "$$",
      address: { "@type": "PostalAddress", ...SITE.address },
      geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      hasMap: SITE.hasMap,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SITE.hours.days,
        opens: SITE.hours.opens,
        closes: SITE.hours.closes,
      },
      areaServed: { "@type": "Country", name: "India" },
      sameAs: SITE.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "en-IN",
      publisher: { "@id": org },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: d.meta.title,
      description: d.meta.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE.url}/#website` },
      primaryImageOfPage: { "@type": "ImageObject", url: heroUrl },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      mainEntity: { "@id": `${pageUrl}#service` },
      ...(d.dates?.published && { datePublished: d.dates.published }),
      ...(d.dates?.modified && { dateModified: d.dates.modified }),
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: d.serviceType,
      serviceType: d.serviceType,
      provider: { "@id": org },
      areaServed: { "@type": "Country", name: "India" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${d.country} Business Visa Services`,
        itemListElement: d.serviceOffers.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: `${d.country} Business Visa`, item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: d.faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ];
  if (d.rating) {
    nodes.push({
      "@type": "AggregateRating",
      itemReviewed: { "@id": org },
      ratingValue: d.rating.value,
      bestRating: "5",
      reviewCount: d.rating.count,
    });
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const SectionHead = ({ hid, num, kicker, title, sub }) => (
  <div className={s.sectionHead}>
    <p className={s.kicker}><b>{num}</b> {kicker}</p>
    <h2 id={hid} className={s.h2}>{title}</h2>
    {sub && <p className={s.sub}>{rich(sub)}</p>}
  </div>
);

function Table({ head, rows, rowHeader = true, note }) {
  return (
    <>
      <div className={s.tableWrap}>
        <table className={s.ledger}>
          <thead>
            <tr>{head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) =>
                  j === 0 && rowHeader
                    ? <th key={j} scope="row">{c}</th>
                    : <td key={j} data-label={head[j]}>{c}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className={s.footnote}>{note}</p>}
    </>
  );
}

function Receipt({ r }) {
  return (
    <aside className={s.receipt}>
      <div className={s.receiptHead}>
        <Info size={18} aria-hidden="true" />
        <h3>{r.title}</h3>
      </div>
      {r.sub && <p className={s.receiptSub}>{r.sub}</p>}
      <ul className={s.receiptList}>
        {r.items.map(([t, v]) => (
          <li key={t}><span>{t}</span><b>{v}</b></li>
        ))}
      </ul>
      {r.total && (
        <div className={s.receiptTotal}>
          <span>{r.totalLabel}</span>
          <b>{r.total}</b>
        </div>
      )}
      {r.note && <p className={s.receiptNote}>{r.note}</p>}
    </aside>
  );
}

function Block({ b, d }) {
  switch (b.type) {
    case "p":
      return <p className={s.prose}>{rich(b.text)}</p>;

    case "h3":
      return <h3 className={s.h3}>{b.text}</h3>;

    case "ul": {
      const Tag = b.ordered ? "ol" : "ul";
      return (
        <Tag className={`${s.list} ${b.check ? s.checks : ""} ${b.ordered ? s.ordered : ""}`}>
          {b.items.map((t, i) => <li key={i}>{rich(t)}</li>)}
        </Tag>
      );
    }

    case "routes":
      return (
        <div className={s.routes}>
          {b.items.map(({ id, icon, name, tag, desc, req }, i) => (
            <article key={name} className={`${s.route} ${req ? "" : s.routeSolo}`}>
              <div className={s.routeNum} aria-hidden="true">{pad(i + 1)}</div>
              <div className={s.routeBody}>
                <div className={s.routeTop}>
                  <span className={s.routeIcon}><Ico name={icon} /></span>
                  {tag && <span className={s.tag}>{tag}</span>}
                </div>
                <h3 id={id}>{name}</h3>
                <p>{desc}</p>
              </div>
              {req && (
                <div className={s.routeReq}>
                  <strong>Key requirements</strong>
                  <p>{req}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      );

    case "assess":
      return (
        <aside className={s.assess}>
          <div>
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </div>
          <a href="#consultation" className={s.btnPrimary}>
            {b.cta || "Get my free assessment"} <ArrowRight size={16} aria-hidden="true" />
          </a>
        </aside>
      );

    case "table":
      return <Table head={b.head} rows={b.rows} rowHeader={b.rowHeader} note={b.note} />;

    case "costLayout":
      return (
        <div className={s.costLayout}>
          <div>
            {b.tableTitle && <h3 className={s.h3}>{b.tableTitle}</h3>}
            {b.tableIntro && <p className={s.prose}>{b.tableIntro}</p>}
            <Table head={b.head} rows={b.rows} note={b.note} />
          </div>
          <Receipt r={b.receipt} />
        </div>
      );

    case "infoGrid":
      return (
        <ul className={s.costGrid}>
          {b.items.map(([t, dsc]) => (
            <li key={t}><strong>{t}</strong><span>{dsc}</span></li>
          ))}
        </ul>
      );

    case "pills":
      return (
        <ul className={s.pills}>
          {b.items.map(([t, dsc]) => (
            <li key={t}><strong>{t}</strong><span>{dsc}</span></li>
          ))}
        </ul>
      );

    case "bento":
      return (
        <ul className={`${s.bento} ${b.items.length === 7 ? "" : s.bentoPlain}`}>
          {b.items.map(({ icon, title, text }) => (
            <li key={title} className={s.tile}>
              <span className={s.tileIcon}><Ico name={icon} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      );

    case "rail":
      return (
        <div className={s.cityScroll} role="region" aria-label={b.label || "Highlights"} tabIndex={0}>
          <ol className={s.cityRail}>
            {b.items.map(([name, text]) => (
              <li key={name} className={s.cityCard}>
                <span className={s.cityPin}><MapPin size={18} aria-hidden="true" /></span>
                <h3>{name}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      );

    case "timeline":
      return (
        <ol className={s.timeline}>
          {b.items.map((it, i) =>
            typeof it === "string" ? (
              <li key={i}><p className={s.tlText}>{it}</p></li>
            ) : (
              <li key={it[0]}>
                <h3>{it[0]}</h3>
                <p>{it[1]}</p>
              </li>
            )
          )}
        </ol>
      );

    case "twoCol":
      return (
        <div className={s.twoCol}>
          {b.items.map(({ icon, title, points }) => (
            <div key={title} className={s.card}>
              <span className={s.cardIcon}><Ico name={icon} /></span>
              <h3>{title}</h3>
              <ul className={s.bullets}>
                {points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );

    case "checklist":
      return (
        <div className={s.checkGrid}>
          {b.groups.map(({ title, items }) => (
            <div key={title} className={s.card}>
              <h3>{title}</h3>
              <ul className={`${s.list} ${s.checks}`}>
                {items.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );

    case "countries":
      return (
        <div className={s.countryBox}>
          <ul className={s.countryGrid}>
            {b.countries.map((c) => <li key={c}>{c}</li>)}
          </ul>
          {b.highlights && (
            <>
              <h3 className={s.h3}>{b.highlightsTitle}</h3>
              <ul className={s.highlightGrid}>
                {b.highlights.map(([name, info]) => (
                  <li key={name}><strong>{name}</strong><span>{info}</span></li>
                ))}
              </ul>
            </>
          )}
        </div>
      );

    case "links":
      return (
        <ul className={s.linkList}>
          {b.items.map(({ label, href }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label} <ArrowRight size={16} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      );

    case "quotes":
      return b.items.map((q) => <blockquote key={q} className={s.quote}>{q}</blockquote>);

    case "button":
      return (
        <p>
          <Link href={b.href} className={s.btnPrimary}>
            {b.label} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </p>
      );

    case "gvi":
      return (
        <>
          {b.stats && (
            <ul className={s.gviStats}>
              {b.stats.map(([v, l]) => (
                <li key={l}><b>{fill(v)}</b><span>{l}</span></li>
              ))}
            </ul>
          )}
          {b.items && (
            <ul className={s.gviGrid}>
              {b.items.map(({ icon, title, text }) => (
                <li key={title}>
                  <Ico name={icon} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          )}
          {toArray(b.about).map((t, i) => <p key={i} className={s.about}>{fill(t)}</p>)}
        </>
      );

    case "faq":
      return (
        <div className={s.faq}>
          {d.faqs.map(({ q, a }, i) => (
            <details key={q} open={i === 0}>
              <summary>
                <span>{q}</span>
                <ChevronRight size={18} aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      );

    default:
      return null;
  }
}

// ─── the page ────────────────────────────────────────────────────────────
export default function BusinessVisaPage({ data: d }) {
  const pageUrl = `${SITE.url}${d.pagePath}`;
  const heroUrl = `${SITE.url}${d.heroImg}`;
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    d.whatsappText || `Hi, I need help with the ${d.country} Business Visa`
  )}`;
  const cta = {
    title: `Ready to Start Your ${d.country} Business Journey?`,
    text: "Talk to a visa specialist and get a clear, personalised route for your business profile.",
    ...d.cta,
  };
  const intro = toArray(d.intro);

  return (
    <div className={`${s.page} ${display.variable} ${body.variable}`}>
      <StructuredData d={d} pageUrl={pageUrl} heroUrl={heroUrl} />

      {/* ══ HERO ═════════════════════════════════════════════════════════ */}
      <header className={s.hero}>
        <Image src={d.heroImg} alt={d.heroAlt} fill priority sizes="100vw" className={s.heroBg} />
        <div className={s.heroShade} aria-hidden="true" />

        <div className={`${s.container} ${s.heroInner}`}>
          <div className={s.heroText}>
            <nav aria-label="Breadcrumb" className={s.breadcrumb}>
              <Link href="/">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">{d.country} Business Visa</span>
            </nav>

            <p className={s.eyebrow}>{d.eyebrow}</p>
            <h1 className={s.h1}>
              {d.h1.main} {d.h1.em && <em>{d.h1.em}</em>}
            </h1>
            <p className={s.heroLead}>{d.lead}</p>

            <ul className={s.chips}>
              {d.chips.map((t) => (
                <li key={t}><CheckCircle size={14} aria-hidden="true" /> {t}</li>
              ))}
            </ul>

            <div className={s.heroActions}>
              <a href={wa} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp Us
              </a>
              <a href={`tel:${SITE.phone}`} className={s.btnGhost}>
                <Phone size={16} aria-hidden="true" /> Call Now
              </a>
            </div>

            <p className={s.since}>
              <Award size={16} aria-hidden="true" /> {d.since || `${YEARS}+ years helping clients`}
            </p>
          </div>

          <aside id="consultation" className={s.formDock} aria-label="Free consultation form">
            <VisaForm />
          </aside>
        </div>
      </header>

      {/* Key facts */}
      <section className={s.statBand} aria-label="Key facts">
        <ul className={`${s.container} ${s.statGrid}`}>
          {d.facts.map(({ icon, value, label, sub }) => (
            <li key={label}>
              <Ico name={icon} size={26} className={s.statIcon} />
              <div>
                <strong className={s.statValue}>{value}</strong>
                <span className={s.statLabel}>{label}</span>
                <span className={s.statSub}>{sub}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ══ BODY ═════════════════════════════════════════════════════════ */}
      <div className={`${s.container} ${s.shell}`}>
        <nav className={s.rail} aria-label="On this page">
          <p className={s.railTitle}>On this page</p>
          <ol className={s.railList}>
            {d.sections.map((sec) => (
              <li key={sec.id}><a href={`#${sec.id}`}>{sec.nav}</a></li>
            ))}
          </ol>
        </nav>

        <article className={s.article}>
          {intro.length > 0 && (
            <div className={s.introWrap}>
              <p className={s.lead}>{rich(intro[0])}</p>
              {intro.slice(1).map((t, i) => <p key={i} className={s.prose}>{rich(t)}</p>)}
            </div>
          )}

          {d.sections.map((sec, i) => (
            <section
              key={sec.id}
              id={sec.id}
              className={`${s.block} ${sec.dark ? s.darkPanel : ""} ${sec.compact ? s.blockCompact : ""}`}
              aria-labelledby={`${sec.id}-h`}
            >
              <SectionHead
                hid={`${sec.id}-h`}
                num={pad(i + 1)}
                kicker={sec.kicker}
                title={sec.title}
                sub={sec.sub}
              />
              {sec.blocks.map((b, j) => (
                <div key={j} className={s.blk}>
                  <Block b={b} d={d} />
                </div>
              ))}
            </section>
          ))}

          <section className={s.cta} aria-labelledby="cta-h">
            <h2 id="cta-h">{cta.title}</h2>
            <p>{cta.text}</p>
            <div className={s.ctaButtons}>
              <a href={`tel:${SITE.phone}`} className={s.ctaPrimary}>
                <Phone size={16} aria-hidden="true" /> Call for a Free Consultation
              </a>
              <a href="#consultation" className={s.ctaSecondary}>Fill the Assessment Form</a>
              {cta.contactHref && (
                <Link href={cta.contactHref} className={s.ctaSecondary}>
                  {cta.contactLabel || "Contact us"}
                </Link>
              )}
            </div>
            <p className={s.ctaMeta}>{SITE.email}</p>
          </section>
        </article>
      </div>

      {/* ══ REVIEWS ══════════════════════════════════════════════════════ */}
      <section className={s.reviews} aria-label="Client reviews">
        <div className={s.container}>
          <ReviewSchema />
          <ReviewCarousel />
        </div>
      </section>

      {/* Mobile quick-contact bar */}
      <nav aria-label="Quick contact" className={s.mobileBar}>
        <a href={`tel:${SITE.phone}`}><Phone size={16} aria-hidden="true" /> Call</a>
        <a href={wa} target="_blank" rel="noopener noreferrer" className={s.mbWhatsapp}>
          <MessageCircle size={16} aria-hidden="true" /> WhatsApp
        </a>
        <a href="#consultation" className={s.mbQuote}>Free Quote</a>
      </nav>
    </div>
  );
}
