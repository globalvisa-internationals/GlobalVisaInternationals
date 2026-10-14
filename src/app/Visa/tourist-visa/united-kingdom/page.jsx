import React from "react";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import styles from "@/Components/Visa.module.css";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";


// import ReviewCard from "@/components/ReviewCard";



export const metadata = {
  metadataBase: new URL("https://www.globalvisainternationals.com"),

  title: "UK Tourist Visa from India: Fees, Documents & Process 2026 | GVI",
  description:
    "Apply for your UK tourist visa from India with expert UK visa consultants. Get help for documents, online application, fees, processing time & appointments.",
  keywords:
    "UK tourist visa from India, UK visitor visa consultants, UK visa agents in India, apply UK visa online India, UK visa assistance Bangalore, UK visa documentation help",

  robots: "index, follow",
  category: "Travel Agency, Visa Consultancy",
  canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom",
  },

  applicationName: "Global Visa Internationals",
  publisher: "Global Visa Internationals",
  creator: "Global Visa Internationals Team",

  authors: [
    {
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com",
    },
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",


  openGraph: {
    title: "Apply UK Tourist Visa from India | Fast UK Visa Assistance",
    description:
      "Global Visa Internationals provides complete support for UK tourist visa applications, including documentation, online filing, and appointment scheduling.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom",
    siteName: "Global Visa Internationals",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/UK-Tourist-Visa-Assistance-GVI.jpg",
        width: 1200,
        height: 630,
        alt: "UK Tourist Visa Assistance - Global Visa Internationals",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    title: "UK Tourist Visa from India | Best UK Visa Help",
    description:
      "Get fast UK tourist visa assistance in India. Expert documentation, application filing & appointment help by Global Visa Internationals.",
    images: [
      "https://www.globalvisainternationals.com/tourist-visa/UK-Tourist-Visa-Assistance-GVI.jpg",
    ],
  },

  other: {
    "theme-color": "#ffffff",
    "og:locale": "en_IN",
    "twitter:creator": "@GLOBALVISA1505",
    "msapplication-TileColor": "#ffffff",
  },

  language: "en-IN",
  abstract:
    "UK Tourist Visa assistance from India with expert support in documentation, filing, and appointment scheduling.",

  rating: "General",
  revisitAfter: "7 days",
};




