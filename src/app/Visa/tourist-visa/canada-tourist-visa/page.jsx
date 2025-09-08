import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";

export const metadata = {
  title:
    "Canada Tourist Visa Assistance: Requirements, Application & Top Places | Global Visa Internationals",
  description:
    "Apply for a Canada Tourist Visa with expert help from Global Visa Internationals. Learn visa requirements, estimated travel expenses, and must-visit places in Canada.",
  keywords:
    "Canada tourist visa, apply Canada visitor visa, Canada visa consultant, Canada travel guide, visa for Canada from India, Canada immigration, top tourist places in Canada",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://www.globalvisainternationals.com/visa/tourist-visa/canada",
  },
  openGraph: {
    title: "Canada Tourist Visa: Application, Requirements & Top Travel Tips",
    description:
      "Get expert help from Global Visa Internationals on applying for a Canada tourist visa. Learn the visa process, documents needed, and explore popular Canadian destinations.",
    url: "https://www.globalvisainternationals.com/visa/tourist-visa/canada",
    siteName: "Global Visa Internationals",
    images: [
      {
        url: "https://www.globalvisainternationals.com/visa-banner/Canada-Tourist-Visa-assistence-banner.webp",
        width: 1200,
        height: 630,
        alt: "Canada Tourist Visa Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "Canada Tourist Visa: Application, Requirements & Top Places",
    description:
      "Plan your dream trip to Canada. Discover visa requirements, costs, and must-see destinations with help from Global Visa Internationals.",
    images: [
      "https://www.globalvisainternationals.com/visa-banner/Canada-Tourist-Visa-assistence-banner.webp",
    ],
  },
};

export default function Canada() {
  return (
    <>
      <Head>
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="12.9716,77.5946" />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.globalvisainternationals.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Canada",
                  item: "https://www.globalvisainternationals.com/visa/tourist-visa/canada",
                },
              ],
            }),
          }}
        />
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Global Visa Internationals",
              url: "https://www.globalvisainternationals.com",
              logo: "https://www.globalvisainternationals.com/gvilogo.png",
              description:
                "Visa & Immigration Consultants based in Bangalore. Trusted since 2017.",
              telephone: "+91-7022213466",
              address: {
                "@type": "PostalAddress",
                streetAddress: "MG Road",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560025",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9716,
                longitude: 77.5946,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "10:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/globalvisainternationals/",
                "https://www.instagram.com/globalvisa_internationals/",
                "https://www.linkedin.com/company/global-visa-internationals/",
                "https://x.com/GLOBALVISA1505",
                "https://www.youtube.com/@globalVisaInternationals",
                "https://www.google.com/maps/place/Global+Visa+Internationals",
              ],
            }),
          }}
        />
      </Head>

      <div className={styles.imageContainer}>
        <img
          src="/visa-banner/Canada-Tourist-Visa-assistence-banner.webp"
          alt="Canada Image"
          className={styles.VisaImage}
        />
      </div>

      <div className={styles.VisaSec}>
        <div className={styles.VisaData}>
          <section className={styles.card}>
            <h2 className={styles.subTitle}>✈ Travel to Canada with a Visitor Visa</h2>
            <p>Planning a trip to Canada? The Canada Visitor Visa (also known as a Temporary Resident Visa or TRV) allows Indian travelers to visit for tourism, to see family, or for a short-term business trip. At Global Visa Internationals (GVI), we simplify the process with expert guidance, transparent support, and end-to-end visa file handling.</p>
          </section>

          <div className={styles.section}>
            <section className={styles.card}>
              <h2 className={styles.subTitle}>Visa Processing Overview</h2>
              <p>Global Visa Internationals (GVI) will manage the entire documentation process to ensure that your visa application meets the expectations of Immigration, Refugees and Citizenship Canada (IRCC) and that your travel purpose is clearly and professionally represented.</p>
            </section>

            <section className={styles.card}>
              <h3 className={styles.subTitle}>Our Services Include:</h3>
              <ul>
                <li>Online application form filling</li>
                <li>Covering letter and documentation preparation</li>
                <li>Personalized checklist and guidance</li>
                <li>Providing accepted samples for the required documents</li>
                <li>Verification of documentation</li>
                <li>Complete walk-through of the process</li>
              </ul>
            </section>

            <section className={styles.card}>
              <h3 className={styles.subTitle}>Timeline:</h3>
              <p>Processing will begin once we receive 100% of the documents as per our checklist. The document finalization will take approximately 3 to 5 working days.</p>
            </section>
          </div>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>🕒 Canada Visa Duration Rule</h2>
            <p>A Canada Visitor Visa typically allows you to stay for up to 6 months. A multiple-entry visa may be issued with a validity of up to 10 years, or until your passport expires, whichever comes first. Note that even with a multiple-entry visa, you can only stay for a maximum of 6 months on each visit. Overstaying this limit may lead to fines, entry bans, or refusal of future visa applications.</p>
            <p>👉 With GVI, you’ll never miscalculate your stay—we ensure full compliance with Canadian visa rules.</p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>Canada Visitor & Business Visa Documents & Requirements for Indian Applicants</h2>
            <p>Before applying, ensure you meet the Canada visa eligibility requirements. If these criteria are met, Global Visa Internationals (GVI) will accept your case, manage the entire documentation process, and book your appointment. You only need to visit the VFS center once to submit your biometrics and documents.</p>
          </section>

          <section className={styles.card}>
            <h3 className={styles.subTitle}>1. Valid Passport & Travel History</h3>
            <ul>
              <li><b className={styles.strong}>Valid Passport:</b> Must be valid for the entire duration of your stay in Canada, with at least one blank page for the visa stamp.</li>
              <li><b className={styles.strong}>Travel History:</b> Previous international travel and a record of international travel stamps are crucial. GVI helps you highlight these to strengthen your application.</li>
            </ul>
          </section>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <section className={styles.card}>
            <h3 className={styles.subTitle}>2. Financial Proof: Bank Statements & Funds</h3>
            <p>You must prove you have sufficient funds to support your trip without working or relying on public funds. The consulate needs to be convinced you can support your entire stay. We recommend maintaining a minimum balance of ₹3–4 lakh (or approx. CAD$4,700-$62,000) in your bank account. Avoid any large, unexplained transactions in the months leading up to your application, as this may raise suspicion with the embassy.</p>
            <ul>
              <li><b className={styles.strong}>Bank Statements:</b> Submit original bank statements for the last 6 months, stamped by the bank.</li>
              <li><b className={styles.strong}>Income Tax Returns (ITR):</b> Provide ITRs for the last 3 years to prove a stable income source.</li>
            </ul>
          </section>

          <section className={styles.card}>
            <h3 className={styles.subTitle}>3. Employment & Professional Documentation</h3>
            <ul>
              <li><b className={styles.strong}>Employees:</b> You must provide a Leave Approval Letter (NOC) from your employer on company letterhead, specifying your position, joining date, and approved leave dates.</li>
              <li><b className={styles.strong}>Business Owners/Self-Employed:</b> Submit your business registration license (GST certificate/partnership deed) and last 3 years’ ITRs. We also recommend a brief business profile.</li>
              <li><b className={styles.strong}>Students:</b> Provide an enrolment letter and NOC from your school/university.</li>
            </ul>
          </section>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <section className={styles.card}>
            <h3 className={styles.subTitle}>4. Travel & Accommodation Proof</h3>
            <ul>
              <li><b className={styles.strong}>Flight & Hotel Bookings:</b> Provide a detailed travel itinerary covering your entire stay. It's not mandatory to have confirmed return flight tickets, but a travel plan is required.</li>
              <li><b className={styles.strong}>Accommodation Proof:</b> Provide confirmed hotel reservations covering your entire stay. If staying with a friend or relative, you will need a letter of invitation and proof of their Canadian address and immigration status.</li>
            </ul>
          </section>

          <section className={styles.card}>
            <h3 className={styles.subTitle}>5. Visa Cover Letter & Itinerary</h3>
            <p>A well-written cover letter is your opportunity to introduce yourself and the purpose of your trip to the visa officer. It should include your travel itinerary, the purpose of your visit (e.g., tourism, business meeting), and proof of your strong ties to India (e.g., family, job). Our experts draft a professional cover letter and a detailed itinerary for every client to maximize their chances of success.</p>
          </section>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>Canada Visitor Visa Fees (India 2025)</h2>
            <p>As of 2025, the Canada visa fees are subject to change. Fees are paid to the Government of Canada (IRCC) and VFS Global. The fees listed below are approximate and do not include additional services.</p>
            <ul>
              <li><b className={styles.strong}>IRCC Visitor Visa Application Fee:</b> CAD$100 (approx. ₹6,100)\
                \85 (approx. ₹5,200)</li>
              <li><b className={styles.strong}>VFS Global Service Charges:</b> Vary based on services availed (e.g., package transmission, courier, etc.)</li>
            </ul>
          </section>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>Common Reasons for Canada Visa Rejection & How We Solve Them</h2>
            <p>Visa rejections are often a result of simple mistakes. Our structured process is designed to eliminate these common issues.</p>
            <ul>
              <li><b className={styles.strong}>Incomplete/Mismatched Documents:</b> We perform a professional document review as per IRCC standards to ensure everything is perfect.</li>
              <li><b className={styles.strong}>Insufficient Proof of Funds:</b> We advise you on the exact financial requirements and review your bank statements to ensure compliance.</li>
              <li><b className={styles.strong}>Unclear Purpose of Travel:</b> Our expert-prepared cover letters and itineraries clearly explain your travel plans and ties to India.</li>
              <li><b className={styles.strong}>Lack of Strong Ties to India:</b> We guide you on how to best prove your ties, such as property ownership, family commitments, and employment stability.</li>
            </ul>
          </section>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>Canada Visa Processing Time from India</h2>
            <p>The processing time for a Canada Visitor Visa can vary. Here are some general timelines:</p>
            <ul>
              <li><b className={styles.strong}>Standard Processing Time:</b> The IRCC service standard is to process most visitor visa applications within a few weeks. Wait times can vary and are often updated on the official IRCC website.</li>
              <li><b className={styles.strong}>Peak Season:</b> Can extend to 60 working days or more.</li>
              <li><b className={styles.strong}>Our Service:</b> Once we receive your documents, GVI finalizes your file within 3–5 working days, ensuring it is submitted to the IRCC in a timely manner.</li>
            </ul>
          </section>

          <section className={styles.card}>
            <h2 className={styles.subTitle}>The VFS Global Application Process: A Step-by-Step Guide</h2>
            <p>As VFS Global is the official partner for Canada Visas and Immigration in India, we manage this process for you. Here’s a quick overview of what to expect:</p>
            <ol>
              <li><b className={styles.strong}>Online Application & Appointment Booking:</b> We fill out the online form on the IRCC website and book your VFS appointment for you.</li>
              <li><b className={styles.strong}>Document Submission & Biometrics:</b> You visit the VFS center in person to submit the verified documents and provide your fingerprints and a photo.</li>
              <li><b className={styles.strong}>Application Tracking:</b> Once submitted, we help you track your application status until your passport is ready for collection.</li>
            </ol>
          </section>
          <a href="https://visa.vfsglobal.com/ind/en/can/" target="_blank" rel="noopener noreferrer">VFS Global — Canada Visas & Immigration</a>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}>Transparent Pricing</h2>
          <p>Choose the right Canada visa assistance package for your needs:</p>
          <ul>
            <li><b className={styles.strong}>Basic (₹6,999):</b> Checklist + document review</li>
            <li><b className={styles.strong}>Standard (₹8,999):</b> End-to-end application, filing, appointment booking, and biometrics guidance</li>
          </ul>

          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>At GVI, we are committed to making your visa process stress-free and successful. Our expertise and dedication have led to:</p>
          <ul>
            <li>2,200+ Canada visas processed since 2017</li>
            <li>98% client satisfaction rate across India</li>
            <li>Specialized assistance for re-application after rejection</li>
            <li>Experienced visa consultants who provide personalized, country-specific advice.</li>
          </ul>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}>Ready to Apply?</h2>
          <p>With GVI, you don’t need to worry about rejections or missing documents.</p>
          <p>👉 Start your Canada visa application today with Global Visa Internationals and travel to Canada with confidence.</p>
          <br />
          <a href="/contact" className={styles.ctaButton}>Get a free consultation today!</a>
        </div>
        <div className={styles.formSection}>
          <VisaForm />
        </div>
      </div>
      <section id="ClientReviews" className={styles.reviewSection}>
        <div
          className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5"
          data-elfsight-app-lazy
        ></div>
      </section>
    </>
  );
}
