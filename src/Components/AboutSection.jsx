/* app/about/components/AboutSection.jsx */
import styles from './AboutSection.module.css';
import colors from '@/app/styles/colors.module.css';

export default function AboutSection() {
    return (
        <section className={styles.aboutSection} id="aboutUs">
            <div className={styles.sectionContainer}>
                {/* Header */}
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionBadge}>
                        <span className={styles.badgeText}>About Us</span>
                    </div>
                    <h2 className={`${styles.sectionTitle} ${colors.primaryDark}`}>
                        Trusted Visa Consultants in Bangalore Since 2016
                    </h2>

                    <p className={styles.sectionSubtitle}>
                        Expert visa consultancy services for USA, Canada, UK, Schengen, Australia & New Zealand
                    </p>

                </div>

                {/* Content */}
                <div className={styles.contentGrid}>


                    {/* Right Column - Text Content */}
                    <div className={styles.textColumn}>
                        <div className={styles.contentCard}>
                            <h3 className={`${styles.contentTitle} ${colors.primaryBlue}`}>
                                Global Visa Internationals:<br />
                                Best Visa Consultants in Bangalore
                            </h3>

                            <div className={styles.contentBody}>
                                <p className={styles.leadParagraph}>
                                    Global Visa Internationals is a trusted visa consultancy in Bangalore, established in 2016 on Brigade Road.
                                    We help Indian applicants successfully apply for tourist, student and business visas with expert guidance,
                                    high success rates, and end-to-end documentation support.
                                </p>


                                <div className={styles.highlightSection}>
                                    <div className={styles.highlightIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                                            <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className={styles.highlightText}>
                                        Our expertise includes <strong>USA B1/B2 visitor visas</strong>, <strong>Canada tourist visas</strong>,
                                        <strong>UK student visas</strong>, <strong>Schengen visas for Indians</strong>,
                                        <strong>Australia & New Zealand visitor visas</strong>.
                                    </p>

                                </div>



                                <div className={styles.ctaSection}>
                                    <button className={styles.primaryButton}>
                                        <span>Book Free Consultation</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                    <button className={styles.secondaryButton}>
                                        View Success Stories
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Left Column - Image */}
                    <section className={styles.mainGrid}>
                        <section className={styles.stickyFormContainer}>
                            <div className={styles.imageColumn}>


                                <div className={styles.imageContainer}>
                                    <img
                                        src="https://www.globalvisainternationals.com/images/story.webp"
                                        alt="Trusted visa consultants in Bangalore at Global Visa Internationals"
                                        className={styles.mainImage}
                                        loading="lazy"
                                    />
                                    <div className={styles.imageOverlay}>
                                        <div className={styles.overlayContent}>
                                            <div className={styles.statsBadge}>
                                                <span className={styles.statNumber}>10+</span>
                                                <span className={styles.statLabel}>Years Experience</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Indicators */}
                                <div className={styles.trustIndicators}>
                                    <div className={styles.trustItem}>
                                        <div className={`${styles.trustIcon} ${colors.bgPrimaryLight}`}>
                                            ✓
                                        </div>
                                        <span className={styles.trustText}>Verified Consultants</span>
                                    </div>
                                    <div className={styles.trustItem}>
                                        <div className={`${styles.trustIcon} ${colors.bgSuccess}`}>
                                            ★
                                        </div>
                                        <span className={styles.trustText}>98% Success Rate</span>
                                    </div>
                                </div>
                                <div className={styles.expertiseGrid}>
                                    <div className={styles.expertiseItem}>
                                        <div className={styles.expertiseHeader}>
                                            <div className={`${styles.expertiseIcon} ${colors.bgAccent}`}>
                                                🎓
                                            </div>
                                            <h4 className={styles.expertiseTitle}>Study Visa Experts</h4>
                                        </div>
                                        <p className={styles.expertiseDescription}>
                                            University admissions, scholarship guidance, and student visa processing
                                        </p>
                                    </div>

                                    <div className={styles.expertiseItem}>
                                        <div className={styles.expertiseHeader}>
                                            <div className={`${styles.expertiseIcon} ${colors.bgPrimaryBlue}`}>
                                                ✈️
                                            </div>
                                            <h4 className={styles.expertiseTitle}>Tourist & Visitor Visa Experts</h4>
                                        </div>
                                        <p className={styles.expertiseDescription}>
                                            Tourist and visitor visa assistance for sightseeing, family visits, and short-term travel
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </section>
    );
}