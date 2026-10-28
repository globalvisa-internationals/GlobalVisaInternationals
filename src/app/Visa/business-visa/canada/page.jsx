// app/Visa/business-visa/canada/page.js  (SERVER component)
// Save visapage.module.css next to this file (it replaces the old one).
// All SEO (metadata, schema, headings, FAQ, anchors) is kept; only layout/design changed.

import Image from "next/image";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import {
  Rocket, Briefcase, Landmark, Building2, TrendingUp, Globe, Lightbulb, Shield, Users,
  Award, Clock, FileText, Heart, MapPin, Info, Phone, MessageCircle, ChevronRight,
  ArrowRight, CheckCircle, Coins, Languages,
} from "lucide-react";
import styles from "./visapage.module.css";
import VisaForm from "@/Components/VisaForm";
import ReviewCarousel from "@/Components/ReviewCarousel";
import { ReviewSchema } from "@/Components/ReviewSchema";

const display = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-display" });
const body = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body" });

// ───────────────────────────────────────────────────────────────────────────
// FACTS TO KEEP CURRENT: update these when you refresh the page content
// ───────────────────────────────────────────────────────────────────────────
const SITE_URL = "https://www.globalvisainternationals.com";
const PAGE_PATH = "/Visa/business-visa/canada";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const HERO_IMG_PATH = "/business-visa/Canada_Business_Visa_ASSISTANCE.webp";
const HERO_IMG_URL = `${SITE_URL}${HERO_IMG_PATH}`;
const PHONE = "+91 7022213466";
const WHATSAPP = "91 7022213466";
const FOUNDING_YEAR = 2016;
const YEARS = new Date().getFullYear() - FOUNDING_YEAR;

const FEES_AS_OF = "June 2025"; // ⚠ fees below date from then. Re-check on Canada.ca and update.
const DATE_PUBLISHED = "2025-01-10";
const DATE_MODIFIED = "2025-11-04"; // update ONLY when you genuinely revise the content

// ───────────────────────────────────────────────────────────────────────────
// METADATA (unchanged)
// ───────────────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Canada Business Visa from India: Requirements, Cost & Process",
  description:
    "Apply for a Canada Business Visa from India with expert help. Compare the Start-up Visa, Self-Employed and PNP routes, fees, requirements and the application process.",
  alternates: { canonical: PAGE_URL },
  authors: [{ name: "Global Visa Internationals" }],
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "Canada Business Visa Assistance from India | Global Visa Internationals",
    description:
      "Expert guidance on the Start-up Visa, Self-Employed and Provincial Nominee routes: requirements, costs and the full application process.",
    url: PAGE_URL,
    type: "website",
    siteName: "Global Visa Internationals",
    locale: "en_IN",
    images: [{ url: HERO_IMG_URL, width: 1200, height: 630, alt: "Canada Business Visa assistance from Global Visa Internationals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada Business Visa from India | Cost, Requirements & Process",
    description: "Start-up Visa, Self-Employed and PNP routes explained, with expert help for Indian entrepreneurs and investors.",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    images: [HERO_IMG_URL],
  },
};

// ───────────────────────────────────────────────────────────────────────────
// CONTENT (identical text to your original)
// ───────────────────────────────────────────────────────────────────────────
const TOC = [
  ["pathways", "Visa pathways"],
  ["requirements", "Requirements"],
  ["cost", "Cost & fees"],
  ["why-canada", "Why Canada"],
  ["cities", "Top cities"],
  ["tips", "Application tips"],
  ["beyond", "Business planning"],
  ["why-gvi", "Why GVI"],
  ["faq", "FAQ"],
];

const FACTS = [
  { Icon: Briefcase, value: "4", label: "Main pathways", sub: "Start-up, Self-Employed, PNP, ICT" },
  { Icon: Award, value: "PR", label: "Route to residency", sub: "Most programs lead to permanent residence" },
  { Icon: Languages, value: "CLB 4–5", label: "Typical language level", sub: "IELTS, CELPIP, TEF or TCF" },
  { Icon: Coins, value: "CAD 150K+", label: "Typical PNP investment", sub: "Varies by province and stream" },
];

