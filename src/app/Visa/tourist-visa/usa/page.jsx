import VisaForm from '@/Components/VisaForm';
import styles from '@/Components/Visa.module.css';
import React from 'react';
import Head from 'next/head';
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";


export const metadata = {
  metadataBase: new URL("https://www.globalvisainternationals.com"),

  title: "Best US B1/B2 Visa Consultants in Bangalore | GVI",
  description: "Apply for a US B1/B2 visa from India with GVI. Expert help with tourist and business visa documents, fees, appointments and interview prep.",

  applicationName: "Global Visa Internationals",
  category: "USA B1/B2 Visa Services",

  authors: [
    {
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com/about-us",
    },
  ],

  creator: "Global Visa Internationals",
  publisher: "Global Visa Internationals",

  keywords:
    "USA B1 B2 visa, US tourist and business visa, B1 B2 visa consultants India, US visa from India, US visitor visa, US visa agents Bangalore",

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/usa",
    languages: {
      "en-IN":
        "https://www.globalvisainternationals.com/Visa/tourist-visa/usa",
    },
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_CODE",
  },

  openGraph: {
    title: "USA B1/B2 Visa: Tourist & Business Visa Process from India",
    description:
      "Get expert assistance for your US B1/B2 Visa. Learn eligibility, fees, documents, interview tips, and processing time for Indian applicants.",
    url: "/Visa/tourist-visa/usa",
    siteName: "Global Visa Internationals",
    type: "website",
    images: [
      {
        url: "/tourist-visa/USA-(B1-B2)-Visa-Assistance-GVI.jpg",
        width: 1200,
        height: 630,
        alt: "USA B1 B2 Visa Assistance from India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "USA B1/B2 Visa - Tourist & Business Visa Help",
    description:
      "Apply for a US B1/B2 Tourist and Business Visa from India with expert consultants. Trusted guidance since 2017.",
    images: [
      "/tourist-visa/USA-(B1-B2)-Visa-Assistance-GVI.jpg",
    ],
  },

  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bangalore",
    "content-language": "en-IN",
  },
};



