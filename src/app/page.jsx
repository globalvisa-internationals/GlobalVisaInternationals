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
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

import MissionVisionValues from "@/Components/missionVisionValues";
import Services from "@/Components/Services";
import WhychoosGVI from "@/Components/whychoosGVI";
import AboutSection from "@/Components/AboutSection";


const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400", // Only one weight available
});

export const metadata = {
  metadataBase: new URL("https://www.globalvisainternationals.com"),

  // SEO title (<=60 chars) 
  title: "Best Visa Consultants in Bangalore | USA, Canada, UK & Schengen",

  // Shortened, action-oriented description (<=160 chars)
  description:
    "Trusted Bangalore visa consultancy for USA, UK, Canada & Europe. 75,000+ approvals. Free eligibility check & document review.",

  // Focused keywords (trimmed, no work-visa related terms)
  keywords: [
    "visa consultants bangalore",
    "student visa consultants bangalore",
    "canada visa consultants bangalore",
    "australia visa consultants bangalore",
    "usa visa consultants bangalore",
    "uk visa consultants bangalore",
    "schengen visa consultants bangalore",
    "best visa consultants in bangalore",
    "immigration consultants bangalore",
    "tourist visa consultants bangalore",
    "global visa internationals",
    "visa assistance bangalore"
  ],

  canonical: "https://www.globalvisainternationals.com/",
  alternates: { canonical: "https://www.globalvisainternationals.com/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Best Visa Consultants in Bangalore | Global Visa Internationals",
    description:
      "Simplifying borders for 75,000+ clients. Expert visa assistance for Canada, USA, UK, Australia & Europe. No hidden fees.",
    url: "https://www.globalvisainternationals.com",
    siteName: "Global Visa Internationals",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.globalvisainternationals.com/GVI_Banner.jpg",
        width: 1200,
        height: 630,
        alt: "Global Visa Internationals - Trusted visa consultants in Bangalore",
        secureUrl: "https://www.globalvisainternationals.com/GVI_Banner.jpg",
        type: "image/jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GVI: Premium Visa & Immigration Consultants | Since 2016",
    description: "Expert guidance for USA, UK, Canada & Europe. Trusted visa consultants in Bangalore.",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    // Use absolute URL for reliability on social platforms
    images: ["https://www.globalvisainternationals.com/GVI_Banner.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
    "p:domain_verify": "eb589ecd94088c14d3f8566f395cf4b7",
  },
};


const slides = [
  "/gallery/Travel-Poster.jpg",
  "/gallery/Germany-tourist-visa.jpg",
  "/gallery/UK-Travel.jpg",
  "/gallery/UK-Visa-Banner.jpg",
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

  const pageUrl = "https://www.globalvisainternationals.com/";

  // 1. Breadcrumb Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.globalvisainternationals.com/",
      }
    ]
  };

  // 2. Organization Schema
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.globalvisainternationals.com/#organization",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    description: "Global Visa Internationals is a leading visa and immigration consultancy in Bangalore, offering expert assistance for Tourist, PR, Student, Work, and Business Visas to countries like Canada, Australia, UK, USA, Europe, and more.",
    email: "operations@globalvisainternationals.com",
    telephone: "+91-7022213466",
    foundingDate: "2010",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 25,
      maxValue: 50
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        "telephone": "+91-7022213466",
        "contactType": "Customer Service",
        "areaServed": ["IN"],
        "availableLanguage": ["English", "Kannada", "Hindi", "Telugu", "Tamil"],
        "hoursAvailable": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "15:00"
          }
        ]

      }
    ],

    address: {
      "@type": "PostalAddress",
      streetAddress: "GF-9, Business Point, Brigade Road",
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
    sameAs: [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://www.google.com/maps/place/Global+Visa+Internationals"
    ],
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN"
      }
    }
  };

  // 3. LocalBusiness Schema
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.globalvisainternationals.com/#localbusiness",
    name: "Global Visa Internationals",
    description: "Leading visa and immigration consultants in Bangalore providing expert assistance for Tourist, PR, Student, Work, and Business Visas to countries like Canada, Australia, UK, USA, Europe, and more. Over 75,000 successful visa applications processed.",
    url: "https://www.globalvisainternationals.com",
    telephone: "+91-7022213466",
    email: "operations@globalvisainternationals.com",
    image: "https://www.globalvisainternationals.com/GVI_Banner.jpg",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI",
    openingHours: "Mo-Sa 10:00-18:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00"
      }
    ],
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
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 12.9716,
        longitude: 77.5946
      },
      geoRadius: "50000"
    },
    sameAs: [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://maps.app.goo.gl/fxG3MeB6zb2UY2cNA"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Visa and Immigration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Canada Immigration Services",
            description: "PR, Work Permit, Student Visa for Canada"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Australia Immigration Services",
            description: "PR, Work Visa, Student Visa for Australia"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "USA Visa Services",
            description: "Visitor Visa, Work Visa, Student Visa for USA"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UK Immigration Services",
            description: "Work Visa, Student Visa, Visitor Visa for UK"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Schengen Visa Services",
            description: "Tourist, Business, and Visitor Visas for Europe"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "314",
      bestRating: "5",
      worstRating: "1"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rajesh Kumar"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        reviewBody: "Excellent service! Got my Canada PR visa in 6 months. Highly recommended!",
        datePublished: "2024-01-15"
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Priya Sharma"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        reviewBody: "Professional team helped me secure Australia student visa smoothly.",
        datePublished: "2024-02-10"
      }
    ],
    knowsAbout: [
      "Visa Documentation",
      "Immigration Laws",
      "Visa Interview Preparation",
      "IELTS/PTE Coaching",
      "PR Application Process",
      "Visa Rejection Appeals"
    ],
    employee: {
      "@type": "Person",
      name: "Expert Visa Consultants",
      jobTitle: "Certified Immigration Consultants",
      description: "Team of MARA, ICCRC, and CICC certified consultants"
    }
  };

  // 4. Service Schema

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.globalvisainternationals.com/#services",
    name: "Visa and Immigration Consultation Services",
    description: "Professional visa and immigration consultancy services in Bangalore for Canada, Australia, USA, UK and Schengen countries. Services include documentation support, eligibility assessment, application processing and interview preparation.",

    provider: {
      "@type": "ProfessionalService",
      "@id": "https://www.globalvisainternationals.com/#business"
    },

    areaServed: {
      "@type": "Country",
      name: "India"
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": "https://www.globalvisainternationals.com/#offers",
      name: "Visa Services Portfolio",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          "@id": "https://www.globalvisainternationals.com/#pr-services",
          name: "Permanent Residency Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Canada Express Entry PR",
                url: "https://www.globalvisainternationals.com/Visa/permanent-residency-visa/canada-pr-visar"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Australia Skilled Migration PR",
                url: "https://www.globalvisainternationals.com/Visa/permanent-residency-visa/australia-pr-visa"
              }
            }
          ]
        },

        {
          "@type": "OfferCatalog",
          "@id": "https://www.globalvisainternationals.com/#student-visas",
          name: "Student Visa Services",
          itemListElement: [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Canada Study Permit", "url": "https://www.globalvisainternationals.com/Visa/student-visa/canada" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "USA F1 Student Visa", "url": "https://www.globalvisainternationals.com/Visa/student-visa/usa" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Australia Student Visa", "url": "https://www.globalvisainternationals.com/Visa/student-visa/australia" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UK Student Visa", "url": "https://www.globalvisainternationals.com/Visa/student-visa/uk" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Zealand Student Visa", "url": "https://www.globalvisainternationals.com/Visa/student-visa/new-zealand" } }
          ]
        },

        {
          "@type": "OfferCatalog",
          "@id": "https://www.globalvisainternationals.com/#work-visas",
          name: "Work Visa Services",
          itemListElement: [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Canada Work Permit", "url": "https://www.globalvisainternationals.com/Visa/permanent-residency-visa/canada-pr-visa" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Australia Work Visa", "url": "https://www.globalvisainternationals.com/Visa/permanent-residency-visa/australia-pr-visa" } }
          ]
        },

        {
          "@type": "OfferCatalog",
          "@id": "https://www.globalvisainternationals.com/#visitor-visas",
          name: "Visitor Visa Services",
          itemListElement: [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schengen Tourist Visa", "url": "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Japan Tourist Visa", "url": "https://www.globalvisainternationals.com/Visa/tourist-visa/japan" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Singapore Tourist Visa", "url": "https://www.globalvisainternationals.com/Visa/tourist-visa/singapore" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dubai / UAE Tourist Visa", "url": "https://www.globalvisainternationals.com/Visa/tourist-visa/dubai" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Australia Tourist Visa", "url": "https://www.globalvisainternationals.com/Visa/tourist-visa/australia" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Zealand Tourist Visa", "url": "https://www.globalvisainternationals.com/Visa/tourist-visa/new-zealand" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "China Tourist Visa", "url": "https://www.globalvisainternationals.com/Visa/tourist-visa/china" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "USA B1/B2 Visitor Visa", "url": "https://www.globalvisainternationals.com/Visa/tourist-visa/usa" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Canada Visitor Visa", "url": "https://www.globalvisainternationals.com/Visa/tourist-visa/canada" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UK Visitor Visa", "url": "https://www.globalvisainternationals.com/Visa/tourist-visa/united-kingdom" } }
          ]
        }
      ]
    }

  };


  // 5. WebPage Schema
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.globalvisainternationals.com/#webpage",
    url: "https://www.globalvisainternationals.com",
    name: "Global Visa Internationals - Top Visa Consultants in Bangalore",
    description: "Homepage of Global Visa Internationals - Leading visa and immigration consultants in Bangalore providing expert services for Canada, Australia, USA, UK, and European countries.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.globalvisainternationals.com/#website",
      url: "https://www.globalvisainternationals.com",
      name: "Global Visa Internationals",
      description: "Official website of Global Visa Internationals - Visa and Immigration Consultants",
      publisher: {
        "@type": "Organization",
        "@id": "https://www.globalvisainternationals.com/#organization"
      }
    },
    about: {
      "@type": "Organization",
      "@id": "https://www.globalvisainternationals.com/#organization"
    },
    mainEntity: {
      "@type": "Organization",
      "@id": "https://www.globalvisainternationals.com/#organization"
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.globalvisainternationals.com/GVI_Banner.jpg",
      width: 1200,
      height: 630,
      caption: "Global Visa Internationals - Visa and Immigration Services"
    },

    inLanguage: "en-IN",
    datePublished: "2010-01-01",
    dateModified: "2024-12-01",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://www.globalvisainternationals.com/services"]
      },
      {
        "@type": "SearchAction",
        target: "https://www.globalvisainternationals.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    ]
  };

  // 6. FAQPage Schema
  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Global Visa Internationals offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive visa and immigration services including Permanent Residency (PR), Student Visas, Work Permits, Tourist Visas, Business Visas, and Immigration Consultancy for countries like Canada, Australia, USA, UK, and European nations. We also provide IELTS/PTE coaching and document verification services."
        }
      },
      {
        "@type": "Question",
        name: "Which countries do you provide visa assistance for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in visa assistance for: Canada, Australia, United States, United Kingdom, Germany, France, Italy, Spain, Netherlands, Switzerland, Sweden, Denmark, Norway, Finland, New Zealand, Singapore, and other European countries."
        }
      },
      {
        "@type": "Question",
        name: "Are your immigration consultants certified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our team includes MARA (Australia), ICCRC (Canada), and CICC (Canada) certified consultants with over 10+ years of experience in immigration law and visa processing."
        }
      },
      {
        "@type": "Question",
        name: "What is your success rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We maintain a 95%+ success rate with over 75,000 successful visa applications processed since our establishment in 2010."
        }
      },
      {
        "@type": "Question",
        name: "How long does the visa process take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Processing times vary by country: Canada PR (6-12 months), Australia PR (8-12 months), USA Work Visa (3-6 months), UK Student Visa (3-4 weeks), Schengen Tourist Visa (15-20 days)."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer free consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer free initial consultation either in-person at our Bangalore office or via online video call to assess your eligibility and provide personalized guidance."
        }
      },
      {
        "@type": "Question",
        name: "What documents are required for visa application?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basic documents include passport, photographs, educational certificates, work experience letters, bank statements, language test scores, and medical certificates. Specific requirements vary by country and visa type."
        }
      },
      {
        "@type": "Question",
        name: "Can you help with visa refusal cases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in visa refusal appeals and reapplications. Our experts analyze refusal reasons, strengthen your application, and improve chances of approval in subsequent applications."
        }
      },
      {
        "@type": "Question",
        name: "What are your office timings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are open Monday to Saturday from 10:00 AM to 6:00 PM IST. Appointments can be scheduled via phone or our website contact form."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide post-landing services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer comprehensive post-landing services including airport pickup, accommodation assistance, SIN/SSN application help, bank account setup, and settlement guidance in the destination country."
        }
      }
    ]
  };

  // Additional: Website Schema for better search visibility
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.globalvisainternationals.com/#website",
    url: "https://www.globalvisainternationals.com",
    name: "Global Visa Internationals",
    description: "Official website of Global Visa Internationals - Top Visa Consultants in Bangalore for USA, Canada, UK, Australia, and Europe visa assistance.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.globalvisainternationals.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.globalvisainternationals.com/#organization"
    }
  };

  const jsonLdSchemas = [
    breadcrumbJsonLd,
    organizationJsonLd,
    localBusinessJsonLd,
    serviceJsonLd,
    webpageJsonLd,
    faqPageJsonLd,
    websiteJsonLd
  ];



  return (
    <>
      {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}


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



        <h1 className={styles.waveText}> Trusted Visa Consultancy in Bangalore for USA, Canada, UK & Schengen Visas Since 2016</h1>



        {/* About Us Section - Modern Corporate Design */}
        <section>
          <AboutSection />
        </section>

        <AnimatedHR direction="left" duration={1.2} />
        <WhychoosGVI />

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
        <AnimatedHR direction="left" duration={1.2} />
        <section>

          <ReviewSchema />
          <ReviewCarousel />
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
