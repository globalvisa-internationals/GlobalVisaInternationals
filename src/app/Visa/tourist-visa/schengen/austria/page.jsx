import styles from "@/Components/Visa.module.css";
import VisaForm from "@/Components/VisaForm";
import { ReviewSchema } from "@/Components/ReviewSchema";
import ReviewCarousel from "@/Components/ReviewCarousel";


export const metadata = {
    metadataBase: new URL("https://www.globalvisainternationals.com"),
    title: "Apply for Austria Tourist Visa from India | Austria Schengen Visa Experts",
    description:
        "Apply for your Austria Tourist Visa from India with Global Visa Internationals (GVI). Get expert guidance for documentation, appointment booking, and interview preparation to travel smoothly across Austria and the Schengen area.",
    keywords: [
        "Austria tourist visa from India",
        "Austria Schengen visa",
        "apply Austria visa India",
        "Austria visitor visa",
        "Austria business visa",
        "Austria visa consultants Bangalore",
        "Austria visa application process",
        "Austria visa documents required",
        "Austria visa fees India",
        "Schengen visa for Austria",
    ],
    robots: "index, follow",
    canonical: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/austria",
    alternates: {
        canonical:
            "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/austria",
    },
    openGraph: {
        title:
            "Austria Tourist Visa from India | Expert Austria Schengen Visa Assistance",
        description:
            "Global Visa Internationals helps Indian travellers apply for Austria tourist, visitor, and business visas. Get expert help with requirements, documentation, and appointments for your Austria visa.",
        url: "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/austria",
        siteName: "Global Visa Internationals",
        images: [
            {
                url: "https://www.globalvisainternationals.com/tourist-visa/Austria-Tourist-Visa-Assistance-GVI.jpg",
                width: 1200,
                height: 630,
                alt: "Austria Tourist Visa Assistance by Global Visa Internationals",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@GLOBALVISA1505",
        title:
            "Austria Tourist Visa from India | Global Visa Internationals (GVI)",
        description:
            "Planning a trip to Austria? Get professional visa guidance from Global Visa Internationals — experts in Austria tourist and Schengen visa processing for Indian travellers.",
        images: [
            "https://www.globalvisainternationals.com/tourist-visa/Austria-Tourist-Visa-Assistance-GVI.jpg",
        ],
    },
    other: {
        "geo.region": "IN-KA",
        "geo.placename": "Bangalore",
        ICBM: "12.9716,77.5946",
    },
};

export default function Austria_Tourist_Visa_Assistance() {
    const pageUrl =
        "https://www.globalvisainternationals.com/Visa/tourist-visa/schengen/austria";

    const jsonLdSchemas = [
        // Breadcrumb Schema
        {
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
                    name: "Austria Tourist Visa",
                    item: pageUrl,
                },
            ],
        },

        // Organization Schema
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Global Visa Internationals",
            url: "https://www.globalvisainternationals.com",
            logo: "https://www.globalvisainternationals.com/gvilogo.png",
            email: "operations@globalvisainternationals.com",
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    telephone: "+91-7022213466",
                    contactType: "Customer Service",
                    areaServed: "IN",
                    availableLanguage: ["English", "Kannada", "Hindi"],
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
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "G-F9, Business Point, 137 Brigade Road, Next to Brigade Tower",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560025",
                addressCountry: "IN",
            },
        },

        // LocalBusiness Schema
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Global Visa Internationals",
            image:
                "https://www.globalvisainternationals.com/tourist-visa/Austria-Tourist-Visa-Assistance-GVI.jpg",
            "@id": "https://www.globalvisainternationals.com",
            url: "https://www.globalvisainternationals.com",
            telephone: "+91-7022213466",
            email: "operations@globalvisainternationals.com",
            priceRange: "₹₹",
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "G-F9, Business Point, 137 Brigade Road, Next to Brigade Tower",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560025",
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9716,
                longitude: 77.5946,
            },
            openingHours: "Mo-Sa 10:00-18:00",
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "314",
            },
        },

        // Service Schema
        {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Austria Tourist Visa Assistance",
            provider: {
                "@type": "Organization",
                name: "Global Visa Internationals",
                url: "https://www.globalvisainternationals.com",
            },
            areaServed: {
                "@type": "Place",
                name: "India",
            },
            description:
                "End-to-end Austria Tourist Visa assistance for Indian travellers — documentation, form filling, appointment scheduling, and interview guidance by Global Visa Internationals.",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Visa Services",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Austria Tourist Visa Assistance",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Austria Business Visa Assistance",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Austria Visitor Visa Guidance",
                        },
                    },
                ],
            },
        },

        // WebPage Schema
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Austria Tourist Visa Assistance from India",
            url: pageUrl,
            description:
                "Expert Austria Tourist Visa assistance for Indian travellers — from documentation to embassy appointments, GVI makes your visa process hassle-free.",
            inLanguage: "en-IN",
            isPartOf: {
                "@type": "WebSite",
                url: "https://www.globalvisainternationals.com",
            },
        },

        // FAQPage Schema
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How long does it take to get an Austria tourist visa from India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Processing for an Austria tourist visa from India usually takes 10–15 working days after your appointment, depending on the consulate and season.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What documents are required for an Austria tourist visa?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "You’ll need a valid passport, completed visa form, travel itinerary, proof of accommodation, travel insurance, financial proof, and a cover letter stating your purpose of visit.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does Global Visa Internationals assist with Austria business visas?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Global Visa Internationals offers full support for Austria business visa applications — including document review, invitation letter verification, and appointment scheduling.",
                    },
                },
            ],
        },
    ];

    return (
        <>
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}

            <div className={styles.imageContainer}>
                <img
                    src="/tourist-visa/Austria-Tourist-Visa-Assistance-GVI.jpg"
                    alt="Austria Tourist Visa Assistance GVI"
                    className={styles.VisaImage}
                />
            </div>

            <div className={styles.VisaSec}>
                <div className={styles.VisaData}>
                    <h1 className={styles.Title}>
                        Apply for Austria Tourist Visa from India | Austria Schengen Visa Experts
                    </h1>

                    <h4 className={styles.subTitle}>
                        ✈ Travel to Austria with Confidence — Expert Austria Tourist Visa Assistance for Indian Travellers
                    </h4>

                    <p>    Dreaming of exploring the stunning Alps, Vienna’s imperial charm, or Salzburg’s musical beauty?    A Austria tourist visa from India (Schengen Type C - short stay)    lets you discover Austria and travel freely across the Schengen area for up to 90 days.    Whether for tourism, visiting family, or leisure travel,{" "} <b className={styles.strong}>Global Visa Internationals (GVI)</b> — your trusted{" "}    Austria Schengen visa consultants in India —    provide end-to-end support from documentation to visa appointment booking and embassy updates.</p>

                    {/* --- Sales Pitch --- */}
                    <div className={styles.salesPitch}>
                        <p><b className={styles.strong}>        Let Global Visa Internationals (GVI) take the stress out of your Austria visa process.    </b>{" "}    We handle everything professionally, ensuring accuracy, speed, and embassy compliance.</p>
                        <ul>
                            <li><b className={styles.strong}>Complete Documentation:</b> We collect, prepare, and verify all{" "}    Austria tourist visa documents required for your application.</li>
                            <li><b className={styles.strong}>Application Form Filing:</b> Our team accurately fills out your{" "}    Austria visa form as per embassy standards.</li>
                            <li><b className={styles.strong}>Tailored Case File:</b> We create a personalized{" "}    Austria visa checklist and documentation plan based on your travel history.</li>
                            <li><b className={styles.strong}>Professional Drafting:</b> GVI drafts your cover letter and provides    samples for NOC or leave approval letters.</li>
                            <li><b className={styles.strong}>Notarization Support:</b> If required, we manage document notarization    — no legal hassles or court visits needed.</li>
                            <li><b className={styles.strong}>Simple Process for You:</b> Just share your documents, review the set we prepare,    then attend your{" "}<b className={styles.strong}>Austria tourist visa appointment at VFS</b> for biometrics and submission.</li>
                            <li><b className={styles.strong}>A-to-Z Handling:</b> After submission, GVI tracks your{" "}    Austria Schengen visa status, provides updates, and ensures timely delivery.</li>
                        </ul>
                        <p><b className={styles.strong}>        With GVI, your Austria tourist visa application is smooth, accurate, and completely stress-free.    </b></p>
                        <a href="tel:+917022213466" className={styles.callButton}>    📞 Get Free Eligibility Check</a>
                    </div>

                    <p>    With years of experience in Schengen visa processing, GVI ensures a transparent, reliable, and    success-driven Austria visa journey for every Indian traveller.</p>

                    <h2 className={styles.subTitle}>What Is an Austria Tourist Visa?</h2>
                    <p>    An Austria tourist visa (Type C - short stay) allows travel for sightseeing,    leisure, or family visits. It also permits entry into other{" "}    Schengen countries for up to 90 days within a 180-day period.</p>
                    <p>    Our experts help you with{" "}<b className={styles.strong}>Austria visa requirements</b>,{" "}<b className={styles.strong}>visa application process</b>, and{" "}<b className={styles.strong}>Austria tourist visa documents</b>,    ensuring a seamless experience from start to finish.</p>

                    <h2 className={styles.subTitle}>Austria Schengen Visa Duration & Validity</h2>
                    <p>    An Austria Schengen visa for Indian is usually issued for up to 90 days within a 180-day window.    The number of entries (single or multiple) depends on your{" "}    travel history and embassy discretion.    GVI ensures your file meets all{" "}    Austria visa eligibility criteria and documentation standards.</p>

                    <h2 className={styles.subTitle}>How to Apply for Austria Tourist Visa from India</h2>
                    <p>If you’re wondering how to apply for an Austria tourist visa, here’s how GVI makes it effortless:</p>
                    <ol>
                        <li> <b className={styles.strong}>Step 1 - Free Eligibility Check:</b> Confirm your travel purpose and visa category.</li>
                        <li><b className={styles.strong}>Step 2 - Gather Documents:</b> We assist with official{" "}    documents for Austria tourist visa from India.</li>
                        <li><b className={styles.strong}>Step 3 - Form Completion:</b> Our experts accurately fill your{" "}    Austria visa application form.</li>
                        <li><b className={styles.strong}>Step 4 - Appointment Booking:</b> We schedule your{" "}    Austria tourist visa appointment at VFS.</li>
                        <li><b className={styles.strong}>Step 5 - File Submission:</b> Submit biometrics and complete the process.</li>
                        <li><b className={styles.strong}>Step 6 - Track & Receive:</b> We track your{" "}    Austria visa processing time and update you until your passport is ready.</li>
                    </ol>

                    <h2 className={styles.subTitle}>Austria Tourist Visa Requirements for Indians</h2>
                    <ul>
                        <li>Valid passport (minimum 6 months validity)</li>
                        <li>Completed Austria visa application form</li>
                        <li>Recent photographs (Schengen specifications)</li>
                        <li>Travel medical insurance (minimum €30,000 coverage)</li>
                        <li>Financial proof — recent bank statements, ITR, or sponsorship letter</li>
                        <li>Confirmed flight itinerary & hotel booking requirement</li>
                        <li>Cover letter explaining your travel purpose</li>
                    </ul>
                    <p>    GVI reviews and verifies every document to ensure{" "}    embassy compliance and avoid unnecessary delays or rejections.</p>
                    <a href="tel:+917022213466" className={styles.callButton}>    📞 Get Free Eligibility Check</a>

                    <h2 className={styles.subTitle}>Austria Tourist Visa Fee & Processing Time (India 2026)</h2>
                    <ul>
                        <li><b className={styles.strong}>Adult Visa Fee:</b> €90 (~₹9,300)</li>
                        <li><b className={styles.strong}>Children (6-12 years):</b> €45 (~₹4,700)</li>
                        <li><b className={styles.strong}>Children below 6 years:</b> Free</li>
                        <li><b className={styles.strong}>VFS Charges:</b> Additional (city dependent)</li>
                    </ul>
                    <p>    Average Austria visa processing time  is 15-20 working days.    We also assist with fast-track Austria tourist visa  options when available.</p>

                    <h2 className={styles.subTitle}>Common Reasons for Austria Visa Rejection</h2>
                    <p>    Most rejections happen due to missing documents or unclear intent.    GVI’s team minimizes risks with precision:</p>
                    <ul>
                        <li><b className={styles.strong}>Incomplete Application:</b> We audit your file for completeness.</li>
                        <li><b className={styles.strong}>Insufficient Funds:</b> We help strengthen your Austria visa bank statement requirement.</li>
                        <li><b className={styles.strong}>Unclear Purpose:</b> We draft your professional cover letter.</li>
                        <li><b className={styles.strong}>Interview Prep:</b> Our experts guide you on Austria visa interview questions.</li>
                    </ul>
                    <p>    If your visa was refused, GVI assists with the{" "}    appeal Austria visa rejection / refusal process efficiently.</p>

                    <h2 className={styles.subTitle}>Why Choose Global Visa Internationals — Best Austria Visa Consultants in India</h2>
                    <p><b className={styles.strong}>Global Visa Internationals (GVI)</b> is a leading Schengen visa consultancy helping Indian travellers    apply for an Austria tourist visa online smoothly and confidently.</p>
                    <ul>
                        <li>1200+ Schengen visas processed successfully since 2018</li>
                        <li>High approval rate for Austria tourist visas</li>
                        <li>End-to-end file handling, verification, and tracking</li>
                        <li>Dedicated case managers for personalized support</li>
                        <li>Transparent pricing — no hidden charges</li>
                        <li>Reapplication & rejection appeal assistance</li>
                    </ul>

                    {/* --- Reinforced Sales Pitch --- */}
                    <div className={styles.salesPitch}>
                        <p><b className={styles.strong}>Leave the stress to us — we handle your Austria visa from start to finish.</b>{" "}    From documentation and appointment booking to embassy coordination and follow-up,<b className={styles.strong}> Global Visa Internationals (GVI)</b> ensures your{" "}    Austria Schengen visa file is accurate, complete, and embassy-approved.    You just share your documents — we do the rest.</p>
                    </div>

                    <h2 className={styles.subTitle}>✈ Apply for Your Austria Tourist Visa Online — Start Your Journey Today!</h2>
                    <p>    Whether it’s a honeymoon, solo Europe trip, or family vacation,{" "}<b className={styles.strong}>apply for your Austria tourist visa online</b> easily with{" "}<b className={styles.strong}>Global Visa Internationals</b>.</p>
                    <p className={styles.note}>    <b className={styles.strong}>Our experts simplify each step —</b> from <b className={styles.strong}>eligibility</b> and{" "}    <b className={styles.strong}>Austria tourist visa documents</b> to{" "}    <b className={styles.strong}>VFS appointment booking</b> and final delivery — ensuring 100% accuracy and embassy compliance.</p>

                    <div className={styles.ctaBox}>
                        <p>    Contact <b className={styles.strong}>Global Visa Internationals (GVI)</b> today to begin your{" "}    Austria Schengen visa application — and let our team turn your Europe dreams into reality.</p>
                        <ul>
                            <li><b className={styles.strong}>Call Now:</b> +91-7022213466</li>
                            <li><b className={styles.strong}>Email:</b> operations@globalvisainternationals.com</li>
                            <li><b className={styles.strong}>Start Online Application:</b> <a href="#">Apply Now</a></li>
                        </ul>
                        <a href="tel:+917022213466" className={styles.callButton}>    📞 Get Free Eligibility Check</a>
                    </div>

                    <p>    Your European adventure begins with{" "}<b className={styles.strong}>Global Visa Internationals</b> — your reliable partner for{" "}    Austria tourist visa assistance in India.</p>
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
