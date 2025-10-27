import styles from "./nfc.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter, FaFacebook, FaPinterest, } from "react-icons/fa6";
import { MdLocationOn, MdEmail, MdPhone, MdOutlineBusiness } from "react-icons/md";
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
            <section className={styles.hero}>
                <Image
                    src="/images/founder.jpg"
                    alt="Global Visa Internationals"
                    width={1600}
                    height={900}
                    className={styles.heroImage}
                    priority
                />

            </section>
            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <h1>Global Visa Internationals</h1>
                    <p>Your Trusted Partner for Study, Work, and Travel Visas</p>
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
                        Personalized guidance to help you choose the right visa type based
                        on your profile, goals, and eligibility.
                    </p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>02. Complete Documentation Assistance</h3>
                    <p>
                        From filling forms to preparing supporting documents, our experts
                        handle every detail to make your visa process smooth and compliant.
                    </p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>03. Mock Interview Preparation</h3>
                    <p>
                        Get trained by experienced visa professionals with real interview
                        simulations to boost your confidence.
                    </p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>04. Application Review & Submission</h3>
                    <p>
                        We double-check every part of your application to minimize errors and
                        ensure timely approvals.
                    </p>
                </div>

                <div className={styles.serviceCard}>
                    <h3>05. Post-Visa Support</h3>
                    <p>
                        From travel guidance to accommodation tips, we continue assisting you
                        even after your visa approval.
                    </p>
                </div>
            </section>

            {/* Vision Section */}
            <section className={styles.vision}>
                <h2>Our Vision</h2>
                <p>
                    At Global Visa Internationals, our vision is to empower people to
                    explore global opportunities with confidence. We strive to make
                    international travel, education, and immigration simpler, faster, and
                    more transparent for all.
                </p>
                <div className={styles.values}>
                    <div>
                        <h4>01. Global Trust</h4>
                        <p>
                            To be a globally trusted name in visa consulting through consistent
                            results and client success.
                        </p>
                    </div>
                    <div>
                        <h4>02. Simplified Solutions</h4>
                        <p>
                            To simplify complex visa processes with expert, innovative,
                            technology-driven guidance.
                        </p>
                    </div>
                    <div>
                        <h4>03. Integrity & Transparency</h4>
                        <p>
                            To uphold honesty, clarity, and customer satisfaction in every
                            step of the journey.
                        </p>
                    </div>
                    <div>
                        <h4>04. Life-Changing Opportunities</h4>
                        <p>
                            To create meaningful opportunities for students, professionals, and
                            families worldwide.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
