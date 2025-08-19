
import React from 'react';
import styles from './JobForm.module.css';
import AnimatedHR from "@/Components/AnimatedHR";
import CareerPageForm from "@/Components/CareerPageForm";
import Head from 'next/head';

export const metadata = {
  title: "Careers at Global Visa Internationals | Join Our Team",
  description:
    "Explore exciting career opportunities at Global Visa Internationals. Apply for Visa Counselor, Documentation Executive, and more roles. Build your career in the global visa and immigration industry with us.",
  keywords:
    "visa counselor jobs, visa documentation executive jobs, careers at Global Visa Internationals, immigration consultant jobs, travel visa jobs in Bangalore, GVI careers, global visa hiring,NON-IT jobs, Bangalore Jobs,Jobs in Bangalore",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/career",
  },
  openGraph: {
    title: "Careers at Global Visa Internationals | We're Hiring",
    description:
      "Join the Global Visa Internationals team! Apply for roles like Visa Counselor and Visa Documentation Executive and grow your career in the immigration and visa industry.",
    url: "https://www.globalvisainternationals.com/career",
    siteName: "Global Visa Internationals",
    images: [
      {
        url: "https://www.globalvisainternationals.com/public/hiring/gvi-hiring-banner.webp",
        width: 1200,
        height: 630,
        alt: "Careers at Global Visa Internationals - We're Hiring",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "Careers at Global Visa Internationals | Apply Now",
    description:
      "Discover career opportunities with Global Visa Internationals. Apply online and start your journey with us in the visa and immigration industry.",
    images: [
      "https://www.globalvisainternationals.com/public/hiring/gvi-hiring-banner.webp",
    ],
  },
};


export default function CareerPage() {
  const pageUrl = metadata.alternates.canonical;

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
        "name": "Careers",
        "item": pageUrl
      }
    ]
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com",
    "logo": "https://www.globalvisainternationals.com/gvilogo.png",
    "description": "Global Visa Internationals offers immigration and visa consulting services worldwide. Join our team and build your career in the global visa industry.",
    "sameAs": [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://www.google.com/maps/place/Global+Visa+Internationals"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7022213466",
      "contactType": "HR Department",
      "areaServed": "IN",
      "availableLanguage": "English"
    }
  };

  // Example Job Postings (Visa Counselor & Documentation Executive)
  const jobPostingJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Visa Counselor",
      "description": "We are hiring a Visa Counselor to guide applicants through visa application processes, documentation, and interview preparation.",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Global Visa Internationals",
        "value": "VC-001"
      },
      "datePosted": "2025-08-19",
      "employmentType": "Full-time",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Global Visa Internationals",
        "sameAs": "https://www.globalvisainternationals.com",
        "logo": "https://www.globalvisainternationals.com/gvilogo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "MG Road",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560025",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "value": "250000-400000",
          "unitText": "YEAR"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Visa Documentation Executive",
      "description": "We are looking for a Documentation Executive to handle client visa paperwork, filing, and compliance checks.",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Global Visa Internationals",
        "value": "DE-002"
      },
      "datePosted": "2025-08-19",
      "employmentType": "Full-time",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Global Visa Internationals",
        "sameAs": "https://www.globalvisainternationals.com",
        "logo": "https://www.globalvisainternationals.com/gvilogo.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "MG Road",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560025",
          "addressCountry": "IN"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "value": "200000-350000",
          "unitText": "YEAR"
        }
      }
    }
  ];


  return (
    <>
      <Head>
        {/* Primary Meta */}
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

        {/* Structured Data: JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingJsonLd),
          }}
        />
      </Head>





      <div className={styles.JobSec}>
        <div className={styles.JobData}>

          <h2 className={styles.Title}>Job Title: Visa Counselor</h2>

          <p><strong className={styles.subTitle}> Job Overview: </strong> Are you passionate about guiding individuals through their international journey? Join<strong className={styles.subTitle}> Global Visa Internationals </strong>   in Bangalore as a<strong className={styles.subTitle}> Visa Counselor </strong>  . In this client-facing role, you’ll assist applicants with visa procedures,documentation, and eligibility assessments. This position is perfect for candidates looking to build a career in<strong className={styles.subTitle}> visa consultancy in Bangalore </strong>   or grow in the<strong className={styles.subTitle}> immigration services industry </strong>.</p>

          <h3 className={styles.subTitle}>Key Responsibilities:</h3>
          <ul>
            <li>Guide clients through visa requirements, processes, and documentation for various countries.</li>
            <li>Evaluate applicant profiles and suggest suitable visa options.</li>
            <li>Handle walk-in inquiries, telephonic leads, and email queries professionally.</li>
            <li>Coordinate with the documentation team to ensure timely application processing.</li>
            <li>Maintain and update client records.</li>
            <li>Provide professional support throughout the client’s visa journey.</li>
          </ul>

          <h3 className={styles.subTitle}>Qualifications & Skills:</h3>
          <ul>
            <li>Experience: Freshers are welcome (Training will be provided)</li>
            <li>Excellent English communication skills (verbal and written)</li>
            <li>Proficient in MS Office (Word, Excel, Outlook)</li>
            <li>Strong interpersonal and counseling skills</li>
            <li>Ability to build trust and rapport with clients</li>
            <li>Detail-oriented with good organizational skills</li>
            <li>Goal-driven and proactive approach to work</li>
            <li>Team player with a positive attitude</li>
            <li>Educational Qualification: Any degree (preferred in Business, Marketing, or Humanities)</li>
          </ul>
          <p><strong className={styles.subTitle}> Salary: </strong>   ₹15,000 – ₹20,000 per month</p>

          <AnimatedHR direction="left" duration={1.2} />

          {/* ===================== NEW ROLE ===================== */}

          <h2 className={styles.Title}>Job Title: Visa Documentation Executive</h2>

          <p><strong className={styles.subTitle}> Job Overview: </strong>Join <strong className={styles.subTitle}>Global Visa Internationals </strong>in Bangalore as a<strong className={styles.subTitle}> Visa Documentation Executive. </strong> In this documentation-focused role, you’ll support clientsby preparing, reviewing, and managing visa applications with accuracy and compliance. This position is ideal forcandidates looking to build expertise in <strong className={styles.subTitle}> visa documentation and processing </strong>  .</p>

          <h3 className={styles.subTitle}>Key Responsibilities:</h3>
          <ul>
            <li>Assist in preparing and reviewing visa applications and supporting documents.</li>
            <li>Coordinate with Visa Counselors to ensure complete and accurate documentation.</li>
            <li>Maintain organized and up-to-date client files.</li>
            <li>Track application progress and update clients on status.</li>
            <li>Ensure timely submission of applications to meet deadlines.</li>
          </ul>

          <h3 className={styles.subTitle}>Qualifications & Skills:</h3>
          <ul>
            <li>Experience: Freshers are welcome (Training will be provided)</li>
            <li>Strong attention to detail and organizational skills</li>
            <li>Good written communication skills</li>
            <li>Proficient in MS Office (Word, Excel, Outlook)</li>
            <li>Ability to work independently and as part of a team</li>
            <li>Educational Qualification: Any degree (preferred in Business, Commerce, or Humanities)</li>
          </ul>

          <p><strong className={styles.subTitle}> Salary: </strong>   ₹15,000 – ₹20,000 per month</p>
        </div>


        <div className={styles.formSection}>
          <CareerPageForm />
        </div>

      </div >
    </>
  );
}