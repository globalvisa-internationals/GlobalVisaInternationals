import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import {
    FaWhatsapp, FaInstagram, FaLinkedin,
    FaYoutube, FaXTwitter, FaFacebook, FaPinterest
} from "react-icons/fa6";
import {
    MdLocationOn, MdEmail, MdPhone, MdOutlineBusiness
} from "react-icons/md";
import { TbTableShare } from "react-icons/tb";

// Move social links to constants for easier maintenance
const SOCIAL_LINKS = [
    { icon: FaWhatsapp, href: "https://wa.me/+917022213466", label: "WhatsApp" },
    { icon: FaInstagram, href: "https://instagram.com/globalvisa_internationals/", label: "Instagram" },
    { icon: FaLinkedin, href: "http://linkedin.com/company/globalvisainternationals", label: "LinkedIn" },
    { icon: FaYoutube, href: "https://www.youtube.com/@GLOBALVISAINTERNATIONALS", label: "YouTube" },
    { icon: FaXTwitter, href: "https://x.com/GLOBALVISA1505", label: "X (Twitter)" },
    { icon: FaPinterest, href: "https://in.pinterest.com/globalvisainternationals/", label: "Pinterest" },
    { icon: FaFacebook, href: "https://www.facebook.com/globalvisainternationalss", label: "Facebook" },
    { icon: TbTableShare, href: "https://sharechat.com/profile/globalvisainternationals?referrer=copyLink", label: "ShareChat" }
];

// Immigration services links
const IMMIGRATION_SERVICES = [
    { label: "Canada Immigration", href: "./Visa/permanent-residency-visa/canada-pr-visa" },
    { label: "Australia Immigration", href: "./Visa/permanent-residency-visa/australia-pr-visa" },
    { label: "Europe Immigration", href: "./Visa/tourist-visa/schengen" },
    { label: "Business & Investor Visas", href: "./Visa/business/uk" },
    { label: "Student Visas", href: "./Visa/student-visa/uk" }
];

// Quick links
const QUICK_LINKS = [
    { label: "Free Consultation", href: "https://www.globalvisainternationals.com/contact" },
    { label: "Blog", href: "https://www.globalvisainternationals.com/blog" },
    { label: "Careers", href: "https://www.globalvisainternationals.com/career" },
    { label: "Privacy Policy", href: "https://www.globalvisainternationals.com/privacy-policy" },
    { label: "Terms & Conditions", href: "https://www.globalvisainternationals.com/terms-and-conditions" }
];

// SEO structured data
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Global Visa Internationals",
    "url": "https://globalvisainternationals.com",
    "logo": "https://globalvisainternationals.com/logo.png",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "G F9 Business Point, 137 Brigade Road, Next to Brigade Tower",
        "addressLocality": "Bangalore",
        "postalCode": "560025",
        "addressCountry": "IN"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7022213466",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": SOCIAL_LINKS.filter(link =>
        !link.label.includes("WhatsApp") && !link.label.includes("ShareChat")
    ).map(link => link.href)
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* SEO Structured Data for Business */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Floating Action Buttons */}
            <div className={styles.floatingActions}>
                <a
                    href="tel:+917022213466"
                    aria-label="Call Global Visa Internationals"
                    className={styles.floatingButton}
                    data-type="call"
                >
                    <img
                        src="/images/phone.png"
                        alt=""
                        role="presentation"
                        className={styles.floatingIcon}
                    />
                    <span className={styles.floatingLabel}>Call Us</span>
                </a>

                <a
                    href="https://wa.me/+917022213466"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Global Visa Internationals on WhatsApp"
                    className={styles.floatingButton}
                    data-type="whatsapp"
                >
                    <img
                        src="/images/whatsapp.png"
                        alt=""
                        role="presentation"
                        className={styles.floatingIcon}
                    />
                    <span className={styles.floatingLabel}>WhatsApp</span>
                </a>
            </div>

            {/* Footer Section */}
            <footer className={styles.footer} role="contentinfo">
                <div className={styles.container}>
                    <div className={styles.footerGrid}>

                        {/* Company Information */}
                        <div className={styles.column}>
                            <div className={styles.logoContainer}>
                                <img
                                    className={styles.logo}
                                    src="https://www.globalvisainternationals.com/Global-Visa-Internationals-Logo.svg"
                                    alt="Global Visa Internationals Logo"
                                    width={150}
                                    height={60}
                                    loading="lazy"
                                />
                            </div>
                            <p className={styles.about}>
                                Global Visa Internationals is a trusted visa consultancy in Bangalore, established in 2016 on Brigade Road. We help Indian applicants successfully apply for tourist, student and business visas with expert guidance, high success rates, and end-to-end documentation support.
                            </p>
                        </div>

                        {/* Immigration Services */}
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Immigration Services</h3>
                            <ul className={styles.linkList} role="list">
                                {IMMIGRATION_SERVICES.map((service, index) => (
                                    <li key={index} className={styles.listItem}>
                                        <Link href={service.href} className={styles.link}>
                                            {service.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Quick Assistance</h3>
                            <ul className={styles.linkList} role="list">
                                {QUICK_LINKS.map((link, index) => (
                                    <li key={index} className={styles.listItem}>
                                        <a
                                            href={link.href}
                                            className={styles.link}
                                            {...(link.href.startsWith('http') ? {
                                                target: "_blank",
                                                rel: "noopener noreferrer"
                                            } : {})}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className={styles.column}>
                            <h3 className={styles.columnTitle}>Contact Info</h3>
                            <address className={styles.address}>
                                <p className={styles.contactItem}>
                                    <MdOutlineBusiness aria-hidden="true" />
                                    <strong>Head Office:</strong>
                                </p>
                                <p className={styles.contactItem}>
                                    <MdLocationOn aria-hidden="true" />
                                    Global Visa Internationals G-F9, Business Point, 137 Brigade Road, Next to Brigade Tower, Bangalore, 560025, Karnataka
                                </p>
                                <p className={styles.contactItem}>
                                    <MdPhone aria-hidden="true" />
                                    <a href="tel:+917022213466" className={styles.phoneLink}>
                                        <strong>+91-7022213466</strong>
                                    </a>
                                </p>
                                <p className={styles.contactItem}>
                                    <MdEmail aria-hidden="true" />
                                    <a href="mailto:operations@globalvisainternationals.com" className={styles.emailLink}>
                                        operations@globalvisainternationals.com
                                    </a>
                                </p>
                            </address>

                            {/* Social Media Links */}
                            <div className={styles.socialContainer}>
                                <p className={styles.socialTitle}>Follow Us</p>
                                <div className={styles.socialIcons} role="list">
                                    {SOCIAL_LINKS.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Follow us on ${social.label}`}
                                                className={styles.socialLink}
                                            >
                                                <Icon aria-hidden="true" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className={styles.copyright}>
                        <p>
                            © {currentYear} Global Visa Internationals. All rights reserved.
                        </p>
                        <p className={styles.disclaimer}>
                            Global Visa Internationals is not a government agency. We are a private immigration consulting firm.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}