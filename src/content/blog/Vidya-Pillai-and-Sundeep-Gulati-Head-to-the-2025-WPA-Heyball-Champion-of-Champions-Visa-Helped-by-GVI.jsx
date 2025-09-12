import AnimatedHR from '@/Components/AnimatedHR';
import Styles from './blog.module.css';
import Head from 'next/head';
import VisaForm from '@/Components/VisaForm';
import React from "react";
import AnimatedSection from '@/Components/AnimatedSection';
import Image from 'next/image';

export const metadata = {
    title: "From India to Australia: Vidya Pillai & Sundeep Gulati Head to the 2025 WPA Heyball Champion of Champions — Visa Helped by GVI",
    description:
        "Indian cue-sport stars Vidya Pillai and Sundeep Gulati are travelling to Australia for the 2025 WPA Heyball Champion of Champions. Read their profiles, achievements, and how Global Visa Internationals (GVI) secured their sports visas to make this trip possible.",
    keywords: ["Vidya Pillai", "Sundeep Gulati", "Heyball 2025", "WPA Champion of Champions 2025", "Australia sports visa", "sports visa India to Australia", "Global Visa Internationals", "GVI visa support", "Indian snooker players", "cue sports India", "visa consultants India"],
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    alternates: {
        canonical:
            "https://www.globalvisainternationals.com/blog/vidya-pillai-sundeep-gulati-heyball-2025-australia-visa-gvi",
    },
    url: "https://www.globalvisainternationals.com/blog/vidya-pillai-sundeep-gulati-heyball-2025-australia-visa-gvi",
    author: "Global Visa Internationals",
    date: "2025-09-11",
    authors: [{ name: "Global Visa Internationals" }],
    category: "Sports Visas & Athlete Stories",
    image:
        "https://www.globalvisainternationals.com/blogBannerImages/Vidya-Sundeep-Heyball-2025-GVI.jpg",
    imagealt:
        "Vidya Pillai and Sundeep Gulati celebrating visa approval for Heyball 2025 — Global Visa Internationals",
    siteName: "Global Visa Internationals",
    type: "article",
    openGraph: {
        type: "article",
        locale: "en_US",
        title:
            "Vidya Pillai & Sundeep Gulati — Australia Bound for the 2025 WPA Heyball Champion of Champions | GVI Visa Support",
        description:
            "Read about Vidya Pillai and Sundeep Gulati's journey to the 2025 WPA Heyball Champion of Champions and how Global Visa Internationals (GVI) supported their successful sports visa applications.",
        url: "https://www.globalvisainternationals.com/blog/vidya-pillai-sundeep-gulati-heyball-2025-australia-visa-gvi",
        images: [
            {
                url:
                    "https://www.globalvisainternationals.com/blogBannerImages/Vidya-Sundeep-Heyball-2025-GVI.jpg",
                width: 1200,
                height: 630,
                alt:
                    "Vidya Pillai and Sundeep Gulati — heading to Heyball 2025 with visa support from GVI",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@GLOBALVISA1505",
        creator: "@GLOBALVISA1505",
        title:
            "Vidya Pillai & Sundeep Gulati — Australia Bound for Heyball 2025 | Visa Helped by GVI",
        description:
            "Top Indian cue-sport stars Vidya Pillai and Sundeep Gulati are heading to Australia for the 2025 WPA Heyball Champion of Champions with visa support from Global Visa Internationals.",
        images: [
            "https://www.globalvisainternationals.com/blogBannerImages/Vidya-Sundeep-Heyball-2025-GVI.jpg",
        ],
    },
    other: {
        "article:published_time": "2025-09-11",
        "article:modified_time": new Date().toISOString(),
        "article:section": "Sports Visas & Athlete Stories",
        "article:tag":
            "Vidya Pillai, Sundeep Gulati, Heyball 2025, Australia sports visa, Global Visa Internationals, GVI",
    },
};



export default function US_Visa_Integrity_Fee_For_Indians_Explained_2025() {

    const fullImageUrl = `https://www.globalvisainternationals.com/blogBannerImages/Vidya-Sundeep-Heyball-2025-GVI.jpg`;
    const fullImageWebp = metadata.image;
    const fullImage = metadata.image;

    const blogStructuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": metadata.title,
        "description":
            "Read the stories of Vidya Pillai and Sundeep Gulati — two top Indian cue-sport athletes travelling to Australia for the 2025 WPA Heyball Champion of Champions — and learn how Global Visa Internationals (GVI) supported their successful sports visa applications.",
        "image": metadata.image,
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
            },
            "sameAs": [
                "https://www.facebook.com/globalvisainternationals/",
                "https://www.instagram.com/globalvisa_internationals/",
                "https://www.linkedin.com/company/global-visa-internationals/",
                "https://x.com/GLOBALVISA1505",
                "https://www.youtube.com/@globalVisaInternationals",
                "https://www.google.com/maps/place/Global+Visa+Internationals"
            ]
        },
        "datePublished": metadata.date,
        "dateModified": metadata.date,
        "mainEntityOfPage": metadata.url
    };

    const breadcrumbStructuredData = {
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
                "name": "Blog",
                "item": "https://www.globalvisainternationals.com/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": metadata.title,
                "item": metadata.url
            }
        ]
    };

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Are Vidya Pillai and Sundeep Gulati going to the 2025 WPA Heyball Champion of Champions in Australia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Vidya Pillai and Sundeep Gulati are travelling to Australia to compete at the 2025 WPA Heyball Champion of Champions, and this blog covers their profiles, achievements and preparations."
                }
            },
            {
                "@type": "Question",
                "name": "Did Global Visa Internationals (GVI) handle their visas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Global Visa Internationals provided dedicated sports-visa support for both athletes — including eligibility assessment, document preparation, application filing and embassy follow-ups — so they could focus on training and competition."
                }
            },
            {
                "@type": "Question",
                "name": "What documents are typically required for an Australian sports visa for athletes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typical requirements include a valid passport, tournament invitation or entry confirmation, a letter from the national federation or team, proof of recent sporting achievements (rankings/medals), travel itinerary, proof of accommodation, travel/medical insurance, and evidence of sufficient funds. Specific requirements vary by visa subclass and individual circumstances."
                }
            },
            {
                "@type": "Question",
                "name": "Can GVI help expedite an athlete's visa application?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. GVI offers athlete-focused, expedited handling where possible — prioritising accurate documentation, fast follow-ups with consulates, and dedicated case managers to minimise delays. Expedited processing depends on consulate timelines and visa category."
                }
            },
            {
                "@type": "Question",
                "name": "How can athletes or teams contact GVI for visa assistance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Athletes and teams can contact Global Visa Internationals via the contact page on the website (https://www.globalvisainternationals.com/contact) or through GVI's social channels for a consultation and tailored sports-visa support."
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
                <link rel="canonical" href='https://www.globalvisainternationals.com/blog/vidya-pillai-sundeep-gulati-heyball-2025-australia-visa-gvi' />

                {/* Preconnect / DNS-prefetch */}
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="//fonts.googleapis.com" />

                {/* Preload hero image */}
                <link rel="preload" as="image" href="https://www.globalvisainternationals.com/blogBannerImages/Vidya-Sundeep-Heyball-2025-GVI.jpg" />

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
                        : `https://www.globalvisainternationals.com/blogBannerImages/Vidya-Sundeep-Heyball-2025-GVI.jpg`;
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



            <main>
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

                <div className={Styles.imageCard}>
                    <picture>
                        <source srcSet={fullImageWebp} type="image/webp" />
                        <img
                            src={fullImage}
                            alt={metadata.title}
                            className={Styles.image}
                            loading="lazy"
                        />
                    </picture>
                </div>



                <article className={Styles.article}>
                    <p>{metadata.description}</p>

                    <section id="aboutUs">
                        <section className={Styles.storyContainer}>
                            {/* Left Image */}
                            <AnimatedSection direction="left" reverseOnExit={true}>
                                <div className={Styles.imageWrapper}>
                                    <img
                                        src="https://www.globalvisainternationals.com/blogBannerImages/Vidya-Pillai.webp"
                                        alt="Vidya Pillai Queen of the Green"
                                        className={Styles.responsiveImage}
                                    />
                                </div>
                            </AnimatedSection>

                            {/* Right Text */}
                            <div className={Styles.textContent}>
                                <AnimatedSection direction="up" delay={0.1} reverseOnExit={true}>
                                    <h2 className={Styles.subtitle}>
                                        Vidya Pillai — <i>"Queen of the Green"</i>
                                    </h2>
                                    <div className={Styles.storyCard}>
                                        <p>
                                            Vidya Viswanathan Pillai is one of India’s most respected
                                            cue-sport athletes. A veteran of international snooker and related
                                            cue disciplines, she’s won multiple national titles and
                                            international medals across snooker and heyball formats. Her long
                                            list of achievements and awards (including national championships
                                            and notable international podiums) make her a natural leader for
                                            Indian teams on big stages.
                                        </p>
                                        <p>
                                            Most recently Vidya has been collecting top honours in 2025
                                            heyball competitions (including national and commonwealth-level
                                            successes), which helped qualify her for the Champion of Champions
                                            event in{" "}
                                            <a
                                                href="https://www.globalvisainternationals.com/Visa/tourist-visa/australia-tourist-visa"
                                                target="_blank"
                                            >
                                                Australia
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </section>
                    </section>

                    <section id="aboutUs">
                        <section className={Styles.storyContainer}>
                            {/* Left Image */}
                            <AnimatedSection direction="left" reverseOnExit={true}>
                                <div className={Styles.imageWrapper}>
                                    <img
                                        src="https://www.globalvisainternationals.com/blogBannerImages/Sundeep-Gulati.jpeg"
                                        alt="Sundeep Gulati — the steady contender"
                                        className={Styles.responsiveImage}
                                    />
                                </div>
                            </AnimatedSection>

                            {/* Right Text */}
                            <div className={Styles.textContent}>
                                <AnimatedSection direction="up" delay={0.1} reverseOnExit={true}>
                                    <h2 className={Styles.subtitle}>
                                        Sundeep Gulati — the steady contender
                                    </h2>
                                    <div className={Styles.storyCard}>
                                        <p>
                                            Sundeep Gulati is a seasoned cue-sports player with strong showings
                                            in national pool and snooker events over the years. His player
                                            profile lists a number of national-level wins and international
                                            representations — a career built on persistence and clutch
                                            performances. Sundeep’s strong 2025 heyball form at the national
                                            championships earned him a ticket to the Champion of Champions
                                            lineup in{" "}
                                            <a
                                                href="https://www.globalvisainternationals.com/Visa/business/australia"
                                                target="_blank"
                                            >
                                                Brisbane, Australia
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </section>
                    </section>

                    <h3 className={Styles.strong}>
                        The tournament — 2025 WPA Heyball Champion of Champions (Brisbane)
                    </h3>
                    <p>
                        The 2025 Champion of Champions is staged at the Brisbane Convention &
                        Exhibition Centre and gathers winners and top finishers from national and
                        regional heyball events. It’s an opportunity to play under the WPA banner
                        with attractive prize money and media exposure — a career milestone for any
                        player.
                    </p>

                    <h3 className={Styles.strong}>
                        How GVI (Global Visa Internationals) helped — speeding athletes to the start
                        line
                    </h3>
                    <p>
                        At{" "}
                        <a href="https://www.globalvisainternationals.com/" target="_blank">
                            Global Visa Internationals (GVI)
                        </a>
                        , we know athletes don’t get second chances at once-in-a-career
                        opportunities. When Vidya and Sundeep qualified for the WPA Champion of
                        Champions, they needed one thing above all: a smooth, reliable visa process
                        so they could focus on training, not paperwork.
                    </p>

                    <h4 className={Styles.strong}>What GVI did for them:</h4>
                    <ul>
                        <li>
                            Managed the entire{" "}
                            <a
                                href="https://www.globalvisainternationals.com/Visa/tourist-visa/australia-tourist-visa"
                                target="_blank"
                            >
                                Australia visa application
                            </a>{" "}
                            end-to-end (document checklist, appointment scheduling, and follow-up).
                        </li>
                        <li>
                            Coordinated athlete-specific requirements (letters from federations,
                            tournament invites, travel itineraries).
                        </li>
                        <li>
                            Provided{" "}
                            <a
                                href="https://www.globalvisainternationals.com/Visa/permanent-residency-visa/australia"
                                target="_blank"
                            >
                                priority handling
                            </a>{" "}
                            where permissible, and clear communication so athletes and coaches always
                            knew the next step.
                        </li>
                    </ul>

                    <p>
                        Result: both players got their travel authorizations in time and left with
                        full focus on competition and performance.
                    </p>
                    <p className={Styles.note}>
                        Note: GVI facilitated their visa process at the athletes’ request and in
                        cooperation with their teams and tournament organizers.
                    </p>

                    <h3 className={Styles.strong}>Our values — how GVI treats athletes & clients</h3>
                    <p>
                        At Global Visa Internationals we’re built on three core promises:
                    </p>
                    <ol>
                        <li>
                            <b className={Styles.strong}> People-first service — </b>we treat every
                            client like a teammate: respectful, transparent, and proactive.
                        </li>
                        <li>
                            <b className={Styles.strong}> Speed + accuracy —</b> paperwork handled
                            fast, but correctly — because a single missing document can derail months
                            of preparation.
                        </li>
                        <li>
                            <b className={Styles.strong}> Privacy & integrity —</b> client documents
                            and personal data are handled with the strictest confidentiality and
                            ethical standards.
                        </li>
                    </ol>
                    <p>
                        We pair industry knowledge with white-glove service so athletes arrive at
                        tournaments calm and ready to win. Learn more about our{" "}
                        <a
                            href="https://www.globalvisainternationals.com/Visa/refusal-visa/australia"
                            target="_blank"
                        >
                            visa refusal assistance
                        </a>{" "}
                        if your past applications faced challenges.
                    </p>

                    <h3 className={Styles.strong}>Why this matters for Indian cue sports</h3>
                    <p>
                        When veterans like Vidya and steady competitors like Sundeep reach
                        international podiums, it does more than add trophies to cabinets — it
                        raises the profile of heyball and snooker at home, inspires juniors, and
                        opens doors for sponsorship and development programs. GVI sees itself as a
                        small but crucial partner in that ecosystem: removing travel hurdles so
                        athletes can do what they do best.
                    </p>

                    <h3 className={Styles.strong}>Call to action — need a visa for sport or travel?</h3>
                    <p>
                        If you’re an athlete, coach, or federation planning international
                        competition, GVI can prepare a tailored plan: document audit, federation
                        coordination, visa submission, and travel kit.{" "}
                        <a href="https://www.globalvisainternationals.com/contact" target="_blank">
                            Contact us
                        </a>{" "}
                        today — and let the paperwork be our problem, not yours.
                    </p>

                    <VisaForm />
                </article>

            </main>


        </>
    );
}