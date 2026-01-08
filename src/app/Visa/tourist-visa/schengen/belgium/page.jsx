import styles from "@/Components/Visa.module.css";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";


export const metadata = {
    metadataBase: new URL("https://www.globalvisainternationals.com"),

    // OPTIMIZED: Punchy title. "(2026 Rules)" signals relevance.
    // "99% Success" builds trust immediately.
    title: "Belgium Visa Agents Bangalore (2026 Rules) | 99% Success | GVI",

    // OPTIMIZED: Addresses the #1 destination (Brussels) and the #1 pain point (Appointments).
    // Action-oriented ("Chat now").
    description:
        "Visiting Brussels? We secure your Belgium Schengen visa appointment & handle 2026 documentation. 99% Success Rate. Expert agents in Bangalore. Chat now!",

    // BRAND AUTHORITY (E-E-A-T)
    creator: "Global Visa Internationals",
    publisher: "Global Visa Internationals",
    category: "Travel & Visa Services",

    keywords: [
        // High Value / High Intent
        "Belgium tourist visa from India",
        "Belgium Schengen visa requirements 2026",
        "Belgium visa appointment VFS Bangalore",
        "Brussels tourist visa",
        "Antwerp business visa", // High value business travel
        "Belgium visa consultants Bangalore",
        "apply Belgium visa online",
        "Belgium visa fees 2026",

        // Niche / Long Tail
        "Schengen visa for Belgium",
        "Best Belgium visa agents in Bangalore",
        "Belgium visa application center Bangalore",
        "Top Belgium visa consultants in India",
        "Visa agents for Belgium in Indiranagar",
        "Belgium visa processing time India",
        "Belgium visa rejection assistance",
        "VFS Belgium visa appointment help",
        "Belgium travel insurance requirements",
        "Global Visa Internationals Belgium"
    ],

    // OPTIMIZED ROBOTS (Object format preferred for Next.js 14+)
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

    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/belgium",

    alternates: {
        canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/belgium",
    },

    // MOBILE OPTIMIZATION
    appleWebApp: {
        title: "GVI Belgium",
        statusBarStyle: "default",
        capable: true,
    },
    formatDetection: {
        telephone: false, // Prevents iOS from blue-linking phone numbers
    },

    openGraph: {
        // Social Title: Focuses on the solution (Approval)
        title: "Get Your Belgium Visa Approved | 99% Success Rate | GVI",
        description:
            "Visiting Brussels or Bruges in 2026? We handle the entire Schengen visa process—from VFS appointments to accommodation proof. Apply with confidence.",
        url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/belgium",
        siteName: "Global Visa Internationals",
        locale: "en_IN",
        type: "website",
        images: [
            {
                // WHATSAPP FIX: Version query (?v=2) forces a fresh scrape
                url: "https://www.globalvisainternationals.com/tourist-visa/Belgium-Tourist-Visa-Assistance-GVI.jpg?v=2",
                width: 1200,
                height: 630,
                alt: "Belgium Tourist Visa Assistance 2026",
                type: "image/jpeg", // CRITICAL for WhatsApp
            },
            // Fallback square image
            {
                url: "https://www.globalvisainternationals.com/tourist-visa/Belgium-Tourist-Visa-Assistance-GVI.jpg?v=2&thumb=1",
                width: 400,
                height: 400,
                alt: "GVI Belgium Visa Agents",
                type: "image/jpeg",
            }
        ],
    },

    twitter: {
        card: "summary_large_image",
        site: "@GLOBALVISA1505",
        creator: "@GLOBALVISA1505",
        title: "Belgium Visa Experts (2026) | Tourist & Business | GVI",
        description:
            "Don't let rejection ruin your Belgian holiday. Expert Schengen visa assistance in Bangalore. 99% Success Rate.",
        images: [
            "https://www.globalvisainternationals.com/tourist-visa/Belgium-Tourist-Visa-Assistance-GVI.jpg?v=2",
        ],
    },

    other: {
        "article:published_time": "2026-01-08",
        "article:author": "Global Visa Internationals Team",
        "geo.region": "IN-KA",
        "geo.placename": "Bangalore",
        "ICBM": "12.9716,77.5946",

        // AI / Semantic Optimization (AEO)
        "ai-content-type": "belgium-schengen-visa-guide",
        "ai-primary-topic": "Belgium Schengen Visa Rules 2026",
        "ai-secondary-topic": "VFS Appointments, Brussels & Bruges Travel",
        "ai-user-intent": "how to apply for belgium tourist visa from india without rejection",
    },
};

