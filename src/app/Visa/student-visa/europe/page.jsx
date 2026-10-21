import React from "react";
import VisaForm from "@/Components/VisaForm";
import styles from "./EuropeStudentVisa.module.css";
import { SectionHeading, DocumentChecklist } from "../StudentVisaCommon";

const pageUrl = "https://www.globalvisainternationals.com/visa/student-visa/europe";
const imageUrl = "https://www.globalvisainternationals.com/images/Europe1.png";

export async function generateMetadata() {
  return {
    title: "Study in Europe: Student Visa Guidance, Documents and Costs | Global Visa Internationals",
    description: "Planning to study in Europe from India? Understand country-specific student visa routes, common documents, study costs and application steps with guidance from Global Visa Internationals.",
    alternates: { canonical: pageUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: "Study in Europe: Student Visa Guidance for Indian Students",
      description: "Explore student visa preparation, documents and study planning for European destinations with Global Visa Internationals.",
      url: pageUrl,
      siteName: "Global Visa Internationals",
      type: "website",
      locale: "en_IN",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: "Study in Europe and student visa guidance" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Study in Europe: Student Visa Guidance",
      description: "Explore country-specific visa requirements, documents and study costs for Europe.",
      images: [imageUrl],
    },
  };
}

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff", colorScheme: "light" };

const commonDocuments = [
  "Valid passport and identity documents",
  "Admission or acceptance letter from a recognised institution",
  "Completed national student visa or residence-permit application",
  "Recent passport-sized photographs that meet the destination country's rules",
  "Proof of funds for tuition, living expenses and travel, as required",
  "Academic transcripts, certificates and other education records",
  "Health or travel medical insurance, where required",
  "Proof of accommodation, if required by the destination country",
  "Visa fee payment confirmation and appointment documents, where applicable",
  "Police clearance, medical examination or TB test, if specifically required",
];

const steps = [
  ["Choose your destination and course", "Compare countries, course options, entry requirements, tuition, living costs and language requirements."],
  ["Apply to a recognised institution", "Follow the institution's admission process and keep your offer or acceptance letter."],
  ["Check the correct visa route", "Long-term study usually requires a national student visa or residence permit. Rules differ by country and course duration."],
  ["Prepare your country-specific evidence", "Use the official embassy, consulate or immigration website to confirm financial, insurance, accommodation and document requirements."],
  ["Submit your application", "Complete the required form, pay the applicable fee and book an appointment or provide biometrics if instructed."],
  ["Track the decision and prepare to travel", "Respond to requests by the deadline and check the conditions, validity dates and entry rules on your visa or permit."],
];

const countryCosts = [
  ["Germany", "Varies by institution and programme; some public programmes have low or no tuition", "€850–€1,200"],
  ["France", "Varies by institution, programme and student status", "€800–€1,200"],
  ["Finland", "Often €6,000–€20,000 yearly for non-EU/EEA students in English-taught programmes", "€700–€1,100"],
  ["Netherlands", "Varies by programme and student status", "€800–€1,200"],
  ["Italy", "Varies by institution, programme and income-based fee rules", "€700–€1,000"],
  ["Ireland", "Tuition varies widely by course and institution", "€1,000–€1,500"],
];

