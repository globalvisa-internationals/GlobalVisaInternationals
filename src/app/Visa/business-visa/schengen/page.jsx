import styles from "@/Components/Visa.module.css";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import React from 'react';
import Script from 'next/script';
import VisaForm from '@/Components/VisaForm';

// ✅ Next.js Metadata API
export const metadata = {
  title: "Schengen Business Visa Assistance from India | Requirements, Process & Cost",
  description:
    "Apply for a Schengen Business Visa with expert help from Global Visa Internationals. Learn about visa requirements, eligibility, documentation, and the application process.",
  keywords:
    "European business visa, apply business visa Europe, Europe business visa from India, EU investor visa, business migration to Europe",
  robots: "index, follow",
  authors: [{ name: "Global Visa Internationals" }],
  themeColor: "#0a66c2",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/business-visa/schengen",
  },
  openGraph: {
    title: "Apply for Schengen Business Visa | Global Visa Internationals",
    description:
      "Get complete assistance in applying for a Schengen Business Visa from India. Learn about visa types, eligibility, and process with Global Visa Internationals.",
    url: "https://www.globalvisainternationals.com/Visa/business-visa/schengen",
    type: "website",
    locale: "en_IN",
    alternateLocale: "en_US",
    images: [
      {
        url: "https://www.globalvisainternationals.com/business-visa/Schengen_Business_Visa_Assistance.webp",
        width: 1200,
        height: 630,
        alt: "Schengen Business Visa Assistance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schengen Business Visa | Application, Cost & Requirements",
    description:
      "Explore Schengen Business Visa options with expert guidance. Apply from India for investor or entrepreneur visas in EU countries.",
    images: [
      "https://www.globalvisainternationals.com/business-visa/Schengen_Business_Visa_Assistance.webp",
    ],
  },
  other: {
    "geo.region": "EU",
    "geo.placename": "Europe",
    "ICBM": "12.9716,77.5946",
  },
};

export default function schengen_Tourist_Visa_assistence() {
  return (
    <>
      {/* ✅ JSON-LD Structured Data */}
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Global Visa Internationals",
            "url": "https://www.globalvisainternationals.com",
            "logo": "https://www.globalvisainternationals.com/logo.png",
            "description":
              "Visa experts offering European business visa assistance for entrepreneurs, investors, and business owners from India.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "MG Road",
              "addressLocality": "Bengaluru",
              "addressRegion": "KA",
              "postalCode": "560025",
              "addressCountry": "IN",
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7022213466",
              "contactType": "Customer Support",
            },
            "hasMap": "https://www.mappls.com/digipin/4P3-J4J-8849",
            "sameAs": [
              "https://www.facebook.com/globalvisainternationals/",
              "https://www.instagram.com/globalvisa_internationals/",
              "https://www.linkedin.com/company/global-visa-internationals/",
              "https://x.com/GLOBALVISA1505",
              "https://www.youtube.com/@globalVisaInternationals",
              "https://www.google.com/maps/place/Global+Visa+Internationals",
            ],
          }),
        }}
      />

      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.globalvisainternationals.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Business Visa",
                item: "https://www.globalvisainternationals.com/Visa/business-visa/schengen",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Schengen Business Visa",
              },
            ],
          }),
        }}
      />

      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which European countries offer business visas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Many EU countries such as Germany, Portugal, the Netherlands, and France offer business and investment visas. Each country has its own criteria and benefits.",
                },
              },
              {
                "@type": "Question",
                "name": "What are the general requirements for a Schengen Business Visa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Requirements typically include a valid business plan, investment proof, minimum turnover, passport, and clean background. Country-specific rules apply.",
                },
              },
              {
                "@type": "Question",
                "name": "How much does it cost to apply for a Schengen Business Visa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Costs vary widely depending on the country and visa type. Application fees typically range from €1,000 to €5,000. Additional legal, documentation, and consulting fees may apply.",
                },
              },
            ],
          }),
        }}
      />

      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Schengen Business Visa Assistance from India",
            "description":
              "Comprehensive guide and professional help for Schengen Business Visa application from India. Trusted by Indian entrepreneurs since 2012.",
            "image": "https://www.globalvisainternationals.com/business-visa/Schengen_Business_Visa_Assistance.webp",
            "author": {
              "@type": "Organization",
              "name": "Global Visa Internationals",
              "url": "https://www.globalvisainternationals.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Global Visa Internationals",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.globalvisainternationals.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.globalvisainternationals.com/Visa/business-visa/schengen"
            },
            "datePublished": "2025-01-05",
            "dateModified": "2025-11-05"
          }),
        }}
      />


      <Script
        id="ld-potentialaction"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Global Visa Internationals",
            "url": "https://www.globalvisainternationals.com",
            "potentialAction": {
              "@type": "ContactAction",
              "target": "https://www.globalvisainternationals.com/contact",
              "name": "Book a Visa Consultation",
              "description": "Schedule a consultation with visa experts to start your business visa application.",
              "result": {
                "@type": "Reservation",
                "name": "Visa Consultation Appointment"
              }
            }
          }),
        }}
      />


      <Script
        id="ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Schengen Business Visa Application Assistance",
            "provider": {
              "@type": "Organization",
              "name": "Global Visa Internationals",
              "url": "https://www.globalvisainternationals.com",
            },
            "areaServed": { "@type": "Country", name: "India" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              name: "Business Visa Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    name: "German Business Visa Assistance",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    name: "Netherlands Entrepreneur Visa Support",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    name: "Portugal Golden Visa Guidance",
                  },
                },
              ],
            },
          }),
        }}
      />
      <Script
        id="ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Global Visa Internationals",
            "url": "https://www.globalvisainternationals.com",
            "logo": "https://www.globalvisainternationals.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/GlobalVisaInternationals",
              "https://www.linkedin.com/company/globalvisainternationals",
              "https://twitter.com/GlobalVisaIntl"
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91-7022213466",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }]
          }),
        }}
      />

      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.globalvisainternationals.com",
            "name": "Global Visa Internationals",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.globalvisainternationals.com/Visa/business-visa/schengen",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />


      <Script
        id="ld-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Schengen Business Visa Assistance from India",
            "url": "https://www.globalvisainternationals.com/Visa/business-visa/schengen",
            "description": "Apply for a Schengen Business Visa with expert help from Global Visa Internationals. Learn about visa requirements, eligibility, documentation, and the application process.",
            "publisher": {
              "@type": "Organization",
              "name": "Global Visa Internationals",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.globalvisainternationals.com/logo.png"
              }
            }
          })
        }}
      />

      <Script
        id="ld-action"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "telephone": "+91-7022213466",
            "contactType": "Book Visa Consultation",
            "url": "https://www.globalvisainternationals.com/contact",
            "availableLanguage": ["English", "Hindi"]
          })
        }}
      />


      {/* ✅ Page Content */}
      <div className={styles.imageContainer}>
        <img src="/business-visa/Schengen_Business_Visa_Assistance.webp" alt="Schegen Business Visa Assistance" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>
        <div className={styles.VisaData}>
          <h1 className={styles.Title}>
            UK Business Visa / London Business Visa / Paris Business Visa | Global Visa Internationals
          </h1>

          <h2 className={styles.subTitle}>
            Expand Your Global Footprint: Attend Meetings, Trade Fairs & Business Events in London & Paris with One Expert-Assisted Business Visa
          </h2>
          <p>
            Planning to visit the UK or France for business meetings, corporate networking, trade exhibitions or client visits? A <b className={styles.strong}>UK Business Visa</b> (for London) or a <b className={styles.strong}>Paris Business Visa</b> allows Indian professionals and entrepreneurs to enter prestigious business hubs—London and Paris—with confidence. At <b className={styles.strong}>Global Visa Internationals (GVI)</b>, we provide expert assistance for your business travel to London and Paris—ensuring smooth, compliant and high-success applications for Indian nationals.
          </p>

          <h2 className={styles.subTitle}>What is a UK Business Visa / Paris Business Visa?</h2>
          <p>
            The <b className={styles.strong}>UK Business Visa</b> permits Indian citizens to travel to the United Kingdom (London) for official business purposes such as attending conferences, client meetings, trade shows, signing contracts, or setting up a branch office. :contentReference[oaicite:0]{index = 0}
            <br />
            The <b className={styles.strong}>Paris Business Visa</b> (via France / Schengen) enables Indian professionals to attend business-events, meetings or trade fairs in Paris (and the wider Schengen region) with full compliance. :contentReference[oaicite:1]{index = 1}
          </p>

          <h2 className={styles.subTitle}>High-Value Keywords You Should Know</h2>
          <p>
            UK business visa India, London business visa Indian citizen, Paris business visa from India, France business visa India documentation, UK business visitor visa London meetings, business visa for India to UK trade fair, European business travel India, London corporate travel visa India, Paris trade show visa Indian company, UK visitor business visa London up to 6 months, France business travel visa Paris multiple entry, London business conferences visa India, UK business visa documents India bank statements, Paris business visa requirements India invitation letter, UK business visa fee India, France business visa processing India, UK business visitor visa India eligibility, Paris business visa India processing time, London business meetings visa India application, UK business visa India short stay, France business visa India multiple entry, London branch setup visa India business expansion, European business visa India London Paris, UK business visa India sponsor letter, France business visa India cost, London investor business visa India, UK business visa India travel insurance, Paris business visa India trade fair attendance, Europe business travel India London Paris.
          </p>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Why Choose GVI for Your UK & Paris Business Visa?</h2>
            <p>
              At Global Visa Internationals (GVI), we specialise in guiding Indian entrepreneurs, company directors and seasoned professionals through the complex visa terrain for London and Paris business travel.
              Whether you’re applying for a short-stay UK Business Visa (London meetings) or a Paris Business Visa (France / Schengen trade fair), our expert team helps you avoid common pitfalls and improves your visa success rate.
            </p>
            <a href="/contact-us" className={styles.ctaButton}>
              Get Your Free Business Visa Consultation Now!
            </a>
          </div>

          <h2 className={styles.subTitle}>Business Visa Validity & Duration Rules (UK & Paris)</h2>
          <p>
            For the <b className={styles.strong}>UK Business Visa (London)</b>: Typically you can stay up to **6 months** for business activities like meetings, conferences and trade fairs. :contentReference[oaicite:2]{index = 2}
            For the <b className={styles.strong}>Paris Business Visa</b>: As part of the Schengen / France business travel route, stay durations vary depending on purpose—short-stay business visits up to 90 days often apply. :contentReference[oaicite:3]{index = 3}
            Regular, compliant business travellers may secure multiple-entry visas for frequent trips to London or Paris.
          </p>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Business Visa Application Assistance (UK & Paris)</h2>
            <p>
              At GVI we handle end-to-end assistance for your UK Business Visa and Paris Business Visa application—from documentation to embassy submission—giving Indian business travellers a stress-free experience.
            </p>
            <h3 className={styles.subTitle}>Our Services Include:</h3>
            <ul>
              <li>Filling the UK or Paris business visa application form</li>
              <li>Drafting of professional invitation/covering letters for London & Paris purposes</li>
              <li>Personalised checklist & document verification tailored to “UK business visa India” or “Paris business visa India” criteria</li>
              <li>Assistance with invitation letter from the UK host company (London) or French company (Paris)</li>
              <li>Flight, hotel & travel insurance arrangement for business travel to London or Paris</li>
              <li>Appointment scheduling with visa application centres (VFS / UKVCAS / France Visas) in India</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Business Visa Document Checklist – India (2025 Edition)</h2>
            <p>
              To apply for a UK Business Visa (London) or Paris Business Visa (France) from India, you must submit comprehensive, verified documents. GVI ensures every file is embassy-compliant.
            </p>

            <h3 className={styles.subTitle}>1. Passport & Travel History</h3>
            <ul>
              <li>Valid passport (minimum 6 months validity beyond return date, with 2-3 blank pages) :contentReference[oaicite:4]{index = 4}</li>
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
              <li>6 months of current account / business account bank statements</li>
              <li>Income Tax Returns (ITR) for the last 3 years</li>
              <li>Salary slips or business income proof if you are self-employed or a director</li>
            </ul>

            <h3 className={styles.subTitle}>4. Travel Arrangements & Support Documents</h3>
            <ul>
              <li>Flight reservation (round-trip) for your London or Paris business stay</li>
              <li>Hotel or accommodation confirmation in London or Paris</li>
              <li>Travel insurance covering business travel to the UK or France (we help arrange it to meet embassy standards)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Business Visa Fees & Processing Time (India)</h2>
            <ul>
              <li><b className={styles.strong}>UK Business Visitor Visa Fee:</b> Approx. £115 (~₹12,000) for up to 6 months. :contentReference[oaicite:5]{index = 5}</li>
              <li><b className={styles.strong}>Paris Business Visa Fee (France / Schengen):</b> For business short-stay, adult fee approx. €90 (~₹9,300) plus service charges. :contentReference[oaicite:6]{index = 6}</li>
              <li><b className={styles.strong}>Processing Time:</b> UK: ~15-21 working days from India (may vary). :contentReference[oaicite:7]{index = 7} France/Schengen (Paris Business Visa): ~5-15 working days for short-stay business applications. :contentReference[oaicite:8]{index = 8}</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>Common Business Visa Rejection Reasons (UK & Paris) – and How GVI Helps</h2>
            <ul>
              <li>Incomplete or mismatched documents → GVI performs embassy-level document validation</li>
              <li>Unclear business purpose or weak invitation letter → Professionally drafted cover & invitation letters for UK (London) and Paris (France)</li>
              <li>Weak financial proof or insufficient funds → Pre-verification of bank & business income records</li>
              <li>Inconsistent travel plans or accommodation details → Verified itinerary prepared by GVI experts for London/Paris trips</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}>UK & Paris Business Visa Process (Step-by-Step for Indian Applicants)</h2>
            <ol>
              <li>Online application form submission (UKVI for UK; France-Visas / VFS for France) for UK Business Visa or Paris Business Visa</li>
              <li>Document verification & submission at visa application centre in India (UKVCAS / VFS Global) for your London or Paris business visa trip</li>
              <li>Biometrics collection (fingerprints & photo) during appointment</li>
              <li>Tracking & passport collection once decision is made</li>
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
              <li><b>1,000+ business visas processed</b> for Indian professionals traveling to London & Paris</li>
              <li><b>End-to-end file management</b> with visa-centre compliance checks for UK & France</li>
              <li><b>Dedicated business visa experts</b> with European documentation experience (UK & Paris routes)</li>
              <li><b>98% success rate</b> for properly filed UK and Paris business visa applications</li>
            </ul>
            <p>
              Whether you’re traveling to London for a trade show, Paris for a business conference or corporate meeting—GVI ensures a seamless business visa experience from start to finish.
            </p>
          </div>

          <h2 className={styles.subTitle}>Ready to Apply for Your UK Business Visa or Paris Business Visa?</h2>
          <p>
            Start your <b className={styles.strong}>UK Business Visa application</b> or <b className={styles.strong}>Paris Business Visa application</b> today with Global Visa Internationals and get professional guidance for faster approvals.
            <br />
            <a href="/contact-us" className={styles.ctaButton}>
              Book Your Free Consultation & Visa Audit Now!
            </a>
          </p>
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