export default function Belgium_Tourist_Visa_Assistance() {
    const pageUrl =
        "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/belgium";

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
                    item: "https://www.globalvisainternationals.com",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Belgium Tourist Visa",
                    item: pageUrl,
                },
            ],
        },

        // Organization (Primary Entity)
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
                    availableLanguage: ["English", "Kannada", "Hindi"],
                },
            ],
            sameAs: [
                "https://www.facebook.com/globalvisainternationals/",
                "https://www.instagram.com/globalvisa_internationals/",
                "https://www.linkedin.com/company/global-visa-internationals/",
                "https://x.com/GLOBALVISA1505",
                "https://www.youtube.com/@globalVisaInternationals",
                "https://www.google.com/maps/place/Global+Visa+Internationals",
            ],
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "G-F9, Business Point, 137 Brigade Road, Next to Brigade Tower",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560025",
                addressCountry: "IN",
            },
        },

        // LocalBusiness Schema
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Global Visa Internationals",
            image:
                "https://www.globalvisainternationals.com/tourist-visa/Belgium-Tourist-Visa-Assistance-GVI.jpg",
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
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9716,
                longitude: 77.5946,
            },
            openingHours: "Mo-Sa 10:00-18:00",
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "314",
            },
        },

        // Service Schema
        {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Belgium Tourist Visa Assistance",
            provider: {
                "@type": "Organization",
                name: "Global Visa Internationals",
                url: "https://www.globalvisainternationals.com",
            },
            areaServed: {
                "@type": "Place",
                name: "India",
            },
            description:
                "End-to-end Belgium Tourist Visa assistance for Indian travellers — documentation, form filling, appointment scheduling, and interview guidance by Global Visa Internationals.",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Visa Services",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Belgium Tourist Visa Assistance",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Belgium Business Visa Assistance",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Belgium Visitor Visa Guidance",
                        },
                    },
                ],
            },
        },

        // WebPage Schema
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Belgium Tourist Visa Assistance from India",
            url: pageUrl,
            description:
                "Expert Belgium Tourist Visa assistance for Indian travellers — from documentation to embassy appointments, GVI makes your visa process hassle-free.",
            inLanguage: "en-IN",
            isPartOf: {
                "@type": "WebSite",
                url: "https://www.globalvisainternationals.com",
            },
        },

        // FAQPage Schema
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How long does it take to get a Belgium tourist visa from India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Processing for a Belgium tourist visa from India usually takes 10-15 working days after your appointment, depending on the consulate and season.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What documents are required for a Belgium tourist visa?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You’ll need a valid passport, completed visa form, travel itinerary, proof of accommodation, travel insurance, financial proof, and a cover letter stating your purpose of visit.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Global Visa Internationals assist with Belgium business visas?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Global Visa Internationals offers full support for Belgium business visa applications — including document review, invitation letter verification, and appointment scheduling.",
                    },
                },
            ],
        },
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
                    src="/tourist-visa/Belgium-Tourist-Visa-Assistance-GVI.jpg"
                    alt="Belgium Tourist Visa Assistance GVI"
                    className={styles.VisaImage}
                />
            </div>

            <div className={styles.VisaSec}>
                <div className={styles.VisaData}>
                    <h1 className={styles.Title}>
                        Apply for Belgium Tourist Visa from India | Belgium Schengen Visa Experts
                    </h1>

                    <h4 className={styles.subTitle}>
                        ✈ Travel to Belgium with Confidence — Expert Belgium Tourist Visa Assistance for Indian Travellers
                    </h4>

                    <p>
                        Planning a trip to Belgium? A <b className={styles.strong}>Belgium tourist visa from India</b> (short-stay Schengen Type C)
                        allows Indian travellers to visit Belgium and other Schengen countries for tourism, leisure, or visiting family and friends.
                        Whether you want to explore Brussels, Ghent, Bruges, or Antwerp,{" "}
                        <b className={styles.strong}>Global Visa Internationals (GVI)</b> — your trusted Belgium visa consultants in India—
                        provide complete assistance from Belgium tourist visa application filing to documentation, appointment booking, and post-submission updates.
                    </p>

                    {/* --- Sales Pitch --- */}
                    <div className={styles.salesPitch}>
                        <p>
                            <b className={styles.strong}>Let Global Visa Internationals (GVI) take the stress out of your Belgium visa process.</b>
                            We handle everything professionally, ensuring accuracy, speed, and embassy compliance.
                        </p>
                        <ul>
                            <li>
                                <b className={styles.strong}>Complete Documentation:</b> We collect, prepare, and verify all required{" "}
                                Belgium tourist visa documents for you.
                            </li>
                            <li>
                                <b className={styles.strong}>Application Form Filing:</b> Our experts accurately fill out your{" "}
                                Belgium visa application form as per embassy standards.
                            </li>
                            <li>
                                <b className={styles.strong}>Tailored Case File:</b> We prepare your{" "}
                                Belgium tourist visa checklist and documentation plan based on your travel history.
                            </li>
                            <li>
                                <b className={styles.strong}>Professional Drafting:</b> GVI drafts your cover letter and provides NOC or leave approval letter samples.
                            </li>
                            <li>
                                <b className={styles.strong}>Notarization Support:</b> If required, we handle notarization — no need to contact lawyers or visit courts.
                            </li>
                            <li>
                                <b className={styles.strong}>Simple Process for You:</b> Just share your documents, review the set we prepare, then visit{" "}
                                VFS for biometrics and submission.
                            </li>
                            <li>
                                <b className={styles.strong}>A-to-Z Handling:</b> After submission, GVI manages the entire process — tracking, updates, and final delivery.
                            </li>
                        </ul>
                        <p>
                            <b className={styles.strong}>
                                With GVI, your Belgium tourist visa application is smooth, accurate, and completely stress-free.
                            </b>
                        </p>
                        {/* Call-to-Action Button */}
                        <a href="tel:+917022213466" className={styles.callButton}>
                            📞 Get Free Eligibility Check
                        </a>
                    </div>

                    <p>
                        With years of Schengen visa experience, GVI ensures a transparent, reliable, and success-focused application journey for every traveller.
                    </p>

                    <h2 className={styles.subTitle}>What Is a Belgium Tourist Visa?</h2>
                    <p>
                        A Belgium tourist visa (Type C - short stay) allows travel for sightseeing or visiting relatives.
                        It also permits entry into other Schengen countries for up to 90 days within a 180-day period.
                    </p>
                    <p>
                        Our experts help you apply for a Belgium Schengen visa from India , guiding you through
                        Belgium tourist visa requirements and Belgium visa appointment  booking to ensure a seamless process.
                    </p>

                    <h2 className={styles.subTitle}>Schengen to Belgium Visa Duration Rule</h2>
                    <p>
                        A Belgium Schengen visa for Indian citizens is typically issued for up to 90 days within a 180-day period.
                        The validity and entries depend on your travel history and embassy discretion.
                        GVI ensures your application meets all compliance conditions.
                    </p>

                    <h2 className={styles.subTitle}>How to Apply for Belgium Tourist Visa</h2>
                    <p>If you’re wondering how to apply for a Belgium tourist visa, here’s how Global Visa Internationals makes it easy:</p>
                    <ol>
                        <li>
                            <b className={styles.strong}>Step 1 - Free Eligibility Check:</b> Confirm your travel purpose fits the{" "}
                            Belgium tourist visa category.
                        </li>
                        <li>
                            <b className={styles.strong}>Step 2 - Gather Documents:</b> We assist with the official{" "}
                            Belgium tourist visa documents required.
                        </li>
                        <li>
                            <b className={styles.strong}>Step 3 - Form Completion:</b> Our team fills your{" "}
                            Belgium tourist visa application form accurately.
                        </li>
                        <li>
                            <b className={styles.strong}>Step 4 - Appointment Booking:</b> GVI schedules your{" "}
                            Belgium visa appointment at the nearest VFS center.
                        </li>
                        <li>
                            <b className={styles.strong}>Step 5 - File Submission:</b> We ensure your{" "}
                            Belgium visa application is complete and embassy-ready.
                        </li>
                        <li>
                            <b className={styles.strong}>Step 6 - Track & Receive:</b> We track updates and notify you when your passport is ready.
                        </li>
                    </ol>

                    <h2 className={styles.subTitle}>Belgium Tourist Visa Requirements for Indian Citizens</h2>
                    <p>Applicants for a Belgium visitor visa must provide:</p>
                    <ul>
                        <li>Valid passport (minimum 6 months validity)</li>
                        <li>Completed Belgium visa application form</li>
                        <li>Photos as per Schengen specifications</li>
                        <li>Travel insurance (minimum €30,000 coverage)</li>
                        <li>Financial proof - bank statements (₹3-5 lakh balance), ITRs, or sponsorship letters</li>
                        <li>Cover letter explaining travel purpose</li>
                    </ul>
                    <p>GVI verifies each document for accuracy and embassy compliance before submission.</p>
                    {/* Call-to-Action Button */}
                    <a href="tel:+917022213466" className={styles.callButton}>
                        📞 Get Free Eligibility Check
                    </a>
                    <h2 className={styles.subTitle}>Belgium Tourist Visa Fees & Processing Time (India 2026)</h2>
                    <ul>
                        <li>
                            <b className={styles.strong}>Adult Visa Fee:</b> €90 (~₹9,300)
                        </li>
                        <li>
                            <b className={styles.strong}>Children (6-12 yrs):</b> €45 (~₹4,700)
                        </li>
                        <li>
                            <b className={styles.strong}>Children below 6 yrs:</b> Free
                        </li>
                        <li>
                            <b className={styles.strong}>VFS Charges:</b> Additional (depending on city)
                        </li>
                    </ul>
                    <p>
                        The average Belgium tourist visa processing time is 15-20 working days. GVI ensures your file
                        is embassy-ready to minimize delays.
                    </p>

                    <h2 className={styles.subTitle}>Common Reasons for Belgium Tourist Visa Rejection</h2>
                    <p>
                        Rejections usually occur due to incomplete paperwork or unclear travel intent. Our experts eliminate these issues:
                    </p>
                    <ul>
                        <li>    <b className={styles.strong}>Incomplete Documents:</b> We audit your Belgium tourist visa application before submission.</li>
                        <li>    <b className={styles.strong}>Insufficient Funds:</b> We help structure your Belgium visa financial proof.</li>
                        <li>    <b className={styles.strong}>Unclear Purpose:</b> We draft a professional cover letter explaining your travel reason clearly.</li>
                        <li>    <b className={styles.strong}>Poor Preparation:</b> Our mock interviews prepare you for embassy questions.</li>
                    </ul>

                    <p>
                        Our goal: boost your Belgium tourist visa success rate from India and minimize rejection risks.
                    </p>

                    <h2 className={styles.subTitle}>Why Choose Global Visa Internationals — Best Belgium Visa Consultants in India</h2>
                    <p>
                        <b className={styles.strong}>Global Visa Internationals (GVI)</b> is a professional Belgium visa consultancy offering personalized support for
                        every traveller. From Belgium visa online application to embassy submission, we make the process seamless.
                    </p>

                    <h4 className={styles.strong}>Why Travellers Trust Us:</h4>
                    <ul>
                        <li>1200+ Schengen visas processed since 2018</li>
                        <li>High approval &Belgium tourist visa success rate from India</li>
                        <li>End-to-end document verification and tracking</li>
                        <li>Dedicated case managers and embassy updates</li>
                        <li>Transparent pricing — no hidden charges</li>
                        <li>Special support for reapplications after rejection</li>
                    </ul>

                    {/* --- Reinforced Sales Pitch --- */}
                    <div className={styles.salesPitch}>
                        <p>
                            <b className={styles.strong}>Leave the stress to us — we handle your Belgium visa from start to finish.</b>
                            From documentation, form filling, and appointment scheduling to embassy coordination and updates,{" "}
                            <b className={styles.strong}>Global Visa Internationals</b> ensures your Belgium Schengen visa application is accurate, complete, and
                            embassy-compliant. You simply provide your documents — we handle everything else.
                        </p>
                    </div>
                    {/* --- End Sales Pitch --- */}

                    <h2 className={styles.subTitle}>✈ Apply for Your Belgium Tourist Visa Online — Start Your Journey Today!</h2>
                    <p>
                        Whether you’re planning a family holiday, honeymoon, or solo Europe trip, it’s easier than ever to{" "}
                        apply for a Belgium tourist visa online with Global Visa Internationals.
                    </p>
                    <p className={styles.note}>
                        <b className={styles.strong}> Our experts simplify each step of your Belgium visitor visa application —</b> from eligibility to documentation,
                        ensuring 100% accuracy and embassy approval.
                    </p>

                    <div className={styles.ctaBox}>
                        <p>
                            Contact <b className={styles.strong}>Global Visa Internationals</b> today to begin your application — and let our experts turn your Belgium
                            travel dreams into reality.
                        </p>
                        <ul>
                            <li>
                                <b className={styles.strong}>Call Now:</b> +91-7022213466
                            </li>
                            <li>
                                <b className={styles.strong}>Email:</b> operations@globalvisainternationals.com
                            </li>
                            <li>
                                <b className={styles.strong}>Start Online Application:</b> <a href="#">Apply Now</a>
                            </li>
                        </ul>
                        {/* Call-to-Action Button */}
                        <a href="tel:+917022213466" className={styles.callButton}>
                            📞 Get Free Eligibility Check
                        </a>
                    </div>

                    <p>
                        Your European journey starts here — with{" "}
                        <b className={styles.strong}>Global Visa Internationals</b>, your trusted partner for hassle-free{" "}
                        Belgium tourist visa assistance in India.
                    </p>
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
