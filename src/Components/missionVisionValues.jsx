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
            <Head>
                <title>Our Mission, Vision & Core Values | Global Visa Internationals</title>
                <meta name="description" content="Discover Global Visa Internationals' mission, vision, and values — transparency, empathy, and client-first guidance for your global immigration journey." />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            </Head>

            <section className={styles.missionVisionValues}>
                <div className={styles.missionCard}>
                    <img
                        className={styles.custImg}
                        src="/gviVMV/mission-icon.png"
                        alt="Global Visa Internationals Mission Icon"
                        loading="lazy"
                    />
                    <h3>Our Mission</h3>
                    <p>    We aim to simplify international visa and immigration processes with expert    guidance, ethical support, and end-to-end assistance, empowering students,    professionals, and families to achieve their global aspirations with confidence.</p>
                </div>

                <div className={styles.visionCard}>
                    <img
                        className={styles.custImg}
                        src="/gviVMV/vision-icon.png"
                        alt="Global Visa Internationals Vision Icon"
                        loading="lazy"
                    />
                    <h3>Our Vision</h3>
                    <p>    To be the most trusted and innovative visa consultancy, helping people overcome    borders and create opportunities worldwide through reliable, transparent, and    client-focused solutions.</p>
                </div>

                <div className={styles.valuesCard}>
                    <img
                        className={styles.custImg}
                        src="/gviVMV/values-icon.png"
                        alt="Global Visa Internationals Core Values Icon"
                        loading="lazy"
                    />
                    <h3>Core Values</h3>
                    <p>    Transparency, Client-First, Empathy, Accountability, and a Global Perspective guide    everything we do to support your international journey.</p>
                </div>
            </section>
        </>
    );
};

export default MissionVisionValues;
