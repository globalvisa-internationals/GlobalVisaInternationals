"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaGlobeAsia, FaGraduationCap, FaPlaneDeparture, FaPassport, FaBriefcase, FaUsers, FaWhatsapp, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import VisaForm from "./VisaForm";
import ReviewCarousel from "./ReviewCarousel";

const services = [
  { title: "Tourist Visa", desc: "Plan your next holiday with clear guidance on documents and application steps.", icon: FaPlaneDeparture, href: "/Visa/tourist-visa" },
  { title: "Student Visa", desc: "Get help understanding study visa requirements, timelines and paperwork.", icon: FaGraduationCap, href: "/Visa/student-visa" },
  { title: "Permanent Residency", desc: "Explore skilled migration and permanent residency pathways.", icon: FaGlobeAsia, href: "/Visa/permanent-residency-visa" },
  { title: "Business Visa", desc: "Prepare for business travel with an organised application checklist.", icon: FaBriefcase, href: "/Visa/business-visa" },
  { title: "Dependent Visa", desc: "Understand the documents and steps for joining family overseas.", icon: FaUsers, href: "/Visa/dependent-visa" },
  { title: "Visa Refusal Support", desc: "Review the refusal reasons and understand possible next steps.", icon: FaPassport, href: "/Visa/visa-refusal" },
];

const steps = [
  ["01", "Tell us your plans", "Share your destination, travel purpose and preferred timeline."],
  ["02", "Understand your checklist", "Get guidance on the documents and requirements relevant to your case."],
  ["03", "Prepare your application", "Organise your paperwork and review the application before submission."],
];

const faqs = [
  ["Which visa should I apply for?", "It depends on your destination, purpose of travel, eligibility and personal circumstances. Our team can help you understand the relevant options."],
  ["Can you guarantee visa approval?", "No. Visa decisions are made by the relevant embassy, consulate or immigration authority. We provide application guidance, not a guarantee of approval."],
  ["What documents do I need?", "Requirements vary by country and visa type. We help you identify the applicable checklist for your circumstances."],
];

