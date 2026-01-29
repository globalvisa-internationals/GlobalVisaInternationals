import React from "react";
import styles from "./HeroSection.module.css";
import { FaCheckCircle, FaStar, FaMapMarkerAlt, FaArrowRight, FaPlayCircle } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            {/* Background Elements */}
            <div className={styles.backgroundElements}>
                <div className={styles.worldMapAnimation}>
                    <img
                        src="https://www.globalvisainternationals.com/svg/World-Map.gif"
                        alt="World Map Animation"
                        className={styles.worldMap}
                    />
                </div>
                <div className={styles.floatingIcons}>
                    <div className={styles.floatingIcon} style={{ top: '20%', left: '10%' }}>🇺🇸</div>
                    <div className={styles.floatingIcon} style={{ top: '30%', right: '15%' }}>🇨🇦</div>
                    <div className={styles.floatingIcon} style={{ top: '60%', left: '15%' }}>🇬🇧</div>
                    <div className={styles.floatingIcon} style={{ top: '40%', right: '8%' }}>🇦🇺</div>
                    <div className={styles.floatingIcon} style={{ top: '70%', right: '20%' }}>🇪🇺</div>
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.heroContainer}>
                <div className={styles.contentGrid}>
                    {/* Left Column - Main Message */}
                    <div className={styles.mainContent}>
                        <div className={styles.badge}>
                            <FaStar className={styles.badgeIcon} />
                            <span>Trusted Visa Experts Since 2016</span>
                        </div>

                        <h1 className={styles.headline}>
                            Your Global Journey
                            <span className={styles.highlight}> Starts Here</span>
                        </h1>

                        <h2 className={styles.subHeadline}>
                            Premier Visa Consultancy in Bangalore for
                            <span className={styles.countryHighlight}> USA</span>,
                            <span className={styles.countryHighlight}> Canada</span>,
                            <span className={styles.countryHighlight}> UK</span> &
                            <span className={styles.countryHighlight}> Schengen</span> Visas
                        </h2>

                        <p className={styles.description}>
                            With 8+ years of expertise, we've successfully guided over 5,000 clients
                            through complex visa processes. Your passport to global opportunities begins
                            with our certified immigration consultants.
                        </p>

                        {/* Stats Bar */}
                        <div className={styles.statsBar}>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>8+</div>
                                <div className={styles.statLabel}>Years Experience</div>
                            </div>
                            <div className={styles.statDivider}></div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>5K+</div>
                                <div className={styles.statLabel}>Successful Visas</div>
                            </div>
                            <div className={styles.statDivider}></div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>98%</div>
                                <div className={styles.statLabel}>Success Rate</div>
                            </div>
                            <div className={styles.statDivider}></div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>24/7</div>
                                <div className={styles.statLabel}>Support</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className={styles.ctaButtons}>
                            <a href="#consultation" className={styles.primaryButton}>
                                <span>Get Free Consultation</span>
                                <FaArrowRight className={styles.buttonIcon} />
                            </a>
                            <a href="#testimonials" className={styles.secondaryButton}>
                                <FaPlayCircle className={styles.buttonIcon} />
                                <span>Watch Success Stories</span>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className={styles.trustIndicators}>
                            <div className={styles.trustItem}>
                                <FaCheckCircle className={styles.checkIcon} />
                                <span>Licensed Immigration Consultants</span>
                            </div>
                            <div className={styles.trustItem}>
                                <FaCheckCircle className={styles.checkIcon} />
                                <span>Transparent Process & Pricing</span>
                            </div>
                            <div className={styles.trustItem}>
                                <FaCheckCircle className={styles.checkIcon} />
                                <span>Personalized Case Handling</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Logo Card */}
                    <div className={styles.logoCard}>
                        <div className={styles.logoContent}>
                            <div className={styles.logoWrapper}>
                                <img
                                    src="https://www.globalvisainternationals.com/Global-Visa-Internationals-Logo.svg"
                                    alt="Global Visa Internationals Logo"
                                    className={styles.logoImage}
                                />
                                <div className={styles.locationTag}>
                                    <FaMapMarkerAlt className={styles.locationIcon} />
                                    <span>Bangalore, India</span>
                                </div>
                            </div>

                            <div className={styles.featureList}>
                                <h3 className={styles.featureTitle}>Why Choose Us?</h3>
                                <ul className={styles.features}>
                                    <li>
                                        <FaCheckCircle className={styles.featureIcon} />
                                        <span>End-to-End Visa Processing</span>
                                    </li>
                                    <li>
                                        <FaCheckCircle className={styles.featureIcon} />
                                        <span>Document Verification & Preparation</span>
                                    </li>
                                    <li>
                                        <FaCheckCircle className={styles.featureIcon} />
                                        <span>Mock Interviews & Training</span>
                                    </li>
                                    <li>
                                        <FaCheckCircle className={styles.featureIcon} />
                                        <span>Post-Visa Relocation Support</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.awardBadge}>
                                <div className={styles.awardIcon}>🏆</div>
                                <div className={styles.awardText}>
                                    <div>Certified Immigration</div>
                                    <div>Consultancy Award 2023</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrolling Countries Banner */}
            <div className={styles.countriesBanner}>
                <div className={styles.bannerContent}>
                    <span className={styles.bannerTitle}>We Specialize In:</span>
                    <div className={styles.countryTags}>
                        {['USA 🇺🇸', 'Canada 🇨🇦', 'UK 🇬🇧', 'Australia 🇦🇺',
                            'Germany 🇩🇪', 'France 🇫🇷', 'Italy 🇮🇹', 'Spain 🇪🇸',
                            'Singapore 🇸🇬', 'Dubai 🇦🇪', 'New Zealand 🇳🇿', 'Japan 🇯🇵'].map((country, index) => (
                                <span key={index} className={styles.countryTag}>
                                    {country}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}