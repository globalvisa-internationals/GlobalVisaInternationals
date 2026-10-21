import React from "react";
import VisaForm from "@/Components/VisaForm";
import styles from "./UKStudentVisa.module.css";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

const pageUrl = "https://www.globalvisainternationals.com/Visa/student-visa/uk";
const imageUrl = "https://www.globalvisainternationals.com/student-visa/UK-student-Visa-ASSISTANCE.webp";
const officialVisaUrl = "https://www.gov.uk/student-visa";
const moneyUrl = "https://www.gov.uk/student-visa/money";
const documentsUrl = "https://www.gov.uk/student-visa/documents-you-must-provide";
const feesUrl = "https://www.gov.uk/student-visa";
const ihsUrl = "https://www.gov.uk/healthcare-immigration-application/how-much-pay";
const graduateUrl = "https://www.gov.uk/graduate-visa";

export const metadata = {
  title: "UK Student Visa Consultants in Bangalore | Requirements, Cost & Process | Global Visa Internationals",
  description: "Planning to study in the UK from India? Explore Student visa requirements, CAS, financial evidence, visa fees, Immigration Health Surcharge, documents and application steps with Global Visa Internationals.",
  keywords: [
    "UK student visa consultants Bangalore", "UK student visa from India", "UK Student Route visa requirements",
    "CAS UK student visa", "UK student visa fees", "UK student visa financial requirements", "study in UK for Indian students",
    "UK university admission guidance", "UK student visa documents", "UK student visa application process"
  ],
  authors: [{ name: "Global Visa Internationals" }],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "UK Student Visa Guidance for Indian Students | Global Visa Internationals",
    description: "Understand the UK Student visa route, CAS, financial evidence, application documents, fees and key steps before applying.",
    url: pageUrl,
    siteName: "Global Visa Internationals",
    type: "website",
    locale: "en_IN",
    images: [{ url: imageUrl, width: 1200, height: 630, alt: "UK Student Visa guidance for Indian students" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Student Visa from India | Requirements and Application Guide",
    description: "Explore UK Student visa requirements, CAS, financial evidence and application steps with Global Visa Internationals.",
    images: [imageUrl],
    site: "@GlobalVisaIntl",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function UKStudentVisaPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.globalvisainternationals.com" },
      { "@type": "ListItem", position: 2, name: "Student Visa", item: "https://www.globalvisainternationals.com/Visa/student-visa" },
      { "@type": "ListItem", position: 3, name: "UK Student Visa", item: pageUrl },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    description: "Independent education and visa consultancy offering general guidance to students planning to study abroad.",
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
      "https://www.facebook.com/GlobalVisaInternationals",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/globalvisainternationals",
      "https://x.com/GlobalVisaIntl",
    ],
  };

  const faqItems = [
    {
      q: "What visa do I need to study in the UK?",
      a: "Most eligible international students aged 16 or over applying for an eligible course with a licensed student sponsor use the UK Student visa route. A Child Student visa or another route may apply in different circumstances. Check the official eligibility rules before applying.",
    },
    {
      q: "What is a CAS for a UK Student visa?",
      a: "CAS stands for Confirmation of Acceptance for Studies. Your licensed education provider issues a CAS reference after offering you a place on an eligible course. You need the CAS reference to apply, and you should check that its details are correct.",
    },
    {
      q: "How much money do I need to show for a UK Student visa?",
      a: "You generally need to show outstanding course fees for the relevant academic year and living costs of £1,529 per month for study in London or £1,171 per month outside London, for up to 9 months. Exemptions and evidence rules may apply, so verify the current official guidance for your circumstances.",
    },
    {
      q: "How much does a UK Student visa cost?",
      a: "The current GOV.UK Student visa overview lists an application fee of £558 for applications from outside or inside the UK. The Immigration Health Surcharge is generally separate. Fees can change, so check the official application page before paying.",
    },
    {
      q: "Do I have to pay the Immigration Health Surcharge?",
      a: "Most applicants applying for a visa lasting more than 6 months from outside the UK usually need to pay the Immigration Health Surcharge. The amount depends on the visa duration and current rules. Check the official calculator and guidance before applying.",
    },
    {
      q: "Can I work while studying in the UK?",
      a: "Work permission depends on the course, sponsor and conditions attached to your Student permission. Eligible degree-level students may usually work up to 20 hours per week during term time; some students have lower limits or no permission to work. Check the conditions on your own immigration permission.",
    },
    {
      q: "How long can I stay in the UK after graduating?",
      a: "Eligible graduates may be able to apply for a Graduate visa from inside the UK after their education provider reports successful course completion. Applications made on or before 31 December 2026 generally allow 2 years for eligible non-doctoral qualifications; applications made on or after 1 January 2027 generally allow 18 months. Doctoral graduates can receive 3 years. Check current eligibility and rules.",
    },
    {
      q: "Can a consultant guarantee my visa approval?",
      a: "No. Only UK Visas and Immigration makes the decision. A consultancy can help you understand the process and organise documents, but cannot guarantee a visa, processing time or outcome.",
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
    ["University of Oxford", "Oxford, England", "https://www.ox.ac.uk/"],
    ["University of Cambridge", "Cambridge, England", "https://www.cam.ac.uk/"],
    ["Imperial College London", "London, England", "https://www.imperial.ac.uk/"],
    ["University College London (UCL)", "London, England", "https://www.ucl.ac.uk/"],
    ["The University of Edinburgh", "Edinburgh, Scotland", "https://www.ed.ac.uk/"],
    ["The University of Manchester", "Manchester, England", "https://www.manchester.ac.uk/"],
    ["King's College London", "London, England", "https://www.kcl.ac.uk/"],
    ["The University of Warwick", "Coventry, England", "https://warwick.ac.uk/"],
    ["University of Glasgow", "Glasgow, Scotland", "https://www.gla.ac.uk/"],
    ["University of Bristol", "Bristol, England", "https://www.bristol.ac.uk/"],
    ["Durham University", "Durham, England", "https://www.durham.ac.uk/"],
    ["University of Bath", "Bath, England", "https://www.bath.ac.uk/"],
  ];

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>YOUR UK STUDY JOURNEY STARTS HERE</p>
          <h1>UK Student Visa Guidance for Indian Students</h1>
          <p className={styles.heroText}>
            Planning to study in the United Kingdom? Understand the Student visa route,
            CAS, financial evidence, documents and application steps with guidance from
            Global Visa Internationals.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#enquiry">Book a Consultation <span aria-hidden="true">→</span></a>
            <a className={styles.secondaryButton} href="#application-process">Explore the Process</a>
          </div>
          <p className={styles.heroNote}>Practical application support. No guarantee of visa approval.</p>
        </div>
        <div className={styles.heroImageWrap}>
          <img
            src="/student-visa/UK-student-Visa-ASSISTANCE.webp"
            alt="UK Student Visa guidance for students planning to study in the United Kingdom"
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
        <a href="#requirements">Requirements</a><a href="#documents">Documents</a><a href="#application-process">Application steps</a><a href="#costs">Costs</a><a href="#courses">Courses</a><a href="#universities">Universities</a><a href="#faqs">FAQs</a>
      </nav>

      <section className={styles.introSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>STUDY IN THE UNITED KINGDOM</p>
          <h2>Plan your UK education and visa application with confidence</h2>
        </div>
        <p className={styles.lead}>
          UK universities and colleges offer undergraduate, postgraduate, research and
          professional programmes across a wide range of subjects. Before applying,
          compare course content, entry requirements, total costs, location and student
          support, then check that your course provider is licensed to sponsor students.
        </p>
        <p>
          Global Visa Internationals can help you organise your preparation and understand
          the application stages. Admission decisions and visa eligibility are determined
          by the education provider and UK authorities, and each applicant's circumstances differ.
        </p>
      </section>

      <section className={styles.featureGrid} aria-label="Our guidance services">
        <article className={styles.featureCard}><span className={styles.featureIcon}>01</span><h3>Course planning</h3><p>Compare study options, entry requirements, location and estimated costs.</p></article>
        <article className={styles.featureCard}><span className={styles.featureIcon}>02</span><h3>CAS and documents</h3><p>Understand your CAS reference and organise the supporting document checklist.</p></article>
        <article className={styles.featureCard}><span className={styles.featureIcon}>03</span><h3>Financial preparation</h3><p>Review course fees, living-cost evidence and the applicable financial rules.</p></article>
        <article className={styles.featureCard}><span className={styles.featureIcon}>04</span><h3>Application support</h3><p>Work through the online form, healthcare surcharge and identity steps.</p></article>
      </section>

      <section id="requirements" className={styles.contentSection}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>BEFORE YOU APPLY</p><h2>UK Student visa requirements</h2></div>
        <p>Eligibility depends on your age, course, sponsor and personal circumstances. Common requirements for the Student route include:</p>
        <div className={styles.checkGrid}>
          <div className={styles.checkItem}><span>✓</span><div><h3>Offer from a licensed student sponsor</h3><p>You need an eligible place on a course with an education provider licensed to sponsor students.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>Confirmation of Acceptance for Studies (CAS)</h3><p>Your course provider issues a CAS reference for your visa application after the relevant admission steps.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>Valid passport or travel document</h3><p>Check that your identity and travel document details are correct and meet the current instructions.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>Course fees and living-cost funds</h3><p>Prepare evidence that meets the financial rules applicable to your course and situation.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>English language ability</h3><p>You must meet the relevant English-language requirement. The evidence accepted depends on your course and circumstances.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>Additional checks, if applicable</h3><p>Some applicants may need a TB test, ATAS certificate, sponsor consent or other supporting evidence.</p></div></div>
        </div>
        <p className={styles.notice}>Use the official UK Student visa guidance to confirm your personal eligibility and any exceptions. A checklist does not guarantee approval.</p>
      </section>

      <section id="documents" className={`${styles.contentSection} ${styles.softSection}`}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>GET ORGANISED</p><h2>Documents to prepare</h2></div>
        <p>The documents required vary by applicant. Start with the items below, then follow the exact checklist shown during your application.</p>
       <ul className={styles.documentList}>
  <li><strong>Valid passport:</strong> A current passport or other accepted travel document.</li>
  <li><strong>CAS reference:</strong> Your Confirmation of Acceptance for Studies from your education provider.</li>
  <li><strong>Financial evidence:</strong> Proof that you can cover tuition fees and required living costs, where applicable.</li>
  <li><strong>English language evidence:</strong> Proof of English proficiency, if required.</li>
  <li><strong>Academic documents:</strong> Certificates or transcripts, if required.</li>
  <li><strong>ATAS certificate:</strong> If your course and circumstances require one.</li>
  <li><strong>TB test results:</strong> If required based on your circumstances and country of residence.</li>
  <li><strong>Parental consent:</strong> If you are under 18 and the relevant consent documents are required.</li>
</ul>
        <p className={styles.notice}>Check document format, translation and financial evidence rules on the official website. Never submit false or misleading information.</p>
        <p><a href={documentsUrl} target="_blank" rel="noreferrer">Official GOV.UK document checklist ↗</a></p>
      </section>

      <section id="application-process" className={styles.contentSection}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>STEP BY STEP</p><h2>How to apply for a UK Student visa</h2></div>
        <ol className={styles.steps}>
          <li><span>01</span><div><h3>Research courses and institutions</h3><p>Compare course content, admission criteria, location, tuition fees and the provider's sponsor status.</p></div></li>
          <li><span>02</span><div><h3>Apply and receive an offer</h3><p>Meet the academic and English-language requirements set by your chosen institution.</p></div></li>
          <li><span>03</span><div><h3>Receive your CAS</h3><p>Check the CAS details carefully and ask your provider to correct any errors before applying.</p></div></li>
          <li><span>04</span><div><h3>Prepare financial and supporting evidence</h3><p>Calculate course fees and required living costs, and confirm how funds must be held and evidenced.</p></div></li>
          <li><span>05</span><div><h3>Complete the online visa application</h3><p>Apply within the permitted timeframe, enter accurate information and pay the applicable application fee.</p></div></li>
          <li><span>06</span><div><h3>Pay the healthcare surcharge and prove your identity</h3><p>Follow the instructions for your application, including any appointment or identity verification steps.</p></div></li>
          <li><span>07</span><div><h3>Wait for a decision before travelling</h3><p>Processing times vary. Follow the decision notice and travel only when your immigration permission allows it.</p></div></li>
        </ol>
      </section>

      <section className={styles.ctaBand}>
        <div><p className={styles.eyebrow}>START WITH A PLAN</p><h2>Need help organising your UK Student visa application?</h2><p>Discuss your intended course, timeline and document checklist with our team.</p></div>
        <a className={styles.lightButton} href="#enquiry">Enquire now <span aria-hidden="true">→</span></a>
      </section>

      <section id="costs" className={styles.contentSection}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>BUDGET AHEAD</p><h2>UK Student visa costs and financial requirements</h2></div>
        <p>Budget for tuition, living expenses and immigration-related charges. The figures below are current GOV.UK figures at the time this page was prepared; always verify the amount and rules on the official application pages before paying.</p>
        <div className={styles.costGrid}>
          <article><span aria-hidden="true">£</span><h3>Student visa application fee</h3><p>GOV.UK currently lists £558 for applications made from outside or inside the UK. Fees may change.</p></article>
          <article><span aria-hidden="true">£</span><h3>Immigration Health Surcharge</h3><p>The student rate is generally £776 per year, calculated according to the length of permission. The online application determines the amount due.</p></article>
          <article><span aria-hidden="true">£</span><h3>Required living-cost funds</h3><p>£1,529 per month in London or £1,171 per month outside London, for up to 9 months, plus relevant outstanding course fees. Exceptions can apply.</p></article>
        </div>
        <p className={styles.notice}>Official references: <a href={officialVisaUrl} target="_blank" rel="noreferrer">Student visa overview</a>, <a href={moneyUrl} target="_blank" rel="noreferrer">financial requirements</a> and <a href={ihsUrl} target="_blank" rel="noreferrer">healthcare surcharge</a>. Funds must meet the detailed evidence rules, including any applicable holding period.</p>
      </section>

      <section id="courses" className={`${styles.contentSection} ${styles.softSection}`}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>FIND YOUR FIT</p><h2>Popular areas of study in the UK</h2></div>
        <div className={styles.benefitGrid}>
          <article><h3>Business and management</h3><p>Business administration, management, marketing, entrepreneurship and analytics.</p></article>
          <article><h3>Accounting and finance</h3><p>Accounting, banking, economics, financial management and related disciplines.</p></article>
          <article><h3>Computing and technology</h3><p>Computer science, software engineering, data science, cybersecurity and AI-related study.</p></article>
          <article><h3>Engineering and sciences</h3><p>Mechanical, electrical, civil and chemical engineering, physics and biological sciences.</p></article>
          <article><h3>Law and social sciences</h3><p>Law, international relations, politics, psychology, sociology and public policy.</p></article>
          <article><h3>Creative industries and hospitality</h3><p>Art and design, media, communication, tourism and hospitality management.</p></article>
        </div>
      </section>

      <section id="universities" className={styles.contentSection}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>EXPLORE YOUR OPTIONS</p><h2>Examples of UK universities</h2></div>
        <p>This list is a starting point for research, not a ranking or a guarantee of admission. Compare course suitability, entry requirements, tuition, location and scholarships directly with each institution.</p>
        <div className={styles.universityGrid}>
          {universities.map(([name, location, url]) => <a key={name} href={url} target="_blank" rel="noreferrer"><strong>{name}</strong><span>{location} ↗</span></a>)}
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>PLAN BEYOND ADMISSION</p><h2>Work during study and post-study options</h2></div>
        <div className={styles.checkGrid}>
          <div className={styles.checkItem}><span>✓</span><div><h3>Work during your course</h3><p>Some students on eligible full-time degree-level courses may work up to 20 hours per week during term time. Other course types can have lower limits or no work permission. Check your visa conditions.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>Course-related placements</h3><p>Work placements may be permitted when they meet the relevant course and immigration rules. Confirm arrangements with your institution before starting.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>Graduate visa route</h3><p>Eligible graduates may apply from inside the UK after successful course completion is reported. Non-doctoral Graduate visa duration changes from 2 years to 18 months for applications from 1 January 2027.</p></div></div>
          <div className={styles.checkItem}><span>✓</span><div><h3>Check your next visa route</h3><p>A Graduate visa cannot be extended, though some people may qualify to switch to another route. Eligibility depends on the rules in force at the time.</p></div></div>
        </div>
        <p className={styles.notice}>Official information: <a href={graduateUrl} target="_blank" rel="noreferrer">Graduate visa eligibility and duration</a>. Work rights and post-study options are subject to change and are not guaranteed by admission to a course.</p>
      </section>

      <section id="faqs" className={`${styles.contentSection} ${styles.faqSection}`}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>COMMON QUESTIONS</p><h2>UK Student visa FAQs</h2></div>
        {faqItems.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        <p className={styles.notice}>Official starting point: <a href={officialVisaUrl} target="_blank" rel="noreferrer">GOV.UK — Student visa</a>.</p>
      </section>

      <section id="enquiry" className={styles.enquirySection}>
        <div className={styles.enquiryIntro}><p className={styles.eyebrow}>LET’S PLAN YOUR NEXT STEP</p><h2>Enquire about UK Student visa guidance</h2><p>Share your study plans and the Global Visa Internationals team can follow up with you.</p><a className={styles.phoneLink} href="tel:+917022213466">Call us: +91 70222 13466</a></div>
        <div className={styles.formCard}><VisaForm /></div>
      </section>

      <footer className={styles.footer}><p>This page provides general information, not legal advice or a guarantee of visa approval. UK immigration rules, procedures and fees can change. Confirm current requirements with official GOV.UK sources and your education provider before applying. Global Visa Internationals is an independent consultancy and is not affiliated with the UK Government or UK Visas and Immigration.</p></footer>
      <section className={styles.reviews} aria-label="Client reviews"><ReviewSchema /><ReviewCarousel /></section>
    </main>
  );
}
