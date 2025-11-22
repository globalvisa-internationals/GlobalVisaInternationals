
import React from "react";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import styles from "@/Components/Visa.module.css";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";


// import ReviewCard from "@/components/ReviewCard";



export const metadata = {
  metadataBase: new URL("https://www.globalvisainternationals.com"),

  title: "Best UK Visa Consultants   | UK Tourist Visa from India | Global Visa Internationals",
  description:
    "Apply for your UK tourist visa from India with expert UK visa consultants. Get help for documents, online application, fees, processing time & appointments.",
  keywords:
    "UK tourist visa from India, UK visitor visa consultants, UK visa agents in India, apply UK visa online India, UK visa assistance Bangalore, UK visa documentation help",

  robots: "index, follow",
  category: "Travel Agency, Visa Consultancy",
  canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom",
  },

  applicationName: "Global Visa Internationals",
  publisher: "Global Visa Internationals",
  creator: "Global Visa Internationals Team",

  authors: [
    {
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com",
    },
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",


  openGraph: {
    title: "Apply UK Tourist Visa from India | Fast UK Visa Assistance",
    description:
      "Global Visa Internationals provides complete support for UK tourist visa applications, including documentation, online filing, and appointment scheduling.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom",
    siteName: "Global Visa Internationals",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/UK-Tourist-Visa-Assistance-GVI.jpg",
        width: 1200,
        height: 630,
        alt: "UK Tourist Visa Assistance - Global Visa Internationals",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    title: "UK Tourist Visa from India | Best UK Visa Help",
    description:
      "Get fast UK tourist visa assistance in India. Expert documentation, application filing & appointment help by Global Visa Internationals.",
    images: [
      "https://www.globalvisainternationals.com/tourist-visa/UK-Tourist-Visa-Assistance-GVI.jpg",
    ],
  },

  other: {
    "theme-color": "#ffffff",
    "og:locale": "en_IN",
    "twitter:creator": "@GLOBALVISA1505",
    "msapplication-TileColor": "#ffffff",
  },

  language: "en-IN",
  abstract:
    "UK Tourist Visa assistance from India with expert support in documentation, filing, and appointment scheduling.",

  rating: "General",
  revisitAfter: "7 days",
};




