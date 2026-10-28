// app/about-us/page.js  (SERVER component)
// Save this file as page.js and the CSS file as about.module.css in the same folder.

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle, Users, Globe, Award, Shield, Clock, Phone, ArrowRight,
  ChevronRight, Target, Eye, Heart, MapPin, MessageCircle,
} from "lucide-react";
import styles from "./about.module.css";
import VisaForm from "@/Components/VisaForm";
import AnimatedHR from "@/Components/AnimatedHR";
import ReviewCarousel from "@/Components/ReviewCarousel";
import { ReviewSchema } from "@/Components/ReviewSchema";

// ───────────────────────────────────────────────────────────────────────────
// SITE FACTS: change once here and the page, metadata and schema all update
// ───────────────────────────────────────────────────────────────────────────
const SITE_URL = "https://www.globalvisainternationals.com";
const PAGE_URL = `${SITE_URL}/about-us`;
const FOUNDING_YEAR = 2016; // if you started earlier, change this one number
const YEARS = new Date().getFullYear() - FOUNDING_YEAR;
const PHONE = "+917022213466";
const WHATSAPP = "917022213466";
const OG_IMAGE = `${SITE_URL}/GVI_Banner.webp`;

// ───────────────────────────────────────────────────────────────────────────
// METADATA
// ───────────────────────────────────────────────────────────────────────────
export const metadata = {
  title: "About Us | Global Visa Internationals – Visa Consultants in Bangalore",
  description:
    "Meet Global Visa Internationals, trusted visa and immigration consultants in Bangalore led by founder Anusha Prashanth. Student, tourist, work, business and PR visas for 45+ countries, with 75,000+ clients guided.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "About Global Visa Internationals | Trusted Immigration Consultants in Bangalore",
    description:
      "Expert PR, work, study and visit visa guidance for Canada, Australia, USA, UK and Europe. 75,000+ clients guided since 2016.",
    url: PAGE_URL,
    siteName: "Global Visa Internationals",
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "About Global Visa Internationals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Global Visa Internationals | Trusted Immigration Consultants",
    description:
      "Learn about Global Visa Internationals: PR, work, study and tourist visa support with 75,000+ clients guided.",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
};

// ───────────────────────────────────────────────────────────────────────────
// PAGE CONTENT
// ───────────────────────────────────────────────────────────────────────────
const STATS = [
  { Icon: Users, value: "75K+", label: "Clients guided" },
  { Icon: Globe, value: "45+", label: "Countries covered" },
  { Icon: Award, value: `${YEARS}+`, label: "Years of experience" },
];

const TRUST_POINTS = [
  "Founder-led team with hands-on visa experience",
  "Honest eligibility assessment before you pay for anything",
  "Offices in Bangalore and London",
];

const VALUES = [
  { Icon: Target, title: "Our Mission", text: "Simplify global mobility through expert guidance, transparent processes and personalised support." },
  { Icon: Eye, title: "Our Vision", text: "Be the most trusted immigration partner worldwide, connecting dreams with opportunities." },
  { Icon: Heart, title: "Our Values", text: "Honesty, accountability and a client-first approach in every case, big or small." },
];

const FEATURES = [
  { Icon: Shield, title: "Trust & Transparency", text: "No hidden fees, no false promises. Honest assessments and clear communication at every step." },
  { Icon: Award, title: "Proven Track Record", text: "75,000+ clients guided across 45+ countries, with consistently high approval rates." },
  { Icon: Users, title: "Personalised Guidance", text: "A tailored strategy for each client based on their unique profile and goals." },
  { Icon: Globe, title: "Global Network", text: "Offices in London and Bangalore give you local expertise with a global perspective." },
  { Icon: CheckCircle, title: "End-to-End Support", text: "Complete assistance from documentation to post-approval guidance." },
  { Icon: Clock, title: "Timely Processing", text: "Efficient handling with regular updates and proactive case management." },
];

const SERVICES = [
  "Student & Study Visas", "Work Visas & Permits", "Family & Spouse Visas", "Visitor & Tourist Visas",
  "Business & Investor Visas", "Permanent Residency", "Visa Refusal Appeals", "Documentation & Notary",
];