// Single source of truth for the visible FAQ section AND the FAQPage schema,
// so the two always match.
const faqs = [
  {
    q: "How long does a UK tourist visa take in India?",
    a: "Standard UK visa processing in India takes approximately 15 working days (3 weeks) from the date of your biometric appointment. Priority services (5 working days) and Super Priority services (next working day) are available for an additional fee. During peak travel seasons, processing may take longer.",
  },
  {
    q: "What documents are required for a UK tourist visa?",
    a: "You typically need a valid passport, proof of earnings , bank statements, a travel itinerary, and proof of accommodation. You must also prove you will leave the UK at the end of your visit, for example with a return ticket and evidence of ties to your home country .",
  },
  {
    q: "How do I apply for a UK tourist visa from India?",
    a: "Fill out the application online at GOV.UK by selecting 'Standard Visitor visa', pay the visa fee, and book a biometric appointment at a VFS Global centre in your city (e.g., Delhi, Mumbai, Bangalore). You submit your passport and fingerprints at this appointment. Indian applicants pay the fee in INR, and approved applicants receive their passport with the visa vignette via courier or collection.",
  },
  {
    q: "How much does a UK tourist visa cost in India?",
    a: "The Standard Visitor Visa (up to 6 months) costs £127, which is approximately ₹16,000 depending on the exchange rate, and is paid online during the application. Long-term visas (2, 5 or 10 years) cost significantly more, ranging from £475 to over £1,000. VFS Global service charges, document scanning and priority processing are extra if you choose them.",
  },
  {
    q: "How long is a UK tourist visa valid?",
    a: "A standard UK tourist visa is valid for 6 months, and you can stay in the UK for up to 6 months per visit. Long-term visas are valid for 2, 5, or 10 years, but the maximum stay per visit remains 6 months. It is usually a multi-entry visa, so you can leave and re-enter within the valid period.",
  },
  {
    q: "Can a UK tourist visa be extended?",
    a: "Generally, no. You cannot extend a Standard Visitor visa beyond 6 months unless you are receiving private medical treatment or are an academic meeting specific eligibility criteria.",
  },
  {
    q: "Can I travel to Ireland with a UK tourist visa?",
    a: "Yes, in many cases. Under the British-Irish Visa Scheme (BIVS) (for Indian and Chinese nationals) or the Short Stay Visa Waiver Programme, you can travel to Ireland using a valid UK tourist visa, provided you enter the UK first.",
  },
  {
    q: "Can I work on a UK tourist visa?",
    a: "No. You are strictly prohibited from doing paid or unpaid work for a UK company or as a self-employed person while on a tourist visa.",
  },
  {
    q: "Can a UK tourist visa be converted into a work permit?",
    a: "No. You cannot switch from a Standard Visitor visa to a Skilled Worker visa or any other work permit while inside the UK. You must leave the UK and apply for a work visa from your home country.",
  },
  {
    q: "When should I apply for a UK tourist visa?",
    a: "You can apply up to 3 months before your intended travel date. It is recommended to apply at least 6 weeks in advance to account for processing times.",
  },
  {
    q: "Where do I apply for a UK tourist visa?",
    a: "You fill out the application online at the UK Government website (GOV.UK). After submitting the form, you attend a physical appointment at a visa application centre (VAC) in your country to provide your biometrics.",
  },
  {
    q: "Where can I travel with a UK tourist visa?",
    a: "A UK tourist visa lets you visit England, Scotland, Wales and Northern Ireland. You may also visit the Republic of Ireland under the BIVS or Short Stay Visa Waiver Programme if you enter the UK first. It does not grant access to the Schengen Area (mainland Europe).",
  },
  {
    q: "What is a UK tourist visa?",
    a: "The UK Tourist Visa (officially the Standard Visitor Visa) is an official document that allows foreign nationals to visit the UK for tourism, visiting family or friends, business meetings, medical treatment, or short-term study for up to 6 months.",
  },
  {
    q: "How can I improve my chances of getting a UK tourist visa?",
    a: "You must prove you are a genuine visitor. Submit a complete online application, pay the fee, and provide documents showing strong ties to your home country (job, family, assets), along with a clear cover letter and itinerary.",
  },
];

