import AnimatedHR from '@/Components/AnimatedHR';
import Styles from './blog.module.css';
import Head from 'next/head';
import VisaForm from '@/Components/VisaForm';
import React from "react";

export const metadata = {
    title: "Important Travel Update for Visitors to India — E-Arrival Card (From 1 Oct 2025)",
    description:
        "Starting October 1, 2025, all foreign nationals, including OCI cardholders, must complete the new Electronic Arrival Card (E-Arrival Card) before entering India. Learn how to apply online, advantages, and what happens if your visa expires while in India.",
    keywords: [
        "E-Arrival Card India 2025",
        "India travel update October 2025",
        "How to apply E-Arrival Card India",
        "India visa entry rules 2025",
        "OCI cardholders E-Arrival requirement",
        "India immigration digital form",
        "Visa expiry rules India",
        "Indian visa overstay penalty",
        "Su-Swagatam app India entry",
        "Travel to India 2025 new rules"
    ],
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    alternates: { canonical: "https://www.globalvisainternationals.com/blog/india-e-arrival-card-2025-update" },
    url: "https://www.globalvisainternationals.com/blog/india-e-arrival-card-2025-update",
    author: "Global Visa Internationals",
    date: "2025-10-15",
    authors: [{ name: "Global Visa Internationals" }],
    category: "Visa Policy & Immigration News",
    image: "https://www.globalvisainternationals.com/blogBannerImages/India-launched-E-arival-card-for-FOREIGNERs.jpg",
    imagealt: "Foreign traveler filling out India's new E-Arrival Card 2025 online",
    siteName: "Global Visa Internationals",
    type: "article",

    openGraph: {
        type: "article",
        locale: "en_US",
        title: "E-Arrival Card India 2025 – What Travelers Must Know Before Entering 🇮🇳",
        description:
            "From 1 October 2025, all foreign visitors — including OCI cardholders — must complete India’s new E-Arrival Card before travel. Learn how to apply, advantages, and visa expiry rules.",
        url: "https://www.globalvisainternationals.com/blog/india-e-arrival-card-2025-update",
        images: [
            {
                url: "https://www.globalvisainternationals.com/blogBannerImages/India-launched-E-arival-card-for-FOREIGNERs.jpg",
                width: 1200,
                height: 630,
                alt: "Foreign traveler filling out India's new E-Arrival Card 2025 online",
                type: "image/jpeg",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        site: "@GLOBALVISA1505",
        creator: "@GLOBALVISA1505",
        title: "India’s New E-Arrival Card 2025 – Must for All Foreign Visitors 🇮🇳",
        description:
            "Starting October 2025, all travelers to India — including OCI cardholders — must complete the E-Arrival Card online before entry. Learn how to apply and avoid immigration delays.",
        images: [
            "https://www.globalvisainternationals.com/blogBannerImages/India-launched-E-arival-card-for-FOREIGNERs.jpg",
        ],
    },

    other: {
        "article:published_time": "2025-10-15",
        "article:modified_time": new Date().toISOString(),
        "article:section": "Visa Policy & Immigration News",
        "article:tag": "India E-Arrival Card, Indian visa update 2025, OCI entry rules, immigration news India",
    },
};

export default function Important_Travel_Update_E_Arrival_Card_for_India_Effective_1_Oct_2025() {
    const fullImage = metadata.image;

    const blogStructuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": metadata.title,
        "description": metadata.description,
        "image": fullImage,
        "author": {
            "@type": "Organization",
            "name": metadata.author,
            "sameAs": [
                "https://www.facebook.com/globalvisainternationals/",
                "https://www.instagram.com/globalvisa_internationals/",
                "https://www.linkedin.com/company/global-visa-internationals/",
                "https://x.com/GLOBALVISA1505",
                "https://www.youtube.com/@globalVisaInternationals",
                "https://www.google.com/maps/place/Global+Visa+Internationals"
            ]
        },
        "publisher": {
            "@type": "Organization",
            "name": metadata.author,
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.globalvisainternationals.com/gvilogo.png"
            }
        },
        "datePublished": metadata.date,
        "dateModified": metadata.date,
        "mainEntityOfPage": metadata.url
    };

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.globalvisainternationals.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.globalvisainternationals.com/blog" },
            { "@type": "ListItem", "position": 3, "name": "India E-Arrival Card 2025 Update", "item": metadata.url }
        ]
    };

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the E-Arrival Card in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The E-Arrival Card is a new digital immigration form required for all foreign nationals entering India from 1 October 2025. It replaces the old paper arrival card and must be filled online before travel."
                }
            },
            {
                "@type": "Question",
                "name": "How can I apply for India’s E-Arrival Card?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can apply online through the official portal at https://indianvisaonline.gov.in/earrival or via the Su-Swagatam mobile app. Log in with your passport details, fill the form, and download the confirmation QR code."
                }
            },
            {
                "@type": "Question",
                "name": "Is the E-Arrival Card mandatory for OCI cardholders?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. From October 2025, OCI cardholders are also required to complete the E-Arrival Card before arriving in India."
                }
            },
            {
                "@type": "Question",
                "name": "What are the benefits of the E-Arrival Card?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The E-Arrival Card ensures faster immigration clearance, eliminates paper forms, reduces human errors, and enhances border security through digital pre-verification."
                }
            },
            {
                "@type": "Question",
                "name": "What happens if my visa expires while in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Overstaying is a legal offense. You must immediately visit the Foreigners Regional Registration Office (FRRO) or apply online at https://indianfrro.gov.in/eservices/ for an extension or regularization. Fines and penalties apply depending on the duration of overstay."
                }
            }
        ]
    };


    return (
        <>
            <Head>
                {/* Basic */}
                <meta charSet="utf-8" />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta name="robots" content={metadata.robots} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href='https://www.globalvisainternationals.com/blog/us-visa-integrity-fee-2025-do-indians-need-to-pay-extra' />

                {/* Preconnect / DNS-prefetch */}
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="//fonts.googleapis.com" />

                {/* Preload hero image */}
                <link rel="preload" as="image" href="https://www.globalvisainternationals.com/blogBannerImages/us-visa-integrity-fee-indians-2025.jpeg" />

                {/* Open Graph */}

                <meta property="og:type" content={metadata.type} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:url" content={metadata.url} />
                <meta property="og:image" content={metadata.image} />
                <meta property="og:image:alt" content={metadata.imagealt} />
                <meta property="og:site_name" content={metadata.siteName} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />


                {/* Social Images */}
                {metadata.openGraph.images.map((img, index) => {
                    // ensure absolute URLs
                    const imageUrl = img.url.startsWith("http")
                        ? img.url
                        : `https://www.globalvisainternationals.com/blogBannerImages/us-visa-integrity-fee-indians-2025.jpeg`;
                    return (
                        <React.Fragment key={index}>
                            <meta property="og:image" content={imageUrl} />
                            {img.width && <meta property="og:image:width" content={img.width.toString()} />}
                            {img.height && <meta property="og:image:height" content={img.height.toString()} />}
                            {img.alt && <meta property="og:image:alt" content={img.alt} />}
                            {img.type && <meta property="og:image:type" content={img.type} />}
                        </React.Fragment>
                    );
                })}


                {/* Article meta */}
                <meta property="article:published_time" content={metadata.other["article:published_time"]} />
                <meta property="article:modified_time" content={metadata.other["article:modified_time"]} />
                <meta property="article:author" content={metadata.authors[0].name} />
                <meta property="article:section" content={metadata.other["article:section"]} />
                {metadata.other["article:tag"].split(",").map((tag, i) => (<meta key={i} property="article:tag" content={tag.trim()} />))}

                {/* Twitter */}

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@GLOBALVISA1505" />
                <meta name="twitter:creator" content="@GLOBALVISA1505" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content={metadata.image} />
                <meta name="twitter:image:alt" content={metadata.imagealt} />


                {/* Fallback */}
                <link rel="image_src" href={metadata.image} />

                {/* PWA / Icons */}
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <meta name="theme-color" content="#ffffff" />

                {/* Local SEO */}
                <meta name="geo.region" content="IN-KA" />
                <meta name="geo.placename" content="Bengaluru" />
                <meta name="geo.position" content="12.9716;77.5946" />
                <meta name="ICBM" content="12.9716,77.5946" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
            </Head>


            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose dark:prose-invert">
                <div className={Styles.meta}>
                    <span>By {metadata.author}</span>
                    <span>•</span>
                    <span>
                        {new Date(metadata.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                </div>
                <article>
                    <header className="mb-6">
                        <h1 className="text-3xl sm:text-4xl font-extrabold">Important Travel Update for Visitors to India — E-Arrival Card (From 1 Oct 2025)</h1>
                        <p className="mt-3 text-gray-600">All international travellers (including OCI cardholders) must complete the new Electronic Arrival Card before entering India. This guide explains how to apply, why it helps, and what to do if your visa expires.</p>

                        <div className="mt-4 flex flex-wrap gap-2 text-sm">
                            <span className="px-3 py-1 bg-blue-50 text-blue-800 rounded">Effective: 1 Oct 2025</span>
                            <span className="px-3 py-1 bg-green-50 text-green-800 rounded">Mandatory for: All foreign nationals</span>
                        </div>
                    </header>

                    <section>
                        <h2>What is the E-Arrival Card?</h2>
                        <p>The <strong>E-Arrival Card</strong> is a digital immigration form introduced by the Government of India to replace the paper arrival cards. It collects essential arrival information — passport and visa details, flight information, local contact/address in India, and health/customs declarations — before you reach immigration.</p>
                    </section>

                    <section>
                        <h2>How to Apply — Step-by-step</h2>
                        <ol>
                            <li><strong>Visit the official portal:</strong> <a href="https://indianvisaonline.gov.in/earrival" target="_blank" rel="noopener noreferrer">https://indianvisaonline.gov.in/earrival</a>. You can also use the Su-Swagatam mobile app.</li>
                            <li><strong>Create or log into your account:</strong> Enter your passport number and date of birth to start. First-time users will create a profile.</li>
                            <li><strong>Fill the form:</strong> Provide personal details, passport info, visa type and validity, flight number, and your address in India. Answer health and customs questions honestly.</li>
                            <li><strong>Upload documents (if requested):</strong> Some travelers may be asked to upload a copy of the visa, OCI card, or passport page.</li>
                            <li><strong>Submit and save confirmation:</strong> After submission you will get a confirmation email and a QR code or reference number. Save a digital copy — and print one if you prefer.</li>
                            <li><strong>At arrival:</strong> Present or scan the E-Arrival confirmation at kiosks or immigration counters to speed up clearance.</li>
                        </ol>

                        <aside className="mt-4 p-4 border-l-4 border-blue-200 bg-blue-50 rounded">
                            <strong>Pro tip:</strong> Complete the E-Arrival Card at least 24 hours before your flight to avoid last-minute issues.
                        </aside>
                    </section>

                    <section>
                        <h2>Advantages of the E-Arrival Card</h2>
                        <ul>
                            <li><strong>Faster immigration processing:</strong> Pre-filled digital data reduces time at counters.</li>
                            <li><strong>Paperless & eco-friendly:</strong> No handwritten forms means less waste.</li>
                            <li><strong>Pre-verification:</strong> Immigration receives your details before you land, smoothing arrival flows.</li>
                            <li><strong>Fewer errors:</strong> Digital entry reduces mistakes from handwriting or transcription.</li>
                            <li><strong>Increased security:</strong> Digital screening helps authorities process travelers more safely.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>What Happens If Your Visa Expires While in India?</h2>
                        <p>Staying beyond your visa validity is a serious immigration violation in India. If your visa expires while you are in India, act immediately.</p>

                        <h3>Consequences of overstaying</h3>
                        <ul>
                            <li>Fines and penalties that depend on duration of overstay.</li>
                            <li>Possible deportation and a ban on future visas.</li>
                            <li>Detention in severe or deliberate overstay cases.</li>
                        </ul>

                        <h3>Immediate steps to take</h3>
                        <ol>
                            <li>Visit the local <strong>Foreigners Regional Registration Office (FRRO)</strong> or the nearest immigration office without delay.</li>
                            <li>Apply for an extension or regularization via the <a href="https://indianfrro.gov.in/eservices/" target="_blank" rel="noopener noreferrer">e-FRRO portal</a>.</li>
                            <li>Keep all receipts and communication records — you may need proof of your application and attempts to regularize status.</li>
                        </ol>

                        <div className="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-200 rounded">If you suspect your visa will expire while in India, do not delay — apply for an extension before expiry when possible.</div>
                    </section>

                    <section>
                        <h2>Frequently Asked Questions (FAQ)</h2>
                        <h4>Is the E-Arrival Card free?</h4>
                        <p>Yes — the E-Arrival Card portal is a government service. Beware of third-party sites charging for form submission.</p>

                        <h4>Do OCI cardholders need an E-Arrival Card?</h4>
                        <p>Yes. From 1 Oct 2025 the E-Arrival Card requirement applies to all foreign nationals, including OCI cardholders.</p>

                        <h4>Can I fill the E-Arrival Card on arrival?</h4>
                        <p>It’s strongly recommended to complete the form before travel. Some airports may allow on-arrival completion via kiosks or the Su-Swagatam app, but pre-submission is faster and safer.</p>
                    </section>

                    <section>
                        <h2>Useful Links</h2>
                        <ul>
                            <li><a href="https://indianvisaonline.gov.in/earrival" target="_blank" rel="noopener noreferrer">E-Arrival Card portal</a></li>
                            <li><a href="https://indianfrro.gov.in/eservices/" target="_blank" rel="noopener noreferrer">e-FRRO (visa extension & registration)</a></li>
                            <li>Su-Swagatam App: Available on Google Play &amp; Apple App Store</li>
                        </ul>
                    </section>


                </article>
            </main>


        </>
    );
}