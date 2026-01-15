import React from 'react';
import styles from './whychoosGVI.module.css';
import colors from '@/app/styles/colors.module.css';

const WhychoosGVI = () => {
    return (
        <section className={styles.whyChooseSection} id="why-global-visa-internationals">
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.sectionHeader}>

                    <h2 className={`${styles.sectionTitle} ${colors.primaryDark}`}>
                        Why Global Visa Internationals Stands Apart
                    </h2>
                    <div className={styles.headerContent}>
                        <p className={styles.leadText}>
                            With over 11 years of dedicated service, we've refined immigration
                            consultancy into a precise science. Our Bangalore-based team combines
                            extensive experience with innovative approaches to navigate complex
                            visa landscapes.
                        </p>
                        <p className={styles.subText}>
                            We serve as strategic partners in your global mobility journey—providing
                            clarity, reducing complexities, and enhancing success probabilities through
                            evidence-based methodologies.
                        </p>
                    </div>
                </div>

                {/* Service Offerings Grid */}
                <div className={styles.servicesGrid}>
                    <div className={styles.serviceCard}>
                        <div className={styles.cardHeader}>
                            <div className={`${styles.cardIcon} ${colors.bgPrimaryBlue}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3 className={`${styles.cardTitle} ${colors.primaryBlue}`}>
                                Comprehensive Visa Solutions
                            </h3>
                        </div>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Student Visa Documentation & Study Abroad Strategy</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Work Visa Consultation for Career Advancement</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Tourist & Visitor Visa Processing Excellence</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Business Travel Visa & Corporate Mobility Support</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Permanent Residency Pathway Guidance</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Skilled Migration & Points-Based Applications</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Family Reunification & Dependent Visa Processing</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Visa Refusal Analysis & Strategic Reapplication</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Customized Profile Assessment & Advisory</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.cardHeader}>
                            <div className={`${styles.cardIcon} ${colors.bgAccent}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C15.31 2 18 4.69 18 8C18 12.5 12 21 12 21C12 21 6 12.5 6 8C6 4.69 8.69 2 12 2Z" stroke="white" strokeWidth="2" />
                                    <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="white" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3 className={`${styles.cardTitle} ${colors.primaryBlue}`}>
                                Global Destination Expertise
                            </h3>
                        </div>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇨🇦</div>
                                <span><strong>Canada</strong> - Study, Work, Visitor & Express Entry</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇦🇺</div>
                                <span><strong>Australia</strong> - Skilled Migration & PR Pathways</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇬🇧</div>
                                <span><strong>United Kingdom</strong> - Student & Business Visas</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇺🇸</div>
                                <span><strong>United States</strong> - Visitor & Academic Visas</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇪🇺</div>
                                <span><strong>Europe</strong> - Schengen Area Visa Assistance</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇯🇵</div>
                                <span><strong>Japan</strong> - Tourist & Cultural Exchange Visas</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇨🇳</div>
                                <span><strong>China</strong> - Business & Educational Visas</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇸🇬</div>
                                <span><strong>Singapore</strong> - Professional Visit Passes</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🌍</div>
                                <span><strong>Global Network</strong> - 45+ Destination Coverage</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Metrics Section */}
                <div className={styles.metricsSection}>
                    <div className={styles.metricsHeader}>
                        <h3 className={`${styles.metricsTitle} ${colors.primaryDark}`}>
                            Our Track Record of Excellence
                        </h3>
                        <p className={styles.metricsSubtitle}>
                            Quantifying our commitment to successful immigration outcomes
                        </p>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statIconContainer}>
                                <div className={`${styles.iconWrapper} ${colors.bgPrimaryLight}`}>
                                    <span className={styles.icon}>👥</span>
                                </div>
                            </div>
                            <div className={styles.statContent}>
                                <div className={`${styles.statValue} ${colors.primaryBlue}`}>
                                    30+ Years
                                </div>
                                <p className={styles.statDescription}>
                                    Combined professional expertise in immigration consultancy
                                </p>
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statIconContainer}>
                                <div className={`${styles.iconWrapper} ${colors.bgAccent}`}>
                                    <span className={styles.icon}>🌎</span>
                                </div>
                            </div>
                            <div className={styles.statContent}>
                                <div className={`${styles.statValue} ${colors.primaryBlue}`}>
                                    45+ Countries
                                </div>
                                <p className={styles.statDescription}>
                                    Visa assistance across major global destinations
                                </p>
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statIconContainer}>
                                <div className={`${styles.iconWrapper} ${colors.bgSuccess}`}>
                                    <span className={styles.icon}>📋</span>
                                </div>
                            </div>
                            <div className={styles.statContent}>
                                <div className={`${styles.statValue} ${colors.primaryBlue}`}>
                                    20+ Categories
                                </div>
                                <p className={styles.statDescription}>
                                    Specialized visa type expertise and processing
                                </p>
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statIconContainer}>
                                <div className={`${styles.iconWrapper} ${colors.bgPrimaryBlue}`}>
                                    <span className={styles.icon}>✈️</span>
                                </div>
                            </div>
                            <div className={styles.statContent}>
                                <div className={`${styles.statValue} ${colors.primaryBlue}`}>
                                    10,000+
                                </div>
                                <p className={styles.statDescription}>
                                    Successful visa applications and consultations
                                </p>
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statIconContainer}>
                                <div className={`${styles.iconWrapper} ${colors.bgDarkGray}`}>
                                    <span className={styles.icon}>📅</span>
                                </div>
                            </div>
                            <div className={styles.statContent}>
                                <div className={`${styles.statValue} ${colors.primaryBlue}`}>
                                    Since 2017
                                </div>
                                <p className={styles.statDescription}>
                                    Trusted service excellence across India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Badge */}
                {/* <div className={styles.trustBadge}>
                    <div className={styles.trustContent}>
                        <div className={`${styles.trustIcon} ${colors.bgSuccess}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" />
                                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className={styles.trustText}>
                            <strong>Verified & Registered</strong> with Government Immigration Authorities
                        </div>
                    </div>
                </div> */}
            </div>
        </section>

    )
}

export default WhychoosGVI;

