import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";

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
      "https://www.globalvisainternationals.com/Visa/tourist-visa/china-tourist-visa",
  },
  openGraph: {
    title: "China Tourist & Business Visa: Application, Requirements & Tips",
    description:
      "Get expert help from Global Visa Internationals on applying for a China tourist or business visa. Learn the visa process, documents needed, and explore popular Chinese destinations.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/china-tourist-visa",
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

      <div className={styles.imageContainer}>
        <img
          src="https://www.globalvisainternationals.com/tourist-visa/China-Tourist-Visa-Assistance-GVI.jpg"
          alt="China Tourist Visa Assistance GVI"
          className={styles.VisaImage}
        />
      </div>

      <div className={styles.VisaSec}>

        <div className={styles.VisaData}>
          <section>
            <h2 className={styles.subTitle}>✈ Travel to China with a Tourist or Business Visa</h2>
            <p>
              Planning a trip to China for tourism or business? The China Tourist (L) Visa and Business (M) Visa allow Indian travelers to visit for sightseeing, to see family, or for business purposes. At Global Visa Internationals (GVI), we simplify the process with expert guidance, transparent support, and end-to-end visa file handling. We specialize in providing comprehensive <strong className={styles.strong}>China visa assistance for Indians</strong>.
            </p>
          </section>

          <div className={styles.section}>
            <section>
              <h2 className={styles.subTitle}>Visa Processing Overview</h2>
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
            <h2 className={styles.subTitle}>🕒 China Visa Duration and Types</h2>
            <p>
              China offers different visa types based on your travel purpose:
            </p>
            <ul>
              <li><strong className={styles.strong}>Single Entry Tourist Visa (L):</strong> Valid for 3 months with stay up to 30 days</li>
              <li><strong className={styles.strong}>Double Entry Tourist Visa (L):</strong> Valid for 6 months with each stay up to 30 days</li>
              <li><strong className={styles.strong}>Multiple Entry Business Visa (M):</strong> Valid for 6-12 months with each stay up to 30-60 days</li>
              <li><strong className={styles.strong}>10-Year China Visa:</strong> Available for eligible frequent travelers with multiple entries</li>
            </ul>
            <p>
              👉 With GVI, we'll help you select the right visa type based on your travel needs and ensure full compliance with Chinese immigration rules.
            </p>
          </section>

          <section>
            <h2 className={styles.subTitle}>China Tourist & Business Visa Documents & Requirements for Indian Applicants</h2>
            <p>
              Before applying, ensure you meet the <strong className={styles.strong}>China visa eligibility for Indians</strong>. If these criteria are met, Global Visa Internationals (GVI) will accept your case, manage the entire documentation process, and guide you through submission. We provide a detailed <strong className={styles.strong}>China tourist visa document checklist</strong> and <strong className={styles.strong}>China business visa requirements</strong>.
            </p>
          </section>

          <section>
            <h3 className={styles.subTitle}>1. Valid Passport & Travel History</h3>
            <ul>
              <li>
                <b className={styles.strong}>Valid Passport:</b> Must be valid for at least six months beyond your intended stay, with at least two blank pages. We guide you on all <strong className={styles.strong}>China visa passport requirements</strong>.
              </li>
              <li>
                <b className={styles.strong}>Old Passport:</b> Mandatory if issued within the last 5 years.
              </li>
              <li>
                <b className={styles.strong}>Travel History:</b> Previous international travel strengthens your application. GVI helps you highlight these to strengthen your China visa application.
              </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>2. Financial Proof: Bank Statements & Funds</h3>
            <p>
              You must prove you have sufficient funds to support your trip. The consulate needs to be convinced you can support your entire stay. We recommend maintaining a minimum balance of ₹1.5 lakh in your bank account. This is a key part of the <strong className={styles.strong}>proof of funds for China visitor visa</strong>. Avoid any large, unexplained transactions in the months leading up to your application.
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Bank Statements:</b> Submit original bank statements for the last 6 months, stamped by the bank. We advise on the <strong className={styles.strong}>China tourist visa bank statement requirements</strong>.
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
                <b className={styles.strong}>Business Owners/Self-Employed:</b> Submit your business registration license (GST certificate/partnership deed) and last 2-3 years' ITRs. We also recommend a brief business profile.
              </li>
              <li>
                <b className={styles.strong}>Students:</b> Provide an enrolment letter and NOC from your school/university.
              </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>4. Travel & Accommodation Proof</h3>
            <ul>
              <li>
                <b className={styles.strong}>Flight & Hotel Bookings:</b> Provide confirmed return flight tickets and hotel reservations for your entire stay.
              </li>
              <li>
                <b className={styles.strong}>Hotel Confirmation:</b> Reservation form from the hotel is mandatory for tourist visa applications.
              </li>
              <li>
                <b className={styles.strong}>Business Invitation:</b> For business visas, you need an invitation letter from a Chinese company, company registration copy, and inviting person's ID copy.
              </li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>5. Additional Requirements</h3>
            <ul>
              <li>
                <b className={styles.strong}>Photos:</b> Two recent passport-sized photos (44mm x 33mm) with white background and 80% face visibility.
              </li>
              <li>
                <b className={styles.strong}>Aadhaar Card:</b> Online PDF copy is required for both tourist and business visas.
              </li>
              <li>
                <b className={styles.strong}>Covering Letter:</b> For business visas, an Indian company covering letter is required.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.subTitle}>China Tourist & Business Visa Fees (India 2025)</h2>
            <p>
              Our transparent pricing includes all government fees and our service charges:
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Single Entry Tourist Visa:</b> ₹11,500 (including visa fee)
              </li>
              <li>
                <b className={styles.strong}>6-Month Double Entry Visa:</b> ₹13,200 (including visa fee)
              </li>
              <li>
                <b className={styles.strong}>Express Processing:</b> Additional ₹5,000 for faster processing
              </li>
              <li>
                <b className={styles.strong}>Business Visa Without Documents:</b> ₹3,000 service charge (excluding visa fee)
              </li>
            </ul>
            <p className={styles.note}>Note: Prices are subject to change based on embassy regulations and exchange rates.</p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Processing Time</h2>
            <p>
              Understanding the <strong className={styles.strong}>China visa processing time from India</strong> is crucial for planning your trip:
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Normal Processing Time:</b> 7-10 working days
              </li>
              <li>
                <b className={styles.strong}>Express Processing Time:</b> 3-4 working days (additional fee applies)
              </li>
              <li>
                <b className={styles.strong}>Our Service:</b> Once we receive your documents, GVI finalizes your file within 3–5 working days, ensuring it is submitted to the embassy in a timely manner. We help you track <strong className={styles.strong}>China visa application status</strong>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.subTitle}>Common Reasons for China Visa Rejection & How We Solve Them</h2>
            <p>
              Visa rejections are often a result of simple mistakes. Our structured process is designed to eliminate these common issues. We help you understand the most frequent <strong className={styles.strong}>China tourist visa rejection reasons</strong>.
            </p>
            <ul>
              <li><b className={styles.strong}>Incomplete/Mismatched Documents:</b> We perform a professional document review as per embassy standards to ensure everything is perfect.</li>
              <li><b className={styles.strong}>Insufficient Proof of Funds:</b> We advise you on the exact financial requirements and review your bank statements to ensure compliance.              </li>
              <li><b className={styles.strong}>Unclear Purpose of Travel:</b> Our expert-prepared documentation clearly explains your travel plans and ties to India.</li>
              <li><b className={styles.strong}>Lack of Strong Ties to India:</b> We guide you on how to best prove your ties, such as property ownership, family commitments, and employment stability.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.subTitle}>The China Visa Application Process: A Step-by-Step Guide</h2>
            <p>
              We manage this process for you. Here's a quick overview of what to expect:
            </p>
            <ol>
              <li>
                <b className={styles.strong}>Document Preparation:</b> We help you gather and prepare all necessary documents according to embassy requirements.
              </li>
              <li>
                <b className={styles.strong}>Application Form Filling:</b> We complete the China visa application form accurately on your behalf.
              </li>
              <li>
                <b className={styles.strong}>Application Submission:</b> We submit your application to the appropriate visa center or embassy.
              </li>
              <li>
                <b className={styles.strong}>Application Tracking:</b> Once submitted, we help you track your application status until your passport is ready for collection.
              </li>
              <li>
                <b className={styles.strong}>Passport Return:</b> We ensure safe return of your passport with the visa stamp.
              </li>
            </ol>
          </section>

          <h2 className={styles.subTitle}>Transparent Pricing</h2>
          <p>
            Choose the right China visa assistance package for your needs:
          </p>
          <ul>

            <li>
              <b className={styles.strong}>Standard (₹12,999):</b> End-to-end application assistance, documentation preparation, and submission guidance
            </li>
            <li>
              <b className={styles.strong}>Express Processing:</b> Additional ₹5,000 for faster processing (3-4 working days)
            </li>
          </ul>

          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>
            At GVI, we are committed to making your visa process stress-free and successful. Our expertise and dedication have led to:
          </p>
          <ul>
            <li>2,000+ China visas processed since 2017</li>
            <li>98% client satisfaction rate across India</li>
            <li>Specialized assistance for re-application after rejection</li>
            <li>Experienced visa consultants who provide personalized, country-specific advice.</li>
          </ul>

          <h2 className={styles.subTitle}>Ready to Apply?</h2>
          <p>
            With GVI, you don't need to worry about rejections or missing documents.
          </p>
          <p>
            👉 Start your <strong className={styles.strong}>China visa application</strong> today with Global Visa Internationals and experience the rich culture and history of China with confidence. We are recognized as a <strong className={styles.strong}>best visa consultancy for China</strong>.
          </p>
          <br />
          <a href="/contact" className={styles.ctaButton}>
            Get a free consultation today!
          </a>
        </div>
        <div className={styles.formSection}>
          <VisaForm />
        </div>
      </div>
      <section id="ClientReviews" className={styles.reviewSection}>
        <div
          className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5"
          data-elfsight-app-lazy
        ></div>
      </section>
    </>
  );
}
