//src\app\ads-landing\page.jsx
"use client";

import React, { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";

import {
    FaCheckCircle, FaArrowRight, FaPassport, FaGlobe,
    FaClock, FaShieldAlt, FaHandshake, FaChartLine, FaPhone,
    FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaStar,
    FaAngleDown, FaQuoteLeft, FaLock, FaHeadset, FaTimes,
    FaUser, FaChevronDown, FaPlay, FaMedal, FaFileAlt,
} from "react-icons/fa";

// Import the reusable form component
import VisaConsultationForm from "@/Components/VisaConsultationForm";


const CITIES = {
    Bangalore: {
        label: "Bangalore",
        phone: "+91 7022213466",
        wa: "918045678900",
        keywords: [
            "USA Visa Consultants in Bangalore",
            "UK Visitor Visa Agents Bangalore",
            "Schengen Visa from Bangalore",
            "B1 B2 Visa Consultants Bangalore",
            "Business Visa Agents Brigade Road",
        ],
        heroSub: "Bangalore's highest-rated visa consultancy on Brigade Road",
        trustLine: "Serving Koramangala · Whitefield · Indiranagar · JP Nagar",
    },
    Chennai: {
        label: "Chennai",
        phone: "+91 44 4567 8900",
        wa: "914445678900",
        keywords: [
            "USA Tourist Visa Agents Chennai",
            "UK Business Visa Consultants Chennai",
            "Schengen Visa Consultants Anna Nagar",
            "B2 Visitor Visa Chennai",
            "Best Visa Agents in Chennai",
        ],
        heroSub: "Chennai's trusted visa experts near Anna Salai",
        trustLine: "Serving Anna Nagar · T. Nagar · Adyar · Velachery",
    },
    Hyderabad: {
        label: "Hyderabad",
        phone: "+91 40 4567 8900",
        wa: "914045678900",
        keywords: [
            "USA Visa Agents Hyderabad",
            "UK Dependent Visa Consultants Hyderabad",
            "Schengen Visa from Hyderabad",
            "Business Visa Consultants Banjara Hills",
            "Best Immigration Consultants Hyderabad",
        ],
        heroSub: "Hyderabad's top-rated immigration consultants in Banjara Hills",
        trustLine: "Serving Banjara Hills · Jubilee Hills · Madhapur · HITEC City",
    },
    Mangalore: {
        label: "Mangalore",
        phone: "+91 824 456 7890",
        wa: "918244567890",
        keywords: [
            "USA Visa Consultants Mangalore",
            "UK Tourist Visa Agents Mangalore",
            "Schengen Visa Consultants Mangalore",
            "B1 B2 Visa Agents Mangalore",
            "Visitor Visa Services Mangalore",
        ],
        heroSub: "Mangalore's most reliable visa consultancy for USA, UK & Schengen",
        trustLine: "Serving Hampankatta · Kadri · Bejai · Kankanady",
    },
    Mysore: {
        label: "Mysore",
        phone: "+91 821 456 7890",
        wa: "918214567890",
        keywords: [
            "USA Visa Agents Mysore",
            "UK Visitor Visa Consultants Mysore",
            "Schengen Visa Help Mysore",
            "B2 Tourist Visa Agents Mysore",
            "Business Visa Consultants Mysore",
        ],
        heroSub: "Mysore's trusted partner for international visa approvals",
        trustLine: "Serving Saraswathipuram · Vijayanagar · Gokulam · Kuvempunagar",
    },
};

const VISA_TYPES = {
    Tourist: {
        label: "Tourist / Visitor Visa",
        icon: "✈️",
        headline: "See the World. We Handle the Paperwork.",
        sub: "Expert B2 / Visitor visa assistance for USA, UK Standard Visitor & Schengen — with 98% approval.",
        benefits: ["Holiday & family visit visas", "Medical tourism visas", "Transit visas included", "Full document checklist"],
        countries: ["USA B1/B2 🇺🇸", "UK Standard Visitor 🇬🇧", "Schengen Multi-Entry 🇪🇺"],
    },
    Business: {
        label: "Business Visa",
        icon: "💼",
        headline: "Your Meeting Is in London. Your Visa Is Our Job.",
        sub: "Business class visa processing for USA, UK & Schengen — conference, client visits, trade fairs.",
        benefits: ["B1 / Business visa USA", "UK Business Standard", "Schengen C-Type Business", "Invitation letter support"],
        countries: ["USA B1 🇺🇸", "UK Business Visitor 🇬🇧", "Schengen Short-Stay 🇪🇺"],
    },
    Dependent: {
        label: "Dependent / Family Visa",
        icon: "👨‍👩‍👧",
        headline: "Reunite Your Family Across Borders.",
        sub: "Dependent visa support for spouses, children & parents — USA, UK, and Schengen covered.",
        benefits: ["Spouse & child visas", "Parent visitor visas", "Document notarisation help", "Interview coaching"],
        countries: ["USA B2 Dependent 🇺🇸", "UK Family Visitor 🇬🇧", "Schengen Family 🇪🇺"],
    },
};

const TESTIMONIALS = [
    { name: "Priya Venkatesh", city: "Bangalore", visa: "USA B2 Tourist", rating: 5, text: "GVI made our US family trip happen. Our B2 visa came through in 12 days. The document checklist was exhaustive — zero queries from the embassy." },
    { name: "Rajesh Nair", city: "Chennai", visa: "Schengen Multi-Entry", rating: 5, text: "Applied for a 2-year multi-entry Schengen for a Europe tour. The GVI team handled everything perfectly, including the cover letter. Highly recommend." },
    { name: "Deepa Shetty", city: "Mangalore", visa: "UK Visitor", rating: 5, text: "I had a previous refusal. GVI reviewed my case thoroughly, fixed the documentation gaps, and I got my UK visa on the reapplication. Outstanding service." },
    { name: "Vikram Rao", city: "Hyderabad", visa: "USA B1 Business", rating: 5, text: "Quick turnaround for my B1 business visa. Attending Salesforce World Tour — GVI ensured my invitation letter and financials were exactly right." },
    { name: "Anita Prabhu", city: "Mysore", visa: "Schengen Tourist", rating: 5, text: "First-time Europe traveller and was overwhelmed by paperwork. GVI guided me step by step — itinerary, insurance, bank statements. Approved first time!" },
];

const FAQS = [
    { q: "How long does a USA B1/B2 visa take from India?", a: "Processing typically takes 3–12 weeks depending on the consulate load and your interview date. We help you book the earliest available slot and ensure your file is interview-ready the first time." },
    { q: "Can I apply for a Schengen visa from Bangalore or Hyderabad?", a: "Yes. All VFS and TLS Contact application centres in Bangalore, Chennai, Hyderabad, and other cities accept Schengen applications. We handle your entire file and accompany you through submission." },
    { q: "What is the difference between a UK Standard Visitor and a Business Visitor visa?", a: "A Standard Visitor visa covers tourism and family visits. A Business Visitor visa is required for meetings, conferences, and negotiating contracts — but not for employment. GVI advises the correct category for your specific trip." },
    { q: "My previous visa was refused. Can I still apply?", a: "Yes — a refusal is not permanent. We review your refusal letter in detail, identify the exact objection, and reapply with a stronger, addressed file. Our refusal recovery rate is over 85%." },
    { q: "Do you service Chennai, Mangalore, Mysore and Hyderabad clients?", a: "Absolutely. While our office is in Bangalore, we serve clients across South India through online consultation, digital document review, and courier-based submission support." },
];

// --------------------------------------------------------------
// CitySwitcher
// --------------------------------------------------------------
function CitySwitcher({ active, onChange }) {
    return (
        <div className="flex items-center gap-1 bg-navy-deep/60 border border-white/10 rounded-xl p-1 overflow-x-auto scrollbar-hide">
            {Object.keys(CITIES).map(city => (
                <button key={city} onClick={() => onChange(city)}
                    className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap
                        ${active === city
                            ? "bg-[#F5A623] text-[#061A30] shadow-sm"
                            : "text-white/60 hover:text-white hover:bg-white/8"
                        }`}>
                    {city}
                </button>
            ))}
        </div>
    );
}

// --------------------------------------------------------------
// VisaSwitcher
// --------------------------------------------------------------
function VisaSwitcher({ active, onChange }) {
    return (
        <div className="flex gap-2 flex-wrap">
            {Object.entries(VISA_TYPES).map(([key, val]) => (
                <button key={key} onClick={() => onChange(key)}
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-xs font-semibold transition-all duration-200
                        ${active === key
                            ? "border-[#F5A623] bg-[#F5A623]/15 text-[#F5A623]"
                            : "border-white/15 text-white/55 hover:border-white/30 hover:text-white/80"
                        }`}>
                    <span>{val.icon}</span> {val.label}
                </button>
            ))}
        </div>
    );
}

