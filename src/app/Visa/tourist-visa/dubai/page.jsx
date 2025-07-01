
import styles from './Dubai.module.css';
import React from 'react';
import Head from 'next/head';
import VisaForm from '@/Components/VisaForm';

export const metadata = {
  title: "Dubai Tourist Visa Consultants in Bangalore | Global Visa Internationals",
  description: "Get expert Dubai Tourist Visa assistance in Bangalore. Fast process, complete documentation, 11+ years of visa experience at Global Visa Internationals.",
  keywords: "Dubai tourist visa, Dubai visa consultants in Bangalore, visa for Dubai from India, how to apply for Dubai tourist visa, Dubai travel visa assistance",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/dubai",
  },
  openGraph: {
    type: "website",
    title: "Apply for Dubai Tourist Visa from India | Global Visa Internationals",
    description: "Fast & reliable Dubai tourist visa consultants in Bangalore. Get end-to-end assistance, mock interviews, and expert documentation support.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/dubai",
    images: [
      {
        url: "https://www.globalvisainternationals.com/images/Dubai-Turist-Visa-Global-Visa-Internationals.webp",
        alt: "Dubai Tourist Visa Assistance",
      }
    ],
    siteName: "Global Visa Internationals"
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalvisainternationals",
    title: "Dubai Tourist Visa Experts – Global Visa Internationals",
    description: "Planning to visit Dubai? We provide fast and reliable visa services with expert guidance.",
    images: ["https://www.globalvisainternationals.com/images/Dubai-Turist-Visa-Global-Visa-Internationals.webp"]
  }
};

