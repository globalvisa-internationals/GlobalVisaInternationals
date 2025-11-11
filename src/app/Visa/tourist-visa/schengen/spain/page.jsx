import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

import { Metadata } from "next";
export const metadata = {
    metadataBase: new URL("https://www.globalvisainternationals.com"),
    title: "Apply for Spain Tourist Visa from India | Spain Schengen Visa Experts",
    description:
        "Apply for your Spain Tourist Visa from India with Global Visa Internationals (GVI). Get professional assistance for documentation, appointment booking, and interview preparation to travel across Spain and the Schengen zone with ease.",
    keywords: [
        "Spain tourist visa from India",
        "Spain Schengen visa",
        "apply Spain visa India",
        "Spain visitor visa",
        "Spain business visa",
        "Spain visa consultants Bangalore",
        "Spain visa application process",
        "Spain visa documents required",
        "Spain visa fees India",
        "Schengen visa for Spain",
        "Spain travel visa from India",
        "Spain embassy visa India",
        "Spain short stay visa",
        "Spain tourist visa requirements",
        "Spain Schengen visa appointment India",
        "Spain tourist visa assistance India",
        "Spain visa processing time",
        "Spain consulate visa application",
        "Spain visa support Bangalore",
        "Spain Schengen visa consultants India",
    ],
    robots: "index, follow",
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/spain",
    alternates: {
        canonical:
            "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/spain",
    },
    openGraph: {
        title:
            "Spain Tourist Visa from India | Expert Spain Schengen Visa Assistance",
        description:
            "Global Visa Internationals (GVI) helps Indian travellers apply for Spain tourist, visitor, and business visas. Get expert help with requirements, documentation, and appointments for your Spain visa.",
        url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/spain",
        siteName: "Global Visa Internationals",
        images: [
            {
                url: "https://www.globalvisainternationals.com/tourist-visa/Spain-Tourist-Visa-Assistance-GVI.jpg",
                width: 1200,
                height: 630,
                alt: "Spain Tourist Visa Assistance by Global Visa Internationals",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@GLOBALVISA1505",
        title:
            "Spain Tourist Visa from India | Global Visa Internationals (GVI)",
        description:
            "Planning a trip to Spain? Get professional visa guidance from Global Visa Internationals — experts in Spain tourist and Schengen visa processing for Indian travellers.",
        images: [
            "https://www.globalvisainternationals.com/tourist-visa/Spain-Tourist-Visa-Assistance-GVI.jpg",
        ],
    },
    other: {
        "geo.region": "IN-KA",
        "geo.placename": "Bangalore",
        ICBM: "12.9716,77.5946",
    },
};

export default function Spain_Tourist_Visa_Assistance() {
    const pageUrl =
        "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/spain";

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
                    name: "Spain Tourist Visa",
                    item: pageUrl,
                },
            ],
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
                "https://www.globalvisainternationals.com/tourist-visa/Spain-Tourist-Visa-Assistance-GVI.jpg",
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
            serviceType: "Spain Tourist Visa Assistance",
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
                "Comprehensive Spain Tourist Visa assistance for Indian travellers — documentation, form filling, appointment scheduling, and interview guidance by Global Visa Internationals.",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Visa Services",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Spain Tourist Visa Assistance",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Spain Business Visa Assistance",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Spain Visitor Visa Guidance",
                        },
                    },
                ],
            },
        },

        // WebPage Schema
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Spain Tourist Visa Assistance from India",
            url: pageUrl,
            description:
                "Expert Spain Tourist Visa assistance for Indian travellers — from documentation to embassy appointments, GVI makes your visa process seamless and stress-free.",
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
                    name: "How long does it take to get a Spain tourist visa from India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Processing for a Spain tourist visa from India typically takes 10–15 working days after your appointment, depending on the consulate and the season.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What documents are required for a Spain tourist visa?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You’ll need a valid passport, completed visa application form, travel itinerary, proof of accommodation, travel insurance, financial proof, and a cover letter stating your purpose of visit to Spain.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Global Visa Internationals assist with Spain business visas?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Global Visa Internationals provides complete support for Spain business visa applications — including document verification, invitation letter checks, and embassy appointment scheduling.",
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
                    src="/tourist-visa/Spain-Tourist-Visa-Assistance-GVI.jpg"
                    alt="Spain Tourist Visa Assistance GVI"
                    className={styles.VisaImage}
                />
            </div>

            <div className={styles.VisaSec}>
                <div className={styles.VisaData}>
                    <h1 className={styles.Title}>
                        Apply for Spain Tourist Visa from India | Schengen Visa Experts
                    </h1>

                    <h4 className={styles.subTitle}>
                        ✈ Travel to Spain with Confidence — Expert Spain Tourist Visa Assistance in India
                    </h4>

                    <p>
                        Planning a trip to Spain? An <b className={styles.strong}>Spain tourist visa from India</b> (short-stay Schengen Type C)
                        permits Indian passport holders to visit Spain and other Schengen countries for tourism, leisure, or visiting family and friends.
                        Whether it’s Barcelona’s architecture, Madrid’s museums, or Andalusia’s beaches, <b className={styles.strong}>Global Visa Internationals (GVI)</b> —
                        your trusted <i>Spain visa consultancy in India</i> — provides end-to-end support: document preparation,
                        <b className={styles.strong}>Spain tourist visa appointment booking</b>, interview coaching, and active post-submission tracking.
                    </p>

                    {/* --- Primary Sales Pitch (visible immediately where visitors first engage) --- */}
                    <div className={styles.salesPitch}>
                        <p>
                            <b className={styles.strong}>Make your Spain visa application simple, precise and approval-ready with GVI.</b>
                            We use embassy-tested checklists, persuasive cover letters and a case-manager approach to remove errors that cause delays.
                            From accurate application form completion to travel-proof packaging, we take care of the paperwork so you can plan your trip.
                        </p>
                        <ul>
                            <li><b className={styles.strong}>Full-service Spain visa support:</b> Document checks, slot booking, biometrics guidance.</li>
                            <li><b className={styles.strong}>Approval-focused preparation:</b> Professionally drafted cover letters, itineraries and proof-of-funds strategy.</li>
                            <li><b className={styles.strong}>Local presence:</b> Appointment support and document submission assistance across Bengaluru, Mumbai, Delhi, Chennai, Hyderabad, Kolkata.</li>
                        </ul>
                        <p><b className={styles.strong}>Fast sign-ups • Transparent pricing • Dedicated case manager</b></p>
                    </div>
                    {/* --- End Primary Sales Pitch --- */}

                    <div className={styles.ctaBox}>
                        <p>
                            Contact Global Visa Internationals today to start your Spain visa application.
                        </p>
                        <ul>
                            <li><b className={styles.strong}>Call Now:</b> +91-7022213466</li>
                            <li><b className={styles.strong}>Email:</b> operations@globalvisainternationals.com</li>
                            <li><b className={styles.strong}>Start Online Application:</b> <a href="#">Apply Now</a></li>
                        </ul>

                        <a href="tel:+917022213466" className={styles.callButton}>
                            📞 Get Free Eligibility Check
                        </a>
                    </div>

                    <p>
                        Backed by focused Schengen experience, <b className={styles.strong}>Global Visa Internationals (GVI)</b> provides step-by-step assistance
                        so your application meets Spanish consulate and visa-centre standards and avoids common pitfalls that lead to rejections.
                    </p>

                    <h2 className={styles.subTitle}>What Is a Spain Tourist Visa?</h2>
                    <p>
                        A <b className={styles.strong}>Spain tourist visa for Indian citizens</b> is a Schengen short-stay (Type C) visa that permits travel
                        for tourism or visiting relatives for up to 90 days within any 180-day period. It’s commonly called a
                        <b className={styles.strong}> Spain Schengen visa (tourist)</b> and allows entry to Spain and other Schengen countries under Schengen rules.
                    </p>

                    <h2 className={styles.subTitle}>Schengen Duration Rule for Spain</h2>
                    <p>
                        The standard rule is 90 days in any 180-day period. Visa validity, multiple-entry permissions and the length of stay are
                        decided by the consulate — a clean travel history and strong documentation increase your chances for
                        <b className={styles.strong}> multiple-entry tourist visas for Spain</b>. :contentReference[oaicite:0]{index = 0}
                    </p>

                    <h2 className={styles.subTitle}>How to Apply for a Spain Tourist Visa (India)</h2>
                    <p>GVI’s simplified workflow for <b className={styles.strong}>How to apply Spain tourist visa India</b>:</p>
                    <ol>
                        <li><b className={styles.strong}>Check Eligibility —</b> Confirm travel purpose and eligibility for a short-stay (<i>Spain short stay visa India</i>).</li>
                        <li><b className={styles.strong}>Gather Documents —</b> We provide a tailored <i>Spain tourist visa documents checklist India</i> and verify each item.</li>
                        <li><b className={styles.strong}>Complete Application Form —</b> We accurately complete the <i>Spain tourist visa application form India</i>, avoiding errors.</li>
                        <li><b className={styles.strong}>Book Appointment —</b> We handle <i>Spain visa appointment India</i> slot booking at BLS/VFS and biometrics scheduling.</li>
                        <li><b className={styles.strong}>Mock Interview & Review —</b> Prepare with likely <i>Spain visa interview questions India</i> and expert coaching.</li>
                        <li><b className={styles.strong}>Submit & Track —</b> GVI monitors your file through submission, consulate processing and passport return.</li>
                    </ol>

                    <h2 className={styles.subTitle}>
                        <b className={styles.strong}>What GVI Does — Spain Visa Processing Overview</b>
                    </h2>
                    <p>
                        We package your application to meet consular expectations and minimise the typical reasons for refusal.
                    </p>

                    <h4 className={styles.strong}>Our Spain visa services include:</h4>
                    <ol>
                        <li>Complete filing of the Spain tourist visa application form and document pack</li>
                        <li>Guidance to apply for a Spain tourist visa online and offline</li>
                        <li>Professional cover letters, day-by-day itineraries and sponsor letters</li>
                        <li>Document verification & Spain tourist visa documents checklist review India</li>
                        <li>Spain tourist visa appointment booking, biometrics guidance, and active tracking</li>
                    </ol>

                    <p className={styles.note}>
                        <b className={styles.strong}>Timeline:</b> Typical Spain tourist visa processing time from India is usually processed within around 15 calendar days,
                        though some applications may take longer depending on the consulate, peak season or additional checks. Apply early to avoid delays. :contentReference[oaicite:1]{index = 1}
                    </p>

                    <h2 className={styles.subTitle}>Spain Tourist Visa Requirements (India)</h2>
                    <p>To apply, you’ll typically need:</p>
                    <ul>
                        <li>Valid passport (minimum 6 months validity beyond return date)</li>
                        <li>Completed Spain tourist visa application form</li>
                        <li>Passport-size photos meeting Schengen photo requirements</li>
                        <li>Schengen travel insurance (minimum €30,000 medical coverage)</li>
                        <li>Proof of funds — bank statements and/or sponsor letter (see <i>Spain visa bank statement requirement India</i>)</li>
                        <li>Return flight booking and confirmed hotel reservation or host invitation</li>
                    </ul>
                    <p className={styles.note}>GVI verifies each document to ensure compliance with Spanish consulate and visa-centre standards. :contentReference[oaicite:2]{index = 2}</p>

                    <h2 className={styles.subTitle}>Spain Tourist Visa Documents Checklist (India)</h2>
                    <p>Complete checklist we verify for you:</p>
                    <ul>
                        <li><b className={styles.strong}>Passport & Travel History:</b> Valid passport + previous visas (Schengen/US/UK) if any.</li>
                        <li><b className={styles.strong}>Proof of Funds:</b> 3–6 months bank statements (GVI advises ideal closing balance based on trip length).</li>
                        <li><b className={styles.strong}>Employment Documents:</b> NOC, salary slips or business proof.</li>
                        <li><b className={styles.strong}>Travel Bookings & Insurance:</b> Return tickets, hotel bookings, and Schengen travel insurance (€30,000 minimum).</li>
                        <li><b className={styles.strong}>Supporting Letters:</b> Invitation letters, sponsor letters, cover letter & detailed itinerary.</li>
                        <li><b className={styles.strong}>Photos & Form Compliance:</b> Correct photo size and fully completed forms.</li>
                    </ul>

                    <h2 className={styles.subTitle}>Spain Tourist Visa Fees India — 2025 (Indicative)</h2>
                    <ul>
                        <li><b className={styles.strong}>Adult Short-Stay Schengen Fee:</b> Generally in the range of €80–€90 (approx. INR 7,200–9,300) depending on exchange rates and the consulate/payment method. :contentReference[oaicite:3]{index = 3}</li>
                        <li><b className={styles.strong}>Children (6–12 yrs):</b> Reduced fee (commonly half the adult fee). :contentReference[oaicite:4]{index = 4}</li>
                        <li><b className={styles.strong}>Children below 6 yrs:</b> Usually exempt.</li>
                        <li><b className={styles.strong}>Visa-centre / Service Charges:</b> Additional; BLS/VFS or other centre fees and courier charges vary by city. :contentReference[oaicite:5]{index = 5}</li>
                    </ul>
                    <p>
                        Fees are set by the consulate and may change — GVI provides a current fee breakdown at application time so there are no surprises.
                    </p>

                    <h2 className={styles.subTitle}>Common Reasons for Spain Tourist Visa Rejection — and How We Fix Them</h2>
                    <p>
                        Most refusals stem from documentation gaps or unclear intent. GVI eliminates these risks with proactive filing:
                    </p>
                    <ul>
                        <li><b className={styles.strong}>Incomplete or Mismatched Documents:</b> We audit files and correct mismatches before submission.</li>
                        <li><b className={styles.strong}>Insufficient Funds:</b> We advise on bank statement formats and minimum balances that strengthen your case.</li>
                        <li><b className={styles.strong}>Unclear Travel Purpose:</b> Professionally prepared cover letters and day-by-day itineraries.</li>
                        <li><b className={styles.strong}>Poor Interview Preparation:</b> Mock interview sessions to prepare you for common <i>Spain visa interview questions India</i>.</li>
                    </ul>

                    {/* --- Secondary Sales Pitch (mid-page, reinforces value) --- */}
                    <div className={styles.salesPitch}>
                        <p>
                            <b className={styles.strong}>Why choose GVI as your Spain visa agent in India?</b>
                            Our consultants combine consulate know-how with a client-first process: tailored checklists, a dedicated case manager,
                            and conversion-ready documentation that presents your application persuasively. Sign up for a free eligibility check and receive a
                            customised document checklist and an approval probability assessment.
                        </p>
                        <ul>
                            <li><b className={styles.strong}>Fast document review</b> — fewer mistakes, higher approval odds</li>
                            <li><b className={styles.strong}>Strategic packaging</b> — designed to meet consular expectations</li>
                            <li><b className={styles.strong}>Nationwide support</b> — submission help in Bengaluru, Mumbai, Delhi and beyond</li>
                        </ul>
                    </div>
                    {/* --- End Secondary Sales Pitch --- */}

                    <h2 className={styles.subTitle}>Spain Tourist Visa Processing Time & Tracking (India)</h2>
                    <p>
                        Standard processing is usually around 15 calendar days from the date of submission, but processing can extend to 25–30 days
                        (or more during peak season or where additional checks are required). GVI tracks your application at every stage and provides
                        timely updates so you always know where your file is. :contentReference[oaicite:6]{index = 6}
                    </p>

                    <h2 className={styles.subTitle}>Spain Embassy & Visa-Centre Appointments in India</h2>
                    <p>
                        Spain applications in India are submitted through authorised visa-centres (BLS International / VFS in some jurisdictions) or directly
                        to Spanish consulates in major cities. GVI handles slot booking, biometrics appointment coordination and submission logistics to
                        ensure smooth, on-time filing. :contentReference[oaicite:7]{index = 7}
                    </p>

                    <h2 className={styles.subTitle}>Special Cases — Family, Students & Multi-Entry</h2>
                    <p>
                        Whether applying for a <b className={styles.strong}>Spain tourist visa for family India</b>, a short academic visit, or seeking a
                        <b className={styles.strong}> multiple-entry tourist visa Spain</b>, GVI tailors documents and submission strategy for each case type.
                    </p>

                    <h2 className={styles.subTitle}>Why Choose Global Visa Internationals — Best Spain Visa Consultant India</h2>
                    <p>
                        Global Visa Internationals (GVI) is a specialised <b className={styles.strong}>Spain tourist visa service provider India</b> offering
                        end-to-end Schengen visa services focused on approvals and a frictionless client experience.
                    </p>

                    <h4 className={styles.strong}>Why travellers trust GVI:</h4>
                    <ul>
                        <li>Proven Schengen application process & embassy-aware documentation</li>
                        <li>High approval-focused workflows and personal case managers</li>
                        <li>Personalised support for first-time applicants and complex cases</li>
                        <li>Complete document review & visa-centre appointment support</li>
                        <li>Transparent pricing & proactive pre-submission checks</li>
                        <li>Strategic re-applications and appeal guidance when needed</li>
                    </ul>

                    {/* --- Reinforced Sales Pitch Before CTA (conversion-heavy, final nudge) --- */}
                    <div className={styles.salesPitch}>
                        <p>
                            <b className={styles.strong}>Ready to apply for your Spain tourist visa? Let GVI handle the paperwork while you plan the sightseeing.</b>
                            Fast eligibility checks, clear timelines and a dedicated consultant are one call or click away — sign up now and receive a personalised document checklist.
                        </p>
                        <p><b className={styles.strong}>Start your Spain visa application with Global Visa Internationals today — stress-free, approval-focused service.</b></p>
                    </div>
                    {/* --- End Reinforced Sales Pitch --- */}

                    <h2 className={styles.subTitle}>✈ Apply for Your Spain Tourist Visa Online — Start Your Journey Today!</h2>
                    <p>
                        Whether it’s a family holiday, honeymoon, or solo trip to Spain, applying for a <b className={styles.strong}>Spain tourist visa from India</b>
                        is easier with Global Visa Internationals. Our consultants simplify every step of the <i>Spain travel visa for Indians</i>.
                    </p>

                    <div className={styles.ctaBox}>
                        <p>
                            Contact Global Visa Internationals today to start your Spain visa application.
                        </p>
                        <ul>
                            <li><b className={styles.strong}>Call Now:</b> +91-7022213466</li>
                            <li><b className={styles.strong}>Email:</b> operations@globalvisainternationals.com</li>
                            <li><b className={styles.strong}>Start Online Application:</b> <a href="#">Apply Now</a></li>
                        </ul>

                        {/* Call-to-Action Button */}
                        <a href="tel:+917022213466" className={styles.callButton}>
                            📞 Get Free Eligibility Check
                        </a>
                    </div>

                    <p>
                        Your journey to Spain begins with Global Visa Internationals — the trusted <b className={styles.strong}>Spain tourist visa agency India</b>
                        focused on approvals and a superior client experience.
                    </p>

                    <h2 className={styles.subTitle}>FAQ — Quick Answers</h2>
                    <ul>
                        <li><b className={styles.strong}>Q: How long does a Spain tourist visa take in India?</b> — Typical processing time is around 15 calendar days; allow extra time during peak season. :contentReference[oaicite:8]{index = 8}</li>
                        <li><b className={styles.strong}>Q: What is the Schengen travel insurance requirement?</b> — Minimum €30,000 medical coverage valid across the Schengen area.</li>
                        <li><b className={styles.strong}>Q: What bank balance is needed?</b> — Depends on travel plan; GVI recommends amounts and formats that strengthen submissions.</li>
                        <li><b className={styles.strong}>Q: Can students apply?</b> — Yes — we help with student travel documents and supporting evidence for short academic visits.</li>
                    </ul>
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
