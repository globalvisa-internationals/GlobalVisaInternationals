'use client';
import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './VisaForm.module.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function VisaForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  // 🔹 Controlled form data
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    immigration_type: '',
    applicants: '',
    age: '',
    education: '',
    email: '',
  });

  // 🔹 Auto popup (10s for demo, set to 1000000 in production)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
    }, 200000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Phone validation
  const validatePhone = (number) => {
    return number.replace(/\D/g, '').length >= 10;
  };

  // 🔹 Submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!validatePhone(phone)) {
      setPhoneError('❌ Please enter a valid phone number.');
      setIsSubmitting(false);
      return;
    } else {
      setPhoneError('');
    }

    if (!agreedToTerms) {
      alert('❌ Please agree to the Terms & Conditions.');
      setIsSubmitting(false);
      return;
    }

    if (!executeRecaptcha) {
      alert('❌ reCAPTCHA not ready');
      setIsSubmitting(false);
      return;
    }

    const token = await executeRecaptcha('inquiry_form');
    if (!token) {
      alert("❌ Please verify you're not a robot");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      ...formData,
      phone,
      recaptchaToken: token,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!data.success) {
          alert('❌ Email sending failed.');
        } else {
          // ✅ Reset only after success
          setFormData({
            name: '',
            country: '',
            immigration_type: '',
            applicants: '',
            age: '',
            education: '',
            email: '',
          });
          setPhone('');
          setAgreedToTerms(false);
          setSuccessPopup(true);
        }
      })
      .catch((err) => {
        console.error(err);
        alert('❌ Submission error.');
      })
      .finally(() => setIsSubmitting(false));
  };

  // 🔹 Reusable form UI
  const FormUI = () => (
    <form onSubmit={handleSubmit}>
      <div className={styles.row1}>
        <input
          className={styles.input}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>

      <div className={styles.row1}>
        <PhoneInput
          country={'in'}
          value={phone}
          onChange={setPhone}
          inputClass={styles.input}
          enableSearch={true}
          placeholder="Enter phone number"
          inputProps={{ name: 'phone', required: true }}
        />
      </div>
      {phoneError && <p style={{ color: 'red', fontSize: '14px' }}>{phoneError}</p>}

      <div className={styles.row}>
        <select
          className={styles.select}
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          {['New Zealand', 'USA', 'UK', 'Canada', 'Australia', 'Europe', 'Japan', 'Dubai', 'Singapore', 'Other'].map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          className={styles.select}
          name="immigration_type"
          value={formData.immigration_type}
          onChange={handleChange}
          required
        >
          <option value="">Select Immigration Type</option>
          {['Work Visa', 'Student Visa', 'Visitor/Tourist Visa', 'Business Visa', 'Dependent Visa', 'Permanent Residency Visa'].map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      <div className={styles.row}>
        <input
          className={styles.input}
          name="applicants"
          type="number"
          min="1"
          placeholder="Number of applicants"
          value={formData.applicants}
          onChange={handleChange}
          required
        />
        <select
          className={styles.select}
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        >
          <option value="">Select Age</option>
          <option value="18-45">1-45</option>
          <option value="45+">45+</option>
        </select>
      </div>

      <div className={styles.row}>
        <select
          className={styles.select}
          name="education"
          value={formData.education}
          onChange={handleChange}
          required
        >
          <option value="">Select Qualification</option>
          {["Diploma", "Bachelor's", "Master's", 'Doctorate', 'Doctor', 'Other'].map((q) => (
            <option key={q} value={q}>{q}</option>
          ))}
        </select>
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.termsContainer}>
        <input
          type="checkbox"
          id="terms"
          name="terms"
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

      <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
        {isSubmitting ? '⏳ Sending...' : 'Submit'}
      </button>
    </form>
  );

  return (
    <>
      {/* Normal Form */}
      <div className={styles.normalForm}>
        <h1 className={styles.formtitle}>Visa Inquiry Form</h1>
        <FormUI />
      </div>

      {/* Popup form */}
      {showPopup && (
        <div className={styles.popupOverlay} onClick={() => setShowPopup(false)}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <h1 className={styles.formtitle}>Visa Inquiry Form</h1>
            <FormUI />
            <button type="button" onClick={() => setShowPopup(false)} style={{ marginTop: '10px' }}>
              ❌ Close
            </button>
          </div>
        </div>
      )}

      {/* Success popup */}
      {successPopup && (
        <div className={styles.popupOverlay} onClick={() => setSuccessPopup(false)}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <p>✅ Your inquiry has been submitted successfully!</p>
            <button type="button" onClick={() => setSuccessPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