export default function DubaiVisaPage() {
  const pageUrl = metadata.alternates.canonical;

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
        "name": "Dubai Tourist Visa",
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
    "description": "Expert Dubai Tourist Visa Consultants in Bangalore. Complete visa support, documentation, and consultation for UAE visit visas.",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
      </Head>



      <div className={styles.imageContainer}>
        <img src="/images/Dubai-Turist-Visa-Global-Visa-Internationals.webp" alt="Dubai-Turist-Visa-Global-Visa-Internationals" className={styles.DubaiImage} />
      </div>

      <div className={styles.DubaiSec}>

        <div className={styles.DubaiData}>
          <h1 className={styles.Title}>Discover the Wonders of Dubai: Your Guide to a Tourist Visa</h1>
          <p>Dubai, a dazzling jewel in the Middle East, beckons travelers with its futuristic skyline, rich cultural heritage, and unparalleled experiences. Whether you dream of scaling the Burj Khalifa, exploring traditional souks, or relaxing on pristine beaches, Dubai offers an unforgettable adventure.</p>

          <h3 className={styles.subTitle}>Must-See Tourist Spots in Dubai</h3>
          <p>While Dubai might conjure images of modern marvels, it also boasts captivating historical sites and natural beauty. Prepare to be enchanted by:</p>

          <ul>
            <li>Burj Khalifa: Ascend the world's tallest building for breathtaking panoramic views of the city and the Arabian Gulf.</li>

            <li>The Dubai Mall: Indulge in world-class shopping, entertainment, and dining, including the mesmerizing Dubai Fountain show.</li>

            <li>Palm Jumeirah: Marvel at this iconic man-made island, shaped like a palm tree, featuring luxurious resorts and stunning waterfront villas.</li>

            <li>Dubai Creek: Take an abra (traditional boat) ride along this historic waterway, witnessing the city's past and present.</li>
            <li>Jumeirah Beach: Relax on the golden sands and soak up the sun, with the iconic Burj Al Arab in the backdrop.</li>
            <li>The Dubai Fountain: Witness the spectacular water, light, and music show at the base of the Burj Khalifa.</li>
            <li>Dubai Marina: Stroll along the vibrant promenade lined with skyscrapers, restaurants, and yachts.</li>
            <li>Global Village: Experience the cultures and cuisines of over 90 countries in one exciting location (seasonal).</li>
            <li>Dubai Desert Conservation Reserve: Embark on a desert safari, experiencing Bedouin culture, camel rides, and stunning sunsets.</li>
          </ul>
          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h3 className={styles.subTitle}>Why Choose Dubai for Your Next Holiday?</h3>
          <p>Dubai is more than just a city of skyscrapers; it's a captivating destination that offers a unique blend of:</p>
          <ol>
            <li>Rich History and Culture: Explore the Al Fahidi Historical Neighbourhood, visit traditional souks brimming with spices and gold, and learn about Emirati heritage at museums and cultural centers.</li>

            <li>Diverse Global Influences: Experience a melting pot of cultures, reflected in the city's cuisine, architecture, and vibrant atmosphere..</li>

            <li>World-Renowned Cuisine: Indulge in a culinary journey, from authentic Emirati dishes to international gourmet experiences.</li>

            <li>Breathtaking Landscapes: Discover stunning beaches, vast desertscapes perfect for adventure activities, and meticulously designed urban oases.</li>

            <li>Unparalleled Shopping and Entertainment: From mega-malls to traditional markets, and from thrilling theme parks to world-class performances, Dubai offers endless entertainment options.</li>

            <li>Safety and Modern Infrastructure: Enjoy a safe and well-organized environment with excellent transportation and amenities.</li>
          </ol>

          <p>Dubai is a city that seamlessly blends tradition and modernity, making it an ideal destination for travelers seeking both adventure and relaxation.</p>
          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}> Flight Costs from India to Japan (2025)</h2>
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
              <tr>
                <td>Tokyo</td>
                <td>1+ stops</td>
                <td>₹29,759</td>
                <td>Cheapest in September</td>
              </tr>
              <tr>
                <td>Osaka</td>
                <td>1+ stops</td>
                <td>₹31,702</td>
                <td>Competitive fares available</td>
              </tr>
              <tr>
                <td>Nagoya</td>
                <td>	1+ stops</td>
                <td>₹32,437</td>
                <td>		Slightly higher fares</td>
              </tr>
              <tr>
                <td>Fukuoka</td>
                <td>	1+ stops</td>
                <td>	₹33,021</td>
                <td>Affordable options</td>
              </tr>

            </tbody>
          </table>
          <p className={styles.note}>Note: Costs are approximate and can vary based on exchange rates, specific cities visited, and personal spending habits.</p>

          <h2>Accommodation Costs in Japan</h2>
          <p>Japan offers a range of accommodations to suit various budgets.</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Accommodation Type</th>
                <th>Price Range (JPY)</th>
                <th>Price Range (INR)</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hostels</td>
                <td>1,500–4,000</td>
                <td>₹900–₹2,400</td>
                <td>Budget-friendly, shared facilities</td>
              </tr>
              <tr>
                <td>Capsule Hotels</td>
                <td>5,000–15,000</td>
                <td>₹3,000–₹9,000</td>
                <td>Mid-range, convenient locations</td>
              </tr>
              <tr>
                <td>Minshuku</td>
                <td>5,000–20,000</td>
                <td>	₹3,000–₹12,000</td>
                <td>Traditional guesthouses with meals</td>
              </tr>
              <tr>
                <td>Luxury Hotels/Ryokans</td>
                <td>30,000–300,000</td>
                <td>₹18,000–₹180,000</td>
                <td>High-end stays with premium services</td>
              </tr>

            </tbody>
          </table>

          <h2>Food and Dining Expenses in Japan</h2>
          <p>Japanese cuisine caters to all budgets, from street food to fine dining.</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Meal Type</th>
                <th>Price Range (JPY)</th>
                <th>Price Range (INR)</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hostels</td>
                <td>	300–1,500</td>
                <td>	₹180–₹900</td>
                <td>Ramen, onigiri, and snacks</td>
              </tr>
              <tr>
                <td>Casual Dining</td>
                <td>	1,000–1,500</td>
                <td>₹600–₹900</td>
                <td>	Chain restaurants and izakayas</td>
              </tr>
              <tr>
                <td>Daily Food Budget</td>
                <td>~10,000</td>
                <td>~₹6,000</td>
                <td>Three meals and snacks</td>
              </tr>
              <tr>
                <td>Fine Dining</td>
                <td>10,000–50,000</td>
                <td>₹6,000–₹30,000</td>
                <td>	Sushi, kaiseki experiences</td>
              </tr>

            </tbody>
          </table>

          <h2>Transportation Costs in Japan</h2>
          <p>Efficient transportation is a hallmark of Japan, with options for every traveler.</p>
          <h3>Local Travel in Japan</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Mode</th>
                <th>Cost (JPY)</th>
                <th>Cost (INR)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Metro/Bus Fare</td>
                <td>200–500</td>
                <td>₹120–₹300</td>
                <td>Per ride</td>
              </tr>
              <tr>
                <td>Day Pass</td>
                <td>~1,600</td>
                <td>	~₹960</td>
                <td>Unlimited daily travel</td>
              </tr>
            </tbody>
          </table>
          <h3>Long-Distance Travel in Japan</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Mode</th>
                <th>Cost (JPY)</th>
                <th>Cost (INR)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shinkansen (Tokyo-Kyoto)</td>
                <td>~14,000</td>
                <td>~₹8,400</td>
                <td>One-way ticket</td>
              </tr>
              <tr>
                <td>Japan Rail Pass (7-day)</td>
                <td>50,000</td>
                <td>	~₹30,000</td>
                <td>Unlimited JR trains</td>
              </tr>
            </tbody>
          </table>

          <h2>Estimated Total Trip Cost to Japan (Excluding Flights)</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Expense Category</th>
                <th>Budget Traveler (INR)</th>
                <th>Mid-Range Traveler (INR)</th>
                <th>Luxury Traveler (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accommodation</td>
                <td>₹900–₹3,000/night</td>
                <td>₹3,000–₹9,000/night</td>
                <td>	₹18,000–₹180,000/night</td>
              </tr>
              <tr>
                <td>Food</td>
                <td>₹1,800–₹3,000/day</td>
                <td>₹3,000–₹6,000/day</td>
                <td>₹6,000–₹30,000/day</td>
              </tr>
              <tr>
                <td>Transportation</td>
                <td>₹600–₹1,800/day</td>
                <td>	₹1,800–₹6,000/day</td>
                <td>₹6,000–₹30,000/day</td>
              </tr>
              <tr>
                <td>Sightseeing/Shopping</td>
                <td>₹1,200–₹3,000/day</td>
                <td>₹3,000–₹6,000/day</td>
                <td>	₹6,000–₹30,000/day</td>
              </tr>
              <tr>
                <td>Total (7 days)</td>
                <td>₹28,000–₹70,000</td>
                <td>	₹70,000–₹140,000</td>
                <td>	₹140,000–₹700,000</td>
              </tr>
            </tbody>
          </table>

          <p className={styles.note}>Note: Costs are approximate and can vary based on exchange rates, specific cities visited, and personal spending habits.</p>
          <div className={styles.formSection1}>
            <VisaForm />
          </div>
          <h2 className={styles.subTitle}>Navigating the Japan Tourist Visa Process</h2>
          <p>Obtaining a tourist visa for Japan involves several key steps. While the specific requirements may vary based on your nationality, the general process typically includes:</p>
          <ol>
            <li>Determining Visa Requirements: Check the website of the Japanese Ministry of Foreign Affairs or the Japanese embassy/consulate in your country to confirm if you need a visa and the specific requirements for your nationality.</li>
            <li>Gathering Required Documents: This usually includes a valid passport, visa application form, passport-sized photographs, proof of sufficient funds, travel itinerary, and hotel booking confirmations. Additional documents may be required depending on your circumstances.</li>
            <li>Submitting Your Application: You will typically need to submit your application in person at the Japanese embassy or consulate in your country. Some countries may have authorized visa application centers.</li>
            <li>Visa Interview (if required): In some cases, you may be required to attend an interview as part of the visa application process.1 </li>
            <li>Visa Processing: The processing time for a Japan tourist visa can vary. It's crucial to apply well in advance of your intended travel dates.</li>
            <li>Receiving Your Visa: Once your application is approved, your visa will be affixed to your passport.</li>
          </ol>
          <p>The Japan visa process can seem complex, but Global Visa Internationals is here to simplify it for you.</p>

          <h3 className={styles.subTitle}>Let Global Visa Internationals Be Your Guide to Japan Visa Application</h3>
          <p>Planning your dream trip to Japan should be exciting, not stressful. At Global Visa Internationals, we provide comprehensive assistance to ensure a smooth and successful Japan tourist visa application process.</p>
          <b className={styles.subTitle}>Our Japan Visa Services include:</b>
          <ul>
            <li>Personalized guidance on Japan visa requirements based on your nationality.</li>
            <li>Assistance with gathering and preparing the necessary documentation for your Japan tourist visa.</li>
            <li>Thorough review of your application to minimize errors and delays.</li>
            <li>Mock interviews for visa applications to help you feel confident and prepared.</li>
            <li>One-on-one consultations to address all your questions and concerns about traveling to Japan and the visa process.</li>

          </ul>
          <p className={styles.note}>Don't let the complexities of the Japan visa application stand in the way of your adventure. Contact Global Visa Internationals today for expert support and personalized assistance. Let us help you turn your dream of exploring Japan into a reality!</p>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>
          <h3 className={styles.subTitle}>Need Help With the DS-160 or Interview Prep for Your Europe Tourist Visa?</h3>
          <p>Traveling the Europe on tourist visa  process can feel overwhelming — but you don’t have to do it alone. At Global Visa Internationals, we offer end-to-end support to ensure your application is error-free and your interview is successful.</p>
          <b className={styles.subTitle}>Here’s how we make your Europe visa journey seamless:</b>
          <ol>
            <h3 className={styles.subTitle}><li className={styles.subTitle}>Expert DS-160 Form Filling Assistance</li></h3>
            <p>Filling out the DS-160 form incorrectly is one of the most common reasons for visa delays or denials. Our experts will help you:</p>
            <ul>
              <li>Complete the form accurately, avoiding costly mistakes</li>
              <li>Review all sections (travel history, background, purpose of visit)</li>
              <li>Upload the correct digital photo as per U.S. embassy requirements</li>
            </ul>
            <h3> <li className={styles.subTitle}> One-on-One Personalized Visa Consultation</li></h3>
            <p>Your case is unique — so we offer customized guidance based on:</p>
            <ul>
              <li>Your travel plans and itinerary</li>
              <li>Financial documents and proof of funds</li>
              <li>Employment and family ties in India</li>
              <p>You’ll have a dedicated visa expert to answer all your questions.</p>
            </ul>
            <h3><li className={styles.subTitle}> Mock Interviews with Real Consulate Questions</li></h3>
            <p>Get real-time practice with visa interview questions asked at:</p>
            <ul>
              <li className={styles.subTitle}>U.S. Consulates in Mumbai, Delhi, Chennai, Kolkata & Hyderabad
                Our mock sessions include:</li>
              <li>Behavioral coaching on how to answer confidently</li>
              <li>Commonly asked B-2 visa questions (and how to respond)</li>
              <li>Realistic role-playing with personalized feedback</li>
            </ul>
            <h3><li className={styles.subTitle}>Complete Document Checklist & Review</li></h3>
            <p>We’ll guide you on gathering all required documents, including:</p>
            <ul>
              <li>Valid passport, DS-160 confirmation, fee receipts</li>
              <li>Proof of finances, return intent, hotel bookings, flight details</li>
              <li>Sponsorship or invitation letters (if applicable)</li>
              <p>We’ll review everything to ensure it meets U.S. consulate standards.</p>
            </ul>
          </ol>
          <div className={styles.formSection1}>
            <VisaForm />
          </div>
          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals for Your Visa Needs?</h2>
          <p>At Global Visa Internationals, we understand that the visa application process can be complex and time-consuming. That's why we offer:</p>
          <ul>
            <li>Personalized Guidance: Our experienced consultants provide tailored support throughout your application journey</li>
            <li>Expert Knowledge: We stay up-to-date with the latest visa regulations to ensure your application is accurate and complete.</li>
            <li>Hassle-Free Process: We handle the paperwork and guide you through each step, saving you time and stress.</li>
            <li>High Success Rate: We are committed to maximizing your chances of a successful visa outcome.</li>
            <li>Additional Services: We also take Mock Interviews to prepare you for the visa interview process.</li>
          </ul>
          <p>We at Global Visa Internationals, proud to be India's finest visa consultants, are dedicated to making your dreams into reality. With our 11+ years of experience as leading visa consultants in Bangalore, we have successfully managed to process over 55,000+ visas and offer over 75,000 expert visa advice sessions till date. You can confidently rely on our vast visa and immigration consulting experience in India.</p>
          <p>Let Global Visa Internationals assist you in navigating the visa application process and planning your dream Australian adventure!</p>
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