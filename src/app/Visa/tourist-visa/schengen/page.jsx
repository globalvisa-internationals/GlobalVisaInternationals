import styles from "@/Components/Visa.module.css";

import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import Link from "next/link";


export const metadata = {
  metadataBase: new URL("https://www.globalvisainternationals.com"),

  // OPTIMIZED: Added "(2026)" to signal up-to-date visa rules. 
  // Kept "Bangalore" for local SEO.
  title: "Schengen Visa Agents Bangalore (2026 Rules) | GVI",

  description:
    "Schengen tourist & business visa help in Bangalore: 2026 requirements, documents, €90 visa fee and VFS appointment support. Free eligibility check on WhatsApp.",
  // OPTIMIZED: Added "creator" and "publisher" for Brand Authority (E-E-A-T)
  creator: "Global Visa Internationals",
  publisher: "Global Visa Internationals",
  category: "Travel & Visa Services",

  keywords: [
    "Schengen visa",
    "Schengen tourist visa",
    "apply Schengen visa India",
    "Schengen business visa",
    "Schengen visitor visa",
    "Schengen visa requirements 2026", // Added Year
    "Schengen visa documents",
    "Schengen visa consultants",
    "Schengen visa fees",
    "Europe tourist visa",
    "apply Schengen visa online",

    // High-intent local keywords
    "Schengen visa agents in Bangalore",
    "Visa consultants for Europe in Bangalore",
    "Schengen visa processing time India",
    "Cost of Schengen visa for Indian citizens",
    "Best visa agency for Schengen",
    "VFS appointment assistance Bangalore",
    "Schengen visa rejection support" // Added specific pain-point keyword
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ADDED: Mobile optimization for users saving to home screen
  appleWebApp: {
    title: "GVI Visa",
    statusBarStyle: "default",
    capable: true,
  },

  // ADDED: Prevents unwanted auto-linking of numbers/emails on iOS 
  // (Control the UX yourself)
  formatDetection: {
    telephone: false,
  },

  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen",
  },

  openGraph: {
    title: "Schengen Visa Experts in Bangalore | Free Eligibility Check",
    description: "Planning a Europe trip in 2026? Get expert visa assistance in Bangalore. We handle documentation & biometrics.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen",
    siteName: "Global Visa Internationals",
    locale: "en_IN",
    type: "website",
    images: [
      {
        // TRICK: Add a version number (?v=2) to force WhatsApp to re-fetch the image
        url: "https://www.globalvisainternationals.com/tourist-visa/Schengen-Tourist-Visa-Assistance-GVI.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Schengen Tourist Visa Assistance 2026",
        type: "image/jpeg", // CRITICAL: WhatsApp looks for this
      },
      // ADDITION: A square fallback image often works better for WhatsApp thumbnails
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Schengen-Square-Thumb.jpg",
        width: 400,
        height: 400,
        alt: "GVI Schengen Visa Agents",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    title: "Schengen Visa Experts (2026) | GVI Bangalore",
    description: "Don't risk rejection. Expert Schengen visa assistance for Indians, with documentation and interview support from Bangalore.",
    images: [
      "https://www.globalvisainternationals.com/tourist-visa/Schengen-Tourist-Visa-Assistance-GVI.jpg?v=2",
    ],
  },

  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    ICBM: "12.9716,77.5946",
  },
};

