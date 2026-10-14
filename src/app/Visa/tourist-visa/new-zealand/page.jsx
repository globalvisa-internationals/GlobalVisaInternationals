import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import Script from "next/script";


export const metadata = {
  title: "New Zealand Tourist Visa Consultants in Bangalore | Global Visa Internationals",
  description:
    "Apply for a New Zealand Tourist Visa with expert assistance from Global Visa Internationals. 11+ years of experience in smooth documentation, faster approvals, and travel guidance.",
  keywords:
    "New Zealand tourist visa, New Zealand visa consultants in Bangalore, New Zealand visitor visa from India, how to apply New Zealand visa, New Zealand travel visa assistance",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://www.globalvisainternationals.com/Visa/tourist-visa/new-zealand",
  },
  openGraph: {
    type: "website",
    title:
      "Apply for New Zealand Tourist Visa from India | Global Visa Internationals",
    description:
      "Trusted visa agents for New Zealand in Bangalore. Expert documentation, interview prep and end-to-end visa file handling.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/new-zealand",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/New-Zealand-Tourist-Visa-Assistance-GVI.jpg",
        alt: "New Zealand Tourist Visa Assistance",
      },
    ],
    siteName: "Global Visa Internationals",
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalvisainternationals",
    title: "New Zealand Tourist Visa Experts - Global Visa Internationals",
    description:
      "Planning a trip to New Zealand? Get full visa support from trusted consultants in Bangalore.",
    images: [
      "https://www.globalvisainternationals.com/tourist-visa/New-Zealand-Tourist-Visa-Assistance-GVI.jpg",
    ],
  },
};

