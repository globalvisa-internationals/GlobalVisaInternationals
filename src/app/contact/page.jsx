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
        width: 1200,
        height: 630,
        alt: "Global Visa Internationals Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "Get in Touch with Global Visa Experts | Contact Page",
    description:
      "Reach out to Global Visa Internationals for end-to-end visa support. Trusted agents for tourist, work, student, and PR visas. Based in Bangalore, India.",
    images: ["https://www.globalvisainternationals.com/gvilogo.png"],
  },
};

export default function ContactPage() {
  const pageUrl = "https://www.globalvisainternationals.com/contact";

  // --------------------------------
  // ⭐ ALL STRUCTURED DATA HERE ⭐
  // --------------------------------
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // ---------------------------------------------------
      // 1️⃣ Organization Schema
      // ---------------------------------------------------
      {
        "@type": "Organization",
        "@id": "https://www.globalvisainternationals.com/#organization",
        "name": "Global Visa Internationals",
        "url": "https://www.globalvisainternationals.com",
        "logo": "https://www.globalvisainternationals.com/gvilogo.png",
        "sameAs": [
          "https://www.facebook.com/globalvisainternationals/",
          "https://www.instagram.com/globalvisa_internationals/",
          "https://www.linkedin.com/company/global-visa-internationals/",
          "https://x.com/GLOBALVISA1505",
          "https://www.youtube.com/@globalVisaInternationals",
          "https://www.google.com/maps/place/Global+Visa+Internationals",
        ],
      },

      // ---------------------------------------------------
      // 2️⃣ LocalBusiness Schema
      // ---------------------------------------------------
      {
        "@type": "LocalBusiness",
        "@id": "https://www.globalvisainternationals.com/#localbusiness",
        "name": "Global Visa Internationals",
        "image": "https://www.globalvisainternationals.com/gvilogo.png",
        "url": "https://www.globalvisainternationals.com/contact",
        "telephone": "+91-7022213466",
        "email": "operations@globalvisainternationals.com",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "GF-9, Business Point, 137 Brigade Road, Next to Brigade Towers",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560025",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9716,
          "longitude": 77.5946,
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
              "Saturday",
            ],
            "opens": "10:00",
            "closes": "19:00",
          },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "340",
        },
      },

      // ---------------------------------------------------
      // 3️⃣ Website Schema
      // ---------------------------------------------------
      {
        "@type": "WebSite",
        "@id": "https://www.globalvisainternationals.com/#website",
        "url": "https://www.globalvisainternationals.com",
        "name": "Global Visa Internationals",
        "publisher": {
          "@id": "https://www.globalvisainternationals.com/#organization",
        },
      },

      // ---------------------------------------------------
      // 4️⃣ WebPage Schema (Contact Page)
      // ---------------------------------------------------
      {
        "@type": "WebPage",
        "@id": pageUrl + "#webpage",
        "url": pageUrl,
        "name": "Contact Global Visa Internationals",
        "description":
          "Contact Global Visa Internationals for visa consultation, documentation support, and immigration guidance.",
        "isPartOf": {
          "@id": "https://www.globalvisainternationals.com/#website",
        },
      },

      // ---------------------------------------------------
      // 5️⃣ Service Schema
      // ---------------------------------------------------
      {
        "@type": "Service",
        "name": "Visa & Immigration Consultation",
        "provider": {
          "@id": "https://www.globalvisainternationals.com/#organization",
        },
        "serviceType": "Visa Assistance, Immigration Consulting, Documentation Support",
        "areaServed": "IN",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": pageUrl,
        },
      },

      // ---------------------------------------------------
      // 6️⃣ Breadcrumb Schema
      // ---------------------------------------------------
      {
        "@type": "BreadcrumbList",
        "@id": pageUrl + "#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.globalvisainternationals.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": pageUrl,
          },
        ],
      },

      // ---------------------------------------------------
      // 7️⃣ FAQ Schema
      // ---------------------------------------------------
      {
        "@type": "FAQPage",
        "@id": pageUrl + "#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I need to visit your office for visa assistance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Most of the process is handled online. You only visit VFS/BLS for biometrics and submission.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does the visa process take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Processing time varies by country, but Global Visa Internationals handles your documentation, filing, and tracking end-to-end to make the process faster.",
            },
          },
          {
            "@type": "Question",
            "name": "What documents do I need to start?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You simply share your basic documents. We prepare, organize, and build your entire file from there.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
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

          <h1 className={styles.heading}>  Contact Global Visa Internationals</h1>
          <h2 className={styles.subheading}>  Your Journey Starts With One Conversation — We’ll Take Care of Everything Else.</h2>

          <p className={styles.paragraph}>  At Global Visa Internationals, we believe that applying for a visa should never feel overwhelming.   When you reach out to us, you’re not just contacting a consultant — you’re connecting with a team   that becomes your personal partner throughout your entire visa or immigration process.</p>

          <p className={styles.paragraph}>  Whether you’re planning to travel, study abroad, work overseas, or secure permanent residency,   our experts ensure that once you sign up with us, you won’t have to worry about a single thing.   Just share the required documents, and we will handle every step with precision, clarity, and care.</p>

          <h2 className={styles.subheading}>Why People Love Working With Us</h2>

          <ul className={styles.list}>
            <li>We simplify everything — no confusing forms, no overwhelming paperwork.</li>
            <li>We do the heavy lifting — documentation, appointments, follow-ups, compliance, everything.</li>
            <li>We stay transparent — no hidden fees, no last-minute surprises.</li>
            <li>We work like your personal team — keeping you informed, prepared, and stress-free.</li>
            <li>We deliver results — high approval rates, strong case handling, and expert strategy.</li>
          </ul>

          <p className={styles.paragraph}>  When you contact us, you’re choosing peace of mind. Tell us your destination,   hand over your documents, and relax — we’ll take it from here.</p>

          <h2 className={styles.subheading}>What Happens After You Contact Us — A Fully Managed, Stress-Free Process</h2>

          <ul className={styles.list}>
            <li>  <strong>End-to-End Documentation:</strong> We collect, organize, prepare, and verify all required   visa documents so nothing is missed.</li>
            <li>  <strong>Accurate Form Filing:</strong> Our team fills out your visa application form as per embassy   and consulate standards — error-free and compliant.</li>
            <li>  <strong>Personalized Case Preparation:</strong> We create a tailored checklist and documentation   plan based on your purpose of travel, profile, and travel history.</li>
            <li>  <strong>Professional Drafting:</strong> From cover letters to NOC and leave approval samples, GVI   prepares all essential drafts for a strong application.</li>
            <li>  <strong>Notarization Made Easy:</strong> If notarization is required, we coordinate it entirely —   no need to contact lawyers or visit legal offices.</li>
            <li>  <strong>Simple Process for You:</strong> You only need to share your documents, review the final   file, and visit VFS/BLS for biometrics and submission.</li>
            <li>  <strong>A-to-Z Case Handling:</strong> After submission, we manage everything — tracking,   updates, guidance, and support until you receive your passport and final result.</li>
          </ul>

          <p className={styles.paragraph}>  In short: <strong>you sign up, you share your documents — and we take care of absolutely everything else.</strong></p>

          <h2 className={styles.subheading}>We’re Here to Help You With:</h2>

          <ul className={styles.list}>
            <li>Visa application assistance for Canada, USA, UK, Australia, Europe, UAE, and more</li>
            <li>Student visas, business visas, work permits, and family visas</li>
            <li>Canada PR, Australia PR, and global migration pathways</li>
            <li>Visa interview preparation and documentation support</li>
            <li>Rejections, appeals, complex cases, and case rebuilding</li>
            <li>Fast-track options and complete end-to-end assistance</li>
          </ul>

          <p className={styles.paragraph}>
            Whatever your goal, our team ensures a smooth, guided, and stress-free experience.
          </p>

          <h2 className={styles.subheading}>Visit or Contact Our Bangalore Office</h2>

          <address className={styles.address}>
            <li>GF-9, Business Point, 137 Brigade Road, Next to Brigade Towers, Bangalore – 560025, Karnataka</li>
            <li>Phone: <a href="tel:+917022213466">+91-7022213466</a></li>
            <li>Email: <a href="mailto:operations@globalvisainternationals.com">operations@globalvisainternationals.com</a></li>
          </address>

          <p className={styles.paragraph}>  <strong>Office Hours:</strong><br />  Monday to Saturday → 10:00 AM – 07:00 PM<br />  Closed on Sundays & Public Holidays</p>

          <h2 className={styles.subheading}>Take the First Step — We’ll Handle the Rest</h2>

          <p className={styles.paragraph}>  Your dreams deserve experts who treat them with care. Reach out today and experience how effortless   the visa and immigration process can be when professionals manage it for you.</p>

          <p className={styles.paragraph}>  <strong>Contact us now — and let Global Visa Internationals turn your international plans into   reality, without stress, without confusion, and without you lifting a finger.</strong></p>

        </main>


        <div className={styles.formSection}>
          <VisaForm />
        </div>
      </div>

    </>
  );
}