const PATHWAYS = [
  {
    Icon: Rocket,
    name: "Start-up Visa Program",
    tag: "Permanent residence",
    desc: "For entrepreneurs with innovative business ideas that can create jobs for Canadians and compete globally. You need a Letter of Support from a designated organization (venture capital fund, angel investor group or business incubator).",
    req: "A qualifying business and a Letter of Support, sufficient settlement funds (based on LICO), English or French at CLB 5, and meeting health and character requirements.",
  },
  {
    Icon: Briefcase,
    name: "Self-Employed Persons Program",
    tag: "Permanent residence",
    desc: "For people with relevant experience in cultural activities or athletics who intend and are able to make a significant contribution to the cultural or athletic life of Canada as self-employed persons.",
    req: "Relevant experience, the intention and ability to be self-employed in Canada, enough points on the selection grid, language ability (not pass/fail), settlement funds, and meeting health and character requirements.",
  },
  {
    Icon: Landmark,
    name: "Provincial Nominee Programs (Business streams)",
    tag: "Provincial nomination",
    desc: "Many provinces and territories run their own entrepreneur and investor streams. These often involve an Expression of Interest (EOI), a business plan, a minimum investment, and sometimes a temporary work permit stage before permanent residency.",
    req: "Varies by province: typically a minimum net worth, an investment of CAD 150,000 to CAD 1 million+, a detailed business plan, active management, job creation, and language (CLB 4 or 5) and education requirements. Examples: OINP Entrepreneur Stream and BC PNP Entrepreneur Immigration.",
  },
  {
    Icon: Building2,
    name: "Intra-Company Transfer (ICT) Work Permit",
    tag: "Temporary work permit",
    desc: "Lets multinational companies transfer executives, senior managers or specialized-knowledge workers from a foreign branch to a Canadian branch or affiliate. Not a direct path to PR, but the Canadian work experience can later support programs like Express Entry.",
    req: "Senior executive, senior manager or specialized-knowledge worker; at least one year of continuous employment with the company; a qualifying relationship between the Canadian and foreign companies. No LMIA required.",
  },
];

const REQUIREMENTS = [
  ["Age", "At least 18 years old. No specific upper age limit for most programs, though younger applicants may score more points in some programs.", "Age is a factor in selection criteria for some programs (e.g., Self-Employed Persons, some PNPs)."],
  ["Business Plan/Concept", "Comprehensive, viable, and often innovative business plan (for Start-up and PNP Entrepreneur streams).", "Must demonstrate potential for economic benefit to Canada (e.g., job creation, innovation)."],
  ["Investment Funds / Net Worth", "Specific thresholds vary by visa stream.", "From a secured commitment for the Start-up Visa to significant net worth and investment for some PNP Entrepreneur streams (e.g., CAD 150,000 to CAD 1,000,000+). Must be legally acquired."],
  ["Business/Management Experience", "Demonstrable successful business ownership, senior management, or relevant self-employment experience.", "Crucial for showing you can execute your business plan or manage operations."],
  ["English/French Language", "Minimum CLB 5 for the Start-up Visa; CLB 4/5 common for PNP Entrepreneur streams.", "Required for most permanent residence pathways, with points for higher proficiency. Must be from an IRCC-approved test."],
  ["Health & Character", "Must meet Canada's health and character requirements.", "Medical exams and police certificates are mandatory for all applicants and dependents."],
  ["Genuine Intent", "Clear intention to establish or participate in a qualifying business or investment in Canada.", "Shown through detailed plans, market research and demonstrable commitment. Interviews may be conducted."],
];

const FEES = [
  ["Start-up Visa (Principal Applicant)", "CAD 2,075", "₹1,24,500"],
  ["Start-up Visa (Spouse/Partner)", "CAD 1,325", "₹79,500"],
  ["Start-up Visa (Dependent Child)", "CAD 225", "₹13,500"],
  ["Self-Employed Persons Program", "CAD 1,650", "₹99,000"],
  ["Provincial Nominee Program (Business Streams)", "CAD 1,215 – 3,500+ (approx.)", "₹72,900 – ₹2,10,000+"],
  ["Intra-Company Transfer (ICT) Work Permit (Employer Compliance Fee)", "CAD 230", "₹13,800"],
  ["Open Work Permit Holder Fee (if applicable)", "CAD 100", "₹6,000"],
  ["Right of Permanent Residence Fee (RPRF, for PR applications)", "CAD 575 (per adult)", "₹34,500"],
];

