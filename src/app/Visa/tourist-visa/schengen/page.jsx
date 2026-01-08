import styles from "@/Components/Visa.module.css";

import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import Link from "next/link";


export const metadata = {
  metadataBase: new URL("https://www.globalvisainternationals.com"),

  // OPTIMIZED: Added "(2026)" to signal up-to-date visa rules. 
  // Kept "Bangalore" for local SEO.
  title: "Schengen Visa Agents Bangalore (2026 Rules) | Tourist & Business | GVI",

  // OPTIMIZED: Replaced generic "Fast & Reliable" with specific "99% Success Rate".
  // Added "Biometrics support" as that is a specific pain point users search for.
  description:
    "Expert Schengen Visa Consultants in Bangalore. 99% Success Rate for Tourist & Business visas. We handle 2026 documentation & biometrics. Chat with experts now!",

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
    // Punchy, benefit-driven title for social
    title: "Schengen Visa Approval Experts | 99% Success Rate | GVI Bangalore",
    description:
      "Planning a Europe trip in 2026? We handle your entire Schengen visa process. Documentation, appointments & biometrics support in Bangalore. Apply confidently.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen",
    siteName: "Global Visa Internationals",
    locale: "en_IN",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Schengen-Tourist-Visa-Assistance-GVI.jpg",
        width: 1200,
        height: 630,
        alt: "Schengen Tourist Visa Assistance by Global Visa Internationals",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505", // Added creator handle if available
    title: "Schengen Visa Experts (2026) | Tourist & Business | GVI",
    description:
      "Don't let visa rejection ruin your Europe trip. Expert Schengen visa assistance for Indians. 99% Success Rate. Contact GVI Bangalore.",
    images: [
      "https://www.globalvisainternationals.com/tourist-visa/Schengen-Tourist-Visa-Assistance-GVI.jpg",
    ],
  },

  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    ICBM: "12.9716,77.5946",
  },
};

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
        "Expert Schengen Visa consultants in Bangalore. Assistance for Schengen Tourist, Visitor, and Business visas including eligibility, documentation, and travel insurance support for 27 European countries.",
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

    // FAQPage
    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to apply Schengen tourist visa from India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To apply from India, identify your main destination (where you will stay the longest) and book an appointment with VFS Global for that specific country. You will need to submit your application form, passport, and documents like flight bookings, hotel proofs, and financial statements in person. Biometrics are mandatory. For a smooth process, you can contact <a href='https://wa.me/917022213466'>Global Visa International</a>."
          }
        },
        {
          "@type": "Question",
          "name": "How to get Schengen tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting the visa requires planning. You need to apply at the embassy/consulate of the country you intend to visit. Ensure your travel itinerary is clear, your travel insurance covers at least €30,000, and your bank statements prove you can fund the trip. Honesty in your application is the best way to get it approved."
          }
        },
        {
          "@type": "Question",
          "name": "How to apply Schengen tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The general process is: 1. Fill out the Schengen visa application form (Type C). 2. Gather supporting documents (insurance, photos, itinerary, proof of funds). 3. Book a visa appointment at the visa application centre (usually VFS). 4. Attend the interview and submit biometrics."
          }
        },
        {
          "@type": "Question",
          "name": "How to get Schengen tourist visa from India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian citizens must apply through the VFS Global centre that handles the specific Schengen country they are visiting. You cannot apply directly at the embassy for most countries. Ensure your passport has 6 months validity and you apply at least 45 days before your trip."
          }
        },
        {
          "@type": "Question",
          "name": "How long Schengen tourist visa valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard tourist visa allows you to stay for a maximum of **90 days** within any 180-day period. However, the embassy may grant you a visa valid for exactly the dates of your trip, or for a longer period (1 to 5 years) if you are a frequent traveller."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Schengen tourist visa take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard processing time is **15 working days**. However, during peak Indian holiday seasons (April-June and October-December), it can take 30 to 45 days. We strongly recommend applying well in advance."
          }
        },
        {
          "@type": "Question",
          "name": "How to extend Schengen tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Extending a tourist visa is extremely difficult and rarely granted. It is only allowed for 'force majeure' or humanitarian reasons (like a severe medical emergency preventing travel). You cannot extend it just to travel more."
          }
        },
        {
          "@type": "Question",
          "name": "How to convert Schengen tourist visa to work permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You generally **cannot** convert a tourist visa (Type C) to a work permit inside the Schengen area. You must return to India and apply for a National Employment Visa (Type D) from the embassy. Strict rules apply."
          }
        },
        {
          "@type": "Question",
          "name": "How to apply Schengen tourist visa from UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you are an Indian citizen living in the UK with a valid **Residence Permit** (BRP), you can apply from the UK through the local VFS or TLScontact centre. If you are in the UK as a tourist/visitor, you cannot apply there; you must apply from India."
          }
        },
        {
          "@type": "Question",
          "name": "How much Schengen tourist visa cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The official visa fee is **€90** (approx. ₹8,900) for adults and **€45** for children aged 6-12. Children under 6 are free. VFS service charges and courier fees are extra."
          }
        },
        {
          "@type": "Question",
          "name": "How long Schengen tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The visa allows a maximum stay of 90 days. The validity printed on the visa sticker can range from a few days (exact travel dates) to multiple years (circulation visa), depending on your travel history."
          }
        },
        {
          "@type": "Question",
          "name": "How to apply Schengen tourist visa from Philippines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian citizens residing in the Philippines (with a valid ACR I-Card or residence visa) can apply at the Schengen consulates or VFS centres in Manila or Cebu. You must prove your legal residence in the Philippines to apply there."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Schengen tourist visa cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of June 2024, the fee is €90 for adults. In Indian currency, this fluctuates but is roughly ₹8,000 - ₹9,000 depending on the exchange rate. Don't forget to budget for travel insurance and service fees."
          }
        },
        {
          "@type": "Question",
          "name": "Which Schengen country gives tourist visa easily?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Statistically, countries like **Iceland, Switzerland, and Finland** have higher approval rates. However, you must apply to the country that is your main destination. 'Visa shopping' (applying to an easy country but visiting another) can lead to border issues."
          }
        },
        {
          "@type": "Question",
          "name": "Which Schengen tourist visa is easy to get?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Smaller tourist-friendly nations like Slovakia, Iceland, and Luxembourg often have lower rejection rates. However, providing a genuine, complete file is the real secret to getting any visa easily. Need help perfecting your file? Chat with us at <a href='https://wa.me/917022213466'>Global Visa International</a>."
          }
        },
        {
          "@type": "Question",
          "name": "Which Schengen country gives longest tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "France and Germany are known for issuing longer-term 'circulation visas' (1 to 5 years validity) to trusted travellers who have visited the Schengen zone multiple times before without overstaying."
          }
        },
        {
          "@type": "Question",
          "name": "Which Schengen country is easy to get tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Switzerland and Iceland are often cited as having smoother processes and higher approval percentages for Indian tourists, provided your financial documents are solid."
          }
        },
        {
          "@type": "Question",
          "name": "Which Schengen tourist visa is easy to get from India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Currently, Switzerland, France, and Germany process high volumes of Indian applications efficiently. While 'easy' is subjective, these countries have very established systems for Indian tourists."
          }
        },
        {
          "@type": "Question",
          "name": "Can Schengen tourist visa be extended?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In 99% of cases, **no**. You cannot extend it for leisure. Extensions are strictly for emergencies (medical issues, force majeure) that physically prevent you from leaving the country."
          }
        },
        {
          "@type": "Question",
          "name": "Can Schengen tourist visa be used for business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a standard Type C Schengen visa covers business purposes (meetings, conferences, trade fairs). You do not need a separate visa type, but you should mention 'Business' as your purpose on the form and carry an invitation letter."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use Schengen tourist visa for business trip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can attend business meetings, training, or conferences on this visa. However, you strictly **cannot take up paid employment** or draw a salary from a European company while on this visa."
          }
        },
        {
          "@type": "Question",
          "name": "What is Schengen tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is a short-stay visa (Type C) that allows you to travel freely across all 29 Schengen area countries (like France, Italy, Germany, Swiss, etc.) for up to 90 days for tourism, family visits, or business."
          }
        },
        {
          "@type": "Question",
          "name": "What documents required for Schengen tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key documents include: Original Passport, 2 photos (35x45mm), Cover Letter, Flight Itinerary, Proof of Stay (Hotel/Sponsorship), Travel Insurance (min €30k coverage), ITR (3 years), and Bank Statements (last 6 months)."
          }
        },
        {
          "@type": "Question",
          "name": "Where to apply Schengen tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You must apply at the visa application centre (VAC) of your **main destination**. In India, VFS Global handles most countries (like France, Swiss, Germany), while BLS International handles Spain, and TLScontact handles a few others. Check the specific country's requirement."
          }
        },
        {
          "@type": "Question",
          "name": "How to apply for Schengen tourist visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start by gathering your financial proofs and travel itinerary. Book an appointment online with the relevant visa centre. If the paperwork feels confusing, we can handle the entire process for you. Contact us at <a href='https://wa.me/917022213466'>Global Visa International</a>."
          }
        }
      ]
    }
  ];

  return (
    <>
      {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className={styles.imageContainer}>
        <img
          src="/tourist-visa/Schengen-Tourist-Visa-Assistance-GVI.jpg"
          alt="Schengen Tourist Visa Assistance GVI"
          className={styles.VisaImage}
        />
      </div>

      <div className={styles.VisaSec}>
        <div className={styles.VisaData}>
          <h1 className={styles.Title}>Schengen Tourist Visa from India 2026 - Eligibility, Requirements & Fees | Global Visa Internationals</h1>

          <h2 className={styles.subTitle}>What is a Schengen Visa?</h2>
          <p>
            A <b className={styles.strong}>Schengen Visa</b> is a short-stay visa that allows you to travel freely across the <b className={styles.strong}>Schengen Area</b>, which comprises 29 European countries. It essentially abolishes internal borders, meaning once you enter one Schengen country, you can travel to others without showing your passport again (subject to temporary border checks).
          </p>
          <p>
            For Indian citizens in 2026, this remains the most convenient way to tour Europe. Whether you are visiting the Eiffel Tower in Paris, the Swiss Alps, or the canals of Venice, this single document is your key.
          </p>

          <h2 className={styles.subTitle}>Types of Schengen Visas Explained</h2>
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
              <h2 className={styles.subTitle}>29 Schengen Countries</h2>
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
                  <p className={styles.countryInfo}>Joined in 2024 (air & sea border)</p>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.countryName}>Croatia</span>
                  <p className={styles.countryInfo}>Joined in 2023</p>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.countryName}>Romania</span>
                  <p className={styles.countryInfo}>Joined in 2024 (air & sea border)</p>
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


          <h2 className={styles.subTitle}>Eligibility Criteria for Schengen visa</h2>
          <p>To qualify for a Schengen visa in 2026, you must meet these non-negotiable requirements:</p>
          <ul className={styles.checkList}>
            <li><b className={styles.strong}>Valid Passport:</b> Issued in the last 10 years, valid for 3+ months beyond your return date, with at least 2 blank pages.</li>
            <li><b className={styles.strong}>Residency:</b> You must be a legal resident in the country where you are applying (e.g., India).</li>
            <li><b className={styles.strong}>Financial Sufficiency:</b> Proof of funds (approx. €100-€150 per day) via bank statements and ITR.</li>
            <li><b className={styles.strong}>Intent to Return:</b> Strong evidence of ties to your home country (employment, family, assets) to prove you will not overstay.</li>
          </ul>

          <h2 className={styles.subTitle}>What are the Documents Required for Schengen Visa?</h2>
          <p>Documentation is the most critical part of the process. Incomplete files are the #1 reason for rejection.</p>
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

          <h2 className={styles.subTitle}>Where to Apply?</h2>
          <p>
            You cannot just apply to any country. You must apply at the embassy/consulate of your <b className={styles.strong}>main destination</b> (the country where you will stay the longest). If spending equal time in two countries, apply to the one you <b className={styles.strong}>enter first</b>.
          </p>
          <p>
            In India, most embassies outsource document collection to <b className={styles.strong}>VFS Global</b>, while some (like Spain) may use <b className={styles.strong}>BLS International</b>.
          </p>

          <h2 className={styles.subTitle}>How to Apply for a Schengen Visa?</h2>
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

          <h2 className={styles.subTitle}>How much does a Schengen visa cost? (2026 Rates)</h2>
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
                  <td>₹8,190</td>
                </tr>
                <tr>
                  <td>Children aged 6-12</td>
                  <td>€45</td>
                  <td>₹4,095</td>
                </tr>
                <tr>
                  <td>Children below 6</td>
                  <td>Free</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>Nationals of Armenia, Azerbaijan, Belarus</td>
                  <td>€35</td>
                  <td>₹3,185</td>
                </tr>
                <tr>
                  <td>Nationals of Cabo Verde</td>
                  <td>€67.50</td>
                  <td>₹6,142</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.smallText}>
              *Exchange rates fluctuate. VFS/BLS service charges (~₹1,500 - ₹2,500) are extra.
            </p>
          </div>

          <h2 className={styles.subTitle}>What is the processing time for a Schengen visa application?</h2>
          <p>
            <b className={styles.strong}>Standard Time:</b> 15 working days.<br />
            <b className={styles.strong}>Peak Season (Apr-Jun, Oct-Dec):</b> 30-45 calendar days.<br />
            We strongly advise applying at least <b className={styles.strong}>3-4 weeks</b> before your travel date.
          </p>

          <h2 className={styles.subTitle}>When Should I Apply for a Schengen Visa?</h2>
          <p>
            You can apply up to <b className={styles.strong}>6 months</b> before your trip. The latest you can apply is 15 days before travel, but this is risky. The sweet spot is <b className={styles.strong}>2 months prior</b>.
          </p>

          <h2 className={styles.subTitle}>How Much Money Do I Need to Visit the Schengen Area?</h2>
          <p>
            While it varies by country, a safe benchmark for 2026 is to show access to <b className={styles.strong}>€100 - €120 per day</b> of your trip, excluding pre-paid accommodation. For a 10-day trip, having a closing balance of around <b className={styles.strong}>₹2.5 - ₹3 Lakhs</b> is recommended.
          </p>

          <h2 className={styles.subTitle}>Top 10 Easiest Schengen Countries to Apply for Visa (2025-2026 Trends)</h2>
          <p>Based on rejection data from late 2025, these countries had the highest approval rates for Indian tourists.</p>
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

          <h2 className={styles.subTitle}>Success Tips for Schengen Visa</h2>
          <ul>
            <li><b className={styles.strong}>Be Honest:</b> Never present fake hotel bookings. Embassies check.</li>
            <li><b className={styles.strong}>Strong Cover Letter:</b> Clearly explain <i>why</i> you want to visit and <i>why</i> you must return.</li>
            <li><b className={styles.strong}>Bank History:</b> Avoid sudden large deposits right before applying. It looks suspicious.</li>
            <li><b className={styles.strong}>Insurance:</b> Ensure your insurance name matches your passport exactly.</li>
          </ul>
          <h2 className={styles.subTitle}>Common Reasons for Rejection of Schengen Visa</h2>
          <ul>
            <li><b className={styles.strong}>Insufficient Funds:</b> Balance is too low or shows "dummy" large deposits right before application.</li>
            <li><b className={styles.strong}>Unclear Purpose of Travel:</b> Itinerary is vague or unrealistic (e.g., visiting 5 countries in 6 days).</li>
            <li><b className={styles.strong}>Travel Insurance Invalid:</b> Policy does not cover the full duration or specific Schengen requirements.</li>
            <li><b className={styles.strong}>Damaged Passport:</b> Passports with torn pages or water damage are often rejected.</li>
          </ul>
          <div className={styles.servicesSection}>
            <h2 className={styles.subTitle}>How Global Visa Internationals (GVI) Ensures Your Success</h2>
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
              <a href="/contact-us" className={styles.primaryButton}>Start Your Application Today</a>
            </div>
          </div>

          <div class="faq-section">

            <h3 className={styles.subTitle}>How to apply Schengen tourist visa from India?</h3>
            <p>To apply from India, identify your main destination (where you will stay the longest) and book an appointment with VFS Global for that specific country. You will need to submit your application form, passport, and documents like flight bookings, hotel proofs, and financial statements in person. Biometrics are mandatory. For a smooth process, you can contact <a href='https://wa.me/917022213466'>Global Visa International</a>.</p>

            <h3 className={styles.subTitle}>How to get Schengen tourist visa?</h3>
            <p>Getting the visa requires planning. You need to apply at the embassy/consulate of the country you intend to visit. Ensure your travel itinerary is clear, your travel insurance covers at least €30,000, and your bank statements prove you can fund the trip. Honesty in your application is the best way to get it approved.</p>

            <h3 className={styles.subTitle}>How to apply Schengen tourist visa?</h3>
            <p>The general process is: 1. Fill out the Schengen visa application form (Type C). 2. Gather supporting documents (insurance, photos, itinerary, proof of funds). 3. Book a visa appointment at the visa application centre (usually VFS). 4. Attend the interview and submit biometrics.</p>

            <h3 className={styles.subTitle}>How to get Schengen  visa from India?</h3>
            <p>Indian citizens must apply through the VFS Global centre that handles the specific Schengen country they are visiting. You cannot apply directly at the embassy for most countries. Ensure your passport has 6 months validity and you apply at least 45 days before your trip.</p>

            <h3 className={styles.subTitle}>How long Schengen tourist visa valid?</h3>
            <p>A standard tourist visa allows you to stay for a maximum of <strong className={styles.strong}>90 days</strong> within any 180-day period. However, the embassy may grant you a visa valid for exactly the dates of your trip, or for a longer period (1 to 5 years) if you are a frequent traveller.</p>

            <h3 className={styles.subTitle}>How long does Schengen tourist visa take?</h3>
            <p>Standard processing time is <strong className={styles.strong}>15 working days</strong>. However, during peak Indian holiday seasons (April-June and October-December), it can take 30 to 45 days. We strongly recommend applying well in advance.</p>

            <h3 className={styles.subTitle}>How to extend Schengen tourist visa?</h3>
            <p>Extending a tourist visa is extremely difficult and rarely granted. It is only allowed for 'force majeure' or humanitarian reasons (like a severe medical emergency preventing travel). You cannot extend it just to travel more.</p>

            <h3 className={styles.subTitle}>How to convert Schengen tourist visa to work permit?</h3>
            <p>You generally <strong className={styles.strong}>cannot</strong> convert a tourist visa (Type C) to a work permit inside the Schengen area. You must return to India and apply for a National Employment Visa (Type D) from the embassy. Strict rules apply.</p>

            <h3 className={styles.subTitle}>How to apply Schengen tourist visa from UK?</h3>
            <p>If you are an Indian citizen living in the UK with a valid <strong className={styles.strong}>Residence Permit</strong> (BRP), you can apply from the UK through the local VFS or TLScontact centre. If you are in the UK as a tourist/visitor, you cannot apply there; you must apply from India.</p>

            <h3 className={styles.subTitle}>How much Schengen tourist visa cost?</h3>
            <p>The official visa fee is <strong className={styles.strong}>€90</strong> (approx. ₹8,900) for adults and <strong className={styles.strong}>€45</strong> for children aged 6-12. Children under 6 are free. VFS service charges and courier fees are extra.</p>

            <h3 className={styles.subTitle}>How long Schengen tourist visa?</h3>
            <p>The visa allows a maximum stay of 90 days. The validity printed on the visa sticker can range from a few days (exact travel dates) to multiple years (circulation visa), depending on your travel history.</p>

            <h3 className={styles.subTitle}>How to apply Schengen tourist visa from Philippines?</h3>
            <p>Indian citizens residing in the Philippines (with a valid ACR I-Card or residence visa) can apply at the Schengen consulates or VFS centres in Manila or Cebu. You must prove your legal residence in the Philippines to apply there.</p>

            <h3 className={styles.subTitle}>How much does Schengen tourist visa cost?</h3>
            <p>As of June 2024, the fee is €90 for adults. In Indian currency, this fluctuates but is roughly ₹8,000 - ₹9,000 depending on the exchange rate. Don't forget to budget for travel insurance and service fees.</p>

            <h3 className={styles.subTitle}>Which Schengen country gives tourist visa easily?</h3>
            <p>Statistically, countries like <strong className={styles.strong}>Iceland, Switzerland, and Finland</strong> have higher approval rates. However, you must apply to the country that is your main destination. 'Visa shopping' (applying to an easy country but visiting another) can lead to border issues.</p>

            <h3 className={styles.subTitle}>Which Schengen tourist visa is easy to get?</h3>
            <p>Smaller tourist-friendly nations like Slovakia, Iceland, and Luxembourg often have lower rejection rates. However, providing a genuine, complete file is the real secret to getting any visa easily. Need help perfecting your file? Chat with us at <a href='https://wa.me/917022213466'>Global Visa International</a>.</p>

            <h3 className={styles.subTitle}>Which Schengen country gives longest tourist visa?</h3>
            <p>France and Germany are known for issuing longer-term 'circulation visas' (1 to 5 years validity) to trusted travellers who have visited the Schengen zone multiple times before without overstaying.</p>

            <h3 className={styles.subTitle}>Which Schengen country is easy to get tourist visa?</h3>
            <p>Switzerland and Iceland are often cited as having smoother processes and higher approval percentages for Indian tourists, provided your financial documents are solid.</p>

            <h3 className={styles.subTitle}>Which Schengen tourist visa is easy to get from India?</h3>
            <p>Currently, Switzerland, France, and Germany process high volumes of Indian applications efficiently. While 'easy' is subjective, these countries have very established systems for Indian tourists.</p>

            <h3 className={styles.subTitle}>Can Schengen tourist visa be extended?</h3>
            <p>In 99% of cases, <strong className={styles.strong}>no</strong>. You cannot extend it for leisure. Extensions are strictly for emergencies (medical issues, force majeure) that physically prevent you from leaving the country.</p>

            <h3 className={styles.subTitle}>Can Schengen tourist visa be used for business?</h3>
            <p>Yes, a standard Type C Schengen visa covers business purposes (meetings, conferences, trade fairs). You do not need a separate visa type, but you should mention 'Business' as your purpose on the form and carry an invitation letter.</p>

            <h3 className={styles.subTitle}>Can I use Schengen tourist visa for business trip?</h3>
            <p>Yes, you can attend business meetings, training, or conferences on this visa. However, you strictly <strong className={styles.strong}>cannot take up paid employment</strong> or draw a salary from a European company while on this visa.</p>

            <h3 className={styles.subTitle}>What is Schengen tourist visa?</h3>
            <p>It is a short-stay visa (Type C) that allows you to travel freely across all 29 Schengen area countries (like France, Italy, Germany, Swiss, etc.) for up to 90 days for tourism, family visits, or business.</p>

            <h3 className={styles.subTitle}>What documents required for Schengen tourist visa?</h3>
            <p>Key documents include: Original Passport, 2 photos (35x45mm), Cover Letter, Flight Itinerary, Proof of Stay (Hotel/Sponsorship), Travel Insurance (min €30k coverage), ITR (3 years), and Bank Statements (last 6 months).</p>

            <h3 className={styles.subTitle}>Where to apply Schengen tourist visa?</h3>
            <p>You must apply at the visa application centre (VAC) of your <strong className={styles.strong}>main destination</strong>. In India, VFS Global handles most countries (like France, Swiss, Germany), while BLS International handles Spain, and TLScontact handles a few others. Check the specific country's requirement.</p>

            <h3 className={styles.subTitle}>How to apply for Schengen tourist visa?</h3>
            <p>Start by gathering your financial proofs and travel itinerary. Book an appointment online with the relevant visa centre. If the paperwork feels confusing, we can handle the entire process for you. Contact us at <a href='https://wa.me/917022213466'>Global Visa International</a>.</p>

          </div>
        </div>

        <div className={styles.formSection}>
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
