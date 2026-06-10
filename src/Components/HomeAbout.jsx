'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';
import {
  FaCheckCircle, FaStar, FaArrowRight, FaPlayCircle,
  FaChevronLeft, FaChevronRight, FaPhone, FaWhatsapp,
  FaEnvelope, FaMapMarkerAlt, FaPassport, FaGlobe,
  FaShieldAlt, FaHandshake, FaClock, FaAward,
  FaQuoteLeft, FaAngleRight, FaTimes,
} from 'react-icons/fa';
import ReviewCarousel from './ReviewCarousel';
import VisaForm from './VisaForm';

// ─── GALLERY CAROUSEL ─────────────────────────────────────────────────────────
const GalleryCarousel = ({ slides = [], autoSlide = true, interval = 4000 }) => {
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);

  const advance = useCallback((dir) => {
    clearInterval(timerRef.current);
    setCur(p => (p + dir + slides.length) % slides.length);
    if (autoSlide) {
      timerRef.current = setInterval(() => setCur(p => (p + 1) % slides.length), interval);
    }
  }, [slides.length, autoSlide, interval]);

  useEffect(() => {
    if (!autoSlide || !slides.length) return;
    timerRef.current = setInterval(() => setCur(p => (p + 1) % slides.length), interval);
    return () => clearInterval(timerRef.current);
  }, [autoSlide, slides.length, interval]);

  if (!slides.length) return null;

  const prev = (cur - 1 + slides.length) % slides.length;
  const next = (cur + 1) % slides.length;

  return (
    <div className="relative select-none">
      <div className="flex items-center justify-center gap-4 h-[320px] md:h-[420px] overflow-hidden px-4">
        {/* Prev */}
        <div className="hidden md:block flex-shrink-0 w-[260px] h-[200px] opacity-40 scale-90 origin-right transition-all duration-500 rounded-xl overflow-hidden cursor-pointer"
          onClick={() => advance(-1)}>
          <img src={slides[prev]} alt="" className="w-full h-full object-cover" />
        </div>
        {/* Active */}
        <div className="flex-shrink-0 w-full max-w-[480px] md:max-w-[580px] h-[280px] md:h-[380px] transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl shadow-navy/20 ring-1 ring-white/20">
          <img src={slides[cur]} alt={`Gallery ${cur + 1}`} className="w-full h-full object-cover" loading="lazy" />
        </div>
        {/* Next */}
        <div className="hidden md:block flex-shrink-0 w-[260px] h-[200px] opacity-40 scale-90 origin-left transition-all duration-500 rounded-xl overflow-hidden cursor-pointer"
          onClick={() => advance(1)}>
          <img src={slides[next]} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button onClick={() => advance(-1)} aria-label="Previous"
          className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#0383C9] text-slate-400 hover:text-[#0383C9] flex items-center justify-center transition-colors">
          <FaChevronLeft className="text-sm" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => { clearInterval(timerRef.current); setCur(i); }}
              className={`rounded-full transition-all duration-300 ${i === cur ? 'w-6 h-2 bg-[#0383C9]' : 'w-2 h-2 bg-slate-200 hover:bg-slate-300'}`}
              aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
        <button onClick={() => advance(1)} aria-label="Next"
          className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#0383C9] text-slate-400 hover:text-[#0383C9] flex items-center justify-center transition-colors">
          <FaChevronRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

