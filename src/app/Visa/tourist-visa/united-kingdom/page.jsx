
import VisaForm from '@/Components/VisaForm';
import styles from '@/Components/Visa.module.css';
import React from 'react';
import Head from 'next/head';

export const metadata = {
  title: "UK Tourist Visa from India | Best UK Visa Consultants in India - Global Visa Internationals",
  description:
    "Apply for your UK tourist visa from India with the best UK visa consultants. Get expert help for UK visitor visa application, documents, fees, and embassy interview. Trusted by thousands of Indian travellers.",
  keywords:
    "UK tourist visa from India, UK visitor visa consultants, UK visa agents in India, apply UK visa online India, UK visa assistance Bangalore, UK travel visa for Indian citizens, UK visa documentation help, UK visa consultants near me, UK visa process from India, UK visa cost 2025",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom",
  },
  openGraph: {
    title: "Apply for UK Tourist Visa from India | Trusted UK Visa Consultants",
    description:
      "Looking to travel to the UK from India? Global Visa Internationals offers full support for UK tourist visa applications, documentation, and embassy appointments. Fast processing. Reliable service since 2012.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom",
    siteName: "Global Visa Internationals",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/UK-Tourist-Visa-Assistance-GVI.jpg",
        width: 1200,
        height: 630,
        alt: "UK Tourist Visa Assistance from India - Global Visa Internationals",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "UK Tourist Visa from India | Fast UK Visa Application Help",
    description:
      "Get expert help to apply for your UK tourist visa from India. Global Visa Internationals provides visa application assistance, documentation support, and embassy appointment guidance.",
    images: [
      "https://www.globalvisainternationals.com/tourist-visa/UK-Tourist-Visa-Assistance-GVI.jpg",
    ],
  },
};



