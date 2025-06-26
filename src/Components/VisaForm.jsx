'use client';
import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function VisaForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    if (!executeRecaptcha) {
      alert('❌ reCAPTCHA not ready');
      return;
    }

    const token = await executeRecaptcha('inquiry_form');
    if (!token) {
      alert("❌ Please verify you're not a robot");
      return;
    }

    const payload = {
      ...Object.fromEntries(formData.entries()),
      recaptchaToken: token,
    };

    setShowPopup(true);
    form.reset();

    setTimeout(() => {
      setShowPopup(false);
    }, 4000);

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!data.success) alert('❌ Email sending failed.');
      })
      .catch((err) => {
        console.error(err);
        alert('❌ Submission error.');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className={styles.formSection}>
      <h1 className={styles.formtitle}>Visa And Immigration Inquiry Form</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input className={styles.input} name="name" placeholder="Enter your name" required />
          <input className={styles.input} name="phone" placeholder="Enter your phone number" required />
        </div>
        <div className={styles.row}>
          <select className={styles.select} name="country" required>
            <option value="">Select Country</option>
            {["New Zealand", "USA", "UK", "Canada", "Australia", "Europe", "Japan", "Dubai", "Singapore", "Other"].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select className={styles.select} name="immigration_type" required>
            <option value="">Select Immigration Type</option>
            {["Work Visa", "Student Visa", "Visitor/Tourist Visa", "Business Visa", "Dependent Visa", "Permanent Residency Visa"].map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
        <div className={styles.row}>
          <input className={styles.input} name="applicants" type="number" min="1" placeholder="Number of applicants" required />
          <select className={styles.select} name="age" required>
            <option value="">Select Age</option>
            <option value="18-45">18-45</option>
            <option value="45+">45+</option>
          </select>
        </div>
        <div className={styles.row}>
          <select className={styles.select} name="education" required>
            <option value="">Select Qualification</option>
            {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
          <input className={styles.input} name="email" type="email" placeholder="Enter your email" required />
        </div>
        <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
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
  );
}
