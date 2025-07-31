
import styles from '@/Components/Visa.module.css';
import React from 'react';
import Head from 'next/head';
import VisaForm from '@/Components/VisaForm';

export const metadata = {
  title: "Japan Tourist Visa Consultants in Bangalore | Global Visa Internationals",
  description: "Apply for a Japan Tourist Visa with expert support from Global Visa Internationals. 11+ years of experience. Smooth documentation, fast process, and mock interviews.",
  keywords: "Japan tourist visa, Japan visa consultants in Bangalore, Japan visitor visa from India, how to apply for Japan visa, Japan travel visa assistance",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/japan",
  },
  openGraph: {
    type: "website",
    title: "Apply for Japan Tourist Visa from India | Global Visa Internationals",
    description: "Trusted visa agents for Japan in Bangalore. Expert documentation, embassy interview prep, and high visa success rate.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/japan",
    images: [
      {
        url: "https://www.globalvisainternationals.com/images/japan-visa-banner.jpg",
        alt: "Japan Tourist Visa Assistance",
      }
    ],
    siteName: "Global Visa Internationals"
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalvisainternationals",
    title: "Japan Tourist Visa Experts – Global Visa Internationals",
    description: "Planning to travel to Japan? Get full visa support from trusted consultants in Bangalore.",
    images: ["https://www.globalvisainternationals.com/images/japan-visa-banner.jpg"]
  }
};



