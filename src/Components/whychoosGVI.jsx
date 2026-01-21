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
                        Why We Are One of the Best Visa Consultants in Bangalore
                    </h2>
                    <div className={styles.headerContent}>
                        <p className={styles.leadText}>
                            With over 11+ years of experience as trusted visa consultants in Bangalore,
                            Global Visa Internationals has helped thousands of Indian applicants successfully
                            secure visas for top global destinations with a proven, transparent process.
                        </p>

                        <p className={styles.subText}>
                            From first-time travellers to international students and business visitors,
                            we provide end-to-end visa guidance, accurate documentation support,
                            and expert interview preparation to minimise rejection risks.
                        </p>

                    </div>
                </div>

                {/* Services Grid */}
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
                                Complete Visa Services Under One Roof
                            </h3>
                        </div>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Student Visa Documentation & University Application Support</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Tourist & Visitor Visa Processing for Indians</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Business Visa Assistance for International Travel</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Permanent Residency Guidance (Canada, Australia, UK)</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Family & Dependent Visa Applications</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Visa Refusal Review & Reapplication Strategy</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.checkmark}></div>
                                <span>Profile Evaluation & Country Eligibility Check</span>
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
                                Top Visa Destinations We Specialise In
                            </h3>
                        </div>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇨🇦</div>
                                <span><strong>Canada</strong> - Tourist, Student & PR Visa Consultants</span>                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇦🇺</div>
                                <span><strong>Australia</strong> - Visitor & Permanent Residency Services</span>                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇬🇧</div>
                                <span><strong>United Kingdom</strong> - UK Student & Tourist Visa Experts</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇺🇸</div>
                                <span><strong>United States</strong> - USA B1/B2 Visitor Visa Assistance</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇪🇺</div>
                                <span><strong>Europe</strong> - Schengen Visa for Indian Citizens</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇯🇵</div>
                                <span><strong>Japan</strong> - Tourist & Short-Term Visa Processing</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇨🇳</div>
                                <span><strong>China</strong> - Business & Visitor Visa Services</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🇸🇬</div>
                                <span><strong>Singapore</strong> - Short-Term Visit Pass Support</span>
                            </li>
                            <li className={styles.serviceItem}>
                                <div className={styles.flagIcon}>🌍</div>
                                <span><strong>Global</strong> - Visa Services for 45+ Countries</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Metrics Section */}
                <div className={styles.metricsSection}>
                    <div className={styles.metricsHeader}>
                        <h3 className={`${styles.metricsTitle} ${colors.primaryDark}`}>
                            Proven Results as Leading Visa Consultants in Bangalore
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
                                    75,000+
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
                                    Since 2016
                                </div>
                                <p className={styles.statDescription}>
                                    Trusted service excellence across India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>

    )
}

export default WhychoosGVI;

