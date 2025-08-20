import Styles from './blog.module.css';
import Head from 'next/head';

export const metadata = {
  title: "New 2025 US Green Card Rules: What Lawful Permanent Residents Must Know",
  date: "May 29, 2025",
  category: "Visa Information",
  author: "Global Visa Internationals Team",
  excerpt:
    "Discover the key Green Card rule changes in 2025, including updated Form I-90, mandatory USCIS registration, revocation risks, and the $5M Gold Card visa for investors.",
  image: "/BlogImages/us-green-card-2025-rules.webp",
  keywords: [
    "Green Card 2025",
    "Form I-90 update",
    "USCIS registration",
    "Green Card revocation",
    "Gold Card visa 2025",
    "US investor visa",
    "permanent residency USA",
    "social media screening immigration",
    "immigration compliance USA",
    "US Green Card help India",
    "Global Visa Internationals"
  ]
};

export default function USGreenCard2025Rules() {
  const fullImageUrl = `https://www.globalvisainternationals.com${metadata.image}`;
  const pageUrl = "https://www.globalvisainternationals.com/blog/us-green-card-2025-rules/";

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
        <link rel="canonical" href="https://www.globalvisainternationals.com/blog/us-green-card-2025-rules" />


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
              "description": "Helping Indian residents navigate complex U.S. immigration and Green Card regulations with expert consultancy.",
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

        <p>
          As of 2025, the U.S. government has introduced several critical updates to its Green Card regulations. If you are a <strong>Lawful Permanent Resident (LPR)</strong> or planning to become one, it's important to understand these changes to protect your status and avoid costly mistakes.
        </p>

        <h2 className={Styles.subtitle}> 1. Updated Form I-90 Requirement</h2>
        <p>
          <strong>Effective May 29, 2025</strong>, USCIS mandates that Green Card holders must use the <em>latest version</em> of <strong>Form I-90</strong> to apply for a replacement. This applies if your card is:
        </p>
        <ul>
          <li> Lost or damaged</li>
          <li> Expiring soon</li>
          <li> Missing an expiration date</li>
          <li> Needs updates due to personal information changes</li>
        </ul>
        <p> <strong>Important</strong>: Ensure all pages are from the same edition to avoid rejection.</p>

        <h2 className={Styles.subtitle}> 2. Mandatory USCIS Registration</h2>
        <p>
          Starting <strong>April 11, 2025</strong>, some non-citizens—including Green Card holders—must <strong>register with USCIS</strong> as part of new national security initiatives.
        </p>
        <ul>
          <li> Includes biometrics, background checks, and document verification</li>
          <li> Non-compliance may result in civil fines or criminal charges</li>
        </ul>

        <h2 className={Styles.subtitle}> 3. Green Card Revocation Under Review</h2>
        <p>
          The U.S. DOJ has reinforced that Green Cards can be <strong>revoked at any time</strong>, regardless of how long you’ve held it. Stay compliant—even after decades.
        </p>

        <h2 className={Styles.subtitle}> 4. “Gold Card” Visa for Investors</h2>
        <p>
          Launching in 2025, the U.S. will offer a <strong>$5 million “Gold Card” visa</strong> for high-net-worth investors. Benefits include:
        </p>
        <ul>
          <li> Direct path to permanent residency</li>
          <li> Global mobility for elite entrepreneurs</li>
        </ul>

        <h2 className={Styles.subtitle}> 5. Social Media Screening</h2>
        <p>
          USCIS now monitors social media for extremist content. Posts deemed hateful may result in <strong>visa denials</strong>.
        </p>
        <p> Tip: Be mindful—your online presence is now immigration evidence.</p>

        <h2 className={Styles.subtitle}> What You Should Do Now</h2>
        <ul>
          <li> Use the correct USCIS forms</li>
          <li> Stay informed about mandatory updates</li>
          <li> Avoid risky online behavior</li>
          <li> Keep your documents updated</li>
          <li> <strong>Consult a visa expert</strong> to stay safe</li>
        </ul>

        <h2 className={Styles.subtitle}> Need Help? Global Visa Internationals is Here</h2>
        <p>
          Our experts at <strong>Global Visa Internationals</strong> assist with:
        </p>
        <ul>
          <li> Green Card renewals and replacements</li>
          <li> USCIS registration and biometrics</li>
          <li> Gold Card investment visas</li>
          <li> Online reputation audits for immigration</li>
        </ul>
        <p>
          <strong>Don’t risk your residency. Contact us now!</strong><br />
          <a href="https://www.globalvisainternationals.com/contact">Schedule a Call</a> | 📧 <a href="mailto:operations@globalvisa-internationals.com">operations@globalvisa-internationals.com</a>
        </p>
      </main>
    </>
  );
}
