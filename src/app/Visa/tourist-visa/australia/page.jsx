import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import Script from "next/script";

export const metadata = {
  title: "Australia Tourist Visa from India: Subclass 600 Guide 2026 | GVI",
  description:
    "Apply for an Australia tourist visa (subclass 600) from India with GVI. Get the document checklist, fees, processing time and expert ImmiAccount help.",
  keywords:
    "Australia tourist visa from India, subclass 600 visa, Australia visitor visa requirements for Indians, Australia visa application online, Australia visa fees from India, Australia visa documents, Australia visa agent India, Australia visa processing time",
  robots: "index, follow",
  canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/australia",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/australia",
  },

  openGraph: {
    title: "Australia Tourist Visa from India: Subclass 600 Guide 2026 | GVI",
    description:
      "Expert guidance on your Australia tourist visa from India: ImmiAccount application, required documents, fees, processing time and tips from Global Visa Internationals.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/australia",
    siteName: "Global Visa Internationals",
    locale: "en_IN",
    type: "website",
    determiner: "the",
    countryName: "India",
    updated_time: "2026-10-10T00:00:00+05:30",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Australia-Tourist-Visa-Assistance-GVI.jpg",
        width: 1200,
        height: 630,
        alt: "Australia Tourist Visa Assistance Banner - Global Visa Internationals",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    title: "Australia Tourist Visa from India: Subclass 600 Guide 2026 | GVI",
    description:
      "Apply for an Australia tourist visa from India with Global Visa Internationals. Expert help with documents, ImmiAccount and biometrics. Trusted since 2017.",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Australia-Tourist-Visa-Assistance-GVI.jpg",
        alt: "Australia Tourist Visa Assistance - Global Visa Internationals",
      },
    ],
  },
};