const OTHER_COSTS = [
  ["Right of Permanent Residence Fee (RPRF)", "An additional fee for successful permanent residence applicants (CAD 575 per adult)."],
  ["Biometrics Fee", "Required for most applicants, typically CAD 85 for one person or CAD 170 for a family."],
  ["Language Tests (IELTS/CELPIP/TEF/TCF)", "Required for most principal applicants and often adult dependents. Typically INR 17,000 to 20,000 per test (about CAD 280 to 330)."],
  ["Educational Credential Assessment (ECA)", "Required for most PR applications if your education was obtained outside Canada. Typically CAD 200 to 300."],
  ["Medical Examination", "Required for all applicants and dependents. Generally INR 5,000 to 8,000 per person in India (about CAD 80 to 130)."],
  ["Police Certificates", "Needed from every country you have lived in for 6 months or more over the last 10 years since turning 18. Costs vary by issuing authority."],
  ["Translation Fees", "Certified translations are needed for any supporting documents not in English or French."],
  ["Settlement Funds / Business Investment", "A crucial requirement for most economic programs. For the Start-up Visa you need a commitment from a designated organization. Many PNP business streams require a minimum investment (e.g., CAD 150,000 to 500,000+)."],
  ["Consultancy Fees (if applicable)", "Professional fees vary with the services provided, including business plan assistance, provincial nomination guidance and application management. Contact us for a transparent breakdown."],
];

const EXAMPLE_COSTS = [
  ["Visa Application Charge (Start-up Visa)", "CAD 2,075"],
  ["Right of Permanent Residence Fee (RPRF)", "CAD 575"],
  ["Biometrics Fee", "CAD 85"],
  ["English Language Test", "~CAD 300"],
  ["Educational Credential Assessment (ECA)", "~CAD 250"],
  ["Medical Exam", "~CAD 100"],
  ["Police Certificates", "Variable"],
];

const BENEFITS = [
  { Icon: TrendingUp, title: "Strong & Stable Economy", text: "A resilient, diverse economy that performs well globally, giving business operations and investments a secure base." },
  { Icon: Globe, title: "Strategic Location & Global Access", text: "Bordering the United States, with access to major international trade routes and a thriving global economic zone." },
  { Icon: Landmark, title: "Pro-Business Environment", text: "Government support for business and innovation, with incentives, a streamlined regulatory framework and funding programs." },
  { Icon: Lightbulb, title: "Skilled Workforce & Innovation", text: "A highly educated, skilled workforce and a strong culture of research, development and innovation." },
  { Icon: Heart, title: "High Quality of Life", text: "Among the top countries for quality of life: safe, welcoming multicultural cities, natural beauty and excellent social infrastructure." },
  { Icon: Building2, title: "World-Class Infrastructure", text: "Advanced telecommunications, efficient transport networks and modern commercial facilities." },
  { Icon: Award, title: "Clear Path to Permanent Residency", text: "Many business immigration programs offer a pathway to permanent residency and full rights in your new home." },
];

const CITIES = [
  ["Toronto, Ontario", "Canada's largest city and financial capital. A major hub for finance, technology, international trade and creative industries, with a large talent pool."],
  ["Vancouver, British Columbia", "A gateway to the Asia-Pacific, known for its tech sector, film industry and natural resources, with a growing innovation ecosystem."],
  ["Montreal, Quebec", "A unique North American hub with strong aerospace, IT and pharmaceutical sectors. Its bilingual (English and French) environment offers distinct advantages."],
  ["Calgary, Alberta", "The heart of Canada's energy sector, diversifying rapidly into technology, finance and logistics, with a lower cost of living than the coastal cities."],
  ["Ottawa, Ontario", "The capital, known for its government sector, technology industry (especially cybersecurity and telecommunications) and research institutions."],
  ["Edmonton, Alberta", "A growing economic centre with strengths in energy, manufacturing and health sciences, and a good quality of life."],
  ["Halifax, Nova Scotia", "A growing Atlantic hub in ocean technology, clean energy and an emerging tech sector, with potential for region-specific immigration programs."],
];

