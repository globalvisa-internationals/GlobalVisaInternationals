import VisaForm from '@/Components/VisaForm';
import Styles from './blog.module.css';
import Head from 'next/head';

export const metadata = {
    title: "Italy to Issue Nearly 500,000 Work Permits to Non-EU Workers by 2028: A Comprehensive Overview",
    date: "2025-07-04",
    category: "Visa Information",
    author: "Global Visa Internationals Team",
    excerpt:
        "In a significant move aimed at addressing pressing labor shortages and demographic challenges, the Italian government has announced plans to grant nearly 500,000 additional work permits to non-EU foreign workers between 2026 and 2028. This initiative represents one of Italy's most substantial immigration efforts in recent history.",
    image: "/Blog/Italy-to-Issue-Nearly-500000-Work-Permits-to-Non-EU-Workers.webp",
    keywords: [
        "Italy visa",
        "Italy PR Visa",
        "Italy PR visa assistance",
        "Visa assistance",
        "Italy visa update 2025",
        "EMPP Italy 2025",
        "Italy Student Visa",
        "Italy",
        "Italy NEWS",
        "Important Things to Know for Indian Students in Italy"
    ]
};

export default function CanadaResidencyBlog() {
    const fullImageUrl = `https://www.globalvisainternationals.com${metadata.image}`;
    const pageUrl =
        "https://www.globalvisainternationals.com/blog/Italy-to-Issue-Nearly-500000-Work-Permits-to-Non-EU-Workers/";

    const blogStructuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": pageUrl
        },
        "headline": metadata.title,
        "description": metadata.excerpt,
        "image": fullImageUrl,
        "author": {
            "@type": "Organization",
            "name": "Global Visa Internationals",
            "url": "https://www.globalvisainternationals.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Global Visa Internationals",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.globalvisainternationals.com/gvilogo.png"
            }
        },
        "datePublished": metadata.date,
        "dateModified": metadata.date,
        "inLanguage": "en",
        "articleSection": metadata.category
    };

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.globalvisainternationals.com"
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.globalvisainternationals.com/blog"
            },
            {
                "@type": "ListItem",
                position: 3,
                name: metadata.title,
                item: pageUrl
            }
        ]
    };



    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.excerpt} />
                <meta name="keywords" content={metadata.keywords.join(", ")} />
                <meta name="author" content={metadata.author} />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preload" as="image" href={fullImageUrl} />
                <link rel="canonical" href={pageUrl} />

                {/* Open Graph */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.excerpt} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={fullImageUrl} />
                <meta property="og:image:alt" content={metadata.title} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Global Visa Internationals" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@GLOBALVISA1505" />
                <meta name="twitter:creator" content="@GLOBALVISA1505" />
                <meta name="twitter:url" content={pageUrl} />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.excerpt} />
                <meta name="twitter:image" content={fullImageUrl} />
                <meta name="twitter:image:alt" content={metadata.title} />

                {/* Mobile SEO */}
                <meta name="format-detection" content="telephone=no" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />

                {/* Local SEO */}
                <meta name="geo.region" content="IN-KA" />
                <meta name="geo.placename" content="Bengaluru" />
                <meta name="geo.position" content="12.9716;77.5946" />
                <meta name="ICBM" content="12.9716,77.5946" />

                {/* Structured Data: Organization */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Global Visa Internationals",
                            "url": "https://www.globalvisainternationals.com",
                            "logo": "https://www.globalvisainternationals.com/gvilogo.png",
                            "description":
                                "Thinking of studying in Canada? For Indian students, it’s more than a big move — it’s a culture shock, a wallet workout, and a battle with -30°C. From GPA confusion to maple syrup manners, here are 10 things you really need to know before Canada turns you polite… and permanently broke.",
                            "founder": { "@type": "Person", "name": "Anusha" },
                            "foundingDate": "2016",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Brigade Road",
                                "addressLocality": "Bengaluru",
                                "addressRegion": "Karnataka",
                                "postalCode": "560025",
                                "addressCountry": "IN"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+91-7022213466",
                                "contactType": "Customer Support",
                                "areaServed": "IN",
                                "availableLanguage": ["English", "Hindi", "Kannada", "Tamil"]
                            },
                            "areaServed": ["IN", "US", "CA", "UK", "EU"],
                            "sameAs": [
                                "https://www.facebook.com/globalvisainternationals/",
                                "https://www.instagram.com/globalvisa_internationals/",
                                "https://www.linkedin.com/company/global-visa-internationals/",
                                "https://x.com/GLOBALVISA1505",
                                "https://www.youtube.com/@globalVisaInternationals",
                                "https://www.google.com/maps/place/Global+Visa+Internationals"
                            ]
                        })
                    }}
                />

                {/* Structured Data: BlogPosting */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
                />

                {/* Structured Data: BreadcrumbList */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
                />
            </Head>


            <main>
                <div className={Styles.meta}>
                    <span>By {metadata.author}</span>
                    <span>•</span>
                    <span>
                        {new Date(metadata.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
                    </span>
                </div>

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

                <div className={Styles.ArticalSec}>
                    <h1 className={Styles.subtitle}>{metadata.title}</h1>
                    <p>In a significant move aimed at addressing pressing labor shortages and demographic challenges, the Italian government has announced plans to grant nearly 500,000 additional work permits to non-EU foreign workers between 2026 and 2028. This initiative represents one of Italy's most substantial immigration efforts in recent history.</p>
                    <ul>
                        <h3 className={Styles.subtitle}><li>Key Highlights</li></h3>
                        <b className={Styles.bold}>Non-EU Work Permits By Year:</b>
                        <ul>
                            <li>2025: 164,850</li>
                            <li>2026–2028: 497,550 (planned)</li>
                            <li>2023–2025: 452,000+ (previous)</li>
                        </ul>

                        <h3 className={Styles.subtitle}><li>Reasons Behind the Increased Work Permits</li></h3>

                        <b className={Styles.bold}>Italy is facing several economic challenges, including:</b>
                        <ul>
                            <li>An aging population</li>
                            <li>A declining birthrate</li>
                            <li>Ongoing labor shortages in key sectors such as agriculture, </li>
                        </ul>
                        construction, tourism, and healthcare.

                        <p>In 2024, Italy noted a concerning statistic of 281,000 more deaths than births, resulting in a population decline to 58.93 million. To support its economy, healthcare system, and pension framework, the country recognizes the need for a younger, more dynamic workforce.</p>


                        <div className={Styles.VisaForm1}><VisaForm /></div>

                        <h3 className={Styles.subtitle}><li>Implications for Foreign Workers</li></h3><p>The new work permit policy provides legal pathways for non-EU workers to live and work in Italy. The general application process involves the following steps:</p>

                         <ol>
                        <li><b className={Styles.bold}>Employer Applies for Authorization (Nulla Osta): </b>This process is undertaken through Italy’s Decreto Flussi (immigration flow decree).</li>
                        <li><b className={Styles.bold}>Applicant Applies for a Visa: </b>This application is made at the Italian consulate in the applicant's home country.</li>
                        <li><b className={Styles.bold}>Travel to Italy & Apply for a Residence Permit: </b>The application must be submitted within eight days of arriving in Italy.</li>
                        

                    </ol>

                        <h3 className={Styles.subtitle}><li>Visa and Permit Costs</li></h3><p>Estimated costs associated with obtaining a work visa and residence permit include:</p>
                        <ul>
                            <li><b className={Styles.bold}>Work Visa: </b>€100 – €200</li>
                            <li><b className={Styles.bold}>Residence Permit Applicatio</b>€76 – €200 + tax</li>
                            <li><b className={Styles.bold}>Postal Charges: </b>€30 – €40</li>
                        </ul>

                        <p className={Styles.note}><b className={Styles.bold}>Note:</b> Fees may vary based on the duration of stay and type of employment contract.</p>
                        <h3 className={Styles.subtitle}><li>Legal vs. Illegal Immigration</li> </h3><p>The administration under Prime Minister Giorgia Meloni is focusing on promoting legal immigration to bridge labor shortages while simultaneously implementing measures to combat illegal migration. Key initiatives include:</p>

                        <ul>
                            <li>Increasing the number of work permits issued under the Decreto Flussi</li>
                            <li>Tightening citizenship rules to limit claims to Italian ancestry to two generations abroad (down from four)</li>
                            <li>Proposing reforms to facilitate legal migration for economic benefits</li>
                        </ul>
<h3 className={Styles.subtitle}><li>Who Is Eligible to Apply?</li></h3>The work permits will primarily be available for:
<ul>
    <li>Seasonal and non-seasonal workers</li>
    <li> Construction workers</li>
    <li>Agricultural laborers</li>
    <li>Domestic helpers</li>
    <li>Hospitality and tourism employees</li>
    <li>Healthcare professionals, especially caregivers</li>
</ul>
<p>Additionally, non-EU countries that have bilateral agreements with Italy will be prioritized.</p>

<h3 className={Styles.subtitle}><li>Opportunities for Visa Applicants</li></h3> <p>For skilled or semi-skilled workers considering opportunities abroad, Italy presents a favorable option. With nearly half a million new positions anticipated by 2028 and a clear legal process in place, prospective applicants are encouraged to prepare their documentation, familiarize themselves with basic Italian phrases, and stay informed about updates related to the Flussi Decree.</p>                

   </ul>
   <h2 className={Styles.subtitle}>Conclusion</h2><p>Italy’s proactive approach is indicative of a broader European trend towards managed migration as a viable solution to labor shortages. While many countries are tightening their borders, Italy is opting to create regulated and legal channels for immigration, thus fostering both opportunities and challenges within the migration landscape.</p>

                    <p>Contact Global Visa Internationals or click here to get expert visa assistance and guidance on navigating these evolving immigration rules. Our experienced team can provide you with the latest information, support you in understanding the specific requirements for your visa category, and help you prepare for the necessary English language tests.</p>

                    <p>By staying informed and seeking professional guidance, individuals and families can effectively navigate the UK’s new immigration landscape and achieve their goals of studying, working, or settling in the country.</p>
                   


                    <p className={Styles.links}>
                        📞 <a  className={Styles.a} href="tel:+917022213466"><b><i>+91-7022213466</i></b></a> <br />
                        📧 <a  className={Styles.a} href="mailto:operations@globalvisa-internationalscom"><b><i>operations@globalvisa-internationals.com</i></b></a><br />
                        💬 <a  className={Styles.a} href="https://www.globalvisainternationals.com/contact"><b><i>Schedule a Consultation</i></b></a>
                    </p>
                </div>
                <div className={Styles.VisaForm}><VisaForm /></div>
            </main>
        </>
    );
}
