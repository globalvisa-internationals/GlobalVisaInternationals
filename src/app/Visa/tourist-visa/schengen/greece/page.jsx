import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

import { Metadata } from "next";
export const metadata = {
    metadataBase: new URL("https://www.globalvisainternationals.com"),
    title: "Apply for Greece Tourist Visa from India | Greece Schengen Visa Experts",
    description:
        "Apply for your Greece Tourist Visa from India with Global Visa Internationals (GVI). Get expert guidance for Greece Schengen visa documentation, appointment booking, and interview preparation to enjoy a smooth European travel experience.",
    keywords: [
        "Greece tourist visa from India",
        "Greece Schengen visa for Indian citizens",
        "apply Greece visa India",
        "Greece visitor visa",
        "Greece tourist visa assistance India",
        "Greece visa consultants Bangalore",
        "Greece visa application process",
        "Greece tourist visa documents required",
        "Greece tourist visa fees India 2025",
        "Schengen visa for Greece",
        "Greece tourist visa agency India",
        "Greece visa consultancy India",
        "Greece tourist visa cost from India",
        "Greece tourist visa eligibility India",
        "Greece tourist visa processing time India",
        "how to apply Greece tourist visa from India",
        "Greece visa appointment VFS India",
        "Greece Schengen visa requirements India",
        "Greece travel visa support India",
        "Greece embassy visa guidance Bangalore"
    ],
    robots: "index, follow",
    canonical:
        "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/greece",
    alternates: {
        canonical:
            "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/greece",
    },
    openGraph: {
        title: "Greece Tourist Visa from India | Expert Schengen Visa Assistance",
        description:
            "Get hassle-free Greece Tourist Visa assistance from Global Visa Internationals. Expert guidance for documentation, Schengen visa requirements, and embassy appointments — trusted by 10,000+ Indian travellers.",
        url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/greece",
        siteName: "Global Visa Internationals",
        images: [
            {
                url: "https://www.globalvisainternationals.com/tourist-visa/Greece-Tourist-Visa-Assistance-GVI.jpg",
                width: 1200,
                height: 630,
                alt: "Greece Tourist Visa Assistance by Global Visa Internationals",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@GLOBALVISA1505",
        title: "Greece Tourist Visa from India | Global Visa Internationals (GVI)",
        description:
            "Planning to visit Greece? Global Visa Internationals offers end-to-end Greece Schengen visa support — documentation, appointment, and interview assistance for a smooth European vacation.",
        images: [
            "https://www.globalvisainternationals.com/tourist-visa/Greece-Tourist-Visa-Assistance-GVI.jpg",
        ],
    },
    other: {
        "geo.region": "IN-KA",
        "geo.placename": "Bangalore",
        ICBM: "12.9716,77.5946",
    },
};

export default function Greece_Tourist_Visa_Assistance() {
    const pageUrl =
        "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/greece";

    const jsonLdSchemas = [
        // 📍 Breadcrumb Schema
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
                    name: "Greece Tourist Visa",
                    item: pageUrl,
                },
            ],
        },

        // 🏢 Organization Schema
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

        // 🏢 Local Business Schema
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Global Visa Internationals",
            image:
                "https://www.globalvisainternationals.com/tourist-visa/Greece-Tourist-Visa-Assistance-GVI.jpg",
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

        // ✈️ Service Schema
        {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Greece Tourist Visa Assistance",
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
                "Professional Greece Tourist Visa assistance for Indian travellers — expert help with documentation, VFS appointment booking, form filling, and Schengen embassy interview preparation.",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Visa Services",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Greece Tourist Visa Assistance",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Greece Business Visa Assistance",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Greece Visitor Visa Guidance",
                        },
                    },
                ],
            },
        },

        // 🌐 WebPage Schema
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Greece Tourist Visa Assistance from India",
            url: pageUrl,
            description:
                "Global Visa Internationals (GVI) offers end-to-end assistance for Greece Tourist Visa applications from India — complete documentation, visa form filling, appointment scheduling, and embassy guidance.",
            inLanguage: "en-IN",
            isPartOf: {
                "@type": "WebSite",
                url: "https://www.globalvisainternationals.com",
            },
        },

        // ❓ FAQPage Schema
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How long does it take to get a Greece tourist visa from India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Greece tourist visa processing time from India usually takes 10–15 working days after your biometrics appointment, depending on the embassy workload and season.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the documents required for a Greece tourist visa from India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Documents required include a valid passport, completed Schengen visa form, cover letter, travel insurance, itinerary, hotel booking, return flights, and proof of financial means.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Global Visa Internationals assist with Greece Schengen visa applications?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Global Visa Internationals provides complete assistance for Greece Schengen visas — from documentation and appointment booking to interview preparation.",
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
                    src="/tourist-visa/Greece-Tourist-Visa-Assistance-GVI.jpg"
                    alt="Greece Tourist Visa Assistance GVI"
                    className={styles.VisaImage}
                />
            </div>

            <div className={styles.VisaSec}>
                <div className={styles.VisaData}>
                    <h1 className={styles.Title}>
                        Apply for Greece Tourist Visa from India | Schengen Visa Experts
                    </h1>

                    <h4 className={styles.subTitle}>
                        ✈ Travel to Greece with Ease — Expert Greece Tourist Visa Assistance in India
                    </h4>

                    <p>
                        Planning a trip to Greece? A <b className={styles.strong}>Greece tourist visa from India</b> (Schengen Type C short-stay)
                        allows Indian travelers to explore Greece and other Schengen countries for up to 90 days for leisure, holidays,
                        or family visits. Whether you’re dreaming of the whitewashed beauty of Santorini, the ancient ruins of Athens,
                        or the beaches of Crete, <b className={styles.strong}>Global Visa Internationals (GVI)</b> — India’s trusted
                        <i> Greece visa consultancy</i> — handles every step: <b className={styles.strong}>Greece tourist visa appointment booking</b>,
                        document verification, application form filing, and interview coaching.
                    </p>

                    {/* --- Primary Sales Pitch --- */}
                    <div className={styles.salesPitch}>
                        <p>
                            <b className={styles.strong}>Let Global Visa Internationals (GVI) make your Greece visa process simple and stress-free.</b>
                            With professional visa guidance, accurate documentation, and embassy-compliant filing, we help you avoid delays
                            and maximize approval success. From your first consultation to passport collection — we manage it all so you can
                            focus on your Greek getaway.
                        </p>
                        <ul>
                            <li><b className={styles.strong}>Complete Greece visa assistance:</b> Documentation, slot booking, biometrics guidance.</li>
                            <li><b className={styles.strong}>Higher approval strategies:</b> Tailored cover letters, itinerary, and financial proof review.</li>
                            <li><b className={styles.strong}>Pan-India support:</b> Appointments for Bengaluru, Mumbai, Delhi, Chennai, Hyderabad & Kolkata.</li>
                        </ul>
                        <p><b className={styles.strong}>Fast sign-ups • Transparent pricing • Dedicated visa expert</b></p>
                    </div>
                    {/* --- End Primary Sales Pitch --- */}

                    <div className={styles.ctaBox}>
                        <p>Start your Greece visa process today with Global Visa Internationals.</p>
                        <ul>
                            <li><b className={styles.strong}>Call:</b> +91-7022213466</li>
                            <li><b className={styles.strong}>Email:</b> operations@globalvisainternationals.com</li>
                            <li><b className={styles.strong}>Online Application:</b> <a href="#">Apply Now</a></li>
                        </ul>

                        <a href="tel:+917022213466" className={styles.callButton}>
                            📞 Get Free Eligibility Check
                        </a>
                    </div>

                    <p>
                        With extensive Schengen experience, GVI — a dedicated <b className={styles.strong}>Greece tourist visa agency in India</b> —
                        ensures your file meets embassy standards and minimizes rejection risks through expert document review and preparation.
                    </p>

                    <h2 className={styles.subTitle}>What Is a Greece Tourist Visa?</h2>
                    <p>
                        A <b className={styles.strong}>Greece tourist visa for Indian citizens</b> is a short-stay Schengen visa (Type C) allowing
                        entry to Greece and other Schengen nations for tourism or family visits for up to 90 days in a 180-day period.
                        Commonly referred to as a <b className={styles.strong}>Greece Schengen visa</b>, it enables multi-country travel under one permit.
                    </p>

                    <h2 className={styles.subTitle}>Greece Schengen Duration Rule</h2>
                    <p>
                        The 90/180 rule applies — stay up to 90 days within 180 days. Multiple-entry permissions are based on travel history
                        and prior visa compliance. Frequent travelers may qualify for a <b className={styles.strong}>multiple entry Greece tourist visa</b>.
                    </p>

                    <h2 className={styles.subTitle}>How to Apply for a Greece Tourist Visa (India)</h2>
                    <p>Here’s GVI’s proven process for <b className={styles.strong}>how to apply Greece tourist visa India</b>:</p>
                    <ol>
                        <li><b className={styles.strong}>Check Eligibility —</b> Confirm your purpose for travel and required visa category.</li>
                        <li><b className={styles.strong}>Document Preparation —</b> Receive a customized <i>Greece tourist visa documents checklist India</i>.</li>
                        <li><b className={styles.strong}>Application Form —</b> We fill the <i>Greece visa application form India</i> accurately to avoid rejection errors.</li>
                        <li><b className={styles.strong}>Appointment & Biometrics —</b> GVI books your <i>Greece visa appointment India</i> at the nearest VFS center.</li>
                        <li><b className={styles.strong}>Mock Interview —</b> Prepare for common <i>Greece visa interview questions India</i> with expert coaching.</li>
                        <li><b className={styles.strong}>Submission & Tracking —</b> We monitor your file until visa decision and passport delivery.</li>
                    </ol>

                    <h2 className={styles.subTitle}><b className={styles.strong}>What GVI Does — Greece Visa Processing Overview</b></h2>
                    <p>Our team ensures embassy-compliant applications to improve approval chances.</p>

                    <h4 className={styles.strong}>Our Greece visa services include:</h4>
                    <ol>
                        <li>Filling and reviewing the Greece visa application form</li>
                        <li>Guidance for online/offline visa filing</li>
                        <li>Custom cover letters, itineraries & financial proof templates</li>
                        <li>Personal document verification and checklist completion</li>
                        <li>Appointment scheduling, biometrics & tracking assistance</li>
                    </ol>

                    <p className={styles.note}>
                        <b className={styles.strong}>Timeline:</b> Standard <i>Greece tourist visa processing time India</i> is 15–20 working days.
                        GVI ensures early readiness for timely submission.
                    </p>

                    <h2 className={styles.subTitle}>Greece Tourist Visa Requirements (India)</h2>
                    <ul>
                        <li>Valid passport (minimum 6 months validity post-return)</li>
                        <li>Completed Greece visa application form</li>
                        <li>Two passport-size photos (as per Schengen norms)</li>
                        <li>Travel insurance covering €30,000 medical expenses</li>
                        <li>Proof of funds — 3–6 months bank statements (<i>Greece visa financial proof India</i>)</li>
                        <li>Flight booking & confirmed accommodation or host invitation</li>
                    </ul>
                    <p className={styles.note}>
                        GVI reviews every document to meet <b className={styles.strong}>Greece embassy visa requirements India</b>.
                    </p>

                    <h2 className={styles.subTitle}>Greece Tourist Visa Checklist (India)</h2>
                    <ul>
                        <li><b className={styles.strong}>Passport & Travel History:</b> Current and old passports, Schengen/US/UK visa copies.</li>
                        <li><b className={styles.strong}>Financial Proof:</b> 3–6 months updated bank statements showing strong balance.</li>
                        <li><b className={styles.strong}>Employment/Business Proof:</b> Salary slips, ITR, business registration (if applicable).</li>
                        <li><b className={styles.strong}>Travel Bookings:</b> Confirmed return tickets and hotel bookings.</li>
                        <li><b className={styles.strong}>Insurance:</b> Valid Schengen travel insurance covering €30,000.</li>
                        <li><b className={styles.strong}>Support Letters:</b> Sponsor letters, invitation, and travel plan summary.</li>
                    </ul>

                    <h2 className={styles.subTitle}>Greece Tourist Visa Fees India — 2025</h2>
                    <ul>
                        <li><b className={styles.strong}>Adult Visa Fee:</b> €90 (~₹9,300)</li>
                        <li><b className={styles.strong}>Children (6–12 years):</b> €45 (~₹4,700)</li>
                        <li><b className={styles.strong}>Children below 6 years:</b> Free</li>
                        <li><b className={styles.strong}>VFS & Service Charges:</b> Additional per location</li>
                    </ul>
                    <p>Fees follow current embassy rates and may vary with exchange rate changes.</p>

                    <h2 className={styles.subTitle}>Common Greece Visa Rejection Reasons — and GVI’s Fix</h2>
                    <ul>
                        <li><b className={styles.strong}>Incomplete Documentation:</b> GVI ensures full compliance with embassy checklists.</li>
                        <li><b className={styles.strong}>Low Financial Proof:</b> Guidance on maintaining minimum balance per traveler.</li>
                        <li><b className={styles.strong}>Unclear Purpose:</b> Professionally crafted cover letters and detailed itineraries.</li>
                        <li><b className={styles.strong}>Weak Interview:</b> Practice sessions with expected <i>Greece visa interview questions India</i>.</li>
                    </ul>

                    {/* --- Secondary Sales Pitch --- */}
                    <div className={styles.salesPitch}>
                        <p>
                            <b className={styles.strong}>Why choose GVI as your Greece tourist visa consultant in India?</b>
                            With deep Schengen expertise, GVI ensures error-free documentation, personalized assistance, and a client-first
                            process that boosts your chances of visa success. Apply today for your free eligibility check.
                        </p>
                        <ul>
                            <li><b className={styles.strong}>Quick document review</b> — avoid rejection delays</li>
                            <li><b className={styles.strong}>Embassy-compliant application</b> — structured for approval</li>
                            <li><b className={styles.strong}>Local support nationwide</b> — Bengaluru, Mumbai, Delhi & more</li>
                        </ul>
                    </div>
                    {/* --- End Secondary Sales Pitch --- */}

                    <h2 className={styles.subTitle}>Greece Tourist Visa Processing Time & Tracking</h2>
                    <p>
                        The typical <b className={styles.strong}>Greece visa processing time from India</b> is 15–20 working days. During peak seasons, timelines may extend.
                        GVI tracks every update — from slot booking to passport collection — and keeps you informed at every step.
                    </p>

                    <h2 className={styles.subTitle}>Greece Embassy & VFS Appointment India</h2>
                    <p>
                        Submit your <b className={styles.strong}>Greece visa application India</b> via authorized VFS centers in major cities. GVI manages your appointment
                        booking, biometric schedule, and document submission to ensure seamless filing.
                    </p>

                    <h2 className={styles.subTitle}>Special Cases — Family, Group & Multi-Entry Travel</h2>
                    <p>
                        Applying for a <b className={styles.strong}>Greece family tourist visa India</b> or seeking a <b className={styles.strong}>multiple-entry Greece visa</b>?
                        GVI tailors your document package and strategy to your travel purpose and embassy requirements.
                    </p>

                    <h2 className={styles.subTitle}>Why Choose Global Visa Internationals — Best Greece Visa Consultant India</h2>
                    <p>
                        <b className={styles.strong}>Global Visa Internationals (GVI)</b> is a trusted <b className={styles.strong}>Greece tourist visa service provider India</b> with years of
                        Schengen visa expertise. Our consultants are known for professional accuracy and transparent support.
                    </p>

                    <ul>
                        <li>1,200+ Schengen visas processed successfully</li>
                        <li>High Greece visa approval rate</li>
                        <li>Tailored support for first-time travelers</li>
                        <li>Reapplication assistance after rejection</li>
                        <li>Dedicated case managers & transparent pricing</li>
                    </ul>

                    {/* --- Final Sales Pitch --- */}
                    <div className={styles.salesPitch}>
                        <p>
                            <b className={styles.strong}>Ready to explore Greece?</b> Let GVI handle your visa process end-to-end — from eligibility checks to document review.
                            Quick turnaround, expert advice, and personal guidance ensure your visa experience is smooth and stress-free.
                        </p>
                        <p><b className={styles.strong}>Start your Greece tourist visa application with Global Visa Internationals today.</b></p>
                    </div>
                    {/* --- End Final Sales Pitch --- */}

                    <h2 className={styles.subTitle}>✈ Apply for Your Greece Tourist Visa Online — Start Your Journey Today!</h2>
                    <p>
                        Whether it’s a honeymoon, family vacation, or solo holiday, applying for a <b className={styles.strong}>Greece tourist visa from India</b> is easy
                        with GVI. Our team manages every step, ensuring a hassle-free experience from consultation to approval.
                    </p>

                    <div className={styles.ctaBox}>
                        <p>Contact Global Visa Internationals to begin your Greece visa process.</p>
                        <ul>
                            <li><b className={styles.strong}>Call:</b> +91-7022213466</li>
                            <li><b className={styles.strong}>Email:</b> operations@globalvisainternationals.com</li>
                            <li><b className={styles.strong}>Apply Online:</b> <a href="#">Start Application</a></li>
                        </ul>

                        <a href="tel:+917022213466" className={styles.callButton}>
                            📞 Get Free Eligibility Check
                        </a>
                    </div>

                    <p>
                        Begin your journey with <b className={styles.strong}>Global Visa Internationals</b> — India’s most trusted
                        <b className={styles.strong}> Greece tourist visa agency</b> with a 99% client satisfaction rate and a 4.6★ Google rating.
                    </p>

                    <h2 className={styles.subTitle}>FAQ — Quick Answers</h2>
                    <ul>
                        <li><b className={styles.strong}>Q:</b> How long does a Greece tourist visa take in India?<br />A: Typically 15–20 working days; timelines may vary by consulate.</li>
                        <li><b className={styles.strong}>Q:</b> What is the Greece visa cost from India?<br />A: Around €90 per adult (excluding service charges).</li>
                        <li><b className={styles.strong}>Q:</b> What bank balance is required?<br />A: Depends on your itinerary; GVI helps estimate ideal funds per applicant.</li>
                        <li><b className={styles.strong}>Q:</b> Can I apply for multiple entry?<br />A: Yes, subject to embassy discretion and travel history.</li>
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