export default function EuropeStudentVisaPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalvisainternationals.com" },
      { "@type": "ListItem", position: 2, name: "Student Visa", item: "https://www.globalvisainternationals.com/visa/student-visa" },
      { "@type": "ListItem", position: 3, name: "Europe Student Visa", item: pageUrl },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is there one student visa for all of Europe?", acceptedAnswer: { "@type": "Answer", text: "No. Student visa and residence-permit requirements are set by the destination country. The correct route depends on the country, course duration and applicant circumstances." } },
      { "@type": "Question", name: "Do I need a Schengen visa to study in Europe?", acceptedAnswer: { "@type": "Answer", text: "A short-stay Schengen visa is not a substitute for the national long-stay visa or residence permit usually required for longer academic programmes. Check the official rules for your destination." } },
      { "@type": "Question", name: "What documents are commonly needed?", acceptedAnswer: { "@type": "Answer", text: "Common documents can include a passport, admission letter, application form, financial evidence, photographs and insurance. Exact requirements vary by country and personal circumstances." } },
      { "@type": "Question", name: "How much does it cost to study in Europe?", acceptedAnswer: { "@type": "Answer", text: "Tuition and living expenses vary significantly by country, institution, city and course. Confirm current costs directly with the institution and official sources." } },
      { "@type": "Question", name: "Can a consultant guarantee a student visa?", acceptedAnswer: { "@type": "Answer", text: "No. Visa decisions are made by the relevant government authority. Consultancy support cannot guarantee approval or a particular processing time." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>YOUR EUROPE STUDY JOURNEY STARTS HERE</p>
            <h1>Europe Student Visa Guidance for Indian Students</h1>
            <p className={styles.heroText}>Explore study opportunities across Europe with clear guidance on country-specific student visa routes, documents, costs and application steps from Global Visa Internationals.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#enquiry">Book a Consultation <span aria-hidden="true">→</span></a>
              <a className={styles.secondaryButton} href="#application-process">Explore the Process</a>
            </div>
            <p className={styles.heroNote}>Country-specific preparation support. Always verify current rules with official authorities.</p>
          </div>
          <div className={styles.heroImageWrap}>
            <img src="/images/Europe1.png" alt="Study in Europe and student visa guidance" className={styles.heroImage} fetchPriority="high" width="1200" height="630" />
            <div className={styles.imageBadge}><span className={styles.badgeIcon} aria-hidden="true">✦</span><span><strong>Personalised guidance</strong><small>From planning to application</small></span></div>
          </div>
        </section>

        <nav className={styles.quickNav} aria-label="On this page">
          <a href="#destinations">Destinations</a><a href="#requirements">Requirements</a><a href="#documents">Documents</a><a href="#application-process">Application steps</a><a href="#costs">Costs</a><a href="#faqs">FAQs</a>
        </nav>

        <section className={styles.introSection}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>STUDY IN EUROPE</p>
            <h2>Plan your European education with a clear visa checklist</h2>
          </SectionHeading>
          <p className={styles.lead}>Europe offers a wide range of universities, specialist institutions, research opportunities and culturally diverse student experiences. The right destination depends on your course, budget, language preferences and long-term goals.</p>
          <p>There is no single “European student visa” that covers every country. For longer programmes, students generally need to follow the destination country's national student visa or residence-permit process. Requirements can vary by nationality, course length and individual circumstances.</p>
        </section>

        <section className={styles.featureGrid} aria-label="Study planning support">
          <article className={styles.featureCard}><span className={styles.featureIcon}>01</span><h3>Destination planning</h3><p>Compare countries, teaching languages, course options, entry criteria and locations.</p></article>
          <article className={styles.featureCard}><span className={styles.featureIcon}>02</span><h3>Document checklist</h3><p>Organise common evidence and identify country-specific requirements before applying.</p></article>
          <article className={styles.featureCard}><span className={styles.featureIcon}>03</span><h3>Budget preparation</h3><p>Review tuition, accommodation, daily living expenses, insurance and application charges.</p></article>
          <article className={styles.featureCard}><span className={styles.featureIcon}>04</span><h3>Application guidance</h3><p>Understand typical stages and where to confirm official instructions for your destination.</p></article>
        </section>

        <section id="destinations" className={styles.contentSection}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>EXPLORE YOUR OPTIONS</p>
            <h2>Popular European study destinations</h2>
            <p className={styles.lead}>Research each country's official student visa and residence-permit rules before deciding where to apply.</p>
          </SectionHeading>
          <div className={styles.universityGrid}>
            <a href="https://www.study-in-germany.de/" target="_blank" rel="noreferrer"><strong>Germany</strong><span>Research, engineering and technical programmes ↗</span></a>
            <a href="https://www.campusfrance.org/en" target="_blank" rel="noreferrer"><strong>France</strong><span>Business, arts, fashion and research ↗</span></a>
            <a href="https://www.studyinnl.org/" target="_blank" rel="noreferrer"><strong>Netherlands</strong><span>International and English-taught programmes ↗</span></a>
            <a href="https://www.studyinitaly.esteri.it/" target="_blank" rel="noreferrer"><strong>Italy</strong><span>Design, architecture, arts and business ↗</span></a>
            <a href="https://www.studyinfinland.fi/" target="_blank" rel="noreferrer"><strong>Finland</strong><span>Technology, innovation and research ↗</span></a>
            <a href="https://www.educationinireland.com/" target="_blank" rel="noreferrer"><strong>Ireland</strong><span>Technology, business and life sciences ↗</span></a>
          </div>
          <p className={styles.notice}>The United Kingdom is outside the Schengen Area and has its own Student visa system. Ireland also has its own immigration rules. Always check the official process for the country where you plan to study.</p>
        </section>

        <section id="requirements" className={styles.contentSection}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>BEFORE YOU APPLY</p>
            <h2>Understanding Schengen and non-Schengen student visa routes</h2>
          </SectionHeading>
          <p>Schengen membership concerns short-stay travel and border arrangements; it does not create one common long-term student visa for all member countries. Students enrolling in longer programmes usually need a national long-stay visa and/or residence permit from the country where they will study.</p>
          <div className={styles.checkGrid}>
            <div className={styles.checkItem}><span>✓</span><div><h3>Admission to a recognised institution</h3><p>Confirm your offer, enrolment status and any tuition deposit requirements.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Financial evidence</h3><p>Check the minimum funds, accepted evidence and any tuition-payment requirements for your country.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Health insurance</h3><p>Understand whether public, private or travel medical insurance is required and when cover must begin.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Accommodation and identity</h3><p>Prepare passport details and accommodation evidence if requested by the relevant authority.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Language and academic documents</h3><p>Provide transcripts, qualifications and language test results where required for admission or visa processing.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Country-specific checks</h3><p>Some applicants may need biometrics, a medical exam, police clearance or an interview.</p></div></div>
          </div>
          <p className={styles.notice}>Requirements and appointment availability can change. Use the official immigration or embassy website for your destination as the final checklist; general lists are not a substitute for country-specific instructions.</p>
        </section>

        <section id="documents" className={`${styles.contentSection} ${styles.softSection}`}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>GET ORGANISED</p>
            <h2>Documents to prepare for a European student visa</h2>
            <p className={styles.lead}>The documents required vary by applicant and destination. Start with the common items below, then follow the exact checklist published by the relevant embassy, consulate or immigration authority.</p>
          </SectionHeading>
          <DocumentChecklist title="Common documents to check" documents={commonDocuments} />
          <p className={styles.notice}>Do not assume every item applies to every country. Translation, legalisation, proof-of-funds formats and document validity periods can differ. Check the instructions for your exact application route.</p>
        </section>

        <section id="application-process" className={styles.contentSection}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>STEP BY STEP</p>
            <h2>How to prepare for a European student visa</h2>
            <p className={styles.lead}>Use this overview to organise your planning, then follow the destination country's official application procedure.</p>
          </SectionHeading>
          <ol className={styles.steps}>{steps.map(([title, description], index) => <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
        </section>

        <section className={styles.ctaBand}><div><p className={styles.eyebrow}>NEED HELP PLANNING?</p><h2>Make your European study plans with more confidence</h2><p>Discuss your intended country, course and questions with the Global Visa Internationals team.</p></div><a className={styles.lightButton} href="#enquiry">Request a Consultation <span aria-hidden="true">→</span></a></section>

        <section id="costs" className={styles.contentSection}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>PLAN YOUR BUDGET</p>
            <h2>Estimated tuition and living costs in selected European countries</h2>
            <p className={styles.lead}>Use these broad estimates only as an initial planning guide. Actual fees and expenses depend on the programme, institution, city and student status.</p>
          </SectionHeading>
          <div className={styles.costGrid}>{countryCosts.map(([country, tuition, living]) => <article key={country}><span aria-hidden="true">€</span><h3>{country}</h3><p><strong>Tuition:</strong> {tuition}</p><p><strong>Living costs:</strong> {living} per month (approx.)</p></article>)}</div>
          <p className={styles.notice}>Figures are indicative, not official visa financial thresholds, and may become outdated. Confirm tuition directly with your institution and check the current proof-of-funds amount published by the relevant country's authorities. Exchange rates fluctuate.</p>
        </section>

        <section className={`${styles.contentSection} ${styles.softSection}`}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>WHY GLOBAL VISA INTERNATIONALS?</p>
            <h2>Guidance tailored to your study plans</h2>
          </SectionHeading>
          <div className={styles.benefitGrid}><article><h3>Clear explanations</h3><p>Understand the typical application stages and the questions to resolve before you apply.</p></article><article><h3>Organised preparation</h3><p>Work through a document checklist and flag missing or inconsistent information.</p></article><article><h3>Personal attention</h3><p>Discuss your academic background, study goals and destination options with our team.</p></article></div>
          <p className={styles.disclaimer}>Global Visa Internationals is an independent consultancy and is not a government or immigration authority. Consultancy support does not guarantee admission, visa approval or a particular processing time.</p>
        </section>

        <section id="faqs" className={`${styles.contentSection} ${styles.faqSection}`}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>COMMON QUESTIONS</p>
            <h2>Europe student visa FAQs</h2>
          </SectionHeading>
          <details><summary>Is there one student visa for all of Europe?</summary><p>No. Each destination has its own requirements for long-term study. Your visa or residence permit depends on the country, course and circumstances.</p></details>
          <details><summary>Is a Schengen short-stay visa enough for a full degree?</summary><p>Usually not. Longer academic programmes generally require the destination country's national long-stay student visa and/or residence permit. Confirm with the official authority.</p></details>
          <details><summary>What documents are commonly required?</summary><p>Common items may include a valid passport, admission letter, application form, financial evidence, photographs and insurance. Requirements vary by destination and applicant.</p></details>
          <details><summary>How much money do I need to show?</summary><p>Financial thresholds and acceptable evidence differ by country and may change. Use the current official guidance for the destination where you will study.</p></details>
          <details><summary>How early should I apply?</summary><p>Start researching several months before your course begins. Appointment availability and processing times vary, so follow the official timing advice for your destination.</p></details>
          <details><summary>Can a consultant guarantee my visa approval?</summary><p>No. The relevant government authority makes the decision. No consultant can guarantee approval or a particular processing time.</p></details>
        </section>

        <section id="enquiry" className={styles.enquirySection}>
          <div className={styles.enquiryIntro}><p className={styles.eyebrow}>LET’S PLAN YOUR NEXT STEP</p><h2>Enquire about studying in Europe</h2><p>Share your preferred destination and study goals so our team can follow up about available consultancy support.</p><a className={styles.phoneLink} href="tel:+917022213466">Call us: +91 70222 13466</a></div>
          <div className={styles.formCard}><VisaForm /></div>
        </section>
        <footer className={styles.footer}><p>This page provides general information, not immigration or legal advice. Requirements, costs and procedures change; verify current details with the official authority and your chosen institution before applying.</p></footer>
      </main>
    </>
  );
}
