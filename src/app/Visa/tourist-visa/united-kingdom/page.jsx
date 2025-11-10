
import React from "react";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import styles from "@/Components/Visa.module.css";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";


// import ReviewCard from "@/components/ReviewCard";



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
    "@id": "https://www.globalvisainternationals.com/#travelagency",
    "name": "Global Visa Internationals",
    "legalName": "Global Visa Internationals Pvt Ltd",
    "url": "https://www.globalvisainternationals.com",
    "logo": "https://www.globalvisainternationals.com/gvilogo.png",
    "image": [
      "https://www.globalvisainternationals.com/Office/office-photo1.jpg",
      "https://www.globalvisainternationals.com/Office/team-photo.jpg"
    ],
    "description": "Trusted UK Tourist Visa Consultants in Bengaluru. We assist with UK Standard Visitor visas, providing expert guidance on documentation, online application, and appointment booking to ensure a smooth and successful process.",
    "telephone": "+917022213466",
    "email": "operations@globalvisainternationals.com",
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
    "hasMap": "https://maps.app.goo.gl/W3J5HHqhEma4PG7M8",
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "priceRange": "₹₹",
    "paymentAccepted": [
      "Credit Card",
      "Debit Card",
      "Bank Transfer",
      "UPI"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+917022213466",
        "contactType": "customer service",
        "availableLanguage": ["English", "Kannada", "Hindi"]
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.6,
      "reviewCount": 224
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "RAJESH R R"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "datePublished": "2025-09-10",
        "reviewBody": "I had an excellent experience with Global Visa Internationals. The team was professional, supportive, and guided me through every step of the visa process with clear communication and efficiency. They were always available to answer my questions and made the entire process smooth and stress-free. I highly recommend their services."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "N K Reshma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "datePublished": "2025-06-15",
        "reviewBody": "I had an amazing experience with Anusha Prashanth. I had only a week before my travel date, and other agencies told me it was not possible to get a Schengen visa in such a short time. But Anusha was confident and assured me it could be done — and she delivered! I received my Spain visa in just 3 days, exactly as promised, and she also helped me with a priority UK visa. Special thanks to Vidya for ensuring all my documentation was perfect and the process was smooth from start to finish. Truly professional, reliable, and efficient. Highly recommend them for any visa needs!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Hiba Mohammed"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "datePublished": "2024-12-20",
        "reviewBody": "Had a very good experience with Global Visas. I got my UK visitor visa within 3 weeks time. They assisted me through all the documentation. They did the legal formalities like affidavits etc. I had a stress-free time as opposed to the time I had applied by myself."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Soumya Sen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "datePublished": "2024-08-23",
        "reviewBody": "The team here helped me attain my UK tourist visa and meticulously helped me arrange all documents in order for the process. They are super knowledgeable and helpful. Would strongly recommend everyone to avail their services."
      },

      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rohit Gowda"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "datePublished": "2024-05-13",
        "reviewBody": "Once of the best in town, my friend was struggling to get a Visa to UK, these guys made it for him at affordable cost."
      }

    ],

    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "Closed",
        "closes": "Closed"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals"
    ],
    "knowsAbout": ["UK Tourist Visa", "Schengen Tourist Visa", "Canada Tourist Visa", "Australia Tourist Visa", "Travel Visa Assistance", "Visa Consultancy Services"],
    "makesOffer": {
      "@type": "OfferCatalog",
      "name": "Visa Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UK Standard Visitor Visa Assistance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Schengen Tourist Visa Assistance"
          }
        }
      ]
    }
  }


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
          <h1 className={styles.Title}>UK Tourist Visa from India 2025 – Eligibility, Requirements & Fees | Global Visa Internationals</h1>

          <h2 className={styles.subTitle}>✈ Travel to the UK with a Standard Tourist Visa</h2>
          <p>Planning a trip to the United Kingdom? A <b className={styles.strong}>UK Standard Tourist</b> visa allows Indian travelers to visit for tourism, business, study (up to 6 months), and to see family and friends. At Global Visa Internationals (GVI), we simplify the process with expert guidance, transparent support, and end-to-end visa file handling.</p>

          <h2 className={styles.subTitle}>🕒 UK Visa Duration Rule</h2>
          <p>A Standard Visitor visa typically allows you to stay in the UK for up to 6 months per visit. You can apply for a long-term visa (2, 5, or 10 years) if you visit the UK regularly, but you can still only stay for a maximum of 6 months on each visit. Overstaying this limit may lead to fines, entry bans, or refusal of future visa applications. With GVI, you’ll never miscalculate your stay — we ensure full compliance with UK visa rules.</p>

          <p>The UK does not have a "cascade" system like the Schengen zone, but a history of lawful travel and adherence to visa rules can strengthen your application for a longer-term visa.</p>


          <h2 className={styles.subTitle}>Visa Processing Overview</h2>
          <p>Global Visa Internationals (GVI) will manage the entire documentation process to ensure that your visa application meets the expectations of UK Visas and Immigration (UKVI) and that your travel purpose is clearly and professionally represented.</p>
          <h3 className={styles.subTitle}>Our Services Include:</h3>
          <ul>
            <li>Application form filling</li>
            <li>Covering letter and documentation preparation</li>
            <li>Personalized checklist and guidance</li>
            <li>Providing accepted samples for the required documents</li>
            <li>Verification of documentation</li>
            <li>Complete walk-through of the process</li>          </ul>

          <h3 className={styles.subTitle}>Timeline:</h3>
          <p>Processing will begin once we receive 100% of the documents as per our checklist. The document finalization will take approximately 3 to 5 working days.</p>


          <h2 className={styles.subTitle}>The Eligiblity to Get the UK Tourist Visa / Business Visa / Visitor Visa</h2>
          <p>Before applying, ensure you meet the UK visa eligibility requirements. If these criteria are met, Global Visa Internationals (GVI) will accept your case, manage the entire documentation process, and book your appointment. You only need to visit the VFS center once to submit your biometrics and documents.</p>

          <ol>
            <li> <b className={styles.strong}>Valid Passport & Travel History</b>
              <ul>
                <li><b className={styles.strong}>Valid Passport:</b> Must be valid for for 6 months from the day of entry to stay in the UK, with at least two blank page for the visa. All old passports are also required to show your travel history.</li>
                <li><b className={styles.strong}>Travel History:</b> Previous international travel, including visas and entry/exit stamps, is crucial. GVI helps you highlight these to strengthen your application.</li>
              </ul>
            </li>
            <li><b className={styles.strong}>Financial Proof:</b> Bank Statements & Funds
              <p>One of the most critical aspects of your application is proving you have sufficient funds. You must demonstrate that you can support yourself and your dependents for the duration of your trip.</p>
              <ul>
                <li><b className={styles.strong}>Bank Statements:</b> Submit original bank statements for the last 6 months, stamped by the bank. with the clossing ammount 4 to 5 lacks</li>
                <li><b className={styles.strong}>Income Tax Returns (ITR):</b> Provide ITRs for the last 3 years to prove a stable income source.</li>
              </ul>
            </li>
            <li><b className={styles.strong}>Employment & Professional Documentation</b>
              <ul>
                <li><b className={styles.strong}>Employees:</b> You must provide a Leave Approval Letter (NOC) from your employer on company letterhead, specifying your position, joining date, and approved leave dates.</li>
                <li><b className={styles.strong}>Business Owners/Self-Employed:</b> Submit your business registration license (GST certificate/partnership deed) and last 3 years’ ITRs.</li>
                <li><b className={styles.strong}>Students:</b> Provide an enrolment letter and NOC from your school/university.</li>

              </ul>
            </li>
            <li><b className={styles.strong}>Travel & Accommodation Proof</b>
              <ul>
                <li><b className={styles.strong}>Flight & Hotel Bookings:</b> Provide confirmed return flight tickets and hotel reservations covering your entire stay.</li>
                <li><b className={styles.strong}>Travel Insurance (Recommended but not mandatory):</b> While not a mandatory requirement for the visa, it is highly recommended to have travel insurance to cover medical emergencies and other unforeseen events.</li>
              </ul>
            </li>
            <li> <b className={styles.strong}>Visa Cover Letter & Itinerary</b>
              <p>A well-written UK visa cover letter is your opportunity to introduce yourself and the purpose of your trip to the visa officer. It should include your travel itinerary, the purpose of your visit, and proof of your strong ties to India (e.g., family, job). Our experts draft a professional cover letter and a detailed itinerary for every client to maximize their chances of success.</p>
            </li>
            <li>Remaining Documents which are required will send you after signup with Global Visa internationals according to your eligiblity and application type </li>
          </ol>


          {/* 
          <div className={styles.highlightSection}>
            <h3 className={styles.subTitle}>UK Tourist Visa Fees (India 2025)</h3>
            <div className={styles.highlightGrid}>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>6-Month Standard Visitor Visa</span>
                <p className={styles.countryInfo}>Approximately ₹15,825</p>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>2-Year Long-Term Visitor Visa</span>
                <p className={styles.countryInfo}>Approximately ₹59,188</p>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>5-Year Long-Term Visitor Visa</span>
                <p className={styles.countryInfo}>Approximately ₹1,05,666</p>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>10-Year Long-Term Visitor Visa</span>
                <p className={styles.countryInfo}>Approximately ₹1,31,958</p>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>VFS Service Charges</span>
                <p className={styles.countryInfo}>These are additional fees paid at the visa application center.</p>
              </div>
            </div>
          </div> */}

          <h2 className={styles.subTitle}>Common Reasons for UK Visa Rejection & How We Solve Them</h2>

          <p>Visa rejections are often a result of simple mistakes. Our structured process is designed to eliminate these common issues.</p>
          <ul>
            <li><b className={styles.strong}>Incomplete/Mismatched Documents:</b> We perform a professional document review as per UKVI standards to ensure everything is perfect.</li>
            <li><b className={styles.strong}>Insufficient Proof of Funds:</b> We advise you on the exact financial requirements and review your bank statements to ensure compliance.</li>
            <li><b className={styles.strong}>Unclear Purpose of Travel:</b> Our expert-prepared cover letters and itineraries clearly explain your travel plans and ties to India.</li>
            <li><b className={styles.strong}>Lack of Strong Ties to India:</b> We guide you on how to best prove your ties, such as property ownership, family commitments, and employment stability.</li>
          </ul>

          <h2 className={styles.subTitle}>UK Tourist Visa Processing Time from India</h2>
          <p>The processing time for a UK visa can vary depending on the time of year and the completeness of your application. Here are some general timelines:</p>

          <ul>
            <li><b className={styles.strong}>Standard Processing Time: </b>3 weeks (15 working days).</li>
            <li><b className={styles.strong}>Priority Service:</b> A decision is typically made within 5 working days for an extra fee.</li>
            <li><b className={styles.strong}>Super Priority Service:</b> A decision is typically made by the end of the next working day for an extra fee.</li>            <li>Our Service: Once we receive your documents, GVI finalizes your file within 3–5 working days, ensuring it is submitted to UKVI in a timely manner.</li>          </ul>

          <h3 className={styles.subTitle}>The VFS Global Application Process: A Step-by-Step Guide</h3>
          <p>Navigating the VFS Global appointment system can be confusing. With GVI's end-to-end service, we manage this process for you. Here’s a quick overview of what to expect:</p>
          <ol>
            <li><b className={styles.strong}>Online Application & Appointment Booking:</b> We fill out the online form and book your VFS appointment for you.</li>
            <li><b className={styles.strong}>Document Submission & Biometrics:</b> You visit the VFS center in person to submit the verified documents and provide your fingerprints and a photo.</li>
            <li><b className={styles.strong}>Application Tracking:</b> Once submitted, we help you track your application status until your passport is ready for collection.</li>
          </ol>


          <h2 className={styles.subTitle}>Transparent Pricing</h2>
          <p>Choose the right UK visa assistance plan for your needs:</p>
          <div className={styles.pricingContainer}>
            <div className={styles.pricingCard}>
              <h3 className={styles.planTitle}>Basic</h3>
              <p className={styles.planPrice}>₹4,999</p>
              <ul className={styles.planFeatures}>
                <li>Checklist according applicant Eligiblity</li>
                <li>Document review before subliting.</li>
              </ul>
            </div>
            <div className={`${styles.pricingCard} ${styles.highlighted}`}>
              <h3 className={styles.planTitle}>Standard</h3>
              <p className={styles.planPrice}>₹8,999</p>
              <ul className={styles.planFeatures}>
                <li>End-to-end application assistance</li>
                <li>Filing Application</li>
                <li>Appointment booking</li>
              </ul>
            </div>
          </div>

          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>At GVI, we are committed to making your visa process stress-free and successful. Our expertise and dedication have led to:</p>
          <ul>
            <li><b className={styles.strong}>1,800+ UK visas processed since 2017</b></li>
            <li><b className={styles.strong}>99% client satisfaction rate across India</b></li>
            <li>Specialized assistance for re-application after rejection</li>
            <li>Experienced visa consultants who provide personalized, country-specific advice.</li>
          </ul>

          <h2 className={styles.subTitle}>Meet Our Experts</h2>
          <p>Our team of visa consultants has decades of combined experience in handling complex visa cases. We stay updated with the latest embassy rules and requirements to provide you with the most accurate and reliable guidance.</p>

          <h2 className={styles.subTitle}>Ready to Apply?</h2>
          <p>With GVI, you don’t need to worry about rejections or missing documents.
            👉 <b className={styles.strong}>Start your UK visa application today</b> with Global Visa Internationals and travel to Europe with confidence.
            <br />
            <a href="/contact" className={styles.ctaButton}>Get a free consultation today!</a></p>
        </div>


        <div className={styles.formSection}>
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