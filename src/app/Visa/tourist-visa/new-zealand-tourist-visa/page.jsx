
import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";


export const metadata = {
  title: "New Zealand Tourist Visa Consultants in Bangalore | Global Visa Internationals",
  description:
    "Apply for a New Zealand Tourist Visa with expert assistance from Global Visa Internationals. 11+ years of experience in smooth documentation, faster approvals, and travel guidance.",
  keywords:
    "New Zealand tourist visa, New Zealand visa consultants in Bangalore, New Zealand visitor visa from India, how to apply New Zealand visa, New Zealand travel visa assistance",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://www.globalvisainternationals.com/Visa/tourist-visa/new-zealand-tourist-visa",
  },
  openGraph: {
    type: "website",
    title:
      "Apply for New Zealand Tourist Visa from India | Global Visa Internationals",
    description:
      "Trusted visa agents for New Zealand in Bangalore. Expert documentation, embassy interview prep, and high visa success rate.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/new-zealand-tourist-visa",
    images: [
      {
        url: "https://www.globalvisainternationals.com/images/new-zealand-tourist-visa-banner.webp",
        alt: "New Zealand Tourist Visa Assistance",
      },
    ],
    siteName: "Global Visa Internationals",
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalvisainternationals",
    title: "New Zealand Tourist Visa Experts – Global Visa Internationals",
    description:
      "Planning a trip to New Zealand? Get full visa support from trusted consultants in Bangalore.",
    images: [
      "https://www.globalvisainternationals.com/images/new-zealand-tourist-visa-banner.webp",
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
        <img src="/images/new-zealand-tourist-visa-banner.webp" alt="new zealand tourist visa banner" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>

        <div className={styles.VisaData}>
          <section>
            <h2 className={styles.subTitle}>✈ Travel to New Zealand with a Visitor Visa</h2>
            <p>
              Planning a trip to New Zealand? The New Zealand Visitor Visa allows Indian travelers to visit for tourism, to see family, or for short-term business purposes. At Global Visa Internationals (GVI), we simplify the process with expert guidance, transparent support, and end-to-end visa file handling. We specialize in providing comprehensive <strong className={styles.strong}>New Zealand visa assistance for Indians</strong>.
            </p>
          </section>

          <div className={styles.section}>
            <section>
              <h2 className={styles.subTitle}>Visa Processing Overview</h2>
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
            <h2 className={styles.subTitle}>🕒 New Zealand Visa Duration Rule</h2>
            <p>
              A New Zealand Visitor Visa typically allows you to stay for up to 9 months within an 18-month period. A <strong className={styles.strong}>New Zealand multiple entry visa for Indians</strong> may be issued with a validity of up to 5 years for eligible applicants. Note that even with a multiple-entry visa, you can only stay for the authorized period on each visit. Overstaying may lead to fines, entry bans, or refusal of future visa applications.
            </p>
            <p>
              👉 With GVI, you'll never miscalculate your stay—we ensure full compliance with New Zealand immigration rules.
            </p>
          </section>

          <section>
            <h2 className={styles.subTitle}>New Zealand Visitor Visa Documents & Requirements for Indian Applicants</h2>
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
              You must prove you have sufficient funds to support your trip without working. Immigration New Zealand needs to be convinced you can support your entire stay. We recommend maintaining a minimum balance of ₹1.5–2.5 lakh (or approx. NZD$3,000-$5,000) in your bank account. This is a key part of the <strong className={styles.strong}>proof of funds for New Zealand visitor visa</strong>. Avoid any large, unexplained transactions in the months leading up to your application.
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

          <section>
            <h2 className={styles.subTitle}>New Zealand Tourist Visa Fees (India 2025)</h2>
            <p>
              As of 2025, the New Zealand visa fees are subject to change. The fees listed below are approximate and do not include additional services. We provide transparent guidance on the <strong className={styles.strong}>New Zealand tourist visa cost in rupees</strong>.
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Visitor Visa Application Fee:</b> NZD$211 (approx. ₹10,800)
              </li>
              <li>
                <b className={styles.strong}>NZeTA (if applicable):</b> NZD$17 (approx. ₹870)
              </li>
              <li>
                <b className={styles.strong}>International Visitor Conservation and Tourism Levy (IVL):</b> NZD$35 (approx. ₹1,790)
              </li>
              <li>
                <b className={styles.strong}>Service Charges:</b> Vary based on services availed (e.g., documentation assistance, consultation, etc.)
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.subTitle}>Common Reasons for New Zealand Visa Rejection & How We Solve Them</h2>
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
            <h2 className={styles.subTitle}>New Zealand Visa Processing Time from India</h2>
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
                <b className={styles.strong}>Our Service:</b> Once we receive your documents, GVI finalizes your file within 3–5 working days, ensuring it is submitted to INZ in a timely manner. We help you track <strong className={styles.strong}>New Zealand visa application status</strong>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.subTitle}>The New Zealand Visa Application Process: A Step-by-Step Guide</h2>
            <p>
              We manage this process for you. Here's a quick overview of what to expect:
            </p>
            <ol>
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

          <h2 className={styles.subTitle}>Transparent Pricing</h2>
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

          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>
            At GVI, we are committed to making your visa process stress-free and successful. Our expertise and dedication have led to:
          </p>
          <ul>
            <li>1,500+ New Zealand visas processed since 2017</li>
            <li>96% client satisfaction rate across India</li>
            <li>Specialized assistance for re-application after rejection</li>
            <li>Experienced visa consultants who provide personalized, country-specific advice.</li>
          </ul>

          <h2 className={styles.subTitle}>Ready to Apply?</h2>
          <p>
            With GVI, you don't need to worry about rejections or missing documents.
          </p>
          <p>
            👉 Start your <strong className={styles.strong}>New Zealand visa application</strong> today with Global Visa Internationals and experience the breathtaking landscapes of New Zealand with confidence. We are recognized as a <strong className={styles.strong}>best visa consultancy for New Zealand</strong>.
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
      <section id='Client Reviews'>
        <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
      </section>
    </>
  );
}