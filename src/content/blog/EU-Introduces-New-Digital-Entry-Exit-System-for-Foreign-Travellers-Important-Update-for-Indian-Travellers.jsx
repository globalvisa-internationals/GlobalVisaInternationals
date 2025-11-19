import AnimatedHR from "@/Components/AnimatedHR";
import Styles from "./blog.module.css";
import VisaForm from "@/Components/VisaForm";
import React from "react";

// ✅ Export Metadata (Static SEO)
export const metadata = {
    title: "EU Introduces New Digital Entry/Exit System (EES) for Foreign Travellers | Important Update for Indian Travellers",
    description:
        "The EU has launched the new Entry/Exit System (EES) replacing passport stamping for all non-EU travellers, including Indians. Learn how EES works, start date, required biometrics, affected countries, and important travel updates for Indians visiting Europe.",
    image: "/blogBannerImages/EU-Entry-Exit-System-EES-Explained-For-Indians.jpg",
    keywords: [
        "EU Entry Exit System EES",
        "EES for Indian travellers",
        "Schengen border update 2025",
        "Europe travel rules Indians",
        "Schengen visa EES update",
        "EU biometric border control",
        "Schengen immigration changes 2026",
    ],
    date: "2025-11-19",
    alternates: {
        canonical:
            "https://www.globalvisainternationals.com/blog/EU-Introduces-New-Digital-Entry-Exit-System-for-Foreign-Travellers-Important-Update-for-Indian-Travellers",
    },
    author: "Global Visa Internationals",
    creator: "Global Visa Internationals",
    publisher: "Global Visa Internationals",
    metadataBase: "https://www.globalvisainternationals.com",
    openGraph: {
        type: "article",
        url: "https://www.globalvisainternationals.com/blog/EU-Introduces-New-Digital-Entry-Exit-System-for-Foreign-Travellers-Important-Update-for-Indian-Travellers",
        title:
            "EU Introduces New Digital Entry/Exit System (EES) – Important Update for Indian Travellers",
        description:
            "EU replaces manual passport stamping with EES biometric border checks. Find out how this impacts Indian travellers and what to expect from 2025–2026.",
        siteName: "Global Visa Internationals",
        images: [
            {
                url: "https://www.globalvisainternationals.com/blogBannerImages/EU-Entry-Exit-System-EES-Explained-For-Indians.jpg",
                width: 1200,
                height: 630,
                alt: "EU Entry Exit System (EES) – Detailed Guide for Indian Travellers",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@GLOBALVISA1505",
        creator: "@GLOBALVISA1505",
        title: "EU Introduces New Entry/Exit System (EES) – What Indians Must Know",
        description:
            "The EU has begun rolling out EES — a new biometric system for all non-EU travellers. Learn how it affects Indian tourists, students, and business travellers.",
        images: [
            "https://www.globalvisainternationals.com/blogBannerImages/EU-Entry-Exit-System-EES-Explained-For-Indians.jpg",
        ],
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
    },
    category: "Visa Policy & Immigration News",
    other: {
        "article:published_time": "2025-11-19",
        "article:modified_time": new Date().toISOString(),
        "article:section": "Visa Policy & Immigration News",
    },
};


// ✅ Add Structured Data (Multiple Schema Types)
function StructuredData() {
    const baseUrl = "https://www.globalvisainternationals.com";



    const schemas = [
        // 🔹 Article Schema
        {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: metadata.title,
            description: metadata.description,
            image: `${baseUrl}${metadata.image}`,
            author: {
                "@type": "Organization",
                name: "Global Visa Internationals",
                sameAs: [
                    "https://www.facebook.com/globalvisainternationals/",
                    "https://www.instagram.com/globalvisa_internationals/",
                    "https://www.linkedin.com/company/global-visa-internationals/",
                    "https://x.com/GLOBALVISA1505",
                    "https://www.youtube.com/@globalVisaInternationals",
                    "https://www.google.com/maps/place/Global+Visa+Internationals",
                ],
            },
            publisher: {
                "@type": "Organization",
                name: "Global Visa Internationals",
                logo: {
                    "@type": "ImageObject",
                    url: `${baseUrl}/gvilogo.png`,
                },
            },
            datePublished: "2025-11-19",
            dateModified: new Date().toISOString(),
            mainEntityOfPage: `${baseUrl}/blog/EU-Introduces-New-Digital-Entry-Exit-System-for-Foreign-Travellers-Important-Update-for-Indian-Travellers`,
        },

        // 🔹 Local Business Schema
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Global Visa Internationals",
            image: `${baseUrl}/gvilogo.png`,
            url: baseUrl,
            telephone: "+91-7022-213-466",
            email: "operations@globalvisainternationals.com",
            address: {
                "@type": "PostalAddress",
                streetAddress: "GF-9, Business Point, Brigade Road, Bangalore",
                addressLocality: "Bangalore",
                postalCode: "560025",
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9716,
                longitude: 77.5946,
            },
            sameAs: [
                "https://www.facebook.com/globalvisainternationals/",
                "https://www.instagram.com/globalvisa_internationals/",
                "https://www.linkedin.com/company/global-visa-internationals/",
                "https://x.com/GLOBALVISA1505",
                "https://www.youtube.com/@globalVisaInternationals",
                "https://www.mappls.com/digipin/4P3-J4J-8849",
            ],
            openingHours: "Mo-Fr 10:00-18:00",
        },

        // 🔹 Organization Schema
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Global Visa Internationals",
            url: baseUrl,
            logo: `${baseUrl}/gvilogo.png`,
            sameAs: [
                "https://www.facebook.com/globalvisainternationals/",
                "https://www.instagram.com/globalvisa_internationals/",
                "https://www.linkedin.com/company/global-visa-internationals/",
                "https://x.com/GLOBALVISA1505",
                "https://www.youtube.com/@globalVisaInternationals",
            ],
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7022-213-466",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Punjabi"],
            },
        },

        // 🔹 WebSite Schema
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Global Visa Internationals",
            url: baseUrl,
            potentialAction: {
                "@type": "SearchAction",
                target: `${baseUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
            },
        },

        // 🔹 WebPage Schema
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: `${baseUrl}/blog/EU-Introduces-New-Digital-Entry-Exit-System-for-Foreign-Travellers-Important-Update-for-Indian-Travellers`,
            name: metadata.title,
            description: metadata.description,
            isPartOf: {
                "@type": "WebSite",
                url: baseUrl,
                name: "Global Visa Internationals",
            },
        },

        // 🔹 Service Schema (Updated for EU/Schengen)
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Schengen Visa Assistance",
            serviceType: "Visa & Immigration Consultation",
            provider: {
                "@type": "Organization",
                name: "Global Visa Internationals",
                url: baseUrl,
            },
            areaServed: {
                "@type": "Country",
                name: "India",
            },
            offers: [
                {
                    "@type": "Offer",
                    url: `${baseUrl}/Visa/tourist-visa/europe-schengen`,
                    name: "Schengen Tourist Visa Assistance",
                },
                {
                    "@type": "Offer",
                    url: `${baseUrl}/Visa/business-visa/europe`,
                    name: "Schengen Business Visa Assistance",
                },
                {
                    "@type": "Offer",
                    url: `${baseUrl}/Visa/student-visa/europe`,
                    name: "Schengen Student Visa Guidance",
                },
            ],
        },

        // 🔹 FAQ Schema (Updated for EES System)
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Does the new EU Entry/Exit System (EES) apply to Indian travellers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. All Indian passport holders traveling to the Schengen Area must register through the EES system with facial scans, fingerprints, and passport details.",
                    },
                },
                {
                    "@type": "Question",
                    name: "When will the EU Entry/Exit System be fully operational?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The EES started rolling out on 12 October 2025 and will be fully operational by 10 April 2026 across all Schengen borders.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Will EES replace passport stamping for Indians?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Once EES is fully implemented, manual passport stamping will end and be fully replaced by digital entry/exit records.",
                    },
                },
            ],
        },

        // 🔹 Breadcrumb Schema
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: baseUrl,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: `${baseUrl}/blog`,
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: metadata.title,
                    item: `${baseUrl}/blog/EU-Introduces-New-Digital-Entry-Exit-System-for-Foreign-Travellers-Important-Update-for-Indian-Travellers`,
                },
            ],
        },
    ];


    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}


export default function EU_Entry_Exit_System_EES_Explained_For_Indians() {
    return (
        <>
            <StructuredData />
            <article>

                <div className={Styles.imageCard}>
                    <picture>
                        <img
                            src={metadata.image}
                            alt={metadata.title}
                            className={Styles.image}
                            loading="lazy"
                        />
                    </picture>
                </div>

                <div className={Styles.meta}>
                    <span>By {metadata.author}</span>
                    <span> | • | </span>
                    <span>
                        {new Date(metadata.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                </div>
                <AnimatedHR direction="left" duration={1.2} />

                <p>
                    The European Union has begun rolling out a major change in how visitors enter
                    and exit the Schengen zone. The new <strong>Entry/Exit System (EES)</strong> is
                    now replacing manual passport stamping for all non-EU travellers — including
                    Indian citizens. This digital process aims to make European borders more secure,
                    efficient, and transparent while helping authorities track travel durations more
                    accurately.
                </p>

                <h2>What Is the Entry/Exit System (EES)?</h2>

                <p>
                    The Entry/Exit System (EES) is a fully digital border control system designed to
                    record biometric and travel information of non-EU visitors entering or leaving
                    the Schengen area. Under this system, Indian travellers will be required to
                    provide:
                </p>

                <ul>
                    <li>Facial scan</li>
                    <li>Fingerprints</li>
                    <li>Personal information (name, nationality, passport details)</li>
                    <li>Entry and exit timestamps</li>
                </ul>

                <p>
                    These digital records completely replace the manual passport stamps previously
                    used at Schengen borders.
                </p>

                <h2>When Did the EES Start?</h2>

                <p>The implementation timeline is as follows:</p>

                <ul>
                    <li><strong>Started:</strong> 12 October 2025 — gradual rollout at select borders</li>
                    <li><strong>Fully operational:</strong> 10 April 2026 — complete removal of passport stamping</li>
                </ul>

                <p>
                    The project is managed by <strong>eu-LISA</strong>, the EU agency responsible for
                    large-scale IT systems in migration and security.
                </p>

                <h2>Does the EES Apply to Indian Citizens?</h2>

                <p><strong>✔ Yes. The EES applies to all Indian passport holders.</strong></p>

                <p>Whether you are travelling on:</p>

                <ul>
                    <li>A Schengen tourist visa</li>
                    <li>A business visa</li>
                    <li>A student visa</li>
                    <li>Or visiting family/friends</li>
                </ul>

                <p>
                    You must complete EES biometric registration upon arrival. This process also
                    applies to travellers from the USA, Canada, the UK, Australia, Gulf countries,
                    and all other non-EU nations.
                </p>

                <h2>Which Countries Are Included in the EES?</h2>

                <p>The EES applies across the entire Schengen area, including:</p>

                <h4>25 EU Countries (excluding Ireland and Cyprus)</h4>

                <h4>4 Non-EU Countries:</h4>
                <ul>
                    <li>Iceland</li>
                    <li>Norway</li>
                    <li>Switzerland</li>
                    <li>Liechtenstein</li>
                </ul>

                <p>
                    Indian travellers entering any of these countries will be processed under the
                    new EES system.
                </p>

                <h2>How Will the EES Work for Indian Travellers?</h2>

                <p>On arrival in the Schengen zone, travellers will:</p>

                <ul>
                    <li>Visit an automated kiosk or immigration counter</li>
                    <li>Provide a facial scan and fingerprints</li>
                    <li>Submit passport data</li>
                </ul>

                <p>
                    The system will then create a digital entry record. When departing, EES will
                    automatically record the exit.
                </p>

                <p>
                    EES also calculates the remaining days allowed under the
                    <strong>90/180-day rule</strong>, reducing the risk of accidental overstays.
                </p>

                <h2>Why Is the EU Introducing This New System?</h2>

                <p>The EES aims to:</p>

                <ul>
                    <li>Detect overstayers more effectively — a common issue for Indian travellers</li>
                    <li>Prevent identity fraud and document misuse</li>
                    <li>Speed up border processing with automated systems</li>
                    <li>Strengthen migration monitoring and security</li>
                    <li>Replace manual passport stamps with accurate digital entries</li>
                </ul>

                <p>
                    European Commissioner Magnus Brunner stated:
                    <em>
                        “The Entry/Exit System is the digital backbone of our new European migration
                        and asylum framework.”
                    </em>
                </p>

                <h2>What Indian Travellers Should Expect at Airports</h2>

                <p>Once fully operational by April 2026, travellers may experience:</p>

                <ol>
                    <li><strong>Longer queues initially</strong> due to first-time biometric registration</li>
                    <li><strong>Faster re-entry</strong> on subsequent trips as data is already stored</li>
                    <li><strong>No more passport stamps</strong> — everything becomes digital</li>
                    <li><strong>Automated calculation</strong> of remaining Schengen stay days</li>
                    <li><strong>Mandatory biometric scanning</strong> for all travellers</li>
                </ol>

                <h2>Important Tips for Indian Travellers</h2>

                <ul>
                    <li>Ensure your passport is valid and undamaged for smooth biometric capture</li>
                    <li>
                        Even if you gave biometrics during your Schengen visa application, you must
                        <strong>give biometrics again at the border</strong> under EES
                    </li>
                    <li>Keep extra buffer time during arrival for the initial transition period</li>
                </ul>

                <h2>Final Thoughts</h2>

                <p>
                    For Indian travellers, the EES marks a major shift in how Europe manages border
                    control. While the first-time process may take a few extra minutes, it will
                    ultimately make travel more secure, faster, and more transparent. If you’re
                    planning a Europe trip in 2025 or 2026, understanding the EES system ensures a
                    smooth and stress-free entry into the Schengen zone.
                </p>



                <AnimatedHR direction="left" duration={1.2} />
                <VisaForm />

            </article>





        </>
    );
}