const PROCESS = [
  ["01", "Free Consultation", "Initial eligibility assessment"],
  ["02", "Profile Analysis", "Personalised strategy development"],
  ["03", "Documentation", "Comprehensive document preparation"],
  ["04", "Application Filing", "Accurate form submission"],
  ["05", "Follow-up", "Regular case tracking"],
  ["06", "Post-Approval", "Settlement guidance"],
];

// [flag code, name, link]: links point to pages that already exist in your nav
const COUNTRIES = [
  ["gb", "United Kingdom", "/Visa/tourist-visa/united-kingdom"],
  ["us", "United States", "/Visa/tourist-visa/usa"],
  ["ca", "Canada", "/Visa/tourist-visa/canada"],
  ["au", "Australia", "/Visa/tourist-visa/australia"],
  ["eu", "Schengen Area", "/Visa/tourist-visa/schengen"],
  ["nz", "New Zealand", "/Visa/tourist-visa/new-zealand"],
  ["jp", "Japan", "/Visa/tourist-visa/japan"],
  ["sg", "Singapore", "/Visa/tourist-visa/singapore"],
  ["ae", "UAE (Dubai)", "/Visa/tourist-visa/dubai"],
];

// Shown on the page AND in the FAQ schema, so they always match
const FAQS = [
  { q: "Who founded Global Visa Internationals?", a: "Global Visa Internationals was founded by Mrs. Anusha Prashanth, who leads the team with hands-on experience in visa and immigration work." },
  { q: "Where is your office?", a: "Our Bangalore office is at GF-9, Business Point, MG Road, Bengaluru 560025, open Monday to Saturday, 10:00 AM to 6:00 PM. We also have an office in London." },
  { q: "Which visa types do you help with?", a: "Student, tourist, work, business, family and spouse visas, permanent residency, and visa refusal appeals, plus documentation and notary support." },
  { q: "How many countries do you support?", a: "We assist with visas for 45+ countries, including Canada, the USA, the UK, Australia, Schengen countries, New Zealand, Japan, Singapore and the UAE." },
  { q: "How do I book a free consultation?", a: "Fill in the form on this page, call us, or message us on WhatsApp. A visa specialist will contact you to understand your profile and suggest the right route." },
];

// ───────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA: one connected @graph instead of seven separate blobs
// ───────────────────────────────────────────────────────────────────────────
function StructuredData() {
  const org = `${SITE_URL}/#organization`;
  const founder = `${SITE_URL}/#founder`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": org,
        name: "Global Visa Internationals",
        url: SITE_URL,
        logo: `${SITE_URL}/gvilogo.png`,
        image: OG_IMAGE,
        telephone: "+91-7022213466",
        email: "operations@globalvisainternationals.com",
        foundingDate: String(FOUNDING_YEAR),
        description:
          "Visa and immigration consultancy in Bangalore for student, tourist, work, business, family and permanent residency visas.",
        founder: { "@id": founder },
        address: {
          "@type": "PostalAddress",
          streetAddress: "GF-9, Business Point, MG Road",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560025",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: 12.9716, longitude: 77.5946 }, // TODO: use your exact pin
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "18:00",
        },
        areaServed: [{ "@type": "City", name: "Bengaluru" }, { "@type": "Country", name: "India" }],
        sameAs: [
          "https://www.facebook.com/globalvisainternationals/",
          "https://www.instagram.com/globalvisa_internationals/",
          "https://www.linkedin.com/company/global-visa-internationals/",
          "https://x.com/GLOBALVISA1505",
          "https://www.youtube.com/@globalVisaInternationals",
        ],
      },
      {
        "@type": "Person",
        "@id": founder,
        name: "Anusha Prashanth",
        jobTitle: "Founder & CEO",
        image: `${SITE_URL}/profile/founder.jpg`,
        worksFor: { "@id": org },
      },
      {
        "@type": "AboutPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "About Us – Global Visa Internationals",
        description: metadata.description,
        about: { "@id": org },
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "About Us", item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: FAQS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}

// Small flag image (emoji flags don't render on Windows)
const Flag = ({ code }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={`https://flagcdn.com/w40/${code}.png`}
    width={32}
    height={24}
    alt=""
    loading="lazy"
    decoding="async"
    className={styles.flag}
  />
);

