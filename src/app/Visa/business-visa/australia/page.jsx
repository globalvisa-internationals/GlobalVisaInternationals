// app/Visa/business/australia/page.js
import styles from '@/Components/Visa.module.css';
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import React from 'react';
import Script from 'next/script';
import VisaForm from '@/Components/VisaForm';


export const metadata = {
  metadataBase: new URL('https://www.globalvisainternationals.com'),
  title: 'Australia Business Visa and Immigration Assistance',
  description:
    'Apply for an Australia Business Visa with expert help from Global Visa Internationals. Learn about business visa requirements, eligibility, fees, and the application process.',
  keywords: [
    'Australia business visa',
    'apply business visa Australia',
    'Australia business visa from India',
    'Australia investor visa',
    'business visa consultants',
    'business migration to Australia',
  ],
  authors: [{ name: 'Global Visa Internationals' }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',

  alternates: {
    canonical: 'https://www.globalvisainternationals.com/Visa/business-visa/australia',
  },
  openGraph: {
    title: 'Apply for Australia Business Visa | Global Visa Internationals',
    description:
      'Get complete assistance in applying for an Australia Business Visa from India. Learn about visa types, requirements, eligibility, and costs with Global Visa Internationals.',
    url: 'https://www.globalvisainternationals.com/Visa/business-visa/australia',
    siteName: 'Global Visa Internationals',
    type: 'website',
    locale: 'en_IN',
    alternateLocale: 'en_US',
    images: [
      {
        url: 'https://www.globalvisainternationals.com/business-visa/Australian_Business_Visa_Assistance.webp',
        width: 1200,
        height: 630,
        alt: 'Australia Business Visa Assistance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australia Business Visa | Application, Cost & Requirements',
    description:
      'Explore Australia Business Visa options with expert guidance. Apply from India for investor or business innovation visas.',
    images: [
      'https://www.globalvisainternationals.com/business-visa/Australian_Business_Visa_Assistance.webp',
    ],
    site: 'https://www.globalvisainternationals.com/Visa/business-visa/australia',
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'geo.region': 'AU',
    'geo.placename': 'Sydney',
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru',
    ICBM: '12.9716,77.5946',
  },
};



export default function Australia() {
  return (
    <>
      {/* ✅ LOCAL BUSINESS SCHEMA */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={
          {
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Global Visa Internationals",
              "url": "https://www.globalvisainternationals.com",
              "logo": "https://www.globalvisainternationals.com/logo.png",
              "description":
                "Visa experts offering Australia business visa assistance for investors, entrepreneurs, and business owners from India.",
              "image": "https://www.globalvisainternationals.com/business-visa/Australian_Business_Visa_Assistance.webp",
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
              "Global Visa Internationals provides expert visa and immigration consulting services for Canada, Australia, UK, USA, and Europe.",
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
            "name": "Australia Business Visa Assistance | Global Visa Internationals",
            "url": "https://www.globalvisainternationals.com/Visa/business-visa/australia",
            "description":
              "Apply for an Australia Business Visa with expert assistance from Global Visa Internationals. Get guidance on Subclass 188, 132, and 888 visa categories.",
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
            "serviceType": "Australia Business Visa Application Assistance",
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
              "name": "Business Visa Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Subclass 188 Business Innovation Visa Assistance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Subclass 132 Business Talent Visa Guidance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Subclass 888 Permanent Business Visa Support"
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
                "name": "What types of Australia Business Visas are available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Australia offers various business visa subclasses, including Business Innovation and Investment (Subclass 188), Business Talent (Subclass 132), and Permanent Business Visas (Subclass 888)."
                }
              },
              {
                "@type": "Question",
                "name": "How much does an Australia Business Visa cost from India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Visa costs range from AUD 5,000–9,000 for main applicants, with extra charges for dependents and documentation."
                }
              },
              {
                "@type": "Question",
                "name": "Who is eligible for an Australia Business Visa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Applicants with business or investment backgrounds, sufficient net assets, and intent to manage or own a business in Australia."
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
                "item": "https://www.globalvisainternationals.com/Visa/business-visa/australia"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Australia Business Visa"
              }
            ]
          })
        }}
      />

      {/* ✅ AGGREGATE RATING SCHEMA (Optional but boosts CTR) */}
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
            "reviewCount": "240"
          })
        }}
      />


      {/* PAGE CONTENT */}
      <div className={styles.imageContainer}>
        <img
          src="/business-visa/Australian_Business_Visa_Assistance.webp"
          alt="Australia Business Visa Assistance"
          className={styles.VisaImage}
        />
      </div>

      <div className={styles.VisaSec}>

        <article className={styles.VisaData}>
          <h1 className={styles.Title}>Australian Business Visa Assistance 2025 | Global Visa Internationals</h1>

          <p>
            Looking to expand your business or invest in Australia? The <strong>Australian Business Visa</strong> offers
            entrepreneurs, investors, and professionals the opportunity to establish, manage, or grow a business in one of the world’s strongest economies. At <strong>Global Visa Internationals (GVI)</strong>, we
            simplify the complex visa process and help you unlock Australia’s vast business potential.
          </p>

          <h2 className={styles.subTitle}>Types of Australian Business Visas 2025 – Explained in Detail</h2>

          <section aria-labelledby="188a">
            <h3 id="188a">Subclass 188A – Business Innovation Stream</h3>
            <p>
              Ideal for experienced business owners looking to establish or manage a new or existing business in
              Australia. Applicants typically must show previous business ownership with minimum turnover requirements
              and eligible assets. This provisional visa commonly leads to PR via Subclass 888A.
            </p>
          </section>

          <section aria-labelledby="188b">
            <h3 id="188b">Subclass 188B – Investor Stream</h3>
            <p>
              Designed for investors willing to invest in eligible Australian investments. Applicants must have a
              successful investment history and meet residency and business criteria for PR transition via Subclass 888B.
            </p>
          </section>

          <section aria-labelledby="188c">
            <h3 id="188c">Subclass 188C – Significant Investor Visa (SIV)</h3>
            <p>
              Tailored for high-net-worth individuals investing into complying Australian investments. Offers flexible
              stay options and a direct route to permanent residency.
            </p>
          </section>

          <section aria-labelledby="188e">
            <h3 id="188e">Subclass 188E – Entrepreneur Stream</h3>
            <p>
              For entrepreneurs with a viable business plan backed by third-party funding. This visa encourages startup
              activity and innovation in Australia.
            </p>
          </section>

          <section aria-labelledby="600">
            <h3 id="600">Subclass 600 – Business Visitor Visa</h3>
            <p>Suitable for short-term business visits such as meetings, conferences, or negotiations.</p>
          </section>

          <section aria-labelledby="132">
            <h3 id="132">Subclass 132 – Business Talent Visa</h3>
            <p>
              Previously offered direct PR for high-calibre entrepreneurs and investors. New applications are closed,
              but existing holders maintain their residency conditions.
            </p>
          </section>

          <h2 className={styles.subTitle}>Eligibility Criteria for Australian Business Visa</h2>
          <ul>
            <li>Age below 55 years (unless exempt by exceptional business history)</li>
            <li>Proven business ownership or investment experience</li>
            <li>Minimum personal and business assets worth from AUD 800,000 depending on stream</li>
            <li>Functional English proficiency</li>
            <li>Genuine business intent and realistic business plan</li>
            <li>Nomination by an Australian state or territory</li>
            <li>No history of visa refusal or fraud</li>
          </ul>

          <h2 className={styles.subTitle}>Pathway to Australian Permanent Residency (PR)</h2>
          <p>Most business and investor visa holders can transition to PR through the Subclass 888 Business Innovation and Investment (Permanent) Visa after meeting conditions.</p>

          <h2 className={styles.subTitle}>Eligible Business & Investment Opportunities in Australia</h2>
          <ul>
            <li>Agribusiness & food production</li>
            <li>Renewable energy & clean technologies</li>
            <li>Technology startups & innovation hubs</li>
            <li>Healthcare & biotechnology</li>
            <li>Regional infrastructure & manufacturing</li>
            <li>Education, training, and export-focused services</li>
          </ul>

          <h2 className={styles.subTitle}>Australian State & Territory Nomination Requirements</h2>
          <ul>
            <li><strong>New South Wales (NSW):</strong> Prefers innovation, technology, and advanced manufacturing businesses.</li>
            <li><strong>Victoria (VIC):</strong> Focus on startups, biotech and clean energy.</li>
            <li><strong>Queensland (QLD):</strong> Encourages regional investment and tourism-related projects.</li>
            <li><strong>South Australia (SA):</strong> Supports agribusiness and advanced manufacturing.</li>
            <li><strong>Western Australia (WA):</strong> Targets resources, mining, and renewable energy.</li>
            <li><strong>Tasmania (TAS):</strong> Open to smaller regional business investments.</li>
          </ul>

          <h2 className={styles.subTitle}>Step-by-Step Application Process</h2>
          <ol>
            <li>Determine eligibility and choose the suitable visa stream.</li>
            <li>Prepare a detailed business plan aligned with state nomination goals.</li>
            <li>Submit an Expression of Interest (EOI) via SkillSelect.</li>
            <li>Receive nomination from a state or territory government.</li>
            <li>Apply for the selected visa subclass online.</li>
            <li>Undergo health, character, and financial assessments.</li>
            <li>Receive visa grant and start your business journey in Australia.</li>
          </ol>

          <h2 className={styles.subTitle}>Success Stories</h2>
          <blockquote>
            “Mr. Sharma from Delhi successfully secured his Subclass 188A visa in just 7 months with GVI’s expert
            documentation and business planning support.”
          </blockquote>
          <blockquote>
            “Our client from Hyderabad obtained a Significant Investor Visa (188C) with GVI’s guidance on compliant
            investment structures and fund preparation.”
          </blockquote>

          <h2 className={styles.subTitle}>Australian Business Visa FAQs (2025 Edition)</h2>
          <ul>
            <li><strong>How long does the visa take?</strong> 188 series: 6–9 months (est.); 600 Business Visitor: 10–25 working days (est.)</li>
            <li><strong>Can this visa lead to PR?</strong> Yes, via Subclass 888 after meeting conditions.</li>
            <li><strong>Do I need a business plan?</strong> Yes, mandatory for most business visa streams.</li>
          </ul>

          <h2 className={styles.subTitle}>Useful Resources & Official Links</h2>
          <ul>
            <li><a href="https://immi.homeaffairs.gov.au/" target="_blank" rel="noopener noreferrer">Department of Home Affairs – Business Innovation and Investment Program</a></li>
            <li><a href="https://www.austrade.gov.au/" target="_blank" rel="noopener noreferrer">Austrade – Australian Trade and Investment Commission</a></li>
            <li><a href="https://www.business.gov.au/" target="_blank" rel="noopener noreferrer">Business.gov.au – Official Business Information Portal</a></li>
          </ul>

          <h2 className={styles.subTitle}>Start Your Australian Business Journey Today!</h2>
          <p>
            Take your first step toward establishing a business in Australia. Connect with
            <strong> Global Visa Internationals</strong> for a <strong>free consultation</strong> and personalized eligibility
            assessment. Our experts will guide you from <strong>documentation</strong> to <strong>visa approval</strong> for a seamless
            Australian Business Visa experience.
          </p>

          <p>
            <strong>📞 Call Now | 🌐 www.globalvisainternationals.com | ✉ info@globalvisainternationals.com</strong>
          </p>

          {/* Secondary marketing/version content (combined) */}
          <div className={styles.VisaDataAlt}>
            <h2 className={styles.subTitle}>Why Choose Australia for Business?</h2>
            <ul>
              <li><strong>Strong & Stable Economy:</strong> A resilient, diverse economy that supports long-term business.
              </li>
              <li><strong>Strategic Location & Trade Hub:</strong> Gateway to Asia-Pacific markets.</li>
              <li><strong>Pro-Business Environment:</strong> Government incentives and supportive regulation.</li>
              <li><strong>Skilled Workforce & Innovation:</strong> Access to highly educated talent and R&D networks.</li>
              <li><strong>High Quality of Life:</strong> Multicultural society and excellent living standards.</li>
            </ul>

            <h3 className={styles.subTitle}>Top Cities & Regions</h3>
            <ol>
              <li>Sydney — finance & technology hub</li>
              <li>Melbourne — innovation, healthcare & education</li>
              <li>Brisbane — growing trade and tourism opportunities</li>
              <li>Perth — resources, mining and renewables</li>
              <li>Adelaide, Canberra, Hobart, Darwin — regional advantages</li>
            </ol>

            <h3 className={styles.subTitle}>Estimated Costs (2025)</h3>
            <p>Core Visa Application Charges (VACs) — indicative only. Check the Department of Home Affairs for official rates.</p>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Applicant Type</th>
                  <th>Estimated Cost (AUD)</th>
                  <th>Approx. Cost (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Principal Applicant (Business Innovation Stream)</td>
                  <td>AUD 6,830</td>
                  <td>₹3,75,650 (approx.)</td>
                </tr>
                <tr>
                  <td>Additional Applicant (18+ years)</td>
                  <td>AUD 3,420</td>
                  <td>₹1,88,100 (approx.)</td>
                </tr>
              </tbody>
            </table>

            <h3 className={styles.subTitle}>Why Choose Global Visa Internationals?</h3>
            <p>We are India's leading visa consultants with 11+ years experience, 55,000+ visas processed and 75,000+ advice sessions. We provide tailored business plans, state nomination guidance, and end-to-end application support.</p>

            <div className={styles.contactCard}>
              <h4>Free Consultation</h4>
              <p>Get a tailored assessment for your Australian Business Visa.</p>
              {/* <Link href="/contact"><a className={styles.ctaButton}>Book a Free Call</a></Link> */}
              <p className={styles.small}>Phone: +91-7022213466</p>
            </div>

            <div className={styles.testimonials}>
              <h4>Success Stories</h4>
              <ul>
                <li>Client — Subclass 188A: 7 months to grant</li>
                <li>Client — 188C: Successful SIV guidance</li>
              </ul>
            </div>

          </div>

        </article>
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