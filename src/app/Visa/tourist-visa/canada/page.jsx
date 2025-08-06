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
          <h1 className={styles.Title}>
            Canada Tourist Visa Agents in Bangalore | Best Canada Visitor Visa
            Consultants | Global Visa Internationals
          </h1>
          <p className={styles.card}> Planning to explore Canada? As one of the most trusted Canada Tourist Visa Consultants in Bangalore, Global Visa Internationals helps you secure your Canada visitor visa with ease. Canada is a land of breathtaking natural beauty, iconic landmarks, and multicultural cities. From the majestic Rocky Mountains and Niagara Falls to the historic charm of Quebec City and the vibrant life of Toronto and Vancouver, this country offers something for every traveler. Our expert team provides complete guidance on Canada tourist visa requirements, processing time, eligibility, and document checklist. Whether you're planning a family vacation, a solo trip, or a honeymoon, we ensure your visa process is smooth and stress-free. Trust Global Visa Internationals – your reliable partner for Canada tourist visa application support – to turn your travel dreams into reality. </p>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}>
            Explore Top Places to Visit in Canada – A Complete Guide for Tourist
            Visa Applicants
          </h2>
          <p className={styles.card}>
            Planning a trip to Canada on a Canada tourist visa?
            Discover some of the most iconic landmarks and top-rated attractions
            that make Canada a dream destination for travelers worldwide.
            Whether you're applying for a Canada visitor visa from India or consulting with expert Canada tourist visa agents, this travel
            guide will help you plan an unforgettable experience.
          </p>

          <strong className={styles.subTitle}>
            Must-Visit Attractions for Canada Tourist Visa Holders
          </strong>
          <ul>
            <li className={styles.card}>
              <h4 className={styles.subTitle}>Banff National Park</h4>
              Located in the heart of the Canadian Rockies, Banff is a
              must-visit for anyone traveling on a
              Canada visitor visa. With scenic spots like Lake
              Louise, Moraine Lake, and the Icefields Parkway, this park offers
              hiking, sightseeing, and photography opportunities. A favorite for
              tourist visa travelers, it’s perfect for both
              summer and winter adventures.
            </li>

            <li className={styles.card}>
              <h4 className={styles.subTitle}>Quebec City</h4>
              Quebec City offers a European vibe with cobblestone streets,
              French architecture, and historical landmarks. It's a great
              destination for cultural tourism under a
              Canada tourist visa. Visit Château Frontenac, Old
              Quebec (UNESCO World Heritage Site), and enjoy seasonal festivals
              and local cuisine.
            </li>

            <li className={styles.card}>
              <h4 className={styles.subTitle}>Toronto</h4>
              For tourists holding a Canada travel visa,
              Toronto offers iconic city experiences like the CN Tower, the
              Royal Ontario Museum, and the Distillery District. It's one of the
              most visited cities in Canada, ideal for shopping, nightlife, and
              cultural tours.
            </li>

            <li className={styles.card}>
              <h4 className={styles.subTitle}>Niagara Falls</h4>A global tourist
              magnet, Niagara Falls is a bucket-list destination for anyone
              applying for a Canada visitor visa. Get up-close
              through Journey Behind the Falls or take the Niagara City Cruise
              to experience the majestic beauty of one of the world’s most
              powerful waterfalls.
            </li>

            <li className={styles.card}>
              <h4 className={styles.subTitle}>Jasper National Park</h4>
              Adjacent to Banff, Jasper offers serene beauty and less crowded
              natural escapes. With attractions like Maligne Lake, Athabasca
              Falls, and Spirit Island, it’s a top choice for nature lovers
              applying for a Canadian tourist visa.
            </li>

            <li className={styles.card}>
              <h4 className={styles.subTitle}>Historic Sites in Ottawa</h4>
              As Canada’s capital, Ottawa is rich in history and perfect for
              educational and leisure tourism. Visit Parliament Hill, Rideau
              Canal (UNESCO Site), and the Canadian War Museum. Ideal for
              families and solo travelers on a
              Canada visa for tourism.
            </li>
          </ul>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h3 className={styles.subTitle}>
            Best Time to Visit Canada for Tourist Visa Holders – A
            Season-by-Season Guide
          </h3>
          <p className={styles.card}>
            Canada is a year-round destination for travelers applying for a Canada tourist visa. With its diverse seasons, each
            part of the year offers unique experiences – from snow-covered
            adventures in winter to colorful foliage in fall. Knowing the best
            time to visit Canada can help you plan your trip better and increase
            your chances of Canada visitor visa approval if
            tied to a specific season or event.
          </p>

          <ul>
            <li className={styles.card}>
              <h3 className={styles.subTitle}>☀️ Summer (June to August)</h3>
              Summer in Canada offers ideal weather for outdoor activities,
              sightseeing, and festivals. Popular with international tourists on
              a Canada visitor visa, it's the perfect season
              for exploring Banff and Jasper National Parks, canoeing on
              crystal-clear lakes, and visiting iconic landmarks like Lake
              Louise and Moraine Lake. Book early – this is peak
              Canada tourist season.
            </li>

            <li className={styles.card}>
              <h3 className={styles.subTitle}>
                ❄️ Winter (December to February)
              </h3>
              Traveling to Canada in winter gives you the chance to enjoy snow
              sports, winter carnivals, and magical scenery. Tourist visa
              holders can ski in Banff, go ice skating on frozen lakes, or visit
              the world-famous Carnaval de Québec. Winter is
              perfect for those seeking adventure and snowy landscapes.
            </li>

            <li className={styles.card}>
              <h3 className={styles.subTitle}>
                🍁 Shoulder Seasons (Spring: March–May | Fall:
                September–November)
              </h3>
              Spring and fall are excellent times to apply for a
              Canada travel visa if you prefer fewer crowds,
              lower costs, and unique seasonal experiences. Spring features
              cherry blossoms in Vancouver and maple syrup tours in Quebec. Fall
              offers breathtaking foliage in the Rockies and is ideal for
              Northern Lights viewing in the Yukon. These off-peak seasons are
              perfect for smooth tourist visa processing and
              relaxed exploration.
            </li>
          </ul>

          <h3 className={styles.subTitle}>
            🎉 Experience Canadian Culture: Must-See Festivals & Events
          </h3>
          <p className={styles.card}>
            Tourists on a Canada visitor visa can experience
            the country's rich culture through its vibrant festivals held all
            year round. From music and food to history and film, Canada’s
            festivals offer something for everyone.
          </p>

          <ul>
            <li>
              <h3 className={styles.subTitle}>🎶 Summer Festivals</h3>
              Summer is packed with world-class events like the
              Montreal International Jazz Festival,
              Toronto Caribbean Carnival, and
              Calgary Stampede. Visitors also enjoy the
              Celebration of Light in Vancouver and
              Folklorama in Winnipeg. These events attract
              thousands of international travelers with valid
              Canada tourist visas.
            </li>

            <li>
              <h3 className={styles.subTitle}>🌨️ Winter Festivals</h3>
              Winter highlights include
              Carnaval de Québec
              , Ottawa Winterlude,
              Niagara Winter Festival of Lights, and
              Festival du Voyageur in Winnipeg. If you're
              visiting Canada in winter, these festivals are a must.
            </li>

            <li>
              <h3 className={styles.subTitle}>🌸 Spring Festivals</h3>
              Spring is known for the
              Canadian Tulip Festival

              in Ottawa, the Vancouver Cherry Blossom Festival,
              and Quebec’s maple syrup season. It’s a great time to travel to
              Canada with fewer crowds and colorful backdrops.
            </li>

            <li>
              <h3 className={styles.subTitle}>🍂 Fall Festivals</h3>
              Fall includes major events like the
              Toronto International Film Festival (TIFF),
              Celtic Colours International Festival, and
              Oktoberfest in Kitchener-Waterloo. Don’t miss the
              Jasper Dark Sky Festival or
              Okanagan Wine Festival for unforgettable seasonal
              experiences.
            </li>
          </ul>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}>
            Planning Your Trip to Canada – Cost, Flights & Accommodation Guide
            for Tourist Visa Applicants
          </h2>
          <p className={styles.card}>
            If you're applying for a Canada tourist visa,
            having a clear understanding of travel expenses can help you budget
            your trip effectively. From flight costs to accommodation options,
            here's essential information for planning a smooth and affordable
            visit to Canada.
          </p>

          <h3 className={styles.subTitle}>
            ✈️ Flight Costs to Canada – Average Round-Trip Fares by Region
          </h3>
          <p className={styles.card}>
            Flight fares to Canada vary based on season, departure country,
            airline, and destination city. If you're searching for the cheapest time to fly to Canada or wondering about flight ticket prices from India to Canada, use this
            table as a reference to plan ahead.
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

          <p className={styles.note}>
            <b>Note:</b> Prices are approximate and may change based on
            availability, booking time, and seasonality.
          </p>

          <h2 className={styles.subTitle}>
            🏨 Accommodation Costs in Canada – Budget, Mid-Range & Luxury
            Options
          </h2>
          <p className={styles.card}>
            Wondering where to stay in Canada during your
            visit? From backpacker-friendly hostels to luxury 5-star hotels,
            Canada offers a wide range of accommodations to suit all travel
            styles and visa durations. Here's an overview of hotel prices in major Canadian cities to help you
            plan your stay while on a Canada visitor visa.
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
            <b>Tip:</b> Booking early and choosing shoulder seasons can help
            reduce overall costs. Also consider vacation rentals, B&Bs, and
            Airbnb for long stays during your Canada tourist visit.
          </p>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>
          <h2 className={styles.subTitle}>
            Average Daily Expenses in Canada – Budget Planning for Tourist Visa
            Holders
          </h2>
          <p className={styles.card}>
            Understanding the average cost of daily living in Canada is crucial
            for those applying for a Canada tourist visa. Your
            travel budget will depend on your style—backpacker, mid-range, or
            luxury. Here's a breakdown of typical food and public transport
            costs in major Canadian cities.
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

          <p className={styles.note}>
            <b>Note:</b> These costs are averages and can vary by season,
            location, and spending style.
          </p>

          <h2 className={styles.subTitle}>
            Why Choose Canada for Your Next Vacation? – Top Reasons for Tourist
            Visa Travelers
          </h2>
          <p className={styles.card}>
            If you're considering applying for a Canada visitor visa, here’s why Canada consistently
            ranks among the world’s top tourist destinations. From natural
            beauty to safety and cultural diversity, it offers everything you
            need for a memorable international trip.
          </p>

          <ul>
            <li className={styles.card}>
              <h4 className={styles.subTitle}>
                🌲 Breathtaking Landscapes and Natural Beauty
              </h4>
              Canada is home to world-renowned natural attractions like the
              Rocky Mountains, Niagara Falls,
              and Banff National Park. Whether you're visiting
              Lake Louise, hiking in Jasper, or watching the
              Northern Lights in Yukon, the country’s scenic
              beauty is unmatched.
            </li>

            <li className={styles.card}>
              <h4 className={styles.subTitle}>
                🎭 Rich Cultural Experiences and Warm Hospitality
              </h4>
              Canada’s multicultural society welcomes visitors from around the
              world. Cities like Toronto,
              Montreal, and Vancouver
              celebrate diversity through art, food, festivals, and heritage.
              Canada is a great destination for
              cultural tourism, offering immersive experiences
              for travelers.
            </li>

            <li className={styles.card} >
              <h4 className={styles.subTitle}>
                🛡️ Safe and Secure Travel Environment
              </h4>
              Canada ranks among the safest countries globally, with low crime
              rates and stable governance. Public transport is reliable,
              healthcare is accessible, and infrastructure is well-maintained —
              making it a stress-free choice for international travelers on a
              Canada tourist visa.
            </li>
          </ul>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>
          <h2 className={styles.subTitle}>
            Canada Tourist Visa Requirements: Complete Checklist & Eligibility
            Guide (2025)
          </h2>
          <p className={styles.card}>
            Planning a trip to Canada? Before applying for a Canada Tourist Visa (Temporary Resident Visa), it's
            essential to understand the eligibility criteria and required
            documents to increase your chances of visa approval. Here's a
            detailed breakdown to help you prepare a strong and complete
            application.
          </p>

          <h3 className={styles.subTitle}>
            ✅ Who is Eligible to Apply for a Canadian Visitor Visa?
          </h3>
          <p className={styles.card}>
            To be eligible for a Canadian tourist visa, applicants must meet
            several key requirements set by Immigration, Refugees and Citizenship Canada (IRCC)
            .
          </p>

          <ul>
            <li>
              <strong className={styles.subTitle}>✔ Valid Passport:</strong>
              <ul>
                <li>Must be valid for the duration of your stay.</li>
                <li>
                  At least 6 months validity is recommended beyond your return
                  date.
                </li>
                <li>Ensure blank pages are available for visa stamps.</li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>✔ Good Health:</strong>
              <ul>
                <li>You must be medically fit to travel.</li>
                <li>
                  A medical exam may be required based on your nationality or stay duration.
                </li>
                <li>
                  Medical conditions that may be considered inadmissible must be disclosed.
                </li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>
                ✔ No Criminal Record:
              </strong>
              <ul>
                <li>Provide a clean police record.</li>
                <li>Past convictions can affect your visa approval.</li>
                <li>
                  Police clearance certificates may be required for all countries you’ve lived in for 6+ months since age 18.
                </li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>
                ✔ Strong Ties to Your Home Country:
              </strong>
              <ul>
                <li>You must prove that you will return after your visit.</li>
                <li>
                  Accepted ties include:
                  <ul>
                    <li>
                      <b>Employment proof</b>: Job letter or NOC from employer.
                    </li>
                    <li>
                      <b>Ongoing studies</b>: Enrollment verification letter.
                    </li>
                    <li>
                      <b>Property ownership</b>: Land/house ownership documents.
                    </li>
                    <li>
                      <b>Financial assets</b>: Fixed deposits, mutual funds, savings.
                    </li>
                    <li>
                      <b>Family responsibilities</b>: Marriage certificate, child’s birth certificate, elderly dependents.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>
                ✔ Proof of Sufficient Funds:
              </strong>
              <ul>
                <li>
                  You must show you can financially support yourself in Canada.
                </li>
                <li>
                  Documents may include:
                  <ul>
                    <li>Recent 3–6 months bank statements</li>
                    <li>ITR (Income Tax Returns)</li>
                    <li>Fixed deposits or investment proofs</li>
                    <li>
                      If sponsored: sponsor’s financial documents + letter of support
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>
                ✔ Letter of Invitation (Optional but Helpful):
              </strong>
              <ul>
                <li>
                  If visiting friends or family, an invitation letter from the Canadian host can strengthen your application.
                </li>
                <li>
                  It should include:
                  <ul>
                    <li>
                      Host's full name, address, and legal status in Canada
                    </li>
                    <li>
                      Your purpose of visit, duration, relationship, and accommodation plan
                    </li>
                    <li>Whether they will sponsor your stay (if applicable)</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <strong className={styles.subTitle}>
                ✔ Biometrics (If Required):
              </strong>
              <ul>
                <li>
                  Most applicants from Asia, Africa, and the Middle East need to give biometrics.
                </li>
                <li>
                  Fingerprinting and photo are taken at the nearest Visa Application Centre (VAC).
                </li>
                <li>
                  A biometric instruction letter is issued after online application and payment.
                </li>
              </ul>
            </li>
          </ul>

          <p className={styles.card}>
            Meeting these Canada visitor visa eligibility criteria and submitting a complete file improves your chances of approval. For
            expert assistance with document preparation, financial
            justification, or travel bookings, reach out to Global Visa Internationals – your trusted Canada
            tourist visa agents in India.
          </p>

          <div className={styles.formSection1}>
            <h1 className={styles.formtitle}>
              Visa And Immigration Inquiry Form
            </h1>
            <VisaForm />
          </div>
          <h2 className={styles.subTitle}>
            Step-by-Step Canada Tourist Visa Application Process (2025)
          </h2>
          <p className={styles.card}>
            Planning a trip to Canada? Here's a complete guide to the Canada visitor visa application process to help you
            navigate every step with confidence. Whether you're visiting for
            tourism, to meet family, or explore Canadian culture, these steps
            ensure your journey starts smoothly.
          </p>

          <ol type="I">
            <li>
              <b className={styles.subTitle}>Visa Type & Eligibility:</b>
              <ul>
                <li>
                  Depending on your nationality, you may need a
                  Temporary Resident Visa (TRV) or an
                  Electronic Travel Authorization (eTA) to
                  visit Canada.
                </li>
                <li>
                  Visa requirements vary based on travel purpose, duration, and
                  personal profile.
                </li>
              </ul>
            </li>

            <li>
              <b className={styles.subTitle}>Application Requirements:</b>
              <ul>
                <li>
                  Applicants are generally expected to demonstrate strong ties
                  to their home country, financial stability, and a clear reason
                  for visiting Canada.
                </li>
                <li>
                  Additional requirements may apply based on your travel history
                  or if you're visiting family or friends.
                </li>
              </ul>
            </li>

            <li>
              <b className={styles.subTitle}>Processing Time & Approval:</b>
              <ul>
                <li>
                  Visa processing timelines typically range from 2 to 6 weeks,
                  depending on country, season, and profile.
                </li>
                <li>
                  Approved applicants receive a passport submission request and
                  get their visa stamped.
                </li>
              </ul>
            </li>

            <li>
              <b className={styles.subTitle}>
                Expert Guidance by Global Visa Internationals:
              </b>
              <ul>
                <li>Unsure about the process? Avoid mistakes and delays.</li>
                <li>
                  Global Visa Internationals offers end-to-end
                  visa assistance — from profile assessment to documentation and
                  follow-ups.
                </li>
                <li>
                  Reach out to our team for a smooth and stress-free Canada visa
                  journey.
                </li>
              </ul>
            </li>
          </ol>

          <h2 className={styles.subTitle}>
            Start Your Canada Visa Application With Experts
          </h2>
          <p className={styles.card}>
            At Global Visa Internationals, we provide
            personalized guidance to ensure your Canada visitor visa application is complete,
            accurate, and professionally presented. We assist with:
          </p>
          <ul>
            <li>Document preparation & checklist verification</li>
            <li>Online form assistance & uploads</li>
            <li>Biometric appointment booking</li>
            <li>Mock interviews (if called for one)</li>
            <li>Real-time updates on your visa progress</li>
          </ul>
          <p className={styles.card}>
            Get peace of mind with expert help — contact us today and make your
            Canadian travel dream a reality!
          </p>
          <p className={styles.note}>
            <b>Disclaimer:</b> Global Visa Internationals is a private
            consultancy and is not affiliated with the Canadian government or
            IRCC.
          </p>
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