export default function HomeAbout() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="gvi-v2">
      <style jsx global>{`
        .gvi-v2{--ink:#173b32;--green:#1e5b49;--mint:#e6f0e9;--cream:#fbf8f1;--orange:#d97745;--muted:#66756d;--line:#e5e5dc;color:var(--ink);font-family:inherit;background:#fff}
        .gvi-v2 *{box-sizing:border-box}
        .gvi-v2 a{color:inherit;text-decoration:none}
        .gvi-v2 .wrap{width:min(1180px,calc(100% - 40px));margin:0 auto}
        .gvi-v2 .eyebrow{display:inline-flex;align-items:center;gap:9px;text-transform:uppercase;letter-spacing:.13em;font-size:11px;font-weight:800;color:var(--green)}
        .gvi-v2 .eyebrow:before{content:"";width:24px;height:2px;background:var(--orange)}
        .gvi-v2 .hero{background:var(--cream);position:relative;overflow:hidden;padding:62px 0 54px}
        .gvi-v2 .hero:after{content:"";position:absolute;right:-150px;top:-190px;width:480px;height:480px;border:1px solid #e9e4d8;border-radius:50%;box-shadow:0 0 0 55px #f8f4eb,0 0 0 110px #faf6ee;pointer-events:none}
        .gvi-v2 .hero-grid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(350px,.82fr);gap:54px;align-items:center;position:relative;z-index:1}
        .gvi-v2 h1,.gvi-v2 h2,.gvi-v2 h3{margin:0;color:var(--ink)}
        .gvi-v2 h1{font-family:Georgia,'Times New Roman',serif;font-weight:500;letter-spacing:-.045em;font-size:clamp(42px,5vw,68px);line-height:1.04;margin:20px 0}
        .gvi-v2 h1 em{font-style:italic;color:var(--orange)}
        .gvi-v2 .hero-copy>p{font-size:17px;line-height:1.8;color:#53665d;max-width:570px;margin:0 0 25px}
        .gvi-v2 .actions{display:flex;gap:12px;flex-wrap:wrap}
        .gvi-v2 .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:5px;padding:14px 20px;font-weight:750;font-size:14px;transition:transform .2s,background .2s}
        .gvi-v2 .btn:hover{transform:translateY(-2px)}
        .gvi-v2 .btn-primary{background:var(--green);color:#fff!important}
        .gvi-v2 .btn-secondary{border:1px solid #cbd7ce;background:transparent;color:var(--ink)}
        .gvi-v2 .trustline{display:flex;gap:18px;flex-wrap:wrap;margin-top:27px;color:#586d62;font-size:12px;font-weight:700}
        .gvi-v2 .trustline span{display:flex;align-items:center;gap:7px}
        .gvi-v2 .trustline svg{color:var(--green)}
        .gvi-v2 .hero-right{position:relative;min-width:0}
        .gvi-v2 .hero-photo{height:390px;border-radius:180px 180px 8px 8px;overflow:hidden;background:linear-gradient(145deg,#dce9df,#f0d6bf);position:relative;box-shadow:0 22px 50px #244c3b18}
        .gvi-v2 .hero-photo img{width:100%;height:100%;object-fit:cover;object-position:center;display:block}
        .gvi-v2 .photo-fallback{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:35px;background:linear-gradient(150deg,#dce9df,#f4dfca);color:var(--green)}
        .gvi-v2 .photo-fallback svg{font-size:52px;margin-bottom:14px}
        .gvi-v2 .photo-fallback strong{font:500 28px Georgia,serif}
        .gvi-v2 .photo-fallback span{margin-top:8px;font-size:13px}
        .gvi-v2 .float-note{position:absolute;left:-28px;bottom:26px;background:#fff;border:1px solid #eee8dd;border-radius:8px;padding:16px 18px;box-shadow:0 14px 35px #173b3214;max-width:220px}
        .gvi-v2 .float-note b{display:block;font-family:Georgia,serif;font-size:21px;font-weight:500;margin-bottom:4px}
        .gvi-v2 .float-note span{font-size:12px;color:var(--muted);line-height:1.5;display:block}
        .gvi-v2 .form-panel{position:sticky;top:95px;background:#fff;border:1px solid var(--line);border-radius:8px;padding:22px;box-shadow:0 15px 45px #173b3210}
        .gvi-v2 .form-panel h2{font:500 25px Georgia,serif;margin-bottom:6px}
        .gvi-v2 .form-panel>p{color:var(--muted);font-size:13px;line-height:1.6;margin:0 0 14px}
        .gvi-v2 .form-panel form{margin:0}
        .gvi-v2 .form-panel input,.gvi-v2 .form-panel select,.gvi-v2 .form-panel textarea{max-width:100%}
        .gvi-v2 .form-panel button{max-width:100%}
        .gvi-v2 .proof{padding:19px 0;border-bottom:1px solid var(--line)}
        .gvi-v2 .proof-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
        .gvi-v2 .proof-item{display:flex;align-items:center;gap:12px;padding:8px 0}
        .gvi-v2 .proof-icon{width:42px;height:42px;display:grid;place-items:center;background:var(--mint);border-radius:50%;font-size:18px;color:var(--green);flex-shrink:0}
        .gvi-v2 .proof-item b{display:block;font-size:13px;margin-bottom:3px}
        .gvi-v2 .proof-item span{display:block;color:var(--muted);font-size:11px;line-height:1.4}
        .gvi-v2 .section{padding:82px 0}
        .gvi-v2 .section-head{max-width:670px;margin-bottom:34px}
        .gvi-v2 .section-head h2{font:500 clamp(32px,4vw,46px)/1.12 Georgia,'Times New Roman',serif;letter-spacing:-.03em;margin:14px 0}
        .gvi-v2 .section-head p{font-size:15px;line-height:1.8;color:var(--muted);margin:0}
        .gvi-v2 .services{background:#fff}
        .gvi-v2 .service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .gvi-v2 .service-card{border:1px solid var(--line);padding:26px;border-radius:7px;min-height:220px;transition:border-color .2s,transform .2s,box-shadow .2s}
        .gvi-v2 .service-card:hover{border-color:#a9c5b4;transform:translateY(-4px);box-shadow:0 14px 30px #173b320b}
        .gvi-v2 .service-icon{width:48px;height:48px;display:grid;place-items:center;background:var(--mint);color:var(--green);font-size:21px;border-radius:50%;margin-bottom:20px}
        .gvi-v2 .service-card h3{font:500 24px Georgia,serif;margin-bottom:9px}
        .gvi-v2 .service-card p{color:var(--muted);font-size:13px;line-height:1.75;margin:0 0 18px}
        .gvi-v2 .text-link{display:inline-flex;gap:9px;align-items:center;color:var(--green)!important;font-size:12px;font-weight:800}
        .gvi-v2 .about{background:var(--cream)}
        .gvi-v2 .about-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:center}
        .gvi-v2 .about-art{min-height:390px;position:relative;display:flex;align-items:center;justify-content:center;background:#e2ece4;border-radius:8px;overflow:hidden}
        .gvi-v2 .about-art:before,.gvi-v2 .about-art:after{content:"";position:absolute;border:1px solid #b7cbbd;border-radius:50%;width:280px;height:280px}
        .gvi-v2 .about-art:after{width:380px;height:380px}
        .gvi-v2 .about-art-inner{position:relative;z-index:1;text-align:center;padding:30px}
        .gvi-v2 .about-art-inner svg{font-size:52px;color:var(--green);margin-bottom:18px}
        .gvi-v2 .about-art-inner strong{display:block;font:500 35px/1.1 Georgia,serif;max-width:280px}
        .gvi-v2 .about-art-inner span{display:block;color:#62786b;font-size:12px;margin-top:12px}
        .gvi-v2 .about-copy h2{font:500 clamp(32px,4vw,46px)/1.12 Georgia,serif;letter-spacing:-.03em;margin:15px 0}
        .gvi-v2 .about-copy>p{color:var(--muted);font-size:14px;line-height:1.9}
        .gvi-v2 .check-list{list-style:none;padding:0;margin:22px 0;display:grid;gap:13px}
        .gvi-v2 .check-list li{display:flex;gap:10px;align-items:flex-start;font-size:13px;color:#42584d;line-height:1.6}
        .gvi-v2 .check-list svg{color:var(--green);flex-shrink:0;margin-top:2px}
        .gvi-v2 .process{background:#fff}
        .gvi-v2 .steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
        .gvi-v2 .step{border-top:1px solid #cbd8ce;padding-top:21px}
        .gvi-v2 .step-no{font:italic 30px Georgia,serif;color:var(--orange)}
        .gvi-v2 .step h3{font:500 24px Georgia,serif;margin:13px 0 9px}
        .gvi-v2 .step p{font-size:13px;line-height:1.8;color:var(--muted);margin:0}
        .gvi-v2 .reviews{background:var(--cream)}
        .gvi-v2 .reviews .section-head{text-align:center;margin-left:auto;margin-right:auto}
        .gvi-v2 .reviews .section-head .eyebrow{justify-content:center}
        .gvi-v2 .faq-grid{display:grid;grid-template-columns:.7fr 1.3fr;gap:65px}
        .gvi-v2 .faq-title h2{font:500 clamp(32px,4vw,46px)/1.12 Georgia,serif;letter-spacing:-.03em;margin:15px 0}
        .gvi-v2 .faq-title p{font-size:14px;line-height:1.8;color:var(--muted)}
        .gvi-v2 .faq-item{border-bottom:1px solid var(--line)}
        .gvi-v2 .faq-question{width:100%;display:flex;justify-content:space-between;align-items:center;gap:20px;text-align:left;background:none;border:0;padding:20px 0;color:var(--ink);font:500 18px Georgia,serif;cursor:pointer}
        .gvi-v2 .faq-question span:last-child{color:var(--orange);font:400 24px Arial}
        .gvi-v2 .faq-answer{color:var(--muted);font-size:13px;line-height:1.8;padding:0 25px 20px 0}
        .gvi-v2 .contact-band{background:var(--green);color:#fff;padding:45px 0}
        .gvi-v2 .contact-row{display:flex;justify-content:space-between;align-items:center;gap:30px}
        .gvi-v2 .contact-row h2{font:500 clamp(27px,3vw,38px) Georgia,serif;color:#fff;margin:0 0 8px}
        .gvi-v2 .contact-row p{color:#d9e8df;font-size:13px;margin:0;line-height:1.6}
        .gvi-v2 .contact-row .btn{background:#fff;color:var(--green)!important;white-space:nowrap}
        @media(max-width:900px){.gvi-v2 .hero-grid{grid-template-columns:1fr;gap:35px}.gvi-v2 .hero-right{display:grid;grid-template-columns:.8fr 1fr;gap:18px;align-items:center}.gvi-v2 .hero-photo{height:350px}.gvi-v2 .float-note{left:10px;bottom:15px}.gvi-v2 .proof-grid{grid-template-columns:repeat(2,1fr)}.gvi-v2 .about-grid{gap:35px}.gvi-v2 .faq-grid{gap:35px}}
        @media(max-width:650px){.gvi-v2 .wrap{width:min(100% - 28px,1180px)}.gvi-v2 .hero{padding:42px 0}.gvi-v2 h1{font-size:43px}.gvi-v2 .hero-right{display:flex;flex-direction:column;align-items:stretch}.gvi-v2 .hero-photo{height:280px;border-radius:140px 140px 8px 8px}.gvi-v2 .float-note{left:12px;bottom:12px}.gvi-v2 .form-panel{position:static;top:auto;width:100%}.gvi-v2 .section{padding:58px 0}.gvi-v2 .proof-grid{gap:8px}.gvi-v2 .proof-item{align-items:flex-start;gap:8px}.gvi-v2 .proof-icon{width:34px;height:34px;font-size:15px}.gvi-v2 .service-grid{grid-template-columns:1fr}.gvi-v2 .service-card{min-height:0;padding:22px}.gvi-v2 .about-grid,.gvi-v2 .faq-grid{grid-template-columns:1fr}.gvi-v2 .about-art{min-height:270px}.gvi-v2 .steps-grid{grid-template-columns:1fr;gap:25px}.gvi-v2 .contact-row{align-items:flex-start;flex-direction:column}.gvi-v2 .contact-row .btn{white-space:normal}.gvi-v2 .trustline{gap:12px}.gvi-v2 .section-head h2,.gvi-v2 .about-copy h2,.gvi-v2 .faq-title h2{font-size:35px}}
      `}</style>

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Your journey, thoughtfully guided</span>
            <h1>Big plans.<br />New places.<br /><em>Clearer next steps.</em></h1>
            <p>Planning to study, travel, work or build a future abroad? Get practical visa application guidance shaped around your destination and goals.</p>
            <div className="actions">
              <a className="btn btn-primary" href="#visa-enquiry">Start your enquiry <FaArrowRight /></a>
              <a className="btn btn-secondary" href="https://wa.me/917022213466" target="_blank" rel="noreferrer"><FaWhatsapp /> Chat on WhatsApp</a>
            </div>
            <div className="trustline">
              <span><FaCheckCircle /> Personalised guidance</span>
              <span><FaCheckCircle /> Clear document checklists</span>
              <span><FaCheckCircle /> Step-by-step support</span>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-photo">
              <img src="/GVI_Banner.webp" alt="Travel and visa guidance for international destinations" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <div className="photo-fallback"><FaGlobeAsia /><strong>Your next chapter<br />starts somewhere.</strong><span>Let’s make the process clearer.</span></div>
            </div>
            <div className="float-note"><b>One step at a time</b><span>Understand your options, prepare your documents and move forward with confidence.</span></div>
          </div>
          <div className="form-panel" id="visa-enquiry">
            <h2>Let’s talk about your plans</h2>
            <p>Share a few details and our team can guide you on the next step.</p>
            <VisaForm />
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="wrap proof-grid">
          <div className="proof-item"><div className="proof-icon"><FaPassport /></div><div><b>Visa guidance</b><span>Support for different visa goals</span></div></div>
          <div className="proof-item"><div className="proof-icon"><FaMapMarkerAlt /></div><div><b>Bengaluru based</b><span>Local team, global destinations</span></div></div>
          <div className="proof-item"><div className="proof-icon"><FaRegClock /></div><div><b>Clear next steps</b><span>Know what to prepare next</span></div></div>
          <div className="proof-item"><div className="proof-icon"><FaCheckCircle /></div><div><b>Document focused</b><span>Organised application preparation</span></div></div>
        </div>
      </section>

      <section className="section services">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How we can help</span>
            <h2>Find the guidance that fits your journey.</h2>
            <p>Every destination and visa category has its own requirements. Start with the service that best matches your plans.</p>
          </div>
          <div className="service-grid">
            {services.map(({title, desc, icon: Icon, href}) => (
              <Link className="service-card" href={href} key={title}>
                <div className="service-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="text-link">Explore service <FaArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="wrap about-grid">
          <div className="about-art"><div className="about-art-inner"><FaGlobeAsia /><strong>A world of possibilities.</strong><span>Start with the right information.</span></div></div>
          <div className="about-copy">
            <span className="eyebrow">About Global Visa Internationals</span>
            <h2>Good decisions begin with clear information.</h2>
            <p>Visa applications can feel complicated when requirements, documents and timelines vary by country. We help you understand the process and prepare with a clearer plan.</p>
            <ul className="check-list">
              <li><FaCheckCircle /> Guidance based on your destination and purpose</li>
              <li><FaCheckCircle /> Help understanding document requirements</li>
              <li><FaCheckCircle /> Practical support through application preparation</li>
            </ul>
            <Link className="btn btn-primary" href="/about-us">Get to know us <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">A simple process</span>
            <h2>From first question to prepared application.</h2>
            <p>Know what happens next with a practical, easy-to-follow approach.</p>
          </div>
          <div className="steps-grid">
            {steps.map(([no,title,desc]) => <div className="step" key={no}><span className="step-no">{no}</span><h3>{title}</h3><p>{desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section reviews">
        <div className="wrap">
          <div className="section-head"><span className="eyebrow">Experiences shared</span><h2>Hear from people who worked with us.</h2><p>Read customer feedback to learn about their experience with our guidance and service.</p></div>
          <ReviewCarousel />
        </div>
      </section>

      <section className="section">
        <div className="wrap faq-grid">
          <div className="faq-title"><span className="eyebrow">Helpful answers</span><h2>Questions before you begin?</h2><p>Here are a few common questions. Your exact requirements depend on the country and visa category.</p></div>
          <div>
            {faqs.map(([q,a],i) => <div className="faq-item" key={q}><button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{q}</span><span>{openFaq === i ? "−" : "+"}</span></button>{openFaq === i && <div className="faq-answer">{a}</div>}</div>)}
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="wrap contact-row">
          <div><h2>Have a destination in mind?</h2><p>Tell us where you want to go and what you want to achieve. We’ll help you understand a sensible next step.</p></div>
          <a className="btn" href="https://wa.me/917022213466" target="_blank" rel="noreferrer"><FaWhatsapp /> Talk to our team <FaArrowRight /></a>
        </div>
      </section>
    </div>
  );
}
