import styles from "@/Components/Visa.module.css";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

export const metadata = {
    metadataBase: new URL("https://www.globalvisainternationals.com"),

    // OPTIMIZED: Includes main keywords: Country, Service, Location, and Brand.
    title: "Liechtenstein Visa from India | Swiss Embassy Protocols | GVI Bangalore",

    // OPTIMIZED: Highlights the unique jurisdiction nuance (Swiss Embassy) which users struggle with.
    // Keeps it punchy and action-oriented.
    description:
        "Get your Liechtenstein Tourist Visa (Schengen) via Swiss Embassy with Global Visa Internationals. Expert help with VFS Switzerland appointments & itinerary planning. 99% Success. Apply Now!",

    keywords: [
        "Liechtenstein visa from India",
        "Liechtenstein tourist visa requirements",
        "Schengen visa agents Bangalore",
        "Swiss Embassy visa India",
        "VFS Switzerland appointment",
        "Liechtenstein visa fees 2026",
        "Liechtenstein visa processing time",
        "Vaduz tourist visa",
        "Swiss Schengen visa application",
        "Schengen visa consultants India",
        "Europe visa from Bangalore",
        "Liechtenstein business visa",
        "Liechtenstein visa documents checklist",
        "Liechtenstein visa rejection reasons",
        "Liechtenstein visa for Indian citizens",
        "GVI visa services",
        "Liechtenstein visa tracking",
        "Alpine countries visa",
        "Liechtenstein entry requirements",
        "VFS Global Switzerland"
    ],

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/liechtenstein",

    alternates: {
        canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/liechtenstein",
    },

    openGraph: {
        // OPTIMIZED: Engaging title for social sharing (Facebook/LinkedIn/WhatsApp)
        title: "Apply for Liechtenstein Tourist Visa | Expert Agents in Bangalore",
        description:
            "Planning a trip to Vaduz? Global Visa Internationals provides end-to-end Liechtenstein (Swiss) Schengen visa assistance. We handle jurisdiction checks, forms & VFS appointments.",
        url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/liechtenstein",
        siteName: "Global Visa Internationals",
        locale: "en_IN",
        images: [
            {
                // Updated image path to reflect Liechtenstein
                url: "https://www.globalvisainternationals.com/tourist-visa/Liechtenstein-Tourist-Visa-Assistance-GVI.jpg",
                width: 1200,
                height: 630,
                alt: "Liechtenstein Tourist Visa Assistance by Global Visa Internationals",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        site: "@GLOBALVISA1505",
        title: "Liechtenstein Tourist Visa Experts | GVI Bangalore",
        description:
            "Get your Liechtenstein Schengen visa approved easily via the Swiss Embassy. We assist with the mandatory VFS appointments and financial documentation in India.",
        images: [
            "https://www.globalvisainternationals.com/tourist-visa/Liechtenstein-Tourist-Visa-Assistance-GVI.jpg",
        ],
    },

    other: {
        "geo.region": "IN-KA",
        "geo.placename": "Bangalore",
        "ICBM": "12.9716,77.5946",

        // AI / Semantic Optimization (AEO)
        "ai-content-type": "liechtenstein-schengen-visa-guide",
        "ai-primary-topic": "Liechtenstein Schengen Visa Rules 2026",
        "ai-secondary-topic": "Swiss Embassy Protocols, Vaduz Travel, Alpine Tourism",
        "ai-user-intent": "how to apply for liechtenstein tourist visa from india via switzerland",
    },
};


export default function Liechtenstein_Tourist_Visa_Assistance() {
    const pageUrl =
        "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/liechtenstein";

    const jsonLdSchemas = [
        // Breadcrumb Schema
        {
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
                    "name": "Schengen Tourist Visa",
                    "item": "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Liechtenstein Tourist Visa",
                    "item": "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/liechtenstein"
                }
            ]
        },

        // Organization Schema
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Global Visa Internationals",
            "url": "https://www.globalvisainternationals.com",
            "logo": "https://www.globalvisainternationals.com/gvilogo.png",
            "email": "operations@globalvisainternationals.com",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-7022213466",
                    "contactType": "Customer Service",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Kannada", "Hindi"]
                }
            ],
            "sameAs": [
                "https://www.facebook.com/globalvisainternationals/",
                "https://www.instagram.com/globalvisa_internationals/",
                "https://www.linkedin.com/company/global-visa-internationals/",
                "https://x.com/GLOBALVISA1505",
                "https://www.youtube.com/@globalVisaInternationals",
                "https://www.google.com/maps/place/Global+Visa+Internationals"
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "G-F9, Business Point, 137 Brigade Road, Next to Brigade Tower",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560025",
                "addressCountry": "IN"
            }
        },

        // LocalBusiness Schema
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Global Visa Internationals",
            "image": "https://www.globalvisainternationals.com/tourist-visa/Liechtenstein-Tourist-Visa-Assistance-GVI.jpg",
            "@id": "https://www.globalvisainternationals.com",
            "url": "https://www.globalvisainternationals.com",
            "telephone": "+91-7022213466",
            "email": "operations@globalvisainternationals.com",
            "priceRange": "₹₹",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "G-F9, Business Point, 137 Brigade Road, Next to Brigade Tower",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560025",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.9716,
                "longitude": 77.5946
            },
            "openingHours": "Mo-Sa 10:00-18:00",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "314"
            }
        },

        // Service Schema
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Liechtenstein Tourist Visa Assistance",
            "provider": {
                "@type": "Organization",
                "name": "Global Visa Internationals",
                "url": "https://www.globalvisainternationals.com"
            },
            "areaServed": { "@type": "Place", "name": "India" },
            "description": "Expert assistance for Liechtenstein (Schengen) Visa via the Swiss Embassy. We handle VFS Switzerland appointments, itinerary planning for Vaduz, and financial documentation.",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Liechtenstein Visa Services",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Liechtenstein Tourist Visa Assistance" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Swiss Jurisdiction & Embassy Check" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Liechtenstein Business Visa Guidance" } }
                ]
            }
        },

        // WebPage Schema
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Liechtenstein Tourist Visa Assistance from India",
            "url": "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/liechtenstein",
            "description": "Apply for your Liechtenstein Tourist Visa with GVI. We simplify the Swiss Embassy protocols and secure VFS appointments in Bangalore and across India.",
            "inLanguage": "en-IN",
            "isPartOf": {
                "@type": "WebSite",
                "url": "https://www.globalvisainternationals.com"
            }
        },

        // FAQ Schema
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                // --- Core India Questions ---
                {
                    "@type": "Question",
                    "name": "How to get Liechtenstein visa from India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Since Liechtenstein has no embassy in India, the visa issuance is handled by Switzerland. You must apply for a Swiss Schengen visa and indicate Liechtenstein as your main destination. You will book an appointment at VFS Global (Swiss), submit your biometrics, and show proof of funds."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How to get Liechtenstein visa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To get a Liechtenstein visa, you apply for a Short-Stay Schengen Visa (Type C) via the Swiss consulate. You need a valid passport, flight reservations (usually to Zurich), and accommodation in Liechtenstein. Let GVI guide you to ensure your itinerary meets the strict Swiss standards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How to apply Liechtenstein visa online?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can fill out the application form online on the Swiss government's visa portal. However, you cannot complete the *entire* process online; you must physically visit a VFS center for biometrics and document submission."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is there an E-Visa for Liechtenstein?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, currently there is no E-Visa for Indian citizens. You must go through the standard sticker visa process via the Swiss representation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How to check Liechtenstein visa status?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Once you submit your application at VFS (Swiss), you will get a reference number. You can use this on the VFS Global website to track your passport. If you apply through Global Visa Internationals, we monitor the status daily and update you via WhatsApp."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much is Liechtenstein visa fee?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For adults, the fee is €90 (approx. ₹8,200) and for children (6-12 years), it is €45. Apart from this, there are VFS service charges. Note that fees are often pegged to the Swiss Franc (CHF). Contact us for the exact daily rate."
                    }
                },

                // --- General & Technical Questions ---
                {
                    "@type": "Question",
                    "name": "Can I enter Liechtenstein with a Schengen Visa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely! Liechtenstein is part of the Schengen area. A valid visa issued by any member country allows you to enter Liechtenstein. However, there are no border controls between Switzerland and Liechtenstein."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I need a separate visa for Switzerland?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Since Switzerland and Liechtenstein share a customs and visa union, the same visa covers both. In fact, you will likely fly into Zurich (Switzerland) and drive/bus to Liechtenstein."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the currency in Liechtenstein?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Liechtenstein uses the Swiss Franc (CHF). While Euros are widely accepted, it is better to have CHF for smaller transactions. Ensure your bank statements reflect enough funds to cover the high cost of living there."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How to Liechtenstein visa for business?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For business trips, you must provide an invitation letter from the Liechtenstein-based company. The application process (via Switzerland) remains similar to the tourist category but requires proof of business relations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Liechtenstein which visa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For a holiday, choose 'Type C Tourist'. For business, 'Type C Business'. For work or residence longer than 90 days, you need a 'Type D National Visa', which requires direct interaction with the migration office in Vaduz."
                    }
                }
            ]
        }
    ];

    return (
        <>
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}


            <div className={styles.imageContainer}>
                <img
                    src="/tourist-visa/Liechtenstein-Tourist-Visa-Assistance-GVI.jpg"
                    alt="Liechtenstein Tourist Visa Assistance GVI"
                    className={styles.VisaImage}
                />
            </div>

            <div className={styles.VisaSec}>

                <div className={styles.VisaData}>
                    {/* --- H1: High-Impact, SEO-Rich Title --- */}
                    <h1 className={styles.Title}>Liechtenstein Tourist Visa (Schengen) from India 2026 - Eligibility, Requirements & Fees | Global Visa Internationals</h1>

                    <h2 className={styles.subTitle}>What is a Liechtenstein Schengen Visa?</h2>

                    <p>
                        A <b className={styles.strong}>Liechtenstein Tourist Visa</b> is your gateway to one of Europe's most picturesque alpine microstates. Since Liechtenstein is a member of the <b className={styles.strong}>Schengen Area</b>, holding this valid visa allows you to travel freely to 28 other European countries—including its neighbors Switzerland and Austria—without separate documentation.
                    </p>
                    <p>
                        For travelers seeking a <b className={styles.strong}>Europe tourist visa from India</b> in 2026, Liechtenstein offers a unique travel experience. However, it is crucial to note that Liechtenstein does not issue visas directly in India; the process is handled entirely by the <b className={styles.strong}>Swiss Embassy</b>.
                    </p>

                    <h2 className={styles.subTitle}>Types of Liechtenstein Visas for Indian Citizens</h2>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <h3 className={styles.subTitle}>Short-Stay Tourist Visa (Type C)</h3>
                            <p>
                                The most common <b className={styles.strong}>Liechtenstein visa for Indian citizens</b>. It is ideal for alpine holidays, sightseeing in Vaduz, and visiting friends, allowing a stay of up to <b className={styles.strong}>90 days</b>.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.subTitle}>Airport Transit Visa (Type A)</h3>
                            <p>
                                Required only if you are passing through the international zone of a connecting airport (usually Zurich, as Liechtenstein has no airport) without entering the country.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.subTitle}>National Long-Stay Visa (Type D)</h3>
                            <p>
                                For stays exceeding 90 days (e.g., highly skilled work or residence). The <b className={styles.strong}>Liechtenstein visa application form</b> and approval for this category are handled directly by the Migration Office in Vaduz.
                            </p>
                        </div>
                    </div>

                    <h2 className={styles.subTitle}>Liechtenstein Tourist Visa Eligibility & Requirements</h2>
                    <p>To successfully <b className={styles.strong}>apply for a Liechtenstein visa</b> in 2026 (via Switzerland), you must meet these non-negotiable criteria:</p>
                    <ul className={styles.checkList}>
                        <li><b className={styles.strong}>Valid Passport:</b> Must be valid for at least 3 months beyond your return date.</li>
                        <li><b className={styles.strong}>Indian Residency:</b> You must be a legal resident currently living in India.</li>
                        <li><b className={styles.strong}>Swiss Representation:</b> <span style={{ color: '#d9534f' }}>**Crucial Step:**</span> Since there is no <b className={styles.strong}>Liechtenstein Embassy India</b>, you must follow the protocols set by the Consulate General of Switzerland.</li>
                        <li><b className={styles.strong}>Financial Stability:</b> Liechtenstein is expensive. You must meet the specific <b className={styles.strong}>Liechtenstein visa financial requirements</b>, proving you have sufficient funds (approx. 100 CHF/day).</li>
                    </ul>

                    <h2 className={styles.subTitle}>Documents Checklist for Liechtenstein Schengen Visa</h2>

                    <p>Incomplete documentation is the top reason for refusal. Use this checklist to ensure your <b className={styles.strong}>Liechtenstein Schengen visa documents</b> are in order:</p>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Document</th>
                                <th>Specific Requirement</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b className={styles.strong}>Visa Application Form</b></td>
                                <td>Completed online (Swiss form), printed, and signed by the applicant.</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Photographs</b></td>
                                <td>Two recent photos (35x45mm, matte finish, 80% face coverage, white background).</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Travel Insurance</b></td>
                                <td><b className={styles.strong}>Travel insurance for Liechtenstein</b> with minimum coverage of €30,000 (valid across Schengen).</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Flight Itinerary</b></td>
                                <td>Round-trip <b className={styles.strong}>flight itinerary for visa</b> (usually arriving in Zurich, Switzerland).</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Proof of Accommodation</b></td>
                                <td>Confirmed hotel bookings in Liechtenstein or an invitation letter from a host.</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Financial Proof</b></td>
                                <td>3 months' bank statements (stamped), salary slips, and ITR slips for the last 2 years.</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Cover Letter</b></td>
                                <td>A detailed <b className={styles.strong}>cover letter for Liechtenstein visa</b> explaining your itinerary and reason for visiting the principality.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className={styles.subTitle}>Where to Apply for Liechtenstein Visa?</h2>
                    <p>
                        Liechtenstein does not issue its own visas in India. Instead, you must apply through <b className={styles.strong}>VFS Global</b> (Switzerland division).
                    </p>
                    <p>
                        You must visit the nearest center to submit your application. Centers handling the <b className={styles.strong}>Liechtenstein visa from India</b> (via Swiss channels) are located in major metros including Delhi, Mumbai, Bengaluru, and Kolkata.
                    </p>

                    <h2 className={styles.subTitle}>How to Apply for Liechtenstein Visa: Step-by-Step Process</h2>
                    <p>Follow this guide to navigate the <b className={styles.strong}>Liechtenstein visa process</b> smoothly:</p>

                    <div className={styles.stepContainer}>
                        <h3 className={styles.subTitle}>Step 1: Determine Jurisdiction</h3>
                        <p>Ensure you are applying to the Swiss Embassy, which represents Liechtenstein. Do not apply to Germany or Austria unless specified for exceptional circumstances.</p>

                        <h3 className={styles.subTitle}>Step 2: Fill the Application</h3>
                        <p>Complete the official Swiss Schengen online form. Ensure no errors, as they can lead to rejection.</p>

                        <h3 className={styles.subTitle}>Step 3: Book VFS Appointment</h3>
                        <p>Log in to VFS Global (Switzerland) to schedule your <b className={styles.strong}>VFS Liechtenstein appointment</b>. Slots can fill up fast during the travel season.</p>

                        <h3 className={styles.subTitle}>Step 4: Submit & Biometrics</h3>

                        <p>Visit the center to submit documents and provide biometric data (fingerprints). You can also opt for SMS <b className={styles.strong}>Liechtenstein visa tracking</b> services here.</p>

                        <h3 className={styles.subTitle}>Step 5: Pay Visa Fees</h3>
                        <p>Pay the necessary <b className={styles.strong}>Liechtenstein visa cost</b> via cash or card at the center.</p>
                    </div>

                    <h2 className={styles.subTitle}>Liechtenstein Visa Fees in Indian Rupees (2026)</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Applicant Category</th>
                                    <th>Visa Fee (EUR)</th>
                                    <th>Visa Fee (INR) Approx.*</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Adults</td>
                                    <td>€90</td>
                                    <td>₹8,190</td>
                                </tr>
                                <tr>
                                    <td>Children (6-12 years)</td>
                                    <td>€45</td>
                                    <td>₹4,095</td>
                                </tr>
                                <tr>
                                    <td>Children (Below 6)</td>
                                    <td>Free</td>
                                    <td>Free</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className={styles.smallText}>
                            *Exchange rates fluctuate. VFS Service charges are additional. Fees are often calculated in Swiss Francs (CHF) but paid in INR.
                        </p>
                    </div>

                    <h2 className={styles.subTitle}>Liechtenstein Visa Processing Time India</h2>
                    <p>
                        <b className={styles.strong}>Standard Processing:</b> ~15 calendar days.<br />
                        <b className={styles.strong}>Peak Season (May-Sept):</b> 20-30 days.<br />
                        To avoid delays, we recommend you <b className={styles.strong}>apply for Liechtenstein visa online</b> (start the process) at least 45 days prior to travel.
                    </p>

                    <h2 className={styles.subTitle}>Minimum Bank Balance for Liechtenstein Visa</h2>
                    <p>
                        Liechtenstein and Switzerland are among the most expensive countries in Europe.
                        <br />
                        <b className={styles.strong}>Requirement:</b> You need approximately <b className={styles.strong}>CHF 100 (approx ₹9,500) per day</b> of stay.
                        <br />
                        <b className={styles.strong}>Recommended Balance:</b> To ensure approval, maintain a closing balance of <b className={styles.strong}>₹2.5 - ₹3 Lakhs</b> per person for a standard 7-10 day trip.
                    </p>

                    <h2 className={styles.subTitle}>Common Liechtenstein Visa Rejection Reasons</h2>
                    <ul>
                        <li><b className={styles.strong}>Incorrect Embassy:</b> Applying via Austria or Germany instead of Switzerland.</li>
                        <li><b className={styles.strong}>Visa Shopping:</b> Applying for a Liechtenstein/Swiss visa but having an itinerary that shows majority stay in France or Italy.</li>
                        <li><b className={styles.strong}>Insufficient Funds:</b> Bank statements that do not meet the high daily financial requirement of the region.</li>
                        <li><b className={styles.strong}>Travel Insurance Issues:</b> Policy not valid for the entire Schengen area or missing the €30,000 coverage.</li>
                    </ul>

                    <div className={styles.servicesSection}>
                        <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
                        <p>
                            As expert <b className={styles.strong}>Liechtenstein visa agents</b>, GVI helps you navigate the specific Swiss-Liechtenstein diplomatic protocols.
                        </p>
                        <div className={styles.serviceGrid}>
                            <div className={styles.serviceItem}>
                                <b className={styles.strong}>Jurisdiction Check:</b>
                                <p>We ensure you are applying to the correct mission (Swiss Embassy) to avoid instant rejection.</p>
                            </div>
                            <div className={styles.serviceItem}>
                                <b className={styles.strong}>Itinerary Management:</b>
                                <p>We craft travel plans that align with <b className={styles.strong}>Liechtenstein tourist visa requirements</b>.</p>
                            </div>
                            <div className={styles.serviceItem}>
                                <b className={styles.strong}>Personalized Cover Letters:</b>
                                <p>Our team drafts professional letters to explain your profile to the Visa Officer.</p>
                            </div>
                        </div>

                        {/* --- Updated Detailed CTA --- */}
                        <div className={styles.ctaContainer} style={{ background: '#f0f8ff', padding: '30px', borderRadius: '12px', border: '2px solid #007bff', textAlign: 'center' }}>
                            <h2 className={styles.subTitle} style={{ marginTop: '0', color: '#0056b3' }}>Don't Let Paperwork Ruin Your Alpine Holiday</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                                Navigating the diplomatic nuances between Liechtenstein and Switzerland can be tricky. A single error in your jurisdiction or financial proof can lead to a visa refusal.
                            </p>
                            <p style={{ fontWeight: 'bold', marginBottom: '25px' }}>
                                secure your appointment, optimize your documents, and maximize your approval chances with Global Visa Internationals.
                            </p>
                            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="/contact-us" className={styles.primaryButton} style={{ padding: '15px 30px', fontSize: '1.1rem' }}>Book Free Consultation</a>
                                <a href="tel:+919876543210" className={styles.secondaryButton} style={{ padding: '15px 30px', fontSize: '1.1rem', background: '#fff', border: '2px solid #007bff', color: '#007bff', borderRadius: '5px', textDecoration: 'none' }}>Call Our Experts</a>
                            </div>
                        </div>
                    </div>


                    <div className={styles.faqSection}>
                        <h2 className={styles.subTitle}>Frequently Asked Questions (FAQs)</h2>

                        <h3 className={styles.subTitle}>1. How to get Liechtenstein visa from India?</h3>
                        <p className={styles.faqAnswer}>
                            Since Liechtenstein has no embassy in India, the visa issuance is handled by Switzerland. You must apply for a Swiss Schengen visa and indicate Liechtenstein as your main destination. You will book an appointment at VFS Global (Swiss), submit your biometrics, and show proof of funds.
                        </p>

                        <h3 className={styles.subTitle}>2. How to get Liechtenstein visa?</h3>
                        <p className={styles.faqAnswer}>
                            To get a Liechtenstein visa, you apply for a Short-Stay Schengen Visa (Type C) via the Swiss consulate. You need a valid passport, flight reservations (usually to Zurich), and accommodation in Liechtenstein. Let GVI guide you to ensure your itinerary meets the strict Swiss standards.
                        </p>

                        <h3 className={styles.subTitle}>3. How to apply Liechtenstein visa online?</h3>
                        <p className={styles.faqAnswer}>
                            You can fill out the application form online on the Swiss government's visa portal. However, you cannot complete the <i>entire</i> process online; you must physically visit a VFS center for biometrics and document submission.
                        </p>

                        <h3 className={styles.subTitle}>4. Is there an E-Visa for Liechtenstein?</h3>
                        <p className={styles.faqAnswer}>
                            No, currently there is no E-Visa for Indian citizens. You must go through the standard sticker visa process via the Swiss representation.
                        </p>

                        <h3 className={styles.subTitle}>5. How to check Liechtenstein visa status?</h3>
                        <p className={styles.faqAnswer}>
                            Once you submit your application at VFS (Swiss), you will get a reference number. You can use this on the VFS Global website to track your passport. If you apply through Global Visa Internationals, we monitor the status daily and update you via WhatsApp.
                        </p>

                        <h3 className={styles.subTitle}>6. How much is Liechtenstein visa fee?</h3>
                        <p className={styles.faqAnswer}>
                            For adults, the fee is €90 (approx. ₹8,200) and for children (6-12 years), it is €45. Apart from this, there are VFS service charges. Note that fees are often pegged to the Swiss Franc (CHF). Contact us for the exact daily rate.
                        </p>

                        <h3 className={styles.subTitle}>7. Can I enter Liechtenstein with a Schengen Visa?</h3>
                        <p className={styles.faqAnswer}>
                            Absolutely! Liechtenstein is part of the Schengen area. A valid visa issued by any member country allows you to enter Liechtenstein. However, there are no border controls between Switzerland and Liechtenstein.
                        </p>

                        <h3 className={styles.subTitle}>8. Do I need a separate visa for Switzerland?</h3>
                        <p className={styles.faqAnswer}>
                            No. Since Switzerland and Liechtenstein share a customs and visa union, the same visa covers both. In fact, you will likely fly into Zurich (Switzerland) and drive/bus to Liechtenstein.
                        </p>

                        <h3 className={styles.subTitle}>9. What is the currency in Liechtenstein?</h3>
                        <p className={styles.faqAnswer}>
                            Liechtenstein uses the Swiss Franc (CHF). While Euros are widely accepted, it is better to have CHF for smaller transactions. Ensure your bank statements reflect enough funds to cover the high cost of living there.
                        </p>

                        <h3 className={styles.subTitle}>10. How to Liechtenstein visa for business?</h3>
                        <p className={styles.faqAnswer}>
                            For business trips, you must provide an invitation letter from the Liechtenstein-based company. The application process (via Switzerland) remains similar to the tourist category but requires proof of business relations.
                        </p>

                        <h3 className={styles.subTitle}>11. Liechtenstein which visa?</h3>
                        <p className={styles.faqAnswer}>
                            For a holiday, choose 'Type C Tourist'. For business, 'Type C Business'. For work or residence longer than 90 days, you need a 'Type D National Visa', which requires direct interaction with the migration office in Vaduz.
                        </p>
                    </div>
                </div>


                <div className={styles.formSection}>
                    <VisaForm />
                </div>

            </div >
            <section>
                <ReviewSchema />
                <ReviewCarousel />
            </section>

        </>
    );
}
