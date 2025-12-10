import React from 'react'
import Styles from '@/Components/Visa.module.css';

export default function privacyPolicy() {
    return (
        <>
            <div className={Styles.VisaSec}>
                <div className={Styles.VisaData}>
                    <section className={Styles.PrivacyPolicy}>
                        <h1 className={Styles.Title}>Privacy Policy</h1>

                        <p>
                            Global Visa Internationals (GVI) is committed to protecting your personal
                            information. This Privacy Policy explains how we collect, use, store, and safeguard
                            your data in accordance with applicable privacy and data-protection regulations.
                        </p>

                        <ol>

                            {/* 1. Information We Collect */}
                            <li>
                                <h2 className={Styles.subTitle}>1. Information We Collect</h2>
                                <p>To provide visa consultancy and related services, we may collect the following:</p>

                                <ul>
                                    <li>
                                        <b className={Styles.strong}>Personal Identification Details:</b>
                                        Name, date of birth, passport number, nationality.
                                    </li>
                                    <li>
                                        <b className={Styles.strong}>Contact Information:</b>
                                        Email address, phone number, residential address.
                                    </li>
                                    <li>
                                        <b className={Styles.strong}>Travel & Visa Details:</b>
                                        Travel history, visa application data, uploaded documents.
                                    </li>
                                    <li>
                                        <b className={Styles.strong}>Educational & Employment Information:</b>
                                        Academic qualifications, employment history (if required).
                                    </li>
                                    <li>
                                        <b className={Styles.strong}>Payment Information:</b>
                                        Billing details, transaction history.
                                    </li>
                                    <li>
                                        <b className={Styles.strong}>Technical Information:</b>
                                        IP address, device details, browser type, and website usage data.
                                    </li>
                                </ul>
                            </li>

                            {/* 2. How We Use Your Information */}
                            <li>
                                <h2 className={Styles.subTitle}>2. How We Use Your Information</h2>

                                <p>Your information may be used to:</p>
                                <ul>
                                    <li>Provide visa guidance, documentation support, and related services.</li>
                                    <li>Communicate updates, application status, and support information.</li>
                                    <li>Verify identity and authenticate provided documents.</li>
                                    <li>Improve our services, processes, and website experience.</li>
                                    <li>Comply with legal, regulatory, and audit requirements.</li>
                                    <li>Prevent fraud, misuse, or unauthorized access.</li>
                                </ul>
                            </li>

                            {/* 3. Data Sharing & Disclosure */}
                            <li>
                                <h2 className={Styles.subTitle}>3. Data Sharing & Disclosure</h2>
                                <p>We do <b>not</b> sell or rent your personal information. However, your data may be shared with:</p>

                                <ul>
                                    <li>
                                        <b className={Styles.strong}>Government & Immigration Authorities:</b>
                                        Embassies, consulates, VFS/VAC centers when required for visa processing.
                                    </li>
                                    <li>
                                        <b className={Styles.strong}>Authorized Service Providers:</b>
                                        Third-party vendors who assist with documentation, verification, or operations
                                        (bound by confidentiality agreements).
                                    </li>
                                    <li>
                                        <b className={Styles.strong}>Legal Compliance:</b>
                                        Law-enforcement or regulatory bodies when required under applicable laws.
                                    </li>
                                </ul>
                            </li>

                            {/* 4. Data Security */}
                            <li>
                                <h2 className={Styles.subTitle}>4. Data Security Measures</h2>

                                <p>We implement strong security safeguards to protect your information, including:</p>

                                <ul>
                                    <li>
                                        <b className={Styles.strong}>Encryption:</b> Secure transmission and encrypted storage of sensitive data.
                                    </li>
                                    <li>
                                        <b className={Styles.strong}>Access Controls:</b> Restricted access based on job role and necessity.
                                    </li>
                                    <li>
                                        <b className={Styles.strong}>Regular Audits:</b> Periodic checks to identify vulnerabilities and enhance security.
                                    </li>
                                    <li>
                                        <b className={Styles.strong}>Employee Training:</b> Staff trained on data protection, confidentiality, and compliance.
                                    </li>
                                </ul>
                            </li>

                            {/* 5. Data Retention */}
                            <li>
                                <h2 className={Styles.subTitle}>5. Data Retention</h2>
                                <p>
                                    Personal information is retained only as long as necessary for the service,
                                    legal compliance, or legitimate business purposes. Once no longer required,
                                    data is securely deleted or anonymized.
                                </p>
                            </li>

                            {/* 6. Your Rights */}
                            <li>
                                <h2 className={Styles.subTitle}>6. Your Rights</h2>

                                <p>You may request the following actions concerning your data:</p>

                                <ul>
                                    <li><b className={Styles.strong}>Access:</b> Obtain a copy of your personal information.</li>
                                    <li><b className={Styles.strong}>Correction:</b> Update or correct inaccurate or incomplete data.</li>
                                    <li><b className={Styles.strong}>Deletion:</b> Request data removal, where legally permitted.</li>
                                    <li><b className={Styles.strong}>Objection:</b> Restrict or object to certain types of processing.</li>
                                </ul>

                                <p>
                                    To exercise your rights, email us at:{" "}
                                    <b>operations@globalvisa-internationals.com</b>
                                </p>
                            </li>

                            {/* 7. Cookies */}
                            <li>
                                <h2 className={Styles.subTitle}>7. Cookies & Tracking Technologies</h2>
                                <p>
                                    Our website may use cookies to improve functionality, enhance user experience,
                                    and analyze performance. You may disable cookies in your browser settings, but
                                    certain website features may not function properly.
                                </p>
                            </li>

                            {/* 8. Third-Party Links */}
                            <li>
                                <h2 className={Styles.subTitle}>8. Third-Party Links</h2>
                                <p>
                                    Our website may include links to external sites. GVI is not responsible for the
                                    content, accuracy, or privacy practices of third-party websites. We recommend
                                    reviewing their policies before sharing any information.
                                </p>
                            </li>

                            {/* 9. Policy Updates */}
                            <li>
                                <h2 className={Styles.subTitle}>9. Changes to This Privacy Policy</h2>
                                <p>
                                    We may revise this Privacy Policy periodically. Updates will be posted on this page
                                    with a revised date. Continued use of our website after changes indicates acceptance.
                                </p>
                            </li>

                            {/* 10. Contact */}
                            <li>
                                <h2 className={Styles.subTitle}>10. Contact Us</h2>
                                <p>
                                    If you have any questions regarding this Privacy Policy or how your data is handled,
                                    you may contact us at:
                                </p>

                                <p>
                                    <b>Global Visa Internationals</b><br />
                                    MG Road, Bangalore, 560025<br />
                                    Email: <b>operations@globalvisa-internationals.com</b>
                                </p>
                            </li>

                        </ol>
                    </section>
                </div>
            </div>
        </>
    )
}
