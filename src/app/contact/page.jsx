'use client';

import Head from 'next/head';
import styles from './page.module.css';
import Image from 'next/image';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import React, { useState } from 'react';

export default function Page() {
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
  return (
    <>
      <head>
        <title>Best Visa agency in Bangalore | Global Visa Internationals</title>
        <meta name="description" content="Looking for the best visa immigration consultants in Bangalore? Global Visa Internationals offers expert guidance for Canada PR, Australia PR, student visa applications, and business immigration. With over 13 years of experience, we are your trusted immigration consultants in Bangalore."
        />
        <meta  name="keywords" content="immigration consultants Bangalore, visa immigration consultants in bangalore, Canada PR, Australia PR, student visa Bangalore, business immigration, visa consultancy Bangalore, Global Visa Internationals"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.globalvisainternationals.com/immigration-consultants/bangalore" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Best Immigration Consultants in Bangalore | Global Visa Internationals" />
        <meta property="og:description" content="Searching for top visa immigration consultants in Bangalore? Global Visa Internationals specializes in Canada PR, Australia PR, student visas, and business immigration services."
        />
        <meta property="og:url" content="https://www.globalvisainternationals.com/immigration-consultants/bangalore" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.globalvisainternationals.com/contact/Visa-and-immigration-Contact.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Immigration Consultants in Bangalore | Global Visa Internationals" />
        <meta name="twitter:description" content="Find the best immigration consultants in Bangalore for your Canada PR, Australia PR, student visa, or business immigration needs. Contact Global Visa Internationals today!"
        />
        <meta name="twitter:url" content="https://www.globalvisainternationals.com/immigration-consultants/bangalore" />
        <meta name="twitter:image" content="https://www.globalvisainternationals.com/contact/Visa-and-immigration-Contact.webp" />

        {/* Geo-related meta tags */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="12.9738,77.6190" />

        {/* Structured Data - Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Global Visa Internationals",
              "url": "https://www.globalvisainternationals.com",
              "logo": "https://www.globalvisainternationals.com/logo.png",
              "description": "Global Visa Internationals is among the best immigration consultants in Bangalore, offering expert visa immigration services for Canada PR, Australia PR, student visas, and business immigration.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Unit #105, Ground Floor, Prestige Meridian – II, M.G. Road",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560001",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8595338595",
                "contactType": "Customer Service",
                "email": "web@abhinav.com",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/GlobalVisaInternationals",
                "https://www.instagram.com/GlobalVisaInternationals"
              ]
            }
          `}
        </script>
      </head>
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
          <h1 className={styles.heading}>Best Visa agency in Bangalore</h1>
          <p className={styles.paragraph}>
            With over 13 years of experience, Global Visa Internationals has established itself as one of the leading <strong>immigration consultants in Bangalore</strong>. Our dedicated team specializes in providing comprehensive <strong>visa immigration consultancy</strong> for individuals seeking <strong>Canada PR</strong> and <strong>Australia PR</strong>. If you're looking for reliable guidance on your <strong>student visa</strong> application in <strong>Bangalore</strong> or require expert assistance with <strong>business immigration</strong>, you've come to the right place.
          </p>

          <h2 className={styles.subheading}>Our Expert Visa Immigration Services</h2>
          <ul className={styles.list}>
            <li>Canada - Express Entry and Provincial Nominee Programs (PNPs) for <strong>Canada PR</strong></li>
            <li>Australia - SkillSelect for <strong>Australia PR</strong></li>
            <li><strong>Student Visas</strong> for USA, UK, Europe, and more - Your pathway to international education from <strong>Bangalore</strong></li>
            <li>Comprehensive <strong>Business Immigration Services</strong> - Explore global opportunities</li>
            <li>Legal Outsourcing for International Visa Law Firms</li>
          </ul>
          <h2 className={styles.subheading}>Contact Our Immigration Consultants in Bangalore</h2>
          <address className={styles.address}>
            <li><strong>Address:</strong> GF-9, Business Point, 137 Brigade Road, Next to Brigade Towers, Bangalore, 560025, Karnataka</li>
            
            <li><strong>Phone:</strong> <a href="tel:+917022213466"> +91-7022213466</a></li>
            <li><strong>Email:</strong> <a href="mailto:operations@globalvisa-internationalscom">operations@globalvisa-internationals.com</a></li>
          </address>
          <p className={styles.paragraph}>
            <strong>Office Timings:</strong> Monday to Saturday: 10:00 AM to 07:00 PM<br />
            <strong>Closed on:</strong> Sundays and Public Holidays
          </p>
        </main>
        <div className={styles.formSection}>
          <h2>Immigration Inquiry Form</h2>
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
                  {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
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
      </div>
    </>
  );
}