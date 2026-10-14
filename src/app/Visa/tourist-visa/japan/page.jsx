import styles from '@/Components/Visa.module.css';
import VisaForm from '@/Components/VisaForm';
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

export const dynamic = 'force-static'; // helps SEO caching in Next.js

export async function generateMetadata() {
  const baseUrl = "https://www.globalvisainternationals.com";

  return {
    title: "Japan Tourist Visa Consultants in Bangalore | Global Visa Internationals",
    description: "Apply for a Japan Tourist Visa with expert support from Global Visa Internationals. 11+ years of experience. Smooth documentation, fast process, and mock interviews.",
    keywords: [
      "Japan tourist visa",
      "Japan visa consultants in Bangalore",
      "Japan visitor visa from India",
      "how to apply for Japan visa",
      "Japan travel visa assistance"
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `https://www.globalvisainternationals.com/Visa/tourist-visa/japan`,
      languages: {
        "en-IN": `https://www.globalvisainternationals.com/Visa/tourist-visa/japan`, // regional targeting
      },
    },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url: `https://www.globalvisainternationals.com/Visa/tourist-visa/japan`,
      title: "Apply for Japan Tourist Visa from India | Global Visa Internationals",
      description: "Trusted visa agents for Japan in Bangalore. Expert documentation, embassy interview prep and end-to-end visa file handling.",
      siteName: "Global Visa Internationals",
      images: [
        {
          url: `https://www.globalvisainternationals.com/tourist-visa/Japan-Tourist-Visa-Assistance-GVI.jpg`,
          width: 1200,
          height: 630,
          alt: "Japan Tourist Visa Assistance",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@globalvisainternationals",
      title: "Japan Tourist Visa Experts - Global Visa Internationals",
      description: "Planning to travel to Japan? Get full visa support from trusted consultants in Bangalore.",
      images: [`https://www.globalvisainternationals.com/tourist-visa/Japan-Tourist-Visa-Assistance-GVI.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxSnippet: -1,
        maxImagePreview: "large",
        maxVideoPreview: -1,
      },
    },

    image: `https://www.globalvisainternationals.com/tourist-visa/Japan-Tourist-Visa-Assistance-GVI.jpg`,
    authors: [{ name: "Global Visa Internationals", url: baseUrl }],
    publisher: {
      name: "Global Visa Internationals",
      url: baseUrl,
      logo: `https://www.globalvisainternationals.com/gvilogo.png`,
    },
    other: {
      "geo.region": "IN-KA",
      "geo.placename": "Bengaluru",
      "ICBM": "12.9716,77.5946",
      "theme-color": "#ffffff",
      "format-detection": "telephone=no",
      "article:published_time": "2025-01-20T00:00:00+05:30",
      "article:modified_time": "2026-10-12T00:00:00+05:30",
    },
  };
}

export default function JapanTouristVisa() {
  const touristAttractions = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Tourist Attractions in Japan",
    "itemListElement": [
      {
        "@type": "TouristAttraction",
        "name": "Mount Fuji",
        "description": "Japan's tallest mountain and iconic symbol, popular for hiking and photography.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Fuji_from_Yamanaka.jpg",
        "url": "https://www.japan.travel/en/uk/uk-destinations/fuji-five-lakes-mount-fuji/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Tokyo Tower",
        "description": "A famous observation and communications tower offering panoramic views of Tokyo.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/00/Tokyo_Tower_and_Zojoji_Temple.jpg",
        "url": "https://www.tokyotower.co.jp/en.html"
      },
      {
        "@type": "TouristAttraction",
        "name": "Fushimi Inari Taisha",
        "description": "Renowned Shinto shrine in Kyoto, famous for its thousands of red torii gates.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Fushimi_Inari_Taisha_torii_2.jpg",
        "url": "https://kyoto.travel/en/thingstodo/550.html"
      },
      {
        "@type": "TouristAttraction",
        "name": "Arashiyama Bamboo Grove",
        "description": "A scenic bamboo forest located in Kyoto, popular for tranquil walks and photography.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Arashiyama_Bamboo_Grove.jpg",
        "url": "https://www.japan.travel/en/spot/1207/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Himeji Castle",
        "description": "A UNESCO World Heritage Site and Japan's most spectacular and best-preserved castle.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Himeji_Castle_in_May_2015.jpg",
        "url": "https://www.himejicastle.jp/en/"
      }
    ]
  };

  const breadcrumb = {
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
        "name": "Japan Tourist Visa",
        "item": "https://www.globalvisainternationals.com/Visa/tourist-visa/japan"
      }
    ]
  };

  const travelAgency = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com",
    "logo": "https://www.globalvisainternationals.com/gvilogo.png",
    "description": "Expert Japan Tourist Visa Consultants in Bangalore. We assist with complete Japan visa documentation, application submission, and personalized guidance.",
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
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "18:00"
    }],
    "sameAs": [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://www.google.com/maps/place/Global+Visa+Internationals"
    ]
  };

  const visaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Japan Tourist Visa Application Assistance",
    "provider": {
      "@type": "Organization",
      "name": "Global Visa Internationals",
      "url": "https://www.globalvisainternationals.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Bangalore, India"
    },
    "description": "Expert assistance for Japan tourist visa applications. Support with documents, application submission, and embassy interview preparation.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.globalvisainternationals.com/Visa/tourist-visa/japan"
    }
  };

  const faqs = [
    {
      q: "How do I apply for a Japan tourist visa from India?",
      a: "Collect your documents (passport, application form, photograph, covering letter, travel schedule, accommodation proof and financial documents), then submit them through the authorised visa application centre. Residents of Karnataka are processed by the Consulate General of Japan, Bengaluru. Global Visa Internationals handles form completion, document checking, appointment booking and passport courier coordination for you.",
    },
    {
      q: "What documents are required for a Japan tourist visa?",
      a: "You need a valid passport with at least 2 blank pages, a passport photocopy, a signed application form, a recent 45mm x 35mm photograph, a signed covering letter, a day-by-day travel schedule with flight and hotel details, and financial documents (latest 6-month bank statement, last 2 years' ITR acknowledgements and last 3 months' salary slips if employed). Employed applicants also need an NOC or leave approval letter and company ID copy.",
    },
    {
      q: "How long does Japan visa processing take?",
      a: "Embassy processing usually takes 5-10 working days, depending on the jurisdiction. Our internal document review takes 3-5 working days. In special cases the embassy may request additional documents or verification through Tokyo.",
    },
    {
      q: "How much bank balance is needed for a Japan tourist visa?",
      a: "As a guide, we recommend about ₹1.5 - ₹2.0 lakhs per person for a 1-week trip, ₹2.5 - ₹3.5 lakhs for 10-15 days and ₹3.5 - ₹5.0 lakhs for 2-3 weeks.",
    },
    {
      q: "Are dummy flight or hotel bookings accepted for a Japan visa?",
      a: "No. Confirmed flight and hotel bookings are mandatory, travel dates must match across all documents, and only genuine, signed and updated documents are accepted.",
    },
    {
      q: "How much does Japan visa assistance cost with GVI?",
      a: "Our Basic package is ₹2,500 (document checklist and review) and our Standard package is ₹3,500 (adds embassy filing, appointment booking, complete documentation and coordination, and status tracking). The embassy fee of ₹800 and the VFS fee of ₹500 are paid directly to the authorised centres.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  /* Visual enhancement layer (look & feel only), scoped to .gvi-jp */
  const enhancedCss = `
div.gvi-jp.gvi-jp.gvi-jp {
  --gvi-primary: #a30f2d;
  --gvi-primary-dark: #6e0a1e;
  --gvi-accent: #e0a100;
  --gvi-ink: #1f2933;
  --gvi-muted: #52606d;
  --gvi-soft: #fbeff2;
  --gvi-line: #e4e7eb;
  --gvi-radius: 14px;
  color: var(--gvi-ink);
  line-height: 1.75;
  font-size: 1.02rem;
}

/* Headings */
div.gvi-jp.gvi-jp.gvi-jp h1 {
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
div.gvi-jp.gvi-jp.gvi-jp h2 {
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
div.gvi-jp.gvi-jp.gvi-jp h3 {
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
div.gvi-jp.gvi-jp.gvi-jp p { margin: 0 0 1.1rem; color: var(--gvi-muted); }
div.gvi-jp.gvi-jp.gvi-jp strong, div.gvi-jp.gvi-jp.gvi-jp b { color: var(--gvi-ink); font-weight: 700; }
div.gvi-jp.gvi-jp.gvi-jp a:not([class]) { color: var(--gvi-primary); font-weight: 600; }
div.gvi-jp.gvi-jp.gvi-jp [class*="smallText"] { font-size: 0.85rem; color: var(--gvi-muted); font-style: italic; }

/* Lists: one compact card per list, light dividers between rows */
div.gvi-jp.gvi-jp.gvi-jp ul {
  list-style: none;
  padding: 0.3rem 1.1rem;
  margin: 0 0 1.4rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-jp.gvi-jp.gvi-jp ul li {
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
div.gvi-jp.gvi-jp.gvi-jp ul li:last-child { border-bottom: 0; }
div.gvi-jp.gvi-jp.gvi-jp ul li::before {
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
div.gvi-jp.gvi-jp.gvi-jp ul[class*="checkList"] li::before {
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
div.gvi-jp.gvi-jp.gvi-jp ul[class*="countryGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  padding: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
}
div.gvi-jp.gvi-jp.gvi-jp ul[class*="countryGrid"] li {
  padding: 0.55rem 0.9rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 10px;
  color: var(--gvi-ink);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}
div.gvi-jp.gvi-jp.gvi-jp ul[class*="countryGrid"] li:last-child { border-bottom: 1px solid var(--gvi-line); }
div.gvi-jp.gvi-jp.gvi-jp ul[class*="countryGrid"] li::before { display: none; }
div.gvi-jp.gvi-jp.gvi-jp ul[class*="countryGrid"] li a {
  display: block;
  color: var(--gvi-primary);
  font-weight: 700;
  text-decoration: none;
}
div.gvi-jp.gvi-jp.gvi-jp ul[class*="countryGrid"] li:hover { border-color: var(--gvi-primary); }

/* Visa type cards */
div.gvi-jp.gvi-jp.gvi-jp [class*="cardContainer"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 0 0 1.8rem;
}
div.gvi-jp.gvi-jp.gvi-jp [class*="cardContainer"] > div {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 4px solid var(--gvi-accent);
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.2rem 0.4rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.06);
}
div.gvi-jp.gvi-jp.gvi-jp [class*="cardContainer"] h3 { margin: 0 0 0.6rem; padding: 0; background: none; font-size: 1.05rem; }

/* Schengen countries card */
div.gvi-jp.gvi-jp.gvi-jp [class*="schengenCard"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #efcdd5;
  border-radius: 18px;
  padding: 1.4rem 1.4rem 0.6rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 6px 18px rgba(163, 15, 45, 0.08);
}
div.gvi-jp.gvi-jp.gvi-jp [class*="cardHeader"] h2 { margin-top: 0; }
div.gvi-jp.gvi-jp.gvi-jp [class*="cardSubtitle"] { margin-bottom: 1rem; }
div.gvi-jp.gvi-jp.gvi-jp [class*="countryList"] h3, div.gvi-jp.gvi-jp.gvi-jp [class*="highlightSection"] h3 { background: transparent; padding-left: 0; }
div.gvi-jp.gvi-jp.gvi-jp [class*="highlightGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1rem;
}
div.gvi-jp.gvi-jp.gvi-jp [class*="highlightItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.8rem 1rem;
}
div.gvi-jp.gvi-jp.gvi-jp [class*="countryName"] { display: block; font-weight: 800; color: var(--gvi-primary); }
div.gvi-jp.gvi-jp.gvi-jp [class*="countryInfo"] { margin: 0.2rem 0 0; font-size: 0.9rem; }

/* Highlight callout */
div.gvi-jp.gvi-jp.gvi-jp [class*="highlightBox"] {
  background: #fff8e6;
  border: 1px solid #f5d98a;
  border-left: 5px solid #f0b429;
  border-radius: 12px;
  padding: 0.4rem 1.2rem 0.6rem;
  margin: 0 0 1.8rem;
}
div.gvi-jp.gvi-jp.gvi-jp [class*="highlightBox"] h3 { background: transparent; padding-left: 0; color: #5c4a12; }

/* Step cards (h3 + p pairs, markup unchanged) */
div.gvi-jp.gvi-jp.gvi-jp [class*="stepContainer"] h3 {
  margin: 0.9rem 0 0;
  background: var(--gvi-soft);
  border: 1px solid #efcdd5;
  border-bottom: 0;
  border-left: 5px solid var(--gvi-accent);
  border-radius: 12px 12px 0 0;
  padding: 0.6rem 1rem;
  font-size: 1.05rem;
}
div.gvi-jp.gvi-jp.gvi-jp [class*="stepContainer"] p {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-top: 0;
  border-radius: 0 0 12px 12px;
  padding: 0.8rem 1rem;
  margin: 0;
}

/* Tables */
.gvi-table-wrap, div.gvi-jp.gvi-jp.gvi-jp [class*="tableWrapper"] {
  overflow-x: auto;
  margin: 0 0 1.4rem;
  border: 1px solid var(--gvi-line);
  border-radius: var(--gvi-radius);
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
  background: #fff;
}
div.gvi-jp.gvi-jp.gvi-jp table { width: 100%; border-collapse: collapse; background: #fff; min-width: 560px; margin: 0; }
div.gvi-jp.gvi-jp.gvi-jp th {
  background: linear-gradient(135deg, var(--gvi-primary), var(--gvi-primary-dark));
  color: #fff;
  text-align: left;
  padding: 0.8rem 1rem;
  font-weight: 700;
}
div.gvi-jp.gvi-jp.gvi-jp td { padding: 0.8rem 1rem; border-top: 1px solid var(--gvi-line); color: var(--gvi-muted); }
div.gvi-jp.gvi-jp.gvi-jp tbody tr:nth-child(even) td { background: #f8fafc; }
div.gvi-jp.gvi-jp.gvi-jp td:first-child { font-weight: 600; color: var(--gvi-ink); }
div.gvi-jp.gvi-jp.gvi-jp [class*="tableWrapper"] > p { margin: 0; padding: 0.7rem 1rem; }

/* Services block */
div.gvi-jp.gvi-jp.gvi-jp [class*="servicesSection"] {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #efcdd5;
  border-radius: 18px;
  padding: 0.4rem 1.4rem 1.4rem;
  margin: 2rem 0;
}
div.gvi-jp.gvi-jp.gvi-jp [class*="serviceGrid"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.9rem;
  margin: 1rem 0 1.4rem;
}
div.gvi-jp.gvi-jp.gvi-jp [class*="serviceItem"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  padding: 0.9rem 1.1rem 0.2rem;
  box-shadow: 0 2px 8px rgba(16, 24, 40, 0.05);
}
div.gvi-jp.gvi-jp.gvi-jp [class*="serviceItem"] b { display: block; color: var(--gvi-primary); margin-bottom: 0.2rem; }
div.gvi-jp.gvi-jp.gvi-jp [class*="ctaContainer"] {
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  text-align: center;
  box-shadow: 0 12px 28px rgba(110, 10, 30, 0.28);
}
div.gvi-jp.gvi-jp.gvi-jp [class*="ctaContainer"] p { color: #fff; font-weight: 700; font-size: 1.15rem; margin: 0 0 0.9rem; }
div.gvi-jp.gvi-jp.gvi-jp a[class*="primaryButton"] {
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
div.gvi-jp.gvi-jp.gvi-jp a[class*="primaryButton"]:hover { transform: translateY(-2px); }

/* Table of contents */
div.gvi-jp.gvi-jp.gvi-jp .gvi-toc {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-left: 5px solid var(--gvi-primary);
  border-radius: var(--gvi-radius);
  padding: 1rem 1.3rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
}
div.gvi-jp.gvi-jp.gvi-jp .gvi-toc ol { margin: 0.6rem 0 0; padding-left: 1.3rem; columns: 2 260px; column-gap: 2rem; }
div.gvi-jp.gvi-jp.gvi-jp .gvi-toc li { margin: 0.25rem 0; color: var(--gvi-muted); }
div.gvi-jp.gvi-jp.gvi-jp .gvi-toc a { color: var(--gvi-primary-dark); text-decoration: none; font-weight: 600; }
div.gvi-jp.gvi-jp.gvi-jp .gvi-toc a:hover { text-decoration: underline; }

/* Quick facts strip */
div.gvi-jp.gvi-jp.gvi-jp .gvi-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.9rem;
  margin: 1.4rem 0 2rem;
}
div.gvi-jp.gvi-jp.gvi-jp .gvi-fact {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #efcdd5;
  border-radius: var(--gvi-radius);
  padding: 1rem 1.1rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(163, 15, 45, 0.08);
}
div.gvi-jp.gvi-jp.gvi-jp .gvi-fact b { display: block; font-size: 1.3rem; font-weight: 800; color: var(--gvi-primary); line-height: 1.2; }
div.gvi-jp.gvi-jp.gvi-jp .gvi-fact span { display: block; margin-top: 0.25rem; font-size: 0.85rem; color: var(--gvi-muted); }

/* In-page call-to-action band */
div.gvi-jp.gvi-jp.gvi-jp .gvi-cta-band {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--gvi-soft);
  border: 1px solid #efcdd5;
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.4rem;
  margin: 1.6rem 0;
}
div.gvi-jp.gvi-jp.gvi-jp .gvi-cta-band p { margin: 0; color: var(--gvi-ink); font-weight: 600; flex: 1 1 260px; }
div.gvi-jp.gvi-jp.gvi-jp .gvi-cta-actions { display: flex; flex-wrap: wrap; gap: 0.6rem; }
div.gvi-jp.gvi-jp.gvi-jp a.gvi-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff !important;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 8px 18px rgba(163, 15, 45, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
div.gvi-jp.gvi-jp.gvi-jp a.gvi-btn.gvi-btn-wa {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  box-shadow: 0 8px 18px rgba(18, 140, 126, 0.3);
}
div.gvi-jp.gvi-jp.gvi-jp a.gvi-btn:hover { transform: translateY(-2px); }

/* FAQ accordion (same questions and answers, collapsed to stay compact) */
div.gvi-jp.gvi-jp.gvi-jp .faq-section { margin: 0 0 1.5rem; }
div.gvi-jp.gvi-jp.gvi-jp details.gvi-faq-item {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  margin: 0 0 0.6rem;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-jp.gvi-jp.gvi-jp details.gvi-faq-item summary {
  list-style: none;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 2.6rem 0.75rem 1rem;
}
div.gvi-jp.gvi-jp.gvi-jp details.gvi-faq-item summary::-webkit-details-marker { display: none; }
div.gvi-jp.gvi-jp.gvi-jp details.gvi-faq-item summary::after {
  content: "+";
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--gvi-primary);
}
div.gvi-jp.gvi-jp.gvi-jp details.gvi-faq-item[open] summary::after { content: "–"; }
div.gvi-jp.gvi-jp.gvi-jp details.gvi-faq-item summary h3 {
  display: block;
  margin: 0;
  padding: 0;
  background: none;
  font-size: 1rem;
  color: var(--gvi-ink);
}
div.gvi-jp.gvi-jp.gvi-jp details.gvi-faq-item[open] summary { border-bottom: 1px solid #eef0f3; }
div.gvi-jp.gvi-jp.gvi-jp details.gvi-faq-item p { margin: 0; padding: 0.8rem 1rem 0.9rem; }

#apply-form { scroll-margin-top: 90px; }

@media (max-width: 640px) {
  div.gvi-jp.gvi-jp.gvi-jp { font-size: 0.98rem; }
  div.gvi-jp.gvi-jp.gvi-jp h2 { margin-top: 2.2rem; }
}

/* Pricing cards (markup unchanged) */
div.gvi-jp.gvi-jp.gvi-jp [class*="pricingContainer"] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin: 0 0 1.2rem;
}
div.gvi-jp.gvi-jp.gvi-jp [class*="pricingCard"] {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 16px;
  padding: 1.3rem 1.3rem 0.6rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.06);
  text-align: center;
}
div.gvi-jp.gvi-jp.gvi-jp [class*="pricingCard"][class*="highlighted"] {
  border: 2px solid var(--gvi-primary);
  box-shadow: 0 10px 26px rgba(163, 15, 45, 0.18);
}
div.gvi-jp.gvi-jp.gvi-jp [class*="planTitle"] { margin: 0 0 0.3rem; padding: 0; background: none; font-size: 1.2rem; text-align: center; }
div.gvi-jp.gvi-jp.gvi-jp [class*="planPrice"] { font-size: 2rem; font-weight: 800; color: var(--gvi-primary); margin: 0 0 0.8rem; }
div.gvi-jp.gvi-jp.gvi-jp ul[class*="planFeatures"] { text-align: left; margin: 0 0 0.8rem; box-shadow: none; }
div.gvi-jp.gvi-jp.gvi-jp ul[class*="planFeatures"] li::before {
  top: 0.6rem;
  width: auto;
  height: auto;
  border-radius: 0;
  background: none;
  font-weight: 800;
}
div.gvi-jp.gvi-jp.gvi-jp ul[class*="planFeatures"] li[class*="included"]::before { content: "✓"; color: #1a8f4c; }
div.gvi-jp.gvi-jp.gvi-jp ul[class*="planFeatures"] li[class*="excluded"] { color: #9aa5b1; }
div.gvi-jp.gvi-jp.gvi-jp ul[class*="planFeatures"] li[class*="excluded"]::before { content: "✕"; color: #9aa5b1; }

/* Final call-to-action button (link unchanged) */
div.gvi-jp.gvi-jp.gvi-jp a[class*="ctaButton"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.6rem;
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff !important;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 10px 22px rgba(163, 15, 45, 0.3);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
div.gvi-jp.gvi-jp.gvi-jp a[class*="ctaButton"]:hover { transform: translateY(-2px); }
div.gvi-jp.gvi-jp.gvi-jp small { color: var(--gvi-muted); }
`;

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, travelAgency, visaService, touristAttractions, faqSchema])
        }}
      />

      {/* Scoped visual enhancements */}
      <style dangerouslySetInnerHTML={{ __html: enhancedCss }} />

      <div className={styles.imageContainer}>
        <img src="/tourist-visa/Japan-Tourist-Visa-Assistance-GVI.jpg" loading="lazy" alt="Japan Tourist Visa Assistance in Bangalore by Global Visa Internationals" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>


        <div className={`${styles.VisaData} gvi-jp`}>
          {/* ✅ NEW INTRO + CORRECT HEADING STRUCTURE */}
          <section>
            <h1 className={styles.Title}>
              Japan Tourist Visa from India (2026): Documents, Fees & Process
            </h1>
            <p>
              Looking to apply for a <strong className={styles.strong}>Japan Tourist Visa from India</strong>?
              <strong className={styles.strong}> Global Visa Internationals (GVI)</strong> in Bangalore helps Indian travelers
              obtain Japan visitor visas smoothly and professionally. Our expert consultants guide you through every step —
              from document verification to embassy coordination — ensuring faster visa approval
              and peace of mind.
            </p>
          </section>



          {/* Quick facts (values taken from the sections below) */}
          <div className="gvi-facts">
            <div className="gvi-fact"><b>5-10 days</b><span>Embassy processing (working days)</span></div>
            <div className="gvi-fact"><b>₹800</b><span>Embassy fee (+ ₹500 VFS)</span></div>
            <div className="gvi-fact"><b>From ₹2,500</b><span>GVI assistance package</span></div>
            <div className="gvi-fact"><b>11+ years</b><span>Visa experience</span></div>
          </div>

          <nav aria-label="Table of contents" className="gvi-toc">
            <strong>On this page</strong>
            <ol>
              <li><a href="#overview">Japan visitor visa overview</a></li>
              <li><a href="#jal-offer">JAL free domestic flight offer</a></li>
              <li><a href="#processing">Visa services & timeline</a></li>
              <li><a href="#checklist">Japan tourist visa checklist</a></li>
              <li><a href="#pricing">Transparent pricing</a></li>
              <li><a href="#why-gvi">Why choose GVI</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          <section>
            <h2 id="overview" className={styles.subTitle}>Travel to Japan with a Visitor Visa</h2>
            <p>
              The <strong className={styles.strong}>Japan Tourist Visa</strong> allows Indian nationals to visit Japan
              for tourism, family visits, or short-term business trips.
              At <strong className={styles.strong}>Global Visa Internationals (GVI)</strong>, we make the process stress-free
              with expert documentation, transparent communication, and end-to-end visa file handling.
            </p>
          </section>

          <section>
            <h2 id="jal-offer" className={styles.subTitle}>Japan Airlines Free Domestic Flight Offer</h2>
            <p>
              <strong className={styles.strong}>Japan Airlines (JAL)</strong> now offers free domestic flights within Japan
              to international passengers booking JAL international tickets.
              This means travelers from India can fly to Sapporo, Fukuoka, or
              Okinawa without extra airfare (taxes apply).
            </p>
            <p>
              This initiative aims to reduce overtourism in Tokyo, Kyoto, and
              Osaka, encouraging exploration of Japan’s hidden gems.
              <br />
              Eligible Countries: India, USA, Canada, Australia, Singapore, Thailand, Vietnam, Indonesia, China, and more.
              Both international and domestic flights must be booked in the same reservation.
            </p>
          </section>

          <section>
            <h2 id="processing" className={styles.subTitle}>Japan Visa Processing Overview</h2>
            <p>
              Applying for a Japan Tourist Visa from India may seem complicated, but
              GVI  makes it simple and fast. Our team manages all paperwork, form completion, and embassy coordination,
              ensuring full compliance with Japan’s Ministry of Foreign Affairs (MOFA) guidelines.
            </p>
          </section>

          <section>
            <h3 className={styles.subTitle}>Our Japan Visa Services Include:</h3>
            <ul>
              <li>Visa application form completion (MOFA & VFS)</li>
              <li>Covering letter and documentation preparation</li>
              <li>Personalized Japan tourist visa checklist</li>
              <li>Document verification for accuracy and consistency</li>
              <li>Appointment booking and passport courier coordination</li>
              <li>Templates for financial and employment documentation</li>
              <li>Fast Track / eVISA / Visit Japan Web assistance</li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>Japan Visa Processing Timeline</h3>
            <ul>
              <li><b className={styles.strong}>GVI Internal Review:</b> 3-5 working days</li>
              <li><b className={styles.strong}>Embassy Processing:</b> 5-10 working days (varies by jurisdiction)</li>
            </ul>
            <p>
              <b className={styles.strong}>Note:</b> The Embassy may request additional documentation or require verification through Tokyo headquarters in special cases.
            </p>
          </section>

          <section>
            <h3 className={styles.subTitle}>Important Points to Note</h3>
            <ul>
              <li>Confirmed flight and hotel bookings are mandatory — dummy bookings not accepted.</li>
              <li>Ensure all travel dates match across documents.</li>
              <li>Only genuine, signed, and updated documents are accepted.</li>
              <li>GVI assists with confirmed flight, hotel, and forex arrangements.</li>
            </ul>
          </section>

          {/* ✅ UPDATED JAPAN VISA CHECKLIST & TRANSPARENT PRICING SECTIONS */}

          <section>
            <h2 id="checklist" className={styles.subTitle}>Japan Tourist Visa Checklist (2026)</h2>
            <p>
              <b className={styles.strong}>Temporary Visitor Visa for Tourism (Without Guarantor)</b><br />
              <small>(For residents of Karnataka — processed by the Consulate General of Japan, Bengaluru)</small>
            </p>

            <h3 className={styles.subTitle}>Mandatory Documents</h3>
            <ul>
              <li><b className={styles.strong}>Valid Passport:</b> At least 2 blank pages; include old passports if available.</li>
              <li><b className={styles.strong}>Passport Photocopy:</b> First and last page of the current passport.</li>
              <li><b className={styles.strong}>Visa Application Form:</b> Completely filled and signed by the applicant.</li>
              <li><b className={styles.strong}>Recent Photograph:</b> 45mm x 35mm, white background, 80% face coverage, taken within the last 6 months.</li>
              <li><b className={styles.strong}>Covering Letter:</b> Signed by the applicant, including travel dates, purpose, companions, and expense bearer details.</li>
              <li><b className={styles.strong}>Travel Schedule:</b> Flight/cruise itinerary and day-by-day Japan travel plan with hotel details.</li>
              <li><b className={styles.strong}>Accommodation Proof:</b> Hotel booking under the applicant’s name (single name if travelling alone).</li>
              <li><b className={styles.strong}>Financial Documents:</b> Latest 6-month bank statement, last 2 years’ ITR acknowledgements, and last 3 months’ salary slips (if employed).</li>
            </ul>

            <h3 className={styles.subTitle}>Employment / Occupation Documents</h3>
            <ul>
              <li><b className={styles.strong}>If Employed:</b> Original NOC / Leave Approval Letter + company ID copy.</li>
              <li><b className={styles.strong}>If Self-Employed:</b> GST Registration Certificate.</li>
              <li><b className={styles.strong}>If Doctor:</b> KMC Certificate.</li>
              <li><b className={styles.strong}>If Lawyer:</b> Bar Council Card.</li>
              <li><b className={styles.strong}>If Landlord / Agriculturist:</b> Property ownership proof.</li>
              <li><b className={styles.strong}>If Student:</b> Bonafide certificate from school/college/institution.</li>
            </ul>

            <h3 className={styles.subTitle}>Family / Dependent Travelers</h3>
            <ul>
              <li><b className={styles.strong}>Proof of Relationship:</b> Marriage/Birth certificate or passport copy.</li>
              <li><b className={styles.strong}>Accompanying Person’s Documents:</b> Passport, visa copy, and flight tickets (even if travelling from another state).</li>
              <li><b className={styles.strong}>If Sponsored:</b> Sponsor Letter, 3-month bank statement, 2-year ITR, and ID proof.</li>
              <li><b className={styles.strong}>If Divorced:</b> Divorce decree copy.</li>
              <li><b className={styles.strong}>If Family/Friends Travelling Together:</b> Submit all applications together.</li>
            </ul>

            <h3 className={styles.subTitle}>Residence Proof (for Passports Issued Outside Karnataka)</h3>
            <ul>
              <li>Valid Rental/Lease Agreement</li>
              <li>Sales Deed</li>
              <li>Electricity / Gas Bill</li>
              <li>Aadhaar Card (current address)</li>
            </ul>

            <h3 className={styles.subTitle}> Recommended Bank Balance (Per Person)</h3>
            <div className="gvi-table-wrap">
            <table className={styles.table}>
              <thead>
                <tr><th>Trip Duration</th><th>Recommended Minimum Funds</th></tr>
              </thead>
              <tbody>
                <tr><td>1 week</td><td>₹1.5 - ₹2.0 lakhs</td></tr>
                <tr><td>10-15 days</td><td>₹2.5 - ₹3.5 lakhs</td></tr>
                <tr><td>2-3 weeks</td><td>₹3.5 - ₹5.0 lakhs</td></tr>
              </tbody>
            </table>
            </div>
          </section>

          <div className="gvi-cta-band">
            <p>Want your Japan visa file checked before you submit? Talk to our visa experts.</p>
            <div className="gvi-cta-actions">
              <a href="#apply-form" className="gvi-btn">Get Free Eligibility Check</a>
              <a href="https://wa.me/917022213466?text=Hi,%20I%20would%20like%20a%20free%20eligibility%20check%20for%20a%20Japan%20Tourist%20Visa" className="gvi-btn gvi-btn-wa">Chat on WhatsApp</a>
            </div>
          </div>

          {/* ✅ UPDATED TRANSPARENT PRICING SECTION */}
          <section>
            <h2 id="pricing" className={styles.subTitle}>Transparent Pricing</h2>
            <p>
              Choose the right <b className={styles.strong}>Japan Tourist Visa Assistance Package</b> that fits your travel needs:
            </p>
            <div className={styles.pricingContainer}>
              {/* BASIC PLAN */}
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹2,500</p>
                <ul className={styles.planFeatures}>
                  <li className={styles.included}>Personalized document checklist</li>
                  <li className={styles.included}>Document review & feedback</li>
                  <li className={styles.excluded}>Embassy filing & appointment booking</li>
                  <li className={styles.excluded}>Complete documentation & coordination</li>
                  <li className={styles.excluded}>Visa status tracking & updates</li>
                </ul>
              </div>

              {/* STANDARD PLAN */}
              <div className={`${styles.pricingCard} ${styles.highlighted}`}>
                <h3 className={styles.planTitle}>Standard</h3>
                <p className={styles.planPrice}>₹3,500</p>
                <ul className={styles.planFeatures}>
                  <li className={styles.included}>Personalized document checklist</li>
                  <li className={styles.included}>Document review & feedback</li>
                  <li className={styles.included}>Embassy filing & appointment booking</li>
                  <li className={styles.included}>Complete documentation & coordination</li>
                  <li className={styles.included}>Visa status tracking & updates</li>
                </ul>
              </div>


            </div>


            <p>
              <b className={styles.strong}>Note:</b> Embassy Fee ₹800 + VFS ₹500 are paid directly to authorized centers.
              Prices include GST where applicable.
            </p>
          </section>


          <section>
            <h2 id="why-gvi" className={styles.subTitle}>Why Choose Global Visa Internationals (GVI)</h2>
            <ul>
              <li>11+ years of experience handling visa applications</li>
              <li>Trusted Japan Visa Consultants in Bangalore</li>
              <li>Transparent pricing — no hidden fees</li>
              <li>Complete documentation & submission assistance</li>
              <li>Fast, reliable, and personalized support</li>
            </ul>
          </section>

          <section>
            <h2 id="faq" className={styles.subTitle}>Japan Tourist Visa from India: Frequently Asked Questions</h2>
            <div className="faq-section">
              {faqs.map((f) => (
                <details key={f.q} className="gvi-faq-item">
                  <summary><h3 className={styles.subTitle}>{f.q}</h3></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className={styles.subTitle}>Ready to Apply for Your Japan Visa?</h2>
            <p>
              Start your <strong className={styles.strong}>Japan visa application</strong> with
              <strong className={styles.strong}> Global Visa Internationals </strong> today and travel stress-free.
              Our expert consultants ensure a smooth, reliable, and transparent process.
            </p>
            <p>
              <b className={styles.strong}>Office:</b> Brigade Road, Bangalore, Karnataka<br />
              <b className={styles.strong}>Email:</b> operations@globalvisainternationals.com <br />
              <b className={styles.strong}>Phone / WhatsApp:</b> +91-7022213466
            </p>
            <p>
              Explore Japan — from Tokyo’s neon lights to Okinawa’s beaches — with GVI’s expert visa support.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Apply for Your Japan Visa Now
            </a>
          </section>
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