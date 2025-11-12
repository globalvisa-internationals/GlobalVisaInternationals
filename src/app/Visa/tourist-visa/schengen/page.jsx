import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import Link from "next/link";


import { Metadata } from "next";


export const metadata = {
  metadataBase: new URL("https://www.globalvisainternationals.com"),
  title:
    "Schengen Visa Assistance: Tourist, Visitor & Business Visa Requirements | Global Visa Internationals",
  description:
    "Apply for a Schengen Visa with Global Visa Internationals. Get expert guidance for Schengen tourist visas, visitor visas, and business visas. Learn requirements, documents, fees, and travel tips for 27 European countries.",
  keywords: [
    "Schengen visa",
    "Schengen tourist visa",
    "apply Schengen visa India",
    "Schengen business visa",
    "Schengen visitor visa",
    "Schengen visa requirements",
    "Schengen visa documents",
    "Schengen visa consultants",
    "Schengen visa fees",
    "Europe tourist visa",
    "apply Schengen visa online",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen",
  },
  openGraph: {
    title: "Schengen Visa Assistance: Tourist, Visitor & Business Visa Support",
    description:
      "Global Visa Internationals helps Indian travelers apply for Schengen tourist, visitor, and business visas. Get expert guidance on requirements, documents, and travel insurance for 27 Schengen countries.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen",
    siteName: "Global Visa Internationals",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Schengen-Tourist-Visa-Assistance-GVI.jpg",
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
      "Plan your trip to Europe with confidence. Apply for Schengen tourist, visitor, or business visa with Global Visa Internationals - expert help for documents, fees, and approvals.",
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
          item: pageUrl,
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
      url: pageUrl,
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
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does it take to get a Schengen Visa from India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Schengen visa processing usually takes 15 working days from the date of application, depending on the country and season.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are required for a Schengen tourist visa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You will need a valid passport, visa application form, recent photos, travel itinerary, proof of accommodation, financial proof, and travel insurance covering at least €30,000.",
          },
        },
        {
          "@type": "Question",
          name: "Can Global Visa Internationals help with Schengen business visa applications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, GVI provides full support for Schengen business visas, including documentation, invitation letter verification, and appointment scheduling.",
          },
        },
      ],
    },
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
          <h1 className={styles.Title}>Schengen Tourist Visa from India 2025 - Eligibility, Requirements & Fees | Global Visa Internationals</h1>

          <h2 className={styles.subTitle}>✈ Travel to Europe with a Schengen Visa</h2>
          <p>Planning a trip to Europe? A <b className={styles.strong}>Schengen tourist visa</b> allows Indian travelers to explore 29 European countries with a single visa. At <b className={styles.strong}>Global Visa Internationals (GVI)</b>, we simplify the process with expert guidance, transparent support, and end-to-end visa file handling.</p>
          <h2 className={styles.subTitle}>Schengen Visa Duration Rule</h2>
          <p>A short-stay Schengen visa permits you to stay according to your travel dates in the Schengen Zone. Overstaying this limit may lead to fines, entry bans, or refusal of future visa applications. With GVI, you’ll never miscalculate your stay — we ensure full compliance with <b className={styles.strong}>Schengen visa rules</b>.</p>
          <p>The duration you are granted on your Schengen visa depends on your travel history and the embassy's discretion. The standard is a single-entry visa for the specific dates of your trip, but with a proven track record, you can qualify for longer-term, multiple-entry visas.</p>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Schengen Visa 'Cascade' System for Indian Nationals</h2>
            <p>The European Union has a 'cascade' principle for granting longer-duration, multiple-entry visas. This system rewards frequent, lawful travelers. For Indian nationals, this means your past travel history directly impacts your eligibility for a longer visa.</p>
            <ul>
              <li><b className={styles.strong}>Initial Eligibility</b>: Your first application will typically be for a short-term, single-entry or multiple-entry visa.</li>
              <li><b className={styles.strong}>Progression to a 2-Year Visa</b>: After lawfully using at least two Schengen visas within the three years preceding your application, you can be eligible for a <b className={styles.strong}>two-year multiple-entry Schengen visa</b>.</li>
              <li><b className={styles.strong}>Progression to a 5-Year Visa</b>: After holding and lawfully using a two-year visa, you can then qualify for the next level, a <b className={styles.strong}>five-year multiple-entry visa</b>, provided you meet all applicable terms and conditions.</li>
            </ul>
            <h3 className={styles.subTitle}>Key Considerations for Progression:</h3>
            <ul>
              <li><b className={styles.strong}>Lawful Use</b>: The key to progressing is the "lawful use" of your previous visas, meaning you adhered to all terms and conditions, including the 90/180-day rule.</li>
              <li><b className={styles.strong}>Passport Validity</b>: Your passport must have sufficient remaining validity. For a multi-year visa, your passport must be valid for at least three months beyond the visa's expiry date.</li>
            </ul>
            <p>This cascade system is a recent update for Indian nationals. We at GVI are fully up-to-date with these regulations and will help you build a strong application for a longer-duration visa.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Visa Processing Overview</h2>
            <p>Global Visa Internationals (GVI) will manage the entire documentation process to ensure that your visa application meets the expectations of the High Commission and that your travel purpose is clearly and professionally represented.</p>

            <h3 className={styles.subTitle}>Our Services Include:</h3>
            <ul>
              <li>Application form filling</li>
              <li>Covering letter and documentation preparation</li>
              <li>Personalized checklist and guidance</li>
              <li>Providing accepted samples for the required documents</li>
              <li>Verification of documentation</li>
              <li>Complete walk-through of the process</li>
            </ul>

            <h3 className={styles.subTitle}>Timeline:</h3>
            <p>Processing will begin once we receive 100% of the documents as per our checklist. The document finalization will take approximately 3 to 5 working days.</p>
          </div>
          <div className={styles.schengenCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>29 Schengen Countries</h2>
              <p className={styles.cardSubtitle}>Explore Europe with a single tourist visa from India.</p>
            </div>

            <div className={styles.countryList}>
              <h3 className={styles.subTitle}>All Member States</h3>
              <ul className={styles.countryGrid}>
                <li>Austria</li>
                <li>Belgium</li>
                <li>Bulgaria</li>
                <li>Croatia</li>
                <li>Czech Republic</li>
                <li>Denmark</li>
                <li>Estonia</li>
                <li>Finland</li>
                <li><Link href="/Visa/tourist-visa/schengen/france">France</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/germany">Germany</Link></li>
                <li><Link href="/Visa/tourist-visa/schengen/greece">Greece</Link></li>
                <li>Hungary</li>
                <li>Iceland</li>
                <li><Link href="/Visa/tourist-visa/schengen/italy">Italy</Link></li>
                <li>Latvia</li>
                <li>Liechtenstein</li>
                <li>Lithuania</li>
                <li>Luxembourg</li>
                <li>Malta</li>
                <li>Netherlands</li>
                <li>Norway</li>
                <li>Poland</li>
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

          <h2 className={styles.subTitle}>Schengen Visa Duration Rule</h2>
          <p>A short-stay Schengen visa permits you to stay according to your travel dates in the Schengen Zone  also if some condetion is meat then you can get up to 5 years
            <br />
            Overstaying this limit may lead to fines, entry bans, or refusal of future visa applications.
            With GVI, you’ll never miscalculate your stay — we ensure full compliance with <b className={styles.strong}>Schengen visa rules</b>.</p>

          <h2 className={styles.subTitle}>Schengen Tourist Visa Documents Cheack List for Indian Applicants</h2>
          <p>Before applying, ensure you meet the <b className={styles.strong}>Schengen visa eligibility requirements</b>. If these criteria are met, <b className={styles.strong}>Global Visa Internationals (GVI)</b> will accept your case, manage the entire documentation process, and book your appointment. You only need to visit the VFS center once to submit your biometrics and documents.</p>

          <h3 className={styles.subTitle}>1. Valid Passport & Travel History</h3>
          <ul>
            <li><b className={styles.strong}>Valid Passport</b>: Must be valid for at least 6 months beyond your return date, with at least two blank pages.</li>
            <li><b className={styles.strong}>Travel History</b>: Previous travel history and a record of international travel stamps are crucial. GVI helps you highlight these to strengthen your application.</li>
          </ul>

          <h3 className={styles.subTitle}>2. Financial Proof: Bank Statements & Funds</h3>
          <p>One of the most critical aspects of your application is proving you have sufficient funds. The consulate needs to be convinced you can support your entire trip.
            We recommend maintaining a minimum balance of <b className={styles.strong}>₹3-4 lakh</b> (or €3,000-€4,000) in your bank account for 3 to 6 months. Avoid any large, unexplained transactions in the months leading up to your application, as this may raise suspicion with the embassy.</p>
          <ul>
            <li><b className={styles.strong}>Bank Statements</b>: Submit original bank statements for the last 6 months, stamped by the bank.</li>
            <li><b className={styles.strong}>Income Tax Returns (ITR)</b>: Provide ITRs for the last 3 years to prove a stable income source.</li>
          </ul>

          <h3 className={styles.subTitle}>3. Employment & Professional Documentation</h3>
          <ul>
            <li><b className={styles.strong}>Employees</b>: You must provide a <b className={styles.strong}>Leave Approval Letter</b> (NOC) from your employer on company letterhead, specifying your position, joining date, and approved leave dates.
              <a href="/leave-letter-template" target="_blank">Download our free template for a Schengen visa leave letter.</a></li>
            <li><b className={styles.strong}>Business Owners/Self-Employed</b>: Submit your GST certificate and last 3 years’ ITRs. We also recommend a brief business profile.</li>
            <li><b className={styles.strong}>Students</b>: Provide an enrolment letter and NOC from your school/university.</li>
          </ul>

          <h3 className={styles.subTitle}>4. Travel & Accommodation Proof</h3>
          <ul>
            <li><b className={styles.strong}>Flight & Hotel Bookings</b>: Provide confirmed return flight tickets and hotel reservations covering your entire stay.</li>
            <li><b className={styles.strong}>Travel Insurance (Mandatory)</b>: Must cover at least €30,000 for medical emergencies, hospitalisation, and repatriation across all Schengen countries.
              GVI assists you in securing <b className={styles.strong}>Schengen travel insurance</b> that meets embassy requirements.</li>
          </ul>

          <h3 className={styles.subTitle}>5. Visa Cover Letter & Itinerary</h3>
          <p>A well-written <b className={styles.strong}>Schengen visa cover letter</b> is your opportunity to introduce yourself and the purpose of your trip to the visa officer. It should include your travel itinerary, the purpose of your visit (e.g., tourism), and proof of your strong ties to India (e.g., family, job). Our experts draft a professional cover letter and a detailed itinerary for every client to maximize their chances of success.</p>
          <a href="/cover-letter-guide" target="_blank">Read our detailed guide on how to write a Schengen visa cover letter.</a>

          <h2 className={styles.subTitle}>Schengen Tourist Visa Fees (India 2025)</h2>
          <ul>
            <li><b className={styles.strong}>Adult Visa Fee (Embassy)</b>: €90 (~₹9,300) per person</li>
            <li><b className={styles.strong}>Children (6-12 years)</b>: €45 per person</li>
            <li><b className={styles.strong}>Children below 6 years</b>: Free</li>
            <li><b className={styles.strong}>VFS Service Charges</b>: ₹1,000 - ₹2,000 approx.</li>
          </ul>

          <h2 className={styles.subTitle}>Common Reasons for Schengen Visa Rejection & How We Solve Them</h2>
          <p>Visa rejections are often a result of simple mistakes. Our structured process is designed to eliminate these common issues.</p>
          <ul>
            <li><b className={styles.strong}>Incomplete/Mismatched Documents</b>: We perform a professional document review as per embassy standards to ensure everything is perfect.</li>
            <li><b className={styles.strong}>Insufficient Proof of Funds</b>: We advise you on the exact financial requirements and review your bank statements to ensure compliance.</li>
            <li><b className={styles.strong}>Unclear Purpose of Travel</b>: Our expert-prepared cover letters and itineraries clearly explain your travel plans and ties to India.</li>
            <li><b className={styles.strong}>Lack of Strong Ties to India</b>: We guide you on how to best prove your ties, such as property ownership, family commitments, and employment stability.</li>
          </ul>

          <h2 className={styles.subTitle}>Schengen Tourist Visa Processing Time from India</h2>
          <p>The processing time for a Schengen visa can vary depending on the embassy, the time of year, and the completeness of your application. Here are some general timelines:</p>
          <ul>
            <li><b className={styles.strong}>Standard Processing Time</b>: 15-20 working days.</li>
            <li><b className={styles.strong}>Peak Season (May-August)</b>: Can extend up to 30-45 working days.</li>
            <li><b className={styles.strong}>Our Service</b>: Once we receive your documents, GVI finalizes your file within <b className={styles.strong}>3-5 working days</b>, ensuring it is submitted to the embassy in a timely manner.</li>
          </ul>

          <h2 className={styles.subTitle}>The VFS Global Application Process: A Step-by-Step Guide</h2>
          <p>Navigating the VFS Global appointment system can be confusing. With GVI's end-to-end service, we manage this process for you. Here’s a quick overview of what to expect:</p>
          <ol>
            <li><b className={styles.strong}>Online Application & Appointment Booking</b>: We fill out the online form and book your VFS appointment for you.</li>
            <li><b className={styles.strong}>Document Submission & Biometrics</b>: You visit the VFS center in person to submit the verified documents and provide your fingerprints and a photo.</li>
            <li><b className={styles.strong}>Application Tracking</b>: Once submitted, we help you track your application status until your passport is ready for collection.</li>
          </ol>
          <a href="https://visa.vfsglobal.com/" target="_blank" rel="noopener noreferrer">VFS Global — India</a>
          {/* 
          <h2 className={styles.subTitle}>Transparent Pricing</h2>
          <p>Choose the right <b className={styles.strong}>Schengen visa assistance package</b> for your needs:</p>
          <div className={styles.pricingContainer}>
            <div className={styles.pricingCard}>
              <h3 className={styles.planTitle}>Basic</h3>
              <p className={styles.planPrice}>₹4,999</p>
              <ul className={styles.planFeatures}>
                <li>Checklist + document review</li>
              </ul>
            </div>
            <div className={`${styles.pricingCard} ${styles.highlighted}`}>
              <h3 className={styles.planTitle}>Standard</h3>
              <p className={styles.planPrice}>₹6,999</p>
              <ul className={styles.planFeatures}>
                <li>End-to-end application</li>
                <li>Filing and appointment booking</li>
                <li>Biometrics guidance</li>
              </ul>
            </div>
          </div> */}

          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>At GVI, we are committed to making your visa process stress-free and successful. Our expertise and dedication have led to:</p>
          <ul>
            <li><b className={styles.strong}>1,200+ Schengen visas processed since 2018</b></li>
            <li><b className={styles.strong}>98% client satisfaction rate across India</b></li>
            <li>Specialized assistance for re-application after rejection</li>
            <li>Experienced visa consultants who provide personalized, country-specific advice.</li>
          </ul>

          <h2 className={styles.subTitle}>Meet Our Experts</h2>
          <p>Our team of visa consultants has decades of combined experience in handling complex visa cases. We stay updated with the latest embassy rules and requirements to provide you with the most accurate and reliable guidance.</p>

          <h2 className={styles.subTitle}>Ready to Apply?</h2>
          <p>With GVI, you don’t need to worry about rejections or missing documents.
            <b className={styles.strong}>Start your Schengen visa application today</b> with Global Visa Internationals and travel to Europe with confidence.
            <br />
            <a href="/contact" className={styles.ctaButton}>Get a free consultation today!</a></p>
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
