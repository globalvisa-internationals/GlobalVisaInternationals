import React from 'react';
import Head from 'next/head';
import styles from './missionVisionValues.module.css';

const MissionVisionValues = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Global Visa Internationals",
        "url": "https://www.globalvisainternationals.com",
        "description": "Global Visa Internationals simplifies visa and immigration processes with transparent, client-first guidance.",
        "brandValues": [
            "Transparency",
            "Empathy",
            "Accountability",
            "Global Perspective"
        ]
    };

    return (
        <>


            <section className={styles.missionVisionValues}>
                <div className={styles.missionCard}>
                    <img
                        className={styles.custImg}
                        src="/gviVMV/mission-icon.png"
                        alt="Mission of Global Visa Internationals"
                        loading="lazy"
                    />
                    <h3>Our Mission as Visa Consultants</h3>
                    <p>
                        Our mission is to provide clear and ethical visa and immigration guidance by
                        assisting applicants with documentation, eligibility assessment, and
                        application support. We focus on helping students, professionals, and
                        families navigate international visa processes with accuracy and clarity.
                    </p>
                </div>

                <div className={styles.visionCard}>
                    <img
                        className={styles.custImg}
                        src="/gviVMV/vision-icon.png"
                        alt="Vision of Global Visa Internationals"
                        loading="lazy"
                    />
                    <h3>Our Vision for Global Visa Services</h3>
                    <p>
                        Our vision is to be a reliable visa consultancy recognized for transparent
                        processes, compliance with immigration regulations, and consistent client
                        support across multiple countries and visa categories.
                    </p>
                </div>

                <div className={styles.valuesCard}>
                    <img
                        className={styles.custImg}
                        src="/gviVMV/values-icon.png"
                        alt="Core values of Global Visa Internationals"
                        loading="lazy"
                    />
                    <h3>Our Core Values in Visa Consultancy</h3>
                    <p>
                        Transparency, accountability, empathy, and a client-first approach guide our
                        work. We prioritize accuracy, ethical advisory practices, and respect for
                        the regulations set by immigration authorities.
                    </p>
                </div>
            </section>

        </>
    );
};

export default MissionVisionValues;
