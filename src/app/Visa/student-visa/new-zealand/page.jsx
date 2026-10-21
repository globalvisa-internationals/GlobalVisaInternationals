import React from "react";
import VisaForm from "@/Components/VisaForm";
import styles from "./NewZealandStudentVisa.module.css";
import { SectionHeading } from "../StudentVisaCommon";

const pageUrl = "https://www.globalvisainternationals.com/Visa/student-visa/new-zealand";
const heroImage = "/student-visa/New-Zealand-student-Visa-ASSISTANCE.webp";
const heroImageAbsolute = `https://www.globalvisainternationals.com${heroImage}`;

export async function generateMetadata() {
  return {
    title: "New Zealand Student Visa Consultants in Bangalore | Global Visa Internationals",
    description: "Planning to study in New Zealand from India? Get guidance on the Fee Paying Student Visa, Offer of Place, financial evidence, documents, application steps and study planning from Global Visa Internationals.",
    keywords: [
      "New Zealand student visa consultants in Bangalore",
      "New Zealand student visa for Indian students",
      "Fee Paying Student Visa New Zealand",
      "New Zealand student visa requirements",
      "New Zealand student visa documents",
      "study in New Zealand from India",
      "New Zealand student visa application process",
      "New Zealand university admission guidance",
    ],
    alternates: { canonical: pageUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: "New Zealand Student Visa Guidance for Indian Students",
      description: "Understand New Zealand student visa preparation, common documents, financial planning and application steps with Global Visa Internationals.",
      url: pageUrl,
      siteName: "Global Visa Internationals",
      type: "website",
      locale: "en_IN",
      images: [{ url: heroImageAbsolute, width: 1200, height: 630, alt: "New Zealand student visa guidance for Indian students" }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@GLOBALVISA1505",
      title: "New Zealand Student Visa Guidance",
      description: "Plan your New Zealand study journey with guidance on documents, funds, admissions and visa preparation.",
      images: [heroImageAbsolute],
    },
  };
}

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff", colorScheme: "light" };

const benefits = [
  { icon: "01", title: "Recognised qualifications", text: "Explore universities and education providers offering programmes across business, technology, health, engineering, sciences and the arts." },
  { icon: "02", title: "Supportive study environment", text: "Learn in a multicultural setting with student support services and opportunities to experience Māori and New Zealand culture." },
  { icon: "03", title: "Practical learning", text: "Compare programmes that may include research, projects, placements or industry-focused learning, depending on the course." },
  { icon: "04", title: "Future planning", text: "Understand the study-to-work options that may be available for your qualification and circumstances. Eligibility rules apply." },
];

const documents = [
  "Valid passport and identity details",
  "Offer of Place from an eligible New Zealand education provider",
  "Completed student visa application and required photographs",
  "Evidence of tuition fee payment or an accepted payment arrangement, as applicable",
  "Evidence of funds for living expenses and onward or return travel, as required",
  "Bank statements, sponsor evidence or scholarship documents supporting your funds",
  "Academic transcripts, certificates and relevant education records",
  "Evidence of accommodation arrangements, if requested or applicable",
  "Medical examination, chest X-ray or police certificates, if required",
  "Evidence of insurance and English-language ability, where applicable",
  "A clear explanation of your study plans and genuine intention to study",
  "Certified translations for documents that are not in English, where required",
];

const steps = [
  ["Choose a course and provider", "Compare programme content, entry requirements, tuition fees, location and career relevance. Check that the provider and course are eligible for your intended visa route."],
  ["Apply for admission", "Submit the education provider's application and provide the academic, identity and English-language evidence requested."],
  ["Receive your Offer of Place", "Review the offer carefully, including course dates, fees, conditions and any next steps required by the provider."],
  ["Plan your finances", "Prepare evidence for tuition, living expenses and travel using the current instructions published by Immigration New Zealand."],
  ["Prepare the visa application", "Complete the correct online application and collect supporting documents. Arrange medical checks, police certificates or insurance if required."],
  ["Submit and monitor", "Pay the applicable fee, submit the application and respond to any requests from Immigration New Zealand within the stated deadline."],
  ["Check the visa conditions before travel", "If approved, review the visa's validity, permitted work conditions, study details and entry requirements before making final travel plans."],
];

const costs = [
  { title: "Tuition fees", text: "Fees vary by institution, qualification, subject and course length. Confirm the exact amount with your chosen provider." },
  { title: "Living expenses", text: "Budget for accommodation, groceries, local transport, utilities, phone costs and personal spending. Costs differ by city and lifestyle." },
  { title: "Visa and application costs", text: "Check the current application fee and any applicable levy directly on the official Immigration New Zealand website." },
  { title: "Insurance and healthcare", text: "International students generally need to meet applicable insurance requirements. Confirm the policy rules for your course and visa." },
  { title: "Travel and set-up", text: "Allow for flights, initial accommodation, deposits, winter clothing and other costs when you first arrive." },
  { title: "Study materials", text: "Include books, equipment, software, lab or course materials and any programme-specific expenses in your budget." },
];

const universities = [
  ["University of Auckland", "A broad range of research-led programmes", "https://www.auckland.ac.nz/"],
  ["University of Otago", "Known for health sciences and a wide range of disciplines", "https://www.otago.ac.nz/"],
  ["Victoria University of Wellington", "Programmes in a capital-city setting", "https://www.wgtn.ac.nz/"],
  ["University of Canterbury", "Options across engineering, science, arts and more", "https://www.canterbury.ac.nz/"],
  ["Massey University", "Programmes across multiple campuses and study modes", "https://www.massey.ac.nz/"],
  ["University of Waikato", "Study options across business, computing, education and sciences", "https://www.waikato.ac.nz/"],
];

const faqs = [
  ["What is a New Zealand Fee Paying Student Visa?", "It is a student visa route for eligible students paying to study with an approved New Zealand education provider. Eligibility, evidence and visa conditions depend on the applicant and course. Check the official Immigration New Zealand guidance before applying."],
  ["What documents are commonly required?", "Common evidence may include a valid passport, Offer of Place, tuition and living-cost evidence, application details and health or character documents if required. Your personal checklist depends on your circumstances and the current official instructions."],
  ["How much money do I need to show?", "The amount and acceptable evidence depend on the course, duration and current Immigration New Zealand rules. Use the official website to confirm the latest living-cost and travel-fund requirements before submitting your application."],
  ["Can I work while studying in New Zealand?", "Some student visas allow work, but this is not automatic for every student. Check the exact work conditions printed on your visa and the current official rules before accepting employment."],
  ["Do I need IELTS for a New Zealand student visa?", "English-language evidence may be required by your education provider or programme, but there is not one universal IELTS score for every course and visa applicant. Confirm the entry criteria directly with your provider."],
  ["How long does visa processing take?", "Processing times vary with application volume, season, case complexity and whether the application is complete. Check the latest processing information from Immigration New Zealand and apply with enough time before your course begins."],
  ["Can a consultant guarantee visa approval?", "No. Only the relevant New Zealand authorities make visa decisions. A consultant can help organise information and prepare an application, but cannot guarantee approval or a processing timeframe."],
  ["Where should I check the latest rules and fees?", "Use the official Immigration New Zealand website at immigration.govt.nz and your education provider's official website. Requirements, fees and visa conditions can change."],
];

export default function NewZealandStudentVisaPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalvisainternationals.com" },
      { "@type": "ListItem", position: 2, name: "Student Visa", item: "https://www.globalvisainternationals.com/Visa/student-visa" },
      { "@type": "ListItem", position: 3, name: "New Zealand Student Visa", item: pageUrl },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };
  const serviceJsonLd = {
    "@context": "https://schema.org", "@type": "ProfessionalService",
    name: "Global Visa Internationals", url: "https://www.globalvisainternationals.com",
    telephone: "+91-7022213466", areaServed: { "@type": "Country", name: "India" },
    serviceType: ["New Zealand student visa guidance", "Study abroad consultation", "Student visa document preparation guidance"],
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>YOUR NEW ZEALAND STUDY JOURNEY STARTS HERE</p>
          <h1>New Zealand Student Visa Guidance for Indian Students</h1>
          <p className={styles.heroText}>Planning to study in Aotearoa New Zealand? Get organised with guidance on course planning, your Offer of Place, financial evidence, supporting documents and the student visa application process.</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#enquiry">Book a Consultation <span aria-hidden="true">→</span></a>
            <a className={styles.secondaryButton} href="#application-process">Explore the Process</a>
          </div>
          <p className={styles.heroNote}>Requirements vary by applicant and course. Always verify the latest rules with Immigration New Zealand.</p>
        </div>
        <div className={styles.heroImageWrap}>
          <img src={heroImage} alt="New Zealand student visa guidance for international students" className={styles.heroImage} fetchPriority="high" width="1200" height="630" />
          <div className={styles.imageBadge}><span className={styles.badgeIcon} aria-hidden="true">✦</span><span><strong>Personalised guidance</strong><small>From course planning to application</small></span></div>
        </div>
      </section>

      <nav className={styles.quickNav} aria-label="On this page">
        <a href="#why-new-zealand">Why New Zealand</a><a href="#destinations">Universities</a><a href="#requirements">Requirements</a><a href="#documents">Documents</a><a href="#application-process">Steps</a><a href="#costs">Costs</a><a href="#faqs">FAQs</a>
      </nav>

      <section className={styles.introSection}>
        <SectionHeading className={styles.sectionHeading}>
          <p className={styles.eyebrow}>START WITH A CLEAR PLAN</p>
          <h2>Understand your New Zealand student visa journey</h2>
        </SectionHeading>
        <p className={styles.lead}>New Zealand offers a variety of study options, from undergraduate degrees to postgraduate study and specialist qualifications. A strong application starts with choosing the right course, understanding the provider's requirements and preparing clear supporting evidence.</p>
        <p>There is no single checklist that fits every applicant. The visa route and supporting documents depend on your course, education provider, duration of study and personal circumstances. Use this page as a planning guide and confirm final requirements through official sources.</p>
      </section>

      <section className={styles.featureGrid} id="why-new-zealand">
        {benefits.map((item) => <article className={styles.featureCard} key={item.title}><span className={styles.featureIcon}>{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </section>

      <section className={styles.contentSection} id="destinations">
        <SectionHeading className={styles.sectionHeading}>
          <p className={styles.eyebrow}>EXPLORE YOUR OPTIONS</p>
          <h2>Universities to research in New Zealand</h2>
          <p>Compare course content, entry requirements, tuition fees, location and student support before deciding where to apply.</p>
        </SectionHeading>
        <div className={styles.universityGrid}>
          {universities.map(([name, detail, url]) => <a href={url} target="_blank" rel="noreferrer" key={name}><strong>{name}</strong><span>{detail}</span><span className={styles.cardLink}>Visit official website ↗</span></a>)}
        </div>
        <p className={styles.notice}>This is a starting list, not a ranking or endorsement. Check each provider's official website for current programmes, entry criteria and fees.</p>
      </section>

      <section className={`${styles.contentSection} ${styles.softSection}`} id="requirements">
        <SectionHeading className={styles.sectionHeading}>
          <p className={styles.eyebrow}>BEFORE YOU APPLY</p>
          <h2>Common New Zealand student visa requirements</h2>
          <p>Your application should show that you meet the requirements for the specific visa you are applying for.</p>
        </SectionHeading>
        <div className={styles.checkGrid}>
          {[
            ["Offer of Place", "An offer from an eligible education provider, with course and enrolment details that meet the visa rules."],
            ["Financial evidence", "Evidence that meets current requirements for tuition, living expenses and travel, with a clear and credible source of funds."],
            ["Health and character", "Medical checks, chest X-rays or police certificates may be requested depending on your circumstances and intended stay."],
            ["Genuine study plans", "Information about your course choice, education background, future plans and intention to comply with visa conditions."],
            ["Identity and supporting records", "A valid passport and accurate, consistent information across application forms and supporting documents."],
            ["Provider-specific conditions", "Meet any admission, English-language, tuition-payment or insurance requirements that apply to your programme."],
          ].map(([title, description]) => <article className={styles.checkItem} key={title}><span aria-hidden="true">✓</span><div><h3>{title}</h3><p>{description}</p></div></article>)}
        </div>
        <p className={styles.notice}>Do not rely on old figures or generic online checklists for financial thresholds, fees, work rights or medical requirements. Confirm the current rules on the official Immigration New Zealand website.</p>
      </section>

      <section className={styles.contentSection} id="documents">
        <SectionHeading className={styles.sectionHeading}>
          <p className={styles.eyebrow}>GET ORGANISED</p>
          <h2>Documents to prepare for a New Zealand student visa</h2>
          <p>Use this general checklist to start gathering records. Your final document list may differ depending on the visa route and your individual situation.</p>
        </SectionHeading>
        <ul className={styles.documentList}>{documents.map((document) => <li key={document}><span aria-hidden="true">✓</span>{document}</li>)}</ul>
      </section>

      <section className={`${styles.contentSection} ${styles.softSection}`} id="application-process">
        <SectionHeading className={styles.sectionHeading}>
          <p className={styles.eyebrow}>STEP BY STEP</p>
          <h2>How to prepare your student visa application</h2>
          <p>Working through the process in order can help you identify missing information early and reduce avoidable delays.</p>
        </SectionHeading>
        <ol className={styles.steps}>{steps.map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
        <a className={styles.inlineLink} href="https://www.immigration.govt.nz/" target="_blank" rel="noreferrer">Check official Immigration New Zealand guidance ↗</a>
      </section>

      <section className={styles.ctaBand}>
        <div><p className={styles.eyebrow}>NEED HELP GETTING ORGANISED?</p><h2>Prepare your next steps with confidence</h2><p>Get support to organise your study plans and understand the documents you may need before submitting your application.</p></div>
        <a className={styles.lightButton} href="#enquiry">Talk to our team <span aria-hidden="true">→</span></a>
      </section>

      <section className={styles.contentSection} id="costs">
        <SectionHeading className={styles.sectionHeading}>
          <p className={styles.eyebrow}>PLAN YOUR BUDGET</p>
          <h2>Costs to consider when studying in New Zealand</h2>
          <p>Build a realistic budget for your full study period rather than looking at tuition alone.</p>
        </SectionHeading>
        <div className={styles.costGrid}>{costs.map((item, index) => <article key={item.title}><span aria-hidden="true">{["◎", "⌂", "＄", "＋", "✈", "▤"][index]}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <p className={styles.notice}>Costs, exchange rates, visa fees and financial evidence thresholds can change. Ask your provider for a tuition estimate and use official sources for the current visa fee and funds requirement.</p>
      </section>

      <section className={`${styles.contentSection} ${styles.softSection}`}>
        <SectionHeading className={styles.sectionHeading}>
          <p className={styles.eyebrow}>WHY GLOBAL VISA INTERNATIONALS?</p>
          <h2>Guidance to help you stay organised</h2>
        </SectionHeading>
        <div className={styles.benefitGrid}>
          <article><h3>Application preparation</h3><p>Understand the stages of the process and create a checklist based on your study plans.</p></article>
          <article><h3>Document organisation</h3><p>Review whether your supporting records are clear, consistent and ready to be checked against official requirements.</p></article>
          <article><h3>Study planning support</h3><p>Keep course selection, finances, documents and application timing connected in one practical plan.</p></article>
        </div>
        <p className={styles.disclaimer}>Global Visa Internationals is an independent consultancy and is not Immigration New Zealand, a university or a government authority. Visa decisions are made solely by the relevant authorities. No approval or processing time can be guaranteed.</p>
      </section>

      <section className={`${styles.contentSection} ${styles.faqSection}`} id="faqs">
        <SectionHeading className={styles.sectionHeading}>
          <p className={styles.eyebrow}>COMMON QUESTIONS</p>
          <h2>New Zealand student visa FAQs</h2>
        </SectionHeading>
        {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>

      <section className={styles.enquirySection} id="enquiry">
        <div className={styles.enquiryIntro}><p className={styles.eyebrow}>LET'S PLAN YOUR NEXT STEP</p><h2>Speak with Global Visa Internationals</h2><p>Tell us about your intended course and study timeline. Our team can help you understand the preparation process and identify the next steps to research.</p><a className={styles.phoneLink} href="tel:+917022213466">Call +91 70222 13466</a></div>
        <div className={styles.formCard}><VisaForm /></div>
      </section>
      <footer className={styles.footer}><p>Information on this page is general guidance, not legal advice. Always check the latest student visa rules, fees and conditions with Immigration New Zealand and your chosen education provider.</p></footer>
    </main>
  );
}
