import React from "react";
import VisaForm from "@/Components/VisaForm";
import styles from "./CanadaStudentVisa.module.css";
import { SectionHeading, DocumentChecklist } from "../StudentVisaCommon"; 
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

const pageUrl =
  "https://www.globalvisainternationals.com/visa/student-visa/canada";
const imageUrl =
  "https://www.globalvisainternationals.com/student-visa/Canada-student-Visa-ASSISTANCE.webp";

export async function generateMetadata() {
  return {
    title: "Canada Student Visa Consultants in India | Global Visa Internationals",
    description:
      "Planning to study in Canada from India? Get guidance on study permit requirements, documents, proof of funds, biometrics and your application from Global Visa Internationals.",
    alternates: { canonical: pageUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: "Canada Student Visa Guidance for Indian Students",
      description:
        "Understand the Canadian study permit process and get personalised application guidance from Global Visa Internationals.",
      url: pageUrl,
      siteName: "Global Visa Internationals",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Canada study permit guidance for students from India",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Canada Student Visa Guidance | Global Visa Internationals",
      description:
        "Explore study permit requirements, documents and application steps for studying in Canada.",
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

export default function CanadaStudentVisaPage() {
  const breadcrumbJsonLd = {
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
        name: "Student Visa",
        item: "https://www.globalvisainternationals.com/visa/student-visa",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Canada Student Visa",
        item: pageUrl,
      },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    description:
      "Independent education and visa consultancy offering guidance to students planning to study abroad.",
    telephone: "+91-7022213466",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MG Road",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560025",
      addressCountry: "IN",
    },
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
        name: "Do I need a study permit to study in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most foreign nationals need a study permit to study in Canada. Requirements and exceptions depend on the student's circumstances and course. Check the official Government of Canada guidance before applying.",
        },
      },
      {
        "@type": "Question",
        name: "What documents may be needed for a Canadian study permit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depending on your situation, documents may include a letter of acceptance from a designated learning institution, proof of identity, proof of financial support, a provincial or territorial attestation letter where required, and other supporting documents requested by IRCC.",
        },
      },
      {
        "@type": "Question",
        name: "How much money do I need to show for a Canada study permit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amount depends on tuition, living expenses, family members accompanying you, and current IRCC requirements. Check the Government of Canada website for the current proof-of-funds amount before submitting your application.",
        },
      },
      {
        "@type": "Question",
        name: "Can a consultant guarantee study permit approval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No consultant can guarantee a study permit decision. Immigration authorities assess each application based on the applicable rules and the information submitted.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>YOUR STUDY ABROAD JOURNEY STARTS HERE</p>
            <h1>Canada Student Visa Guidance for Indian Students</h1>
            <p className={styles.heroText}>
              Planning to study in Canada? Get clear, personalised guidance on
              study permit requirements, supporting documents, proof of funds
              and the application process from Global Visa Internationals.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#enquiry">
                Book a Consultation <span aria-hidden="true">→</span>
              </a>
              <a className={styles.secondaryButton} href="#application-process">
                Explore the Process
              </a>
            </div>
            <p className={styles.heroNote}>
              Practical application support. Clear next steps. No guarantee of approval.
            </p>
          </div>
          <div className={styles.heroImageWrap}>
            <img
              src="/student-visa/Canada-student-Visa-ASSISTANCE.webp"
              alt="Students preparing for higher education in Canada"
              className={styles.heroImage}
              fetchPriority="high"
              width="720"
              height="620"
            />
            <div className={styles.imageBadge}>
              <span className={styles.badgeIcon} aria-hidden="true">✦</span>
              <span><strong>Personalised guidance</strong><small>From planning to application</small></span>
            </div>
          </div>
        </section>

        <nav className={styles.quickNav} aria-label="On this page">
          <a href="#requirements">Requirements</a>
          <a href="#documents">Documents</a>
          <a href="#application-process">Application steps</a>
          <a href="#costs">Costs</a>
          <a href="#universities">Universities</a>
          <a href="#faqs">FAQs</a>
        </nav>

        <section className={styles.introSection}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>STUDY IN CANADA</p>
            <h2>Make your study permit application easier to understand</h2>
          </SectionHeading>
          <p className={styles.lead}>
            Canada offers a wide range of college and university programmes for
            international students. Before applying, it is important to choose
            a suitable programme, understand the current study permit rules and
            prepare documents that accurately reflect your plans and finances.
          </p>
          <p>
            Global Visa Internationals provides consultancy support to students
            from India who are exploring Canadian education. We can help you
            organise your application, review your supporting documents and
            understand the steps you may need to complete. The final decision
            rests with Canadian immigration authorities.
          </p>
        </section>

        <section className={styles.featureGrid} aria-label="Our guidance services">
          <article className={styles.featureCard}>
            <span className={styles.featureIcon} aria-hidden="true">01</span>
            <h3>Study plan guidance</h3>
            <p>Discuss your education goals and explore programme options that fit your background.</p>
          </article>
          <article className={styles.featureCard}>
            <span className={styles.featureIcon} aria-hidden="true">02</span>
            <h3>Document preparation</h3>
            <p>Organise your checklist and review documents for completeness and consistency.</p>
          </article>
          <article className={styles.featureCard}>
            <span className={styles.featureIcon} aria-hidden="true">03</span>
            <h3>Application guidance</h3>
            <p>Understand application stages, biometrics and where to find official instructions.</p>
          </article>
          <article className={styles.featureCard}>
            <span className={styles.featureIcon} aria-hidden="true">04</span>
            <h3>Personalised consultation</h3>
            <p>Discuss your circumstances and identify questions to resolve before you apply.</p>
          </article>
        </section>

        <section id="requirements" className={styles.contentSection}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>BEFORE YOU APPLY</p>
            <h2>Canada student visa requirements for Indian students</h2>
          </SectionHeading>
          <p>
            Most international students need a Canadian study permit to study
            in Canada. The exact requirements depend on your course, institution
            and personal circumstances. Common items to check include:
          </p>
          <div className={styles.checkGrid}>
            <div className={styles.checkItem}><span>✓</span><div><h3>Letter of acceptance</h3><p>An acceptance letter from a designated learning institution (DLI).</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Proof of financial support</h3><p>Evidence that you can cover tuition, living expenses and applicable travel costs.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Attestation letter, if required</h3><p>Check whether a provincial or territorial attestation letter (PAL/TAL) applies to you.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Identity and supporting documents</h3><p>Prepare a valid passport and any additional forms or evidence requested for your case.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Biometrics or medical exam, if required</h3><p>Follow the instructions issued for your application and individual circumstances.</p></div></div>
            <div className={styles.checkItem}><span>✓</span><div><h3>Study plan and supporting explanation</h3><p>Ensure the information you provide is accurate, consistent and supported by evidence.</p></div></div>
          </div>
          <p className={styles.notice}>
            Requirements can change. Confirm your personal document checklist and
            current rules with the official Government of Canada website before applying.
          </p>
        </section>

        <section id="documents" className={`${styles.contentSection} ${styles.softSection}`}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>GET ORGANISED</p>
            <h2>Documents to prepare for a study permit application</h2>
          </SectionHeading>
          <p>
            Your checklist may include the following documents. Not every item
            applies to every applicant, and immigration authorities may request
            additional information.
          </p>
          <DocumentChecklist className={styles.documentList}>
            <li>Valid passport or travel document</li>
            <li>Letter of acceptance from your Canadian institution</li>
            <li>Proof of funds and supporting financial records</li>
            <li>Provincial or territorial attestation letter, if applicable</li>
            <li>Academic transcripts, certificates and relevant test results</li>
            <li>Study plan and other supporting explanations, where appropriate</li>
            <li>Biometrics, medical or police documents, if requested or required</li>
            <li>Application forms and fee-payment confirmation</li>
          </DocumentChecklist>
        </section>

        <section id="application-process" className={styles.contentSection}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>STEP BY STEP</p>
            <h2>How to apply for a Canada study permit</h2>
            <p className={styles.lead}>Use this overview to plan your next steps. Always follow the current instructions for your own application.</p>
          </SectionHeading>
          <ol className={styles.steps}>
            <li><span>1</span><div><h3>Choose your course and institution</h3><p>Research programmes, admission criteria, tuition fees and whether the institution is a designated learning institution.</p></div></li>
            <li><span>2</span><div><h3>Receive your letter of acceptance</h3><p>Complete the institution’s admission process and keep your official acceptance documents.</p></div></li>
            <li><span>3</span><div><h3>Check current permit requirements</h3><p>Review the official rules for proof of funds, PAL/TAL exemptions and any requirements specific to your circumstances.</p></div></li>
            <li><span>4</span><div><h3>Prepare and submit your application</h3><p>Complete the required forms, provide truthful supporting documents and pay the applicable fees.</p></div></li>
            <li><span>5</span><div><h3>Complete biometrics or other requested steps</h3><p>Follow any instructions or deadlines sent by Immigration, Refugees and Citizenship Canada (IRCC).</p></div></li>
            <li><span>6</span><div><h3>Monitor your application</h3><p>Use the official account or service specified for your application to check updates and respond to requests.</p></div></li>
          </ol>
        </section>

        <section className={styles.ctaBand}>
          <div>
            <p className={styles.eyebrow}>NEED HELP PLANNING?</p>
            <h2>Talk through your Canada study plans with our team</h2>
            <p>Share your study goals and questions. We’ll help you understand the consultancy support available for your next steps.</p>
          </div>
          <a className={styles.lightButton} href="#enquiry">Request a Consultation <span aria-hidden="true">→</span></a>
        </section>

        <section id="costs" className={styles.contentSection}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>PLAN YOUR BUDGET</p>
            <h2>Understanding the cost of studying in Canada</h2>
          </SectionHeading>
          <p>
            Your total budget depends on your institution, programme, city and
            personal needs. Before making financial commitments, calculate the
            full cost using current figures from your chosen institution and
            official Canadian immigration guidance.
          </p>
          <div className={styles.costGrid}>
            <article><span aria-hidden="true">▤</span><h3>Tuition and fees</h3><p>Check the current tuition schedule and any programme-specific charges with your institution.</p></article>
            <article><span aria-hidden="true">⌂</span><h3>Living expenses</h3><p>Budget for housing, food, local transport, phone service and everyday needs.</p></article>
            <article><span aria-hidden="true">＋</span><h3>Other expenses</h3><p>Allow for insurance where applicable, travel, study materials and application-related fees.</p></article>
          </div>
          <p className={styles.notice}>
            Proof-of-funds thresholds and fees can change. Avoid relying on old
            INR conversions or outdated processing-time estimates; check official
            sources for the latest requirements.
          </p>
        </section>

        <section id="universities" className={`${styles.contentSection} ${styles.softSection}`}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>EXPLORE YOUR OPTIONS</p>
            <h2>Popular universities to research in Canada</h2>
          </SectionHeading>
          <p>
            Start by comparing course content, admission requirements, tuition,
            location and student support. These well-known institutions are
            examples to research—not a ranking or a guarantee of admission.
          </p>
          <div className={styles.universityGrid}>
            <a href="https://www.utoronto.ca/" target="_blank" rel="noreferrer"><strong>University of Toronto</strong><span>Toronto, Ontario ↗</span></a>
            <a href="https://www.ubc.ca/" target="_blank" rel="noreferrer"><strong>University of British Columbia</strong><span>British Columbia ↗</span></a>
            <a href="https://www.mcgill.ca/" target="_blank" rel="noreferrer"><strong>McGill University</strong><span>Montreal, Quebec ↗</span></a>
            <a href="https://www.ualberta.ca/" target="_blank" rel="noreferrer"><strong>University of Alberta</strong><span>Alberta ↗</span></a>
            <a href="https://www.mcmaster.ca/" target="_blank" rel="noreferrer"><strong>McMaster University</strong><span>Hamilton, Ontario ↗</span></a>
            <a href="https://www.ucalgary.ca/" target="_blank" rel="noreferrer"><strong>University of Calgary</strong><span>Calgary, Alberta ↗</span></a>
          </div>
        </section>

        <section className={styles.contentSection}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>WHY GLOBAL VISA INTERNATIONALS?</p>
            <h2>Guidance tailored to your study plans</h2>
          </SectionHeading>
          <div className={styles.benefitGrid}>
            <article><h3>Clear explanations</h3><p>Understand the main application stages and the documents you may need to prepare.</p></article>
            <article><h3>Organised preparation</h3><p>Work through a checklist and identify missing or inconsistent information before submission.</p></article>
            <article><h3>Personal attention</h3><p>Discuss your academic background, goals and questions with our consultancy team.</p></article>
          </div>
          <p className={styles.disclaimer}>
            Global Visa Internationals is an independent consultancy and is not
            part of the Government of Canada or IRCC. Consultancy support does
            not guarantee admission, a study permit or any immigration outcome.
            Use official Government of Canada sources for final requirements and decisions.
          </p>
        </section>

        <section id="faqs" className={`${styles.contentSection} ${styles.faqSection}`}>
          <SectionHeading className={styles.sectionHeading}>
            <p className={styles.eyebrow}>COMMON QUESTIONS</p>
            <h2>Canada student visa FAQs</h2>
          </SectionHeading>
          <details><summary>Do I need a study permit to study in Canada?</summary><p>Most foreign nationals need a study permit, although exceptions can apply. Check the official Government of Canada rules for your course and circumstances.</p></details>
          <details><summary>What documents may be required?</summary><p>Common documents may include an acceptance letter, proof of identity, proof of financial support and a PAL/TAL where required. Your personal checklist may include additional items.</p></details>
          <details><summary>How much money must I show?</summary><p>The required amount depends on current IRCC rules, tuition, living expenses and family members accompanying you. Verify the current amount on the official website before applying.</p></details>
          <details><summary>Is the Student Direct Stream (SDS) still available?</summary><p>No. Canada ended the Student Direct Stream on November 8, 2024. Study permit applications are handled through the regular process, subject to current rules.</p></details>
          <details><summary>Can a consultant guarantee approval?</summary><p>No. Only the relevant Canadian authorities decide study permit applications. A consultant cannot guarantee approval or a particular processing time.</p></details>
          <details><summary>Where can I check official study permit information?</summary><p>Visit the <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html" target="_blank" rel="noreferrer">Government of Canada study permit page</a> for current eligibility, documents and application instructions.</p></details>
        </section>

        <section id="enquiry" className={styles.enquirySection}>
          <div className={styles.enquiryIntro}>
            <p className={styles.eyebrow}>LET’S PLAN YOUR NEXT STEP</p>
            <h2>Enquire about Canada student visa guidance</h2>
            <p>Complete the form and the Global Visa Internationals team can follow up about your study plans.</p>
            <a className={styles.phoneLink} href="tel:+917022213466">Call us: +91 70222 13466</a>
          </div>
          <div className={styles.formCard}>
            <VisaForm />
          </div>
        </section>

        <footer className={styles.footer}>
          <p>Information on this page is general and may change. Always verify current requirements with IRCC and your chosen institution before submitting an application.</p>
        </footer>

        <section className={styles.reviews} aria-label="Client reviews">
          <ReviewSchema />
          <ReviewCarousel />
        </section>
      </main>
    </>
  );
}
