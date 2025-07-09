"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./page.module.css";
import clsx from "clsx";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { NextSeo, LocalBusinessJsonLd, FAQPageJsonLd } from "next-seo";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import AnimatedSection from '@/Components/AnimatedSection';
import AnimatedHR from "@/Components/AnimatedHR";


const text =
  "Global Visa Internationals | The Visa And Immigration Assistance Experts | We Deal With All Type Of Visas";

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
  const { executeRecaptcha } = useGoogleReCaptcha();
  const reviewCarouselRef = useRef(null);
  const videoCarouselRef = useRef(null);

  useEffect(() => {
    function duplicateCarouselItems(carouselRef) {
      if (carouselRef?.current) {
        const caroselTrack = carouselRef.current;
        const items = Array.from(caroselTrack.children);
        items.forEach((item) => {
          const clone = item.cloneNode(true);
          caroselTrack.appendChild(clone);
        });
      }
    }
    duplicateCarouselItems(reviewCarouselRef);
    duplicateCarouselItems(videoCarouselRef);
  }, []);
  // Clint Review
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Function to start auto slide
  const startAutoSlide = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
  }, []);

  // Run auto-slide on mount
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [startAutoSlide]);

  // Move slides manually
  const moveGallerySlide = (direction) => {
    clearInterval(intervalRef.current); // Reset auto-slide when manually changing
    setCurrentIndex(
      (prev) => (prev + direction + slides.length) % slides.length
    );
    startAutoSlide(); // Restart auto-slide after manual change
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // services section

  return (
    <>
      <head>
        <title>
          Top Visa Consultants in Bangalore | USA, Canada, UK,Australia, Europe
          Visa assistance Experts
        </title>
        <meta
          name="description"
          content="Leading immigration consultants in Bangalore offering expert visa services for Canada PR, USA, UK, Australia, Schengen, and more. Over 75,000 happy clients. Fast, genuine guidance and transparent pricing!"
        />
        <meta
          name="keywords"
          content="immigration consultants in bangalore, visa agents, canada pr, study abroad, work visa, visitor visa, dependent visa, business visa, refusal visa, fast visa services, immigration consultants, visa agents near me, canada immigration consultants, visa consultants near me, immigration agent, immigration agent near me, canada immigration consultants in bangalore, migration agents, visa consultancy services, visa consultants in bangalore, canada immigration services, canada immigration agency, spouse visa consultants, student visa consultants near me, canada immigration consultants near me, agent for visa application, study visa consultants near me, pr immigration consultants, work permit visa, immigration consulting services, study visa consultants, student visa consultants, student visa agent, spouse visa consultants near me, student visa agents near me, visa immigration consultants, australia immigration consultants in bangalore, tourist visa agents near me, visa agents in bangalore, canada pr immigration consultants, visa consultancy services near me, canada pr consultancy, immigration and visa consultants, golden visa consultancy, canada pr consultants in bangalore, visa application agents near me, work visa consultants near me, spouse visa agent, work visa consultants, visa travel agency"
        />
        <link
          rel="canonical"
          href="https://www.globalvisainternationals.com/"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph */}
        <meta
          property="og:url"
          content="https://www.globalvisainternationals.com/"
        />
        <meta
          property="og:title"
          content="Global Visa Internationals - Trusted Immigration Consultants in Bangalore"
        />
        <meta
          property="og:description"
          content="Over 75,000 happy clients. Expert PR, Work, Study & Visit visa services for Canada, Australia, USA, UK and more. Genuine, fast and transparent support."
        />
        <meta
          property="og:image"
          content="https://www.globalvisainternationals.com/banner.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:site_name" content="Global Visa Internationals" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GLOBALVISA1505" />
        <meta name="twitter:creator" content="@GLOBALVISA1505" />
        <meta
          name="twitter:title"
          content="Global Visa Internationals - Trusted Immigration Consultants in Bangalore"
        />
        <meta
          name="twitter:description"
          content="Over 75,000 happy clients. Expert PR, Work, Study & Visit visa services for Canada, Australia, USA, UK and more."
        />
        <meta
          name="twitter:image"
          content="https://www.globalvisainternationals.com/banner.webp"
        />

        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "@id": "https://www.globalvisainternationals.com/#organization",
              name: "Global Visa Internationals",
              description:
                "Trusted immigration consultants in Bangalore offering visa services for multiple countries including Canada, USA, UK, Australia, and Schengen.",
              url: "https://www.globalvisainternationals.com/",
              telephone: "+917022213466",
              address: {
                "@type": "PostalAddress",
                streetAddress: "GF-9, Business Point, Brigade Road",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560025",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9674808,
                longitude: 77.606117,
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
                  ],
                  opens: "10:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "14:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/globalvisa.globalvisa",
                "https://www.instagram.com/globalvisa_internationals/",
                "https://x.com/GLOBALVISA1505",
              ],
              potentialAction: {
                "@type": "ReserveAction",
                target: "https://www.globalvisainternationals.com/contact",
                result: {
                  "@type": "Thing",
                  name: "Book a free consultation",
                },
              },
            }),
          }}
        />

        {/* FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does Canada PR visa process take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The processing time for Canada PR visa varies but usually takes around 6-12 months.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What documents are required for Australia student visa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Documents typically include passport, admission letter, financial proof, health insurance, and police clearance certificate.",
                  },
                },
              ],
            }),
          }}
        />
      </head>

      <main className={styles.HomeSec}>
        {/* Background Image with Correct Styling */}
        <AnimatedSection direction="up"  reverseOnExit={true}>
        <section className={styles.thoughtSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/w-map.webp"
              alt="World Map Background"
              fill
              quality={100}
              className={styles.backgroundImage}
            />
          </div>
        </section>
        </AnimatedSection>

<AnimatedSection direction="right"  reverseOnExit={true}>
        <h1 className={styles.waveText}>
          Global Visa Internationals | The Visa And Immigration Assistance
          Experts | We Deal With All Type Of Visas
        </h1>
        </AnimatedSection>

        {/* About Us Section */}
        <AnimatedSection direction="right"  reverseOnExit={true}>
        <section id="aboutUs">
          <section className={styles.storyContainer}>
            
            <div className={styles.imageWrapper}>
              <Image
                src="/images/story.webp"
                alt="Best visa agents in Bangalore"
                fill
                quality={100}
                className={styles.responsiveImage1}
              />
            </div>
            

            {/* Text Section */}
            <div className={styles.textContent}>
              <h2 className={styles.subtitle}>Our Story</h2>
              <p>
                At Global Visa Internationals, we are your trusted visa
                consultant and immigration consultant, providing professional
                visa services and immigration services customized to suit your
                travel and settlement needs. Whether you're applying for a work
                permit, seeking visa assistance, or starting your visa
                application, our experienced team ensures you meet all necessary
                visa requirements with ease and confidence.
              </p>

              <p>
                We specialize in student visa consultant services for aspiring
                international students. From guiding you through the visa
                documentation checklist to offering detailed visa interview
                preparation, we simplify the process. As a leading Canada study
                visa consultant, UK study visa consultant, and USA study visa
                consultant, we offer dedicated support to help you achieve your
                academic dreams abroad. We also assist with tourist visas,
                including Canada tourist visa and Australia tourist visa
                applications.
              </p>

              <p>
                Our team of certified visa processing agents and professionals
                with verified immigration agent qualifications work diligently
                to reduce your visa processing time and increase your approval
                chances. Whether you're looking to study, work, or travel
                abroad, we deliver reliable, end-to-end solutions that open
                doors to global opportunities.
              </p>
              <p>
                Global Visa Internationals is a private Visa consultancy which
                is not affiliated with any government or embassy. We offer
                independent visa and immigration assistance & services.
              </p>
            </div>
           
          </section>
        </section>
         </AnimatedSection>

          <AnimatedHR direction="left" duration={1.2} />

          
        <section
          className={styles.whyChooseContainer}
          id="Why Global Visa Internationals?"
        >
          <AnimatedSection direction="down"  reverseOnExit={true}>
          <h2 className={styles.subtitle}>Why Global Visa Internationals?</h2>
          </AnimatedSection>
          <ul>
            <AnimatedSection direction="down"  reverseOnExit={true}>
            <li>
              At <strong>Global Visa Internationals</strong>, we specialize in
              comprehensive <strong>visa consultation services</strong>, helping
              individuals and families successfully navigate the complex visa
              process for over <strong>9+ years</strong>. Based in{" "}
              <strong>Bangalore</strong>, we've proudly processed{" "}
              <strong>55,000+ visas</strong> and conducted over{" "}
              <strong>75,000 expert consultations</strong> across all major visa
              categories.
            </li>

            <li>
              With nearly a decade of experience, our expert visa consultants
              have helped tens of thousands of clients confidently plan their
              global journeys. While we do not issue visas or represent any
              government body, we offer personalized advisory,{" "}
              <strong>documentation support</strong>, and eligibility guidance
              for all visa types.
            </li>

            <li>
              <h3>Our Services Include Expert Assistance With:</h3>
            </li>
            <ul>
              <li>
                <strong>Student Visa Assistance</strong> & Study Abroad Planning
              </li>
              <li>
                <strong>Work Visa Consultation</strong> for Professionals
              </li>
              <li>
                <strong>Tourist & Visitor Visa</strong> Assistance for Indian
                Citizens
              </li>
              <li>
                <strong>Business Travel Visa</strong> Assistance
              </li>
              <li>
                <strong>Permanent Residency (PR)</strong> Visa Guidance
              </li>
              <li>
                <strong>Skilled Migration Visa</strong> Support
              </li>
              <li>
                <strong>Spouse & Dependent Visa</strong> Assistance
              </li>
              <li>
                <strong>Refused Visa Reapplication</strong> & Review Services
              </li>
              <li>And more customized solutions…</li>
            </ul>

            <li>
              We provide end-to-end private visa consulting, ensuring your
              documents, eligibility, and travel goals align with the latest
              immigration requirements of your destination country.
            </li>
</AnimatedSection>
<AnimatedSection direction="down"  reverseOnExit={true}>
            <li>
              <h3>Popular Visa Destinations We Support:</h3>
            </li>
            <ul>
              <li>
                <strong>Canada Visa Assistance</strong> – Study, Work, PR
              </li>
              <li>
                <strong>Australia PR Visa Consulting</strong>
              </li>
              <li>
                <strong>UK Student Visa Assistance</strong>
              </li>
              <li>
                <strong>USA Visitor & Student Visa Guidance</strong>
              </li>
              <li>
                <strong>Europe Schengen Visa Assistance</strong>
              </li>
              <li>And many more global destinations…</li>
            </ul>

            <li>
              Whether you're planning to <strong>work in Australia</strong>,{" "}
              <strong>study in Canada</strong>, or{" "}
              <strong>travel to Europe</strong>, our independent consultancy
              provides step-by-step visa guidance tailored to your individual
              goals.
            </li>

            <li>
              Our <strong>experienced and certified consultants</strong> are
              committed to assisting you throughout the entire visa journey,
              ensuring clarity, compliance, and confidence at every step.
            </li>

            <li>
              We offer <strong>personalized immigration solutions</strong> for
              individuals, students, professionals, and families across India.
            </li>

            <li>
              Experience a{" "}
              <strong>transparent and trustworthy visa process</strong> with
              complete support—from eligibility check to successful application
              submission.
            </li>

            <li>
              <strong>Disclaimer:</strong> Global Visa Internationals is a
              private visa consultancy and is not affiliated with any government
              or embassy. We provide independent assistance and advisory
              services for visa and immigration processes.
            </li>
            </AnimatedSection>
          </ul>
        </section>
          <AnimatedHR direction="left" duration={1.2} />

          <AnimatedSection direction="down"  reverseOnExit={true}>
        <section>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <img
                className={styles.whyImg}
                src="/images/networking.png"
                alt="Visa and immigration industry experience"
                loading="lazy"
              />
              <strong>75+</strong>
              <p>Years of combined visa & immigration industry experience</p>
            </div>

            <div className={styles.whyCard}>
              <img
                className={styles.whyImg}
                src="/images/globe.png"
                alt="Immigration destinations offered"
                loading="lazy"
              />
              <strong>15+</strong>
              <p>Countries offered for study, work & PR immigration services</p>
            </div>

            <div className={styles.whyCard}>
              <img
                className={styles.whyImg}
                src="/images/crowd-of-users.png"
                alt="Skilled migration and business visa options"
                loading="lazy"
              />
              <strong>50+</strong>
              <p>Visa options including skilled migration & business visas</p>
            </div>

            <div className={styles.whyCard}>
              <img
                className={styles.whyImg}
                src="/images/airplane.png"
                alt="Successful immigration cases"
                loading="lazy"
              />
              <strong>35,000+</strong>
              <p>Successful visa & immigration cases processed worldwide</p>
            </div>

            <div className={styles.whyCard}>
              <img
                className={styles.whyImg}
                src="/images/calendar.png"
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


<AnimatedSection direction="down"  reverseOnExit={true}>
        <section id="Client Reviews">
          <div
            className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5"
            data-elfsight-app-lazy
          ></div>
        </section>
</AnimatedSection>

<AnimatedSection direction="up"  reverseOnExit={true}>
        <section id="gallery">
          <h2 className={styles.subtitle}>Gallery</h2>
          <div className={styles.galleryCarouselWrapper}>
            <div className={styles.galleryCarousel}>
              {slides.map((src, index) => {
                let positionClass = styles.hidden;
                if (index === currentIndex) positionClass = styles.active;
                else if (
                  index ===
                  (currentIndex - 1 + slides.length) % slides.length
                )
                  positionClass = styles.prev;
                else if (index === (currentIndex + 1) % slides.length)
                  positionClass = styles.next;

                return (
                  <div
                    key={index}
                    className={`${styles.gallerySlide} ${positionClass}`}
                  >
                    <img src={src} loading="lazy" alt={`Slide ${index + 1}`} />
                  </div>
                );
              })}
            </div>
            <button
              className={clsx(styles.galleryNavBtn, styles.galleryPrevBtn)}
              onClick={() => moveGallerySlide(-1)}
            >
              &#10094;
            </button>
            <button
              className={clsx(styles.galleryNavBtn, styles.galleryNextBtn)}
              onClick={() => moveGallerySlide(1)}
            >
              &#10095;
            </button>
          </div>
        </section>

        </AnimatedSection>
          <AnimatedHR direction="left" duration={1.2} />

        {/* Our Values */}

        <section id="Our Values">
          <h2 className={styles.subtitle}>Our Values</h2>
          <section
            className={styles.missionVisionValues}
            id="missionVisionValues"
          >
            <AnimatedSection direction="right"  reverseOnExit={true}>
            <div className={styles.missionCard}>
              <h2 className={styles.subtitle}>OUR MISSION</h2>
              <div>
                <img
                  className={styles.custImg}
                  src="/images/target.png"
                  alt="Mission Icon"
                  loading="lazy"
                />
              </div>
              <p>
                At Global Visa Internationals, our mission is to simplify and
                streamline the complex process of international immigration and
                visa application services. We are committed to delivering clear,
                ethical, and expert visa consultancy to individuals, families,
                students, skilled professionals, and business travelers across
                the globe. <br />
                By combining deep immigration industry experience, personalized
                attention, and AI-powered visa processing tools, we enable our
                clients to pursue study abroad opportunities, international
                employment, business expansion, or personal travel with total
                confidence..
                <br /> Whether it's a tourist visa, student visa, work permit,
                or permanent residency, we stand by our clients at every stage,
                offering end-to-end support that transforms dreams into global
                realities.
              </p>
            </div>
</AnimatedSection>

<AnimatedSection direction="down"  reverseOnExit={true}>
            <div className={styles.visionCard}>
              <h2 className={styles.subtitle}>OUR VISION</h2>
              <div>
                <img
                  className={styles.custImg}
                  src="/images/focus.png"
                  alt="Vision Icon"
                  loading="lazy"
                />
              </div>
              <p>
                Our vision at Global Visa Internationals is to become the
                world’s most trusted, innovative, and client-focused immigration
                consultancy. We believe that the future of immigration lies in
                breaking barriers and building global bridges—where borders are
                not obstacles, but gateways to opportunity, growth, and personal
                transformation.
              </p>
              <p>
                We aim to lead the global immigration industry through a
                client-centric approach, providing customized, fast, and
                reliable visa solutions. With a relentless focus on
                transparency, service excellence, and continuous improvement, we
                aspire to be the first choice for individuals, families, and
                enterprises seeking seamless global mobility across all visa
                categories.
              </p>
            </div>
</AnimatedSection>
<AnimatedSection direction="left"  reverseOnExit={true}>
            <div className={styles.valuesCard}>
              <h2 className={styles.subtitle}>CORE VALUES</h2>
              <div>
                <img
                  className={styles.custImg}
                  src="/images/global-service.png"
                  alt="Core Values Icon"
                  loading="lazy"
                />
              </div>
              <p>
                <strong>Transparency :</strong> We provide clear, honest, and
                straightforward guidance. Our clients are always informed,
                empowered, and in control of their immigration journey. <br />
                <strong>Client-First Policy : </strong>
                Every client matters. We personalize our services to align with
                your unique goals, ensuring tailored strategies for maximum
                success. <br />
                <strong>Empathy :</strong> Immigration is personal. We
                understand the emotions and life transitions involved, and
                support our clients with compassion and care.
                <br />
                <strong>Accountability</strong>
                We take full responsibility for every step of the process—your
                success is our success, and your trust is our highest priority.{" "}
                <br />
                <strong>Global Perspective</strong>
                We operate with a global mindset. Our advice is always informed
                by up-to-date immigration laws, global trends, and local
                nuances.
              </p>
            </div>
            </AnimatedSection>
          </section>
        </section>

          <AnimatedHR direction="left" duration={1.2} />
        {/* Our Visa & Immigration Services */}

        <section className={styles.services}>
          <div className={styles.visaCard}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.top1}>
                  <img src="/svg/Tourist-Visa.webp" alt="Business Visa" />
                  <h3>Tourist Visa Assistance</h3>
                </div>
                <div className={styles.top2}>
                  Contact Global Visa Internationals For Business Visa
                  assistance
                </div>
              </div>

              <div className={styles.cardBack}>
                <h3>Tourist Visa</h3>
                <ul>
                  <li>
                    <a href="/Visa/tourist-visa/canada">CANADA</a>
                  </li>
                  <li>
                    <a href="/Visa/tourist-visa/australia">AUSTRALIA</a>
                  </li>
                  <li>
                    <a href="/Visa/tourist-visa/usa">USA</a>
                  </li>
                  <li>
                    <a href="/Visa/tourist-visa/uk">UK</a>
                  </li>
                  <li>
                    <a href="/Visa/tourist-visa/europe">EUROPE</a>
                  </li>
                  <li>
                    <a href="/Visa/tourist-visa/japan">JAPAN</a>
                  </li>
                  <li>
                    <a href="/Visa/tourist-visa/dubai">DUBAI</a>
                  </li>
                  <li>
                    <a href="/Visa/tourist-visa/singapore">SINGAPORE</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.visaCard}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.top1}>
                  <img src="/svg/business-visa.webp" alt="Business Visa" />
                  <h3>Business Visa Assistance</h3>
                </div>
                <div className={styles.top2}>
                  Contact Global Visa Internationals For Business Visa
                  assistance
                </div>
              </div>

              <div className={styles.cardBack}>
                <h3>Business Visa</h3>
                <ul>
                  <li>
                    {" "}
                    <a href="/Visa/business/canada">CANADA</a>
                  </li>
                  <li>
                    <a href="/Visa/business/australia">AUSTRALIA</a>
                  </li>
                  <li>
                    <a href="/Visa/business/uk">UK</a>
                  </li>
                  <li>
                    <a href="/Visa/business/europe">EUROPE</a>
                  </li>
                  <li>
                    <a href="/Visa/business/new-zealand">NEW-ZEALAND</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.visaCard}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.top1}>
                  <img src="/svg/PR-Visa.webp" alt="Permanent Resident Visa" />
                  <h3>PR visa Assistance</h3>
                </div>
                <div className={styles.top2}>
                  Contact Global Visa Internationals For Permanent Resident visa
                  assistance
                </div>
              </div>

              <div className={styles.cardBack}>
                <h4>Permanent Resident visa</h4>
                <ul>
                  <li>
                    <a href="/Visa/permanent-residency-visa/canada">CANADA</a>
                  </li>
                  <li>
                    <a href="/Visa/permanent-residency-visa/australia">
                      AUSTRALIA
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.visaCard}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.top1}>
                  <img src="/svg/student-visa.webp" alt="Student Visa" />
                  <h3>Student Visa Assistance</h3>
                </div>
                <div className={styles.top2}>
                  Contact Global Visa Internationals For Student Visa assistance
                </div>
              </div>

              <div className={styles.cardBack}>
                <h3>Student Visa</h3>
                <ul>
                  <li>
                    <a href="/Visa/student-visa/canada">CANADA</a>
                  </li>
                  <li>
                    <a href="/Visa/student-visa/australia">AUSTRALIA</a>
                  </li>
                  <li>
                    <a href="/Visa/student-visa/usa">USA</a>
                  </li>
                  <li>
                    <a href="/Visa/student-visa/uk">UK</a>
                  </li>
                  <li>
                    <a href="/Visa/student-visa/europe">EUROPE</a>
                  </li>
                  <li>
                    <a href="/Visa/student-visa/new-zealand">NEW-ZEALAND</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.visaCard}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.top1}>
                  <img src="/svg/Dependent Visa.webp" alt="Business Visa" />
                  <h3>Dependent Visa Assistance</h3>
                </div>
                <div className={styles.top2}>
                  Contact Global Visa Internationals For Dependent Visa
                  assistance
                </div>
              </div>

              <div className={styles.cardBack}>
                <h2>Dependent Visa</h2>
                <ul>
                  <li>
                    <a href="/Visa/Dependent/canada">CANADA</a>
                  </li>
                  <li>
                    <a href="/Visa/Dependent/australia">AUSTRALIA</a>
                  </li>
                  <li>
                    <a href="/Visa/Dependent/uk">UK</a>
                  </li>
                  <li>
                    <a href="/Visa/Dependent/europe">EUROPE</a>
                  </li>
                  <li>
                    <a href="/Visa/Dependent/new-zealand">NEW-ZEALAND</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.visaCard}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.top1}>
                  <img src="/svg/refusal visa.webp" alt="Refusal Visa" />
                  <h3>Refusal Visa Assistance</h3>
                </div>
                <div className={styles.top2}>
                  Contact Global Visa Internationals For Business Visa
                  assistance
                </div>
              </div>

              <div className={styles.cardBack}>
                <h3>Refusal Visa</h3>
                <ul>
                  <li>
                    <a href="/Visa/refusal-visa/canada">CANADA</a>
                  </li>
                  <li>
                    <a href="/Visa/refusal-visa/australia">AUSTRALIA</a>
                  </li>
                  <li>
                    <a href="/Visa/refusal-visa/usa">USA</a>
                  </li>
                  <li>
                    <a href="/Visa/refusal-visa/uk">UK</a>
                  </li>
                  <li>
                    <a href="/Visa/refusal-visa/europe">EUROPE</a>
                  </li>
                  <li>
                    <a href="/Visa/refusal-visa/japan">JAPAN</a>
                  </li>
                  <li>
                    <a href="/Visa/refusal-visa/dubai">DUBAI</a>
                  </li>
                  <li>
                    <a href="/Visa/refusal-visa/singapore">SINGAPORE</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

          <AnimatedHR direction="left" duration={1.2} />
        <h2 className={styles.subtitle}> Contact</h2>
        <section className={styles.dataForm}>
          <div className={styles.formSection}>
            <VisaForm />
          </div>

          <div className={styles.faqSection}>
            <h2 className={styles.textXl}>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""}`}
              >
                <div
                  className={styles.faqQuestion}
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div className={styles.faqAnswer}>{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

          <AnimatedHR direction="left" duration={1.2} />


        <section id={styles.clientReview}>
          <h2 id={styles.clientVideo} className={styles.subtitle}>
            Client Testimonial{" "}
          </h2>
          <div className={styles.videoContainer}>
            <div className={styles.videoCarousel}>
              <div className={styles.carouselTrack}>
                <div className={styles.videoTestimonial}>
                  <video
                    src="/Videos/A-Big-Win-We-are-thrilled-to-announce-that-our-client-has-successfully-obtained-their-Spain-Tourist-UK-Business-visa.webm"
                    controls
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                  ></video>
                </div>
                <div className={styles.videoTestimonial}>
                  <video
                    src="/Videos/Another-Grateful-Client-They-trusted-Global-visa-internationals-WE-guided-them-to-get-Germany-visitor-visa-for-whole-5years.webm"
                    controls
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                  ></video>
                </div>
                <div className={styles.videoTestimonial}>
                  <video
                    src="/Videos/congratulations Tenzin Gombu! For Getting Uk Visiter Visa.webm"
                    controls
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                  ></video>
                </div>
                <div className={styles.videoTestimonial}>
                  <video
                    src="/Videos/Congratulations-Bhavya-and-family-For-receiving-3-Australian-visa-within-a-week.webm"
                    controls
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                  ></video>
                </div>
                <div className={styles.videoTestimonial}>
                  <video
                    src="/Videos/Congratulations-on-obtaining-your-UK-visa-Praveen-We-are-pleased-to-inform-you-that-the-previous-refusal-has-been-successfully-overturned.webm"
                    controls
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                  ></video>
                </div>
                <div className={styles.videoTestimonial}>
                  <video
                    src="/Videos/Germany-Visitor-Visa-Approved-5-Years.webm"
                    controls
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                  ></video>
                </div>
                <div className={styles.videoTestimonial}>
                  <video
                    src="/Videos/Grateful-Clients-Trusted-Guidance-Another-Successful-Australian-Immigration-Journey.webm"
                    controls
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                  ></video>
                </div>
                <div className={styles.videoTestimonial}>
                  <video
                    src="/Videos/We-are-thrille- to-announce-that-our-client-has-successfully-obtained-their-Spain-Tourist-UK-Business-visa.webm"
                    controls
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <p className={styles.note}>
          {" "}
          This service is provided by Global Visa Internationals, an independent
          consultancy. We are not affiliated with the Australian Government or
          any embassy.
        </p>

      </main>
    </>
  );
}
