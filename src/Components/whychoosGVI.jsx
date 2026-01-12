import React from 'react';
import styles from './whychoosGVI.module.css';

const WhychoosGVI = () => {
    return (
        <section className={styles.whyChooseSection} id="why-global-visa-internationals">
            <div className={styles.sectionHeader}>
                <h2>Why Global Visa Internationals Stands Apart</h2>
                <p>
                    With over 11 years of dedicated service, we've refined the art of immigration
                    consultancy into a precise science. Our Bangalore-based team combines extensive
                    experience with innovative approaches to navigate complex visa landscapes.
                </p>
                <p>
                    We serve as strategic partners in your global mobility journey—providing
                    clarity, reducing complexities, and enhancing success probabilities through
                    evidence-based methodologies.
                </p>

            </div>

            {/* Comprehensive Service Offerings */}
            <div className={styles.serviceCards}>
                <div className={styles.serviceCard}>
                    <h3>Comprehensive Visa Solutions</h3>
                    <ul>
                        <li>Student Visa Documentation & Study Abroad Strategy</li>
                        <li>Work Visa Consultation for Career Advancement</li>
                        <li>Tourist & Visitor Visa Processing Excellence</li>
                        <li>Business Travel Visa & Corporate Mobility Support</li>
                        <li>Permanent Residency Pathway Guidance</li>
                        <li>Skilled Migration & Points-Based Applications</li>
                        <li>Family Reunification & Dependent Visa Processing</li>
                        <li>Visa Refusal Analysis & Strategic Reapplication</li>
                        <li>Customized Profile Assessment & Advisory</li>
                    </ul>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Global Destination Expertise</h3>
                    <ul>
                        <li><strong>Canada</strong> - Study, Work, Visitor & Express Entry</li>
                        <li><strong>Australia</strong> - Skilled Migration & PR Pathways</li>
                        <li><strong>United Kingdom</strong> - Student & Business Visas</li>
                        <li><strong>United States</strong> - Visitor & Academic Visas</li>
                        <li><strong>Europe</strong> - Schengen Area Visa Assistance</li>
                        <li><strong>Japan</strong> - Tourist & Cultural Exchange Visas</li>
                        <li><strong>China</strong> - Business & Educational Visas</li>
                        <li><strong>Singapore</strong> - Professional Visit Passes</li>
                        <li><strong>Global Network</strong> - 45+ Destination Coverage</li>
                    </ul>
                </div>
            </div>

            {/* Metrics of Excellence */}
            <div className={styles.statsGrid}>
                <div className={styles.statCard} style={{ '--animation-order': 1 }}>
                    <div className={styles.statIcon}>
                        <img src="https://www.globalvisainternationals.com/images/networking.png" alt="Professional Experience" />
                    </div>
                    <div className={styles.statValue}>30+ Years</div>
                    <p className={styles.statDescription}>
                        Combined professional expertise in immigration consultancy
                    </p>
                </div>

                <div className={styles.statCard} style={{ '--animation-order': 2 }}>
                    <div className={styles.statIcon}>
                        <img src="https://www.globalvisainternationals.com/images/globe.png" alt="Global Coverage" />
                    </div>
                    <div className={styles.statValue}>45+ Countries</div>
                    <p className={styles.statDescription}>
                        Visa assistance across major global destinations
                    </p>
                </div>

                <div className={styles.statCard} style={{ '--animation-order': 3 }}>
                    <div className={styles.statIcon}>
                        <img src="https://www.globalvisainternationals.com/images/crowd-of-users.png" alt="Visa Categories" />
                    </div>
                    <div className={styles.statValue}>20+ Categories</div>
                    <p className={styles.statDescription}>
                        Specialized visa type expertise and processing
                    </p>
                </div>

                <div className={styles.statCard} style={{ '--animation-order': 4 }}>
                    <div className={styles.statIcon}>
                        <img src="https://www.globalvisainternationals.com/images/airplane.png" alt="Applications Processed" />
                    </div>
                    <div className={styles.statValue}>10,000+</div>
                    <p className={styles.statDescription}>
                        Successful visa applications and consultations
                    </p>
                </div>

                <div className={styles.statCard} style={{ '--animation-order': 5 }}>
                    <div className={styles.statIcon}>
                        <img src="https://www.globalvisainternationals.com/images/calendar.png" alt="Years Established" />
                    </div>
                    <div className={styles.statValue}>Since 2017</div>
                    <p className={styles.statDescription}>
                        Trusted service excellence across India
                    </p>
                </div>
            </div>
        </section>

    )
}

export default WhychoosGVI;