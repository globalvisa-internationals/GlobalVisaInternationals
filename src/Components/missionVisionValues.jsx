import React from 'react'
import styles from './missionVisionValues.module.css'

const MissionVisionValues = () => {
    return (
        <section >


            <section className={styles.missionVisionValues}>
                <div className={styles.missionCard}>
                    <img
                        className={styles.custImg}
                        src="/gviVMV/mission-icon.png"
                        alt="Mission Icon"
                        loading="lazy"
                    />
                    <h3>Our Mission</h3>
                    <p>  We aim to simplify international visa and immigration processes  with expert guidance, ethical support, and end-to-end assistance,  empowering students, professionals, and families to achieve  their global aspirations with confidence.</p>
                </div>

                <div className={styles.visionCard}>
                    <img
                        className={styles.custImg}
                        src="/gviVMV/vision-icon.png"
                        alt="Vision Icon"
                        loading="lazy"
                    />
                    <h3>Our Vision</h3>
                    <p>  To be the most trusted and innovative visa consultancy, helping  people overcome borders and create opportunities worldwide  through reliable, transparent, and client-focused solutions.</p>
                </div>

                <div className={styles.valuesCard}>
                    <img
                        className={styles.custImg}
                        src="/gviVMV/values-icon.png"
                        alt="Core Values Icon"
                        loading="lazy"
                    />
                    <h3>Core Values</h3>
                    <p>  Transparency, Client-First, Empathy, Accountability, and a  Global Perspective guide everything we do to support your  international journey.</p>
                </div>
            </section>
        </section>
    )
}

export default MissionVisionValues;