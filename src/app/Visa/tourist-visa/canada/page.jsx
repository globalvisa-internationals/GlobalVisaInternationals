
import styles from './Canada.module.css';
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd, LocalBusinessJsonLd } from 'next-seo';
import Head from 'next/head';
import VisaForm from '@/Components/VisaForm';
export const metadata = {
  title: "Canada Tourist Visa Assistance: Requirements, Application & Top Places | Global Visa Internationals",
  description:
    "Apply for a Canada Tourist Visa with Global Visa Internationals. Get expert help with requirements, visa application process, and discover must-visit Canadian destinations.",
  keywords:
    "Canada tourist visa, apply Canada visitor visa, Canada visa consultant, Canada travel guide, visa for Canada from India, top places in Canada, Canadian immigration",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/visa/tourist-visa/canada",
  },
  openGraph: {
    title: "Canada Tourist Visa: Requirements, Application & Top Places",
    description:
      "Get expert help from Global Visa Internationals on applying for a Canada tourist visa. Learn about requirements, costs, and destinations.",
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
    site: "@globalvisainternationals",
    title: "Canada Tourist Visa: Requirements, Application & Top Places",
    description:
      "Apply for your Canada tourist visa with confidence. Learn the process, costs, and top attractions with Global Visa Internationals.",
    images: ["https://www.globalvisainternationals.com/visa-banner/Canada-Tourist-Visa-assistence-banner.webp"],
  },
};


