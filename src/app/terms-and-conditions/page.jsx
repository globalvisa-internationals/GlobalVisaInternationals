import React from 'react';
import Styles from '@/Components/Visa.module.css';

export default function TermsAndConditions() {
    return (
        <div className={Styles.VisaSec}>
            <div className={Styles.VisaData}>
                <div className={Styles.TermsAndConditions}>

                    <h1 className={Styles.Title}>Terms &amp; Conditions</h1>

                    {/* 1. Disclaimer */}
                    <h2 className={Styles.Title}>1. Disclaimer</h2>
                    <div className={Styles.sectionCard}>
                        <p>Global Visa Internationals (Global Visa Internationals) is an independent private consultancy. We are not affiliated with any government, immigration authority, embassy, or consulate.</p>
                        <p>We provide visa guidance, documentation support, evaluation, and concierge services for a service fee.</p>
                        <p>We are not a law firm and do not provide legal advice. Information on our website is for general guidance only.</p>
                        <p>By accessing our website or using our services, you confirm that you understand and agree to these Terms &amp; Conditions.</p>
                    </div>

                    {/* 2. Intellectual Property */}
                    <h2 className={Styles.Title}>2. Intellectual Property</h2>
                    <div className={Styles.sectionCard}>
                        <p>All website content, design, graphics, data, logos, and other materials on globalvisainternationals.com are the exclusive intellectual property of Global Visa Internationals unless stated otherwise.</p>
                        <p>Copying, distributing, or reproducing any material without written permission is strictly prohibited.</p>
                    </div>

                    {/* 3. Payment Policy */}
                    <h2 className={Styles.Title}>3. Payment Policy &amp; Service Scope</h2>
                    <div className={Styles.sectionCard}>
                        <p>All payments made to Global Visa Internationals are for consultancy, assessment, and documentation support only.</p>
                        <p>Applicants are responsible for paying third-party fees directly to the respective authorities, including but not limited to:</p>
                        <ul>
                            <li>Visa application fees</li>
                            <li>VFS / VAC charges</li>
                            <li>Embassy or government fees</li>
                            <li>Courier, biometric, medical, and insurance charges</li>
                        </ul>
                        <p>Global Visa Internationals has no control over government or third-party pricing, processing times, or decisions.</p>
                    </div>

                    {/* 4. Refund Policy */}
                    <h2 className={Styles.Title}>4. Refund Policy</h2>
                    <div className={Styles.sectionCard}>
                        <p>Service fees paid to Global Visa Internationals are strictly non-refundable under all circumstances.</p>

                        <h3>4.1 Non-Refundable Situations</h3>
                        <ul>
                            <li>If you cancel, change your mind, or do not wish to continue with the service.</li>
                            <li>Failure to clear medical examination, PCC, or background checks.</li>
                            <li>Failure to provide genuine or complete documents.</li>
                            <li>Submission of fraudulent or unverifiable documents.</li>
                            <li>Prior immigration violations.</li>
                            <li>Late submission of documents requested by Global Visa Internationals.</li>
                            <li>Natural calamities, pandemics, or unforeseen events.</li>
                            <li>Rejection or refusal by the embassy/immigration authority.</li>
                        </ul>

                        <p>Government, embassy, VFS, or third-party fees are never refundable.</p>

                        {/* 4.2 Removed completely as requested */}
                    </div>

                    {/* 5. Cancellation Policy */}
                    <h2 className={Styles.Title}>5. Cancellation Policy</h2>
                    <div className={Styles.sectionCard}>
                        <p>Once payment is made, GVI’s service fees become non-refundable, even if the applicant withdraws voluntarily.</p>
                        <p>Applicants who cancel may reuse the paid service credit at a later date for the same applicant and same visa type only (subject to current pricing and policies).</p>
                    </div>

                    {/* 6. Limitation of Liability */}
                    <h2 className={Styles.Title}>6. Limitation of Liability</h2>
                    <div className={Styles.sectionCard}>
                        <p>Global Visa Internationals relies entirely on the information and documents provided by the applicant. Applicants are solely responsible for the accuracy and completeness of all submitted details.</p>
                        <p>The final decision to approve or refuse a visa is made exclusively by the respective embassy or immigration authority.</p>
                        <p>Global Visa Internationals cannot influence, guarantee, or expedite visa outcomes.</p>
                        <p>Global Visa Internationals is not responsible for delays, administrative reviews, rule changes, system issues, or any loss arising from the use of our services.</p>
                    </div>

                    {/* 7. Product & Service Policies */}
                    <h2 className={Styles.Title}>7. Product &amp; Service Policies</h2>

                    <div className={Styles.sectionCard}>
                        <h3>7.1 Technical Evaluation</h3>
                        <p>Evaluation reports are delivered within 48 hours of receiving complete information.</p>
                        <p>This service is 100% non-returnable and non-refundable.</p>

                        <h3>7.2 Full Service</h3>
                        <p>Global Visa Internationals provides end-to-end consultancy and documentation guidance.</p>
                        <p>All work is performed from our India back office.</p>

                        {/* Removed refund mentions as per request */}

                        <h3>7.3 DIY Kits, Guides &amp; Directories</h3>
                        <p>All downloadable products are non-refundable. Unauthorized copying or resale will result in legal action.</p>

                        <h3>7.4 Requisition Forms</h3>
                        <p>We may provide downloadable forms published by government authorities. We do not claim copyright over such materials.</p>
                    </div>

                    {/* 8. Shipping / Delivery Policy */}
                    <h2 className={Styles.Title}>8. Shipping / Delivery Policy</h2>
                    <div className={Styles.sectionCard}>
                        <p>Most digital products and documents are delivered instantly. If there are technical issues, files will be delivered via email.</p>
                        {/* Refund statement removed */}
                    </div>

                    {/* 9. Warranty Disclaimer */}
                    <h2 className={Styles.Title}>9. Warranty Disclaimer</h2>
                    <div className={Styles.sectionCard}>
                        <p>All website content, products, and services are provided “as is” without any warranties. We do not guarantee uninterrupted access, error-free service, or virus-free systems.</p>
                    </div>

                    {/* 10. Website Links */}
                    <h2 className={Styles.Title}>10. Website Links</h2>
                    <div className={Styles.sectionCard}>
                        <p>External links may appear on our website. Global Visa Internationals is not responsible for the content, accuracy, or security of third-party websites.</p>
                    </div>

                    {/* 11. Data Protection */}
                    <h2 className={Styles.Title}>11. Data Protection &amp; Privacy</h2>
                    <div className={Styles.sectionCard}>
                        <p>Global Visa Internationals adheres to standard data-protection principles.</p>

                        <h3>Information We Collect</h3>
                        <ul>
                            <li>Personal details</li>
                            <li>Education and employment information</li>
                            <li>Financial information when required</li>
                            <li>System usage data</li>
                            <li>Landing page and website form submissions</li>
                        </ul>

                        <h3>How We Use Your Information</h3>
                        <ul>
                            <li>To perform our services</li>
                            <li>To meet legal/compliance requirements</li>
                            <li>Customer support & WhatsApp notifications</li>
                            <li>Fraud prevention and analysis</li>
                            <li>To cooperate with law enforcement when required</li>
                        </ul>

                        <h3>Data Security</h3>
                        <p>Access is limited to authorized personnel. Security measures are used to prevent unauthorized access or misuse.</p>
                    </div>

                    {/* 12. Your Rights */}
                    <h2 className={Styles.Title}>12. Your Rights</h2>
                    <div className={Styles.sectionCard}>
                        <p>You may request access, correction, deletion (where permitted), or restriction of your personal data.</p>
                        <p>To exercise your rights, email: <strong>operations@globalvisainternationals.com</strong></p>
                    </div>

                    {/* 13. Referral */}
                    <h2 className={Styles.Title}>13. Referral Program Terms</h2>
                    <div className={Styles.sectionCard}>
                        <p>Eligibility depends on internal criteria. Global Visa Internationals will contact the referred person directly. If the person already exists in our system, the referral is invalid. Terms may change anytime.</p>
                    </div>

                    {/* 14. Amendments */}
                    <h2 className={Styles.Title}>14. Amendments</h2>
                    <div className={Styles.sectionCard}>
                        <p>Global Visa Internationals may update these Terms &amp; Conditions at any time. Continued use of our services implies acceptance of updates.</p>
                    </div>

                    {/* 15. Jurisdiction */}
                    <h2 className={Styles.Title}>15. Jurisdiction</h2>
                    <div className={Styles.sectionCard}>
                        <p>All disputes fall under the exclusive jurisdiction of the <strong>Karnataka Courts, India</strong>.</p>
                    </div>

                </div>
            </div>

        </div>
    );
}