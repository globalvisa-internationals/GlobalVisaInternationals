"use client";
import styles from './Australia.module.css';
import React, { useState, useEffect } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { NextSeo, LocalBusinessJsonLd, FAQPageJsonLd } from 'next-seo';

export default function Australia() {

    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        if (!(form instanceof HTMLFormElement)) {
            alert("❌ Unexpected form submission target.");
            return;
        }

        const formData = new FormData(form);


        if (!executeRecaptcha) {
            alert("❌ reCAPTCHA not ready");
            return;
        }

        const token = await executeRecaptcha("inquiry_form");

        if (!token) {
            alert("❌ Please verify you're not a robot");
            return;
        }

        const payload = {
            ...Object.fromEntries(formData.entries()),
            recaptchaToken: token,
        };

        // Optimistic UX
        setShowPopup(true);
        form.reset();

        setTimeout(() => {
            setShowPopup(false);
        }, 4000);



        // Send email in background
        fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        }).then(async (res) => {
            const data = await res.json();
            if (!data.success) {
                alert("❌ Email sending failed. Please try again.");
            }
        }).catch((err) => {
            alert("❌ Something went wrong while submitting the form.");
            console.error(err);
        }).finally(() => {
            setIsSubmitting(false);
        });
    };
    //reviews
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);
    return (
        <>
            <head>
                <title>Australia Visa Refusal Help from India | Global Visa Internationals</title>
                <meta charset="UTF-8" />
                <meta name="description" content="Australia visa refused? Don't lose hope! Global Visa Internationals offers expert assistance for Australia visa refusal appeals and re-applications from India. Get help with GTE issues, documentation, and AAT appeals." />
                <meta name="keywords" content="Australia visa refusal India, Australia visa rejection, Australia visa appeal, AAT appeal Australia, Australia visa consultants India, visa refusal help, GTE issues Australia, student visa refusal Australia, work visa refusal Australia, visitor visa refusal Australia, Australia immigration lawyer India, Global Visa Internationals" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Global Visa Internationals" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#b30000" />

                <link rel="canonical" href="https://www.globalvisainternationals.com/Visa/refusal-visa/australia" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="preload" as="image" href="https://www.globalvisainternationals.com/images/australia-visa-refusal-banner.jpg" />
                <link rel="stylesheet" href="./Visa/refusal-visa/Australia.module.css" />

                {/* */}
                <meta property="og:title" content="Australia Visa Refused? Expert Help from Global Visa Internationals" />
                <meta property="og:description" content="Facing an Australia visa refusal? We provide comprehensive support for appeals and re-applications, increasing your chances of success. Contact Global Visa Internationals." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.globalvisainternationals.com/Visa/refusal-visa/australia" />
                <meta property="og:image" content="https://www.globalvisainternationals.com/images/australia-visa-refusal-banner.jpg" />
                <meta property="og:site_name" content="Global Visa Internationals" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:locale:alternate" content="en_US" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Australia Visa Refusal Assistance | Global Visa Internationals" />
                <meta name="twitter:description" content="Don't give up on your Australian dream after a visa refusal. Global Visa Internationals offers expert guidance and support for appeals and re-applications." />
                <meta name="twitter:image" content="https://www.globalvisainternationals.com/images/australia-visa-refusal-banner.jpg" />
                <meta name="twitter:url" content="https://www.globalvisainternationals.com/Visa/refusal-visa/australia" />
                <meta name="twitter:site" content="@GlobalVisaIntl" />
                <meta name="twitter:creator" content="@GlobalVisaIntl" />

                {/* */}
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />

                {/* Geo Location Tags */}
                <meta name="geo.region" content="AU" />
                <meta name="geo.placename" content="Canberra" />
                <meta name="geo.region" content="IN-KA" />
                <meta name="geo.placename" content="Bengaluru" />
                <meta name="ICBM" content="12.9716,77.5946" />

                {/* Local Business Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Global Visa Internationals",
                        "url": "https://www.globalvisainternationals.com",
                        "logo": "https://www.globalvisainternationals.com/logo.png",
                        "description": "Trusted visa consultants helping Indian travelers with Australia Refusal Visa applications, document verification, and expert support.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "MG Road",
                            "addressLocality": "Bengaluru",
                            "addressRegion": "KA",
                            "postalCode": "560025",
                            "addressCountry": "IN"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91-7022213466",
                            "contactType": "Customer Support"
                        },
                        "sameAs": [
                            "https://www.facebook.com/GlobalVisaInternationals",
                            "https://www.linkedin.com/company/globalvisainternationals",
                            "https://twitter.com/GlobalVisaIntl"
                        ]
                    })
                }} />

                {/* BreadcrumbList Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.globalvisainternationals.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Visa Refusal",
                                "item": "https://www.globalvisainternationals.com/Visa/refusal-visa/australia"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Australia"
                            }
                        ]
                    })
                }} />

                {/* FAQPage Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does an Australia Refusal Visa appeal cost from India?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The cost for an Australia Refusal Visa appeal from India can vary significantly depending on the complexity of the case and whether you engage legal or consulting services. It includes official appeal fees and professional service charges. Please contact us for a detailed quote."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What documents are required for an Australia Refusal Visa appeal?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You will need the refusal letter, your passport, previous visa application documents, any new supporting documents to address the reasons for refusal (e.g., updated bank statements, new invitation letters, additional GTE evidence), and detailed written submissions for the appeal."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does an Australia visa refusal appeal take?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The processing time for an Australia visa refusal appeal, especially through the Administrative Appeals Tribunal (AAT), can vary widely. It can range from a few months to over a year, depending on the caseload, the complexity of your appeal, and whether further information is requested. We will keep you updated throughout the process."
                                }
                            }
                        ]
                    })
                }} />

                {/* Service Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Australia Visa Refusal Assistance and Appeals",
                        "provider": {
                            "@type": "Organization",
                            "name": "Global Visa Internationals",
                            "url": "https://www.globalvisainternationals.com"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "India"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Visa Refusal Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Australia Visa Refusal Appeal (AAT)"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Australia Visa Re-application after Refusal"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "GTE Issues Resolution for Australia Visas"
                                    }
                                }
                            ]
                        }
                    })
                }} />
            </head>



            <div className={styles.imageContainer}>
                <img src="/images/Australia1.png" alt="Australia Image" className={styles.AustraliaImage} />
            </div>

            <div className={styles.AustraliaSec}>


                <div className={styles.AustraliaData}>
                    <h1 className={styles.Title}>Australia Visa Refusal? Don't Lose Hope! Global Visa Internationals is Here to Help!</h1>
                    <p>Applying for an Australian visa is a dream for many Indians – whether it's for studies, work, tourism, or to settle down with family. But sometimes, despite all your efforts, you might face a visa refusal. It can be incredibly disheartening, we understand!          </p>

                    <div className={styles.formSection1}>

                        <h1 className={styles.subTitle}>Visa Inquiry Form</h1>
                        <form id="inquiry-form" onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div>
                                    <input className={styles.input} type="text" name="name" placeholder="Enter your name" required />
                                </div>
                                <div>
                                    <input className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div>
                                    <select className={styles.select} name="country" required>
                                        <option value="">Select Country</option>
                                        {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <select className={styles.select} name="immigration_type" required>
                                        <option value="">Select Immigration Type</option>
                                        {["Work Visa", "Student Visa", "Visitor/Rufusal Visa", "Business Visa", "Dependent Visa", "Permanent Residency Visa"].map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div>
                                    <input className={styles.input} type="number" name="applicants" min="1" placeholder="Enter number" required />
                                </div>
                                <div>
                                    <select className={styles.select} name="age" required>
                                        <option value="">Select Age</option>
                                        <option value="18-45">18-45</option>
                                        <option value="45+">45+</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div>
                                    <select className={styles.select} name="education" required>
                                        <option value="">Select Qualification</option>
                                        {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                                            <option key={edu} value={edu}>{edu}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <input className={styles.input} type="email" name="email" placeholder="Enter your email" required />
                                </div>
                            </div>


                            <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>

                        </form>
                        {showPopup && (
                            <div className={styles.popupOverlay}>
                                <div className={styles.popupContent}>
                                    <p>✅ Your form has been submitted successfully!</p>
                                    <button onClick={() => setShowPopup(false)}>Close</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <h3 className={styles.subTitle}>Common Reasons for Australian Visa Refusal:</h3>
                    <p>Many Australian visa applications from India get refused for various reasons. Some of the most common ones include:</p>

                    <ul>
                        <li>Incomplete or Incorrect Documentation: Even a small error or a missing document can lead to rejection. This includes financial statements, academic records, employment letters, or identity proofs.
                        </li>
                        <li>Insufficient Funds: Not being able to demonstrate enough funds to support your stay in Australia is a major red flag for immigration authorities.</li>
                        <li>Genuine Temporary Entrant (GTE) Issues (for Student & Visitor Visas): If the Department of Home Affairs isn't convinced that your primary intention is to genuinely study or visit temporarily and then return to India, your visa might be refused. They look for strong ties to your home country.</li>
                        <li>Failure to Meet Health or Character Requirements: Not clearing medical examinations or having a criminal history can also lead to refusal. Honesty and transparency are key here.</li>
                        <li>Incorrect Visa Category Selection: Applying for the wrong visa type for your purpose of visit is a common mistake that leads to automatic rejection.</li>
                        <li>Lack of Strong Ties to Home Country: For temporary visas, proving your strong connections to India (like family, property, or employment) is crucial to assure the authorities you will return.</li>
                        <li>Previous Visa Violations or Inconsistencies: A history of overstaying a visa in any country or providing inconsistent information across applications can impact your current application negatively.</li>
                    </ul>

                    <div className={styles.formSection1}>

                        <h1 className={styles.subTitle}>Visa Inquiry Form</h1>
                        <form id="inquiry-form" onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div>
                                    <input className={styles.input} type="text" name="name" placeholder="Enter your name" required />
                                </div>
                                <div>
                                    <input className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div>
                                    <select className={styles.select} name="country" required>
                                        <option value="">Select Country</option>
                                        {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <select className={styles.select} name="immigration_type" required>
                                        <option value="">Select Immigration Type</option>
                                        {["Work Visa", "Student Visa", "Visitor/Rufusal Visa", "Business Visa", "Dependent Visa", "Permanent Residency Visa"].map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div>
                                    <input className={styles.input} type="number" name="applicants" min="1" placeholder="Enter number" required />
                                </div>
                                <div>
                                    <select className={styles.select} name="age" required>
                                        <option value="">Select Age</option>
                                        <option value="18-45">18-45</option>
                                        <option value="45+">45+</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div>
                                    <select className={styles.select} name="education" required>
                                        <option value="">Select Qualification</option>
                                        {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                                            <option key={edu} value={edu}>{edu}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <input className={styles.input} type="email" name="email" placeholder="Enter your email" required />
                                </div>
                            </div>


                            <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>

                        </form>
                        {showPopup && (
                            <div className={styles.popupOverlay}>
                                <div className={styles.popupContent}>
                                    <p>✅ Your form has been submitted successfully!</p>
                                    <button onClick={() => setShowPopup(false)}>Close</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <h3 className={styles.subTitle}>What Happens After a Visa Refusal?</h3>
                    <p>A visa refusal doesn't mean your Australian dream is over! You typically have two main options:</p>
                    <ol>
                        <li>Appeal the Decision: For many visa refusals, you can appeal to the Administrative Appeals Tribunal (AAT) in Australia. This involves a formal review of your case, presenting new evidence, or clarifying existing information. There are strict deadlines for lodging an appeal, usually within 21 days of receiving the refusal notice..</li>
                        <br />
                        <li>Reapply for the Visa: In some cases, reapplying with a stronger, corrected application might be a better strategy, especially if the refusal was due to correctable errors or missing documents.</li>

                    </ol>


                    <h2 className={styles.subTitle}>Your Path to Success with Global Visa Internationals!</h2>
                    <p className={styles.note}>Facing a visa refusal can be confusing and stressful, but you don't have to navigate this complex process alone. At Global Visa Internationals, we specialize in assisting Indian applicants with their Australian visa applications, including challenging refusal decisions.</p>

                    <div className={styles.formSection1}>

                        <h1 className={styles.subTitle}>Visa Inquiry Form</h1>
                        <form id="inquiry-form" onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div>
                                    <input className={styles.input} type="text" name="name" placeholder="Enter your name" required />
                                </div>
                                <div>
                                    <input className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div>
                                    <select className={styles.select} name="country" required>
                                        <option value="">Select Country</option>
                                        {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <select className={styles.select} name="immigration_type" required>
                                        <option value="">Select Immigration Type</option>
                                        {["Work Visa", "Student Visa", "Visitor/Rufusal Visa", "Business Visa", "Dependent Visa", "Permanent Residency Visa"].map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div>
                                    <input className={styles.input} type="number" name="applicants" min="1" placeholder="Enter number" required />
                                </div>
                                <div>
                                    <select className={styles.select} name="age" required>
                                        <option value="">Select Age</option>
                                        <option value="18-45">18-45</option>
                                        <option value="45+">45+</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div>
                                    <select className={styles.select} name="education" required>
                                        <option value="">Select Qualification</option>
                                        {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                                            <option key={edu} value={edu}>{edu}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <input className={styles.input} type="email" name="email" placeholder="Enter your email" required />
                                </div>
                            </div>


                            <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>

                        </form>
                        {showPopup && (
                            <div className={styles.popupOverlay}>
                                <div className={styles.popupContent}>
                                    <p>✅ Your form has been submitted successfully!</p>
                                    <button onClick={() => setShowPopup(false)}>Close</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
                    <ul>
                        <li>Expert Guidance: Our team of experienced Australia visa consultants in India and Immigration lawyers for Australia are well-versed in the latest Australian immigration laws and policies. We understand the nuances that lead to refusals and, more importantly, how to address them.</li>
                        <li>Thorough Case Analysis: We conduct a detailed review of your refusal letter, identifying the precise reasons for the rejection. This helps us formulate a robust strategy for your appeal or reapplication.</li>
                        <li>Strategic Documentation: We guide you in preparing comprehensive and accurate documentation, ensuring all requirements are met and any previous shortcomings are addressed. This includes crafting compelling GTE statements and strong financial proofs.</li>
                        <li>Appeal & Reapplication Expertise: Whether it's lodging an appeal with the AAT, preparing for potential interviews, or building a fresh, strong reapplication, we provide end-to-end support. Our aim is to maximise your Australia visa success rate after refusal.</li>
                        <li>Personalised Approach: Every case is unique, and we offer tailored advice and solutions based on your specific circumstances. We believe in providing hope and a clear path forward.</li>
                        <li>Proven Track Record: Many Indian applicants have successfully achieved their Australian visa dreams with our assistance, even after initial refusals. We are your trusted partner for Australian immigration solutions.</li>
                    </ul>
                    <p className={styles.note}>Don't let a visa refusal derail your dreams. Contact Global Visa Internationals today for a comprehensive consultation! We are dedicated to helping you turn your "No" into a "Yes."</p>

 <p className={styles.note}> This service is provided by Global Visa Internationals, an independent consultancy. We are not affiliated with the Australian Government or any embassy.</p>

                </div>

                <div className={styles.formSection}>

                    <h1 className={styles.subTitle}>Visa Inquiry Form</h1>
                    <form id="inquiry-form" onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div>
                                <input className={styles.input} type="text" name="name" placeholder="Enter your name" required />
                            </div>
                            <div>
                                <input className={styles.input} type="text" name="phone" placeholder="Enter your phone number" required />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div>
                                <select className={styles.select} name="country" required>
                                    <option value="">Select Country</option>
                                    {["newzeland", "USA", "UK", "Australia", "Europe", "Japan", "Dubai", "Singapore", "New-Zealand", "Other"].map((country) => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <select className={styles.select} name="immigration_type" required>
                                    <option value="">Select Immigration Type</option>
                                    {["Work Visa", "Student Visa", "Visitor/Rufusal Visa", "Business Visa", "Dependent Visa", "Permanent Residency Visa"].map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div>
                                <input className={styles.input} type="number" name="applicants" min="1" placeholder="Enter number" required />
                            </div>
                            <div>
                                <select className={styles.select} name="age" required>
                                    <option value="">Select Age</option>
                                    <option value="18-45">18-45</option>
                                    <option value="45+">45+</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div>
                                <select className={styles.select} name="education" required>
                                    <option value="">Select Qualification</option>
                                    {["Diploma", "Bachelor's", "Master's", "Doctorate", "Doctor", "Other"].map((edu) => (
                                        <option key={edu} value={edu}>{edu}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <input className={styles.input} type="email" name="email" placeholder="Enter your email" required />
                            </div>
                        </div>


                        <button className={styles.submittingBtn} type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>

                    </form>
                    {showPopup && (
                        <div className={styles.popupOverlay}>
                            <div className={styles.popupContent}>
                                <p>✅ Your form has been submitted successfully!</p>
                                <button onClick={() => setShowPopup(false)}>Close</button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            <h2 className={styles.subtitle}>Client Reviews</h2>
            <section id='Client Reviews'>

                <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
            </section>
        </>
    );
}