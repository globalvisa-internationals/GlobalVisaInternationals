import Image from "next/image";
import styles from "./about.module.css";
import React from "react";
import VisaForm from "@/Components/VisaForm";
import AnimatedHR from "@/Components/AnimatedHR";
import ReviewCarousel from "@/Components/ReviewCarousel";
import { ReviewSchema } from "@/Components/ReviewSchema";

// ---------------------------
// ✅ NEXT.JS METADATA API
// ---------------------------
export const metadata = {
  title: "About Us | Global Visa Internationals – Leading Visa & Immigration Consultants in Bangalore",
  description:
    "Learn more about Global Visa Internationals, a trusted visa and immigration consultancy in Bangalore. We assist with Student, Tourist, Work, PR & Business visas with 75,000+ happy clients.",
  keywords: [
    "Global Visa Internationals",
    "visa consultants in Bangalore",
    "immigration consultants in Bangalore",
    "study visa experts",
    "tourist visa assistance",
    "work permit consultants",
    "PR visa consultants",
    "Canada visa consultant",
    "Australia visa consultant",
    "UK visa consultant",
    "USA visa consultant"
  ],
  alternates: {
    canonical: "https://www.globalvisainternationals.com/about-us",
  },

  openGraph: {
    title: "About Us | Global Visa Internationals – Trusted Immigration Consultants in Bangalore",
    description:
      "Discover Global Visa Internationals, experts in PR, Work, Study & Visit visas for Canada, Australia, USA, UK, and Europe.",
    url: "https://www.globalvisainternationals.com/about-us",
    siteName: "Global Visa Internationals",
    type: "website",
    images: [
      {
        url: "https://www.globalvisainternationals.com/GVI_Banner.webp",
        width: 1200,
        height: 630,
        alt: "About Global Visa Internationals",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Global Visa Internationals – Trusted Immigration Consultants",
    description:
      "Learn about Global Visa Internationals, offering PR, Work, Study & Tourist visa support with 75,000+ satisfied clients.",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    images: ["https://www.globalvisainternationals.com/GVI_Banner.webp"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

// ---------------------------
// ✅ JSON-LD SCHEMA (MULTIPLE)
// ---------------------------
function StructuredData() {
  const pageUrl = "https://www.globalvisainternationals.com/about-us";

  const jsonData = [
    // Breadcrumb
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
          name: "About Us",
          item: pageUrl,
        },
      ],
    },

    // Organization
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com",
      logo: "https://www.globalvisainternationals.com/gvilogo.png",
      sameAs: [
        "https://www.facebook.com/globalvisainternationals/",
        "https://www.instagram.com/globalvisa_internationals/",
        "https://www.linkedin.com/company/global-visa-internationals/",
        "https://x.com/GLOBALVISA1505",
        "https://www.youtube.com/@globalVisaInternationals",
      ],
    },

    // Local Business
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Global Visa Internationals",
      image: "https://www.globalvisainternationals.com/GVI_Banner.webp",
      telephone: "+91-7022213466",
      address: {
        "@type": "PostalAddress",
        streetAddress: "GF-9, Business Point, MG Road",
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
      openingHoursSpecification: {
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
    },

    // Travel Agency
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: "Global Visa Internationals",
      url: "https://www.globalvisainternationals.com",
      description:
        "Global Visa Internationals is a leading consultant in Tourist, Work, PR, Student, and Business visas.",
      telephone: "+91-7022213466",
      logo: "https://www.globalvisainternationals.com/gvilogo.png",
      sameAs: [
        "https://www.facebook.com/globalvisainternationals/",
        "https://www.instagram.com/globalvisa_internationals/",
        "https://www.linkedin.com/company/global-visa-internationals/",
        "https://www.youtube.com/@globalVisaInternationals",
      ],
    },

    // WebSite
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://www.globalvisainternationals.com",
      name: "Global Visa Internationals",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.globalvisainternationals.com/search?query={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    // WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "About Us – Global Visa Internationals",
      url: pageUrl,
    },

    // Services Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Visa & Immigration Services",
      provider: {
        "@type": "Organization",
        name: "Global Visa Internationals",
      },
      areaServed: "Worldwide",
      serviceType: [
        "Student Visa",
        "Tourist Visa",
        "Work Visa",
        "Business Visa",
        "PR Visa",
      ],
    },

    // FAQ Page Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you provide Tourist Visa assistance?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, we help with documentation, application filing, travel support, and interview guidance.",
          },
        },
        {
          "@type": "Question",
          name: "How many countries do you support?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "We assist with visas for over 30+ countries including Canada, USA, UK, Australia, and Europe.",
          },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
    />
  );
}

