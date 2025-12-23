
import VisaForm from '@/Components/VisaForm';
import styles from '@/Components/Visa.module.css';
import React from 'react';
import Head from 'next/head';
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";


export const metadata = {
  metadataBase: new URL("https://www.globalvisainternationals.com"),

  title: "USA B1/B2 Visa Consultants in India | GVI",
  description:
    "Apply for a USA B1/B2 Visa from India with Global Visa Internationals. Expert help for tourist and business visa documents, fees, appointments, and interview prep.",

  applicationName: "Global Visa Internationals",
  category: "USA B1/B2 Visa Services",

  authors: [
    {
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com/about-us",
    },
  ],

  creator: "Global Visa Internationals",
  publisher: "Global Visa Internationals",

  keywords:
    "USA B1 B2 visa, USA tourist and business visa, B1 B2 visa consultants India, USA visa from India, US visitor visa, USA visa agents Bangalore",

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/usa",
    languages: {
      "en-IN":
        "https://www.globalvisainternationals.com/Visa/tourist-visa/usa",
    },
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_CODE",
  },

  openGraph: {
    title: "USA B1/B2 Visa: Tourist & Business Visa Process from India",
    description:
      "Get expert assistance for your USA B1/B2 Visa. Learn eligibility, fees, documents, interview tips, and processing time for Indian applicants.",
    url: "/Visa/tourist-visa/usa",
    siteName: "Global Visa Internationals",
    type: "website",
    images: [
      {
        url: "/tourist-visa/USA-(B1-B2)-Visa-Assistance-GVI.jpg",
        width: 1200,
        height: 630,
        alt: "USA B1 B2 Visa Assistance from India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "USA B1/B2 Visa - Tourist & Business Visa Help",
    description:
      "Apply for a USA B1/B2 Tourist and Business Visa from India with expert consultants. Trusted guidance since 2017.",
    images: [
      "/tourist-visa/USA-(B1-B2)-Visa-Assistance-GVI.jpg",
    ],
  },

  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bangalore",
    "content-language": "en-IN",
  },
};



