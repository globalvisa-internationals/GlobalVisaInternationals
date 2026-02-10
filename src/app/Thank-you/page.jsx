import React from 'react';
import Head from 'next/head';
import styles from './Thank-you.module.css';

const ThankYouPage = () => {
    // Contact information using concatenation
    const domain = 'globalvisainternationals';
    const tld = 'com';
    const emailUser = 'operations';
    const email = emailUser + '@' + domain + '.' + tld;

    const phoneArea = '702';
    const phonePrefix = '221';
    const phoneSuffix = '3466';
    const phoneNumber = phoneArea + '-' + phonePrefix + '-' + phoneSuffix;

    // Fixed: WhatsApp number with proper international format (+917022213466)
    const whatsappNumber = '+91' + phoneArea + phonePrefix + phoneSuffix;

    const companyName = 'Global Visa Internationals';
    const pageTitle = 'Thank You for Contacting ' + companyName;
    const pageDescription = 'Thank you for your interest in ' + companyName + '. Our team will contact you shortly for visa assistance. Call ' + phoneNumber + ' or email ' + email;

    // Detailed WhatsApp message
    const whatsappMessage = encodeURIComponent(
        `Hello ${companyName}!\n\nI recently submitted a query on your website and would like to discuss:\n• Visa consultation services\n• Required documentation\n• Processing timelines\n• Fee structure\n\nPlease provide more information at your earliest convenience.\n\nThank you!`
    );

    // Detailed email subject and body
    const emailSubject = encodeURIComponent('Visa Consultation Request - Website Inquiry');
    const emailBody = encodeURIComponent(
        `Dear ${companyName} Team,\n\nI recently submitted a query on your website and I'm interested in:\n\n1. Visa consultation services\n2. Required documentation checklist\n3. Processing timelines and fees\n4. Eligibility assessment\n\nPlease contact me at your earliest convenience to discuss my visa requirements.\n\nBest regards,\n[Your Name]`
    );

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="visa consultation, immigration services, thank you, contact us" />
                <meta name="author" content={companyName} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.globalvisainternationals.com/thank-you" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            "name": pageTitle,
                            "description": pageDescription,
                            "publisher": {
                                "@type": "Organization",
                                "name": companyName,
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": phoneNumber,
                                    "email": email,
                                    "contactType": "customer service"
                                }
                            }
                        })
                    }}
                />
            </Head>

            <main className={styles.container} role="main">
                <div className={styles.content}>
                    {/* Success Icon with ARIA label */}
                    <div className={styles.iconContainer} aria-hidden="true">
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                        </div>
                    </div>
                    <span className={styles.visuallyHidden}>Form submission successful</span>

                    {/* Main heading - only one h1 per page */}
                    <h1 className={styles.title}>{pageTitle}</h1>

                    <section aria-labelledby="confirmation-message">
                        <h2 id="confirmation-message" className={styles.visuallyHidden}>Confirmation Message</h2>
                        <p className={styles.subtitle}>
                            Your information has been successfully submitted to {companyName}. Our team will contact you shortly to discuss your visa requirements.
                        </p>
                    </section>

                    {/* CTA Section */}
                    <section className={styles.ctaSection} aria-labelledby="immediate-assistance">
                        <h2 id="immediate-assistance" className={styles.ctaTitle}>Need Immediate Visa Assistance?</h2>
                        <p className={styles.ctaText}>
                            Contact our immigration experts directly through any of the methods below for immediate consultation:
                        </p>

                        {/* Contact Options with semantic structure */}
                        <div className={styles.contactOptions} role="list">
                            {/* Phone Call */}
                            <article className={styles.contactCard} role="listitem">
                                <a
                                    href={`tel:+91${phoneArea}${phonePrefix}${phoneSuffix}`}
                                    className={styles.contactLink}
                                    aria-label={`Call ${companyName} at +91 ${phoneNumber}`}
                                >
                                    <div className={styles.contactIcon} aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                                        </svg>
                                    </div>
                                    <div className={styles.contactInfo}>
                                        <h3>Call Visa Experts Now</h3>
                                        <p className={styles.contactNumber}>
                                            <strong>Phone:</strong> +91 {phoneNumber}
                                        </p>
                                        <span className={styles.contactDetail}>Direct immigration consultation</span>
                                    </div>
                                    <div className={styles.contactArrow} aria-hidden="true">→</div>
                                </a>
                            </article>

                            {/* Email */}
                            <article className={styles.contactCard} role="listitem">
                                <a
                                    href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
                                    className={styles.contactLink}
                                    aria-label={`Email ${companyName} at ${email}`}
                                >
                                    <div className={styles.contactIcon} aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <div className={styles.contactInfo}>
                                        <h3>Send Detailed Inquiry</h3>
                                        <p className={styles.contactEmail}>
                                            <strong>Email:</strong> {email}
                                        </p>
                                        <span className={styles.contactDetail}>Document submission & inquiries</span>
                                    </div>
                                    <div className={styles.contactArrow} aria-hidden="true">→</div>
                                </a>
                            </article>

                            {/* WhatsApp */}
                            <article className={styles.contactCard} role="listitem">
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className={styles.contactLink}
                                    aria-label={`Message ${companyName} on WhatsApp at +91 ${phoneNumber}`}
                                >
                                    <div className={styles.contactIcon} aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
                                        </svg>
                                    </div>
                                    <div className={styles.contactInfo}>
                                        <h3>Instant WhatsApp Chat</h3>
                                        <p className={styles.contactNumber}>
                                            <strong>WhatsApp:</strong> +91 {phoneNumber}
                                        </p>
                                        <span className={styles.contactDetail}>Quick questions & updates</span>
                                    </div>
                                    <div className={styles.contactArrow} aria-hidden="true">→</div>
                                </a>
                            </article>
                        </div>
                    </section>

                    {/* Additional Information */}
                    <section className={styles.additionalInfo} aria-labelledby="next-steps">
                        <h2 id="next-steps">What Happens Next With Your Visa Application?</h2>
                        <ul className={styles.infoList} role="list">
                            <li>Our <strong>visa specialists at {companyName}</strong> will review your information within 24 hours</li>
                            <li>You'll receive a <strong>personalized immigration consultation</strong> call from our experts</li>
                            <li>We'll guide you through the <strong>complete documentation process</strong> step by step</li>
                            <li>Regular updates on your <strong>application status</strong> and timeline</li>
                            <li><strong>Dedicated case manager</strong> assigned to handle your visa process</li>
                        </ul>

                        <div className={styles.hours}>
                            <h3>Business Hours for Visa Consultation</h3>
                            <p><time dateTime="09:00">9:00 AM</time> - <time dateTime="18:00">6:00 PM IST</time> (Monday - Friday)</p>
                            <p><time dateTime="10:00">10:00 AM</time> - <time dateTime="16:00">4:00 PM IST</time> (Saturday)</p>
                            <p>Closed Sunday</p>
                            <p className={styles.location}>Serving clients in India and worldwide</p>
                        </div>
                    </section>

                    {/* Schema markup for FAQ */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": [{
                                    "@type": "Question",
                                    "name": "How soon will Global Visa Internationals contact me?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Our visa specialists typically respond within 24 hours of form submission. For immediate assistance, you can call us directly at +91 " + phoneNumber
                                    }
                                }, {
                                    "@type": "Question",
                                    "name": "What visa services does Global Visa Internationals provide?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We provide comprehensive visa consultation, application assistance, documentation support, and immigration services for various countries."
                                    }
                                }]
                            })
                        }}
                    />
                </div>
            </main>
        </>
    );
};

export default ThankYouPage;