const faqs = [
  {
    q: "How do I apply for a Schengen tourist visa from India?",
    a: "Identify your main destination (where you will stay the longest) and book an appointment with the visa application centre for that country, usually VFS Global. Fill out the Schengen visa application form (Type C), gather your supporting documents (insurance, photos, itinerary, proof of funds, flight and hotel bookings), then attend the appointment to submit your file and biometrics. Indian citizens usually cannot apply directly at the embassy. For a smooth process, you can contact <a href='https://wa.me/917022213466'>Global Visa International</a>.",
  },
  {
    q: "What documents are required for a Schengen tourist visa?",
    a: "Key documents include: original passport (valid at least 6 months), 2 photos (35x45mm), cover letter, flight itinerary, proof of stay (hotel or sponsorship), travel insurance (minimum €30,000 coverage), ITR (last 3 years) and bank statements (last 6 months).",
  },
  {
    q: "How much does a Schengen tourist visa cost?",
    a: "The official visa fee is €90 for adults and €45 for children aged 6-12. Children under 6 are free. In Indian currency this is roughly ₹8,000 - ₹9,500, depending on the exchange rate. VFS service charges, courier fees and travel insurance are extra.",
  },
  {
    q: "How long does Schengen visa processing take?",
    a: "Standard processing time is 15 working days. During peak Indian holiday seasons (April-June and October-December) it can take 30 to 45 days, so we strongly recommend applying well in advance, ideally about 2 months before travel and at least 45 days before your trip.",
  },
  {
    q: "How long is a Schengen tourist visa valid, and how long can I stay?",
    a: "A standard tourist visa allows a maximum stay of 90 days within any 180-day period. The validity printed on the visa sticker can range from the exact dates of your trip to 1-5 years (a multiple-entry or circulation visa) for frequent travellers with a clean travel history. France and Germany are known for issuing longer-validity visas to trusted travellers.",
  },
  {
    q: "Which Schengen country is the easiest to get a tourist visa from India?",
    a: "Countries such as Iceland, Switzerland, Slovakia, Luxembourg and Finland are often cited as having higher approval rates, and Switzerland, France and Germany process high volumes of Indian applications efficiently. However, you must apply to the country that is your main destination. 'Visa shopping' (applying to an easy country but visiting another) can lead to border issues. A genuine, complete file is the real secret to getting any visa. Need help perfecting yours? Chat with us at <a href='https://wa.me/917022213466'>Global Visa International</a>.",
  },
  {
    q: "Where can I apply for a Schengen tourist visa?",
    a: "You must apply at the visa application centre (VAC) of your main destination. In India, VFS Global handles most countries (like France, Switzerland and Germany), BLS International handles Spain, and TLScontact handles a few others. Check the specific country's requirements.",
  },
  {
    q: "Can a Schengen tourist visa be extended?",
    a: "In almost all cases, no. Extensions are only allowed for 'force majeure' or humanitarian reasons, such as a severe medical emergency that physically prevents you from leaving. You cannot extend a visa just to travel more.",
  },
  {
    q: "Can a Schengen tourist visa be converted to a work permit?",
    a: "No, you generally cannot convert a tourist visa (Type C) to a work permit inside the Schengen area. You must return to India and apply for a National Employment Visa (Type D) from the embassy. Strict rules apply.",
  },
  {
    q: "Can I use a Schengen tourist visa for a business trip?",
    a: "Yes, a standard Type C Schengen visa covers business purposes such as meetings, training, conferences and trade fairs. Mention 'Business' as your purpose on the form and carry an invitation letter. You strictly cannot take up paid employment or draw a salary from a European company while on this visa.",
  },
  {
    q: "Can I apply for a Schengen visa from the UK or the Philippines?",
    a: "Only if you are a legal resident there. Indian citizens living in the UK with a valid residence permit (BRP) can apply through the local VFS or TLScontact centre, and those in the Philippines with a valid ACR I-Card or residence visa can apply at the Schengen consulates or VFS centres in Manila or Cebu. If you are only visiting as a tourist, you must apply from India.",
  },
  {
    q: "What is a Schengen tourist visa?",
    a: "It is a short-stay visa (Type C) that allows you to travel freely across all 29 Schengen area countries (like France, Italy, Germany and Switzerland) for up to 90 days for tourism, family visits or business.",
  },
];

