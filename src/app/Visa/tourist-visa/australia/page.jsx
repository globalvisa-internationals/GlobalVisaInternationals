
import styles from './Australia.module.css';
import React from 'react';
import Head from 'next/head';
import VisaForm from '@/Components/VisaForm';
// import { BreadcrumbJsonLd, LocalBusinessJsonLd, WebPageJsonLd, } from 'next-seo';

export const metadata = {
  title: "Australia Tourist Visa Consultants: Requirements, Application & Costs | Global Visa Internationals",
  description:
    "Apply for your Australia Tourist Visa with expert help from Global Visa Internationals. Learn visa requirements, estimated costs, and top Australian attractions.",
  keywords:
    "Australia tourist visa, apply Australia visitor visa, Australia visa consultant, Australia travel guide, visa for Australia from India, Australia immigration, best tourist places in Australia",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/visa/tourist-visa/australia",
  },
  openGraph: {
    title: "Australia Tourist Visa: Application, Requirements & Top Travel Tips",
    description:
      "Get expert help from Global Visa Internationals on applying for an Australia tourist visa. Learn about visa process, travel costs, and iconic Australian destinations.",
    url: "https://www.globalvisainternationals.com/visa/tourist-visa/australia",
    siteName: "Global Visa Internationals",
    images: [
      {
        url: "https://www.globalvisainternationals.com/visa-banner/Australia-Tourist-Visa-assistance-banner.webp",
        width: 1200,
        height: 630,
        alt: "Australia Tourist Visa Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GLOBALVISA1505",
    title: "Australia Tourist Visa: Application, Requirements & Top Places",
    description:
      "Plan your dream trip to Australia. Discover visa requirements, estimated expenses, and top attractions. Trusted consultants since 2017.",
    images: [
      "https://www.globalvisainternationals.com/visa-banner/Australia-Tourist-Visa-assistance-banner.webp",
    ],
  },
};



export default function Australia() {

  return (
    <>
      <Head>
        {/* Canonical & Geo Tags */}
        <link rel="canonical" href="https://www.globalvisainternationals.com/visa/tourist-visa/australia" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="ICBM" content="12.9716,77.5946" />

        {/* Elfsight (if reviews used) */}
        <script src="https://static.elfsight.com/platform/platform.js" async></script>

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
                  "name": "Tourist Visa",
                  "item": "https://www.globalvisainternationals.com/visa/tourist-visa"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Australia",
                  "item": "https://www.globalvisainternationals.com/visa/tourist-visa/australia"
                }
              ]
            })
          }}
        />

        {/* Local Business / Travel Agency Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Global Visa Internationals",
              "url": "https://www.globalvisainternationals.com",
              "logo": "https://www.globalvisainternationals.com/gvilogo.png",
              "description": "Trusted Australia Tourist & Visitor Visa consultants in Bangalore. End-to-end visa assistance, documentation, and interview prep.",
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
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
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
            })
          }}
        />
      </Head>




      <div className={styles.imageContainer}>
        <img src="/visa-banner/Australia-Tourist-Visa-assistance-banner.webp" alt="Australia Visa assistence Bannar Global Visa Internationals" className={styles.AustraliaImage} />
      </div>

      <div className={styles.AustraliaSec}>


        <div className={styles.AustraliaData}>
          <h1 className={styles.Title}>Australia Tourist Visa Agents in Bangalore | Best Australia Visitor Visa Consultants | Global Visa Internationals</h1>
          <p>Planning a trip to Australia? Whether you're dreaming of the Sydney Opera House, the Great Barrier Reef, or the rugged Outback, <strong>Global Visa Internationals</strong> provides expert assistance to simplify your <strong>Australia Tourist Visa application</strong>. Our team of professional <strong>Australia visa consultants</strong> helps you navigate the process with ease, making your journey stress-free and exciting.</p>

          <h3 className={styles.subTitle}>Why Visit Australia? Top Reasons Tourists Love It</h3>

          <p>Australia is a premier tourist destination, offering unforgettable experiences for every type of traveler. Here’s why:</p>

          <ul>
            <li>
              <strong>Diverse Landscapes:</strong> Discover Australia’s stunning natural beauty—from the red deserts of the Outback and ancient rock formations like Uluru to lush rainforests, scenic coastal drives, and the world-famous <strong>Great Barrier Reef</strong>.
            </li>
            <li>
              <strong>Unique Wildlife:</strong> Meet Australia’s one-of-a-kind animals like kangaroos, koalas, wombats, and the platypus. Visit national parks and wildlife sanctuaries across the country.
            </li>
            <li>
              <strong>World-Class Cities:</strong> Enjoy the modern attractions of Sydney, Melbourne, Brisbane, and Perth. From harbor cruises to culinary delights and cultural festivals, Australia’s cities blend lifestyle and adventure.
            </li>
            <li>
              <strong>Aboriginal Culture:</strong> Explore one of the oldest living cultures in the world. Learn about Dreamtime stories, traditional art, and sacred Indigenous landmarks with cultural tours and experiences.
            </li>
            <li>
              <strong>Adventure Tourism:</strong> Surf iconic beaches, snorkel or dive in the <strong>Great Barrier Reef</strong>, hike through Blue Mountains or Tasmania, or explore the open roads of the Outback. Adventure awaits in every corner.
            </li>
            <li>
              <strong>Beautiful Beaches:</strong> Relax on Bondi Beach, visit Whitehaven Beach in the Whitsundays, or uncover hundreds of hidden coastal gems. Australia’s beaches are among the best in the world.
            </li>
          </ul>
          <p><strong>Need help applying for your Australia Tourist Visa?</strong> Trust Global Visa Internationals — your reliable <strong>Australia visa consultant in Bangalore</strong>. Our experts assist with document preparation, visa filing, travel planning, and more.</p>
          <p className={styles.note}><strong>Get in touch today</strong> and turn your dream trip into reality!</p>


          <h3 className={styles.subTitle}>Top Tourist Places in Australia You Must Visit</h3>

          <p>Planning your trip with an <strong>Australia Tourist Visa</strong>? Discover the most iconic and unforgettable destinations across the country. This curated <strong>Australia travel guide</strong> highlights the best places to explore—from coastal cities to natural wonders.</p>

          <ol>
            <li>
              <strong>Sydney:</strong> Australia's most popular city for tourists. Visit the <strong>Sydney Opera House</strong>, walk across the <strong>Harbour Bridge</strong>, relax on <strong>Bondi Beach</strong>, and explore The Rocks historic district. A must for every tourist applying for an <strong>Australia visitor visa</strong>.
            </li>
            <li>
              <strong>Great Barrier Reef:</strong> A UNESCO World Heritage Site and the world's largest coral reef system. Dive or snorkel to experience vibrant marine life—an essential destination in any <strong>Australia tour package</strong>.
            </li>
            <li>
              <strong>Uluru (Ayers Rock):</strong> A sacred Aboriginal site located in the Northern Territory. This giant sandstone monolith is one of the most culturally significant and visually stunning landmarks in Australia.
            </li>
            <li>
              <strong>The Whitsunday Islands:</strong> Located near the Great Barrier Reef, these islands offer white-sand beaches, turquoise waters, and sailing adventures. Ideal for honeymooners and beach lovers.
            </li>
            <li>
              <strong>Kakadu National Park:</strong> One of Australia’s largest national parks, rich in Aboriginal heritage, wetlands, crocodiles, and waterfalls. A great pick for nature and wildlife enthusiasts.
            </li>
            <li>
              <strong>Gold Coast:</strong> Famous for its beaches, surfing hotspots like Surfers Paradise, theme parks, and energetic nightlife. Perfect for both family vacations and adventure travelers.
            </li>
            <li>
              <strong>Perth:</strong> A sun-soaked city in Western Australia known for scenic beaches like <strong>Cottesloe</strong>, <strong>Scarborough</strong>, and the nearby <strong>Rottnest Island</strong>, home to the smiling quokka.
            </li>
            <li>
              <strong>Brisbane:</strong> Queensland’s capital, offering cultural attractions like South Bank Parklands, riverfront walks, and wildlife experiences at Lone Pine Koala Sanctuary.
            </li>
            <li>
              <strong>Adelaide:</strong> Known for its arts scene, botanical gardens, and access to nearby wine regions like <strong>Barossa Valley</strong> and <strong>McLaren Vale</strong>. Great for those looking for a relaxed and cultured Australia vacation.
            </li>
          </ol>

          <p>Each of these destinations showcases the incredible diversity of experiences Australia has to offer. <strong>Global Visa Internationals</strong>, a trusted <strong>Australia visa consultant</strong>, helps you get the right visa and plan your dream itinerary. Let us guide your journey—stress-free and expertly handled.</p>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}>Plan Your Dream Australian Vacation</h2>
          <p>Planning to visit Australia on a <strong>tourist visa</strong> but not sure where to begin? Start with our personalized travel quiz and discover the ideal itinerary for your perfect Australian getaway. Whether you're seeking beaches, culture, or adventure — we’ve got you covered.</p>

          <h2 className={styles.subTitle}>Sample Australia Travel Itineraries</h2>
          <p>Explore hand-picked <strong>Australia trip itineraries</strong> designed for different travel styles and visa durations:</p>
          <ul>
            <li><strong>7-Day East Coast Highlights:</strong> Visit Sydney, Brisbane, Gold Coast, and the Great Barrier Reef.</li>
            <li><strong>14-Day Best of Australia:</strong> Discover Sydney, Melbourne, Uluru (Ayers Rock), and tropical Queensland.</li>
            <li><strong>10-Day West Coast Adventure:</strong> Experience Perth, Exmouth, and Broome with pristine beaches and outback vibes.</li>
          </ul>

          <h2 className={styles.subTitle}>Cost of Traveling to Australia from India (2025)</h2>
          <p>Understanding the estimated <strong>cost of Australia trip from India</strong> helps in planning your budget effectively. Here's a breakdown of typical expenses for tourists applying for an <strong>Australia visitor visa (subclass 600)</strong>:</p>

          <ul>
            <li>
              <strong>Visa Fees:</strong> The Australia tourist visa (subclass 600) costs approximately <strong>AUD 190</strong> (around <strong>INR 10,500</strong>). Note that visa fees may vary based on currency rates and government revisions.
            </li>
            <li>
              <strong>Flight Costs:</strong> Return airfare from India to Australia generally ranges between <strong>INR 22,000 to INR 50,000</strong> or more, depending on booking time, airline, and travel season.
            </li>
            <li>
              <strong>Estimated Daily Living Expenses:</strong> Depending on your travel style, here’s what you might expect to spend per day:
              <ul>
                <li><strong>Budget Travelers:</strong> AUD 89 - AUD 100/day (~INR 4,900 - 5,500): Stay in hostels, cook meals, use public transport.</li>
                <li><strong>Mid-Range Travelers:</strong> AUD 230 - AUD 259/day (~INR 12,700 - 14,300): Comfortable hotels, occasional dining out, guided tours.</li>
                <li><strong>Luxury Travelers:</strong> AUD 621 - AUD 699/day (~INR 34,200 - 38,500): 5-star hotels, gourmet dining, private experiences.</li>
              </ul>
              <p><strong>Average Australia trip cost per person:</strong> Budget at least <strong>AUD 150 - 300/day</strong> (~INR 8,250 - 16,500) excluding visa and flight costs.</p>
            </li>

            <li>
              <h3 className={styles.subTitle}>Breakdown of Example Expenses</h3>
              <ul>
                <li><strong>Accommodation:</strong> Hostels (AUD 37–42), mid-range hotels (AUD 100–112), luxury hotels (AUD 270+).</li>
                <li><strong>Meals:</strong> Budget meals (AUD 10–15), mid-range dining (AUD 25–50), fine dining (AUD 80+).</li>
                <li><strong>Local Transport:</strong> Public transport pass (AUD 8–16/day), taxi fares start from AUD 3–7 base fare.</li>
              </ul>
            </li>

            <li>
              <strong>Activities & Tours:</strong> Costs vary. For example, a full-day <strong>Great Barrier Reef tour</strong> can range between <strong>AUD 150–300</strong>. Always pre-book to secure better rates and availability.
            </li>
          </ul>

          <p >Need help budgeting or booking your Australia visa? <strong>Global Visa Internationals</strong> is your trusted <strong>visa consultant in India</strong> for seamless <strong>tourist visa application</strong> and travel planning support. Contact us today for expert guidance!</p>

          <h2 className={styles.subTitle}>Australia Trip Budget Calculator</h2>
          <p>Planning your budget in advance is essential for a stress-free holiday. Here’s an estimated cost breakdown for a 10-day trip to Australia (excluding visa and airfare):</p>
          <ul>
            <li><strong>Budget Travel:</strong> AUD 890 – 1,000 (approx. INR 49,000 – 55,000)</li>
            <li><strong>Mid-Range Travel:</strong> AUD 2,300 – 2,590 (approx. INR 126,500 – 142,500)</li>
            <li><strong>Luxury Travel:</strong> AUD 6,210 – 6,990 (approx. INR 341,500 – 384,500)</li>
          </ul>
          <p>Note: These are estimated costs and may vary based on season, city, and personal preferences. Always plan with a buffer.</p>

          <h2 className={styles.subTitle}>Top Tips for a Successful Australia Tour</h2>
          <ol>
            <li><strong>Plan in Advance:</strong> Research the best seasons to visit Australia, tourist visa requirements, and recommended routes.</li>
            <li><strong>Book Early:</strong> Lock in flights, accommodation, and Australia tourist visa slots to avoid last-minute rush.</li>
            <li><strong>Stay Secure:</strong> Keep your travel documents safe and be aware of local customs and safety guidelines.</li>
            <li><strong>Be Flexible:</strong> Australia is vast. Embrace surprises and leave space for spontaneous experiences.</li>
            <li><strong>Enjoy Every Moment:</strong> Capture memories, relax, and experience Australia’s diverse landscapes and cultures to the fullest.</li>
          </ol>

          <h2 className={styles.subTitle}>Top Attractions & Unique Australian Experiences</h2>
          <ul>
            <li><strong>Hidden Gems & Local Experiences:</strong>
              <ul>
                <li>Admire ancient Aboriginal rock art in the remote Kimberley region.</li>
                <li>Swim with whale sharks at Ningaloo Reef – a lesser-known alternative to the Great Barrier Reef.</li>
                <li>Hike Tasmania’s Overland Track, a stunning multi-day trek through wild landscapes.</li>
              </ul>
            </li>
            <li><strong>Cultural Snippets to Know Before You Go:</strong>
              <ul>
                <li>"G'day" is Aussie slang for hello!</li>
                <li>Australians enjoy “barbies” — barbecues with family and friends.</li>
                <li>Vegemite on toast is a local favorite — try it at least once!</li>
              </ul>
            </li>
            <li><strong>Food & Drink Highlights:</strong>
              <ul>
                <li>Enjoy freshly shucked Sydney rock oysters and barramundi.</li>
                <li>Sample premium Australian wines in the Barossa and Yarra Valleys.</li>
                <li>Don’t miss an authentic Aussie BBQ with grilled meats and seafood.</li>
              </ul>
            </li>
            <li><strong>Responsible & Sustainable Travel Tips:</strong>
              <ul>
                <li>Choose eco-certified operators for tours and wildlife experiences.</li>
                <li>Respect Aboriginal cultural sites and learn about Indigenous heritage.</li>
                <li>Minimize plastic use and follow local waste disposal guidelines.</li>
              </ul>
            </li>
          </ul>

          <p>Whether you’re a budget traveler or luxury seeker, planning ahead helps you make the most of your <strong>Australia tourist visa</strong> journey. Need expert guidance? Contact <strong>Global Visa Internationals</strong> for visa support and personalized travel planning.</p>

          <ol>
            <li><strong>Great Barrier Reef:</strong> A UNESCO World Heritage Site and the world's largest coral reef system, offering breathtaking snorkeling and diving experiences. It's one of the top tourist attractions in Australia.</li>

            <li><strong>Uluru (Ayers Rock):</strong> A culturally significant landmark in the heart of the Outback, sacred to the Aboriginal Anangu people. Best known for its fiery red hues at sunrise and sunset.</li>

            <li><strong>Sydney Opera House:</strong> An architectural marvel and one of the most iconic places to visit in Australia. Attend world-class performances or take a guided tour along Sydney Harbour.</li>

            <li><strong>Melbourne Cricket Ground (MCG):</strong> A historic and world-renowned sports venue, ideal for cricket and AFL fans. A must-visit spot for sports tourism in Australia.</li>

            <li><strong>Wagga Wagga:</strong> A picturesque regional town in New South Wales, offering peaceful landscapes, vibrant cultural festivals, and scenic apple orchards.</li>

            <li><strong>Mount Kosciuszko National Park:</strong> Home to Australia’s highest peak, this park features alpine hiking trails, snow sports in winter, and breathtaking nature throughout the year.</li>

            <li><strong>Gold Coast:</strong> A coastal gem in Queensland famous for its stunning beaches, surfing hot spots, luxury resorts, and vibrant nightlife. One of the most popular destinations for international tourists in Australia.</li>
          </ol>

          <h2 className={styles.subTitle}>Additional Travel Tips for Your Australia Tourist Visa Journey</h2>
          <ol>
            <li><strong>Prepare for Australia’s Diverse Weather:</strong> From tropical heat in the north to cooler climates in the south, Australia’s weather varies widely. Pack appropriate clothing and check seasonal forecasts before your trip.</li>

            <li><strong>Understand Local Culture & Etiquette:</strong> Australians are friendly and casual, but respecting Aboriginal traditions and local customs will enrich your experience. Global Visa Internationals can brief you on cultural dos and don’ts before you fly.</li>

            <li><strong>Stay Hydrated & Sun-Safe:</strong> Australia's sun is strong—even in cooler months. Use SPF sunscreen, wear hats, and drink plenty of water, especially during outdoor tours and sightseeing.</li>

            <li><strong>Plan for Visa Validity & Extensions:</strong> Ensure your Australian tourist visa (subclass 600) remains valid for your entire stay. If you wish to extend your trip, consult trusted visa consultants like <strong>Global Visa Internationals</strong> to guide you through the visa extension process smoothly.</li>

            <li><strong>Learn Local Slang & Phrases:</strong> English is the official language, but Aussies have unique slang like “arvo” (afternoon) and “mate.” Learning a few phrases helps you connect better with locals during your trip.</li>

            <li><strong>Explore Outdoor Adventures Safely:</strong> From surfing in Byron Bay to bushwalking in Tasmania, Australia is an outdoor paradise. Always follow safety guidelines and consult our travel advisors for the best nature-friendly travel options.</li>

            <li><strong>Need Help Planning?</strong> Whether it's choosing destinations, understanding visa rules, or budgeting your trip, <strong>Global Visa Internationals</strong> provides complete end-to-end support for your Australia travel planning. Contact us for expert visa assistance and personalized travel tips.</li>
          </ol>




          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}>How to Apply for an Australian Tourist Visa from India</h2>
          <p>Planning a trip to Australia? Indian citizens must apply for the <strong>Australia Tourist Visa – Visitor Visa (Subclass 600)</strong> under the Tourist Stream. This visa allows travelers to explore Australia for leisure, holidays, or visiting family and friends. Here’s a step-by-step guide to ensure your application is smooth and successful:</p>

          <ul>
            <li><strong>Visa Eligibility Criteria:</strong> Applicants must demonstrate genuine intentions to visit Australia for tourism purposes only. You must have sufficient funds, be outside Australia during application and decision stages, and not plan to work during your stay.</li>

            <li><strong>Online Application Process:</strong> All tourist visa applications must be submitted through the Australian Government’s official <em>ImmiAccount</em> portal.</li>

            <li><strong>Key Documents Required:</strong>
              <ul>
                <li>Valid passport with a minimum of six months’ validity.</li>
                <li>Recent bank statements (3 months) showing a minimum balance of approx. <strong>AUD 5,000</strong> (₹3.5 lakhs).</li>
                <li>Proof of strong ties to India – such as employment letter, college ID, property documents, or family evidence.</li>
                <li>Detailed travel itinerary and accommodation bookings.</li>
                <li>National ID proof (Aadhaar, PAN card).</li>
                <li>Recent passport-size photographs (as per Australia visa photo guidelines).</li>
                <li>Additional documents may be required based on your profile.</li>
              </ul>
            </li>

            <li><strong>Visa Fee:</strong> Approx. <strong>AUD 190</strong> (subject to change by the Department of Home Affairs).</li>
            <li><strong>Processing Time:</strong> Standard processing time is 3–4 weeks. Early application is strongly recommended.</li>
          </ul>

          <p><strong>Accuracy matters.</strong> Even minor errors can delay or jeopardize your visa approval. Partnering with an expert <strong>Australia visa consultant</strong> can significantly improve your chances of success.</p>

          <h2 className={styles.subTitle}>Why Trust Global Visa Internationals for Your Australian Visa?</h2>

          <p>At <strong>Global Visa Internationals</strong>, we specialize in providing <strong>end-to-end tourist visa support</strong> for travelers across India. Our expertise in <em>Australia visitor visas</em> ensures your journey begins hassle-free.</p>

          <ul>
            <li><strong>Personalized Support:</strong> Every client receives dedicated visa assistance tailored to their travel profile.</li>
            <li><strong>Expert Documentation Help:</strong> We guide you through paperwork, financials, and requirements to avoid rejections.</li>
            <li><strong>Stress-Free Process:</strong> We manage the process so you can focus on planning your trip, not the formalities.</li>
            <li><strong>Mock Interview Sessions:</strong> Preparing for visa interviews? We help you face it confidently with expert coaching.</li>
            <li><strong>Proven Success:</strong> With <strong>55,000+ visas processed</strong> and <strong>75,000+ consultations</strong> completed, our clients trust us for a reason.</li>
          </ul>

          <p>Whether it’s your first international trip or a family vacation to Sydney or Melbourne, <strong>Global Visa Internationals</strong> ensures your <strong>Australia travel visa</strong> experience is smooth, secure, and successful.</p>

          <p><strong>With over 11+ years of experience</strong> as leading <strong>visa consultants in Bangalore</strong>, we’re proud to be India’s preferred choice for <strong>tourist visa guidance</strong>. Our team stays updated on Australia’s latest visa policies to give you a competitive edge.</p>

          <p>Let <strong>Global Visa Internationals</strong> help you explore the wonders of Australia — from the Great Barrier Reef to the Outback — with expert visa guidance and personalized travel support.</p>

          <p className={styles.note}><em>Disclaimer:</em> Global Visa Internationals is an independent visa consultancy and is not affiliated with the Australian Government or any embassy. We provide advisory services to make your visa process efficient and accurate.</p>

        </div>
        <div className={styles.formSection}>

          <VisaForm />
        </div>

      </div>
      <section id='Client Reviews'>

        <div className="elfsight-app-f560162c-1e98-4995-97af-3da789ac6ec5" data-elfsight-app-lazy></div>
      </section>

    </>
  )
}