export default function UKTouristVisa() {
  const pageUrl = metadata.alternates.canonical;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.globalvisainternationals.com/#organization",
        "name": "Global Visa Internationals",
        "legalName": "Global Visa Internationals Pvt Ltd",
        "url": "https://www.globalvisainternationals.com",
        "logo": "https://www.globalvisainternationals.com/gvilogo.png",
        "sameAs": [
          "https://www.facebook.com/globalvisainternationals/",
          "https://www.instagram.com/globalvisa_internationals/",
          "https://www.linkedin.com/company/global-visa-internationals/",
          "https://x.com/GLOBALVISA1505",
          "https://www.youtube.com/@globalVisaInternationals",
          "https://www.google.com/maps/place/Global+Visa+Internationals"
        ]
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.globalvisainternationals.com/#localbusiness",
        "name": "Global Visa Internationals",
        "image": "https://www.globalvisainternationals.com/gvilogo.png",
        "url": "https://www.globalvisainternationals.com",
        "telephone": "+917022213466",
        "priceRange": "₹₹",
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
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "18:00"
          }
        ],
        "parentOrganization": {
          "@id": "https://www.globalvisainternationals.com/#organization"
        }
      },

      {
        "@type": "TravelAgency",
        "@id": "https://www.globalvisainternationals.com/#travelagency",
        "name": "Global Visa Internationals",
        "legalName": "Global Visa Internationals Pvt Ltd",
        "url": "https://www.globalvisainternationals.com",
        "logo": "https://www.globalvisainternationals.com/gvilogo.png",
        "image": [
          "https://www.globalvisainternationals.com/Office/office-photo1.jpg",
          "https://www.globalvisainternationals.com/Office/team-photo.jpg"
        ],
        "description": "Trusted UK Tourist Visa Consultants in Bengaluru. Expert guidance on UK Standard Visitor visas including documentation, online filing, and appointment booking.",
        "telephone": "+917022213466",
        "email": "operations@globalvisainternationals.com",
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
        "hasMap": "https://maps.app.goo.gl/W3J5HHqhEma4PG7M8",
        "areaServed": [{ "@type": "Country", "name": "India" }],
        "priceRange": "₹₹",
        "paymentAccepted": [
          "Credit Card",
          "Debit Card",
          "Bank Transfer",
          "UPI"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+917022213466",
            "contactType": "customer service",
            "availableLanguage": ["English", "Kannada", "Hindi"]
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.6,
          "reviewCount": 224
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "RAJESH R R" },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5,
              "bestRating": 5
            },
            "datePublished": "2025-09-10",
            "reviewBody":
              "Excellent experience with Global Visa Internationals. Very supportive and helpful."
          }
        ]
      },

      {
        "@type": "WebSite",
        "@id": "https://www.globalvisainternationals.com/#website",
        "name": "Global Visa Internationals",
        "url": "https://www.globalvisainternationals.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target":
            "https://www.globalvisainternationals.com/search?q={search_term}",
          "query-input": "required name=search_term"
        },
        "publisher": {
          "@id": "https://www.globalvisainternationals.com/#organization"
        }
      },

      {
        "@type": "WebPage",
        "@id":
          "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom#webpage",
        "url":
          "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom",
        "name": "UK Tourist Visa from India | Apply UK Visitor Visa",
        "isPartOf": {
          "@id": "https://www.globalvisainternationals.com/#website"
        },
        "about": {
          "@id": "https://www.globalvisainternationals.com/#organization"
        },
        "primaryImageOfPage":
          "https://www.globalvisainternationals.com/tourist-visa/UK-Tourist-Visa-Assistance-GVI.jpg",
        "description":
          "Apply for UK tourist visa with expert consultants. Assistance with documentation, online filing, visa fees, and appointment scheduling.",
        "breadcrumb": {
          "@id": "https://www.globalvisainternationals.com/#breadcrumb"
        }
      },

      {
        "@type": "Service",
        "@id": "https://www.globalvisainternationals.com/#service",
        "serviceType": "UK Tourist Visa Assistance",
        "provider": {
          "@id": "https://www.globalvisainternationals.com/#organization"
        },
        "description":
          "Full UK tourist visa support including documentation, filing, cover letter drafting, financial guidance, and appointment booking.",
        "areaServed": "India",
        "offers": {
          "@type": "Offer",
          "price": "Contact for pricing",
          "priceCurrency": "INR",
          "url":
            "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom"
        }
      },

      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://www.globalvisainternationals.com/#faqpage",
        "mainEntity": faqs.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.globalvisainternationals.com/#breadcrumb",
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
            "name": "UK Tourist Visa",
            "item":
              "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom"
          }
        ]
      },

      {
        "@type": "ItemList",
        "@id": "https://www.globalvisainternationals.com/#uk-attractions",
        "name": "Top Tourist Attractions in the UK",
        "itemListElement": [
          {
            "@type": "TouristAttraction",
            "name": "Big Ben & Houses of Parliament",
            "description":
              "Historic British Parliament and iconic clock tower.",
            "image":
              "https://upload.wikimedia.org/wikipedia/commons/4/43/Elizabeth_Tower%2C_June_2022.jpg",
            "url": "https://www.parliament.uk/"
          }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------------
     Visual enhancement layer (look & feel only), scoped to .gvi-uk
  ------------------------------------------------------------------- */
  const enhancedCss = `
.gvi-uk {
  --gvi-primary: #0f5b6b;
  --gvi-primary-dark: #0a3f4b;
  --gvi-accent: #c8102e;
  --gvi-ink: #1f2933;
  --gvi-muted: #52606d;
  --gvi-soft: #eaf4f6;
  --gvi-line: #e4e7eb;
  --gvi-radius: 14px;
  color: var(--gvi-ink);
  line-height: 1.75;
  font-size: 1.02rem;
}

/* Headings */
.gvi-uk h1 {
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
.gvi-uk h2 {
  position: relative;
  font-size: clamp(1.35rem, 2.2vw, 1.8rem);
  font-weight: 700;
  line-height: 1.3;
  margin: 3rem 0 1rem;
  padding: 0.35rem 0 0.35rem 1rem;
  border-left: 5px solid var(--gvi-accent);
  color: var(--gvi-ink);
  scroll-margin-top: 90px;
}
.gvi-uk h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 1.8rem 0 0.7rem;
  padding: 0.55rem 1rem;
  background: var(--gvi-soft);
  border-radius: 10px;
  color: var(--gvi-primary-dark);
}

/* Text */
.gvi-uk p { margin: 0 0 1.1rem; color: var(--gvi-muted); }
.gvi-uk strong, .gvi-uk b { color: var(--gvi-ink); font-weight: 700; }
.gvi-uk a:not([class]) { color: var(--gvi-primary); font-weight: 600; }

/* Lists: one compact card per list, light dividers between rows */
.gvi-uk ul {
  list-style: none;
  padding: 0.3rem 1.1rem;
  margin: 0 0 1.4rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
.gvi-uk ul li {
  position: relative;
  padding: 0.6rem 0 0.6rem 1.5rem;
  margin: 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #eef0f3;
  border-radius: 0;
  box-shadow: none;
  color: var(--gvi-muted);
}
.gvi-uk ul li:last-child { border-bottom: 0; }
.gvi-uk ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 1.15rem;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gvi-primary);
}
.gvi-uk ul ul { margin: 0.5rem 0 0.2rem; padding: 0; border: 0; box-shadow: none; background: transparent; }
.gvi-uk ul ul li { padding: 0.3rem 0 0.3rem 1.3rem; border-bottom: 0; }
.gvi-uk ul ul li::before { top: 0.8rem; width: 5px; height: 5px; background: var(--gvi-muted); }

/* Numbered steps */
.gvi-uk ol.gvi-steps { list-style: none; counter-reset: gvi-step; padding: 0; margin: 0 0 1.6rem; }
.gvi-uk ol.gvi-steps > li {
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
.gvi-uk ol.gvi-steps > li::before {
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
.gvi-uk ol.gvi-steps > li > p { margin: 0.4rem 0 0.6rem; }

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
  border: 1px solid #cfe3e8;
  border-radius: var(--gvi-radius);
  padding: 1rem 1.1rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(15, 91, 107, 0.08);
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
  border: 1px solid #cfe3e8;
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.4rem;
  margin: 1.6rem 0;
}
.gvi-cta-band p { margin: 0; color: var(--gvi-ink); font-weight: 600; flex: 1 1 260px; }
.gvi-uk a.gvi-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 8px 18px rgba(15, 91, 107, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.gvi-uk a.gvi-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(15, 91, 107, 0.36); }

/* Address / contact cards */
.gvi-uk address {
  font-style: normal;
  background: linear-gradient(135deg, #0f5b6b 0%, #0a3f4b 100%);
  color: #fff;
  border-radius: 18px;
  padding: 1.4rem 1.6rem;
  margin: 1.6rem 0 2rem;
  box-shadow: 0 14px 30px rgba(10, 63, 75, 0.28);
}
.gvi-uk address p { color: rgba(255, 255, 255, 0.95); margin: 0 0 0.7rem; }
.gvi-uk address a:not([class]) { color: #fff; text-decoration: underline; }

/* Buttons */
.gvi-uk [class*="callButton"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.4rem 0 0.9rem;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  box-shadow: 0 10px 22px rgba(18, 140, 126, 0.32);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.gvi-uk [class*="callButton"]:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(18, 140, 126, 0.4); }
.gvi-uk [class*="ctaButton"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.8rem;
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(135deg, var(--gvi-accent) 0%, #8f0b21 100%);
  box-shadow: 0 10px 22px rgba(200, 16, 46, 0.3);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.gvi-uk [class*="ctaButton"]:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(200, 16, 46, 0.4); }
#apply-form { scroll-margin-top: 90px; }

@media (max-width: 640px) {
  .gvi-uk { font-size: 0.98rem; }
  .gvi-uk h2 { margin-top: 2.2rem; }
}
`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ✨ Scoped visual enhancements */}
      <style dangerouslySetInnerHTML={{ __html: enhancedCss }} />

      <div className={styles.imageContainer}>
        <img
          src="/tourist-visa/UK-Tourist-Visa-Assistance-GVI.jpg"
          alt="UK tourist visa assistance from India - Global Visa Internationals"
          className={styles.VisaImage}
        />
      </div>
      <div className={styles.VisaSec}>

        <div className={`${styles.VisaData} gvi-uk`}>
          <h1 className={styles.Title}>UK Tourist Visa from India: Eligibility, Documents, Fees & Processing Time (2026 Guide)</h1>

          {/* Quick facts (values taken from the sections below) */}
          <div className="gvi-facts">
            <div className="gvi-fact"><b>£127</b><span>6-month Standard Visitor visa</span></div>
            <div className="gvi-fact"><b>15 working days</b><span>Standard processing</span></div>
            <div className="gvi-fact"><b>Up to 6 months</b><span>Stay per visit</span></div>
            <div className="gvi-fact"><b>Up to 3 months</b><span>Apply before travel</span></div>
          </div>

          <nav aria-label="Table of contents" className="gvi-toc">
            <strong>On this page</strong>
            <ol>
              <li><a href="#services">How GVI helps with your UK visa</a></li>
              <li><a href="#duration">Visa duration rule</a></li>
              <li><a href="#eligibility">Eligibility & documents required</a></li>
              <li><a href="#fees">UK tourist visa fees</a></li>
              <li><a href="#rejection-reasons">Rejection reasons & how to avoid them</a></li>
              <li><a href="#processing-time">Processing time & VFS process</a></li>
              <li><a href="#why-gvi">Why choose GVI</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          <h2 id="services" className={styles.subTitle}>✈ Travel to the UK with a Standard Tourist Visa</h2>
          <p>Planning a trip to the United Kingdom? A <b className={styles.strong}>UK Standard Tourist</b> visa allows Indian travelers to visit for tourism, business, study (up to 6 months), and to see family and friends. At Global Visa Internationals (GVI), we simplify the process with expert guidance, transparent support, and end-to-end visa file handling.</p>

          <p>Whether you are applying for a UK tourist visa, a UK visit visa, or a London visitor visa from India, our experts guide you from the first consultation to final approval. We explain the UK visa requirements, prepare your paperwork, and advise on fees, processing time and documentation, so nothing is missed and your file meets UKVI standards.</p>

          <div className="gvi-cta-band">
            <p>Not sure if you qualify? Get a free eligibility check for your profile.</p>
            <a href="#apply-form" className="gvi-btn">Get Free Eligibility Check</a>
          </div>

          <h3 className={styles.subTitle}>Documentation & File Preparation</h3>
          <ul>
            <li>Personalized UK tourist visa document checklist</li>
            <li>Verified paperwork aligned with embassy standards</li>
            <li><b className={styles.strong}>Professional drafting</b> of cover letters, NOC / leave approval letters and travel explanations</li>
          </ul>

          <h3 className={styles.subTitle}>Application, Form Filling & Appointment Booking</h3>
          <ul>
            <li>Accurate online form filling by experienced experts</li>
            <li>UK visitor visa appointment booking and VFS coordination</li>
            <li>Document collection through to final submission</li>
          </ul>

          <h3 className={styles.subTitle}>Interview & Biometrics</h3>
          <ul>
            <li>Biometric appointment preparation</li>
            <li>UK tourist visa interview guidance and common questions</li>
            <li>Rejection-proofing and addressing UK tourist visa rejection reasons</li>
          </ul>

          <h3 className={styles.subTitle}>Visa Categories We Support</h3>
          <p>We help you choose the most suitable visa based on your travel purpose: holiday and tourist visits, family visits, short business trips, short-term study (up to 6 months), London trips, and long-term multiple-entry visitor visas. From building your UK tourist visa checklist and planning your itinerary to choosing visitor visa insurance and tracking your application, we support you at every step to improve your chances of success.</p>

          <p>Recognized as one of the Best UK visa agencies in India, Global Visa Internationals is trusted by travelers nationwide. From UK VFS appointment coordination to full documentation support and multiple-entry visitor visa applications, we provide complete A-to-Z case handling until your passport and final result are safely back in your hands.</p>

          <address className={styles.address}>
            <p>GF-9, Business Point, 137 Brigade Road, Next to Brigade Towers, Bangalore – 560025, Karnataka</p>
            <a href="tel:+917022213466" className={styles.callButton}>  📞 Get Free Eligibility Check</a>
            <p>Email: <a href="mailto:operations@globalvisainternationals.com">operations@globalvisainternationals.com</a></p>
          </address>
          {/* Call-to-Action Button */}

          <h2 id="duration" className={styles.subTitle}>UK Visa Duration Rule</h2>
          <p>A Standard Visitor visa typically allows you to stay in the UK for up to 6 months per visit. You can apply for a long-term visa (2, 5, or 10 years) if you visit the UK regularly, but you can still only stay for a maximum of 6 months on each visit. Overstaying this limit may lead to fines, entry bans, or refusal of future visa applications. With GVI, you’ll never miscalculate your stay — we ensure full compliance with UK visa rules.</p>

          <p>The UK does not have a "cascade" system like the Schengen zone, but a history of lawful travel and adherence to visa rules can strengthen your application for a longer-term visa.</p>

          <h2 id="process" className={styles.subTitle}>Visa Processing Overview</h2>
          <p>Global Visa Internationals (GVI) will manage the entire documentation process to ensure that your visa application meets the expectations of UK Visas and Immigration (UKVI) and that your travel purpose is clearly and professionally represented.</p>
          <h3 className={styles.subTitle}>Our Services Include:</h3>
          <ul>
            <li>Application form filling</li>
            <li>Covering letter and documentation preparation</li>
            <li>Personalized checklist and guidance</li>
            <li>Providing accepted samples for the required documents</li>
            <li>Verification of documentation</li>
            <li>Complete walk-through of the process</li>
          </ul>

          <h3 className={styles.subTitle}>Timeline:</h3>
          <p>Processing will begin once we receive 100% of the documents as per our checklist. The document finalization will take approximately 3 to 5 working days.</p>

          <h2 id="eligibility" className={styles.subTitle}>UK Tourist Visa Eligibility & Documents Required</h2>
          <p>Before applying, ensure you meet the UK visa eligibility requirements for the tourist, business or visitor visa. If these criteria are met, Global Visa Internationals (GVI) will accept your case, manage the entire documentation process, and book your appointment. You only need to visit the VFS center once to submit your biometrics and documents.</p>

          <ol className="gvi-steps">
            <li> <b className={styles.strong}>Valid Passport & Travel History</b>
              <ul>
                <li><b className={styles.strong}>Valid Passport:</b> Must be valid for 6 months from the day of entry to stay in the UK, with at least two blank pages for the visa. All old passports are also required to show your travel history.</li>
                <li><b className={styles.strong}>Travel History:</b> Previous international travel, including visas and entry/exit stamps, is crucial. GVI helps you highlight these to strengthen your application.</li>
              </ul>
            </li>
            <li><b className={styles.strong}>Financial Proof:</b> Bank Statements & Funds
              <p>One of the most critical aspects of your application is proving you have sufficient funds. You must demonstrate that you can support yourself and your dependents for the duration of your trip.</p>
              <ul>
                <li><b className={styles.strong}>Bank Statements:</b> Submit original bank statements for the last 6 months, stamped by the bank, with a closing balance of around ₹4 to 5 lakhs.</li>
                <li><b className={styles.strong}>Income Tax Returns (ITR):</b> Provide ITRs for the last 3 years to prove a stable income source.</li>
              </ul>
            </li>
            <li><b className={styles.strong}>Employment & Professional Documentation</b>
              <ul>
                <li><b className={styles.strong}>Employees:</b> You must provide a Leave Approval Letter (NOC) from your employer on company letterhead, specifying your position, joining date, and approved leave dates.</li>
                <li><b className={styles.strong}>Business Owners/Self-Employed:</b> Submit your business registration license (GST certificate/partnership deed) and last 3 years’ ITRs.</li>
                <li><b className={styles.strong}>Students:</b> Provide an enrolment letter and NOC from your school/university.</li>
              </ul>
            </li>
            <li><b className={styles.strong}>Travel & Accommodation Proof</b>
              <ul>
                <li><b className={styles.strong}>Flight & Hotel Bookings:</b> Provide confirmed return flight tickets and hotel reservations covering your entire stay.</li>
                <li><b className={styles.strong}>Travel Insurance (Recommended but not mandatory):</b> While not a mandatory requirement for the visa, it is highly recommended to have travel insurance to cover medical emergencies and other unforeseen events.</li>
              </ul>
            </li>
            <li> <b className={styles.strong}>Visa Cover Letter & Itinerary</b>
              <p>A well-written UK visa cover letter is your opportunity to introduce yourself and the purpose of your trip to the visa officer. It should include your travel itinerary, the purpose of your visit, and proof of your strong ties to India (e.g., family, job). Our experts draft a professional cover letter and a detailed itinerary for every client to maximize their chances of success.</p>
            </li>
            <li>Any remaining required documents will be shared with you after you sign up with Global Visa Internationals, based on your eligibility and application type.</li>
          </ol>

          <div className={styles.highlightSection}>
            <h2 id="fees" className={styles.subTitle}>UK Tourist Visa Fees (India 2026)</h2>
            <div className={styles.highlightGrid}>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>6-Month Standard Visitor Visa</span>
                <p className={styles.countryInfo}>Approximately ₹15,825</p>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>2-Year Long-Term Visitor Visa</span>
                <p className={styles.countryInfo}>Approximately ₹59,188</p>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>5-Year Long-Term Visitor Visa</span>
                <p className={styles.countryInfo}>Approximately ₹1,05,666</p>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>10-Year Long-Term Visitor Visa</span>
                <p className={styles.countryInfo}>Approximately ₹1,31,958</p>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>VFS Service Charges</span>
                <p className={styles.countryInfo}>These are additional fees paid at the visa application center.</p>
              </div>
            </div>
          </div>

          <h2 id="rejection-reasons" className={styles.subTitle}>Common Reasons for UK Visa Rejection & How We Solve Them</h2>

          <p>Visa rejections are often a result of simple mistakes. Our structured process is designed to eliminate these common issues.</p>
          <ul>
            <li><b className={styles.strong}>Incomplete/Mismatched Documents:</b> We perform a professional document review as per UKVI standards to ensure everything is perfect.</li>
            <li><b className={styles.strong}>Insufficient Proof of Funds:</b> We advise you on the exact financial requirements and review your bank statements to ensure compliance.</li>
            <li><b className={styles.strong}>Unclear Purpose of Travel:</b> Our expert-prepared cover letters and itineraries clearly explain your travel plans and ties to India.</li>
            <li><b className={styles.strong}>Lack of Strong Ties to India:</b> We guide you on how to best prove your ties, such as property ownership, family commitments, and employment stability.</li>
          </ul>

          <h2 id="processing-time" className={styles.subTitle}>UK Tourist Visa Processing Time from India</h2>
          <p>The processing time for a UK visa can vary depending on the time of year and the completeness of your application. Here are some general timelines:</p>

          <ul>
            <li><b className={styles.strong}>Standard Processing Time: </b>3 weeks (15 working days).</li>
            <li><b className={styles.strong}>Priority Service:</b> A decision is typically made within 5 working days for an extra fee.</li>
            <li><b className={styles.strong}>Super Priority Service:</b> A decision is typically made by the end of the next working day for an extra fee.</li>
            <li>Our Service: Once we receive your documents, GVI finalizes your file within 3–5 working days, ensuring it is submitted to UKVI in a timely manner.</li>
          </ul>

          <h3 className={styles.subTitle}>The VFS Global Application Process: A Step-by-Step Guide</h3>
          <p>Navigating the VFS Global appointment system can be confusing. With GVI's end-to-end service, we manage this process for you. Here’s a quick overview of what to expect:</p>
          <ol className="gvi-steps">
            <li><b className={styles.strong}>Online Application & Appointment Booking:</b> We fill out the online form and book your VFS appointment for you.</li>
            <li><b className={styles.strong}>Document Submission & Biometrics:</b> You visit the VFS center in person to submit the verified documents and provide your fingerprints and a photo.</li>
            <li><b className={styles.strong}>Application Tracking:</b> Once submitted, we help you track your application status until your passport is ready for collection.</li>
          </ol>

          <h2 id="pricing" className={styles.subTitle}>Transparent Pricing</h2>
          <p>Our service fees depend on your profile and application type. Contact us for a clear, upfront quote.</p>

          <address className={styles.address}>
            <p>GF-9, Business Point, 137 Brigade Road, Next to Brigade Towers, Bangalore – 560025, Karnataka</p>
            <a href="tel:+917022213466" className={styles.callButton}>  📞 Get Free Eligibility Check</a>
            <p>Email: <a href="mailto:operations@globalvisainternationals.com">operations@globalvisainternationals.com</a></p>
          </address>

          <h2 id="why-gvi" className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>At GVI, we are committed to making your visa process stress-free and successful. Our expertise and dedication have led to:</p>
          <ul>
            <li><b className={styles.strong}>1,800+ UK visas processed since 2017</b></li>
            <li><b className={styles.strong}>99% client satisfaction rate across India</b></li>
            <li>Specialized assistance for re-application after rejection</li>
            <li>Experienced visa consultants who provide personalized, country-specific advice.</li>
          </ul>

          <h2 className={styles.subTitle}>Meet Our Experts</h2>
          <p>Our team of visa consultants has decades of combined experience in handling complex visa cases. We stay updated with the latest embassy rules and requirements to provide you with the most accurate and reliable guidance.</p>

          <h2 id="faq" className={styles.subTitle}>UK Tourist Visa from India: Frequently Asked Questions</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className={styles.subTitle}>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2 id="contact" className={styles.subTitle}>Ready to Apply?</h2>
          <p>With GVI, you don’t need to worry about rejections or missing documents.
            👉 <b className={styles.strong}>Start your UK visa application today</b> with Global Visa Internationals and travel to the UK with confidence.
            <br />
            <a href="/contact" className={styles.ctaButton}>Get a free consultation today!</a></p>
        </div>


        <div id="apply-form" className={styles.formSection}>
          <VisaForm />
        </div>
      </div >
      <section>

        <ReviewSchema />
        <ReviewCarousel />
      </section>
    </>
  );
}