import VisaForm from '@/Components/VisaForm';
import Styles from './blog.module.css';
import Head from 'next/head';
import { data } from 'autoprefixer';

export const metadata = {
    metadataBase: new URL("https://www.globalvisainternationals.com"),

    title: "Want to Go to the USA in Just 1-2 Months?| Global Visa Internationals",
    description: "Want to visit the USA faster? Learn how to apply for a USA tourist visa in just 1-2 months with expert guidance, interview preparation, and complete visa support.",
    keywords: [
        "USA tourist visa from India",
        "USA visitor visa process",
        "B2 visa application India",
        "USA visa interview preparation",
        "USA visa appointment waiting time",
        "USA visa rejection reasons",
        "USA tourist visa consultants Bangalore",
        "Apply USA tourist visa India",
        "Global Visa Internationals USA visa",
    ],

    author: "Global Visa Internationals Team",
    creator: "Global Visa Internationals",
    publisher: "Global Visa Internationals",
    date: "2025-12-31",
    canonical: "https://www.globalvisainternationals.com/blog/Want-to-Go-to-the-USA-in-Just-1-2-Months",
    image: "/BlogImages/Want-to-Go-to-the-USA-in-Just-1-2-Months.webp",
    alternates: {
        canonical:
            "https://www.globalvisainternationals.com/blog/Want-to-Go-to-the-USA-in-Just-1-2-Months",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },

    openGraph: {
        title: "Want to Go to the USA in Just 1-2 Months?",
        description:
            "Planning a USA trip? Discover how to get your USA tourist visa faster with expert filing, document checks, and interview preparation.",
        url:
            "https://www.globalvisainternationals.com/blog/Want-to-Go-to-the-USA-in-Just-1-2-Months",
        siteName: "Global Visa Internationals",
        locale: "en_IN",
        type: "article",
        images: [
            {
                url: "/BlogImages/Want-to-Go-to-the-USA-in-Just-1-2-Months.webp",
                width: 1200,
                height: 630,
                alt: "USA Tourist Visa Process from India - Fast & Expert Guidance",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Want to Go to the USA in Just 1-2 Months?",
        description:
            "Apply for your USA tourist visa faster with expert assistance. Avoid mistakes, prepare for interviews, and travel confidently.",
        images: [
            "/BlogImages/Want-to-Go-to-the-USA-in-Just-1-2-Months.webp",
        ],
        creator: "@globalvisas",
    },

    category: "USA Tourist Visa",

    other: {
        "article:published_time": "2025-12-18",
        "article:author": "Global Visa Internationals Team",

        /* AEO / AI Search Optimization */
        "ai-content-type": "usa-tourist-visa-guide",
        "ai-primary-topic": "USA Tourist Visa Process from India",
        "ai-secondary-topic": "USA Visa Interview, Appointment Delays, Rejection Risks",
        "ai-user-intent":
            "how to get usa tourist visa faster from india without rejection",
    },
};


function StructuredDataUSATouristVisa() {
    const baseUrl = "https://www.globalvisainternationals.com";
    const pageUrl =
        `${baseUrl}/blog/Want-to-Go-to-the-USA-in-Just-1-2-Months`;

    const schemas = [
        /* 📰 Article Schema (Discover Eligible) */
        {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Want to Go to the USA in Just 1-2 Months?",
            description:
                "Learn how to apply for a USA tourist visa in just 1-2 months with expert guidance, interview preparation, and complete application support.",
            image: [
                `${baseUrl}/BlogImages/Want-to-Go-to-the-USA-in-Just-1-2-Months.webp`,
            ],
            author: {
                "@type": "Organization",
                name: "Global Visa Internationals",
                url: baseUrl,
            },
            publisher: {
                "@type": "Organization",
                name: "Global Visa Internationals",
                logo: {
                    "@type": "ImageObject",
                    url: `${baseUrl}/gvilogo.png`,
                },
            },
            datePublished: "2025-12-18",
            dateModified: "2025-12-18",
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": pageUrl,
            },
        },

        /* 🧭 Breadcrumb Schema */
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
                    name: "Want to Go to the USA in Just 1-2 Months?",
                    item: pageUrl,
                },
            ],
        },

        /* 🏢 Organization Schema */
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
        },

        /* 📍 Local Business Schema */
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Global Visa Internationals",
            image: `${baseUrl}/gvilogo.png`,
            url: baseUrl,
            telephone: "+91-7022-213-466",
            address: {
                "@type": "PostalAddress",
                streetAddress: "GF-9, Business Point, Brigade Road",
                addressLocality: "Bengaluru",
                postalCode: "560025",
                addressCountry: "IN",
            },
            openingHours: "Mo-Fr 10:00-18:00",
        },

        /* 🛠️ HowTo Schema - USA Tourist Visa Process */
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Apply for a USA Tourist Visa from India",
            description:
                "Step-by-step process to apply for a USA tourist (B2) visa from India with expert assistance.",
            step: [
                {
                    "@type": "HowToStep",
                    name: "Determine Visa Type",
                    text:
                        "Identify the correct visa category, usually B2 tourist visa, based on your travel purpose.",
                },
                {
                    "@type": "HowToStep",
                    name: "Prepare Documentation",
                    text:
                        "Collect financial documents, travel history, employment proof, and invitation details if applicable.",
                },
                {
                    "@type": "HowToStep",
                    name: "File DS-160 Application",
                    text:
                        "Accurately complete the DS-160 USA visa application form without errors.",
                },
                {
                    "@type": "HowToStep",
                    name: "Book Visa Appointment",
                    text:
                        "Secure a USA visa appointment slot and complete biometric formalities.",
                },
                {
                    "@type": "HowToStep",
                    name: "Attend Visa Interview",
                    text:
                        "Attend the USA visa interview with confidence after mock interview preparation.",
                },
            ],
        },

        /* ❓ FAQ Schema - High Intent USA Visa Queries */
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How long does it take to get a USA tourist visa from India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text:
                            "USA tourist visa processing time varies, but with expert guidance and early slot booking, it can be completed in 1-2 months depending on appointment availability.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why do USA tourist visas get rejected?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text:
                            "Common reasons include weak financial proof, unclear travel purpose, poor interview answers, and incorrect application details.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I reapply after a USA visa rejection?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text:
                            "Yes, you can reapply after a USA visa rejection, but it is important to address the refusal reasons before submitting a new application.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is interview preparation important for USA visa approval?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text:
                            "Yes. Mock interview preparation helps applicants answer confidently and clearly, increasing approval chances.",
                    },
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
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema),
                    }}
                />
            ))}
        </>
    );
}

