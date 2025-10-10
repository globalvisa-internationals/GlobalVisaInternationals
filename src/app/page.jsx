
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import AnimatedSection from "@/Components/AnimatedSection";
import AnimatedHR from "@/Components/AnimatedHR";
import GalleryCarousel from "@/Components/GalleryCarousel";
import ClientVideoCarousel from "@/Components/ClientVideoCarousel";
import FAQAccordion from '@/Components/FAQAccordion';
import { Agbalumo } from "next/font/google";

import MissionVisionValues from "@/Components/missionVisionValues";
import Services from "@/Components/Services";
import WhychoosGVI from "@/Components/whychoosGVI";


const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400", // Only one weight available
});
export const metadata = {
  title: "Top Visa Consultants in Bangalore | USA, Canada, UK,Australia, Europe Visa assistance Experts",
  description: "we are your trusted visa consultant and immigration consultant, providing professional visa services and immigration services customized to suit your travel and settlement needs. Whether you're applying for a work permit, seeking visa assistance, or starting your visa application, our experienced team ensures you meet all necessary visa requirements with ease and confidence",
  keywords: ["visa consultant", "immigration consultant", "visa services", "immigration services", "visa application", "visa requirements", "visa assistance", "work permit", "work visa consultant", "student visa consultant ", "Canada study visa consultant", "UK study visa consultant", "USA study visa consultant", "visa documentation checklist", "visa interview preparation", "Canada tourist visa", "Australia tourist visa", "immigration agent qualifications", "visa processing time", "visa processing agents"],
  alternates: { canonical: "https://www.globalvisainternationals.com/" },
  openGraph: {
    title: "Global Visa Internationals - Trusted Immigration Consultants in Bangalore",
    description:
      "Over 75,000 happy clients. Expert PR, Work, Study & Visit visa services for Canada, Australia, USA, UK and more. Genuine, fast and transparent support.",
    url: "https://www.globalvisainternationals.com",
    siteName: "Global Visa Internationals",
    type: "website",
    images: [
      {
        url: "https://www.globalvisainternationals.com/GVI_Banner.webp",
        width: 1200,
        height: 630,
        alt: "Visa and Immigration Services - Global Visa Internationals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Visa Internationals - Trusted Immigration Consultants in Bangalore",
    description:
      "Over 75,000 happy clients. Expert PR, Work, Study & Visit visa services for Canada, Australia, USA, UK and more.",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    images: ["https://www.globalvisainternationals.com/banner.webp"],
  },
}


const slides = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
];
const testimonialVideos = [
  '/Videos/A-Big-Win-We-are-thrilled-to-announce-that-our-client-has-successfully-obtained-their-Spain-Tourist-UK-Business-visa.webm',
  '/Videos/Another-Grateful-Client-They-trusted-Global-visa-internationals-WE-guided-them-to-get-Germany-visitor-visa-for-whole-5years.webm',
  '/Videos/congratulations Tenzin Gombu! For Getting Uk Visiter Visa.webm',
  '/Videos/Congratulations-Bhavya-and-family-For-receiving-3-Australian-visa-within-a-week.webm',
  '/Videos/Congratulations-on-obtaining-your-UK-visa-Praveen-We-are-pleased-to-inform-you-that-the-previous-refusal-has-been-successfully-overturned.webm',
  '/Videos/Germany-Visitor-Visa-Approved-5-Years.webm',
  '/Videos/Grateful-Clients-Trusted-Guidance-Another-Successful-Australian-Immigration-Journey.webm',
  '/Videos/We-are-thrille- to-announce-that-our-client-has-successfully-obtained-their-Spain-Tourist-UK-Business-visa.webm',
];

const faqs = [
  {
    question: "My visa was refused. Can I reapply?",
    answer:
      "Yes—just address the reasons for the refusal and reapply with the necessary documentation.",
  },
  {
    question: "How can I qualify for the Canada PR Visa Program?",
    answer:
      "Firstly, the candidate should have an eligible occupation under the NOC 0, A, and B for Canada PR Visa...",
  },
  {
    question: "Can my spouse work on a dependent visa?",
    answer:
      "It varies by country; some grant work rights automatically, while others require a separate permit.",
  },
  {
    question: "Can I work on a student visa?",
    answer:
      "Yes, often up to 20 hours per week during term time (and sometimes full-time during breaks).",
  },
  {
    question: "How long is the Portugal Job Seeker Visa valid for?",
    answer:
      "The visa is initially valid for 120 days. If you do not find a job within this period, it can be extended for an additional 60 days, making the total potential stay up to 180 days.",
  },
  {
    question: "Who is eligible for an Austrian job seeker visa?",
    answer:
      "To apply for an Austrian job seeker visa, you must be a Non-EU citizen, have a recognized higher education degree...",
  },
];

export default function Home() {
  const pageUrl = metadata.alternates.canonical;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: pageUrl, // https://www.globalvisainternationals.com
      }
    ]
  };
  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://www.globalvisainternationals.com/#organization",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    description: "Global Visa Internationals is a leading visa and immigration consultancy in Bangalore, offering expert assistance for Tourist, PR, Student, Work, and Business Visas to countries like Canada, Australia, UK, USA, Europe, and more.",
    telephone: "+91-7022213466",
    address: {
      "@type": "PostalAddress",
      streetAddress: "GF-9, Business Point, MG Road",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560025",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "10:00",
        closes: "18:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://www.google.com/maps/place/Global+Visa+Internationals"
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: "https://www.globalvisainternationals.com/contact",
      result: {
        "@type": "Thing",
        name: "Book a Free Visa Consultation"
      }
    }
  };



  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content="Visa and Immigration Services - Global Visa Internationals" />

        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Geo & Mobile SEO */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="12.9716,77.5946" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="p:domain_verify" content="eb589ecd94088c14d3f8566f395cf4b7" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }} />

      </Head>

      <main className={styles.HomeSec}>
        {/* Background Image with Correct Styling */}

        <div className={styles.logoCard}>
          <img
            src="https://www.globalvisainternationals.com/svg/World-Map.gif"
            alt="World Map"
            className={styles.worldMap}
          />
          <div className={styles.logoWrapper}>
            <img
              src="https://www.globalvisainternationals.com/Global-Visa-Internationals-Logo.svg"
              alt="Global Visa Internationals Logo"
              className={styles.logoImage}
            />
            <p className={styles.tagline}>
              Your Passport To The World Starts With Us
            </p>
          </div>
        </div>



        <h1 className={styles.waveText}>
          The Visa And Immigration Assistance Experts  |  We Deal With All Type Of Visas
        </h1>


        {/* About Us Section */}
        <section id="aboutUs">

          <h2 className={styles.subtitle}>Our Story</h2>
          <section className={styles.storyContainer}>

            {/* Left Image */}

            <div className={styles.imageWrapper}>
              <img className={styles.responsiveImage} src="https://www.globalvisainternationals.com/images/story.webp" alt="Best visa agents in Bangalore" />
            </div>
            {/* Right Text */}
            <div className={styles.textContent}>
              <p>At Global Visa Internationals, we understand that applying for a visa can feel  overwhelming. That's why we're more than just a visa consultancy — we're your  trusted partners throughout the journey. With years of experience as a  professional immigration service provider, our team has helped countless  individuals, families, and professionals achieve their travel and relocation goals  with confidence and peace of mind.</p>
              <p>For students, we know how big the dream of studying abroad is. As one of the best student visa consultants in India, we guide you step by step — from preparing  the visa documentation checklist to visa interview training. Whether it's a  Canada student visa, UK study visa, USA student visa, or Australia study visa,  our goal is to make your journey smooth and stress-free. We also assist travelers  with tourist visas, including Canada visitor visas, Australia tourist visas, and Schengen visas for Europe.</p>
              <p>What makes us different is the people behind the process. Our team of  certified visa consultants and immigration specialists genuinely care about your  success. We work to reduce waiting times, minimize errors, and improve approval  rates. Whether it's a work visa, study visa, tourist visa, or business visa,  you'll find in us a partner who provides end-to-end visa solutions with clarity,  transparency, and dedication.</p>
            </div>
          </section>
        </section>

        <AnimatedHR direction="left" duration={1.2} />
        <WhychoosGVI />
        <p className={styles.note}><strong>Disclaimer:</strong> Global Visa Internationals is a private visa consultancy and is not affiliated with any government or embassy. We provide independent visa and immigration assistance services.</p>

        <AnimatedHR direction="left" duration={1.2} />

        <section id="gallery">
          <h2 className={styles.subtitle}>Gallery</h2>
          <GalleryCarousel slides={slides} />
        </section>

        <AnimatedHR direction="left" duration={1.2} />

        <section id="Our Values">
          <h2 className={styles.subtitle}>Our Values</h2>
          <MissionVisionValues />
        </section>

        <h2 className={styles.subtitle}>Services</h2>
        <Services />


        <AnimatedHR direction="left" duration={1.2} />

        {/* === Form + Map Section === */}
        <section className={styles.dataForm}>
          <div className={styles.formSection}>
            <VisaForm />
          </div>

          <div className={styles.mapSection}>
            <iframe
              className={styles.iframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.00853848403034!2d77.60577367689068!3d12.967480835531479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d5613d9a4b%3A0xea0b2fbdf4f08876!2sGlobal%20Visa%20Internationals!5e0!3m2!1sen!2sin!4v1741000774951!5m2!1sen!2sin"

              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </section>

        <section className={styles.faqSection}>
          <FAQAccordion faqs={faqs} />
        </section>

        <p className={styles.note}>  {" "}  This service is provided by Global Visa Internationals, an independent  consultancy. We are not affiliated with the Australian Government or  any embassy.</p>


      </main >
    </>
  );
}


{/* <h2 className={styles.subtitle}> Contact</h2> */ }

{/* <AnimatedHR direction="left" duration={1.2} /> */ }

{/* <section id={styles.clientReview}>
          <h2 id={styles.clientVideo} className={styles.subtitle}>
            Client Testimonial{" "}
          </h2>
          <ClientVideoCarousel videos={testimonialVideos} />
        </section>  */}
