import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import Script from "next/script";

export const metadata = {
  title:
    "Canada Tourist Visa Assistance: Requirements, Application & Top Places | Global Visa Internationals",
  description:
    "Apply for your Canada Tourist Visa from India with Global Visa Internationals (GVI). Get expert help for documentation, visa process, IRCC appointment, and explore top tourist destinations in Canada.",
  keywords:
    "Canada tourist visa, apply Canada visitor visa, Canada visa consultant, Canada tourist visa from India, Canada visa requirements 2025, Canada visitor visa fees, Canada visa agents, Canada travel visa assistance",
  robots: "index, follow",
  canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/canada",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/canada",
  },

  openGraph: {
    title:
      "Apply for Canada Tourist Visa from India | Trusted Visa Consultants - GVI",
    description:
      "Get expert guidance on your Canada Tourist Visa from Global Visa Internationals. Learn about the visa application process, required documents, processing time, and travel tips.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/canada",
    siteName: "Global Visa Internationals",
    locale: "en_IN",
    type: "website",
    determiner: "the",
    countryName: "India",
    updated_time: "2025-11-12T00:00:00+05:30",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Canada-Tourist-Visa-Assistance-GVI.jpg",
        width: 1200,
        height: 630,
        alt: "Canada Tourist Visa Assistance Banner - Global Visa Internationals",
        type: "image/jpeg",
      },
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Canada-Tourist-Visa-Assistance-GVI-small.jpg",
        width: 600,
        height: 315,
        alt: "Canada Tourist Visa Thumbnail - Global Visa Internationals",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    title: "Canada Tourist Visa: Application, Requirements & Top Places | GVI",
    description:
      "Apply for your Canada Tourist Visa from India with Global Visa Internationals. Expert guidance for visa process, documentation, and IRCC submissions. Trusted consultants since 2017.",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Canada-Tourist-Visa-Assistance-GVI.jpg",
        alt: "Canada Tourist Visa Assistance - Global Visa Internationals",
      },
    ],
  },

  other: {
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com",
      logo: "https://www.globalvisainternationals.com/logo.png",
      foundingDate: "2017",
      sameAs: [
        "https://www.facebook.com/globalvisainternationals",
        "https://www.instagram.com/globalvisainternationals",
        "https://x.com/GLOBALVISA1505",
        "https://www.linkedin.com/company/global-visa-internationals/",
        "https://www.youtube.com/@globalVisaInternationals",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-7022213466",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 61, 2nd Floor, Above Axis Bank, Jyothi Nivas College Road, Koramangala 5th Block",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560095",
        addressCountry: "IN",
      },
    },
  },
};


