"use client";
import VisaForm from '@/Components/VisaForm';
import styles from './Europe.module.css';
import React, { useState, useEffect } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Australia() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com",
    "logo": "https://www.globalvisainternationals.com/gvilogo.png",
    "description": "Global Visa Internationals provides expert guidance for your Europe (Schengen) tourist visa application. Contact us today!",
    "founder": {
      "@type": "Organization",
      "name": "Naveen Kumar J"
    },
    "foundingDate": "2016",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MG Road",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560025",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7022213466",
      "contactType": "Customer Support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Kannada", "Tamil"]
    },
    "areaServed": ["IN", "EU"],
    "sameAs": [
      "https://www.facebook.com/GlobalVisaInternationals",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/globalvisainternationals"
      // Add more links if you have Twitter, YouTube, etc.
    ]

  };
  const { executeRecaptcha } = useGoogleReCaptcha();
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
  //reviews
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // FAQ content (built only from facts already on this page). Used for the
  // visible FAQ section AND the FAQPage schema so the two always match.
  const faqs = [
    {
      q: "Do I need a visa to visit Europe from India?",
      a: "Indian travellers need a Schengen short-stay tourist visa to visit most European countries. You normally apply at the embassy or consulate of the country you will enter first, or where you will spend the majority of your time.",
    },
    {
      q: "How much does a Schengen tourist visa cost from India?",
      a: "The Schengen visa fee is approximately ₹7,000 – ₹8,000 per person, plus travel insurance of about ₹1,500 – ₹3,000. Costs vary with exchange rates, so confirm the current fee before paying.",
    },
    {
      q: "Is travel insurance mandatory for a Schengen visa?",
      a: "Yes. Travel insurance is mandatory for a Schengen visa and typically costs ₹1,500 – ₹3,000, covering medical emergencies up to €30,000. Make sure it covers all Schengen countries and is valid for the entire duration of your stay.",
    },
    {
      q: "What documents are required for a Europe tourist visa?",
      a: "This typically includes a valid passport, the visa application form, passport-sized photographs, proof of travel arrangements (flight and accommodation bookings), proof of sufficient financial means, travel insurance, and other supporting documents depending on your case.",
    },
    {
      q: "How do I apply for a Europe tourist visa from India?",
      a: "Determine the correct short-stay visa type, identify the relevant embassy or consulate, gather your documents, schedule an appointment to give biometrics, attend the interview if required, submit your application and pay the fee, then wait for processing. Apply well in advance of your travel dates.",
    },
    {
      q: "How long does Schengen visa processing take?",
      a: "Processing times vary by embassy, time of year and application, so it is advisable to apply well in advance of your intended travel dates.",
    },
    {
      q: "How much does a 10-day Europe trip cost from India?",
      a: "A 10-day trip is roughly ₹1,50,000 – ₹2,00,000 for a budget traveler, ₹2,50,000 – ₹3,50,000 for a mid-range traveler and ₹5,00,000 – ₹7,00,000+ for a luxury traveler, including flights, accommodation, food, local transport, sightseeing, visa fees, travel insurance and miscellaneous expenses.",
    },
    {
      q: "When is the cheapest time to travel to Europe?",
      a: "Booking flights and accommodation 3–6 months in advance and travelling in shoulder seasons (April–May and September–October) can lead to significant savings and fewer crowds.",
    },
  ];

  // The inquiry form is identical in all three places it appears, so it is
  // defined once here (same fields, same handleSubmit, same popup).
  const inquiryForm = (
    <>
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
              {["Europe", "UK", "Australia", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
    </>
  );

  /* ------------------------------------------------------------------
     Visual enhancement layer (look & feel only), scoped to .gvi-eu
  ------------------------------------------------------------------- */
  const enhancedCss = `
div.gvi-eu.gvi-eu.gvi-eu {
  --gvi-primary: #1e3a8a;
  --gvi-primary-dark: #14275f;
  --gvi-accent: #e0a100;
  --gvi-ink: #1f2933;
  --gvi-muted: #52606d;
  --gvi-soft: #eef2fb;
  --gvi-line: #e4e7eb;
  --gvi-radius: 14px;
  color: var(--gvi-ink);
  line-height: 1.75;
  font-size: 1.02rem;
}

/* Headings */
div.gvi-eu.gvi-eu.gvi-eu h1 {
  font-size: clamp(1.7rem, 3.2vw, 2.5rem);
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 1.2rem;
  padding-bottom: 0.9rem;
  border-bottom: 4px solid var(--gvi-accent);
  background: linear-gradient(90deg, #1f2933 0%, var(--gvi-primary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
div.gvi-eu.gvi-eu.gvi-eu h2 {
  position: relative;
  font-size: clamp(1.35rem, 2.2vw, 1.8rem);
  font-weight: 700;
  line-height: 1.3;
  margin: 3rem 0 1rem;
  padding: 0.35rem 0 0.35rem 1rem;
  border-left: 5px solid var(--gvi-accent);
  color: var(--gvi-ink);
  scroll-margin-top: 90px;
}
div.gvi-eu.gvi-eu.gvi-eu h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 1.8rem 0 0.7rem;
  padding: 0.55rem 1rem;
  background: var(--gvi-soft);
  border-radius: 10px;
  color: var(--gvi-primary-dark);
}

/* Text */
div.gvi-eu.gvi-eu.gvi-eu p { margin: 0 0 1.1rem; color: var(--gvi-muted); }
div.gvi-eu.gvi-eu.gvi-eu strong, div.gvi-eu.gvi-eu.gvi-eu b { color: var(--gvi-ink); font-weight: 700; }
div.gvi-eu.gvi-eu.gvi-eu a:not([class]) { color: var(--gvi-primary); font-weight: 600; }

/* Lists: one compact card per list, light dividers between rows */
div.gvi-eu.gvi-eu.gvi-eu ul {
  list-style: none;
  padding: 0.3rem 1.1rem;
  margin: 0 0 1.4rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);
}
div.gvi-eu.gvi-eu.gvi-eu ul li {
  position: relative;
  padding: 0.6rem 0 0.6rem 1.5rem;
  margin: 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #eef0f3;
  border-radius: 0;
  box-shadow: none;
  color: var(--gvi-muted);
}
div.gvi-eu.gvi-eu.gvi-eu ul li:last-child { border-bottom: 0; }
div.gvi-eu.gvi-eu.gvi-eu ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 1.15rem;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gvi-primary);
}
div.gvi-eu.gvi-eu.gvi-eu ul ul { margin: 0.5rem 0 0.2rem; padding: 0; border: 0; box-shadow: none; background: transparent; }
div.gvi-eu.gvi-eu.gvi-eu ul ul li { padding: 0.3rem 0 0.3rem 1.3rem; border-bottom: 0; }
div.gvi-eu.gvi-eu.gvi-eu ul ul li::before { top: 0.8rem; width: 5px; height: 5px; background: var(--gvi-muted); }

/* Numbered steps */
div.gvi-eu.gvi-eu.gvi-eu ol.gvi-steps { list-style: none; counter-reset: gvi-step; padding: 0; margin: 0 0 1.6rem; }
div.gvi-eu.gvi-eu.gvi-eu ol.gvi-steps > li {
  counter-increment: gvi-step;
  position: relative;
  padding: 0.9rem 1rem 0.9rem 3.6rem;
  margin-bottom: 0.7rem;
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-radius: 12px;
  color: var(--gvi-muted);
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}
div.gvi-eu.gvi-eu.gvi-eu ol.gvi-steps > li::before {
  content: counter(gvi-step);
  position: absolute;
  left: 0.9rem;
  top: 0.85rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gvi-primary), var(--gvi-primary-dark));
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
div.gvi-eu.gvi-eu.gvi-eu ol.gvi-steps > li > p { margin: 0.4rem 0 0.6rem; }

/* Tables */
.gvi-table-wrap {
  overflow-x: auto;
  margin: 0 0 1.4rem;
  border: 1px solid var(--gvi-line);
  border-radius: var(--gvi-radius);
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
}
div.gvi-eu.gvi-eu.gvi-eu table { width: 100%; border-collapse: collapse; background: #fff; min-width: 620px; margin: 0; }
div.gvi-eu.gvi-eu.gvi-eu th {
  background: linear-gradient(135deg, var(--gvi-primary), var(--gvi-primary-dark));
  color: #fff;
  text-align: left;
  padding: 0.8rem 1rem;
  font-weight: 700;
}
div.gvi-eu.gvi-eu.gvi-eu td { padding: 0.8rem 1rem; border-top: 1px solid var(--gvi-line); color: var(--gvi-muted); }
div.gvi-eu.gvi-eu.gvi-eu tbody tr:nth-child(even) td { background: #f8fafc; }
div.gvi-eu.gvi-eu.gvi-eu td:first-child { font-weight: 600; color: var(--gvi-ink); }

/* Note / callout */
div.gvi-eu.gvi-eu.gvi-eu [class*="note"] {
  background: #fff8e6;
  border: 1px solid #f5d98a;
  border-left: 5px solid #f0b429;
  border-radius: 10px;
  padding: 0.9rem 1.1rem;
  color: #5c4a12;
}

/* Table of contents */
.gvi-toc {
  background: #fff;
  border: 1px solid var(--gvi-line);
  border-left: 5px solid var(--gvi-primary);
  border-radius: var(--gvi-radius);
  padding: 1rem 1.3rem;
  margin: 0 0 1.8rem;
  box-shadow: 0 4px 14px rgba(16, 24, 40, 0.05);
}
.gvi-toc ol { margin: 0.6rem 0 0; padding-left: 1.3rem; columns: 2 260px; column-gap: 2rem; }
.gvi-toc li { margin: 0.25rem 0; color: var(--gvi-muted); }
.gvi-toc a { color: var(--gvi-primary-dark); text-decoration: none; font-weight: 600; }
.gvi-toc a:hover { text-decoration: underline; }

/* Quick facts strip */
.gvi-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.9rem;
  margin: 1.4rem 0 2rem;
}
.gvi-fact {
  background: linear-gradient(145deg, #fff 0%, var(--gvi-soft) 100%);
  border: 1px solid #d4def5;
  border-radius: var(--gvi-radius);
  padding: 1rem 1.1rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(30, 58, 138, 0.08);
}
.gvi-fact b { display: block; font-size: 1.25rem; font-weight: 800; color: var(--gvi-primary); line-height: 1.2; }
.gvi-fact span { display: block; margin-top: 0.25rem; font-size: 0.85rem; color: var(--gvi-muted); }

/* In-page call-to-action band */
.gvi-cta-band {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--gvi-soft);
  border: 1px solid #d4def5;
  border-radius: var(--gvi-radius);
  padding: 1.1rem 1.4rem;
  margin: 1.6rem 0;
}
.gvi-cta-band p { margin: 0; color: var(--gvi-ink); font-weight: 600; flex: 1 1 260px; }
div.gvi-eu.gvi-eu.gvi-eu a.gvi-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff !important;
  background: linear-gradient(135deg, var(--gvi-primary) 0%, var(--gvi-primary-dark) 100%);
  box-shadow: 0 8px 18px rgba(30, 58, 138, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
div.gvi-eu.gvi-eu.gvi-eu a.gvi-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(30, 58, 138, 0.36); }

@media (max-width: 640px) {
  div.gvi-eu.gvi-eu.gvi-eu { font-size: 0.98rem; }
  div.gvi-eu.gvi-eu.gvi-eu h2 { margin-top: 2.2rem; }
}

div.gvi-eu.gvi-eu.gvi-eu h2, div.gvi-eu.gvi-eu.gvi-eu h3 { text-align: left !important; }
div.gvi-eu.gvi-eu.gvi-eu ul li, div.gvi-eu.gvi-eu.gvi-eu ol.gvi-steps > li { list-style: none !important; }
`;

  return (
    <>
      <head>
        <title>Schengen Tourist Visa from India: Cost, Documents & Process | GVI</title>
        <meta
          name="description"
          content="Apply for a Schengen (Europe) tourist visa from India with GVI. Get help with documents, fees, appointments, interview prep and a Europe trip cost breakdown."
        />
        <meta
          name="keywords"
          content="Europe tourist visa, Schengen visa from India, apply Schengen visa, Europe visa fees, Europe visa documents, cost of Europe trip from India, flight to Europe cost, Europe visa consultants in India, tourist attractions in Europe, visa process Europe"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/Visa/tourist-visa/europe" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Schengen Tourist Visa from India: Cost, Documents & Process | GVI" />
        <meta
          property="og:description"
          content="Planning to visit Europe? Get expert help with your Schengen tourist visa application, documents, interview prep, trip cost estimate and must-visit places."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globalvisainternationals.com/Visa/tourist-visa/europe" />
        <meta property="og:image" content="https://www.globalvisainternationals.com/images//images/Europe1.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Schengen Tourist Visa from India | Application, Cost & Documents" />
        <meta
          name="twitter:description"
          content="Explore Europe with the right tourist visa. Visa application support, interview preparation and a travel cost breakdown from Global Visa Internationals."
        />
        <meta name="twitter:image" content="https://www.globalvisainternationals.com/images//images/Europe1.png" />
        <meta name="twitter:url" content="https://www.globalvisainternationals.com/Visa/tourist-visa/europe" />

        {/* Geo Location Tags */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="12.9716,77.5946" />

        {/* Structured Data - Local Business / Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Global Visa Internationals",
              "url": "https://www.globalvisainternationals.com",
              "logo": "https://www.globalvisainternationals.com/logo.png",
              "description": "Leading visa consultancy offering expert Europe (Schengen) tourist visa assistance from India. We help with visa application, documentation, interview prep, and more.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "MG Road",
                "addressLocality": "Bengaluru",
                "addressRegion": "KA",
                "postalCode": "560025",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7022213466",
                "contactType": "Customer Support"
              },
              "sameAs": [
                "https://www.facebook.com/GlobalVisaInternationals",
                "https://www.linkedin.com/company/globalvisainternationals",
                "https://twitter.com/GlobalVisaIntl"
              ]
            })
          }}
        />

        {/* Structured Data - FAQ (same content as the visible FAQ section) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
              }))
            })
          }}
        />
      </head>

      {/* ✨ Scoped visual enhancements */}
      <style dangerouslySetInnerHTML={{ __html: enhancedCss }} />

      <div className={styles.imageContainer}>
        <img src="/images/Europe1.png" alt="Europe tourist visa assistance from India - Global Visa Internationals" className={styles.EuropeImage} />
      </div>

      <div className={styles.EuropeSec}>


        <div className={`${styles.EuropeData} gvi-eu`}>
          <h1 className={styles.Title}>Europe (Schengen) Tourist Visa from India: Cost, Documents & Process</h1>

          {/* Quick facts (values taken from the sections below) */}
          <div className="gvi-facts">
            <div className="gvi-fact"><b>₹7,000 – ₹8,000</b><span>Approx. visa fee</span></div>
            <div className="gvi-fact"><b>₹1,500 – ₹3,000</b><span>Mandatory travel insurance</span></div>
            <div className="gvi-fact"><b>Up to €30,000</b><span>Medical cover required</span></div>
            <div className="gvi-fact"><b>₹1.5 – 2 lakh</b><span>Budget 10-day trip</span></div>
          </div>

          <nav aria-label="Table of contents" className="gvi-toc">
            <strong>On this page</strong>
            <ol>
              <li><a href="#destinations">Must-see places in Europe</a></li>
              <li><a href="#why-europe">Why choose Europe</a></li>
              <li><a href="#cost">Europe trip cost from India</a></li>
              <li><a href="#visa-process">Tourist visa process</a></li>
              <li><a href="#help">Application & interview help</a></li>
              <li><a href="#why-gvi">Why choose GVI</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ol>
          </nav>

          <p>Europe, a continent brimming with history, culture, and breathtaking landscapes, beckons travelers from around the globe. From iconic landmarks to hidden gems, a European tourist visa (Schengen visa) opens the door to unforgettable experiences.</p>

          <h2 id="destinations" className={styles.subTitle}>Must-See Tourist Spots in Europe</h2>
          <p>Embark on a journey to some of the world's most celebrated destinations:</p>

          <ul>
            <li><b>Paris, France:</b> Stand in awe of the majestic Eiffel Tower, wander through romantic streets, and indulge in world-class cuisine.</li>
            <li><b>Rome, Italy:</b> Immerse yourself in ancient history at the magnificent Colosseum and the Roman Forum, and savor authentic Italian flavors.</li>
            <li><b>Amsterdam, Netherlands:</b> Glide along the charming vibrant canals, explore unique architecture, and discover world-renowned art.</li>
            <li><b>Athens, Greece:</b> Step back in time at the historic sites of the Acropolis and the Parthenon, the birthplace of democracy.</li>
          </ul>
          <p>Beyond these highlights, Europe offers a tapestry of diverse experiences, from the stunning fjords of Norway to the sun-kissed beaches of Spain, and the fairytale castles of Germany.</p>

          <h2 id="why-europe" className={styles.subTitle}>Why Choose Europe for Your Next Vacation?</h2>
          <p>Europe's allure lies in its unique blend of:</p>
          <ul>
            <li><b>Rich History:</b> Explore millennia-old ruins, medieval castles, and historical landmarks that whisper tales of the past.</li>
            <li><b>Diverse Cultures:</b> Experience a continent of distinct languages, traditions, and artistic expressions, each offering a unique perspective.</li>
            <li><b>World-Renowned Cuisine:</b> Indulge your senses in a culinary journey, from French pastries and Italian pasta to Spanish tapas and Greek delicacies.</li>
            <li><b>Stunning Landscapes:</b> Discover dramatic coastlines, majestic mountains, serene lakes, and picturesque countryside that will leave you breathless.</li>
          </ul>
          <p>A tourist visa for Europe is your gateway to unlocking these incredible experiences.</p>

          <div className={styles.formSection1}>
            <h4 className={styles.subTitle}>Contact Global visa Internationals for Visa Documentation Assistance:</h4>
            <div role="heading" aria-level={2} className={styles.formtitle}>Visa And Immigration Inquiry Form</div>
            {inquiryForm}
          </div>

          <h2 id="cost" className={styles.subTitle}>Europe Trip Cost Breakdown from India</h2>
          <div className="gvi-table-wrap">
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Expense Category</th>
                  <th>Budget Traveler</th>
                  <th>Mid-Range Traveler</th>
                  <th>Luxury Traveler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Flights (Round-trip)</td>
                  <td>₹40,000 – ₹60,000</td>
                  <td>₹60,000 – ₹90,000</td>
                  <td>₹90,000 – ₹1,50,000+</td>
                </tr>
                <tr>
                  <td>Accommodation (per night)</td>
                  <td>₹2,000 – ₹5,000</td>
                  <td>₹5,000 – ₹12,000</td>
                  <td>₹12,000 – ₹25,000+</td>
                </tr>
                <tr>
                  <td>Food (per day)</td>
                  <td>₹1,000 – ₹2,000</td>
                  <td>₹2,000 – ₹5,000</td>
                  <td>₹5,000 – ₹10,000+</td>
                </tr>
                <tr>
                  <td>Local Transport (per day)</td>
                  <td>₹500 – ₹1,000</td>
                  <td>₹1,000 – ₹2,500</td>
                  <td>₹2,500 – ₹5,000+</td>
                </tr>
                <tr>
                  <td>Sightseeing & Activities (per day)</td>
                  <td>₹500 – ₹1,500</td>
                  <td>₹1,500 – ₹3,000</td>
                  <td>₹3,000 – ₹6,000+</td>
                </tr>
                <tr>
                  <td>Schengen Visa Fee</td>
                  <td>₹7,000 – ₹8,000</td>
                  <td>₹7,000 – ₹8,000</td>
                  <td>₹7,000 – ₹8,000</td>
                </tr>
                <tr>
                  <td>Travel Insurance</td>
                  <td>₹1,500 – ₹3,000</td>
                  <td>₹1,500 – ₹3,000</td>
                  <td>₹1,500 – ₹3,000</td>
                </tr>
                <tr>
                  <td>Miscellaneous</td>
                  <td>₹5,000 – ₹10,000</td>
                  <td>₹10,000 – ₹20,000</td>
                  <td>₹20,000 – ₹40,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.note}>Note: Costs are approximate and can vary based on exchange rates, specific cities visited, and personal spending habits.</p>

          <p>For a 10-day trip, the total estimated cost would be:</p>
          <ul>
            <li>Budget Traveler: ₹1,50,000 – ₹2,00,000</li>
            <li>Mid-Range Traveler: ₹2,50,000 – ₹3,50,000</li>
            <li>Luxury Traveler: ₹5,00,000 – ₹7,00,000+</li>
          </ul>
          <p>These estimates include flights, accommodation, food, local transport, sightseeing, visa fees, travel insurance, and miscellaneous expenses. For a more accurate estimate, consider your travel style, preferences, and the specific countries you plan to visit.</p>

          <h3 className={styles.subTitle}>Flight Charges</h3>
          <p>Round-trip airfare from major Indian cities (e.g., Mumbai, Delhi, Bengaluru) to European hubs like Paris, Rome, or Frankfurt ranges between ₹40,000 and ₹1,50,000. Booking 3–6 months in advance and traveling during shoulder seasons (April–May, September–October) can lead to significant savings.</p>

          <h3 className={styles.subTitle}>Accommodation</h3>
          <p>Accommodation costs vary widely:</p>
          <ul>
            <li>Budget: Hostels or budget hotels at ₹2,000 – ₹5,000 per night.</li>
            <li>Mid-Range: 3-star hotels or Airbnb at ₹5,000 – ₹12,000 per night.</li>
            <li>Luxury: 4-5 star hotels or resorts at ₹12,000 – ₹25,000+ per night.</li>
          </ul>
          <p className={styles.note}>Eastern European countries generally offer more affordable lodging compared to Western Europe.</p>

          <h3 className={styles.subTitle}>Food Expenses</h3>
          <p>Daily food costs depend on dining preferences:</p>
          <ul>
            <li>Budget: Street food or fast food chains at ₹1,000 – ₹2,000 per day.</li>
            <li>Mid-Range: Local restaurants at ₹2,000 – ₹5,000 per day.</li>
            <li>Luxury: Fine dining experiences at ₹5,000 – ₹10,000+ per day.</li>
          </ul>
          <p className={styles.note}>Opting for accommodations with kitchen facilities can help reduce food expenses.</p>

          <h3 className={styles.subTitle}>Transportation</h3>
          <p>Transportation within Europe includes:</p>
          <ul>
            <li>Public Transport: Buses, metros, and trams at ₹500 – ₹1,000 per day.</li>
            <li>Intercity Travel: Train or budget flights at ₹1,000 – ₹5,000 per trip.</li>
            <li>Car Rentals: ₹5,000 – ₹8,000 per day, excluding fuel and parking.</li>
          </ul>
          <p className={styles.note}>Eurail passes offer cost-effective train travel across multiple countries.</p>

          <h3 className={styles.subTitle}>Sightseeing & Activities</h3>
          <p>Entry fees for popular attractions:</p>
          <ul>
            <li>Museums & Landmarks: ₹500 – ₹3,000 per entry.</li>
            <li>Guided Tours: ₹2,000 – ₹5,000 per tour.</li>
            <li>Special Experiences: Hot air balloon rides, wine tastings, etc., at ₹5,000 – ₹10,000+.</li>
          </ul>
          <p className={styles.note}>Many cities offer tourist passes that bundle multiple attractions at discounted rates.</p>

          <h3 className={styles.subTitle}>Visa & Insurance</h3>
          <ul>
            <li>Schengen Visa: Approximately ₹7,000 – ₹8,000 per person.</li>
            <li>Travel Insurance: Mandatory for Schengen visa; costs ₹1,500 – ₹3,000, covering medical emergencies up to €30,000.</li>
          </ul>
          <p className={styles.note}>Ensure your insurance covers all Schengen countries and is valid for the entire duration of your stay.</p>

          <h3 className={styles.subTitle}>Tips to Save on Your Europe Trip</h3>
          <ul>
            <li><b>Early Bookings:</b> Secure flights and accommodations 3–6 months in advance.</li>
            <li><b>Travel Off-Season:</b> Consider traveling during shoulder seasons for lower prices and fewer crowds.</li>
            <li><b>Use City Passes:</b> Many cities offer passes that provide access to multiple attractions and public transport.</li>
            <li><b>Mix Accommodation Types:</b> Combine hotel stays with Airbnb or hostels to balance comfort and cost.</li>
            <li><b>Plan Meals:</b> Mix dining out with self-catering to manage food expenses.</li>
          </ul>

          <h2 id="visa-process" className={styles.subTitle}>Europe (Schengen) Tourist Visa Process</h2>
          <p>Obtaining a European tourist visa involves a systematic process. While specific requirements may vary depending on your nationality and the Schengen Area country you plan to visit first, the general steps include:</p>
          <ol className="gvi-steps">
            <li><b>Determine the correct visa type:</b> Ensure you are applying for a short-stay tourist visa.</li>
            <li><b>Identify the relevant embassy or consulate:</b> This is usually the embassy or consulate of the country you will be entering first or where you will spend the majority of your time.</li>
            <li><b>Gather the required documents:</b> This typically includes a valid passport, visa application form, passport-sized photographs, proof of travel arrangements (flight and accommodation bookings), proof of sufficient financial means, travel insurance, and potentially other supporting documents.</li>
            <li><b>Schedule a visa appointment:</b> Most embassies and consulates require an appointment to submit your application and provide biometric data (fingerprints and photograph).</li>
            <li><b>Attend the visa interview:</b> Be prepared to answer questions about your travel plans and intentions.</li>
            <li><b>Submit your application and pay the visa fee.</b></li>
            <li><b>Wait for the visa processing:</b> Processing times can vary, so it's advisable to apply well in advance of your intended travel dates.</li>
          </ol>
          <p>Navigating the intricacies of the European tourist visa process can be challenging. Let Global Visa Internationals be your trusted partner.</p>

          <div className="gvi-cta-band">
            <p>Need help with your Europe tourist visa? Talk to our visa experts.</p>
            <a href="#apply-form" className="gvi-btn">Get Free Consultation</a>
          </div>

          <h3 className={styles.subTitle}>Need Assistance with Your European Tourist Visa? Contact Us Today!</h3>
          <p>At Global Visa Internationals, we understand the complexities of visa and immigration procedures. Our experienced consultants are dedicated to providing you with comprehensive support for your European tourist visa application. We offer services including:</p>
          <ul>
            <li>Personalized one-on-one consultations to assess your specific needs and guide you through the process.</li>
            <li>Thorough document checklist and review to ensure your application is complete and accurate.</li>
            <li>Mock interviews for visa applications to help you feel confident and prepared for your interview.</li>
            <li>Guidance on all aspects of the visa application process, from form completion to submission.</li>
          </ul>
          <p>Don't let the visa process stand between you and your European dream vacation. Contact <b>Global Visa Internationals</b> today for expert assistance and a smoother journey.</p>

          <div className={styles.formSection1}>
            <h4 className={styles.subTitle}>Contact Global Visa Internationals for Visa and Documentation Assistance:</h4>
            <div role="heading" aria-level={2} className={styles.formtitle}>Visa And Immigration Inquiry Form</div>
            {inquiryForm}
          </div>

          <h2 id="help" className={styles.subTitle}>Need Help With Your Schengen Application or Interview Prep?</h2>
          <p>Navigating the Europe tourist visa process can feel overwhelming — but you don’t have to do it alone. At Global Visa Internationals, we offer end-to-end support to ensure your application is error-free and your interview is successful. Here’s how we make your Europe visa journey seamless:</p>
          <ol className="gvi-steps">
            <li><b>Expert Application Form Filling Assistance</b>
              <p>Filling out the visa application form incorrectly is one of the most common reasons for visa delays or denials. Our experts will help you:</p>
              <ul>
                <li>Complete the form accurately, avoiding costly mistakes</li>
                <li>Review all sections (travel history, background, purpose of visit)</li>
                <li>Upload the correct digital photo as per embassy requirements</li>
              </ul>
            </li>
            <li><b>One-on-One Personalized Visa Consultation</b>
              <p>Your case is unique — so we offer customized guidance based on:</p>
              <ul>
                <li>Your travel plans and itinerary</li>
                <li>Financial documents and proof of funds</li>
                <li>Employment and family ties in India</li>
              </ul>
              <p>You’ll have a dedicated visa expert to answer all your questions.</p>
            </li>
            <li><b>Mock Interviews with Real Consulate Questions</b>
              <p>Get real-time practice with visa interview questions. Our mock sessions include:</p>
              <ul>
                <li>Behavioral coaching on how to answer confidently</li>
                <li>Commonly asked tourist visa questions (and how to respond)</li>
                <li>Realistic role-playing with personalized feedback</li>
              </ul>
            </li>
            <li><b>Complete Document Checklist & Review</b>
              <p>We’ll guide you on gathering all required documents, including:</p>
              <ul>
                <li>Valid passport, application form confirmation, fee receipts</li>
                <li>Proof of finances, return intent, hotel bookings, flight details</li>
                <li>Sponsorship or invitation letters (if applicable)</li>
              </ul>
              <p>We’ll review everything to ensure it meets embassy and consulate standards.</p>
            </li>
          </ol>

          <h2 id="why-gvi" className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>At Global Visa Internationals, we understand that the visa application process can be complex and time-consuming. That's why we offer:</p>
          <ul>
            <li><b>Personalized Guidance:</b> Our experienced consultants provide tailored support throughout your application journey</li>
            <li><b>Expert Knowledge:</b> We stay up-to-date with the latest visa regulations to ensure your application is accurate and complete.</li>
            <li><b>Hassle-Free Process:</b> We handle the paperwork and guide you through each step, saving you time and stress.</li>
            <li><b>High Success Rate:</b> We are committed to maximizing your chances of a successful visa outcome.</li>
            <li><b>Additional Services:</b> We also take Mock Interviews to prepare you for the visa interview process.</li>
          </ul>
          <p>We at Global Visa Internationals, proud to be India's finest visa consultants, are dedicated to making your dreams into reality. With our 11+ years of experience as leading visa consultants in Bangalore, we have successfully managed to process over 55,000+ visas and offer over 75,000 expert visa advice sessions till date. You can confidently rely on our vast visa and immigration consulting experience in India.</p>

          <h2 id="faq" className={styles.subTitle}>Europe (Schengen) Tourist Visa from India: Frequently Asked Questions</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className={styles.subTitle}>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <p>Let Global Visa Internationals assist you in navigating the visa application process and planning your dream European adventure!</p>

        </div>

        <div id="apply-form" className={styles.formSection}>
          <VisaForm />
        </div>
      </div>
      <section id='Client Reviews'>
        <h2 className={styles.subtitle}>Client Reviews</h2>
        <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
      </section>
    </>
  );
}