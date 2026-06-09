// src/components/VisaConsultationForm.jsx
'use client';

import React, { useState, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FaCheckCircle } from 'react-icons/fa';
import { getCookie } from '@/lib/getCookie';
import { useRouter } from 'next/navigation';

export default function VisaConsultationForm({ defaultCountry = '', defaultVisaType = '' }) {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [phone, setPhone] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        country: defaultCountry,
        immigration_type: defaultVisaType,
        email: '',
    });

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
            country: defaultCountry,
            immigration_type: defaultVisaType,
            email: '',
        });
        setPhone('');
        setAgreedToTerms(false);
    }, [defaultCountry, defaultVisaType]);

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

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2.5">
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full pl-3 pr-3 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0383C9] focus:ring-2 focus:ring-[#0383C9]/10 transition-all"
                            required
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className="w-full pl-3 pr-3 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0383C9] focus:ring-2 focus:ring-[#0383C9]/10 transition-all"
                            required
                        />
                    </div>
                </div>

                <div>
                    <PhoneInput
                        country="in"
                        value={phone}
                        onChange={setPhone}
                        enableSearch
                        inputProps={{ name: 'phone', required: true }}
                        inputClass="w-full py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#0383C9] focus:ring-2 focus:ring-[#0383C9]/10"
                        containerClass="w-full"
                    />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full pl-3 pr-8 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:border-[#0383C9] focus:ring-2 focus:ring-[#0383C9]/10 appearance-none cursor-pointer"
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
                        className="w-full pl-3 pr-8 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:border-[#0383C9] focus:ring-2 focus:ring-[#0383C9]/10 appearance-none cursor-pointer"
                        required
                    >
                        <option value="">Visa Type</option>
                        {['Visitor/Tourist Visa', 'Business Visa', 'Student Visa', 'Dependent Visa', 'Permanent Residency Visa', 'Other'].map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        id="terms"
                        checked={agreedToTerms}
                        onChange={() => setAgreedToTerms(!agreedToTerms)}
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 accent-[#0383C9] cursor-pointer"
                        required
                    />
                    <label htmlFor="terms" className="text-[11px] text-slate-500 cursor-pointer leading-relaxed">
                        I agree to the{' '}
                        <a href="https://www.globalvisainternationals.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-[#0383C9] font-semibold hover:underline">
                            Terms & Conditions
                        </a>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3 bg-[#F5A623] hover:bg-[#E09615] text-[#061A30] font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-[#F5A623]/30 hover:shadow-[#F5A623]/50 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
                >
                    {isSubmitting ? '⏳ Submitting…' : 'Get Free Assessment →'}
                </button>
            </form>

            <div className="flex justify-around pt-3 border-t border-slate-100 mt-3">
                <div className="flex flex-col items-center gap-0.5">
                    <FaCheckCircle className="text-[#1A9612] text-xs" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Confidential</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                    <FaCheckCircle className="text-[#1A9612] text-xs" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">No Obligation</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                    <FaCheckCircle className="text-[#1A9612] text-xs" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Expert Advice</span>
                </div>
            </div>
        </div>
    );
}