export default function Canada() {
  const canonicalUrl =
    "https://www.globalvisainternationals.com/Visa/tourist-visa/canada";

  const schemas = [
    // 1️⃣ Organization
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com",
      logo: "https://www.globalvisainternationals.com/logo.png",
      sameAs: [
        "https://www.facebook.com/globalvisainternationals",
        "https://www.instagram.com/globalvisainternationals",
        "https://www.linkedin.com/company/global-visa-internationals/",
        "https://x.com/GLOBALVISA1505",
        "https://www.youtube.com/@globalVisaInternationals",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7022213466",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: "English",
      },
    },

    // 2️⃣ LocalBusiness
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Global Visa Internationals",
      image:
        "https://www.globalvisainternationals.com/gvilogo.png",
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
      url: "https://www.globalvisainternationals.com",
      telephone: "+91-7022213466",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "230",
      },
    },

    // 3️⃣ WebSite
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

    // 4️⃣ WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Canada Tourist Visa Consultants",
      url: canonicalUrl,
      description:
        "Apply for your Canada Tourist Visa from India with expert guidance from Global Visa Internationals. Get complete assistance for documentation, VFS appointment, and IRCC-compliant filing.",
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        url: "https://www.globalvisainternationals.com",
      },
    },

    // 5️⃣ Service (Visa Assistance)
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Canada Tourist Visa Assistance",
      provider: {
        "@type": "Organization",
        name: "Global Visa Internationals",
      },
      areaServed: {
        "@type": "Country",
        name: "Canada",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "5000",
        description: "Professional Canada tourist visa consultation, documentation, and application support from India.",
      },
    },

    // 6️⃣ BreadcrumbList
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
          name: "Canada Tourist Visa",
          item: canonicalUrl,
        },
      ],
    },

    // 7️⃣ FAQPage
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does it take to get a Canada Tourist Visa from India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Canada tourist visa processing time usually takes 2 to 6 weeks depending on the IRCC workload and applicant profile.",
          },
        },
        {
          "@type": "Question",
          name: "What are the requirements for a Canada Tourist Visa from India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need a valid passport, photo as per IRCC specs, financial proof (bank statements, ITR), travel itinerary, and a cover letter showing purpose of visit and return plans.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need biometrics for a Canada Visitor Visa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, biometrics are mandatory for Indian applicants applying for a Canada Tourist Visa. You must visit your nearest VFS center after submitting the online application.",
          },
        },
        {
          "@type": "Question",
          name: "Can I apply for a Canada Tourist Visa online from India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can apply online through the IRCC portal with professional guidance from Global Visa Internationals for a smooth and accurate submission.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {/* ✅ All JSON-LD Schemas */}
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className={styles.imageContainer}>
        <img
          src="/tourist-visa/Canada-Tourist-Visa-Assistance-GVI.jpg"
          alt="Canada Tourist Visa Assistance Banner Global Visa Internationals"
          className={styles.VisaImage}
        />
      </div>



      <div className={styles.VisaSec}>
        <div className={styles.VisaData}>

          {/* ✅ HERO SECTION — SALES + SEO OPTIMIZED */}
          <section className={styles.salesPitch}>
            <h1 className={styles.Title}>  Apply for Canada Tourist Visa from India | Expert Canada Visitor Visa Consultants</h1>

            <h4 className={styles.subTitle}>  ✈ Hassle-Free Canada Tourist Visa Assistance by Global Visa Internationals (GVI)</h4>

            <p>  Planning to explore Canada’s breathtaking landscapes, visit your loved ones, or attend short-term business meetings?   Global Visa Internationals (GVI) — India’s trusted Canada tourist visa consultants — makes the process easy, accurate, and stress-free.  From Canada visitor visa application filing to IRCC-compliant documentation and VFS submission,  our expert team ensures your visa is processed smoothly and efficiently.</p>

            <div className={styles.salesPitch}>
              <p>  Let Global Visa Internationals (GVI) take the stress out of your Canada tourist visa application.  Our experienced consultants provide full Canada visitor visa assistance — ensuring accuracy, embassy compliance,  and faster approval for single or multiple-entry Canada tourist visas.</p>
              <ul>
                <li>End-to-End Visa Support: Documentation, form filling, biometrics, and VFS coordination.</li>
                <li>Higher Success Rate: IRCC-standard documentation and expert case review.</li>
                <li>Pan-India Support: Bengaluru, Mumbai, Delhi, Hyderabad, Chennai & more.</li>
              </ul>
              <p>Fast Approvals • Transparent Pricing • Free Eligibility Assessment</p>
            </div>

            <a href="tel:+917022213466" className={styles.callButton}>📞 Get Free Eligibility Check</a>
          </section>

          {/* ✅ SECTION 2 — WHAT IS A CANADA TOURIST VISA */}
          <section>
            <h2 className={styles.subTitle}>What Is a Canada Tourist Visa (Temporary Resident Visa - TRV)?</h2>
            <p>  A Canada Tourist Visa — officially called a Temporary Resident Visa (TRV) — allows you to visit Canada for tourism, leisure, or short family and business visits.  Indian citizens and other eligible applicants must obtain this visa before entering Canada.   Global Visa Internationals assists with Canada tourist visa online application, document verification, and personalized checklists to meet IRCC standards.</p>
          </section>

          {/* ✅ SECTION 3 — HOW TO APPLY */}
          <section>
            <h2 className={styles.subTitle}>How to Apply for a Canada Tourist Visa from India</h2>
            <p>Our step-by-step process ensures a smooth and compliant Canada visitor visa application:</p>
            <ol>
              <li><b>Step 1:</b> Check your <i>Canada tourist visa eligibility 2025</i>.</li>
              <li><b>Step 2:</b> Gather documents — we create a custom <i>Canada tourist visa document checklist</i>.</li>
              <li><b>Step 3:</b> Complete the official <i>Canada visa application form (IMM5257)</i> correctly.</li>
              <li><b>Step 4:</b> Book VFS biometrics appointment and submit your passport.</li>
              <li><b>Step 5:</b> Track your <i>Canada visa status</i> with real-time updates from our consultants.</li>
            </ol>
            <p>  GVI ensures every submission aligns with IRCC visa requirements for higher Canada tourist visa approval rates.</p>
          </section>

          {/* ✅ SECTION 4 — DOCUMENTS & REQUIREMENTS */}
          <section>
            <h2 className={styles.subTitle}>Canada Tourist Visa Requirements (India 2025)</h2>
            <p>Documents required for Canada tourist visa include:</p>
            <ul>
              <li>Valid passport (minimum 6 months validity)</li>
              <li>Recent digital photo (as per IRCC specifications)</li>
              <li>Completed Canada visa application form</li>
              <li>Proof of funds — bank statement (₹4–5 lakh closing balance), ITR, salary slips</li>
              <li>Travel itinerary, flight tickets, and hotel bookings (handled by GVI)</li>
              <li>Cover letter and travel purpose (drafted professionally by GVI)</li>
              <li>Travel insurance — we provide the right plan for your duration</li>
              <li>Invitation letter if visiting family/friends — GVI shares embassy-approved templates and NOC formats</li>
            </ul>
            <p>  Every file is verified by Global Visa Internationals to meet IRCC submission standards and avoid rejections.</p>
          </section>

          {/* ✅ SECTION 5 — WHY CHOOSE GVI */}
          <div className={styles.salesPitch}>
            <p>  Choose Global Visa Internationals (GVI) — your expert Canada tourist visa consultant in India.  Whether it’s a family visit, vacation, or sightseeing trip, our team ensures your Canada visitor visa application is complete and compliant.</p>
            <ul>
              <li>Accurate document verification — zero errors or missing details</li>
              <li>Strong proof of funds & intent letters — improved IRCC credibility</li>
              <li>Dedicated case manager — real-time updates until visa approval</li>
            </ul>
            <a href="tel:+917022213466" className={styles.callButton}>📞 Call Now for a Free Eligibility Check</a>
          </div>

          {/* ✅ SECTION 6 — BANK STATEMENT */}
          <section>
            <h2 className={styles.subTitle}>Canada Tourist Visa Bank Statement Requirement</h2>
            <p>  To meet Canada tourist visa financial proof guidelines, applicants should maintain a balance of ₹3–5 lakh or more for the past 6 months.  Include ITRs, salary slips, and property/business proofs.  Our experts help align your bank statement for Canada visitor visa with IRCC’s financial expectations.</p>
          </section>

          {/* ✅ SECTION 7 — FEES */}
          <section>
            <h2 className={styles.subTitle}>Canada Tourist Visa Fees (India 2025)</h2>
            <ul>
              <li>IRCC Visa Fee: CAD$100 (approx. ₹6,100)</li>
              <li>Biometrics Fee: CAD$85 (approx. ₹5,200)</li>
              <li>VFS Service Fee: ₹800–₹1,200 (approx.)</li>
            </ul>
            <p>
              GVI’s visa service charge covers document preparation, form filing, review, and embassy coordination.
            </p>
          </section>

          {/* ✅ SECTION 8 — PROCESSING TIME */}
          <section>
            <h2 className={styles.subTitle}>Canada Tourist Visa Processing Time (India 2025)</h2>
            <p>  Processing time: Typically 2–6 weeks, depending on IRCC workload.  Global Visa Internationals prepares your file within 3–5 working days for prompt submission and tracking.</p>
          </section>

          {/* ✅ SECTION 9 — AVOID REJECTION */}
          <section>
            <h2 className={styles.subTitle}>Avoid Rejection — Apply Professionally</h2>
            <p>  Most Canada tourist visa rejections happen due to missing paperwork or weak financial proof.  Global Visa Internationals ensures:</p>
            <ul>
              <li>Complete documentation as per IRCC checklist</li>
              <li>Clear proof of funds and family ties to home country</li>
              <li>Professionally drafted travel intent and cover letter</li>
            </ul>
          </section>

          {/* ✅ FINAL CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.salesPitch}>
              <p>  Ready to start your Canada tourist visa application? Let Global Visa Internationals handle your case from start to finish!  Enjoy accurate filing, quick eligibility checks, and stress-free embassy coordination.</p>
              <p>  With our expert Canada visitor visa assistance, you can focus on planning your Canada trip while we take care of the paperwork.</p>
            </div>

            <h2 className={styles.subTitle}>Contact Global Visa Internationals (GVI)</h2>
            <ul>
              <li><b>Call Now:</b> +91-7022213466</li>
              <li><b>Email:</b> operations@globalvisainternationals.com</li>
              <li><b>Start Online Application:</b> <a href="#">Apply Now</a></li>
            </ul>

            <a href="tel:+917022213466" className={styles.callButton}>📞 Get Free Eligibility Check</a>
          </section>

          <p>  Global Visa Internationals (GVI) — your trusted Canada tourist visa consultant in India —  offers end-to-end Canada visa assistance with a high visa approval success rate.  Start your Canada travel journey today with expert guidance from GVI.</p>
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