// ───────────────────────────────────────────────────────────────────────────
// PAGE
// ───────────────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <div className={styles.page}>
      <StructuredData />

      {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
      <header className={styles.hero}>
        <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
        <div className={styles.floaters} aria-hidden="true">
          {[["us", "f1"], ["gb", "f2"], ["ca", "f3"], ["au", "f4"], ["eu", "f5"]].map(([code, pos]) => (
            <span key={code} className={`${styles.floater} ${styles[pos]}`}>
              <Flag code={code} />
            </span>
          ))}
        </div>

        <div className={styles.heroInner}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">About Us</span>
          </nav>

          <p className={styles.eyebrow}>About Global Visa Internationals</p>
          <h1 className={styles.heroTitle}>
            Your Trusted Partner in <span>Global Immigration</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Bangalore&apos;s visa consultants for {YEARS}+ years. We have guided 75,000+ students,
            professionals and families to the right visa, with honest advice at every step.
          </p>

          <div className={styles.heroActions}>
            <a href="#consultation" className={styles.btnPrimary}>
              Free Consultation <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi%20I%20would%20like%20to%20schedule%20a%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp Us
            </a>
          </div>

          <ul className={styles.heroChips}>
            {["Free eligibility check", "Transparent pricing", "Founder-led team"].map((t) => (
              <li key={t}>
                <CheckCircle size={14} aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <svg className={styles.wave} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M0 40C240 80 480 0 720 30s480 50 720 10V80H0Z" fill="#fff" />
        </svg>
      </header>

      {/* Stats card floats over the hero edge */}
      <div className={styles.statsWrap}>
        <dl className={styles.stats}>
          {STATS.map(({ Icon, value, label }) => (
            <div key={label} className={styles.stat}>
              <Icon className={styles.statIcon} aria-hidden="true" />
              <dt className={styles.statLabel}>{label}</dt>
              <dd className={styles.statValue}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ══ STORY + FOUNDER ════════════════════════════════════════════════ */}
      <section className={styles.section} aria-labelledby="story-title">
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <p className={styles.kicker}>Our Story</p>
              <h2 id="story-title" className={styles.sectionTitle}>
                Making Global Mobility <span className={styles.accent}>Simple &amp; Accessible</span>
              </h2>
              <p className={styles.lead}>
                At Global Visa Internationals, we turn complex immigration processes into
                straightforward journeys. Founded by Mrs. Anusha Prashanth in {FOUNDING_YEAR}, our mission
                is to make international relocation, education and career advancement accessible to
                everyone.
              </p>
              <ul className={styles.checkList}>
                {TRUST_POINTS.map((t) => (
                  <li key={t}>
                    <CheckCircle size={18} aria-hidden="true" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <figure className={styles.founder}>
              <div className={styles.founderPhoto}>
                <Image
                  src="/profile/founder.jpg"
                  alt="Anusha Prashanth, Founder and CEO of Global Visa Internationals"
                  fill
                  sizes="(min-width: 1024px) 440px, 90vw"
                  className={styles.founderImg}
                  priority
                />
                <span className={styles.founderChip}>
                  <Award size={15} aria-hidden="true" /> {YEARS}+ years
                </span>
                <figcaption className={styles.founderBadge}>
                  <strong>Anusha Prashanth</strong>
                  <span>Founder &amp; CEO</span>
                </figcaption>
              </div>
              <div className={styles.founderBio}>
                <h3>Leading with Experience</h3>
                <p>
                  With {YEARS}+ years of hands-on experience in visa and immigration, Mrs. Anusha
                  Prashanth leads our team with passion and precision. Her guidance has helped
                  thousands of people reach their international goals.
                </p>
                <div className={styles.founderMeta}>
                  <span><Clock size={16} aria-hidden="true" /> {YEARS}+ years experience</span>
                  <span><Shield size={16} aria-hidden="true" /> Visa expert</span>
                </div>
              </div>
            </figure>
          </div>

          <ul className={styles.valuesGrid}>
            {VALUES.map(({ Icon, title, text }, i) => (
              <li key={title} className={styles.valueCard}>
                <span className={styles.valueNum} aria-hidden="true">0{i + 1}</span>
                <span className={styles.valueIcon}><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AnimatedHR direction="left" duration={1.2} />

      {/* ══ MAIN CONTENT + STICKY FORM ═════════════════════════════════════ */}
      <div className={`${styles.container} ${styles.mainGrid}`}>
        <div className={styles.mainCol}>
          {/* Why choose us */}
          <section aria-labelledby="why-title">
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Why Choose Us</p>
              <h2 id="why-title" className={styles.sectionTitle}>Why Choose Global Visa Internationals</h2>
              <p className={styles.sectionSub}>Experience the difference of a client-first approach.</p>
            </div>
            <ul className={styles.featuresGrid}>
              {FEATURES.map(({ Icon, title, text }) => (
                <li key={title} className={styles.featureCard}>
                  <span className={styles.featureIcon}><Icon size={26} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Services + process */}
          <section className={styles.dark} aria-labelledby="services-title">
            <h2 id="services-title" className={styles.darkTitle}>Our Comprehensive Services</h2>
            <ul className={styles.servicesList}>
              {SERVICES.map((s) => (
                <li key={s}><CheckCircle size={18} aria-hidden="true" /> {s}</li>
              ))}
            </ul>

            <h3 className={styles.processTitle}>Our 6-Step Process</h3>
            <ol className={styles.process}>
              {PROCESS.map(([n, title, desc]) => (
                <li key={n}>
                  <span className={styles.stepNum}>{n}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Countries */}
          <section aria-labelledby="countries-title">
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Destinations</p>
              <h2 id="countries-title" className={styles.sectionTitle}>Global Reach, Local Expertise</h2>
              <p className={styles.sectionSub}>Serving clients across major international destinations.</p>
            </div>
            <ul className={styles.countries}>
              {COUNTRIES.map(([code, name, href]) => (
                <li key={name}>
                  <Link href={href} prefetch={false} className={styles.country}>
                    <Flag code={code} />
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className={`${styles.country} ${styles.countryMore}`}>
                  <Globe size={22} aria-hidden="true" />
                  <span>35+ more</span>
                </Link>
              </li>
            </ul>
          </section>

          {/* FAQ: native <details>, answers are in the HTML for search engines */}
          <section aria-labelledby="faq-title">
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>FAQ</p>
              <h2 id="faq-title" className={styles.sectionTitle}>Frequently Asked Questions</h2>
            </div>
            <div className={styles.faq}>
              {FAQS.map(({ q, a }, i) => (
                <details key={q} open={i === 0}>
                  <summary>
                    <span>{q}</span>
                    <ChevronRight size={18} aria-hidden="true" />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Visit us */}
          <section className={styles.visit} aria-labelledby="visit-title">
            <MapPin size={22} aria-hidden="true" />
            <div>
              <h2 id="visit-title">Visit our Bangalore office</h2>
              <address>
                GF-9, Business Point, MG Road, Bengaluru, Karnataka 560025
              </address>
              <p>Monday to Saturday, 10:00 AM to 6:00 PM</p>
            </div>
          </section>

          {/* CTA */}
          <section className={styles.cta} aria-labelledby="cta-title">
            <h2 id="cta-title">Begin Your Global Journey Today</h2>
            <p>Take the first step towards your international goals with expert guidance.</p>
            <div className={styles.ctaButtons}>
              <a href={`tel:${PHONE}`} className={styles.ctaPrimary}>
                <Phone size={16} aria-hidden="true" /> Free Eligibility Check
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%20I%20would%20like%20to%20schedule%20a%20consultation`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
              >
                Schedule Consultation
              </a>
            </div>
          </section>
        </div>

        {/* Form sidebar */}
        <aside id="consultation" className={styles.formCol} aria-label="Free consultation form">
          <VisaForm />
        </aside>
      </div>

      {/* ══ REVIEWS ════════════════════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.reviews}`} aria-labelledby="reviews-title">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.kicker}>Testimonials</p>
            <h2 id="reviews-title" className={styles.sectionTitle}>What Our Clients Say</h2>
          </div>
          <ReviewSchema />
          <ReviewCarousel />
        </div>
      </section>
    </div>
  );
}