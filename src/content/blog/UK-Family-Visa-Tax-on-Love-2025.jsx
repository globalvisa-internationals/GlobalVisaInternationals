import Styles from './blog.module.css';
import Head from 'next/head';

export const metadata = {
  title: "UK Family Visa Rules 2025: Why Couples Are Calling It a 'Tax on Love'",
  date: "Jun 25, 2025",
  category: "Visa Information",
  author: "Global Visa Internationals Team",
  excerpt: "Many families are being forced apart by strict UK family visa income rules. Here's what's happening, real stories, and what's likely to change in 2025.",
  image: "/BlogImages/UK-Family-Visa-Tax-on-Love-2025.webp",
  keywords: [
    "UK family visa 2025",
    "spouse visa UK income requirement",
    "UK visa tax on love",
    "reunite families UK",
    "minimum income threshold UK visa",
    "MAC visa recommendation 2025",
    "family visa help India to UK",
    "UK visa policy update 2025"
  ]
};

export default function UKFamilyVisaTaxOnLove() {
  const fullImageUrl = `https://www.globalvisainternationals.com${metadata.image}`;
  const pageUrl = "https://www.globalvisainternationals.com/blog/UK-Family-Visa-Tax-on-Love-2025/";

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
    "datePublished": "2025-06-25",
    "dateModified": "2025-06-25"
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

        <h2 className={Styles.subtitle}>What Is the UK Family Visa Income Rule in 2025?</h2>
        <p>
          As of now, British citizens or settled residents must earn at least <strong>£29,000 per year</strong> to bring their foreign spouse or partner to the UK. This rule, introduced to reduce public spending, is now widely seen as emotionally and financially damaging.
        </p>

        <h2 className={Styles.subtitle}>Why People Are Calling It the “Tax on Love”</h2>
        <p>
          Imagine being legally married, with a stable relationship and children, but still not allowed to live together because your salary doesn't meet an arbitrary threshold. That's the reality for thousands of families in 2025.
        </p>

        <h2 className={Styles.subtitle}>Real-Life Stories That Break Your Heart</h2>
        <ul>
          <li><strong>David Todd</strong> and his American wife are stuck in Germany because her income doesn't count and his falls just short.</li>
          <li><strong>Rachel Roberts</strong> was separated from her Brazilian husband for years, even during COVID.</li>
          <li><strong>Sarah Douglas</strong> and her three UK-born children live in Italy because their father can't qualify under UK rules.</li>
        </ul>

        <h2 className={Styles.subtitle}>What the Experts Say</h2>
        <p>
          The UK's Migration Advisory Committee has called the £29,000 threshold too high and recommended lowering it to <strong>£23,000–£25,000</strong>. They say it's one of the highest in the world and separates families needlessly.
        </p>

        <h2 className={Styles.subtitle}>Is Change Coming in 2025?</h2>
        <p>
          Thankfully, the UK government has paused the planned increase to £38,700 and is reviewing expert recommendations. A decision is expected by the end of 2025 — and could help reunite thousands of families.
        </p>

        <h2 className={Styles.subtitle}>Need Help With UK Family Visas?</h2>
        <p>
          If you’re unsure about your eligibility, document checklist, or combining salary with savings — let us help. We’ve guided 1000s of successful applications.
        </p>
        <p>
          📞 <a href="tel:+917022213466">+91-7022213466</a> <br />
          📧 <a href="mailto:operations@globalvisa-internationals.com">operations@globalvisa-internationals.com</a><br />
          💬 <a href="https://www.globalvisainternationals.com/contact">Schedule a Consultation</a>
        </p>
      </main>
    </>
  );
}
