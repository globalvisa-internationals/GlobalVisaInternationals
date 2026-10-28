import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import React from 'react';
import Script from 'next/script';
import styles from '@/Components/Visa.module.css';
import VisaForm from '@/Components/VisaForm';


export const metadata = {
  metadataBase: new URL('https://www.globalvisainternationals.com'),
  title: 'UK Business Visa Assistance | Apply for UK Business & Investment Visa from India',
  description:
    'Planning a business trip to the UK? Get your UK Business Visa approved faster with Global Visa Internationals. 99% success rate, personalized checklist, and complete visa support.',
  keywords: [
    'UK business visa',
    'apply business visa UK',
    'UK investor visa',
    'UK entrepreneur visa',
    'business visa consultants',
    'business migration to UK',
  ],
  authors: 'Global Visa Internationals',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',

  alternates: {
    canonical: 'https://www.globalvisainternationals.com/Visa/business-visa/uk',
  },
  openGraph: {
    title: 'Apply for UK Business Visa | Global Visa Internationals',
    description:
      'Get expert help applying for a UK Business Visa from India. Learn eligibility, document requirements, and costs for UK entrepreneur and investor visas.',
    url: 'https://www.globalvisainternationals.com/Visa/business-visa/uk',
    siteName: 'Global Visa Internationals',
    type: 'website',
    locale: 'en_IN',
    alternateLocale: 'en_GB',
    images: [
      {
        url: 'https://www.globalvisainternationals.com/business-visa/UK_Business_Visa_Assistance.webp',
        width: 1200,
        height: 630,
        alt: 'UK Business Visa Assistance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Business Visa | Application, Cost & Eligibility',
    description:
      'Explore UK Business Visa options for entrepreneurs and investors. Get step-by-step visa support from Global Visa Internationals.',
    images: [
      'https://www.globalvisainternationals.com/business-visa/UK_Business_Visa_Assistance.webp',
    ],
    site: 'https://www.globalvisainternationals.com/Visa/business-visa/uk',
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'geo.region': 'GB',
    'geo.placename': 'London',
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru',
    ICBM: '12.9716,77.5946',
  },
};

export default function UK_Business_Visa() {

  return (
    <>

      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Global Visa Internationals",
            "url": "https://www.globalvisainternationals.com",
            "logo": "https://www.globalvisainternationals.com/logo.png",
            "description":
              "Visa consultants offering UK business visa assistance for entrepreneurs, investors, and business owners from India.",
            "image": "https://www.globalvisainternationals.com/business-visa/UK_Business_Visa_Assistance.webp",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "MG Road",
              "addressLocality": "Bengaluru",
              "addressRegion": "KA",
              "postalCode": "560025",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 12.9716,
              "longitude": 77.5946
            },
            "openingHours": "Mo-Fr 10:00-17:00",
            "telephone": "+91-7022213466",
            "priceRange": "$$",
            "hasMap": "https://www.mappls.com/digipin/4P3-J4J-8849",
            "sameAs": [
              "https://www.facebook.com/globalvisainternationals/",
              "https://www.instagram.com/globalvisa_internationals/",
              "https://www.linkedin.com/company/global-visa-internationals/",
              "https://x.com/GLOBALVISA1505",
              "https://www.youtube.com/@globalVisaInternationals",
              "https://www.google.com/maps/place/Global+Visa+Internationals"
            ]
          })
        }}
      />

      {/* ✅ ORGANIZATION SCHEMA */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Global Visa Internationals",
            "url": "https://www.globalvisainternationals.com",
            "logo": "https://www.globalvisainternationals.com/logo.png",
            "description":
              "Global Visa Internationals provides expert UK visa and immigration consulting services for investors, business professionals, and entrepreneurs.",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-7022213466",
                "contactType": "Customer Support",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Kannada"]
              }
            ],
            "sameAs": [
              "https://www.facebook.com/globalvisainternationals/",
              "https://www.instagram.com/globalvisa_internationals/",
              "https://www.linkedin.com/company/global-visa-internationals/",
              "https://x.com/GLOBALVISA1505",
              "https://www.youtube.com/@globalVisaInternationals"
            ]
          })
        }}
      />

      {/* ✅ WEBSITE + SEARCHACTION SCHEMA */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.globalvisainternationals.com",
            "name": "Global Visa Internationals",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.globalvisainternationals.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* ✅ WEBPAGE SCHEMA */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "UK Business Visa Assistance | Global Visa Internationals",
            "url": "https://www.globalvisainternationals.com/Visa/business-visa/uk",
            "description":
              "Apply for a UK Business Visa with expert assistance from Global Visa Internationals. Get guidance on UK Innovator Founder Visa and Investor Visa programs.",
            "inLanguage": "en-IN",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.globalvisainternationals.com"
            }
          })
        }}
      />

      {/* ✅ SERVICE SCHEMA */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "UK Business Visa Application Assistance",
            "provider": {
              "@type": "Organization",
              "name": "Global Visa Internationals",
              "url": "https://www.globalvisainternationals.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "UK Business Visa Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Innovator Founder Visa Assistance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Investor Visa Guidance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Start-Up Visa Consultation"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* ✅ FAQ SCHEMA */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a UK Business Visa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The UK Business Visa allows entrepreneurs and investors to establish, run, or expand a business in the United Kingdom through programs like the Innovator Founder and Start-Up Visa."
                }
              },
              {
                "@type": "Question",
                "name": "How much does a UK Business Visa cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The UK Innovator Founder Visa costs approximately £1,036 per applicant, with additional charges for dependents and healthcare surcharge."
                }
              },
              {
                "@type": "Question",
                "name": "Who is eligible for a UK Business Visa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Applicants must have a viable and innovative business plan, endorsement from an approved UK endorsing body, and sufficient investment funds if required."
                }
              }
            ]
          })
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "Business Visa",
                "item": "https://www.globalvisainternationals.com/Visa/business-visa/uk"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "UK Business Visa"
              }
            ]
          })
        }}
      />

      {/* ✅ AGGREGATE RATING SCHEMA */}
      <Script
        id="aggregate-rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "Organization",
              "name": "Global Visa Internationals"
            },
            "ratingValue": "4.8",
            "bestRating": "5",
            "reviewCount": "230"
          })
        }}
      />


      {/* ✅ Page Visuals */}
      <div className={styles.imageContainer}>
        <img
          src="/business-visa/UK_Business_Visa_Assistance.webp"
          alt="UK Business Visa Assistance Image"
          className={styles.VisaImage}
        />
      </div>

      <div className={styles.VisaSec}>
        <div className={styles.VisaData}>
          <h1 className={styles.Title}>
            UK Business Visa | Expand, Invest & Grow Your Business in the United Kingdom
          </h1>

          <h4 className={styles.strong}>
            Expand Your Global Footprint: Attend Meetings, Trade Fairs & Business Events in London & Paris with One Expert-Assisted European Business Visa
          </h4>
          <p>
            Planning to visit the UK or France for business meetings, corporate networking, trade exhibitions or client visits? A UK Business Visitor Visa India (for London corporate travel visa Indian citizen) or a Paris business visa from India allows Indian professionals and entrepreneurs to enter prestigious business hubs—London and Paris—with confidence. At Global Visa Internationals (GVI), we provide expert assistance for your European business travel India—ensuring smooth, compliant and high-success applications for Indian citizens, covering both your London business meetings visa India application and Paris trade show visa Indian company needs.
          </p>

          <h2 className={styles.subTitle}>What is a UK Business Visa / Paris Business Visa?</h2>
          <p>
            The UK Business Visitor Visa London permits Indian citizens to travel to the United Kingdom (London) for official business purposes such as attending London business conferences visa India, client meetings, trade shows (business visa for India to UK trade fair), signing contracts, or even facilitating a London branch setup visa India business expansion.
            <br />
            The Paris Business Visa (via France / Schengen) enables Indian professionals to attend business-events, meetings or trade fairs in Paris (and the wider Schengen region) with full compliance. Whether it's a France business travel visa Paris multiple entry or a short-stay visa, we guide you.
          </p>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Why Choose GVI for Your UK & Paris Business Visa?</h2>
            <p>
              At Global Visa Internationals (GVI), we specialise in guiding Indian entrepreneurs, company directors and seasoned professionals through the complex visa terrain for London and Paris business travel.
              Whether you’re applying for a UK visitor business visa London up to 6 months or a Paris business visa India trade fair attendance, our expert team helps you avoid common pitfalls and improves your visa success rate for all European business visa India London Paris trips. We also assist with specialized routes like the London investor business visa India.
            </p>
            <a href="/contact-us" className={styles.ctaButton}>
              Get Your Free Business Visa Consultation Now!
            </a>
          </div>

          <h2 className={styles.subTitle}>Business Visa Validity & Duration Rules (UK & Paris)</h2>
          <p>
            For the UK Business Visitor Visa (London): The UK business visa India short stay typically allows you to stay up to 6 months for business activities like meetings, conferences and trade fairs.
            For the Paris Business Visa: As part of the Schengen / France business travel visa Paris multiple entry route, short-stay business visits allow up to 90 days within any 180-day period.
            Regular, compliant business travellers may secure France business visa India multiple entry options for frequent trips to London or Paris.
          </p>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Business Visa Application Assistance (UK & Paris)</h2>
            <p>
              At GVI we handle end-to-end assistance for your UK business visa and Paris business visa application—from documentation to embassy submission—giving Indian business travellers a stress-free experience.
            </p>
            <h3 className={styles.subTitle}>Our Services Include:</h3>
            <ul>
              <li>Filling the UK or Paris business visa requirements India application form</li>
              <li>Drafting of professional invitation/covering letters for London & Paris purposes</li>
              <li>Personalised checklist & document verification tailored to “UK business visa documents India bank statements” or “France business visa India documentation” criteria</li>
              <li>Assistance with UK business visa India sponsor letter or Paris business visa requirements India invitation letter from the host company</li>
              <li>Flight, hotel & UK business visa India travel insurance arrangement for business travel to London or Paris</li>
              <li>Appointment scheduling with visa application centres (VFS / UKVCAS / France Visas) in India</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Business Visa Document Checklist – India (2025 Edition)</h2>
            <p>
              To apply for a UK Business Visa (London) or Paris Business Visa (France) from India, you must submit comprehensive, verified documents. GVI ensures every file is embassy-compliant, addressing all required France business visa India documentation.
            </p>

            <h3 className={styles.subTitle}>1. Passport & Travel History</h3>
            <ul>
              <li>Valid passport (minimum 6 months validity beyond return date, with 2-3 blank pages)</li>
              <li>Previous international travel history (especially UK/Europe) where applicable</li>
            </ul>

            <h3 className={styles.subTitle}>2. Business Invitation & Purpose Documents</h3>
            <ul>
              <li>Invitation letter from the UK host company (London) or French partner (Paris) specifying business relationship and meeting/trade fair purpose</li>
              <li>Cover letter from your Indian company stating travel reason, duration & expense responsibility</li>
              <li>Company registration certificate, GST registration & business profile of your Indian company</li>
            </ul>

            <h3 className={styles.subTitle}>3. Financial & Employment Proof</h3>
            <ul>
              <li>6 months of current account / business account bank statements (UK business visa documents India bank statements)</li>
              <li>Income Tax Returns (ITR) for the last 3 years</li>
              <li>Salary slips or business income proof if you are self-employed or a director</li>
            </ul>

            <h3 className={styles.subTitle}>4. Travel Arrangements & Support Documents</h3>
            <ul>
              <li>Flight reservation (round-trip) for your London or Paris business stay</li>
              <li>Hotel or accommodation confirmation in London or Paris</li>
              <li>Travel insurance covering business travel to the UK or France (UK business visa India travel insurance – we help arrange it to meet embassy standards)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Business Visa Fees & Processing Time (India)</h2>
            <ul>
              <li>UK Business Visa Fee India: Approx. £115 for the Standard Visitor Visa (up to 6 months). Long-term options are available at higher fees.</li>
              <li>France Business Visa Cost India: For short-stay business, the Schengen visa fee is approx. €90 plus service charges (VFS).</li>
              <li>Processing Time: UK Business Visitor Visa India eligibility and application quality directly impact the decision time. Standard UK business visa processing India is typically 3 weeks from the biometric appointment. Paris business visa India processing time (France/Schengen) for short-stay business applications is typically 5-15 working days.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Common Business Visa Rejection Reasons (UK & Paris) – and How GVI Helps</h2>
            <ul>
              <li>Incomplete or mismatched documents → GVI performs embassy-level document validation</li>
              <li>Unclear business purpose or weak invitation letter → Professionally drafted cover & invitation letters for UK (London) and Paris (France)</li>
              <li>Weak financial proof or insufficient funds → Pre-verification of bank & business income records (UK business visa documents India bank statements)</li>
              <li>Inconsistent travel plans or accommodation details → Verified itinerary prepared by GVI experts for London/Paris trips.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>UK & Paris Business Visa Process (Step-by-Step for Indian Applicants)</h2>
            <ol>
              <li>Online application form submission (UKVI for UK; France-Visas / VFS for France) for UK Business Visa or Paris Business Visa</li>
              <li>Document verification & submission at visa application centre in India (UKVCAS / VFS Global) for your London or Paris business visa trip</li>
              <li>Biometrics collection (fingerprints & photo) during appointment</li>
              <li>Tracking & passport collection once decision is made (post-UK business visa processing India / Paris business visa India processing time)</li>
            </ol>
            <a href="https://www.gov.uk/standard-visitor/visit-on-business" target="_blank" rel="noopener noreferrer">
              Visit UK Business Visitor Visa – UK Government
            </a>
            <br />
            <a href="https://france-visas.gouv.fr/en/india" target="_blank" rel="noopener noreferrer">
              Visit France Business Visa – France Visas (Indian Applicants)
            </a>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Why Choose Global Visa Internationals (GVI) for UK & Paris Business Visas?</h2>
            <ul>
              <li><b className={styles.strong}>1,000+ business visas processed for Indian professionals traveling to London & Paris</b> covering all European business travel India needs.</li>
              <li><b className={styles.strong}>End-to-end file management with visa-centre compliance checks for UK & France</b>, ensuring UK business visitor visa India eligibility is met.</li>
              <li><b className={styles.strong}>Dedicated business visa experts with European documentation experience</b> (UK & Paris routes)</li>
              <li><b className={styles.strong}>98% success rate for properly filed UK and Paris business visa applications</b>.</li>
            </ul>
            <p>
              Whether you’re traveling to London for a trade show, Paris for a business conference or corporate meeting—GVI ensures a seamless business visa experience from start to finish for your Europe business travel India London Paris itinerary.
            </p>
          </div>

          <h2 className={styles.subTitle}>Ready to Apply for Your UK Business Visa or Paris Business Visa?</h2>
          <p>
            Start your UK Business Visa application or Paris Business Visa application today with Global Visa Internationals and get professional guidance for faster approvals.
            <br />
            <a href="/contact" className={styles.ctaButton}>
              Book Your Free Consultation & Visa Audit Now!
            </a>
          </p>
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