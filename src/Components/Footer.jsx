"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import {
    FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube,
    FaXTwitter, FaFacebook, FaPinterest, FaArrowRight
} from "react-icons/fa6";
import {
    MdEmail, MdPhone, MdOutlineBusiness,
    MdOutlineVerified, MdAccessTime
} from "react-icons/md";
import { TbTableShare } from "react-icons/tb";
import { IoIosCheckmarkCircle } from "react-icons/io";

const SITE_URL = "https://globalvisainternationals.com";
const PHONE_DISPLAY = "+91 7022213466";
const PHONE_TEL = "+91 7022213466";
const EMAIL = "operations@globalvisainternationals.com";

const SERVICES = [
    { label: "Canada PR Visa", href: "/Visa/permanent-residency-visa/canada-pr-visa" },
    { label: "Australia PR Visa", href: "/Visa/permanent-residency-visa/australia-pr-visa" },
    { label: "Schengen & Europe Visa", href: "/Visa/tourist-visa/schengen" },
    { label: "UK Business & Investor Visa", href: "/Visa/business/uk" },
    { label: "UK Student Visa", href: "/Visa/student-visa/uk" },
];

const QUICK_LINKS = [
    { label: "Free Consultation", href: "/contact" },
    { label: "Immigration Blog", href: "/blog" },
    { label: "Career Opportunities", href: "/career" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const SOCIALS = [
    { label: "WhatsApp", href: `https://wa.me/${PHONE_TEL.replace("+", "")}`, Icon: FaWhatsapp },
    { label: "Instagram", href: "https://instagram.com/globalvisa_internationals/", Icon: FaInstagram },
    { label: "LinkedIn", href: "https://linkedin.com/company/globalvisainternationals", Icon: FaLinkedin },
    { label: "YouTube", href: "https://www.youtube.com/@GLOBALVISAINTERNATIONALS", Icon: FaYoutube },
    { label: "X (Twitter)", href: "https://x.com/GLOBALVISA1505", Icon: FaXTwitter },
    { label: "Pinterest", href: "https://in.pinterest.com/globalvisainternationals/", Icon: FaPinterest },
    { label: "Facebook", href: "https://www.facebook.com/globalvisainternationalss", Icon: FaFacebook },
    { label: "ShareChat", href: "https://sharechat.com/profile/globalvisainternationals?referrer=copyLink", Icon: TbTableShare },
];

const STATS = [
    { value: "12+", label: "Years of Experience" },
    { value: "5", label: "Visa Categories" },
    { value: "24/7", label: "Client Support" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus("loading");
        try {
            // TODO: point this at your real newsletter endpoint
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("success");
            setEmail("");
        } catch {
            setStatus("error");
        }
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: "Global Visa Internationals",
        alternateName: "Global Visa",
        description:
            "Immigration and global mobility consultants in Bangalore offering Canada PR, Australia PR, Schengen, UK business and student visa services.",
        url: SITE_URL,
        logo: `${SITE_URL}/Global-Visa-Internationals-Logo.svg`,
        image: `${SITE_URL}/logo.png`,
        email: EMAIL,
        telephone: PHONE_DISPLAY,
        priceRange: "$$",
        address: {
            "@type": "PostalAddress",
            streetAddress: "G-F9, Business Point, 137 Brigade Road, Next to Brigade Tower",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            postalCode: "560025",
            addressCountry: "IN",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: PHONE_DISPLAY,
            email: EMAIL,
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Kannada"],
        },
        areaServed: ["IN", "CA", "AU", "GB", "Europe"],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Immigration Services",
            itemListElement: SERVICES.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: s.label,
                    url: `${SITE_URL}${s.href}`,
                },
            })),
        },
        sameAs: SOCIALS.filter((s) => !s.href.includes("wa.me") && !s.href.includes("sharechat")).map(
            (s) => s.href
        ),
    };

    return (
        <>
            {/* SEO structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Floating contact buttons */}
            <div className={styles.floatingIcons}>
                <a
                    href={`tel:${PHONE_TEL}`}
                    className={styles.floatingButton}
                    aria-label="Call Global Visa Internationals"
                    data-type="call"
                >
                    <MdPhone aria-hidden="true" />
                    <span className={styles.tooltip}>Call Us Now</span>
                </a>
                <a
                    href={`https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(
                        "Hello, I would like to know more about visa services."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.floatingButton}
                    aria-label="Chat with Global Visa Internationals on WhatsApp"
                    data-type="whatsapp"
                >
                    <FaWhatsapp aria-hidden="true" />
                    <span className={styles.tooltip}>Chat on WhatsApp</span>
                </a>
            </div>

            <footer className={styles.footer} role="contentinfo">
                {/* Call-to-action banner */}
                <section className={styles.ctaBanner} aria-labelledby="footer-cta-heading">
                    <div className={styles.ctaText}>
                        <h2 id="footer-cta-heading">Ready to Start Your Visa Journey?</h2>
                        <p>
                            Talk to our Bangalore-based immigration experts for Canada PR, Australia PR,
                            Schengen, UK business and student visas.
                        </p>
                    </div>
                    <Link href="/contact" className={styles.primaryCta}>
                        Book a Free Consultation <FaArrowRight aria-hidden="true" />
                    </Link>
                </section>

                {/* Trust badges */}
                <div className={styles.trustBadges}>
                    <div className={styles.badge}>
                        <IoIosCheckmarkCircle aria-hidden="true" />
                        <div>
                            <h3>12+ Years Experience</h3>
                            <p>Trusted Immigration Expertise</p>
                        </div>
                    </div>
                    <div className={styles.badge}>
                        <MdOutlineVerified aria-hidden="true" />
                        <div>
                            <h3>Verified Consultants</h3>
                            <p>Licensed &amp; Certified</p>
                        </div>
                    </div>
                    <div className={styles.badge}>
                        <MdAccessTime aria-hidden="true" />
                        <div>
                            <h3>24/7 Support</h3>
                            <p>Always Available</p>
                        </div>
                    </div>
                </div>

                <div className={styles.footerContainer}>
                    <div className={styles.footerGrid}>
                        {/* Column 1: Company */}
                        <div className={styles.column}>
                            <Link href="/" className={styles.logoSection} aria-label="Global Visa Internationals home">
                                <img
                                    className={styles.logo}
                                    src="https://www.globalvisainternationals.com/Global-Visa-Internationals-Logo.svg"
                                    alt="Global Visa Internationals – Immigration & Visa Consultants"
                                    width="180"
                                    height="56"
                                    loading="lazy"
                                />
                            </Link>
                            <p className={styles.tagline}>Navigating Your Global Journey</p>

                            <p className={styles.about}>
                                With over <strong>12+ years of experience</strong>, Global Visa
                                Internationals is a trusted immigration consultant in Bangalore, delivering
                                visa processing, relocation services and compliance support for individuals,
                                families and businesses.
                            </p>

                            <ul className={styles.statsRow} aria-label="Company highlights">
                                {STATS.map((s) => (
                                    <li key={s.label}>
                                        <span className={styles.statValue}>{s.value}</span>
                                        <span className={styles.statLabel}>{s.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Services */}
                        <nav className={styles.column} aria-labelledby="footer-services">
                            <h3 id="footer-services" className={styles.columnTitle}>
                                Immigration Services
                            </h3>
                            <ul className={styles.linksList}>
                                {SERVICES.map((s) => (
                                    <li key={s.href}>
                                        <Link href={s.href}>
                                            <span className={styles.listBullet} aria-hidden="true">→</span>
                                            {s.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Column 3: Quick links */}
                        <nav className={styles.column} aria-labelledby="footer-quick">
                            <h3 id="footer-quick" className={styles.columnTitle}>
                                Quick Assistance
                            </h3>
                            <ul className={styles.linksList}>
                                {QUICK_LINKS.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href}>
                                            <span className={styles.listBullet} aria-hidden="true">→</span>
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Column 4: Contact */}
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Contact Information</h3>

                            <address className={styles.contactInfo}>
                                <div className={styles.contactItem}>
                                    <MdOutlineBusiness className={styles.contactIcon} aria-hidden="true" />
                                    <div>
                                        <p className={styles.contactLabel}>Head Office</p>
                                        <p className={styles.contactText}>
                                            G-F9, Business Point, 137 Brigade Road, Next to Brigade Tower,
                                            Bangalore, Karnataka 560025
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <MdPhone className={styles.contactIcon} aria-hidden="true" />
                                    <div>
                                        <p className={styles.contactLabel}>Phone</p>
                                        <a href={`tel:${PHONE_TEL}`} className={styles.contactLink}>
                                            {PHONE_DISPLAY}
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <MdEmail className={styles.contactIcon} aria-hidden="true" />
                                    <div>
                                        <p className={styles.contactLabel}>Email</p>
                                        <a href={`mailto:${EMAIL}`} className={styles.contactLink}>
                                            {EMAIL}
                                        </a>
                                    </div>
                                </div>
                            </address>

                            {/* Newsletter */}
                            <div className={styles.newsletter}>
                                <h4>Stay Updated</h4>
                                <p>Get the latest immigration news &amp; updates</p>
                                <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
                                    <label htmlFor="footer-email" className={styles.srOnly}>
                                        Email address
                                    </label>
                                    <input
                                        id="footer-email"
                                        type="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        placeholder="Your email address"
                                        className={styles.emailInput}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className={styles.subscribeButton}
                                        disabled={status === "loading"}
                                    >
                                        {status === "loading" ? "Sending…" : "Subscribe"}
                                    </button>
                                </form>
                                <p className={styles.formMessage} role="status" aria-live="polite">
                                    {status === "success" && "Thanks! You're subscribed."}
                                    {status === "error" && "Something went wrong. Please try again."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className={styles.footerBottom}>
                        <div className={styles.socialSection}>
                            <h4>Connect With Us</h4>
                            <ul className={styles.socialIcons}>
                                {SOCIALS.map(({ label, href, Icon }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer me"
                                            aria-label={`Global Visa Internationals on ${label}`}
                                            title={label}
                                        >
                                            <Icon aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.copyright}>
                            <p>© {currentYear} Global Visa Internationals. All rights reserved.</p>
                            <p className={styles.disclaimer}>
                                Immigration consultancy services provided by licensed professionals.
                                Visa approval is subject to the decision of the respective embassy or
                                immigration authority.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