// --------------------------------------------------------------
// KeywordBadges
// --------------------------------------------------------------
function KeywordBadges({ city }) {
    const { keywords } = CITIES[city];
    return (
        <div className="flex flex-wrap gap-2">
            {keywords.map(kw => (
                <span key={kw}
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                    <span className="w-1 h-1 rounded-full bg-[#F5A623] inline-block flex-shrink-0" />
                    {kw}
                </span>
            ))}
        </div>
    );
}

// --------------------------------------------------------------
// HeroSection (updated to use VisaConsultationForm)
// --------------------------------------------------------------
function HeroSection({ city, setCity, visaType, setVisaType }) {
    const cityData = CITIES[city];
    const visaData = VISA_TYPES[visaType];

    return (
        <section className="relative bg-[#061A30] min-h-screen overflow-hidden flex flex-col font-body">
            <div className="absolute inset-0 pointer-events-none opacity-40"
                style={{ backgroundImage: "repeating-linear-gradient(135deg,rgba(3,131,201,0.04) 0px,rgba(3,131,201,0.04) 1px,transparent 1px,transparent 60px)" }} />
            <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle,rgba(3,131,201,0.12) 0%,transparent 65%)", maxWidth: 800, maxHeight: 800 }} />
            <div className="absolute bottom-0 left-[-5%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle,rgba(245,166,35,0.06) 0%,transparent 65%)", maxWidth: 600 }} />
            <div className="absolute top-0 right-[32%] bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block pointer-events-none" />
            <div className="absolute top-0 right-[65%] bottom-0 w-px bg-gradient-to-b from-transparent via-white/4 to-transparent hidden lg:block pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between px-5 lg:px-14 pt-5 pb-4 border-b border-white/6">
                <div className="flex items-center gap-3">
                    <img src="https://www.globalvisainternationals.com/Global-Visa-Internationals-Logo.svg"
                        alt="Global Visa Internationals" className="h-9 brightness-200" />
                    <span className="hidden sm:block text-white/20 text-xl font-thin">|</span>
                    <span className="hidden sm:block text-white/45 text-xs font-medium tracking-wide">Official Visa Consultancy</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-1.5 bg-[#1A9612]/15 border border-[#1A9612]/25 rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A9612] animate-pulse" />
                        <span className="text-[#4ADE80] text-[10px] font-bold tracking-wide uppercase">Open Today</span>
                    </div>
                    <a href={`tel:${cityData.phone}`}
                        className="flex items-center gap-2 bg-[#F5A623] hover:bg-[#E09615] text-[#061A30] text-xs font-bold px-4 py-2 rounded-full transition-colors">
                        <FaPhone className="text-[10px]" /> {cityData.phone}
                    </a>
                </div>
            </div>

            <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-5 lg:px-14 py-10 lg:py-14 grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-start">
                <div>
                    <div className="mb-6">
                        <p className="text-white/35 text-[10px] font-bold uppercase tracking-[.15em] mb-2.5">Select your city</p>
                        <CitySwitcher active={city} onChange={setCity} />
                    </div>
                    <div className="mb-7">
                        <VisaSwitcher active={visaType} onChange={setVisaType} />
                    </div>
                    <div className="mb-5">
                        <div className="inline-flex items-center gap-2 border border-[#F5A623]/30 bg-[#F5A623]/8 rounded-full px-3.5 py-1 mb-5">
                            <FaStar className="text-[#F5A623] text-[10px]" />
                            <span className="text-[#FBC860] text-[10px] font-bold tracking-widest uppercase">
                                11 Yrs · 75,000+ Visas · 98% Success
                            </span>
                        </div>
                        <h1 className="font-display leading-[1.1] mb-3">
                            <span className="block text-white text-4xl md:text-5xl xl:text-[3.6rem] font-semibold">
                                {visaData.headline}
                            </span>
                        </h1>
                        <p className="text-white/55 text-base md:text-lg font-light leading-relaxed max-w-[540px] mb-1">
                            {visaData.sub}
                        </p>
                        <p className="text-[#3AABDF] text-sm font-medium">{cityData.heroSub}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-7">
                        {visaData.countries.map(c => (
                            <span key={c} className="text-xs font-semibold text-white/70 bg-white/7 border border-white/12 rounded-full px-3.5 py-1.5">
                                {c}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mb-8 max-w-md">
                        {visaData.benefits.map(b => (
                            <div key={b} className="flex items-center gap-2 text-sm text-white/70">
                                <FaCheckCircle className="text-[#1A9612] text-xs flex-shrink-0" /> {b}
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-px bg-white/6 border border-white/8 rounded-2xl overflow-hidden mb-8 w-fit">
                        {[["75K+", "Visas Approved"], ["98%", "Success Rate"], ["45+", "Countries"], ["11+", "Years"]].map(([val, lbl], i) => (
                            <div key={lbl} className={`px-5 py-3.5 text-center ${i > 0 ? "border-l border-white/8" : ""}`}>
                                <div className="font-display text-[#F5A623] text-xl md:text-2xl font-semibold leading-none">{val}</div>
                                <div className="text-white/40 text-[10px] mt-1 tracking-wide whitespace-nowrap">{lbl}</div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-4 text-xs text-white/45 font-medium">
                            {["MARA & ICCRC Licensed", "Transparent Pricing", "Interview Coaching", "24/7 Support"].map(t => (
                                <span key={t} className="flex items-center gap-1.5">
                                    <FaCheckCircle className="text-[#1A9612] text-[10px]" /> {t}
                                </span>
                            ))}
                        </div>
                        <div>
                            <p className="text-white/20 text-[9px] uppercase tracking-[.15em] mb-2 font-bold">Top searched services — {city}</p>
                            <KeywordBadges city={city} />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:sticky lg:top-8">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5">
                        <div className="bg-gradient-to-br from-[#030E1C] via-[#0D2E52] to-[#15427A] px-6 py-5">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-[.15em] text-[#F5A623]">
                                    Free Visa Assessment — {city}
                                </span>
                                <div className="flex items-center gap-1.5 bg-[#1A9612]/20 border border-[#1A9612]/30 rounded-full px-2.5 py-1">
                                    <span className="w-1.5 h-1.5 bg-[#1A9612] rounded-full animate-pulse" />
                                    <span className="text-[#4ADE80] text-[9px] font-bold tracking-wide">24h Response</span>
                                </div>
                            </div>
                            <h2 className="font-display text-white text-xl font-semibold mb-1">
                                Claim Your Free Consultation
                            </h2>
                            <p className="text-white/55 text-xs">No hidden fees. No obligation. Expert advice within 24 hours.</p>
                            <div className="flex items-center gap-1.5 mt-3">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map(s => <FaStar key={s} className="text-[#F5A623] text-[10px]" />)}
                                </div>
                                <span className="text-white/45 text-[10px]">4.9/5 from 2,400+ reviews — Google Maps</span>
                            </div>
                        </div>
                        <div className="px-6 py-5">
                            {/* Replaced MiniForm with VisaConsultationForm */}
                            <VisaConsultationForm
                                defaultCountry={city}
                                defaultVisaType={visaData.label}
                            />
                        </div>
                    </div>
                    <a href={`https://wa.me/${cityData.wa}?text=Hi%20GVI%2C%20I%20need%20help%20with%20${encodeURIComponent(visaData.label)}%20from%20${city}`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2.5 mt-3 w-full py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-[#25D366]/20">
                        <FaWhatsapp className="text-base" /> WhatsApp Us Instantly — {city}
                    </a>
                </div>
            </div>

            <div className="relative z-10 border-t border-white/8 bg-[#030E1C]/70 py-3 overflow-hidden flex-shrink-0">
                <div className="flex gap-10 whitespace-nowrap" style={{ animation: "adsMarquee 40s linear infinite" }}>
                    {[...Array(3)].flatMap(() =>
                        ["🇺🇸 USA B1/B2 Visa", "🇬🇧 UK Standard Visitor", "🇪🇺 Schengen Multi-Entry", "💼 Business Visa USA", "👨‍👩‍👧 Dependent Visa UK", "98% Approval Rate", "75,000+ Visas Approved", "Free Document Review"]
                    ).map((item, i) => (
                        <span key={i} className="inline-flex items-center gap-2 text-white/40 text-[11px] font-medium">
                            <span className="w-1 h-1 bg-[#F5A623] rounded-full" /> {item}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes adsMarquee { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
                .gvi-phone-ads .react-tel-input .form-control {
                    width:100%!important; height:40px!important; font-size:13px!important;
                    border:1px solid #e2e8f0!important; border-radius:8px!important;
                    padding-left:48px!important; font-family:inherit!important;
                    transition:border-color .2s,box-shadow .2s!important;
                }
                .gvi-phone-ads .react-tel-input .form-control:focus {
                    border-color:#0383C9!important; box-shadow:0 0 0 3px rgba(3,131,201,.1)!important; outline:none!important;
                }
                .gvi-phone-ads .react-tel-input .flag-dropdown {
                    border:1px solid #e2e8f0!important; border-right:none!important;
                    border-radius:8px 0 0 8px!important; background:#f8fafc!important;
                }
                .scrollbar-hide::-webkit-scrollbar { display:none; }
                .scrollbar-hide { -ms-overflow-style:none; scrollbar-width:none; }
            `}</style>
        </section>
    );
}

// --------------------------------------------------------------
// TrustBar
// --------------------------------------------------------------
function TrustBar({ city }) {
    const items = [
        { icon: FaMedal, t: "MARA & ICCRC Certified" },
        { icon: FaChartLine, t: "98% Approval Rate" },
        { icon: FaClock, t: "Fast-Track Processing" },
        { icon: FaHandshake, t: "No Hidden Fees" },
        { icon: FaShieldAlt, t: "Refusal Recovery Experts" },
        { icon: FaGlobe, t: `Serving ${city} & South India` },
    ];
    return (
        <section className="bg-[#F4F7FB] border-b border-slate-200 font-body">
            <div className="max-w-7xl mx-auto px-5 py-3.5 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
                {items.map(({ icon: Icon, t }) => (
                    <div key={t} className="flex items-center gap-2 text-[#061A30] text-[11px] font-semibold">
                        <Icon className="text-[#0383C9] text-xs" /> {t}
                    </div>
                ))}
            </div>
        </section>
    );
}

// --------------------------------------------------------------
// ProcessSection
// --------------------------------------------------------------
function ProcessSection() {
    const steps = [
        { n: "01", t: "Free Consultation", d: "Tell us your destination, travel purpose and timeline. We assess eligibility and advise the correct visa category — at zero cost." },
        { n: "02", t: "Document Audit", d: "We provide a precise, category-specific checklist and review every document before submission to eliminate rejection risk." },
        { n: "03", t: "Application Filing", d: "We prepare and file your complete application to the correct embassy or VFS centre, ensuring accuracy to official standards." },
        { n: "04", t: "Visa In Hand 🎉", d: "You receive your visa with post-approval guidance on travel insurance, itinerary, and what to expect at immigration." },
    ];
    return (
        <section className="py-20 bg-white font-body">
            <div className="max-w-6xl mx-auto px-5 lg:px-10">
                <div className="text-center mb-14">
                    <span className="inline-block text-[#0383C9] text-[10px] font-black uppercase tracking-[.18em] bg-[#0383C9]/8 px-4 py-1.5 rounded-full mb-4">How It Works</span>
                    <h2 className="font-display text-[#061A30] text-3xl md:text-4xl font-semibold">Four Steps to Your Visa</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-6 relative">
                    <div className="hidden md:block absolute top-[36px] left-[12.5%] right-[12.5%] h-px"
                        style={{ background: "linear-gradient(90deg,#0383C9,#F5A623)" }} />
                    {steps.map(({ n, t, d }) => (
                        <div key={n} className="flex flex-col items-center text-center group">
                            <div className="relative mb-5">
                                <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#061A30] to-[#0383C9] flex items-center justify-center shadow-xl shadow-[#0383C9]/20 relative z-10 group-hover:scale-105 transition-transform duration-300">
                                    <span className="font-display text-[#F5A623] text-xl font-semibold">{n}</span>
                                </div>
                            </div>
                            <h3 className="font-display text-[#061A30] font-semibold text-base mb-2">{t}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --------------------------------------------------------------
// WhySection
// --------------------------------------------------------------
function WhySection({ visaType }) {
    const visaData = VISA_TYPES[visaType];
    const reasons = [
        { icon: FaPassport, h: "End-to-End Support", b: "Document prep, filing, interview coaching — we own every step." },
        { icon: FaChartLine, h: "98% Approval Rate", b: "Proven track record with thousands of approved applications." },
        { icon: FaClock, h: "Fast-Track Processing", b: "Optimised slots and timelines to hit your travel date." },
        { icon: FaHandshake, h: "Zero Hidden Fees", b: "Full cost breakdown upfront. No surprises at any stage." },
        { icon: FaShieldAlt, h: "Refusal Recovery", b: "Previous refusal? We rebuild and reapply with a 85%+ recovery rate." },
        { icon: FaFileAlt, h: "Document Guarantee", b: "Your file leaves our office 100% compliant — or we fix it free." },
    ];
    return (
        <section className="py-20 bg-[#F4F7FB] font-body">
            <div className="max-w-6xl mx-auto px-5 lg:px-10">
                <div className="lg:flex lg:items-start lg:gap-16">
                    <div className="lg:w-64 flex-shrink-0 mb-10 lg:mb-0 lg:sticky lg:top-24">
                        <span className="inline-block text-[#0383C9] text-[10px] font-black uppercase tracking-[.18em] bg-[#0383C9]/8 px-4 py-1.5 rounded-full mb-4">Why GVI</span>
                        <h2 className="font-display text-[#061A30] text-3xl font-semibold leading-tight mb-4">
                            Why 75,000+ Indians chose us for their {visaData.label}
                        </h2>
                        <div className="w-8 h-0.5 bg-[#F5A623] rounded mb-5" />
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Founded in 2016 on Brigade Road, Bangalore. Certified, transparent, and obsessively client-focused.
                        </p>
                    </div>
                    <div className="flex-1 grid sm:grid-cols-2 gap-4">
                        {reasons.map(({ icon: Icon, h, b }) => (
                            <div key={h} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#0383C9]/25 hover:shadow-lg hover:shadow-[#0383C9]/6 transition-all duration-300 group flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#0383C9]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0383C9]/15 transition-colors">
                                    <Icon className="text-[#0383C9] text-sm" />
                                </div>
                                <div>
                                    <h3 className="font-display text-[#061A30] font-semibold text-sm mb-1">{h}</h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">{b}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// --------------------------------------------------------------
// TestimonialsSection
// --------------------------------------------------------------
function TestimonialsSection({ city }) {
    const [idx, setIdx] = useState(0);
    const cityTestimonials = TESTIMONIALS.filter(t => t.city === city);
    const pool = cityTestimonials.length > 0 ? cityTestimonials : TESTIMONIALS;
    const visible = [pool[idx % pool.length], pool[(idx + 1) % pool.length], pool[(idx + 2) % pool.length]];

    return (
        <section className="py-20 bg-white font-body">
            <div className="max-w-6xl mx-auto px-5 lg:px-10">
                <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
                    <div>
                        <span className="inline-block text-[#0383C9] text-[10px] font-black uppercase tracking-[.18em] bg-[#0383C9]/8 px-4 py-1.5 rounded-full mb-4">Client Stories</span>
                        <h2 className="font-display text-[#061A30] text-3xl md:text-4xl font-semibold">
                            Real people. Real visas.
                        </h2>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setIdx(p => (p - 1 + pool.length) % pool.length)}
                            className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#0383C9] flex items-center justify-center text-slate-400 hover:text-[#0383C9] transition-colors">
                            ‹
                        </button>
                        <button onClick={() => setIdx(p => (p + 1) % pool.length)}
                            className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#0383C9] flex items-center justify-center text-slate-400 hover:text-[#0383C9] transition-colors">
                            ›
                        </button>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {visible.map((t, i) => (
                        <div key={i} className="bg-[#F4F7FB] rounded-2xl p-6 border border-slate-200 flex flex-col">
                            <FaQuoteLeft className="text-[#0383C9]/20 text-3xl mb-4" />
                            <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#061A30] to-[#0383C9] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <div className="font-semibold text-[#061A30] text-sm">{t.name}</div>
                                    <div className="text-[10px] text-slate-400">{t.city} · {t.visa}</div>
                                </div>
                                <div className="ml-auto flex">
                                    {[...Array(t.rating)].map((_, s) => <FaStar key={s} className="text-[#F5A623] text-[10px]" />)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --------------------------------------------------------------
// FAQSection
// --------------------------------------------------------------
function FAQSection() {
    const [open, setOpen] = useState(null);
    return (
        <section className="py-20 bg-[#F4F7FB] border-t border-slate-200 font-body">
            <div className="max-w-3xl mx-auto px-5">
                <div className="text-center mb-12">
                    <span className="inline-block text-[#0383C9] text-[10px] font-black uppercase tracking-[.18em] bg-[#0383C9]/8 px-4 py-1.5 rounded-full mb-4">FAQ</span>
                    <h2 className="font-display text-[#061A30] text-3xl font-semibold">Questions we hear every day</h2>
                </div>
                <div className="space-y-2">
                    {FAQS.map(({ q, a }, i) => (
                        <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                            <button onClick={() => setOpen(open === i ? null : i)}
                                className={`w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors ${open === i ? "bg-[#0383C9]/5 text-[#0383C9]" : "text-[#061A30] hover:bg-slate-50"}`}>
                                <span className="font-semibold text-sm">{q}</span>
                                <FaChevronDown className={`text-xs flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                            </button>
                            {open === i && (
                                <div className="px-5 py-4 border-t border-slate-100">
                                    <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --------------------------------------------------------------
// BottomCTA (updated to use VisaConsultationForm)
// --------------------------------------------------------------
function BottomCTA({ city, visaType }) {
    const cityData = CITIES[city];
    const visaData = VISA_TYPES[visaType];

    return (
        <section className="relative bg-[#061A30] overflow-hidden font-body">
            <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "repeating-linear-gradient(135deg,rgba(3,131,201,0.04) 0,rgba(3,131,201,0.04) 1px,transparent 1px,transparent 60px)" }} />
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 100%,rgba(245,166,35,0.07),transparent 65%)" }} />

            <div className="relative max-w-7xl mx-auto px-5 lg:px-14 py-20 grid lg:grid-cols-2 gap-14 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 border border-[#F5A623]/25 bg-[#F5A623]/8 rounded-full px-3.5 py-1 mb-6">
                        <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full animate-pulse" />
                        <span className="text-[#FBC860] text-[10px] font-bold tracking-widest uppercase">Book a free slot today</span>
                    </div>
                    <h2 className="font-display text-white text-3xl md:text-4xl font-semibold leading-tight mb-4">
                        Ready for your<br />
                        <span className="text-[#F5A623]">{visaData.label}</span> from {city}?
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed mb-7 max-w-md">
                        Join over 75,000 Indians who trusted Global Visa Internationals with their visa journey. Our team in {city} is ready — no fee to consult.
                    </p>

                    <div className="grid grid-cols-2 gap-3 max-w-sm">
                        {[
                            { icon: FaPhone, label: "Call", value: cityData.phone, href: `tel:${cityData.phone}`, color: "#1A9612" },
                            { icon: FaWhatsapp, label: "WhatsApp", value: "Chat Now", href: `https://wa.me/${cityData.wa}`, color: "#25D366" },
                            { icon: FaEnvelope, label: "Email", value: "info@gvi.in", href: "mailto:info@globalvisainternationals.com", color: "#0383C9" },
                            { icon: FaMapMarkerAlt, label: "Office", value: "Brigade Road", href: "https://maps.google.com/?q=Global+Visa+Internationals", color: "#F5A623" },
                        ].map(({ icon: Icon, label, value, href, color }) => (
                            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                                className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/8 rounded-xl p-3 transition-colors group">
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}20` }}>
                                    <Icon style={{ color, fontSize: 12 }} />
                                </div>
                                <div>
                                    <div className="text-[9px] font-bold uppercase tracking-wider text-white/30">{label}</div>
                                    <div className="text-xs font-semibold text-white/75">{value}</div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-7">
                        <p className="text-white/25 text-[9px] uppercase tracking-[.18em] mb-2.5 font-bold">We serve all cities</p>
                        <div className="flex flex-wrap gap-2">
                            {Object.keys(CITIES).map(c => (
                                <span key={c} className="text-[10px] font-semibold text-white/45 bg-white/5 border border-white/8 rounded-full px-2.5 py-1">{c}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                        <div className="bg-gradient-to-br from-[#030E1C] via-[#0D2E52] to-[#15427A] px-6 py-5">
                            <h3 className="font-display text-white text-lg font-semibold mb-0.5">
                                Free Visa Assessment — {city}
                            </h3>
                            <p className="text-white/50 text-xs">Personalised response within 24 hours. No fees to consult.</p>
                        </div>
                        <div className="px-6 py-5">
                            <VisaConsultationForm
                                defaultCountry={city}
                                defaultVisaType={visaData.label}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/8 px-5 lg:px-14 py-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <img src="https://www.globalvisainternationals.com/Global-Visa-Internationals-Logo.svg"
                        alt="Global Visa Internationals" className="h-7 brightness-200 opacity-60" />
                    <span className="text-white/25 text-xs">© 2025 Global Visa Internationals. All rights reserved.</span>
                </div>
                <div className="flex gap-5 text-[11px] text-white/30">
                    <a href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
                    <a href="/terms-and-conditions" className="hover:text-white/60 transition-colors">Terms</a>
                    <a href="/sitemap.xml" className="hover:text-white/60 transition-colors">Sitemap</a>
                </div>
            </div>
        </section>
    );
}

// --------------------------------------------------------------
// MAIN PAGE EXPORT
// --------------------------------------------------------------
export default function AdsLandingPage() {
    const [city, setCity] = useState("Bangalore");
    const [visaType, setVisaType] = useState("Tourist");

    useEffect(() => {
        if (typeof window === "undefined") return;
        const params = new URLSearchParams(window.location.search);
        const qCity = params.get("city");
        const qVisa = params.get("visa");
        const utm = params.get("utm_content");

        if (qCity && CITIES[qCity]) setCity(qCity);
        else if (utm) {
            const match = Object.keys(CITIES).find(c => utm.toLowerCase().includes(c.toLowerCase()));
            if (match) setCity(match);
        }

        if (qVisa && VISA_TYPES[qVisa]) setVisaType(qVisa);
        else if (utm) {
            if (utm.toLowerCase().includes("business")) setVisaType("Business");
            else if (utm.toLowerCase().includes("dependent")) setVisaType("Dependent");
        }
    }, []);

    return (
        <main className="font-body">
            <HeroSection city={city} setCity={setCity} visaType={visaType} setVisaType={setVisaType} />
            <TrustBar city={city} />
            <ProcessSection />
            <WhySection visaType={visaType} />
            <TestimonialsSection city={city} />
            <FAQSection />
            <BottomCTA city={city} visaType={visaType} />
        </main>
    );
}