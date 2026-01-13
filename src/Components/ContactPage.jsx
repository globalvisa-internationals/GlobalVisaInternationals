'use client';
import { useState } from 'react';
import Image from 'next/image';
import VisaForm from './VisaForm';
import styles from './ContactPage.module.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const ContactPage = () => {
    const [activeSection, setActiveSection] = useState('contact');

    const services = [
        'Canada PR & Temporary Visas',
        'Australia PR & Temporary Visas',
        'USA B1/B2 Visitor Visas',
        'UK Visitor, Student & Skilled Visas',
        'Schengen Tourist, Business & Family Visas',
        'UAE Tourist Visa',
        'Family Sponsorship & Dependent Visas',
        'Visa Appeals & Rejection Assistance'
    ];


    const processSteps = [
        { number: '01', title: 'Initial Consultation', desc: 'Free assessment & personalized plan' },
        { number: '02', title: 'Documentation', desc: 'Complete paperwork & verification' },
        { number: '03', title: 'Application Filing', desc: 'Error-free submission' },
        { number: '04', title: 'Follow-up & Tracking', desc: 'Real-time updates' },
        { number: '05', title: 'Visa Approval', desc: 'Passport delivery & guidance' }
    ];

    return (
        <div className={styles.pageContainer}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/contact/visa-contact-hero.webp"
                        alt="Global Visa Consultation"
                        fill
                        quality={100}
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <span>Home</span>
                        <FaArrowRight className={styles.arrowIcon} />
                        <span className={styles.active}>Contact Us</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Start Your <span className={styles.highlight}>Global Journey</span> Today
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Expert visa & immigration guidance for individuals, families, and businesses worldwide
                    </p>
                    <div className={styles.ctaButtons}>
                        <button
                            className={`${styles.ctaBtn} ${styles.primaryBtn}`}
                            onClick={() => document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get Free Consultation
                        </button>
                        <button className={`${styles.ctaBtn} ${styles.secondaryBtn}`}>
                            <FaPhoneAlt /> Call Now: +91-7022213466
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <div className={styles.mainGrid}>
                {/* Left Content Column */}
                <div className={styles.contentColumn}>
                    {/* Why Choose Us */}
                    <section className={styles.sectionCard}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.iconBadge}>
                                <IoIosCheckmarkCircle />
                            </div>
                            <h2 className={styles.sectionTitle}>Why Choose Global Visa Internationals</h2>
                        </div>
                        <p className={styles.leadText}>
                            We transform complex immigration processes into seamless, stress-free experiences with
                            end-to-end professional management.
                        </p>

                        <div className={styles.featuresGrid}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureIcon}>
                                    <FaCheckCircle />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>98% Success Rate</h3>
                                    <p>Industry-leading approval rates across all visa categories</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureIcon}>
                                    <FaCheckCircle />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Complete Transparency</h3>
                                    <p>No hidden fees, clear pricing, regular updates</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureIcon}>
                                    <FaCheckCircle />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>Personal Case Manager</h3>
                                    <p>Dedicated expert assigned to your case from start to finish</p>
                                </div>
                            </div>
                            <div className={styles.featureItem}>
                                <div className={styles.featureIcon}>
                                    <FaCheckCircle />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3>24/7 Support</h3>
                                    <p>Round-the-clock assistance for urgent queries</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Process */}
                    <section className={styles.sectionCard}>
                        <h2 className={styles.sectionTitle}>Our 5-Step Success Process</h2>
                        <div className={styles.processTimeline}>
                            {processSteps.map((step, index) => (
                                <div key={index} className={styles.processStep}>
                                    <div className={styles.stepNumber}>{step.number}</div>
                                    <div className={styles.stepContent}>
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <div className={styles.stepConnector} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Services Offered */}
                    <section className={styles.sectionCard}>
                        <h2 className={styles.sectionTitle}>Our Immigration Services</h2>
                        <div className={styles.servicesGrid}>
                            {services.map((service, index) => (
                                <div key={index} className={styles.serviceCard}>
                                    <div className={styles.serviceIcon}>
                                        <FaCheckCircle />
                                    </div>
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Info */}
                    <section className={styles.contactInfoCard}>
                        <h2 className={styles.sectionTitle}>Visit Our Office</h2>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3>Bangalore Office</h3>
                                    <p>GF-9, Business Point, 137 Brigade Road,<br />
                                        Next to Brigade Towers,<br />
                                        Bangalore – 560025, Karnataka</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h3>Call Us</h3>
                                    <p><a href="tel:+917022213466">+91-7022213466</a></p>
                                    <p className={styles.contactNote}>Available 10 AM - 7 PM, Monday to Saturday</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3>Email Us</h3>
                                    <p><a href="mailto:operations@globalvisainternationals.com">
                                        operations@globalvisainternationals.com
                                    </a></p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <FaClock />
                                </div>
                                <div>
                                    <h3>Office Hours</h3>
                                    <p>Monday to Saturday: 10:00 AM – 07:00 PM<br />
                                        Sunday & Public Holidays: Closed</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.mapContainer}>
                            {/* Add your map embed here */}
                            <div className={styles.mapPlaceholder}>
                                <p>Google Maps integration available</p>
                                <small>Location: Brigade Road, Bangalore</small>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Form Column */}
                <div className={styles.formColumn}>
                    <div className={styles.stickyFormContainer} id="contactForm">

                        <VisaForm />

                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <section className={styles.ctaBanner}>
                <div className={styles.ctaContent}>
                    <h2>Ready to Begin Your Journey?</h2>
                    <p>Join thousands of successful applicants who trusted us with their immigration dreams</p>
                    <div className={styles.ctaStats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>10,000+</span>
                            <span className={styles.statLabel}>Clients Served</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Countries</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>98%</span>
                            <span className={styles.statLabel}>Success Rate</span>
                        </div>
                    </div>
                    <button className={styles.bannerCta}>
                        Schedule Free Consultation <FaArrowRight />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;

