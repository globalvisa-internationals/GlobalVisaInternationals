import Image from "next/image";
import styles from "./about.module.css";
import React from "react";
import VisaForm from "@/Components/VisaForm";
import AnimatedHR from "@/Components/AnimatedHR";
import ReviewCarousel from "@/Components/ReviewCarousel";
import { ReviewSchema } from "@/Components/ReviewSchema";
import { CheckCircle, Users, Globe, Award, Shield, Clock } from 'lucide-react';

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
      <section>
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Your Trusted Partner in
                <span className={styles.heroHighlight}> Global Immigration</span>
              </h1>
              <p className={styles.heroSubtitle}>
                With over a decade of expertise and 75,000+ successful clients worldwide
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <Users className={styles.statIcon} />
                  <span className={styles.statNumber}>75K+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={styles.statItem}>
                  <Globe className={styles.statIcon} />
                  <span className={styles.statNumber}>45+</span>
                  <span className={styles.statLabel}>Countries</span>
                </div>
                <div className={styles.statItem}>
                  <Award className={styles.statIcon} />
                  <span className={styles.statNumber}>11+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          {/* Company Introduction */}
          <section className={styles.section}>
            <div className={styles.container}>
              <div className={styles.introGrid}>
                <div className={styles.introContent}>
                  <h2 className={styles.sectionTitle}>
                    Making Global Mobility
                    <span className={styles.accent}> Simple & Accessible</span>
                  </h2>
                  <p className={styles.introText}>
                    At Global Visa Internationals, we transform complex immigration
                    processes into straightforward journeys. Founded by Mrs. Anusha Prashanth,
                    our mission is to make international relocation, education, and career
                    advancement accessible to everyone.
                  </p>

                  <div className={styles.missionVision}>
                    <div className={styles.missionCard}>
                      <h3 className={styles.cardTitle}>Our Mission</h3>
                      <p>Simplify global mobility through expert guidance, transparent processes, and personalized support.</p>
                    </div>
                    <div className={styles.visionCard}>
                      <h3 className={styles.cardTitle}>Our Vision</h3>
                      <p>Be the most trusted immigration partner worldwide, connecting dreams with opportunities.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.founderSection}>
                  <div className={styles.founderImageWrapper}>
                    <img
                      src="./profile/founder.jpg"
                      alt="Anusha Prashanth - Founder & CEO"
                      className={styles.founderImage}
                    />
                    <div className={styles.founderBadge}>
                      <div className={styles.badgeContent}>
                        <span className={styles.badgeName}>Anusha Prashanth</span>
                        <span className={styles.badgeTitle}>Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.founderBio}>
                    <h3 className={styles.founderName}>Leading with Experience</h3>
                    <p>
                      With over 11+ years of hands-on experience in visa and immigration,
                      Mrs. Anusha Prashanth leads our team with passion and precision.
                      Her guidance has helped thousands achieve their international dreams.
                    </p>
                    <div className={styles.founderStats}>
                      <div className={styles.founderStat}>
                        <Clock className={styles.founderStatIcon} />
                        <span>11+ Years Experience</span>
                      </div>
                      <div className={styles.founderStat}>
                        <Shield className={styles.founderStatIcon} />
                        <span>Visa Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <AnimatedHR direction="left" duration={1.2} />


          <section className={styles.mainGrid}>

            <div>

              {/* Why Choose Us */}
              <section className={styles.section}>
                <div className={styles.container}>
                  <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Why Choose Global Visa Internationals</h2>
                    <p className={styles.sectionSubtitle}>Experience the difference with our client-first approach</p>
                  </div>

                  <div className={styles.featuresGrid}>
                    {[
                      {
                        icon: <Shield />,
                        title: "Trust & Transparency",
                        description: "No hidden fees, no false promises. We provide honest assessments and clear communication."
                      },
                      {
                        icon: <Award />,
                        title: "Proven Track Record",
                        description: "75,000+ successful applications across 45+ countries with consistently high approval rates."
                      },
                      {
                        icon: <Users />,
                        title: "Personalized Guidance",
                        description: "Tailored strategies for each client based on their unique profile and aspirations."
                      },
                      {
                        icon: <Globe />,
                        title: "Global Network",
                        description: "Offices in London and Bangalore provide both local expertise and global perspective."
                      },
                      {
                        icon: <CheckCircle />,
                        title: "End-to-End Support",
                        description: "Comprehensive assistance from documentation to post-approval guidance."
                      },
                      {
                        icon: <Clock />,
                        title: "Timely Processing",
                        description: "Efficient handling with regular updates and proactive case management."
                      }
                    ].map((feature, index) => (
                      <div key={index} className={styles.featureCard}>
                        <div className={styles.featureIcon}>{feature.icon}</div>
                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                        <p className={styles.featureDescription}>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Services & Process */}
              <section className={`${styles.section} ${styles.darkSection}`}>
                <div className={styles.container}>
                  <div className={styles.servicesGrid}>
                    <div className={styles.servicesContent}>
                      <h2 className={styles.sectionTitle}>Our Comprehensive Services</h2>

                      <div className={styles.servicesList}>
                        {[
                          "Student & Study Visas",
                          "Work Visas & Permits",
                          "Family & Spouse Visas",
                          "Visitor & Tourist Visas",
                          "Business & Investor Visas",
                          "Permanent Residency",
                          "Visa Refusal Appeals",
                          "Documentation & Notary"
                        ].map((service, index) => (
                          <div key={index} className={styles.serviceItem}>
                            <CheckCircle className={styles.serviceIcon} />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.processSection}>
                      <h3 className={styles.processTitle}>Our 6-Step Process</h3>
                      <div className={styles.processSteps}>
                        {[
                          { number: "01", title: "Free Consultation", desc: "Initial eligibility assessment" },
                          { number: "02", title: "Profile Analysis", desc: "Personalized strategy development" },
                          { number: "03", title: "Documentation", desc: "Comprehensive document preparation" },
                          { number: "04", title: "Application Filing", desc: "Accurate form submission" },
                          { number: "05", title: "Follow-up", desc: "Regular case tracking" },
                          { number: "06", title: "Post-Approval", desc: "Settlement guidance" }
                        ].map((step, index) => (
                          <div key={index} className={styles.processStep}>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepContent}>
                              <h4>{step.title}</h4>
                              <p>{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Global Coverage */}
              <section className={styles.section}>
                <div className={styles.container}>
                  <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Global Reach, Local Expertise</h2>
                    <p className={styles.sectionSubtitle}>Serving clients across major international destinations</p>
                  </div>

                  <div className={styles.countriesGrid}>
                    {[
                      { name: "United Kingdom", flag: "🇬🇧" },
                      { name: "United States", flag: "🇺🇸" },
                      { name: "Canada", flag: "🇨🇦" },
                      { name: "Australia", flag: "🇦🇺" },
                      { name: "Schengen Area", flag: "🇪🇺" },
                      { name: "New Zealand", flag: "🇳🇿" },
                      { name: "Japan", flag: "🇯🇵" },
                      { name: "Singapore", flag: "🇸🇬" },
                      { name: "UAE", flag: "🇦🇪" },
                      { name: "20+ More", flag: "🌍" }
                    ].map((country, index) => (
                      <div key={index} className={styles.countryCard}>
                        <span className={styles.countryFlag}>{country.flag}</span>
                        <span className={styles.countryName}>{country.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className={`${styles.section} ${styles.ctaSection}`}>
                <div className={styles.container}>
                  <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Begin Your Global Journey Today</h2>
                    <p className={styles.ctaText}>
                      Take the first step towards your international aspirations with
                      confidence and expert guidance.
                    </p>
                    <div className={styles.ctaButtons}>
                      <a href="tel:+917022213466" className={styles.primaryButton}>
                        📞 Free Eligibility Check
                      </a>
                      <a href="/contact" className={styles.secondaryButton}>
                        Schedule Consultation
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Contact Form Sidebar */}
            <div className={styles.formColumn}>
              <div className={styles.stickyFormContainer}>
                <VisaForm />
              </div>
            </div>
          </section>

        </div>

        {/* Reviews Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <ReviewSchema />
            <ReviewCarousel />
          </div>
        </section>

      </section>

    </>
  );
}