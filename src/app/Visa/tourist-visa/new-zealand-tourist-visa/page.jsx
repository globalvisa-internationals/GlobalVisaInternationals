
import styles from "@/Components/Visa.module.css";
import Head from "next/head";
import VisaForm from "@/Components/VisaForm";


export const metadata = {
  title: "New Zealand Tourist Visa Consultants in Bangalore | Global Visa Internationals",
  description:
    "Apply for a New Zealand Tourist Visa with expert assistance from Global Visa Internationals. 11+ years of experience in smooth documentation, faster approvals, and travel guidance.",
  keywords:
    "New Zealand tourist visa, New Zealand visa consultants in Bangalore, New Zealand visitor visa from India, how to apply New Zealand visa, New Zealand travel visa assistance",
  robots: "index, follow",
  alternates: {
    canonical:
      "https://www.globalvisainternationals.com/Visa/tourist-visa/new-zealand",
  },
  openGraph: {
    type: "website",
    title:
      "Apply for New Zealand Tourist Visa from India | Global Visa Internationals",
    description:
      "Trusted visa agents for New Zealand in Bangalore. Expert documentation, embassy interview prep, and high visa success rate.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/new-zealand",
    images: [
      {
        url: "https://www.globalvisainternationals.com/images/new-zealand-tourist-visa-banner.webp",
        alt: "New Zealand Tourist Visa Assistance",
      },
    ],
    siteName: "Global Visa Internationals",
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalvisainternationals",
    title: "New Zealand Tourist Visa Experts – Global Visa Internationals",
    description:
      "Planning a trip to New Zealand? Get full visa support from trusted consultants in Bangalore.",
    images: [
      "https://www.globalvisainternationals.com/images/new-zealand-tourist-visa-banner.webp",
    ],
  },
};

