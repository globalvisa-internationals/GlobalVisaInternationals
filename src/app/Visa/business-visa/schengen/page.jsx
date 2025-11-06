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
    canonical: "https://www.globalvisainternationals.com/visa/business/schengen",
  },
  openGraph: {
    title: "Apply for Schengen Business Visa | Global Visa Internationals",
    description:
      "Get complete assistance in applying for a Schengen Business Visa from India. Learn about visa types, eligibility, and process with Global Visa Internationals.",
    url: "https://www.globalvisainternationals.com/visa/business/schengen",
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
                item: "https://www.globalvisainternationals.com/visa/business/schengen",
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
              "@id": "https://www.globalvisainternationals.com/visa/business/schengen"
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
              "target": "https://www.globalvisainternationals.com/visa/business/schengen",
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
            "url": "https://www.globalvisainternationals.com/visa/business/schengen",
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
            Schengen Business Visa | Global Visa Internationals
          </h1>

          <h2 className={styles.subTitle}> Attend Meetings & Business Events Across Europe with a Single Visa</h2>
          <p>
            Planning to visit Europe for business meetings, trade fairs, or client visits? A{" "}
            <b className={styles.strong}>Schengen Business Visa</b> allows Indian professionals and entrepreneurs to attend
            official business activities across 29 European countries with one visa. At{" "}
            <b className={styles.strong}>Global Visa Internationals (GVI)</b>, we provide expert assistance to make your
            business travel smooth, compliant, and successful.
          </p>

          <h2 className={styles.subTitle}>What is a Schengen Business Visa?</h2>
          <p>
            The <b className={styles.strong}>Schengen Business Visa</b> permits Indian citizens to travel to the{" "}
            <b className={styles.strong}>Schengen Zone</b> for official business purposes — such as attending conferences,
            client meetings, training sessions, or signing contracts. It’s valid for short stays of up to 90 days within a
            180-day period.
          </p>
          <div className={styles.schengenCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>29 Schengen Countries</h2>
              <p className={styles.cardSubtitle}>Visit Europe with a single Business visa from India.</p>
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
                <li>France</li>
                <li>Germany</li>
                <li>Greece</li>
                <li>Hungary</li>
                <li>Iceland</li>
                <li>Italy</li>
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
                <li>Spain</li>
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
          <h2 className={styles.subTitle}>Visa Validity & Duration Rule</h2>
          <p>
            The duration granted depends on your travel purpose, documentation, and history. Initially, you may get a
            single-entry visa, but regular, compliant travelers can progress to{" "}
            <b className={styles.strong}>2-year and 5-year multiple-entry business visas</b> under the Schengen “Cascade”
            system. Overstaying beyond your visa validity can lead to fines or bans — GVI ensures full compliance with{" "}
            <b className={styles.strong}>Schengen visa rules</b>.
          </p>

          <div className={styles.section}>
            <h2 className={styles.subTitle}> Schengen Visa 'Cascade' System for Business Travelers</h2>
            <p>
              The European Union’s <b className={styles.strong}>cascade system</b> rewards lawful, frequent business travelers
              with longer validity visas. For Indian nationals:
            </p>
            <ul>
              <li>
                <b className={styles.strong}>Initial Visa:</b> Short-term single or multiple-entry visa for up to 90 days.
              </li>
              <li>
                <b className={styles.strong}>2-Year Visa:</b> After lawfully using at least two Schengen visas in the past
                three years.
              </li>
              <li>
                <b className={styles.strong}>5-Year Visa:</b> After holding and lawfully using a two-year visa.
              </li>
            </ul>
            <p>
              GVI helps you maintain compliance and prepares documentation for progressive, long-term Schengen business visas.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}> Schengen Business Visa Application Assistance</h2>
            <p>
              Global Visa Internationals (GVI) handles your entire{" "}
              <b className={styles.strong}>business visa application process</b> — from documentation to embassy appointment
              — ensuring a professional, compliant, and successful submission.
            </p>
            <h3 className={styles.subTitle}>Our Services Include:</h3>
            <ul>
              <li>Filling the Schengen business visa application form</li>
              <li>Drafting of professional covering letter & business purpose letter</li>
              <li>Personalized checklist & document verification</li>
              <li>Assistance with invitation letter from the host company in Europe</li>
              <li>Flight, hotel & travel insurance arrangement</li>
              <li>Appointment scheduling with VFS Global</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}> Schengen Business Visa Document Checklist (India 2025)</h2>
            <p>
              To apply for a Schengen business visa, you’ll need to submit the following verified documents. GVI ensures every
              file is embassy-compliant.
            </p>

            <h3 className={styles.subTitle}>1. Passport & Travel History</h3>
            <ul>
              <li>Valid passport (minimum 6 months validity beyond return date, 2 blank pages)</li>
              <li>Previous Schengen or international travel history</li>
            </ul>

            <h3 className={styles.subTitle}>2. Business Invitation & Purpose Documents</h3>
            <ul>
              <li>
                Invitation letter from the host company in Europe specifying business relationship and meeting purpose
              </li>
              <li>Cover letter from your Indian company stating travel reason, duration & expense responsibility</li>
              <li>Company registration certificate, GST & business profile</li>
            </ul>

            <h3 className={styles.subTitle}>3. Financial & Employment Proof</h3>
            <ul>
              <li>6 months of business/current account bank statements</li>
              <li>Income Tax Returns (ITR) for 3 years</li>
              <li>Salary slips or business income proof</li>
            </ul>

            <h3 className={styles.subTitle}>4. Travel Arrangements</h3>
            <ul>
              <li>Flight reservation (round-trip)</li>
              <li>Hotel/accommodation confirmation</li>
              <li>
                Schengen business travel insurance covering €30,000 (GVI arranges insurance meeting embassy standards)
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}> Schengen Business Visa Fees (India 2025)</h2>
            <ul>
              <li><b className={styles.strong}>Embassy Visa Fee:</b> €90 (~₹9,300)</li>
              <li><b className={styles.strong}>Children (6–12 years):</b> €45</li>
              <li><b className={styles.strong}>VFS Service Fee:</b> ₹1,000–₹2,000 approx.</li>
              <li><b className={styles.strong}>GVI Service Fee:</b> ₹6,999 onwards (end-to-end application assistance)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}> Schengen Business Visa Processing Time (India)</h2>
            <ul>
              <li><b>Standard Embassy Processing:</b> 15–20 working days</li>
              <li><b>Peak Season:</b> 30–45 working days</li>
              <li><b>GVI File Preparation:</b> 3–5 working days after receiving all documents</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}> Common Business Visa Rejection Reasons (and How GVI Helps)</h2>
            <ul>
              <li>Incomplete or mismatched documents → GVI performs embassy-level document validation</li>
              <li>Unclear business purpose → Professionally drafted cover & invitation letters</li>
              <li>Weak financial proof → Pre-verification of bank & business income records</li>
              <li>Inconsistent travel plans → Verified itinerary prepared by GVI experts</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}> VFS Global Schengen Business Visa Process (Step-by-Step)</h2>
            <ol>
              <li>Online form filling & appointment booking by GVI</li>
              <li>Document verification & submission at VFS Global center</li>
              <li>Biometrics collection (fingerprints & photo)</li>
              <li>Tracking & passport collection</li>
            </ol>
            <a href="https://visa.vfsglobal.com/" target="_blank" rel="noopener noreferrer">
              Visit VFS Global – India
            </a>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subTitle}> Why Choose Global Visa Internationals (GVI)?</h2>
            <ul>
              <li><b>1,000+ Schengen Business Visas</b> processed successfully</li>
              <li><b>End-to-end file management</b> with embassy compliance checks</li>
              <li><b>Dedicated business visa experts</b> with European documentation experience</li>
              <li><b>98% success rate</b> for properly filed Schengen business applications</li>
            </ul>
            <p>
              Whether you’re traveling for a trade show, client meeting, or investment visit — GVI ensures a seamless business
              visa experience from start to finish.
            </p>
          </div>

          <h2 className={styles.subTitle}> Ready to Apply?</h2>
          <p>
            Start your <b className={styles.strong}>Schengen Business Visa application</b> today with Global Visa Internationals
            and get professional guidance for faster approvals.
            <br />
            <a href="/contact-us" className={styles.ctaButton}>
              Get a Free Consultation Now!
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