
import Head from 'next/head';
import styles from './page.module.css';
import Image from 'next/image';

import React from 'react';
import VisaForm from '@/Components/VisaForm';


export const metadata = {
  title: "Contact Global Visa Internationals | Best Visa & Immigration Consultants in India",
  description:
    "Get in touch with Global Visa Internationals – India's trusted visa consultants. Visit our Bangalore office or call us for visa assistance, documentation help, and immigration support.",
  keywords:
    "visa consultants India, contact Global Visa Internationals, visa assistance Bangalore, immigration consultant contact, visa help India, apply for visa India, Global Visa office, visa support contact",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/contact",
  },
  openGraph: {
    title: "Contact Global Visa Internationals | Talk to Expert Visa Agents",
    description:
      "Need help with your visa application? Call or visit Global Visa Internationals in Bangalore for expert assistance with visitor, student, work, and PR visas.",
    url: "https://www.globalvisainternationals.com/contact",
    siteName: "Global Visa Internationals",
    images: [
      {
        url: "https://www.globalvisainternationals.com/gvilogo.png",
        width: 800,
        height: 600,
        alt: "Global Visa Internationals Logo",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "Get in Touch with Global Visa Experts | Contact Page",
    description:
      "Reach out to Global Visa Internationals for end-to-end visa support. Trusted agents for tourist, work, student, and PR visas. Based in Bangalore, India.",
    images: [
      "https://www.globalvisainternationals.com/gvilogo.png",
    ],
  },
};

export default function ContactPage() {
  const pageUrl = "https://www.globalvisainternationals.com/contact";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.globalvisainternationals.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": pageUrl
      }
    ]
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com",
    "logo": "https://www.globalvisainternationals.com/gvilogo.png",
    "image": "https://www.globalvisainternationals.com/gvilogo.png",
    "description": "Contact Global Visa Internationals – leading visa and immigration consultants in India. Reach our Bangalore office for assistance with visitor, student, work, or PR visas.",
    "telephone": "+91-7022213466",
    "email": "operations@globalvisainternationals.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GF-9, Business Point, 137 Brigade Road, Next to Brigade Towers",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560025",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://www.google.com/maps/place/Global+Visa+Internationals"
    ]
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

      </Head>
      <div className={styles.imageContainer}>
        <Image
          src="/contact/Visa-and-immigration-Contact.webp"
          alt="World Map Background"
          fill
          quality={100}
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.ContactSec}>
        <main className={styles.container}>
          <h1 className={styles.heading}>
            Welcome to Global Visa Internationals – Your Trusted Visa and Immigration Consultant in India
          </h1>

          <p className={styles.paragraph}>
            At Global Visa Internationals, we offer expert visa application assistance and end-to-end immigration services across India. As a premier visa consultant India, our goal is to simplify your international travel, study, work, or permanent relocation journey. Whether you need help with visa documentation services, visa form filling service, or visa interview preparation assistance, we’re here to support you. We are a trusted visa processing agency, offering transparent visa consultant fees and efficient visa processing fees to meet your unique needs.
          </p>

          <p className={styles.paragraph}>
            Our experienced team assists with visitor visa application assistance, student visa consultants services, and work permit services. Recognized as top business visa consultants and investor visa advisors, we also specialize in family sponsorship consultants to help reunite families. As one of the leading immigration consultants India, we also offer reliable immigration assistance, immigration support services, and legal help through our network of experienced immigration lawyers and immigration appeals lawyers.
          </p>

          <h2 className={styles.subheading}>Visa Application Services You Can Trust</h2>

          <p className={styles.paragraph}>
            We provide professional visa application services for destinations such as Canada, Australia, the USA, the UK, Schengen countries, and the UAE. Whether you need a Schengen visa consultant India, USA visa consultant India, or Canada PR consultant India, our experts simplify the application process from start to finish. We handle citizenship application assistance, green card application assistance, permanent residency consultant services, and expedited visa processing.
          </p>

          <p className={styles.paragraph}>
            We also assist with complex issues like visa rejection reasons, visa blacklist reasons, visa appeal process, and visa extension procedure. Get help with visa validity details, transit visa requirements, visa status check, and visa appointment booking. We are transparent about visa approval services and the visa approval rate Schengen India to help you make informed decisions.
          </p>

          <h2 className={styles.subheading}>Local and Global Expertise</h2>

          <p className={styles.paragraph}>
            Our consultants are available in key cities including visa consultant Delhi, visa consultant Mumbai, student visa consultant Bangalore, visa consultant Hyderabad, immigration consultant Chennai, and visa consultant Kolkata. Whether you’re searching for the best visa consultant near me or immigration services near me India, we’re never far.
          </p>

          <p className={styles.paragraph}>
            We provide destination-specific insights, such as Thailand e visa for Indians, Philippines visa free Indians, Japan eVisa Indians, Kenya eVisa Indians, Oman visa on arrival Indians, Sri Lanka eta Indians, and Malaysia visa on arrival Indian citizens. For special cases, we offer guidance on UAE visa on arrival Indians with US visa and Sri Lanka visa free Indians.
          </p>

          <h2 className={styles.subheading}>Research-Backed Immigration Help</h2>

          <p className={styles.paragraph}>
            We guide you through the complete visa application process including visa requirements India, visa documents checklist, and visa interview questions like Schengen visa interview questions. We help monitor visa appointment delay, Schengen visa appointment India wait time, and visa processing delays Europe for Indians to optimize timing. Learn how to increase visa approval chance and avoid pitfalls like why visa rejected India.
          </p>

          <p className={styles.paragraph}>
            Our resources cover family sponsorship process Canada, spouse visa UK from India, investor visa application India, and permanent residency consultants India. We also help with niche concerns like readmission policy Indian passport, visa extension in Schengen, and guidance on immigration policy updates India.
          </p>

          <h2 className={styles.subheading}>Why Choose Global Visa Internationals?</h2>

          <p className={styles.paragraph}>
            With 13+ years of experience, Global Visa Internationals has earned trust and reputation through integrity, affordability, and results. Whether you're seeking the cheapest student visa consultants India or the best immigration agent for Canada PR, we’re committed to excellence. Our glowing visa agent reviews India speak volumes.
          </p>

          <p className={styles.paragraph}>
            From how to apply for e-visa India citizen to processing Japan single entry e-visa Indians or handling Oman tourist visa India—we ensure fast, reliable, and successful outcomes for all our clients.
          </p>

          <p className={styles.paragraph}>
            With over 13 years of experience, Global Visa Internationals has established itself as one of the leading immigration consultants in Bangalore. Our dedicated team specializes in providing comprehensive visa immigration consultancy for individuals seeking Canada PR and Australia PR. If you're looking for reliable guidance on your student visa application in Bangalore or require expert assistance with business immigration, you've come to the right place.
          </p>

          <h2 className={styles.subheading}>Our Expert Visa Immigration Services</h2>
          <ul className={styles.list}>
            <li>Canada – Express Entry and Provincial Nominee Programs (PNPs) for Canada PR</li>
            <li>Australia – SkillSelect for Australia PR</li>
            <li>Student Visas for USA, UK, Europe, and more – Your pathway to international education from Bangalore</li>
            <li>Comprehensive Business Immigration Services – Explore global opportunities</li>
            <li>Legal Outsourcing for International Visa Law Firms</li>
          </ul>

          <h2 className={styles.subheading}>Contact Our Immigration Consultants in Bangalore</h2>
          <address className={styles.address}>
            <li>Address: GF-9, Business Point, 137 Brigade Road, Next to Brigade Towers, Bangalore, 560025, Karnataka</li>
            <li>Phone: <a href="tel:+917022213466">+91-7022213466</a></li>
            <li>Email: <a href="mailto:operations@globalvisainternationals.com">operations@globalvisainternationals.com</a></li>
          </address>

          <p className={styles.paragraph}>
            Office Timings: Monday to Saturday: 10:00 AM to 07:00 PM<br />
            Closed on: Sundays and Public Holidays
          </p>
        </main>

        <div className={styles.formSection}>
          <VisaForm />
        </div>
      </div>

    </>
  );
}