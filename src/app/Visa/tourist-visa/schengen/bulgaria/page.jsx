import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

export const metadata = {
    metadataBase: new URL("https://www.globalvisainternationals.com"),
    title: "Apply for Bulgaria Tourist Visa from India | Bulgaria Schengen Visa Experts",
    description:
        "Apply for your Bulgaria Tourist Visa from India with Global Visa Internationals (GVI). Get expert guidance for documentation, appointment booking, and interview preparation to travel smoothly across Bulgaria and the Schengen area.",
    keywords: [
        "Bulgaria tourist visa from India",
        "Bulgaria Schengen visa",
        "apply Bulgaria visa India",
        "Bulgaria visitor visa",
        "Bulgaria business visa",
        "Bulgaria visa consultants Bangalore",
        "Bulgaria visa application process",
        "Bulgaria visa documents required",
        "Bulgaria visa fees India",
        "Schengen visa for Bulgaria"
    ],
    robots: "index, follow",
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/bulgaria",
    alternates: {
        canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/bulgaria",
    },
    openGraph: {
        title: "Bulgaria Tourist Visa from India | Expert Bulgaria Schengen Visa Assistance",
        description:
            "Global Visa Internationals helps Indian travellers apply for Bulgaria tourist, visitor, and business visas. Get expert help with requirements, documentation, and appointments for your Bulgaria visa.",
        url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/bulgaria",
        siteName: "Global Visa Internationals",
        images: [
            {
                url: "https://www.globalvisainternationals.com/tourist-visa/Bulgaria-Tourist-Visa-Assistance-GVI.jpg",
                width: 1200,
                height: 630,
                alt: "Bulgaria Tourist Visa Assistance by Global Visa Internationals"
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        site: "@GLOBALVISA1505",
        title: "Bulgaria Tourist Visa from India | Global Visa Internationals (GVI)",
        description:
            "Planning a trip to Bulgaria? Get professional visa guidance from Global Visa Internationals — experts in Bulgaria tourist and Schengen visa processing for Indian travellers.",
        images: [
            "https://www.globalvisainternationals.com/tourist-visa/Bulgaria-Tourist-Visa-Assistance-GVI.jpg"
        ]
    },
    other: {
        "geo.region": "IN-KA",
        "geo.placename": "Bangalore",
        ICBM: "12.9716,77.5946"
    }
};

export default function Bulgaria_Tourist_Visa_Assistance() {
    const pageUrl =
        "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/bulgaria";

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
                    name: "Bulgaria Tourist Visa",
                    item: pageUrl
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
                "https://www.globalvisainternationals.com/tourist-visa/Bulgaria-Tourist-Visa-Assistance-GVI.jpg",
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
            serviceType: "Bulgaria Tourist Visa Assistance",
            provider: {
                "@type": "Organization",
                name: "Global Visa Internationals",
                url: "https://www.globalvisainternationals.com"
            },
            areaServed: { "@type": "Place", name: "India" },
            description:
                "End-to-end Bulgaria Tourist Visa assistance for Indian travellers — documentation, form filling, appointment scheduling, and interview guidance by Global Visa Internationals.",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Visa Services",
                itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bulgaria Tourist Visa Assistance" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bulgaria Business Visa Assistance" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bulgaria Visitor Visa Guidance" } }
                ]
            }
        },

        // WebPage Schema
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Bulgaria Tourist Visa Assistance from India",
            url: pageUrl,
            description:
                "Expert Bulgaria Tourist Visa assistance for Indian travellers — from documentation to embassy appointments, GVI makes your visa process hassle-free.",
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
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How long does it take to get a Bulgaria tourist visa from India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Processing for a Bulgaria tourist visa from India usually takes 10–15 working days after your appointment, depending on the consulate and season."
                    }
                },
                {
                    "@type": "Question",
                    name: "What documents are required for a Bulgaria tourist visa?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Required documents include passport, visa form, photos, travel itinerary, hotel booking, travel insurance, financial proof, and a cover letter."
                    }
                },
                {
                    "@type": "Question",
                    name: "Does Global Visa Internationals assist with Bulgaria business visas?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, GVI provides full support for Bulgaria business visa applications, including documentation review and appointment scheduling."
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
                    src="/tourist-visa/Bulgaria-Tourist-Visa-Assistance-GVI.jpg"
                    alt="Bulgaria Tourist Visa Assistance GVI"
                    className={styles.VisaImage}
                />
            </div>

            <div className={styles.VisaSec}>

                <div className={styles.VisaData}>
                    {/* --- H1: High-Impact, SEO-Rich Title --- */}
                    <h1 className={styles.Title}>Bulgaria Tourist Visa for Indians (2025): Your Gateway to the Schengen Zone</h1>

                    <h4 className={styles.subTitle}>✈ Expert Guidance for the Bulgarian 'Type C' Schengen Visa | 99% Success Rate Strategy | VFS Appointment Assistance</h4>

                    {/* --- The Hook: Context & Urgency --- */}
                    <p><strong>The Rules Have Changed.</strong> As of March 31, 2024, Bulgaria officially joined the <strong>Schengen Area</strong> (Air and Sea borders). This is a game-changer for Indian travelers. It transforms Bulgaria from a standalone holiday spot into a strategic, budget-friendly entry point for all of Europe.</p>
                    <p>However, this privilege comes with a price: <strong>stricter scrutiny.</strong> The documentation required for a Bulgaria Tourist Visa now mirrors the rigorous standards of Germany or France. A single error in your itinerary, a missing stamp on a bank statement, or a mismatched hotel booking can lead to a visa rejection stamp that permanently affects your travel history.</p>
                    <p><b className={styles.strong}>Global Visa Internationals (GVI)</b> bridges the gap between complex immigration laws and your dream holiday. We don't just file forms; we engineer applications for approval.</p>

                    {/* --- The Value Proposition --- */}
                    <div className={styles.salesPitch}>
                        <h2 className={styles.subTitle}>Why Elite Travelers Choose GVI?</h2>
                        <p>Applying for a Schengen visa is not a lottery; it is a legal process. We replace "hope" with "certainty."</p>
                        <ul>
                            <li><b className={styles.strong}>Priority Appointment Scouting:</b> VFS Global slots for Bulgaria are currently in high demand. Our team monitors the appointment system 24/7 to secure your biometrics slot at the earliest possible date.</li>
                            <li><b className={styles.strong}>Forensic Document Audit:</b> Visa Officers reject applications based on "reasonable doubt" regarding financial means. We audit your bank statements (last 6 months) and ITRs to highlight financial health and strong home ties, drastically reducing rejection risk.</li>
                            <li><b className={styles.strong}>Smart Itinerary Planning:</b> We craft detailed, day-by-day travel itineraries and flight reservations that align with the "Main Destination Rule," proving to the consulate that your travel intent is genuine.</li>
                            <li><b className={styles.strong}>Personal Cover Letter Drafting:</b> We write compelling cover letters that explain your trip purpose, financial sponsorship, and intent to return to India—addressing potential red flags before the officer even sees them.</li>
                        </ul>

                        {/* Primary Call-to-Action */}
                        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                            <a href="tel:+917022213466" className={styles.callButton}>⚡ Get a Free Profile Assessment</a>
                            <p style={{ fontSize: '12px', marginTop: '5px' }}>*Speak to a Schengen Specialist today</p>
                        </div>
                    </div>

                    {/* --- NEW SECTION: Detailed Document Checklist --- */}
                    <h2 className={styles.subTitle}>Comprehensive Document Checklist (2025 Updates)</h2>
                    <p>The Bulgarian Consulate requires a specific set of documents depending on your employment status. GVI ensures every document meets the ISO standards.</p>

                    <h4 style={{ color: '#0056b3', marginTop: '15px' }}> General Mandatory Documents</h4>
                    <ul>
                        <li><b className={styles.strong}>Original Passport:</b> Valid for at least 6 months beyond the return date, with at least 2 blank pages. Old passports (if any) are mandatory.</li>
                        <li><b className={styles.strong}>Schengen Visa Form:</b> Fully completed and signed (GVI handles this for you).</li>
                        <li><b className={styles.strong}>Photos:</b> 2 recent passport-sized photos (35mm x 45mm), white background, 80% face coverage, matte finish.</li>
                        <li><b className={styles.strong}>Travel Insurance:</b> Valid for the entire Schengen area with a minimum coverage of €30,000 (Covid-19 included).</li>
                    </ul>

                    <h4 style={{ color: '#0056b3', marginTop: '15px' }}>Employment-Specific Documents</h4>
                    <ul>
                        <li><b className={styles.strong}>For Salaried Employees:</b>
                            <ul>
                                <li>Original Leave Sanction Letter (NOC) from employer on company letterhead.</li>
                                <li>Last 3 months' Pay Slips.</li>
                                <li>Last 6 months' Personal Bank Statement (original with bank seal).</li>
                                <li>ITR Acknowledgment (last 3 years) or Form 16.</li>
                            </ul>
                        </li>
                        <li><b className={styles.strong}>For Self-Employed / Business Owners:</b>
                            <ul>
                                <li>GST Registration Certificate / MSME Certificate / Partnership Deed.</li>
                                <li>Company Bank Statement (Last 6 months).</li>
                                <li>Company ITR (Last 3 years).</li>
                            </ul>
                        </li>
                        <li><b className={styles.strong}>For Retirees:</b> Pension Payment Order (PPO) or updated bank statement showing pension credit.</li>
                        <li><b className={styles.strong}>For Students:</b> School ID card and NOC from the institution.</li>
                    </ul>

                    {/* --- Educational Content: The "Main Destination" Rule --- */}
                    <h2 className={styles.subTitle}>Crucial Insight: The "First Port of Entry" Rule</h2>
                    <p>Do not make the mistake of "Visa Shopping." You must apply for the <b className={styles.strong}>Bulgaria Schengen Visa</b> specifically if:</p>
                    <ul>
                        <li>Bulgaria is the <b>sole destination</b> of your entire trip.</li>
                        <li>You are visiting multiple countries, but spending the <b>maximum number of days</b> in Bulgaria.</li>
                        <li>You are spending equal days in multiple countries, but landing in <b>Sofia, Varna, or Burgas first</b>.</li>
                    </ul>
                    <p><i><strong>Warning:</strong> Applying at the Bulgarian consulate when your main destination is actually Paris or Rome will lead to an immediate rejection. GVI analyzes your itinerary to ensure jurisdictional compliance.</i></p>

                    {/* --- NEW SECTION: Common Rejection Reasons --- */}
                    <h2 className={styles.subTitle}>Why Are Bulgaria Visas Rejected? (And How We Fix It)</h2>
                    <p>The refusal rate for Schengen visas in India is approximately 18%. The most common reasons for rejection include:</p>
                    <ol>
                        <li><b className={styles.strong}>Justification for the Purpose of Stay:</b> If your itinerary looks unrealistic (e.g., visiting 5 cities in 4 days), the officer will suspect you are not a genuine tourist. <em>Solution: We create logically paced travel plans.</em></li>
                        <li><b className={styles.strong}>Unclear Subsistence Means:</b> Large, unexplained cash deposits in your bank account right before applying are a major red flag. <em>Solution: We help you present a clean financial history.</em></li>
                        <li><b className={styles.strong}>"Dummy" Flight Tickets:</b> Consulates can verify PNRs. If a reservation is cancelled before they check it, the visa is denied. <em>Solution: We assist with verifiable flight reservations.</em></li>
                    </ol>

                    {/* --- Process Roadmap --- */}
                    <h2 className={styles.subTitle}>Our 5-Step "Zero-Error" Protocol</h2>
                    <ol>
                        <li><b className={styles.strong}>Consultation & Strategy:</b> We analyze your profile (Salaried, Self-Employed, or Sponsored) to determine the strongest application route.</li>
                        <li><b className={styles.strong}>Checklist Customization:</b> You receive a personalized list of documents specific to your case (e.g., Sponsorship letters for students, Pension orders for retirees).</li>
                        <li><b className={styles.strong}>Dossier Creation:</b> Our experts fill the official Schengen Application Form and organize your bundle to meet VFS standards.</li>
                        <li><b className={styles.strong}>Appointment & Biometrics:</b> We book your slot. On the day, you simply visit the center to submit fingerprints and the file we prepared.</li>
                        <li><b className={styles.strong}>Tracking & Delivery:</b> We track your passport status daily until it is ready for collection or courier.</li>
                    </ol>

                    {/* --- FAQ / SEO Section --- */}
                    <h2 className={styles.subTitle}>Frequently Asked Questions (Indian Applicants)</h2>
                    <ul>
                        <li><b className={styles.strong}>What is the processing time?</b> Currently, the Bulgarian Consulate in India takes approximately 15 calendar days. However, peak travel seasons (Summer/Winter) can extend this. We recommend applying 45 days in advance.</li>
                        <li><b className={styles.strong}>What is the required bank balance?</b> While there is no fixed number, we recommend showing a minimum of €100 (approx. ₹9,000) per day of travel, plus proof of pre-paid accommodation and flights. A closing balance of ₹2.5 Lakhs - ₹3 Lakhs per person is safe.</li>
                        <li><b className={styles.strong}>Can I travel to Switzerland with a Bulgaria Visa?</b> Yes. As of 2024, a valid Type C Bulgarian visa allows travel to all Schengen states (Switzerland, France, Italy, etc.) provided Bulgaria remains your main destination.</li>
                        <li><b className={styles.strong}>Do I need an interview?</b> generally, no. However, the Consulate reserves the right to call applicants for a personal interview if they need clarification. GVI prepares you for this scenario.</li>
                    </ul>

                    {/* --- Final Strategic CTA --- */}
                    <div className={styles.ctaBox}>
                        <h3 style={{ margin: '0 0 10px 0' }}>Don't Gamble with Your Travel Plans</h3>
                        <p>A visa rejection doesn't just cancel a trip; it stays on your record for future applications to the UK, USA, and Canada.</p>
                        <p><strong>Global Visa Internationals</strong> has successfully processed thousands of Schengen visas for Indian citizens. Let us handle the bureaucracy while you plan the adventure.</p>

                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
                            <li>✅ <b className={styles.strong}>Expert Review:</b> +91-7022213466</li>
                            <li>📧 <b className={styles.strong}>Document Drop:</b> operations@globalvisainternationals.com</li>
                        </ul>
                        <a href="tel:+917022213466" className={styles.callButton}>📞 Secure Your Visa Consultation Now</a>
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
