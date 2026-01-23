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

          <h1 className={styles.subTitle}>Your Complete Guide to Canada Tourist Visas: Application, Processing & Requirements</h1>

          <p>
            Planning to visit Canada from India—whether for tourism, family visits, or short business trips? This concise guide explains the Canada Tourist visa (Temporary Resident Visa) and the Canada visitor visa options, clarifies who needs a Canada Visa, and walks you through the visitor visa application process step by step so you can confidently plan your trip to visit Canada.
          </p>

          <p>
            Read on for clear eligibility checks, the required documents, realistic timelines, and practical tips to strengthen your application — including how a Canadian visitor visa differs from other travel documents and what to expect at the border. If you wish to visit Canada but prefer expert help, Global Visa Internationals offers a free eligibility check and hands-on support for your visa application to maximize approval chances.
          </p>

          <h2 className={styles.subTitle}>Types of Canadian Visitor and Tourist Visas</h2>

          <p>
            Most travellers from India apply for a <strong className={styles.strong}>Temporary Resident Visa (TRV)</strong>, commonly referred to as a Canada visitor visa or Canada Tourist visa. The TRV generally appears in two main forms:
          </p>

          <ul>
            <li><strong className={styles.strong}>Single-entry visa:</strong> Authorizes one entry into Canada for the duration stamped on your entry; leave and re-entry will require a new visitor visa or appropriate travel document.</li>
            <li><strong className={styles.strong}>Multiple-entry visa:</strong> Allows you to enter Canada multiple times; each visit is usually permitted for up to 6 months at the border officer's discretion. Multiple-entry TRVs may be valid for several years (often up to 10 years) depending on your passport validity and IRCC decisions.</li>
          </ul>

          <p className={styles.note}>
            <strong className={styles.strong}>Note:</strong> Some travellers from visa-exempt countries use an Electronic Travel Authorization (eTA) instead of a TRV — this does not apply to most Indian passport holders. Visitors from the United States or certain other countries may have different entry requirements; always check IRCC guidance for your specific country.
          </p>
          <h4>If you are visiting family members in Canada :—</h4>
          <p>
            such as a spouse, parents, children or close relatives — you may apply for a <strong className={styles.strong}>Canada family visit visa</strong> supported by a notarized invitation from your host in Canada. The invitation should include the host's contact details, proof of status in Canada (citizenship, permanent residency, or valid resident visa), and a short statement of the visit purpose and duration. For the documents checklist, see the documents section below.
          </p>

          <h2 className={styles.subTitle}>How to Apply for a Canada Tourist Visa from India: A Step-by-Step Guide</h2>

          <p>
            Follow this streamlined process to complete your Canada visa application with fewer delays. The steps below cover eligibility, the required documents, and practical tips for Indian applicants who wish to visit Canada for tourism, family visits, or short business trips.
          </p>

          <h3 className={styles.subTitle}>1. Determine Your Eligibility & Prepare Your Canada Visa Checklist</h3>

          <ul>
            <li><strong className={styles.strong}>Valid passport:</strong> your passport should be valid for the period required by IRCC — check current guidance for whether a 6-month buffer is suggested for your travel dates.</li>
            <li><strong className={styles.strong}>Health & character:</strong> be in good health and disclose any criminal record or previous immigration violations; applicants with relevant history should include explanatory documents.</li>
            <li><strong className={styles.strong}>Strong ties to home country:</strong> show employment, family, property, or other commitments in India that demonstrate you will return after your trip.</li>
            <li><strong className={styles.strong}>Sufficient funds:</strong> be ready to show bank statements, ITRs, or sponsor letters to prove you can cover your trip and stay in Canada.</li>
            <li><strong className={styles.strong}>Planned exit:</strong> have a clear travel itinerary and be prepared to explain your intended length of stay in Canada.</li>
          </ul>

          <h3 className={styles.subTitle}>2. Compile Your Required Documents</h3>

          <p>
            A complete set of documents reduces refusal risk. Use the checklist below and follow IRCC file-format and upload rules when applying online.
          </p>

          <ul>
            <li><strong className={styles.strong}>Passport:</strong> Copy of biographical page; ensure your passport is valid and has blank pages for visa stamps. (Note: check IRCC for the current "valid passport" guidance.)</li>
            <li><strong className={styles.strong}>Photographs:</strong> Recent photos that meet IRCC specifications — upload digital photos that obey size and background rules.</li>
            <li><strong className={styles.strong}>Completed application forms:</strong>
              <ul>
                <li>IMM 5257 — Application for Visitor Visa (online or paper).</li>
                <li>IMM 5645 — Family Information Form (if applicable).</li>
                <li>Other forms may be required depending on your circumstances — always use the latest IRCC forms.</li>
              </ul>
            </li>
            <li><strong className={styles.strong}>Proof of financial support:</strong> Recent bank statements (a guideline often suggested is ₹4–5 lakhs for family trips, but this is not an official threshold), income tax returns (ITRs), salary slips, or a notarized sponsor letter with sponsor's bank proofs.</li>
            <li><strong className={styles.strong}>Proof of ties to India:</strong> Employment letter with leave approval, property documents, marriage certificate, dependent information — anything that demonstrates you will return to your home country.</li>
            <li><strong className={styles.strong}>Travel itinerary & travel document info:</strong> Flight reservations (if available), day-wise plans, hotel bookings; include e-tickets and booking references. If you have other travel documents (previous visas, resident visa) include copies.</li>
            <li><strong className={styles.strong}>Cover letter:</strong> One-page cover letter that states purpose of travel, planned dates, who you will visit (if applicable), and how you will fund the trip. See the mini-template below.</li>
            <li><strong className={styles.strong}>For visiting family/friends:</strong> Notarized invitation letter from your host in Canada, host's ID and proof of status (citizenship, permanent resident card, or resident visa), and a short summary of who will provide accommodation and funds, if applicable.</li>
            <li><strong className={styles.strong}>Travel insurance:</strong> Strongly recommended for the stay duration; include policy details and coverage period.</li>
          </ul>

          <p>
            <strong className={styles.strong}>Mini cover letter template (short):</strong><br />
            "I, [Full Name], passport no. [#####], request a visitor visa to travel to Canada from [DD/MM/YYYY] to [DD/MM/YYYY] to visit my [reason — tourism/family/business]. I am employed as [job title] at [company], have attached leave approval, bank statements, and supporting documents showing ties to India. I will return on or before [date]."
          </p>
          <h4>File naming and uploads (quick tips):</h4>
          <ul>
            <li><strong>Use clear file names:</strong> Surname_firstname_documenttype_date.pdf (e.g., Sharma_Raj_passport_2024.pdf).</li>
            <li>Scan at recommended resolution (usually 300 dpi) and keep file sizes under IRCC limits; upload PDFs for documents and JPEG/PNG for photos if required.</li>
          </ul>


          <h4 className={styles.subTitle}>Applicants with past refusals or criminal records</h4>

          <p>
            If you have previous visa refusals, overstays, or a criminal record, disclose these in your application and include a clear explanatory letter, supporting evidence of rehabilitation (if applicable), and any official documents. Non-disclosure or misrepresentation can result in bans or refusals — be transparent and provide context.
          </p>

          <p>
            If you need help preparing these required documents, organizing your visa application, or reviewing your cover letter and invitation, Global Visa Internationals provides document review and application support — contact the specialists to get a free eligibility check and one-on-one guidance for a stronger application to visit Canada.
          </p>

          <h3 className={styles.subTitle}>3. Submit Your Application & Biometrics</h3>


          <ul>
            <li>Apply online via the official IRCC portal for the fastest processing and immediate document uploads. Alternatively, you can submit paper applications through a Visa Application Centre (VAC) if required.</li>
            <li>Pay the Canada visa fee as part of the online checkout (current IRCC fee is CAD $100 per applicant) — check IRCC for updates and accepted payment methods before paying.</li>
            <li>After submission, you may be asked to provide biometrics (fingerprints and a photo). Book and attend your VAC biometrics appointment once you receive the instruction letter from IRCC.</li>
          </ul>



          <p>
            <strong className={styles.strong}>Quick online submission tips</strong><br />
            <ul>
              <li>Upload documents in the formats IRCC accepts (PDF for most documents, JPG/PNG for photos). Keep file sizes within IRCC limits — compress files slightly if needed while maintaining readability.</li>
              <li>Name files clearly (surname_firstname_document.pdf) and attach only the files requested to avoid upload errors.</li>
              <li>Use the IRCC checklist in your online account to confirm all required documents are attached before finalizing the visa application.</li>
            </ul>


          </p>




          <h4 className={styles.strong}>Biometrics & VAC appointment — what to expect</h4>
          <ul>
            <li>You will receive an instruction letter from IRCC with a VAC location and booking instructions. Book your biometrics slot promptly; VAC availability can vary by city and season</li>
            <li>Bring the instruction letter, passport, and originals of key documents (ID, appointment confirmation). At the VAC you will provide fingerprints and a photograph.</li>
            <li>Keep copies of your biometrics receipt and tracking number; you may need them when checking your application status.</li>
          </ul>.

          <h3 className={styles.subTitle}>4. Track Application & Wait for Processing</h3>

          <p>
            After submission, you can track your visa application status through your IRCC online account or via the VAC tracking service. Processing times vary by application type, time of year, and whether additional documents or medicals are requested.
          </p>


          <h3 className={styles.strong}>Troubleshooting & common submission errors</h3>
          <ul>
            <li><strong>Incomplete uploads —</strong> recheck file types and sizes; use PDF for documents and JPG/PNG for photos.</li>
            <li><strong>Mismatched information —</strong> ensure names, passport numbers, and dates match exactly across all documents.</li>
            <li><strong>Late biometrics —</strong> book your VAC slot quickly after receiving instructions to avoid processing delays.</li>
          </ul>


          <p>
            If you prefer hands-on support to submit your visitor visa application, manage VAC bookings, or ensure document compliance, Global Visa Internationals can handle the application process and help track your status — contact the team for application assistance and document review.
          </p>

          <h2 className={styles.subTitle}>Canada Tourist Visa Processing Time (India 2024-2025)</h2>

          <p>
            A common question for applicants is how long the visitor visa application process takes. Processing times change frequently, so always check the official IRCC processing times page for live updates. Below are typical timeframes to help you plan.
          </p>

          <ul>
            <li><strong className={styles.strong}>Online applications:</strong> Often processed faster — a commonly cited average is around 28 calendar days, but this can vary by season and workload.</li>
            <li><strong className={styles.strong}>Paper applications:</strong> Typically take longer — commonly around 60 calendar days, though actual duration depends on VAC handling and IRCC caseload.</li>
          </ul>
          <h3>When should you apply Canada Visa?</h3>
          <p>
            To allow for processing variability, biometrics scheduling, and any additional document requests, apply at least 2–3 months before your intended travel date. If you plan to stay in Canada for up to six months, factor in time for potential requests for clarification that could extend the timeline.
          </p>
          <h4>Typical Canada Visa application timeline (example)</h4>
          <ul>
            <li><strong>Apply online:</strong> Day 0</li>
            <li><strong>Biometrics instruction & VAC booking:</strong> Day 3–14 (varies)</li>
            <li><strong>IRCC processing:</strong> Day 14–60 (average depends on online vs paper)</li>
            <li><strong>Passport request & visa stamping:</strong> after approval (timeline depends on VAC/courier)</li>
          </ul>

          <h4>Variability & urgent travel for Canada Visa</h4>
          <p>
            Processing times fluctuate with seasonal demand (summer travel, holidays), incomplete applications, and cases requiring medicals or additional documents. IRCC does not guarantee expedited processing except in limited emergency situations (medical or compassionate grounds) — contact IRCC directly for such requests. For urgent travel to visit family in the United States or Canada, gather supporting evidence of the emergency and seek specialist help.
          </p>

          <p>
            For a live check of current processing times for visitor visa applications from India and step-specific guidance through the application process, Global Visa Internationals can review your case and suggest the best timeline — contact us for personalized support before you apply to visit Canada.
          </p>

          <h2 className={styles.subTitle}>Canada Visit Visa Costs & Duration of Stay</h2>

          <ul>
            <li><strong className={styles.strong}>Visitor visa fee:</strong> The standard Canada visitor visa fee is CAD $100 per person (check IRCC for the latest fee and exact currency conversions).</li>
            <li><strong className={styles.strong}>Family rate (5+ members):</strong> IRCC caps the main application fee for groups at CAD $500 for five or more people — note that VAC service fees, courier charges, and biometrics fees may apply in addition.</li>
            <li><strong className={styles.strong}>Typical stay on entry:</strong> Most visitors are allowed to stay for up to 6 months from the date the border officer approves entry. The exact duration is given at the port of entry, so carry your passport and travel documents.</li>
          </ul>

          <h4> Canada Visa Budgeting tips:</h4>
          <p>
            Besides the visitor visa fee, plan for VAC service fees (charged per applicant), possible biometrics fees, passport courier fees, and travel insurance.
            <h4>Example: </h4>For a family of four, expect visa fees of CAD $400 plus VAC and courier charges; for six people the main application fee may be capped (verify current IRCC family rate) but VAC/service fees still apply.
          </p>
          <h4>Canada Visa Travel insurance:</h4>
          <p>
            Obtain cover for the full duration of your stay; policy costs vary by age and coverage level — include the insurance details in your application as proof of preparation. Ensure your passport (travel document) is valid and has sufficient blank pages for stamping.
          </p>

          <p>
            If you are traveling for business or on short trips between countries, confirm whether your purpose requires additional documents. For help estimating total costs and preparing all travel documents, Global Visa Internationals can provide a detailed fee breakdown and application support to simplify the process.
          </p>

          <h2 className={styles.subTitle}>How to Extend Your Canada Visitor Visa</h2>

          <p>
            If you need to stay in Canada longer than the period granted at entry, you must apply to extend your visitor status before it expires. Submit your extension application online and include updated documents that justify the longer stay (financial support, reason for extension, and proof of ties to your home country).
          </p>

          <h4>When to apply:</h4>
          <p>
            Apply at least 30 days before your current status expires; earlier is safer. While your extension application is being processed, you usually benefit from "implied status" and may legally remain in Canada until a decision is made — note this does not automatically grant the right to work unless your original status allowed work.
          </p>

          <h4>Fees & timing:</h4>
          <p>
            Extension applications typically require the standard visitor application fee (check IRCC for the current fee amount). Processing times vary; apply early to avoid falling out of status.
          </p>

          <p>
            If you plan to change your status (for example, move from a visitor to a worker or apply for a resident visa), or if you have questions about implied status and work eligibility, consult an immigration specialist. Global Visa Internationals can assist with extension applications, help prepare supporting documents, and advise on timing to protect your status in Canada.
          </p>

          <h2 className={styles.subTitle}>Top Reasons for Canada Visitor Visa Refusals & How to Avoid Them</h2>

          <p>
            Avoid these common pitfalls to improve your visitor visa application. For each refusal reason we include a short "how to fix it" so you can strengthen your documentation and overall case.
          </p>

          <ul>
            <li><strong className={styles.strong}>Incomplete documentation:</strong> Missing or poorly organized documents are the fastest route to a refusal. <strong className={styles.strong}>How to fix it:</strong> use a clear Canada visa checklist, include originals when required, attach translations for non-English documents, and follow IRCC file format rules.</li>
            <li><strong className={styles.strong}>Insufficient financial proof:</strong> If you cannot convincingly show you can pay for your trip, the application is weak. <strong className={styles.strong}>How to fix it:</strong> provide recent bank statements (6–12 months), ITRs, salary slips, fixed-deposit proofs, or a notarized sponsor letter with the sponsor's bank statements and relationship proof.</li>
            <li><strong className={styles.strong}>Weak ties to home country:</strong> Visa officers want evidence you will return home. <strong className={styles.strong}>How to fix it:</strong> include employment letters with leave approval, property or lease documents, family dependency proof (children or elderly parents), and any ongoing study or business commitments in your home country.</li>
            <li><strong className={styles.strong}>Unclear travel purpose:</strong> Vague itineraries or inconsistent reasons raise suspicion. <strong className={styles.strong}>How to fix it:</strong> submit a concise cover letter, day-wise itinerary, confirmed hotel bookings or hosting arrangements, and an invitation letter if visiting family or friends that details purpose, duration, and accommodation.</li>
            <li><strong className={styles.strong}>Misrepresentation:</strong> Any false statement or withheld information can lead to refusal and a ban. <strong className={styles.strong}>How to fix it:</strong> be fully transparent, declare previous refusals or overstays, and provide supporting evidence rather than omitting facts.</li>
            <li><strong className={styles.strong}>Past visa refusals or overstays:</strong> Prior negative immigration history without explanation weakens a new application. <strong className={styles.strong}>How to fix it:</strong> include a candid explanatory letter, documentation showing changed circumstances (employment, family, finances), and any official letters showing resolution of past issues.</li>
          </ul>

          <h4 className={styles.subTitle}>Additional refusal drivers & health/criminal checks</h4>

          <p>
            Medical inadmissibility and criminal records can also lead to refusals. <strong className={styles.strong}>How to fix it:</strong> disclose relevant issues, submit required medical exams or police certificates as requested by IRCC, and include documentation of rehabilitation or official clearances when available.
          </p>

          <p>
            <strong className={styles.strong}>Sample wording for an explanatory paragraph (past refusal)</strong><br />
            "My previous application was refused on [date] due to [reason]. Since then, I have secured stable employment at [employer], attached employment letter and payslips, and I now have sufficient funds and confirmed leave for my planned visit. I respectfully request reconsideration based on these new documents."
          </p>

          <p>
            Assembling strong proof of funds, ties to your home country, clear travel purpose, and truthful documentation significantly increases your chances of approval. If you need help preparing documents, drafting a convincing cover letter, or responding to a refusal, Global Visa Internationals can review your application and recommend corrective steps to strengthen your case.
          </p>

          <h2 className={styles.subTitle}>Ready to Apply? Start Your Journey with Confidence.</h2>

          <p>
            Navigating the Canada tourist visa process and the visitor visa application can feel complex — from assembling required documents to tracking application status. Global Visa Internationals (GVI) offers expert, end-to-end support: a free eligibility check, personalized document review, and practical guidance to improve approval chances and reduce delays when you visit Canada.
          </p>

          <div className={styles.contactInfo}>
            <h3 className={styles.subTitle}>📞 Global Visa Internationals (GVI)</h3>
            <p>Call: +91-7022213466 (Mon–Sat, 10:00–18:00 IST)</p>
            <p>Email: operations@globalvisainternationals.com</p>
            <p>Online Application: [Apply Now]</p>
            <p>✅ Get Your Free Eligibility Check</p>
          </div>

          <p>
            <strong className={styles.strong}>Why choose GVI?</strong>
          </p>

          <ul>
            <li>Personalized application support — document checks, invitation letter guidance, and cover letter drafting to present strong proof of purpose and funds.</li>
            <li>Assistance with visa application submission, VAC bookings, biometrics coordination, and passport return logistics.</li>
            <li>Confidential handling of your documents and data — we follow privacy best practices while preparing your travel document application.</li>
          </ul>

          <p>
            Whether you are applying for a Canada Visa, preparing a visitor visa application, or planning to visit Canada for family, business, or tourism, contact GVI for a quick free eligibility check and tailored support to improve your application's success. For help with invitations, proof of funds, and all application steps, call or email our team today.
          </p>

          <a href="https://wa.me/917022213466?text=Hi,%20I%20am%20looking%20for%20USA%20Visa%20assistance%20for%202026" className={styles.callButton}>
            Contact on WhatsApp
          </a>
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