/* ------------------------------------------------------------------
   Visual enhancement layer (look & feel only), scoped to .gvi-visa
------------------------------------------------------------------- */
const enhancedCss = `
.gvi-visa {
  --gvi-primary: #0b5ed7;
  --gvi-primary-dark: #08408f;
  --gvi-accent: #f0b429;
  --gvi-ink: #1f2933;
  --gvi-muted: #52606d;
  --gvi-soft: #eef4ff;
  --gvi-line: #e4e7eb;
  --gvi-radius: 14px;
  color: var(--gvi-ink);
  line-height: 1.75;
  font-size: 1.02rem;
}

/* Headings */
.gvi-visa h1 {
  font-size: clamp(1.7rem, 3.2vw, 2.5rem);
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 1.2rem;
  padding-bottom: 0.9rem;
  border-bottom: 4px solid var(--gvi-primary);
  background: linear-gradient(90deg, #1f2933 0%, var(--gvi-primary-dark) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gvi-visa h2 {
  position: relative;
  font-size: clamp(1.35rem, 2.2vw, 1.8rem);
  font-weight: 700;
  line-height: 1.3;
  margin: 3rem 0 1rem;
  padding: 0.35rem 0 0.35rem 1rem;
  border-left: 5px solid var(--gvi-primary);
  color: var(--gvi-ink);
  scroll-margin-top: 90px;
}
.gvi-visa h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 1.8rem 0 0.7rem;
  padding: 0.55rem 1rem;
  background: var(--gvi-soft);
  border-radius: 10px;
  color: var(--gvi-primary-dark);
}

/* Text */
.gvi-visa p { margin: 0 0 1.1rem; color: var(--gvi-muted); }
.gvi-visa strong { color: var(--gvi-ink); font-weight: 700; }

/* Lists */
.gvi-visa ul { list-style: none; padding: 0; margin: 0 0 1.4rem; }
.gvi-visa ul li {
  position: relative;
  padding: 0.7rem 1rem 0.7rem 2.6rem;
  margin-bottom: 0.55rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
  color: var(--gvi-muted);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}
.gvi-visa ul li:hover {
  transform: translateY(-1px);
  border-color: rgba(11, 94, 215, 0.35);
  box-shadow: 0 6px 16px rgba(16, 24, 40, 0.08);
}
.gvi-visa ul li::before {
  content: "";
  position: absolute;
  left: 1rem;
  top: 1.15rem;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--gvi-primary);
  box-shadow: 0 0 0 4px rgba(11, 94, 215, 0.12);
}

/* Numbered steps */
.gvi-visa ol.gvi-steps { list-style: none; counter-reset: gvi-step; padding: 0; margin: 0 0 1.6rem; }
.gvi-visa ol.gvi-steps li {
  counter-increment: gvi-step;
  position: relative;
  padding: 0.9rem 1rem 0.9rem 3.6rem;
  margin-bottom: 0.7rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  color: var(--gvi-muted);
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}
.gvi-visa ol.gvi-steps li::before {
  content: counter(gvi-step);
  position: absolute;
  left: 0.9rem;
  top: 0.85rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gvi-primary), var(--gvi-primary-dark));
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Tables */
.gvi-table-wrap {
  overflow-x: auto;
  margin: 0 0 1.4rem;
  border: 1px solid var(--gvi-line);
  border-radius: var(--gvi-radius);
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
}
.gvi-visa table { width: 100%; border-collapse: collapse; background: #fff; min-width: 420px; }
.gvi-visa th {
  background: linear-gradient(135deg, var(--gvi-primary), var(--gvi-primary-dark));
  color: #fff;
  text-align: left;
  padding: 0.8rem 1rem;
  font-weight: 700;
}
.gvi-visa td { padding: 0.8rem 1rem; border-top: 1px solid var(--gvi-line); color: var(--gvi-muted); }
.gvi-visa tbody tr:nth-child(even) td { background: #f8fafc; }
.gvi-visa td:first-child { font-weight: 600; color: var(--gvi-ink); }

/* Note / callout */
.gvi-visa [class*="note"] {
  background: #fff8e6;
  border: 1px solid #f5d98a;
  border-left: 5px solid var(--gvi-accent);
  border-radius: 10px;
  padding: 0.9rem 1.1rem;
  color: #5c4a12;
}

/* Table of contents */
.gvi-toc {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-left: 5px solid var(--gvi-primary);
  border-radius: var(--gvi-radius);
  padding: 1rem 1.3rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
}
.gvi-toc ol { margin: 0.6rem 0 0; padding-left: 1.3rem; columns: 2 260px; column-gap: 2rem; }
.gvi-toc li { margin: 0.25rem 0; color: var(--gvi-muted); }
.gvi-toc a { color: var(--gvi-primary-dark); text-decoration: none; font-weight: 600; }
.gvi-toc a:hover { text-decoration: underline; }

/* Quick facts strip */
.gvi-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.9rem;
  margin: 1.4rem 0 2rem;
}
.gvi-fact {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #cfe0fb;
  border-radius: var(--gvi-radius);
  padding: 1rem 1.1rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(11, 94, 215, 0.08);
}
.gvi-fact b { display: block; font-size: 1.3rem; font-weight: 800; color: var(--gvi-primary); line-height: 1.2; }
.gvi-fact span { display: block; margin-top: 0.25rem; font-size: 0.85rem; color: var(--gvi-muted); }

/* In-page call-to-action band */
.gvi-cta-band {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--gvi-soft);
  border: 1px solid #cfe0fb;
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.4rem;
  margin: 1.6rem 0;
}
.gvi-cta-band p { margin: 0; color: var(--gvi-ink); font-weight: 600; flex: 1 1 260px; }
.gvi-visa .gvi-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 8px 18px rgba(11, 94, 215, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.gvi-visa .gvi-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(11, 94, 215, 0.36); }

/* Disclaimer */
.gvi-disclaimer {
  margin-top: 2rem;
  padding: 1rem 1.2rem;
  font-size: 0.88rem;
  color: var(--gvi-muted);
  background: #f8fafc;
  border: 1px dashed #b8c2cc;
  border-radius: 12px;
}

/* Contact card */
.gvi-visa [class*="contactInfo"] {
  background: linear-gradient(135deg, #0b5ed7 0%, #062f6b 100%);
  color: #fff;
  border-radius: 18px;
  padding: 1.6rem 1.8rem;
  margin: 1.6rem 0 2rem;
  box-shadow: 0 14px 30px rgba(8, 64, 143, 0.28);
}
.gvi-visa [class*="contactInfo"] h3 { background: transparent; color: #fff; padding: 0; margin-top: 0; }
.gvi-visa [class*="contactInfo"] p { color: rgba(255, 255, 255, 0.92); margin-bottom: 0.45rem; }
.gvi-visa a.gvi-cta-link,
.gvi-visa a.gvi-cta-link:link,
.gvi-visa a.gvi-cta-link:visited {
  display: inline-block;
  color: #1875e8 !important;
  background: rgba(255, 255, 255, 0.16) !important;
  background-color: rgba(239, 170, 170, 0.16) !important;
  font-weight: 700;
  text-decoration: none;
  padding: 0.2rem 0.9rem;
  border: 1.5px solid rgba(255, 255, 255, 0.85);
  border-radius: 999px;
  transition: background 0.18s ease, transform 0.18s ease;
}
.gvi-visa a.gvi-cta-link:hover,
.gvi-visa a.gvi-cta-link:focus-visible {
  color: #e61717 !important;
  background: rgba(255, 255, 255, 0.32) !important;
  background-color: rgba(201, 246, 247, 0.32) !important;
  transform: translateY(-1px);
}
#apply-form { scroll-margin-top: 90px; }

/* WhatsApp button */
.gvi-visa [class*="callButton"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.6rem;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  box-shadow: 0 10px 22px rgba(18, 140, 126, 0.32);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.gvi-visa [class*="callButton"]:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(18, 140, 126, 0.4); }

@media (max-width: 640px) {
  .gvi-visa { font-size: 0.98rem; }
  .gvi-visa h2 { margin-top: 2.2rem; }
  .gvi-visa ul li { padding-left: 2.3rem; }
}
`;

