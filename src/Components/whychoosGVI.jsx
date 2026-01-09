import React from 'react';
import styles from './whychoosGVI.module.css';

const WhychoosGVI = () => {
    return (
        <section
            className={styles.whyChooseContainer}
            id="why-global-visa-internationals"
        >
            <h2 className={styles.subtitle}>
                Why Choose Global Visa Internationals for Visa Assistance?
            </h2>

            <p>
                Global Visa Internationals is a Bangalore-based visa and immigration consultancy
                providing structured guidance for study, work, tourist, business, and permanent
                residency visa applications. With over 11 years of operational experience, we
                have assisted thousands of applicants through documentation review, eligibility
                assessment, and application preparation across multiple visa categories.
            </p>

            <p>
                Global Visa Internationals is a private consultancy and is not affiliated with
                any embassy, consulate, or government authority. Visa decisions are made solely
                by the respective immigration authorities. Our role is to help applicants
                understand requirements, reduce documentation errors, and follow the correct
                application process.
            </p>

            <div className={styles.serviceCards}>
                <div className={styles.serviceCard}>
                    <h3>Visa Services Offered</h3>
                    <ul>
                        <li>Student visa documentation and study abroad guidance</li>
                        <li>Work visa consultation for skilled professionals</li>
                        <li>Tourist and visitor visa assistance for Indian citizens</li>
                        <li>Business travel visa documentation support</li>
                        <li>Permanent Residency (PR) visa guidance</li>
                        <li>Skilled migration visa assistance</li>
                        <li>Spouse and dependent visa applications</li>
                        <li>Refused visa review and reapplication support</li>
                        <li>Profile-based visa advisory solutions</li>
                    </ul>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Countries We Assist With Visa Applications</h3>
                    <ul>
                        <li>Canada – Study, Work, Visitor, and PR visas</li>
                        <li>Australia – Skilled migration and PR visas</li>
                        <li>United Kingdom – Student and visitor visas</li>
                        <li>United States – Visitor and student visa guidance</li>
                        <li>Europe – Schengen visa assistance</li>
                        <li>Japan – Tourist visa assistance</li>
                        <li>China – Tourist and business visas</li>
                        <li>Singapore – Short-term visitor visas</li>
                        <li>Additional global destinations based on eligibility</li>
                    </ul>
                </div>
            </div>
            <div className={styles.whyGrid}>
                <div className={styles.whyCard}>
                    <img
                        className={styles.whyImg}
                        src="https://www.globalvisainternationals.com/images/networking.png"
                        alt="Visa and immigration consulting experience"
                        loading="lazy"
                    />
                    <strong>30+ Years</strong>
                    <p>
                        Combined professional experience of visa and immigration consultants
                    </p>
                </div>

                <div className={styles.whyCard}>
                    <img
                        className={styles.whyImg}
                        src="https://www.globalvisainternationals.com/images/globe.png"
                        alt="Countries supported for visa assistance"
                        loading="lazy"
                    />
                    <strong>45+ Countries</strong>
                    <p>
                        Visa assistance for study, tourist, work, and permanent residency categories
                    </p>
                </div>

                <div className={styles.whyCard}>
                    <img
                        className={styles.whyImg}
                        src="https://www.globalvisainternationals.com/images/crowd-of-users.png"
                        alt="Visa categories supported"
                        loading="lazy"
                    />
                    <strong>20+ Visa Categories</strong>
                    <p>
                        Including student, skilled migration, business, and dependent visas
                    </p>
                </div>

                <div className={styles.whyCard}>
                    <img
                        className={styles.whyImg}
                        src="https://www.globalvisainternationals.com/images/airplane.png"
                        alt="Visa applications assisted"
                        loading="lazy"
                    />
                    <strong>10,000+</strong>
                    <p>
                        Visa and immigration applications assisted for applicants worldwide
                    </p>
                </div>

                <div className={styles.whyCard}>
                    <img
                        className={styles.whyImg}
                        src="https://www.globalvisainternationals.com/images/calendar.png"
                        alt="Visa consultancy established year"
                        loading="lazy"
                    />
                    <strong>Since 2017</strong>
                    <p>
                        Operating as a private visa consultancy serving applicants across India
                    </p>
                </div>
            </div>

        </section>

    )
}

export default WhychoosGVI;