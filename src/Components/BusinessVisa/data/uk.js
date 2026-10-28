// Components/BusinessVisa/data/uk.js
// Plain data for the shared BusinessVisaPage template. Text is carried over from the old page.
//
// ⚠ REVIEW BEFORE PUBLISHING (found while converting, not changed here):
//  - The old FAQ schema was about the Innovator Founder / Start-Up visa (£1,036), but the visible page is
//    about the UK Business Visitor (Standard Visitor) visa plus a Paris/Schengen visa. The FAQ below is
//    rewritten from the page's own facts, and the visible FAQ and FAQ schema now match.
//  - The old Service offers (Innovator Founder, Investor, Start-Up) are kept as-is, but the page does not
//    cover those routes. Edit them or add content for them.
//  - UK fees: the page says "approx. £115" for the Standard Visitor visa. The UK government fee has since
//    risen (£135 from 8 April 2026, per gov.uk). Confirm and update before publishing.
//  - "Start-Up visa" has been closed to new applications in the UK, and the Innovator Founder fee is now higher.
//  - Claims "1,000+ visas" and "98% success rate" (the meta description says 99%) are kept verbatim.
//  - The old page repeated keyword phrases such as "UK business visa India sponsor letter". These are kept
//    where they were part of a heading or list, but trimmed from the intro to read naturally.

