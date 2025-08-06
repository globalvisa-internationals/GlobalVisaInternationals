
import styles from '@/Components/Visa.module.css';
import React from 'react';
import Head from 'next/head';
import VisaForm from '@/Components/VisaForm';

export const metadata = {
  title: "Dubai Tourist Visa Consultants in Bangalore | Global Visa Internationals",
  description:
    "Apply for your Dubai Tourist Visa with top consultants in Bangalore. Get fast visa approval, personalized guidance, and expert document support from Global Visa Internationals.",
  keywords:
    "Dubai tourist visa, Dubai visa consultants in Bangalore, apply for Dubai visa, Dubai tourist visa assistance, Dubai e-visa India, Dubai travel visa consultants, Dubai tourist visa Bangalore, fast Dubai visa processing",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/dubai",
  },
  openGraph: {
    type: "website",
    title: "Apply for Dubai Tourist Visa from India | Fast Visa Assistance in Bangalore",
    description:
      "Get expert Dubai Tourist Visa assistance in Bangalore with Global Visa Internationals. Trusted consultants, quick approvals, 11+ years of experience, and full document support.",
    url: "https://www.globalvisainternationals.com/Visa/tourist-visa/dubai",
    images: [
      {
        url: "https://www.globalvisainternationals.com/images/Dubai-Turist-Visa-Global-Visa-Internationals.webp",
        alt: "Dubai Tourist Visa Assistance - Global Visa Internationals",
      },
    ],
    siteName: "Global Visa Internationals",
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalvisainternationals",
    title: "Dubai Tourist Visa Experts – Fast Processing from Bangalore",
    description:
      "Need a Dubai Tourist Visa? Get complete assistance with fast processing and expert support. Trusted consultants in Bangalore since 2012.",
    images: [
      "https://www.globalvisainternationals.com/images/Dubai-Turist-Visa-Global-Visa-Internationals.webp",
    ],
  },
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
        <img src="/images/Dubai-Turist-Visa-Global-Visa-Internationals.webp" alt="Dubai-Turist-Visa-Global-Visa-Internationals" className={styles.VisaImage} />
      </div>

      <div className={styles.VisaSec}>

        <div className={styles.VisaData}>
          <h1 className={styles.Title}> Dubai Tourist Visa</h1>


          <p className={styles.card}>Planning your dream trip to the UAE? <strong className={styles.strong}>Dubai tourist visa India</strong> is now easier to obtain with expert assistance from <strong className={styles.strong}>Global Visa International</strong>. Whether you are looking for a <strong className={styles.strong}>30 day Dubai visa from India</strong>, <strong className={styles.strong}>60 day Dubai visa India</strong>, or <strong className={styles.strong}>90 day Dubai tourist visa Indians</strong>, our team ensures a smooth process from documentation to approval. For those who wish to explore the region multiple times, the <strong className={styles.strong}>Dubai multiple entry tourist visa India</strong> offers flexible travel options. We also guide you on eligibility for <strong className={styles.strong}>Dubai visa on arrival Indian citizens</strong> and updates on <strong className={styles.strong}>UAE visa on arrival India</strong> policies.</p>
          <p className={styles.card1}>✅ <strong className={styles.strong}>Get started today</strong> with a free consultation from Global Visa International – your trusted partner for Dubai visa assistance!</p>

          <h2>Dubai Transit Visa India</h2>
          <p className={styles.card}>For short layovers or stopovers, a <strong className={styles.strong}>Dubai transit visa India</strong> might be what you need. Whether you're flying with Emirates or another airline, we assist you in booking the right visa and meeting all travel requirements. Wondering about the <strong className={styles.strong}>Dubai tourist visa cost India</strong> or the <strong className={styles.strong}>30 day Dubai visa fee in rupees</strong>? We offer transparent pricing with no hidden charges, guiding you through options including <strong className={styles.strong}>cheap Dubai visa India</strong>, <strong className={styles.strong}>Dubai visa price extra charges</strong>, and <strong className={styles.strong}>Dubai visa agent charges India</strong> — so you know exactly what you're paying for.</p>
          <p className={styles.card1}>✈️ <strong className={styles.strong}>Ready to travel?</strong> Contact Global Visa International now and let us simplify your Dubai visa journey.</p>

          <h2>Apply Dubai Visa Online from India</h2>
          <p className={styles.card}>Want a quick and reliable visa application experience? You can now <strong className={styles.strong}>apply Dubai visa online from India</strong> without stress. Whether you’re going through <strong className={styles.strong}>Dubai visa through MakeMyTrip</strong>, <strong className={styles.strong}>Emirates visa service Indian passport</strong>, or other platforms like <strong className={styles.strong}>Akbar Travels Dubai visa process</strong>, we help you compare and choose the best route. You can also <strong className={styles.strong}>apply Dubai visa via airline</strong> depending on your travel booking. If you're unsure about hotel reservations, we provide assistance with <strong className={styles.strong}>Dubai visa booking hotel QR code</strong> and share insights from <strong className={styles.strong}>Atlys Dubai visa India reviews</strong> to help you make informed decisions.</p>
          <p className={styles.card1}>📱 <strong className={styles.strong}>Apply online today</strong> with Global Visa International and get expert guidance every step of the way!</p>

          <h2>Dubai Visa Documents for Indians</h2>
          <p className={styles.card}>Having the correct documents is crucial. We help you prepare your <strong className={styles.strong}>Dubai visa documents for Indians</strong>, including <strong className={styles.strong}>Dubai visa hotel booking proof</strong>, <strong className={styles.strong}>return ticket requirement Dubai visa</strong>, and even the <strong className={styles.strong}>PAN card for Dubai visa</strong>. You’ll also need a <strong className={styles.strong}>bank statement for Dubai visa</strong> and ensure <strong className={styles.strong}>passport validity six months UAE visa</strong>. For many travelers, a <strong className={styles.strong}>travel insurance requirement Dubai visa</strong> is mandatory. With our help, you’ll meet all requirements with confidence.</p>
          <p className={styles.card1}>📄 <strong className={styles.strong}>Avoid rejection and delays</strong> — Get a document checklist from our visa experts now.</p>

          <h2>Dubai Visa Processing Time India</h2>
          <p className={styles.card}>Processing your visa on time is essential. Our team explains <strong className={styles.strong}>Dubai visa processing time India</strong>, offers support for <strong className={styles.strong}>express Dubai visa 48 hours</strong>, and tracks progress on your <strong className={styles.strong}>Dubai tourist visa 3–5 days</strong> processing. Need your visa faster? Ask us about <strong className={styles.strong}>Dubai visa urgent processing India</strong>. Planning a longer stay? We’ll guide you on how to <strong className={styles.strong}>extend Dubai tourist visa from India</strong>, understand <strong className={styles.strong}>Dubai visa extension cost UAE</strong>, and the difference between <strong className={styles.strong}>visa validity vs stay duration Dubai</strong>.</p>
          <p className={styles.card1}>🚀 <strong className={styles.strong}>In a rush?</strong> Fast-track your visa with Global Visa International’s priority service.</p>

          <h2>Trusted Dubai Visa Agent India</h2>
          <p className={styles.card}>When it comes to finding a <strong className={styles.strong}>trusted Dubai visa agent India</strong> or the <strong className={styles.strong}>best visa consultancy for Dubai India</strong>, thousands of Indian travelers trust us. We help you <strong className={styles.strong}>avoid Dubai visa scams India</strong> with transparent guidance. Want real feedback? Explore <strong className={styles.strong}>Indian forum Dubai visa recommendations</strong> and learn more about <strong className={styles.strong}>visa-on-arrival eligibility Indian passport UAE</strong> and <strong className={styles.strong}>UAE visa policy India 2025</strong> updates. Stay informed with the <strong className={styles.strong}>new Dubai visa rules India 2024</strong> and the truth about <strong className={styles.strong}>visa on arrival cancelled for Indians UAE</strong>.</p>
          <p className={styles.card1}>🛡️ <strong className={styles.strong}>Don’t take risks.</strong> Choose Global Visa International – reliable, experienced, and trusted by Indian travelers.</p>

          <h2>Reddit Indian Dubai Visa Help</h2>
          <p className={styles.card}>Looking for peer feedback? Many travelers share tips on <strong className={styles.strong}>Reddit Indian Dubai visa help</strong>, offering firsthand <strong className={styles.strong}>Indian travellers Dubai visa experience</strong>. Still unsure? We explain <strong className={styles.strong}>visa rejection reasons Dubai India</strong> and answer “<strong className={styles.strong}>how much bank balance for Dubai visa Indians</strong>” to boost your approval rate. Need help with paperwork? Get <strong className={styles.strong}>dummy hotel booking Dubai visa India</strong> assistance and complete your <strong className={styles.strong}>Dubai tourist visa INR</strong> submission stress-free.</p>
          <p className={styles.card1}>🌐 <strong className={styles.strong}>Connect with experts</strong> who’ve helped thousands of Indians travel to Dubai successfully — only at Global Visa International.</p>



          <p className={styles.card}>Planning a trip to the UAE? A <strong className={styles.strong}>Dubai Tourist Visa</strong> is your gateway to explore one of the world’s most exciting destinations. From luxury shopping and iconic landmarks to desert safaris and cultural gems, Dubai has something for every traveler. Our expert <strong className={styles.strong}>Dubai Tourist Visa assistance</strong> ensures a smooth and hassle-free process so you can focus on your dream holiday.</p>

          <h2 className={styles.subTitle}>Top Tourist Attractions in Dubai</h2>

          <p className={styles.card1}>With a valid <strong className={styles.strong}>Tourist Visa for Dubai</strong>, you can enjoy the perfect blend of modern marvels and ancient culture. Don't miss these must-see spots:</p>

          <ul>
            <li className={styles.card}><strong className={styles.strong}>Burj Khalifa</strong>: Get a bird’s-eye view of Dubai from the world’s tallest building.</li>
            <li className={styles.card1}><strong className={styles.strong}>The Dubai Mall</strong>: Shop, dine, and catch the famous Dubai Fountain show.</li>
            <li className={styles.card}><strong className={styles.strong}>Palm Jumeirah</strong>: Discover luxury resorts and beaches on this iconic man-made island.</li>
            <li className={styles.card1}><strong className={styles.strong}>Dubai Creek</strong>: Ride a traditional abra and explore the historic heart of the city.</li>
            <li className={styles.card}><strong className={styles.strong}>Jumeirah Beach</strong>: Sunbathe with the majestic Burj Al Arab in the background.</li>
            <li className={styles.card1}><strong className={styles.strong}>Global Village</strong>: Explore food, art, and culture from 90+ countries (seasonal).</li>
            <li className={styles.card}><strong className={styles.strong}>Dubai Marina</strong>: Walk along the waterfront promenade, packed with restaurants and yachts.</li>
            <li className={styles.card1}><strong className={styles.strong}>Dubai Desert Safari</strong>: Enjoy dune bashing, camel rides, and a traditional Bedouin dinner.</li>
          </ul>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}>Why Apply for a Dubai Tourist Visa?</h2>

          <p className={styles.card}>Whether you're traveling for a short getaway or an extended vacation, here's why Dubai should be on your list:</p>

          <ol>
            <li className={styles.card1}><strong className={styles.strong}>Fast Visa Processing:</strong> Our <strong className={styles.strong}>Dubai Tourist Visa consultants</strong> offer quick and reliable support.</li>
            <li className={styles.card}><strong className={styles.strong}>Cultural Attractions:</strong> Visit souks, museums, and the Al Fahidi Historic District.</li>
            <li className={styles.card1}><strong className={styles.strong}>Diverse Cuisine:</strong> Taste flavors from around the world and authentic Emirati dishes.</li>
            <li className={styles.card}><strong className={styles.strong}>World-Class Entertainment:</strong> From theme parks to desert safaris, fun is guaranteed.</li>
            <li className={styles.card1}><strong className={styles.strong}>Safe & Modern:</strong> Dubai is one of the safest and most well-developed cities globally.</li>
            <li className={styles.card}><strong className={styles.strong}>Shopping Paradise:</strong> Enjoy tax-free shopping in massive malls and traditional bazaars.</li>
          </ol>

          <p className={styles.card1}>Need expert help? Our team offers complete <strong className={styles.strong}>Dubai Tourist Visa assistance</strong> — from document collection to application tracking. Whether it’s your first international trip or a frequent flyer adventure, we make visa processing simple and stress-free.</p>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <p className={styles.card1}><strong className={styles.strong}>Get in touch today with a trusted <span style={{ color: '#c00' }}>Dubai Tourist Visa consultant</span> and start your journey to the Emirates.</strong></p>

          <h1 className={styles.Title}>Dubai Tourist Visa – Easy Application & Assistance from India</h1>

          <p className={styles.card}>Planning your dream trip to the UAE? Whether you're drawn to Dubai’s luxurious malls, iconic landmarks like the Burj Khalifa, or vibrant desert adventures, securing your <strong className={styles.strong}>Dubai Tourist Visa</strong> is the first step. Our professional <strong className={styles.strong}>Dubai visa consultants</strong> are here to provide end-to-end <strong className={styles.strong}>Dubai Tourist Visa assistance</strong> to make the process simple and stress-free.</p>

          <h2 className={styles.subTitle}>Why Choose Dubai for Your Next Holiday?</h2>
          <ul>
            <li className={styles.card1}><strong className={styles.strong}>Visa on time:</strong> Quick processing for Indian passport holders.</li>
            <li className={styles.card}><strong className={styles.strong}>Safe & modern:</strong> One of the safest, most modern cities globally.</li>
            <li className={styles.card1}><strong className={styles.strong}>Luxury shopping & dining:</strong> Enjoy tax-free shopping and world-class cuisine.</li>
            <li className={styles.card}><strong className={styles.strong}>Adventure & Culture:</strong> Desert safaris, Dhow cruises, and Emirati heritage in one city.</li>
          </ul>

          <h2 className={styles.subTitle}>Types of Dubai Tourist Visas for Indians</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Visa Type</th>
                <th>Duration</th>
                <th>Stay Period</th>
                <th>Processing Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14 Days Tourist Visa</td>
                <td>14 Days</td>
                <td>14 Days</td>
                <td>2–4 working days</td>
              </tr>
              <tr>
                <td>30 Days Tourist Visa</td>
                <td>58 Days Validity</td>
                <td>30 Days Stay</td>
                <td>2–4 working days</td>
              </tr>
              <tr>
                <td>60 Days Tourist Visa</td>
                <td>60 Days</td>
                <td>60 Days</td>
                <td>2–4 working days</td>
              </tr>
              <tr>
                <td>96 Hours Transit Visa</td>
                <td>4 Days</td>
                <td>4 Days</td>
                <td>1–2 working days</td>
              </tr>
            </tbody>
          </table>

          <h2 className={styles.subTitle}>Documents Required to Apply for Dubai Tourist Visa</h2>
          <ul>
            <li className={styles.card1}>Passport (valid for at least 6 months)</li>
            <li className={styles.card}>Passport-size photograph (white background)</li>
            <li className={styles.card1}>Confirmed return air ticket</li>
            <li className={styles.card}>Hotel booking or UAE address proof</li>
            <li className={styles.card1}>Bank statement (if requested)</li>
          </ul>

          <h2 className={styles.subTitle}>Dubai Tourist Visa Fees from India (Approx.)</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Visa Type</th>
                <th>Cost (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14 Days Visa</td>
                <td>₹5,500 – ₹6,000</td>
              </tr>
              <tr>
                <td>30 Days Visa</td>
                <td>₹6,500 – ₹7,500</td>
              </tr>
              <tr>
                <td>60 Days Visa</td>
                <td>₹13,000 – ₹14,000</td>
              </tr>
              <tr>
                <td>96 Hours Transit Visa</td>
                <td>₹2,500 – ₹3,000</td>
              </tr>
            </tbody>
          </table>

          <p className={styles.note}>Note: Prices are indicative and can vary based on exchange rates and urgency.</p>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}>Why Choose Us for Dubai Tourist Visa Assistance?</h2>
          <ul>
            <li className={styles.card}>Fast & easy processing</li>
            <li className={styles.card1}>Transparent pricing</li>
            <li className={styles.card}>Expert support from our Dubai visa consultants</li>
            <li className={styles.card1}>24x7 support on WhatsApp and email</li>
          </ul>

          <p className={styles.card}><strong className={styles.strong}>Get started now! Submit your details and our team will help you apply for your Dubai Tourist Visa with confidence.</strong></p>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>
          <h2 className={styles.subTitle}>Navigating the Dubai Tourist Visa Process</h2>
          <p className={styles.card1}>Applying for a <strong className={styles.strong}>Dubai Tourist Visa</strong> from India involves a few important steps. With multiple visa types, quick processing times, and evolving rules, it's crucial to understand the process thoroughly. Here's how to apply with ease:</p>

          <ol>
            <li className={styles.card}><strong className={styles.strong}>Determine Your Visa Type:</strong> Choose between 14-day, 30-day, or 60-day tourist visas depending on your travel plans and stay duration.</li>
            <li className={styles.card1}><strong className={styles.strong}>Collect Required Documents:</strong> You’ll typically need a valid passport, a passport-sized photo, confirmed return flight tickets, hotel bookings, and sometimes a bank statement.</li>
            <li className={styles.card}><strong className={styles.strong}>Submit Your Application:</strong> You can apply through an authorized travel agency or with the help of expert <strong className={styles.strong}>Dubai visa consultants</strong> like Global Visa Internationals.</li>
            <li className={styles.card1}><strong className={styles.strong}>Wait for Processing:</strong> Most <strong className={styles.strong}>Dubai Tourist Visa applications</strong> are processed within 2 to 5 working days.</li>
            <li className={styles.card}><strong className={styles.strong}>Receive Your E-Visa:</strong> Once approved, the visa will be sent to your email and is linked to your passport.</li>
          </ol>

          <p className={styles.card1}>Feeling overwhelmed? Let Global Visa Internationals make your <strong className={styles.strong}>Dubai visa application</strong> smooth and stress-free.</p>

          <h3 className={styles.subTitle}>Let Global Visa Internationals Be Your Trusted Dubai Visa Consultant</h3>
          <p className={styles.card}>Dreaming of exploring Dubai’s skyscrapers, souks, and sandy beaches? We’ll help you get there. At Global Visa Internationals, we specialize in <strong className={styles.strong}>Dubai Tourist Visa assistance</strong> with a high success rate and personalized support.</p>

          <b className={styles.subTitle}>Our Dubai Visa Services Include:</b>
          <ul>
            <li className={styles.card1}>One-on-one guidance on selecting the right <strong className={styles.strong}>Dubai visa type</strong>.</li>
            <li className={styles.card}>Expert document checklist and submission assistance.</li>
            <li className={styles.card1}>Thorough review of your application to avoid errors or rejections.</li>
            <li className={styles.card}>WhatsApp support and updates throughout your visa journey.</li>
            <li className={styles.card1}>Travel planning tips for your Dubai itinerary.</li>
          </ul>

          <p className={styles.note}>Avoid last-minute stress or rejection. Contact Global Visa Internationals today and let us handle your <strong className={styles.strong}>Dubai Tourist Visa</strong> process end to end.</p>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h3 className={styles.subTitle}>Need Help With Dubai Tourist Visa or Urgent Visa Requests?</h3>
          <p className={styles.card}>Whether you’re planning a luxury vacation, a business visit, or a family reunion in Dubai, our consultants are here to help. With our extensive experience in <strong className={styles.strong}>Dubai visa services</strong>, we ensure you’re fully prepared for every step.</p>

          <b className={styles.subTitle}>Here’s how we simplify your Dubai visa journey:</b>
          <ol>
            <h3 className={styles.subTitle}><li className={styles.card1} >Fast Visa Processing</li></h3>
            <p className={styles.card1}>We help you apply for urgent 24-48 hour <strong className={styles.strong}>Dubai Tourist Visas</strong> with accurate documentation, so you don’t miss your travel window.</p>

            <h3><li className={styles.card} >Tailored Document Support</li></h3>
            <p className={styles.card}>We guide you on all key requirements including:</p>
            <ul>
              <li className={styles.card1}>Valid passport & passport-size photo</li>
              <li className={styles.card}>Flight tickets, hotel bookings, or sponsor documents</li>
              <li className={styles.card1}>Bank statements if needed for longer stays</li>
            </ul>

            <h3><li className={styles.card} >Real-Time Support by Dubai Visa Experts</li></h3>
            <p className={styles.card1}>Get WhatsApp and email support from a dedicated <strong className={styles.strong}>Dubai visa consultant</strong> throughout the process. We answer your queries promptly and track your application status daily.</p>

            <h3><li className={styles.card} >100% Assistance Until Visa Approval</li></h3>
            <p className={styles.card1}>From the first form to final visa delivery, we don’t stop until your <strong className={styles.strong}>Dubai Tourist Visa</strong> is ready. You just pack your bags — we’ll handle the rest.</p>
          </ol>

          <div className={styles.formSection1}>
            <VisaForm />
          </div>

          <h2 className={styles.subTitle}>Why Choose Global Visa Internationals for Dubai Tourist Visa Assistance?</h2>
          <p className={styles.card}>At Global Visa Internationals, we take pride in offering professional, transparent, and timely <strong className={styles.strong}>Dubai visa consultancy services</strong>. Here’s why thousands trust us:</p>

          <ul>
            <li className={styles.card1}><strong className={styles.strong}>Tailored Guidance:</strong> We provide country-specific visa solutions based on your profile.</li>
            <li className={styles.card}><strong className={styles.strong}>Accuracy First:</strong> All your forms and documents are reviewed multiple times.</li>
            <li className={styles.card1}><strong className={styles.strong}>End-to-End Support:</strong> From visa form filling to travel tips, we’re with you at every step.</li>
            <li className={styles.card}><strong className={styles.strong}>Proven Success:</strong> With over <strong className={styles.strong}>55,000+ visas processed</strong>, we have the expertise to get it done right.</li>
            <li className={styles.card1}><strong className={styles.strong}>Quick Turnaround:</strong> Get your Dubai visa within 2–5 working days (sometimes faster!).</li>
          </ul>

          <p className={styles.card}>We’re not just visa agents — we’re your travel partners. With 11+ years of visa expertise and 75,000+ consultations delivered, we at Global Visa Internationals proudly serve as India’s leading <strong className={styles.strong}>Dubai Tourist Visa consultants</strong>.</p>

          <p className={styles.card1}>Let Global Visa Internationals help you plan your unforgettable Dubai vacation — with peace of mind and professional visa assistance.</p>

          <p className={styles.note}>This service is provided by Global Visa Internationals, an independent visa consultancy. We are not affiliated with the UAE government or embassy.</p>


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