import styles from "./nfc.module.css";
import Image from "next/image";
import Link from "next/link";
import {
    FaWhatsapp,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaTwitter,
    FaFacebook,
    FaPinterest,
    FaPhone,
    FaEnvelope,
    FaUser,
    FaGlobe,
    FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa"; // ✅ fix: import from fa (not fa6)
import { TbTableShare } from "react-icons/tb";


export const metadata = {
    title: "Global Visa Internationals | Trusted Visa Consultants",
    description:
        "Global Visa Internationals offers expert visa consulting for study, work, and travel across top countries like Canada, Australia, UK, USA, and more.",
};

export default function LandingPage() {
    return (
        <main className={styles.container}>
            {/* Hero Section */}
            <section className={styles.contactCardSection}>
                <div className={styles.businessCard}>
                    <div className={styles.cardHeader}>
                        <Image
                            src="/globalvisainternationals.webp"
                            alt="Global Visa Internationals"
                            width={100}
                            height={100}
                            className={styles.cardImage}
                        />
                        <div className={styles.cardInfo}>
                            <h2>Global Visa Internationals</h2>
                            <p>Your Trusted Partner for Study, Work & Travel Visas</p>
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <p><FaPhoneAlt className={styles.icon} /> <a href="tel:+917022213466">+91 70222 13466</a></p>
                        <p><FaEnvelope className={styles.icon} /> <a href="mailto:operations@globalvisainternationals.com">operations@globalvisainternationals.com</a></p>
                        <p><FaGlobe className={styles.icon} /> <a href="https://globalvisainternationals.com">globalvisainternationals.com</a></p>
                    </div>

                    <div className={styles.cardFooter}>
                        <a
                            href="/contact/globalvisainternationals.vcf"
                            download="GlobalVisaInternationals.vcf"
                            className={styles.vcardBtn}
                        >
                            Save Contact
                        </a>

                        <div className={styles.socialIcons}>
                            <a href="https://wa.me/+917022213466"><FaWhatsapp /></a>
                            <a href="https://instagram.com/globalvisa_internationals/"><FaInstagram /></a>
                            <a href="http://linkedin.com/company/globalvisainternationals"><FaLinkedin /></a>
                            <a href="https://www.youtube.com/@GLOBALVISAINTERNATIONALS"><FaYoutube /></a>
                            <a href="https://x.com/GLOBALVISA1505"><FaXTwitter /></a>
                            <a href="https://in.pinterest.com/globalvisainternationals/"><FaPinterest /></a>
                            <a href="https://www.facebook.com/profile.php?id=61551041483630"><FaFacebook /></a>
                            <a href="https://sharechat.com/profile/globalvisainternationals?referrer=copyLink"><TbTableShare /></a>
                        </div>
                    </div>
                </div>
            </section>


            {/* About Section */}
            <section className={styles.about}>
                <h2>About Us</h2>
                <p>
                    At <strong>Global Visa Internationals</strong>, we simplify the complex
                    world of international travel and immigration. Our certified experts
                    help students, professionals, and families achieve their global goals
                    confidently and efficiently.
                </p>
            </section>

            {/* Countries Section */}
            <section className={styles.countries}>
                <h2>Countries We Serve</h2>
                <ul>
                    <li>Canada</li>
                    <li>Australia</li>
                    <li>United Kingdom</li>
                    <li>United States</li>
                    <li>Germany</li>
                    <li>France</li>
                    <li>Italy</li>
                    <li>Spain</li>
                    <li>New Zealand</li>
                    <li>Singapore</li>
                </ul>
            </section>

            {/* Visa Types Section */}
            <section className={styles.visaTypes}>
                <h2>Visa Types We Handle</h2>
                <ul>
                    <li>Student Visas</li>
                    <li>Work Visas</li>
                    <li>Tourist & Visitor Visas</li>
                    <li>Business & Investor Visas</li>
                    <li>Dependent & Family Visas</li>
                </ul>
            </section>

            {/* Services Section */}
            <section className={styles.services}>
                <h2>Our Services</h2>
                <div className={styles.serviceCard}>
                    <h3>01. Visa Consultation & Assessment</h3>
                    <p>
                        Personalized guidance to help you choose the right visa type based on
                        your profile, goals, and eligibility.
                    </p>
                </div>
                <div className={styles.serviceCard}>
                    <h3>02. Complete Documentation Assistance</h3>
                    <p>
                        From forms to supporting documents, we make your visa process smooth
                        and compliant.
                    </p>
                </div>
                <div className={styles.serviceCard}>
                    <h3>03. Mock Interview Preparation</h3>
                    <p>Train with experienced professionals through real interview simulations.</p>
                </div>
                <div className={styles.serviceCard}>
                    <h3>04. Application Review & Submission</h3>
                    <p>We double-check every part of your application to ensure accuracy and timely approvals.</p>
                </div>
                <div className={styles.serviceCard}>
                    <h3>05. Post-Visa Support</h3>
                    <p>From travel guidance to accommodation tips, our support continues after approval.</p>
                </div>
            </section>

            {/* Vision Section */}
            <section className={styles.vision}>
                <h2>Our Vision</h2>
                <p>
                    Our vision is to empower people to explore global opportunities with confidence —
                    making international travel, education, and immigration simpler and more transparent for all.
                </p>
                <div className={styles.values}>
                    <div>
                        <h4>01. Global Trust</h4>
                        <p>To be a globally trusted name in visa consulting through consistent results and client success.</p>
                    </div>
                    <div>
                        <h4>02. Simplified Solutions</h4>
                        <p>To simplify complex visa processes with expert, technology-driven guidance.</p>
                    </div>
                    <div>
                        <h4>03. Integrity & Transparency</h4>
                        <p>To uphold honesty, clarity, and customer satisfaction in every step of the journey.</p>
                    </div>
                    <div>
                        <h4>04. Life-Changing Opportunities</h4>
                        <p>To create meaningful opportunities for students, professionals, and families worldwide.</p>
                    </div>
                </div>
            </section>

            {/* Full Website Link Section */}
            <section className={styles.fullSite}>
                <h3>Want to Explore More?</h3>
                <p>Discover our full range of visa services, updates, and resources on our official website.</p>
                <Link href="https://globalvisainternationals.com" target="_blank">
                    Visit Full Website
                </Link>
            </section>
        </main>
    );
}
