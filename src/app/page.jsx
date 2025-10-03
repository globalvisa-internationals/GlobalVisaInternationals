
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

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }} />

      </Head>

      <main className={styles.HomeSec}>
        {/* Background Image with Correct Styling */}
        <AnimatedSection direction="up" reverseOnExit={true}>
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
        </AnimatedSection>

        <AnimatedSection direction="up" reverseOnExit={true}>

          <h1 className={styles.waveText}>
            The Visa And Immigration Assistance Experts
            |
            We Deal With All Type Of Visas
          </h1>
        </AnimatedSection>

        {/* About Us Section */}
        <section id="aboutUs">
          <AnimatedSection direction="up" reverseOnExit={true}>
            <h2 className={styles.subtitle}>Our Story</h2></AnimatedSection>
          <section className={styles.storyContainer}>

            {/* Left Image */}
            <AnimatedSection direction="left" reverseOnExit={true}>
              <div className={styles.imageWrapper}>
                <img className={styles.responsiveImage} src="https://www.globalvisainternationals.com//images/story.webp" alt="Best visa agents in Bangalore" />
              </div>
            </AnimatedSection>

            {/* Right Text */}
            <div className={styles.textContent}>
              {/* Sequential Animated Cards */}
              <AnimatedSection direction="up" delay={0.1} reverseOnExit={true}>

                <div className={styles.storyCard}>
                  <p>  At <b>Global Visa Internationals</b>, we understand that applying for a visa can feel  overwhelming. That’s why we’re more than just a <b>visa consultancy</b> — we’re your  trusted partners throughout the journey. With years of experience as a  <b>professional immigration service provider</b>, our team has helped countless  individuals, families, and professionals achieve their travel and relocation goals  with confidence and peace of mind.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2} reverseOnExit={true}>
                <div className={styles.storyCard}>
                  <p>  For students, we know how big the dream of studying abroad is. As one of the  <b>best student visa consultants in India</b>, we guide you step by step — from preparing  the <b>visa documentation checklist</b> to <b>visa interview training</b>. Whether it’s a  <b>Canada student visa</b>, <b>UK study visa</b>, <b>USA student visa</b>, or <b>Australia study visa</b>,  our goal is to make your journey smooth and stress-free. We also assist travelers  with <b>tourist visas</b>, including <b>Canada visitor visas</b>, <b>Australia tourist visas</b>, and  <b>Schengen visas</b> for Europe.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3} reverseOnExit={true}>
                <div className={styles.storyCard}>

                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.3} reverseOnExit={true}>
                <div className={styles.storyCard}>
                  <p>  What makes us different is the people behind the process. Our team of  <b>certified visa consultants</b> and immigration specialists genuinely care about your  success. We work to reduce waiting times, minimize errors, and improve approval  rates. Whether it’s a <b>work visa</b>, <b>study visa</b>, <b>tourist visa</b>, or <b>business visa</b>,  you’ll find in us a partner who provides <b>end-to-end visa solutions</b> with clarity,  transparency, and dedication.
                  </p>
                </div>
              </AnimatedSection>


            </div>

          </section>
        </section>



        <AnimatedHR direction="left" duration={1.2} />

        <section className={styles.whyChooseContainer} id="Why Global Visa Internationals?">
          <AnimatedSection direction="down" reverseOnExit={true}>
            <h2 className={styles.subtitle}>Why Global Visa Internationals?</h2>
          </AnimatedSection>

          {/* Main Description */}
          <AnimatedSection direction="down" reverseOnExit={true}>
            <p>  At <strong>Global Visa Internationals</strong>, we specialize in comprehensive  <strong> visa consultation services</strong>, helping individuals and families  successfully navigate the complex visa process for over <strong>9+ years</strong>.  Based in <strong>Bangalore</strong>, we've processed  <strong> 55,000+ visas</strong> and conducted over  <strong> 75,000 expert consultations</strong> across major visa categories.</p>
            <p>  While we do not issue visas or represent any government body, our certified  consultants offer <strong>personalized advisory</strong>,  <strong> documentation support</strong>, and <strong>eligibility guidance</strong>  for all visa types.</p>
          </AnimatedSection>

          {/* SIDE-BY-SIDE CARDS */}
          <div className={styles.serviceCards}>
            <AnimatedSection direction="left" reverseOnExit={true}>
              <div className={styles.serviceCard}>
                <h3>Our Services Include:</h3>
                <ul>
                  <li>Student Visa Assistance & Study Abroad Planning</li>
                  <li>Work Visa Consultation for Professionals</li>
                  <li>Tourist & Visitor Visa Assistance for Indian Citizens</li>
                  <li>Business Travel Visa Assistance</li>
                  <li>Permanent Residency (PR) Visa Guidance</li>
                  <li>Skilled Migration Visa Support</li>
                  <li>Spouse & Dependent Visa Assistance</li>
                  <li>Refused Visa Reapplication & Review Services</li>
                  <li>And more customized solutions…</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" reverseOnExit={true}>
              <div className={styles.serviceCard}>
                <h3>Popular Visa Destinations:</h3>
                <ul>
                  <li>Canada Visa Assistance – Study, Work, PR</li>
                  <li>Australia PR Visa Consulting</li>
                  <li>UK Student Visa Assistance</li>
                  <li>USA Visitor & Student Visa Guidance</li>
                  <li>Europe Schengen Visa Assistance</li>
                  <li>And many more global destinations…</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Bottom Description */}
          <AnimatedSection direction="down" reverseOnExit={true}>
            <p>  Whether you're planning to <strong>work in Australia</strong>,  <strong> study in Canada</strong>, or <strong>travel to Europe</strong>,  our consultancy provides step-by-step guidance tailored to your goals.</p>
            <p>  <strong>Disclaimer:</strong> Global Visa Internationals is a private visa  consultancy and is not affiliated with any government or embassy.  We provide independent visa and immigration assistance services.</p>
          </AnimatedSection>
        </section>


        <AnimatedSection direction="down" reverseOnExit={true}>
          <section>
            <div className={styles.whyGrid}>
              <div className={styles.whyCard}>
                <img
                  className={styles.whyImg}
                  src="https://www.globalvisainternationals.com//images/networking.png"
                  alt="Visa and immigration industry experience"
                  loading="lazy"
                />
                <strong>75+</strong>
                <p>Years of combined visa & immigration industry experience</p>
              </div>

              <div className={styles.whyCard}>
                <img
                  className={styles.whyImg}
                  src="https://www.globalvisainternationals.com//images/globe.png"
                  alt="Immigration destinations offered"
                  loading="lazy"
                />
                <strong>15+</strong>
                <p>
                  Countries offered for study, work & PR immigration services
                </p>
              </div>

              <div className={styles.whyCard}>
                <img
                  className={styles.whyImg}
                  src="https://www.globalvisainternationals.com//images/crowd-of-users.png"
                  alt="Skilled migration and business visa options"
                  loading="lazy"
                />
                <strong>50+</strong>
                <p>Visa options including skilled migration & business visas</p>
              </div>

              <div className={styles.whyCard}>
                <img
                  className={styles.whyImg}
                  src=" https://www.globalvisainternationals.com//images/airplane.png"
                  alt="Successful immigration cases"
                  loading="lazy"
                />
                <strong>35,000+</strong>
                <p>Successful visa & immigration cases processed worldwide</p>
              </div>

              <div className={styles.whyCard}>
                <img
                  className={styles.whyImg}
                  src="https://www.globalvisainternationals.com//images/calendar.png"
                  alt="Visa consultancy since 2017"
                  loading="lazy"
                />
                <strong>Since 2017</strong>
                <p>Over a decade of visa consulting excellence in India</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedHR direction="left" duration={1.2} />

        <AnimatedSection direction="down" reverseOnExit={true}>
          <section id="Client Reviews">
            <div
              className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5"
              data-elfsight-app-lazy
            ></div>
          </section>
        </AnimatedSection>

        <AnimatedSection direction="up" reverseOnExit={true}>
          <section id="gallery">
            <h2 className={styles.subtitle}>Gallery</h2>
            <GalleryCarousel slides={slides} />
          </section>
        </AnimatedSection>

        <AnimatedHR direction="left" duration={1.2} />

        <section id="Our Values">
          <h2 className={styles.subtitle}>Our Values</h2>

          <section className={styles.missionVisionValues}>
            <AnimatedSection direction="right" reverseOnExit>
              <div className={styles.missionCard}>
                <img
                  className={styles.custImg}
                  src="/gviVMV/mission-icon.png"
                  alt="Mission Icon"
                  loading="lazy"
                />
                <h3>Our Mission</h3>
                <p>  We aim to simplify international visa and immigration processes  with expert guidance, ethical support, and end-to-end assistance,  empowering students, professionals, and families to achieve  their global aspirations with confidence.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="down" reverseOnExit>
              <div className={styles.visionCard}>
                <img
                  className={styles.custImg}
                  src="/gviVMV/vision-icon.png"
                  alt="Vision Icon"
                  loading="lazy"
                />
                <h3>Our Vision</h3>
                <p>  To be the most trusted and innovative visa consultancy, helping  people overcome borders and create opportunities worldwide  through reliable, transparent, and client-focused solutions.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" reverseOnExit>
              <div className={styles.valuesCard}>
                <img
                  className={styles.custImg}
                  src="/gviVMV/values-icon.png"
                  alt="Core Values Icon"
                  loading="lazy"
                />
                <h3>Core Values</h3>
                <p>  Transparency, Client-First, Empathy, Accountability, and a  Global Perspective guide everything we do to support your  international journey.</p>
              </div>
            </AnimatedSection>
          </section>
        </section>


        {/* <AnimatedHR direction="left" duration={1.2} /> */}


        <AnimatedSection direction="up" reverseOnExit={true}>
          <h2 className={styles.subtitle}>Services</h2>
          <section className={styles.services}>

            <div className={styles.visaCard}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.top1}>
                    <img src="/svg/Tourist-Visa.webp" alt="Tourist Visa" />
                    <h3>Tourist Visa</h3>
                  </div>
                  <div className={styles.top2}>Quick & hassle-free tourist visa assistance.</div>
                </div>
                <div className={styles.cardBack}>
                  <h3>Tourist Visa</h3>
                  <ul>
                    <li><a href="/Visa/tourist-visa/canada-tourist-visa">CANADA</a></li>
                    <li><a href="/Visa/tourist-visa/australia-tourist-visa">AUSTRALIA</a></li>
                    <li><a href="/Visa/tourist-visa/usa-tourist-visa">USA</a></li>
                    <li><a href="/Visa/tourist-visa/uk-tourist-visa">UK</a></li>
                    <li><a href="/Visa/tourist-visa/europe-tourist-visa">EUROPE</a></li>
                    <li><a href="/Visa/tourist-visa/japan-tourist-visa">JAPAN</a></li>
                    <li><a href="/Visa/tourist-visa/dubai-tourist-visa">DUBAI</a></li>
                    <li><a href="/Visa/tourist-visa/singapore-tourist-visa">SINGAPORE</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Visa */}
            <div className={styles.visaCard}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.top1}>
                    <img src="/svg/business-visa.webp" alt="Business Visa" />
                    <h3>Business Visa</h3>
                  </div>
                  <div className={styles.top2}>Professional support for business visas.</div>
                </div>
                <div className={styles.cardBack}>
                  <h3>Business Visa</h3>
                  <ul>
                    <li><a href="/Visa/business/canada">CANADA</a></li>
                    <li><a href="/Visa/business/australia">AUSTRALIA</a></li>
                    <li><a href="/Visa/business/uk">UK</a></li>
                    <li><a href="/Visa/business/europe">EUROPE</a></li>
                    <li><a href="/Visa/business/new-zealand">NEW-ZEALAND</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PR Visa */}
            <div className={styles.visaCard}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.top1}>
                    <img src="/svg/PR-Visa.webp" alt="PR Visa" />
                    <h3>PR Visa</h3>
                  </div>
                  <div className={styles.top2}>Guidance for permanent residency visas.</div>
                </div>
                <div className={styles.cardBack}>
                  <h3>PR Visa</h3>
                  <ul>
                    <li><a href="/Visa/permanent-residency-visa/canada">CANADA</a></li>
                    <li><a href="/Visa/permanent-residency-visa/australia">AUSTRALIA</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Student Visa */}
            <div className={styles.visaCard}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.top1}>
                    <img src="/svg/student-visa.webp" alt="Student Visa" />
                    <h3>Student Visa</h3>
                  </div>
                  <div className={styles.top2}>Study abroad made simple and fast.</div>
                </div>
                <div className={styles.cardBack}>
                  <h3>Student Visa</h3>
                  <ul>
                    <li><a href="/Visa/student-visa/canada">CANADA</a></li>
                    <li><a href="/Visa/student-visa/australia">AUSTRALIA</a></li>
                    <li><a href="/Visa/student-visa/usa">USA</a></li>
                    <li><a href="/Visa/student-visa/uk">UK</a></li>
                    <li><a href="/Visa/student-visa/europe">EUROPE</a></li>
                    <li><a href="/Visa/student-visa/new-zealand">NEW-ZEALAND</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dependent Visa */}
            <div className={styles.visaCard}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.top1}>
                    <img src="/svg/Dependent Visa.webp" alt="Dependent Visa" />
                    <h3>Dependent Visa</h3>
                  </div>
                  <div className={styles.top2}>Bring your family to live with you abroad.</div>
                </div>
                <div className={styles.cardBack}>
                  <h3>Dependent Visa</h3>
                  <ul>
                    <li><a href="/Visa/Dependent/canada">CANADA</a></li>
                    <li><a href="/Visa/Dependent/australia">AUSTRALIA</a></li>
                    <li><a href="/Visa/Dependent/uk">UK</a></li>
                    <li><a href="/Visa/Dependent/europe">EUROPE</a></li>
                    <li><a href="/Visa/Dependent/new-zealand">NEW-ZEALAND</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Refusal Visa */}
            <div className={styles.visaCard}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.top1}>
                    <img src="/svg/refusal visa.webp" alt="Refusal Visa" />
                    <h3>Refusal Visa</h3>
                  </div>
                  <div className={styles.top2}>Get expert help to overcome visa refusals.</div>
                </div>
                <div className={styles.cardBack}>
                  <h3>Refusal Visa</h3>
                  <ul>
                    <li><a href="/Visa/refusal-visa/canada">CANADA</a></li>
                    <li><a href="/Visa/refusal-visa/australia">AUSTRALIA</a></li>
                    <li><a href="/Visa/refusal-visa/usa">USA</a></li>
                    <li><a href="/Visa/refusal-visa/uk">UK</a></li>
                    <li><a href="/Visa/refusal-visa/europe">EUROPE</a></li>
                    <li><a href="/Visa/refusal-visa/japan">JAPAN</a></li>
                    <li><a href="/Visa/refusal-visa/dubai">DUBAI</a></li>
                    <li><a href="/Visa/refusal-visa/singapore">SINGAPORE</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedHR direction="left" duration={1.2} />

        {/* <h2 className={styles.subtitle}> Contact</h2> */}
        <section className={styles.dataForm}>
          <div className={styles.formSection}>
            <VisaForm />
          </div>

          <div className={styles.faqSection}>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* <AnimatedHR direction="left" duration={1.2} /> */}

        {/* <section id={styles.clientReview}>
          <h2 id={styles.clientVideo} className={styles.subtitle}>
            Client Testimonial{" "}
          </h2>
          <ClientVideoCarousel videos={testimonialVideos} />
        </section> */}

        <section>
          <div className={styles.containerLoc}>
            <div className={styles.map}>
              <iframe
                className={styles.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.00853848403034!2d77.60577367689068!3d12.967480835531479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d5613d9a4b%3A0xea0b2fbdf4f08876!2sGlobal%20Visa%20Internationals!5e0!3m2!1sen!2sin!4v1741000774951!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                {" "}
              </iframe>
            </div>
          </div>
        </section>

        <p className={styles.note}>  {" "}  This service is provided by Global Visa Internationals, an independent  consultancy. We are not affiliated with the Australian Government or  any embassy.</p>
      </main>
    </>
  );
}