export default function CanadaStudentVisaGuidence() {
    return (
        <>
            <StructuredDataUSATouristVisa />
            <article>
                <div className={Styles.imageCard}>
                    <img
                        src={metadata.image}
                        alt={metadata.title}
                        className={Styles.image}
                        loading="lazy"
                        width="1200"
                        height="630"
                    />
                </div>

                <section>
                    <h2 className={Styles.subTitle}>Don’t Let Long Waiting Times, Rejection Fear, or Interview Stress Stop Your USA Travel Plans</h2>

                    <p>
                        Do you dream of visiting the <strong className={Styles.strong}>United States</strong> for tourism,
                        business meetings, or to meet family—but feel confused or afraid to start
                        your <a href="https://www.globalvisainternationals.com/Visa/tourist-visa/usa">
                            USA tourist visa application
                        </a>?
                    </p>

                    <p><strong className={Styles.strong}>You’re not alone.</strong></p>

                    <h3 className={Styles.subTitle}>The Harsh Reality of the USA Tourist Visa Process</h3>

                    <p>
                        Currently, the official <strong className={Styles.strong}>USA visa appointment waiting time</strong>
                        can extend from <strong className={Styles.strong}>15 to 20 months</strong>. That’s over a year of
                        uncertainty, delayed travel plans, and missed opportunities.
                    </p>

                    <p>Now ask yourself:</p>

                    <ul>
                        <li> What if my USA travel plan gets postponed again?</li>
                        <li> What if I make a small mistake in my USA tourist visa application?</li>
                        <li> What if my previous USA visa was rejected and it happens again?</li>
                        <li> What if I panic during the USA visa interview?</li>
                    </ul>

                    <p>
                        One small error.<br />
                        One missing document.<br />
                        One unclear interview answer.
                    </p>

                    <p><strong className={Styles.strong}>👉 And your USA tourist visa can be rejected.</strong></p>

                    <h3 className={Styles.subTitle}>Fear of USA Visa Rejection Is Real</h3>

                    <p>
                        Many applicants face <a href="https://www.globalvisainternationals.com/Visa/refusal-visa/usa">
                            USA visa refusal
                        </a> due to:
                    </p>

                    <ul>
                        <li>Incorrect or incomplete USA visa application filing</li>
                        <li>Poor financial or travel document preparation</li>
                        <li>Lack of confidence during the USA visa interview</li>
                        <li>No professional USA visa guidance</li>
                    </ul>

                    <p>
                        A USA visa rejection doesn’t just waste time and money—it negatively
                        impacts your visa history and reduces future approval chances.
                    </p>

                    <h3 className={Styles.subTitle}>What If There Was a Safer and Faster Way to Get a USA Tourist Visa?</h3>

                    <p>What if you could:</p>

                    <ul>
                        <li>Complete your <strong className={Styles.strong}>USA tourist visa process in just 1-2 months*</strong></li>
                        <li>Avoid common mistakes that lead to USA visa refusals</li>
                        <li>Attend your USA visa interview with confidence and clarity</li>
                        <li>Let experienced consultants manage everything for you</li>
                    </ul>

                    <h3 className={Styles.subTitle}>One-Stop USA Tourist Visa Solution: Global Visa Internationals</h3>

                    <p>
                        At <strong className={Styles.strong}>Global Visa Internationals</strong>, we understand the fear
                        associated with the USA visa process—and we eliminate it with expert,
                        end-to-end support.
                    </p>

                    <p>
                        From application filing to interview preparation, our
                        <a href="https://www.globalvisainternationals.com/Visa/tourist-visa/usa">
                            USA tourist visa services
                        </a> are designed to maximize approval chances.
                    </p>

                    <h3 className={Styles.subTitle}>Our All-Inclusive USA Tourist Visa Services</h3>

                    <ul>
                        <li> Accurate USA tourist visa application filing</li>
                        <li> Visa slot booking & portal setup</li>
                        <li> Customized USA visa document checklist</li>
                        <li> Mock USA visa interview preparation with experts</li>
                    </ul>

                    <p>
                        We prepare you exactly as visa officers expect—so you walk into your
                        interview calm, confident, and fully prepared.
                    </p>

                    <h3 className={Styles.subTitle}>Special Limited-Time USA Visa Offer</h3>

                    <p>
                        <strong className={Styles.strong}>Complete USA Tourist Visa Assistance at just ₹55,000</strong><br />
                        Limited-time offer - Valid till <strong className={Styles.strong}>31st December</strong>
                    </p>

                    <p>
                        No hidden charges.<br />
                        No confusion.<br />
                        No stress.
                    </p>

                    <h3 className={Styles.subTitle}>Don’t Let Fear or Delays Decide Your USA Travel Dream</h3>

                    <p>
                        The longer you wait, the longer USA visa appointment delays become.<br />
                        Applying without expert help increases the risk of rejection.
                    </p>

                    <p><strong className={Styles.strong}>👉 Act now. Apply smart. Travel to the USA sooner.</strong></p>

                    <h3 className={Styles.subTitle}>Contact Global Visa Internationals Today</h3>

                    <p>
                        📞 <a href="tel:+917022213466">+91-7022213466</a><br />
                        📧 <a href="mailto:operations@globalvisainternationals.com">operations@globalvisainternationals.com</a>
                    </p>

                    <p>
                        📍 Brigade Road, Bengaluru<br />
                        🔗 <a href="http://www.globalvisainternationals.com">www.globalvisainternationals.com</a>
                    </p>

                    <p>
                        📩 DM us today and take your first confident step towards your USA tourist visa 🇺🇸
                    </p>

                    <p>
                        <strong className={Styles.strong}>
                            <a href="https://www.globalvisainternationals.com/Visa/tourist-visa/usa">Global Visa Internationals - Trusted Experts for USA Tourist Visa Success.</a>
                        </strong>
                    </p>
                </section>
            </article>

            <VisaForm />

        </>
    );
}