const uk = {
  country: "UK",
  pagePath: "/Visa/business-visa/uk",
  heroImg: "/business-visa/UK_Business_Visa_Assistance.webp",
  heroAlt: "UK Business Visa Assistance",
  serviceType: "UK Business Visa Application Assistance",
  serviceOffers: [
    "UK Innovator Founder Visa Assistance",
    "UK Investor Visa Guidance",
    "UK Start-Up Visa Consultation",
  ],
  rating: { value: "4.8", count: "230" },

  meta: {
    title: "UK Business Visa Assistance | Apply for UK Business & Investment Visa from India",
    description:
      "Planning a business trip to the UK? Get your UK Business Visa approved faster with Global Visa Internationals. 99% success rate, personalized checklist, and complete visa support.",
    keywords: [
      "UK business visa",
      "apply business visa UK",
      "UK investor visa",
      "UK entrepreneur visa",
      "business visa consultants",
      "business migration to UK",
    ],
    og: {
      title: "Apply for UK Business Visa | Global Visa Internationals",
      description:
        "Get expert help applying for a UK Business Visa from India. Learn eligibility, document requirements, and costs for UK entrepreneur and investor visas.",
      imageAlt: "UK Business Visa Assistance",
    },
    tw: {
      title: "UK Business Visa | Application, Cost & Eligibility",
      description:
        "Explore UK Business Visa options for entrepreneurs and investors. Get step-by-step visa support from Global Visa Internationals.",
    },
  },

  eyebrow: "UK & Paris Business Visa",
  h1: {
    main: "UK Business Visa | Expand, Invest & Grow Your Business in the United Kingdom",
    em: "",
  },
  lead:
    "Attend meetings, trade fairs and business events in London & Paris with one expert-assisted European business visa.",
  chips: ["UK stay up to 6 months", "Paris (Schengen) up to 90 days", "Invitation letters drafted", "Embassy-level checks"],

  facts: [
    { icon: "Calendar", value: "6 months", label: "UK Business Visitor stay", sub: "For meetings, conferences and trade fairs" },
    { icon: "Globe", value: "90 / 180", label: "Paris (Schengen) stay", sub: "Up to 90 days in any 180-day period" },
    { icon: "Coins", value: "~£115", label: "UK Standard Visitor fee", sub: "Per the old page. Check the current fee" },
    { icon: "Clock", value: "~3 weeks", label: "UK decision time", sub: "From the biometric appointment. Paris: 5–15 working days" },
  ],

  intro: [
    "Planning to visit the UK or France for business meetings, corporate networking, trade exhibitions or client visits? A **UK Business Visitor Visa** (for a London corporate trip) or a **Paris business visa** from India lets Indian professionals and entrepreneurs enter prestigious business hubs, London and Paris, with confidence. At **Global Visa Internationals (GVI)**, we provide expert assistance for your European business travel from India, ensuring smooth, compliant and high-success applications for both your London business meetings and Paris trade show visits.",
  ],

  faqs: [
    {
      q: "What is a UK Business Visa?",
      a: "The UK Business Visitor Visa permits Indian citizens to travel to the United Kingdom (London) for official business purposes such as attending conferences, client meetings, trade shows, signing contracts, or facilitating a London branch setup. It typically allows a stay of up to 6 months.",
    },
    {
      q: "How much does a UK Business Visa cost?",
      a: "The page lists approximately £115 for the Standard Visitor Visa (up to 6 months), with long-term options at higher fees. For Paris, the Schengen short-stay visa fee is approximately €90 plus VFS service charges. Always confirm the current official fee before applying.",
    },
    {
      q: "Who is eligible for a UK Business Visa?",
      a: "Indian professionals, entrepreneurs and company directors travelling for genuine business activities such as meetings, conferences or trade fairs. You need an invitation letter from the host company, a cover letter from your Indian company, company registration documents, 6 months of bank statements, 3 years of ITR, and proof of travel arrangements.",
    },
    {
      q: "How long does UK business visa processing take?",
      a: "Standard UK business visa processing is typically 3 weeks from the biometric appointment. For Paris (France/Schengen) short-stay business applications, processing is typically 5–15 working days.",
    },
    {
      q: "How long can I stay in Paris on a business visa?",
      a: "A Schengen short-stay business visit allows up to 90 days within any 180-day period. Regular, compliant business travellers may secure multiple-entry options for frequent trips to London or Paris.",
    },
  ],

  cta: {
    title: "Ready to Apply for Your UK Business Visa or Paris Business Visa?",
    text: "Start your UK Business Visa application or Paris Business Visa application today with Global Visa Internationals and get professional guidance for faster approvals.",
    contactHref: "/contact",
    contactLabel: "Book Your Free Consultation & Visa Audit Now!",
  },

  sections: [
    {
      id: "what-is",
      nav: "What is it",
      kicker: "Overview",
      title: "What is a UK Business Visa / Paris Business Visa?",
      blocks: [
        {
          type: "twoCol",
          items: [
            {
              icon: "Landmark",
              title: "UK Business Visitor Visa (London)",
              points: [
                "Permits Indian citizens to travel to the United Kingdom (London) for official business purposes.",
                "Covers London business conferences, client meetings, trade shows, signing contracts, or facilitating a London branch setup for business expansion.",
              ],
            },
            {
              icon: "Plane",
              title: "Paris Business Visa (France / Schengen)",
              points: [
                "Enables Indian professionals to attend business events, meetings or trade fairs in Paris and the wider Schengen region with full compliance.",
                "Whether it's a France multiple-entry business travel visa or a short-stay visa, we guide you.",
              ],
            },
          ],
        },
      ],
    },

    {
      id: "why-gvi-uk",
      nav: "Why GVI for UK & Paris",
      kicker: "Our Approach",
      title: "Why Choose GVI for Your UK & Paris Business Visa?",
      blocks: [
        {
          type: "p",
          text: "At Global Visa Internationals (GVI), we specialise in guiding Indian entrepreneurs, company directors and seasoned professionals through the complex visa terrain for London and Paris business travel. Whether you’re applying for a UK visitor business visa for London of up to 6 months or a Paris business visa for trade fair attendance, our expert team helps you avoid common pitfalls and improves your visa success rate for all European business visa trips. We also assist with specialised routes like the London investor business visa.",
        },
        {
          type: "assess",
          title: "Get Your Free Business Visa Consultation Now!",
          text: "Tell us your travel plan and we will map out the right UK or Paris business visa for you.",
          cta: "Get a free consultation",
        },
      ],
    },

    {
      id: "validity",
      nav: "Validity",
      kicker: "Validity",
      title: "Business Visa Validity & Duration Rules (UK & Paris)",
      blocks: [
        {
          type: "twoCol",
          items: [
            {
              icon: "Calendar",
              title: "UK Business Visitor Visa (London)",
              points: [
                "The UK business visa short stay typically allows you to stay up to 6 months for business activities like meetings, conferences and trade fairs.",
              ],
            },
            {
              icon: "Calendar",
              title: "Paris Business Visa",
              points: [
                "As part of the Schengen / France business travel visa multiple-entry route, short-stay business visits allow up to 90 days within any 180-day period.",
                "Regular, compliant business travellers may secure France business visa multiple-entry options for frequent trips to London or Paris.",
              ],
            },
          ],
        },
      ],
    },

    {
      id: "assistance",
      nav: "Our assistance",
      kicker: "Application Help",
      title: "Business Visa Application Assistance (UK & Paris)",
      blocks: [
        {
          type: "p",
          text: "At GVI we handle end-to-end assistance for your UK business visa and Paris business visa application, from documentation to embassy submission, giving Indian business travellers a stress-free experience.",
        },
        { type: "h3", text: "Our Services Include:" },
        {
          type: "ul",
          check: true,
          items: [
            "Filling the UK or Paris business visa application form",
            "Drafting of professional invitation/covering letters for London & Paris purposes",
            "Personalised checklist & document verification tailored to UK business visa documents (including bank statements) or France business visa documentation criteria",
            "Assistance with a UK business visa sponsor letter or a Paris business visa invitation letter from the host company",
            "Flight, hotel & travel insurance arrangement for business travel to London or Paris",
            "Appointment scheduling with visa application centres (VFS / UKVCAS / France Visas) in India",
          ],
        },
      ],
    },

    {
      id: "documents",
      nav: "Documents",
      kicker: "Checklist",
      title: "Business Visa Document Checklist – India (2025 Edition)",
      sub: "To apply for a UK Business Visa (London) or Paris Business Visa (France) from India, you must submit comprehensive, verified documents. GVI ensures every file is embassy-compliant, addressing all required France business visa documentation.",
      blocks: [
        {
          type: "checklist",
          groups: [
            {
              title: "1. Passport & Travel History",
              items: [
                "Valid passport (minimum 6 months validity beyond return date, with 2-3 blank pages)",
                "Previous international travel history (especially UK/Europe) where applicable",
              ],
            },
            {
              title: "2. Business Invitation & Purpose Documents",
              items: [
                "Invitation letter from the UK host company (London) or French partner (Paris) specifying business relationship and meeting/trade fair purpose",
                "Cover letter from your Indian company stating travel reason, duration & expense responsibility",
                "Company registration certificate, GST registration & business profile of your Indian company",
              ],
            },
            {
              title: "3. Financial & Employment Proof",
              items: [
                "6 months of current account / business account bank statements",
                "Income Tax Returns (ITR) for the last 3 years",
                "Salary slips or business income proof if you are self-employed or a director",
              ],
            },
            {
              title: "4. Travel Arrangements & Support Documents",
              items: [
                "Flight reservation (round-trip) for your London or Paris business stay",
                "Hotel or accommodation confirmation in London or Paris",
                "Travel insurance covering business travel to the UK or France (we help arrange it to meet embassy standards)",
              ],
            },
          ],
        },
      ],
    },

    {
      id: "fees",
      nav: "Fees & timing",
      kicker: "Cost & Timeline",
      title: "Business Visa Fees & Processing Time (India)",
      blocks: [
        {
          type: "table",
          head: ["Item", "Details"],
          rows: [
            ["UK Business Visa Fee (India)", "Approx. £115 for the Standard Visitor Visa (up to 6 months). Long-term options are available at higher fees."],
            ["France Business Visa Cost (India)", "For short-stay business, the Schengen visa fee is approx. €90 plus service charges (VFS)."],
            ["UK Processing Time", "Eligibility and application quality directly impact the decision time. Standard UK business visa processing is typically 3 weeks from the biometric appointment."],
            ["Paris Processing Time", "For France/Schengen short-stay business applications, typically 5–15 working days."],
          ],
          note: "Fees and times are indicative. Check the official UK government and France-Visas websites for the current fee before you apply.",
        },
      ],
    },

    {
      id: "rejections",
      nav: "Rejections",
      kicker: "Avoid Refusal",
      title: "Common Business Visa Rejection Reasons (UK & Paris) – and How GVI Helps",
      blocks: [
        {
          type: "table",
          head: ["Rejection reason", "How GVI helps"],
          rows: [
            ["Incomplete or mismatched documents", "GVI performs embassy-level document validation"],
            ["Unclear business purpose or weak invitation letter", "Professionally drafted cover & invitation letters for UK (London) and Paris (France)"],
            ["Weak financial proof or insufficient funds", "Pre-verification of bank & business income records"],
            ["Inconsistent travel plans or accommodation details", "Verified itinerary prepared by GVI experts for London/Paris trips"],
          ],
        },
      ],
    },

    {
      id: "process",
      nav: "Process",
      kicker: "How It Works",
      title: "UK & Paris Business Visa Process (Step-by-Step for Indian Applicants)",
      blocks: [
        {
          type: "timeline",
          items: [
            "Online application form submission (UKVI for UK; France-Visas / VFS for France) for UK Business Visa or Paris Business Visa",
            "Document verification & submission at visa application centre in India (UKVCAS / VFS Global) for your London or Paris business visa trip",
            "Biometrics collection (fingerprints & photo) during appointment",
            "Tracking & passport collection once decision is made",
          ],
        },
        {
          type: "links",
          items: [
            { label: "Visit UK Business Visitor Visa – UK Government", href: "https://www.gov.uk/standard-visitor/visit-on-business" },
            { label: "Visit France Business Visa – France Visas (Indian Applicants)", href: "https://france-visas.gouv.fr/en/india" },
          ],
        },
      ],
    },

    {
      id: "why-gvi",
      nav: "Why GVI",
      kicker: "Why Us",
      title: "Why Choose Global Visa Internationals (GVI) for UK & Paris Business Visas?",
      dark: true,
      blocks: [
        {
          type: "gvi",
          stats: [
            ["1,000+", "Business visas for London & Paris"],
            ["98%", "Success rate on proper files"],
            ["{YEARS}+", "Years of experience"],
          ],
          items: [
            { icon: "Award", title: "1,000+ business visas processed", text: "For Indian professionals traveling to London & Paris, covering all European business travel needs." },
            { icon: "ClipboardCheck", title: "End-to-end file management", text: "With visa-centre compliance checks for UK & France, ensuring UK business visitor visa eligibility is met." },
            { icon: "Users", title: "Dedicated business visa experts", text: "With European documentation experience (UK & Paris routes)." },
            { icon: "ShieldCheck", title: "98% success rate", text: "For properly filed UK and Paris business visa applications." },
          ],
          about:
            "Whether you’re traveling to London for a trade show, or to Paris for a business conference or corporate meeting, GVI ensures a seamless business visa experience from start to finish for your Europe business travel itinerary.",
        },
      ],
    },

    {
      id: "faq",
      nav: "FAQ",
      kicker: "FAQ",
      title: "UK & Paris Business Visa: Frequently Asked Questions",
      blocks: [{ type: "faq" }],
    },
  ],
};

export default uk;
