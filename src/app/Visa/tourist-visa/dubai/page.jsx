import styles from '@/Components/Visa.module.css';
import React from 'react';
import Head from 'next/head';
import VisaForm from '@/Components/VisaForm';


import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

export const metadata = {
  title: "Dubai Tourist Visa Consultants in Bangalore | Global Visa Internationals",
  description:
    "Apply for your Dubai Tourist Visa with top consultants in Bangalore. Get fast visa approval, personalized guidance, and expert document support from Global Visa Internationals.",
  keywords:
    "Dubai tourist visa, Dubai visa consultants in Bangalore, apply for Dubai visa, Dubai tourist visa assistance, Dubai e-visa India, Dubai travel visa consultants, Dubai tourist visa Bangalore, fast Dubai visa processing",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/dubai",
  },
  openGraph: {
    type: "website",
    title: "Apply for Dubai Tourist Visa from India | Fast Visa Assistance in Bangalore",
    description:
      "Get expert Dubai Tourist Visa assistance in Bangalore with Global Visa Internationals. Trusted consultants, quick approvals, 11+ years of experience, and full document support.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/dubai",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Dubai-Tourist-Visa-Assistance-GVI.jpg",
        alt: "Dubai Tourist Visa Assistance - Global Visa Internationals",
      },
    ],
    siteName: "Global Visa Internationals",
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalvisainternationals",
    title: "Dubai Tourist Visa Experts - Fast Processing from Bangalore",
    description:
      "Need a Dubai Tourist Visa? Get complete assistance with fast processing and expert support. Trusted consultants in Bangalore with 11+ years of experience.",
    images: [
      "https://www.globalvisainternationals.com/tourist-visa/Dubai-Tourist-Visa-Assistance-GVI.jpg",
    ],
  },
};


