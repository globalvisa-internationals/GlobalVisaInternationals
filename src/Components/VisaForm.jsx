// src/Components/VisaForm.jsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import { getCookie } from '@/lib/getCookie';
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

  // Show popup after 10 seconds (only once per day)
  useEffect(() => {
    const submittedDate = localStorage.getItem('popupSubmittedDate');
    const today = new Date().toISOString().split('T')[0];
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
    if (localStorage.getItem('alreadyConverted')) return;
    const gclid = getCookie('gclid');

    if (gclid && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_LABEL}`,
        value: 1,
        currency: 'INR',
      });
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'form_submission', {
        event_category: 'Lead',
        event_label: gclid ? 'Paid Lead' : 'Organic Lead',
      });
    }

    localStorage.setItem('alreadyConverted', 'yes');
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
        trackConversion();
        resetForm();
        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem('popupSubmittedDate', today);
        setShowPopup(false);
        router.push('/Thank-you');
      } else {
        alert('❌ Submission failed. Please try again.');
        router.push('/Thank-you');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('❌ Submission error. Please try again.');
      router.push('/Thank-you');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable form fields (shared between normal form and popup)
  const renderFormFields = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
          required
        />
      </div>

      <div>
        <PhoneInput
          country="in"
          value={phone}
          onChange={setPhone}
          enableSearch
          inputProps={{ name: 'phone', required: true }}
          inputClass="!w-full !px-4 !py-2.5 !text-sm !bg-gray-50 !border !border-gray-300 !rounded-lg !text-gray-800 focus:!border-teal-500 focus:!ring-2 focus:!ring-teal-500/20"
          containerClass="w-full"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 cursor-pointer"
          required
        >
          <option value="">Destination Country</option>
          {['USA', 'UK', 'Canada', 'Schengen', 'Australia', 'New Zealand', 'Singapore', 'Japan', 'Dubai', 'Other'].map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <select
          name="immigration_type"
          value={formData.immigration_type}
          onChange={handleChange}
          className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 cursor-pointer"
          required
        >
          <option value="">Visa Type</option>
          {['Visitor/Tourist Visa', 'Business Visa', 'Student Visa', 'Dependent Visa', 'Permanent Residency Visa', 'Work Visa', 'Other'].map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderTerms = () => (
    <div className="flex items-start gap-2 mt-3">
      <input
        type="checkbox"
        id="terms"
        checked={agreedToTerms}
        onChange={() => setAgreedToTerms(!agreedToTerms)}
        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 accent-teal-600 cursor-pointer"
        required
      />
      <label htmlFor="terms" className="text-[11px] text-gray-500 cursor-pointer leading-relaxed">
        I agree to the{' '}
        <a href="https://www.globalvisainternationals.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline">
          Terms & Conditions
        </a>
      </label>
    </div>
  );

  const renderAssurance = () => (
    <div className="flex justify-around pt-3 border-t border-gray-200 mt-3">
      <div className="flex flex-col items-center gap-0.5">
        <FaCheckCircle className="text-green-600 text-xs" />
        <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">Confidential</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <FaCheckCircle className="text-green-600 text-xs" />
        <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">No Obligation</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <FaCheckCircle className="text-green-600 text-xs" />
        <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">Expert Advice</span>
      </div>
    </div>
  );

  // Normal compact form (used on the homepage)
  const NormalForm = () => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-teal-700 to-teal-800 px-6 py-5 text-white">
        <h2 className="text-2xl font-bold">Free Visa Assessment</h2>
        <p className="text-teal-100 text-sm mt-1">Get a personalized consultation within 24 hours</p>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {renderFormFields()}
          {renderTerms()}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '⏳ Submitting...' : 'Get Free Assessment →'}
          </button>
        </form>
        {renderAssurance()}
      </div>
    </div>
  );

  // Modal Popup (10-second delay)
  const PopupModal = () => (
    showPopup && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            aria-label="Close"
          >
            <FaTimes />
          </button>
          <div className="bg-gradient-to-r from-teal-700 to-teal-800 px-6 py-5 rounded-t-2xl">
            <h2 className="text-xl font-bold text-white">Free Visa Assessment</h2>
            <p className="text-teal-100 text-sm">Get expert advice for your visa journey</p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {renderFormFields()}
              {renderTerms()}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? '⏳ Submitting...' : 'Get Free Assessment →'}
              </button>
            </form>
            {renderAssurance()}
          </div>
        </div>
      </div>
    )
  );

  return (
    <>
      <NormalForm />
      <PopupModal />
    </>
  );
}