
import styles from "@/Components/Visa.module.css";
import VisaForm from "@/Components/VisaForm";
import React from 'react';
import Head from "next/head";

export const metadata = {
  title: "Get Your Singapore Tourist Visa in Bangalore | Global Visa Internationals",
  description: "Planning a trip to Singapore? Let Global Visa Internationals simplify your visa process. Trusted consultants in Bangalore offering end-to-end visa support with fast approvals.",
  keywords: "Singapore tourist visa Bangalore, apply Singapore visa India, Singapore travel visa assistance, Singapore visa agents, tourist visa consultants for Singapore",
  robots: "index, follow",
  alternates: { canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/singapore-tourist-visa", },
  openGraph: {
    type: "website",
    title: "Fast & Reliable Singapore Tourist Visa Services in Bangalore",
    description: "Expert assistance for your Singapore tourist visa application. Smooth process, accurate documentation, and high approval rate. Start your Singapore journey with confidence.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/singapore-tourist-visa",
    images: [
      {
        url: "https://www.globalvisainternationals.com/tourist-visa/Singapore-Visa-Assistance-GVI.jpg",
        alt: "Apply for Singapore Tourist Visa - Global Visa Internationals",
      }
    ],
    siteName: "Global Visa Internationals"
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalvisainternationals",
    title: "Apply for Singapore Tourist Visa from Bangalore - Trusted Experts",
    description: "Need a Singapore tourist visa? Get complete assistance from Global Visa Internationals - Bangalore's preferred visa consultants.",
    images: ["https://www.globalvisainternationals.com/tourist-visa/Singapore-Visa-Assistance-GVI.jpg"]
  }
};


export default function Dubai() {
  const pageUrl = metadata.alternates.canonical;

  const TouristAttraction = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Tourist Attractions in Singapore",
    "itemListElement": [
      {
        "@type": "TouristAttraction",
        "name": "Marina Bay Sands",
        "description": "Iconic luxury hotel with a rooftop infinity pool and skypark offering panoramic views of Singapore.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/74/Marina_Bay_Sands_in_the_evening_-_20101120.jpg",
        "url": "https://www.marinabaysands.com/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Gardens by the Bay",
        "description": "A futuristic park featuring Supertree Grove, Cloud Forest, and Flower Dome, showcasing exotic plants and sustainable architecture.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Gardens_by_the_Bay%2C_Singapore_-_20120626.jpg",
        "url": "https://www.gardensbythebay.com.sg/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Sentosa Island",
        "description": "Popular island resort with beaches, theme parks, and attractions like Universal Studios Singapore.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Sentosa_Beach_Singapore.jpg",
        "url": "https://www.sentosa.com.sg/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Merlion Park",
        "description": "Famous waterfront park featuring the iconic Merlion statue and scenic views of Marina Bay.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Merlion_and_the_city_skyline%2C_Singapore_-_20120722.jpg",
        "url": "https://www.visitsingapore.com/see-do-singapore/recreation-leisure/viewpoints/merlion-park/"
      },
      {
        "@type": "TouristAttraction",
        "name": "Singapore Flyer",
        "description": "One of the world's largest observation wheels offering spectacular cityscape views.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Singapore_Flyer_view.jpg",
        "url": "https://www.singaporeflyer.com/"
      }
    ]
  };

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
        "name": "Singapore Tourist Visa",
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
    "description": "Expert Singapore Tourist Visa Consultants in Bangalore. We offer full support for Singapore visa documentation, application filing, and personalized guidance for travelers.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(TouristAttraction) }}
        />
      </Head>

      <div className={styles.imageContainer}>
        <img src="/tourist-visa/Singapore-Visa-Assistance-GVI.jpg" alt="Singapore Turist Visa Global Visa-Internationals" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>

        <div className={styles.VisaData}>
          <h1 className={styles.Title}>Apply for a Singapore Tourist Visa with Expert Help from Global Visa Internationals</h1>
          <p className={styles.card}>Planning your dream vacation to Singapore? Whether you're traveling for leisure, sightseeing, or to visit family and friends, obtaining a Singapore tourist visa is the first step. At <strong>Global Visa Internationals,</strong> we provide complete Singapore visa assistance for Indian citizens. With over 11 years of expertise, we've helped thousands of travelers successfully apply for Singapore visas from India, including popular cities like Bangalore, Chennai, and Mumbai.</p>
          <p className={styles.card1}>Our team of authorised Singapore visa agents in India offers end-to-end services including documentation support, application review, Form 14A completion, cover letter drafting, and detailed Singapore visa checklists tailored for Indian applicants. Whether you need a Singapore visa for tourism, a short-term visit pass, or help with your Singapore e-visa application, our consultants ensure a smooth, error-free process. We understand common Singapore visa rejection reasons and help you avoid costly mistakes.</p>
          <p className={styles.card}>Wondering how long it takes? The typical Singapore tourist visa processing time is around 3-5 working days, though it may vary. The Singapore visa fee is approximately SGD 30, and our team will walk you through all visa application charges with complete transparency. If you're in a rush, we can help with quicker turnaround times where possible, depending on the embassy and submission schedule.</p>
          <p className={styles.card1}>Whether you're applying online or need in-person visa documentation assistance, our expert team offers personalized support. From navigating Singapore visa delays to writing a visa invitation letter, we ensure every requirement is met accurately. We're recognized as one of the best Singapore visa consultants in India for our reliable service and high approval rates. We also assist with issues raised on platforms like MakeMyTrip and Atlys, providing independent support when you need it most.</p>
          <p className={styles.card}>Don't leave your travel plans to chance. Choose <strong>Global Visa Internationals,</strong> your trusted Singapore visa consultancy service in India. Contact us today to get started on your Singapore visa application process, and travel with peace of mind knowing you're backed by professional, end-to-end visa support.</p>

          <p className={styles.card1}>Singapore, a dynamic island nation, captivates visitors with its stunning Singapore skyline, verdant Singapore gardens, and a rich tapestry of Singapore culture. Whether you envision yourself exploring futuristic landscapes or savoring diverse culinary experiences, a Singapore holiday promises an unforgettable escape. Allow Global Visa Internationals to streamline your travel by providing expert assistance with your Singapore tourist visa application. Contact Global Visa Internationals today to begin your journey!</p>

          <h3 className={styles.subTitle}>Discover the Must-See Singapore Attractions</h3>
          <p>Embark on a journey to discover the iconic landmarks and hidden gems that define Singapore's unique charm:</p>

          <ul >
            <li className={styles.card}><b className={styles.strong}>Singapore attractions,</b> Immerse yourself in the mesmerizing Supertree Grove, discover the wonders of the Flower Dome and Cloud Forest conservatories, and witness the enchanting Garden Rhapsody light and sound spectacle.  Contact Global Visa Internationals for a smooth visa process to experience this!</li>
            <li className={styles.card1}><b className={styles.strong}>Singapore skyline: </b> Marvel at the architectural grandeur of Marina Bay Sands, capture breathtaking panoramic views of the Singapore skyline from the Sands SkyPark Observation Deck, and experience the excitement of its renowned casino. </li>
            <li className={styles.card}><b className={styles.strong}>Sentosa Island:</b> Escape to the recreational haven of Sentosa Island, offering thrilling adventures at Universal Studios Singapore, serene beaches, the captivating S.E.A. Aquarium, and the iconic Merlion statue.</li>
            <li className={styles.card1}><b className={styles.strong}>Orchard Road Shopping:</b> Indulge in a world-class Orchard Road shopping experience along this prestigious boulevard, featuring luxurious boutiques, upscale department stores, and vibrant shopping malls.</li>
            <li className={styles.card}><b className={styles.strong}>Singapore Food at Hawker Centres: </b>Immerse yourself in Singapore's vibrant culinary scene by exploring authentic Singapore food at local hawker centres, offering a delectable array of affordable and diverse dishes.</li>
            <li className={styles.card1}><b className={styles.strong}>Little India Singapore and Chinatown Singapore - Little India Singapore:</b> Experience the rich Singapore culture by wandering through the colorful streets of Little India Singapore and Chinatown Singapore, filled with ornate temples, bustling markets, and authentic cuisine.</li>
            <li className={styles.card}><b className={styles.strong}>Singapore Botanic Gardens:</b> Unwind in the lush greenery of the Singapore Botanic Gardens, a UNESCO World Heritage Site, featuring the stunning National Orchid Garden and serene walking trails.</li>
            <li className={styles.card1}><b className={styles.strong}>Singapore Flyer:</b> Take a ride on the Singapore Flyer, one of the world's largest observation wheels, for breathtaking views of the city skyline and Marina Bay.</li>
            <li className={styles.card}><b className={styles.strong}>Clarke Quay:</b> Experience the vibrant nightlife of Clarke Quay, a riverside quay filled with restaurants, bars, and clubs, perfect for dining and entertainment.</li>
            <li className={styles.card1}><b className={styles.strong}>Singapore Zoo:</b> Discover the wonders of wildlife at the Singapore Zoo, renowned for its open-concept enclosures and diverse animal exhibits.</li>
            <li className={styles.card}><b className={styles.strong}>Marina Bay Sands SkyPark:</b> Visit the Marina Bay Sands SkyPark for panoramic views of the city skyline, gardens, and waterfront.</li>
            <li className={styles.card1}><b className={styles.strong}>Changi Airport:</b> Experience the world-class facilities of Changi Airport, including the Jewel Changi Airport with its stunning indoor waterfall and lush gardens.</li>
            <li className={styles.card}><b className={styles.strong}>Singapore Night Safari:</b> Embark on a unique adventure at the Singapore Night Safari, the world's first nocturnal zoo, where you can observe wildlife in their natural habitat.</li>
            <li className={styles.card1}><b className={styles.strong}>Raffles Hotel Singapore:</b> Visit the iconic Raffles Hotel Singapore, a colonial-style luxury hotel known for its historical significance and the famous Singapore Sling cocktail.</li>
            <li className={styles.card}><b className={styles.strong}>East Coast Park:</b> Relax at East Coast Park, a popular recreational area with beaches, cycling paths, and water sports activities.</li>
            <li className={styles.card1}><b className={styles.strong}>Singapore ArtScience Museum:</b> Explore the futuristic ArtScience Museum at Marina Bay Sands, featuring innovative exhibitions that blend art and science.</li>
            <li className={styles.card}><b className={styles.strong}>Singapore River Cruise:</b> Take a scenic cruise along the Singapore River to admire the city's skyline and historical landmarks.</li>
            <li className={styles.card1}><b className={styles.strong}>Jurong Bird Park:</b> Visit the Jurong Bird Park, home to a diverse collection of birds and stunning aviaries.</li>
            <li className={styles.card}><b className={styles.strong}>Esplanade - Theatres on the Bay:</b> Experience the vibrant arts scene at Esplanade, a performing arts center with theaters, concert halls, and outdoor spaces.</li>
            <li className={styles.card1}><b className={styles.strong}>Singapore Science Centre:</b> Engage in interactive exhibits and educational experiences at the Singapore Science Centre.</li>
            <li className={styles.card}><b className={styles.strong}>Singapore River Safari:</b> Explore the River Safari, a wildlife park featuring river-themed exhibits and the Giant Panda Forest.</li>
            <li className={styles.card1}><b className={styles.strong}>Singapore National Gallery:</b> Discover Singapore's art and culture at the National Gallery, showcasing a vast collection of Southeast Asian art.</li>
          </ul>


          <h3 className={styles.subTitle}>Discover the Reasons to Visit Singapore</h3>
          <p className={styles.card}>Singapore's unique blend of modernity, cultural richness, and natural beauty makes it a compelling destination for all types of travelers:</p>
          <ol>
            <li className={styles.card1}><strong>Safe Travel Singapore and Clean City Singapore:</strong> Singapore is globally recognized for its exceptionally low crime rate and remarkably clean environment, offering visitors unparalleled peace of mind.</li>
            <li className={styles.card}><strong>Singapore Culture Diversity and Multicultural Singapore:</strong> Immerse yourself in Singapore's vibrant Singapore culture diversity, a harmonious blend of Chinese, Malay, Indian, and Western influences evident in its cuisine, festivals, and architecture, creating a truly multicultural Singapore.</li>
            <li className={styles.card1}><strong>Top Attractions Singapore and Singapore Sightseeing:</strong> From futuristic Singapore gardens to thrilling theme parks, Singapore boasts a wealth of top attractions Singapore ensuring a memorable Singapore sightseeing experience.</li>
            <li className={styles.card}><strong>Singapore Food Scene and Best Food in Singapore:</strong> Indulge in the diverse and delectable Singapore food scene, ranging from Michelin-starred establishments to the best food in Singapore found in its bustling hawker centres.</li>
            <li className={styles.card1}><strong>Singapore Changi Airport and Transportation in Singapore:</strong> Benefit from Singapore's Changi Airport, a major international hub offering seamless global connections, complemented by an excellent and efficient transportation in Singapore network.</li>
            <li className={styles.card}><strong>Parks in Singapore and Singapore Gardens:</strong> Despite its modern urban landscape, Singapore boasts numerous lush parks in Singapore and stunning Singapore gardens, providing refreshing escapes within the city. </li>
          </ol>

          <h2 className={styles.subTitle}> Singapore Travel Cost Guide - May 2025</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Estimated Cost (SGD)</th>
                <th>Estimated Cost (INR)</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Category">Flights (One-way)</td>
                <td data-label="SGD">S$120-S$380</td>
                <td data-label="INR">₹7,490-₹22,000</td>
                <td data-label="Details">From major Indian cities - <a href="https://www.airindia.com/en-in/book-flights/flights-to-singapore?utm_source=chatgpt.com" target="_blank">Air India</a></td>
              </tr>
              <tr>
                <td data-label="Category">Accommodation (Per night)</td>
                <td data-label="SGD">S$20-S$423</td>
                <td data-label="INR">₹1,250-₹26,000</td>
                <td data-label="Details"><a href="https://www.booking.com/city/sg/singapore.html?utm_source=chatgpt.com" target="_blank">Booking.com</a>, <a href="https://www.agoda.com/country/singapore.html?utm_source=chatgpt.com" target="_blank">Agoda</a></td>
              </tr>
              <tr>
                <td data-label="Category">Food (Per day)</td>
                <td data-label="SGD">S$15-S$100</td>
                <td data-label="INR">₹950-₹6,300</td>
                <td data-label="Details">Hawker to mid-range - <a href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=Singapore&utm_source=chatgpt.com" target="_blank">Numbeo</a></td>
              </tr>
              <tr>
                <td data-label="Category">Public Transport</td>
                <td data-label="SGD">S$4-S$10</td>
                <td data-label="INR">₹250-₹630</td>
                <td data-label="Details"><a href="https://www.ptc.gov.sg/fare-regulation/bus-rail/fare-structure?utm_source=chatgpt.com" target="_blank">Public Transport Council</a></td>
              </tr>
              <tr>
                <td data-label="Category">Attractions</td>
                <td data-label="SGD">S$10-S$56</td>
                <td data-label="INR">₹630-₹3,500</td>
                <td data-label="Details"><a href="https://www.singapore-tickets.com/?utm_source=chatgpt.com" target="_blank">Singapore Tickets</a></td>
              </tr>
              <tr>
                <td data-label="Category">Visa (Indian Citizens)</td>
                <td data-label="SGD">S$30 + S$10.50</td>
                <td data-label="INR">₹1,900 + ₹650</td>
                <td data-label="Details"><a href="https://www.mfa.gov.sg/Overseas-Mission/Mumbai/Consular-Services/Visa-Information?utm_source=chatgpt.com" target="_blank">Singapore MFA</a></td>
              </tr>
            </tbody>
          </table>

          <h2 className={styles.subTitle}>Navigating the Japan Tourist Visa Process</h2>
          <p className={styles.card1}>Obtaining a tourist visa for Japan involves several key steps. While the specific requirements may vary based on your nationality, the general process typically includes:</p>
          <ol>
            <li className={styles.card}><strong>Determining Visa Requirements:</strong> Check the website of the Japanese Ministry of Foreign Affairs or the Japanese embassy/consulate in your country to confirm if you need a visa and the specific requirements for your nationality.</li>
            <li className={styles.card1}><strong>Gathering Required Documents:</strong> This usually includes a valid passport, visa application form, passport-sized photographs, proof of sufficient funds, travel itinerary, and hotel booking confirmations. Additional documents may be required depending on your circumstances.</li>
            <li className={styles.card}><strong>Submitting Your Application:</strong> You will typically need to submit your application in person at the Japanese embassy or consulate in your country. Some countries may have authorized visa application centers.</li>
            <li className={styles.card1}><strong>Visa Interview (if required):</strong> In some cases, you may be required to attend an interview as part of the visa application process.1 </li>
            <li className={styles.card}><strong>Visa Processing:</strong> The processing time for a Japan tourist visa can vary. It's crucial to apply well in advance of your intended travel dates.</li>
            <li className={styles.card1}><strong>Receiving Your Visa:</strong> Once your application is approved, your visa will be affixed to your passport.</li>
          </ol>
          <p className={styles.card}>The Japan visa process can seem complex, but Global Visa Internationals is here to simplify it for you.</p>

          <h3 className={styles.subTitle}>Let Global Visa Internationals Be Your Guide to Japan Visa Application</h3>
          <p className={styles.card}>Planning your dream trip to Japan should be exciting, not stressful. At <strong>Global Visa Internationals,</strong> we provide comprehensive assistance to ensure a smooth and successful Japan tourist visa application process.</p>
          <b className={styles.strong}>Our Japan Visa Services include:</b>
          <ul className={styles.card1}>
            <li>Personalized guidance on Japan visa requirements based on your nationality.</li>
            <li>Assistance with gathering and preparing the necessary documentation for your Japan tourist visa.</li>
            <li>Thorough review of your application to minimize errors and delays.</li>
            <li>Mock interviews for visa applications to help you feel confident and prepared.</li>
            <li>One-on-one consultations to address all your questions and concerns about traveling to Japan and the visa process.</li>
          </ul>
          <p className={styles.note}>Don't let the complexities of the Japan visa application stand in the way of your adventure. Contact Global Visa Internationals today for expert support and personalized assistance. Let us help you turn your dream of exploring Japan into a reality!</p>


          <h1 className={styles.Title}>Navigating Singapore Visa Requirements for Indian Citizens with Global Visa Internationals</h1>
          <p className={styles.card}>Planning your dream Singapore holiday? For Indian citizens holding ordinary passports, a valid Singapore tourist visa is essential before you embark on your journey to explore the stunning Singapore skyline and vibrant Singapore culture. <strong className={styles.strong}>Global Visa Internationals</strong> is here to simplify this crucial step, ensuring a smooth and stress-free visa application process. <strong className={styles.strong}>Don't take the risk of visa rejection; contact Global Visa Internationals for expert assistance and guidance!</strong></p>

          <h2 className={styles.subTitle}>Understanding the Key Singapore Visa Requirements:</h2>
          <p>To kickstart your Singapore tourist visa application, you'll typically need to prepare the following Singapore visa documents. Let <strong className={styles.strong}>Global Visa Internationals</strong> guide you through each step to ensure your application is complete and accurate:</p>
          <ul>
            <li className={styles.card1}><strong className={styles.strong}>Passport:</strong> A valid passport with at least six months of validity from your intended date of entry into Singapore and a minimum of two blank pages.</li>
            <li className={styles.card}><strong className={styles.strong}>Application Form:</strong> A meticulously completed and signed Singapore visa application form (Form 14A). Our experts at <strong className={styles.strong}>Global Visa Internationals</strong> will ensure this form is filled out correctly to avoid any potential delays.</li>
            <li className={styles.card1}><strong className={styles.strong}>Photographs:</strong> Recent passport-sized color photographs (usually two) taken against a white background, adhering to the specific size requirements set by the Singaporean authorities (e.g., 35mm x 45mm).</li>
            <li className={styles.card}><strong className={styles.strong}>Cover Letter:</strong> A well-drafted personal covering letter clearly stating the purpose of your visit to Singapore, the intended duration of your stay, and a detailed outline of your travel plans. If you are employed, this letter might need to be on your company's official letterhead.</li>
            <li className={styles.card1}><strong className={styles.strong}>Financial Proof:</strong> Original bank statements for the last six months, duly attested by a bank official, demonstrating sufficient funds to cover your expenses during your Singapore holiday (please note that some sources suggest a minimum balance of approximately ₹80,000).</li>
            <li className={styles.card}><strong className={styles.strong}>Confirmed Return Ticket:</strong> Proof of your confirmed return or onward flight ticket, indicating your departure from Singapore.</li>
            <li className={styles.card1}><strong className={styles.strong}>Accommodation Proof:</strong> Confirmed hotel booking details, including the complete address and contact information of your accommodation in Singapore.</li>
            <li className={styles.card}><strong className={styles.strong}>Form V39A (Letter of Introduction for Visa Application - LOI):</strong> This form might be a mandatory requirement and typically needs to be issued by a local contact in Singapore, who must be a Singapore citizen or a Permanent Resident. <strong className={styles.strong}>Global Visa Internationals</strong> can provide guidance on this requirement.</li>
            <li className={styles.card1}><strong className={styles.strong}>Other Supporting Documents:</strong> Depending on your individual circumstances (such as employment status, business ownership, or student status), additional Singapore visa documents like salary slips, business registration certificates, or a No Objection Certificate from parents might be necessary.</li>
          </ul>

          <h2 className={styles.subTitle}>How to Apply for Your Singapore Visa with Global Visa Internationals (Singapore Visa Online Application):</h2>
          <p className={styles.card}>The Singapore High Commission in India mandates that all visa applications be submitted through authorized visa agents. <strong className={styles.strong}>Global Visa Internationals</strong> is your trusted partner in navigating this process seamlessly. Here's how we assist you with your Singapore visa online application:</p>
          <ul>
            <li><strong className={styles.strong}>Expert Consultation:</strong> Our knowledgeable consultants will provide you with personalized guidance based on your specific travel needs and circumstances. Contact Global Visa Internationals today to schedule your consultation.
            </li>
            <li className={styles.card1}><strong className={styles.strong}>Authorized Agent Assistance:</strong> We act as your authorized visa agent, managing the entire application process on your behalf.</li>
            <li className={styles.card}><strong className={styles.strong}>Online Application Support:</strong> We will assist you in accurately completing the online Singapore visa application form, ensuring all necessary details are correctly filled.</li>
            <li className={styles.card1}><strong className={styles.strong}>Document Guidance and Upload:</strong> Our team will provide you with a comprehensive checklist of the required Singapore visa documents and guide you on how to properly scan and upload them in the correct format (usually PDF or JPG).</li>
            <li className={styles.card}><strong className={styles.strong}>Visa Fee Payment:</strong> We will facilitate the online visa fee payment, ensuring a secure and hassle-free transaction.</li>
            <li className={styles.card1}><strong className={styles.strong}>Passport Handling (If Required):</strong> In cases where the original passport is required for stamping, we will provide clear instructions on how to securely courier it to the appropriate processing center.</li>
            <li className={styles.card}><strong className={styles.strong}>Submission to ICA:</strong> <strong className={styles.strong}>Global Visa Internationals</strong> will meticulously review your application and supporting documents before submitting them to the Immigration & Checkpoints Authority (ICA) of Singapore on your behalf.</li>
            <li className={styles.card1}><strong className={styles.strong}>Regular Application Updates:</strong> We will keep you informed about the progress of your Singapore visa application, providing you with peace of mind throughout the process.</li>
            <li className={styles.card}><strong className={styles.strong}>Visa Retrieval Guidance:</strong> Once your Singapore visa is approved, we will provide you with clear instructions on how to receive your e-visa, which you will need to print and carry with your passport during your travel.</li>
          </ul>

          <h2 className={styles.subTitle}>Understanding Singapore Visa Processing Time:</h2>
          <p className={styles.card1}>The typical Singapore visa processing time for Indian citizens is approximately <strong className={styles.strong}>3 to 5 working days,</strong>excluding the day of submission, weekends, and Singaporean public holidays. However, it's important to note that processing times can vary based on individual cases and the volume of applications received by the ICA. To avoid any last-minute stress, we strongly advise you to apply for your Singapore tourist visa at least two weeks before your intended travel date. Contact Global Visa Internationals for timely processing assistance.</p>

          <h2 className={styles.subTitle}>Understanding the Singapore Visa Cost (Tourist Visa Fees Singapore):</h2>
          <p className={styles.card1}>The total Singapore visa cost for Indian citizens typically comprises a non-refundable visa processing fee levied by the ICA and a service charge by the authorized agent, such as <strong className={styles.strong}>Global Visa Internationals</strong>.</p>
          <ul className={styles.card}>
            <li>The standard <strong className={styles.strong}>visa processing fee is usually around INR 1,900</strong>.</li>
            <li><strong className={styles.strong}>Global Visa Internationals</strong> offers competitive service charges for our expert assistance. For detailed information on our service fees, please fill out the form, and our experts will contact you immediately.</li>
          </ul>
          <p className={styles.card1} >Therefore, the overall cost for your Singapore tourist visa will be the sum of these two components. Contact Global Visa Internationals for transparent and accurate information regarding the tourist visa fees Singapore.</p>

          <h2 className={styles.subTitle}>Important Points to Keep in Mind:</h2>
          <ul>
            <li className={styles.card}><strong className={styles.strong}>Visa-Free Transit Facility (VFTF):</strong> If you are an Indian national transiting through Singapore by air to or from a third country, you might be eligible for the 96-hour Visa-Free Transit Facility (VFTF) under specific conditions. These conditions include possessing a valid onward/return air ticket and, in some instances, a valid visa or long-term pass from certain countries (Australia, Canada, Germany, Japan, New Zealand, Switzerland, UK, USA).</li>
            <li className={styles.card1}><strong className={styles.strong}>Visa Validity and Stay Duration:</strong> While a Singapore tourist visa for Indian citizens can be granted with a validity of up to 2 years and allow for multiple entries, the duration of each individual stay is typically limited to a maximum of 30 days. The final validity and the number of entries are determined at the discretion of the ICA.</li>
            <li className={styles.card}><strong className={styles.strong}>No Visa on Arrival:</strong> It's crucial to remember that Singapore does not offer a visa-on-arrival facility for Indian citizens holding ordinary passports. <strong className={styles.strong}>You must secure a valid visa before commencing your travel. Don't take the risk; contact Global Visa Internationals for your visa needs.</strong></li>
            <li className={styles.card1}><strong className={styles.strong}>SG Arrival Card:</strong> All travelers to Singapore are required to submit an SG Arrival Card electronically via the official ICA website or mobile app within three days prior to their arrival. <strong className={styles.strong}>Global Visa Internationals</strong> can provide you with guidance on this mandatory requirement.</li>
          </ul>


          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals for Your Visa Needs?</h2>
          <p>At <strong>Global Visa Internationals,</strong> we understand that the visa application process can be complex and time-consuming. That's why we offer:</p>
          <ul>
            <li> Personalized Guidance: Our experienced consultants provide tailored support throughout your application journey</li>
            <li> Expert Knowledge: We stay up-to-date with the latest visa regulations to ensure your application is accurate and complete.</li>
            <li> Hassle-Free Process: We handle the paperwork and guide you through each step, saving you time and stress.</li>
            <li> High Success Rate: We are committed to maximizing your chances of a successful visa outcome.</li>
            <li> Additional Services: We also take Mock Interviews to prepare you for the visa interview process.</li>
          </ul>
          <p>We at <strong>Global Visa Internationals,</strong> proud to be India's finest visa consultants, are dedicated to making your dreams into reality. With our 11+ years of experience as leading visa consultants in Bangalore, we have successfully managed to process over 55,000+ visas and offer over 75,000 expert visa advice sessions till date. You can confidently rely on our vast visa and immigration consulting experience in India.</p>
          <p>Let Global Visa Internationals assist you in navigating the visa application process and planning your dream Australian adventure!</p>
          <p className={styles.note}> This service is provided by <strong>Global Visa Internationals,</strong> an independent consultancy. We are not affiliated with the Australian Government or any embassy.</p>
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