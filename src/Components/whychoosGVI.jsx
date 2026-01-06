import React from 'react';
import styles from './whychoosGVI.module.css';

const WhychoosGVI = () => {
    return (
        <section className={styles.whyChooseContainer} id="why-global-visa-internationals">
            <h2 className={styles.subtitle}>Why Global Visa Internationals?</h2>

            <p>At <strong>Global Visa Internationals</strong>, we specialize in comprehensive visa consultation services, helping individuals and families successfully navigate the complex visa process for over 11+ years. Based in Bangalore, we've processed 55,000+ visas and conducted over 75,000 expert consultations across major visa categories.</p>

            <p>While we do not issue visas or represent any government body, our certified consultants offer personalized advisory, documentation support, and eligibility guidance for all visa types.</p>

            <div className={styles.serviceCards}>
                <div className={styles.serviceCard}>
                    <h3>Our Services Include:</h3>
                    <ul>
                        <li>Student Visa Assistance & Study Abroad Planning</li>
                        <li>Work Visa Consultation for Professionals</li>
                        <li>Tourist & Visitor Visa Assistance for Indian Citizens</li>
                        <li>Business Travel Visa Assistance</li>
                        <li>Permanent Residency (PR) Visa Guidance</li>
                        <li>Skilled Migration Visa Support</li>
                        <li>Spouse & Dependent Visa Assistance</li>
                        <li>Refused Visa Reapplication & Review Services</li>
                        <li>And more customized solutions…</li>
                    </ul>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Popular Visa Destinations:</h3>
                    <ul>
                        <li>Canada Visa Assistance – Study, Work, PR</li>
                        <li>Australia PR Visa Consulting</li>
                        <li>UK Student Visa Assistance</li>
                        <li>USA Visitor & Student Visa Guidance</li>
                        <li>Europe Schengen Visa Assistance</li>
                        <li>Japan Tourist Visa Assistance</li>
                        <li>China Tourist Business Visa Assistance</li>
                        <li>Singapore Tourist Visa Assistance</li>
                        <li>And many more global destinations…</li>
                    </ul>
                </div>
            </div>


            <div className={styles.whyGrid}>
                <div className={styles.whyCard}>
                    <img
                        className={styles.whyImg}
                        src="https://www.globalvisainternationals.com/images/networking.png"
                        alt="Visa and immigration industry experience"
                        loading="lazy"
                    />
                    <strong>75+</strong>
                    <p>Years of combined visa & immigration industry experience</p>
                </div>

                <div className={styles.whyCard}>
                    <img
                        className={styles.whyImg}
                        src="https://www.globalvisainternationals.com/images/globe.png"
                        alt="Immigration destinations offered"
                        loading="lazy"
                    />
                    <strong>15+</strong>
                    <p>Countries offered for Study, Tourist, Visitor & PR immigration services</p>
                </div>

                <div className={styles.whyCard}>
                    <img
                        className={styles.whyImg}
                        src="https://www.globalvisainternationals.com/images/crowd-of-users.png"
                        alt="Skilled migration and business visa options"
                        loading="lazy"
                    />
                    <strong>50+</strong>
                    <p>Visa options including skilled migration & business visas</p>
                </div>

                <div className={styles.whyCard}>
                    <img
                        className={styles.whyImg}
                        src="https://www.globalvisainternationals.com/images/airplane.png"
                        alt="Successful immigration cases"
                        loading="lazy"
                    />
                    <strong>35,000+</strong>
                    <p>Successful visa & immigration cases processed worldwide</p>
                </div>

                <div className={styles.whyCard}>
                    <img
                        className={styles.whyImg}
                        src="https://www.globalvisainternationals.com/images/calendar.png"
                        alt="Visa consultancy since 2017"
                        loading="lazy"
                    />
                    <strong>Since 2017</strong>
                    <p>Over a decade of visa consulting excellence in India</p>
                </div>
            </div>

        </section>
    )
}

export default WhychoosGVI;