import Styles from './blog.module.css';
import Head from 'next/head';

export const metadata = {
  title: "U.S. Visa Bulletin – July 2025: Green Card & Immigration Priority Dates",
  date: "2025-07-01",
  category: "Visa Information",
  author: "Global Visa Internationals Team",
  excerpt:
    "The U.S. Visa Bulletin for July 2025 outlines green card priority dates for family-based, employment-based, and diversity visa categories.Check Final Action and Filing Dates for countries including India, China, Mexico, and the Philippines.Stay updated on visa number availability, DV-2025 cut-offs, and green card processing timelines.",
  image: "/Blog/US-Visa-Bulletin-July-2025-Green-Card-and-Immigration-Priority-Dates.webp",
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
    "https://www.globalvisainternationals.com/blog/US-Visa-Bulletin-July-2025-Green-Card-and-Immigration-Priority-Dates/";

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


<main>
  <div className={Styles.meta}>
    <span>By {metadata.author}</span>
    <span>•</span>
    <span>{new Date(metadata.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
  </div>

  <div className={Styles.imageCard}>
    <img src={metadata.image} alt={metadata.title} className={Styles.image} loading="lazy" width="1200" height="630" />
  </div>

  <h1 className={Styles.subtitle}>{metadata.title}</h1>
  <h2 className={Styles.subtitle}>Overview of the July 2025 USA Visa NEWS</h2>
  <p>
    The July 2025 Visa Bulletin provides the most up-to-date information on the availability of immigrant visa numbers for family-sponsored, employment-based, and diversity visa categories. This includes both:
  </p>
  <ul>
    <li><strong className={Styles.subtitle}>Final Action Dates</strong> (when green card applications may be approved)</li>
    <li><strong className={Styles.subtitle}>Dates for Filing Applications</strong> (when applicants may submit required documents)</li>
  </ul>
  <p>
    Visit <a href="http://www.uscis.gov/visabulletininfo" target="_blank" rel="noopener noreferrer">USCIS Visa Bulletin Info</a> to determine whether to use the Final Action or Dates for Filing charts for Adjustment of Status applications.
  </p>

 
 

  <h3 className={Styles.subtitle}>A. Statutory Numbers for Preference Immigrant Visas</h3>
  <p>
    This bulletin summarizes the availability of immigrant numbers during July for: “Final Action Dates” and “Dates for Filing Applications,” indicating when immigrant visa applicants should be notified to assemble and submit required documentation to the National Visa Center.
  </p>
  <p>
    Unless otherwise indicated on the U.S. Citizenship and Immigration Services (USCIS) website at
    <a href="http://www.uscis.gov/visabulletininfo" target="_blank" rel="noopener noreferrer">www.uscis.gov/visabulletininfo</a>,
    individuals seeking to file applications for adjustment of status with USCIS must use the “Final Action Dates” charts below for determining when they can file such applications. When USCIS determines that there are more immigrant visas available for the fiscal year than there are known applicants for such visas, USCIS will state on its website that applicants may instead use the “Dates for Filing Visa Applications” charts in this Bulletin.
  </p>

  <h4 className={Styles.subtitle}>1. Procedures for Determining Dates</h4>
  <p>
    Consular officers are required to report to the Department of State documentarily qualified applicants for numerically limited visas; USCIS reports applicants for adjustment of status. Allocations in the charts below were made, to the extent possible, in chronological order of reported priority dates, for demand received by <strong className={Styles.bold}>June 3rd</strong>. If not all demand could be satisfied, the category or foreign state in which demand was excessive was deemed oversubscribed. The final action date for an oversubscribed category is the priority date of the first applicant who could not be reached within the numerical limits. If it becomes necessary during the monthly allocation process to retrogress a final action date, supplemental requests for numbers will be honored only if the priority date falls within the new final action date announced in this bulletin. If at any time an annual limit were reached, it would be necessary to immediately make the preference category “unavailable”, and no further requests for numbers would be honored.
  </p>

  <h4 className={Styles.subtitle}>2. Fiscal Year 2025 Limits</h4>
  <ul>
    <li>The fiscal year 2025 limit for <strong className={Styles.bold}>family-sponsored preference immigrants</strong> is <strong className={Styles.bold}>226,000</strong>.</li>
    <li>The worldwide level for annual <strong className={Styles.bold}>employment-based preference immigrants</strong> is at least <strong className={Styles.bold}>140,000</strong>.</li>
    <li>The <strong className={Styles.bold}>per-country limit</strong> for preference immigrants is set at 7% of the total annual family-sponsored and employment-based preference limits, i.e., <strong className={Styles.bold}>25,620</strong>.</li>
    <li>The <strong className={Styles.bold}>dependent area limit</strong> is set at 2%, or <strong className={Styles.bold}>7,320</strong>.</li>
  </ul>

  <h4 className={Styles.subtitle}>3. Visa Prorating Provisions</h4>
  <p>
    INA Section 203(e) provides that family-sponsored and employment-based preference visas be issued to eligible immigrants in the order in which a petition in behalf of each has been filed. Section 203(d) provides that spouses and children of preference immigrants are entitled to the same status, and the same order of consideration, if accompanying or following to join the principal. The visa prorating provisions of Section 202(e) apply to allocations for a foreign state or dependent area when visa issuances will exceed the per-country limit. These provisions apply at present to the following oversubscribed chargeability areas: <strong className={Styles.bold}>CHINA-mainland born, INDIA, MEXICO, and PHILIPPINES</strong>.
  </p>

  <h4 className={Styles.subtitle}>4. Family-Sponsored Preferences (INA Section 203(a))</h4>
  <ul>
    <li><strong className={Styles.bold}>First (F1): Unmarried Sons and Daughters of U.S. Citizens:</strong> 23,400 plus any numbers not required for fourth preference.</li>
    <li><strong className={Styles.bold}>Second: Spouses and Children, and Unmarried Sons and Daughters of Permanent Residents: </strong>
    <p>114,200, plus the number (if any) by which the worldwide family preference level exceeds 226,000, plus any unused first preference numbers:</p>
      <ul>
        <li><strong className={Styles.bold}>A. (F2A) Spouses and Children of Permanent Residents:</strong> 77% of the overall second preference limitation, of which 75% are exempt from the per-country limit.</li>
        <li><strong className={Styles.bold}>B. (F2B) Unmarried Sons and Daughters (21 years of age or older) of Permanent Residents:</strong> 23% of the overall second preference limitation.</li>
      </ul>
    </li>
    <li><strong className={Styles.bold}>Third (F3): Married Sons and Daughters of U.S. Citizens:</strong> 23,400, plus any numbers not required by first and second preferences.</li>
    <li><strong className={Styles.bold}>Fourth (F4): Brothers and Sisters of Adult U.S. Citizens:</strong> 65,000, plus any numbers not required by first three preferences.</li>
  </ul>

 
 

  <h3 className={Styles.subtitle}>A. Final Action Dates for Family-Sponsored Preference Cases</h3>
  <p>
    On the chart below, the listing of a date for any class indicates that the class is oversubscribed (see paragraph 1); "C" means current, i.e., numbers are authorized for issuance to all qualified applicants; and "U" means unauthorized, i.e., numbers are not authorized for issuance. (NOTE: Numbers are authorized for issuance only for applicants whose priority date is <strong className={Styles.bold}>earlier</strong> than the final action date listed below.)
  </p>
  <table className={Styles.table}>
    <thead>
      <tr>
        <th>Family-Sponsored</th>
        <th>All Chargeability Areas Except Those Listed</th>
        <th>CHINA-mainland born</th>
        <th>INDIA</th>
        <th>MEXICO</th>
        <th>PHILIPPINES</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>F1</td>
        <td>15JUL16</td>
        <td>15JUL16</td>
        <td>15JUL16</td>
        <td>22APR05</td>
        <td>15JUL12</td>
      </tr>
      <tr>
        <td>F2A</td>
        <td>01SEP22</td>
        <td>01SEP22</td>
        <td>01SEP22</td>
        <td>01FEB22</td>
        <td>01SEP22</td>
      </tr>
      <tr>
        <td>F2B</td>
        <td>15OCT16</td>
        <td>15OCT16</td>
        <td>15OCT16</td>
        <td>01JAN07</td>
        <td>15APR12</td>
      </tr>
      <tr>
        <td>F3</td>
        <td>01AUG11</td>
        <td>01AUG11</td>
        <td>01AUG11</td>
        <td>01FEB01</td>
        <td>01DEC03</td>
      </tr>
      <tr>
        <td>F4</td>
        <td>01JAN08</td>
        <td>01JAN08</td>
        <td>08JUL06</td>
        <td>15MAR01</td>
        <td>01JAN06</td>
      </tr>
    </tbody>
  </table>
  <p>
    For July, <strong className={Styles.bold}>F2A numbers EXEMPT from per-country limit</strong> are authorized for issuance to applicants from all countries with priority dates <strong className={Styles.bold}>earlier</strong> than 01FEB22. F2A numbers <strong className={Styles.bold}>SUBJECT to per-country limit</strong> are authorized for issuance to applicants chargeable to all countries <strong className={Styles.bold}>EXCEPT MEXICO</strong>, with priority dates beginning 01FEB22 and earlier than 01SEP22. All F2A numbers provided for MEXICO are exempt from the per-country limit.
  </p>

 
 

  <h3 className={Styles.subtitle}>B. Dates for Filing Family-Sponsored Visa Applications</h3>
  <p>
    The chart below reflects dates for filing visa applications within a timeframe justifying immediate action in the application process. Applicants for immigrant visas who have a priority date <strong className={Styles.bold}>earlier than</strong> the application date in the chart below may assemble and submit required documents to the Department of State’s National Visa Center, following receipt of notification from the National Visa Center containing detailed instructions. The application date for an oversubscribed category is the priority date of the first applicant who cannot submit documentation to the National Visa Center for an immigrant visa. If a category is designated “current,” all applicants in the relevant category may file applications, regardless of priority date.
  </p>
  <p>
    The “C” listing indicates that the category is current, and that applications may be filed regardless of the applicant’s priority date. The listing of a date for any category indicates that only applicants with a priority date which is <strong className={Styles.bold}>earlier</strong> than the listed date may file their application.
  </p>
  <p>
    Visit <a href="http://www.uscis.gov/visabulletininfo" target="_blank" rel="noopener noreferrer">www.uscis.gov/visabulletininfo</a> for information on whether USCIS has determined that this chart can be used (in lieu of the chart in paragraph 4.A.) this month for filing applications for adjustment of status with USCIS.
  </p>
  <table className={Styles.table}>
    <thead>
      <tr>
        <th>Family-Sponsored</th>
        <th>All Chargeability Areas Except Those Listed</th>
        <th>CHINA-mainland born</th>
        <th>INDIA</th>
        <th>MEXICO</th>
        <th>PHILIPPINES</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>F1</td>
        <td>01SEP17</td>
        <td>01SEP17</td>
        <td>01SEP17</td>
        <td>01JUN06</td>
        <td>22APR15</td>
      </tr>
      <tr>
        <td>F2A</td>
        <td>01MAR25</td>
        <td>01MAR25</td>
        <td>01MAR25</td>
        <td>01MAR25</td>
        <td>01MAR25</td>
      </tr>
      <tr>
        <td>F2B</td>
        <td>01JAN17</td>
        <td>01JAN17</td>
        <td>01JAN17</td>
        <td>01APR08</td>
        <td>01OCT13</td>
      </tr>
      <tr>
        <td>F3</td>
        <td>22JUL12</td>
        <td>22JUL12</td>
        <td>22JUL12</td>
        <td>15JUN01</td>
        <td>01DEC04</td>
      </tr>
      <tr>
        <td>F4</td>
        <td>08SEP08</td>
        <td>08SEP08</td>
        <td>01DEC06</td>
        <td>30APR01</td>
        <td>01JAN08</td>
      </tr>
    </tbody>
  </table>

 
 

  <h3 className={Styles.subtitle}>5. Employment-Based Preferences (INA Section 203(b))</h3>
  <ul>
    <li><strong className={Styles.bold}>First: Priority Workers:</strong> 28.6% of the worldwide employment-based preference level, plus any numbers not required for fourth and fifth preferences.</li>
    <li><strong className={Styles.bold}>Second: Members of the Professions Holding Advanced Degrees or Persons of Exceptional Ability:</strong> 28.6% of the worldwide employment-based preference level, plus any numbers not required by first preference.</li>
    <li><strong className={Styles.bold}>Third: Skilled Workers, Professionals, and Other Workers:</strong> 28.6% of the worldwide level, plus any numbers not required by first and second preferences, not more than 10,000 of which to "Other Workers".</li>
    <li><strong className={Styles.bold}>Fourth: Certain Special Immigrants:</strong> 7.1% of the worldwide level.</li>
    <li><strong className={Styles.bold}>Fifth: Employment Creation:</strong> 7.1% of the worldwide level, of which 32% are reserved as follows: 20% reserved for qualified immigrants who invest in a rural area; 10% reserved for qualified immigrants who invest in a high unemployment area; and 2% reserved for qualified immigrants who invest in infrastructure projects. The remaining 68% are unreserved and are allotted for all other qualified immigrants.</li>
  </ul>

 
 

  <h3 className={Styles.subtitle}>A. Final Action Dates for Employment-Based Preference Cases</h3>
  <p>
    On the chart below, the listing of a date for any class indicates that the class is oversubscribed (see paragraph 1); "C" means current, i.e., numbers are authorized for issuance to all qualified applicants; and "U" means unauthorized, i.e., numbers are not authorized for issuance. (NOTE: Numbers are authorized for issuance only for applicants whose priority date is <strong className={Styles.bold}>earlier</strong> than the final action date listed below.)
  </p>
  <table  className={Styles.table}>
    <thead>
      <tr>
        <th>Employment-based</th>
        <th>All Chargeability Areas Except Those Listed</th>
        <th>CHINA-mainland born</th>
        <th>INDIA</th>
        <th>MEXICO</th>
        <th>PHILIPPINES</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1st</td>
        <td>C</td>
        <td>15NOV22</td>
        <td>15FEB22</td>
        <td>C</td>
        <td>C</td>
      </tr>
      <tr>
        <td>2nd</td>
        <td>15OCT23</td>
        <td>15DEC20</td>
        <td>01JAN13</td>
        <td>15OCT23</td>
        <td>15OCT23</td>
      </tr>
      <tr>
        <td>3rd</td>
        <td>01APR23</td>
        <td>01DEC20</td>
        <td>22APR13</td>
        <td>01APR23</td>
        <td>08FEB23</td>
      </tr>
      <tr>
        <td>Other Workers</td>
        <td>08JUL21</td>
        <td>01MAY17</td>
        <td>22APR13</td>
        <td>08JUL21</td>
        <td>08JUL21</td>
      </tr>
      <tr>
        <td>4th</td>
        <td>U</td>
        <td>U</td>
        <td>U</td>
        <td>U</td>
        <td>C</td>
      </tr>
      <tr>
        <td>Certain Religious Workers</td>
        <td>U</td>
        <td>U</td>
        <td>U</td>
        <td>U</td>
        <td>U</td>
      </tr>
      <tr>
        <td>5th Unreserved (including C5, T5, I5, R5, NU, RU)</td>
        <td>C</td>
        <td>22JAN14</td>
        <td>01MAY19</td>
        <td>C</td>
        <td>C</td>
      </tr>
      <tr>
        <td>5th Set Aside: Rural (20%, including NR, RR)</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
      </tr>
      <tr>
        <td>5th Set Aside: High Unemployment (10%, including NH, RH)</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
      </tr>
      <tr>
        <td>5th Set Aside: Infrastructure (2%, including RI)</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
      </tr>
    </tbody>
  </table>
  <p>
    *Employment Third Preference Other Workers Category: Section 203(e) of the Nicaraguan and Central American Relief Act (NACARA) passed by Congress in November 1997, as amended by Section 1(e) of Pub. L. 105-139, provides that once the Employment Third Preference Other Worker (EW) cut-off date has reached the priority date of the latest EW petition approved prior to November 19, 1997, the 10,000 EW numbers available for a fiscal year are to be reduced by up to 5,000 annually beginning in the following fiscal year. This reduction is to be made for as long as necessary to offset adjustments under the NACARA program. Since the EW final action date reached November 19, 1997 during Fiscal Year 2001, the reduction in the EW annual limit to 5,000 began in Fiscal Year 2002. For Fiscal Year 2025 this reduction will be limited to approximately 150.
  </p>

 
 

  <h3 className={Styles.subtitle}>B. Dates for Filing of Employment-Based Visa Applications</h3>
  <p>
    The chart below reflects dates for filing visa applications within a timeframe justifying immediate action in the application process. Applicants for immigrant visas who have a priority date <strong className={Styles.bold}>earlier than</strong> the application date in the chart may assemble and submit required documents to the Department of State’s National Visa Center, following receipt of notification from the National Visa Center containing detailed instructions. The application date for an oversubscribed category is the priority date of the first applicant who cannot submit documentation to the National Visa Center for an immigrant visa. If a category is designated “current,” all applicants in the relevant category may file, regardless of priority date.
  </p>
  <p>
    The “C” listing indicates that the category is current, and that applications may be filed regardless of the applicant’s priority date. The listing of a date for any category indicates that only applicants with a priority date which is <strong className={Styles.bold}>earlier</strong> than the listed date may file their application.
  </p>
  <p>
    Visit <a href="http://www.uscis.gov/visabulletininfo" target="_blank" rel="noopener noreferrer">www.uscis.gov/visabulletininfo</a> for information on whether USCIS has determined that this chart can be used (in lieu of the chart in paragraph 5.A.) this month for filing applications for adjustment of status with USCIS.
  </p>
  <table className={Styles.table}>
    <thead>
      <tr>
        <th>Employment-based</th>
        <th>All Chargeability Areas Except Those Listed</th>
        <th>CHINA-mainland born</th>
        <th>INDIA</th>
        <th>MEXICO</th>
        <th>PHILIPPINES</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1st</td>
        <td>C</td>
        <td>01JAN23</td>
        <td>15APR22</td>
        <td>C</td>
        <td>C</td>
      </tr>
      <tr>
        <td>2nd</td>
        <td>15NOV23</td>
        <td>01JAN21</td>
        <td>01FEB13</td>
        <td>15NOV23</td>
        <td>15NOV23</td>
      </tr>
      <tr>
        <td>3rd</td>
        <td>01MAY23</td>
        <td>22DEC20</td>
        <td>08JUN13</td>
        <td>01MAY23</td>
        <td>01MAY23</td>
      </tr>
      <tr>
        <td>Other Workers</td>
        <td>22JUL21</td>
        <td>01JAN18</td>
        <td>08JUN13</td>
        <td>22JUL21</td>
        <td>22JUL21</td>
      </tr>
      <tr>
        <td>4th</td>
        <td>01FEB21</td>
        <td>01FEB21</td>
        <td>01FEB21</td>
        <td>01FEB21</td>
        <td>01FEB21</td>
      </tr>
      <tr>
        <td>Certain Religious Workers</td>
        <td>01FEB21</td>
        <td>01FEB21</td>
        <td>01FEB21</td>
        <td>01FEB21</td>
        <td>01FEB21</td>
      </tr>
      <tr>
        <td>5th Unreserved (including C5, T5, I5, R5)</td>
        <td>C</td>
        <td>01OCT16</td>
        <td>01APR22</td>
        <td>C</td>
        <td>C</td>
      </tr>
      <tr>
        <td>5th Set Aside: (Rural: NR, RR - 20%)</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
      </tr>
      <tr>
        <td>5th Set Aside: (High Unemployment: NH, RH - 10%)</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
      </tr>
      <tr>
        <td>5th Set Aside: (Infrastructure: RI - 2%)</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
        <td>C</td>
      </tr>
    </tbody>
  </table>

 
 

  <h3 className={Styles.subtitle}>B. Diversity Immigrant (DV) Category for the Month of July</h3>
  <p>
    Section 203(c) of the INA provides up to 55,000 immigrant visas each fiscal year to permit additional immigration opportunities for persons from countries with low admissions during the previous five years. The NACARA stipulates that beginning with DV-99, and for as long as necessary, up to 5,000 of the 55,000 annually allocated diversity visas will be made available for use under the NACARA program. Visa numbers made available to NACARA applicants in FY 2024 will result in reduction of the DV-2025 annual limit to approximately 54,850. Section 5104 of the National Defense Authorization Act (NDAA) for Fiscal Year 2024 amended the NACARA’s provisions on the DV program such that the number of visas made available under the NDAA each fiscal year will be deducted from the 55,000 DVs annually allocated. These amendments will further reduce the DV-2025 annual limit to approximately 52,000. DVs are divided among six geographic regions. No one country can receive more than seven percent of the available diversity visas in any one year.
  </p>
  <p>
    For July, immigrant numbers in the DV category are available to qualified DV-2025 applicants chargeable to all regions/eligible countries as follows. When an allocation cut-off number is shown, visas are available only for applicants with DV regional lottery rank numbers <strong className={Styles.bold}>BELOW</strong> the specified allocation cut-off number:
  </p>
  <table className={Styles.table}>
    <thead>
      <tr>
        <th>Region</th>
        <th>All DV Chargeability Areas Except Those Listed Separately</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>AFRICA</td>
        <td>45,000 Except: Algeria 44,950, Egypt 40,000, Morocco 34,500</td>
      </tr>
      <tr>
        <td>ASIA</td>
        <td>9,000 Except: Iran 8,950, Nepal 8,950</td>
      </tr>
      <tr>
        <td>EUROPE</td>
        <td>19,000 Except: Russia 18,950, Uzbekistan 12,000</td>
      </tr>
      <tr>
        <td>NORTH AMERICA (BAHAMAS)</td>
        <td>20</td>
      </tr>
      <tr>
        <td>OCEANIA</td>
        <td>1,650</td>
      </tr>
      <tr>
        <td>SOUTH AMERICA, and the CARIBBEAN</td>
        <td>2,450</td>
      </tr>
    </tbody>
  </table>
  <p>
    Entitlement to immigrant status in the DV category lasts only through the end of the fiscal (visa) year for which the applicant is selected in the lottery. The year of entitlement for all applicants registered for the DV-2025 program ends as of September 30, 2025. DV visas may not be issued to DV-2025 applicants after that date. Similarly, spouses and children accompanying or following to join DV-2025 principals are only entitled to derivative DV status until September 30, 2025. DV visa availability through the very end of FY-2025 cannot be taken for granted. Numbers could be exhausted prior to September 30.
  </p>

 
 

  <h3 className={Styles.subtitle}>C. The Diversity Immigrant (DV) Category Rank Cut-Offs Which Will Apply in August</h3>
  <p>
    For August, immigrant numbers in the DV category are available to qualified DV-2025 applicants chargeable to all regions/eligible countries as follows. When an allocation cut-off number is shown, visas are available only for applicants with DV regional lottery rank numbers <strong className={Styles.bold}>BELOW</strong> the specified allocation cut-off number:
  </p>
  <table className={Styles.table}>
    <thead>
      <tr>
        <th>Region</th>
        <th>All DV Chargeability Areas Except Those Listed Separately</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>AFRICA</td>
        <td>50,000 Except: Algeria 49,950, Egypt 43,250, Morocco 40,500</td>
      </tr>
      <tr>
        <td>ASIA</td>
        <td>11,000 Except: Iran 10,650, Nepal 10,650</td>
      </tr>
      <tr>
        <td>EUROPE</td>
        <td>22,000 Except: Russia 21,950, Uzbekistan 13,000</td>
      </tr>
      <tr>
        <td>NORTH AMERICA (BAHAMAS)</td>
        <td>Current</td>
      </tr>
      <tr>
        <td>OCEANIA</td>
        <td>1,700</td>
      </tr>
      <tr>
        <td>SOUTH AMERICA, and the CARIBBEAN</td>
        <td>2,600</td>
      </tr>
    </tbody>
  </table>

 
 

  <h3 className={Styles.subtitle}>D. U.S. Government Employee Special Immigrant Visas (SIVs)</h3>
  <p>
    The National Defense Authorization Act (NDAA) for Fiscal Year 2024, signed into law on December 22, 2023, may affect certain current and former employees of the U.S. Government abroad, as well as certain surviving spouses and children of deceased employees of the U.S. government abroad, applying for SIVs or adjustment of status, as described in section 101(a)(27)(D) of the INA. This does not affect certain Iraqis and Afghans applying for SQ and SI SIVs. Applicants should contact the consular section at which they filed their Form DS‑1884 for further information on the impact of that law on their case.
  </p>

 
 

  <h3 className={Styles.subtitle}>E. For the latest information on visa processing at U.S. Embassies and Consulates, please visit the Bureau of Consular Affairs website at travel.state.gov</h3>

  <p>Department of State Publication 9514<br />CA/VO: June 3, 2025</p>

  <p>
    📞 <a href="tel:+917022213466">+91-7022213466</a> <br />
    📧 <a href="mailto:operations@globalvisa-internationals.com">operations@globalvisa-internationals.com</a><br />
    💬 <a href="https://www.globalvisainternationals.com/contact">Schedule a Consultation</a>
  </p>
</main>
    </>
  );
}
