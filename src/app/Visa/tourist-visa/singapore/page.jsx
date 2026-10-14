import styles from "@/Components/Visa.module.css";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import React from 'react';
import Head from "next/head";



export const metadata = {
  title: "Get Your Singapore Tourist Visa in Bangalore | Global Visa Internationals",
  description: "Planning a trip to Singapore? Let Global Visa Internationals simplify your visa process. Trusted consultants in Bangalore offering end-to-end visa support with fast approvals.",
  keywords: "Singapore tourist visa Bangalore, apply Singapore visa India, Singapore travel visa assistance, Singapore visa agents, tourist visa consultants for Singapore",
  robots: "index, follow",
  alternates: { canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/singapore", },
  openGraph: {
    type: "website",
    title: "Fast & Reliable Singapore Tourist Visa Services in Bangalore",
    description: "Expert assistance for your Singapore tourist visa application. Smooth process, accurate documentation and end-to-end support. Start your Singapore journey with confidence.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/singapore",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Singapore-Visa-Assistance-GVI.jpg",
        alt: "Apply for Singapore Tourist Visa - Global Visa Internationals",
      }
    ],
    siteName: "Global Visa Internationals"
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalvisainternationals",
    title: "Apply for Singapore Tourist Visa from Bangalore - Trusted Experts",
    description: "Need a Singapore tourist visa? Get complete assistance from Global Visa Internationals - Bangalore's preferred visa consultants.",
    images: ["https://www.globalvisainternationals.com/tourist-visa/Singapore-Visa-Assistance-GVI.jpg"]
  }
};


