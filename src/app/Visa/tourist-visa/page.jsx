import styles from "@/app/Visa/tourist-visa/tourist.module.css";
import Head from "next/head";
// import VisaForm from "";

export const metadata = {
  title:
    "Tourist Visa Assistance: Canada, USA, UK, Schengen & More | Global Visa Internationals",
  description:
    "Apply for tourist visas with Global Visa Internationals. Get expert guidance for Schengen, Canada, USA, UK, Australia, Dubai, Singapore, and New Zealand visas. Learn requirements, documents, fees, and travel tips.",
  keywords:
    "tourist visa, apply tourist visa India, Canada tourist visa, USA tourist visa, UK tourist visa, Schengen visa, Australia tourist visa, Dubai tourist visa, Singapore tourist visa, New Zealand tourist visa, visa consultants, visa requirements, visa documents, visa fees",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa",
  },
  openGraph: {
    title: "Tourist Visa Assistance: Canada, USA, UK, Schengen & More",
    description:
      "Global Visa Internationals helps Indian travelers apply for tourist visas worldwide – including Schengen, Canada, USA, UK, Australia, Dubai, Singapore, and New Zealand. Expert help on requirements, documents, and fees.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa",
    siteName: "Global Visa Internationals",
    images: [
      {
        url: "https://www.globalvisainternationals.com/visa-banner/Tourist-Visa-Assistance-Banner.webp",
        width: 1200,
        height: 630,
        alt: "Tourist Visa Assistance Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "Tourist Visa Assistance: Canada, USA, UK, Schengen & More",
    description:
      "Plan your trip with confidence. Apply for tourist visas (Schengen, Canada, USA, UK, Australia, Dubai, Singapore, New Zealand) with Global Visa Internationals – expert guidance for documents, fees, and approvals.",
    images: [
      "https://www.globalvisainternationals.com/visa-banner/Tourist-Visa-Assistance-Banner.webp",
    ],
  },
};


export default function Schengen_Visa_Assistance() {
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
        "name": "Schengen Visa",
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
    "description": "Global Visa Internationals is a trusted travel visa consultancy in Bangalore. We assist with Tourist, Visitor, and Business visas for Canada, USA, UK, Schengen, Australia, Dubai, Singapore, New Zealand, and more.",
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
    "sameAs": [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://www.google.com/maps/place/Global+Visa+Internationals"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to get a Schengen tourist visa from India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On average, a Schengen tourist visa from India takes 15 to 21 working days after submission, depending on the embassy and travel season."
        }
      },
      {
        "@type": "Question",
        "name": "Can Global Visa Internationals help with USA, UK, and Canada tourist visas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide complete assistance for USA, UK, Canada, Schengen, Australia, Dubai, Singapore, and New Zealand tourist visas."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for a tourist visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The basic documents include a valid passport, recent photographs, travel itinerary, proof of funds, employment proof, and accommodation details. Requirements may vary by country."
        }
      },
      {
        "@type": "Question",
        "name": "Do you assist with visa interview preparation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for USA, UK, and Canada visas we provide mock interview preparation, guidance, and practice sessions to help applicants succeed."
        }
      },
      {
        "@type": "Question",
        "name": "Is visa fee included in the service charges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our consultancy fees do not include embassy visa fees, except in some cases like Singapore visas where the visa fee is bundled. We will provide a clear breakdown before starting your application."
        }
      }
    ]
  };

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

        {/* Structured Data: JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      </Head>


      <div className={styles.VisaSec}>
        <h1 className={styles.Title}>
          Choose the right <b className={styles.strong}>Tourist Visa Assistance Package</b> for your needs:
        </h1>
        <section className={styles.PackCard}>

          {/* Canada */}
          <section className={styles.service}>
            <h2 className={styles.countryTitle}>Canada Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹5,499 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>Checklist + document review</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20Canada%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
              <div className={`${styles.pricingCard} ${styles.highlighted}`}>
                <h3 className={styles.planTitle}>Standard</h3>
                <p className={styles.planPrice}>₹8,999 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>End-to-end application</li>
                  <li>Filing and appointment booking</li>
                  <li>Biometrics guidance</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20Canada%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
            </div>
          </section>

          {/* Australia */}
          <section className={styles.service}>
            <h2 className={styles.countryTitle}>Australia Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹4,999 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>Checklist + document review</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20Australia %20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
              <div className={`${styles.pricingCard} ${styles.highlighted}`}>
                <h3 className={styles.planTitle}>Standard</h3>
                <p className={styles.planPrice}>₹8,999 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>End-to-end application</li>
                  <li>Submission & biometrics assistance</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20Australia %20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
            </div>
          </section>

          {/* USA */}
          <section className={styles.service}>
            <h2 className={styles.countryTitle}>USA Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹6,499 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>DS-160 form review</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20USA%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
              <div className={`${styles.pricingCard} ${styles.highlighted}`}>
                <h3 className={styles.planTitle}>Standard</h3>
                <p className={styles.planPrice}>₹8,999 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>DS-160 form filling</li>
                  <li>Interview slot booking</li>
                  <li>Mock interview prep</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20USA%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select Package
                </a>
              </div>
            </div>
          </section>

          {/* UK */}
          <section className={styles.service}>
            <h2 className={styles.countryTitle}>UK Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹6,499 + GST</p>
                <ul className={styles.planFeatures}>
                  <li> Review Of application</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20UK%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
              <div className={`${styles.pricingCard} ${styles.highlighted}`}>
                <h3 className={styles.planTitle}>Standard</h3>
                <p className={styles.planPrice}>₹8,999 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>Application filling</li>
                  <li>Appointment slot booking</li>
                  <li>Complet Process Assistance</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20UK%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
            </div>
          </section>

          {/* Schengen */}
          <section className={styles.service}>
            <h2 className={styles.countryTitle}>Schengen Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹6,499 + GST</p>
                <ul className={styles.planFeatures}>
                  <li> Review Of application</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20Schengen%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
              <div className={`${styles.pricingCard} ${styles.highlighted}`}>
                <h3 className={styles.planTitle}>Standard</h3>
                <p className={styles.planPrice}>₹8,999 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>Application filling</li>
                  <li>Appointment slot booking</li>
                  <li>Complet Process Assistance</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20Schengen%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
            </div>
          </section>

          {/* New Zealand with a Visitor Visa */}
          <section className={styles.service}>
            <h2 className={styles.countryTitle}>New Zealand Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹6,499 + GST</p>
                <ul className={styles.planFeatures}>
                  <li> Review Of application</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20New%20Zealand%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
              <div className={`${styles.pricingCard} ${styles.highlighted}`}>
                <h3 className={styles.planTitle}>Standard</h3>
                <p className={styles.planPrice}>₹8,999 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>Application filling</li>
                  <li>Appointment slot booking</li>
                  <li>Complet Process Assistance</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20New%20Zealand%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
            </div>
          </section>

          <section className={styles.service}>

            {/* Singapore with a Visitor Visa */}
            <h2 className={styles.countryTitle}>Singapore Tourist Visa</h2>
            <div className={styles.pricingContainer}>

              <div className={`${styles.pricingCard} ${styles.highlighted}`}>
                <h3 className={styles.planTitle}>Standard</h3>
                <p className={styles.planPrice}>₹3,850/-</p>
                <ul className={styles.planFeatures}>
                  <li>Application filling</li>
                  <li>Including Visa Fee</li>
                  <li>Complet Process Assistance</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20Singapore%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
            </div>
          </section>
          <section className={styles.service}>
            {/* Dubai with a Visitor Visa */}
            <h2 className={styles.countryTitle}>Dubai Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={`${styles.pricingCard} ${styles.highlighted}`}>
                <h3 className={styles.planTitle}>Standard</h3>
                <p className={styles.planPrice}>₹6,499 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>Application filling</li>
                  <li>Appointment slot booking</li>
                  <li>Complet Process Assistance</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20Dubai %20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select The Plan
                </a>
              </div>
            </div>
          </section>


          {/* Repeat the same pattern for:
      - UK Tourist Visa
      - Europe Tourist Visa
      - Schengen Tourist Visa
      - Japan Tourist Visa
      - Dubai Tourist Visa
      - New Zealand Tourist Visa
      - Singapore Tourist Visa
  */}

        </section>

      </div>
      {/* <div className={styles.formSection}>
        <VisaForm />
      </div> */}
      {/* <section id="ClientReviews" className={styles.reviewSection}>
        <div
          className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5"
          data-elfsight-app-lazy
        ></div>
      </section> */}

    </>
  );
}