export default function NewZealand() {

  const pageUrl = metadata.alternates.canonical;

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
        name: "New Zealand Tourist Visa",
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
      "Expert New Zealand Tourist Visa Consultants in Bangalore. Complete documentation, application submission, and personalized guidance.",
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

  const touristAttractionsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Tourist Attractions in New Zealand",
    itemListElement: [
      {
        "@type": "TouristAttraction",
        name: "Milford Sound",
        description:
          "A stunning fjord in Fiordland National Park, famous for waterfalls and boat cruises.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/01/Milford_Sound_Panorama.jpg",
        url: "https://www.newzealand.com/in/milford-sound/",
      },
      {
        "@type": "TouristAttraction",
        name: "Rotorua Geothermal Parks",
        description:
          "Known for geysers, hot springs, and Maori culture experiences in the North Island.",
        image:
          "https://en.wikipedia.org/wiki/Champagne_Pool#/media/File:ChampagnePool-Wai-O-Tapu_rotated_MC.jpg",
        url: "https://en.wikipedia.org/wiki/Champagne_Pool",
      },
      {
        "@type": "TouristAttraction",
        name: "Hobbiton Movie Set",
        description:
          "The iconic movie set from The Lord of the Rings and The Hobbit, located in Matamata.",
        image:
          "https://en.wikipedia.org/wiki/Hobbiton_Movie_Set#/media/File:Waterhouse_Lake_Front.jpg",
        url: "https://en.wikipedia.org/wiki/Hobbiton_Movie_Set",
      },
      {
        "@type": "TouristAttraction",
        name: "Mount Cook National Park",
        description:
          "Home to New Zealand's highest mountain, perfect for hiking, stargazing, and photography.",
        image:
          "https://en.wikipedia.org/wiki/Aoraki_/_Mount_Cook_National_Park#/media/File:Hooker_Valley_in_front_of_Mount_Cook_Range.jpg",
        url: "https://en.wikipedia.org/wiki/Aoraki_/_Mount_Cook_National_Park",
      },
      {
        "@type": "TouristAttraction",
        name: "Franz Josef Glacier",
        description:
          "A spectacular glacier on the West Coast, offering guided hikes and helicopter tours.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3a/Franz_josef_Glacier_LC0250.jpg",
        url: "https://en.wikipedia.org/wiki/Franz_Josef_Glacier",
      },
    ],
  };
  const faqs = [
    {
      q: "How long can I stay in New Zealand on a visitor visa?",
      a: "A New Zealand Visitor Visa typically allows you to stay for up to 9 months within an 18-month period. Eligible applicants may be issued a multiple-entry visa with a validity of up to 5 years, but you can only stay for the authorised period on each visit.",
    },
    {
      q: "What documents are required for a New Zealand tourist visa from India?",
      a: "You typically need a passport valid for at least three months beyond your departure date with at least one blank page, original bank statements for the last 6 months (stamped by the bank), ITRs for the last 2-3 years, an employer NOC or leave approval letter (or business registration documents if self-employed), a day-by-day itinerary, hotel reservations, and an invitation letter if staying with family or friends.",
    },
    {
      q: "How much bank balance is required for a New Zealand visitor visa?",
      a: "We recommend maintaining a minimum balance of ₹1.5 - ₹2.5 lakh (approx. NZD$3,000 - $5,000). Avoid large, unexplained transactions in the months before applying.",
    },
    {
      q: "How much does a New Zealand tourist visa cost from India?",
      a: "The Visitor Visa application fee is approximately NZD$211 (about ₹10,800) and the International Visitor Conservation and Tourism Levy (IVL) is NZD$100 (about ₹5,100). Fees are subject to change, so confirm the latest amounts with Immigration New Zealand. Service charges vary based on the services you choose.",
    },
    {
      q: "How long does New Zealand visa processing take from India?",
      a: "Standard processing typically takes 20 to 25 working days after submission to Immigration New Zealand, and can extend to 30-35 working days in peak holiday seasons. Once we receive your documents, we finalise your file within 3-5 working days.",
    },
    {
      q: "What are the common reasons for New Zealand visa rejection?",
      a: "The most common reasons are incomplete or mismatched documents, insufficient proof of funds, an unclear purpose of travel and a lack of strong ties to India. A careful document review and a well-prepared itinerary help avoid these issues.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  /* Visual enhancement layer (look & feel only), scoped to .gvi-nz */
  const enhancedCss = `
div.gvi-nz.gvi-nz.gvi-nz {
  --gvi-primary: #0f6b4f;
  --gvi-primary-dark: #0a4a37;
  --gvi-accent: #d4a017;
  --gvi-ink: #1f2933;
  --gvi-muted: #52606d;
  --gvi-soft: #edf7f2;
  --gvi-line: #e4e7eb;
  --gvi-radius: 14px;
  color: var(--gvi-ink);
  line-height: 1.75;
  font-size: 1.02rem;
}

/* Headings */
div.gvi-nz.gvi-nz.gvi-nz h1 {
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
div.gvi-nz.gvi-nz.gvi-nz h2 {
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
div.gvi-nz.gvi-nz.gvi-nz h3 {
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
div.gvi-nz.gvi-nz.gvi-nz p { margin: 0 0 1.1rem; color: var(--gvi-muted); }
div.gvi-nz.gvi-nz.gvi-nz strong, div.gvi-nz.gvi-nz.gvi-nz b { color: var(--gvi-ink); font-weight: 700; }
div.gvi-nz.gvi-nz.gvi-nz a:not([class]) { color: var(--gvi-primary); font-weight: 600; }
div.gvi-nz.gvi-nz.gvi-nz [class*="smallText"] { font-size: 0.85rem; color: var(--gvi-muted); font-style: italic; }

/* Lists: one compact card per list, light dividers between rows */
div.gvi-nz.gvi-nz.gvi-nz ul {
  list-style: none;
  padding: 0.3rem 1.1rem;
  margin: 0 0 1.4rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-nz.gvi-nz.gvi-nz ul li {
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
div.gvi-nz.gvi-nz.gvi-nz ul li:last-child { border-bottom: 0; }
div.gvi-nz.gvi-nz.gvi-nz ul li::before {
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
div.gvi-nz.gvi-nz.gvi-nz ul[class*="checkList"] li::before {
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
div.gvi-nz.gvi-nz.gvi-nz ul[class*="countryGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  padding: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
}
div.gvi-nz.gvi-nz.gvi-nz ul[class*="countryGrid"] li {
  padding: 0.55rem 0.9rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 10px;
  color: var(--gvi-ink);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}
div.gvi-nz.gvi-nz.gvi-nz ul[class*="countryGrid"] li:last-child { border-bottom: 1px solid var(--gvi-line); }
div.gvi-nz.gvi-nz.gvi-nz ul[class*="countryGrid"] li::before { display: none; }
div.gvi-nz.gvi-nz.gvi-nz ul[class*="countryGrid"] li a {
  display: block;
  color: var(--gvi-primary);
  font-weight: 700;
  text-decoration: none;
}
div.gvi-nz.gvi-nz.gvi-nz ul[class*="countryGrid"] li:hover { border-color: var(--gvi-primary); }

/* Visa type cards */
div.gvi-nz.gvi-nz.gvi-nz [class*="cardContainer"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 0 0 1.8rem;
}
div.gvi-nz.gvi-nz.gvi-nz [class*="cardContainer"] > div {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 4px solid var(--gvi-accent);
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.2rem 0.4rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.06);
}
div.gvi-nz.gvi-nz.gvi-nz [class*="cardContainer"] h3 { margin: 0 0 0.6rem; padding: 0; background: none; font-size: 1.05rem; }

/* Schengen countries card */
div.gvi-nz.gvi-nz.gvi-nz [class*="schengenCard"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #c9e4d8;
  border-radius: 18px;
  padding: 1.4rem 1.4rem 0.6rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 6px 18px rgba(15, 107, 79, 0.08);
}
div.gvi-nz.gvi-nz.gvi-nz [class*="cardHeader"] h2 { margin-top: 0; }
div.gvi-nz.gvi-nz.gvi-nz [class*="cardSubtitle"] { margin-bottom: 1rem; }
div.gvi-nz.gvi-nz.gvi-nz [class*="countryList"] h3, div.gvi-nz.gvi-nz.gvi-nz [class*="highlightSection"] h3 { background: transparent; padding-left: 0; }
div.gvi-nz.gvi-nz.gvi-nz [class*="highlightGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1rem;
}
div.gvi-nz.gvi-nz.gvi-nz [class*="highlightItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.8rem 1rem;
}
div.gvi-nz.gvi-nz.gvi-nz [class*="countryName"] { display: block; font-weight: 800; color: var(--gvi-primary); }
div.gvi-nz.gvi-nz.gvi-nz [class*="countryInfo"] { margin: 0.2rem 0 0; font-size: 0.9rem; }

/* Highlight callout */
div.gvi-nz.gvi-nz.gvi-nz [class*="highlightBox"] {
  background: #fff8e6;
  border: 1px solid #f5d98a;
  border-left: 5px solid #f0b429;
  border-radius: 12px;
  padding: 0.4rem 1.2rem 0.6rem;
  margin: 0 0 1.8rem;
}
div.gvi-nz.gvi-nz.gvi-nz [class*="highlightBox"] h3 { background: transparent; padding-left: 0; color: #5c4a12; }

/* Step cards (h3 + p pairs, markup unchanged) */
div.gvi-nz.gvi-nz.gvi-nz [class*="stepContainer"] h3 {
  margin: 0.9rem 0 0;
  background: var(--gvi-soft);
  border: 1px solid #c9e4d8;
  border-bottom: 0;
  border-left: 5px solid var(--gvi-accent);
  border-radius: 12px 12px 0 0;
  padding: 0.6rem 1rem;
  font-size: 1.05rem;
}
div.gvi-nz.gvi-nz.gvi-nz [class*="stepContainer"] p {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 0;
  border-radius: 0 0 12px 12px;
  padding: 0.8rem 1rem;
  margin: 0;
}

/* Tables */
.gvi-table-wrap, div.gvi-nz.gvi-nz.gvi-nz [class*="tableWrapper"] {
  overflow-x: auto;
  margin: 0 0 1.4rem;
  border: 1px solid var(--gvi-line);
  border-radius: var(--gvi-radius);
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
  background: #fff;
}
div.gvi-nz.gvi-nz.gvi-nz table { width: 100%; border-collapse: collapse; background: #fff; min-width: 560px; margin: 0; }
div.gvi-nz.gvi-nz.gvi-nz th {
  background: linear-gradient(135deg, var(--gvi-primary), var(--gvi-primary-dark));
  color: #fff;
  text-align: left;
  padding: 0.8rem 1rem;
  font-weight: 700;
}
div.gvi-nz.gvi-nz.gvi-nz td { padding: 0.8rem 1rem; border-top: 1px solid var(--gvi-line); color: var(--gvi-muted); }
div.gvi-nz.gvi-nz.gvi-nz tbody tr:nth-child(even) td { background: #f8fafc; }
div.gvi-nz.gvi-nz.gvi-nz td:first-child { font-weight: 600; color: var(--gvi-ink); }
div.gvi-nz.gvi-nz.gvi-nz [class*="tableWrapper"] > p { margin: 0; padding: 0.7rem 1rem; }

/* Services block */
div.gvi-nz.gvi-nz.gvi-nz [class*="servicesSection"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #c9e4d8;
  border-radius: 18px;
  padding: 0.4rem 1.4rem 1.4rem;
  margin: 2rem 0;
}
div.gvi-nz.gvi-nz.gvi-nz [class*="serviceGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.9rem;
  margin: 1rem 0 1.4rem;
}
div.gvi-nz.gvi-nz.gvi-nz [class*="serviceItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.9rem 1.1rem 0.2rem;
  box-shadow: 0 2px 8px rgba(16, 24, 40, 0.05);
}
div.gvi-nz.gvi-nz.gvi-nz [class*="serviceItem"] b { display: block; color: var(--gvi-primary); margin-bottom: 0.2rem; }
div.gvi-nz.gvi-nz.gvi-nz [class*="ctaContainer"] {
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  text-align: center;
  box-shadow: 0 12px 28px rgba(10, 74, 55, 0.28);
}
div.gvi-nz.gvi-nz.gvi-nz [class*="ctaContainer"] p { color: #fff; font-weight: 700; font-size: 1.15rem; margin: 0 0 0.9rem; }
div.gvi-nz.gvi-nz.gvi-nz a[class*="primaryButton"] {
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
div.gvi-nz.gvi-nz.gvi-nz a[class*="primaryButton"]:hover { transform: translateY(-2px); }

/* Table of contents */
div.gvi-nz.gvi-nz.gvi-nz .gvi-toc {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-left: 5px solid var(--gvi-primary);
  border-radius: var(--gvi-radius);
  padding: 1rem 1.3rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
}
div.gvi-nz.gvi-nz.gvi-nz .gvi-toc ol { margin: 0.6rem 0 0; padding-left: 1.3rem; columns: 2 260px; column-gap: 2rem; }
div.gvi-nz.gvi-nz.gvi-nz .gvi-toc li { margin: 0.25rem 0; color: var(--gvi-muted); }
div.gvi-nz.gvi-nz.gvi-nz .gvi-toc a { color: var(--gvi-primary-dark); text-decoration: none; font-weight: 600; }
div.gvi-nz.gvi-nz.gvi-nz .gvi-toc a:hover { text-decoration: underline; }

/* Quick facts strip */
div.gvi-nz.gvi-nz.gvi-nz .gvi-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.9rem;
  margin: 1.4rem 0 2rem;
}
div.gvi-nz.gvi-nz.gvi-nz .gvi-fact {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #c9e4d8;
  border-radius: var(--gvi-radius);
  padding: 1rem 1.1rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(15, 107, 79, 0.08);
}
div.gvi-nz.gvi-nz.gvi-nz .gvi-fact b { display: block; font-size: 1.3rem; font-weight: 800; color: var(--gvi-primary); line-height: 1.2; }
div.gvi-nz.gvi-nz.gvi-nz .gvi-fact span { display: block; margin-top: 0.25rem; font-size: 0.85rem; color: var(--gvi-muted); }

/* In-page call-to-action band */
div.gvi-nz.gvi-nz.gvi-nz .gvi-cta-band {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--gvi-soft);
  border: 1px solid #c9e4d8;
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.4rem;
  margin: 1.6rem 0;
}
div.gvi-nz.gvi-nz.gvi-nz .gvi-cta-band p { margin: 0; color: var(--gvi-ink); font-weight: 600; flex: 1 1 260px; }
div.gvi-nz.gvi-nz.gvi-nz .gvi-cta-actions { display: flex; flex-wrap: wrap; gap: 0.6rem; }
div.gvi-nz.gvi-nz.gvi-nz a.gvi-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff !important;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 8px 18px rgba(15, 107, 79, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
div.gvi-nz.gvi-nz.gvi-nz a.gvi-btn.gvi-btn-wa {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  box-shadow: 0 8px 18px rgba(18, 140, 126, 0.3);
}
div.gvi-nz.gvi-nz.gvi-nz a.gvi-btn:hover { transform: translateY(-2px); }

/* FAQ accordion (same questions and answers, collapsed to stay compact) */
div.gvi-nz.gvi-nz.gvi-nz .faq-section { margin: 0 0 1.5rem; }
div.gvi-nz.gvi-nz.gvi-nz details.gvi-faq-item {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  margin: 0 0 0.6rem;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-nz.gvi-nz.gvi-nz details.gvi-faq-item summary {
  list-style: none;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 2.6rem 0.75rem 1rem;
}
div.gvi-nz.gvi-nz.gvi-nz details.gvi-faq-item summary::-webkit-details-marker { display: none; }
div.gvi-nz.gvi-nz.gvi-nz details.gvi-faq-item summary::after {
  content: "+";
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--gvi-primary);
}
div.gvi-nz.gvi-nz.gvi-nz details.gvi-faq-item[open] summary::after { content: "–"; }
div.gvi-nz.gvi-nz.gvi-nz details.gvi-faq-item summary h3 {
  display: block;
  margin: 0;
  padding: 0;
  background: none;
  font-size: 1rem;
  color: var(--gvi-ink);
}
div.gvi-nz.gvi-nz.gvi-nz details.gvi-faq-item[open] summary { border-bottom: 1px solid #eef0f3; }
div.gvi-nz.gvi-nz.gvi-nz details.gvi-faq-item p { margin: 0; padding: 0.8rem 1rem 0.9rem; }

#apply-form { scroll-margin-top: 90px; }

@media (max-width: 640px) {
  div.gvi-nz.gvi-nz.gvi-nz { font-size: 0.98rem; }
  div.gvi-nz.gvi-nz.gvi-nz h2 { margin-top: 2.2rem; }
}

div.gvi-nz.gvi-nz.gvi-nz a[class*="ctaButton"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff !important;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 10px 22px rgba(15, 107, 79, 0.3);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
div.gvi-nz.gvi-nz.gvi-nz a[class*="ctaButton"]:hover { transform: translateY(-2px); }
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionsJsonLd) }}
        />

      </Head>

      {/* Scoped visual enhancements */}
      <style dangerouslySetInnerHTML={{ __html: enhancedCss }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className={styles.imageContainer}>
        <img src="/tourist-visa/New-Zealand-Tourist-Visa-Assistance-GVI.jpg" alt="New Zealand tourist visa assistance from India - Global Visa Internationals" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>

        <div className={`${styles.VisaData} gvi-nz`}>
          <h1 className={styles.Title}>New Zealand Tourist Visa from India (2026): Documents, Fees & Process</h1>

          {/* Quick facts (values taken from the sections below) */}
          <div className="gvi-facts">
            <div className="gvi-fact"><b>9 months</b><span>Max stay in an 18-month period</span></div>
            <div className="gvi-fact"><b>20-25 days</b><span>Typical INZ processing (working days)</span></div>
            <div className="gvi-fact"><b>NZD$211</b><span>Visitor visa fee (approx.)</span></div>
            <div className="gvi-fact"><b>From ₹5,999</b><span>GVI assistance package</span></div>
          </div>

          <nav aria-label="Table of contents" className="gvi-toc">
            <strong>On this page</strong>
            <ol>
              <li><a href="#duration">Visa duration rule</a></li>
              <li><a href="#documents">Documents & requirements</a></li>
              <li><a href="#fees">Visa fees</a></li>
              <li><a href="#rejection">Rejection reasons</a></li>
              <li><a href="#processing-time">Processing time</a></li>
              <li><a href="#process">Application process</a></li>
              <li><a href="#pricing">Transparent pricing</a></li>
              <li><a href="#why-gvi">Why choose GVI</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          <section>
            <h2 id="overview" className={styles.subTitle}>✈ Travel to New Zealand with a Visitor Visa</h2>
            <p>
              Planning a trip to New Zealand? The New Zealand Visitor Visa allows Indian travelers to visit for tourism, to see family, or for short-term business purposes. At Global Visa Internationals (GVI), we simplify the process with expert guidance, transparent support, and end-to-end visa file handling. We specialize in providing comprehensive <strong className={styles.strong}>New Zealand visa assistance for Indians</strong>.
            </p>
          </section>

          <div className={styles.section}>
            <section>
              <h2 id="processing-overview" className={styles.subTitle}>Visa Processing Overview</h2>
              <p>
                Global Visa Internationals (GVI) will manage the entire documentation process to ensure that your <strong className={styles.strong}>New Zealand visa application from India</strong> meets the expectations of Immigration New Zealand (INZ) and that your travel purpose is clearly and professionally represented. We are a trusted <strong className={styles.strong}>New Zealand visa consultant in India</strong>.
              </p>
            </section>

            <section>
              <h3 className={styles.subTitle}>Our Services Include:</h3>
              <ul>
                <li>Online NZeTA application assistance</li>
                <li>Covering letter and documentation preparation</li>
                <li>Personalized New Zealand tourist visa checklist and guidance</li>
                <li>Providing accepted samples for the required documents</li>
                <li>Verification of documentation</li>
                <li>Complete walk-through of the New Zealand tourist visa process</li>
              </ul>
            </section>

            <section>
              <h3 className={styles.subTitle}>Timeline:</h3>
              <p>
                Processing will begin once we receive 100% of the documents as per our checklist. The document finalization will take approximately 3 to 5 working days. This is an essential first step in the overall <strong className={styles.strong}>New Zealand visa processing time from India</strong>.
              </p>
            </section>
          </div>

          <section>
            <h2 id="duration" className={styles.subTitle}>New Zealand Visa Duration Rule</h2>
            <p>
              A New Zealand Visitor Visa typically allows you to stay for up to 9 months within an 18-month period. A <strong className={styles.strong}>New Zealand multiple entry visa for Indians</strong> may be issued with a validity of up to 5 years for eligible applicants. Note that even with a multiple-entry visa, you can only stay for the authorized period on each visit. Overstaying may lead to fines, entry bans, or refusal of future visa applications.
            </p>
            <p>
              With GVI, you'll never miscalculate your stay—we ensure full compliance with New Zealand immigration rules.
            </p>
          </section>

          <section>
            <h2 id="documents" className={styles.subTitle}>New Zealand Visitor Visa Documents & Requirements for Indian Applicants</h2>
            <p>
              Before applying, ensure you meet the <strong className={styles.strong}>New Zealand visa eligibility for Indians</strong>. If these criteria are met, Global Visa Internationals (GVI) will accept your case, manage the entire documentation process, and guide you through submission. We provide a detailed <strong className={styles.strong}>New Zealand tourist visa document checklist</strong>.
            </p>
          </section>

          <section>
            <h3 className={styles.subTitle}>1. Valid Passport & Travel History</h3>
            <ul>
              <li>
                <b className={styles.strong}>Valid Passport:</b> Must be valid for at least three months beyond your intended departure date from New Zealand, with at least one blank page. We guide you on all <strong className={styles.strong}>New Zealand visa passport requirements</strong>.
              </li>
              <li>
                <b className={styles.strong}>Travel History:</b> Previous international travel to countries like Australia, UK, US, or Canada strengthens your application. GVI helps you highlight these to strengthen your New Zealand visa application.
              </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>2. Financial Proof: Bank Statements & Funds</h3>
            <p>
              You must prove you have sufficient funds to support your trip without working. Immigration New Zealand needs to be convinced you can support your entire stay. We recommend maintaining a minimum balance of ₹1.5-2.5 lakh (or approx. NZD$3,000-$5,000) in your bank account. This is a key part of the <strong className={styles.strong}>proof of funds for New Zealand visitor visa</strong>. Avoid any large, unexplained transactions in the months leading up to your application.
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Bank Statements:</b> Submit original bank statements for the last 6 months, stamped by the bank. We advise on the <strong className={styles.strong}>New Zealand tourist visa bank statement requirements</strong>.
              </li>
              <li>
                <b className={styles.strong}>Income Tax Returns (ITR):</b> Provide ITRs for the last 2-3 years to prove a stable income source.
              </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>3. Employment & Professional Documentation</h3>
            <ul>
              <li>
                <b className={styles.strong}>Employees:</b> You must provide a Leave Approval Letter (NOC) from your employer on company letterhead, specifying your position, joining date, and approved leave dates.
              </li>
              <li>
                <b className={styles.strong}>Business Owners/Self-Employed:</b> Submit your business registration license (GST certificate/partnership deed) and last 2-3 years' ITRs. We also recommend a brief business profile. This also applies for <strong className={styles.strong}>New Zealand visa for retired persons</strong>.
              </li>
              <li>
                <b className={styles.strong}>Students:</b> Provide an enrolment letter and NOC from your school/university. We also assist with <strong className={styles.strong}>New Zealand tourist visa for minors</strong>.
              </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>4. Travel & Accommodation Proof</h3>
            <ul>
              <li>
                <b className={styles.strong}>Flight & Hotel Bookings:</b> Provide a detailed day-by-day travel itinerary covering your entire stay. It's recommended to have confirmed return flight tickets and hotel reservations.
              </li>
              <li>
                <b className={styles.strong}>Accommodation Proof:</b> Provide confirmed hotel reservations covering your entire stay. If staying with a friend or relative, you will need a <strong className={styles.strong}>New Zealand visa invitation letter</strong> and proof of their New Zealand address and residency status. We assist with applications for a <strong className={styles.strong}>New Zealand visa for family</strong> and <strong className={styles.strong}>New Zealand visa for parents</strong>.
              </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>5. Visa Application Form & Itinerary</h3>
            <p>
              A well-written day-by-day itinerary is crucial for your New Zealand visa application. It should include your travel plans, places to visit, and proof of your strong ties to India (e.g., family, job). Our experts draft a professional <strong className={styles.strong}>New Zealand tourist visa itinerary sample</strong> for every client to maximize their chances of success.
            </p>
          </section>

          <div className="gvi-cta-band">
            <p>Not sure if your documents and funds are enough? Get a free eligibility check.</p>
            <div className="gvi-cta-actions">
              <a href="#apply-form" className="gvi-btn">Get Free Eligibility Check</a>
              <a href="https://wa.me/917022213466?text=Hi,%20I%20would%20like%20a%20free%20eligibility%20check%20for%20a%20New%20Zealand%20Tourist%20Visa" className="gvi-btn gvi-btn-wa">Chat on WhatsApp</a>
            </div>
          </div>

          <section>
            <h2 id="fees" className={styles.subTitle}>New Zealand Tourist Visa Fees from India</h2>
            <p>
              New Zealand visa fees are subject to change, so please confirm the latest amounts with Immigration New Zealand. The fees listed below are approximate and do not include additional services. We provide transparent guidance on the <strong className={styles.strong}>New Zealand tourist visa cost in rupees</strong>.
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Visitor Visa Application Fee:</b> NZD$211 (approx. ₹10,800)
              </li>
              <li>
                <b className={styles.strong}>NZeTA (if applicable):</b> NZD$17 (approx. ₹870)
              </li>
              <li>
                <b className={styles.strong}>International Visitor Conservation and Tourism Levy (IVL):</b> NZD$100 (approx. ₹5,100)
              </li>
              <li>
                <b className={styles.strong}>Service Charges:</b> Vary based on services availed (e.g., documentation assistance, consultation, etc.)
              </li>
            </ul>
          </section>

          <section>
            <h2 id="rejection" className={styles.subTitle}>Common Reasons for New Zealand Visa Rejection & How We Solve Them</h2>
            <p>
              Visa rejections are often a result of simple mistakes. Our structured process is designed to eliminate these common issues. We help you understand the most frequent <strong className={styles.strong}>New Zealand tourist visa rejection reasons</strong>.
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Incomplete/Mismatched Documents:</b> We perform a professional document review as per INZ standards to ensure everything is perfect.
              </li>
              <li>
                <b className={styles.strong}>Insufficient Proof of Funds:</b> We advise you on the exact financial requirements and review your bank statements to ensure compliance.
              </li>
              <li>
                <b className={styles.strong}>Unclear Purpose of Travel:</b> Our expert-prepared itineraries clearly explain your travel plans and ties to India.
              </li>
              <li>
                <b className={styles.strong}>Lack of Strong Ties to India:</b> We guide you on how to best prove your ties, such as property ownership, family commitments, and employment stability.
              </li>
            </ul>
          </section>

          <section>
            <h2 id="processing-time" className={styles.subTitle}>New Zealand Visa Processing Time from India</h2>
            <p>
              The <strong className={styles.strong}>New Zealand visa processing time from India</strong> can vary. Here are some general timelines:
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Standard Processing Time:</b> Typically 20 to 25 working days after submission to Immigration New Zealand.
              </li>
              <li>
                <b className={styles.strong}>Peak Season:</b> Can extend to 30-35 working days during holiday seasons.
              </li>
              <li>
                <b className={styles.strong}>Our Service:</b> Once we receive your documents, GVI finalizes your file within 3-5 working days, ensuring it is submitted to INZ in a timely manner. We help you track <strong className={styles.strong}>New Zealand visa application status</strong>.
              </li>
            </ul>
          </section>

          <section>
            <h2 id="process" className={styles.subTitle}>The New Zealand Visa Application Process: A Step-by-Step Guide</h2>
            <p>
              We manage this process for you. Here's a quick overview of what to expect:
            </p>
            <ol className="gvi-steps">
              <li>
                <b className={styles.strong}>Online Application:</b> We help you complete the Immigration New Zealand online application form accurately.
              </li>
              <li>
                <b className={styles.strong}>Document Preparation:</b> We help you gather and prepare all necessary documents according to INZ requirements.
              </li>
              <li>
                <b className={styles.strong}>Application Submission:</b> We guide you through the online submission process and payment of fees.
              </li>
              <li>
                <b className={styles.strong}>Biometrics:</b> You may need to visit a Visa Application Centre to provide biometric information.
              </li>
              <li>
                <b className={styles.strong}>Application Tracking:</b> Once submitted, we help you track your application status until a decision is made.
              </li>
            </ol>
          </section>

          <h2 id="pricing" className={styles.subTitle}>Transparent Pricing</h2>
          <p>
            Choose the right New Zealand visa assistance package for your needs:
          </p>
          <ul>
            <li>
              <b className={styles.strong}>Basic (₹5,999):</b> Checklist + document review
            </li>
            <li>
              <b className={styles.strong}>Standard (₹8,999):</b> End-to-end application assistance, documentation preparation, and submission guidance
            </li>
          </ul>

          <h2 id="why-gvi" className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>
            At GVI, we are committed to making your visa process stress-free and successful. Our expertise and dedication have led to:
          </p>
          <ul>
            <li>1,500+ New Zealand visas processed since 2017</li>
            <li>96% client satisfaction rate across India</li>
            <li>Specialized assistance for re-application after rejection</li>
            <li>Experienced visa consultants who provide personalized, country-specific advice.</li>
          </ul>

          <section>
            <h2 id="faq" className={styles.subTitle}>New Zealand Tourist Visa from India: Frequently Asked Questions</h2>
            <div className="faq-section">
              {faqs.map((f) => (
                <details key={f.q} className="gvi-faq-item">
                  <summary><h3 className={styles.subTitle}>{f.q}</h3></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <h2 className={styles.subTitle}>Ready to Apply?</h2>
          <p>
            With GVI, you don't need to worry about rejections or missing documents.
          </p>
          <p className={styles.note}>
            Start your <strong className={styles.strong}>New Zealand visa application</strong> today with Global Visa Internationals and experience the breathtaking landscapes of New Zealand with confidence. We are recognized as a <strong className={styles.strong}>best visa consultancy for New Zealand</strong>.
          </p>
          <br />
          <a href="/contact" className={styles.ctaButton}>
            Get a free consultation today!
          </a>
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