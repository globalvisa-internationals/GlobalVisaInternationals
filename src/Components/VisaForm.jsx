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
  const [successPopup, setSuccessPopup] = useState(false);
  const [phone, setPhone] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    immigration_type: '',
    applicants: '',
    age: '',
    education: '',
    email: '',
  });

  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (phone.replace(/\D/g, '').length < 10) {
      alert('❌ Please enter a valid phone number.');
      return false;
    }

    if (!agreedToTerms) {
      alert('❌ Please agree to the Terms & Conditions.');
      return false;
    }

    return true;
  };

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
        // Reset form
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
      } else {
        alert('❌ Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('❌ Submission error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form fields configuration for cleaner JSX
  const formFields = [
    { type: 'text', name: 'name', placeholder: 'Enter your name', required: true },
    {
      type: 'custom',
      name: 'phone',
      component: (
        <PhoneInput
          country={'in'}
          value={phone}
          onChange={setPhone}
          inputClass={styles.input}
          enableSearch={true}
          placeholder="Enter phone number"
          inputProps={{ name: 'phone', required: true }}
        />
      )
    },
    {
      type: 'row',
      fields: [
        {
          type: 'select',
          name: 'country',
          options: ['', 'New Zealand', 'USA', 'UK', 'Canada', 'Australia', 'Europe', 'Japan', 'Dubai', 'Singapore', 'Other'],
          placeholder: 'Select Country'
        },
        {
          type: 'select',
          name: 'immigration_type',
          options: ['', 'Work Visa', 'Student Visa', 'Visitor/Tourist Visa', 'Business Visa', 'Dependent Visa', 'Permanent Residency Visa'],
          placeholder: 'Select Immigration Type'
        }
      ]
    },
    {
      type: 'row',
      fields: [
        {
          type: 'number',
          name: 'applicants',
          placeholder: 'Number of applicants',
          min: 1,
          required: true
        },
        {
          type: 'select',
          name: 'age',
          options: ['', '1-45', '45+'],
          placeholder: 'Select Age'
        }
      ]
    },
    {
      type: 'row',
      fields: [
        {
          type: 'select',
          name: 'education',
          options: ['', "Diploma", "Bachelor's", "Master's", 'Doctorate', 'Doctor', 'Other'],
          placeholder: 'Select Qualification'
        },
        {
          type: 'email',
          name: 'email',
          placeholder: 'Enter your email',
          required: true
        }
      ]
    }
  ];

  // Render field based on type
  const renderField = (field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <input
            className={styles.input}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
            min={field.min}
          />
        );
      case 'select':
        return (
          <select
            className={styles.select}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
          >
            <option value="">{field.placeholder}</option>
            {field.options.slice(1).map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'custom':
        return field.component;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Normal Form */}
      <div className={styles.normalForm}>
        <h1 className={styles.formtitle}>Book a Free Consultation</h1>
        <form onSubmit={handleSubmit}>
          {formFields.map((field, index) => (
            <div key={index} className={field.type === 'row' ? styles.row : styles.row1}>
              {field.type === 'row' ? (
                field.fields.map((subField, subIndex) => (
                  <React.Fragment key={subIndex}>
                    {renderField(subField)}
                  </React.Fragment>
                ))
              ) : (
                renderField(field)
              )}
            </div>
          ))}

          <div className={styles.termsContainer}>
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

          <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
            {isSubmitting ? '⏳ Sending...' : 'Submit'}
          </button>
        </form>
      </div>

      {/* Popup form */}
      {showPopup && (
        <div className={styles.popupOverlay} onClick={() => setShowPopup(false)}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <h1 className={styles.formtitle}>Book a Free Consultation</h1>
            <form onSubmit={handleSubmit}>
              {formFields.map((field, index) => (
                <div key={index} className={field.type === 'row' ? styles.row : styles.row1}>
                  {field.type === 'row' ? (
                    field.fields.map((subField, subIndex) => (
                      <React.Fragment key={subIndex}>
                        {renderField(subField)}
                      </React.Fragment>
                    ))
                  ) : (
                    renderField(field)
                  )}
                </div>
              ))}

              <div className={styles.termsContainer}>
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
              <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
                {isSubmitting ? '⏳ Sending...' : 'Submit'}
              </button>
              <button type="button" onClick={() => setShowPopup(false)} style={{ marginTop: '10px' }}>
                ❌ Close
              </button>
            </form>
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