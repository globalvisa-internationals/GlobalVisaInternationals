
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
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/uk/uk-tourist-visa",
  },
  openGraph: {
    title: "Apply for UK Tourist Visa from India | Trusted UK Visa Consultants",
    description:
      "Looking to travel to the UK from India? Global Visa Internationals offers full support for UK tourist visa applications, documentation, and embassy appointments. Fast processing. Reliable service since 2012.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/uk/uk-tourist-visa",
    siteName: "Global Visa Internationals",
    images: [
      {
        url: "https://www.globalvisainternationals.com/visa-banner/London-Tourist-Visa-Global-Visa-Internationals.webp",
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
      "https://www.globalvisainternationals.com/visa-banner/London-Tourist-Visa-Global-Visa-Internationals.webp",
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
          src="/visa-banner/London-Tourist-Visa-Global-Visa-Internationals.webp"
          alt="UK Image"
          className={styles.VisaImage}
        />
      </div>
      <h1 className={styles.UKTitle}>UK Tourist Visa from India 2025 – Eligibility, Requirements & Fees | Global Visa Internationals</h1>
      <div className={styles.VisaSec}>


        <div className={styles.VisaData}>
          <section className={styles.card}>

            <h2 className={styles.subTitle}>✈ Travel to the UK with a Standard Visitor Visa</h2>
            <p>Planning a trip to the United Kingdom? A Standard Visitor visa allows Indian travelers to visit for tourism, to see family, or for a short-term business trip. At Global Visa Internationals (GVI), we simplify the process with expert guidance, transparent support, and end-to-end visa file handling.</p>
          </section>

          <div className={styles.section}>
            <section className={styles.card}>
              <h2 className={styles.subTitle}>Visa Processing Overview</h2>
              <p>Global Visa Internationals (GVI) will manage the entire documentation process to ensure that your visa application meets the expectations of UK Visas and Immigration (UKVI) and that your travel purpose is clearly and professionally represented.</p>
            </section>

            <section className={styles.card}>
              <h3 className={styles.subTitle}>Our Services Include:</h3>
              <ul>
                <li>Online application form filling</li>
                <li>Covering letter and documentation preparation</li>
                <li>Personalized checklist and guidance</li>
                <li>Providing accepted samples for the required documents</li>
                <li>Verification of documentation</li>
                <li>Complete walk-through of the process</li>
              </ul>
            </section>

            <section className={styles.card}>
              <h3 className={styles.subTitle}>Timeline:</h3>
              <p>Processing will begin once we receive 100% of the documents as per our checklist. The document finalization will take approximately 3 to 5 working days.</p>
            </section>
          </div>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>🕒 UK Visa Duration Rule</h2>
            <p>A Standard Visitor visa typically allows you to stay for up to 6 months. However, you can also apply for a long-term Standard Visitor visa for 2, 5, or 10 years if you visit the UK regularly. Note that even with a long-term visa, you can only stay for a maximum of 6 months on each visit. Overstaying this limit may lead to fines, entry bans, or refusal of future visa applications.</p>
            <p>👉 With GVI, you’ll never miscalculate your stay—we ensure full compliance with UK visa rules.</p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>UK Tourist Visa Documents & Requirements for Indian Applicants</h2>
            <p>Before applying, ensure you meet the UK visa eligibility requirements. If these criteria are met, Global Visa Internationals (GVI) will accept your case, manage the entire documentation process, and book your appointment. You only need to visit the VFS center once to submit your biometrics and documents.</p>
          </section>

          <section className={styles.card}>
            <h3 className={styles.subTitle}>1. Valid Passport & Travel History</h3>
            <ul>
              <li><b className={styles.strong}>Valid Passport:</b> Must be valid for the entire duration of your stay in the UK, with at least one blank page for the visa vignette.</li>
              <li><b className={styles.strong}>Travel History:</b> Previous international travel and a record of international travel stamps are crucial. GVI helps you highlight these to strengthen your application.</li>
            </ul>
          </section>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <section className={styles.card}>
            <h3 className={styles.subTitle}>2. Financial Proof: Bank Statements & Funds</h3>
            <p>You must prove you have sufficient funds to support your trip without working or relying on public funds. The consulate needs to be convinced you can support your entire stay. We recommend maintaining a minimum balance of ₹2–3 lakh (or approx. £2,000-£3,000) in your bank account. Avoid any large, unexplained transactions in the months leading up to your application, as this may raise suspicion with the embassy.</p>
            <ul>
              <li><b className={styles.strong}>Bank Statements:</b> Submit original bank statements for the last 6 months, stamped by the bank.</li>
              <li><b className={styles.strong}>Income Tax Returns (ITR):</b> Provide ITRs for the last 3 years to prove a stable income source.</li>
            </ul>
          </section>

          <section className={styles.card}>
            <h3 className={styles.subTitle}>3. Employment & Professional Documentation</h3>
            <ul>
              <li><b className={styles.strong}>Employees:</b> You must provide a Leave Approval Letter (NOC) from your employer on company letterhead, specifying your position, joining date, and approved leave dates.</li>
              <li><b className={styles.strong}>Business Owners/Self-Employed:</b> Submit your business registration license (GST certificate/partnership deed) and last 3 years’ ITRs. We also recommend a brief business profile.</li>
              <li><b className={styles.strong}>Students:</b> Provide an enrolment letter and NOC from your school/university.</li>
            </ul>
          </section>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <section className={styles.card}>
            <h3 className={styles.subTitle}>4. Travel & Accommodation Proof</h3>
            <ul>
              <li><b className={styles.strong}>Flight & Hotel Bookings:</b> Provide a detailed travel itinerary covering your entire stay. It's not mandatory to have confirmed return flight tickets, but a travel plan is required.</li>
              <li><b className={styles.strong}>Accommodation Proof:</b> Provide confirmed hotel reservations covering your entire stay. If staying with a friend or relative, you will need a letter of invitation and proof of their UK address and immigration status.</li>
            </ul>
          </section>

          <section className={styles.card}>
            <h3 className={styles.subTitle}>5. Visa Cover Letter & Itinerary</h3>
            <p>A well-written UK visa cover letter is your opportunity to introduce yourself and the purpose of your trip to the visa officer. It should include your travel itinerary, the purpose of your visit (e.g., tourism), and proof of your strong ties to India (e.g., family, job). Our experts draft a professional cover letter and a detailed itinerary for every client to maximize their chances of success.</p>
          </section>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>UK Tourist Visa Fees (India 2025)</h2>
            <p>As of April 2025, the UK visa fees are subject to change. The Standard Visitor visa fee is approximately £127 for a 6-month visa. The long-term visa fees are higher. VFS Global service charges are additional. Please note that all fees are non-refundable in case of visa refusal.</p>
            <ul>
              <li><b className={styles.strong}>Standard Visitor Visa (up to 6 months):</b> £127 (approx. ₹15,100)</li>
              <li><b className={styles.strong}>Long-term Visitor Visa (up to 2 years):</b> £475 (approx. ₹56,500)</li>
              <li><b className={styles.strong}>Long-term Visitor Visa (up to 5 years):</b> £848 (approx. ₹1,00,900)</li>
              <li><b className={styles.strong}>Long-term Visitor Visa (up to 10 years):</b> £1,059 (approx. ₹1,26,000)</li>
              <li>VFS service charges and any optional premium services are extra and vary by country/centre.</li>

            </ul>
          </section>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>Common Reasons for UK Visa Rejection & How We Solve Them</h2>
            <p>Visa rejections are often a result of simple mistakes. Our structured process is designed to eliminate these common issues.</p>
            <ul>
              <li><b className={styles.strong}>Incomplete/Mismatched Documents:</b> We perform a professional document review as per UKVI standards to ensure everything is perfect.</li>
              <li><b className={styles.strong}>Insufficient Proof of Funds:</b> We advise you on the exact financial requirements and review your bank statements to ensure compliance.</li>
              <li><b className={styles.strong}>Unclear Purpose of Travel:</b> Our expert-prepared cover letters and itineraries clearly explain your travel plans and ties to India.</li>
              <li><b className={styles.strong}>Lack of Strong Ties to India:</b> We guide you on how to best prove your ties, such as property ownership, family commitments, and employment stability.</li>
            </ul>
          </section>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>UK Tourist Visa Processing Time from India</h2>
            <p>The processing time for a UK Standard Visitor visa can vary. Here are some general timelines:</p>
            <ul>
              <li><b className={styles.strong}>Standard Processing Time:</b> The UKVI service standard is to process 90% of non-settlement visa applications within 3 weeks.</li>
              <li><b className={styles.strong}>Peak Season:</b> Can extend up to 6 weeks or more.</li>
              <li><b className={styles.strong}>Priority and Super Priority Services:</b> You can choose to pay an additional fee for faster processing (Priority: 5 working days; Super Priority: next working day), where available.</li>
              <li><b className={styles.strong}>Our Service:</b> Once we receive your documents, GVI finalizes your file within 3–5 working days, ensuring it is submitted to the UKVI in a timely manner.</li>
            </ul>
          </section>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>The VFS Global Application Process: A Step-by-Step Guide</h2>
            <p>As VFS Global is the official partner for UK Visas and Immigration in India, we manage this process for you. Here’s a quick overview of what to expect:</p>
            <ol>
              <li><b className={styles.strong}>Online Application & Appointment Booking:</b> We fill out the online form on the GOV.UK website and book your VFS appointment for you.</li>
              <li><b className={styles.strong}>Document Submission & Biometrics:</b> You visit the VFS center in person to submit the verified documents and provide your fingerprints and a photo.</li>
              <li><b className={styles.strong}>Application Tracking:</b> Once submitted, we help you track your application status until your passport is ready for collection.</li>
            </ol>
          </section>
          <a href="[https://visa.vfsglobal.com/ind/en/gbr/](https://visa.vfsglobal.com/ind/en/gbr/)" target="_blank" rel="noopener noreferrer">VFS Global — UK Visas & Immigration</a>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}>Transparent Pricing</h2>
          <p>Choose the right UK visa assistance package for your needs:</p>
          <ul>
            <li><b className={styles.strong}>Basic (₹6,999 ):</b> Checklist + document review</li>
            <li><b className={styles.strong}>Standard (₹8,999 ):</b> End-to-end application, filing, appointment booking, and biometrics guidance</li>
          </ul>

          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>At GVI, we are committed to making your visa process stress-free and successful. Our expertise and dedication have led to:</p>
          <ul>
            <li>2,200+ UK visas processed since 2017</li>
            <li>98% client satisfaction rate across India</li>
            <li>Specialized assistance for re-application after rejection</li>
            <li>Experienced visa consultants who provide personalized, country-specific advice.</li>
          </ul>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}>Ready to Apply?</h2>
          <p>With GVI, you don’t need to worry about rejections or missing documents.</p>
          <p>👉 Start your UK visa application today with Global Visa Internationals and travel to the UK with confidence.</p>
          <br />
          <a href="/contact" className={styles.ctaButton}>Get a free consultation today!</a>


        </div>


        <div className={styles.formSection}>
          <VisaForm />
        </div>
      </div >
    </>
  );
}