const TIPS = [
  ["Develop a Robust Business Plan", "For entrepreneur and start-up visas, a comprehensive, well-researched and realistic plan showing innovation, viability, scalability and benefit to the Canadian economy is critical."],
  ["Secure Required Support or Nomination", "The Start-up Visa needs a Letter of Support from a designated angel investor group, venture capital fund or business incubator. PNP business streams need a provincial nomination."],
  ["Demonstrate Genuine Intent", "Clearly show your commitment to establishing or investing in a business in Canada and your active role in managing it."],
  ["Meet Financial Requirements Strictly", "Be able to show the required settlement funds, business capital and/or investment funds for your chosen stream."],
  ["Gather Documents Early & Accurately", "Applications need extensive financial, business and personal documents. Start well in advance and make sure everything is accurate and complete."],
  ["Meet Language Requirements", "Most streams need a minimum level of English or French. Plan to take an approved test (IELTS, CELPIP, TEF or TCF) if you haven't already."],
  ["Maintain a Clean Record", "A clean financial and criminal record is essential for Canadian immigration."],
  ["Seek Professional Guidance", "The process is complex and needs meticulous preparation. Experienced professionals can help optimise your application and improve your chances."],
];

const BEYOND = [
  { Icon: TrendingUp, title: "Market Research & Local Regulations", points: ["Research the Canadian market for your business or investment: regulations, competition, industry trends and opportunities.", "Make sure your proposal is commercially viable and aligns with Canada's economic needs and, for a PNP, regional demands."] },
  { Icon: Users, title: "Networking & Local Connections", points: ["Build a network through local business associations, chambers of commerce and industry groups.", "Local connections provide insights, partnerships and support for your venture."] },
  { Icon: FileText, title: "Legal & Financial Advice", points: ["Work with Canadian legal and financial professionals on tax, business registration, employment law and compliance.", "We can connect you with trusted partners for these specialised services."] },
  { Icon: Heart, title: "Cultural Integration", points: ["Learn Canadian business culture, which values collaboration, diversity and work-life balance.", "Embrace the multicultural lifestyle, natural landscapes and strong community spirit."] },
];

const STAY_TIPS = [
  ["Stay Updated", "Immigration policies and business regulations change. Regularly check Canada.ca and the relevant provincial government sites."],
  ["Be Patient & Persistent", "The process can be lengthy because of the thorough assessment. Patience and a positive outlook are key."],
  ["Prepare for an Interview", "Some streams, especially PNPs, may require an interview. Be ready to discuss your business plan, experience and intentions in detail."],
  ["Maintain Valid Documents", "Keep your passport and all required documents valid throughout the application and beyond."],
  ["Embrace the Adventure", "Starting a business in a new country is full of challenges and opportunities. Learn from the experience and enjoy building your new life in Canada."],
];

const WHY_GVI = [
  { Icon: Shield, title: "Specialised Canada Business Visa Expertise", text: "Deep knowledge of the Start-up Visa, Self-Employed Program and PNP business streams, so you get the pathway that fits your profile and goals." },
  { Icon: FileText, title: "Business Plan & Funding Guidance", text: "Help developing compliant business plans, and guidance on securing support from designated organizations or meeting investment criteria." },
  { Icon: CheckCircle, title: "Meticulous Document Preparation", text: "We guide you through financial records, business proofs and language-test requirements, saving you time and stress." },
  { Icon: Clock, title: "Up-to-Date Knowledge", text: "We track visa regulation and program changes so your application stays accurate, compliant and complete." },
  { Icon: Award, title: "Focused on Your Outcome", text: "A careful approach and a deep understanding of the immigration landscape, aimed at the best chance of success." },
  { Icon: Globe, title: "Support Beyond the Application", text: "Guidance on language proficiency, the Canadian business environment and settlement advice." },
];