// ─── INLINE FAQ ───────────────────────────────────────────────────────────────
const InlineFAQ = ({ faqs = [] }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-2">
      {faqs.map(({ question, answer }, i) => (
        <div key={i} className="border border-slate-100 rounded-xl overflow-hidden">
          <button onClick={() => setOpen(open === i ? -1 : i)}
            className={`w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors text-sm font-semibold font-body
              ${open === i ? 'bg-[#0383C9]/5 text-[#0383C9]' : 'bg-white text-[#0B1E33] hover:bg-slate-50'}`}>
            <span>{question}</span>
            <FaChevronRight className={`text-xs flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-90' : ''}`} />
          </button>
          {open === i && (
            <div className="px-5 py-4 bg-white border-t border-slate-100">
              <p className="text-slate-600 text-sm leading-relaxed font-body">{answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

// ─── SERVICE CARD DATA ────────────────────────────────────────────────────────
const VISA_SERVICES = [
  { name: 'Tourist Visa', img: '/svg/Tourist-Visa.webp', desc: 'Seamless tourist & visitor visa assistance worldwide.', links: [['Canada', '/Visa/tourist-visa/canada'], ['Australia', '/Visa/tourist-visa/australia'], ['USA', '/Visa/tourist-visa/usa'], ['UK', '/Visa/tourist-visa/united-kingdom'], ['Europe', '/Visa/tourist-visa/europe'], ['Japan', '/Visa/tourist-visa/japan'], ['Dubai', '/Visa/tourist-visa/dubai'], ['Singapore', '/Visa/tourist-visa/singapore']] },
  { name: 'Business Visa', img: '/svg/business-visa.webp', desc: 'Professional support for global business travel.', links: [['Canada', '/Visa/business-visa/canada'], ['Australia', '/Visa/business-visa/australia'], ['UK', '/Visa/business-visa/uk'], ['Europe', '/Visa/business-visa/europe'], ['New Zealand', '/Visa/business-visa/new-zealand']] },
  { name: 'PR Visa', img: '/svg/PR-Visa.webp', desc: 'Expert permanent residency pathways for Canada & Australia.', links: [['Canada', '/Visa/permanent-residency-visa/canada-pr-visa'], ['Australia', '/Visa/permanent-residency-visa/australia-pr-visa']] },
  { name: 'Student Visa', img: '/svg/student-visa.webp', desc: 'Study abroad made simple — from application to approval.', links: [['Canada', '/Visa/student-visa/canada'], ['Australia', '/Visa/student-visa/australia'], ['USA', '/Visa/student-visa/usa'], ['UK', '/Visa/student-visa/uk'], ['Europe', '/Visa/student-visa/europe'], ['New Zealand', '/Visa/student-visa/new-zealand']] },
  { name: 'Dependent Visa', img: '/svg/Dependent Visa.webp', desc: 'Reunite your family across international borders.', links: [['Canada', '/Visa/Dependent/canada'], ['Australia', '/Visa/Dependent/australia'], ['UK', '/Visa/Dependent/uk'], ['Europe', '/Visa/Dependent/europe'], ['New Zealand', '/Visa/Dependent/new-zealand']] },
  { name: 'Refusal Visa', img: '/svg/refusal visa.webp', desc: 'Overcome past refusals with our reapplication strategy.', links: [['Canada', '/Visa/refusal-visa/canada'], ['Australia', '/Visa/refusal-visa/australia'], ['USA', '/Visa/refusal-visa/usa'], ['UK', '/Visa/refusal-visa/uk'], ['Europe', '/Visa/refusal-visa/europe'], ['Japan', '/Visa/refusal-visa/japan'], ['Dubai', '/Visa/refusal-visa/dubai'], ['Singapore', '/Visa/refusal-visa/singapore']] },
];
const ServiceCard = ({ s }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="w-full max-w-[280px] mx-auto h-[400px] cursor-pointer" style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
      <div className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
        {/* Front */}
        <div className="absolute inset-0 bg-white rounded-2xl border border-slate-100 shadow-md flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility: 'hidden' }}>
          <div className="w-24 h-24 rounded-2xl bg-[#0383C9]/8 flex items-center justify-center mb-5">
            <img src={s.img} alt={s.name} className="w-14 h-14 object-contain" />
          </div>
          <h3 className="font-display text-[#0B1E33] text-xl font-semibold mb-3">{s.name}</h3>
          <p className="text-slate-500 text-sm leading-relaxed font-body px-2">{s.desc}</p>
          <div className="mt-5 text-[11px] font-bold uppercase tracking-widest text-[#0383C9] font-body">Hover to explore</div>
        </div>
        {/* Back (unchanged) */}
        <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-5 overflow-y-auto"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'linear-gradient(135deg,#0B1E33,#0383C9)' }}>
          <h3 className="font-display text-white text-base font-semibold mb-4">{s.name}</h3>
          <div className="w-full space-y-1.5">
            {s.links.map(([label, href]) => (
              <a key={label} href={href}
                className="flex items-center justify-between bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors font-body">
                {label} <FaAngleRight className="text-[10px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── PAGE DATA ────────────────────────────────────────────────────────────────
const MVV_CARDS = [
  { title: 'Our Mission', img: '/gviVMV/mission-icon.png', accent: '#0383C9', text: 'To provide clear, ethical visa and immigration guidance — helping students, professionals and families navigate international processes with accuracy and confidence.' },
  { title: 'Our Vision', img: '/gviVMV/vision-icon.png', accent: '#1A9612', text: 'To be a globally recognised consultancy known for transparent processes, regulatory compliance, and consistent client support across every visa category.' },
  { title: 'Our Values', img: '/gviVMV/values-icon.png', accent: '#0261A1', text: 'Transparency, accountability, empathy and a client-first culture guide every interaction — grounded in ethical advisory and deep respect for immigration regulations.' },
];

const FAQS = [
  { question: 'My visa was refused. Can I reapply?', answer: 'Yes — address the specific refusal reasons with corrected documentation and a stronger application. Our specialists review your case at no cost.' },
  { question: 'How do I qualify for the Canada PR Visa?', answer: 'You need an eligible occupation under NOC 0, A or B. We assess your CRS score, Express Entry profile, and provincial nominee options to find the best pathway.' },
  { question: 'Can my spouse work on a dependent visa?', answer: 'It varies by country. Many nations grant open work rights automatically; others require a separate permit. We advise based on your specific destination.' },
  { question: 'Can I work on a student visa?', answer: 'In most countries, yes — up to 20 hours per week during term and full-time during official semester breaks.' },
  { question: 'How long is the Portugal Job Seeker Visa valid?', answer: 'Initially valid for 120 days, extendable by an additional 60 days if you have not yet secured employment.' },
  { question: 'Who is eligible for an Austrian job seeker visa?', answer: 'Non-EU citizens with a recognised higher education degree from Austria or an accredited foreign institution, plus sufficient financial means.' },
];

const GALLERY_SLIDES = [
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop',
  '/gallery/1.jpg', '/gallery/2.jpg', '/gallery/3.jpg', './gallery/4.jpg',
  '/gallery/5.jpg', '/gallery/6.jpg', '/gallery/7.jpg',
];

// ═════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═════════════════════════════════════════════════════════════════════════════
export default function HomeAbout() {
  const ticker = ['USA Visa 🇺🇸', 'Canada Visa 🇨🇦', 'UK Visa 🇬🇧', 'Australia Visa 🇦🇺', 'Germany Visa 🇩🇪', 'France Visa 🇫🇷', 'Italy Visa 🇮🇹', 'Spain Visa 🇪🇸', 'Singapore Visa 🇸🇬', 'Dubai Visa 🇦🇪', 'New Zealand Visa 🇳🇿', 'Japan Visa 🇯🇵'];

  return (
    <>
      {/* ── GLOBAL CSS ─────────────────────────────────────────────────────── */}
      <style jsx global>{`
        @keyframes gviFloat  { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-14px)} }
        @keyframes gviTicker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .gvi-float-a { animation: gviFloat 5s ease-in-out infinite; }
        .gvi-float-b { animation: gviFloat 6.5s ease-in-out 0.8s infinite; }
        .gvi-float-c { animation: gviFloat 5.8s ease-in-out 1.6s infinite; }
        .gvi-float-d { animation: gviFloat 7s   ease-in-out 0.4s infinite; }
        .gvi-float-e { animation: gviFloat 6s   ease-in-out 2s   infinite; }
        .gvi-ticker  { animation: gviTicker 32s linear infinite; }
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
        .gvi-section-pad { padding-top: 5rem; padding-bottom: 5rem; }
        @media (min-width:768px) { .gvi-section-pad { padding-top: 7rem; padding-bottom: 7rem; } }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════════
          § 1  HERO — ink navy, form right, editorial headline left
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B1E33] overflow-hidden font-body" style={{ minHeight: '100vh' }}>

        {/* Fine grid overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(3,131,201,0.055) 1px,transparent 1px),linear-gradient(90deg,rgba(3,131,201,0.055) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

        {/* Glow blooms */}
        <div className="absolute top-[-15%] right-[-8%] w-[640px] h-[640px] rounded-full pointer-events-none opacity-60"
          style={{ background: 'radial-gradient(circle,rgba(3,131,201,0.14),transparent 65%)' }} />
        <div className="absolute bottom-0 left-[-5%] w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(26,150,18,0.07),transparent 65%)' }} />

        {/* Vertical rule */}
        <div className="absolute top-0 bottom-0 right-[33%] w-px pointer-events-none hidden lg:block"
          style={{ background: 'linear-gradient(to bottom,transparent,rgba(3,131,201,0.18) 20%,rgba(3,131,201,0.18) 80%,transparent)' }} />

        {/* Floating flags */}
        {[['🇺🇸', 'gvi-float-a', 'top-[18%]', 'left-[5%]'], ['🇨🇦', 'gvi-float-b', 'top-[24%]', 'right-[5%]'], ['🇬🇧', 'gvi-float-c', 'top-[65%]', 'left-[4%]'], ['🇦🇺', 'gvi-float-d', 'top-[58%]', 'right-[4%]'], ['🇪🇺', 'gvi-float-e', 'top-[78%]', 'right-[15%]']].map(([flag, cls, top, side]) => (
          <div key={flag} className={`absolute text-3xl pointer-events-none select-none ${cls} ${top} ${side}`}
            style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.4))' }}>{flag}</div>
        ))}

        {/* Topbar */}
        <div className="relative z-10 flex items-center justify-between px-6 lg:px-16 pt-5 pb-4 border-b border-white/6">
          <img src="https://www.globalvisainternationals.com/Global-Visa-Internationals-Logo.svg"
            alt="Global Visa Internationals" className="h-9 brightness-200" />
          <div className="hidden md:flex items-center gap-2 bg-[#1A9612]/15 border border-[#1A9612]/25 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A9612] animate-pulse" />
            <span className="text-[#4ADE80] text-[10px] font-bold tracking-widest uppercase">Consultations Open</span>
          </div>
          <a href="tel:+919876543210"
            className="flex items-center gap-2 bg-[#0383C9] hover:bg-[#0261A1] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors">
            <FaPhone className="text-[10px]" /> Call Now
          </a>
        </div>

        {/* Hero grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-14 lg:py-20 grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-start">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#0383C9]/35 bg-[#0383C9]/10 rounded-full px-4 py-1.5 mb-7">
              <FaStar className="text-amber-400 text-[10px]" />
              <span className="text-[#3AABDF] text-[10px] font-bold tracking-widest uppercase">Trusted Visa Experts Since 2016 · Bangalore</span>
            </div>

            <h1 className="font-display text-white leading-[1.1] mb-5">
              <span className="block text-4xl md:text-5xl xl:text-[3.4rem] font-semibold">Your Global Journey</span>
              <span className="block text-4xl md:text-5xl xl:text-[3.4rem] font-semibold italic"
                style={{ WebkitTextStroke: '1.5px rgba(3,131,201,0.75)', color: 'transparent' }}>
                Starts Here.
              </span>
            </h1>

            <h2 className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-lg mb-3 font-body">
              Premier visa consultancy in Bangalore for{' '}
              {['USA', 'UK', 'Canada', 'Schengen', 'Australia', 'New Zealand', 'Japan'].map((c, i, a) => (
                <span key={c}><span className="text-white font-semibold">{c}</span>{i < a.length - 1 ? (i === a.length - 2 ? ' & ' : ', ') : ''}</span>
              ))} visas.
            </h2>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-md mb-9 font-body">
              11+ years of expertise. 75,000+ clients successfully guided through complex immigration processes by MARA & ICCRC certified consultants.
            </p>

            {/* Stats strip */}
            <div className="flex gap-px bg-white/6 border border-white/8 rounded-2xl overflow-hidden w-fit mb-9">
              {[['11+', 'Years'], ['75K+', 'Visas'], ['98%', 'Success'], ['45+', 'Countries']].map(([val, lbl], i) => (
                <div key={lbl} className={`px-6 py-4 text-center ${i > 0 ? 'border-l border-white/8' : ''}`}>
                  <div className="font-display text-white text-2xl font-semibold leading-none">{val}</div>
                  <div className="text-white/40 text-[10px] mt-1 tracking-wide font-body uppercase">{lbl}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#consultation"
                className="inline-flex items-center gap-2 bg-[#0383C9] hover:bg-[#0261A1] text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-[#0383C9]/30 hover:-translate-y-px font-body">
                Free Consultation <FaArrowRight className="text-xs" />
              </a>
              <a href="#testimonials"
                className="inline-flex items-center gap-2.5 bg-white/8 border border-white/18 hover:bg-white/14 text-white font-medium text-sm px-7 py-3.5 rounded-xl transition-colors font-body">
                <div className="w-6 h-6 bg-white/15 rounded-full flex items-center justify-center">
                  <FaPlayCircle className="text-[10px]" />
                </div>
                Success Stories
              </a>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-4 text-xs text-white/45 font-body">
              {['MARA & ICCRC Licensed', 'Transparent Pricing', 'Personalised Case Handling', 'Interview Coaching', '24/7 Support'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-[#1A9612] text-[10px]" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="w-full lg:sticky lg:top-6">
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/35 overflow-hidden">
              <div className="bg-gradient-to-br from-[#0B1E33] via-[#0D2E52] to-[#0383C9] px-7 py-6 relative">
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 80% 40%,white,transparent 60%)' }} />
                <img src="https://www.globalvisainternationals.com/Global-Visa-Internationals-Logo.svg"
                  alt="GVI" className="h-8 mb-4 brightness-200 relative" />
                {/* <h2 className="font-display text-white text-xl font-semibold mb-1 relative">Free Visa Assessment</h2> */}
                <p className="text-white/65 text-xs font-body relative">Personalised consultation within 24 hours</p>
                <div className="inline-flex items-center gap-1.5 mt-3 bg-amber-400/15 border border-amber-400/25 rounded-full px-3 py-1 relative">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  <span className="text-amber-300 text-[9px] font-bold tracking-wide uppercase font-body">Limited slots available</span>
                </div>
              </div>
              <div className="px-7 py-6">
                <VisaForm />
              </div>
            </div>

            {/* WhatsApp */}
            <a href="https://wa.me/919876543210?text=Hi%20GVI%2C%20I%20need%20visa%20assistance"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 w-full py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-[#25D366]/20 font-body">
              <FaWhatsapp className="text-base" /> WhatsApp Us Instantly
            </a>
          </div>
        </div>

        {/* Ticker */}
        <div className="relative z-10 bg-[#061424] border-t border-white/8 py-3 overflow-hidden">
          <div className="gvi-ticker flex gap-10 whitespace-nowrap">
            {[...ticker, ...ticker].map((c, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 text-white/45 text-xs font-semibold font-body">
                <span className="w-1 h-1 bg-[#0383C9] rounded-full" />{c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 2  TRUST BAR
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F4F7FB] border-b border-slate-200 font-body">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            [FaShieldAlt, 'MARA & ICCRC Certified'],
            [FaAward, '98% Visa Approval Rate'],
            [FaClock, 'Fast-Track Processing'],
            [FaHandshake, 'Zero Hidden Fees'],
            [FaGlobe, '45+ Countries Covered'],
            [FaPassport, 'Refusal Recovery Experts'],
          ].map(([Icon, text]) => (
            <div key={text} className="flex items-center gap-2 text-[#0B1E33] text-[11px] font-semibold">
              <Icon className="text-[#0383C9] text-sm" /> {text}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 3  ABOUT — editorial two-column with timeline signature
      ════════════════════════════════════════════════════════════════════ */}
      <section id="about" className="gvi-section-pad bg-white font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — image + floating cards */}
            <Reveal>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-xl shadow-[#0B1E33]/10">
                  <img src="https://www.globalvisainternationals.com/images/story.webp"
                    alt="GVI team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E33]/55 to-transparent" />
                </div>

                {/* Floating stat cards */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
                  <div className="font-display text-[#0B1E33] text-2xl font-bold">75,000+</div>
                  <div className="text-xs text-slate-500 mt-0.5 font-body">Visas Approved</div>
                  <div className="flex mt-2 gap-0.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-amber-400 text-[10px]" />)}
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 bg-[#0B1E33] rounded-xl shadow-lg px-4 py-3">
                  <div className="font-display text-white text-xl font-bold">98%</div>
                  <div className="text-[10px] text-white/60 font-body">Success Rate</div>
                </div>
              </div>
            </Reveal>

            {/* Right — copy + timeline */}
            <Reveal delay={120}>
              <div>
                <span className="inline-block text-[#0383C9] text-[10px] font-black uppercase tracking-[.18em] bg-[#0383C9]/8 px-4 py-1.5 rounded-full mb-5 font-body">
                  About Us
                </span>
                <h2 className="font-display text-[#0B1E33] text-3xl md:text-4xl font-semibold leading-tight mb-5">
                  Bangalore's Trusted<br />Visa Consultancy<br />
                  <em className="not-italic text-[#0383C9]">Since 2016</em>
                </h2>
                <div className="w-10 h-0.5 bg-[#0383C9] rounded mb-6" />
                <p className="text-slate-600 text-base leading-relaxed mb-4 font-body">
                  Global Visa Internationals was founded on Brigade Road, Bangalore, with a single purpose: making international visa applications straightforward, transparent, and successful for every client.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-body">
                  From first-time travellers to international students and senior executives, our MARA & ICCRC certified consultants deliver end-to-end support — document review, embassy filing, interview coaching, and post-visa guidance — with complete pricing transparency.
                </p>

                {/* Archival timeline — signature element */}
                <div className="relative pl-8 space-y-6 mb-8">
                  {/* Continuous left border */}
                  <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0383C9] via-[#0383C9]/50 to-transparent" />
                  {[
                    ['2016', 'Founded on Brigade Road, Bangalore'],
                    ['2018', 'Reached 10,000 successful visa approvals'],
                    ['2021', 'Expanded to 20+ specialist visa categories'],
                    ['2024', '75,000+ visa success stories and counting'],
                  ].map(([yr, txt]) => (
                    <div key={yr} className="flex items-start gap-4 relative">
                      <div className="absolute -left-8 top-0.5 w-[22px] h-[22px] rounded-full border-2 border-[#0383C9] bg-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0383C9]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-[#0383C9] uppercase tracking-widest font-body mb-0.5">{yr}</div>
                        <div className="text-sm text-slate-600 font-body">{txt}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="#consultation"
                    className="inline-flex items-center gap-2 bg-[#0383C9] hover:bg-[#0261A1] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#0383C9]/25 hover:-translate-y-px font-body">
                    Book Free Consultation <FaArrowRight className="text-xs" />
                  </a>
                  <a href="#testimonials"
                    className="inline-flex items-center gap-2 border border-[#0383C9]/30 text-[#0383C9] hover:bg-[#0383C9]/5 font-semibold text-sm px-6 py-3 rounded-xl transition-colors font-body">
                    View Success Stories
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 4  STATS DARK BAND
      ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0B1E33] py-16 overflow-hidden relative font-body">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(3,131,201,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(3,131,201,0.05) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ['👥', '30+ Yrs', 'Combined professional expertise'],
            ['🌎', '45+', 'Countries served'],
            ['📋', '20+', 'Visa categories covered'],
            ['✈️', '75,000+', 'Successful approvals'],
            ['📅', 'Since 2016', 'Trusted across India'],
          ].map(([icon, val, desc]) => (
            <div key={val} className="text-center bg-white/5 border border-white/8 rounded-2xl py-6 px-4 hover:bg-white/8 transition-colors">
              <div className="text-3xl mb-3">{icon}</div>
              <div className="font-display text-white text-xl font-bold mb-1">{val}</div>
              <div className="text-white/45 text-[10px] leading-snug font-body">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 5  WHY GVI
      ════════════════════════════════════════════════════════════════════ */}
      <section className="gvi-section-pad bg-[#F4F7FB] font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block text-[#0383C9] text-[10px] font-black uppercase tracking-[.18em] bg-[#0383C9]/8 px-4 py-1.5 rounded-full mb-5 font-body">
              Why Choose Us
            </span>
            <h2 className="font-display text-[#0B1E33] text-3xl md:text-4xl font-semibold mb-3">
              Why 75,000+ Indians Choose GVI
            </h2>
            <div className="w-10 h-0.5 bg-[#0383C9] mx-auto rounded mb-5" />
            <p className="text-slate-500 text-base max-w-xl mx-auto font-body">
              Local Bangalore expertise combined with global immigration intelligence — for students, professionals and families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Complete services card */}
            <Reveal>
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-[#0383C9]/6 transition-all h-full">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-[#0383C9] flex items-center justify-center flex-shrink-0">
                    <FaPassport className="text-white text-base" />
                  </div>
                  <h3 className="font-display text-[#0B1E33] text-xl font-semibold">Complete Visa Services Under One Roof</h3>
                </div>
                <ul className="space-y-3">
                  {['Student Visa Documentation & University Application Support', 'Tourist & Visitor Visa Processing for Indians', 'Business Visa Assistance for International Travel', 'Permanent Residency Guidance — Canada, Australia, UK', 'Family & Dependent Visa Applications', 'Visa Refusal Review & Reapplication Strategy', 'Profile Evaluation & Country Eligibility Check'].map((txt) => (
                    <li key={txt} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#1A9612]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheckCircle className="text-[#1A9612] text-[9px]" />
                      </div>
                      <span className="text-slate-600 text-sm font-body">{txt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Destinations card */}
            <Reveal delay={100}>
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-[#0383C9]/6 transition-all h-full">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <FaGlobe className="text-white text-base" />
                  </div>
                  <h3 className="font-display text-[#0B1E33] text-xl font-semibold">Top Visa Destinations We Specialise In</h3>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[['🇨🇦', 'Canada', 'Tourist, Student, PR'], ['🇦🇺', 'Australia', 'Visitor, PR, Work'], ['🇬🇧', 'United Kingdom', 'Student, Tourist'], ['🇺🇸', 'USA', 'B1/B2 Visitor'], ['🇪🇺', 'Europe', 'Schengen Visa'], ['🇯🇵', 'Japan', 'Tourist, Short-Term'], ['🇨🇳', 'China', 'Business, Visitor'], ['🇸🇬', 'Singapore', 'Short-Term Pass']].map(([flag, name, svc]) => (
                    <div key={name} className="flex items-center gap-2.5 p-2.5 bg-[#F4F7FB] rounded-xl border border-slate-100">
                      <span className="text-xl">{flag}</span>
                      <div>
                        <div className="text-[#0B1E33] font-bold text-xs font-body">{name}</div>
                        <div className="text-slate-400 text-[10px] font-body">{svc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-slate-500 font-body flex items-center gap-2">
                  <FaGlobe className="text-[#0383C9] text-xs" />
                  Global visa assistance for 45+ countries worldwide
                </div>
              </div>
            </Reveal>
          </div>

          {/* Certification badge */}
          <div className="mt-8 flex items-center justify-center gap-4 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#0383C9] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">🏆</span>
            </div>
            <p className="text-slate-700 text-sm font-body">
              <strong className="font-semibold text-[#0B1E33]">Certified Immigration Consultancy</strong> — Awarded for Excellence in Visa Processing
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 6  SERVICES — horizontal scroll cards
      ════════════════════════════════════════════════════════════════════ */}
      <section className="gvi-section-pad bg-white font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0383C9] text-[10px] font-black uppercase tracking-[.18em] bg-[#0383C9]/8 px-4 py-1.5 rounded-full mb-5 font-body">Our Services</span>
            <h2 className="font-display text-[#0B1E33] text-3xl md:text-4xl font-semibold mb-3">
              Visa Solutions for Every Journey
            </h2>
            <div className="w-10 h-0.5 bg-[#0383C9] mx-auto rounded mb-5" />
            <p className="text-slate-500 text-base max-w-xl mx-auto font-body">
              Hover any card to explore destination options. Certified support for every visa category.
            </p>
          </div>

          {/* Grid: 1 column on mobile → 2 columns on small tablets → 3 columns on desktop (2 rows for 6 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {VISA_SERVICES.map(s => <ServiceCard key={s.name} s={s} />)}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 7  GALLERY
      ════════════════════════════════════════════════════════════════════ */}
      <section className="gvi-section-pad bg-[#F4F7FB] font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0383C9] text-[10px] font-black uppercase tracking-[.18em] bg-[#0383C9]/8 px-4 py-1.5 rounded-full mb-5 font-body">Gallery</span>
            <h2 className="font-display text-[#0B1E33] text-3xl md:text-4xl font-semibold">
              Our Success Gallery
            </h2>
          </div>
          <GalleryCarousel slides={GALLERY_SLIDES} autoSlide={true} interval={4000} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 8  MISSION / VISION / VALUES
      ════════════════════════════════════════════════════════════════════ */}
      <section className="gvi-section-pad bg-white font-body">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block text-[#0B1E33]/60 text-[10px] font-black uppercase tracking-[.18em] bg-[#0B1E33]/6 px-4 py-1.5 rounded-full mb-5 font-body">Our Foundation</span>
            <h2 className="font-display text-[#0B1E33] text-3xl md:text-4xl font-semibold">
              Mission, Vision & Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {MVV_CARDS.map(({ title, img, accent, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-[#0B1E33]/6 transition-all duration-300 text-center group h-full"
                  style={{ borderTop: `3px solid ${accent}` }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: `${accent}12` }}>
                    <img src={img} alt={title} className="w-9 h-9 object-contain" />
                  </div>
                  <h3 className="font-display text-base font-semibold mb-3" style={{ color: accent }}>{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-body">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 9  TESTIMONIALS
      ════════════════════════════════════════════════════════════════════ */}
      <section id="testimonials" className="gvi-section-pad bg-[#F4F7FB] font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0383C9] text-[10px] font-black uppercase tracking-[.18em] bg-[#0383C9]/8 px-4 py-1.5 rounded-full mb-5 font-body">Testimonials</span>
            <h2 className="font-display text-[#0B1E33] text-3xl md:text-4xl font-semibold mb-3">
              What Our Clients Say
            </h2>
            <div className="w-10 h-0.5 bg-[#0383C9] mx-auto rounded" />
          </div>
          <ReviewCarousel />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 10  FAQ + MAP
      ════════════════════════════════════════════════════════════════════ */}
      <section id="consultation" className="gvi-section-pad bg-white font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block text-[#0383C9] text-[10px] font-black uppercase tracking-[.18em] bg-[#0383C9]/8 px-4 py-1.5 rounded-full mb-5 font-body">Find Us</span>
            <h2 className="font-display text-[#0B1E33] text-3xl md:text-4xl font-semibold mb-3">
              Frequently Asked Questions
            </h2>
            <div className="w-10 h-0.5 bg-[#0383C9] mx-auto rounded" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* FAQ */}
            <Reveal>
              <InlineFAQ faqs={FAQS} />

              {/* Contact chips */}
              {[
                [FaPhone, 'Call', '+91 80 4567 8900', 'tel:+917022213466', '#1A9612'],
                [FaWhatsapp, 'WhatsApp', 'Chat Now', 'https://wa.me/9197022213466', '#25D366'],
                [FaEnvelope, 'Email', 'info@gvi.in', 'mailto:operations@globalvisainternationals.com', '#0383C9'],
                [FaMapMarkerAlt, 'Office', 'Brigade Road, BLR', 'https://maps.google.com/?q=Global+Visa+Internationals', '#DC2626'],
              ].map(([Icon, label, value, href, color]) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-[#F4F7FB] hover:bg-white border border-slate-100 hover:border-[#0383C9]/25 hover:shadow-sm rounded-xl p-3 transition-all group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15` }}>
                    <Icon style={{ color: color, fontSize: 13 }} />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-body">{label}</div>
                    <div className="text-xs font-semibold text-[#0B1E33] font-body">{value}</div>
                  </div>
                </a>
              ))}
            </Reveal>

            {/* Map */}
            <Reveal delay={100}>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg shadow-[#0B1E33]/6 h-[520px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/place/Global+Visa+Internationals/@12.967628,77.6035827,17z/data=!3m2!4b1!5s0x3bae15d560e44cf1:0x424b9edd4fd37af5!4m6!3m5!1s0x3bae15d5613d9a4b:0xea0b2fbdf4f08876!8m2!3d12.967628!4d77.6061576!16s%2Fg%2F11c0vm9rhs?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Global Visa Internationals Office — Brigade Road, Bangalore"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 11  FINAL CTA BAND
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B1E33] py-20 overflow-hidden font-body">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%,rgba(245,166,35,0.06),transparent 65%)' }} />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-[#1A9612] rounded-full animate-pulse" />
            <span className="text-white/55 text-[10px] font-bold tracking-widest uppercase">Join 75,000+ successful applicants</span>
          </div>
          <h2 className="font-display text-white text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Ready to Open Doors<br />
            <em className="not-italic text-[#3AABDF]">Across the World?</em>
          </h2>
          <p className="text-white/50 text-sm mb-9 leading-relaxed font-body max-w-md mx-auto">
            Book your free consultation today and let Global Visa Internationals handle the complexity — you focus on the journey ahead.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#consultation"
              className="inline-flex items-center gap-2 bg-[#0383C9] hover:bg-[#0261A1] text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-[#0383C9]/30 hover:-translate-y-px font-body">
              Book Free Consultation <FaArrowRight className="text-xs" />
            </a>
            <a href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-white/8 border border-white/18 hover:bg-white/14 text-white font-medium text-sm px-8 py-3.5 rounded-xl transition-colors font-body">
              <FaPhone className="text-xs" /> Call Now
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}