export default function USATouristVisa() {
  const pageUrl = metadata.alternates.canonical;

  // ----------- SCHEMAS START ------------ //

  const touristAttraction = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Tourist Attractions in the USA",
    itemListElement: [
      {
        "@type": "TouristAttraction",
        name: "Statue of Liberty",
        description:
          "Iconic symbol of freedom in New York City, offering scenic views and tours.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
        url: "https://www.nps.gov/stli/index.htm",
      },
      {
        "@type": "TouristAttraction",
        name: "Grand Canyon - Pima Point",
        description:
          "Panoramic viewpoint overlooking the Grand Canyon’s South Rim.",
        image:
          "https://www.nps.gov/common/uploads/cropped_image/primary/FF126CF3-9FCB-3F85-33DB711059064278.jpg",
        url: "https://www.nps.gov/places/000/pima-point.htm",
      },
      {
        "@type": "TouristAttraction",
        name: "Yellowstone National Park - Morning Glory Pool",
        description:
          "Vibrant hot spring in Yellowstone’s Upper Geyser Basin, known for blue-green hues.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/27/Morning_Glory_Pool.jpg",
        url: "https://www.nps.gov/places/000/morning-glory-pool.htm",
      },
      {
        "@type": "TouristAttraction",
        name: "Walt Disney World Resort - Cinderella Castle",
        description:
          "Fairy-tale castle at the heart of Magic Kingdom Park in Florida.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d6/Cinderella_Castle%2C_Magic_Kingdom.JPG",
        url: "https://disneyworld.disney.go.com/attractions/magic-kingdom/cinderella-castle/",
      },
      {
        "@type": "TouristAttraction",
        name: "Golden Gate Bridge",
        description:
          "Famous suspension bridge in San Francisco with panoramic skyline views.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
        url: "https://www.goldengate.org/",
      },
    ],
  };


  const breadcrumbJsonLd = {
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
        name: "USA Tourist Visa",
        item: pageUrl,
      },
    ],
  };

  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    description:
      "Expert US Tourist Visa Consultants in Bangalore. We assist with complete US visa documentation, application submission, and personalized guidance.",
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
  };

  // ------- LocalBusiness Schema ------- //
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    image:
      "https://www.globalvisainternationals.com/gvilogo.png",
    priceRange: "₹₹₹",
    telephone: "+91-7022213466",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MG Road",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560025",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "579",
    },
  };

  // -------- Organization Schema -------- //
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    sameAs: travelAgencyJsonLd.sameAs,
  };

  // ---------- Website Schema ---------- //
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.globalvisainternationals.com/search?q={query}",
      "query-input": "required name=query",
    },
  };

  // ---------- WebPage Schema ---------- //
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: metadata.title,
    url: pageUrl,
    description: metadata.description,
    about: {
      "@type": "Thing",
      name: "USA Tourist Visa (B2)",
    },
  };

  // ---------- Service Schema ---------- //
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "USA Tourist Visa Assistance",
    provider: {
      "@type": "Organization",
      name: "Global Visa Internationals",
    },
    areaServed: "India",
    serviceType: "B2 Tourist Visa Documentation & Filing",
    description:
      "Complete US Tourist Visa (B2) assistance including DS-160, documentation, scheduling, and interview preparation.",
  };

  // -------- FAQ Schema -------- //
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        "name": "How do I get a US visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To get a US visa, determine your visa type (e.g., Tourist or Student), complete the DS-160 form, pay the fee, and schedule an interview. For expert help, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "How do I apply for a US visa from the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UK residents must fill out the DS-160 online and attend an interview at the US Embassy in London or Belfast. For assistance, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "How is the US visa situation in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visa demand in Nigeria is high with long wait times in Abuja and Lagos. Early planning is crucial. For slot monitoring, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check my US visa status?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check status on the CEAC website using your DS-160 barcode. For tracking assistance, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "Which US visa is the easiest to get?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The B1/B2 Tourist Visa is the most common, but approval requires proof of strong ties to your home country. For guidance, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the US visa number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The visa number is the red 8-digit number printed on the bottom right of the visa sticker in your passport. If unsure, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "Can US visa holders travel to Saudi Arabia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, holders of a valid, used US visa can often get a Saudi E-Visa or Visa on Arrival. For travel planning, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "Can US visa holders work in Saudi Arabia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, a US tourist visa does not permit working in Saudi Arabia. You need a Saudi Work Visa. For assistance, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "How do I apply for a US tourist visa from India online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To apply online, complete the DS-160 form on the CEAC website, pay the fee, and schedule appointments for biometrics and the interview. For a hassle-free experience, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "Which companies offer the fastest US tourist visa processing services in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While the Embassy determines processing times, experienced agencies can speed up documentation and slot booking. To expedite your filing process, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "What are the fees for a US tourist visa application through official channels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official US tourist visa (B1/B2) fee is $185 USD (payable in INR). This is non-refundable. For fee guidance and payment assistance, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a US tourist visa appointment through a mobile app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no official government mobile app, though the website is mobile-friendly. To have an expert manage the booking portal for you, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "What travel agencies provide end-to-end US tourist visa assistance in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Specialized visa firms offer better support than general agents. For complete end-to-end support including DS-160 filing and mock interviews, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "Which courier services are recommended for sending US tourist visa documents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The US Embassy officially partners with Blue Dart for passport logistics in India. For detailed logistics and document handling guidance, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "What documents do I need to submit for a US tourist visa interview in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mandatory documents include a valid passport, DS-160 confirmation, and appointment letter, along with financial and employment proofs. Get a personalized document checklist by Contacting Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any premium services to expedite my US tourist visa interview scheduling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The US Consulate does not sell premium slots for tourists; early slots rely on cancellations. To have experts monitor slots daily for you, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find authorized visa application centers for US tourist visas near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visa Application Centers (VAC) and Consulates are located in New Delhi, Mumbai, Chennai, Hyderabad, and Kolkata. For assistance in choosing the right center, Contact Global Visa Internationals at https://wa.me/917022213466 or call +91 70222 13466."
        }
      }
    ],
  };

  /* ------------------------------------------------------------------
     Visual enhancement layer (look & feel only), scoped to .gvi-usa
  ------------------------------------------------------------------- */
  const enhancedCss = `
.gvi-usa {
  --gvi-primary: #1f3a8a;
  --gvi-primary-dark: #14275f;
  --gvi-accent: #c8102e;
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
.gvi-usa h1 {
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
.gvi-usa h2 {
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
.gvi-usa h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 1.8rem 0 0.7rem;
  padding: 0.55rem 1rem;
  background: var(--gvi-soft);
  border-radius: 10px;
  color: var(--gvi-primary-dark);
}
.gvi-usa h4 {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 1.6rem 0 0.5rem;
  color: var(--gvi-primary-dark);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.gvi-usa h4::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gvi-accent);
  flex: none;
}

/* Text */
.gvi-usa p { margin: 0 0 1.1rem; color: var(--gvi-muted); }
.gvi-usa strong { color: var(--gvi-ink); font-weight: 700; }
.gvi-usa a:not([class]) { color: var(--gvi-primary); font-weight: 600; }
.gvi-usa hr { border: 0; border-top: 1px solid var(--gvi-line); margin: 2.2rem 0; }

/* Lists: one compact card per list, light dividers between rows */
.gvi-usa ul {
  list-style: none;
  padding: 0.3rem 1.1rem;
  margin: 0 0 1.4rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
.gvi-usa ul li {
  position: relative;
  padding: 0.6rem 0 0.6rem 1.5rem;
  margin: 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #eef0f3;
  border-radius: 0;
  box-shadow: none;
  transform: none;
  color: var(--gvi-muted);
}
.gvi-usa ul li:last-child { border-bottom: 0; }
.gvi-usa ul li:hover { transform: none; box-shadow: none; border-color: #eef0f3; }
.gvi-usa ul li:last-child:hover { border-bottom: 0; }
.gvi-usa ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 1.15rem;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gvi-primary);
  box-shadow: none;
}
.gvi-usa ul ul { margin: 0.5rem 0 0.2rem; padding: 0; border: 0; box-shadow: none; background: transparent; }
.gvi-usa ul ul li { padding: 0.3rem 0 0.3rem 1.3rem; border-bottom: 0; background: transparent; }
.gvi-usa ul ul li::before { top: 0.8rem; width: 5px; height: 5px; background: var(--gvi-muted); }

/* Numbered steps */
.gvi-usa ol.gvi-steps { list-style: none; counter-reset: gvi-step; padding: 0; margin: 0 0 1.6rem; }
.gvi-usa ol.gvi-steps > li {
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
.gvi-usa ol.gvi-steps > li::before {
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
.gvi-usa .faq-container ol { padding-left: 1.4rem; margin: 0 0 1.2rem; color: var(--gvi-muted); }
.gvi-usa .faq-container ol li { margin-bottom: 0.35rem; }

/* Tables */
.gvi-table-wrap {
  overflow-x: auto;
  margin: 0 0 1.4rem;
  border: 1px solid var(--gvi-line);
  border-radius: var(--gvi-radius);
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
}
.gvi-usa table { width: 100%; border-collapse: collapse; background: #fff; min-width: 560px; }
.gvi-usa th {
  background: linear-gradient(135deg, var(--gvi-primary), var(--gvi-primary-dark));
  color: #fff;
  text-align: left;
  padding: 0.8rem 1rem;
  font-weight: 700;
}
.gvi-usa td { padding: 0.8rem 1rem; border-top: 1px solid var(--gvi-line); color: var(--gvi-muted); }
.gvi-usa tbody tr:nth-child(even) td { background: #f8fafc; }
.gvi-usa td:first-child { font-weight: 600; color: var(--gvi-ink); }

/* Note / callout */
.gvi-usa .gvi-note {
  background: #fff8e6;
  border: 1px solid #f5d98a;
  border-left: 5px solid #f0b429;
  border-radius: 10px;
  padding: 0.9rem 1.1rem;
  color: #5c4a12;
}

/* FAQ blocks: lighter question bars so long FAQ lists stay scannable */
.gvi-usa .faq-container h3 { font-size: 1.05rem; margin: 1.4rem 0 0.5rem; border-left: 4px solid var(--gvi-accent); border-radius: 0 10px 10px 0; }

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
  border: 1px solid #d4def5;
  border-radius: var(--gvi-radius);
  padding: 1rem 1.1rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(31, 58, 138, 0.08);
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
  border: 1px solid #d4def5;
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.4rem;
  margin: 1.6rem 0;
}
.gvi-cta-band p { margin: 0; color: var(--gvi-ink); font-weight: 600; flex: 1 1 260px; }
.gvi-usa a.gvi-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 8px 18px rgba(31, 58, 138, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.gvi-usa a.gvi-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(31, 58, 138, 0.36); }

/* Contact card */
.gvi-usa [class*="contactInfo"] {
  background: linear-gradient(135deg, #1f3a8a 0%, #0f1f55 100%);
  color: #fff;
  border-radius: 18px;
  padding: 1.6rem 1.8rem;
  margin: 1.6rem 0 2rem;
  box-shadow: 0 14px 30px rgba(20, 39, 95, 0.3);
}
.gvi-usa [class*="contactInfo"] h4 { color: #fff !important; margin-top: 0.4rem; }
.gvi-usa [class*="contactInfo"] h4::before { background: #fff; }
.gvi-usa [class*="contactInfo"] p { color: rgba(255, 255, 255, 0.92); margin-bottom: 0.7rem; }
.gvi-usa [class*="contactInfo"] ul {
  background: transparent;
  border: 0;
  box-shadow: none;
  padding: 0;
}
.gvi-usa [class*="contactInfo"] ul li {
  background: transparent;
  border: 0;
  box-shadow: none;
  color: #fff;
  padding: 0.4rem 0 0.4rem 1.6rem;
  margin: 0;
  transform: none;
}
.gvi-usa [class*="contactInfo"] ul li::before { left: 0; top: 0.95rem; background: #fff; box-shadow: none; }
.gvi-usa a.gvi-cta-link,
.gvi-usa a.gvi-cta-link:link,
.gvi-usa a.gvi-cta-link:visited {
  display: inline-block;
  color: #2b40e0 !important;
  background: rgba(255, 255, 255, 0.16) !important;
  background-color: rgba(255, 255, 255, 0.16) !important;
  font-weight: 700;
  text-decoration: none;
  padding: 0.2rem 0.9rem;
  border: 1.5px solid rgba(255, 255, 255, 0.85);
  border-radius: 999px;
  transition: background 0.18s ease, transform 0.18s ease;
}
.gvi-usa a.gvi-cta-link:hover,
.gvi-usa a.gvi-cta-link:focus-visible {
  color: #e34b4b !important;
  background: rgba(255, 255, 255, 0.32) !important;
  background-color: rgba(255, 255, 255, 0.32) !important;
  transform: translateY(-1px);
}
#apply-form { scroll-margin-top: 90px; }

/* WhatsApp buttons */
.gvi-usa [class*="callButton"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.6rem 0 1rem;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  box-shadow: 0 10px 22px rgba(18, 140, 126, 0.32);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.gvi-usa [class*="callButton"]:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(18, 140, 126, 0.4); }

/* Address block */
.gvi-usa address {
  font-style: normal;
  background: #f8fafc;
  border: 1px solid var(--gvi-line);
  border-radius: var(--gvi-radius);
  padding: 1.2rem 1.4rem;
  margin: 1.6rem 0;
  line-height: 1.8;
}


/* FAQ dropdowns */
.gvi-usa details.gvi-faq-item {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  margin: 0 0 0.6rem;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
  transition: box-shadow 0.18s ease, border-color 0.18s ease;
}
.gvi-usa details.gvi-faq-item:hover { border-color: rgba(31, 58, 138, 0.35); box-shadow: 0 6px 16px rgba(16, 24, 40, 0.08); }
.gvi-usa details.gvi-faq-item[open] { border-color: var(--gvi-primary); box-shadow: 0 8px 20px rgba(31, 58, 138, 0.12); }
.gvi-usa details.gvi-faq-item summary {
  list-style: none;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 3rem 0.75rem 1rem;
}
.gvi-usa details.gvi-faq-item summary::-webkit-details-marker { display: none; }
.gvi-usa details.gvi-faq-item summary::after {
  content: "+";
  position: absolute;
  right: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--gvi-primary);
  background: var(--gvi-soft);
}
.gvi-usa details.gvi-faq-item[open] summary::after { content: "–"; color: #fff; background: var(--gvi-primary); }
.gvi-usa details.gvi-faq-item summary h3,
.gvi-usa .faq-container details.gvi-faq-item summary h3 {
  display: block;
  margin: 0;
  padding: 0;
  background: transparent;
  border: 0;
  border-radius: 0;
  font-size: 1.02rem;
  line-height: 1.45;
  color: var(--gvi-ink);
}
.gvi-usa details.gvi-faq-item[open] summary { border-bottom: 1px solid #eef0f3; }
.gvi-usa details.gvi-faq-item > p { margin: 0; padding: 0.8rem 1rem 0.2rem; }
.gvi-usa details.gvi-faq-item > p:last-child { padding-bottom: 0.9rem; }
.gvi-usa details.gvi-faq-item > ul,
.gvi-usa details.gvi-faq-item > ol { margin: 0.4rem 1rem 0.6rem; }
.gvi-usa details.gvi-faq-item > ol { padding-left: 1.4rem; }

/* Contact section highlight */
.gvi-usa .gvi-contact-section {
  background: linear-gradient(160deg, #eef2fb 0%, #ffffff 60%);
  border: 1px solid #d4def5;
  border-top: 5px solid var(--gvi-accent);
  border-radius: 20px;
  padding: 1.4rem 1.6rem 1.2rem;
  margin: 2.4rem 0;
  box-shadow: 0 14px 34px rgba(31, 58, 138, 0.12);
}
.gvi-usa .gvi-contact-section > h2 { margin-top: 0; }
.gvi-usa .gvi-contact-section hr { display: none; }
.gvi-usa .gvi-contact-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.9rem;
  margin: 0.4rem 0 1.6rem;
}
.gvi-usa a.gvi-tile,
.gvi-usa a.gvi-tile:link,
.gvi-usa a.gvi-tile:visited {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.95rem 1.1rem;
  border-radius: 16px;
  color: #fff !important;
  text-decoration: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.gvi-usa a.gvi-tile:hover { transform: translateY(-3px); }
.gvi-usa a.gvi-tile .gvi-tile-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  font-size: 1.35rem;
  background: rgba(255, 255, 255, 0.2);
}
.gvi-usa a.gvi-tile b { display: block; font-size: 1.05rem; line-height: 1.2; color: #fff; }
.gvi-usa a.gvi-tile small { display: block; font-size: 0.82rem; color: rgba(255, 255, 255, 0.9); word-break: break-word; }
.gvi-usa a.gvi-tile-wa { background: linear-gradient(135deg, #25d366 0%, #128c7e 100%); box-shadow: 0 10px 22px rgba(18, 140, 126, 0.32); }
.gvi-usa a.gvi-tile-call { background: linear-gradient(135deg, #1f3a8a 0%, #14275f 100%); box-shadow: 0 10px 22px rgba(31, 58, 138, 0.32); }
.gvi-usa a.gvi-tile-mail { background: linear-gradient(135deg, #d6193a 0%, #9b0f27 100%); box-shadow: 0 10px 22px rgba(200, 16, 46, 0.3); }
.gvi-usa ul.gvi-cols { columns: 2 260px; column-gap: 1.6rem; }
.gvi-usa ul.gvi-cols li { break-inside: avoid; }
.gvi-usa [class*="contactInfo"] ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.6rem;
}
.gvi-usa [class*="contactInfo"] ul li {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 12px;
  padding: 0.7rem 1rem 0.7rem 2.1rem;
}
.gvi-usa [class*="contactInfo"] ul li::before { left: 1rem; top: 1.25rem; }
.gvi-usa .gvi-contact-section address {
  background: #fff;
  border-left: 5px solid var(--gvi-accent);
  box-shadow: 0 6px 18px rgba(16, 24, 40, 0.06);
  margin-bottom: 0.4rem;
}

@media (max-width: 640px) {
  .gvi-usa { font-size: 0.98rem; }
  .gvi-usa h2 { margin-top: 2.2rem; }
  .gvi-usa ul li { padding-left: 1.4rem; }
}
`;

  // ---------- RENDER BELOW ---------- //
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttraction) }}
      />

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ✨ Scoped visual enhancements */}
      <style dangerouslySetInnerHTML={{ __html: enhancedCss }} />

      <div className={styles.imageContainer}>
        <img src="/tourist-visa/USA-(B2)Tourist-Visa-Assistance-GVI.jpg" alt="US tourist visa (B1/B2) assistance from India - Global Visa Internationals" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>


        <div className={`${styles.VisaData} gvi-usa`}>


          {/* H1: Primary Keyword Targeting for Location + Year + Service */}
          <h1 className={styles.Title}>US Tourist Visa (B1/B2) from India: Complete Guide to Eligibility, Documents, Fees & Process for 2026</h1>

          {/* Quick facts (values taken from the sections below) */}
          <div className="gvi-facts">
            <div className="gvi-fact"><b>$185</b><span>Official MRV fee</span></div>
            <div className="gvi-fact"><b>Up to 10 years</b><span>Typical validity</span></div>
            <div className="gvi-fact"><b>Up to 6 months</b><span>Stay per visit</span></div>
            <div className="gvi-fact"><b>3–14 days</b><span>Business days after interview</span></div>
          </div>

          <nav aria-label="Table of contents" className="gvi-toc">
            <strong>On this page</strong>
            <ol>
              <li><a href="#eligibility">Eligibility criteria</a></li>
              <li><a href="#documents">Documents required</a></li>
              <li><a href="#how-to-apply">How to apply (step-by-step)</a></li>
              <li><a href="#fees">Fees & costs</a></li>
              <li><a href="#processing-time">Processing time</a></li>
              <li><a href="#why-gvi">Why choose GVI</a></li>
              <li><a href="#rejection-reasons">Rejection reasons & how to avoid them</a></li>
              <li><a href="#categories">B1, B2 and B1/B2 categories</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ol>
          </nav>

          <p>A US Tourist Visa, officially known as the B1/B2 visa, is a non-immigrant visa that permits foreign nationals to enter the United States temporarily. This US tourist visa serves multiple purposes including business travel (B1), tourism and leisure (B2), or a combination of both activities.</p>
          <p>The US tourist visa allows visitors to explore American destinations, attend business meetings, visit family and friends, or seek medical treatment without the intention of permanent residency.</p>

          <a href="https://wa.me/917022213466?text=Hi,%20I%20am%20looking%20for%20USA%20Visa%20assistance%20for%202026" className={styles.callButton}>
            📞 Check My Visa Eligibility for 2026 (Free)
          </a>

          <h2 id="eligibility" className={styles.subTitle}>US Tourist Visa Eligibility Criteria: Complete Requirements for 2026</h2>
          <p>Understanding US tourist visa eligibility criteria is crucial for a successful application. The US Embassy has specific requirements that every applicant must meet:</p>

          <h3 className={styles.subTitle}>Core US Tourist Visa Eligibility Requirements</h3>

          <h4 className={styles.subTitle}>1. Valid Purpose of Travel</h4>
          <ul>
            <li><strong className={styles.strong}>Tourism:</strong> Submit complete travel itinerary, confirmed flight tickets, and hotel reservations</li>
            <li><strong className={styles.strong}>Family/Friend Visits:</strong> Provide formal invitation letter from US-based host with their immigration status proof</li>
            <li><strong className={styles.strong}>Medical Treatment:</strong> Include medical records, appointment letters from US healthcare facilities, and diagnosis documents</li>
            <li><strong className={styles.strong}>Business Activities:</strong> Present business invitation letters, conference registration, or meeting schedules</li>
          </ul>

          <h4 className={styles.subTitle}>2. Financial Stability for US Tourist Visa</h4>
          <ul>
            <li>Demonstrate sufficient funds to cover entire US trip duration</li>
            <li>Provide bank statements (last 6 months), fixed deposit certificates, property documents</li>
            <li>Show steady income through salary slips, ITR documents, or business financial statements</li>
          </ul>

          <h4 className={styles.subTitle}>3. Strong Ties to Home Country</h4>
          <ul>
            <li>Supporting documents to demonstrates you will return to your home country.</li>
            {/* <li>Employment verification letter or business ownership documents</li>
            <li>Family ties documentation (marriage certificate, children's records)</li>
            <li>Property ownership papers or rental agreements</li> */}
          </ul>

          <h4 className={styles.subTitle}>4. Immigration Compliance</h4>
          <ul>
            <li>Clear intent to return after authorized stay period</li>
            <li>No history of US immigration violations</li>
            <li>Clean criminal record with police verification certificate</li>
            <li>Adherence to US tourist visa conditions (no work, study, or paid performances)</li>
          </ul>

          <h2 id="documents" className={styles.subTitle}>US Tourist Visa Documents Required: Complete Checklist 2026</h2>
          <p>Proper documentation is critical for US tourist visa approval. Here's the comprehensive US tourist visa documents required list:</p>

          <h3 className={styles.subTitle}>Mandatory US Tourist Visa Documents</h3>

          <h4 className={styles.subTitle}>Identity & Travel Documents:</h4>
          <ul>
            <li>Valid passport (minimum 6 months validity beyond travel dates)</li>
            <li>All previous passports (if applicable)</li>
            <li>Recent passport-sized photograph (51mm x 51mm, white background, meeting US visa photo specifications)</li>
          </ul>

          <h4 className={styles.subTitle}>US Visa Application Forms:</h4>
          <ul>
            <li>Completed DS-160 form (Online Nonimmigrant Visa Application)</li>
            <li>DS-160 confirmation page with barcode</li>
            <li>VAC stamped DS-160 confirmation page</li>
            <li>US visa appointment confirmation letter</li>
          </ul>

          <h4 className={styles.subTitle}>Financial Documents for US Tourist Visa:</h4>
          <ul>
            <li>Bank statements, ITR and payslips demonstrating sufficient funds for your trip.</li>
            {/* <li>Income Tax Returns (ITR) for past 3 years</li>
            <li>Salary slips (last 6 months) or business financial statements</li>
            <li>Fixed deposit receipts, mutual fund statements, property documents</li>
            <li>Sponsorship documents (Form I-134 Affidavit of Support, if applicable)</li> */}
          </ul>

          <h4 className={styles.subTitle}>Supporting Documents:</h4>
          <ul>
            <li> Additionals documents to support the Case </li>
            {/* <li>Employment verification letter on company letterhead</li>
            <li>Leave approval letter from employer</li>
            <li>Business registration documents (for self-employed applicants)</li>
            <li>Travel itinerary and confirmed flight bookings</li>
            <li>Hotel reservations or host invitation letter</li>
            <li>Travel insurance (recommended)</li> */}
          </ul>

          <h4 className={styles.subTitle}>Character & Compliance Documents:</h4>
          <ul>
            <li>Police verification certificate (no criminal record proof)</li>
            <li>Purpose of travel letter explaining visit details</li>
            <li>Previous US visa copies (if applicable)</li>
            <li>Previous international travel records</li>
          </ul>

          <h4 className={styles.subTitle}>Payment Receipts:</h4>
          <ul>
            <li>MRV fee payment receipt (approx. ₹17,000 or $185 USD)</li>
            <li>VFS service fee receipt</li>
          </ul>

          <h2 id="how-to-apply" className={styles.subTitle}>How to Apply for US Tourist Visa: Step-by-Step Process 2026</h2>
          <p>Follow this detailed US tourist visa application process for successful submission:</p>

          <h3 className={styles.subTitle}>US Tourist Visa Application Steps</h3>
          <h4 className={styles.subTitle}>Step 1: Prepare Digital Photograph</h4>
          <ul>
            <li>Capture recent photograph meeting US visa specifications</li>
            <li>Upload digital photo during DS-160 form submission</li>
          </ul>

          <h4 className={styles.subTitle}>Step 2: Complete DS-160 Form Online</h4>
          <ul>
            <li>Access the Consular Electronic Application Center</li>
            <li>Fill all sections accurately (personal info, travel plans, background questions)</li>
            <li>Review carefully before submission</li>
            <li>Save the 10-digit barcode confirmation number</li>
          </ul>

          <h4 className={styles.subTitle}>Step 3: Pay US Tourist Visa Application Fee</h4>
          <ul>
            <li>Current MRV fee: ₹17,000 (approximately $185 USD)</li>
            <li>Payment through approved banks or online portal</li>
            <li>Save payment receipt for appointment booking</li>
          </ul>

          <h4 className={styles.subTitle}>Step 4: Schedule US Visa Appointments</h4>
          <p>You need two separate appointments for US tourist visa processing:</p>
          <p><strong className={styles.strong}>Appointment 1: Offsite Facilitation Centre (OFC/VAC)</strong></p>
          <ul>
            <li>Biometric data collection (fingerprints, photograph)</li>
            <li>Document verification</li>
            <li>Book through official VFS website</li>
          </ul>
          <p><strong className={styles.strong}>Appointment 2: US Embassy/Consulate Interview</strong></p>
          <ul>
            <li>Personal visa interview with Consular Officer</li>
            <li>Schedule after OFC appointment</li>
            <li>Available locations: Bangalore, Chennai, Hyderabad, Kolkata, Mumbai, New Delhi</li>
          </ul>

          <h4 className={styles.subTitle}>Step 5: Attend OFC Appointment</h4>
          <ul>
            <li>Submit biometrics at Visa Application Centre</li>
            <li>Provide required documents for verification</li>
            <li>Receive stamped DS-160 confirmation</li>
          </ul>

          <h4 className={styles.subTitle}>Step 6: Prepare for US Visa Interview</h4>
          <ul>
            <li>Review your DS-160 form thoroughly</li>
            <li>Organize all supporting documents</li>
            <li>Practice common interview questions</li>
            <li>Demonstrate strong ties to India and clear return intentions</li>
          </ul>

          <h4 className={styles.subTitle}>Step 7: Attend US Embassy Interview</h4>
          <ul>
            <li>Arrive 15 minutes before scheduled time</li>
            <li>Bring all original documents plus one set of photocopies</li>
            <li>Answer questions confidently and honestly</li>
            <li>Provide additional documents if requested</li>
          </ul>

          <h4 className={styles.subTitle}>Step 8: Visa Processing & Passport Return</h4>
          <ul>
            <li>If approved, passport will be sent for visa stamping</li>
            <li>Track passport status online</li>
            <li>Receive passport with US tourist visa via courier</li>
            <li>Verify all visa details upon receipt</li>
          </ul>

          <h2 id="fees" className={styles.subTitle}>US Tourist Visa Fees & Costs 2026</h2>
          <p>Understanding the complete US tourist visa cost helps in proper budgeting:</p>

          <h3 className={styles.subTitle}>Official US Tourist Visa Fees</h3>
          <div className="gvi-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Fee Component</th>
                  <th>Amount (INR)</th>
                  <th>USD Equivalent</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MRV Application Fee</td>
                  <td>₹17,000 (approx)</td>
                  <td>$185</td>
                  <td>Non-refundable, paid to US Government</td>
                </tr>
                <tr>
                  <td>Biometrics Fee</td>
                  <td>Included</td>
                  <td>-</td>
                  <td>Covered in MRV fee</td>
                </tr>
                <tr>
                  <td>VFS Service Fee</td>
                  <td>₹1,500-2,500</td>
                  <td>-</td>
                  <td>For document collection & courier</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className={styles.subTitle}>Additional US Visa Related Costs</h4>
          <ul>
            <li>Visa Issuance Fee: Varies by nationality (Indians are exempt)</li>
            <li>Medical Examination: ₹3,000-5,000 (if required for specific cases)</li>
            <li>Police Verification: ₹500-1,000 (varies by state)</li>
            <li>Document Attestation: ₹500-2,000 (notarization, translations)</li>
            <li>Consultant Fees: Variable (contact Global Visa Internationals for quote)</li>
          </ul>
          <p className="gvi-note"><strong className={styles.strong}>Important:</strong> The US tourist visa fee ($185/₹17,000) is non-refundable regardless of visa approval or rejection.</p>

          <h2 id="processing-time" className={styles.subTitle}>US Tourist Visa Processing Time 2026</h2>
          <p><strong className={styles.strong}>Standard US tourist visa processing time:</strong> 3-14 business days after interview</p>
          <p>However, actual processing time depends on several factors:</p>

          <h3 className={styles.subTitle}>Factors Affecting US Visa Processing Time</h3>
          <ul>
            <li><strong className={styles.strong}>Embassy Workload:</strong> High application volume can extend processing</li>
            <li><strong className={styles.strong}>Administrative Processing:</strong> Additional background checks may add 4-12 weeks</li>
            <li><strong className={styles.strong}>Appointment Availability:</strong> Current wait time in Bangalore: 6-8 months</li>
            <li><strong className={styles.strong}>Application Complexity:</strong> First-time applicants may face longer review</li>
            <li><strong className={styles.strong}>Peak Season:</strong> June-August typically sees longer processing times</li>
          </ul>

          <h3 className={styles.subTitle}>US Visa Timeline Breakdown</h3>
          <ol className="gvi-steps">
            <li><strong className={styles.strong}>Appointment Scheduling:</strong> 6-8 months wait (as of early 2026)</li>
            <li><strong className={styles.strong}>Interview Day:</strong> Same day preliminary decision (in most cases)</li>
            <li><strong className={styles.strong}>Passport Processing:</strong> 3-5 business days for approved visas</li>
            <li><strong className={styles.strong}>Passport Return:</strong> 2-3 business days via courier</li>
          </ol>
          <p><strong className={styles.strong}>Total Timeline:</strong> 8-10 months from fee payment to visa receipt (including appointment wait time)</p>
          <p className="gvi-note"><em>Note: Global Visa Internationals specializes in securing earlier US visa appointment slots through dedicated 24/7 monitoring of cancellations and expedited processing options.</em></p>

          <div className="gvi-cta-band">
            <p>Facing long appointment wait times? Ask about our fast-track slot monitoring.</p>
            <a href="#apply-form" className="gvi-btn">Get Started Now</a>
          </div>

          <h2 id="why-gvi" className={styles.subTitle}>Why Choose Global Visa Internationals for US Tourist Visa?</h2>
          <p>Global Visa Internationals (GVI) is Bangalore's most trusted US visa consultant with proven expertise in B1/B2 visa processing:</p>

          <h3 className={styles.subTitle}>Our US Tourist Visa Services</h3>
          <h4 className={styles.subTitle}>✓ Dedicated Personal Case Manager</h4>
          <ul>
            <li>Single point of contact throughout your US visa journey</li>
            <li>Personal assistance via WhatsApp, phone, and email</li>
            <li>Regular updates on application status</li>
            <li>Available for consultation throughout the process</li>
          </ul>

          <h4 className={styles.subTitle}>✓ 10+ Years of US Visa Expertise</h4>
          <ul>
            <li>Experienced senior consultants handling complex visa cases</li>
            <li>Updated knowledge of 2026 US immigration policies and trends</li>
            <li>High approval rates for challenging applications</li>
            <li>Specialized expertise in senior citizens and solo female travelers</li>
          </ul>

          <h4 className={styles.subTitle}>✓ Complete US Visa Documentation Support</h4>
          <ul>
            <li>Financial document review: ITR analysis, liquid assets, property verification</li>
            <li>DS-160 form filling with 100% accuracy (single error = #1 cause of rejection)</li>
            <li>Financial document preparation and review</li>
            <li>Sponsorship letter drafting (Form I-134 Affidavit of Support guidance)</li>
            <li>Document gap analysis and correction</li>
          </ul>

          <h4 className={styles.subTitle}>✓ Elite US Visa Interview Preparation</h4>
          <ul>
            <li>Realistic mock interview sessions simulating actual embassy environment</li>
            <li>2026 question bank covering latest Consular Officer queries</li>
            <li>Personalized coaching to demonstrate strong home country ties</li>
            <li>Training on how to effectively prove return intentions to India</li>
            <li>Section 214(b) rejection prevention strategies</li>
          </ul>

          <h4 className={styles.subTitle}>✓ Fast-Track US Visa Appointment Slot Booking</h4>
          <ul>
            <li>Priority booking service for early interview dates</li>
            <li>24/7 monitoring system to capture cancellation slots</li>
            <li>Expedited appointment strategies reducing 6-8 month wait times</li>
            <li>Proven strategy for securing early B1/B2 interview dates in 2026</li>
            <li>Emergency slot booking for urgent travel needs</li>
          </ul>

          <h4 className={styles.subTitle}>✓ US Visa Refusal & Reapplication Support</h4>
          <ul>
            <li>Analysis of previous rejection reasons and DS-160 review</li>
            <li>Strategic reapplication planning with improved documentation</li>
            <li>Addressing Section 214(b) denials (insufficient ties to home country)</li>
            <li>Document strengthening for second attempts</li>
            <li>Expert strategy for complex refusal cases</li>
          </ul>

          <h4 className={styles.subTitle}>✓ Express 2026 Processing & Guarantees</h4>
          <ul>
            <li>Optimized workflows aiming for 6-week turnaround (subject to Embassy availability)</li>
            <li>Service charge refund if committed processing timeline is missed</li>
            <li>Risk-free application with detailed profile audit</li>
            <li>Complete hand-holding from document collection to final passport stamping</li>
          </ul>

          <h3 className={styles.subTitle}>Global Visa Internationals Advantages</h3>
          <h4 className={styles.subTitle}>Transparency First:</h4>
          <ul>
            <li>No hidden costs or surprise charges</li>
            <li>Clear roadmap provided from Day 1</li>
            <li>Upfront pricing and timeline expectations</li>
          </ul>

          <h4 className={styles.subTitle}>Prime Bangalore Location:</h4>
          <ul>
            <li>Centrally located on Brigade Road</li>
            <li>Easy access for all Karnataka residents</li>
            <li>Convenient consultation and document submission</li>
          </ul>

          <h4 className={styles.subTitle}>Proven Success Record:</h4>
          <ul>
            <li>High approval rates for complex cases</li>
            <li>Specialized support for senior citizens</li>
            <li>Expert handling of solo female traveler applications</li>
            <li>Success with first-time international travelers</li>
          </ul>

          <h2 id="rejection-reasons" className={styles.subTitle}>Common US Tourist Visa Rejection Reasons & How to Avoid Them</h2>
          <p>Understanding rejection causes helps strengthen your US tourist visa application:</p>

          <h3 className={styles.subTitle}>Top US Visa Denial Reasons (2026)</h3>
          <ol className="gvi-steps">
            <li><strong className={styles.strong}>Insufficient Ties to Home Country (Section 214(b))</strong>
              <ul>
                <li>Most common rejection reason for B1/B2 visas</li>
                <li>GVI Solution: Comprehensive documentation of employment, property ownership, family ties, and financial stability</li>
              </ul>
            </li>
            <li><strong className={styles.strong}>Inadequate Financial Documentation</strong>
              <ul>
                <li>Lack of proof showing ability to fund US trip</li>
                <li>GVI Solution: Detailed ITR analysis, liquid asset verification, minimum 3-6 months expense coverage demonstration</li>
              </ul>
            </li>
            <li><strong className={styles.strong}>DS-160 Form Errors or Inconsistencies</strong>
              <ul>
                <li>Single error in DS-160 can lead to immediate rejection</li>
                <li>GVI Solution: 100% accurate DS-160 filing with professional review and cross-verification</li>
              </ul>
            </li>
            <li><strong className={styles.strong}>Previous Immigration Violations</strong>
              <ul>
                <li>Prior overstays or visa violations</li>
                <li>GVI Solution: Address any prior issues with documented explanations and evidence of corrected behavior</li>
              </ul>
            </li>
            <li><strong className={styles.strong}>Unconvincing Interview Performance</strong>
              <ul>
                <li>Inability to clearly articulate travel purpose and return plans</li>
                <li>GVI Solution: Elite mock interview practice with realistic embassy environment simulation</li>
              </ul>
            </li>
            <li><strong className={styles.strong}>Incomplete or Inadequate Documentation</strong>
              <ul>
                <li>Missing critical supporting documents</li>
                <li>GVI Solution: Complete document checklist with gap analysis before submission</li>
              </ul>
            </li>
          </ol>
          <p>Global Visa Internationals specializes in preventing these rejections through thorough application preparation, expert interview coaching, and detailed profile audits.</p>

          <h2 id="categories" className={styles.subTitle}>US Tourist Visa Categories We Handle</h2>
          <h3 className={styles.subTitle}>B1 Visa (Business)</h3>
          <ul>
            <li>Attending business conferences and seminars</li>
            <li>Client meetings and negotiations</li>
            <li>Short-term professional training programs</li>
            <li>Exploring business opportunities in the US</li>
            <li>Participating in trade shows and exhibitions</li>
          </ul>

          <h3 className={styles.subTitle}>B2 Visa (Tourism & Medical)</h3>
          <ul>
            <li>Leisure travel and vacation in the United States</li>
            <li>Visiting family members and friends</li>
            <li>Specialized medical treatment at US healthcare facilities</li>
            <li>Participating in social events and recreational activities</li>
            <li>Tourism and sightseeing across American destinations</li>
          </ul>

          <h3 className={styles.subTitle}>Combined B1/B2 Visa</h3>
          <ul>
            <li>Mixed business and leisure travel purposes</li>
            <li>Most common visa category issued to Indian applicants</li>
            <li>Allows flexibility in travel activities</li>
          </ul>

          <h2 id="faq" className={styles.subTitle}>US Tourist Visa Frequently Asked Questions (2026)</h2>

          <details className="gvi-faq-item">
            <summary><h3>How long is a US tourist visa valid?</h3></summary>
          <p>US B1/B2 visas are typically issued for 10 years for Indian citizens, allowing multiple entries. Each visit can be up to 6 months (as determined by CBP officer at entry).</p>

          </details>

          <details className="gvi-faq-item">
            <summary><h3>Can I work on a US tourist visa?</h3></summary>
          <p>No. The B1/B2 visa strictly prohibits employment, paid performances, or enrolling in formal academic study programs.</p>

          </details>

          <details className="gvi-faq-item">
            <summary><h3>What is the US visa appointment wait time in Bangalore?</h3></summary>
          <p>As of early 2026, standard wait times range from 6-8 months. Global Visa Internationals can help secure earlier slots through our dedicated 24/7 cancellation monitoring system.</p>

          </details>

          <details className="gvi-faq-item">
            <summary><h3>Can Global Visa Internationals help with US visa rejection cases?</h3></summary>
          <p>Yes. We specialize in analyzing previous refusals, reviewing your previous DS-160 and interview transcript, identifying documentation gaps, and creating stronger reapplication strategies with improved documentation.</p>

          </details>

          <details className="gvi-faq-item">
            <summary><h3>Is travel insurance mandatory for US tourist visa?</h3></summary>
          <p>While not officially mandatory for visa approval, travel insurance is highly recommended and can strengthen your application by demonstrating travel preparedness and financial responsibility.</p>

          </details>

          <details className="gvi-faq-item">
            <summary><h3>What is the success rate with Global Visa Internationals?</h3></summary>
          <p>We maintain high approval rates even for complex cases including first-time international travelers, senior citizens, solo female travelers, and previously rejected applications through our comprehensive preparation approach.</p>

          </details>

          <details className="gvi-faq-item">
            <summary><h3>How early should I start my US visa application process?</h3></summary>
          <p>Given the 6-8 month appointment wait time in Bangalore, we recommend starting your US visa application process at least 10-12 months before your intended travel date.</p>

          </details>

          <details className="gvi-faq-item">
            <summary><h3>Do you provide post-visa services?</h3></summary>
          <p>Yes. Global Visa Internationals provides complete support including travel planning guidance, pre-departure orientation, and US arrival assistance.</p>
          </details>
          <hr />

          <section className="gvi-contact-section" aria-labelledby="contact">
          <h2 id="contact" className={styles.subTitle}>Start Your US Tourist Visa Journey with Global Visa Internationals</h2>
          <p>Don't let complex US visa procedures and 300+ day wait times delay your American dream. Global Visa Internationals offers comprehensive support from initial consultation to visa approval, with guaranteed service timelines.</p>

          <div className="gvi-contact-strip">
            <a href="https://wa.me/917022213466?text=Hi,%20I%20am%20looking%20for%20USA%20Visa%20assistance%20for%202026" className="gvi-tile gvi-tile-wa">
              <span className="gvi-tile-icon">💬</span>
              <span><b>WhatsApp</b><small>Chat with a visa expert</small></span>
            </a>
            <a href="tel:+917022213466" className="gvi-tile gvi-tile-call">
              <span className="gvi-tile-icon">📞</span>
              <span><b>Call us</b><small>+91-7022213466</small></span>
            </a>
            <a href="mailto:operations@globalvisainternationals.com" className="gvi-tile gvi-tile-mail">
              <span className="gvi-tile-icon">✉️</span>
              <span><b>Email us</b><small>operations@globalvisainternationals.com</small></span>
            </a>
          </div>

          <h3 className={styles.subTitle}>📞 Contact Global Visa Internationals Today</h3>
          <p><strong className={styles.strong}>Free Eligibility Check for 2026:</strong></p>
          <ul className="gvi-cols">
            <li>Understand your US visa approval chances</li>
            <li>Profile evaluation and improvement recommendations</li>
            <li>Risk assessment and success probability analysis</li>
          </ul>

          <div className={styles.contactInfo}>
            <h4 className={styles.subTitle}>Our Office: Global Visa Internationals (GVI)</h4>
            <p>GF-9, Business Point, 137 Brigade Road

              <br />
              Bangalore – 560025, Karnataka</p>

            <h4 className={styles.subTitle}>Get in Touch:</h4>
            <ul>
              <li>📞 <a href="https://wa.me/917022213466?text=Hi,%20I%20am%20looking%20for%20USA%20Visa%20assistance%20for%202026" className="gvi-cta-link">Click to Chat on WhatsApp</a></li>
              <li>📧 Email: operations@globalvisainternationals.com</li>
              <li>🌐 Visit our website for instant consultation</li>
              <li>📝 <a href="#apply-form" className="gvi-cta-link">Apply Now</a></li>
              <li>✅ <a href="https://wa.me/917022213466?text=Hi,%20I%20would%20like%20a%20free%20eligibility%20check%20for%20a%20US%20B1/B2%20Visa" className="gvi-cta-link">Get Your Free Eligibility Check</a></li>
            </ul>
          </div>

          <h3 className={styles.subTitle}>Why Thousands Choose Global Visa Internationals</h3>
          <ul className="gvi-cols">
            <li>10+ Years Experience in US visa processing</li>
            <li>High Approval Rates for complex and refusal cases</li>
            <li>Fast-Track Appointment Booking with 24/7 monitoring</li>
            <li>100% Accurate DS-160 Filing - zero tolerance for errors</li>
            <li>Elite Interview Preparation with realistic mock sessions</li>
            <li>Transparent Pricing with no hidden costs</li>
            <li>Service Guarantee with committed timelines</li>
            <li>Central Bangalore Location on Brigade Road</li>
          </ul>

          <hr />

          {/* <address className={styles.address}>
            <strong className={styles.strong}>Global Visa Internationals (GVI)</strong><br />
            GF-9, Business Point, 137 Brigade Road,<br />
            Bangalore – 560025, Karnataka<br />
            <br />
            <strong className={styles.strong}>Start Your American Journey Today:</strong><br />
            <a href="https://wa.me/917022213466" className={styles.callButton}>
              📞 Click to Chat on WhatsApp
            </a><br />
            Email: <a href="mailto:operations@globalvisainternationals.com">
              operations@globalvisainternationals.com
            </a>
          </address> */}
          </section>

          <h2 id="faq-more" className={styles.subTitle}>More US Visa Questions Answered</h2>

          <div className="faq-container">

            <details className="gvi-faq-item">
              <summary><h3>How do I get a US visa?</h3></summary>
            <p>To obtain a US visa, you must first identify the correct visa type (e.g., Tourist B1/B2 or Student F1). You then need to complete the DS-160 form online, pay the application fee, and schedule an interview at the nearest US Embassy or Consulate.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> We make the process simple and error-free. Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>How do I apply for a US visa from the UK?</h3></summary>
            <p>Residents in the UK must complete the DS-160 form, pay the fee via the official appointment service, and attend an in-person interview at the US Embassy in London or the Consulate General in Belfast.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> Applying from the UK? We can guide you. Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>What does a US visa look like?</h3></summary>
            <p>A US visa is a foil sticker placed inside your passport. It features your photograph on the left, your biographical data, the visa class (e.g., B1/B2), and a red visa number printed on the bottom right.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> Ensure your visa details are correct. Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>How is the US visa situation in Nigeria?</h3></summary>
            <p>Demand for US visas in Nigeria is currently very high. Appointment wait times for visitor visas in Abuja and Lagos can be lengthy. It is highly recommended to apply well in advance of your travel date.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> We monitor appointment slots daily. Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>How do I check my US visa status?</h3></summary>
            <p>You can check your status on the CEAC (Consular Electronic Application Center) website using the "Check My Visa Application Status" tool. You will need your DS-160 barcode number and interview location.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> Let us track your application for you. Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>Where do I get a US visa?</h3></summary>
            <p>You must apply and attend an interview at the US Embassy or Consulate located in your country of residence. You cannot get a visa upon arrival at a US airport.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> Find the right application center with Global Visa Internationals. Contact us at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>Which US visa is the easiest to get?</h3></summary>
            <p>The B1/B2 Tourist Visa is the most common visa type. However, "ease" of approval depends entirely on your ability to prove strong financial and social ties to your home country.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> Maximize your approval chances with our guidance. Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>Which US visa do I need?</h3></summary>
            <p>The type of visa depends on your purpose of travel:</p>
            <ul>
              <li><strong className={styles.strong}>Tourism/Medical:</strong> B2 Visa</li>
              <li><strong className={styles.strong}>Business Meetings:</strong> B1 Visa</li>
              <li><strong className={styles.strong}>Study:</strong> F1 or M1 Visa</li>
              <li><strong className={styles.strong}>Work:</strong> H1B or L1 Visa (Requires employer sponsorship)</li>
            </ul>
            <p><strong className={styles.strong}>Expert Help:</strong> Unsure which category fits you? Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>When is US visa stamping in US available?</h3></summary>
            <p>Domestic visa renewal (stamping inside the USA) was a pilot program that ended in early 2024. Currently, most non-immigrants must leave the US and visit a US Consulate abroad to get a new visa stamp in their passport.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> For the latest renewal updates, Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>Where is the US visa number?</h3></summary>
            <p>The visa number is the Red Number (usually 8 characters) printed on the bottom right-hand side of the visa foil in your passport.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> Questions about your documents? Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>Can US visa holders work in Saudi Arabia?</h3></summary>
            <p>No. A US visitor visa does not grant you the right to work in Saudi Arabia. You must obtain a Saudi Work Visa sponsored by a local employer.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> Need a work visa? Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>Can US visa holders travel to Saudi Arabia (E-Visa)?</h3></summary>
            <p>Yes. Holders of a valid US tourist or business visa can often obtain a Saudi E-Visa or Visa on Arrival, provided the US visa is still valid and has been used at least once to enter the USA.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> Plan your multi-country itinerary with Global Visa Internationals. Contact us at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>How do I apply for a US tourist visa from India online?</h3></summary>
            <p>To apply online, you must follow these steps:</p>
            <ol>
              <li>Complete the DS-160 form on the CEAC website.</li>
              <li>Create a profile on the CGI Federal/US Travel Docs system.</li>
              <li>Pay the visa application fee.</li>
              <li>Schedule two appointments: one for biometrics (VAC) and one for the interview.</li>
            </ol>
            <p><strong className={styles.strong}>Expert Help:</strong> Avoid errors and delays. Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>Which companies offer the fastest US tourist visa processing services in India?</h3></summary>
            <p>Processing times are set by the Embassy, but experienced consultancies can speed up your application preparation and monitor slots for cancellations to get you an earlier interview.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> For the fastest professional assistance, Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>What are the fees for a US tourist visa application through official channels?</h3></summary>
            <p>The application fee for a US Visitor Visa (B1/B2) is $185 USD (payable in INR at the consular exchange rate). This fee is non-refundable.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> For fee payment guidance, Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>Can I book a US tourist visa appointment through a mobile app?</h3></summary>
            <p>There is no official government mobile app for booking. However, the official website is mobile-responsive.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> Let us manage the booking portal for you. Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>What travel agencies provide end-to-end US tourist visa assistance in India?</h3></summary>
            <p>For comprehensive support—including form filling, document verification, and mock interviews—specialized visa firms are recommended over general travel agents.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> For end-to-end premium support, Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>Which courier services are recommended for sending US tourist visa documents?</h3></summary>
            <p>The US Embassy in India officially partners with Blue Dart for document submission (Dropbox) and passport delivery.</p>
            <p><strong className={styles.strong}>Expert Help:</strong> For logistics support, Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>What documents do I need to submit for a US tourist visa interview in India?</h3></summary>
            <p>You generally need the following documents:</p>
            <ul>
              <li>Original Passport (Current and Old)</li>
              <li>DS-160 Confirmation Page</li>
              <li>Appointment Confirmation Letter</li>
              <li>Financial Proofs (Bank statements, Tax returns/ITR)</li>
              <li>Employment Proof and Leave Letter</li>
            </ul>
            <p><strong className={styles.strong}>Expert Help:</strong> Get a checklist tailored to your profile. Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>Are there any premium services to expedite my US tourist visa interview scheduling?</h3></summary>
            <p>The US Consulate does not sell "Premium" or "VIP" slots. Earlier slots only become available through cancellations or emergency requests (medical/humanitarian only).</p>
            <p><strong className={styles.strong}>Expert Help:</strong> We monitor the system daily for earlier slots. Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>

            </details>

            <details className="gvi-faq-item">
              <summary><h3>Where can I find authorized visa application centers for US tourist visas near me?</h3></summary>
            <p>In India, the Visa Application Centers (VAC) and Consulates are located in:</p>
            <ul>
              <li>New Delhi</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Hyderabad</li>
              <li>Kolkata</li>
            </ul>
            <p><strong className={styles.strong}>Expert Help:</strong> Need help choosing a center? Contact Global Visa Internationals at <a href="https://wa.me/917022213466">+91 70222 13466</a>.</p>
            </details>
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