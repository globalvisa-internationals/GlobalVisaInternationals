"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./page.module.css";
import clsx from "clsx";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { NextSeo, LocalBusinessJsonLd, FAQPageJsonLd } from 'next-seo';
import Head from "next/head";


const text = "Global Visa Internationals | The Visa And Immigration Assistance Experts | We Deal With All Type Of Visas";

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
    question: 'My visa was refused. Can I reapply?',
    answer: 'Yes—just address the reasons for the refusal and reapply with the necessary documentation.',
  },
  {
    question: 'How can I qualify for the Canada PR Visa Program?',
    answer: 'Firstly, the candidate should have an eligible occupation under the NOC 0, A, and B for Canada PR Visa...',
  },
  {
    question: 'Can my spouse work on a dependent visa?',
    answer: 'It varies by country; some grant work rights automatically, while others require a separate permit.',
  },
  {
    question: 'Can I work on a student visa?',
    answer: 'Yes, often up to 20 hours per week during term time (and sometimes full-time during breaks).',
  },
  {
    question: 'How long is the Portugal Job Seeker Visa valid for?',
    answer: 'The visa is initially valid for 120 days. If you do not find a job within this period, it can be extended for an additional 60 days, making the total potential stay up to 180 days.',
  },
  {
    question: 'Who is eligible for an Austrian job seeker visa?',
    answer: 'To apply for an Austrian job seeker visa, you must be a Non-EU citizen, have a recognized higher education degree...',
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
    setCurrentIndex((prev) => (prev + direction + slides.length) % slides.length);
    startAutoSlide(); // Restart auto-slide after manual change
  };



  //Form Section

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    if (!(form instanceof HTMLFormElement)) {
      alert("❌ Unexpected form submission target.");
      return;
    }
    const formData = new FormData(form);
    if (!executeRecaptcha) {
      alert("❌ reCAPTCHA not ready");
      return;
    }

    const token = await executeRecaptcha("inquiry_form");

    if (!token) {
      alert("❌ Please verify you're not a robot");
      return;
    }

    const payload = {
      ...Object.fromEntries(formData.entries()),
      recaptchaToken: token,
    };

    // Optimistic UX
    setShowPopup(true);
    form.reset();

    setTimeout(() => {
      setShowPopup(false);
    }, 4000);



    // Send email in background
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then(async (res) => {
      const data = await res.json();
      if (!data.success) {
        alert("❌ Email sending failed. Please try again.");
      }
    }).catch((err) => {
      alert("❌ Something went wrong while submitting the form.");
      console.error(err);
    }).finally(() => {
      setIsSubmitting(false);
    });
  };








  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // services section


  return (
    <>
      <head>
        <title>Global Visa Internationals | Trusted Immigration Consultants in Bangalore</title>
        <meta name="description" content="Leading immigration consultants in Bangalore offering expert visa services for Canada PR, USA, UK, Australia, Schengen, and more. Over 75,000 happy clients. Fast, genuine guidance and transparent pricing!" />
        <meta name="keywords" content="immigration consultants in bangalore, visa agents, canada pr, study abroad, work visa, visitor visa, dependent visa, business visa, refusal visa, fast visa services, immigration consultants, visa agents near me, canada immigration consultants, visa consultants near me, immigration agent, immigration agent near me, canada immigration consultants in bangalore, migration agents, visa consultancy services, visa consultants in bangalore, canada immigration services, canada immigration agency, spouse visa consultants, student visa consultants near me, canada immigration consultants near me, agent for visa application, study visa consultants near me, pr immigration consultants, work permit visa, immigration consulting services, study visa consultants, student visa consultants, student visa agent, spouse visa consultants near me, student visa agents near me, visa immigration consultants, australia immigration consultants in bangalore, tourist visa agents near me, visa agents in bangalore, canada pr immigration consultants, visa consultancy services near me, canada pr consultancy, immigration and visa consultants, golden visa consultancy, canada pr consultants in bangalore, visa application agents near me, work visa consultants near me, spouse visa agent, work visa consultants, visa travel agency" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph */}
        <meta property="og:url" content="https://www.globalvisainternationals.com/" />
        <meta property="og:title" content="Global Visa Internationals - Trusted Immigration Consultants in Bangalore" />
        <meta property="og:description" content="Over 75,000 happy clients. Expert PR, Work, Study & Visit visa services for Canada, Australia, USA, UK and more. Genuine, fast and transparent support." />
        <meta property="og:image" content="https://www.globalvisainternationals.com/banner.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:site_name" content="Global Visa Internationals" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GLOBALVISA1505" />
        <meta name="twitter:creator" content="@GLOBALVISA1505" />
        <meta name="twitter:title" content="Global Visa Internationals - Trusted Immigration Consultants in Bangalore" />
        <meta name="twitter:description" content="Over 75,000 happy clients. Expert PR, Work, Study & Visit visa services for Canada, Australia, USA, UK and more." />
        <meta name="twitter:image" content="https://www.globalvisainternationals.com/banner.webp" />

        {/* LocalBusiness JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "@id": "https://www.globalvisainternationals.com/#organization",
            "name": "Global Visa Internationals",
            "description": "Trusted immigration consultants in Bangalore offering visa services for multiple countries including Canada, USA, UK, Australia, and Schengen.",
            "url": "https://www.globalvisainternationals.com/",
            "telephone": "+917022213466",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "GF-9, Business Point, Brigade Road",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "560025",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 12.9674808,
              "longitude": 77.606117
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
                ],
                "opens": "10:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "14:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/globalvisa.globalvisa",
              "https://www.instagram.com/globalvisa_internationals/",
              "https://x.com/GLOBALVISA1505"
            ],
            "potentialAction": {
              "@type": "ReserveAction",
              "target": "https://www.globalvisainternationals.com/contact",
              "result": {
                "@type": "Thing",
                "name": "Book a free consultation"
              }
            }
          })
        }} />

        {/* FAQPage JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does Canada PR visa process take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The processing time for Canada PR visa varies but usually takes around 6-12 months."
                }
              },
              {
                "@type": "Question",
                "name": "What documents are required for Australia student visa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Documents typically include passport, admission letter, financial proof, health insurance, and police clearance certificate."
                }
              }
            ]
          })
        }} />
      </head>


      <main className={styles.HomeSec}>


        {/* Background Image with Correct Styling */}
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

        <h1 className={styles.waveText}>
      Global Visa Internationals | The Visa And Immigration Assistance Experts | We Deal With All Type Of Visas
    </h1>

        {/* About Us Section */}
        <section id="aboutUs">
          <section className={styles.storyContainer}>

            <div className={styles.imageWrapper}>
              <Image
                src="/images/story.webp"
                alt="Our Story Image"
                fill
                quality={100}
                className={styles.responsiveImage1}
              />

            </div>

            {/* Text Section */}
            <div className={styles.textContent}>
              <h2 className={styles.subtitle}>Our Story</h2>
              <p>Global Visa Internationals is one of Finest private visa consultancy, provides expert visa assistance to individuals and families planning to study, work, or travel abroad. With over 7+ years of experience, we’ve successfully assisted with 55,000+ visa applications and conducted 75,000+ expert consultations, helping our clients achieve their international goals.</p>

              <p>We are the private visa and immigration consultancy wchich is located in Bangalore, offering personalized Visa assistance to simplify complex visa procedures. Our support covers a wide range of categories — including education, employment, travel, and relocation. We are committed to offering clarity, transparency, and results in all our services.</p>

              <p>Our Visa Support Services Include: Student Visa Assistance for higher education abroad
                ,Work Visa assistance for professionals aiming to grow internationally, Tourist & Visitor Visa Help for stress-free travel, Business Visa Consultation for entrepreneurs and professionals, PR & Skilled Immigration Advice for long-term relocation goals, Family / Dependent Visa Support to reunite loved ones, Visa Refusal Assistance and reapplication guidance
              </p>
              <p>Global Visa Internationals is a private Visa consultancy which is not affiliated with any government or embassy. We offer independent visa and immigration assistance & services.</p>
            </div>
          </section>

        </section>


        <section className={styles.whyChooseContainer} id="Why Global Visa Internationals?">
          <h2 className={styles.subtitle}>Why Global Visa Internationals?</h2>
          <ul>
            <li>At Global Visa Internationals, we specialize in comprehensive visa consultation services, helping individuals and families successfully navigate the complex visa process for over 9+ years.Based in Bangalore, we've proudly processed 55,000+ visas and conducted 75,000+ expert consultations across all major visa categories.</li>
            <li>With over 9 years of experience, our expert consultants have helped 75,000+ clients confidently prepare for their global journeys. We do not issue visas or represent any government body—we specialize in personalized advisory and document assistance for visa applications.</li>

            <h3><li> Our Services Include Expert Assistance With:</li></h3>
            <ul>
              <li>Study Abroad Planning / Student Visa Assistance </li>
              <li>Work  Visa Assistance </li>
              <li>Tourist & Visitor Visa Assistance for Indian Citizens</li>
              <li>Business Travel Visa Assistancet</li>
              <li>PR (Permanent Residency) Assistance </li>
              <li>Skilled Migration Assistance</li>
              <li>Spouse / Dependent Visa Assistancet </li>
              <li>Refused Visa Case Reviews & Reapplication Assistance</li>
              and more
            </ul>
            <li>We offer end-to-end private visa consultation, ensuring that your documents, eligibility, and goals are aligned with your chosen and country's requirements.</li>
            <h3><li>Popular Destinations We Support:</li></h3>
            <ul>
              <li>Canada visa Assistance </li>
              <li>Australia PR Visa Assistance </li>
              <li>Canada PR Visa Assistance</li>
              <li>UK Student visa Assistance </li>
              <li>USA visitor visa Assistance</li>
              <li>Europe visa Assistance </li>
              <li>And more…</li>
            </ul>

            <li>Whether you're aiming to work in Australia, study in Canada, or explore Europe, our independent team offers step-by-step Guidence according to your goals.</li>

            <li>Our Experienced & Certified Team are dedicated to guiding you every step of the way in your visa journey from India.
            </li>
            <li>We offer Personalized Immigration Solutions for individuals, students, professionals, and families seeking visas from India</li>
            <li>Experience a Transparent and Trustworthy Process with complete support from start to finish for your visa needs in India.</li>
          </ul>

        </section>
        <section >
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <img className={styles.whyImg} src="/images/networking.png" alt="network" loading="lazy" />
              <strong>75+</strong>
              <p>
                Years of combined industry experience</p>
            </div>

            <div className={styles.whyCard}>
              <img className={styles.whyImg} src="/images/globe.png" alt="connections" loading="lazy" />
              <strong>15+</strong>
              <p>
                Countries offered as immigration destinations</p>
            </div>

            <div className={styles.whyCard}>
              <img className={styles.whyImg} src="/images/crowd-of-users.png" loading="lazy" alt="" />
              <strong>50+</strong>
              <p>
                Visa options for skilled and business categories</p>
            </div>

            <div className={styles.whyCard}>
              <img className={styles.whyImg} src="/images/airplane.png" loading="lazy" alt="" />
              <strong>35000+</strong>
              <p>
                Immigrations executed</p>
            </div>
            <div className={styles.whyCard}>
              <img className={styles.whyImg} src="/images/calendar.png" loading="lazy" alt="" />
              <strong>Since 2017</strong>

              <p>Over One decades of excellence</p>
            </div>
          </div>
        </section>

        <section id='Client Reviews'>
          <h2 className={styles.subtitle}>Client Reviews</h2>
          <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
        </section>

        <section id="gallery">
          <h2 className={styles.subtitle}>Gallery</h2>
          <div className={styles.galleryCarouselWrapper}>
            <div className={styles.galleryCarousel}>
              {slides.map((src, index) => {
                let positionClass = styles.hidden;
                if (index === currentIndex) positionClass = styles.active;
                else if (index === (currentIndex - 1 + slides.length) % slides.length) positionClass = styles.prev;
                else if (index === (currentIndex + 1) % slides.length) positionClass = styles.next;

                return (
                  <div key={index} className={`${styles.gallerySlide} ${positionClass}`}>
                    <img src={src} loading="lazy" alt={`Slide ${index + 1}`} />
                  </div>
                );
              })}
            </div>
            <button className={clsx(styles.galleryNavBtn, styles.galleryPrevBtn)} onClick={() => moveGallerySlide(-1)}>
              &#10094;
            </button>
            <button className={clsx(styles.galleryNavBtn, styles.galleryNextBtn)} onClick={() => moveGallerySlide(1)}>
              &#10095;
            </button>
          </div>
        </section>


        {/* Our Values */}
        <section id='Our Values'>
          <h2 className={styles.subtitle}>Our Values</h2>
          <section className={styles.missionVisionValues} id="missionVisionValues">
            <div className={styles.missionCard}>
              <h2 className={styles.subtitle}>OUR MISSION</h2>
              <div >
                <img className={styles.custImg} src="/images/target.png" alt="Mission Icon" loading="lazy" />
              </div>
              <p>
                At Global Visa Internationals, our mission is to simplify and streamline the complex process of international immigration and visa application services. We are committed to delivering clear, ethical, and expert visa consultancy to individuals, families, students, skilled professionals, and business travelers across the globe. <br />
                By combining deep immigration industry experience, personalized attention, and AI-powered visa processing tools, we enable our clients to pursue study abroad opportunities, international employment, business expansion, or personal travel with total confidence..
                <br /> Whether it's a tourist visa, student visa, work permit, or permanent residency, we stand by our clients at every stage, offering end-to-end support that transforms dreams into global realities.</p>
            </div>

            <div className={styles.visionCard}>
              <h2 className={styles.subtitle}>OUR VISION</h2>
              <div >
                <img className={styles.custImg} src="/images/focus.png" alt="Vision Icon" loading="lazy" />
              </div>
              <p>
                Our vision at Global Visa Internationals is to become the world’s most trusted, innovative, and client-focused immigration consultancy. We believe that the future of immigration lies in breaking barriers and building global bridges—where borders are not obstacles, but gateways to opportunity, growth, and personal transformation.</p>
              <p>
                We aim to lead the global immigration industry through a client-centric approach, providing customized, fast, and reliable visa solutions. With a relentless focus on transparency, service excellence, and continuous improvement, we aspire to be the first choice for individuals, families, and enterprises seeking seamless global mobility across all visa categories.
              </p>
            </div>

            <div className={styles.valuesCard}>
              <h2 className={styles.subtitle}>CORE VALUES</h2>
              <div >
                <img className={styles.custImg} src="/images/global-service.png" alt="Core Values Icon" loading="lazy" />
              </div>
              <p><strong>Transparency :</strong> We provide clear, honest, and straightforward guidance. Our clients are always informed, empowered, and in control of their immigration journey. <br />
                <strong>Client-First Policy : </strong>
                Every client matters. We personalize our services to align with your unique goals, ensuring tailored strategies for maximum success. <br />
                <strong>Empathy :</strong> Immigration is personal. We understand the emotions and life transitions involved, and support our clients with compassion and care.
                <br />
                <strong>Accountability</strong>
                We take full responsibility for every step of the process—your success is our success, and your trust is our highest priority. <br />
                <strong>Global Perspective</strong>
                We operate with a global mindset. Our advice is always informed by up-to-date immigration laws, global trends, and local nuances.
              </p>


            </div>
          </section>
        </section>

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
                  Contact Global Visa Internationals For Business Visa assistance
                </div>
              </div>

              <div className={styles.cardBack}>
                <h3>Tourist Visa</h3>
                <ul>
                  <li><a href="/Visa/tourist-visa/canada">CANADA</a></li>
                  <li><a href="/Visa/tourist-visa/australia">AUSTRALIA</a></li>
                  <li><a href="/Visa/tourist-visa/usa">USA</a></li>
                  <li><a href="/Visa/tourist-visa/uk">UK</a></li>
                  <li><a href="/Visa/tourist-visa/europe">EUROPE</a></li>
                  <li><a href="/Visa/tourist-visa/japan">JAPAN</a></li>
                  <li><a href="/Visa/tourist-visa/dubai">DUBAI</a></li>
                  <li><a href="/Visa/tourist-visa/singapore">SINGAPORE</a></li>
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
                  Contact Global Visa Internationals For Business Visa assistance
                </div>
              </div>

              <div className={styles.cardBack}>
                <h3>Business Visa</h3>
                <ul>
                  <li > <a href="/Visa/business/canada">CANADA</a></li>
                  <li><a href="/Visa/business/australia">AUSTRALIA</a></li>
                  <li><a href="/Visa/business/uk">UK</a></li>
                  <li><a href="/Visa/business/europe">EUROPE</a></li>
                  <li><a href="/Visa/business/new-zealand">NEW-ZEALAND</a></li>
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
                  Contact Global Visa Internationals For Permanent Resident visa assistance
                </div>
              </div>

              <div className={styles.cardBack}>
                <h4>Permanent Resident visa</h4>
                <ul>

                  <li ><a href="/Visa/permanent-residency-visa/canada">CANADA</a></li>
                  <li><a href="/Visa/permanent-residency-visa/australia">AUSTRALIA</a></li>

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

          <div className={styles.visaCard}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.top1}>
                  <img src="/svg/Dependent Visa.webp" alt="Business Visa" />
                  <h3>Dependent Visa Assistance</h3>
                </div>
                <div className={styles.top2}>
                  Contact Global Visa Internationals For Dependent Visa assistance
                </div>
              </div>

              <div className={styles.cardBack}>
                <h2>Dependent Visa</h2>
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

          <div className={styles.visaCard}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.top1}>
                  <img src="/svg/refusal visa.webp" alt="Refusal Visa" />
                  <h3>Refusal Visa Assistance</h3>
                </div>
                <div className={styles.top2}>
                  Contact Global Visa Internationals For Business Visa assistance
                </div>
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


        <h2 className={styles.subtitle}> Contact</h2>
        <section className={styles.dataForm}>

          <div className={styles.formSection}>
            <h2>Visa Inquiry Form</h2>
            <form id="inquiry-form" onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div>
                  <input className={styles.input} type="text" name="name" placeholder="Enter your name" required />
                </div>
                <div>
                  <input className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <select className={styles.select} name="country" required>
                    <option value="">Select Country</option>
                    {["Canada", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select className={styles.select} name="immigration_type" required>
                    <option value="">Select Immigration Type</option>
                    {["Work Visa", "Student Visa", "Visitor/Tourist Visa", "Business Visa", "Dependent Visa", "Permanent Residency Visa"].map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <input className={styles.input} type="number" name="applicants" min="1" placeholder="Enter number" required />
                </div>
                <div>
                  <select className={styles.select} name="age" required>
                    <option value="">Select Age</option>
                    <option value="18-45">18-45</option>
                    <option value="45+">45+</option>
                  </select>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <select className={styles.select} name="education" required>
                    <option value="">Select Qualification</option>
                    {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                      <option key={edu} value={edu}>{edu}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <input className={styles.input} type="email" name="email" placeholder="Enter your email" required />
                </div>
              </div>


              <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

            </form>
            {showPopup && (
              <div className={styles.popupOverlay}>
                <div className={styles.popupContent}>
                  <p>✅ Your form has been submitted successfully!</p>
                  <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
              </div>
            )}
          </div>



          <div className={styles.faqSection}>
            <h2 className={styles.textXl}>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              >
                <div
                  className={styles.faqQuestion}
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div className={styles.faqAnswer}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </section>


        <section id={styles.clientReview}>


          <h2 id={styles.clientVideo} className={styles.subtitle}>Visa Services</h2>
          <div className={styles.videoContainer}>
            <div className={styles.videoCarousel}>
              <div className={styles.carouselTrack}>
                <div className={styles.videoTestimonial}><video src="/Videos/1.mp4" controls loop autoPlay muted loading="lazy"></video></div>
                <div className={styles.videoTestimonial}><video src="/Videos/2.mp4" controls loop autoPlay muted loading="lazy"></video></div>
                <div className={styles.videoTestimonial}><video src="/Videos/3.mp4" controls loop autoPlay muted loading="lazy"></video></div>
                <div className={styles.videoTestimonial}><video src="/Videos/4.mp4" controls loop autoPlay muted loading="lazy"></video></div>
                <div className={styles.videoTestimonial}><video src="/Videos/5.mp4" controls loop autoPlay muted loading="lazy" ></video></div>
              </div>
            </div>
          </div>
        </section>


        <section >
          <div className={styles.containerLoc}>

            <div className={styles.map}>
              <iframe className={styles.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.00853848403034!2d77.60577367689068!3d12.967480835531479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d5613d9a4b%3A0xea0b2fbdf4f08876!2sGlobal%20Visa%20Internationals!5e0!3m2!1sen!2sin!4v1741000774951!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"> </iframe>

            </div>

          </div>
        </section>
        <p className={styles.note}> This service is provided by Global Visa Internationals, an independent consultancy. We are not affiliated with the Australian Government or any embassy.</p>

      </main>

    </>
  );
}


