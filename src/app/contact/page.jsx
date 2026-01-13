import styles from './page.module.css';
import Image from 'next/image';
import React from 'react';
import VisaForm from '@/Components/VisaForm';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import ContactPage from '@/components/ContactPage';


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

export default function Contact() {
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
      <ContactPage />
    </>
  );
}