import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import Script from "next/script";

export const metadata = {
  title:
    "China Tourist & Business Visa: Requirements, Application & Top Places | Global Visa Internationals",
  description:
    "Apply for a China Tourist or Business Visa with expert help from Global Visa Internationals. Learn visa requirements, estimated travel expenses, and must-visit places in China.",
  keywords:
    "China tourist visa, apply China business visa, China visa consultant, China travel guide, visa for China from India, China immigration, top tourist places in China",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://www.globalvisainternationals.com/Visa/tourist-visa/china",
  },
  openGraph: {
    title: "China Tourist & Business Visa: Application, Requirements & Tips",
    description:
      "Get expert help from Global Visa Internationals on applying for a China tourist or business visa. Learn the visa process, documents needed, and explore popular Chinese destinations.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/china",
    siteName: "Global Visa Internationals",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/China-Tourist-Visa-Assistance-GVI.jpg",
        width: 1200,
        height: 630,
        alt: "China Tourist & Business Visa Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "China Tourist & Business Visa: Requirements & Top Places",
    description:
      "Plan your trip to China. Discover visa requirements, costs, and must-see destinations with help from Global Visa Internationals.",
    images: [
      "https://www.globalvisainternationals.com/tourist-visa/China-Tourist-Visa-Assistance-GVI.jpg",
    ],
  },
};