export default function DubaiVisaPage() {
  const pageUrl = metadata.alternates.canonical;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.globalvisainternationals.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dubai Tourist Visa",
        "item": pageUrl
      }
    ]
  };

  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com",
    "logo": "https://www.globalvisainternationals.com/gvilogo.png",
    "description": "Expert Dubai Tourist Visa Consultants in Bangalore. Complete visa support, documentation, and consultation for UAE visit visas.",
    "telephone": "+91-7022213466",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MG Road",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560025",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://www.google.com/maps/place/Global+Visa+Internationals"
    ]
  };


  const faqs = [
    {
      q: "What types of Dubai tourist visas are available for Indians?",
      a: "Indian travellers can choose a 14-day tourist visa, a 30-day tourist visa (58 days validity, 30 days stay), a 60-day tourist visa or a 96-hour transit visa. We help you pick the right one for your travel plans.",
    },
    {
      q: "What documents are required for a Dubai tourist visa?",
      a: "You typically need a passport valid for at least 6 months, a passport-size photograph with a white background, a confirmed return air ticket, a hotel booking or UAE address proof, and a bank statement if requested.",
    },
    {
      q: "How much does a Dubai tourist visa cost from India?",
      a: "Approximate costs are ₹5,500 - ₹6,000 for a 14-day visa, ₹6,500 - ₹7,500 for a 30-day visa, ₹13,000 - ₹14,000 for a 60-day visa and ₹2,500 - ₹3,000 for a 96-hour transit visa. Prices are indicative and can vary with exchange rates and urgency.",
    },
    {
      q: "How long does Dubai visa processing take?",
      a: "Most Dubai tourist visa applications are processed within 2 to 5 working days (typically 2-4 working days for tourist visas and 1-2 working days for the 96-hour transit visa). We also help with urgent 24-48 hour requests, subject to accurate documentation.",
    },
    {
      q: "How do I apply for a Dubai tourist visa from India?",
      a: "Choose your visa type, collect the required documents, submit your application through an authorised travel agency or a visa consultant like Global Visa Internationals, wait for processing, and receive your e-visa by email.",
    },
    {
      q: "How will I receive my Dubai visa?",
      a: "Once approved, your e-visa is sent to your email and is linked to your passport.",
    },
    {
      q: "Is Global Visa Internationals affiliated with the UAE government?",
      a: "No. Global Visa Internationals is an independent visa consultancy and is not affiliated with the UAE government or embassy.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  /* Visual enhancement layer (look & feel only), scoped to .gvi-dub */
  const enhancedCss = `
div.gvi-dub.gvi-dub.gvi-dub {
  --gvi-primary: #b45309;
  --gvi-primary-dark: #7c3a06;
  --gvi-accent: #0f766e;
  --gvi-ink: #1f2933;
  --gvi-muted: #52606d;
  --gvi-soft: #fff7ed;
  --gvi-line: #e4e7eb;
  --gvi-radius: 14px;
  color: var(--gvi-ink);
  line-height: 1.75;
  font-size: 1.02rem;
}

/* Headings */
div.gvi-dub.gvi-dub.gvi-dub h1 {
  font-size: clamp(1.7rem, 3.2vw, 2.5rem);
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 1.2rem;
  padding-bottom: 0.9rem;
  border-bottom: 4px solid var(--gvi-accent);
  background: linear-gradient(90deg, #1f2933 0%, var(--gvi-primary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
div.gvi-dub.gvi-dub.gvi-dub h2 {
  position: relative;
  font-size: clamp(1.35rem, 2.2vw, 1.8rem);
  font-weight: 700;
  line-height: 1.3;
  margin: 3rem 0 1rem;
  padding: 0.35rem 0 0.35rem 1rem;
  border-left: 5px solid var(--gvi-accent);
  color: var(--gvi-ink);
  text-align: left;
  scroll-margin-top: 90px;
}
div.gvi-dub.gvi-dub.gvi-dub h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 1.8rem 0 0.7rem;
  padding: 0.55rem 1rem;
  background: var(--gvi-soft);
  border-radius: 10px;
  color: var(--gvi-primary-dark);
  text-align: left;
}

/* Text */
div.gvi-dub.gvi-dub.gvi-dub p { margin: 0 0 1.1rem; color: var(--gvi-muted); }
div.gvi-dub.gvi-dub.gvi-dub strong, div.gvi-dub.gvi-dub.gvi-dub b { color: var(--gvi-ink); font-weight: 700; }
div.gvi-dub.gvi-dub.gvi-dub a:not([class]) { color: var(--gvi-primary); font-weight: 600; }
div.gvi-dub.gvi-dub.gvi-dub [class*="smallText"] { font-size: 0.85rem; color: var(--gvi-muted); font-style: italic; }

/* Lists: one compact card per list, light dividers between rows */
div.gvi-dub.gvi-dub.gvi-dub ul {
  list-style: none;
  padding: 0.3rem 1.1rem;
  margin: 0 0 1.4rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-dub.gvi-dub.gvi-dub ul li {
  position: relative;
  padding: 0.6rem 0 0.6rem 1.5rem;
  margin: 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #eef0f3;
  border-radius: 0;
  box-shadow: none;
  color: var(--gvi-muted);
  list-style: none;
}
div.gvi-dub.gvi-dub.gvi-dub ul li:last-child { border-bottom: 0; }
div.gvi-dub.gvi-dub.gvi-dub ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 1.15rem;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gvi-primary);
}

/* Eligibility check list */
div.gvi-dub.gvi-dub.gvi-dub ul[class*="checkList"] li::before {
  content: "✓";
  top: 0.6rem;
  width: auto;
  height: auto;
  border-radius: 0;
  background: none;
  color: var(--gvi-primary);
  font-weight: 800;
}

/* Country grid (links unchanged, only presentation) */
div.gvi-dub.gvi-dub.gvi-dub ul[class*="countryGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  padding: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
}
div.gvi-dub.gvi-dub.gvi-dub ul[class*="countryGrid"] li {
  padding: 0.55rem 0.9rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 10px;
  color: var(--gvi-ink);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}
div.gvi-dub.gvi-dub.gvi-dub ul[class*="countryGrid"] li:last-child { border-bottom: 1px solid var(--gvi-line); }
div.gvi-dub.gvi-dub.gvi-dub ul[class*="countryGrid"] li::before { display: none; }
div.gvi-dub.gvi-dub.gvi-dub ul[class*="countryGrid"] li a {
  display: block;
  color: var(--gvi-primary);
  font-weight: 700;
  text-decoration: none;
}
div.gvi-dub.gvi-dub.gvi-dub ul[class*="countryGrid"] li:hover { border-color: var(--gvi-primary); }

/* Visa type cards */
div.gvi-dub.gvi-dub.gvi-dub [class*="cardContainer"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 0 0 1.8rem;
}
div.gvi-dub.gvi-dub.gvi-dub [class*="cardContainer"] > div {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 4px solid var(--gvi-accent);
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.2rem 0.4rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.06);
}
div.gvi-dub.gvi-dub.gvi-dub [class*="cardContainer"] h3 { margin: 0 0 0.6rem; padding: 0; background: none; font-size: 1.05rem; }

/* Schengen countries card */
div.gvi-dub.gvi-dub.gvi-dub [class*="schengenCard"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #f8d9b4;
  border-radius: 18px;
  padding: 1.4rem 1.4rem 0.6rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 6px 18px rgba(180, 83, 9, 0.08);
}
div.gvi-dub.gvi-dub.gvi-dub [class*="cardHeader"] h2 { margin-top: 0; }
div.gvi-dub.gvi-dub.gvi-dub [class*="cardSubtitle"] { margin-bottom: 1rem; }
div.gvi-dub.gvi-dub.gvi-dub [class*="countryList"] h3, div.gvi-dub.gvi-dub.gvi-dub [class*="highlightSection"] h3 { background: transparent; padding-left: 0; }
div.gvi-dub.gvi-dub.gvi-dub [class*="highlightGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1rem;
}
div.gvi-dub.gvi-dub.gvi-dub [class*="highlightItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.8rem 1rem;
}
div.gvi-dub.gvi-dub.gvi-dub [class*="countryName"] { display: block; font-weight: 800; color: var(--gvi-primary); }
div.gvi-dub.gvi-dub.gvi-dub [class*="countryInfo"] { margin: 0.2rem 0 0; font-size: 0.9rem; }

/* Highlight callout */
div.gvi-dub.gvi-dub.gvi-dub [class*="highlightBox"] {
  background: #fff8e6;
  border: 1px solid #f5d98a;
  border-left: 5px solid #f0b429;
  border-radius: 12px;
  padding: 0.4rem 1.2rem 0.6rem;
  margin: 0 0 1.8rem;
}
div.gvi-dub.gvi-dub.gvi-dub [class*="highlightBox"] h3 { background: transparent; padding-left: 0; color: #5c4a12; }

/* Step cards (h3 + p pairs, markup unchanged) */
div.gvi-dub.gvi-dub.gvi-dub [class*="stepContainer"] h3 {
  margin: 0.9rem 0 0;
  background: var(--gvi-soft);
  border: 1px solid #f8d9b4;
  border-bottom: 0;
  border-left: 5px solid var(--gvi-accent);
  border-radius: 12px 12px 0 0;
  padding: 0.6rem 1rem;
  font-size: 1.05rem;
}
div.gvi-dub.gvi-dub.gvi-dub [class*="stepContainer"] p {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 0;
  border-radius: 0 0 12px 12px;
  padding: 0.8rem 1rem;
  margin: 0;
}

/* Tables */
.gvi-table-wrap, div.gvi-dub.gvi-dub.gvi-dub [class*="tableWrapper"] {
  overflow-x: auto;
  margin: 0 0 1.4rem;
  border: 1px solid var(--gvi-line);
  border-radius: var(--gvi-radius);
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
  background: #fff;
}
div.gvi-dub.gvi-dub.gvi-dub table { width: 100%; border-collapse: collapse; background: #fff; min-width: 560px; margin: 0; }
div.gvi-dub.gvi-dub.gvi-dub th {
  background: linear-gradient(135deg, var(--gvi-primary), var(--gvi-primary-dark));
  color: #fff;
  text-align: left;
  padding: 0.8rem 1rem;
  font-weight: 700;
}
div.gvi-dub.gvi-dub.gvi-dub td { padding: 0.8rem 1rem; border-top: 1px solid var(--gvi-line); color: var(--gvi-muted); }
div.gvi-dub.gvi-dub.gvi-dub tbody tr:nth-child(even) td { background: #f8fafc; }
div.gvi-dub.gvi-dub.gvi-dub td:first-child { font-weight: 600; color: var(--gvi-ink); }
div.gvi-dub.gvi-dub.gvi-dub [class*="tableWrapper"] > p { margin: 0; padding: 0.7rem 1rem; }

/* Services block */
div.gvi-dub.gvi-dub.gvi-dub [class*="servicesSection"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #f8d9b4;
  border-radius: 18px;
  padding: 0.4rem 1.4rem 1.4rem;
  margin: 2rem 0;
}
div.gvi-dub.gvi-dub.gvi-dub [class*="serviceGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.9rem;
  margin: 1rem 0 1.4rem;
}
div.gvi-dub.gvi-dub.gvi-dub [class*="serviceItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.9rem 1.1rem 0.2rem;
  box-shadow: 0 2px 8px rgba(16, 24, 40, 0.05);
}
div.gvi-dub.gvi-dub.gvi-dub [class*="serviceItem"] b { display: block; color: var(--gvi-primary); margin-bottom: 0.2rem; }
div.gvi-dub.gvi-dub.gvi-dub [class*="ctaContainer"] {
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  text-align: center;
  box-shadow: 0 12px 28px rgba(124, 58, 6, 0.28);
}
div.gvi-dub.gvi-dub.gvi-dub [class*="ctaContainer"] p { color: #fff; font-weight: 700; font-size: 1.15rem; margin: 0 0 0.9rem; }
div.gvi-dub.gvi-dub.gvi-dub a[class*="primaryButton"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.8rem;
  border-radius: 999px;
  font-weight: 800;
  text-decoration: none;
  color: var(--gvi-primary-dark) !important;
  background: var(--gvi-accent) !important;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
div.gvi-dub.gvi-dub.gvi-dub a[class*="primaryButton"]:hover { transform: translateY(-2px); }

/* Table of contents */
div.gvi-dub.gvi-dub.gvi-dub .gvi-toc {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-left: 5px solid var(--gvi-primary);
  border-radius: var(--gvi-radius);
  padding: 1rem 1.3rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
}
div.gvi-dub.gvi-dub.gvi-dub .gvi-toc ol { margin: 0.6rem 0 0; padding-left: 1.3rem; columns: 2 260px; column-gap: 2rem; }
div.gvi-dub.gvi-dub.gvi-dub .gvi-toc li { margin: 0.25rem 0; color: var(--gvi-muted); }
div.gvi-dub.gvi-dub.gvi-dub .gvi-toc a { color: var(--gvi-primary-dark); text-decoration: none; font-weight: 600; }
div.gvi-dub.gvi-dub.gvi-dub .gvi-toc a:hover { text-decoration: underline; }

/* Quick facts strip */
div.gvi-dub.gvi-dub.gvi-dub .gvi-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.9rem;
  margin: 1.4rem 0 2rem;
}
div.gvi-dub.gvi-dub.gvi-dub .gvi-fact {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #f8d9b4;
  border-radius: var(--gvi-radius);
  padding: 1rem 1.1rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(180, 83, 9, 0.08);
}
div.gvi-dub.gvi-dub.gvi-dub .gvi-fact b { display: block; font-size: 1.3rem; font-weight: 800; color: var(--gvi-primary); line-height: 1.2; }
div.gvi-dub.gvi-dub.gvi-dub .gvi-fact span { display: block; margin-top: 0.25rem; font-size: 0.85rem; color: var(--gvi-muted); }

/* In-page call-to-action band */
div.gvi-dub.gvi-dub.gvi-dub .gvi-cta-band {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--gvi-soft);
  border: 1px solid #f8d9b4;
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.4rem;
  margin: 1.6rem 0;
}
div.gvi-dub.gvi-dub.gvi-dub .gvi-cta-band p { margin: 0; color: var(--gvi-ink); font-weight: 600; flex: 1 1 260px; }
div.gvi-dub.gvi-dub.gvi-dub .gvi-cta-actions { display: flex; flex-wrap: wrap; gap: 0.6rem; }
div.gvi-dub.gvi-dub.gvi-dub a.gvi-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff !important;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 8px 18px rgba(180, 83, 9, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
div.gvi-dub.gvi-dub.gvi-dub a.gvi-btn.gvi-btn-wa {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  box-shadow: 0 8px 18px rgba(18, 140, 126, 0.3);
}
div.gvi-dub.gvi-dub.gvi-dub a.gvi-btn:hover { transform: translateY(-2px); }

/* FAQ accordion (same questions and answers, collapsed to stay compact) */
div.gvi-dub.gvi-dub.gvi-dub .faq-section { margin: 0 0 1.5rem; }
div.gvi-dub.gvi-dub.gvi-dub details.gvi-faq-item {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  margin: 0 0 0.6rem;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-dub.gvi-dub.gvi-dub details.gvi-faq-item summary {
  list-style: none;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 2.6rem 0.75rem 1rem;
}
div.gvi-dub.gvi-dub.gvi-dub details.gvi-faq-item summary::-webkit-details-marker { display: none; }
div.gvi-dub.gvi-dub.gvi-dub details.gvi-faq-item summary::after {
  content: "+";
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--gvi-primary);
}
div.gvi-dub.gvi-dub.gvi-dub details.gvi-faq-item[open] summary::after { content: "–"; }
div.gvi-dub.gvi-dub.gvi-dub details.gvi-faq-item summary h3 {
  display: block;
  margin: 0;
  padding: 0;
  background: none;
  font-size: 1rem;
  color: var(--gvi-ink);
}
div.gvi-dub.gvi-dub.gvi-dub details.gvi-faq-item[open] summary { border-bottom: 1px solid #eef0f3; }
div.gvi-dub.gvi-dub.gvi-dub details.gvi-faq-item p { margin: 0; padding: 0.8rem 1rem 0.9rem; }

#apply-form { scroll-margin-top: 90px; }

@media (max-width: 640px) {
  div.gvi-dub.gvi-dub.gvi-dub { font-size: 0.98rem; }
  div.gvi-dub.gvi-dub.gvi-dub h2 { margin-top: 2.2rem; }
}

div.gvi-dub.gvi-dub.gvi-dub a[class*="ctaButton"] { color: #fff !important; }
`;

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Geo & Mobile SEO */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="12.9716,77.5946" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      {/* Scoped visual enhancements */}
      <style dangerouslySetInnerHTML={{ __html: enhancedCss }} />



      <div className={styles.imageContainer}>
        <img src="/tourist-visa/Dubai-Tourist-Visa-Assistance-GVI.jpg" alt="Dubai tourist visa assistance from India - Global Visa Internationals" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>

        <div className={`${styles.VisaData} gvi-dub`}>
          <h1 className={styles.Title}>Dubai Tourist Visa from India (2026): Types, Documents, Fees & Process</h1>

          {/* Quick facts (values taken from the sections below) */}
          <div className="gvi-facts">
            <div className="gvi-fact"><b>4 visa types</b><span>14, 30, 60 days & 96-hour transit</span></div>
            <div className="gvi-fact"><b>2-4 days</b><span>Typical processing (working days)</span></div>
            <div className="gvi-fact"><b>From ₹5,500</b><span>14-day visa (approx.)</span></div>
            <div className="gvi-fact"><b>11+ years</b><span>Visa experience</span></div>
          </div>

          <nav aria-label="Table of contents" className="gvi-toc">
            <strong>On this page</strong>
            <ol>
              <li><a href="#types">Types of Dubai tourist visas</a></li>
              <li><a href="#documents-required">Documents required</a></li>
              <li><a href="#fees">Visa fees from India</a></li>
              <li><a href="#process">Application process</a></li>
              <li><a href="#attractions">Top tourist attractions</a></li>
              <li><a href="#why-gvi">Why choose GVI</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          <p >Planning your dream trip to the UAE? A <strong className={styles.strong}>Dubai tourist visa</strong> for Indian travellers is easier to get with expert help from <strong className={styles.strong}>Global Visa Internationals</strong>. Whether you need a 14-day, 30-day or 60-day visa, a 96-hour transit visa or a multiple-entry option, our team guides you from documentation to approval, and checks the latest UAE visa-on-arrival rules for your passport before you travel.</p>
          <p > <strong className={styles.strong}>Get started today</strong> with a free consultation from Global Visa Internationals - your trusted partner for Dubai visa assistance!</p>

          <h2 className={styles.subTitle}>Dubai Transit Visa from India</h2>
          <p >For short layovers or stopovers, a <strong className={styles.strong}>Dubai transit visa</strong> (96 hours) may be all you need. Whether you are flying with Emirates or another airline, we help you choose the right visa and meet all travel requirements. Our pricing is transparent with no hidden charges, so you know exactly what you are paying for in visa fees and service charges.</p>
          <p > <strong className={styles.strong}>Ready to travel?</strong> Contact Global Visa Internationals now and let us simplify your Dubai visa journey.</p>

          <h2 className={styles.subTitle}>Apply for a Dubai Visa Online from India</h2>
          <p >Want a quick and reliable application experience? You can <strong className={styles.strong}>apply for a Dubai visa online from India</strong> without stress. Whether you apply through a travel platform, an airline or a consultant, we help you compare the options and choose the best route for your trip, and we guide you on the hotel booking requirements for your application.</p>
          <p > <strong className={styles.strong}>Apply online today</strong> with Global Visa Internationals and get expert guidance every step of the way!</p>

          <h2 className={styles.subTitle}>Dubai Visa Documents for Indians</h2>
          <p >Having the correct documents is crucial. We help you prepare your <strong className={styles.strong}>Dubai visa documents</strong>, including hotel booking proof, a confirmed return ticket, your PAN card, a bank statement and a passport valid for at least six months. Travel insurance may also be required, depending on your trip. With our help, you will meet every requirement with confidence.</p>
          <p > <strong className={styles.strong}>Avoid rejection and delays</strong> — get a document checklist from our visa experts now.</p>

          <h2 className={styles.subTitle}>Dubai Visa Processing Time and Extensions</h2>
          <p >Processing your visa on time is essential. We explain the current <strong className={styles.strong}>Dubai visa processing time</strong>, support urgent 24-48 hour requests, and track your application until approval. Planning a longer stay? We guide you on how to extend a Dubai tourist visa from India, what an extension costs, and the difference between visa validity and length of stay.</p>
          <p > <strong className={styles.strong}>In a rush?</strong> Fast-track your visa with Global Visa Internationals’ priority service.</p>

          <h2 className={styles.subTitle}>Trusted Dubai Visa Agent in India</h2>
          <p >Looking for a <strong className={styles.strong}>trusted Dubai visa agent in India</strong>? Thousands of Indian travellers trust us. We give transparent guidance so you can avoid visa scams, and we keep you updated on UAE visa policy changes and the latest rules for Indian passport holders.</p>
          <p > <strong className={styles.strong}>Don’t take risks.</strong> Choose Global Visa Internationals - reliable, experienced, and trusted by Indian travellers.</p>

          <h2 className={styles.subTitle}>Avoiding Dubai Visa Rejection</h2>
          <p >Worried about rejection? We explain the common <strong className={styles.strong}>Dubai visa rejection reasons</strong> for Indian applicants, check that your documents, hotel and flight details are consistent, and advise which supporting documents, such as bank statements, to keep ready so your submission is stress-free.</p>
          <p > <strong className={styles.strong}>Connect with experts</strong> who have helped thousands of Indians travel to Dubai successfully — only at Global Visa Internationals.</p>



          <p >Planning a trip to the UAE? A <strong className={styles.strong}>Dubai Tourist Visa</strong> is your gateway to explore one of the world’s most exciting destinations. From luxury shopping and iconic landmarks to desert safaris and cultural gems, Dubai has something for every traveler. Our expert <strong className={styles.strong}>Dubai Tourist Visa assistance</strong> ensures a smooth and hassle-free process so you can focus on your dream holiday.</p>

          <h2 id="attractions" className={styles.subTitle}>Top Tourist Attractions in Dubai</h2>

          <p >With a valid <strong className={styles.strong}>Tourist Visa for Dubai</strong>, you can enjoy the perfect blend of modern marvels and ancient culture. Don't miss these must-see spots:</p>

          <ul>
            <li ><strong className={styles.strong}>Burj Khalifa</strong>: Get a bird’s-eye view of Dubai from the world’s tallest building.</li>
            <li ><strong className={styles.strong}>The Dubai Mall</strong>: Shop, dine, and catch the famous Dubai Fountain show.</li>
            <li ><strong className={styles.strong}>Palm Jumeirah</strong>: Discover luxury resorts and beaches on this iconic man-made island.</li>
            <li ><strong className={styles.strong}>Dubai Creek</strong>: Ride a traditional abra and explore the historic heart of the city.</li>
            <li ><strong className={styles.strong}>Jumeirah Beach</strong>: Sunbathe with the majestic Burj Al Arab in the background.</li>
            <li ><strong className={styles.strong}>Global Village</strong>: Explore food, art, and culture from 90+ countries (seasonal).</li>
            <li ><strong className={styles.strong}>Dubai Marina</strong>: Walk along the waterfront promenade, packed with restaurants and yachts.</li>
            <li ><strong className={styles.strong}>Dubai Desert Safari</strong>: Enjoy dune bashing, camel rides, and a traditional Bedouin dinner.</li>
          </ul>



          <h2 id="why-apply" className={styles.subTitle}>Why Apply for a Dubai Tourist Visa?</h2>

          <p >Whether you're traveling for a short getaway or an extended vacation, here's why Dubai should be on your list:</p>

          <ul>
            <li ><strong className={styles.strong}>Fast Visa Processing:</strong> Our Dubai Tourist Visa consultants offer quick and reliable support.</li>
            <li ><strong className={styles.strong}>Cultural Attractions:</strong> Visit souks, museums, and the Al Fahidi Historic District.</li>
            <li ><strong className={styles.strong}>Diverse Cuisine:</strong> Taste flavors from around the world and authentic Emirati dishes.</li>
            <li ><strong className={styles.strong}>World-Class Entertainment:</strong> From theme parks to desert safaris, there is fun for everyone.</li>
            <li ><strong className={styles.strong}>Safe & Modern:</strong> Dubai is one of the safest and most well-developed cities globally.</li>
            <li ><strong className={styles.strong}>Shopping Paradise:</strong> Enjoy tax-free shopping in massive malls and traditional bazaars.</li>
          </ul>

          <p >Need expert help? Our team offers complete <strong className={styles.strong}>Dubai Tourist Visa assistance</strong> — from document collection to application tracking. Whether it’s your first international trip or a frequent flyer adventure, we make visa processing simple and stress-free.</p>



          <p ><strong className={styles.strong}>Get in touch today with a trusted <span style={{ color: '#c00' }}>Dubai Tourist Visa consultant</span> and start your journey to the Emirates.</strong></p>

          <h2 className={styles.Title}>Dubai Tourist Visa - Easy Application & Assistance from India</h2>

          <p >Planning your dream trip to the UAE? Whether you're drawn to Dubai’s luxurious malls, iconic landmarks like the Burj Khalifa, or vibrant desert adventures, securing your <strong className={styles.strong}>Dubai Tourist Visa</strong> is the first step. Our professional <strong className={styles.strong}>Dubai visa consultants</strong> are here to provide end-to-end <strong className={styles.strong}>Dubai Tourist Visa assistance</strong> to make the process simple and stress-free.</p>

          <h2 id="why-dubai" className={styles.subTitle}>Why Choose Dubai for Your Next Holiday?</h2>
          <ul>
            <li ><strong className={styles.strong}>Visa on time:</strong> Quick processing for Indian passport holders.</li>
            <li ><strong className={styles.strong}>Safe & modern:</strong> One of the safest, most modern cities globally.</li>
            <li ><strong className={styles.strong}>Luxury shopping & dining:</strong> Enjoy tax-free shopping and world-class cuisine.</li>
            <li ><strong className={styles.strong}>Adventure & Culture:</strong> Desert safaris, Dhow cruises, and Emirati heritage in one city.</li>
          </ul>

          <h2 id="types" className={styles.subTitle}>Types of Dubai Tourist Visas for Indians</h2>
          <div className="gvi-table-wrap">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Visa Type</th>
                <th>Duration</th>
                <th>Stay Period</th>
                <th>Processing Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14 Days Tourist Visa</td>
                <td>14 Days</td>
                <td>14 Days</td>
                <td>2-4 working days</td>
              </tr>
              <tr>
                <td>30 Days Tourist Visa</td>
                <td>58 Days Validity</td>
                <td>30 Days Stay</td>
                <td>2-4 working days</td>
              </tr>
              <tr>
                <td>60 Days Tourist Visa</td>
                <td>60 Days</td>
                <td>60 Days</td>
                <td>2-4 working days</td>
              </tr>
              <tr>
                <td>96 Hours Transit Visa</td>
                <td>4 Days</td>
                <td>4 Days</td>
                <td>1-2 working days</td>
              </tr>
            </tbody>
          </table>
          </div>

          <h2 id="documents-required" className={styles.subTitle}>Documents Required to Apply for Dubai Tourist Visa</h2>
          <ul>
            <li >Passport (valid for at least 6 months)</li>
            <li >Passport-size photograph (white background)</li>
            <li >Confirmed return air ticket</li>
            <li >Hotel booking or UAE address proof</li>
            <li >Bank statement (if requested)</li>
          </ul>

          <h2 id="fees" className={styles.subTitle}>Dubai Tourist Visa Fees from India (Approx.)</h2>
          <div className="gvi-table-wrap">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Visa Type</th>
                <th>Cost (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14 Days Visa</td>
                <td>₹5,500 - ₹6,000</td>
              </tr>
              <tr>
                <td>30 Days Visa</td>
                <td>₹7000 - ₹8,500</td>
              </tr>
              <tr>
                <td>60 Days Visa</td>
                <td>₹13,000 - ₹16,000</td>
              </tr>
              <tr>
                <td>96 Hours Transit Visa</td>
                <td>₹2,500 - ₹3,000</td>
              </tr>
            </tbody>
          </table>
          </div>

          <p className={styles.note}>Note: Prices are indicative and can vary based on exchange rates and urgency.</p>



          <div className="gvi-cta-band">
            <p>Need a Dubai visa quickly? Get a free eligibility check from our visa experts.</p>
            <div className="gvi-cta-actions">
              <a href="#apply-form" className="gvi-btn">Get Free Eligibility Check</a>
              <a href="https://wa.me/917022213466?text=Hi,%20I%20would%20like%20a%20free%20eligibility%20check%20for%20a%20Dubai%20Tourist%20Visa" className="gvi-btn gvi-btn-wa">Chat on WhatsApp</a>
            </div>
          </div>

          <h2 id="why-us" className={styles.subTitle}>Why Choose Us for Dubai Tourist Visa Assistance?</h2>
          <ul>
            <li >Fast & easy processing</li>
            <li >Transparent pricing</li>
            <li >Expert support from our Dubai visa consultants</li>
            <li >24x7 support on WhatsApp and email</li>
          </ul>

          <p ><strong className={styles.strong}>Get started now! Submit your details and our team will help you apply for your Dubai Tourist Visa with confidence.</strong></p>


          <h2 id="process" className={styles.subTitle}>Navigating the Dubai Tourist Visa Process</h2>
          <p >Applying for a <strong className={styles.strong}>Dubai Tourist Visa</strong> from India involves a few important steps. With multiple visa types, quick processing times, and evolving rules, it's crucial to understand the process thoroughly. Here's how to apply with ease:</p>

          <ol className="gvi-steps">
            <li ><strong className={styles.strong}>Determine Your Visa Type:</strong> Choose between 14-day, 30-day, or 60-day tourist visas depending on your travel plans and stay duration.</li>
            <li ><strong className={styles.strong}>Collect Required Documents:</strong> You’ll typically need a valid passport, a passport-sized photo, confirmed return flight tickets, hotel bookings, and sometimes a bank statement.</li>
            <li ><strong className={styles.strong}>Submit Your Application:</strong> You can apply through an authorized travel agency or with the help of expert <strong className={styles.strong}>Dubai visa consultants</strong> like Global Visa Internationals.</li>
            <li ><strong className={styles.strong}>Wait for Processing:</strong> Most <strong className={styles.strong}>Dubai Tourist Visa applications</strong> are processed within 2 to 5 working days.</li>
            <li ><strong className={styles.strong}>Receive Your E-Visa:</strong> Once approved, the visa will be sent to your email and is linked to your passport.</li>
          </ol>

          <p >Feeling overwhelmed? Let Global Visa Internationals make your <strong className={styles.strong}>Dubai visa application</strong> smooth and stress-free.</p>

          <div className="gvi-cta-band">
            <p>Feeling overwhelmed by the process? Let us handle your Dubai visa application.</p>
            <div className="gvi-cta-actions">
              <a href="#apply-form" className="gvi-btn">Get Free Eligibility Check</a>
              <a href="https://wa.me/917022213466?text=Hi,%20I%20would%20like%20a%20free%20eligibility%20check%20for%20a%20Dubai%20Tourist%20Visa" className="gvi-btn gvi-btn-wa">Chat on WhatsApp</a>
            </div>
          </div>

          <h3 className={styles.subTitle}>Let Global Visa Internationals Be Your Trusted Dubai Visa Consultant</h3>
          <p >Dreaming of exploring Dubai’s skyscrapers, souks, and sandy beaches? We’ll help you get there. At Global Visa Internationals, we specialize in <strong className={styles.strong}>Dubai Tourist Visa assistance</strong> with personalized support at every step.</p>

          <b className={styles.subTitle}>Our Dubai Visa Services Include:</b>
          <ul>
            <li >One-on-one guidance on selecting the right <strong className={styles.strong}>Dubai visa type</strong>.</li>
            <li >Expert document checklist and submission assistance.</li>
            <li >Thorough review of your application to avoid errors or rejections.</li>
            <li >WhatsApp support and updates throughout your visa journey.</li>
            <li >Travel planning tips for your Dubai itinerary.</li>
          </ul>

          <p className={styles.note}>Avoid last-minute stress or rejection. Contact Global Visa Internationals today and let us handle your <strong className={styles.strong}>Dubai Tourist Visa</strong> process end to end.</p>



          <h3 className={styles.subTitle}>Need Help With Dubai Tourist Visa or Urgent Visa Requests?</h3>
          <p >Whether you’re planning a luxury vacation, a business visit, or a family reunion in Dubai, our consultants are here to help. With our extensive experience in <strong className={styles.strong}>Dubai visa services</strong>, we ensure you’re fully prepared for every step.</p>

          <b className={styles.subTitle}>Here’s how we simplify your Dubai visa journey:</b>
          <ol className="gvi-steps">
            <li><strong className={styles.strong}>Fast Visa Processing</strong>
              <p >We help you apply for urgent 24-48 hour <strong className={styles.strong}>Dubai Tourist Visas</strong> with accurate documentation, so you don’t miss your travel window.</p>
            </li>
            <li><strong className={styles.strong}>Tailored Document Support</strong>
              <p >We guide you on all key requirements including:</p>
              <ul>
                <li >Valid passport & passport-size photo</li>
                <li >Flight tickets, hotel bookings, or sponsor documents</li>
                <li >Bank statements if needed for longer stays</li>
              </ul>
            </li>
            <li><strong className={styles.strong}>Real-Time Support by Dubai Visa Experts</strong>
              <p >Get WhatsApp and email support from a dedicated <strong className={styles.strong}>Dubai visa consultant</strong> throughout the process. We answer your queries promptly and track your application status daily.</p>
            </li>
            <li><strong className={styles.strong}>100% Assistance Until Visa Approval</strong>
              <p >From the first form to final visa delivery, we don’t stop until your <strong className={styles.strong}>Dubai Tourist Visa</strong> is ready. You just pack your bags — we’ll handle the rest.</p>
            </li>
          </ol>



          <h2 id="why-gvi" className={styles.subTitle}>Why Choose Global Visa Internationals for Dubai Tourist Visa Assistance?</h2>
          <p >At Global Visa Internationals, we take pride in offering professional, transparent, and timely <strong className={styles.strong}>Dubai visa consultancy services</strong>. Here’s why thousands trust us:</p>

          <ul>
            <li ><strong className={styles.strong}>Tailored Guidance:</strong> We provide country-specific visa solutions based on your profile.</li>
            <li ><strong className={styles.strong}>Accuracy First:</strong> All your forms and documents are reviewed multiple times.</li>
            <li ><strong className={styles.strong}>End-to-End Support:</strong> From visa form filling to travel tips, we’re with you at every step.</li>
            <li ><strong className={styles.strong}>Proven Success:</strong> With over <strong className={styles.strong}>55,000+ visas processed</strong>, we have the expertise to get it done right.</li>
            <li ><strong className={styles.strong}>Quick Turnaround:</strong> Get your Dubai visa within 2-5 working days (sometimes faster!).</li>
          </ul>

          <p >We’re not just visa agents — we’re your travel partners. With 11+ years of visa expertise and 75,000+ consultations delivered, we at Global Visa Internationals proudly serve as India’s leading <strong className={styles.strong}>Dubai Tourist Visa consultants</strong>.</p>
          <p >Let Global Visa Internationals help you plan your unforgettable Dubai vacation — with peace of mind and professional visa assistance.</p>
          <h2 id="faq" className={styles.subTitle}>Dubai Tourist Visa from India: Frequently Asked Questions</h2>
          <div className="faq-section">
            {faqs.map((f) => (
              <details key={f.q} className="gvi-faq-item">
                <summary><h3 className={styles.subTitle}>{f.q}</h3></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <p className={styles.note}>This service is provided by Global Visa Internationals, an independent visa consultancy. We are not affiliated with the UAE government or embassy.</p>


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