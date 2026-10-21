import React from "react";
import VisaForm from "@/Components/VisaForm";
import styles from "./AustraliaStudentVisa.module.css";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";
import commonStyles from "../VisaPageCommon.module.css";

const pageUrl = "https://www.globalvisainternationals.com/visa/student-visa/australia";
const imageUrl = "https://www.globalvisainternationals.com/student-visa/Australia-student-Visa-ASSISTANCE.webp";
const officialVisaUrl = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500";

export async function generateMetadata() {
  return {
    title: "Australia Student Visa Consultants in India | Global Visa Internationals",
    description:
      "Planning to study in Australia from India? Get guidance on Student visa (subclass 500) eligibility, Genuine Student criteria, documents, costs and application steps.",
    alternates: { canonical: pageUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: "Australia Student Visa Guidance for Indian Students",
      description:
        "Understand the Australian Student visa (subclass 500) process and get personalised application guidance from Global Visa Internationals.",
      url: pageUrl,
      siteName: "Global Visa Internationals",
      type: "website",
      locale: "en_IN",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: "Australia student visa guidance for Indian students" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Australia Student Visa Guidance | Global Visa Internationals",
      description: "Explore subclass 500 visa requirements, documents and application steps for studying in Australia.",
      images: [imageUrl],
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function AustraliaStudentVisaPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalvisainternationals.com" },
      { "@type": "ListItem", position: 2, name: "Student Visa", item: "https://www.globalvisainternationals.com/visa/student-visa" },
      { "@type": "ListItem", position: 3, name: "Australia Student Visa", item: pageUrl },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    description: "Independent education and visa consultancy offering guidance to students planning to study abroad.",
    telephone: "+91-7022213466",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MG Road",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560025",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Country", name: "IN" },
    sameAs: [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which visa do international students usually need to study in Australia?",
        acceptedAnswer: { "@type": "Answer", text: "Many international students apply for the Student visa (subclass 500). Eligibility and requirements depend on the applicant and course. Check the Australian Department of Home Affairs website for current rules." },
      },
      {
        "@type": "Question",
        name: "What is the Genuine Student requirement?",
        acceptedAnswer: { "@type": "Answer", text: "The Genuine Student requirement asks applicants to explain their circumstances, reasons for choosing the course and Australia, and how the course benefits them. Applicants should answer the current application questions truthfully and provide supporting evidence." },
      },
      {
        "@type": "Question",
        name: "How many hours can a student visa holder work in Australia?",
        acceptedAnswer: { "@type": "Answer", text: "Student visa holders can generally work up to 48 hours per fortnight while their course is in session, subject to visa conditions and exceptions. Check the current official guidance and your own visa conditions." },
      },
      {
        "@type": "Question",
        name: "How much does an Australian Student visa cost?",
        acceptedAnswer: { "@type": "Answer", text: "The visa application charge can change and may depend on the applicant's circumstances. Check the Department of Home Affairs visa pricing estimator before lodging an application." },
      },
      {
        "@type": "Question",
        name: "Can a consultant guarantee my Australian student visa will be approved?",
        acceptedAnswer: { "@type": "Answer", text: "No consultant can guarantee a visa outcome. The Australian Department of Home Affairs assesses each application under the applicable rules." },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>YOUR STUDY ABROAD JOURNEY STARTS HERE</p>
            <h1>Australia Student Visa Guidance for Indian Students</h1>
            <p className={styles.heroText}>
              Planning to study in Australia? Get clear guidance on Student visa (subclass 500)
              requirements, Genuine Student criteria, supporting documents and application steps
              from Global Visa Internationals.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#enquiry">Book a Consultation <span aria-hidden="true">→</span></a>
              <a className={styles.secondaryButton} href="#application-process">Explore the Process</a>
            </div>
            <p className={styles.heroNote}>Practical application support. Clear next steps. No guarantee of approval.</p>
          </div>
          <div className={styles.heroImageWrap}>
            <img
              src="/student-visa/Australia-student-Visa-ASSISTANCE.webp"
              alt="Australia student visa and study abroad guidance"
              className={styles.heroImage}
              fetchPriority="high"
              width="1200"
              height="630"
            />
            <div className={styles.imageBadge}>
              <span className={styles.badgeIcon} aria-hidden="true">✦</span>
              <span><strong>Personalised guidance</strong><small>From planning to application</small></span>
            </div>
          </div>
        </section>

        <nav className={styles.quickNav} aria-label="On this page">
          <a href="#requirements">Requirements</a><a href="#documents">Documents</a><a href="#application-process">Application steps</a><a href="#costs">Costs</a><a href="#universities">Universities</a><a href="#faqs">FAQs</a>
        </nav>

        <section className={styles.introSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>STUDY IN AUSTRALIA</p>
            <h2>Plan your Australian education with a clear visa checklist</h2>
          </div>
          <p className={styles.lead}>
            Australia offers higher education, vocational training and English-language study options
            for international students. Before applying, compare courses and providers, understand the
            current visa rules and prepare documents that accurately reflect your study plans and finances.
          </p>
          <p>
            Global Visa Internationals provides consultancy support to students from India who are
            exploring Australian education. We can help you organise documents, understand application
            stages and identify questions to resolve before lodging. The visa decision is made by the
            Australian Department of Home Affairs.
          </p>
        </section>

        <section className={styles.featureGrid} aria-label="Our guidance services">
          <article className={styles.featureCard}><span className={styles.featureIcon}>01</span><h3>Course and provider planning</h3><p>Compare course options, entry criteria, tuition and how a programme fits your goals.</p></article>
          <article className={styles.featureCard}><span className={styles.featureIcon}>02</span><h3>Genuine Student preparation</h3><p>Organise clear, truthful responses and supporting evidence for your circumstances.</p></article>
          <article className={styles.featureCard}><span className={styles.featureIcon}>03</span><h3>Document checklist</h3><p>Review common documents and identify missing or inconsistent information before applying.</p></article>
          <article className={styles.featureCard}><span className={styles.featureIcon}>04</span><h3>Application guidance</h3><p>Understand the online application, health cover, health checks and follow-up steps that may apply.</p></article>
        </section>

        <section id="requirements" className={styles.contentSection}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>BEFORE YOU APPLY</p><h2>Australia Student visa (subclass 500) requirements</h2></div>
          <p>Requirements depend on your course, education provider, location and personal circumstances. Common items to check include:</p>
          <div className={styles.checkGrid}>
            <div className={styles.checkItem}><span>✓</span><div><h3>Confirmation of Enrolment (CoE)</h3><p>For most applicants, a valid CoE for the intended registered course is needed when the visa is decided.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Genuine Student requirement</h3><p>Answer the application questions honestly and explain your circumstances, course choice and study plans.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Financial capacity</h3><p>Prepare evidence that meets current requirements for tuition, living costs, travel and any eligible family members.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>English language evidence</h3><p>Provide an approved test result or evidence of an applicable exemption if required for your case.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Overseas Student Health Cover</h3><p>Arrange OSHC for the required period unless an exemption applies.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Health, character and identity</h3><p>Meet applicable health and character requirements and provide a valid passport and requested evidence.</p></div></div>
          </div>
          <p className={styles.notice}>Visa rules can change. In particular, Home Affairs announced Student visa rule changes effective 2 October 2026. Check the official visa page for the rules that apply to your location and circumstances before applying.</p>
        </section>

        <section id="documents" className={`${styles.contentSection} ${styles.softSection}`}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>GET ORGANISED</p><h2>Documents to prepare for an Australian student visa</h2></div>
          <p>Your individual checklist may differ. The application system and Department of Home Affairs instructions determine which evidence you must provide.</p>
          <ul className={styles.documentList}>
            <li>Valid passport and identity details</li>
            <li>Confirmation of Enrolment (CoE)</li>
            <li>Academic records and previous qualifications</li>
            <li>Financial evidence and supporting records</li>
            <li>Genuine Student responses and relevant evidence</li>
            <li>Approved English test result or exemption evidence, if required</li>
            <li>Overseas Student Health Cover (OSHC) details</li>
            <li>Health, character or additional documents if requested</li>
            <li>Details of any family members included, where permitted</li>
            <li>Application fee payment confirmation</li>
          </ul>
        </section>

        <section id="application-process" className={styles.contentSection}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>STEP BY STEP</p><h2>How to apply for an Australia Student visa</h2><p className={styles.lead}>Use this overview to organise your preparation. Always follow the current Department of Home Affairs instructions for your own case.</p></div>
          <ol className={styles.steps}>
            <li><span>1</span><div><h3>Choose a suitable course and provider</h3><p>Compare entry requirements, course content, tuition, location and the provider’s registration.</p></div></li>
            <li><span>2</span><div><h3>Apply for admission and obtain your CoE</h3><p>Follow the institution’s admissions process and retain the official enrolment documents.</p></div></li>
            <li><span>3</span><div><h3>Check the current visa rules</h3><p>Confirm application-location rules, Genuine Student questions, financial evidence and family-member eligibility.</p></div></li>
            <li><span>4</span><div><h3>Prepare your evidence</h3><p>Gather identity, education, financial, English-language and OSHC evidence that applies to you.</p></div></li>
            <li><span>5</span><div><h3>Lodge online and complete requested checks</h3><p>Submit through the official process, pay the applicable charge and complete any health or biometrics steps if instructed.</p></div></li>
            <li><span>6</span><div><h3>Monitor messages and visa conditions</h3><p>Check your account and respond to requests by their deadlines. If granted, read and follow every visa condition.</p></div></li>
          </ol>
        </section>

        <section className={styles.ctaBand}><div><p className={styles.eyebrow}>NEED HELP PLANNING?</p><h2>Talk through your Australia study plans with our team</h2><p>Share your goals and questions to understand the consultancy support available for your next steps.</p></div><a className={styles.lightButton} href="#enquiry">Request a Consultation <span aria-hidden="true">→</span></a></section>

        <section id="costs" className={styles.contentSection}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>PLAN YOUR BUDGET</p><h2>Understanding the cost of studying in Australia</h2></div>
          <p>Your total budget depends on the course, institution, city, accommodation and personal needs. Calculate the full cost before making commitments, using current information from your provider and official sources.</p>
          <div className={styles.costGrid}>
            <article><span aria-hidden="true">▤</span><h3>Tuition and course fees</h3><p>Ask your institution for current tuition, deposits, materials and any course-specific charges.</p></article>
            <article><span aria-hidden="true">⌂</span><h3>Living expenses</h3><p>Budget for accommodation, food, utilities, local travel, phone service and everyday needs.</p></article>
            <article><span aria-hidden="true">＋</span><h3>Visa and other costs</h3><p>Include the visa application charge, OSHC, health checks, travel and document-related expenses.</p></article>
          </div>
          <p className={styles.notice}>The Department of Home Affairs lists the Student visa (subclass 500) application charge from AUD 2,500 as of July 2026, with limited concessions. Charges can change and additional applicant charges may apply. Confirm the exact price in the official visa pricing estimator before lodging.</p>
          <p><a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" target="_blank" rel="noreferrer">Check current official visa fees ↗</a></p>
        </section>

        <section id="universities" className={`${styles.contentSection} ${styles.softSection}`}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>EXPLORE YOUR OPTIONS</p><h2>Australian universities to research</h2></div>
          <p>Compare course content, entry criteria, tuition, location, scholarships and student support. These are examples to research, not a ranking or a guarantee of admission.</p>
          <div className={styles.universityGrid}>
            <a href="https://www.unimelb.edu.au/" target="_blank" rel="noreferrer"><strong>University of Melbourne</strong><span>Melbourne, Victoria ↗</span></a>
            <a href="https://www.anu.edu.au/" target="_blank" rel="noreferrer"><strong>Australian National University</strong><span>Canberra, ACT ↗</span></a>
            <a href="https://www.sydney.edu.au/" target="_blank" rel="noreferrer"><strong>University of Sydney</strong><span>Sydney, New South Wales ↗</span></a>
            <a href="https://www.uq.edu.au/" target="_blank" rel="noreferrer"><strong>University of Queensland</strong><span>Brisbane, Queensland ↗</span></a>
            <a href="https://www.monash.edu/" target="_blank" rel="noreferrer"><strong>Monash University</strong><span>Melbourne, Victoria ↗</span></a>
            <a href="https://www.unsw.edu.au/" target="_blank" rel="noreferrer"><strong>UNSW Sydney</strong><span>Sydney, New South Wales ↗</span></a>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>WHY GLOBAL VISA INTERNATIONALS?</p><h2>Guidance tailored to your study plans</h2></div>
          <div className={styles.benefitGrid}>
            <article><h3>Clear explanations</h3><p>Understand the application stages and the evidence that may be relevant to your circumstances.</p></article>
            <article><h3>Organised preparation</h3><p>Work through a checklist and identify missing or inconsistent information before submission.</p></article>
            <article><h3>Personal attention</h3><p>Discuss your academic background, study goals and questions with our consultancy team.</p></article>
          </div>
          <p className={styles.disclaimer}>Global Visa Internationals is an independent consultancy and is not part of the Australian Government or the Department of Home Affairs. Consultancy support does not guarantee admission, visa approval or any immigration outcome. If you need immigration assistance, check the Australian Government’s guidance on who can legally provide it.</p>
        </section>

        <section id="faqs" className={`${styles.contentSection} ${styles.faqSection}`}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>COMMON QUESTIONS</p><h2>Australia student visa FAQs</h2></div>
          <details><summary>Which visa do I usually need to study in Australia?</summary><p>Many international students apply for the Student visa (subclass 500). Requirements depend on the course and your circumstances. See the <a href={officialVisaUrl} target="_blank" rel="noreferrer">official subclass 500 visa page</a>.</p></details>
          <details><summary>What is the Genuine Student (GS) requirement?</summary><p>Applicants answer questions about their circumstances, reasons for choosing the course and Australia, and the value of the course to their future. Answer truthfully and provide relevant supporting evidence. The former Genuine Temporary Entrant (GTE) requirement is not the current student-visa test.</p></details>
          <details><summary>How many hours can I work on a Student visa?</summary><p>Student visa holders can generally work up to 48 hours per fortnight while their course is in session, subject to exceptions and visa conditions. Research-degree students may have different rules. Check your visa conditions and current official guidance.</p></details>
          <details><summary>Do I need Overseas Student Health Cover?</summary><p>Most student visa applicants must maintain OSHC for the required period unless an exemption applies. Confirm the rules for your circumstances.</p></details>
          <details><summary>How much is the Student visa application fee?</summary><p>The charge can change and additional charges may apply. Check the Department of Home Affairs’ <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" target="_blank" rel="noreferrer">current visa pricing page</a> before applying.</p></details>
          <details><summary>Can I bring family members with me?</summary><p>Eligibility to include family members depends on your circumstances and current rules. Changes effective 2 October 2026 affect who may apply from within Australia and whether family members can be included. Check the official guidance before making plans.</p></details>
          <details><summary>Can a consultant guarantee approval?</summary><p>No. Only the Department of Home Affairs decides visa applications. Professional support cannot guarantee approval or a particular processing time.</p></details>
          <details><summary>Where can I find official requirements?</summary><p>Visit the <a href={officialVisaUrl} target="_blank" rel="noreferrer">Australian Department of Home Affairs Student visa page</a> for current eligibility, application rules and conditions.</p></details>
        </section>

        <section id="enquiry" className={styles.enquirySection}>
          <div className={styles.enquiryIntro}><p className={styles.eyebrow}>LET’S PLAN YOUR NEXT STEP</p><h2>Enquire about Australia student visa guidance</h2><p>Complete the form and the Global Visa Internationals team can follow up about your study plans.</p><a className={styles.phoneLink} href="tel:+917022213466">Call us: +91 70222 13466</a></div>
          <div className={styles.formCard}><VisaForm /></div>
        </section>

        <footer className={styles.footer}><p>Information on this page is general and may change. Always verify current visa requirements, charges and conditions with the Australian Department of Home Affairs and your chosen education provider before applying.</p></footer>

        <section className={styles.reviews} aria-label="Client reviews"><ReviewSchema /><ReviewCarousel /></section>
      </main>
    </>
  );
}
