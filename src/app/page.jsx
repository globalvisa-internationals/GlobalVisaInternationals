// src/app/page.jsx
import Image from "next/image";
import React from "react";
import { Agbalumo } from "next/font/google";

// Components
import VisaForm from "@/Components/VisaForm";
import AnimatedSection from "@/Components/AnimatedSection";
import AnimatedHR from "@/Components/AnimatedHR";
import GalleryCarousel from "@/Components/GalleryCarousel";
import ClientVideoCarousel from "@/Components/ClientVideoCarousel";
import FAQAccordion from "@/Components/FAQAccordion";
import ReviewCarousel from "@/Components/ReviewCarousel";
import MissionVisionValues from "@/Components/missionVisionValues";
import Services from "@/Components/Services";
import WhychoosGVI from "@/Components/whychoosGVI";
import AboutSection from "@/Components/AboutSection";
import Herosec from "@/Components/herosec";

// Icons
import { FaCheckCircle, FaStar, FaMapMarkerAlt, FaArrowRight, FaPlayCircle } from "react-icons/fa";

// Font
const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-agbalumo",
});

// --------------------------------------------------------------
// 1. VIEWPORT (required in Next.js 15 for themeColor, etc.)
// --------------------------------------------------------------
export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// --------------------------------------------------------------
// 2. METADATA (SEO & Social)
// --------------------------------------------------------------
export const metadata = {
  metadataBase: new URL("https://www.globalvisainternationals.com"),

  title: {
    default: "Best Visa Consultants in Bangalore | Global Visa Internationals",
    template: "%s | Global Visa Internationals",
  },
  description:
    "Trusted visa consultants in Bangalore for USA, UK, Canada & Europe. 75,000+ approvals. Free eligibility check & document review.",

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
    "global visa internationals",
  ],

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Best Visa Consultants in Bangalore | Global Visa Internationals",
    description:
      "Simplifying borders for 75,000+ clients. Expert visa assistance for Canada, USA, UK, Australia & Europe.",
    url: "https://www.globalvisainternationals.com",
    siteName: "Global Visa Internationals",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/GVI_Banner.jpg",
        width: 1200,
        height: 630,
        alt: "Global Visa Internationals - Trusted visa consultants in Bangalore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GVI: Premium Visa & Immigration Consultants | Since 2016",
    description: "Expert guidance for USA, UK, Canada & Europe. Trusted visa consultants in Bangalore.",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    images: ["/GVI_Banner.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
  },
};

// --------------------------------------------------------------
// 3. STATIC DATA (images, videos, FAQs)
// --------------------------------------------------------------
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
  "/Videos/A-Big-Win-We-are-thrilled-to-announce-that-our-client-has-successfully-obtained-their-Spain-Tourist-UK-Business-visa.webm",
  "/Videos/Another-Grateful-Client-They-trusted-Global-visa-internationals-WE-guided-them-to-get-Germany-visitor-visa-for-whole-5years.webm",
  "/Videos/congratulations Tenzin Gombu! For Getting Uk Visiter Visa.webm",
  "/Videos/Congratulations-Bhavya-and-family-For-receiving-3-Australian-visa-within-a-week.webm",
  "/Videos/Congratulations-on-obtaining-your-UK-visa-Praveen-We-are-pleased-to-inform-you-that-the-previous-refusal-has-been-successfully-overturned.webm",
  "/Videos/Germany-Visitor-Visa-Approved-5-Years.webm",
  "/Videos/Grateful-Clients-Trusted-Guidance-Another-Successful-Australian-Immigration-Journey.webm",
  "/Videos/We-are-thrille- to-announce-that-our-client-has-successfully-obtained-their-Spain-Tourist-UK-Business-visa.webm",
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
      "The visa is initially valid for 120 days. If you do not find a job within this period, it can be extended for an additional 60 days.",
  },
  {
    question: "Who is eligible for an Austrian job seeker visa?",
    answer:
      "To apply for an Austrian job seeker visa, you must be a Non-EU citizen, have a recognized higher education degree...",
  },
];

// --------------------------------------------------------------
// 4. JSON-LD STRUCTURED DATA (improved SEO)
// --------------------------------------------------------------
const jsonLdSchemas = [
  // Organization
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.globalvisainternationals.com/#organization",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    description:
      "Global Visa Internationals is a leading visa and immigration consultancy in Bangalore, offering expert assistance for Tourist, PR, Student, Work, and Business Visas.",
    email: "operations@globalvisainternationals.com",
    telephone: "+91-7022213466",
    foundingDate: "2010",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7022213466",
        contactType: "Customer Service",
        areaServed: "IN",
        availableLanguage: ["English", "Kannada", "Hindi", "Telugu", "Tamil"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "GF-9, Business Point, Brigade Road",
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
  },
  // LocalBusiness
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Global Visa Internationals",
    description:
      "Leading visa and immigration consultants in Bangalore. Over 75,000 successful visa applications.",
    url: "https://www.globalvisainternationals.com",
    telephone: "+91-7022213466",
    priceRange: "₹₹₹",
    openingHours: "Mo-Sa 10:00-18:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "GF-9, Business Point, MG Road",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560025",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "314",
    },
  },
  // WebPage
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://www.globalvisainternationals.com",
    name: "Global Visa Internationals - Top Visa Consultants in Bangalore",
    description:
      "Official website of Global Visa Internationals, providing expert visa and immigration services.",
  },
  // FAQPage
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

// --------------------------------------------------------------
// 5. MAIN COMPONENT
// --------------------------------------------------------------
export default function Home() {
  return (
    <>
      {/* Inject JSON-LD scripts */}
      {jsonLdSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="bg-white text-gray-800 overflow-hidden">
        {/* Hero Section */}
        <section>
          <Herosec />
        </section>

        {/* About Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AboutSection />
        </section>

        {/* Animated Horizontal Rule */}
        <AnimatedHR direction="left" duration={1.2} />

        {/* Why Choose GVI */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <WhychoosGVI />
        </section>

        <AnimatedHR direction="left" duration={1.2} />

        {/* Gallery */}
        <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Gallery
          </h2>
          <GalleryCarousel slides={slides} />
        </section>

        <AnimatedHR direction="left" duration={1.2} />

        {/* Mission, Vision & Values */}
        <section id="our-values" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <MissionVisionValues />
        </section>

        <AnimatedHR direction="left" duration={1.2} />

        {/* Testimonials */}
        <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ReviewCarousel />
        </section>

        {/* Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Services
          </h2>
          <Services />
        </section>

        <AnimatedHR direction="left" duration={1.2} />

        {/* Form + Map Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <VisaForm />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
            <iframe
              className="w-full h-full min-h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.00853848403034!2d77.60577367689068!3d12.967480835531479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d5613d9a4b%3A0xea0b2fbdf4f08876!2sGlobal%20Visa%20Internationals!5e0!3m2!1sen!2sin!4v1741000774951!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Global Visa Internationals Office Map"
            ></iframe>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <FAQAccordion faqs={faqs} />
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-center text-gray-500 border-t border-gray-200 py-6 max-w-7xl mx-auto">
          This service is provided by Global Visa Internationals, an independent consultancy.
          We are not affiliated with the Australian Government or any embassy.
        </p>
      </main>
    </>
  );
}