export default function Dubai() {
  const pageUrl = metadata.alternates.canonical;

  const TouristAttraction = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Tourist Attractions in Singapore",
    "itemListElement": [
      {
        "@type": "TouristAttraction",
        "name": "Marina Bay Sands",
        "description": "Iconic luxury hotel with a rooftop infinity pool and skypark offering panoramic views of Singapore.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/74/Marina_Bay_Sands_in_the_evening_-_20101120.jpg",
        "url": "https://www.marinabaysands.com/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Gardens by the Bay",
        "description": "A futuristic park featuring Supertree Grove, Cloud Forest, and Flower Dome, showcasing exotic plants and sustainable architecture.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Gardens_by_the_Bay%2C_Singapore_-_20120626.jpg",
        "url": "https://www.gardensbythebay.com.sg/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Sentosa Island",
        "description": "Popular island resort with beaches, theme parks, and attractions like Universal Studios Singapore.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Sentosa_Beach_Singapore.jpg",
        "url": "https://www.sentosa.com.sg/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Merlion Park",
        "description": "Famous waterfront park featuring the iconic Merlion statue and scenic views of Marina Bay.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Merlion_and_the_city_skyline%2C_Singapore_-_20120722.jpg",
        "url": "https://www.visitsingapore.com/see-do-singapore/recreation-leisure/viewpoints/merlion-park/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Singapore Flyer",
        "description": "One of the world's largest observation wheels offering spectacular cityscape views.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Singapore_Flyer_view.jpg",
        "url": "https://www.singaporeflyer.com/"
      }
    ]
  };

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
        "name": "Singapore Tourist Visa",
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
    "description": "Expert Singapore Tourist Visa Consultants in Bangalore. We offer full support for Singapore visa documentation, application filing, and personalized guidance for travelers.",
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
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
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
      q: "How long does Singapore visa processing take for Indian citizens?",
      a: "The typical processing time is approximately 3 to 5 working days, excluding the day of submission, weekends and Singaporean public holidays. It can vary with individual cases and the volume of applications, so we advise applying at least two weeks before your travel date.",
    },
    {
      q: "What documents are required for a Singapore tourist visa?",
      a: "You typically need an original passport valid for at least six months from the date of entry with two blank pages (plus a scanned copy), a signed Form 14A application form, a signed authorization form, two recent passport-size photographs (35mm x 45mm, white background), a cover letter, original bank statements for the last 3 months and salary slips, a confirmed return flight ticket, and accommodation proof. Other documents may be needed depending on your status.",
    },
    {
      q: "How much bank balance is required for a Singapore visa?",
      a: "We recommend original bank statements for the last 3 months, signed and stamped by the bank, showing a minimum balance of ₹75,000 per applicant, along with the last 3 months' salary slips as proof of steady income.",
    },
    {
      q: "How much does a Singapore tourist visa cost from India?",
      a: "The standard visa and processing fee is usually around INR 3,950, in addition to the service charge of an authorised agent such as Global Visa Internationals. Contact us for transparent and accurate information on the total cost.",
    },
    {
      q: "Is there a visa on arrival in Singapore for Indian citizens?",
      a: "No. Singapore does not offer a visa-on-arrival facility for Indian citizens holding ordinary passports. You must secure a valid visa before you travel.",
    },
    {
      q: "How long is a Singapore tourist visa valid, and how long can I stay?",
      a: "A Singapore tourist visa for Indian citizens can be granted with a validity of up to 2 years and multiple entries, but each stay is typically limited to a maximum of 30 days. The final validity and number of entries are decided at the discretion of the ICA.",
    },
    {
      q: "Do I need an agent to apply for a Singapore visa from India?",
      a: "Singapore visa applications from India are submitted through authorised visa agents. Global Visa Internationals helps you complete Form 14A, prepares your document checklist, reviews your documents, submits your application to the ICA and keeps you updated until your e-visa is approved.",
    },
    {
      q: "What is the SG Arrival Card?",
      a: "All travellers to Singapore must submit an SG Arrival Card electronically through the official ICA website or mobile app within three days before arrival. We can guide you on this mandatory requirement.",
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

  /* Visual enhancement layer (look & feel only), scoped to .gvi-sg */
  const enhancedCss = `
div.gvi-sg.gvi-sg.gvi-sg {
  --gvi-primary: #b91c1c;
  --gvi-primary-dark: #7f1d1d;
  --gvi-accent: #f59e0b;
  --gvi-ink: #1f2933;
  --gvi-muted: #52606d;
  --gvi-soft: #fef2f2;
  --gvi-line: #e4e7eb;
  --gvi-radius: 14px;
  color: var(--gvi-ink);
  line-height: 1.75;
  font-size: 1.02rem;
}

/* Headings */
div.gvi-sg.gvi-sg.gvi-sg h1 {
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
div.gvi-sg.gvi-sg.gvi-sg h2 {
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
div.gvi-sg.gvi-sg.gvi-sg h3 {
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
div.gvi-sg.gvi-sg.gvi-sg p { margin: 0 0 1.1rem; color: var(--gvi-muted); }
div.gvi-sg.gvi-sg.gvi-sg strong, div.gvi-sg.gvi-sg.gvi-sg b { color: var(--gvi-ink); font-weight: 700; }
div.gvi-sg.gvi-sg.gvi-sg a:not([class]) { color: var(--gvi-primary); font-weight: 600; }
div.gvi-sg.gvi-sg.gvi-sg [class*="smallText"] { font-size: 0.85rem; color: var(--gvi-muted); font-style: italic; }

/* Lists: one compact card per list, light dividers between rows */
div.gvi-sg.gvi-sg.gvi-sg ul {
  list-style: none;
  padding: 0.3rem 1.1rem;
  margin: 0 0 1.4rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-sg.gvi-sg.gvi-sg ul li {
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
div.gvi-sg.gvi-sg.gvi-sg ul li:last-child { border-bottom: 0; }
div.gvi-sg.gvi-sg.gvi-sg ul li::before {
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
div.gvi-sg.gvi-sg.gvi-sg ul[class*="checkList"] li::before {
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
div.gvi-sg.gvi-sg.gvi-sg ul[class*="countryGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  padding: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
}
div.gvi-sg.gvi-sg.gvi-sg ul[class*="countryGrid"] li {
  padding: 0.55rem 0.9rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 10px;
  color: var(--gvi-ink);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}
div.gvi-sg.gvi-sg.gvi-sg ul[class*="countryGrid"] li:last-child { border-bottom: 1px solid var(--gvi-line); }
div.gvi-sg.gvi-sg.gvi-sg ul[class*="countryGrid"] li::before { display: none; }
div.gvi-sg.gvi-sg.gvi-sg ul[class*="countryGrid"] li a {
  display: block;
  color: var(--gvi-primary);
  font-weight: 700;
  text-decoration: none;
}
div.gvi-sg.gvi-sg.gvi-sg ul[class*="countryGrid"] li:hover { border-color: var(--gvi-primary); }

/* Visa type cards */
div.gvi-sg.gvi-sg.gvi-sg [class*="cardContainer"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 0 0 1.8rem;
}
div.gvi-sg.gvi-sg.gvi-sg [class*="cardContainer"] > div {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 4px solid var(--gvi-accent);
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.2rem 0.4rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.06);
}
div.gvi-sg.gvi-sg.gvi-sg [class*="cardContainer"] h3 { margin: 0 0 0.6rem; padding: 0; background: none; font-size: 1.05rem; }

/* Schengen countries card */
div.gvi-sg.gvi-sg.gvi-sg [class*="schengenCard"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #fecaca;
  border-radius: 18px;
  padding: 1.4rem 1.4rem 0.6rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 6px 18px rgba(185, 28, 28, 0.08);
}
div.gvi-sg.gvi-sg.gvi-sg [class*="cardHeader"] h2 { margin-top: 0; }
div.gvi-sg.gvi-sg.gvi-sg [class*="cardSubtitle"] { margin-bottom: 1rem; }
div.gvi-sg.gvi-sg.gvi-sg [class*="countryList"] h3, div.gvi-sg.gvi-sg.gvi-sg [class*="highlightSection"] h3 { background: transparent; padding-left: 0; }
div.gvi-sg.gvi-sg.gvi-sg [class*="highlightGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1rem;
}
div.gvi-sg.gvi-sg.gvi-sg [class*="highlightItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.8rem 1rem;
}
div.gvi-sg.gvi-sg.gvi-sg [class*="countryName"] { display: block; font-weight: 800; color: var(--gvi-primary); }
div.gvi-sg.gvi-sg.gvi-sg [class*="countryInfo"] { margin: 0.2rem 0 0; font-size: 0.9rem; }

/* Highlight callout */
div.gvi-sg.gvi-sg.gvi-sg [class*="highlightBox"] {
  background: #fff8e6;
  border: 1px solid #f5d98a;
  border-left: 5px solid #f0b429;
  border-radius: 12px;
  padding: 0.4rem 1.2rem 0.6rem;
  margin: 0 0 1.8rem;
}
div.gvi-sg.gvi-sg.gvi-sg [class*="highlightBox"] h3 { background: transparent; padding-left: 0; color: #5c4a12; }

/* Step cards (h3 + p pairs, markup unchanged) */
div.gvi-sg.gvi-sg.gvi-sg [class*="stepContainer"] h3 {
  margin: 0.9rem 0 0;
  background: var(--gvi-soft);
  border: 1px solid #fecaca;
  border-bottom: 0;
  border-left: 5px solid var(--gvi-accent);
  border-radius: 12px 12px 0 0;
  padding: 0.6rem 1rem;
  font-size: 1.05rem;
}
div.gvi-sg.gvi-sg.gvi-sg [class*="stepContainer"] p {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 0;
  border-radius: 0 0 12px 12px;
  padding: 0.8rem 1rem;
  margin: 0;
}

/* Tables */
.gvi-table-wrap, div.gvi-sg.gvi-sg.gvi-sg [class*="tableWrapper"] {
  overflow-x: auto;
  margin: 0 0 1.4rem;
  border: 1px solid var(--gvi-line);
  border-radius: var(--gvi-radius);
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
  background: #fff;
}
div.gvi-sg.gvi-sg.gvi-sg table { width: 100%; border-collapse: collapse; background: #fff; min-width: 560px; margin: 0; }
div.gvi-sg.gvi-sg.gvi-sg th {
  background: linear-gradient(135deg, var(--gvi-primary), var(--gvi-primary-dark));
  color: #fff;
  text-align: left;
  padding: 0.8rem 1rem;
  font-weight: 700;
}
div.gvi-sg.gvi-sg.gvi-sg td { padding: 0.8rem 1rem; border-top: 1px solid var(--gvi-line); color: var(--gvi-muted); }
div.gvi-sg.gvi-sg.gvi-sg tbody tr:nth-child(even) td { background: #f8fafc; }
div.gvi-sg.gvi-sg.gvi-sg td:first-child { font-weight: 600; color: var(--gvi-ink); }
div.gvi-sg.gvi-sg.gvi-sg [class*="tableWrapper"] > p { margin: 0; padding: 0.7rem 1rem; }

/* Services block */
div.gvi-sg.gvi-sg.gvi-sg [class*="servicesSection"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #fecaca;
  border-radius: 18px;
  padding: 0.4rem 1.4rem 1.4rem;
  margin: 2rem 0;
}
div.gvi-sg.gvi-sg.gvi-sg [class*="serviceGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.9rem;
  margin: 1rem 0 1.4rem;
}
div.gvi-sg.gvi-sg.gvi-sg [class*="serviceItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.9rem 1.1rem 0.2rem;
  box-shadow: 0 2px 8px rgba(16, 24, 40, 0.05);
}
div.gvi-sg.gvi-sg.gvi-sg [class*="serviceItem"] b { display: block; color: var(--gvi-primary); margin-bottom: 0.2rem; }
div.gvi-sg.gvi-sg.gvi-sg [class*="ctaContainer"] {
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  text-align: center;
  box-shadow: 0 12px 28px rgba(127, 29, 29, 0.28);
}
div.gvi-sg.gvi-sg.gvi-sg [class*="ctaContainer"] p { color: #fff; font-weight: 700; font-size: 1.15rem; margin: 0 0 0.9rem; }
div.gvi-sg.gvi-sg.gvi-sg a[class*="primaryButton"] {
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
div.gvi-sg.gvi-sg.gvi-sg a[class*="primaryButton"]:hover { transform: translateY(-2px); }

/* Table of contents */
div.gvi-sg.gvi-sg.gvi-sg .gvi-toc {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-left: 5px solid var(--gvi-primary);
  border-radius: var(--gvi-radius);
  padding: 1rem 1.3rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
}
div.gvi-sg.gvi-sg.gvi-sg .gvi-toc ol { margin: 0.6rem 0 0; padding-left: 1.3rem; columns: 2 260px; column-gap: 2rem; }
div.gvi-sg.gvi-sg.gvi-sg .gvi-toc li { margin: 0.25rem 0; color: var(--gvi-muted); }
div.gvi-sg.gvi-sg.gvi-sg .gvi-toc a { color: var(--gvi-primary-dark); text-decoration: none; font-weight: 600; }
div.gvi-sg.gvi-sg.gvi-sg .gvi-toc a:hover { text-decoration: underline; }

/* Quick facts strip */
div.gvi-sg.gvi-sg.gvi-sg .gvi-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.9rem;
  margin: 1.4rem 0 2rem;
}
div.gvi-sg.gvi-sg.gvi-sg .gvi-fact {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #fecaca;
  border-radius: var(--gvi-radius);
  padding: 1rem 1.1rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(185, 28, 28, 0.08);
}
div.gvi-sg.gvi-sg.gvi-sg .gvi-fact b { display: block; font-size: 1.3rem; font-weight: 800; color: var(--gvi-primary); line-height: 1.2; }
div.gvi-sg.gvi-sg.gvi-sg .gvi-fact span { display: block; margin-top: 0.25rem; font-size: 0.85rem; color: var(--gvi-muted); }

/* In-page call-to-action band */
div.gvi-sg.gvi-sg.gvi-sg .gvi-cta-band {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--gvi-soft);
  border: 1px solid #fecaca;
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.4rem;
  margin: 1.6rem 0;
}
div.gvi-sg.gvi-sg.gvi-sg .gvi-cta-band p { margin: 0; color: var(--gvi-ink); font-weight: 600; flex: 1 1 260px; }
div.gvi-sg.gvi-sg.gvi-sg .gvi-cta-actions { display: flex; flex-wrap: wrap; gap: 0.6rem; }
div.gvi-sg.gvi-sg.gvi-sg a.gvi-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff !important;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 8px 18px rgba(185, 28, 28, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
div.gvi-sg.gvi-sg.gvi-sg a.gvi-btn.gvi-btn-wa {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  box-shadow: 0 8px 18px rgba(18, 140, 126, 0.3);
}
div.gvi-sg.gvi-sg.gvi-sg a.gvi-btn:hover { transform: translateY(-2px); }

/* FAQ accordion (same questions and answers, collapsed to stay compact) */
div.gvi-sg.gvi-sg.gvi-sg .faq-section { margin: 0 0 1.5rem; }
div.gvi-sg.gvi-sg.gvi-sg details.gvi-faq-item {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  margin: 0 0 0.6rem;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-sg.gvi-sg.gvi-sg details.gvi-faq-item summary {
  list-style: none;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 2.6rem 0.75rem 1rem;
}
div.gvi-sg.gvi-sg.gvi-sg details.gvi-faq-item summary::-webkit-details-marker { display: none; }
div.gvi-sg.gvi-sg.gvi-sg details.gvi-faq-item summary::after {
  content: "+";
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--gvi-primary);
}
div.gvi-sg.gvi-sg.gvi-sg details.gvi-faq-item[open] summary::after { content: "–"; }
div.gvi-sg.gvi-sg.gvi-sg details.gvi-faq-item summary h3 {
  display: block;
  margin: 0;
  padding: 0;
  background: none;
  font-size: 1rem;
  color: var(--gvi-ink);
}
div.gvi-sg.gvi-sg.gvi-sg details.gvi-faq-item[open] summary { border-bottom: 1px solid #eef0f3; }
div.gvi-sg.gvi-sg.gvi-sg details.gvi-faq-item p { margin: 0; padding: 0.8rem 1rem 0.9rem; }

#apply-form { scroll-margin-top: 90px; }

@media (max-width: 640px) {
  div.gvi-sg.gvi-sg.gvi-sg { font-size: 0.98rem; }
  div.gvi-sg.gvi-sg.gvi-sg h2 { margin-top: 2.2rem; }
}

/* Numbered compact list (Top 10 attractions, reasons) */
div.gvi-sg.gvi-sg.gvi-sg ol.gvi-numbered {
  list-style: none;
  counter-reset: gvi-n;
  padding: 0.3rem 1.1rem;
  margin: 0 0 1.4rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-sg.gvi-sg.gvi-sg ol.gvi-numbered > li {
  counter-increment: gvi-n;
  position: relative;
  padding: 0.6rem 0 0.6rem 2rem;
  border-bottom: 1px solid #eef0f3;
  color: var(--gvi-muted);
}
div.gvi-sg.gvi-sg.gvi-sg ol.gvi-numbered > li:last-child { border-bottom: 0; }
div.gvi-sg.gvi-sg.gvi-sg ol.gvi-numbered > li::before {
  content: counter(gvi-n) ".";
  position: absolute;
  left: 0;
  top: 0.6rem;
  font-weight: 800;
  color: var(--gvi-primary);
}

/* Office address card */
div.gvi-sg.gvi-sg.gvi-sg address {
  font-style: normal;
  line-height: 1.8;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  color: #fff;
  border-radius: 18px;
  padding: 1.4rem 1.6rem;
  margin: 1.6rem 0 2rem;
  box-shadow: 0 14px 30px rgba(127, 29, 29, 0.28);
}
div.gvi-sg.gvi-sg.gvi-sg address strong { color: #fff; }
div.gvi-sg.gvi-sg.gvi-sg address a { color: #fff !important; text-decoration: underline; font-weight: 600; }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(TouristAttraction) }}
        />
      </Head>

      {/* Scoped visual enhancements */}
      <style dangerouslySetInnerHTML={{ __html: enhancedCss }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className={styles.imageContainer}>
        <img src="/tourist-visa/Singapore-Visa-Assistance-GVI.jpg" alt="Singapore tourist visa assistance from India - Global Visa Internationals" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>

        <div className={`${styles.VisaData} gvi-sg`}>
          <h1 className={styles.Title}>Singapore Tourist Visa from India (2026): Requirements, Fees & Process</h1>

          {/* Quick facts (values taken from the sections below) */}
          <div className="gvi-facts">
            <div className="gvi-fact"><b>3-5 days</b><span>Typical processing (working days)</span></div>
            <div className="gvi-fact"><b>₹75,000</b><span>Minimum balance per applicant</span></div>
            <div className="gvi-fact"><b>Up to 2 years</b><span>Possible visa validity</span></div>
            <div className="gvi-fact"><b>30 days</b><span>Typical stay per visit</span></div>
          </div>

          <nav aria-label="Table of contents" className="gvi-toc">
            <strong>On this page</strong>
            <ol>
              <li><a href="#attractions">Top Singapore attractions</a></li>
              <li><a href="#cost-guide">Travel cost guide</a></li>
              <li><a href="#requirements">Visa requirements & documents</a></li>
              <li><a href="#how-to-apply">How to apply</a></li>
              <li><a href="#processing-time">Processing time</a></li>
              <li><a href="#visa-cost">Visa cost</a></li>
              <li><a href="#important-points">Important points</a></li>
              <li><a href="#why-gvi">Why choose GVI</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          <p >Planning your dream vacation to Singapore? Whether you're traveling for leisure, sightseeing, or to visit family and friends, obtaining a Singapore tourist visa is the first step. At <strong className={styles.strong}>Global Visa Internationals,</strong> we provide complete Singapore visa assistance for Indian citizens. With over 11 years of expertise, we've helped thousands of travelers successfully apply for Singapore visas from India, including popular cities like Bangalore, Chennai, and Mumbai.</p>
          <p >Our team of authorised Singapore visa agents in India offers end-to-end services including documentation support, application review, Form 14A completion, cover letter drafting, and detailed Singapore visa checklists tailored for Indian applicants. Whether you need a Singapore visa for tourism, a short-term visit pass, or help with your Singapore e-visa application, our consultants ensure a smooth, error-free process. We understand common Singapore visa rejection reasons and help you avoid costly mistakes.</p>
          <p >Wondering how long it takes? The typical Singapore tourist visa processing time is around 3-5 working days, though it may vary. The Singapore visa fee is approximately SGD 30, and our team will walk you through all visa application charges with complete transparency. If you're in a rush, we can help with quicker turnaround times where possible, depending on the embassy and submission schedule.</p>
          <p >Whether you're applying online or need in-person visa documentation assistance, our expert team offers personalized support. From navigating Singapore visa delays to writing a visa invitation letter, we ensure every requirement is met accurately. We're known for reliable, transparent service and personalised support from start to finish.</p>
          <p >Don't leave your travel plans to chance. Choose <strong className={styles.strong}>Global Visa Internationals,</strong> your trusted Singapore visa consultancy service in India. Contact us today to get started on your Singapore visa application process, and travel with peace of mind knowing you're backed by professional, end-to-end visa support.</p>

          <p >Singapore, a dynamic island nation, captivates visitors with its stunning Singapore skyline, verdant Singapore gardens, and a rich tapestry of Singapore culture. Whether you envision yourself exploring futuristic landscapes or savoring diverse culinary experiences, a Singapore holiday promises an unforgettable escape. Allow Global Visa Internationals to streamline your travel by providing expert assistance with your Singapore tourist visa application. Contact Global Visa Internationals today to begin your journey!</p>

          <h2 id="attractions" className={styles.subTitle}>Top 10 Must-See Singapore Attractions</h2>
          <p>Embark on a journey to discover the iconic landmarks and hidden gems that define Singapore's unique charm:</p>

          <ol className="gvi-numbered">
            <li ><b className={styles.strong}>Singapore attractions,</b> Immerse yourself in the mesmerizing Supertree Grove, discover the wonders of the Flower Dome and Cloud Forest conservatories, and witness the enchanting Garden Rhapsody light and sound spectacle.  Contact Global Visa Internationals for a smooth visa process to experience this!</li>
            <li ><b className={styles.strong}>Singapore skyline: </b> Marvel at the architectural grandeur of Marina Bay Sands, capture breathtaking panoramic views of the Singapore skyline from the Sands SkyPark Observation Deck, and experience the excitement of its renowned casino. </li>
            <li ><b className={styles.strong}>Sentosa Island:</b> Escape to the recreational haven of Sentosa Island, offering thrilling adventures at Universal Studios Singapore, serene beaches, the captivating S.E.A. Aquarium, and the iconic Merlion statue.</li>
            <li ><b className={styles.strong}>Orchard Road Shopping:</b> Indulge in a world-class Orchard Road shopping experience along this prestigious boulevard, featuring luxurious boutiques, upscale department stores, and vibrant shopping malls.</li>
            <li ><b className={styles.strong}>Singapore Food at Hawker Centres: </b>Immerse yourself in Singapore's vibrant culinary scene by exploring authentic Singapore food at local hawker centres, offering a delectable array of affordable and diverse dishes.</li>
            <li ><b className={styles.strong}>Little India Singapore and Chinatown Singapore - Little India Singapore:</b> Experience the rich Singapore culture by wandering through the colorful streets of Little India Singapore and Chinatown Singapore, filled with ornate temples, bustling markets, and authentic cuisine.</li>
            <li ><b className={styles.strong}>Singapore Botanic Gardens:</b> Unwind in the lush greenery of the Singapore Botanic Gardens, a UNESCO World Heritage Site, featuring the stunning National Orchid Garden and serene walking trails.</li>
            <li ><b className={styles.strong}>Singapore Flyer:</b> Take a ride on the Singapore Flyer, one of the world's largest observation wheels, for breathtaking views of the city skyline and Marina Bay.</li>
            <li ><b className={styles.strong}>Clarke Quay:</b> Experience the vibrant nightlife of Clarke Quay, a riverside quay filled with restaurants, bars, and clubs, perfect for dining and entertainment.</li>
            <li ><b className={styles.strong}>Singapore Zoo:</b> Discover the wonders of wildlife at the Singapore Zoo, renowned for its open-concept enclosures and diverse animal exhibits.</li>
          </ol>


          <h2 id="reasons" className={styles.subTitle}>Top Reasons to Visit Singapore</h2>
          <p >Singapore's unique blend of modernity, cultural richness, and natural beauty makes it a compelling destination for all types of travelers:</p>
          <ol className="gvi-numbered">
            <li ><strong className={styles.strong}>Safe Travel Singapore and Clean City Singapore:</strong> Singapore is globally recognized for its exceptionally low crime rate and remarkably clean environment, offering visitors unparalleled peace of mind.</li>
            <li ><strong className={styles.strong}>Singapore Culture Diversity and Multicultural Singapore:</strong> Immerse yourself in Singapore's vibrant Singapore culture diversity, a harmonious blend of Chinese, Malay, Indian, and Western influences evident in its cuisine, festivals, and architecture, creating a truly multicultural Singapore.</li>
            <li ><strong className={styles.strong}>Top Attractions Singapore and Singapore Sightseeing:</strong> From futuristic Singapore gardens to thrilling theme parks, Singapore boasts a wealth of top attractions Singapore ensuring a memorable Singapore sightseeing experience.</li>
            <li ><strong className={styles.strong}>Singapore Food Scene and Best Food in Singapore:</strong> Indulge in the diverse and delectable Singapore food scene, ranging from Michelin-starred establishments to the best food in Singapore found in its bustling hawker centres.</li>
            <li ><strong className={styles.strong}>Singapore Changi Airport and Transportation in Singapore:</strong> Benefit from Singapore's Changi Airport, a major international hub offering seamless global connections, complemented by an excellent and efficient transportation in Singapore network.</li>
            <li ><strong className={styles.strong}>Parks in Singapore and Singapore Gardens:</strong> Despite its modern urban landscape, Singapore boasts numerous lush parks in Singapore and stunning Singapore gardens, providing refreshing escapes within the city. </li>
          </ol>

          <h2 id="cost-guide" className={styles.subTitle}>Singapore Travel Cost Guide for Indian Travellers (Approximate)</h2>

          <div className="gvi-table-wrap">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Estimated Cost (SGD)</th>
                <th>Estimated Cost (INR)</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Category">Flights (One-way)</td>
                <td data-label="SGD">S$120-S$380</td>
                <td data-label="INR">₹7,490-₹22,000</td>
                <td data-label="Details">From major Indian cities - <a href="https://www.airindia.com/en-in/book-flights/flights-to-singapore" target="_blank" rel="noopener noreferrer">Air India</a></td>
              </tr>
              <tr>
                <td data-label="Category">Accommodation (Per night)</td>
                <td data-label="SGD">S$20-S$423</td>
                <td data-label="INR">₹1,250-₹26,000</td>
                <td data-label="Details"><a href="https://www.booking.com/city/sg/singapore.html" target="_blank" rel="noopener noreferrer">Booking.com</a>, <a href="https://www.agoda.com/country/singapore.html" target="_blank" rel="noopener noreferrer">Agoda</a></td>
              </tr>
              <tr>
                <td data-label="Category">Food (Per day)</td>
                <td data-label="SGD">S$15-S$100</td>
                <td data-label="INR">₹950-₹6,300</td>
                <td data-label="Details">Hawker to mid-range - <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=Singapore" target="_blank" rel="noopener noreferrer">Numbeo</a></td>
              </tr>
              <tr>
                <td data-label="Category">Public Transport</td>
                <td data-label="SGD">S$4-S$10</td>
                <td data-label="INR">₹250-₹630</td>
                <td data-label="Details"><a href="https://www.ptc.gov.sg/fare-regulation/bus-rail/fare-structure" target="_blank" rel="noopener noreferrer">Public Transport Council</a></td>
              </tr>
              <tr>
                <td data-label="Category">Attractions</td>
                <td data-label="SGD">S$10-S$56</td>
                <td data-label="INR">₹630-₹3,500</td>
                <td data-label="Details"><a href="https://www.singapore-tickets.com/" target="_blank" rel="noopener noreferrer">Singapore Tickets</a></td>
              </tr>
              <tr>
                <td data-label="Category">Visa (Indian Citizens)</td>
                <td data-label="SGD">S$30 + S$10.50</td>
                <td data-label="INR">₹1,900 + ₹650</td>
                <td data-label="Details"><a href="https://www.mfa.gov.sg/Overseas-Mission/Mumbai/Consular-Services/Visa-Information" target="_blank" rel="noopener noreferrer">Singapore MFA</a></td>
              </tr>
            </tbody>
          </table>
          </div>



          <h2 className={styles.Title}>
            Singapore Visa Requirements for Indian Citizens with Global Visa Internationals
          </h2>

          <p>
            Planning your dream Singapore holiday? For Indian citizens holding ordinary
            passports, a valid Singapore tourist visa is essential before you embark on your
            journey to explore the stunning Singapore skyline and vibrant Singapore culture.{" "}
            <strong className={styles.strong}>Global Visa Internationals</strong> is here to
            simplify this crucial step, ensuring a smooth and stress-free visa application
            process.{" "}
            <strong className={styles.strong}>
              Don't take the risk of visa rejection; contact Global Visa Internationals for
              expert assistance and guidance!
            </strong>
          </p>

          <h2 id="requirements" className={styles.subTitle}>Complete List of Singapore Visa Requirements</h2>
          <p>
            To kickstart your Singapore tourist visa application, you’ll need to provide the
            following documents. At{" "}
            <strong className={styles.strong}>Global Visa Internationals</strong>, we guide you
            through every step to ensure your application is complete and accurate:
          </p>

          <ul>
            <li>
              <strong className={styles.strong}>Passport:</strong> Original valid passport with
              at least six months of validity from the date of entry into Singapore and a
              minimum of two blank pages. <br />
              Additionally, provide a properly <strong>scanned copy</strong> of your passport.
            </li>

            <li>
              <strong className={styles.strong}>Application Form (Form 14A):</strong> Must be
              signed.{" "}
              <a
                href="https://www.globalvisainternationals.com/Documents/Singapore-Application-Form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Application Form
              </a>
              . <br />
              <em>
                (Prepared by Global Visa Internationals – you only need to sign and send it to
                us)
              </em>
            </li>

            <li>
              <strong className={styles.strong}>Authorization Form:</strong> Must be signed.{" "}
              <a
                href="https://www.globalvisainternationals.com/Documents/Singapore-Authorisation-Letter.docx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Authorization Form
              </a>
              . <br />
              <em>
                (Prepared by Global Visa Internationals – you only need to sign and send it to
                us)
              </em>
            </li>

            <li>
              <strong className={styles.strong}>Photographs:</strong> Two recent passport-size
              photographs (both hard copy and soft copy), taken against a white background and
              meeting Singapore visa photo specifications (35mm x 45mm).
            </li>

            <li>
              <strong className={styles.strong}>Cover Letter:</strong> We will prepare the
              cover letter and share the soft copy with you. You only need to sign it and send
              the signed copy along with your documents to our office address.
            </li>

            <li>
              <strong className={styles.strong}>Financial Documents:</strong> Original{" "}
              <strong>bank statements for the last 3 months</strong>, showing a minimum balance
              of ₹75,000 per applicant, signed and stamped by the bank. <br />
              Additionally, last 3 months’ salary slips as proof of steady income.
            </li>

            <li>
              <strong className={styles.strong}>Confirmed Return Flight Ticket:</strong> Proof
              of your return or onward journey from Singapore.
            </li>

            <li>
              <strong className={styles.strong}>Accommodation Proof:</strong> Confirmed hotel
              booking or invitation letter with complete details (name, address, and contact
              information of host/accommodation).
            </li>

            <li>
              <strong className={styles.strong}>Form V39A (Letter of Introduction):</strong>{" "}
              In certain cases, a Singapore citizen or Permanent Resident may need to issue
              this letter. We will guide you if this applies to your case.
            </li>

            <li>
              <strong className={styles.strong}>Other Supporting Documents:</strong> Depending
              on your status.
              {/* <ul>
                <li>Business registration certificate (if self-employed)</li>
                <li>No Objection Certificate (NOC) from parents (if student)</li>
                <li>Company ID card or employment letter (if employed)</li>
                <li>Resident proof of Karnataka or other states, if applicable</li>
              </ul> */}
            </li>
          </ul>

          <h2 id="submission" className={styles.subTitle}>Submission & Processing</h2>
          <p>
            Once you’ve signed the required forms and gathered all documents, please send them
            to our office address below. After submission, the Singapore visa processing
            typically takes <strong>3–5 working days</strong>.
          </p>

          <address>
            <strong>Global Visa Internationals</strong> <br />
            G-F9, Business Point, 137 Brigade Road, <br />
            Next to Brigade Tower, Bangalore – 560025, Karnataka <br />
            +91-7022213466 <br />
            <a href="mailto:operation@globalvisainternationals.com">
              operation@globalvisainternationals.com
            </a>
          </address>



          <div className="gvi-cta-band">
            <p>Want your Singapore visa file checked before submission? Talk to our visa experts.</p>
            <div className="gvi-cta-actions">
              <a href="#apply-form" className="gvi-btn">Get Free Eligibility Check</a>
              <a href="https://wa.me/917022213466?text=Hi,%20I%20would%20like%20a%20free%20eligibility%20check%20for%20a%20Singapore%20Tourist%20Visa" className="gvi-btn gvi-btn-wa">Chat on WhatsApp</a>
            </div>
          </div>

          <h2 id="how-to-apply" className={styles.subTitle}>How to Apply for Your Singapore Visa Online with Global Visa Internationals</h2>
          <p>
            The Singapore High Commission in India mandates that all Singapore visa applications be submitted through authorized visa agents.
            <strong className={styles.strong}>Global Visa Internationals</strong> is your trusted partner in navigating this process seamlessly.
            Here's how we assist you in applying for your Singapore tourist visa or business visa:
          </p>
          <ul>
            <li>
              <strong className={styles.strong}>Expert Visa Consultation:</strong> Our knowledgeable consultants provide personalized guidance on the  Singapore visa process based on your travel plans, employment status, or family requirements. Contact Global Visa Internationals today to start your application.
            </li>
            <li>
              <strong className={styles.strong}>Authorized Singapore Visa Agent Assistance:</strong> As an officially recognized agent, we manage the entire
              Singapore visa application process on your behalf, ensuring smooth and error-free submission.
            </li>
            <li>
              <strong className={styles.strong}>Application Form Support:</strong> We assist you in accurately completing the
              Singapore visa application form (Form 14A), ensuring all required details are correctly filled in.
            </li>
            <li>
              <strong className={styles.strong}>Document Preparation & Checklist:</strong> Our team provides a detailed
              Singapore visa documents checklist and guides you on submitting them in the proper format (PDF or JPG).
            </li>
            <li>
              <strong className={styles.strong}>Secure Visa Fee Payment:</strong> We facilitate a safe and hassle-free
              Singapore visa fee payment process online.
            </li>
            <li>
              <strong className={styles.strong}>Passport Handling & Verification:</strong> If the original passport is required for verification,
              we provide step-by-step instructions on securely couriering it to the appropriate processing center.
            </li>
            <li>
              <strong className={styles.strong}>Submission to ICA (Immigration & Checkpoints Authority):</strong>
              <strong>Global Visa Internationals</strong> thoroughly reviews your application and supporting
              Singapore visa documents before submitting them to the ICA of Singapore.
            </li>
            <li>
              <strong className={styles.strong}>Regular Visa Application Updates:</strong> We keep you informed about the status of your
              Singapore visa online application for complete peace of mind.
            </li>
            <li>
              <strong className={styles.strong}>Visa Approval & Retrieval Guidance:</strong> Once your
              Singapore e-visa is approved, we provide clear instructions on downloading, printing, and carrying it with your passport during travel.
            </li>
          </ul>


          <h2 id="processing-time" className={styles.subTitle}>Understanding Singapore Visa Processing Time:</h2>
          <p >The typical Singapore visa processing time for Indian citizens is approximately <strong className={styles.strong}>3 to 5 working days,</strong>excluding the day of submission, weekends, and Singaporean public holidays. However, it's important to note that processing times can vary based on individual cases and the volume of applications received by the ICA. To avoid any last-minute stress, we strongly advise you to apply for your Singapore tourist visa at least two weeks before your intended travel date. Contact Global Visa Internationals for timely processing assistance.</p>

          <h2 id="visa-cost" className={styles.subTitle}>Understanding the Singapore Visa Cost (Tourist Visa Fees Singapore):</h2>
          <p >The total Singapore visa cost for Indian citizens typically comprises a non-refundable visa processing fee levied by the ICA and a service charge by the authorized agent, such as <strong className={styles.strong}>Global Visa Internationals</strong>.</p>
          <ul >
            <li>The standard <strong className={styles.strong}>visa and processing fee is usually around INR 3,950</strong>.</li>
            <li><strong className={styles.strong}>Global Visa Internationals</strong> offers competitive service charges for our expert assistance. For detailed information on our service fees, please fill out the form, and our experts will contact you immediately.</li>
          </ul>
          <p  >Therefore, the overall cost for your Singapore tourist visa will be the sum of these two components. Contact Global Visa Internationals for transparent and accurate information regarding the tourist visa fees Singapore.</p>

          <h2 id="important-points" className={styles.subTitle}>Important Points to Keep in Mind:</h2>
          <ul>
            <li ><strong className={styles.strong}>Visa-Free Transit Facility (VFTF):</strong> If you are an Indian national transiting through Singapore by air to or from a third country, you might be eligible for the 96-hour Visa-Free Transit Facility (VFTF) under specific conditions. These conditions include possessing a valid onward/return air ticket and, in some instances, a valid visa or long-term pass from certain countries (Australia, Canada, Germany, Japan, New Zealand, Switzerland, UK, USA).</li>
            <li ><strong className={styles.strong}>Visa Validity and Stay Duration:</strong> While a Singapore tourist visa for Indian citizens can be granted with a validity of up to 2 years and allow for multiple entries, the duration of each individual stay is typically limited to a maximum of 30 days. The final validity and the number of entries are determined at the discretion of the ICA.</li>
            <li ><strong className={styles.strong}>No Visa on Arrival:</strong> It's crucial to remember that Singapore does not offer a visa-on-arrival facility for Indian citizens holding ordinary passports. <strong className={styles.strong}>You must secure a valid visa before commencing your travel. Don't take the risk; contact Global Visa Internationals for your visa needs.</strong></li>
            <li ><strong className={styles.strong}>SG Arrival Card:</strong> All travelers to Singapore are required to submit an SG Arrival Card electronically via the official ICA website or mobile app within three days prior to their arrival. <strong className={styles.strong}>Global Visa Internationals</strong> can provide you with guidance on this mandatory requirement.</li>
          </ul>


          <div className="gvi-cta-band">
            <p>Ready to apply? Get a free eligibility check today.</p>
            <div className="gvi-cta-actions">
              <a href="#apply-form" className="gvi-btn">Get Free Eligibility Check</a>
              <a href="https://wa.me/917022213466?text=Hi,%20I%20would%20like%20a%20free%20eligibility%20check%20for%20a%20Singapore%20Tourist%20Visa" className="gvi-btn gvi-btn-wa">Chat on WhatsApp</a>
            </div>
          </div>

          <h2 id="why-gvi" className={styles.subTitle}>Why Choose Global Visa Internationals for Your Visa Needs?</h2>
          <p>At <strong className={styles.strong}>Global Visa Internationals,</strong> we understand that the visa application process can be complex and time-consuming. That's why we offer:</p>
          <ul>
            <li> <b className={styles.strong}>Personalized Guidance:</b> Our experienced consultants provide tailored support throughout your application journey</li>
            <li> <b className={styles.strong}>Expert Knowledge:</b> We stay up-to-date with the latest visa regulations to ensure your application is accurate and complete.</li>
            <li> <b className={styles.strong}>Stress-Free Process:</b> We handle the paperwork and guide you through each step, saving you time and stress.</li>
            <li> <b className={styles.strong}>High Success Rate:</b> We are committed to maximizing your chances of a successful visa outcome.</li>
            <li> <b className={styles.strong}>Additional Services:</b> We also take Mock Interviews to prepare you for the visa interview process.</li>
          </ul>

          <p>We at <strong className={styles.strong}>Global Visa Internationals,</strong> proud to be India's finest visa consultants, are dedicated to making your dreams into reality. With our 11+ years of experience as leading visa consultants in Bangalore, we have successfully managed to process over 55,000+ visas and offer over 75,000 expert visa advice sessions till date. You can confidently rely on our vast visa and immigration consulting experience in India.</p>
          <h2 id="faq" className={styles.subTitle}>Singapore Tourist Visa from India: Frequently Asked Questions</h2>
          <div className="faq-section">
            {faqs.map((f) => (
              <details key={f.q} className="gvi-faq-item">
                <summary><h3 className={styles.subTitle}>{f.q}</h3></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <p>Let Global Visa Internationals assist you in navigating the visa application process and planning your dream Singapore holiday!</p>
          <p className={styles.note}> This service is provided by <strong className={styles.strong}>Global Visa Internationals,</strong> an independent consultancy. We are not affiliated with the Singapore Government, the ICA or any embassy.</p>
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