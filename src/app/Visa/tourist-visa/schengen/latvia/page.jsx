import styles from "@/Components/Visa.module.css";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

export const metadata = {
    metadataBase: new URL("https://www.globalvisainternationals.com"),

    // OPTIMIZED: Includes main keywords: Country, Service, Location, and Brand.
    title: "Latvia Visa from India | Top Consultants in Bangalore | GVI",

    // OPTIMIZED: Highlights the unique "Hello Verify" step which users struggle with.
    // Keeps it punchy and action-oriented.
    description:
        "Get your Latvia Tourist Visa (Schengen) with Global Visa Internationals. Expert help with Hello Verify, VFS appointments & docs. 99% Success. Apply Now!",

    keywords: [
        "Latvia visa from India",
        "Latvia tourist visa requirements",
        "Schengen visa agents Bangalore",
        "Hello Verify Latvia registration",
        "VFS Latvia appointment India",
        "Latvia visa fees 2026",
        "Latvia visa processing time",
        "Riga tourist visa",
        "Latvia visa application form",
        "Schengen visa consultants India",
        "Europe visa from Bangalore",
        "Latvia business visa",
        "Latvia visa documents checklist",
        "Latvia visa rejection reasons",
        "Latvia visa for Indian citizens",
        "GVI visa services",
        "Latvia visa tracking",
        "Baltic countries visa",
        "Latvia entry requirements",
        "VFS Global Latvia"
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

    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/latvia",

    alternates: {
        canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/latvia",
    },

    openGraph: {
        // OPTIMIZED: Engaging title for social sharing (Facebook/LinkedIn/WhatsApp)
        title: "Apply for Latvia Tourist Visa | Expert Agents in Bangalore",
        description:
            "Planning a trip to Riga? Global Visa Internationals provides end-to-end Latvia Schengen visa assistance. We handle Hello Verify, forms & VFS appointments.",
        url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/latvia",
        siteName: "Global Visa Internationals",
        locale: "en_IN",
        images: [
            {
                // Updated image path to reflect Latvia
                url: "https://www.globalvisainternationals.com/tourist-visa/latvia-Tourist-Visa-Assistance-GVI.jpg",
                width: 1200,
                height: 630,
                alt: "Latvia Tourist Visa Assistance by Global Visa Internationals",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        site: "@GLOBALVISA1505",
        title: "Latvia Tourist Visa Experts | GVI Bangalore",
        description:
            "Get your Latvia Schengen visa approved easily. We assist with the mandatory Hello Verify process and VFS slots in India.",
        images: [
            "https://www.globalvisainternationals.com/tourist-visa/latvia-Tourist-Visa-Assistance-GVI.jpg",
        ],
    },

    other: {
        "geo.region": "IN-KA",
        "geo.placename": "Bangalore",
        ICBM: "12.9716,77.5946",

        // AI / Semantic Optimization (AEO)
        "ai-content-type": "latvia-schengen-visa-guide",
        "ai-primary-topic": "Latvia Schengen Visa Rules 2026",
        "ai-secondary-topic": "Hello Verify, VFS Appointments, Riga Travel",
        "ai-user-intent": "how to apply for latvia tourist visa from india without rejection",
    },
};


export default function Latvia_Tourist_Visa_Assistance() {
    const pageUrl =
        "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/latvia";

    const jsonLdSchemas = [
        // Breadcrumb Schema
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.globalvisainternationals.com"
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Schengen Tourist Visa",
                    item: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen"
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Latvia Tourist Visa",
                    item: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/latvia"
                }
            ]
        },

        // Organization Schema
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Global Visa Internationals",
            url: "https://www.globalvisainternationals.com",
            logo: "https://www.globalvisainternationals.com/gvilogo.png",
            email: "operations@globalvisainternationals.com",
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    telephone: "+91-7022213466",
                    contactType: "Customer Service",
                    areaServed: "IN",
                    availableLanguage: ["English", "Kannada", "Hindi"]
                }
            ],
            sameAs: [
                "https://www.facebook.com/globalvisainternationals/",
                "https://www.instagram.com/globalvisa_internationals/",
                "https://www.linkedin.com/company/global-visa-internationals/",
                "https://x.com/GLOBALVISA1505",
                "https://www.youtube.com/@globalVisaInternationals",
                "https://www.google.com/maps/place/Global+Visa+Internationals"
            ],
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "G-F9, Business Point, 137 Brigade Road, Next to Brigade Tower",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560025",
                addressCountry: "IN"
            }
        },

        // LocalBusiness Schema
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Global Visa Internationals",
            image:
                "https://www.globalvisainternationals.com/tourist-visa/latvia-Tourist-Visa-Assistance-GVI.jpg",
            "@id": "https://www.globalvisainternationals.com",
            url: "https://www.globalvisainternationals.com",
            telephone: "+91-7022213466",
            email: "operations@globalvisainternationals.com",
            priceRange: "₹₹",
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "G-F9, Business Point, 137 Brigade Road, Next to Brigade Tower",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560025",
                addressCountry: "IN"
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9716,
                longitude: 77.5946
            },
            openingHours: "Mo-Sa 10:00-18:00",
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "314"
            }
        },

        // Service Schema
        {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Latvia Tourist Visa Assistance",
            provider: {
                "@type": "Organization",
                name: "Global Visa Internationals",
                url: "https://www.globalvisainternationals.com"
            },
            areaServed: { "@type": "Place", name: "India" },
            description:
                "Expert assistance for Latvia Schengen Visa for Indian citizens. We handle the mandatory Hello Verify registration, VFS appointments, and documentation.",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Latvia Visa Services",
                itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Latvia Tourist Visa Assistance" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Latvia Hello Verify Registration Support" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Latvia Business Visa Guidance" } }
                ]
            }
        },

        // WebPage Schema
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Latvia Tourist Visa Assistance from India",
            url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/latvia",
            description:
                "Apply for your Latvia Tourist Visa with GVI. We simplify the Hello Verify process and secure VFS appointments in Bangalore and across India.",
            inLanguage: "en-IN",
            isPartOf: {
                "@type": "WebSite",
                url: "https://www.globalvisainternationals.com"
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
                    "name": "How to get Latvia visa from India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Getting a Latvia visa from India is straightforward but has a unique twist. First, you must clear the 'Hello Verify' document check online. Once approved, you book a VFS appointment, submit your biometric data, and show proof of funds (approx. ₹2-3 Lakhs). Want to avoid the headache of online verifications? Global Visa Internationals can handle the entire Hello Verify process for you."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How to get Latvia visa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To get a Latvia visa, you generally need to apply for a Short-Stay Schengen Visa (Type C). You'll need a valid passport, travel insurance, flight reservations, and proof of accommodation. The process involves submitting these documents to the embassy or VFS center in your country. If you are in India, let GVI guide you for a higher success rate."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How to apply Latvia visa online?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can fill out the application form online on the official Latvian authorities' website. However, Indian citizens cannot complete the *entire* process online; you must physically visit a VFS center for biometrics after your 'Hello Verify' check is cleared. Need help filling the form without errors? We are just a call away."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I apply for Latvia visa online?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Partially, yes. You fill the form and complete the document verification online. But for the visa sticker to be placed in your passport, a physical visit to the visa center is mandatory. It's not a fully digital E-Visa like some other countries."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How to check Latvia visa status?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Once you submit your application at VFS, you will get a reference number. You can use this on the VFS Global website to track your passport. If you apply through Global Visa Internationals, we keep checking the status for you and update you immediately on WhatsApp."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much is Latvia visa fee?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For adults, the embassy fee is €90 (approx. ₹8,200) and for children (6-12 years), it is €45. Apart from this, there are VFS service charges and the Hello Verify fee. If you want a clear breakdown of the total cost in Rupees, contact our Bangalore team today."
                    }
                },

                // --- International / Other Region Questions ---



                // --- General & Technical Questions ---
                {
                    "@type": "Question",
                    "name": "Can I enter Latvia with Schengen Visa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely! A valid Schengen visa issued by any member country allows you to enter Latvia, provided you haven't exceeded your 90-day limit. Ideally, your first point of entry should be the country that issued the visa, but visiting Latvia later is perfectly fine."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is Latvia visa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It is an official permit that allows foreign nationals to enter, stay, and travel within the Republic of Latvia. For tourists, it is a 'Schengen Visa' that opens the door to 29 European countries. Planning a trip? Let GVI simplify the paperwork for you."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is Latvia Golden Visa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The 'Golden Visa' refers to Latvia's residence-by-investment program. By purchasing real estate or investing in a business in Latvia, non-EU citizens can get a temporary residence permit. It's a popular route for investors seeking EU residency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why does Latvia offer a retirement visa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Latvia offers residence permits to retirees to attract financial capital and boost the local economy. However, this is strictly regulated and requires proof of a substantial pension income. If you are just looking to visit for a holiday, a Tourist Visa is the right choice."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How to Latvia visa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you are wondering how to go about the process, simply start by gathering your documents (Passport, Bank Statement, Photos). Then, contact a trusted consultant like Global Visa Internationals in Bangalore to handle the appointments and forms for you."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Latvia which visa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you are going for a holiday, choose the 'Type C Tourist Visa'. For business, select 'Type C Business'. For studies or work longer than 90 days, you need a 'Type D National Visa'. Confused about which one fits? Call us, and we will advise you."
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
                    src="/tourist-visa/latvia-Tourist-Visa-Assistance-GVI.jpg"
                    alt="Latvia Tourist Visa Assistance GVI"
                    className={styles.VisaImage}
                />
            </div>

            <div className={styles.VisaSec}>

                <div className={styles.VisaData}>
                    {/* --- H1: High-Impact, SEO-Rich Title --- */}
                    <h1 className={styles.Title}>Latvia Tourist Visa (Schengen) from India 2026 - Eligibility, Requirements & Fees | Global Visa Internationals</h1>

                    <h2 className={styles.subTitle}>What is a Latvia Schengen Visa?</h2>
                    <p>
                        A <b className={styles.strong}>Latvia Tourist Visa</b> is your gateway to Europe. As a member of the <b className={styles.strong}>Schengen Area</b>, holding a valid Latvia visa allows you to travel freely to 28 other European countries—including France, Germany, and Switzerland—without separate documentation.
                    </p>
                    <p>
                        For travelers seeking a <b className={styles.strong}>Europe tourist visa from India</b> in 2026, Latvia is an excellent choice. It offers a straightforward entry point with clear rules, often making it easier to secure than visas for more crowded Western European nations.
                    </p>

                    <h2 className={styles.subTitle}>Types of Latvia Visas for Indian Citizens</h2>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <h3 className={styles.subTitle}>Short-Stay Tourist Visa (Type C)</h3>
                            <p>
                                The most common <b className={styles.strong}>Latvia visa for Indian citizens</b>. It is ideal for holidays, sightseeing, and visiting friends, allowing a stay of up to <b className={styles.strong}>90 days</b>.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.subTitle}>Airport Transit Visa (Type A)</h3>
                            <p>
                                Mandatory if you are passing through the international zone of Riga International Airport without entering the country.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.subTitle}>National Long-Stay Visa (Type D)</h3>
                            <p>
                                For stays exceeding 90 days (e.g., study or work). Note that the <b className={styles.strong}>Latvia visa application form</b> and process for this category differ from the tourist visa.
                            </p>
                        </div>
                    </div>

                    <h2 className={styles.subTitle}>Latvia Tourist Visa Eligibility & Requirements</h2>
                    <p>To successfully <b className={styles.strong}>apply for a Latvia visa</b> in 2026, you must meet these non-negotiable criteria:</p>
                    <ul className={styles.checkList}>
                        <li><b className={styles.strong}>Valid Passport:</b> Must be valid for at least 3 months beyond your return date.</li>
                        <li><b className={styles.strong}>Indian Residency:</b> You must be a legal resident currently living in India.</li>
                        <li><b className={styles.strong}>Hello Verify Registration:</b> <span style={{ color: '#d9534f' }}>**Crucial Step:**</span> Unlike other Schengen states, the <b className={styles.strong}>Latvia Embassy India</b> requires a mandatory document pre-check via the "Hello Verify" portal.</li>
                        <li><b className={styles.strong}>Financial Stability:</b> You must meet the specific <b className={styles.strong}>Latvia visa financial requirements</b>, proving you have sufficient funds for your entire trip.</li>
                    </ul>

                    <h2 className={styles.subTitle}>Documents Checklist for Latvia Schengen Visa</h2>
                    <p>Incomplete documentation is the top reason for refusal. Use this checklist to ensure your <b className={styles.strong}>Latvia Schengen visa documents</b> are in order:</p>
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
                                <td>Completed online, printed, and signed by the applicant.</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Hello Verify Confirmation</b></td>
                                <td>Proof of successful document upload (Unique to Latvia).</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Photographs</b></td>
                                <td>Two recent photos (35x45mm, matte finish, 80% face coverage).</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Travel Insurance</b></td>
                                <td><b className={styles.strong}>Valid travel insurance for Latvia</b> with minimum coverage of €30,000.</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Flight Itinerary</b></td>
                                <td>Round-trip <b className={styles.strong}>flight itinerary for visa</b> showing entry/exit from the Schengen zone.</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Proof of Accommodation</b></td>
                                <td>Confirmed hotel bookings or an OCMA-approved invitation letter if staying with a host.</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Financial Proof</b></td>
                                <td>3 months' bank statements (stamped) and ITR slips for the last 2 years.</td>
                            </tr>
                            <tr>
                                <td><b className={styles.strong}>Cover Letter</b></td>
                                <td>A detailed <b className={styles.strong}>cover letter for Latvia visa</b> explaining your trip purpose and itinerary.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className={styles.subTitle}>Where to Apply  Latvia Visa?</h2>
                    <p>
                        The Embassy of Latvia has outsourced visa collection to <b className={styles.strong}>VFS Global</b>. You generally cannot apply directly at the embassy.
                    </p>
                    <p>
                        You must visit the nearest center to submit your application. Centers handling the <b className={styles.strong}>Latvia visa from India</b> are located in major metros including Delhi, Mumbai, and Bengaluru.
                    </p>

                    <h2 className={styles.subTitle}>How to Apply  Latvia Visa: Step-by-Step Process</h2>
                    <p>Follow this guide to navigate the <b className={styles.strong}>Latvia visa process</b> smoothly:</p>

                    <div className={styles.stepContainer}>
                        <h3 className={styles.subTitle}>Step 1: Complete Hello Verify Registration</h3>
                        <p>Before booking a slot, register on the <b>Hello Verify</b> portal. This pre-check is mandatory to ensure your eligibility before you visit VFS.</p>

                        <h3 className={styles.subTitle}>Step 2: Fill the Application</h3>
                        <p>Complete the official online form. Ensure no errors, as they can lead to rejection.</p>

                        <h3 className={styles.subTitle}>Step 3: Book VFS Latvia Appointment</h3>
                        <p>Once verified, log in to VFS Global to schedule your <b className={styles.strong}>VFS Latvia appointment</b>. Slots can fill up fast during summer.</p>

                        <h3 className={styles.subTitle}>Step 4: Submit & Biometrics</h3>
                        <p>Visit the center to submit documents and provide biometric data (fingerprints). You can also opt for SMS <b className={styles.strong}>Latvia visa tracking</b> services here.</p>

                        <h3 className={styles.subTitle}>Step 5: Pay Visa Fees</h3>
                        <p>Pay the necessary <b className={styles.strong}>Latvia visa cost</b> via cash or card at the center.</p>
                    </div>

                    <h2 className={styles.subTitle}>Latvia Visa Fees in Indian Rupees (2026)</h2>
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
                            *Exchange rates fluctuate. VFS Service charges and Hello Verify fees are additional.
                        </p>
                    </div>

                    <h2 className={styles.subTitle}>Latvia Visa Processing Time India</h2>
                    <p>
                        <b className={styles.strong}>Standard Processing:</b> ~15 working days.<br />
                        <b className={styles.strong}>Peak Season (May-Sept):</b> 30-45 days.<br />
                        To avoid delays, we recommend you <b className={styles.strong}>apply for Latvia visa online</b> (start the process) at least 1 month prior to travel.
                    </p>

                    <h2 className={styles.subTitle}>Minimum Bank Balance for Latvia Visa</h2>
                    <p>
                        Latvia is affordable compared to other EU nations.
                        <br />
                        <b className={styles.strong}>Legal Requirement:</b> Approx. <b className={styles.strong}>€14 per day</b> of stay.
                        <br />
                        <b className={styles.strong}>Recommended Balance:</b> To ensure approval, maintain a closing balance of <b className={styles.strong}>₹1.5 - ₹2 Lakhs</b> per person for a standard 10-day trip.
                    </p>

                    <h2 className={styles.subTitle}>Common Latvia Visa Rejection Reasons</h2>
                    <ul>
                        <li><b className={styles.strong}>Hello Verify Failure:</b> Skipping the document pre-check step.</li>
                        <li><b className={styles.strong}>Visa Shopping:</b> Applying to Latvia but having a flight itinerary that shows you spending more time in France or Italy.</li>
                        <li><b className={styles.strong}>Insufficient Funds:</b> Bank statements that do not meet the daily financial requirement.</li>
                        <li><b className={styles.strong}>Unclear Purpose:</b> A vague cover letter or lack of confirmed accommodation.</li>
                    </ul>

                    <div className={styles.servicesSection}>
                        <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
                        <p>
                            As expert <b className={styles.strong}>Latvia visa agents</b>, GVI helps you navigate the complex Schengen rules.
                        </p>
                        <div className={styles.serviceGrid}>
                            <div className={styles.serviceItem}>
                                <b className={styles.strong}>Hello Verify Support:</b>
                                <p>We handle the technical upload process to ensure your pre-check is cleared instantly.</p>
                            </div>
                            <div className={styles.serviceItem}>
                                <b className={styles.strong}>Itinerary Management:</b>
                                <p>We craft travel plans that align with <b className={styles.strong}>Latvia tourist visa requirements</b>.</p>
                            </div>
                            <div className={styles.serviceItem}>
                                <b className={styles.strong}>Personalized Cover Letters:</b>
                                <p>Our team drafts professional letters to explain your profile to the Visa Officer.</p>
                            </div>
                        </div>

                        <div className={styles.ctaContainer}>
                            <p>Ready to visit the Baltic gem?</p>
                            <a href="/contact-us" className={styles.primaryButton}>Start Your Latvia Visa Application</a>
                        </div>
                    </div>


                    <div className={styles.faqSection}>
                        <h2 className={styles.subTitle}>Frequently Asked Questions (FAQs)</h2>

                        <h3 className={styles.subTitle}>1. How to get Latvia visa from India?</h3>
                        <p className={styles.faqAnswer}>
                            Getting a Latvia visa from India is straightforward but has a unique twist. First, you must clear the 'Hello Verify' document check online. Once approved, you book a VFS appointment, submit your biometric data, and show proof of funds (approx. ₹2-3 Lakhs). Want to avoid the headache of online verifications? Global Visa Internationals can handle the entire Hello Verify process for you.
                        </p>

                        <h3 className={styles.subTitle}>2. How to get Latvia visa?</h3>
                        <p className={styles.faqAnswer}>
                            To get a Latvia visa, you generally need to apply for a Short-Stay Schengen Visa (Type C). You'll need a valid passport, travel insurance, flight reservations, and proof of accommodation. The process involves submitting these documents to the embassy or VFS center in your country. If you are in India, let GVI guide you for a higher success rate.
                        </p>

                        <h3 className={styles.subTitle}>3. How to apply Latvia visa online?</h3>
                        <p className={styles.faqAnswer}>
                            You can fill out the application form online on the official Latvian authorities' website. However, Indian citizens cannot complete the <i>entire</i> process online; you must physically visit a VFS center for biometrics after your 'Hello Verify' check is cleared. Need help filling the form without errors? We are just a call away.
                        </p>

                        <h3 className={styles.subTitle}>4. Can I apply for Latvia visa online?</h3>
                        <p className={styles.faqAnswer}>
                            Partially, yes. You fill the form and complete the document verification online. But for the visa sticker to be placed in your passport, a physical visit to the visa center is mandatory. It's not a fully digital E-Visa like some other countries.
                        </p>

                        <h3 className={styles.subTitle}>5. How to check Latvia visa status?</h3>
                        <p className={styles.faqAnswer}>
                            Once you submit your application at VFS, you will get a reference number. You can use this on the VFS Global website to track your passport. If you apply through Global Visa Internationals, we keep checking the status for you and update you immediately on WhatsApp.
                        </p>

                        <h3 className={styles.subTitle}>6. How much is Latvia visa fee?</h3>
                        <p className={styles.faqAnswer}>
                            For adults, the embassy fee is €90 (approx. ₹8,200) and for children (6-12 years), it is €45. Apart from this, there are VFS service charges and the Hello Verify fee. If you want a clear breakdown of the total cost in Rupees, contact our Bangalore team today.
                        </p>



                        <h3 className={styles.subTitle}>7. Can I enter Latvia with Schengen Visa?</h3>
                        <p className={styles.faqAnswer}>
                            Absolutely! A valid Schengen visa issued by any member country allows you to enter Latvia, provided you haven't exceeded your 90-day limit. Ideally, your first point of entry should be the country that issued the visa, but visiting Latvia later is perfectly fine.
                        </p>

                        <h3 className={styles.subTitle}>8. What is Latvia visa?</h3>
                        <p className={styles.faqAnswer}>
                            It is an official permit that allows foreign nationals to enter, stay, and travel within the Republic of Latvia. For tourists, it is a 'Schengen Visa' that opens the door to 29 European countries. Planning a trip? Let GVI simplify the paperwork for you.
                        </p>

                        <h3 className={styles.subTitle}>9. What is Latvia Golden Visa?</h3>
                        <p className={styles.faqAnswer}>
                            The 'Golden Visa' refers to Latvia's residence-by-investment program. By purchasing real estate or investing in a business in Latvia, non-EU citizens can get a temporary residence permit. It's a popular route for investors seeking EU residency.
                        </p>

                        <h3 className={styles.subTitle}>10. Why does Latvia offer a retirement visa?</h3>
                        <p className={styles.faqAnswer}>
                            Latvia offers residence permits to retirees to attract financial capital and boost the local economy. However, this is strictly regulated and requires proof of a substantial pension income. If you are just looking to visit for a holiday, a Tourist Visa is the right choice.
                        </p>

                        <h3 className={styles.subTitle}>11. How to Latvia visa?</h3>
                        <p className={styles.faqAnswer}>
                            If you are wondering how to go about the process, simply start by gathering your documents (Passport, Bank Statement, Photos). Then, contact a trusted consultant like Global Visa Internationals in Bangalore to handle the appointments and forms for you.
                        </p>

                        <h3 className={styles.subTitle}>12. Latvia which visa?</h3>
                        <p className={styles.faqAnswer}>
                            If you are going for a holiday, choose the 'Type C Tourist Visa'. For business, select 'Type C Business'. For studies or work longer than 90 days, you need a 'Type D National Visa'. Confused about which one fits? Call us, and we will advise you.
                        </p>

                        <div className={styles.ctaContainer}>
                            <h3 className={styles.subTitle}>Ready to start your journey?</h3>
                            <p>
                                Don't let paperwork delay your European dream. Contact Global Visa Internationals today for a tension-free visa experience.
                            </p>
                            <a href="/contact-us" className={styles.primaryButton}>Apply Now</a>
                        </div>
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
