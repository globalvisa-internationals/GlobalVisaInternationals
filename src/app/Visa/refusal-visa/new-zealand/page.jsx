"use client";
import styles from './new-zeland.module.css';
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
        <title>New Zealand Visa Refusal Help | Global Visa Internationals</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="New Zealand visa refused? Don't lose hope! Global Visa Internationals offers expert assistance for New Zealand visa refusal reconsiderations and re-applications from India. Get help with demonstrating genuine intent, strong ties, and proper documentation."
        />
        <meta
          name="keywords"
          content="New Zealand visa refusal India, New Zealand visa rejection, New Zealand visa reconsideration, New Zealand visa reapplication, New Zealand visa consultants India, visa refusal help, genuine intent New Zealand visa, student visa refusal New Zealand, work visa refusal New Zealand, visitor visa refusal New Zealand, New Zealand immigration lawyer India, Global Visa Internationals"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Global Visa Internationals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#004d00" />
        <link
          rel="canonical"
          href="https://www.globalvisainternationals.com/Visa/refusal-visa/new-zealand"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="preload"
          as="image"
          href="https://www.globalvisainternationals.com/images/new-zealand-visa-refusal-banner.jpg"
        />
        <link rel="stylesheet" href="./Visa/refusal-visa/new-zealand.module.css" />

        <meta
          property="og:title"
          content="New Zealand Visa Refused? Expert Help from Global Visa Internationals"
        />
        <meta
          property="og:description"
          content="Facing a New Zealand visa refusal? We provide comprehensive support for reconsideration requests, re-applications, and expert guidance, increasing your chances of success. Contact Global Visa Internationals."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.globalvisainternationals.com/Visa/refusal-visa/new-zealand"
        />
        <meta
          property="og:image"
          content="https://www.globalvisainternationals.com/images/new-zealand-visa-refusal-banner.jpg"
        />
        <meta property="og:site_name" content="Global Visa Internationals" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="New Zealand Visa Refusal Assistance | Global Visa Internationals"
        />
        <meta
          name="twitter:description"
          content="Don't give up on your New Zealand dream after a visa refusal. Global Visa Internationals offers expert guidance and support for reconsideration and re-applications."
        />
        <meta
          name="twitter:image"
          content="https://www.globalvisainternationals.com/images/new-zealand-visa-refusal-banner.jpg"
        />
        <meta
          name="twitter:url"
          content="https://www.globalvisainternationals.com/Visa/refusal-visa/new-zealand"
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

        <meta name="geo.region" content="NZ" />
        <meta name="geo.placename" content="Wellington" />
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
              "description": "Trusted visa consultants helping Indian travelers with New Zealand visa refusal reconsiderations, re-applications, and expert support.",
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
                  "item": "https://www.globalvisainternationals.com/Visa/refusal-visa/new-zealand"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "New Zealand"
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
                  "name": "What are the common reasons for New Zealand visa refusal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Common reasons include insufficient funds, lack of strong ties to your home country (India), incomplete or inconsistent documentation, misrepresentation, failure to meet eligibility criteria for the visa type, and not meeting health or character requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I appeal a New Zealand visa refusal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For temporary visas, you may be eligible to request a Reconsideration of Decision (RCD) if you are in New Zealand with a valid visa and make the request within 14 days of refusal. For most refusals, or if an RCD is not applicable, reapplying with a significantly stronger case is often the most effective strategy. Appeals to the Immigration and Protection Tribunal (IPT) are typically for more complex cases or specific visa categories."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I strengthen my New Zealand visa re-application after a refusal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Carefully review the refusal letter to understand the exact reasons. Address each point raised by Immigration New Zealand with new and stronger evidence, such as updated financial proof, clearer travel itineraries, stronger evidence of home ties (e.g., employment, family, property), and a compelling cover letter explaining how you've resolved past issues. Ensuring all documentation is complete and consistent is vital."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does 'genuine intent' mean for a New Zealand visa application?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "'Genuine intent' refers to Immigration New Zealand's assessment of whether your stated purpose for visiting, studying, or working in New Zealand is true and if you genuinely intend to leave New Zealand at the end of your authorized stay. Issues arise when the immigration officer is not convinced of your true intentions or your commitment to return to your home country."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I hire an immigration consultant or lawyer after a New Zealand visa refusal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For New Zealand visa matters, it is highly recommended to seek advice from a Licensed Immigration Adviser (LIA) or a New Zealand immigration lawyer. They possess in-depth knowledge of INZ policies and can provide tailored advice, help analyze your refusal, and prepare a robust re-application or reconsideration request, significantly improving your chances of success. Be sure to verify their license with the Immigration Advisers Authority (IAA)."
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
              "serviceType": "New Zealand Visa Refusal Assistance",
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
                "name": "New Zealand Visa Refusal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "New Zealand Visitor Visa Refusal Assistance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "New Zealand Student Visa Refusal Assistance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "New Zealand Work Visa Refusal Assistance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "New Zealand Resident Visa Refusal Assistance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Reconsideration of Decision (RCD) Guidance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Immigration and Protection Tribunal (IPT) Guidance (with legal partners)"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>



      <div className={styles.imageContainer}>
        <img src="/images/new-zealand-tourist-visa-banner.webp" alt="Canada Image" className={styles.CanadaImage} />
      </div>

      <div className={styles.CanadaSec}>


        <div className={styles.CanadaSec}>
          <div className={styles.CanadaData}>
            <h1 className={styles.Title}>New Zealand Visa Refusal? Don't Lose Hope! Global Visa Internationals is Here to Help!</h1>
            <p>Dreaming of New Zealand – for studies, work, tourism, or family reunification? The Land of the Long White Cloud offers incredible opportunities and breathtaking landscapes, making it a highly desirable destination for many Indians. However, sometimes, despite all your efforts, you might face a visa refusal. We understand how frustrating and disheartening that can be, especially when you've invested so much time and hope into your application! </p>

            <h3 className={styles.subTitle}>Common Reasons for New Zealand Visa Refusal: Decoding the "Why"</h3>
            <p>New Zealand visa applications from India can be refused for various reasons. Immigration New Zealand (INZ) assesses applications rigorously to ensure all criteria are met and that applicants genuinely meet the requirements of their chosen visa category. Some of the most common reasons for refusal include:</p>

            <ul>
              <li><strong>Insufficient Funds/Financial Instability:</strong> A major concern for INZ. You must provide clear and convincing evidence that you have adequate funds to support yourself for the entire duration of your stay in New Zealand, including living expenses, accommodation, and for students, tuition fees. This ensures you won't become a burden on public funds.</li>
              <li><strong>Lack of Strong Ties to Home Country (India):</strong> For temporary visas (visitor, student, work visa), INZ needs assurance that you will return to India after your authorized stay. They look for strong financial, family, social, and professional ties in your home country, such as property ownership, stable employment, family dependents, or ongoing business commitments.</li>
              <li><strong>Incomplete or Inconsistent Documentation:</strong> Even a small oversight, missing document, or discrepancies between documents can lead to rejection. This includes out-of-date bank statements, inconsistent academic records, vague employment letters, or identity proof issues. Precision and thoroughness are critical.</li>
              <li><strong>Misrepresentation or False Information:</strong> Providing any false information, forged documents, or misrepresenting facts (even unintentionally) on your application is a serious offense. This can lead to an immediate refusal and a potential ban from applying to New Zealand for a significant period.</li>
              <li><strong>Failure to Meet Eligibility Criteria:</strong> Not meeting specific requirements for the visa category you applied for, such as minimum English language proficiency (e.g., IELTS/PTE scores for students or skilled migrants), lacking the required educational qualifications for certain programs, or insufficient relevant work experience for a specific work visa.</li>
              <li><strong>Admissibility Issues (Health or Character):</strong> Not clearing mandatory medical examinations or having a criminal record (even minor offenses) can make you inadmissible to New Zealand. INZ has strict health and character requirements.</li>
              <li><strong>Purpose of Visit Not Clear/Genuine:</strong> For visitor visas, if the immigration officer is not convinced about the genuine purpose of your visit (e.g., a vague itinerary, lack of solid plans, or doubts about your intentions). For student visas, doubts about your genuine desire to study can lead to a refusal (this is often referred to as "genuine temporary entrant" criteria, though the specific term GTE is more commonly associated with Australia).</li>
              <li><strong>Invitations and Support Letters:</strong> If your invitation or sponsorship letter from New Zealand is weak, lacks specific details, or comes from an unreliable or unverified source, it can lead to refusal. The letter should clearly outline the purpose, duration, and support being offered for your visit.</li>
              <li><strong>Previous Visa Violations:</strong> Any history of overstaying a visa, working illegally, or other immigration violations in any country can negatively impact your current application's outcome.</li>
            </ul>

            <h3 className={styles.subTitle}>What Happens After a Visa Refusal? Your Options Explored</h3>
            <p>A visa refusal for New Zealand isn't necessarily the end of your journey! You typically have options to consider, and understanding them is crucial for your next steps:</p>
            <ol>
              <li><strong>Understanding the Refusal:</strong> The first and most critical step is to carefully read the refusal letter provided by Immigration New Zealand. This letter will explicitly state the reasons for the rejection. Without a clear understanding of "why" your application was refused, it's impossible to formulate an effective strategy.</li>
              <br />
              <li><strong>Requesting a Reconsideration of Decision (RCD):</strong> For some visa categories and refusal reasons, you might be eligible to apply for a Reconsideration of Decision. This is a formal process where INZ reviews the original decision based on the information provided in your initial application and any new information you submit that directly addresses the refusal points.</li>
              <br />
              <li><strong>Reapply for the Visa:</strong> For most refusals, especially if the reason was a correctable error, missing document, or if you can significantly strengthen your application by addressing the stated concerns, reapplying with a more robust application is a viable and often successful strategy. This involves submitting a completely new application, carefully incorporating changes and additional evidence to overcome the previous refusal reasons.</li>
              <br />
              <li><strong>Appealing to the Immigration and Protection Tribunal (IPT):</strong> In certain specific cases, particularly for residence class visas or certain temporary visas (e.g., if you are facing deportation), you may have the right to appeal to the Immigration and Protection Tribunal. This is a formal and often complex legal process, and independent legal advice is strongly recommended.</li>
            </ol>

            <h2 className={styles.subTitle}>Your Path to Success with Global Visa Internationals!</h2>
            <p>A New Zealand visa refusal can be overwhelming, leaving you feeling lost and disheartened. But you don't have to face it alone. At Global Visa Internationals, we specialize in assisting Indian applicants with their New Zealand visa applications, including challenging refusal decisions and preparing strong, compelling re-applications tailored to INZ's specific requirements.</p>

            <h2 className={styles.subTitle}>Why Choose Global Visa Internationals? We Handle Everything!</h2>
            <p>When you partner with Global Visa Internationals, you're not just engaging a service provider; you're gaining a dedicated team committed to turning your New Zealand dream into a reality. <strong>We will take care of everything – from the initial, in-depth analysis of your refusal to the meticulous preparation and strategic submission of your strongest possible case. Your peace of mind and success are our utmost priorities.</strong></p>
            <ul>
              <li><strong>Expert Guidance & Unmatched Knowledge:</strong> Our team of experienced New Zealand visa consultants in India and immigration experts are deeply knowledgeable about Immigration New Zealand's policies, procedures, and the specific requirements for various visa categories. We understand the precise reasons behind refusals and, crucially, how to effectively address them within INZ's framework.</li>
              <li><strong>Thorough & Strategic Case Analysis:</strong> We conduct a detailed, in-depth review of your refusal letter and your initial application. This meticulous process allows us to pinpoint the exact reasons for the rejection, identify any weaknesses, and then craft a precise, legally sound, and effective strategy for your reapplication or reconsideration.</li>
              <li><strong>Comprehensive & Strategic Documentation:</strong> Accurate and compelling documentation is the backbone of any successful application. We provide end-to-end guidance in preparing comprehensive, accurate, and persuasive documentation, ensuring all INZ requirements are met and any previous shortcomings are resolved with strong, new evidence. This includes drafting compelling letters of explanation and strengthening your financial proofs and ties to India.</li>
              <li><strong>Reapplication & Reconsideration Expertise:</strong> Whether your best path forward is a new application or a formal request for reconsideration, our primary focus is on building a significantly stronger case. We strategically help you address every single refusal point, advise on gathering and presenting new evidence, and ensure your application presents your situation in the most truthful and favourable light to Immigration New Zealand.</li>
              <li><strong>Personalized Approach & Tailored Solutions:</strong> We understand that every refusal case is unique, with its own specific circumstances and challenges. We offer highly tailored advice and customized solutions designed to address your individual situation, providing realistic hope and a clear, actionable path forward.</li>
              <li><strong>Proven Track Record & Client Success:</strong> We pride ourselves on a strong and verifiable track record of helping many Indian applicants successfully achieve their New Zealand visa dreams, even after initial refusals. Our numerous success stories underscore our reliability and expertise, making us your trusted partner for New Zealand immigration solutions after refusal.</li>
              <li><strong>End-to-End Support:</strong> From the moment you contact us until your visa is approved, we provide continuous, transparent support. This includes answering your questions, preparing you for potential interviews (if required), and liaising with relevant authorities on your behalf where possible.</li>
            </ul>
            <p className={styles.note}>Don't let a visa refusal put an end to your aspirations of a life or visit to New Zealand. The journey might seem daunting, but with Global Visa Internationals by your side, it becomes manageable and hopeful. Contact Global Visa Internationals today for a comprehensive consultation! We are dedicated to helping you turn your "No" into a "Yes." <strong>Let us take the burden off your shoulders, navigate the complexities of INZ procedures, and guide you every step of the way towards your successful New Zealand journey.</strong></p>

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