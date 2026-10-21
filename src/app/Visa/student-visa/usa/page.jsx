import React from "react";
import VisaForm from "@/Components/VisaForm";
import styles from "./USAStudentVisa.module.css";
import { SectionHeading, DocumentChecklist } from "../StudentVisaCommon"; 
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

const pageUrl = "https://www.globalvisainternationals.com/visa/student-visa/usa";
const imageUrl = "https://www.globalvisainternationals.com/student-visa/USA-student-Visa-ASSISTANCE.webp";
const officialVisaUrl = "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html";
const feeUrl = "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/fees-visa-services.html";
const sevisUrl = "https://www.ice.gov/sevis/i901";

export async function generateMetadata() {
  return {
    title: "USA Student Visa Consultants in India | F-1 Visa Guidance",
    description:
      "Planning to study in the USA from India? Explore F-1 student visa requirements, Form I-20, SEVIS I-901, DS-160, financial documents and interview preparation.",
    keywords: [
      "USA student visa", "F-1 visa for Indian students", "US student visa requirements",
      "Form I-20", "SEVIS I-901 fee", "DS-160 student visa", "study in USA",
      "USA student visa consultant", "US student visa interview"
    ],
    alternates: { canonical: pageUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: "USA F-1 Student Visa Guidance | Global Visa Internationals",
      description:
        "Understand the US student visa process, Form I-20, SEVIS fee, supporting documents and interview preparation.",
      url: pageUrl,
      siteName: "Global Visa Internationals",
      type: "website",
      locale: "en_IN",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: "USA student visa guidance for Indian students" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "USA F-1 Student Visa Guidance | Global Visa Internationals",
      description: "Explore F-1 visa requirements, documents and application steps for studying in the United States.",
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

export default function USAStudentVisaPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalvisainternationals.com" },
      { "@type": "ListItem", position: 2, name: "Student Visa", item: "https://www.globalvisainternationals.com/visa/student-visa" },
      { "@type": "ListItem", position: 3, name: "USA Student Visa", item: pageUrl },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
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
    sameAs: [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
    ],
  };

  const faqItems = [
    {
      q: "Which student visa do I need to study in the USA?",
      a: "F-1 is generally used for academic study at an eligible school, college or university. M-1 is for certain vocational or non-academic programmes, while J-1 applies to designated exchange visitor programmes. Confirm the correct category for your programme with official guidance.",
    },
    {
      q: "What is Form I-20?",
      a: "Form I-20 is the Certificate of Eligibility for Nonimmigrant Student Status issued by a school certified by the Student and Exchange Visitor Program (SEVP) to an eligible student. You generally need it for the student visa process.",
    },
    {
      q: "What documents are needed for an F-1 visa interview?",
      a: "Common documents include a valid passport, DS-160 confirmation, Form I-20, visa-fee receipt where required, photo, SEVIS I-901 fee confirmation where applicable, and evidence relevant to your academic plans and ability to pay costs. Follow the consulate's current instructions and your individual checklist.",
    },
    {
      q: "How much is the US student visa application fee?",
      a: "The US Department of State currently lists a $185 non-petition-based nonimmigrant visa application fee for F-category visas. The SEVIS I-901 fee is separate, and other fees may apply. Verify the current amounts on the official websites before paying.",
    },
    {
      q: "Can F-1 students work while studying?",
      a: "Employment is restricted and must follow F-1 rules. Eligible students may have limited on-campus work and may qualify for authorised practical training such as CPT or OPT. Do not begin employment without confirming that it is permitted for your situation.",
    },
    {
      q: "Can a consultant guarantee my visa approval?",
      a: "No. Only the US government decides visa applications. Consultancy support cannot guarantee approval, interview availability or processing time.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const universities = [
    ["Massachusetts Institute of Technology (MIT)", "Cambridge, Massachusetts", "https://www.mit.edu/"],
    ["Stanford University", "Stanford, California", "https://www.stanford.edu/"],
    ["Harvard University", "Cambridge, Massachusetts", "https://www.harvard.edu/"],
    ["University of California, Berkeley", "Berkeley, California", "https://www.berkeley.edu/"],
    ["Columbia University", "New York, New York", "https://www.columbia.edu/"],
    ["Princeton University", "Princeton, New Jersey", "https://www.princeton.edu/"],
    ["Yale University", "New Haven, Connecticut", "https://www.yale.edu/"],
    ["University of Pennsylvania", "Philadelphia, Pennsylvania", "https://www.upenn.edu/"],
    ["California Institute of Technology", "Pasadena, California", "https://www.caltech.edu/"],
  ];

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>YOUR STUDY ABROAD JOURNEY STARTS HERE</p>
          <h1>USA Student Visa Guidance for Indian Students</h1>
          <p className={styles.heroText}>
            Planning to study in the United States? Understand the F-1 student visa
            process, Form I-20, SEVIS fee, financial documents and interview preparation
            with guidance from Global Visa Internationals.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#enquiry">Book a Consultation <span aria-hidden="true">→</span></a>
            <a className={styles.secondaryButton} href="#application-process">Explore the Process</a>
          </div>
          <p className={styles.heroNote}>Clear next steps and practical application support. No guarantee of approval.</p>
        </div>
        <div className={styles.heroImageWrap}>
          <img
            src="/student-visa/USA-student-Visa-ASSISTANCE.webp"
            alt="Student visa guidance for students planning to study in the USA"
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
          <p className={styles.eyebrow}>STUDY IN THE UNITED STATES</p>
          <h2>Plan your US education and visa application with confidence</h2>
        </SectionHeading>
        <p className={styles.lead}>
          The United States offers undergraduate, postgraduate, research and vocational
          study options across a wide range of institutions. Your first steps are to
          choose a suitable programme, confirm the institution's eligibility to enrol
          international students, understand the costs and prepare accurate documents.
        </p>
        <p>
          Global Visa Internationals can help you organise your preparation and understand
          the application stages. Admission and visa eligibility are assessed by the
          relevant institutions and US authorities; every applicant's circumstances differ.
        </p>
      </section>

      <section className={styles.featureGrid} aria-label="Our guidance services">
        <article className={styles.featureCard}><span className={styles.featureIcon}>01</span><h3>Study plan guidance</h3><p>Explore programme options that align with your education, interests and career goals.</p></article>
        <article className={styles.featureCard}><span className={styles.featureIcon}>02</span><h3>Document checklist</h3><p>Organise identity, academic and financial evidence and check for missing information.</p></article>
        <article className={styles.featureCard}><span className={styles.featureIcon}>03</span><h3>Application steps</h3><p>Understand Form I-20, SEVIS I-901, DS-160 and the appointment process.</p></article>
        <article className={styles.featureCard}><span className={styles.featureIcon}>04</span><h3>Interview preparation</h3><p>Practise explaining your academic plans truthfully and clearly, in your own words.</p></article>
      </section>

      <section id="requirements" className={styles.contentSection}>
        <SectionHeading className={styles.sectionHeading}><p className={styles.eyebrow}>BEFORE YOU APPLY</p><h2>USA student visa requirements</h2></SectionHeading>
        <p>Requirements depend on your visa category, programme, institution and personal circumstances. For an F-1 application, common items to prepare or verify include:</p>
        <div className={styles.checkGrid}>
          <div className={styles.checkItem}><span>✓</span><div><h3>Admission to an eligible school</h3><p>You must be accepted by a school certified by the Student and Exchange Visitor Program (SEVP).</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>Form I-20</h3><p>Your school issues the Certificate of Eligibility after the required student record and eligibility steps.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>Valid passport</h3><p>Check validity requirements and any country-specific instructions before your appointment.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>Financial evidence</h3><p>Prepare credible evidence of how tuition, living costs and other expenses will be covered.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>DS-160 and appointment</h3><p>Complete the online nonimmigrant visa application and follow the consulate's scheduling instructions.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>SEVIS I-901 fee</h3><p>Check whether the fee applies to you, pay through the official channel and keep the receipt.</p></div></div>
        </div>
        <p className={styles.notice}>Use the official US Department of State student visa page for the latest instructions. A checklist is not a guarantee of eligibility or approval.</p>
      </section>

      <section id="documents" className={`${styles.contentSection} ${styles.softSection}`}>
        <SectionHeading className={styles.sectionHeading}><p className={styles.eyebrow}>GET ORGANISED</p><h2>Documents to prepare</h2></SectionHeading>
        <p>The consular officer may request documents to assess your application. Follow the instructions for your specific appointment and bring accurate, consistent information.</p>
        <DocumentChecklist className={styles.documentList}>
          <li>Valid passport</li>
          <li>DS-160 confirmation page</li>
          <li>Visa application fee receipt, where required</li>
          <li>Form I-20 issued by your school</li>
          <li>SEVIS I-901 payment confirmation, where applicable</li>
          <li>Photo meeting current US visa specifications</li>
          <li>Academic records and test results, if relevant</li>
          <li>Evidence of funds and funding sources</li>
          <li>Information about your intended programme and study plans</li>
          <li>Any additional documents requested by the consulate</li>
        </DocumentChecklist>
        <p className={styles.notice}>Do not submit fabricated documents or memorised answers. Provide truthful information and ask the school or consulate if you are unsure about a requirement.</p>
      </section>

      <section id="application-process" className={styles.contentSection}>
        <SectionHeading className={styles.sectionHeading}><p className={styles.eyebrow}>STEP BY STEP</p><h2>How to apply for a US student visa</h2></SectionHeading>
        <ol className={styles.steps}>
          <li><span>01</span><div><h3>Choose a programme and apply for admission</h3><p>Research the curriculum, entry criteria, total costs and the institution's SEVP certification.</p></div></li>
          <li><span>02</span><div><h3>Receive Form I-20</h3><p>After admission and the school's required checks, review your Form I-20 carefully and contact the school if details are incorrect.</p></div></li>
          <li><span>03</span><div><h3>Pay the SEVIS I-901 fee, if required</h3><p>Use the official payment system and retain proof of payment for your records.</p></div></li>
          <li><span>04</span><div><h3>Complete Form DS-160</h3><p>Enter accurate information and save the confirmation page for your appointment.</p></div></li>
          <li><span>05</span><div><h3>Pay the visa application fee and schedule</h3><p>Follow the instructions from the US Embassy or Consulate handling your application. Appointment availability can vary.</p></div></li>
          <li><span>06</span><div><h3>Prepare for and attend your interview</h3><p>Bring the required documents and explain your study plans clearly and truthfully.</p></div></li>
          <li><span>07</span><div><h3>Wait for the decision and passport instructions</h3><p>Additional administrative processing may apply. Do not make non-refundable travel plans until you understand your visa status.</p></div></li>
        </ol>
      </section>

      <section className={styles.ctaBand}>
        <div><p className={styles.eyebrow}>START WITH A PLAN</p><h2>Need help organising your USA student visa application?</h2><p>Discuss your intended course, timeline and document checklist with our team.</p></div>
        <a className={styles.lightButton} href="#enquiry">Enquire now <span aria-hidden="true">→</span></a>
      </section>

      <section id="costs" className={styles.contentSection}>
        <SectionHeading className={styles.sectionHeading}><p className={styles.eyebrow}>BUDGET AHEAD</p><h2>Costs to consider when studying in the USA</h2></SectionHeading>
        <p>Total costs vary significantly by institution, course, location, duration and personal spending. Request a current estimate directly from your institution and verify government fees before paying.</p>
        <div className={styles.costGrid}>
          <article><span aria-hidden="true">01</span><h3>Tuition and university fees</h3><p>Compare tuition, deposits, course duration and any programme-specific charges.</p></article>
          <article><span aria-hidden="true">02</span><h3>Living expenses</h3><p>Budget for housing, food, transport, books, health insurance and personal expenses.</p></article>
          <article><span aria-hidden="true">03</span><h3>Visa and SEVIS fees</h3><p>The Department of State currently lists a $185 non-petition-based visa application fee for F-category visas. The SEVIS I-901 fee is separate; check current official rates.</p></article>
        </div>
        <p className={styles.notice}>Official references: <a href={feeUrl} target="_blank" rel="noreferrer">US visa fees</a> and <a href={sevisUrl} target="_blank" rel="noreferrer">SEVIS I-901 fee information</a>. Amounts can change and some applicants may have different requirements.</p>
      </section>

      <section id="courses" className={`${styles.contentSection} ${styles.softSection}`}>
        <SectionHeading className={styles.sectionHeading}><p className={styles.eyebrow}>FIND YOUR FIT</p><h2>Popular areas of study</h2></SectionHeading>
        <div className={styles.benefitGrid}>
          <article><h3>Science and technology</h3><p>Computer science, data science, information systems, engineering and mathematics.</p></article>
          <article><h3>Business and management</h3><p>Business administration, finance, marketing, analytics and entrepreneurship.</p></article>
          <article><h3>Health and life sciences</h3><p>Public health, biomedical sciences, biology and related research fields.</p></article>
          <article><h3>Arts and social sciences</h3><p>Economics, psychology, communications, design, social sciences and humanities.</p></article>
          <article><h3>Applied and vocational study</h3><p>Eligible technical or vocational programmes may fall under a different student visa category.</p></article>
          <article><h3>Research and postgraduate study</h3><p>Explore master's and doctoral programmes, research opportunities and funding options.</p></article>
        </div>
      </section>

      <section id="universities" className={styles.contentSection}>
        <SectionHeading className={styles.sectionHeading}><p className={styles.eyebrow}>EXPLORE YOUR OPTIONS</p><h2>Examples of US universities</h2></SectionHeading>
        <p>This is a starting point for research, not a ranking or a guarantee of admission. Compare programme fit, admission criteria, tuition, location and funding with each institution.</p>
        <div className={styles.universityGrid}>
          {universities.map(([name, location, url]) => <a key={name} href={url} target="_blank" rel="noreferrer"><strong>{name}</strong><span>{location} ↗</span></a>)}
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHeading className={styles.sectionHeading}><p className={styles.eyebrow}>UNDERSTAND THE CATEGORY</p><h2>Common US student and exchange visa categories</h2></SectionHeading>
        <div className={styles.checkGrid}>
          <div className={styles.checkItem}><span>F</span><div><h3>F-1 academic student</h3><p>Generally for eligible academic programmes at SEVP-certified schools, including colleges and universities.</p></div></div>
          <div className={styles.checkItem}><span>M</span><div><h3>M-1 vocational student</h3><p>For certain vocational or non-academic programmes. Check the programme and visa requirements.</p></div></div>
          <div className={styles.checkItem}><span>J</span><div><h3>J-1 exchange visitor</h3><p>For designated exchange visitor programmes, subject to programme sponsorship and category rules.</p></div></div>
          <div className={styles.checkItem}><span>↗</span><div><h3>Work and practical training</h3><p>F-1 work options such as CPT or OPT have eligibility and authorisation rules. They are not automatic benefits of every course.</p></div></div>
        </div>
        <p className={styles.notice}>Always confirm your category and any work eligibility with your designated school official and the relevant US government guidance.</p>
      </section>

      <section id="faqs" className={`${styles.contentSection} ${styles.faqSection}`}>
        <SectionHeading className={styles.sectionHeading}><p className={styles.eyebrow}>COMMON QUESTIONS</p><h2>USA student visa FAQs</h2></SectionHeading>
        {faqItems.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        <p className={styles.notice}>Official starting point: <a href={officialVisaUrl} target="_blank" rel="noreferrer">US Department of State — Student Visa</a>.</p>
      </section>

      <section id="enquiry" className={styles.enquirySection}>
        <div className={styles.enquiryIntro}><p className={styles.eyebrow}>LET’S PLAN YOUR NEXT STEP</p><h2>Enquire about USA student visa guidance</h2><p>Share your study plans and the Global Visa Internationals team can follow up with you.</p><a className={styles.phoneLink} href="tel:+917022213466">Call us: +91 70222 13466</a></div>
        <div className={styles.formCard}><VisaForm /></div>
      </section>

      <footer className={styles.footer}><p>This page provides general information, not legal advice or a guarantee of visa approval. US immigration rules, procedures and fees may change. Confirm current requirements with official US government sources and your institution before applying.</p></footer>
      <section className={styles.reviews} aria-label="Client reviews"><ReviewSchema /><ReviewCarousel /></section>
    </main>
  );
}
