
import Image from 'next/image';
import styles from './about.module.css';
import React from 'react';
import VisaForm from '@/Components/VisaForm';
import Head from 'next/head';
import AnimatedHR from '@/Components/AnimatedHR';
import AnimatedSection from '@/Components/AnimatedSection';


export const metadata = {
  title: "About Us |  Global Visa Internationals  - Leading Visa & Immigration Consultants in Bangalore",
  description:
    "Learn more about  Global Visa Internationals , a trusted visa and immigration consultancy in Bangalore. We provide expert assistance for Tourist, Student, Work, PR, and Business Visas for Canada, USA, UK, Australia, Europe, and more with 75,000+ happy clients.",
  keywords: [
    "about  global visa internationals ",
    "visa consultants in Bangalore",
    "immigration consultants in Bangalore",
    "visa services Bangalore",
    "study visa experts",
    "tourist visa assistance",
    "work permit consultants",
    "Canada visa consultant",
    "Australia visa consultant",
    "UK visa consultant",
    "USA visa consultant"
  ],
  alternates: { canonical: "https://www.globalvisainternationals.com/about-us" },
  openGraph: {
    title: "About Us |  Global Visa Internationals  - Trusted Immigration Consultants in Bangalore",
    description:
      "Discover the story and services of  Global Visa Internationals . Leading experts in PR, Work, Study & Visit visas for Canada, Australia, USA, UK, and more.",
    url: "https://www.globalvisainternationals.com/about-us",
    siteName: "Global Visa Internationals ",
    type: "website",
    images: [
      {
        url: "https://www.globalvisainternationals.com/banner.webp",
        width: 1200,
        height: 630,
        alt: "About  Global Visa Internationals  - Visa and Immigration Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us |Global Visa Internationals - Trusted Immigration Consultants in Bangalore",
    description:
      "Learn more about  Global Visa Internationals, offering expert PR, Work, Study & Tourist visa services with 75,000+ satisfied clients.",
    site: "@GLOBALVISA1505",
    creator: "@GLOBALVISA1505",
    images: ["https://www.globalvisainternationals.com/banner.webp"],
  },
};




export default function About() {

  const pageUrl = "https://www.globalvisainternationals.com/about-us";

  const breadcrumbJsonLd = {
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
        name: "About Us",
        item: pageUrl
      }
    ]
  };

  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://www.globalvisainternationals.com/#organization",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    description:
      " Global Visa Internationals is a leading visa and immigration consultancy in Bangalore, offering expert assistance for Tourist, PR, Student, Work, and Business Visas to countries like Canada, Australia, UK, USA, Europe, and more.",
    telephone: "+91-7022213466",
    address: {
      "@type": "PostalAddress",
      streetAddress: "GF-9, Business Point, MG Road",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560025",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://www.google.com/maps/place/Global+Visa+Internationals"
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: "https://www.globalvisainternationals.com/contact",
      result: {
        "@type": "Thing",
        name: "Book a Free Visa Consultation"
      }
    }
  };
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Geo & Mobile SEO */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="12.9716,77.5946" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }}
        />
      </Head>
      <div className={styles.aboutSec}>
        <AnimatedSection direction="up" reverseOnExit={true}>
          <h1 className={styles.subTitle}><b className={styles.strong}> Global Visa Internationals</b>  – Your Trusted Immigration & Visa Experts</h1>
        </AnimatedSection>
        <section className={styles.aboutUsContainer}>


          <AnimatedSection direction="left" reverseOnExit={true}>
            <div className={styles.textContent}>
              <div ><p className={styles.story}>It is our mission at <b className={styles.strong}> Global Visa Internationals</b>  to simplify the complex business of global mobility. Founded by visionary leader <b className={styles.strong}>Mrs. Anusha Prashanth</b>, a seasoned professional with more than a decade's experience in immigration and visa consultancy, we have happily helped over 55,000+ people secure their visas and advised more than 75,000+ clients worldwide seeking global mobility solutions.</p></div>
              <div ><p className={styles.story}>With offices in London, UK, providing UK visa services, and Bangalore, India, offering premier India visa consultancy, we provide a global perspective and local expertise to every case we handle. Whether you want to study abroad with our study visa assistance, seek work opportunities through our work visa and permits guidance, or reunite with family via our family visa services, we provide customized visa solutions to meet your goals for international relocation.</p></div>
              <div ><h2>Meet the Visionary Behind Our Success</h2><p className={styles.story}><b className={styles.strong}>Mrs. Anusha Prashanth</b> leads a team of efficient visa professionals dedicated to delivering hassle-free visa processing and professional immigration guidance, making your international journey seamless and successful.</p></div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" reverseOnExit={true}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/founder.jpg"
                alt="Founder Image"
                fill
                quality={100}
                className={styles.responsiveImage}
              />
            </div>

          </AnimatedSection>
        </section>


        <AnimatedHR direction="left" duration={1.2} />
        <section className={styles.aboutdata}>
          <section className={styles.whydata}>
            <AnimatedSection direction="down" reverseOnExit={true}>
              <h2 className={styles.subTitle}>Why Trust <b className={styles.strong}> Global Visa Internationals</b>  for Your Immigration Needs?</h2>
              <div ><p>Trust is more than a word at <b className={styles.strong}> Global Visa Internationals</b> —it's the cornerstone of all our services. With more than a decade of experience in the immigration industry and thousands of successful client experiences, we are a name that stands for reliability in visa services, integrity in immigration consulting, and positive results in visa outcomes. Here's why people, families, and professionals worldwide select us for their immigration needs:</p></div>
              <ul>
                <div ><li><strong className={styles.subTitle1}>Demonstrated Track Record: </strong> We have been able to represent more than 75,000+ clients across different visa categories—starting from visitor visas and student visas to work permits, dependent visas, and visa refusal cases. Our high visa success rate speaks volumes about our thorough understanding of immigration laws, visa documentation, and immigration procedures.</li></div>
                <div ><li><strong className={styles.subTitle1}>Expert Guidance, Every Step of the Way :</strong>  Our experienced immigration consultants provide transparent visa guidance, honest immigration advice, and customized visa strategies designed to meet your individual objectives and immigration journey. Whether you are a visa newbie or an experienced international traveler, we ensure that you are well-informed throughout the visa application process.</li></div>
                <div ><li> <strong className={styles.subTitle1}>Transparency and Ethical Behavior :</strong>  We operate with transparency in all our visa dealings and uphold ethical behavior in immigration consultancy. No bait-and-switch pricing, no misleading information about our capabilities. Just honest advice, proper case analysis, and total openness—because your trust is paramount to us as your trusted visa consultants.</li></div>
                <div ><li><strong className={styles.subTitle1}>End-to-End Support :</strong> From document authentication and visa application preparation to interview scheduling and post-approval counseling, we handle everything—so you can focus on your future while we manage the complete visa process.</li></div>
                <div ><li><strong className={styles.subTitle1}>Global Reach, Local Insight:</strong>  Global Reach, Local Insight: Headquartered in India (Bangalore) and London, UK, we provide international standards in visa services combined with local insight, offering the perfect combination of global reach and local touch in immigration assistance.</li></div>
              </ul>
            </AnimatedSection>
            <AnimatedHR direction="left" duration={1.2} />
            <AnimatedSection direction="down" reverseOnExit={true}>
              <h3 className={styles.subTitle}>Our Key Strengths</h3>
              <strong className={styles.subTitle1}>What Makes <b className={styles.strong}> Global Visa Internationals</b>  Unique</strong>?
              <div >          <p>At <b className={styles.strong}> Global Visa Internationals</b> , we do not just file applications; we create positive immigration experiences, build client trust, and transform lives through successful visa outcomes. Here's what truly sets us apart in the world of visa and immigration consultancy:</p>
              </div>
              <strong className={styles.subTitle1}> Industry Experience of 11+ Years</strong>
              <div ><p> Having spent over a decade in the immigration services sector, we’ve gained in-depth knowledge of the detailed immigration policies and procedures of multiple countries around the world</p></div>
              <strong className={styles.subTitle1}> Brilliant Visa Success Ratio</strong>
              <div ><p>Our right visa strategy, meticulous visa documentation, and expert case handling contribute to our exceptional visa approval rate across all visa categories—making us a top choice for visa success.</p></div>
              <strong className={styles.subTitle1}> True and Honest Approach</strong>
              <div >          <p> We operate with complete honesty and transparency in our immigration services. No unrealistic promises—just clear, accurate, and reliable guidance based on real eligibility and potential outcomes in your visa application.</p></div>
              <strong className={styles.subTitle1}> Personalized Consultancy</strong>
              <div >          <p>Recognizing that no two immigration cases are alike, each dedicated case advisor crafts a personalized immigration strategy tailored to every client's unique profile, purpose of travel/relocation, and destination country.</p></div>
              <strong className={styles.subTitle1}> Global Network, Local Expertise</strong>
              <div >          <p>With company-owned offices in India (Bangalore) and London, we blend international immigration insight with regional understanding to deliver exceptional visa and immigration service worldwide.</p></div>
              <strong className={styles.subTitle1}>End-to-End Process Handling</strong>
              <div >          <p>End-to-End Process Handling: From initial profile evaluation and thorough documentation assistance to visa filing, interview preparation, and post-visa support—we manage every aspect of the immigration process under one roof.</p></div>
              <strong className={styles.subTitle1}> Inclusive Visa Services</strong>
              We cover all the major visa categories such as:
              <div ><ol>
                <li>Visitor/Tourist Visa</li>
                <li>Work Visa & Work Permits</li>
                <li>Student Visa</li>
                <li>Business & Investor Visas</li>
                <li>Dependent/Family Visa</li>
                <li>Visa Refusals & Appeals</li>
              </ol></div>

              <strong className={styles.subTitle1}> Client-Centric Culture </strong>
              <div >          <p> We treat every client with the same empathy, commitment, and care as we would our own family. We ensure that your immigration journey will be smooth, stress-free, and ultimately successful with our dedicated support.</p></div>
              <p className={styles.note}> This service is provided by <b className={styles.strong}> Global Visa Internationals</b> , an independent consultancy. We are not affiliated with the Australian Government or any embassy.</p>
            </AnimatedSection>
          </section>

          <div className={styles.formSection}>
            <VisaForm />
          </div>

        </section>

        <AnimatedHR direction="left" duration={1.2} />
        <section id='Client Reviews'>
          <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
        </section>

      </div>

    </>
  );
}
