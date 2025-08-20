import Styles from './blog.module.css';
import Head from 'next/head';

export const metadata = {
  title: "UK's New 2025 Student Visa Rules: What International Students Must Know",
  date: "June 7, 2025",
  category: "Study Abroad",
  author: "Global Visa Internationals Team",
  excerpt:
    "The UK government is introducing stricter student visa rules in 2025. Key changes include a shorter post-study work visa (Graduate Route), new dependent restrictions, and a rigorous rating system for universities.",
  image: "/BlogImages/uk-student-visa-rules-2025.webp",
  keywords: [
    "UK student visa 2025",
    "UK immigration rules",
    "Graduate Route visa UK",
    "post study work visa UK",
    "UK student dependent visa",
    "international students UK",
    "UK visa changes",
    "Global Talent visa UK",
    "UK university visa compliance",
    "English language requirements UK visa"
  ]
};

export default function UKStudentVisa2025Rules() {
  const fullImageUrl = `https://www.globalvisainternationals.com${metadata.image}`;
  const pageUrl = "https://www.globalvisainternationals.com/blog/uk-student-visa-rules-2025/";

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    image: fullImageUrl,
    datePublished: metadata.date,
    dateModified: metadata.date,
    author: {
      "@type": "Organization",
      name: metadata.author
    },
    publisher: {
      "@type": "Organization",
      name: "Global Visa Internationals",
      logo: {
        "@type": "ImageObject",
        url: "https://www.globalvisainternationals.com/gvilogo.png"
      }
    },
    description: metadata.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl
    }
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

        {/* GEO Tags for Local SEO (Bangalore, India example) */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />

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
              "description": "Helping Indian residents navigate complex UK immigration and student visa regulations with expert consultancy.",
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
                "https://twitter.com/GlobalVisaIntern",
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

        <h1 className={Styles.subtitle}>{metadata.title}</h1>

        <p >The UK government is set to introduce tighter immigration rules for international students as part of a broader strategy to reduce net migration while continuing to attract highly skilled individuals. The new proposals, outlined in a May 2025 white paper titled <strong>"Restoring Control Over the Immigration System,"</strong> will bring significant changes to visa requirements, post-study work options, and the ability of students to bring family members to the UK.</p>

        <h2 className={Styles.subtitle}>More Rigorous Student Visa Process</h2>
        <p>The application process for student visas will become more stringent. Universities and colleges will face stricter compliance checks, including more demanding benchmarks for visa-related assessments and increased oversight of international recruitment agents. Institutions will also be categorized using a <strong>red, amber, or green rating system</strong> based on their visa sponsorship performance and student outcomes.</p>
        <p>Government data indicates a 49% rise in student visa numbers at lower-ranked universities between 2021 and 2023, contrasting with a 7% decrease at top universities during the same period. The new regulations aim to ensure that only academically credible institutions are permitted to enroll international students.</p>

        <h2 className={Styles.subtitle}>Post-Study Work Period Shortened</h2>
        <p>The <strong>Graduate Route</strong>, which currently allows international students to remain in the UK for two years after graduation, will be reduced to <strong>18 months</strong>. Additionally, universities will be required to pay a levy on tuition income generated from international students. This revenue will be used to support domestic skills development, aligning with the government's goal of reducing reliance on foreign workers.</p>

        <h2 className={Styles.subtitle}>Restrictions on Dependent Visas</h2>
        <p>Further limitations will be placed on international students bringing dependents, particularly those pursuing postgraduate taught courses. The government has expressed concerns regarding English language proficiency and integration. Notably, the number of dependent visas issued rose dramatically from 16,000 in 2019 to 143,000 in 2023. Additional restrictions are anticipated.</p>

        <h2 className={Styles.subtitle}>Increased English Language Requirements</h2>
        <p>English language standards for visa applicants will be raised. While current requirements are at level B1, main visa holders will eventually need to meet level <strong>B2</strong>. Adult dependents will be required to demonstrate a minimum of <strong>A1</strong> level English upon entry, with higher proficiency levels necessary for later settlement.</p>

        <h2 className={Styles.subtitle}>Pathways for High-Skilled Individuals Remain Open</h2>
        <p>Despite the overall tightening of rules, the UK will expand opportunities for applicants in high-demand sectors such as artificial intelligence and life sciences. The <strong>Global Talent visa</strong> will provide greater flexibility for researchers, PhD holders, and other skilled professionals. The government also intends to raise the cap on overseas business transfers.</p>

      </main>
    </>
  );
}