export default function UKTouristVisa() {
  const pageUrl = metadata.alternates.canonical;

  const TouristAttraction = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Tourist Attractions in the UK",
    "itemListElement": [
      {
        "@type": "TouristAttraction",
        "name": "Big Ben & Houses of Parliament",
        "description": "Historic clock tower and iconic British Parliament building in London.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/43/Elizabeth_Tower%2C_June_2022.jpg",
        "url": "https://www.parliament.Visa/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Buckingham Palace",
        "description": "Official London residence of the British monarch with Changing of the Guard ceremony.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Buckingham_Palace%2C_London_-_April_2009.jpg",
        "url": "https://www.rct.Visa/visit/the-state-rooms-buckingham-palace"
      },
      {
        "@type": "TouristAttraction",
        "name": "Tower of London",
        "description": "Historic fortress housing the Crown Jewels and offering guided tours.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tower_of_London_viewed_from_the_River_Thames.jpg",
        "url": "https://www.hrp.org.Visa/tower-of-london/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Stonehenge",
        "description": "Mysterious prehistoric stone circle and world heritage site in Wiltshire.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg",
        "url": "https://www.english-heritage.org.Visa/visit/places/stonehenge/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Edinburgh Castle",
        "description": "Famous Scottish fortress offering panoramic views of Edinburgh.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8f/View_of_Edinburgh_Castle_%28from_the_south_east%29.jpg",
        "url": "https://www.edinburghcastle.scot/"
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
        "name": "UK Tourist Visa",
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
    "description": "Trusted UK Tourist Visa Consultants in Bangalore. Apply for your UK visitor visa from India with expert help for documents, online application & appointment booking.",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(TouristAttraction) }}
        />

      </Head>


      <div className={styles.imageContainer}>

        <img
          src="/tourist-visa/UK-Tourist-Visa-Assistance-GVI.jpg"
          alt="UK Tourist Visa Assistance GVI"
          className={styles.VisaImage}
        />
      </div>
      <div className={styles.VisaSec}>

        <div className={styles.VisaData}>
          <section>
            <h1 className={styles.Title}>Dubai Tourist Visa from India 2025 – Eligibility, Requirements & Fees | Global Visa Internationals</h1>

            <h2 className={styles.subTitle}>✈ Travel to Dubai with a Tourist E-Visa</h2>
            <p>Planning a trip to the mesmerizing city of Dubai? A tourist visa is required for Indian citizens to visit for tourism, to see family, or for a short-term business trip. At Global Visa Internationals (GVI), we simplify the process with expert guidance, transparent support, and end-to-end visa file handling. We are your trusted partner for a stress-free online visa application process.</p>
          </section>

          <div className={styles.section}>
            <section>
              <h2 className={styles.subTitle}>Dubai Visa Processing Overview</h2>
              <p>Global Visa Internationals (GVI) will manage the entire documentation process for your Dubai e-visa to ensure your application meets the expectations of the General Directorate of Residency and Foreigners Affairs (GDRFA) and that your travel purpose is clearly and professionally represented.</p>
            </section>

            <section>
              <h3 className={styles.subTitle}>Our Services Include:</h3>
              <ul>
                <li>Online visa application form filling</li>
                <li>Covering letter and documentation preparation</li>
                <li>Personalized checklist and guidance</li>
                <li>Providing accepted samples for the required documents</li>
                <li>Verification of documentation</li>
                <li>Complete walk-through of the process</li>
              </ul>
            </section>

            <section>
              <h3 className={styles.subTitle}>Timeline:</h3>
              <p>Processing for your Dubai visa online application will begin once we receive 100% of the documents as per our checklist. The document finalization will take approximately 1 to 2 working days.</p>
            </section>
          </div>

          <section>
            <h2 className={styles.subTitle}>🕒 Dubai Visa Duration & Types</h2>
            <p>A Dubai tourist visa typically allows you to stay for up to 30 or 60 days. You can also apply for a multiple entry Dubai visa. There are also short-term options like the 14-day tourist visa and transit visa Dubai for shorter layovers. Overstaying your visa may lead to fines or an entry ban. Our experts ensure you understand the validity and stay duration to avoid any issues.</p>
            <p>👉 With GVI, you’ll never miscalculate your stay—we ensure full compliance with UAE visa rules.</p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Dubai Tourist Visa Documents & Requirements for Indian Citizens</h2>
            <p>Before applying, ensure you meet the Dubai visa requirements. If these criteria are met, Global Visa Internationals (GVI) will accept your case and manage the entire online application process. You won't need to visit a center; we handle everything electronically. This includes applications for a Dubai visa for family, a Dubai visa for a single lady, or a Dubai visa for a minor.</p>
          </section>

          <section>
            <h3 className={styles.subTitle}>1. Valid Passport & Travel History</h3>
            <ul>
              <li><b className={styles.strong}>Valid Passport:</b> Must be valid for at least 6 months from your travel date. We will need a scanned color copy of the first and last pages.</li>
              <li><b className={styles.strong}>Previous Travel:</b> While not always mandatory, having a good travel history can strengthen your application.</li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>2. Photograph</h3>
            <ul>
              <li><b className={styles.strong}>Passport-Sized Photo:</b> A recent color photograph with a white background. Our team will guide you on the exact specifications for your Dubai visa application.</li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>3. Travel & Accommodation Proof</h3>
            <ul>
              <li><b className={styles.strong}>Confirmed Flight Tickets:</b> A scanned copy of your confirmed return flight ticket is a mandatory requirement.</li>
              <li><b className={styles.strong}>Accommodation Proof:</b> While not always strictly required, confirmed hotel reservations covering your stay are highly recommended. If staying with a relative, we'll guide you on the necessary invitation letter.</li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>4. Other Required Documents</h3>
            <ul>
              <li><b className={styles.strong}>Visa Cover Letter & Itinerary:</b> A well-drafted letter explaining the purpose of your trip and a detailed travel plan is your opportunity to convince the visa officer. Our experts draft a professional one for every client to maximize their chances of success for a Dubai visit visa for Indian passport holders.</li>
            </ul>
            <p>For specific cases like a Dubai visa for honeymoon or a Dubai visa for a business trip, we provide tailored guidance on the documents needed to support your purpose.</p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Dubai Visa Fees for Indian Citizens 2025</h2>
            <p>The Dubai visa cost from India is subject to change. The fees depend on the type and duration of the visa. The prices below are approximate and may vary with currency exchange rates.</p>
            <ul>
              <li><b className={styles.strong}>14-Day Tourist Visa:</b> Approximately ₹7,099</li>
              <li><b className={styles.strong}>30-Day Dubai Tourist Visa Price:</b> Approximately ₹7,299</li>
              <li><b className={styles.strong}>60-Day Dubai Visa Cost:</b> Approximately ₹12,399</li>
              <li><b className={styles.strong}>30-Day Multiple-Entry Visa:</b> Approximately ₹16,599</li>
            </ul>
            <p>Please note that all fees are non-refundable in case of visa refusal. These costs are for the e-visa and do not include our service charges. For urgent Dubai visa requirements, we also offer an express Dubai visa service for an additional fee.</p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Dubai Visa Processing Time from India</h2>
            <p>The processing time for a Dubai tourist visa for Indian nationals is generally very fast. Here are some general timelines:</p>
            <ul>
              <li><b className={styles.strong}>Standard Processing Time:</b> 3 to 4 working days.</li>
              <li><b className={styles.strong}>Urgent/Express Service:</b> You can choose to pay an additional fee for faster processing (24 to 48 working hours).</li>
              <li><b className={styles.strong}>Our Service:</b> Once we receive your documents, GVI finalizes your file within 1–2 working days, ensuring it is submitted in a timely manner for quick approval.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.subTitle}>The Online Application Process: A Step-by-Step Guide</h2>
            <p>As an experienced visa consultant in India, we manage the entire process for you. Here’s a quick overview of what to expect when you apply for your Dubai visa online with us:</p>
            <ol>
              <li><b className={styles.strong}>Document Collection:</b> You provide us with the required documents electronically (scans or high-quality photos).</li>
              <li><b className={styles.strong}>Application & Filing:</b> We fill out and submit the application on your behalf to the relevant immigration authorities.</li>
              <li><b className={styles.strong}>E-Visa & Tracking:</b> Once approved, we will send you your electronic visa via email. We help you track your Dubai visa online application status throughout the process.</li>
            </ol>
          </section>

          <section>
            <h2 className={styles.subTitle}>Transparent Pricing</h2>
            <p>Choose the right Dubai visa assistance package for your needs:</p>
            <ul>
              <li><b className={styles.strong}>Basic (₹2,999 ):</b> Checklist + document review</li>
              <li><b className={styles.strong}>Standard (₹4,999 ):</b> End-to-end application, filing, and biometrics guidance</li>
            </ul>
            <p>Please note that these are our service charges and do not include the government visa fees.</p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
            <p>At GVI, we are committed to making your Dubai visa process stress-free and successful. Our expertise and dedication have led to:</p>
            <ul>
              <li>Over 5,000 UAE tourist visas processed for Indian nationals.</li>
              <li>High client satisfaction rate across India.</li>
              <li>Specialized assistance for complex cases, including a transit visa Dubai.</li>
              <li>Experienced visa consultants who provide personalized, country-specific advice. We have successfully processed visas from cities like Dubai visa from Delhi, Dubai visa from Mumbai, and Dubai visa from Bangalore.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.subTitle}>Ready to Apply?</h2>
            <p>With GVI, you don’t need to worry about rejections or missing documents. We are your go-to guide for a smooth process.</p>
            <p>👉 Start your Dubai visa for Indian passport holders today with Global Visa Internationals and travel with confidence.</p>
            <br />
            <a href="/contact" className={styles.ctaButton}>Get a free consultation today!</a>
          </section>
        </div>


        <div className={styles.formSection}>
          <VisaForm />
        </div>
      </div >
    </>
  );
}