// Shown on the page AND used for FAQ schema, so they always match
const FAQS = [
  { q: "What types of Canada Business Visas are available?", a: "Canada offers the Start-up Visa Program, the Self-Employed Persons Program and Provincial Nominee Program (PNP) entrepreneur streams. Companies can also transfer senior staff to Canada on an Intra-Company Transfer (ICT) work permit." },
  { q: "How much does a Canada Business Visa cost from India?", a: `Government fees depend on the program: about CAD 1,215 to 3,500+ for PNP business streams, CAD 1,650 for the Self-Employed Persons Program and CAD 2,075 for a Start-up Visa principal applicant (figures as of ${FEES_AS_OF}). Budget separately for biometrics, language tests, medicals, credential assessment and consultancy fees.` },
  { q: "Who is eligible for a Canada Business Visa?", a: "Eligible candidates include entrepreneurs, self-employed individuals and investors with a solid business plan, proof of funds and relevant experience, who also meet Canada's health and character requirements." },
  { q: "What language level do I need?", a: "The Start-up Visa needs a minimum of CLB 5. PNP entrepreneur streams commonly ask for CLB 4 or 5. Results must come from an IRCC-approved test (IELTS, CELPIP, TEF or TCF)." },
  { q: "Does a Canada Business Visa lead to permanent residence?", a: "The Start-up Visa, Self-Employed Persons Program and PNP business streams are permanent-residence pathways. The ICT work permit is temporary, but the Canadian experience can support a later PR application, for example through Express Entry." },
  { q: "How much do I need to invest?", a: "It depends on the program. The Start-up Visa requires a commitment from a designated organization plus settlement funds. Many PNP business streams require a minimum investment, typically from CAD 150,000 to CAD 1 million or more." },
];

const SERVICE_OFFERS = [
  "Start-Up Visa Application Guidance",
  "Self-Employed Visa Support",
  "PNP Entrepreneur Stream Application",
  "Intra-Company Transfer Work Permit Support",
];