export default function JapanTouristVisa() {
  const pageUrl = metadata.alternates.canonical;
  const TouristAttraction = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Tourist Attractions in Japan",
    "itemListElement": [
      {
        "@type": "TouristAttraction",
        "name": "Mount Fuji",
        "description": "Japan's tallest mountain and iconic symbol, popular for hiking and photography.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Fuji_from_Yamanaka.jpg",
        "url": "https://www.Visa.travel/en/uk/uk-destinations/fuji-five-lakes-mount-fuji/"
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
        "url": "https://www.Visa.travel/en/spot/1207/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Himeji Castle",
        "description": "A UNESCO World Heritage Site and Japan's most spectacular and best-preserved castle.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Himeji_Castle_in_May_2015.jpg",
        "url": "https://www.himejicastle.jp/en/"
      }
    ]


  }
  const breadcrumbJsonLd = {
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
        "item": pageUrl
      }
    ]
  };

  const travelAgencyJsonLd = {
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://www.google.com/maps/place/Global+Visa+Internationals"
    ]
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
        <meta property="og:url" content={metadata.openGraph.url} />
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

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionsJsonLd) }}
        />

      </Head>

      <div className={styles.imageContainer}>
        <img src="/images/Japan1.png" alt="Europe Image" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>


        <div className={styles.VisaData}>
          <h1 className={styles.Title}>Japan Tourist Visa Assistance – Travel with Confidence</h1>
          <p>
            Planning a trip to the Land of the Rising Sun? Global Visa Internationals is your trusted partner for
            <strong> Japan tourist visa assistance</strong>. We simplify the entire process, from documentation to submission,
            helping you explore Japan's cultural wonders, futuristic cities, and natural beauty with ease.
          </p>

          <h2 className={styles.subTitle}>Japan Top Tourist Attractions </h2>
          <p>Experience the highlights of Japan with these must-see destinations:</p>
          <ul>
            <li><strong>Tokyo Tower:</strong> Enjoy panoramic city views from this iconic landmark in Japan’s capital.</li>
            <li><strong>Kyoto’s Historic Temples:</strong> Visit Kinkaku-ji (Golden Pavilion) and Fushimi Inari-taisha, famous for its red torii gates.</li>
            <li><strong>Cherry Blossom Season (Sakura):</strong> Celebrate spring with a hanami picnic under blooming cherry trees from March to April.</li>
            <li><strong>Mount Fuji:</strong> Capture breathtaking views of Japan’s tallest peak from the Fuji Five Lakes region.</li>
          </ul>
          <p>
            Beyond these, discover Osaka's vibrant street food, Hiroshima’s historical landmarks, and the tranquil beauty of the Japanese Alps.
          </p>

          <h2 className={styles.subTitle}>Why Japan Visa for Your Next Trip?</h2>
          <ol>
            <li><strong>Rich History:</strong> Explore ancient castles, shrines, and traditions like tea ceremonies.</li>
            <li><strong>Diverse Culture:</strong> Experience a blend of ancient customs and cutting-edge innovation.</li>
            <li><strong>World-Class Cuisine:</strong> Enjoy sushi, ramen, tempura, and multi-course kaiseki meals.</li>
            <li><strong>Stunning Landscapes:</strong> From beaches to mountains, Japan’s natural beauty is unforgettable.</li>
            <li><strong>Omotenashi Hospitality:</strong> Renowned politeness and excellent service everywhere you go.</li>
            <li><strong>Safety & Cleanliness:</strong> One of the world’s safest, cleanest travel destinations.</li>
          </ol>
          <p>Whether you're a solo traveler, couple, or family – Japan promises something special for everyone.</p>

          <h2 className={styles.subTitle}>Need Help with Your Japan Tourist Visa?</h2>
          <p>
            Global Visa Internationals is a reliable <strong>Japan tourist visa consultancy</strong> offering end-to-end guidance:
          </p>
          <ul>
            <li>Document verification & checklist preparation</li>
            <li>Visa application form filling</li>
            <li>Cover letter and travel plan assistance</li>
            <li>Appointment scheduling & submission guidance</li>
          </ul>

          <p><strong> Ready to apply for your Japan Tourist Visa?</strong> Let our experts handle the process while you focus on planning your dream trip!</p>

          <a href="/contact" className={styles.ctaButton}>
            Get Expert Visa Assistance Now
          </a>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>
          <h2 className={styles.subTitle}>Japan Visa and Travel Costs in 2025 – Plan Your Budget Smartly</h2>
          <p>
            Understanding the estimated travel costs is crucial when applying for your <strong>Japan Tourist Visa</strong>. Here's a detailed breakdown of the major expenses including flights, accommodations, food, transport, and more—helping you plan better with the support of a trusted <strong>Japan tourist visa consultancy</strong>.
          </p>

          <h3> Flight Costs from India to Japan (2025)</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Destination</th>
                <th>Flight Type</th>
                <th>Starting Price (INR)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Tokyo</td><td>1+ stops</td><td>₹29,759</td><td>Cheapest in September</td></tr>
              <tr><td>Osaka</td><td>1+ stops</td><td>₹31,702</td><td>Competitive fares available</td></tr>
              <tr><td>Nagoya</td><td>1+ stops</td><td>₹32,437</td><td>Slightly higher fares</td></tr>
              <tr><td>Fukuoka</td><td>1+ stops</td><td>₹33,021</td><td>Affordable options</td></tr>
            </tbody>
          </table>

          <h3> Accommodation Costs on Japan tourist visa</h3>
          <p>Whether you’re backpacking or enjoying a luxury trip, Japan offers stays for all budgets:</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Type</th><th>Price (JPY)</th><th>Price (INR)</th><th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Hostels</td><td>1,500–4,000</td><td>₹900–₹2,400</td><td>Budget-friendly, shared facilities</td></tr>
              <tr><td>Capsule Hotels</td><td>5,000–15,000</td><td>₹3,000–₹9,000</td><td>Compact & modern, great for solo travel</td></tr>
              <tr><td>Minshuku</td><td>5,000–20,000</td><td>₹3,000–₹12,000</td><td>Traditional Japanese guesthouses</td></tr>
              <tr><td>Luxury Hotels / Ryokans</td><td>30,000–300,000</td><td>₹18,000–₹180,000</td><td>Top-tier services with cultural experiences</td></tr>
            </tbody>
          </table>

          <h3> Food & Dining in Japan</h3>
          <p>Japanese cuisine fits every pocket—from street food to Michelin-star sushi bars:</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Meal Type</th><th>JPY</th><th>INR</th><th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Street Food</td><td>300–1,500</td><td>₹180–₹900</td><td>Ramen, onigiri, takoyaki</td></tr>
              <tr><td>Casual Dining</td><td>1,000–1,500</td><td>₹600–₹900</td><td>Izakayas & chain restaurants</td></tr>
              <tr><td>Daily Food Budget</td><td>~10,000</td><td>~₹6,000</td><td>3 meals + snacks</td></tr>
              <tr><td>Fine Dining</td><td>10,000–50,000</td><td>₹6,000–₹30,000</td><td>Kaiseki meals & sushi experiences</td></tr>
            </tbody>
          </table>

          <h3> Transportation Costs for japan tourist visa</h3>
          <h4>Local Travel</h4>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Mode</th><th>JPY</th><th>INR</th><th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Metro/Bus</td><td>200–500</td><td>₹120–₹300</td><td>Single ride</td></tr>
              <tr><td>Day Pass</td><td>~1,600</td><td>~₹960</td><td>Unlimited travel for a day</td></tr>
            </tbody>
          </table>

          <h4>Long-Distance Travel on japan Tourist visa</h4>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Mode</th><th>JPY</th><th>INR</th><th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Shinkansen (Tokyo–Kyoto)</td><td>~14,000</td><td>~₹8,400</td><td>One-way</td></tr>
              <tr><td>Japan Rail Pass (7-day)</td><td>50,000</td><td>~₹30,000</td><td>Unlimited JR trains nationwide</td></tr>
            </tbody>
          </table>

          <h3> Total Estimated Trip Cost (7 Days, Excl. Flights) For Japan </h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Budget (INR)</th>
                <th>Mid-Range (INR)</th>
                <th>Luxury (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Accommodation</td><td>₹900–₹3,000/night</td><td>₹3,000–₹9,000/night</td><td>₹18,000–₹180,000/night</td></tr>
              <tr><td>Food</td><td>₹1,800–₹3,000/day</td><td>₹3,000–₹6,000/day</td><td>₹6,000–₹30,000/day</td></tr>
              <tr><td>Transport</td><td>₹600–₹1,800/day</td><td>₹1,800–₹6,000/day</td><td>₹6,000–₹30,000/day</td></tr>
              <tr><td>Sightseeing/Shopping</td><td>₹1,200–₹3,000/day</td><td>₹3,000–₹6,000/day</td><td>₹6,000–₹30,000/day</td></tr>
              <tr><td><strong>Total (7 Days)</strong></td><td>₹28,000–₹70,000</td><td>₹70,000–₹140,000</td><td>₹140,000–₹700,000</td></tr>
            </tbody>
          </table>

          <p className={styles.note}>
            <strong>Note:</strong> These estimates are approximate and can vary depending on personal preferences, seasonality, and exchange rates.
          </p>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <p className={styles.ctaText}>
            <strong>Start your journey to Japan with confidence!</strong> For expert <strong>Japan tourist visa assistance</strong> and documentation, reach out to Global Visa Internationals today.
          </p>
          <a href="/contact" className={styles.ctaButton}>Get Expert Visa Help </a>

          <h2 className={styles.subTitle}>Traveling to Japan on Tourist Visa Process</h2>
          <p>
            Planning a trip to Japan? Understanding the <strong>Japan tourist visa</strong> process is the first step toward your dream vacation. While the specific requirements may vary by nationality, here's a simplified overview of how to <strong>apply for a Japan visa from India</strong> or any other country.
          </p>

          <ol>
            <li><strong>Determine Eligibility:</strong> Visit the Japanese Ministry of Foreign Affairs website or your local embassy/consulate to check if you need a <strong>Japan visa for Indian citizens</strong> or other nationalities.</li>

            <li><strong>Collect Required Documents:</strong> Prepare key documents including your valid passport, completed <strong>Japan visa application form</strong>, passport-size photos, financial proof, hotel booking, and travel itinerary. Depending on your case, additional documents may be needed.</li>

            <li><strong>Submit at Japan Visa Application Center:</strong> Submit your documents at the <strong>Japan visa application center</strong> or Japanese embassy/consulate. Appointments may be required in some cases.</li>

            <li><strong>Attend Interview (if applicable):</strong> Some applicants may be asked to attend a short visa interview, especially for first-time travelers or unusual cases.</li>

            <li><strong>Wait for Visa Processing:</strong> <strong>Japan tourist visa processing time</strong> typically ranges from 3–7 working days. Apply early to avoid last-minute issues.</li>

            <li><strong>Receive Your Japan Visa:</strong> Once approved, your visa will be stamped in your passport. You're now ready to experience Japan!</li>
          </ol>

          <p>
            The <strong>Japan tourist visa requirements</strong> may seem detailed, but Global Visa Internationals is here to make it simple. From understanding the rules to submitting the paperwork—we help you every step of the way.
          </p>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h3 className={styles.subTitle}>Let Global Visa Internationals Be Your assistance to Japan tourist Visa</h3>
          <p>
            Don’t let complex forms or long embassy queues get in your way. As a trusted <strong>visa agent for Japan</strong>, Global Visa Internationals offers expert guidance for a smooth and hassle-free experience.
          </p>

          <b className={styles.subTitle}>Our Japan Tourist Visa Services Include:</b>
          <ul>
            <li>Personalized guidance on <strong>Japan visa requirements</strong> based on your nationality.</li>
            <li>Expert support in organizing and verifying all documents for your <strong>Japan tourist visa</strong>.</li>
            <li>Pre-submission review to minimize errors and avoid delays in processing.</li>
            <li>Mock interview preparation to boost your confidence for embassy questions.</li>
            <li>End-to-end assistance from a leading <strong>Japan visa consultancy</strong> in India.</li>
          </ul>

          <p className={styles.note}>
            Don’t let the complexities of the Japan visa process stop you from visiting one of the most beautiful countries in the world. Whether you're applying solo or with family, we’re here to help. Contact us today for the best <strong>Japan tourist visa assistance</strong>.
          </p>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h3 className={styles.subTitle}>Need Help With the Japan Tourist Visa Process?</h3>
          <p>
            Applying for a <strong>Japan tourist visa</strong> from India can seem complex—but you're not alone. At Global Visa Internationals, we offer full-service <strong>Japan tourist visa assistance</strong> to make your journey hassle-free and successful.
          </p>

          <b className={styles.subTitle}>Here’s how we simplify your Japan visa application:</b>
          <ol className={styles.serviceList}>
            <li>
              <h4 className={styles.subTitle}> Personalized Japan Visa Consultation</h4>
              <p>
                Every traveler's case is different. Our <strong>Japan visa consultancy</strong> team provides tailored guidance based on:
              </p>
              <ul>
                <li>Your travel history and purpose of visit</li>
                <li>Proof of funds and employment details</li>
                <li>Return intent and sponsorship (if applicable)</li>
              </ul>
              <p>We’ll help you understand exactly <strong>how to apply for Japan visa from India</strong> based on your unique case.</p>
            </li>

            <li>
              <h4 className={styles.subTitle}> Document Checklist & Review</h4>
              <p>
                Incorrect or missing documents are a major reason for visa rejection. Our experts help you gather and review:
              </p>
              <ul>
                <li>Valid passport, completed visa form, photographs</li>
                <li>Bank statements and financial proof</li>
                <li>Confirmed hotel bookings and itinerary</li>
                <li>Invitation or cover letters (if needed)</li>
              </ul>
              <p>We ensure your paperwork meets <strong>Japan tourist visa requirements</strong> and embassy standards.</p>
            </li>

            <li>
              <h4 className={styles.subTitle}>Japan Visa Application Form Assistance</h4>
              <p>Struggling with the Japan visa application form? Our team will:</p>
              <ul>
                <li>Help you fill the form correctly</li>
                <li>Guide you on the latest embassy requirements</li>
                <li>Check for consistency across all submitted details</li>
              </ul>
              <p>Leave no room for rejection with expert assistance from a trusted <strong>visa agent for Japan</strong>.</p>
            </li>

            <li>
              <h4 className={styles.subTitle}>Japan Visa Embassy Appointment Support</h4>
              <p>
                Some applicants need to schedule appointments at a <strong>Japan visa application center</strong> or consulate. We help with:
              </p>
              <ul>
                <li>Booking embassy/VFS appointments</li>
                <li>Preparing documents in the required format</li>
                <li>Step-by-step guidance until submission</li>
              </ul>
            </li>

            <li>
              <h4 className={styles.subTitle}>Japan Visa, Travel & Budget Planning (Bonus)</h4>
              <p>
                As part of our comprehensive <strong>Japan tourist visa consultancy</strong>, we also help you:
              </p>
              <ul>
                <li>Estimate trip costs including flights, stay, and daily expenses</li>
                <li>Get guidance on the best times to visit Japan</li>
                <li>Explore city-specific travel tips for Tokyo, Kyoto, Osaka, and more</li>
              </ul>
            </li>
          </ol>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <p className={styles.note}>
            Ready to explore Japan? Get expert help from Global Visa Internationals—your trusted <strong>Japan tourist visa consultancy</strong>. From paperwork to peace of mind, we’re here every step of the way.
          </p>

          <a href="/contact" className={styles.ctaButton}>
            Get Japan Visa Help Now
          </a>

          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals for Your Japan Tourist Visa?</h2>
          <p>
            At Global Visa Internationals, we specialize in simplifying the complex <strong>Japan tourist visa process</strong> for travelers from India. With years of experience and a client-first approach, we ensure you receive the right guidance at every step.
          </p>

          <ul>
            <li><strong>Personalized Guidance:</strong> Our experienced <strong>visa consultants in Bangalore</strong> offer one-on-one assistance tailored to your travel goals and background.</li>
            <li><strong>Expert Documentation Help:</strong> We ensure your application is complete, error-free, and compliant with current <strong>Japan visa requirements</strong>.</li>
            <li><strong> Hassle-Free Processing:</strong> We handle the paperwork and logistics so you can focus on planning your dream trip to Japan.</li>
            <li><strong> High Approval Rate:</strong> Our strong track record and deep embassy insights significantly boost your visa success chances.</li>
            <li><strong> Mock Interviews & Prep:</strong> We conduct visa mock interviews so you feel confident, especially for in-person consulate appointments.</li>
          </ul>

          <p>With over <strong>11+ years of experience</strong> as one of the most trusted <strong>visa consultancies in India</strong>, Global Visa Internationals has helped <strong>55,000+ clients</strong> secure visas and delivered <strong>75,000+ expert consultations</strong>. Whether you're traveling for leisure, family visits, or solo exploration, we provide unmatched support every step of the way.</p>

          <p>Let Global Visa Internationals assist you in navigating the <strong>Japan tourist visa application</strong> smoothly—and help you turn your dream of exploring Japan into a reality!</p>

          <p className={styles.note}><strong>Disclaimer:</strong> This service is provided by Global Visa Internationals, an independent visa consultancy. We are not affiliated with the Japanese Government or its official embassy.</p>

        </div>
        <div className={styles.formSection}>
          <VisaForm />
        </div>
      </div>
      <section id='Client Reviews'>
        <h2 className={styles.subtitle}>Client Reviews</h2>
        <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
      </section>
    </>
  );
}