"use client";
import styles from './Canada.module.css';
import React, { useState, useEffect } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { NextSeo, LocalBusinessJsonLd, FAQPageJsonLd } from 'next-seo';

export default function Canada() {

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
  return (
    <>

      <head>
        <title>Canada Visa Refusal Help | Global Visa Internationals</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Canada visa refused? Don't lose hope! Global Visa Internationals offers expert assistance for Canada visa refusal appeals and re-applications from India. Get help with GTE issues, documentation, and judicial review."
        />
        <meta
          name="keywords"
          content="Canada visa refusal India, Canada visa rejection, Canada visa appeal, judicial review Canada, Canada visa consultants India, visa refusal help, GTE issues Canada, student visa refusal Canada, work visa refusal Canada, visitor visa refusal Canada, Canada immigration lawyer India, Global Visa Internationals"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Global Visa Internationals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#b30000" />

        <link
          rel="canonical"
          href="https://www.globalvisainternationals.com/Visa/refusal-visa/canada"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="preload"
          as="image"
          href="https://www.globalvisainternationals.com/images/Canada-visa-refusal-banner.jpg"
        />
        <link rel="stylesheet" href="./Visa/refusal-visa/Canada.module.css" />

        <meta
          property="og:title"
          content="Canada Visa Refused? Expert Help from Global Visa Internationals"
        />
        <meta
          property="og:description"
          content="Facing a Canada visa refusal? We provide comprehensive support for reconsideration requests, judicial review, and re-applications, increasing your chances of success. Contact Global Visa Internationals."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.globalvisainternationals.com/Visa/refusal-visa/canada"
        />
        <meta
          property="og:image"
          content="https://www.globalvisainternationals.com/images/Canada-visa-refusal-banner.jpg"
        />
        <meta property="og:site_name" content="Global Visa Internationals" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Canada Visa Refusal Assistance | Global Visa Internationals"
        />
        <meta
          name="twitter:description"
          content="Don't give up on your Canadian dream after a visa refusal. Global Visa Internationals offers expert guidance and support for reconsideration, judicial review, and re-applications."
        />
        <meta
          name="twitter:image"
          content="https://www.globalvisainternationals.com/images/Canada-visa-refusal-banner.jpg"
        />
        <meta
          name="twitter:url"
          content="https://www.globalvisainternationals.com/Visa/refusal-visa/canada"
        />
        <meta name="twitter:site" content="@GlobalVisaIntl" />
        <meta name="twitter:creator" content="@GlobalVisaIntl" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="geo.region" content="CA" />
        <meta name="geo.placename" content="Ottawa" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="12.9716,77.5946" />

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Global Visa Internationals",
              "url": "https://www.globalvisainternationals.com",
              "logo": "https://www.globalvisainternationals.com/logo.png",
              "description": "Trusted visa consultants helping Indian travelers with Canada visa refusal appeals, re-applications, and expert support.",
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

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  "name": "Visa Refusal",
                  "item": "https://www.globalvisainternationals.com/Visa/refusal-visa/canada"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Canada"
                }
              ]
            })
          }}
        />

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are the common reasons for Canada visa refusal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Common reasons include insufficient funds, unclear purpose of visit, lack of ties to your home country, incomplete documentation, misrepresentation, and past immigration violations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I appeal a Canada visa refusal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While most temporary resident visas don't have a formal appeal process, you can request reconsideration, seek judicial review by the Federal Court, or reapply with a stronger case addressing the refusal reasons."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I strengthen my Canada visa re-application after a refusal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Obtain GCMS notes to understand the exact reasons for refusal. Address every point raised by the visa officer with new and stronger evidence, such as updated financial proof, clearer travel itinerary, stronger home ties, or a revised Statement of Purpose (SOP)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are 'GTE issues' in the context of Canada visa refusal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While 'Genuine Temporary Entrant' (GTE) is primarily an Australian concept, the underlying principle applies to Canada. It refers to the visa officer's assessment of whether your intention to stay in Canada is genuinely temporary and that you intend to leave at the end of your authorized stay. Issues arise when the officer is not convinced of this intent."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I hire an immigration lawyer or consultant after a Canada visa refusal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For complex cases, especially those involving judicial review or significant issues like misrepresentation, hiring a Regulated Canadian Immigration Consultant (RCIC) or an immigration lawyer can significantly improve your chances as they can provide expert guidance and representation."
                  }
                }
              ]
            })
          }}
        />

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Canada Visa Refusal Assistance",
              "provider": {
                "@type": "Organization",
                "name": "Global Visa Internationals",
                "url": "https://www.globalvisainternationals.com"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Canada Visa Refusal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Canada Visitor Visa Refusal Assistance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Canada Student Visa Refusal Assistance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Canada Work Visa Refusal Assistance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Canada Permanent Resident Visa Refusal Assistance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "GCMS Notes Application and Review"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Judicial Review Guidance (with legal partners)"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>



      <div className={styles.imageContainer}>
        <img src="/images/Canada1.png" alt="Canada Image" className={styles.CanadaImage} />
      </div>

      <div className={styles.CanadaSec}>


        <div className={styles.CanadaSec}>
          <div className={styles.CanadaData}>
            <h1 className={styles.Title}>Canada Visa Refusal? Don't Lose Hope! Global Visa Internationals is Here to Help!</h1>
            <p>Dreaming of Canada – for studies, work, tourism, or family reunification? It’s a popular choice for many Indians, but sometimes, despite all your efforts, you might face a visa refusal. We understand how frustrating and disheartening that can be! </p>

            <h3 className={styles.subTitle}>Common Reasons for Canada Visa Refusal:</h3>
            <p>Canadian visa applications from India can be refused for various reasons. Some of the most common ones include:</p>

            <ul>
              <li>Insufficient Funds/Financial Instability: Not being able to demonstrate sufficient funds to support your stay, studies, or relocation in Canada is a major concern for immigration authorities. They need to be assured you won't become a public charge.</li>
              <li>Lack of Strong Ties to Home Country (India): For temporary visas (visitor, student, work permit), if you cannot convince the immigration officer that you will return to India after your authorized stay, your visa might be refused. They look for strong financial, family, and social ties.</li>
              <li>Incomplete or Inconsistent Documentation: Even a small error, missing document, or discrepancies between documents can lead to rejection. This includes financial statements, academic records, employment letters, or identity proofs.</li>
              <li>Misrepresentation or False Information: Providing false information or misrepresenting facts on your application is a serious offence and can lead to a ban from applying to Canada for several years.</li>
              <li>Failure to Meet Eligibility Criteria: Not meeting specific requirements for the visa category you applied for (e.g., minimum language proficiency, educational qualifications for certain programs, work experience for PR).</li>
              <li>Admissibility Issues (Health or Criminality): Not clearing medical examinations or having a criminal record (even minor offences) can make you inadmissible to Canada.</li>
              <li>Purpose of Visit Not Clear/Genuine: For visitor visas, if the immigration officer is not convinced about the genuine purpose of your visit (e.g., vague itinerary, lack of solid plans).</li>
              <li>Invitations and Support Letters: If your invitation letter from Canada is weak, incomplete, or from an unreliable source, it can lead to refusal.</li>
            </ul>

            <h3 className={styles.subTitle}>What Happens After a Visa Refusal?</h3>
            <p>A visa refusal for Canada isn't the end of your journey! You typically have options to consider:</p>
            <ol>
              <li>Understanding the Refusal: The first crucial step is to carefully read the refusal letter. It usually outlines the reasons for rejection. Understanding these reasons is key to your next step.</li>
              <br />
              <li>Applying for Reconsideration/Judicial Review: In some specific cases, you might be able to request reconsideration or apply for judicial review in the Federal Court of Canada. This is a complex legal process and requires expert legal advice.</li>
              <br />
              <li>Reapply for the Visa: For most refusals, especially if the reason was a correctable error, missing document, or if you can strengthen your application significantly, reapplying with a more robust application is a viable and often successful strategy.</li>
            </ol>

            <h2 className={styles.subTitle}>Your Path to Success with Global Visa Internationals!</h2>
            <p>A Canadian visa refusal can be overwhelming, but you don't have to face it alone. At Global Visa Internationals, we specialize in assisting Indian applicants with their Canadian visa applications, including challenging refusal decisions and preparing strong re-applications.</p>

            <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
            <ul>
              <li>Expert Guidance: Our team of experienced Canada visa consultants in India and Immigration lawyers for Canada are deeply knowledgeable about Canadian immigration laws and policies. We understand the precise reasons behind refusals and, crucially, how to effectively address them.</li>
              <li>Thorough Case Analysis: We conduct a detailed review of your refusal letter, meticulously identifying the exact reasons for the rejection. This allows us to craft a precise and effective strategy for your reapplication or appeal.</li>
              <li>Strategic Documentation: We guide you in preparing comprehensive and accurate documentation, ensuring all Canadian immigration requirements are met and any previous shortcomings are resolved. This includes drafting compelling letters of explanation and strengthening your financial proofs and ties to India.</li>
              <li>Reapplication Expertise: Our primary focus is on building a significantly stronger new application. We help you address the refusal points, provide new evidence, and ensure your application presents your case in the most favourable light to the Canadian immigration authorities.</li>
              <li>Personalised Approach: Every refusal case is unique, and we offer tailored advice and solutions based on your specific circumstances. We are committed to providing realistic hope and a clear, actionable path forward.</li>
              <li>Proven Track Record: We have a strong track record of helping many Indian applicants successfully achieve their Canadian visa dreams, even after initial refusals. We are your reliable partner for Canada immigration solutions after refusal.</li>
            </ul>
            <p className={styles.note}>Don't let a visa refusal put an end to your Canadian aspirations. Contact Global Visa Internationals today for a comprehensive consultation! We are dedicated to helping you turn your "No" into a "Yes."</p>

          </div>

          <div className={styles.formSection}>
            <h1 className={styles.subTitle}>Visa Inquiry Form</h1>
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
                    {["Canada", "USA", "UK", "Canada", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select className={styles.select} name="immigration_type" required>
                    <option value="">Select Immigration Type</option>
                    {["Work Visa", "Student Visa", "Visitor/Tourist Visa", "Business Visa", "Dependent Visa", "Permanent Residency Visa", "Visa Refusal Assistance"].map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.row}>
                <div>
                  <input className={styles.input} type="number" name="applicants" min="1" placeholder="Enter number of applicants" required />
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
        </div>

        
      </div>
      <h2 className={styles.subtitle}>Client Reviews</h2>
      <section id='Client Reviews'>

        <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
      </section>
    </>
  );
}