// ───────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA: one connected graph (WebSite node added so isPartOf resolves)
// ───────────────────────────────────────────────────────────────────────────
function StructuredData() {
  const org = `${SITE_URL}/#organization`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": org,
        name: "Global Visa Internationals",
        url: SITE_URL,
        logo: `${SITE_URL}/gvilogo.png`,
        image: HERO_IMG_URL,
        telephone: "+91-7022213466",
        address: {
          "@type": "PostalAddress",
          streetAddress: "GF-9, Business Point, MG Road",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560025",
          addressCountry: "IN",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "18:00",
        },
        areaServed: { "@type": "Country", name: "India" },
        sameAs: [
          "https://www.facebook.com/globalvisainternationals/",
          "https://www.instagram.com/globalvisa_internationals/",
          "https://www.linkedin.com/company/global-visa-internationals/",
          "https://x.com/GLOBALVISA1505",
          "https://www.youtube.com/@globalVisaInternationals",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Global Visa Internationals",
        inLanguage: "en-IN",
        publisher: { "@id": org },
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: metadata.title,
        description: metadata.description,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        primaryImageOfPage: { "@type": "ImageObject", url: HERO_IMG_URL },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#service` },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Canada Business Visa Application Assistance",
        serviceType: "Canada Business Visa Application Assistance",
        provider: { "@id": org },
        areaServed: { "@type": "Country", name: "India" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Canada Business Visa Services",
          itemListElement: SERVICE_OFFERS.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Canada Business Visa", item: PAGE_URL },
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

const SectionHead = ({ hid, num, kicker, title, sub }) => (
  <div className={styles.sectionHead}>
    <p className={styles.kicker}><b>{num}</b> {kicker}</p>
    <h2 id={hid} className={styles.h2}>{title}</h2>
    {sub && <p className={styles.sub}>{sub}</p>}
  </div>
);

// ───────────────────────────────────────────────────────────────────────────
// PAGE
// ───────────────────────────────────────────────────────────────────────────
export default function CanadaBusinessVisa() {
  return (
    <div className={`${styles.page} ${display.variable} ${body.variable}`}>
      <StructuredData />

      {/* ══ HERO: full-bleed photo, headline left, enquiry form docked right ═ */}
      <header className={styles.hero}>
        <Image
          src={HERO_IMG_PATH}
          alt="Canada business visa assistance from Global Visa Internationals"
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />
        <div className={styles.heroShade} aria-hidden="true" />

        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">Canada Business Visa</span>
            </nav>

            <p className={styles.eyebrow}>Canada Business Visa Assistance</p>
            <h1 className={styles.h1}>
              Canada Business Visa Assistance <em>from India</em>
            </h1>
            <p className={styles.heroLead}>
              Expand your business or invest in Canada&apos;s thriving economy. We guide Indian
              entrepreneurs, investors and business owners through the Start-up Visa,
              Self-Employed, Provincial Nominee and ICT routes.
            </p>

            <ul className={styles.chips}>
              {["Start-up Visa", "Self-Employed", "PNP Entrepreneur", "ICT Work Permit"].map((t) => (
                <li key={t}>
                  <CheckCircle size={14} aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>

            <div className={styles.heroActions}>
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20help%20with%20a%20Canada%20Business%20Visa`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnGhost}
              >
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp Us
              </a>
              <a href={`tel:${PHONE}`} className={styles.btnGhost}>
                <Phone size={16} aria-hidden="true" /> Call Now
              </a>
            </div>

            <p className={styles.since}>
              <Award size={16} aria-hidden="true" /> {YEARS}+ years helping clients
            </p>
          </div>

          <aside id="consultation" className={styles.formDock} aria-label="Free consultation form">
            <VisaForm />
          </aside>
        </div>
      </header>

      {/* Key facts band */}
      <section className={styles.statBand} aria-label="Key facts">
        <ul className={`${styles.container} ${styles.statGrid}`}>
          {FACTS.map(({ Icon, value, label, sub }) => (
            <li key={label}>
              <Icon className={styles.statIcon} aria-hidden="true" />
              <div>
                <strong className={styles.statValue}>{value}</strong>
                <span className={styles.statLabel}>{label}</span>
                <span className={styles.statSub}>{sub}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ══ BODY: left rail (contents) + article ═══════════════════════════ */}
      <div className={`${styles.container} ${styles.shell}`}>
        <nav className={styles.rail} aria-label="On this page">
          <p className={styles.railTitle}>On this page</p>
          <ol className={styles.railList}>
            {TOC.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className={styles.article}>
          <p className={styles.lead}>
            Dreaming of expanding your business horizons or investing in a thriving, welcoming
            economy? Canada, a land of robust economic growth, strategic global connections and
            abundant opportunities, is calling. A Canada Business Visa opens doors to an
            exceptional environment for entrepreneurs, investors and business professionals. It
            is more than just a visa: it is a chance to build a brighter future for your
            enterprise and potentially your family.
          </p>

          {/* 01 Pathways */}
          <section id="pathways" className={styles.block} aria-labelledby="pathways-h">
            <SectionHead
              hid="pathways-h"
              num="01"
              kicker="Visa Pathways"
              title="Canada Business Visa Pathways: Find Your Best Fit"
              sub="IRCC and the provinces offer several routes for entrepreneurs and investors. Here is how they differ."
            />
            <div className={styles.routes}>
              {PATHWAYS.map(({ Icon, name, tag, desc, req }, i) => (
                <article key={name} className={styles.route}>
                  <div className={styles.routeNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className={styles.routeBody}>
                    <div className={styles.routeTop}>
                      <span className={styles.routeIcon}><Icon size={22} aria-hidden="true" /></span>
                      <span className={styles.tag}>{tag}</span>
                    </div>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                  </div>
                  <div className={styles.routeReq}>
                    <strong>Key requirements</strong>
                    <p>{req}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className={styles.assess}>
              <div>
                <h3>Not sure which route fits you?</h3>
                <p>
                  Take our quick assessment to find your best Canada business visa route. Contact
                  Global Visa Internationals for a personalised assessment.
                </p>
              </div>
              <a href="#consultation" className={styles.btnPrimary}>
                Get my free assessment <ArrowRight size={16} aria-hidden="true" />
              </a>
            </aside>
          </section>

          {/* 02 Requirements */}
          <section id="requirements" className={styles.block} aria-labelledby="requirements-h">
            <SectionHead
              hid="requirements-h"
              num="02"
              kicker="Eligibility"
              title="Canada Business Visa Requirements"
              sub="General requirements. The exact criteria vary by visa type."
            />
            <div className={styles.tableWrap}>
              <table className={styles.ledger}>
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col">Requirement (general)</th>
                    <th scope="col">Notes for Canada Business Visa</th>
                  </tr>
                </thead>
                <tbody>
                  {REQUIREMENTS.map(([f, r, n]) => (
                    <tr key={f}>
                      <th scope="row">{f}</th>
                      <td data-label="Requirement">{r}</td>
                      <td data-label="Notes">{n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.footnote}>
              Accurate information and complete documents, especially about your business history
              and financial standing, are essential to avoid delays or refusal.
            </p>
          </section>

          {/* 03 Cost */}
          <section id="cost" className={styles.block} aria-labelledby="cost-h">
            <SectionHead
              hid="cost-h"
              num="03"
              kicker="Cost & Fees"
              title="Canada Business Visa Cost: Fees & Expenses"
              sub={`Figures as of ${FEES_AS_OF}, shown for reference only. Always confirm current fees on Canada.ca.`}
            />

            <div className={styles.costLayout}>
              <div>
                <h3 className={styles.h3}>Core application (processing) fees</h3>
                <div className={styles.tableWrap}>
                  <table className={styles.ledger}>
                    <thead>
                      <tr>
                        <th scope="col">Visa type</th>
                        <th scope="col">Estimated cost (CAD)</th>
                        <th scope="col">Approx. cost (INR, @ ₹60/CAD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FEES.map(([t, c, i]) => (
                        <tr key={t}>
                          <th scope="row">{t}</th>
                          <td data-label="CAD">{c}</td>
                          <td data-label="INR">{i}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className={styles.footnote}>
                  These are application processing fees only. They do not include other associated
                  costs or the mandatory investment and settlement funds. Fees are subject to change by
                  IRCC and provincial governments, and PNP business streams often have their own
                  application fees in addition to federal fees.
                </p>
              </div>

              <aside className={styles.receipt}>
                <div className={styles.receiptHead}>
                  <Info size={18} aria-hidden="true" />
                  <h3>Example out-of-pocket costs for a single Start-up Visa applicant</h3>
                </div>
                <p className={styles.receiptSub}>
                  Excluding consultancy fees and the required business, investment or settlement funds.
                </p>
                <ul className={styles.receiptList}>
                  {EXAMPLE_COSTS.map(([t, v]) => (
                    <li key={t}>
                      <span>{t}</span>
                      <b>{v}</b>
                    </li>
                  ))}
                </ul>
                <div className={styles.receiptTotal}>
                  <span>Estimated total (excluding business, investment and settlement funds)</span>
                  <b>CAD 3,385 – 3,700 (about ₹2.03 – ₹2.22 lakh)</b>
                </div>
                <p className={styles.receiptNote}>
                  These are rough estimates and actual costs vary. Check the official IRCC website
                  (Canada.ca) and provincial government sites for current fees and requirements. For
                  a personalised cost breakdown, reach out to Global Visa Internationals.
                </p>
              </aside>
            </div>

            <h3 className={styles.h3}>Other costs to plan for</h3>
            <ul className={styles.costGrid}>
              {OTHER_COSTS.map(([t, d]) => (
                <li key={t}>
                  <strong>{t}</strong>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 04 Why Canada: bento grid */}
          <section id="why-canada" className={styles.block} aria-labelledby="why-canada-h">
            <SectionHead
              hid="why-canada-h"
              num="04"
              kicker="Why Canada"
              title="Why Choose Canada for Business?"
              sub="Canada is a promise of significant business potential. Here is what makes it a premier destination for business immigration."
            />
            <ul className={styles.bento}>
              {BENEFITS.map(({ Icon, title, text }) => (
                <li key={title} className={styles.tile}>
                  <span className={styles.tileIcon}><Icon size={22} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* 05 Cities: horizontal scroll rail */}
          <section id="cities" className={styles.block} aria-labelledby="cities-h">
            <SectionHead
              hid="cities-h"
              num="05"
              kicker="Where to Start"
              title="Key Canadian Cities for Business Visa Seekers"
              sub="Opportunities exist nationwide, but these cities stand out for their economic vibrancy and support systems."
            />
            <div className={styles.cityScroll} role="region" aria-label="Key Canadian cities" tabIndex={0}>
              <ol className={styles.cityRail}>
                {CITIES.map(([name, text]) => (
                  <li key={name} className={styles.cityCard}>
                    <span className={styles.cityPin}><MapPin size={18} aria-hidden="true" /></span>
                    <h3>{name}</h3>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* 06 Tips: timeline */}
          <section id="tips" className={styles.block} aria-labelledby="tips-h">
            <SectionHead
              hid="tips-h"
              num="06"
              kicker="Application Tips"
              title="Tips for a Successful Canada Business Visa Application"
            />
            <ol className={styles.timeline}>
              {TIPS.map(([title, text]) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* 07 Beyond the visa */}
          <section id="beyond" className={styles.block} aria-labelledby="beyond-h">
            <SectionHead
              hid="beyond-h"
              num="07"
              kicker="Beyond the Visa"
              title="Top Considerations for Your Canada Business Venture"
            />
            <div className={styles.twoCol}>
              {BEYOND.map(({ Icon, title, points }) => (
                <div key={title} className={styles.card}>
                  <span className={styles.cardIcon}><Icon size={22} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <ul className={styles.bullets}>
                    {points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className={styles.h3}>Making the most of your visa</h3>
            <ul className={styles.pills}>
              {STAY_TIPS.map(([t, d]) => (
                <li key={t}>
                  <strong>{t}</strong>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 08 Why GVI: dark panel */}
          <section id="why-gvi" className={`${styles.block} ${styles.darkPanel}`} aria-labelledby="why-gvi-h">
            <SectionHead
              hid="why-gvi-h"
              num="08"
              kicker="Why Us"
              title="Why Choose Global Visa Internationals?"
              sub="Your trusted partner for Canada Business Visas."
            />
            <ul className={styles.gviGrid}>
              {WHY_GVI.map(({ Icon, title, text }) => (
                <li key={title}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            <p className={styles.about}>
              With {YEARS}+ years of experience as visa consultants in Bangalore, Global Visa
              Internationals has guided thousands of clients through complex immigration
              processes. You can rely on our experience in Canada business immigration consulting
              in India. Don&apos;t let the complexity of the process deter your entrepreneurial
              spirit: contact us today for a free consultation and take the first step towards your
              Canada business goals.
            </p>
          </section>

          {/* 09 FAQ */}
          <section id="faq" className={styles.block} aria-labelledby="faq-h">
            <SectionHead
              hid="faq-h"
              num="09"
              kicker="FAQ"
              title="Canada Business Visa: Frequently Asked Questions"
            />
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

          {/* Final CTA */}
          <section className={styles.cta} aria-labelledby="cta-h">
            <h2 id="cta-h">Ready to Start Your Canada Business Journey?</h2>
            <p>Talk to a visa specialist and get a clear, personalised route for your business profile.</p>
            <div className={styles.ctaButtons}>
              <a href={`tel:${PHONE}`} className={styles.ctaPrimary}>
                <Phone size={16} aria-hidden="true" /> Call for a Free Consultation
              </a>
              <a href="#consultation" className={styles.ctaSecondary}>
                Fill the Assessment Form
              </a>
            </div>
          </section>
        </article>
      </div>

      {/* ══ REVIEWS ════════════════════════════════════════════════════════ */}
      <section className={styles.reviews} aria-label="Client reviews">
        <div className={styles.container}>
          <ReviewSchema />
          <ReviewCarousel />
        </div>
      </section>

      {/* Mobile quick-contact bar */}
      <nav aria-label="Quick contact" className={styles.mobileBar}>
        <a href={`tel:${PHONE}`}><Phone size={16} aria-hidden="true" /> Call</a>
        <a
          href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20help%20with%20a%20Canada%20Business%20Visa`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mbWhatsapp}
        >
          <MessageCircle size={16} aria-hidden="true" /> WhatsApp
        </a>
        <a href="#consultation" className={styles.mbQuote}>Free Quote</a>
      </nav>
    </div>
  );
}