export default function USATouristVisa() {
  const pageUrl = metadata.alternates.canonical;

  // ----------- SCHEMAS START ------------ //

  const touristAttraction = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Tourist Attractions in the USA",
    itemListElement: [
      {
        "@type": "TouristAttraction",
        name: "Statue of Liberty",
        description:
          "Iconic symbol of freedom in New York City, offering scenic views and tours.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
        url: "https://www.nps.gov/stli/index.htm",
      },
      {
        "@type": "TouristAttraction",
        name: "Grand Canyon - Pima Point",
        description:
          "Panoramic viewpoint overlooking the Grand Canyon’s South Rim.",
        image:
          "https://www.nps.gov/common/uploads/cropped_image/primary/FF126CF3-9FCB-3F85-33DB711059064278.jpg",
        url: "https://www.nps.gov/places/000/pima-point.htm",
      },
      {
        "@type": "TouristAttraction",
        name: "Yellowstone National Park - Morning Glory Pool",
        description:
          "Vibrant hot spring in Yellowstone’s Upper Geyser Basin, known for blue-green hues.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/27/Morning_Glory_Pool.jpg",
        url: "https://www.nps.gov/places/000/morning-glory-pool.htm",
      },
      {
        "@type": "TouristAttraction",
        name: "Walt Disney World Resort - Cinderella Castle",
        description:
          "Fairy-tale castle at the heart of Magic Kingdom Park in Florida.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d6/Cinderella_Castle%2C_Magic_Kingdom.JPG",
        url: "https://disneyworld.disney.go.com/attractions/magic-kingdom/cinderella-castle/",
      },
      {
        "@type": "TouristAttraction",
        name: "Golden Gate Bridge",
        description:
          "Famous suspension bridge in San Francisco with panoramic skyline views.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
        url: "https://www.goldengate.org/",
      },
    ],
  };


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
        name: "USA Tourist Visa",
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
      "Expert USA Tourist Visa Consultants in Bangalore. We assist with complete USA visa documentation, application submission, and personalized guidance.",
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

  // ------- LocalBusiness Schema ------- //
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    image:
      "https://www.globalvisainternationals.com/gvilogo.png",
    priceRange: "₹₹₹",
    telephone: "+91-7022213466",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MG Road",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560025",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "579",
    },
  };

  // -------- Organization Schema -------- //
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    sameAs: travelAgencyJsonLd.sameAs,
  };

  // ---------- Website Schema ---------- //
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.globalvisainternationals.com/search?q={query}",
      "query-input": "required name=query",
    },
  };

  // ---------- WebPage Schema ---------- //
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: metadata.title,
    url: pageUrl,
    description: metadata.description,
    about: {
      "@type": "Thing",
      name: "USA Tourist Visa (B2)",
    },
  };

  // ---------- Service Schema ---------- //
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "USA Tourist Visa Assistance",
    provider: {
      "@type": "Organization",
      name: "Global Visa Internationals",
    },
    areaServed: "India",
    serviceType: "B2 Tourist Visa Documentation & Filing",
    description:
      "Complete USA Tourist Visa (B2) assistance including DS-160, documentation, scheduling, and interview preparation.",
  };

  // -------- FAQ Schema -------- //
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a USA Tourist Visa take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Processing time varies based on consulate appointments. Generally, it ranges from a few weeks to a few months.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are required for a USA B2 visa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Passport, DS-160 confirmation, bank statements, employment proof, travel itinerary, and supporting financial documents.",
        },
      },
      {
        "@type": "Question",
        name: "Can Global Visa Internationals help with USA visa interview preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide complete guidance, practice Q&A sessions, and personalized interview training.",
        },
      },
    ],
  };

  // ---------- RENDER BELOW ---------- //
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttraction) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />


      <div className={styles.imageContainer}>
        <img src="/tourist-visa/USA-(B2)Tourist-Visa-Assistance-GVI.jpg" alt="USA Tourist Visa assistance banner" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>


        <div className={styles.VisaData}>
          <h1 className={styles.Title}>USA B1/B2 Visa Assistance & Top US Visa Consultant in India</h1>

          <p>Planning to travel to the United States? The process of applying for a USA tourist visa or USA visitor visa can feel overwhelming—especially when you're unsure about the right category, documents, or interview preparation. That’s where Global Visa Internationals, a leading USA visa agent in Bangalore, makes the difference.</p>

          <p>Understanding the US B1 visa (Business), US B2 visa (Tourism/Visit), and the combined US B1/B2 visa assistance process is essential before you begin your USA visa application online. Our expert team simplifies the entire journey, acting as your dedicated US visa consultants in India, guiding you through every step with clarity, accuracy, and professional support.</p>



          <h2 className={styles.subTitle}>Exclusive GVI Advantage — Get Your US Visa Appointment in as Fast as 7 Days!</h2>
          <p>As a specialized USA visa slot booking agent, we solve the biggest hurdle Indian travelers face: the wait time.</p>
          <ul>
            <li>Emergency US visa appointment assistance — Get slots in just 7 Days!</li>
            <li>While others wait 13-15 months, we unlock early US visa slot availability within 7 to 30 days.</li>
            <li>Even high-risk nationalities secure approvals with our expert US visa rejected cases preparation.</li>
            <li>From DS-160 form filling services to interview coaching, GVI handles everything end-to-end.</li>
            <li>Don’t waste a year waiting — utilize our US visa fast track services today!</li>
          </ul>

          <address className={styles.address}>
            Global Visa Internationals - Best US Visa Consultancy
            <li>GF-9, Business Point, 137 Brigade Road, Next to Brigade Towers, Bangalore - 560025, Karnataka</li>
            <a href="tel:+917022213466" className={styles.callButton}> 📞 Get Free Eligibility Check</a>
            <li>Email: <a href="mailto:operations@globalvisainternationals.com">operations@globalvisainternationals.com</a></li>
          </address>

          <p>From identifying the exact USA tourist visa requirements to assembling your USA visitor visa documents, we ensure your application is strong, complete, and well-prepared. Our documentation checks and US visa application help reduce errors and save you time.</p>



          <p>The USA visa appointment and USA visa interview are crucial stages. Many applicants feel unsure about commonly asked US visa interview questions, interview strategy, and required documents. Our personalized US visa interview mock sessions and one-on-one coaching help you attend with confidence. We also guide you on USA visa processing time 2025, USA tourist visa fees, and next steps after your appointment.</p>

          <p>Whether you're applying for the first time or seeking guidance after a previous refusal, we help you understand USA tourist visa eligibility and provide strategies to avoid common US visa rejection reasons. Our proven USA visa approval tips ensure your profile is presented in the best possible way.</p>

          <h2 className={styles.subTitle}>How Global Visa Internationals Helps You</h2>

          <p>Global Visa Internationals (GVI) takes the stress out of your process by serving as your reliable USA visa consultant near me. Whether you're applying for a B1, B2, or B1/B2 visa, our expert team manages everything with precision.</p>

          <h2 className={styles.subTitle}>Complete, End-to-End USA Visa Assistance</h2>

          <h4 className={styles.subTitle}>A-to-Z Documentation Handling</h4>
          <ul>
            <li>We collect, prepare, and thoroughly verify all your required USA visa document checklist items.</li>
            <li>Your documents are organized exactly as per US Embassy standards by our USA visa experts.</li>
          </ul>

          <h4 className={styles.subTitle}>Accurate DS-160 Form Filling</h4>
          <ul>
            <li>Our experts complete your DS-160 form with precision, ensuring all information is accurate and consistent.</li>
            <li>This minimizes errors that could lead to delays or rejections for your US visitor visa application.</li>
          </ul>

          <h3 className={styles.subTitle}>Tailored Case File Based on Your Profile</h3>
          <p>Every traveler is unique — your case file should be too. We act as your personal USA visa agency to build a plan based on:</p>
          <ul>
            <li>Travel history and USA visa renewal India status</li>
            <li>Personal background and financial profile</li>
            <li>Purpose of travel (Business/Tourism)</li>
          </ul>

          <h3 className={styles.subTitle}>Professional Drafting Support</h3>
          We prepare all essential drafts including:
          <ul>
            <li>Expert cover letter for the US Embassy</li>
            <li>NOC / Leave approval letter samples</li>
            <li>B2 visa invitation letter formats</li>
          </ul>

          <h2 className={styles.subTitle}>Global Visa Internationals: Expert Support for All USA Visa Categories</h2>

          <h4 className={styles.subTitle}>B1 Visa — Business Purpose</h4>
          For clients needing USA business visa agents for meetings, conferences, and training travel.
          <h4 className={styles.subTitle}>B2 Visa — Tourism & Family Visits</h4>
          Holiday trips, tourism, and visiting friends and family.
          <h4 className={styles.subTitle}>B1/B2 Visa — Combined Travel</h4>
          For travelers who need both tourism + business flexibility.

          <h2 className={styles.subTitle}>Interview & Biometrics Preparation</h2>
          <ul>
            <li>Mock interview sessions to help you answer confidently</li>
            <li>Guidance on US visa appointment booking and rescheduling</li>
            <li>Step-by-step support for US visa biometric appointment procedures at VAC</li>
          </ul>



          <h2 className={styles.subTitle}>Avoid USA Visa Rejection</h2>
          <p>Our specialists review your case deeply to:</p>
          <ul>
            <li>Identify potential red flags causing US visa refusal</li>
            <li>Strengthen weak areas in your USA tourist visa for Indians application</li>
            <li>Strategize your approval approach</li>
          </ul>

          <h2 className={styles.subTitle}>Global Visa Internationals will make a Simple and Hassle-Free Process for You</h2>
          <ol>
            <li>Share your basic documents with your US visa agent</li>
            <li>GVI prepares and finalizes your entire case</li>
            <li>You visit VAC for biometrics & attend the interview</li>
            <li>We handle tracking, updates, and final guidance</li>
          </ol>

          <div className={styles.ctaBox}>
            <h3 className={styles.subTitle}>Begin Your American Journey Today!</h3>
            <p>Let Global Visa Internationals handle the complex visa process while you focus on planning your trip. Trust the best US visa consultancy for personalized guidance.</p>
            <a href="tel:+917022213466" className={styles.callButton}> 📞 Get Free Eligibility Check</a>
          </div>

          <h2 className={styles.subTitle}>Top Tourist Attractions in the USA</h2>
          <p>With a properly issued Tourist Visa, experience the perfect blend of natural beauty and modern marvels. Don't miss these destinations:</p>
          <ul>
            <li>Statue of Liberty National Monument, New York</li>
            <li>Grand Canyon National Park, Arizona</li>
            <li>Golden Gate Bridge, San Francisco</li>
            <li>Walt Disney World Resort, Orlando</li>
            <li>Las Vegas Strip, Nevada</li>
            <li>Yellowstone & Yosemite National Parks</li>
            <li>Niagara Falls State Park</li>
          </ul>

          <h2 className={styles.subTitle}>Compelling Reasons to Apply for a USA Tourist Visa</h2>
          <ol>
            <li><strong className={styles.strong}>Comprehensive Visa Guidance:</strong> Our specialized USA Tourist Visa consultants provide detailed support.</li>
            <li><strong className={styles.strong}>Diverse Attractions:</strong> From national parks to modern architectural marvels.</li>
            <li><strong className={styles.strong}>Unforgettable Culinary Experiences:</strong> Taste authentic regional specialties.</li>
            <li><strong className={styles.strong}>World-Class Entertainment:</strong> Broadway, festivals, and sporting events.</li>
          </ol>

          <p>Require professional assistance? Our dedicated team at Global Visa Internationals offers complete USA Tourist Visa assistance — encompassing everything from document collection to US visa interview preparation.</p>

          <div className={styles.ctaBox}>
            <h3 className={styles.subTitle}>Your American Dream Starts Here</h3>
            <p>Don't let visa complexities deter you. Our experienced US visa consultants have helped thousands of travelers successfully obtain their visas.</p>
            Start Your Visa Application Today
          </div>

          <p>Get in touch today with a trusted <span style={{ color: '#c00' }}>USA Tourist Visa consultant</span> from Global Visa Internationals!</p>

          <h2 className={styles.Title}>USA Tourist Visa - Simplified Application Process & Expert Assistance from India</h2>
          <p>Our professional US visa consultants at Global Visa Internationals provide comprehensive end-to-end USA Tourist Visa assistance specifically designed to make the entire process straightforward for Indian applicants.</p>

          <div className={styles.highlightSection}>
            <h3 className={styles.subTitle}>Types of USA Tourist Visas Available for Indian Citizens</h3>
            <div className={styles.highlightGrid}>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>B2 Tourist Visa (Standard)</span>
                <p className={styles.countryInfo}>10 Years (typically)</p>
                <p className={styles.countryInfo}>Up to 6 months per entry</p>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.countryName}>B1 Business Visa (Standard)</span>
                <p className={styles.countryInfo}>10 Years (typically)</p>
                <p className={styles.countryInfo}>Ideal for business conferences</p>
              </div>
            </div>
          </div>

          <h2 className={styles.subTitle}>U.S. Tourist Visa (B1/B2) Documents Checklist for Indian Applicants</h2>
          <p>The USA visa document checklist is critical. Unlike Schengen, the U.S. process is interview-based. You must convince the officer you have no intention of immigrating.</p>



          <h3 className={styles.subTitle}>1. Mandatory Documents for the Interview</h3>
          <ul>
            <li><b className={styles.strong}>Valid Passport</b>: Valid for at least 6 months beyond intended stay.</li>
            <li><b className={styles.strong}>USA Visa Application Confirmation</b>: The DS-160 confirmation page.</li>
            <li><b className={styles.strong}>Visa Application Fee Receipt</b>: Proof of payment for the MRV Fee.</li>
            <li><b className={styles.strong}>Visa Interview Appointment Letter</b>: Essential for entry into the embassy.</li>
          </ul>

          <h3 className={styles.subTitle}>2. Supporting Financial & Professional Documents</h3>
          <ul>
            <li><b className={styles.strong}>Proof of Funds</b>: Bank statements (last 6 months), ITRs (last 3 years), and liquid assets.</li>
            <li><b className={styles.strong}>Employment Proof</b>: Letter from employer or business registration for self-employed applicants.</li>
            <li><b className={styles.strong}>Proof of Strong Ties</b>: Property ownership, family ties, or stable job evidence to prevent US visa rejection.</li>
          </ul>

          <h2 className={styles.subTitle}>U.S. Tourist Visa Fees (India 2025)</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Fee Type</th>
                <th>Current Cost (INR)</th>
                <th>USD Equivalent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MRV Application Fee (Standard)</td>
                <td>₹15,200</td>
                <td>$185</td>
              </tr>
              <tr>
                <td>VFS Service Charge</td>
                <td>₹1,320</td>
                <td>$16</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.note}>Note: USA visa fees are subject to change based on exchange rates.</p>

          <h2 className={styles.subTitle}>Common Reasons for U.S. Visa Rejection & How to Address Them</h2>
          <p>Most US visa refused cases fall under Section 214(b). Here is how our USA visa agents help you avoid this:</p>
          <ul>
            <li><b className={styles.strong}>Insufficient Proof of Funds:</b> We structure your financial documents to show stability.</li>
            <li><b className={styles.strong}>Inconsistent Information:</b> We ensure your DS-160 matches your interview answers.</li>
            <li><b className={styles.strong}>Lack of Interview Preparation:</b> Our US visa interview mock sessions prepare you for tough questions.</li>
          </ul>

          <div className={styles.ctaBox}>
            <h3 className={styles.subTitle}>Confused About Visa Requirements?</h3>
            <p>Our experts provide clear, personalized guidance on all documentation needed for your specific situation.</p>
            Get Personalized Document Checklist
          </div>

          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <ul>
            <li>Expert USA visa agent in Bangalore with global reach.</li>
            <li>Completely transparent pricing with no hidden charges.</li>
            <li>Thorough US visa interview preparation.</li>
            <li>High success rate with extensive experience in US visa assistance.</li>
          </ul>

          <h3 className={styles.subTitle}>Let Global Visa Internationals Be Your Trusted US Visa Consultant</h3>
          <p>Dreaming of exploring America? At Global Visa Internationals, we specialize in providing exceptional USA Tourist Visa assistance with an impressive success rate.</p>

          <b className={styles.subTitle}>Our Comprehensive US Visa Services Include:</b>
          <ul>
            <li>One-on-one guidance from a USA visa expert.</li>
            <li>Expert USA visa document checklist creation.</li>
            <li>Professional DS-160 form filling services.</li>
            <li>Continuous support for US visa slot booking.</li>
          </ul>

          <p className={styles.note}>Avoid last-minute stress. Contact Global Visa Internationals today and let us expertly handle your USA Tourist Visa process from beginning to end.</p>

          <div className={styles.ctaBox}>
            <h3 className={styles.subTitle}>Limited Availability for Personalized Consultation</h3>
            <p>Our visa experts have limited capacity. Reserve your spot today for comprehensive US visa guidance.</p>
            Reserve Your Consultation Now
          </div>
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