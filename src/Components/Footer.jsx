import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import {
    FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube,
    FaXTwitter, FaFacebook, FaPinterest, FaArrowRight
} from "react-icons/fa6";
import {
    MdLocationOn, MdEmail, MdPhone, MdOutlineBusiness,
    MdOutlineVerified, MdAccessTime
} from "react-icons/md";
import { TbTableShare } from "react-icons/tb";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* SEO Structured Data for Business */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
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
                            "contactType": "customer service"
                        },
                        "sameAs": [
                            "http://linkedin.com/company/globalvisainternationals",
                            "https://www.youtube.com/@GLOBALVISAINTERNATIONALS",
                            "https://x.com/GLOBALVISA1505",
                            "https://instagram.com/globalvisa_internationals/",
                            "https://www.facebook.com/globalvisainternationalss"
                        ]
                    }),
                }}
            />

            {/* Floating Contact Icons - Modern Design */}
            <div className={styles.floatingIcons}>
                <a
                    href="tel:+917022213466"
                    className={styles.floatingButton}
                    aria-label="Call Global Visa"
                    data-type="call"
                >
                    <MdPhone />
                    <span className={styles.tooltip}>Call Us Now</span>
                </a>
                <a
                    href="https://wa.me/+917022213466"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.floatingButton}
                    aria-label="WhatsApp Global Visa"
                    data-type="whatsapp"
                >
                    <FaWhatsapp />
                    <span className={styles.tooltip}>Chat on WhatsApp</span>
                </a>
            </div>

            {/* Main Footer Section */}
            <footer className={styles.footer}>
                {/* Trust Badges Section */}
                <div className={styles.trustBadges}>
                    <div className={styles.badge}>
                        <IoIosCheckmarkCircle />
                        <div>
                            <h4>11+ Years Experience</h4>
                            <p>Trusted Immigration Expertise</p>
                        </div>
                    </div>
                    <div className={styles.badge}>
                        <MdOutlineVerified />
                        <div>
                            <h4>Verified Consultants</h4>
                            <p>Licensed & Certified</p>
                        </div>
                    </div>
                    <div className={styles.badge}>
                        <MdAccessTime />
                        <div>
                            <h4>24/7 Support</h4>
                            <p>Always Available</p>
                        </div>
                    </div>
                </div>

                <div className={styles.footerContainer}>
                    {/* Main Footer Grid */}
                    <div className={styles.footerGrid}>

                        {/* Column 1: Company Info */}
                        <div className={styles.column}>
                            <div className={styles.logoSection}>
                                <img
                                    className={styles.logo}
                                    src="https://www.globalvisainternationals.com/Global-Visa-Internationals-Logo.svg"
                                    alt="Global Visa Internationals Logo"
                                />
                                <p className={styles.tagline}>Navigating Your Global Journey</p>
                            </div>

                            <p className={styles.about}>
                                With over <strong>11+ years of experience</strong>, Global Visa Internationals
                                is a trusted leader in providing innovative immigration and global mobility
                                solutions. We specialize in visa processing, relocation services, and
                                compliance support.
                            </p>

                            <div className={styles.ctaButton}>
                                <a href="/contact" className={styles.primaryCta}>
                                    Free Consultation <FaArrowRight />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Immigration Services */}
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}>
                                <span className={styles.titleIcon}>🌐</span>
                                Immigration Services
                            </h4>
                            <ul className={styles.servicesList}>
                                <li>
                                    <a href="./Visa/permanent-residency-visa/canada-pr-visa">
                                        <span className={styles.listBullet}>→</span>
                                        Canada Immigration
                                    </a>
                                </li>
                                <li>
                                    <a href="./Visa/permanent-residency-visa/australia-pr-visa">
                                        <span className={styles.listBullet}>→</span>
                                        Australia Immigration
                                    </a>
                                </li>
                                <li>
                                    <a href="./Visa/tourist-visa/schengen">
                                        <span className={styles.listBullet}>→</span>
                                        Europe Immigration
                                    </a>
                                </li>
                                <li>
                                    <a href="./Visa/business/uk">
                                        <span className={styles.listBullet}>→</span>
                                        Business & Investor Visas
                                    </a>
                                </li>
                                <li>
                                    <a href="./Visa/student-visa/uk">
                                        <span className={styles.listBullet}>→</span>
                                        Student Visas
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Quick Links */}
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}>
                                <span className={styles.titleIcon}>⚡</span>
                                Quick Assistance
                            </h4>
                            <ul className={styles.linksList}>
                                <li>
                                    <a href="https://www.globalvisainternationals.com/contact">
                                        Free Consultation
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.globalvisainternationals.com/blog">
                                        Immigration Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.globalvisainternationals.com/career">
                                        Career Opportunities
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.globalvisainternationals.com/privacy-policy">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.globalvisainternationals.com/terms-and-conditions">
                                        Terms & Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Contact & Social */}
                        <div className={styles.column}>
                            <h4 className={styles.columnTitle}>
                                <span className={styles.titleIcon}>📞</span>
                                Contact Information
                            </h4>

                            <div className={styles.contactInfo}>
                                <div className={styles.contactItem}>
                                    <MdOutlineBusiness className={styles.contactIcon} />
                                    <div>
                                        <p className={styles.contactLabel}>Head Office</p>
                                        <p className={styles.contactText}>
                                            G-F9, Business Point, 137 Brigade Road,
                                            Next to Brigade Tower, Bangalore, 560025
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <MdPhone className={styles.contactIcon} />
                                    <div>
                                        <p className={styles.contactLabel}>Phone Number</p>
                                        <a href="tel:+91-7022213466" className={styles.contactLink}>
                                            +91-7022213466
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <MdEmail className={styles.contactIcon} />
                                    <div>
                                        <p className={styles.contactLabel}>Email Address</p>
                                        <a href="mailto:operations@globalvisainternationals.com" className={styles.contactLink}>
                                            operations@globalvisainternationals.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter Subscription */}
                            <div className={styles.newsletter}>
                                <h5>Stay Updated</h5>
                                <p>Get latest immigration news & updates</p>
                                <form className={styles.subscribeForm}>
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className={styles.emailInput}
                                    />
                                    <button type="submit" className={styles.subscribeButton}>
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Social Media & Bottom Bar */}
                    <div className={styles.footerBottom}>
                        <div className={styles.socialSection}>
                            <h5>Connect With Us</h5>
                            <div className={styles.socialIcons}>
                                <a href="https://wa.me/+917022213466" aria-label="WhatsApp">
                                    <FaWhatsapp />
                                </a>
                                <a href="https://instagram.com/globalvisa_internationals/" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="http://linkedin.com/company/globalvisainternationals" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href="https://www.youtube.com/@GLOBALVISAINTERNATIONALS" aria-label="YouTube">
                                    <FaYoutube />
                                </a>
                                <a href="https://x.com/GLOBALVISA1505" aria-label="Twitter">
                                    <FaXTwitter />
                                </a>
                                <a href="https://in.pinterest.com/globalvisainternationals/" aria-label="Pinterest">
                                    <FaPinterest />
                                </a>
                                <a href="https://www.facebook.com/globalvisainternationalss" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                                <a href="https://sharechat.com/profile/globalvisainternationals?referrer=copyLink" aria-label="ShareChat">
                                    <TbTableShare />
                                </a>
                            </div>
                        </div>

                        <div className={styles.copyright}>
                            <p>© {currentYear} Global Visa Internationals. All rights reserved.</p>
                            <p className={styles.disclaimer}>
                                Immigration consultancy services provided by licensed professionals.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}