export default function NewZealand() {

  const pageUrl = metadata.alternates.canonical;

  const breadcrumbJsonLd = {
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
        name: "New Zealand Tourist Visa",
        item: pageUrl,
      },
    ],
  };

  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Global Visa Internationals",
    url: "https://www.globalvisainternationals.com",
    logo: "https://www.globalvisainternationals.com/gvilogo.png",
    description:
      "Expert New Zealand Tourist Visa Consultants in Bangalore. Complete documentation, application submission, and personalized guidance.",
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
  };

  const touristAttractionsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Tourist Attractions in New Zealand",
    itemListElement: [
      {
        "@type": "TouristAttraction",
        name: "Milford Sound",
        description:
          "A stunning fjord in Fiordland National Park, famous for waterfalls and boat cruises.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/01/Milford_Sound_Panorama.jpg",
        url: "https://www.newzealand.com/in/milford-sound/",
      },
      {
        "@type": "TouristAttraction",
        name: "Rotorua Geothermal Parks",
        description:
          "Known for geysers, hot springs, and Maori culture experiences in the North Island.",
        image:
          "https://en.wikipedia.org/wiki/Champagne_Pool#/media/File:ChampagnePool-Wai-O-Tapu_rotated_MC.jpg",
        url: "https://en.wikipedia.org/wiki/Champagne_Pool",
      },
      {
        "@type": "TouristAttraction",
        name: "Hobbiton Movie Set",
        description:
          "The iconic movie set from The Lord of the Rings and The Hobbit, located in Matamata.",
        image:
          "https://en.wikipedia.org/wiki/Hobbiton_Movie_Set#/media/File:Waterhouse_Lake_Front.jpg",
        url: "https://en.wikipedia.org/wiki/Hobbiton_Movie_Set",
      },
      {
        "@type": "TouristAttraction",
        name: "Mount Cook National Park",
        description:
          "Home to New Zealand's highest mountain, perfect for hiking, stargazing, and photography.",
        image:
          "https://en.wikipedia.org/wiki/Aoraki_/_Mount_Cook_National_Park#/media/File:Hooker_Valley_in_front_of_Mount_Cook_Range.jpg",
        url: "https://en.wikipedia.org/wiki/Aoraki_/_Mount_Cook_National_Park",
      },
      {
        "@type": "TouristAttraction",
        name: "Franz Josef Glacier",
        description:
          "A spectacular glacier on the West Coast, offering guided hikes and helicopter tours.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3a/Franz_josef_Glacier_LC0250.jpg",
        url: "https://en.wikipedia.org/wiki/Franz_Josef_Glacier",
      },
    ],
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
        <img src="/images/new-zealand-tourist-visa-banner.webp" alt="new zealand tourist visa banner" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>

        <div className={styles.VisaData}>



          <section>
            <h1 className={styles.subTitle}>Apply for New Zealand Tourist Visa from India with Global Visa Internationals</h1>
            <p>Planning a trip to New Zealand? Indian citizens need to apply in advance for a New Zealand tourist visa or visitor visa before traveling. Whether you're dreaming of the scenic landscapes of Queenstown, the culture of Rotorua, or the city life in Auckland, Global Visa Internationals simplifies the process of getting your New Zealand visa from India. Our expert consultants assist you in completing the New Zealand visa application form, preparing your documents, and ensuring every requirement is met — increasing your chances of approval from VFS New Zealand India.</p>
            <p>✅ Start your application now with expert help from Global Visa Internationals — <a href="https://www.globalvisainternationals.com/contact">Contact Us</a></p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Comprehensive Assistance for Indian Citizens Applying from Delhi, Mumbai & Bangalore</h2>
            <p>We provide visa support services across India, including New Zealand visa assistance from Mumbai, Delhi, and Bangalore. Our consultants are familiar with city-specific appointment timelines at VFS Global and help schedule your New Zealand visa appointment on time. From the initial New Zealand visa documents checklist to your NZ visitor visa ITR requirements, we’ll ensure everything is aligned with immigration expectations. Unsure about bank balance requirements or NZ visa sponsorship letters? Our team guides both self-sponsored and sponsored applicants through every step.</p>
            <p>📍 Apply for your New Zealand visa from Bangalore, Delhi, or Mumbai with us – <a href="https://www.globalvisainternationals.com/contact">Get Started Today</a></p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Stay Ahead with Proper Documentation & Avoid Rejections</h2>
            <p>To apply for your New Zealand visitor visa from India, you need a valid passport, recent photos, a detailed travel itinerary, and proof of funds. This includes bank statements, ITRs, a possible sponsorship letter, and even a police certificate or medical certificate depending on your case. Many visa rejections happen due to missing or inconsistent documents. Common New Zealand visa rejection reasons in India include insufficient funds, lack of clear travel intent, or incorrect information. At Global Visa Internationals, we review your cover letter, itinerary samples, and ensure you're showing genuine tourist intent — helping reduce the risk of delays, visa pending issues, or outright rejection.</p>
            <p>🛡️ Don’t risk rejection — Get your documents reviewed by our visa experts for FREE! <a href="https://www.globalvisainternationals.com/contact">Book a Consultation</a></p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Know the Fees, Timeline & Financial Criteria</h2>
            <p>The New Zealand visa fee for Indian applicants varies depending on the visa type and exchange rate (NZD to INR). Additionally, you must pay the New Zealand IVL fee for your visitor visa. Processing typically takes 15–30 days, but timelines can shift based on seasonal demand. We help you understand the New Zealand visa turnaround time from India, and track your application’s status post-submission. Need to show adequate funds? Our team clarifies the New Zealand visa proof of funds requirement and helps you present a strong financial profile — whether you're employed, self-employed, or traveling as a digital nomad or under a remote work visitor visa.</p>
            <p>💰 Transparent fee guidance and timeline tracking — <a href="https://www.globalvisainternationals.com/contact">Talk to a Visa Advisor Now</a></p>
          </section>

          <section>
            <h2 className={styles.subTitle}>Trusted Visa Partner for Indian Travelers Since 2017</h2>
            <p>Whether you're applying for a New Zealand multiple-entry tourist visa, a short-term visitor visa, or traveling solo, with family, or as a remote worker — we’ve got you covered. We also support clients navigating visa quota systems, pending delays, or appeals after rejection. Since 2017, Global Visa Internationals has helped thousands of Indians visit their dream destinations with the right visa support. We’re here to help you travel with confidence.</p>
            <p>🌏 Ready to explore New Zealand? Apply stress-free with Global Visa Internationals – <a href="https://www.globalvisainternationals.com/contact">Apply Now</a></p>
          </section>
          <p>New Zealand is an island nation in the southwestern Pacific Ocean, is known for its stunning natural landscapes, vibrant Māori culture, and adventure tourism. It consists of two main landmasses—the North Island and the South Island—and numerous smaller islands. With its diverse geography ranging from snow-capped mountains and fjords to beaches and volcanic plateaus, New Zealand is a dream destination for nature lovers and thrill-seekers alike.</p>
          <h2 className={styles.subTitle}>Top Tourist Places In New Zealand</h2>
          <p> Discover the best places to visit in New Zealand:</p>
          <ol>
            <li>Queenstown – Adventure capital with bungee jumping, skydiving, and stunning alpine views.</li>

            <li>Rotorua – Geothermal wonders and Maori cultural experiences.</li>

            <li>Auckland – A cosmopolitan city with beautiful harbors, shopping, and dining.</li>

            <li>Milford Sound – Spectacular fjord landscapes and wildlife.</li>

            <li>Waiheke Island – Wine tasting, beaches, and boutique art galleries.</li>

            <li>Mount Cook National Park – Perfect for hiking, stargazing, and scenic photography.</li>

            <li>Lake Tekapo – Famous for its turquoise waters and Church of the Good Shepherd.</li>

            <li>Franz Josef & Fox Glaciers – Glacier walks and heli-hikes through icy terrain.</li>
          </ol>

          <h2 className={styles.subTitle}>Cost of Traveling to New Zealand from India (2025 Estimate)</h2>
          <p>Planning your travel budget? Here's an average breakdown for a 10-day trip to New Zealand from India:</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Estimated Cost (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Round-trip Flights</td>
                <td>₹70,000 – ₹1,10,000</td>
              </tr>
              <tr>
                <td>Accommodation</td>
                <td>₹4,000 – ₹10,000/night</td>
              </tr>
              <tr>
                <td>Food & Dining</td>
                <td>	₹1,000 – ₹2,000/day</td>
              </tr>
              <tr>
                <td>Transportation</td>
                <td>₹10,000 – ₹20,000 (car rentals, local travel)</td>
              </tr>
              <tr>
                <td>Activities & Tours</td>
                <td>₹20,000 – ₹40,000</td>
              </tr>
              <tr>
                <td>Visa Application</td>
                <td>₹7,500 – ₹12,000</td>
              </tr>
            </tbody>

          </table>



          <h2 className={styles.subTitle}>Top Reasons to Visit New Zealand in 2025</h2>
          <p>Why choose New Zealand for your next vacation?</p>

          <ul>
            <li>Nature Lover’s Paradise – Lush forests, glaciers, lakes, and mountains.</li>
            <li>Adventure Sports – Skydiving, bungee jumping, white-water rafting.</li>
            <li>Safe & Tourist-Friendly – Ranked as one of the safest countries to travel.</li>
            <li>Rich Maori Culture – Unique traditions, food, and performances.</li>
            <li>Filming Locations – Visit Hobbiton and other iconic LOTR film sets.</li>
            <li>Planning your first overseas trip? New Zealand is the perfect destination for families, couples, and solo travelers alike.</li>
          </ul>
          <p className={styles.note}>Planning your first overseas trip? New Zealand is the perfect destination for families, couples, and solo travelers alike.</p>




          <h2 className={styles.subTitle}>How to Apply for a New Zealand Tourist Visa from India</h2>
          <p>Global Visa Internationals offers complete support for your New Zealand visitor visa application.</p>
          <h3 className={styles.subTitle}>New Zealand Tourist Visa Requirements:</h3>
          <ul>
            <li>Valid passport (minimum 6 months validity)</li>
            <li>Recent passport-sized photographs</li>
            <li>Travel itinerary and accommodation bookings</li>
            <li>Proof of financial capacity</li>
            <li>Employment or business proof</li>
            <li>Cover letter and visa application form</li>
          </ul>
          <h3 className={styles.subTitle}>Visa Application Process:</h3>
          <ul>
            <li>Initial Consultation & Eligibility Check</li>
            <li>Document Collection & Review</li>
            <li>Filling the Visa Application Form</li>
            <li>Booking Appointments (if required)</li>
            <li>Submitting the Application Online or via VAC</li>
            <li>Visa Decision & Passport Collection</li>
          </ul>
          <p className={styles.note}>We handle everything from visa documentation to mock interview sessions—making the process stress-free and successful.</p>




          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals?</h2>
          <p>At Global Visa Internationals, we provide:</p>
          <ul>
            <li>End-to-End Visa Assistance</li>
            <li> Expert Guidance on Documentation</li>
            <li> Mock Interview Preparation</li>
            <li>Personalized One-on-One Consultations</li>
            <li>Tracking & Updates Throughout the Visa Process</li>
          </ul>
          <p>Let us take care of the complex paperwork so you can focus on planning your dream trip!</p>
          <h4 className={styles.subTitle}> Contact us today to speak with a visa expert or book a free consultation.</h4>
          <h3 className={styles.subTitle}> Serving clients PAN India – with a strong presence in Bangalore.</h3>
          <h2 className={styles.subTitle}>Get in Touch for New Zealand Tourist Visa Assistance</h2>

          <p className={styles.note}> This service is provided by Global Visa Internationals, an independent consultancy. We are not affiliated with the Australian Government or any embassy.</p>
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