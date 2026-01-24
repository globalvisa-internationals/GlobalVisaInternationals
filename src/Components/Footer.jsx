import React from "react";
import Link from "next/link"; // For internal navigation
import styles from "./Footer.module.css";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter, FaFacebook, FaPinterest, } from "react-icons/fa6";
import { MdLocationOn, MdEmail, MdPhone, MdOutlineBusiness } from "react-icons/md";
import { TbTableShare } from "react-icons/tb";

export default function Footer() {
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

            {/* Floating Icons */}
            <section>
                <a href="tel:+917022213466" aria-label="Call Global Visa">
                    <img src="/images/phone.png" alt="Call" className={styles.callIcon} />
                </a>
                <a href="https://wa.me/+917022213466" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Global Visa">
                    <img src="/images/whatsapp.png" alt="WhatsApp" className={styles.whatsappIcon} />
                </a>
            </section>

            {/* Footer Section */}
            <footer className={styles.footer}>
                <div className={styles.footerGrid}>

                    {/* Column 1: Logo + About */}
                    <div className={styles.column}>
                        <img className={styles.logo} src="https://www.globalvisainternationals.com/Global-Visa-Internationals-Logo.svg" alt="Logo" />
                        <p className={styles.about}>With over 11+ years of experience, <b>Global Visa Internationals </b>    is a trusted leader in providing innovative immigration and global    mobility solutions. We specialize in visa processing, relocation    services, and compliance support to help individuals and businesses    navigate international mobility.</p>
                    </div>

                    {/* Column 2: Immigration Services */}
                    <div className={styles.column}>
                        <h4>Immigration Services</h4>
                        <ul>
                            <li><a href="./Visa/permanent-residency-visa/canada-pr-visa"> Canada Immigration</a></li>
                            <li><a href="./Visa/permanent-residency-visa/australia-pr-visa"> Australia Immigration</a></li>
                            <li><a href="./Visa/tourist-visa/schengen"> Europe Immigration</a></li>
                            <li><a href="./Visa/business/uk"> Business & Investor Visas</a></li>
                            <li><a href="./Visa/student-visa/uk"> Student Visas</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Assistance */}
                    <div className={styles.column}>
                        <h4>Quick Assistance</h4>
                        <ul>
                            <li><a href="https://www.globalvisainternationals.com/contact">Free Consultation</a></li>
                            <li><a href="https://www.globalvisainternationals.com/blog">Blog</a></li>
                            <li><a href="https://www.globalvisainternationals.com/career">Careers</a></li>
                            <li><a href="https://www.globalvisainternationals.com/privacy-policy">Privacy Policy</a></li>
                            <li><a href="https://www.globalvisainternationals.com/terms-and-conditions">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className={styles.column}>
                        <h4>Contact Info</h4>
                        <p><MdOutlineBusiness /> <b>Head Office:</b></p>
                        <p><MdLocationOn /> Global Visa Internationals G-F9, Business Point, 137 Brigade Road, Next to Brigade Tower, Bangalore, 560025, Karnataka</p>
                        <p><MdPhone /> <b>+91-7022213466</b></p>
                        <p><MdEmail /> <a href="mailto:operations@globalvisainternationals.com">operations@globalvisainternationals.com</a></p>

                        {/* Social Icons */}
                        <div className={styles.socialIcons}>
                            <a href="https://wa.me/+917022213466"><FaWhatsapp /></a>
                            <a href="https://instagram.com/globalvisa_internationals/"><FaInstagram /></a>
                            <a href="http://linkedin.com/company/globalvisainternationals"><FaLinkedin /></a>
                            <a href="https://www.youtube.com/@GLOBALVISAINTERNATIONALS"><FaYoutube /></a>
                            <a href="https://x.com/GLOBALVISA1505"><FaXTwitter /></a>
                            <a href="https://in.pinterest.com/globalvisainternationals/"><FaPinterest /></a>
                            <a href="https://www.facebook.com/globalvisainternationalss"><FaFacebook /></a>
                            <a href="https://sharechat.com/profile/globalvisainternationals?referrer=copyLink"><TbTableShare /></a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}
