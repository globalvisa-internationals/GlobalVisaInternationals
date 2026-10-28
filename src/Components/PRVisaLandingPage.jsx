import Image from "next/image";
import VisaForm from "@/components/VisaForm";
import styles from "./PRVisaLandingPage.module.css";

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

function Heading({ eyebrow, title, description }) {
  return (
    <div className={styles.sectionHeading}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className={styles.sectionDescription}>{description}</p> : null}
    </div>
  );
}

export default function PRVisaLandingPage({ page }) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalvisainternationals.com/" },
        { "@type": "ListItem", position: 2, name: "Permanent Residency Visa", item: "https://www.globalvisainternationals.com/Visa/permanent-residency-visa" },
        { "@type": "ListItem", position: 3, name: `${page.country} PR Visa`, item: page.url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${page.country} Permanent Residence Guidance`,
      serviceType: page.serviceType,
      description: page.description,
      url: page.url,
      provider: {
        "@type": "Organization",
        name: "Global Visa Internationals",
        url: "https://www.globalvisainternationals.com/",
      },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main className={styles.page}>
      {schemas.map((schema, index) => <JsonLd key={index} data={schema} />)}

      <section className={styles.hero} aria-labelledby="pr-hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{page.heroEyebrow}</p>
          <h1 id="pr-hero-title">{page.h1}</h1>
          <p className={styles.heroLead}>{page.heroLead}</p>
          <ul className={styles.heroPoints}>
            {page.heroPoints.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}
          </ul>
          <div className={styles.actions}>
            <a className={styles.primary} href="#contact">Get PR Guidance</a>
            <a className={styles.secondary} href="#pathways">Explore Pathways</a>
          </div>
          <p className={styles.disclaimer}>Visa rules and eligibility can change. Always confirm current requirements with the official immigration authority.</p>
        </div>
        <div className={styles.heroVisual}>
          <Image
            src={page.image}
            alt={page.imageAlt || `${page.country} permanent residence guidance`}
            width={1200}
            height={630}
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            className={styles.heroImage}
          />
          <p className={styles.imageCaption}>Plan your next step with clear, practical information</p>
        </div>
      </section>

      <nav className={styles.jumpNav} aria-label="On this page">
        <a href="#overview">Overview</a><a href="#pathways">Visa pathways</a><a href="#eligibility">Eligibility</a><a href="#documents">Documents</a><a href="#process">Process</a><a href="#costs">Costs</a><a href="#faqs">FAQs</a>
      </nav>

      <div className={styles.contentLayout}>
        <div className={styles.contentMain}>
          <section className={styles.section} id="overview">
            <Heading eyebrow={`${page.country} PR guide`} title={`Understanding ${page.country} permanent residence`} description={page.description} />
            <p className={styles.bodyCopy}>{page.overview}</p>
            <div className={styles.cardGrid}>
              {page.benefits.map((item) => <article className={styles.card} key={item.number}>
                <span className={styles.number}>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
              </article>)}
            </div>
            <div className={styles.sourceNote}>For official and up-to-date requirements, consult <a href={page.officialUrl} target="_blank" rel="noopener noreferrer">{page.officialLabel}</a>.</div>
          </section>

          <section className={`${styles.section} ${styles.tinted}`} id="pathways">
            <Heading eyebrow="Explore your options" title={`${page.country} PR pathways`} description="The right pathway depends on your circumstances and the current rules. Review the official criteria for the specific visa or program before you apply." />
            <div className={styles.pathGrid}>
              {page.pathways.map((item) => <article className={styles.pathCard} key={item.title}>
                <span className={styles.tag}>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>)}
            </div>
          </section>

          <section className={styles.section} id="eligibility">
            <Heading eyebrow="Before you apply" title="Eligibility factors to review" description="Requirements vary by program and individual circumstances. These are common areas to check, not a guarantee of eligibility." />
            <div className={styles.eligibility}>
              <div className={styles.checkList}>
                {page.eligibility.map((item) => <div className={styles.checkRow} key={item.title}><span aria-hidden="true">✓</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}
              </div>
              <aside className={styles.tip}><p className={styles.eyebrow}>Helpful reminder</p><h3>Check the official criteria first</h3><p>Program requirements, invitations, fees and processing times can change. Use official sources to confirm details before spending money on tests or assessments.</p><a href={page.officialUrl} target="_blank" rel="noopener noreferrer">Visit the official website ↗</a></aside>
            </div>
          </section>

          <section className={`${styles.section} ${styles.tinted}`} id="documents">
            <Heading eyebrow="Get organised" title="Documents to prepare" description="The documents required vary by visa subclass or program and your personal circumstances. Use the official checklist for your application." />
            <div className={styles.docGrid}>{page.documents.map((doc) => <div className={styles.doc} key={doc}><span aria-hidden="true">✓</span><div>{doc}</div></div>)}</div>
            <p className={styles.smallNote}>Do not submit documents solely based on this general list. Follow the instructions and checklist for your specific application.</p>
          </section>

          <section className={styles.section} id="process">
            <Heading eyebrow="Step by step" title={`How the ${page.country} PR process may work`} description="The exact sequence differs by pathway. Some applicants must complete a profile, assessment, nomination or invitation stage before submitting a visa application." />
            <ol className={styles.timeline}>{page.steps.map((step, index) => <li className={styles.step} key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
          </section>

          <section className={`${styles.section} ${styles.tinted}`} id="costs">
            <div className={styles.costSection}>
              <div><p className={styles.eyebrow}>Budget planning</p><h2>Understand the costs before applying</h2><p>There may be several costs beyond the visa application charge. Amounts depend on the pathway, family size and services required, so confirm current fees with the official authority.</p><a className={styles.primary} href={page.officialUrl} target="_blank" rel="noopener noreferrer">Check Official Requirements</a></div>
              <div className={styles.costCard}><h3>Costs to consider</h3>{page.costItems.map((item) => <div className={styles.costRow} key={item}>{item}<span aria-hidden="true">↗</span></div>)}<p className={styles.smallNote}>This is a planning checklist, not a quotation of current fees.</p></div>
            </div>
          </section>

          <section className={styles.section} id="faqs">
            <Heading eyebrow="Common questions" title={`${page.country} PR visa FAQs`} description="General information only. Check the official immigration authority for rules that apply to your situation." />
            <div className={styles.faqList}>{page.faqs.map((faq) => <details className={styles.faq} key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
          </section>
        </div>

        <aside className={styles.stickyForm} id="contact" aria-label={`${page.country} PR assistance enquiry form`}>
          <div className={styles.formIntro}>
            <span className={styles.formKicker}>PERSONALISED GUIDANCE</span>
            <h2>Discuss your {page.country} PR options</h2>
            <p>Share a few details to discuss possible next steps and the requirements you should review.</p>
          </div>
          <div className={styles.formCard}><VisaForm /></div>
          <p className={styles.formTrust}>Your options depend on official eligibility rules. No visa outcome or processing time is guaranteed.</p>
        </aside>
      </div>
    </main>
  );
}
