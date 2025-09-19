
import styles from '@/Components/Visa.module.css';
import React from 'react';
import Head from 'next/head';
import VisaForm from '@/Components/VisaForm';

export const metadata = {
  title: "Japan Tourist Visa Consultants in Bangalore | Global Visa Internationals",
  description: "Apply for a Japan Tourist Visa with expert support from Global Visa Internationals. 11+ years of experience. Smooth documentation, fast process, and mock interviews.",
  keywords: "Japan tourist visa, Japan visa consultants in Bangalore, Japan visitor visa from India, how to apply for Japan visa, Japan travel visa assistance",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/japan-tourist-visa",
  },
  openGraph: {
    type: "website",
    title: "Apply for Japan Tourist Visa from India | Global Visa Internationals",
    description: "Trusted visa agents for Japan in Bangalore. Expert documentation, embassy interview prep, and high visa success rate.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/japan-tourist-visa",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Japan-Tourist-Visa-Assistance-GVI.jpg",
        alt: "Japan Tourist Visa Assistance",
      }
    ],
    siteName: "Global Visa Internationals"
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalvisainternationals",
    title: "Japan Tourist Visa Experts – Global Visa Internationals",
    description: "Planning to travel to Japan? Get full visa support from trusted consultants in Bangalore.",
    images: ["https://www.globalvisainternationals.com/tourist-visa/Japan-Tourist-Visa-Assistance-GVI.jpg"]
  }
};



