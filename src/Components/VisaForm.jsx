'use client';
import React, { useState, useEffect, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './VisaForm.module.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import { getCookie } from "@/lib/getCookie";
import { useRouter } from 'next/navigation';

export default function VisaForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [phone, setPhone] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    immigration_type: '',
    email: '',
  });

  // Show popup after 10 seconds
  useEffect(() => {
    const submittedDate = localStorage.getItem("popupSubmittedDate");
    const today = new Date().toISOString().split("T")[0];

    if (submittedDate !== today) {
      const timer = setTimeout(() => setShowPopup(true), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const validateForm = useCallback(() => {
    if (phone.replace(/\D/g, '').length < 10) {
      alert('❌ Please enter a valid phone number.');
      return false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      alert('❌ Please enter a valid email address.');
      return false;
    }

    if (!formData.name || formData.name.trim().length < 2) {
      alert('❌ Please enter your name.');
      return false;
    }

    if (!agreedToTerms) {
      alert('❌ Please agree to the Terms & Conditions.');
      return false;
    }

    return true;
  }, [phone, formData.email, formData.name, agreedToTerms]);

  const trackConversion = useCallback(() => {
    // Prevent double conversions
    if (localStorage.getItem("alreadyConverted")) return;

    const gclid = getCookie("gclid");

    // Fire Google Ads conversion ONLY if GCLID exists
    if (gclid && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_LABEL}`,
        value: 1,
        currency: "INR"
      });
    }

    // Always fire GA4 event
    if (typeof window.gtag === "function") {
      window.gtag("event", "form_submission", {
        event_category: "Lead",
        event_label: gclid ? "Paid Lead" : "Organic Lead"
      });
    }

    // Mark conversion fired
    localStorage.setItem("alreadyConverted", "yes");
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      country: '',
      immigration_type: '',
      email: '',
    });
    setPhone('');
    setAgreedToTerms(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    if (!executeRecaptcha) {
      alert('❌ reCAPTCHA not ready');
      return;
    }

    setIsSubmitting(true);

    try {
      const token = await executeRecaptcha('inquiry_form');
      if (!token) {
        alert("❌ Please verify you're not a robot");
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, phone, recaptchaToken: token }),
      });

      const data = await response.json();

      if (data.success) {
        // Track conversion
        trackConversion();

        // Reset form
        resetForm();

        // Store submission date and close popup
        const today = new Date().toISOString().split("T")[0];
        localStorage.setItem("popupSubmittedDate", today);
        setShowPopup(false);

        // Redirect immediately to Thank You page
        router.push('./Thank-you');
      } else {
        alert('❌ Submission failed. Please try again.');
        // Still redirect to thank you page on failure
        router.push('./Thank-you');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('❌ Submission error. Please try again.');
      // Still redirect to thank you page on error
      router.push('./Thank-you');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = (
    <div className={styles.formGrid}>
      {/* Row 1: Name and Email */}
      <div className={`${styles.modalField} ${styles.halfWidth}`}>
        <input
          className={styles.modalInput}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
      </div>
      <div className={`${styles.modalField} ${styles.halfWidth}`}>
        <input
          className={styles.modalInput}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
      </div>

      {/* Row 2: Phone Number (full width) */}
      <div className={`${styles.modalField} ${styles.fullWidth}`}>
        <PhoneInput
          country={'in'}
          value={phone}
          onChange={setPhone}
          inputClass={styles.modalInput}
          enableSearch={true}
          placeholder="9876543210"
          inputProps={{ name: 'phone', required: true }}
        />
      </div>

      {/* Row 3: Country and Visa Type */}
      <div className={`${styles.modalField} ${styles.halfWidth}`}>
        <select
          className={styles.modalSelect}
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Destination Country</option>
          {['USA', 'UK', 'Canada', 'Schengen', 'Australia', 'New Zealand', 'Singapore', 'Japan', 'Dubai', 'Other'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className={`${styles.modalField} ${styles.halfWidth}`}>
        <select
          className={styles.modalSelect}
          name="immigration_type"
          value={formData.immigration_type}
          onChange={handleChange}
          required
        >
          <option value="">Visa Type</option>
          {['Visitor/Tourist Visa', 'Business Visa', 'Student Visa', 'Dependent Visa', 'Permanent Residency Visa', 'Work Visa', 'Other'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );

  const termsCheckbox = (
    <div className={styles.modalTerms}>
      <input
        type="checkbox"
        id="terms"
        checked={agreedToTerms}
        onChange={() => setAgreedToTerms(!agreedToTerms)}
        required
      />
      <label htmlFor="terms">
        I agree to the{' '}
        <a
          href="https://www.globalvisainternationals.com/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms & Conditions
        </a>
      </label>
    </div>
  );

  const assuranceSection = (
    <div className={styles.formAssurance}>
      <div className={styles.assuranceItem}>
        <FaCheckCircle />
        <span>100% Confidential</span>
      </div>
      <div className={styles.assuranceItem}>
        <FaCheckCircle />
        <span>No Obligation</span>
      </div>
      <div className={styles.assuranceItem}>
        <FaCheckCircle />
        <span>Expert Advice</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Normal Form - Compact Layout */}
      <div className={styles.normalForm}>
        {/* Form Header */}
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Free Visa Assessment</h2>
          <p className={styles.modalSubtitleForm}>
            Get a personalized consultation within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.modalForm}>
          {formFields}
          {termsCheckbox}
          <button
            className={styles.modalSubmitBtn}
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? '⏳ Submitting...' : 'Get Free Assessment'}
          </button>
        </form>
        {assuranceSection}
      </div>

      {/* Modal Popup */}
      {showPopup && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
              <div>
                <h2 className={styles.modalTitle}>Free Visa Assessment</h2>
                <p className={styles.modalSubtitleForm}>Get expert advice for your visa journey</p>
              </div>
              <button
                className={styles.modalCloseBtn}
                onClick={() => setShowPopup(false)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.modalForm}>
              {formFields}
              {termsCheckbox}
              <button
                className={styles.modalSubmitBtn}
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? '⏳ Submitting...' : 'Get Free Assessment'}
              </button>
            </form>
            {assuranceSection}
          </div>
        </div>
      )}
    </>
  );
}