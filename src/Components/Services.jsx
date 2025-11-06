'use client';
import React from 'react';
import styles from './Services.module.css';

const Services = () => {
    return (
        <>

            <section className={styles.services}>

                <div className={styles.visaCard}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <div className={styles.top1}>
                                <img src="/svg/Tourist-Visa.webp" alt="Tourist Visa" />
                                <h3>Tourist Visa</h3>
                            </div>
                            <div className={styles.top2}>Quick & hassle-free tourist visa assistance.</div>
                        </div>
                        <div className={styles.cardBack}>
                            <h3>Tourist Visa</h3>
                            <ul>
                                <li><a href="/Visa/tourist-visa/canada">CANADA</a></li>
                                <li><a href="/Visa/tourist-visa/australia">AUSTRALIA</a></li>
                                <li><a href="/Visa/tourist-visa/usa">USA</a></li>
                                <li><a href="/Visa/tourist-visa/united-kingdom">UK</a></li>
                                <li><a href="/Visa/tourist-visa/europe">EUROPE</a></li>
                                <li><a href="/Visa/tourist-visa/japan">JAPAN</a></li>
                                <li><a href="/Visa/tourist-visa/dubai">DUBAI</a></li>
                                <li><a href="/Visa/tourist-visa/singapore">SINGAPORE</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Business Visa */}
                <div className={styles.visaCard}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <div className={styles.top1}>
                                <img src="/svg/business-visa.webp" alt="Business Visa" />
                                <h3>Business Visa</h3>
                            </div>
                            <div className={styles.top2}>Professional support for business visas.</div>
                        </div>
                        <div className={styles.cardBack}>
                            <h3>Business Visa</h3>
                            <ul>
                                <li><a href="/Visa/business-visa/canada">CANADA</a></li>
                                <li><a href="/Visa/business-visa/australia">AUSTRALIA</a></li>
                                <li><a href="/Visa/business-visa/uk">UK</a></li>
                                <li><a href="/Visa/business-visa/europe">EUROPE</a></li>
                                <li><a href="/Visa/business-visa/new-zealand">NEW-ZEALAND</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* PR Visa */}
                <div className={styles.visaCard}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <div className={styles.top1}>
                                <img src="/svg/PR-Visa.webp" alt="PR Visa" />
                                <h3>PR Visa</h3>
                            </div>
                            <div className={styles.top2}>Guidance for permanent residency visas.</div>
                        </div>
                        <div className={styles.cardBack}>
                            <h3>PR Visa</h3>
                            <ul>
                                <li><a href="/Visa/permanent-residency-visa/canada-pr-visa">CANADA</a></li>
                                <li><a href="/Visa/permanent-residency-visa/australia-pr-visa">AUSTRALIA</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Student Visa */}
                <div className={styles.visaCard}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <div className={styles.top1}>
                                <img src="/svg/student-visa.webp" alt="Student Visa" />
                                <h3>Student Visa</h3>
                            </div>
                            <div className={styles.top2}>Study abroad made simple and fast.</div>
                        </div>
                        <div className={styles.cardBack}>
                            <h3>Student Visa</h3>
                            <ul>
                                <li><a href="/Visa/student-visa/canada">CANADA</a></li>
                                <li><a href="/Visa/student-visa/australia">AUSTRALIA</a></li>
                                <li><a href="/Visa/student-visa/usa">USA</a></li>
                                <li><a href="/Visa/student-visa/uk">UK</a></li>
                                <li><a href="/Visa/student-visa/europe">EUROPE</a></li>
                                <li><a href="/Visa/student-visa/new-zealand">NEW-ZEALAND</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Dependent Visa */}
                <div className={styles.visaCard}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <div className={styles.top1}>
                                <img src="/svg/Dependent Visa.webp" alt="Dependent Visa" />
                                <h3>Dependent Visa</h3>
                            </div>
                            <div className={styles.top2}>Bring your family to live with you abroad.</div>
                        </div>
                        <div className={styles.cardBack}>
                            <h3>Dependent Visa</h3>
                            <ul>
                                <li><a href="/Visa/Dependent/canada">CANADA</a></li>
                                <li><a href="/Visa/Dependent/australia">AUSTRALIA</a></li>
                                <li><a href="/Visa/Dependent/uk">UK</a></li>
                                <li><a href="/Visa/Dependent/europe">EUROPE</a></li>
                                <li><a href="/Visa/Dependent/new-zealand">NEW-ZEALAND</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Refusal Visa */}
                <div className={styles.visaCard}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                            <div className={styles.top1}>
                                <img src="/svg/refusal visa.webp" alt="Refusal Visa" />
                                <h3>Refusal Visa</h3>
                            </div>
                            <div className={styles.top2}>Get expert help to overcome visa refusals.</div>
                        </div>
                        <div className={styles.cardBack}>
                            <h3>Refusal Visa</h3>
                            <ul>
                                <li><a href="/Visa/refusal-visa/canada">CANADA</a></li>
                                <li><a href="/Visa/refusal-visa/australia">AUSTRALIA</a></li>
                                <li><a href="/Visa/refusal-visa/usa">USA</a></li>
                                <li><a href="/Visa/refusal-visa/uk">UK</a></li>
                                <li><a href="/Visa/refusal-visa/europe">EUROPE</a></li>
                                <li><a href="/Visa/refusal-visa/japan">JAPAN</a></li>
                                <li><a href="/Visa/refusal-visa/dubai">DUBAI</a></li>
                                <li><a href="/Visa/refusal-visa/singapore">SINGAPORE</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Services;