// import styles from "@/app/Visa/tourist-visa/tourist.module.css";
import Head from "next/head";
import styles from './TouristVisa.module.css';
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import VisaForm from "@/Components/VisaForm";
// import VisaForm from "";

export const metadata = {
  title: "Tourist Visa Assistance: Canada, USA, UK, Schengen & More | Global Visa Internationals",
  description: "Apply for tourist visas with Global Visa Internationals. Get expert guidance for Schengen, Canada, USA, UK, Australia, Dubai, Singapore, and New Zealand visas. Learn requirements, documents, fees, and travel tips.",
  keywords: "tourist visa, apply tourist visa India, Canada tourist visa, USA tourist visa, UK tourist visa, Schengen visa, Australia tourist visa, Dubai tourist visa, Singapore tourist visa, New Zealand tourist visa, visa consultants, visa requirements, visa documents, visa fees",
  robots: "index, follow",

  // Canonical URL
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa",
  },

  // Open Graph Metadata
  openGraph: {
    title: "Tourist Visa Assistance: Canada, USA, UK, Schengen & More",
    description: "Global Visa Internationals helps Indian travelers apply for tourist visas worldwide – including Schengen, Canada, USA, UK, Australia, Dubai, Singapore, and New Zealand. Expert help on requirements, documents, and fees.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa",
    siteName: "Global Visa Internationals",
    images: [
      {
        url: "https://www.globalvisainternationals.com/visa-banner/Tourist-Visa-Assistance-Banner.webp",
        width: 1200,
        height: 630,
        alt: "Tourist Visa Assistance Banner",
      },
    ],
    type: "website",
    locale: "en_IN",
    // Add additional optional properties
    countryName: "India",
  },

  // Twitter Metadata
  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "Tourist Visa Assistance: Canada, USA, UK, Schengen & More",
    description: "Plan your trip with confidence. Apply for tourist visas (Schengen, Canada, USA, UK, Australia, Dubai, Singapore, New Zealand) with Global Visa Internationals – expert guidance for documents, fees, and approvals.",
    images: ["https://www.globalvisainternationals.com/visa-banner/Tourist-Visa-Assistance-Banner.webp"],
    creator: "@GLOBALVISA1505",
  },

  // Additional Metadata
  authors: [{ name: "Global Visa Internationals" }],
  publisher: "Global Visa Internationals",
  category: "Travel & Tourism",

  // Viewport is automatically added by Next.js, but you can configure it in layout.tsx

  // Other metadata
  other: {
    // Geo & Location Metadata
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "ICBM": "12.9716,77.5946",

    // Mobile SEO
    "theme-color": "#ffffff",
    "format-detection": "telephone=no",

    // Additional SEO Meta Tags
    "application-name": "Global Visa Internationals",
    "generator": "Next.js",
    "referrer": "origin-when-cross-origin",

    // Verification (if needed)
    // "google-site-verification": "your-verification-code",
    // "yandex-verification": "your-verification-code",
    // "msvalidate.01": "your-verification-code",
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
    "description": "Global Visa Internationals is a trusted travel visa consultancy in Bangalore. We assist with Tourist, Visitor, and Business visas for Canada, USA, UK, Schengen, Australia, Dubai, Singapore, New Zealand, and more.",
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to get a Schengen tourist visa from India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On average, a Schengen tourist visa from India takes 15 to 21 working days after submission, depending on the embassy and travel season."
        }
      },
      {
        "@type": "Question",
        "name": "Can Global Visa Internationals help with USA, UK, and Canada tourist visas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide complete assistance for USA, UK, Canada, Schengen, Australia, Dubai, Singapore, and New Zealand tourist visas."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for a tourist visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The basic documents include a valid passport, recent photographs, travel itinerary, proof of funds, employment proof, and accommodation details. Requirements may vary by country."
        }
      },
      {
        "@type": "Question",
        "name": "Do you assist with visa interview preparation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for USA, UK, and Canada visas we provide mock interview preparation, guidance, and practice sessions to help applicants succeed."
        }
      },
      {
        "@type": "Question",
        "name": "Is visa fee included in the service charges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our consultancy fees do not include embassy visa fees, except in some cases like Singapore visas where the visa fee is bundled. We will provide a clear breakdown before starting your application."
        }
      }
    ]
  };

  return (
    <>
      <div className={styles.header}>
        <h1>🌍 Tourist & Visitor Visa Services</h1>
        <p>Your Gateway to Exploring the World with Confidence</p>
      </div>

      <div className={styles.container}>
        <div className={styles.introSection}>
          <h2>Transform Your Travel Dreams into Reality</h2>
          <p>Planning your dream vacation or visiting loved ones abroad? At Global Visa Internationals, we specialize in making your international travel aspirations come true. With our expert guidance and comprehensive support, obtaining a tourist or visitor visa for any destination becomes a seamless, stress-free experience.</p>
          <p>Whether you&apos;re dreaming of exploring ancient European cities, experiencing vibrant Asian cultures, witnessing African safaris, or visiting family across continents, we&apos;re here to turn those dreams into boarding passes. Our dedicated team of visa specialists possesses in-depth knowledge of immigration requirements for over 180+ countries worldwide.</p>
        </div>

        <section className={styles.popularDestinations}>
          <h2>Popular Tourist Visa Destinations We Serve</h2>
          <p className={styles.destinationSubtitle}>We process tourist and visitor visas for all countries worldwide. Here are some of our most requested destinations:</p>

          <div className={styles.destinationsGrid}>
            <div className={styles.destinationItem}>
              <h4>🇺🇸 United States (B1/B2 Visa)</h4>
              <p>Visit family, explore national parks, or experience the American dream. We handle tourist and business visitor visas with high success rates.</p>
            </div>

            <div className={styles.destinationItem}>
              <h4>🇬🇧 United Kingdom</h4>
              <p>Explore historic landmarks, royal palaces, and vibrant cities. Standard visitor visa processing with expert documentation support.</p>
            </div>

            <div className={styles.destinationItem}>
              <h4>🇨🇦 Canada</h4>
              <p>Experience stunning landscapes and multicultural cities. Visitor visa and eTA applications handled professionally.</p>
            </div>

            <div className={styles.destinationItem}>
              <h4>🇦🇺 Australia</h4>
              <p>Discover the Land Down Under with our Visitor visa (subclass 600) expertise for tourism and family visits.</p>
            </div>

            <div className={styles.destinationItem}>
              <h4>🇪🇺 Schengen Countries</h4>
              <p>Access 27 European countries with one visa. We specialize in Schengen tourist visa applications for all member states.</p>
            </div>

            <div className={styles.destinationItem}>
              <h4>🇦🇪 UAE (Dubai)</h4>
              <p>Experience luxury and innovation in the Middle East. Tourist visa processing for Dubai and all UAE emirates.</p>
            </div>

            <div className={styles.destinationItem}>
              <h4>🇸🇬 Singapore</h4>
              <p>Visit Asia&apos;s most modern city-state. Quick processing for Singapore tourist visas and electronic travel authorizations.</p>
            </div>

            <div className={styles.destinationItem}>
              <h4>🇯🇵 Japan</h4>
              <p>Explore ancient traditions and cutting-edge technology. Complete support for Japanese temporary visitor visas.</p>
            </div>

            <div className={styles.destinationItem}>
              <h4>🇹🇭 Thailand</h4>
              <p>Discover tropical paradise and rich cultural heritage. Tourist visa and visa exemption guidance for Thailand.</p>
            </div>

            <div className={styles.destinationItem}>
              <h4>🇳🇿 New Zealand</h4>
              <p>Experience breathtaking natural beauty. Visitor visa processing for New Zealand tourism and family visits.</p>
            </div>

            <div className={styles.destinationItem}>
              <h4>🇿🇦 South Africa</h4>
              <p>Safari adventures and stunning coastlines await. Tourist visa assistance for South African exploration.</p>
            </div>

            <div className={styles.destinationItem}>
              <h4>And 170+ More Countries!</h4>
              <p>From Asia to South America, Africa to Oceania - we process tourist visas for virtually every destination worldwide.</p>
            </div>
          </div>
        </section>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>📋 Complete Documentation Support</h3>
            <ul>
              <li>Document checklist preparation</li>
              <li>Application form assistance</li>
              <li>Cover letter drafting</li>
              <li>Travel itinerary planning</li>
              <li>Financial documentation review</li>
              <li>Supporting document verification</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3>💼 Visa Application Processing</h3>
            <ul>
              <li>Application form completion</li>
              <li>Embassy appointment booking</li>
              <li>Biometric scheduling</li>
              <li>Fee payment guidance</li>
              <li>Application tracking</li>
              <li>Status updates and follow-ups</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3>🎯 Interview Preparation</h3>
            <ul>
              <li>Mock interview sessions</li>
              <li>Common question preparation</li>
              <li>Confidence building techniques</li>
              <li>Embassy protocol guidance</li>
              <li>Do&apos;s and don&apos;ts briefing</li>
              <li>Country-specific tips</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3>✈️ Travel Planning Assistance</h3>
            <ul>
              <li>Trip itinerary suggestions</li>
              <li>Hotel booking guidance</li>
              <li>Travel insurance advice</li>
              <li>Flight reservation tips</li>
              <li>Local contact arrangements</li>
              <li>Travel tips and recommendations</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3>👨‍👩‍👧‍👦 Family Visa Services</h3>
            <ul>
              <li>Group visa applications</li>
              <li>Family reunion visas</li>
              <li>Minor travel documentation</li>
              <li>Spouse and dependent visas</li>
              <li>Multi-generational travel support</li>
              <li>Family invitation letters</li>
            </ul>
          </div>

          <div className={styles.serviceCard}>
            <h3>🔄 Visa Extension & Renewal</h3>
            <ul>
              <li>Extension application support</li>
              <li>Visa renewal processing</li>
              <li>Change of status guidance</li>
              <li>Multiple entry visa assistance</li>
              <li>Long-stay visa consultation</li>
              <li>Overstay resolution support</li>
            </ul>
          </div>
        </div>

        <section className={styles.processSection}>
          <h2>Our Simple 5-Step Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Free Consultation</h3>
              <p>Contact us for a complimentary assessment of your travel plans and visa requirements</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Documentation</h3>
              <p>We provide a customized checklist and help you gather all necessary documents</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Application Preparation</h3>
              <p>Our experts meticulously prepare your application to maximize approval chances</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Submission & Follow-up</h3>
              <p>We submit your application and track progress, keeping you informed at every stage</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <h3>Visa Approval</h3>
              <p>Receive your visa and pre-departure briefing - you&apos;re ready to travel!</p>
            </div>
          </div>
        </section>

        <section className={styles.requirementsSection}>
          <h2>General Tourist Visa Requirements</h2>
          <p className={styles.requirementsSubtitle}>While requirements vary by country, most tourist visa applications require the following documents. We&apos;ll provide a specific checklist for your destination:</p>

          <div className={styles.requirementsList}>
            <div className={styles.requirementItem}>
              <h4>Valid Passport</h4>
              <p>Passport with at least 6 months validity beyond your intended stay and sufficient blank pages</p>
            </div>
            <div className={styles.requirementItem}>
              <h4>Application Form</h4>
              <p>Completed visa application form with accurate information and recent photographs</p>
            </div>
            <div className={styles.requirementItem}>
              <h4>Financial Proof</h4>
              <p>Bank statements, employment letters, or sponsorship documents showing sufficient funds</p>
            </div>
            <div className={styles.requirementItem}>
              <h4>Travel Itinerary</h4>
              <p>Flight reservations, hotel bookings, and detailed travel plans for your trip</p>
            </div>
            <div className={styles.requirementItem}>
              <h4>Travel Insurance</h4>
              <p>Comprehensive travel medical insurance covering your entire stay (required for many countries)</p>
            </div>
            <div className={styles.requirementItem}>
              <h4>Supporting Documents</h4>
              <p>Employment verification, leave approval, property ownership, or family ties documentation</p>
            </div>
          </div>
        </section>

        <section className={styles.whyChoose}>
          <h2>Why Choose Global Visa Internationals?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🏆</div>
              <h3>High Success Rate</h3>
              <p>Over 95% visa approval rate backed by years of expertise and proven strategies</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>⚡</div>
              <h3>Fast Processing</h3>
              <p>Expedited services available for urgent travel needs with priority handling</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>💡</div>
              <h3>Expert Guidance</h3>
              <p>Experienced consultants with in-depth knowledge of global immigration laws</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🔒</div>
              <h3>Secure Process</h3>
              <p>Confidential handling of your documents with complete data protection</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>💬</div>
              <h3>Personalized Support</h3>
              <p>Dedicated consultant assigned to your case for end-to-end assistance</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🌐</div>
              <h3>Global Reach</h3>
              <p>Visa services for 180+ countries with embassy relationships worldwide</p>
            </div>
          </div>
        </section>

        <section className={styles.testimonialSection}>
          <h2>What Our Clients Say</h2>
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <p>&quot;Global Visa Internationals made my Europe trip possible! Their team handled everything professionally, and I got my Schengen visa within 2 weeks. Highly recommended!&quot;</p>
              <div className={styles.testimonialAuthor}>- Priya Sharma, Mumbai</div>
            </div>
            <div className={styles.testimonial}>
              <p>&quot;I was worried about my US tourist visa application, but the consultants guided me through every step. The interview preparation was excellent. Thank you for making my dream vacation happen!&quot;</p>
              <div className={styles.testimonialAuthor}>- Rajesh Kumar, Delhi</div>
            </div>
            <div className={styles.testimonial}>
              <p>&quot;Professional, efficient, and supportive. They helped our entire family get visas for Canada. The process was smooth, and we felt confident throughout. Worth every penny!&quot;</p>
              <div className={styles.testimonialAuthor}>- Meena Patel, Ahmedabad</div>
            </div>
          </div>
        </section>
        <section>
          <ReviewSchema />
          <ReviewCarousel />
        </section>
        <section className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqItem}>
            <h4>How long does it take to process a tourist visa?</h4>
            <p>Processing times vary by country, ranging from 3-5 business days to 4-6 weeks. We provide accurate timelines based on your specific destination and offer expedited services where available.</p>
          </div>

          <div className={styles.faqItem}>
            <h4>What is your success rate for visa applications?</h4>
            <p>We maintain a success rate of over 95% across all tourist visa categories. Our expertise in documentation and application preparation significantly increases your chances of approval.</p>
          </div>

          <div className={styles.faqItem}>
            <h4>Can you help if my visa was previously rejected?</h4>
            <p>Absolutely! We specialize in reapplication cases. Our team will analyze your previous rejection, address the issues, and build a stronger application to maximize approval chances.</p>
          </div>

          <div className={styles.faqItem}>
            <h4>Do I need to visit your office in person?</h4>
            <p>Not necessarily. While we welcome in-person consultations, we offer comprehensive online services including video consultations, digital document submission, and remote application support.</p>
          </div>

          <div className={styles.faqItem}>
            <h4>What if my travel plans are urgent?</h4>
            <p>We offer expedited visa services for urgent travel requirements. Contact us immediately, and we&apos;ll assess the feasibility and explore all available options for fast-track processing.</p>
          </div>

          <div className={styles.faqItem}>
            <h4>How much do your services cost?</h4>
            <p>Our fees vary based on the destination country and service level required. We offer transparent pricing with no hidden charges. Contact us for a detailed quote tailored to your specific needs.</p>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Start Your Journey?</h2>
          <p>Don&apos;t let visa complexities hold you back from your dream destination. Let Global Visa Internationals handle the paperwork while you plan the perfect itinerary!</p>
          <div className={styles.ctaButtons}>
            {/* <button
              className={styles.btnPrimary}
              onClick={() => alert('Call us now at: +91-70222-13466 or WhatsApp: +91-7022213466')}
            >
              📞 Call Us Now
            </button> */}
            {/* <button
              className={styles.btnSecondary}
              onClick={() => alert('Email us at: info@globalvisainternational.com or visit our office for a free consultation!')}
            >
              📧 Get Free Consultation
            </button> */}
          </div>
        </section>

        <div className={styles.contactInfo}>
          <h3>Contact Global Visa Internationals Today</h3>
          <p className={styles.contactSubtitle}>Our visa experts are ready to assist you with personalized guidance</p>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span>📞</span>
              <div>
                <strong>Phone:</strong><br />
                {/* +1-XXX-XXX-XXXX<br /> */}
                +91-7022213466
              </div>
            </div>
            <div className={styles.contactItem}>
              <span>📧</span>
              <div>
                <strong>Email:</strong><br />
                operations@globalvisainternational.com<br />
                {/* support@globalvisainternational.com */}
              </div>
            </div>
            <div className={styles.contactItem}>
              <span>💬</span>
              <div>
                <strong>WhatsApp:</strong><br />
                +91-7022213466<br />
                Available 24/7
              </div>
            </div>
          </div>
          <p className={styles.contactFooter}>
            Schedule Your Free Consultation Today - Your Dream Destination Awaits! ✈️
          </p>
        </div>
      </div>
      <div className={styles.formSection}>
        <VisaForm />
      </div>



    </>
  );
}