export default function Canada() {

  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Global Visa Internationals",
    "url": "https://www.globalvisainternationals.com/visa/tourist-visa/canada",
    "logo": "https://www.globalvisainternationals.com/gvilogo.png",
    "description":
      "Unlock Your Canada Adventure! Global Visa Internationals provides expert guidance for your Canada tourist visa application. Simplify the process and explore Canada's wonders. Contact us today!",
    "founder": {
      "@type": "Organization",
      "name": "Naveen Kumar J"
    },
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
    "areaServed": ["IN", "Canada", "EU"],
    "sameAs": [
      "https://www.facebook.com/globalvisainternationals/",
      "https://www.instagram.com/globalvisa_internationals/",
      "https://www.linkedin.com/company/global-visa-internationals/",
      "https://x.com/GLOBALVISA1505",
      "https://www.youtube.com/@globalVisaInternationals",
      "https://www.google.com/maps/place/Global+Visa+Internationals"
    ]
  };

  //review

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://static.elfsight.com/platform/platform.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, []);
  

  return (
    <>
      {/* <Head>
        <title>Canada Tourist Visa Assistence: Requirements, Application & Top Places | Global Visa Internationals</title>
            <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
        />
      </Head> */}

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
                  "name": "Canada",
                  "item": "https://www.globalvisainternationals.com/visa/tourist-visa/canada"
                }
              ]
            }),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Global Visa Internationals",
              "url": "https://www.globalvisainternationals.com",
              "logo": "https://www.globalvisainternationals.com/gvilogo.png",
              "description": "Visa & Immigration Consultants based in Bangalore. Trusted since 2017.",
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
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
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
            }),
          }}
        />
      </Head>
      <div className={styles.imageContainer}>
        <img src="/visa-banner/Canada-Tourist-Visa-assistence-banner.webp" alt="Canada Image" className={styles.CanadaImage} />
      </div>

      <div className={styles.CanadaSec}>


        <div className={styles.CanadaData}>
          <h1 className={styles.Title}>
            Canada Tourist Visa Agents in Bangalore | Best Canada Visitor Visa Consultants | Global Visa Internationals
          </h1>
          <p>
            Planning to explore Canada? As one of the most trusted <strong>Canada Tourist Visa Consultants in Bangalore</strong>, Global Visa Internationals helps you secure your <strong>Canada visitor visa</strong> with ease. Canada is a land of breathtaking natural beauty, iconic landmarks, and multicultural cities. From the majestic <strong>Rocky Mountains</strong> and <strong>Niagara Falls</strong> to the historic charm of Quebec City and the vibrant life of Toronto and Vancouver, this country offers something for every traveler. Our expert team provides complete guidance on <strong>Canada tourist visa requirements, processing time, eligibility, and document checklist</strong>. Whether you're planning a family vacation, a solo trip, or a honeymoon, we ensure your visa process is smooth and stress-free. Trust Global Visa Internationals – your reliable partner for <strong>Canada tourist visa application support</strong> – to turn your travel dreams into reality.
          </p>



          <div className={styles.formSection1}>
            <VisaForm/>
          </div>

          <h2 className={styles.subTitle}>
            Explore Top Places to Visit in Canada – A Complete Guide for Tourist Visa Applicants
          </h2>
          <p>
            Planning a trip to Canada on a <strong>Canada tourist visa</strong>? Discover some of the most iconic landmarks and top-rated attractions that make Canada a dream destination for travelers worldwide. Whether you're applying for a <strong>Canada visitor visa from India</strong> or consulting with <strong>expert Canada tourist visa agents</strong>, this travel guide will help you plan an unforgettable experience.
          </p>

          <strong className={styles.subTitle}>Must-Visit Attractions for Canada Tourist Visa Holders</strong>
          <ul>
            <li>
              <h4 className={styles.subTitle}>Banff National Park</h4>
              Located in the heart of the Canadian Rockies, Banff is a must-visit for anyone traveling on a <strong>Canada visitor visa</strong>. With scenic spots like Lake Louise, Moraine Lake, and the Icefields Parkway, this park offers hiking, sightseeing, and photography opportunities. A favorite for <strong>tourist visa travelers</strong>, it’s perfect for both summer and winter adventures.
            </li>

            <li>
              <h4 className={styles.subTitle}>Quebec City</h4>
              Quebec City offers a European vibe with cobblestone streets, French architecture, and historical landmarks. It's a great destination for cultural tourism under a <strong>Canada tourist visa</strong>. Visit Château Frontenac, Old Quebec (UNESCO World Heritage Site), and enjoy seasonal festivals and local cuisine.
            </li>

            <li>
              <h4 className={styles.subTitle}>Toronto</h4>
              For tourists holding a <strong>Canada travel visa</strong>, Toronto offers iconic city experiences like the CN Tower, the Royal Ontario Museum, and the Distillery District. It's one of the most visited cities in Canada, ideal for shopping, nightlife, and cultural tours.
            </li>

            <li>
              <h4 className={styles.subTitle}>Niagara Falls</h4>
              A global tourist magnet, Niagara Falls is a bucket-list destination for anyone applying for a <strong>Canada visitor visa</strong>. Get up-close through Journey Behind the Falls or take the Niagara City Cruise to experience the majestic beauty of one of the world’s most powerful waterfalls.
            </li>

            <li>
              <h4 className={styles.subTitle}>Jasper National Park</h4>
              Adjacent to Banff, Jasper offers serene beauty and less crowded natural escapes. With attractions like Maligne Lake, Athabasca Falls, and Spirit Island, it’s a top choice for nature lovers applying for a <strong>Canadian tourist visa</strong>.
            </li>

            <li>
              <h4 className={styles.subTitle}>Historic Sites in Ottawa</h4>
              As Canada’s capital, Ottawa is rich in history and perfect for educational and leisure tourism. Visit Parliament Hill, Rideau Canal (UNESCO Site), and the Canadian War Museum. Ideal for families and solo travelers on a <strong>Canada visa for tourism</strong>.
            </li>
          </ul>


          <div className={styles.formSection1}>
            <VisaForm/>
          </div>


          <h3 className={styles.subTitle}>Best Time to Visit Canada for Tourist Visa Holders – A Season-by-Season Guide</h3>
          <p>
            Canada is a year-round destination for travelers applying for a <strong>Canada tourist visa</strong>. With its diverse seasons, each part of the year offers unique experiences – from snow-covered adventures in winter to colorful foliage in fall. Knowing the best time to visit Canada can help you plan your trip better and increase your chances of <strong>Canada visitor visa approval</strong> if tied to a specific season or event.
          </p>

          <ul>
            <li>
              <h3 className={styles.subTitle}>☀️ Summer (June to August)</h3>
              Summer in Canada offers ideal weather for outdoor activities, sightseeing, and festivals. Popular with international tourists on a <strong>Canada visitor visa</strong>, it's the perfect season for exploring Banff and Jasper National Parks, canoeing on crystal-clear lakes, and visiting iconic landmarks like Lake Louise and Moraine Lake. Book early – this is peak <strong>Canada tourist season</strong>.
            </li>

            <li>
              <h3 className={styles.subTitle}>❄️ Winter (December to February)</h3>
              Traveling to Canada in winter gives you the chance to enjoy snow sports, winter carnivals, and magical scenery. Tourist visa holders can ski in Banff, go ice skating on frozen lakes, or visit the world-famous <strong>Carnaval de Québec</strong>. Winter is perfect for those seeking adventure and snowy landscapes.
            </li>

            <li>
              <h3 className={styles.subTitle}>🍁 Shoulder Seasons (Spring: March–May | Fall: September–November)</h3>
              Spring and fall are excellent times to apply for a <strong>Canada travel visa</strong> if you prefer fewer crowds, lower costs, and unique seasonal experiences. Spring features cherry blossoms in Vancouver and maple syrup tours in Quebec. Fall offers breathtaking foliage in the Rockies and is ideal for Northern Lights viewing in the Yukon. These off-peak seasons are perfect for smooth <strong>tourist visa processing</strong> and relaxed exploration.
            </li>
          </ul>

          <h3 className={styles.subTitle}>🎉 Experience Canadian Culture: Must-See Festivals & Events</h3>
          <p>
            Tourists on a <strong>Canada visitor visa</strong> can experience the country's rich culture through its vibrant festivals held all year round. From music and food to history and film, Canada’s festivals offer something for everyone.
          </p>

          <ul>
            <li>
              <h3 className={styles.subTitle}>🎶 Summer Festivals</h3>
              Summer is packed with world-class events like the <strong>Montreal International Jazz Festival</strong>, <strong>Toronto Caribbean Carnival</strong>, and <strong>Calgary Stampede</strong>. Visitors also enjoy the <strong>Celebration of Light</strong> in Vancouver and <strong>Folklorama</strong> in Winnipeg. These events attract thousands of international travelers with valid <strong>Canada tourist visas</strong>.
            </li>

            <li>
              <h3 className={styles.subTitle}>🌨️ Winter Festivals</h3>
              Winter highlights include <strong>Carnaval de Québec</strong>, <strong>Ottawa Winterlude</strong>, <strong>Niagara Winter Festival of Lights</strong>, and <strong>Festival du Voyageur</strong> in Winnipeg. If you're visiting Canada in winter, these festivals are a must.
            </li>

            <li>
              <h3 className={styles.subTitle}>🌸 Spring Festivals</h3>
              Spring is known for the <strong>Canadian Tulip Festival</strong> in Ottawa, the <strong>Vancouver Cherry Blossom Festival</strong>, and Quebec’s maple syrup season. It’s a great time to travel to Canada with fewer crowds and colorful backdrops.
            </li>

            <li>
              <h3 className={styles.subTitle}>🍂 Fall Festivals</h3>
              Fall includes major events like the <strong>Toronto International Film Festival (TIFF)</strong>, <strong>Celtic Colours International Festival</strong>, and <strong>Oktoberfest</strong> in Kitchener-Waterloo. Don’t miss the <strong>Jasper Dark Sky Festival</strong> or <strong>Okanagan Wine Festival</strong> for unforgettable seasonal experiences.
            </li>
          </ul>


          <div className={styles.formSection1}>
            <VisaForm/>
          </div>

          <h2 className={styles.subTitle}>Planning Your Trip to Canada – Cost, Flights & Accommodation Guide for Tourist Visa Applicants</h2>
          <p>
            If you're applying for a <strong>Canada tourist visa</strong>, having a clear understanding of travel expenses can help you budget your trip effectively. From flight costs to accommodation options, here's essential information for planning a smooth and affordable visit to Canada.
          </p>

          <h3 className={styles.subTitle}>✈️ Flight Costs to Canada – Average Round-Trip Fares by Region</h3>
          <p>
            Flight fares to Canada vary based on season, departure country, airline, and destination city. If you're searching for the <strong>cheapest time to fly to Canada</strong> or wondering about <strong>flight ticket prices from India to Canada</strong>, use this table as a reference to plan ahead.
          </p>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Origin Region</th>
                <th>Destination City</th>
                <th>Average Round-Trip Flight Cost (USD)</th>
                <th>Cheapest Months to Fly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USA</td>
                <td>Toronto</td>
                <td>$456</td>
                <td>May, June</td>
              </tr>
              <tr>
                <td>Europe</td>
                <td>Toronto</td>
                <td>$500 - $800+ (CAD)</td>
                <td>February</td>
              </tr>
              <tr>
                <td>Asia</td>
                <td>Vancouver</td>
                <td>$577 - $914+</td>
                <td>October, November</td>
              </tr>
              <tr>
                <td>Southeast Asia</td>
                <td>Vancouver</td>
                <td>$673+</td>
                <td>–</td>
              </tr>
              <tr>
                <td>South America</td>
                <td>Montreal</td>
                <td>$579 - $896+</td>
                <td>October, November</td>
              </tr>
            </tbody>
          </table>

          <p className={styles.note}><b>Note:</b> Prices are approximate and may change based on availability, booking time, and seasonality.</p>

          <h2 className={styles.subTitle}>🏨 Accommodation Costs in Canada – Budget, Mid-Range & Luxury Options</h2>
          <p>
            Wondering <strong>where to stay in Canada</strong> during your visit? From backpacker-friendly hostels to luxury 5-star hotels, Canada offers a wide range of accommodations to suit all travel styles and visa durations. Here's an overview of <strong>hotel prices in major Canadian cities</strong> to help you plan your stay while on a <strong>Canada visitor visa</strong>.
          </p>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>City</th>
                <th>Budget (Hostels / 1-Star)</th>
                <th>Mid-Range (2–3 Star Hotels)</th>
                <th>Luxury (4–5 Star Hotels)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toronto</td>
                <td>$28 – $100</td>
                <td>$100 – $250</td>
                <td>$200 – $500+</td>
              </tr>
              <tr>
                <td>Montreal</td>
                <td>$18 – $70</td>
                <td>$70 – $200</td>
                <td>$200 – $500+</td>
              </tr>
              <tr>
                <td>Vancouver</td>
                <td>$28 – $100</td>
                <td>$100 – $300</td>
                <td>$300 – $700+</td>
              </tr>
              <tr>
                <td>Banff</td>
                <td>$44 – $150</td>
                <td>$150 – $300</td>
                <td>$300 – $1000+</td>
              </tr>
              <tr>
                <td>Quebec City</td>
                <td>$28 – $70</td>
                <td>$70 – $180</td>
                <td>$180 – $400+</td>
              </tr>
            </tbody>
          </table>

          <p className={styles.note}>
            <b>Tip:</b> Booking early and choosing shoulder seasons can help reduce overall costs. Also consider vacation rentals, B&Bs, and Airbnb for long stays during your <strong>Canada tourist visit</strong>.
          </p>


          <div className={styles.formSection1}>
           <VisaForm/>
          </div>
          <h2 className={styles.subTitle}>
            Average Daily Expenses in Canada – Budget Planning for Tourist Visa Holders
          </h2>
          <p>
            Understanding the average cost of daily living in Canada is crucial for those applying for a <strong>Canada tourist visa</strong>. Your travel budget will depend on your style—backpacker, mid-range, or luxury. Here's a breakdown of typical food and public transport costs in major Canadian cities.
          </p>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>City</th>
                <th>Food (Budget)</th>
                <th>Food (Moderate)</th>
                <th>Food (Luxury)</th>
                <th>Public Transport (Single Fare)</th>
                <th>Public Transport (Day Pass)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toronto</td>
                <td>$50 CAD</td>
                <td>$85 CAD</td>
                <td>$125 CAD</td>
                <td>$3.30 – $3.35 CAD</td>
                <td>$13.50 CAD</td>
              </tr>
              <tr>
                <td>Montreal</td>
                <td>$19 CAD</td>
                <td>$52 CAD</td>
                <td>$150 CAD</td>
                <td>$3.75 CAD</td>
                <td>$11.00 CAD</td>
              </tr>
              <tr>
                <td>Vancouver</td>
                <td>$50 – $100 CAD</td>
                <td>$85 – $150 CAD</td>
                <td>$125 – $200+ CAD</td>
                <td>$2.60 – $3.20 CAD</td>
                <td>$11.50 CAD</td>
              </tr>
              <tr>
                <td>Banff</td>
                <td>$40 – $80 CAD</td>
                <td>$70 – $120 CAD</td>
                <td>$100 – $200+ CAD</td>
                <td>$5 – $25 CAD</td>
                <td>$12 – $35 CAD</td>
              </tr>
              <tr>
                <td>Quebec City</td>
                <td>$40 – $70 CAD</td>
                <td>$70 – $120 CAD</td>
                <td>$100 – $180+ CAD</td>
                <td>$3.50 – $3.75 CAD</td>
                <td>$10.00 CAD</td>
              </tr>
            </tbody>
          </table>

          <p className={styles.note}><b>Note:</b> These costs are averages and can vary by season, location, and spending style.</p>

          <h2 className={styles.subTitle}>
            Why Choose Canada for Your Next Vacation? – Top Reasons for Tourist Visa Travelers
          </h2>
          <p>
            If you're considering applying for a <strong>Canada visitor visa</strong>, here’s why Canada consistently ranks among the world’s top tourist destinations. From natural beauty to safety and cultural diversity, it offers everything you need for a memorable international trip.
          </p>

          <ul>
            <li>
              <h4 className={styles.subTitle}>🌲 Breathtaking Landscapes and Natural Beauty</h4>
              Canada is home to world-renowned natural attractions like the <strong>Rocky Mountains</strong>, <strong>Niagara Falls</strong>, and <strong>Banff National Park</strong>. Whether you're visiting Lake Louise, hiking in Jasper, or watching the <strong>Northern Lights</strong> in Yukon, the country’s scenic beauty is unmatched.
            </li>

            <li>
              <h4 className={styles.subTitle}>🎭 Rich Cultural Experiences and Warm Hospitality</h4>
              Canada’s multicultural society welcomes visitors from around the world. Cities like <strong>Toronto</strong>, <strong>Montreal</strong>, and <strong>Vancouver</strong> celebrate diversity through art, food, festivals, and heritage. Canada is a great destination for <strong>cultural tourism</strong>, offering immersive experiences for travelers.
            </li>

            <li>
              <h4 className={styles.subTitle}>🛡️ Safe and Secure Travel Environment</h4>
              Canada ranks among the safest countries globally, with low crime rates and stable governance. Public transport is reliable, healthcare is accessible, and infrastructure is well-maintained — making it a stress-free choice for international travelers on a <strong>Canada tourist visa</strong>.
            </li>
          </ul>


          <div className={styles.formSection1}>
            <VisaForm/>
          </div>
          <h2 className={styles.subTitle}>Canada Tourist Visa Requirements: Complete Checklist & Eligibility Guide (2025)</h2>
          <p>
            Planning a trip to Canada? Before applying for a <strong>Canada Tourist Visa (Temporary Resident Visa)</strong>, it's essential to understand the eligibility criteria and required documents to increase your chances of visa approval. Here's a detailed breakdown to help you prepare a strong and complete application.
          </p>

          <h3 className={styles.subTitle}>✅ Who is Eligible to Apply for a Canadian Visitor Visa?</h3>
          <p>
            To be eligible for a Canadian tourist visa, applicants must meet several key requirements set by <strong>Immigration, Refugees and Citizenship Canada (IRCC)</strong>.
          </p>

          <ul>
            <li>
              <strong className={styles.subTitle}>✔ Valid Passport:</strong>
              <ul>
                <li>Must be valid for the duration of your stay.</li>
                <li>At least 6 months validity is recommended beyond your return date.</li>
                <li>Ensure blank pages are available for visa stamps.</li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>✔ Good Health:</strong>
              <ul>
                <li>You must be medically fit to travel.</li>
                <li>A medical exam may be required based on your nationality or stay duration.</li>
                <li>Medical conditions that may be considered inadmissible must be disclosed.</li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>✔ No Criminal Record:</strong>
              <ul>
                <li>Provide a clean police record.</li>
                <li>Past convictions can affect your visa approval.</li>
                <li>Police clearance certificates may be required for all countries you’ve lived in for 6+ months since age 18.</li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>✔ Strong Ties to Your Home Country:</strong>
              <ul>
                <li>You must prove that you will return after your visit.</li>
                <li>Accepted ties include:
                  <ul>
                    <li><b>Employment proof</b>: Job letter or NOC from employer.</li>
                    <li><b>Ongoing studies</b>: Enrollment verification letter.</li>
                    <li><b>Property ownership</b>: Land/house ownership documents.</li>
                    <li><b>Financial assets</b>: Fixed deposits, mutual funds, savings.</li>
                    <li><b>Family responsibilities</b>: Marriage certificate, child’s birth certificate, elderly dependents.</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>✔ Proof of Sufficient Funds:</strong>
              <ul>
                <li>You must show you can financially support yourself in Canada.</li>
                <li>Documents may include:
                  <ul>
                    <li>Recent 3–6 months bank statements</li>
                    <li>ITR (Income Tax Returns)</li>
                    <li>Fixed deposits or investment proofs</li>
                    <li>If sponsored: sponsor’s financial documents + letter of support</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>✔ Letter of Invitation (Optional but Helpful):</strong>
              <ul>
                <li>If visiting friends or family, an invitation letter from the Canadian host can strengthen your application.</li>
                <li>It should include:
                  <ul>
                    <li>Host's full name, address, and legal status in Canada</li>
                    <li>Your purpose of visit, duration, relationship, and accommodation plan</li>
                    <li>Whether they will sponsor your stay (if applicable)</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>✔ Biometrics (If Required):</strong>
              <ul>
                <li>Most applicants from Asia, Africa, and the Middle East need to give biometrics.</li>
                <li>Fingerprinting and photo are taken at the nearest Visa Application Centre (VAC).</li>
                <li>A biometric instruction letter is issued after online application and payment.</li>
              </ul>
            </li>
          </ul>

          <p>
            Meeting these <strong>Canada visitor visa eligibility criteria</strong> and submitting a complete file improves your chances of approval. For expert assistance with document preparation, financial justification, or travel bookings, reach out to <strong>Global Visa Internationals</strong> – your trusted Canada tourist visa agents in India.
          </p>

          <div className={styles.formSection1}>

            <h1 className={styles.formtitle}>Visa And Immigration Inquiry Form</h1>
            <VisaForm/>
          </div>
          <h2 className={styles.subTitle}>Step-by-Step Canada Tourist Visa Application Process (2025)</h2>
          <p>
            Planning a trip to Canada? Here's a complete guide to the <strong>Canada visitor visa application process</strong> to help you navigate every step with confidence. Whether you're visiting for tourism, to meet family, or explore Canadian culture, these steps ensure your journey starts smoothly.
          </p>

          <ol type='I'>
            <li><b className={styles.subTitle}>Check Visa Eligibility:</b>
              <ul>
                <li>Determine if you require a <strong>Temporary Resident Visa (TRV)</strong> or just an <strong>Electronic Travel Authorization (eTA)</strong>, based on your nationality.</li>
                <li>Use the IRCC official tool to check your requirement based on citizenship.</li>
              </ul>
            </li>

            <li><b className={styles.subTitle}>Collect Required Documents:</b>
              <ul>
                <li><b>Passport:</b> Valid for at least 6 months beyond your travel dates with blank pages for visa stamps.</li>
                <li><b>Financial Proof:</b> Bank statements, fixed deposits, sponsor letter (if applicable).</li>
                <li><b>Proof of Strong Home Ties:</b> Job letter, property documents, family records, school enrollment, etc.</li>
                <li><b>Travel History:</b> Copies of old visas and entry/exit stamps.</li>
                <li><b>Letter of Invitation:</b> If visiting someone in Canada, include their PR/citizenship proof and invitation letter.</li>
                <li><b>Purpose of Visit:</b> Flight itinerary (not mandatory), hotel bookings, or a planned tour schedule.</li>
                <li><b>Photograph:</b> As per IRCC digital photo specifications.</li>
                <li><b>Family Information Form & Any Additional Documents:</b> Depending on your profile.</li>
              </ul>
            </li>

            <li><b className={styles.subTitle}>Submit Online Application on IRCC Portal:</b>
              <ul>
                <li>Create an account at <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank">IRCC website</a>.</li>
                <li>Fill out the tourist visa application form (IMM 5257) and supporting documents.</li>
                <li>Upload all documents in PDF or JPG format, clearly scanned and under the required size limits.</li>
              </ul>
            </li>

            <li><b className={styles.subTitle}>Pay the Visa Fee:</b>
              <ul>
                <li><strong>$100 CAD</strong> application fee (non-refundable).</li>
                <li>Pay online using a credit card or IRCC-approved method.</li>
              </ul>
            </li>

            <li><b className={styles.subTitle}>Pay Biometric Fee (If Applicable):</b>
              <ul>
                <li><strong>$85 CAD</strong> for biometric submission.</li>
                <li>Payment is generally done together with the application fee online.</li>
              </ul>
            </li>

            <li><b className={styles.subTitle}>Submit Your Application:</b>
              <ul>
                <li>Review and submit the completed online visa application with uploaded documents and paid fees.</li>
              </ul>
            </li>

            <li><b className={styles.subTitle}>Biometric Appointment:</b>
              <ul>
                <li>After submission, receive a <strong>Biometric Instruction Letter (BIL)</strong> to attend a nearby <strong>Visa Application Centre (VAC)</strong>.</li>
                <li>Carry your passport and BIL to your VAC appointment for fingerprinting and photograph.</li>
              </ul>
            </li>

            <li><b className={styles.subTitle}>Visa Processing by IRCC:</b>
              <ul>
                <li>After biometrics, your file will be reviewed by IRCC officers.</li>
                <li><strong>Processing time:</strong> 2 to 6 weeks on average, depending on your country and application load.</li>
                <li>You can track the status of your application on your IRCC account.</li>
              </ul>
            </li>

            <li><b className={styles.subTitle}>Passport Request & Visa Stamping:</b>
              <ul>
                <li>If approved, you’ll receive a <strong>Passport Request (PPR)</strong> email.</li>
                <li>Submit your original passport to the VFS center as per instructions.</li>
                <li>Visa will be affixed and passport returned via courier or in-person pickup.</li>
              </ul>
            </li>
          </ol>

          <h2 className={styles.subTitle}>Start Your Canada Visa Application With Experts</h2>
          <p>
            At <strong>Global Visa Internationals</strong>, we provide personalized guidance to ensure your <strong>Canada visitor visa application</strong> is complete, accurate, and professionally presented. We assist with:
          </p>
          <ul>
            <li>Document preparation & checklist verification</li>
            <li>Online form assistance & uploads</li>
            <li>Biometric appointment booking</li>
            <li>Mock interviews (if called for one)</li>
            <li>Real-time updates on your visa progress</li>
          </ul>
          <p>
            Get peace of mind with expert help — contact us today and make your Canadian travel dream a reality!
          </p>
          <p className={styles.note}>
            <b>Disclaimer:</b> Global Visa Internationals is a private consultancy and is not affiliated with the Canadian government or IRCC.
          </p>




        </div >
        <div className={styles.formSection}>

          <VisaForm/>
        </div>
      </div>
     <section id="ClientReviews" className={styles.reviewSection}>
  <h2 className={styles.subtitle}>Client Reviews</h2>
  <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>

  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function () {
          var script = document.createElement("script");
          script.src = "https://static.elfsight.com/platform/platform.js";
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
        })();
      `,
    }}
  />
</section>




    </>
  )
}