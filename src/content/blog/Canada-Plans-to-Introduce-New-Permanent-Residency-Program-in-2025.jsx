import Styles from './blog.module.css';
import Head from 'next/head';

export const metadata = {
  title: "Canada Plans to Introduce New Permanent Residency Program in 2025 for Skilled Refugees and Displaced Individuals",
  date: "2025-06-30",
  category: "Visa Information",
  author: "Global Visa Internationals Team",
  excerpt:
    "In 2025, Canada will begin a new program that allows skilled refugees and displaced individuals to live and work in the country permanently. This program builds on a previous successful initiative called the Economic Mobility Pathways Pilot (EMPP). The details were shared in the IRCC Departmental Plan for 2025-2026.",
  image: "/BlogImages/Canada-Plans-to-Introduce-New-Permanent-Residency-Program-in-2025.webp",
  keywords: [
    "Canada visa",
    "Canada PR Visa",
    "Canada PR visa assistance",
    "Visa assistance",
    "Canada visa update 2025",
    "Skilled Refugees Canada",
    "EMPP Canada 2025"
  ]
};

export default function CanadaResidencyBlog() {
  const fullImageUrl = `https://www.globalvisainternationals.com${metadata.image}`;
  const pageUrl =
    "https://www.globalvisainternationals.com/blog/Canada-Plans-to-Introduce-New-Permanent-Residency-Program-in-2025/";

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
        <meta name="twitter:site" content="@GlobalVisaIntern" />
        <meta name="twitter:creator" content="@GlobalVisaIntern" />
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
                "Helping Indian residents navigate complex UK, Canada, and USA immigration with expert visa consulting services.",
              "founder": { "@type": "Person", "name": "Naveen Kumar J" },
              "foundingDate": "2016",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "MG Road",
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


      <main className="prose lg:prose-xl max-w-4xl mx-auto px-4 py-12">
        <div className={Styles.meta}>
          <span>By {metadata.author}</span>
          <span>•</span>
          <span>{new Date(metadata.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>

        <div className={Styles.imageCard}>
          <img src={metadata.image} alt={metadata.title} className={Styles.image} loading="lazy" width="1200" height="630" />
        </div>

        <h1 className={Styles.subtitle}>{metadata.title}</h1>
        <p>Canada will start a new permanent residency pathway in 2025. This program builds on the success of the Economic Mobility Pathways Pilot (EMPP). The initiative, detailed in the IRCC Departmental Plan for 2025-2026, aims to give skilled refugees and displaced persons a reliable way to live and work in Canada.</p>

        <h2 className={Styles.subtitle}>What Is the Economic Mobility Pathways Pilot(EMPP)?</h2>

        <p>Launched in 2018, the Economic Mobility Pathways Pilot(EMPP) connects skilled displaced individuals with Canadian employers through economic immigration streams. So far, nearly 970 people have been moved to Canada through this pilot from 2019 to March 2025.</p>

        <h3 className={Styles.subtitle}>There are two main components:</h3>

        Federal Streams:
        <ul>
          <li><b className={Styles.bold}>Job Offer Stream:</b> This requires a full-time job offer, over one year of work experience, relevant education, and language skills that meet CLB standards.</li>
          <li><b className={Styles.bold}>No Job Offer Stream: </b>This is for high-skilled workers (TEER 0-3) with CLB 7 language proficiency and a strong educational background. This stream is currently closed.</li>
        </ul>


        <p><strong className={Styles.subtitle}>Regional Streams:</strong> These streams include programs like the Atlantic Immigration Program (AIP) and the Provincial Nominee Program (PNP). Applicants need a job offer and must meet regional criteria, including language and education requirements. Some flexibilities, such as credential waivers and settlement loans, are available under AIP.</p>

        <h2 className={Styles.subtitle}>Support and Fee Waivers</h2>

        <p>To ease financial burdens, the Canadian government provides:</p>
        <ul>
          <li>Coverage for application and biometric fees</li>
          <li> Payment for medical exams</li>
          <li>Waiver of the Right of Permanent Residence Fee</li>
          <li>Assistance with travel and settlement costs</li>
        </ul>




        <h2 className={Styles.subtitle}>From Pilot to Permanent</h2>

        <p>The EMPP is set to end on December 31, 2025, but the government plans to transition it into a permanent immigration program before that date. This change reflects Canada’s goals of filling labor market gaps and providing humanitarian support through skilled immigration.</p>

        <h2 className={Styles.subtitle}>What’s Next?</h2>

        <p>Full details about the new permanent program, including eligibility and structure, are expected to be announced later in 2025. However, the confirmation of its launch shows Canada’s ongoing commitment to inclusive and humanitarian immigration strategies.</p>
        <p>
          📞 <a href="tel:+917022213466">+91-7022213466</a> <br />
          📧 <a href="mailto:operations@globalvisa-internationals.com">operations@globalvisa-internationals.com</a><br />
          💬 <a href="https://www.globalvisainternationals.com/contact">Schedule a Consultation</a>
        </p>
      </main>
    </>
  );
}