export default function Canada() {
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
        name: "China Tourist & Business Visa",
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
      "Expert China Tourist and Business Visa Consultants in Bangalore. Complete documentation, application submission, and personalized guidance.",
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
      // "[suspicious link removed]", // Removed as it was flagged as suspicious
    ],
  };

  const touristAttractionsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Tourist Attractions in China",
    itemListElement: [
      {
        "@type": "TouristAttraction",
        name: "Great Wall of China",
        description:
          "An ancient series of walls and fortifications, built to protect the Chinese states and empires against various nomadic groups.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
        url: "https://en.wikipedia.org/wiki/Great_Wall_of_China",
      },
      {
        "@type": "TouristAttraction",
        name: "The Forbidden City",
        description:
          "A palace complex in central Beijing, serving as the ceremonial and political center of the Chinese government for almost 500 years.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e0/Forbidden_City_from_Jingshan_Park_at_sunset_2016-12-04.jpg",
        url: "https://en.wikipedia.org/wiki/Forbidden_City",
      },
      {
        "@type": "TouristAttraction",
        name: "Terracotta Army",
        description:
          "A collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/90/Terracotta_Army_pit_1.jpg",
        url: "https://en.wikipedia.org/wiki/Terracotta_Army",
      },
      {
        "@type": "TouristAttraction",
        name: "The Bund, Shanghai",
        description:
          "A famous waterfront area in central Shanghai, known for its mix of historical architecture and futuristic skyline.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/36/The_Bund_Shanghai_-_2021.jpg",
        url: "https://en.wikipedia.org/wiki/The_Bund",
      },
      {
        "@type": "TouristAttraction",
        name: "Li River",
        description:
          "A river in Guilin, famous for its stunning karst landscapes, which are a popular subject of classical Chinese painting.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/b5/Guilin_and_Li_River.jpg",
        url: "https://en.wikipedia.org/wiki/Li_River",
      },
    ],
  };
  const faqs = [
    {
      q: "What types of China visas are available for Indians?",
      a: "The Single Entry Tourist Visa (L) is valid for 3 months with a stay of up to 30 days. The Double Entry Tourist Visa (L) is valid for 6 months with each stay up to 30 days. The Multiple Entry Business Visa (M) is valid for 6-12 months with each stay up to 30-60 days. A 10-year visa is available for eligible frequent travellers. We help you select the right one for your travel needs.",
    },
    {
      q: "What documents are required for a China tourist visa from India?",
      a: "You typically need a passport valid for at least six months beyond your intended stay with two blank pages (and your old passport if issued within the last 5 years), two recent passport-size photos (44mm x 33mm, white background), original bank statements for the last 6 months stamped by the bank, ITRs for the last 2-3 years, an employer NOC or leave approval letter (or business registration documents if self-employed), confirmed return flights, a hotel reservation form, and an Aadhaar card PDF copy.",
    },
    {
      q: "How much bank balance is required for a China visa?",
      a: "We recommend maintaining a minimum balance of ₹1.5 lakh, with original bank statements for the last 6 months. Avoid large, unexplained transactions in the months leading up to your application.",
    },
    {
      q: "How much does a China tourist visa cost from India?",
      a: "Our pricing is ₹13,000 for a Single Entry Tourist Visa and ₹15,000 for a 6-Month Double Entry Visa, both including the visa fee. Express processing costs an additional ₹5,000, and a Business Visa without documents carries a ₹5,000 service charge (excluding the visa fee). Prices are subject to change based on embassy regulations and exchange rates.",
    },
    {
      q: "How long does China visa processing take from India?",
      a: "Normal processing takes 7-10 working days and express processing takes 3-4 working days (additional fee applies). Once we receive your documents, we finalise your file within 3-5 working days before submission to the embassy.",
    },
    {
      q: "Is a hotel booking required for a China tourist visa?",
      a: "Yes. You need confirmed return flight tickets and hotel reservations for your entire stay, and a reservation form from the hotel is mandatory for tourist visa applications.",
    },
    {
      q: "What are the common reasons for China visa rejection?",
      a: "The most common reasons are incomplete or mismatched documents, insufficient proof of funds, an unclear purpose of travel and a lack of strong ties to India. A professional document review helps avoid these issues.",
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

  /* Visual enhancement layer (look & feel only), scoped to .gvi-cn */
  const enhancedCss = `
div.gvi-cn.gvi-cn.gvi-cn {
  --gvi-primary: #b3202a;
  --gvi-primary-dark: #7a1119;
  --gvi-accent: #d4a017;
  --gvi-ink: #1f2933;
  --gvi-muted: #52606d;
  --gvi-soft: #fdf1f1;
  --gvi-line: #e4e7eb;
  --gvi-radius: 14px;
  color: var(--gvi-ink);
  line-height: 1.75;
  font-size: 1.02rem;
}

/* Headings */
div.gvi-cn.gvi-cn.gvi-cn h1 {
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
div.gvi-cn.gvi-cn.gvi-cn h2 {
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
div.gvi-cn.gvi-cn.gvi-cn h3 {
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
div.gvi-cn.gvi-cn.gvi-cn p { margin: 0 0 1.1rem; color: var(--gvi-muted); }
div.gvi-cn.gvi-cn.gvi-cn strong, div.gvi-cn.gvi-cn.gvi-cn b { color: var(--gvi-ink); font-weight: 700; }
div.gvi-cn.gvi-cn.gvi-cn a:not([class]) { color: var(--gvi-primary); font-weight: 600; }
div.gvi-cn.gvi-cn.gvi-cn [class*="smallText"] { font-size: 0.85rem; color: var(--gvi-muted); font-style: italic; }

/* Lists: one compact card per list, light dividers between rows */
div.gvi-cn.gvi-cn.gvi-cn ul {
  list-style: none;
  padding: 0.3rem 1.1rem;
  margin: 0 0 1.4rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-cn.gvi-cn.gvi-cn ul li {
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
div.gvi-cn.gvi-cn.gvi-cn ul li:last-child { border-bottom: 0; }
div.gvi-cn.gvi-cn.gvi-cn ul li::before {
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
div.gvi-cn.gvi-cn.gvi-cn ul[class*="checkList"] li::before {
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
div.gvi-cn.gvi-cn.gvi-cn ul[class*="countryGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  padding: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
}
div.gvi-cn.gvi-cn.gvi-cn ul[class*="countryGrid"] li {
  padding: 0.55rem 0.9rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 10px;
  color: var(--gvi-ink);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}
div.gvi-cn.gvi-cn.gvi-cn ul[class*="countryGrid"] li:last-child { border-bottom: 1px solid var(--gvi-line); }
div.gvi-cn.gvi-cn.gvi-cn ul[class*="countryGrid"] li::before { display: none; }
div.gvi-cn.gvi-cn.gvi-cn ul[class*="countryGrid"] li a {
  display: block;
  color: var(--gvi-primary);
  font-weight: 700;
  text-decoration: none;
}
div.gvi-cn.gvi-cn.gvi-cn ul[class*="countryGrid"] li:hover { border-color: var(--gvi-primary); }

/* Visa type cards */
div.gvi-cn.gvi-cn.gvi-cn [class*="cardContainer"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 0 0 1.8rem;
}
div.gvi-cn.gvi-cn.gvi-cn [class*="cardContainer"] > div {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 4px solid var(--gvi-accent);
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.2rem 0.4rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.06);
}
div.gvi-cn.gvi-cn.gvi-cn [class*="cardContainer"] h3 { margin: 0 0 0.6rem; padding: 0; background: none; font-size: 1.05rem; }

/* Schengen countries card */
div.gvi-cn.gvi-cn.gvi-cn [class*="schengenCard"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #f3c9cc;
  border-radius: 18px;
  padding: 1.4rem 1.4rem 0.6rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 6px 18px rgba(179, 32, 42, 0.08);
}
div.gvi-cn.gvi-cn.gvi-cn [class*="cardHeader"] h2 { margin-top: 0; }
div.gvi-cn.gvi-cn.gvi-cn [class*="cardSubtitle"] { margin-bottom: 1rem; }
div.gvi-cn.gvi-cn.gvi-cn [class*="countryList"] h3, div.gvi-cn.gvi-cn.gvi-cn [class*="highlightSection"] h3 { background: transparent; padding-left: 0; }
div.gvi-cn.gvi-cn.gvi-cn [class*="highlightGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1rem;
}
div.gvi-cn.gvi-cn.gvi-cn [class*="highlightItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.8rem 1rem;
}
div.gvi-cn.gvi-cn.gvi-cn [class*="countryName"] { display: block; font-weight: 800; color: var(--gvi-primary); }
div.gvi-cn.gvi-cn.gvi-cn [class*="countryInfo"] { margin: 0.2rem 0 0; font-size: 0.9rem; }

/* Highlight callout */
div.gvi-cn.gvi-cn.gvi-cn [class*="highlightBox"] {
  background: #fff8e6;
  border: 1px solid #f5d98a;
  border-left: 5px solid #f0b429;
  border-radius: 12px;
  padding: 0.4rem 1.2rem 0.6rem;
  margin: 0 0 1.8rem;
}
div.gvi-cn.gvi-cn.gvi-cn [class*="highlightBox"] h3 { background: transparent; padding-left: 0; color: #5c4a12; }

/* Step cards (h3 + p pairs, markup unchanged) */
div.gvi-cn.gvi-cn.gvi-cn [class*="stepContainer"] h3 {
  margin: 0.9rem 0 0;
  background: var(--gvi-soft);
  border: 1px solid #f3c9cc;
  border-bottom: 0;
  border-left: 5px solid var(--gvi-accent);
  border-radius: 12px 12px 0 0;
  padding: 0.6rem 1rem;
  font-size: 1.05rem;
}
div.gvi-cn.gvi-cn.gvi-cn [class*="stepContainer"] p {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 0;
  border-radius: 0 0 12px 12px;
  padding: 0.8rem 1rem;
  margin: 0;
}

/* Tables */
.gvi-table-wrap, div.gvi-cn.gvi-cn.gvi-cn [class*="tableWrapper"] {
  overflow-x: auto;
  margin: 0 0 1.4rem;
  border: 1px solid var(--gvi-line);
  border-radius: var(--gvi-radius);
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
  background: #fff;
}
div.gvi-cn.gvi-cn.gvi-cn table { width: 100%; border-collapse: collapse; background: #fff; min-width: 560px; margin: 0; }
div.gvi-cn.gvi-cn.gvi-cn th {
  background: linear-gradient(135deg, var(--gvi-primary), var(--gvi-primary-dark));
  color: #fff;
  text-align: left;
  padding: 0.8rem 1rem;
  font-weight: 700;
}
div.gvi-cn.gvi-cn.gvi-cn td { padding: 0.8rem 1rem; border-top: 1px solid var(--gvi-line); color: var(--gvi-muted); }
div.gvi-cn.gvi-cn.gvi-cn tbody tr:nth-child(even) td { background: #f8fafc; }
div.gvi-cn.gvi-cn.gvi-cn td:first-child { font-weight: 600; color: var(--gvi-ink); }
div.gvi-cn.gvi-cn.gvi-cn [class*="tableWrapper"] > p { margin: 0; padding: 0.7rem 1rem; }

/* Services block */
div.gvi-cn.gvi-cn.gvi-cn [class*="servicesSection"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #f3c9cc;
  border-radius: 18px;
  padding: 0.4rem 1.4rem 1.4rem;
  margin: 2rem 0;
}
div.gvi-cn.gvi-cn.gvi-cn [class*="serviceGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.9rem;
  margin: 1rem 0 1.4rem;
}
div.gvi-cn.gvi-cn.gvi-cn [class*="serviceItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.9rem 1.1rem 0.2rem;
  box-shadow: 0 2px 8px rgba(16, 24, 40, 0.05);
}
div.gvi-cn.gvi-cn.gvi-cn [class*="serviceItem"] b { display: block; color: var(--gvi-primary); margin-bottom: 0.2rem; }
div.gvi-cn.gvi-cn.gvi-cn [class*="ctaContainer"] {
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  text-align: center;
  box-shadow: 0 12px 28px rgba(122, 17, 25, 0.28);
}
div.gvi-cn.gvi-cn.gvi-cn [class*="ctaContainer"] p { color: #fff; font-weight: 700; font-size: 1.15rem; margin: 0 0 0.9rem; }
div.gvi-cn.gvi-cn.gvi-cn a[class*="primaryButton"] {
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
div.gvi-cn.gvi-cn.gvi-cn a[class*="primaryButton"]:hover { transform: translateY(-2px); }

/* Table of contents */
div.gvi-cn.gvi-cn.gvi-cn .gvi-toc {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-left: 5px solid var(--gvi-primary);
  border-radius: var(--gvi-radius);
  padding: 1rem 1.3rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
}
div.gvi-cn.gvi-cn.gvi-cn .gvi-toc ol { margin: 0.6rem 0 0; padding-left: 1.3rem; columns: 2 260px; column-gap: 2rem; }
div.gvi-cn.gvi-cn.gvi-cn .gvi-toc li { margin: 0.25rem 0; color: var(--gvi-muted); }
div.gvi-cn.gvi-cn.gvi-cn .gvi-toc a { color: var(--gvi-primary-dark); text-decoration: none; font-weight: 600; }
div.gvi-cn.gvi-cn.gvi-cn .gvi-toc a:hover { text-decoration: underline; }

/* Quick facts strip */
div.gvi-cn.gvi-cn.gvi-cn .gvi-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.9rem;
  margin: 1.4rem 0 2rem;
}
div.gvi-cn.gvi-cn.gvi-cn .gvi-fact {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #f3c9cc;
  border-radius: var(--gvi-radius);
  padding: 1rem 1.1rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(179, 32, 42, 0.08);
}
div.gvi-cn.gvi-cn.gvi-cn .gvi-fact b { display: block; font-size: 1.3rem; font-weight: 800; color: var(--gvi-primary); line-height: 1.2; }
div.gvi-cn.gvi-cn.gvi-cn .gvi-fact span { display: block; margin-top: 0.25rem; font-size: 0.85rem; color: var(--gvi-muted); }

/* In-page call-to-action band */
div.gvi-cn.gvi-cn.gvi-cn .gvi-cta-band {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--gvi-soft);
  border: 1px solid #f3c9cc;
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.4rem;
  margin: 1.6rem 0;
}
div.gvi-cn.gvi-cn.gvi-cn .gvi-cta-band p { margin: 0; color: var(--gvi-ink); font-weight: 600; flex: 1 1 260px; }
div.gvi-cn.gvi-cn.gvi-cn .gvi-cta-actions { display: flex; flex-wrap: wrap; gap: 0.6rem; }
div.gvi-cn.gvi-cn.gvi-cn a.gvi-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff !important;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 8px 18px rgba(179, 32, 42, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
div.gvi-cn.gvi-cn.gvi-cn a.gvi-btn.gvi-btn-wa {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  box-shadow: 0 8px 18px rgba(18, 140, 126, 0.3);
}
div.gvi-cn.gvi-cn.gvi-cn a.gvi-btn:hover { transform: translateY(-2px); }

/* FAQ accordion (same questions and answers, collapsed to stay compact) */
div.gvi-cn.gvi-cn.gvi-cn .faq-section { margin: 0 0 1.5rem; }
div.gvi-cn.gvi-cn.gvi-cn details.gvi-faq-item {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  margin: 0 0 0.6rem;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-cn.gvi-cn.gvi-cn details.gvi-faq-item summary {
  list-style: none;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 2.6rem 0.75rem 1rem;
}
div.gvi-cn.gvi-cn.gvi-cn details.gvi-faq-item summary::-webkit-details-marker { display: none; }
div.gvi-cn.gvi-cn.gvi-cn details.gvi-faq-item summary::after {
  content: "+";
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--gvi-primary);
}
div.gvi-cn.gvi-cn.gvi-cn details.gvi-faq-item[open] summary::after { content: "–"; }
div.gvi-cn.gvi-cn.gvi-cn details.gvi-faq-item summary h3 {
  display: block;
  margin: 0;
  padding: 0;
  background: none;
  font-size: 1rem;
  color: var(--gvi-ink);
}
div.gvi-cn.gvi-cn.gvi-cn details.gvi-faq-item[open] summary { border-bottom: 1px solid #eef0f3; }
div.gvi-cn.gvi-cn.gvi-cn details.gvi-faq-item p { margin: 0; padding: 0.8rem 1rem 0.9rem; }

#apply-form { scroll-margin-top: 90px; }

@media (max-width: 640px) {
  div.gvi-cn.gvi-cn.gvi-cn { font-size: 0.98rem; }
  div.gvi-cn.gvi-cn.gvi-cn h2 { margin-top: 2.2rem; }
}

/* Pricing cards (markup unchanged) */
div.gvi-cn.gvi-cn.gvi-cn [class*="pricingContainer"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin: 0 0 1.2rem;
}
div.gvi-cn.gvi-cn.gvi-cn [class*="pricingCard"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 16px;
  padding: 1.3rem 1.3rem 0.6rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.06);
  text-align: center;
}
div.gvi-cn.gvi-cn.gvi-cn [class*="pricingCard"][class*="highlighted"] {
  border: 2px solid var(--gvi-primary);
  box-shadow: 0 10px 26px rgba(179, 32, 42, 0.18);
}
div.gvi-cn.gvi-cn.gvi-cn [class*="planTitle"] { margin: 0 0 0.3rem; padding: 0; background: none; font-size: 1.2rem; text-align: center; }
div.gvi-cn.gvi-cn.gvi-cn [class*="planPrice"] { font-size: 2rem; font-weight: 800; color: var(--gvi-primary); margin: 0 0 0.8rem; }
div.gvi-cn.gvi-cn.gvi-cn ul[class*="planFeatures"] { text-align: left; margin: 0 0 0.8rem; box-shadow: none; }

/* Final call-to-action button (link unchanged) */
div.gvi-cn.gvi-cn.gvi-cn a[class*="ctaButton"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff !important;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 10px 22px rgba(179, 32, 42, 0.3);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
div.gvi-cn.gvi-cn.gvi-cn a[class*="ctaButton"]:hover { transform: translateY(-2px); }
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
        <img
          src="https://www.globalvisainternationals.com/tourist-visa/China-Tourist-Visa-Assistance-GVI.jpg"
          alt="China Tourist Visa Assistance GVI"
          className={styles.VisaImage}
        />
      </div>

      <div className={styles.VisaSec}>

        <div className={`${styles.VisaData} gvi-cn`}>
          <h1 className={styles.Title}>China Tourist & Business Visa from India (2026): Documents, Fees & Process</h1>

          {/* Quick facts (values taken from the sections below) */}
          <div className="gvi-facts">
            <div className="gvi-fact"><b>7-10 days</b><span>Normal processing (working days)</span></div>
            <div className="gvi-fact"><b>3-4 days</b><span>Express processing (extra fee)</span></div>
            <div className="gvi-fact"><b>₹13,000</b><span>Single-entry tourist visa (incl. visa fee)</span></div>
            <div className="gvi-fact"><b>₹1.5 lakh</b><span>Recommended minimum balance</span></div>
          </div>

          <nav aria-label="Table of contents" className="gvi-toc">
            <strong>On this page</strong>
            <ol>
              <li><a href="#types">Visa types & duration</a></li>
              <li><a href="#documents">Documents & requirements</a></li>
              <li><a href="#fees">Visa fees</a></li>
              <li><a href="#processing-time">Processing time</a></li>
              <li><a href="#rejection">Rejection reasons</a></li>
              <li><a href="#process">Application process</a></li>
              <li><a href="#pricing">Transparent pricing</a></li>
              <li><a href="#why-gvi">Why choose GVI</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          <section>
            <h2 id="overview" className={styles.subTitle}>✈ Travel to China with a Tourist or Business Visa</h2>
            <p>
              Planning a trip to China for tourism or business? The China Tourist (L) Visa and Business (M) Visa allow Indian travelers to visit for sightseeing, to see family, or for business purposes. At Global Visa Internationals (GVI), we simplify the process with expert guidance, transparent support, and end-to-end visa file handling. We specialize in providing comprehensive <strong className={styles.strong}>China visa assistance for Indians</strong>.</p>
          </section>

          <div className={styles.section}>
            <section>
              <h2 id="processing-overview" className={styles.subTitle}>Visa Processing Overview</h2>
              <p>
                Global Visa Internationals (GVI) will manage the entire documentation process to ensure that your <strong className={styles.strong}>China visa application from India</strong> meets the expectations of the Chinese Embassy and that your travel purpose is clearly and professionally represented. We are a trusted <strong className={styles.strong}>China visa consultant in India</strong>.
              </p>
            </section>

            <section>
              <h3 className={styles.subTitle}>Our Services Include:</h3>
              <ul>
                <li>Visa application form filling assistance</li>
                <li>Covering letter and documentation preparation</li>
                <li>Personalized China tourist visa checklist and guidance</li>
                <li>Providing accepted samples for the required documents</li>
                <li>Verification of documentation</li>
                <li>Complete walk-through of the China visa process</li>
              </ul>
            </section>

            <section>
              <h3 className={styles.subTitle}>Timeline:</h3>
              <p>
                Processing will begin once we receive 100% of the documents as per our checklist. The document finalization will take approximately 3 to 5 working days. This is an essential first step in the overall <strong className={styles.strong}>China visa processing time from India</strong>.
              </p>
            </section>
          </div>

          <section>
            <h2 id="types" className={styles.subTitle}>China Visa Duration and Types</h2>
            <p>
              China offers different visa types based on your travel purpose:</p>
            <ul>
              <li><strong className={styles.strong}>Single Entry Tourist Visa (L):</strong> Valid for 3 months with stay up to 30 days</li>
              <li><strong className={styles.strong}>Double Entry Tourist Visa (L):</strong> Valid for 6 months with each stay up to 30 days</li>
              <li><strong className={styles.strong}>Multiple Entry Business Visa (M):</strong> Valid for 6-12 months with each stay up to 30-60 days</li>
              <li><strong className={styles.strong}>10-Year China Visa:</strong> Available for eligible frequent travelers with multiple entries</li>
            </ul>
            <p>
              With GVI, we'll help you select the right visa type based on your travel needs and ensure full compliance with Chinese immigration rules.</p>
          </section>

          <section>
            <h2 id="documents" className={styles.subTitle}>China Tourist & Business Visa Documents & Requirements for Indian Applicants</h2>
            <p>
              Before applying, ensure you meet the <strong className={styles.strong}>China visa eligibility for Indians</strong>. If these criteria are met, Global Visa Internationals (GVI) will accept your case, manage the entire documentation process, and guide you through submission. We provide a detailed <strong className={styles.strong}>China tourist visa document checklist</strong> and <strong className={styles.strong}>China business visa requirements</strong>.</p>
          </section>

          <section>
            <h3 className={styles.subTitle}>1. Valid Passport & Travel History</h3>
            <ul>
              <li>  <b className={styles.strong}>Valid Passport:</b> Must be valid for at least six months beyond your intended stay, with at least two blank pages. We guide you on all <strong className={styles.strong}>China visa passport requirements</strong>.  </li>
              <li>  <b className={styles.strong}>Old Passport:</b> Mandatory if issued within the last 5 years.  </li>
              <li>  <b className={styles.strong}>Travel History:</b> Previous international travel strengthens your application. GVI helps you highlight these to strengthen your China visa application.  </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>2. Financial Proof: Bank Statements & Funds</h3>
            <p>
              You must prove you have sufficient funds to support your trip. The consulate needs to be convinced you can support your entire stay. We recommend maintaining a minimum balance of ₹1.5 lakh in your bank account. This is a key part of the <strong className={styles.strong}>proof of funds for China visitor visa</strong>. Avoid any large, unexplained transactions in the months leading up to your application.</p>
            <ul>
              <li>  <b className={styles.strong}>Bank Statements:</b> Submit original bank statements for the last 6 months, stamped by the bank. We advise on the <strong className={styles.strong}>China tourist visa bank statement requirements</strong>.  </li>
              <li>  <b className={styles.strong}>Income Tax Returns (ITR):</b> Provide ITRs for the last 2-3 years to prove a stable income source.  </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>3. Employment & Professional Documentation</h3>
            <ul>
              <li>  <b className={styles.strong}>Employees:</b> You must provide a Leave Approval Letter (NOC) from your employer on company letterhead, specifying your position, joining date, and approved leave dates.  </li>
              <li>  <b className={styles.strong}>Business Owners/Self-Employed:</b> Submit your business registration license (GST certificate/partnership deed) and last 2-3 years' ITRs. We also recommend a brief business profile.  </li>
              <li>  <b className={styles.strong}>Students:</b> Provide an enrolment letter and NOC from your school/university.  </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>4. Travel & Accommodation Proof</h3>
            <ul>
              <li>  <b className={styles.strong}>Flight & Hotel Bookings:</b> Provide confirmed return flight tickets and hotel reservations for your entire stay.  </li>
              <li>  <b className={styles.strong}>Hotel Confirmation:</b> Reservation form from the hotel is mandatory for tourist visa applications.  </li>
              <li>  <b className={styles.strong}>Business Invitation:</b> For business visas, you need an invitation letter from a Chinese company, company registration copy, and inviting person's ID copy.  </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>5. Additional Requirements</h3>
            <ul>
              <li>  <b className={styles.strong}>Photos:</b> Two recent passport-sized photos (44mm x 33mm) with white background and 80% face visibility.  </li>
              <li>  <b className={styles.strong}>Aadhaar Card:</b> Online PDF copy is required for both tourist and business visas.  </li>
              <li>  <b className={styles.strong}>Covering Letter:</b> For business visas, an Indian company covering letter is required.  </li>
            </ul>
          </section>

          <div className="gvi-cta-band">
            <p>Not sure which China visa fits your trip? Get a free eligibility check from our experts.</p>
            <div className="gvi-cta-actions">
              <a href="#apply-form" className="gvi-btn">Get Free Eligibility Check</a>
              <a href="https://wa.me/917022213466?text=Hi,%20I%20would%20like%20a%20free%20eligibility%20check%20for%20a%20China%20Visa" className="gvi-btn gvi-btn-wa">Chat on WhatsApp</a>
            </div>
          </div>

          <section>
            <h2 id="fees" className={styles.subTitle}>China Tourist & Business Visa Fees from India</h2>
            <p>  Our transparent pricing includes all government fees and our service charges:  </p>
            <ul>
              <li>  <b className={styles.strong}>Single Entry Tourist Visa:</b> ₹13,000 (including visa fee)  </li>
              <li>  <b className={styles.strong}>6-Month Double Entry Visa:</b> ₹15,000 (including visa fee)  </li>
              <li>  <b className={styles.strong}>Express Processing:</b> Additional ₹5,000 for faster processing  </li>
              <li>  <b className={styles.strong}>Business Visa Without Documents:</b> ₹5,000 service charge (excluding visa fee)  </li>
            </ul>
            <p className={styles.note}>Note: Prices are subject to change based on embassy regulations and exchange rates.</p>
          </section>

          <section>
            <h2 id="processing-time" className={styles.subTitle}>Processing Time</h2>
            <p>  Understanding the <strong className={styles.strong}>China visa processing time from India</strong> is crucial for planning your trip:  </p>
            <ul>
              <li>  <b className={styles.strong}>Normal Processing Time:</b> 7-10 working days  </li>
              <li>  <b className={styles.strong}>Express Processing Time:</b> 3-4 working days (additional fee applies)  </li>
              <li>  <b className={styles.strong}>Our Service:</b> Once we receive your documents, GVI finalizes your file within 3–5 working days, ensuring it is submitted to the embassy in a timely manner. We help you track <strong className={styles.strong}>China visa application status</strong>.  </li>
            </ul>
          </section>

          <section>
            <h2 id="rejection" className={styles.subTitle}>Common Reasons for China Visa Rejection & How We Solve Them</h2>
            <p>  Visa rejections are often a result of simple mistakes. Our structured process is designed to eliminate these common issues. We help you understand the most frequent <strong className={styles.strong}>China tourist visa rejection reasons</strong>.</p>
            <ul>
              <li><b className={styles.strong}>Incomplete/Mismatched Documents:</b> We perform a professional document review as per embassy standards to ensure everything is perfect.</li>
              <li><b className={styles.strong}>Insufficient Proof of Funds:</b> We advise you on the exact financial requirements and review your bank statements to ensure compliance.       </li>
              <li><b className={styles.strong}>Unclear Purpose of Travel:</b> Our expert-prepared documentation clearly explains your travel plans and ties to India.</li>
              <li><b className={styles.strong}>Lack of Strong Ties to India:</b> We guide you on how to best prove your ties, such as property ownership, family commitments, and employment stability.</li>
            </ul>
          </section>

          <section>
            <h2 id="process" className={styles.subTitle}>The China Visa Application Process: A Step-by-Step Guide</h2>
            <p>  We manage this process for you. Here's a quick overview of what to expect:</p>
            <ol className="gvi-steps">
              <li>  <b className={styles.strong}>Document Preparation:</b> We help you gather and prepare all necessary documents according to embassy requirements.  </li>
              <li>  <b className={styles.strong}>Application Form Filling:</b> We complete the China visa application form accurately on your behalf.  </li>
              <li>  <b className={styles.strong}>Application Submission:</b> We submit your application to the appropriate visa center or embassy.  </li>
              <li>  <b className={styles.strong}>Application Tracking:</b> Once submitted, we help you track your application status until your passport is ready for collection.  </li>
              <li>  <b className={styles.strong}>Passport Return:</b> We ensure safe return of your passport with the visa stamp.  </li>
            </ol>
          </section>

          <h2 id="pricing" className={styles.subTitle}>Transparent Pricing</h2>
          <p>Choose the right <b className={styles.strong}>China visa assistance package</b> for your needs:</p>

          <div className={styles.pricingContainer}>
            <div className={styles.pricingCard}>
              <h3 className={styles.planTitle}>Standard</h3>
              <p className={styles.planPrice}>₹12,999</p>
              <ul className={styles.planFeatures}>
                <li>Processing in 10-15 working days</li>
                <li>End-to-end application assistance</li>
                <li>Documentation preparation</li>
                <li>Submission guidance</li>
              </ul>
            </div>

            <div className={`${styles.pricingCard} ${styles.highlighted}`}>
              <h3 className={styles.planTitle}>Express Processing</h3>
              <p className={styles.planPrice}>+₹5,000</p>
              <ul className={styles.planFeatures}>
                <li>Faster processing in 3-4 working days</li>
                <li>All Standard process benefits included</li>
              </ul>
            </div>
          </div>

          <h2 id="why-gvi" className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>  At GVI, we are committed to making your visa process stress-free and successful. Our expertise and dedication have led to:</p>
          <ul>
            <li>2,000+ China visas processed since 2017</li>
            <li>98% client satisfaction rate across India</li>
            <li>Specialized assistance for re-application after rejection</li>
            <li>Experienced visa consultants who provide personalized, country-specific advice.</li>
          </ul>

          <h2 id="faq" className={styles.subTitle}>China Visa from India: Frequently Asked Questions</h2>
          <div className="faq-section">
            {faqs.map((f) => (
              <details key={f.q} className="gvi-faq-item">
                <summary><h3 className={styles.subTitle}>{f.q}</h3></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <h2 className={styles.subTitle}>Ready to Apply?</h2>
          <p>  With GVI, you don't need to worry about rejections or missing documents.</p>
          <p>    Start your <strong className={styles.strong}>China visa application</strong> today with Global Visa Internationals and experience the rich culture and history of China with confidence. We are recognized as a <strong className={styles.strong}>best visa consultancy for China</strong>.</p>
          <br />
          <a href="/contact" className={styles.ctaButton}>
            Get a free consultation today!
          </a>
        </div>
        <div id="apply-form" className={styles.formSection}>
          <VisaForm />
        </div>
      </div>
      {/* <section id="ClientReviews" className={styles.reviewSection}>
        <div
          className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5"
          data-elfsight-app-lazy
        ></div>
      </section> */}
      <section>

        <ReviewSchema />
        <ReviewCarousel />
      </section>
    </>
  );
}