// ---------------------------
// PAGE UI
// ---------------------------
export default function About() {
  return (
    <>
      {/* Inject All Schema JSON-LD */}
      <StructuredData />
      <div className={styles.heroBanner}>
        <img
          src="https://www.globalvisainternationals.com/GVI_Banner.webp"
          alt="About Global Visa Internationals"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.visaSection}>
        <h1 className={styles.sectionTitle}>Global Visa Internationals – Your Trusted Immigration & Visa Experts</h1>

        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>At Global Visa Internationals our mission is to make global travel and immigration feel simple and easy to understand. The company was started by our founder Mrs Anusha Prashanth who has over ten years of real experience in the visa and immigration field. We have supported more than 55000 people to get their visas and guided over 75000 clients who are looking for better global mobility options.</p>

              <p>We run offices in London UK for UK visa services and in Bangalore India for all major India visa support. This gives us both a wide global view and the local knowledge that most people really need. If you want to study in another country or search for work with the right permits or join your family abroad we offer simple visa help that is shaped around what you want for your next step.</p>

              <h2>Meet the Visionary Behind Our Success</h2>
              <p>Mrs Anusha Prashanth leads a skilled and friendly team who try their best to make the visa process smooth and stress free. Her guidance helps many travellers take confident steps toward their international goals.</p>
            </div>

          </div>

          <div className={styles.founderImageContainer}>
            <img className={styles.founderImage} src="https://www.globalvisainternationals.com/images/founder.jpg" alt="Anusha Prashanth" />
          </div>
        </section>

        <AnimatedHR direction="left" duration={1.2} />

        <div className={styles.contentSection}>
          <div className={styles.contentMain}>
            <h2 className={styles.sectionTitle}>Why Trust Global Visa Internationals for Your Immigration Needs</h2>

            <p>
              Trust is not just a fancy word at Global Visa Internationals
              It is the heart of everything we do. After helping people for more than a decade in the immigration field and guiding thousands of happy clients we have slowly built a name that people feel safe with. Our work speaks for itself and many families and professionals from different countries choose us because they see real honesty real support and real results.
            </p>

            <ul>
              <li><strong className={styles.highlightText}>Strong Track Record </strong> We have worked with more than 75000 clients in different visa categories like visitor visas student visas work permits dependent visas and even visa refusal cases. Our steady success rate comes from a clear understanding of visa rules documentation and how immigration systems work in real life.</li>

              <li><strong className={styles.highlightText}>Guidance Step by Step </strong> Our team gives clear and practical guidance that matches your personal goals. Whether you are applying for the first time or you already travelled before we make sure you feel confident at every step of the journey.</li>

              <li><strong className={styles.highlightText}>Honest Approach </strong> We keep things simple and truthful. No confusing information no fake promises. Everything we explain is based on real facts and current rules because your trust matters more than anything.</li>

              <li><strong className={styles.highlightText}>Full Support from Start to End </strong> We assist with everything including document checks visa file preparation interview help appointment support and after approval guidance. You can relax while we take care of the tricky parts.</li>

              <li><strong className={styles.highlightText}>Global View with Local Experience </strong> Our offices in Bengaluru and London help us understand both local and international expectations. This balance gives our clients a smooth and realistic experience.</li>
            </ul>

            <AnimatedHR direction="left" duration={1.2} />

            <h3>Our Key Strengths</h3>

            <ul>
              <li><strong className={styles.highlightText}>Who We Are </strong><br />
                Global Visa Internationals is a friendly and dependable visa consultancy that aims to make your travel study and migration plans possible. We do not just fill forms for you. We offer complete support with honesty care and the right method.</li>

              <li><strong className={styles.highlightText}>11 Plus Years of Experience</strong><br />
                With more than eleven years in this field we have seen how immigration rules keep changing and we understand what documents are really required and how different embassies work.</li>

              <li><strong className={styles.highlightText}>High Success Rate</strong><br />
                Our success rate stays strong because we focus on correct planning and neat documentation. Many clients reach success because we always try to improve the chances with the right process.</li>

              <li><strong className={styles.highlightText}>Honesty and Clarity</strong><br />
                From the first day we try to keep everything clear. We do not give false hope or unnecessary talk. Your case is handled using real details and practical guidance.</li>

              <li><strong className={styles.highlightText}>Personalized Support</strong><br />
                Every client is different so we do not follow a one size method. We study your profile your purpose of travel and your dream country then share the best path that suits you.</li>

              <li><strong className={styles.highlightText}>Strong Global Network</strong><br />
                With our teams in India and the United Kingdom we have exposure to global practices as well as local requirements. This helps us support clients more effectively.</li>

              <li><strong className={styles.highlightText}>Complete Visa Assistance</strong><br />
                We help with profile study document list preparation form filing visa submission appointment booking mock interviews and even after visa support. Everything is handled in one place so you do not have to struggle.</li>

              <li><strong className={styles.highlightText}>Clients Come First</strong><br />
                We always try to respond as fast as we can solve doubts and make your full visa experience smooth and stress free.</li>
            </ul>

            <h4>Visa Services We Offer</h4>

            <p>We support a wide range of visa categories like</p>
            <ol>
              <li>Tourist and Visitor Visas</li>
              <li>Work Visas and Work Permits</li>
              <li>Student Visas and Study Abroad Guidance</li>
              <li>Business and Investor Visas</li>
              <li>Dependent Family and Spouse Visas</li>
              <li>Visa Refusal Review and Re application Help</li>
              <li>Visa Appeal Support</li>
              <li>Permanent Residency Pathway Advice</li>
            </ol>

            <h4>Countries We Guide For</h4>

            <ul>
              <li>United States of America</li>
              <li>United Kingdom</li>
              <li>Schengen Europe</li>
              <li>Canada</li>
              <li>Australia</li>
              <li>New Zealand</li>
              <li>Japan</li>
              <li>Singapore</li>
              <li>United Arab Emirates</li>
              <li>And more than twenty other destinations</li>
            </ul>

            <div className={styles.salesPitch}>
              <p>
                <b className={styles.strong}>Let Global Visa Internationals help you get through your full visa process without stress</b>
                We work carefully on documentation and filing to make the full journey smooth and simple for you.
              </p>

              <ul>
                <li><b className={styles.strong}>Document Support </b> We check and prepare all papers based on embassy standards.</li>
                <li><b className={styles.strong}>Form Filing </b> Forms are filled with accuracy by our trained team.</li>
                <li><b className={styles.strong}>Case Planning </b> We share a personalized plan based on your profile.</li>
                <li><b className={styles.strong}>Professional Drafting </b> Cover letters SOP and supporting letters included.</li>
                <li><b className={styles.strong}>Notary Help </b> If required we guide with notarization too.</li>
                <li><b className={styles.strong}>Smooth Flow </b> You only attend biometrics and we manage the rest.</li>
                <li><b className={styles.strong}>Regular Tracking </b> We keep an eye on your file until the final decision arrives.</li>
              </ul>

              <p><b className={styles.strong}>With GVI the full visa journey becomes smoother simpler and worry free</b></p>

              <a href="tel:+917022213466" className={styles.callButton}>
                📞 Free Eligibility Check
              </a>
            </div>

            <p>
              <strong>Client Focused Care</strong><br />
              We treat every client with kindness patience and commitment. Our goal is to help you move ahead in your journey with the least stress and the best possible support.
            </p>

            <p className={styles.disclaimer}>
              This service is provided by Global Visa Internationals an independent consultancy. We are not linked to the Australian Government or any embassy.
            </p>
          </div>

          <div className={styles.formContainer}>
            <VisaForm />
          </div>
        </div>
      </div>
      <section>
        <ReviewSchema />
        <ReviewCarousel />
      </section>
    </>
  );
}