export default function Australia() {
  const canonicalUrl =
    "https://www.globalvisainternationals.com/Visa/tourist-visa/australia";

  const schemas = [
    // 1️⃣ Organization
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com",
      logo: "https://www.globalvisainternationals.com/logo.png",
      sameAs: [
        "https://www.facebook.com/globalvisainternationals",
        "https://www.instagram.com/globalvisainternationals",
        "https://www.linkedin.com/company/global-visa-internationals/",
        "https://x.com/GLOBALVISA1505",
        "https://www.youtube.com/@globalVisaInternationals",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7022213466",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },

    // 2️⃣ LocalBusiness
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Global Visa Internationals",
      image: "https://www.globalvisainternationals.com/gvilogo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "No. 61, 2nd Floor, Above Axis Bank, Jyothi Nivas College Road, Koramangala 5th Block",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560095",
        addressCountry: "IN",
      },
      url: "https://www.globalvisainternationals.com",
      telephone: "+91-7022213466",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "18:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "230",
      },
    },

    // 3️⃣ WebSite
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com",
    },

    // 4️⃣ WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Australia Tourist Visa Assistance from India",
      url: canonicalUrl,
      description:
        "Apply for an Australia tourist visa (subclass 600) from India with expert guidance from Global Visa Internationals. Complete help with documents, ImmiAccount and biometrics.",
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        url: "https://www.globalvisainternationals.com",
      },
    },

    // 5️⃣ Service
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Australia Tourist Visa Assistance",
      provider: {
        "@type": "Organization",
        name: "Global Visa Internationals",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      description:
        "Professional Australia tourist visa (subclass 600) consultation, documentation and ImmiAccount application support for Indian applicants.",
    },

    // 6️⃣ BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.globalvisainternationals.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Australia Tourist Visa",
          item: canonicalUrl,
        },
      ],
    },

    // 7️⃣ FAQPage (matches the visible FAQ section)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which visa do Indians need for a holiday in Australia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Indian tourists apply for the Visitor visa (subclass 600), Tourist stream, online through ImmiAccount.",
          },
        },
        {
          "@type": "Question",
          name: "How much does an Australia tourist visa cost from India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The base application charge for the Tourist stream is approximately 190 AUD, roughly Rs 10,500 to Rs 11,000, plus a VFS Global service charge of about Rs 1,620 if biometrics are requested. Fees change with exchange rates and policy updates, so confirm the current charge before paying.",
          },
        },
        {
          "@type": "Question",
          name: "How long does Australia tourist visa processing take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Processing varies from around 2 to 4 weeks to several months depending on your profile, the documents submitted and current workload.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are required for an Australia tourist visa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need a passport valid for at least six months, a recent photograph, financial documents (bank statements, ITR, payslips), an employment letter with leave approval, a detailed travel itinerary, proof of strong ties to India and, ideally, travel insurance.",
          },
        },
        {
          "@type": "Question",
          name: "How long can I stay in Australia on a tourist visa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The maximum stay per entry is usually 3 months, but it can be 6 or 12 months depending on your case. Visa validity and permitted stay are different, so check the conditions on your visa grant.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to give biometrics for an Australia visitor visa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only if you are asked to. If biometrics are requested, you attend a VFS Global centre to provide them.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {/* ✅ All JSON-LD Schemas */}
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ✨ Scoped visual enhancements */}
      <style dangerouslySetInnerHTML={{ __html: enhancedCss }} />

      <div className={styles.imageContainer}>
        <img
          src="/tourist-visa/Australia-Tourist-Visa-Assistance-GVI.jpg"
          alt="Australia tourist visa assistance from India - Global Visa Internationals"
          className={styles.VisaImage}
        />
      </div>

      <div className={styles.VisaSec}>
        <div className={`${styles.VisaData} gvi-visa`}>

          <h1 className={styles.subTitle}>Australia Tourist Visa from India: Subclass 600 Application, Documents, Fees & Processing Time</h1>

          <div className="gvi-facts">
            <div className="gvi-fact"><b>~AUD 190</b><span>Base application charge</span></div>
            <div className="gvi-fact"><b>2–4 weeks+</b><span>Typical processing</span></div>
            <div className="gvi-fact"><b>3, 6 or 12 months</b><span>Stay per entry</span></div>
            <div className="gvi-fact"><b>ImmiAccount</b><span>Online application</span></div>
          </div>

          <nav aria-label="Table of contents" className="gvi-toc">
            <strong>On this page</strong>
            <ol>
              <li><a href="#visa-details">Subclass 600 visa details</a></li>
              <li><a href="#how-to-apply">How to apply from India</a></li>
              <li><a href="#documents">Documents required</a></li>
              <li><a href="#fees">Visa fees from India</a></li>
              <li><a href="#processing-time">Processing time & validity</a></li>
              <li><a href="#why-gvi">Choosing a trusted visa agent</a></li>
              <li><a href="#attractions">Top attractions in Australia</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          <p>
            Planning your dream trip to Australia? The Australia tourist visa process from India can feel complex, but with expert help from Global Visa Internationals (GVI) it becomes straightforward. Whether you need a subclass 600 visa, guidance on Australia visitor visa requirements for Indian citizens, or help with the Australia visa application online, our team supports you from documentation to approval.
          </p>

          <p>
            Securing the Australia Tourist Visa (subclass 600) is the first step towards iconic landmarks like the Sydney Opera House and the Great Barrier Reef, as well as natural wonders and rich cultural experiences. Our end-to-end Australia tourist visa assistance lets you focus on planning your holiday while we handle the paperwork. Get started with a free consultation from GVI.
          </p>

          <div className="gvi-cta-band">
            <p>Not sure what you need? Get a personalized document checklist for your profile.</p>
            <a href="#apply-form" className="gvi-btn">Get Personalized Document Checklist</a>
          </div>

          <h2 id="visa-details" className={styles.subTitle}>Australia Tourist Visa (Subclass 600) Details for Indian Citizens</h2>

          <div className="gvi-table-wrap">
            <table>
              <thead>
                <tr><th>Visa Feature</th><th>Details</th></tr>
              </thead>
              <tbody>
                <tr><td>Visa Type</td><td>Visitor Visa (Subclass 600) - Tourist Stream</td></tr>
                <tr><td>Typical Validity</td><td>1 year to 18 months, up to 5 years (case dependent)</td></tr>
                <tr><td>Maximum Stay Per Entry</td><td>Usually 3 months, but can be up to 6 or 12 months</td></tr>
                <tr><td>Estimated Processing Time</td><td>Varies from 2–4 weeks to several months</td></tr>
                <tr><td>Application Method</td><td>Online via ImmiAccount</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="how-to-apply" className={styles.subTitle}>How to Apply for an Australia Visa Online from India</h2>

          <p>
            You can apply for an Australia visa online from India through the official ImmiAccount portal, and VFS Global Australia supports biometrics collection when it is requested. GVI helps you choose the best route for your situation and keeps you informed on how to check your Australia visa status. Here is how the process works:
          </p>

          <ol className="gvi-steps">
            <li><strong>Create an ImmiAccount:</strong> Set up your account on the Australian Government's immigration portal.</li>
            <li><strong>Complete the online application:</strong> Accurately fill out the detailed application form with consistent information.</li>
            <li><strong>Pay the Visa Application Charge (VAC):</strong> Pay the mandatory fee online through ImmiAccount.</li>
            <li><strong>Prepare and upload supporting documents:</strong> Gather and digitally upload all required documents according to guidelines.</li>
            <li><strong>Biometrics collection (if requested):</strong> Attend a VFS Global centre if asked to provide biometrics.</li>
            <li><strong>Receive the visa decision:</strong> Once approved, you receive a visa grant letter electronically.</li>
          </ol>

          <p>
            Feeling overwhelmed? Let GVI turn your Australia visa application into a smooth, well-managed journey.
          </p>

          <h2 id="documents" className={styles.subTitle}>Documents Required for an Australia Tourist Visa from India</h2>

          <p>
            Complete and accurate documentation is the most important part of your Australia visa application. Use this checklist, and request a personalized version from our experts to avoid rejection and delays.
          </p>

          <ul>
            <li><strong>Passport:</strong> Original passport valid for at least six months.</li>
            <li><strong>Application:</strong> Completed and signed Form 1419 (if required) or the ImmiAccount application.</li>
            <li><strong>Photograph:</strong> Recent passport-sized photograph meeting specifications.</li>
            <li><strong>Financial documents:</strong> Bank statements, ITR and payslips demonstrating sufficient funds for your trip.</li>
            <li><strong>Employment proof:</strong> Employment verification letter and leave approval (if employed).</li>
            <li><strong>Travel itinerary:</strong> Detailed plan including flight and accommodation details.</li>
            <li><strong>Ties to India:</strong> Property deeds, family commitments or business assets showing you will return.</li>
            <li><strong>Travel insurance:</strong> Documentation is highly recommended.</li>
            <li><strong>Sponsor documents:</strong> If someone is supporting your trip, we guide you on preparing proper sponsor documents.</li>
          </ul>

          <p className={styles.note}>
            <strong className={styles.strong}>Note:</strong> There is no single official bank balance that guarantees approval. Your funds should be clearly sufficient for the length and cost of your trip, and consistent with your income and ITR.
          </p>

          <h2 id="fees" className={styles.subTitle}>Australia Tourist Visa Fee from India (Approximate)</h2>

          <div className="gvi-table-wrap">
            <table>
              <thead>
                <tr><th>Fee Type</th><th>Current Cost (AUD)</th><th>INR Equivalent (Approx.)</th></tr>
              </thead>
              <tbody>
                <tr><td>Base Application Charge (Tourist Stream)</td><td>$250 AUD</td><td>₹20000 – ₹23751</td></tr>
                <tr><td>VFS Global Service Charge (Biometrics)</td><td>N/A</td><td>₹1,620 (if applicable)</td></tr>
              </tbody>
            </table>
          </div>

          <p className={styles.note}>
            <strong className={styles.strong}>Note:</strong> All prices are approximate and may vary based on current exchange rates and policy updates. The visa fee is typically paid in AUD. GVI shares transparent pricing with no hidden charges, and explains any agent fees upfront.
          </p>

          <h2 id="processing-time" className={styles.subTitle}>Australia Tourist Visa Processing Time, Validity & Stay Duration</h2>

          <p>
            Processing times vary from around 2–4 weeks to several months depending on your profile, your documents and current workload. We track your application throughout, and if you are short of time, you can ask us about urgent processing options.
          </p>

          <h3>Visa validity vs. length of stay</h3>
          <p>
            Validity and stay are different. Validity is the period during which you can enter Australia, while the maximum stay per entry is usually 3 months, and in some cases 6 or 12 months. Always check the conditions stated on your visa grant.
          </p>

          <div className="gvi-cta-band">
            <p>Facing time constraints? Ask about our priority fast-track visa service.</p>
            <a href="https://wa.me/917022213466?text=Hi,%20I%20need%20urgent%20help%20with%20an%20Australia%20Tourist%20Visa" className="gvi-btn">Ask About Fast-Track</a>
          </div>

          <h2 id="why-gvi" className={styles.subTitle}>Choosing a Trusted Australia Visa Agent in India</h2>

          <p>
            When looking for a trusted Australia visa agent or the best visa consultancy for Australia in India, transparency matters. GVI follows ethical practices and clear guidance so you can steer clear of unreliable operators and visa scams. Community forums and Reddit threads can offer helpful first-hand experiences from other Indian travellers, but nothing replaces professional guidance for your own profile.
          </p>

          <p>
            We also keep you updated on current Australia visa rules for Indian applicants and explain common rejection reasons, such as insufficient funds, weak ties to India or inconsistent information, so you can strengthen your application.
          </p>

          <h3>Our Australia visa services include</h3>
          <ul>
            <li>One-on-one guidance on all Australia visa requirements specific to your profile.</li>
            <li>Document checklist creation and thorough review.</li>
            <li>Professional ImmiAccount form-filling assistance to ensure accuracy.</li>
            <li>Preparation for any potential official follow-up or phone interview.</li>
            <li>24x7 support via WhatsApp, email and phone.</li>
            <li>Application tracking and follow-up until visa grant.</li>
          </ul>

          <h3>Why travellers choose Global Visa Internationals</h3>
          <ul>
            <li><strong>Expert guidance:</strong> Personalized solutions based on your profile and travel purpose.</li>
            <li><strong>Accuracy first:</strong> Forms and documents are reviewed multiple times.</li>
            <li><strong>End-to-end support:</strong> From form filling to final grant.</li>
            <li><strong>Transparent communication:</strong> Regular updates and clear explanations at every stage.</li>
            <li><strong>Fast-track experience:</strong> Urgent cases handled with priority when time is critical.</li>
          </ul>

          <div className="gvi-cta-band">
            <p>Our consultants have limited capacity for one-on-one sessions. Reserve your spot today.</p>
            <a href="#apply-form" className="gvi-btn">Reserve Your Consultation Now</a>
          </div>

          <h2 id="attractions" className={styles.subTitle}>Top Tourist Attractions in Australia</h2>

          <p>
            With a valid Australia tourist visa, you can enjoy a mix of spectacular natural beauty and modern marvels. Don't miss these must-see destinations:
          </p>

          <ul>
            <li><strong>Sydney Opera House:</strong> World Heritage-listed architectural masterpiece and performing arts centre.</li>
            <li><strong>Great Barrier Reef:</strong> The world's largest coral reef system, renowned for its marine biodiversity.</li>
            <li><strong>Uluru (Ayers Rock):</strong> Iconic sacred sandstone monolith in the Northern Territory's Red Centre.</li>
            <li><strong>Great Ocean Road:</strong> Breathtaking coastal drive in Victoria featuring the Twelve Apostles.</li>
            <li><strong>Bondi Beach:</strong> World-famous Sydney beach and a hotspot for surfing and coastal walks.</li>
            <li><strong>Kakadu National Park:</strong> Vast, biodiverse nature reserve with ancient Aboriginal rock art.</li>
            <li><strong>Melbourne's Laneways:</strong> Hidden cafes, street art and boutique shops in the city's cultural capital.</li>
            <li><strong>Fraser Island (K'gari):</strong> The world's largest sand island, with rainforests and freshwater lakes.</li>
            <li><strong>Tasmanian Wilderness:</strong> Pristine World Heritage area with rugged mountains and unique wildlife.</li>
            <li><strong>Whitsunday Islands:</strong> Tropical paradise with white-sand beaches like Whitehaven Beach.</li>
          </ul>

          <h3>Why visit Australia?</h3>
          <ul>
            <li><strong>Diverse attractions:</strong> Pristine beaches, rainforests, vibrant cities and the rugged outback.</li>
            <li><strong>Culinary experiences:</strong> World-class wines, fresh seafood and multicultural cuisine.</li>
            <li><strong>Wildlife encounters:</strong> See kangaroos, koalas and wombats in their natural habitat.</li>
            <li><strong>Safe and welcoming:</strong> Well-developed tourism infrastructure and friendly locals.</li>
            <li><strong>Adventure and relaxation:</strong> Diving, hiking, surfing, or simply relaxing on a beach.</li>
            <li><strong>Year-round destinations:</strong> Different regions offer ideal conditions in different seasons.</li>
          </ul>

          <h2 id="faq" className={styles.subTitle}>Australia Tourist Visa from India: Frequently Asked Questions</h2>

          <h3>Which visa do Indians need for a holiday in Australia?</h3>
          <p>
            Most Indian tourists apply for the Visitor visa (subclass 600), Tourist stream, online through ImmiAccount.
          </p>

          <h3>How much does an Australia tourist visa cost from India?</h3>
          <p>
            The base application charge for the Tourist stream is approximately 190 AUD, roughly ₹10,500 to ₹11,000, plus a VFS Global service charge of about ₹1,620 if biometrics are requested. Fees change with exchange rates and policy updates, so confirm the current charge before paying.
          </p>

          <h3>How long does Australia tourist visa processing take?</h3>
          <p>
            Processing varies from around 2 to 4 weeks to several months depending on your profile, the documents submitted and current workload.
          </p>

          <h3>What documents are required for an Australia tourist visa?</h3>
          <p>
            You need a passport valid for at least six months, a recent photograph, financial documents (bank statements, ITR, payslips), an employment letter with leave approval, a detailed travel itinerary, proof of strong ties to India and, ideally, travel insurance.
          </p>

          <h3>How long can I stay in Australia on a tourist visa?</h3>
          <p>
            The maximum stay per entry is usually 3 months, but it can be 6 or 12 months depending on your case. Visa validity and permitted stay are different, so check the conditions on your visa grant.
          </p>

          <h3>Do I need to give biometrics for an Australia visitor visa?</h3>
          <p>
            Only if you are asked to. If biometrics are requested, you attend a VFS Global centre to provide them.
          </p>

          <h2 id="contact" className={styles.subTitle}>Begin Your Australian Journey Today</h2>

          <p>
            Don't let visa uncertainty delay your travel plans. Our experienced consultants will guide you through the entire process efficiently, so you can focus on planning an unforgettable trip Down Under.
          </p>

          <div className={styles.contactInfo}>
            <h3 className={styles.subTitle}>📞 Global Visa Internationals (GVI)</h3>
            <p>Call: +91-7022213466 (Mon–Sat, 10:00–18:00 IST)</p>
            <p>Email: operations@globalvisainternationals.com</p>
            <p>Online Application: <a href="#apply-form" className="gvi-cta-link">Begin Your Visa Process Today</a></p>
            <p>✅ <a href="https://wa.me/917022213466?text=Hi,%20I%20would%20like%20a%20free%20eligibility%20check%20for%20an%20Australia%20Tourist%20Visa" className="gvi-cta-link">Get Your Free Eligibility Check</a></p>
          </div>

          <a href="https://wa.me/917022213466?text=Hi,%20I%20am%20looking%20for%20Australia%20Visa%20assistance" className={styles.callButton}>
            Contact on WhatsApp
          </a>

          <p className="gvi-disclaimer">
            This service is provided by Global Visa Internationals, an independent visa consultancy. We are not affiliated with the Australian government or high commission but provide expert guidance based on extensive experience and current regulations.
          </p>
        </div>

        <div id="apply-form" className={styles.formSection}>
          <VisaForm />
        </div>
      </div>

      <section>
        <ReviewSchema />
        <ReviewCarousel />
      </section>
    </>
  );
}