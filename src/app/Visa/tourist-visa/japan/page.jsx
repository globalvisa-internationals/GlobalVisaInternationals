import styles from '@/Components/Visa.module.css';
import VisaForm from '@/Components/VisaForm';
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";

export const dynamic = 'force-static'; // helps SEO caching in Next.js

export async function generateMetadata() {
  const baseUrl = "https://www.globalvisainternationals.com";

  return {
    title: "Japan Tourist Visa Consultants in Bangalore | Global Visa Internationals",
    description: "Apply for a Japan Tourist Visa with expert support from Global Visa Internationals. 11+ years of experience. Smooth documentation, fast process, and mock interviews.",
    keywords: [
      "Japan tourist visa",
      "Japan visa consultants in Bangalore",
      "Japan visitor visa from India",
      "how to apply for Japan visa",
      "Japan travel visa assistance"
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `https://www.globalvisainternationals.com/Visa/tourist-visa/japan`,
      languages: {
        "en-IN": `https://www.globalvisainternationals.com/Visa/tourist-visa/japan`, // regional targeting
      },
    },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url: `https://www.globalvisainternationals.com/Visa/tourist-visa/japan`,
      title: "Apply for Japan Tourist Visa from India | Global Visa Internationals",
      description: "Trusted visa agents for Japan in Bangalore. Expert documentation, embassy interview prep, and high visa success rate.",
      siteName: "Global Visa Internationals",
      images: [
        {
          url: `https://www.globalvisainternationals.com/tourist-visa/Japan-Tourist-Visa-Assistance-GVI.jpg`,
          width: 1200,
          height: 630,
          alt: "Japan Tourist Visa Assistance",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@globalvisainternationals",
      title: "Japan Tourist Visa Experts - Global Visa Internationals",
      description: "Planning to travel to Japan? Get full visa support from trusted consultants in Bangalore.",
      images: [`https://www.globalvisainternationals.com/tourist-visa/Japan-Tourist-Visa-Assistance-GVI.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxSnippet: -1,
        maxImagePreview: "large",
        maxVideoPreview: -1,
      },
    },

    image: `https://www.globalvisainternationals.com/tourist-visa/Japan-Tourist-Visa-Assistance-GVI.jpg`,
    authors: [{ name: "Global Visa Internationals", url: baseUrl }],
    publisher: {
      name: "Global Visa Internationals",
      url: baseUrl,
      logo: `https://www.globalvisainternationals.com/gvilogo.png`,
    },
    other: {
      "geo.region": "IN-KA",
      "geo.placename": "Bengaluru",
      "ICBM": "12.9716,77.5946",
      "theme-color": "#ffffff",
      "format-detection": "telephone=no",
      "article:published_time": "2025-01-20T00:00:00+05:30",
      "article:modified_time": "2025-10-29T00:00:00+05:30",
    },
  };
}

export default function JapanTouristVisa() {
  const touristAttractions = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Tourist Attractions in Japan",
    "itemListElement": [
      {
        "@type": "TouristAttraction",
        "name": "Mount Fuji",
        "description": "Japan's tallest mountain and iconic symbol, popular for hiking and photography.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Fuji_from_Yamanaka.jpg",
        "url": "https://www.japan.travel/en/uk/uk-destinations/fuji-five-lakes-mount-fuji/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Tokyo Tower",
        "description": "A famous observation and communications tower offering panoramic views of Tokyo.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/00/Tokyo_Tower_and_Zojoji_Temple.jpg",
        "url": "https://www.tokyotower.co.jp/en.html"
      },
      {
        "@type": "TouristAttraction",
        "name": "Fushimi Inari Taisha",
        "description": "Renowned Shinto shrine in Kyoto, famous for its thousands of red torii gates.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Fushimi_Inari_Taisha_torii_2.jpg",
        "url": "https://kyoto.travel/en/thingstodo/550.html"
      },
      {
        "@type": "TouristAttraction",
        "name": "Arashiyama Bamboo Grove",
        "description": "A scenic bamboo forest located in Kyoto, popular for tranquil walks and photography.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Arashiyama_Bamboo_Grove.jpg",
        "url": "https://www.japan.travel/en/spot/1207/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Himeji Castle",
        "description": "A UNESCO World Heritage Site and Japan's most spectacular and best-preserved castle.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Himeji_Castle_in_May_2015.jpg",
        "url": "https://www.himejicastle.jp/en/"
      }
    ]
  };

  const breadcrumb = {
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
        "name": "Japan Tourist Visa",
        "item": "https://www.globalvisainternationals.com/Visa/tourist-visa/japan"
      }
    ]
  };

  const travelAgency = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com",
    "logo": "https://www.globalvisainternationals.com/gvilogo.png",
    "description": "Expert Japan Tourist Visa Consultants in Bangalore. We assist with complete Japan visa documentation, application submission, and personalized guidance.",
    "telephone": "+91-7022213466",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MG Road",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560025",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "18:00"
    }],
    "sameAs": [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://www.google.com/maps/place/Global+Visa+Internationals"
    ]
  };

  const visaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Japan Tourist Visa Application Assistance",
    "provider": {
      "@type": "Organization",
      "name": "Global Visa Internationals",
      "url": "https://www.globalvisainternationals.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Bangalore, India"
    },
    "description": "Expert assistance for Japan tourist visa applications. Support with documents, application submission, and embassy interview preparation.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.globalvisainternationals.com/Visa/tourist-visa/japan"
    }
  };

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, travelAgency, visaService, touristAttractions])
        }}
      />



      <div className={styles.imageContainer}>
        <img src="/tourist-visa/Japan-Tourist-Visa-Assistance-GVI.jpg" loading="lazy" alt="Japan Tourist Visa Assistance in Bangalore by Global Visa Internationals" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>


        <div className={styles.VisaData}>
          {/* ✅ NEW INTRO + CORRECT HEADING STRUCTURE */}
          <section>
            <h1 className={styles.mainTitle}>
              Japan Tourist Visa from India - Apply with Global Visa Internationals
            </h1>
            <p>
              Looking to apply for a <strong className={styles.strong}>Japan Tourist Visa from India</strong>?
              <strong className={styles.strong}> Global Visa Internationals (GVI)</strong> in Bangalore helps Indian travelers
              obtain Japan visitor visas smoothly and professionally. Our expert consultants guide you through every step —
              from <strong>document verification</strong> to <strong>embassy coordination</strong> — ensuring faster visa approval
              and peace of mind.
            </p>
          </section>



          <section>
            <h2 className={styles.subTitle}>Travel to Japan with a Visitor Visa</h2>
            <p>
              The <strong className={styles.strong}>Japan Tourist Visa</strong> allows Indian nationals to visit Japan
              for tourism, family visits, or short-term business trips.
              At <strong className={styles.strong}>Global Visa Internationals (GVI)</strong>, we make the process stress-free
              with expert documentation, transparent communication, and end-to-end visa file handling.
            </p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Japan Airlines Free Domestic Flight Offer</h2>
            <p>
              <strong className={styles.strong}>Japan Airlines (JAL)</strong> now offers free domestic flights within Japan
              to international passengers booking JAL international tickets.
              This means travelers from India can fly to <strong>Sapporo</strong>, <strong>Fukuoka</strong>, or
              <strong>Okinawa</strong> without extra airfare (taxes apply).
            </p>
            <p>
              This initiative aims to reduce overtourism in <strong>Tokyo</strong>, <strong>Kyoto</strong>, and
              <strong>Osaka</strong>, encouraging exploration of Japan’s hidden gems.
              <br />
              <b>Eligible Countries:</b> India, USA, Canada, Australia, Singapore, Thailand, Vietnam, Indonesia, China, and more.
              Both international and domestic flights must be booked in the same reservation.
            </p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Japan Visa Processing Overview</h2>
            <p>
              Applying for a <strong>Japan Tourist Visa from India</strong> may seem complicated, but
              <strong> GVI </strong> makes it simple and fast. Our team manages all paperwork, form completion, and embassy coordination,
              ensuring full compliance with <strong>Japan’s Ministry of Foreign Affairs (MOFA)</strong> guidelines.
            </p>
          </section>

          <section>
            <h3 className={styles.subTitle}>Our Japan Visa Services Include:</h3>
            <ul>
              <li>Visa application form completion (MOFA & VFS)</li>
              <li>Covering letter and documentation preparation</li>
              <li>Personalized Japan tourist visa checklist</li>
              <li>Document verification for accuracy and consistency</li>
              <li>Appointment booking and passport courier coordination</li>
              <li>Templates for financial and employment documentation</li>
              <li>Fast Track / eVISA / Visit Japan Web assistance</li>
            </ul>
          </section>

          <section>
            <h3 className={styles.subTitle}>Japan Visa Processing Timeline</h3>
            <ul>
              <li><b className={styles.strong}>GVI Internal Review:</b> 3-5 working days</li>
              <li><b className={styles.strong}>Embassy Processing:</b> 5-10 working days (varies by jurisdiction)</li>
            </ul>
            <p>
              <b>Note:</b> The Embassy may request additional documentation or require verification through Tokyo headquarters in special cases.
            </p>
          </section>

          <section>
            <h3 className={styles.subTitle}>Important Points to Note</h3>
            <ul>
              <li>Confirmed flight and hotel bookings are mandatory — dummy bookings not accepted.</li>
              <li>Ensure all travel dates match across documents.</li>
              <li>Only genuine, signed, and updated documents are accepted.</li>
              <li>GVI assists with confirmed flight, hotel, and forex arrangements.</li>
            </ul>
          </section>

          {/* ✅ UPDATED JAPAN VISA CHECKLIST & TRANSPARENT PRICING SECTIONS */}

          <section>
            <h2 className={styles.subTitle}>Japan Tourist Visa Checklist (2025)</h2>
            <p>
              <b>Temporary Visitor Visa for Tourism (Without Guarantor)</b><br />
              <small>(For residents of Karnataka — processed by the Consulate General of Japan, Bengaluru)</small>
            </p>

            <h3>✅ Mandatory Documents</h3>
            <ul>
              <li><b>Valid Passport:</b> At least 2 blank pages; include old passports if available.</li>
              <li><b>Passport Photocopy:</b> First and last page of the current passport.</li>
              <li><b>Visa Application Form:</b> Completely filled and signed by the applicant.</li>
              <li><b>Recent Photograph:</b> 45mm x 35mm, white background, 80% face coverage, taken within the last 6 months.</li>
              <li><b>Covering Letter:</b> Signed by the applicant, including travel dates, purpose, companions, and expense bearer details.</li>
              <li><b>Travel Schedule:</b> Flight/cruise itinerary and day-by-day Japan travel plan with hotel details.</li>
              <li><b>Accommodation Proof:</b> Hotel booking under the applicant’s name (single name if travelling alone).</li>
              <li><b>Financial Documents:</b> Latest 6-month bank statement, last 2 years’ ITR acknowledgements, and last 3 months’ salary slips (if employed).</li>
            </ul>

            <h3>💼 Employment / Occupation Documents</h3>
            <ul>
              <li><b>If Employed:</b> Original NOC / Leave Approval Letter + company ID copy.</li>
              <li><b>If Self-Employed:</b> GST Registration Certificate.</li>
              <li><b>If Doctor:</b> KMC Certificate.</li>
              <li><b>If Lawyer:</b> Bar Council Card.</li>
              <li><b>If Landlord / Agriculturist:</b> Property ownership proof.</li>
              <li><b>If Student:</b> Bonafide certificate from school/college/institution.</li>
            </ul>

            <h3>👨‍👩‍👧 Family / Dependent Travelers</h3>
            <ul>
              <li><b>Proof of Relationship:</b> Marriage/Birth certificate or passport copy.</li>
              <li><b>Accompanying Person’s Documents:</b> Passport, visa copy, and flight tickets (even if travelling from another state).</li>
              <li><b>If Sponsored:</b> Sponsor Letter, 3-month bank statement, 2-year ITR, and ID proof.</li>
              <li><b>If Divorced:</b> Divorce decree copy.</li>
              <li><b>If Family/Friends Travelling Together:</b> Submit all applications together.</li>
            </ul>

            <h3>🏠 Residence Proof (for Passports Issued Outside Karnataka)</h3>
            <ul>
              <li>Valid Rental/Lease Agreement</li>
              <li>Sales Deed</li>
              <li>Electricity / Gas Bill</li>
              <li>Aadhaar Card (current address)</li>
            </ul>

            <h3>💰 Recommended Bank Balance (Per Person)</h3>
            <table className={styles.table}>
              <thead>
                <tr><th>Trip Duration</th><th>Recommended Minimum Funds</th></tr>
              </thead>
              <tbody>
                <tr><td>1 week</td><td>₹1.5 – ₹2.0 lakhs</td></tr>
                <tr><td>10–15 days</td><td>₹2.5 – ₹3.5 lakhs</td></tr>
                <tr><td>2–3 weeks</td><td>₹3.5 – ₹5.0 lakhs</td></tr>
              </tbody>
            </table>
          </section>

          {/* ✅ UPDATED TRANSPARENT PRICING SECTION */}
          <section>
            <h2 className={styles.subTitle}>Transparent Pricing</h2>
            <p>
              Choose the right <b className={styles.strong}>Japan Tourist Visa Assistance Package</b> that fits your travel needs:
            </p>
            <div className={styles.pricingContainer}>
              {/* BASIC PLAN */}
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Basic</h3>
                <p className={styles.planPrice}>₹2,500</p>
                <ul className={styles.planFeatures}>
                  <li className={styles.included}>Personalized document checklist</li>
                  <li className={styles.included}>Document review & feedback</li>
                  <li className={styles.excluded}>Embassy filing & appointment booking</li>
                  <li className={styles.excluded}>Complete documentation & coordination</li>
                  <li className={styles.excluded}>Visa status tracking & updates</li>
                </ul>
              </div>

              {/* STANDARD PLAN */}
              <div className={`${styles.pricingCard} ${styles.highlighted}`}>
                <h3 className={styles.planTitle}>Standard</h3>
                <p className={styles.planPrice}>₹3,500</p>
                <ul className={styles.planFeatures}>
                  <li className={styles.included}>Personalized document checklist</li>
                  <li className={styles.included}>Document review & feedback</li>
                  <li className={styles.included}>Embassy filing & appointment booking</li>
                  <li className={styles.included}>Complete documentation & coordination</li>
                  <li className={styles.included}>Visa status tracking & updates</li>
                </ul>
              </div>

              {/* PREMIUM PLAN */}
              <div className={styles.pricingCard}>
                <h3 className={styles.planTitle}>Premium</h3>
                <p className={styles.planPrice}>₹4,999</p>
                <ul className={styles.planFeatures}>
                  <li className={styles.included}>Everything in Standard</li>
                  <li className={styles.included}>Priority processing & concierge support</li>
                  <li className={styles.included}>Visit Japan Web + eVisa assistance</li>
                  <li className={styles.included}>Dedicated consultant support (1-on-1)</li>
                  <li className={styles.included}>Complimentary travel insurance quote</li>
                </ul>
              </div>
            </div>


            <p>
              <b>Note:</b> Embassy Fee ₹800 + VFS ₹500 are paid directly to authorized centers.
              Prices include GST where applicable.
            </p>
          </section>


          <section>
            <h2 className={styles.subTitle}>Why Choose Global Visa Internationals (GVI)</h2>
            <ul>
              <li>99% Visa Success Rate for Japan applications</li>
              <li>Trusted Japan Visa Consultants in Bangalore</li>
              <li>Transparent pricing — no hidden fees</li>
              <li>Complete documentation & submission assistance</li>
              <li>Fast, reliable, and personalized support</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.subTitle}>Ready to Apply for Your Japan Visa?</h2>
            <p>
              Start your <strong className={styles.strong}>Japan visa application</strong> with
              <strong className={styles.strong}> Global Visa Internationals </strong> today and travel stress-free.
              Our expert consultants ensure a smooth, reliable, and transparent process.
            </p>
            <p>
              <b>Office:</b> Brigade Road, Bangalore, Karnataka<br />
              <b>Email:</b> info@globalvisainternationals.com<br />
              <b>Phone / WhatsApp:</b> +91-7022213466
            </p>
            <p>
              ✨ Explore Japan — from Tokyo’s neon lights to Okinawa’s beaches — with GVI’s expert visa support.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Apply for Your Japan Visa Now
            </a>
          </section>
        </div>


        <div className={styles.formSection}>
          <VisaForm />
        </div>
      </div >

      <section>

        <ReviewSchema />
        <ReviewCarousel />
      </section>
    </>
  );
}