export default function JapanTouristVisa() {
  const pageUrl = metadata.alternates.canonical;
  const TouristAttraction = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Tourist Attractions in Japan",
    "itemListElement": [
      {
        "@type": "TouristAttraction",
        "name": "Mount Fuji",
        "description": "Japan's tallest mountain and iconic symbol, popular for hiking and photography.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Fuji_from_Yamanaka.jpg",
        "url": "https://www.Visa.travel/en/uk/uk-destinations/fuji-five-lakes-mount-fuji/"
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
        "url": "https://www.Visa.travel/en/spot/1207/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Himeji Castle",
        "description": "A UNESCO World Heritage Site and Japan's most spectacular and best-preserved castle.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Himeji_Castle_in_May_2015.jpg",
        "url": "https://www.himejicastle.jp/en/"
      }
    ]


  }
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
        "name": "Japan Tourist Visa",
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
        <img src="/tourist-visa/Japan-Tourist-Visa-Assistance-GVI.jpg" alt="Japan Tourist Visa Assistance GVI" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>


        <div className={styles.VisaData}>
          <section>
            <h2 className={styles.subTitle}>✈ Travel to Japan with a Visitor Visa</h2>
            <p>
              Planning a trip to Japan? The Japan Tourist Visa allows Indian travelers to visit for tourism, to see family, or for short-term business purposes. At Global Visa Internationals (GVI), we simplify the process with expert guidance, transparent support, and end-to-end visa file handling. We specialize in providing comprehensive <strong className={styles.strong}>Japan visa assistance for Indians</strong>.
            </p>
          </section>

          <div className={styles.section}>
            <section>
              <h2 className={styles.subTitle}>Visa Processing Overview</h2>
              <p>
                Global Visa Internationals (GVI) will manage the entire documentation process to ensure that your <strong className={styles.strong}>Japan visa application from India</strong> meets the expectations of the Japanese Embassy and that your travel purpose is clearly and professionally represented. We are a trusted <strong className={styles.strong}>Japan visa consultant in India</strong>.
              </p>
            </section>

            <section>
              <h3 className={styles.subTitle}>Our Services Include:</h3>
              <ul>
                <li>Visa application form filling assistance</li>
                <li>Covering letter and documentation preparation</li>
                <li>Personalized Japan tourist visa checklist and guidance</li>
                <li>Providing accepted samples for the required documents</li>
                <li>Verification of documentation</li>
                <li>Complete walk-through of the Japan tourist visa process</li>
              </ul>
            </section>

            <section>
              <h3 className={styles.subTitle}>Timeline:</h3>
              <p>
                Processing will begin once we receive 100% of the documents as per our checklist. The document finalization will take approximately 3 to 5 working days. This is an essential first step in the overall <strong className={styles.strong}>Japan visa processing time from India</strong>.
              </p>
            </section>
          </div>

          <section>
            <h2 className={styles.subTitle}>🕒 Japan Visa Duration Rule</h2>
            <p>
              A Japan Tourist Visa typically allows you to stay for up to 15, 30 or 90 days depending on the visa issued. A <strong className={styles.strong}>Japan multiple entry visa for Indians</strong> may be issued with a validity of 1, 3, or 5 years for eligible applicants. Note that even with a multiple-entry visa, you can only stay for the authorized period on each visit. Overstaying may lead to fines, entry bans, or refusal of future visa applications.
            </p>
            <p>
              👉 With GVI, you'll never miscalculate your stay—we ensure full compliance with Japanese immigration rules.
            </p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Japan Visitor Visa Documents & Requirements for Indian Applicants</h2>
            <p>
              Before applying, ensure you meet the <strong className={styles.strong}>Japan visa eligibility for Indians</strong>. If these criteria are met, Global Visa Internationals (GVI) will accept your case, manage the entire documentation process, and guide you through submission. You may need to visit the application center or embassy for submission. We provide a detailed <strong className={styles.strong}>Japan tourist visa document checklist</strong>.
            </p>
          </section>

          <section>
            <h3 className={styles.subTitle}>1. Valid Passport & Travel History</h3>
            <ul>
              <li>
                <b className={styles.strong}>Valid Passport:</b> Must be valid for at least six months beyond your intended stay, with at least two blank pages. We guide you on all <strong className={styles.strong}>Japan visa passport requirements</strong>.
              </li>
              <li>
                <b className={styles.strong}>Travel History:</b> Previous international travel to developed countries strengthens your application. GVI helps you highlight these to strengthen your Japan visa application.
              </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>2. Financial Proof: Bank Statements & Funds</h3>
            <p>
              You must prove you have sufficient funds to support your trip without working. The consulate needs to be convinced you can support your entire stay. We recommend maintaining a minimum balance of ₹1–2 lakh (or approx. ¥200,000-¥400,000) in your bank account. This is a key part of the <strong className={styles.strong}>proof of funds for Japan visitor visa</strong>. Avoid any large, unexplained transactions in the months leading up to your application.
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Bank Statements:</b> Submit original bank statements for the last 6 months, stamped by the bank. We advise on the <strong className={styles.strong}>Japan tourist visa bank statement requirements</strong>.
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
                <b className={styles.strong}>Business Owners/Self-Employed:</b> Submit your business registration license (GST certificate/partnership deed) and last 2-3 years' ITRs. We also recommend a brief business profile. This also applies for <strong className={styles.strong}>Japan visa for retired persons</strong>.
              </li>
              <li>
                <b className={styles.strong}>Students:</b> Provide an enrolment letter and NOC from your school/university. We also assist with <strong className={styles.strong}>Japan tourist visa for minors</strong>.
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
                <b className={styles.strong}>Accommodation Proof:</b> Provide confirmed hotel reservations covering your entire stay. If staying with a friend or relative, you will need a <strong className={styles.strong}>Japan visa invitation letter</strong> and proof of their Japanese address and residency status. We assist with applications for a <strong className={styles.strong}>Japan visa for family</strong> and <strong className={styles.strong}>Japan visa for parents</strong>.
              </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>5. Visa Application Form & Itinerary</h3>
            <p>
              A well-written day-by-day itinerary is crucial for your Japan visa application. It should include your travel plans, places to visit, and proof of your strong ties to India (e.g., family, job). Our experts draft a professional <strong className={styles.strong}>Japan tourist visa itinerary sample</strong> for every client to maximize their chances of success.
            </p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Japan Tourist Visa Fees (India 2025)</h2>
            <p>
              As of 2025, the Japan visa fees are subject to change. The fees listed below are approximate and do not include additional services. We provide transparent guidance on the <strong className={styles.strong}>Japan tourist visa cost in rupees</strong>.
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Single Entry Visa Fee:</b> ¥3,000 (approx. ₹1,700)
              </li>
              <li>
                <b className={styles.strong}>Multiple Entry Visa Fee:</b> ¥6,000 (approx. ₹3,400)
              </li>
              <li>
                <b className={styles.strong}>Service Charges:</b> Vary based on services availed (e.g., documentation assistance, consultation, etc.)
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.subTitle}>Common Reasons for Japan Visa Rejection & How We Solve Them</h2>
            <p>
              Visa rejections are often a result of simple mistakes. Our structured process is designed to eliminate these common issues. We help you understand the most frequent <strong className={styles.strong}>Japan tourist visa rejection reasons</strong>.
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Incomplete/Mismatched Documents:</b> We perform a professional document review as per embassy standards to ensure everything is perfect.
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
            <h2 className={styles.subTitle}>Japan Visa Processing Time from India</h2>
            <p>
              The <strong className={styles.strong}>Japan visa processing time from India</strong> can vary. Here are some general timelines:
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Standard Processing Time:</b> Typically 5 to 7 working days after submission to the embassy/consulate.
              </li>
              <li>
                <b className={styles.strong}>Peak Season:</b> Can extend to 10-12 working days during holiday seasons.
              </li>
              <li>
                <b className={styles.strong}>Our Service:</b> Once we receive your documents, GVI finalizes your file within 3–5 working days, ensuring it is submitted to the embassy in a timely manner. We help you track <strong className={styles.strong}>Japan visa application status</strong>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.subTitle}>The Japan Visa Application Process: A Step-by-Step Guide</h2>
            <p>
              We manage this process for you. Here's a quick overview of what to expect:
            </p>
            <ol>
              <li>
                <b className={styles.strong}>Document Preparation:</b> We help you gather and prepare all necessary documents according to embassy requirements.
              </li>
              <li>
                <b className={styles.strong}>Application Submission:</b> Depending on your location, you may need to submit documents through an authorized visa application center or directly to the consulate.
              </li>
              <li>
                <b className={styles.strong}>Application Tracking:</b> Once submitted, we help you track your application status until your passport is ready for collection.
              </li>
            </ol>
          </section>

          <h2 className={styles.subTitle}>Transparent Pricing</h2>
          <p>
            Choose the right Japan visa assistance package for your needs:
          </p>
          <ul>
            <li>
              <b className={styles.strong}>Basic (₹4,999):</b> Checklist + document review
            </li>
            <li>
              <b className={styles.strong}>Standard (₹7,999):</b> End-to-end application assistance, documentation preparation, and submission guidance
            </li>
          </ul>

          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>
            At GVI, we are committed to making your visa process stress-free and successful. Our expertise and dedication have led to:
          </p>
          <ul>
            <li>1,800+ Japan visas processed since 2017</li>
            <li>97% client satisfaction rate across India</li>
            <li>Specialized assistance for re-application after rejection</li>
            <li>Experienced visa consultants who provide personalized, country-specific advice.</li>
          </ul>

          <h2 className={styles.subTitle}>Ready to Apply?</h2>
          <p>
            With GVI, you don't need to worry about rejections or missing documents.
          </p>
          <p>
            👉 Start your <strong className={styles.strong}>Japan visa application</strong> today with Global Visa Internationals and experience the beauty of Japan with confidence. We are recognized as a <strong className={styles.strong}>best visa consultancy for Japan</strong>.
          </p>
          <br />
          <a href="/contact" className={styles.ctaButton}>
            Get a free consultation today!
          </a>
        </div>
        <div className={styles.formSection}>
          <VisaForm />
        </div>
      </div >
      <section id='Client Reviews'>
        <h2 className={styles.subtitle}>Client Reviews</h2>
        <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
      </section>
    </>
  );
}