export default function UKTouristVisa() {
  const pageUrl = metadata.alternates.canonical;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.globalvisainternationals.com/#organization",
        "name": "Global Visa Internationals",
        "legalName": "Global Visa Internationals Pvt Ltd",
        "url": "https://www.globalvisainternationals.com",
        "logo": "https://www.globalvisainternationals.com/gvilogo.png",
        "sameAs": [
          "https://www.facebook.com/globalvisainternationals/",
          "https://www.instagram.com/globalvisa_internationals/",
          "https://www.linkedin.com/company/global-visa-internationals/",
          "https://x.com/GLOBALVISA1505",
          "https://www.youtube.com/@globalVisaInternationals",
          "https://www.google.com/maps/place/Global+Visa+Internationals"
        ]
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.globalvisainternationals.com/#localbusiness",
        "name": "Global Visa Internationals",
        "image": "https://www.globalvisainternationals.com/gvilogo.png",
        "url": "https://www.globalvisainternationals.com",
        "telephone": "+917022213466",
        "priceRange": "₹₹",
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
        "parentOrganization": {
          "@id": "https://www.globalvisainternationals.com/#organization"
        }
      },

      {
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
        "description": "Trusted UK Tourist Visa Consultants in Bengaluru. Expert guidance on UK Standard Visitor visas including documentation, online filing, and appointment booking.",
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
        "areaServed": [{ "@type": "Country", "name": "India" }],
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
            "author": { "@type": "Person", "name": "RAJESH R R" },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5,
              "bestRating": 5
            },
            "datePublished": "2025-09-10",
            "reviewBody":
              "Excellent experience with Global Visa Internationals. Very supportive and helpful."
          }
        ]
      },

      {
        "@type": "WebSite",
        "@id": "https://www.globalvisainternationals.com/#website",
        "name": "Global Visa Internationals",
        "url": "https://www.globalvisainternationals.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target":
            "https://www.globalvisainternationals.com/search?q={search_term}",
          "query-input": "required name=search_term"
        },
        "publisher": {
          "@id": "https://www.globalvisainternationals.com/#organization"
        }
      },

      {
        "@type": "WebPage",
        "@id":
          "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom#webpage",
        "url":
          "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom",
        "name": "UK Tourist Visa from India | Apply UK Visitor Visa",
        "isPartOf": {
          "@id": "https://www.globalvisainternationals.com/#website"
        },
        "about": {
          "@id": "https://www.globalvisainternationals.com/#organization"
        },
        "primaryImageOfPage":
          "https://www.globalvisainternationals.com/tourist-visa/UK-Tourist-Visa-Assistance-GVI.jpg",
        "description":
          "Apply for UK tourist visa with expert consultants. Assistance with documentation, online filing, visa fees, and appointment scheduling.",
        "breadcrumb": {
          "@id": "https://www.globalvisainternationals.com/#breadcrumb"
        }
      },

      {
        "@type": "Service",
        "@id": "https://www.globalvisainternationals.com/#service",
        "serviceType": "UK Tourist Visa Assistance",
        "provider": {
          "@id": "https://www.globalvisainternationals.com/#organization"
        },
        "description":
          "Full UK tourist visa support including documentation, filing, cover letter drafting, financial guidance, and appointment booking.",
        "areaServed": "India",
        "offers": {
          "@type": "Offer",
          "price": "Contact for pricing",
          "priceCurrency": "INR",
          "url":
            "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom"
        }
      },

      {
        "@type": "FAQPage",
        "@id": "https://www.globalvisainternationals.com/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a UK tourist visa take in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard UK visa processing takes 15 working days. Priority options available."
            }
          },
          {
            "@type": "Question",
            "name": "What documents are required for a UK tourist visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Passport, bank statements, employment proof, travel itinerary, financial documents."
            }
          }
        ]
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.globalvisainternationals.com/#breadcrumb",
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
            "item":
              "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom"
          }
        ]
      },

      {
        "@type": "ItemList",
        "@id": "https://www.globalvisainternationals.com/#uk-attractions",
        "name": "Top Tourist Attractions in the UK",
        "itemListElement": [
          {
            "@type": "TouristAttraction",
            "name": "Big Ben & Houses of Parliament",
            "description":
              "Historic British Parliament and iconic clock tower.",
            "image":
              "https://upload.wikimedia.org/wikipedia/commons/4/43/Elizabeth_Tower%2C_June_2022.jpg",
            "url": "https://www.parliament.uk/"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
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

          <p>Global Visa Internationals makes applying for a UK tourist visa or UK visitor visa easier, faster, and completely stress-free for every traveler. Whether you’re applying for a UK visit visa, a UK standard visitor visa, or planning your trip from India, our experts guide you from the first consultation to final approval. We help you understand the full process for a UK tourist visa from India or UK visitor visa from India, ensuring you meet every requirement with confidence.</p>
          <p>Our team specializes in handling your entire UK visa application with precision—explaining UK visa requirements, preparing paperwork, and offering reliable guidance on UK tourist visa fees, UK visa processing time, and all documentation needed for a successful submission. With GVI’s end-to-end documentation support, you never have to worry about missing details, errors, or compliance issues.</p>
          <p><b>We provide complete, structured assistance for every applicant, including:</b></p>
          <h3 className={styles.subTitle}>Documentation & File Preparation</h3>
          <ul>
            <li>UK tourist visa documents required</li>
            <li>Personalized document checklist</li>
            <li>Verified paperwork aligned with embassy standards</li>
            <li><b className={styles.strong}>Professional drafting:</b>
              <ul>
                <li>Cover letters</li>
                <li>NOC / Leave approval</li>
                <li>Travel explanations</li>
              </ul>
            </li>
          </ul>
          <h3 className={styles.subTitle}>Application Accuracy</h3>
          <ul>
            <li>Accurate form filling by experienced experts</li>
            <li>UK visitor visa appointment booking</li>
            <li>UK tourist visa online application support</li>
            <li>Guidance on UK tourist visa eligibility</li>
          </ul>
          <h3 className={styles.subTitle}>Interview & Biometrics</h3>
          <ul>
            <li>UK visitor visa biometric preparation</li>
            <li>UK tourist visa interview guidance</li>
            <li>Rejection-proofing and addressing UK tourist visa rejection reasons</li>
          </ul>
          <h3 className={styles.subTitle}>Specialized Visa Categories</h3>
          <ul>
            <li>UK visitor visa for family visit</li>
            <li>London tourist visa & London visitor visa</li>
            <li>UK short-term visitor visa</li>
          </ul>
          <p>GVI further enhances your experience with complete guidance throughout your journey—from building your UK tourist visa checklist to choosing the right UK visitor visa insurance, monitoring UK visitor visa processing, and offering ongoing UK visit visa support to keep your travel plans on track.</p>
          <h3 className={styles.subTitle}>Step-by-Step Assistance</h3>
          <ul>
            <li>UK tourist visa application India guidance</li>
            <li>Improving UK visitor visa success rate</li>
            <li>UK tourist visa interview questions</li>
            <li>UK visitor visa travel itinerary planning</li>
            <li>Apply London tourist visa from India</li>
            <li>London visitor visa requirements</li>
          </ul>
          <h3 className={styles.subTitle}>Full Visa Category Support</h3>
          We help you choose the most suitable visa based on your travel purpose:
          <ul>
            <li>UK travel visa</li>
            <li>UK holiday visa</li>
            <li>UK short stay visa</li>
            <li>UK trip visa</li>
            <li>UK vacation visa</li>
            <li>UK entry visa</li>
          </ul>
          <h3 className={styles.subTitle}>Complete Form & Submission Support</h3>
          <ul>
            <li>UK visa form preparation</li>
            <li>UK visa online submission</li>
            <li>UK visa form filling service India</li>
            <li>Document collection to final submission</li>
          </ul>



          <p>Recognized as one of the Best UK visa agencies in India, Global Visa Internationals is trusted by travelers nationwide. From UK VFS appointment India coordination to full UK visa documentation support and even UK multiple entry tourist visa applications, we provide complete A-to-Z case handling until your passport and final result are safely back in your hands.</p>
          <address className={styles.address}>
            <li>GF-9, Business Point, 137 Brigade Road, Next to Brigade Towers, Bangalore – 560025, Karnataka</li>
            <a href="tel:+917022213466" className={styles.callButton}>  📞 Get Free Eligibility Check</a>
            <li>Email: <a href="mailto:operations@globalvisainternationals.com">operations@globalvisainternationals.com</a></li>
          </address>
          {/* Call-to-Action Button */}



          <h2 className={styles.subTitle}>UK Visa Duration Rule</h2>
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
          </div>

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
          {/* <div className={styles.pricingContainer}>
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
          </div> */}
          <address className={styles.address}>
            <li>GF-9, Business Point, 137 Brigade Road, Next to Brigade Towers, Bangalore – 560025, Karnataka</li>
            <a href="tel:+917022213466" className={styles.callButton}>  📞 Get Free Eligibility Check</a>
            <li>Email: <a href="mailto:operations@globalvisainternationals.com">operations@globalvisainternationals.com</a></li>
          </address>

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