export default function Schengen_Visa_Assistance() {
  const pageUrl =
    "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen";

  const jsonLdSchemas = [
    // Breadcrumb
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
          name: "Schengen Visa",
          item: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen",
        },
      ],
    },

    // TravelAgency
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com",
      logo: "https://www.globalvisainternationals.com/gvilogo.png",
      description:
        "Expert Schengen Visa consultants in Bangalore. Assistance for Schengen Tourist, Visitor, and Business visas including eligibility, documentation, and travel insurance support for all 29 Schengen countries.",
      telephone: "+91-7022213466",
      address: {
        "@type": "PostalAddress",
        streetAddress: "MG Road",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560025",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9716,
        longitude: 77.5946,
      },
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
      sameAs: [
        "https://www.facebook.com/globalvisainternationals/",
        "https://www.instagram.com/globalvisa_internationals/",
        "https://www.linkedin.com/company/global-visa-internationals/",
        "https://x.com/GLOBALVISA1505",
        "https://www.youtube.com/@globalVisaInternationals",
        "https://www.google.com/maps/place/Global+Visa+Internationals",
      ],
    },

    // Organization
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com",
      logo: "https://www.globalvisainternationals.com/gvilogo.png",
      sameAs: [
        "https://www.facebook.com/globalvisainternationals/",
        "https://www.instagram.com/globalvisa_internationals/",
        "https://www.linkedin.com/company/global-visa-internationals/",
        "https://x.com/GLOBALVISA1505",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-7022213466",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: ["English", "Kannada", "Hindi"],
        },
      ],
    },

    // LocalBusiness with AggregateRating
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Global Visa Internationals",
      image:
        "https://www.globalvisainternationals.com/tourist-visa/Schengen-Tourist-Visa-Assistance-GVI.jpg",
      "@id": "https://www.globalvisainternationals.com",
      url: "https://www.globalvisainternationals.com",
      telephone: "+91-7022213466",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "MG Road",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560025",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9716,
        longitude: 77.5946,
      },
      openingHours: "Mo-Sa 10:00-18:00",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "314",
      },
    },

    // WebSite
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.globalvisainternationals.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    // WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Schengen Visa Assistance",
      url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen",
      description:
        "Expert Schengen Visa Assistance for tourists, business travelers, and visitors. Learn about eligibility, documentation, and visa processing with GVI.",
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        url: "https://www.globalvisainternationals.com",
      },
    },

    // Service
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Schengen Visa Assistance",
      provider: {
        "@type": "Organization",
        name: "Global Visa Internationals",
      },
      areaServed: {
        "@type": "Place",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Visa Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Schengen Tourist Visa Assistance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Schengen Business Visa Assistance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Schengen Visitor Visa Guidance",
            },
          },
        ],
      },
    },

    // FAQPage (built from the same `faqs` array as the visible FAQ section)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    }
  ];

  /* Visual enhancement layer (look & feel only), scoped to .gvi-sch */
  const enhancedCss = `
div.gvi-sch.gvi-sch.gvi-sch {
  --gvi-primary: #1e3a8a;
  --gvi-primary-dark: #14275f;
  --gvi-accent: #f2b705;
  --gvi-ink: #1f2933;
  --gvi-muted: #52606d;
  --gvi-soft: #eef2fb;
  --gvi-line: #e4e7eb;
  --gvi-radius: 14px;
  color: var(--gvi-ink);
  line-height: 1.75;
  font-size: 1.02rem;
}

/* Headings */
div.gvi-sch.gvi-sch.gvi-sch h1 {
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
div.gvi-sch.gvi-sch.gvi-sch h2 {
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
div.gvi-sch.gvi-sch.gvi-sch h3 {
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
div.gvi-sch.gvi-sch.gvi-sch p { margin: 0 0 1.1rem; color: var(--gvi-muted); }
div.gvi-sch.gvi-sch.gvi-sch strong, div.gvi-sch.gvi-sch.gvi-sch b { color: var(--gvi-ink); font-weight: 700; }
div.gvi-sch.gvi-sch.gvi-sch a:not([class]) { color: var(--gvi-primary); font-weight: 600; }
div.gvi-sch.gvi-sch.gvi-sch [class*="smallText"] { font-size: 0.85rem; color: var(--gvi-muted); font-style: italic; }

/* Lists: one compact card per list, light dividers between rows */
div.gvi-sch.gvi-sch.gvi-sch ul {
  list-style: none;
  padding: 0.3rem 1.1rem;
  margin: 0 0 1.4rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-sch.gvi-sch.gvi-sch ul li {
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
div.gvi-sch.gvi-sch.gvi-sch ul li:last-child { border-bottom: 0; }
div.gvi-sch.gvi-sch.gvi-sch ul li::before {
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
div.gvi-sch.gvi-sch.gvi-sch ul[class*="checkList"] li::before {
  content: "\\2713";
  top: 0.6rem;
  width: auto;
  height: auto;
  border-radius: 0;
  background: none;
  color: var(--gvi-primary);
  font-weight: 800;
}

/* Country grid (links unchanged, only presentation) */
div.gvi-sch.gvi-sch.gvi-sch ul[class*="countryGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  padding: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
}
div.gvi-sch.gvi-sch.gvi-sch ul[class*="countryGrid"] li {
  padding: 0.55rem 0.9rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 10px;
  color: var(--gvi-ink);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}
div.gvi-sch.gvi-sch.gvi-sch ul[class*="countryGrid"] li:last-child { border-bottom: 1px solid var(--gvi-line); }
div.gvi-sch.gvi-sch.gvi-sch ul[class*="countryGrid"] li::before { display: none; }
div.gvi-sch.gvi-sch.gvi-sch ul[class*="countryGrid"] li a {
  display: block;
  color: var(--gvi-primary);
  font-weight: 700;
  text-decoration: none;
}
div.gvi-sch.gvi-sch.gvi-sch ul[class*="countryGrid"] li:hover { border-color: var(--gvi-primary); }

/* Visa type cards */
div.gvi-sch.gvi-sch.gvi-sch [class*="cardContainer"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 0 0 1.8rem;
}
div.gvi-sch.gvi-sch.gvi-sch [class*="cardContainer"] > div {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 4px solid var(--gvi-accent);
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.2rem 0.4rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.06);
}
div.gvi-sch.gvi-sch.gvi-sch [class*="cardContainer"] h3 { margin: 0 0 0.6rem; padding: 0; background: none; font-size: 1.05rem; }

/* Schengen countries card */
div.gvi-sch.gvi-sch.gvi-sch [class*="schengenCard"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #d4def5;
  border-radius: 18px;
  padding: 1.4rem 1.4rem 0.6rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 6px 18px rgba(30, 58, 138, 0.08);
}
div.gvi-sch.gvi-sch.gvi-sch [class*="cardHeader"] h2 { margin-top: 0; }
div.gvi-sch.gvi-sch.gvi-sch [class*="cardSubtitle"] { margin-bottom: 1rem; }
div.gvi-sch.gvi-sch.gvi-sch [class*="countryList"] h3, div.gvi-sch.gvi-sch.gvi-sch [class*="highlightSection"] h3 { background: transparent; padding-left: 0; }
div.gvi-sch.gvi-sch.gvi-sch [class*="highlightGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1rem;
}
div.gvi-sch.gvi-sch.gvi-sch [class*="highlightItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.8rem 1rem;
}
div.gvi-sch.gvi-sch.gvi-sch [class*="countryName"] { display: block; font-weight: 800; color: var(--gvi-primary); }
div.gvi-sch.gvi-sch.gvi-sch [class*="countryInfo"] { margin: 0.2rem 0 0; font-size: 0.9rem; }

/* Highlight callout */
div.gvi-sch.gvi-sch.gvi-sch [class*="highlightBox"] {
  background: #fff8e6;
  border: 1px solid #f5d98a;
  border-left: 5px solid #f0b429;
  border-radius: 12px;
  padding: 0.4rem 1.2rem 0.6rem;
  margin: 0 0 1.8rem;
}
div.gvi-sch.gvi-sch.gvi-sch [class*="highlightBox"] h3 { background: transparent; padding-left: 0; color: #5c4a12; }

/* Step cards (h3 + p pairs, markup unchanged) */
div.gvi-sch.gvi-sch.gvi-sch [class*="stepContainer"] h3 {
  margin: 0.9rem 0 0;
  background: var(--gvi-soft);
  border: 1px solid #d4def5;
  border-bottom: 0;
  border-left: 5px solid var(--gvi-accent);
  border-radius: 12px 12px 0 0;
  padding: 0.6rem 1rem;
  font-size: 1.05rem;
}
div.gvi-sch.gvi-sch.gvi-sch [class*="stepContainer"] p {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 0;
  border-radius: 0 0 12px 12px;
  padding: 0.8rem 1rem;
  margin: 0;
}

/* Tables */
.gvi-table-wrap, div.gvi-sch.gvi-sch.gvi-sch [class*="tableWrapper"] {
  overflow-x: auto;
  margin: 0 0 1.4rem;
  border: 1px solid var(--gvi-line);
  border-radius: var(--gvi-radius);
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
  background: #fff;
}
div.gvi-sch.gvi-sch.gvi-sch table { width: 100%; border-collapse: collapse; background: #fff; min-width: 560px; margin: 0; }
div.gvi-sch.gvi-sch.gvi-sch th {
  background: linear-gradient(135deg, var(--gvi-primary), var(--gvi-primary-dark));
  color: #fff;
  text-align: left;
  padding: 0.8rem 1rem;
  font-weight: 700;
}
div.gvi-sch.gvi-sch.gvi-sch td { padding: 0.8rem 1rem; border-top: 1px solid var(--gvi-line); color: var(--gvi-muted); }
div.gvi-sch.gvi-sch.gvi-sch tbody tr:nth-child(even) td { background: #f8fafc; }
div.gvi-sch.gvi-sch.gvi-sch td:first-child { font-weight: 600; color: var(--gvi-ink); }
div.gvi-sch.gvi-sch.gvi-sch [class*="tableWrapper"] > p { margin: 0; padding: 0.7rem 1rem; }

/* Services block */
div.gvi-sch.gvi-sch.gvi-sch [class*="servicesSection"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #d4def5;
  border-radius: 18px;
  padding: 0.4rem 1.4rem 1.4rem;
  margin: 2rem 0;
}
div.gvi-sch.gvi-sch.gvi-sch [class*="serviceGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.9rem;
  margin: 1rem 0 1.4rem;
}
div.gvi-sch.gvi-sch.gvi-sch [class*="serviceItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.9rem 1.1rem 0.2rem;
  box-shadow: 0 2px 8px rgba(16, 24, 40, 0.05);
}
div.gvi-sch.gvi-sch.gvi-sch [class*="serviceItem"] b { display: block; color: var(--gvi-primary); margin-bottom: 0.2rem; }
div.gvi-sch.gvi-sch.gvi-sch [class*="ctaContainer"] {
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  text-align: center;
  box-shadow: 0 12px 28px rgba(20, 39, 95, 0.28);
}
div.gvi-sch.gvi-sch.gvi-sch [class*="ctaContainer"] p { color: #fff; font-weight: 700; font-size: 1.15rem; margin: 0 0 0.9rem; }
div.gvi-sch.gvi-sch.gvi-sch a[class*="primaryButton"] {
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
div.gvi-sch.gvi-sch.gvi-sch a[class*="primaryButton"]:hover { transform: translateY(-2px); }

/* Table of contents */
div.gvi-sch.gvi-sch.gvi-sch .gvi-toc {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-left: 5px solid var(--gvi-primary);
  border-radius: var(--gvi-radius);
  padding: 1rem 1.3rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
}
div.gvi-sch.gvi-sch.gvi-sch .gvi-toc ol { margin: 0.6rem 0 0; padding-left: 1.3rem; columns: 2 260px; column-gap: 2rem; }
div.gvi-sch.gvi-sch.gvi-sch .gvi-toc li { margin: 0.25rem 0; color: var(--gvi-muted); }
div.gvi-sch.gvi-sch.gvi-sch .gvi-toc a { color: var(--gvi-primary-dark); text-decoration: none; font-weight: 600; }
div.gvi-sch.gvi-sch.gvi-sch .gvi-toc a:hover { text-decoration: underline; }

/* Quick facts strip */
div.gvi-sch.gvi-sch.gvi-sch .gvi-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.9rem;
  margin: 1.4rem 0 2rem;
}
div.gvi-sch.gvi-sch.gvi-sch .gvi-fact {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #d4def5;
  border-radius: var(--gvi-radius);
  padding: 1rem 1.1rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(30, 58, 138, 0.08);
}
div.gvi-sch.gvi-sch.gvi-sch .gvi-fact b { display: block; font-size: 1.3rem; font-weight: 800; color: var(--gvi-primary); line-height: 1.2; }
div.gvi-sch.gvi-sch.gvi-sch .gvi-fact span { display: block; margin-top: 0.25rem; font-size: 0.85rem; color: var(--gvi-muted); }

/* In-page call-to-action band */
div.gvi-sch.gvi-sch.gvi-sch .gvi-cta-band {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--gvi-soft);
  border: 1px solid #d4def5;
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.4rem;
  margin: 1.6rem 0;
}
div.gvi-sch.gvi-sch.gvi-sch .gvi-cta-band p { margin: 0; color: var(--gvi-ink); font-weight: 600; flex: 1 1 260px; }
div.gvi-sch.gvi-sch.gvi-sch .gvi-cta-actions { display: flex; flex-wrap: wrap; gap: 0.6rem; }
div.gvi-sch.gvi-sch.gvi-sch a.gvi-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff !important;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 8px 18px rgba(30, 58, 138, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
div.gvi-sch.gvi-sch.gvi-sch a.gvi-btn.gvi-btn-wa {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  box-shadow: 0 8px 18px rgba(18, 140, 126, 0.3);
}
div.gvi-sch.gvi-sch.gvi-sch a.gvi-btn:hover { transform: translateY(-2px); }

/* FAQ accordion (same questions and answers, collapsed to stay compact) */
div.gvi-sch.gvi-sch.gvi-sch .faq-section { margin: 0 0 1.5rem; }
div.gvi-sch.gvi-sch.gvi-sch details.gvi-faq-item {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  margin: 0 0 0.6rem;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-sch.gvi-sch.gvi-sch details.gvi-faq-item summary {
  list-style: none;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 2.6rem 0.75rem 1rem;
}
div.gvi-sch.gvi-sch.gvi-sch details.gvi-faq-item summary::-webkit-details-marker { display: none; }
div.gvi-sch.gvi-sch.gvi-sch details.gvi-faq-item summary::after {
  content: "+";
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--gvi-primary);
}
div.gvi-sch.gvi-sch.gvi-sch details.gvi-faq-item[open] summary::after { content: "\\2013"; }
div.gvi-sch.gvi-sch.gvi-sch details.gvi-faq-item summary h3 {
  display: block;
  margin: 0;
  padding: 0;
  background: none;
  font-size: 1rem;
  color: var(--gvi-ink);
}
div.gvi-sch.gvi-sch.gvi-sch details.gvi-faq-item[open] summary { border-bottom: 1px solid #eef0f3; }
div.gvi-sch.gvi-sch.gvi-sch details.gvi-faq-item p { margin: 0; padding: 0.8rem 1rem 0.9rem; }

#apply-form { scroll-margin-top: 90px; }

@media (max-width: 640px) {
  div.gvi-sch.gvi-sch.gvi-sch { font-size: 0.98rem; }
  div.gvi-sch.gvi-sch.gvi-sch h2 { margin-top: 2.2rem; }
}
`;

  return (
    <>
      {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Scoped visual enhancements */}
      <style dangerouslySetInnerHTML={{ __html: enhancedCss }} />

      <div className={styles.imageContainer}>
        <img
          src="/tourist-visa/Schengen-Tourist-Visa-Assistance-GVI.jpg"
          alt="Schengen tourist visa assistance from India - Global Visa Internationals"
          className={styles.VisaImage}
        />
      </div>

      <div className={styles.VisaSec}>
        <div className={`${styles.VisaData} gvi-sch`}>
          <h1 className={styles.Title}>Schengen Tourist Visa from India (2026): Eligibility, Documents, Fees & Process</h1>

          {/* Quick facts (values taken from the sections below) */}
          <div className="gvi-facts">
            <div className="gvi-fact"><b>€90</b><span>Adult visa fee</span></div>
            <div className="gvi-fact"><b>90 days</b><span>Max stay in any 180 days</span></div>
            <div className="gvi-fact"><b>15 working days</b><span>Standard processing</span></div>
            <div className="gvi-fact"><b>29 countries</b><span>One Schengen visa</span></div>
          </div>

          <nav aria-label="Table of contents" className="gvi-toc">
            <strong>On this page</strong>
            <ol>
              <li><a href="#what-is">What is a Schengen visa?</a></li>
              <li><a href="#types">Types of Schengen visas</a></li>
              <li><a href="#countries">29 Schengen countries</a></li>
              <li><a href="#eligibility">Eligibility criteria</a></li>
              <li><a href="#documents">Documents required</a></li>
              <li><a href="#how-to-apply">How to apply</a></li>
              <li><a href="#fees">Visa fees (2026)</a></li>
              <li><a href="#processing-time">Processing time</a></li>
              <li><a href="#easiest-countries">Easiest countries to apply</a></li>
              <li><a href="#rejection">Rejection reasons</a></li>
              <li><a href="#why-gvi">How GVI helps</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          <h2 id="what-is" className={styles.subTitle}>What is a Schengen Visa?</h2>
          <p>
            A <b className={styles.strong}>Schengen Visa</b> is a short-stay visa that allows you to travel freely across the <b className={styles.strong}>Schengen Area</b>, which comprises 29 European countries. It essentially abolishes internal borders, meaning once you enter one Schengen country, you can travel to others without showing your passport again (subject to temporary border checks).
          </p>
          <p>
            For Indian citizens in 2026, this remains the most convenient way to tour Europe. Whether you are visiting the Eiffel Tower in Paris, the Swiss Alps, or the canals of Venice, this single document is your key.
          </p>

          <h2 id="types" className={styles.subTitle}>Types of Schengen Visas Explained</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3 className={styles.subTitle}>Type A: Airport Transit Visa</h3>
              <p>
                For travelers connecting flights within a Schengen airport's international zone <b className={styles.strong}>without entering the country</b>.
                Mandatory for citizens of certain countries during layovers.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.subTitle}>Type C: Short-Stay Visa (Most Common)</h3>
              <p>
                The standard tourist/business visa. It permits travel for up to <b className={styles.strong}>90 days within any 180-day period</b>.
                Issued as Single, Double, or Multiple Entry.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.subTitle}>Type D: National Long-Stay Visa</h3>
              <p>
                For stays exceeding 90 days (studying, working, or retiring). This is a national visa, not a uniform Schengen visa,
                though it allows transit through other member states.
              </p>
            </div>
          </div>
          <div className={styles.schengenCard}>
            <div className={styles.cardHeader}>
              <h2 id="countries" className={styles.subTitle}>29 Schengen Countries</h2>
              <p className={styles.cardSubtitle}>Explore Europe with a single tourist visa from India.</p>
            </div>

            <div className={styles.countryList}>
              <h3 className={styles.subTitle}>All Member States</h3>
              <ul className={styles.countryGrid}>
                <li><Link href="/Visa/tourist-visa/schengen/austria">Austria</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/belgium">Belgium</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/bulgaria">Bulgaria</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/croatia">Croatia</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/czech-republic">Czech Republic</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/denmark">Denmark</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/estonia">Estonia</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/finland">Finland</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/france">France</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/germany">Germany</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/greece">Greece</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/hungary">Hungary</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/iceland">Iceland</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/italy">Italy</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/latvia">Latvia</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/liechtenstein">Liechtenstein</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/lithuania">Lithuania</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/luxembourg">Luxembourg</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/malta">Malta</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/netherlands">Netherlands</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/norway">Norway</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/poland">Poland</Link></li>
                <li>Portugal</li>
                <li>Romania</li>
                <li>Slovakia</li>
                <li>Slovenia</li>
                <li><Link href="/Visa/tourist-visa/schengen/spain">Spain</Link></li>
                <li>Sweden</li>
                <li>Switzerland</li>
              </ul>
            </div>

            <div className={styles.highlightSection}>
              <h3 className={styles.subTitle}>Newest Members & Key Additions</h3>
              <div className={styles.highlightGrid}>
                <div className={styles.highlightItem}>
                  <span className={styles.countryName}>Bulgaria</span>
                  <p className={styles.countryInfo}>Air & sea borders 2024, full member from Jan 2025</p>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.countryName}>Croatia</span>
                  <p className={styles.countryInfo}>Joined in 2023</p>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.countryName}>Romania</span>
                  <p className={styles.countryInfo}>Air & sea borders 2024, full member from Jan 2025</p>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.countryName}>Liechtenstein</span>
                  <p className={styles.countryInfo}>Joined in 2011</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.highlightBox}>
            <h3 className={styles.subTitle}> New "Cascade Regime" for Indians (2025 Update)</h3>
            <p>
              Great news for frequent travelers! The European Commission has adopted specific rules for Indian nationals to access long-term multiple-entry visas easier:
            </p>
            <ul>
              <li><b className={styles.strong}>2-Year Visa:</b> Granted if you have lawfully used two visas within the previous three years.</li>
              <li><b className={styles.strong}>5-Year Visa:</b> Granted if you have lawfully used the 2-year visa previously.</li>
            </ul>
            <p className={styles.smallText}>*Subject to passport validity remaining sufficient.</p>
          </div>


          <h2 id="eligibility" className={styles.subTitle}>Eligibility Criteria for Schengen visa</h2>
          <p>To qualify for a Schengen visa in 2026, you must meet these non-negotiable requirements:</p>
          <ul className={styles.checkList}>
            <li><b className={styles.strong}>Valid Passport:</b> Issued in the last 10 years, valid for 3+ months beyond your return date, with at least 2 blank pages.</li>
            <li><b className={styles.strong}>Residency:</b> You must be a legal resident in the country where you are applying (e.g., India).</li>
            <li><b className={styles.strong}>Financial Sufficiency:</b> Proof of funds (approx. €100-€150 per day) via bank statements and ITR.</li>
            <li><b className={styles.strong}>Intent to Return:</b> Strong evidence of ties to your home country (employment, family, assets) to prove you will not overstay.</li>
          </ul>

          <h2 id="documents" className={styles.subTitle}>What are the Documents Required for Schengen Visa?</h2>
          <p>Documentation is the most critical part of the process. Incomplete files are the #1 reason for rejection.</p>
          <div className="gvi-table-wrap">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Document</th>
                <th>Specific Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b className={styles.strong}>Visa Application Form</b></td>
                <td>Fully completed, printed, and signed.</td>
              </tr>
              <tr>
                <td><b className={styles.strong}>Photographs</b></td>
                <td>Two recent photos (35x45mm, matte finish, white background, 80% face coverage).</td>
              </tr>
              <tr>
                <td><b className={styles.strong}>Travel Insurance</b></td>
                <td>Minimum coverage of <b className={styles.strong}>€30,000</b> for medical emergencies and repatriation.</td>
              </tr>
              <tr>
                <td><b className={styles.strong}>Flight Itinerary</b></td>
                <td>Round-trip flight reservations (PNR). <i>Note: Do not purchase full tickets until approved.</i></td>
              </tr>
              <tr>
                <td><b className={styles.strong}>Proof of Accommodation</b></td>
                <td>Confirmed hotel bookings, rental agreement, or an official invitation letter from a host.</td>
              </tr>
              <tr>
                <td><b className={styles.strong}>Financial Proof</b></td>
                <td>Original bank statements (last 3-6 months) stamped by the bank, ITR slips (last 3 years), and salary slips.</td>
              </tr>
              <tr>
                <td><b className={styles.strong}>Employment Proof</b></td>
                <td>NOC (Leave sanction letter) from employer. If self-employed: GST registration or business license.</td>
              </tr>
            </tbody>
          </table>
          </div>

          <div className="gvi-cta-band">
            <p>Not sure your documents are complete? Get your file checked by our visa experts.</p>
            <div className="gvi-cta-actions">
              <a href="#apply-form" className="gvi-btn">Get Free Eligibility Check</a>
              <a href="https://wa.me/917022213466?text=Hi,%20I%20would%20like%20a%20free%20eligibility%20check%20for%20a%20Schengen%20Tourist%20Visa" className="gvi-btn gvi-btn-wa">Chat on WhatsApp</a>
            </div>
          </div>

          <h2 id="where-to-apply" className={styles.subTitle}>Where to Apply?</h2>
          <p>
            You cannot just apply to any country. You must apply at the embassy/consulate of your <b className={styles.strong}>main destination</b> (the country where you will stay the longest). If spending equal time in two countries, apply to the one you <b className={styles.strong}>enter first</b>.
          </p>
          <p>
            In India, most embassies outsource document collection to <b className={styles.strong}>VFS Global</b>, while some (like Spain) may use <b className={styles.strong}>BLS International</b>.
          </p>

          <h2 id="how-to-apply" className={styles.subTitle}>How to Apply for a Schengen Visa?</h2>
          <p>Follow this 7-step process for a successful application in 2026:</p>

          <div className={styles.stepContainer}>
            <h3 className={styles.subTitle}>Step 1: Complete the Application Form</h3>
            <p>Fill out the online Schengen visa application form accurately. Print two copies and sign both. Ensure your name matches your passport exactly.</p>

            <h3 className={styles.subTitle}>Step 2: Schedule an Appointment</h3>
            <p>Book an interview with the visa application center (VFS/BLS) of your destination country. Slots fill up fast, so book well in advance.</p>

            <h3 className={styles.subTitle}>Step 3: Gather Necessary Documents</h3>
            <p>Collect all required documents and make two sets of photocopies. Organize them neatly. <b className={styles.strong}>Note:</b> Your passport will be held during processing; retrieving it early will cancel your application.</p>

            <h3 className={styles.subTitle}>Step 4: Attend the Scheduled Appointment</h3>
            <p>Arrive 15 minutes early. Late arrivals are often turned away. The submission process typically takes 15-30 minutes.</p>

            <h3 className={styles.subTitle}>Step 5: Provide Biometric Data</h3>
            <p>You will need to provide fingerprints and a digital photo. This data remains valid for 59 months, so frequent travelers may skip this step in future applications.</p>

            <h3 className={styles.subTitle}>Step 6: Confirm Your Details</h3>
            <p>Review the printed application summary provided by the officer. Sign to confirm details. Minors (under 18) must be accompanied by a guardian.</p>

            <h3 className={styles.subTitle}>Step 7: Pay the Visa Fees</h3>
            <p>Pay the visa fee via card or cash at the center. Keep the receipt safely—it is required to collect your passport later.</p>
          </div>

          <h2 id="fees" className={styles.subTitle}>How much does a Schengen visa cost? (2026 Rates)</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Applicant Category</th>
                  <th>Visa Fee (EUR)</th>
                  <th>Visa Fee (INR) Approx.*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adults</td>
                  <td>€90</td>
                  <td>₹8,000 - ₹9,500</td>
                </tr>
                <tr>
                  <td>Children aged 6-12</td>
                  <td>€45</td>
                  <td>₹4,000 - ₹4,700</td>
                </tr>
                <tr>
                  <td>Children below 6</td>
                  <td>Free</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>Nationals of Armenia, Azerbaijan, Belarus</td>
                  <td>€35</td>
                  <td>₹3,100 - ₹3,700</td>
                </tr>
                <tr>
                  <td>Nationals of Cabo Verde</td>
                  <td>€67.50</td>
                  <td>₹6,000 - ₹7,100</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.smallText}>
              *Exchange rates fluctuate. VFS/BLS service charges (~₹1,500 - ₹2,500) are extra.
            </p>
          </div>

          <div className="gvi-cta-band">
            <p>Want an exact cost and timeline for your Schengen trip? Talk to our experts.</p>
            <div className="gvi-cta-actions">
              <a href="#apply-form" className="gvi-btn">Get Free Eligibility Check</a>
              <a href="https://wa.me/917022213466?text=Hi,%20I%20would%20like%20a%20free%20eligibility%20check%20for%20a%20Schengen%20Tourist%20Visa" className="gvi-btn gvi-btn-wa">Chat on WhatsApp</a>
            </div>
          </div>

          <h2 id="processing-time" className={styles.subTitle}>What is the processing time for a Schengen visa application?</h2>
          <p>
            <b className={styles.strong}>Standard Time:</b> 15 working days.<br />
            <b className={styles.strong}>Peak Season (Apr-Jun, Oct-Dec):</b> 30-45 calendar days.<br />
            We strongly advise applying at least <b className={styles.strong}>3-4 weeks</b> before your travel date.
          </p>

          <h2 id="when-to-apply" className={styles.subTitle}>When Should I Apply for a Schengen Visa?</h2>
          <p>
            You can apply up to <b className={styles.strong}>6 months</b> before your trip. The latest you can apply is 15 days before travel, but this is risky. The sweet spot is <b className={styles.strong}>2 months prior</b>.
          </p>

          <h2 id="funds" className={styles.subTitle}>How Much Money Do I Need to Visit the Schengen Area?</h2>
          <p>
            While it varies by country, a safe benchmark for 2026 is to show access to <b className={styles.strong}>€100 - €120 per day</b> of your trip, excluding pre-paid accommodation. For a 10-day trip, having a closing balance of around <b className={styles.strong}>₹2.5 - ₹3 Lakhs</b> is recommended.
          </p>

          <h2 id="easiest-countries" className={styles.subTitle}>Top 10 Easiest Schengen Countries to Apply for Visa (2025-2026 Trends)</h2>
          <p>These countries are often cited as having higher approval rates for Indian tourists. Figures are indicative estimates and change every year.</p>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Approval Rate (Est.)</th>
                  <th>Highlights</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Iceland</td>
                  <td>95.4%</td>
                  <td>Very low rejection rate; ideal for nature lovers.</td>
                </tr>
                <tr>
                  <td>Switzerland</td>
                  <td>89.2%</td>
                  <td>Highly organized process; consistent with approvals.</td>
                </tr>
                <tr>
                  <td>Latvia</td>
                  <td>88.1%</td>
                  <td>Lower application volume results in faster processing.</td>
                </tr>
                <tr>
                  <td>Italy</td>
                  <td>87.5%</td>
                  <td>High volume but generally tourist-friendly.</td>
                </tr>
                <tr>
                  <td>Luxembourg</td>
                  <td>87.3%</td>
                  <td>Quick processing for complete files.</td>
                </tr>
                <tr>
                  <td>Lithuania</td>
                  <td>86.8%</td>
                  <td>Easier appointments compared to Western Europe.</td>
                </tr>
                <tr>
                  <td>Slovakia</td>
                  <td>86.5%</td>
                  <td>Often overlooked, making appointments easier to find.</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>85.9%</td>
                  <td>Strict on docs but very predictable outcomes.</td>
                </tr>
                <tr>
                  <td>Greece</td>
                  <td>85.4%</td>
                  <td>Great for summer tourism; apply early.</td>
                </tr>
                <tr>
                  <td>Austria</td>
                  <td>84.1%</td>
                  <td>Efficient processing system.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="tips" className={styles.subTitle}>Success Tips for Schengen Visa</h2>
          <ul>
            <li><b className={styles.strong}>Be Honest:</b> Never present fake hotel bookings. Embassies check.</li>
            <li><b className={styles.strong}>Strong Cover Letter:</b> Clearly explain <i>why</i> you want to visit and <i>why</i> you must return.</li>
            <li><b className={styles.strong}>Bank History:</b> Avoid sudden large deposits right before applying. It looks suspicious.</li>
            <li><b className={styles.strong}>Insurance:</b> Ensure your insurance name matches your passport exactly.</li>
          </ul>
          <h2 id="rejection" className={styles.subTitle}>Common Reasons for Rejection of Schengen Visa</h2>
          <ul>
            <li><b className={styles.strong}>Insufficient Funds:</b> Balance is too low or shows "dummy" large deposits right before application.</li>
            <li><b className={styles.strong}>Unclear Purpose of Travel:</b> Itinerary is vague or unrealistic (e.g., visiting 5 countries in 6 days).</li>
            <li><b className={styles.strong}>Travel Insurance Invalid:</b> Policy does not cover the full duration or specific Schengen requirements.</li>
            <li><b className={styles.strong}>Damaged Passport:</b> Passports with torn pages or water damage are often rejected.</li>
          </ul>
          <div className={styles.servicesSection}>
            <h2 id="why-gvi" className={styles.subTitle}>How Global Visa Internationals (GVI) Ensures Your Success</h2>
            <p>
              Navigating Schengen rules can be complex. At <b className={styles.strong}>GVI</b>, we provide end-to-end support to maximize your approval chances.
            </p>
            <div className={styles.serviceGrid}>
              <div className={styles.serviceItem}>
                <b className={styles.strong}>Profile Evaluation:</b>
                <p>We analyze your financial and travel history to recommend the safest country to apply to.</p>
              </div>
              <div className={styles.serviceItem}>
                <b className={styles.strong}>Document Procurement:</b>
                <p>We assist in arranging legitimate flight itineraries, hotel proofs, and insurance.</p>
              </div>
              <div className={styles.serviceItem}>
                <b className={styles.strong}>Interview Prep:</b>
                <p>Mock interviews to prepare you for questions about your trip and finances.</p>
              </div>
              <div className={styles.serviceItem}>
                <b className={styles.strong}>Cover Letter Writing:</b>
                <p>Our experts draft compelling cover letters that address any weak points in your profile.</p>
              </div>
            </div>

            <div className={styles.ctaContainer}>
              <p>Don't let a visa rejection ruin your holiday.</p>
              <a href="/contact" className={styles.primaryButton}>Start Your Application Today</a>
            </div>
          </div>

          <h2 id="faq" className={styles.subTitle}>Schengen Tourist Visa from India: Frequently Asked Questions</h2>
          <div className="faq-section">
            {faqs.map((f) => (
              <details key={f.q} className="gvi-faq-item">
                <summary><h3 className={styles.subTitle}>{f.q}</h3></summary>
                <p dangerouslySetInnerHTML={{ __html: f.a }} />
              </details>
            ))}
          </div>
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