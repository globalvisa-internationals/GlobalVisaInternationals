import styles from "@/app/Visa/tourist-visa/tourist.module.css";
import Head from "next/head";
// import VisaForm from "";

export const metadata = {
  title:
    "Schengen Visa Assistance: Tourist, Visitor & Business Visa Requirements | Global Visa Internationals",
  description:
    "Apply for a Schengen Visa with Global Visa Internationals. Get expert guidance for Schengen tourist visas, visitor visas, and business visas. Learn requirements, documents, fees, and travel tips for 27 European countries.",
  keywords:
    "Schengen visa, Schengen tourist visa, apply Schengen visa India, Schengen business visa, Schengen visitor visa, Schengen visa requirements, Schengen visa documents, Schengen visa consultants, Schengen visa fees, Europe tourist visa, apply Schengen visa online",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://globalvisainternationals.com/Visa/tourist-visa/schengen-tourist-visa",
  },
  openGraph: {
    title: "Schengen Visa Assistance: Tourist, Visitor & Business Visa Support",
    description:
      "Global Visa Internationals helps Indian travelers apply for Schengen tourist, visitor, and business visas. Get expert guidance on requirements, documents, and travel insurance for 27 Schengen countries.",
    url: "https://globalvisainternationals.com/Visa/tourist-visa/schengen-tourist-visa",
    siteName: "Global Visa Internationals",
    images: [
      {
        url: "https://www.globalvisainternationals.com/visa-banner/Schengen-Tourist-Visa-assistance-banner.webp",
        width: 1200,
        height: 630,
        alt: "Schengen Tourist Visa Assistance Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "Schengen Visa Assistance: Tourist, Visitor & Business Visa Support",
    description:
      "Plan your trip to Europe with confidence. Apply for Schengen tourist, visitor, or business visa with Global Visa Internationals – expert help for documents, fees, and approvals.",
    images: [
      "https://www.globalvisainternationals.com/visa-banner/Schengen-Tourist-Visa-assistance-banner.webp",
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
    "description": "Expert Schengen Visa consultants in Bangalore. Assistance for Schengen Tourist, Visitor, and Business visas including eligibility, documentation, and travel insurance support for 27 European countries.",
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
      </Head>
      {/* 
      <div className={styles.imageContainer}>
        <img
          src="/visa-banner/Schengen-Tourist-Visa-assistance-banner.webp"
          alt="Canada Image"
          className={styles.VisaImage}
        />
      </div> */}

      <div className={styles.VisaSec}>
        <p>
          Choose the right <b className={styles.strong}>Tourist Visa Assistance Package</b> for your needs:
        </p>
        <section className={styles.PackCard}>

          <section className={styles.service}>

            {/* Canada */}
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
          <section className={styles.service}>

            {/* Australia */}
            <h2 className={styles.countryTitle}>Australia Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹4,999 + GST</p>
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
                <p className={styles.planPrice}>₹6,999 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>End-to-end application</li>
                  <li>Submission & biometrics assistance</li>
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
          <section className={styles.service}>

            {/* USA */}
            <h2 className={styles.countryTitle}>USA Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹6,499 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>DS-160 form review</li>
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
                  <li>DS-160 form filling</li>
                  <li>Interview slot booking</li>
                  <li>Mock interview prep</li>
                </ul>
                <a
                  href="https://wa.me/917022213466?text=Hi%20I%20am%20interested%20in%20Canada%20Tourist%20Visa%20(Basic%20Package)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  Select Package
                </a>
              </div>
            </div>
          </section>
          <section className={styles.service}>

            {/* USA */}
            <h2 className={styles.countryTitle}>USA Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹6,499 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>DS-160 form review</li>
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
                  <li>DS-160 form filling</li>
                  <li>Interview slot booking</li>
                  <li>Mock interview prep</li>
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
          <section className={styles.service}>

            {/* USA */}
            <h2 className={styles.countryTitle}>USA Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹6,499 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>DS-160 form review</li>
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
                  <li>DS-160 form filling</li>
                  <li>Interview slot booking</li>
                  <li>Mock interview prep</li>
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
          <section className={styles.service}>

            {/* USA */}
            <h2 className={styles.countryTitle}>USA Tourist Visa</h2>
            <div className={styles.pricingContainer}>
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹6,499 + GST</p>
                <ul className={styles.planFeatures}>
                  <li>DS-160 form review</li>
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
                  <li>DS-160 form filling</li>
                  <li>Interview slot booking</li>
                  <li>Mock interview prep</li>
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
