// Components/BusinessVisa/data/schengen.js
// Plain data for the shared BusinessVisaPage template. Text is carried over from the old page.
//
// ⚠ REVIEW BEFORE PUBLISHING (found while converting, not changed here):
//  - The old FAQ schema described long-stay investor visas (Germany, Portugal, Netherlands, "€1,000–€5,000"),
//    but the page is about the short-stay business visa (€90 fee, 90 days). The FAQ below is rewritten from
//    the page's own facts, and the visible FAQ and FAQ schema are now identical.
//  - The old Service offers (German Business Visa, Netherlands Entrepreneur Visa, Portugal Golden Visa)
//    do not match the page content. They are kept as-is, so edit them if you do not sell those.
//  - Fees, cascade rules and processing times are dated "2025". Re-check them, and check any new EU entry
//    system or travel authorisation rules, before publishing.
//  - Claims "1,000+ visas" and "98% success rate" are kept verbatim. Make sure you can back them up.
//  - Old canonical was /visa/business/schengen. The new path is /Visa/business-visa/schengen (set a redirect).

const schengen = {
  country: "Schengen",
  pagePath: "/Visa/business-visa/schengen",
  heroImg: "/business-visa/Schengen_Business_Visa_Assistance.webp",
  heroAlt: "Schengen Business Visa Assistance",
  serviceType: "Schengen Business Visa Application Assistance",
  serviceOffers: [
    "German Business Visa Assistance",
    "Netherlands Entrepreneur Visa Support",
    "Portugal Golden Visa Guidance",
  ],
  dates: { published: "2025-01-05", modified: "2025-11-05" },

  meta: {
    title: "Schengen Business Visa Assistance from India | Requirements, Process & Cost",
    description:
      "Apply for a Schengen Business Visa with expert help from Global Visa Internationals. Learn about visa requirements, eligibility, documentation, and the application process.",
    keywords:
      "European business visa, apply business visa Europe, Europe business visa from India, EU investor visa, business migration to Europe",
    og: {
      title: "Apply for Schengen Business Visa | Global Visa Internationals",
      description:
        "Get complete assistance in applying for a Schengen Business Visa from India. Learn about visa types, eligibility, and process with Global Visa Internationals.",
      imageAlt: "Schengen Business Visa Assistance",
    },
    tw: {
      title: "Schengen Business Visa | Application, Cost & Requirements",
      description:
        "Explore Schengen Business Visa options with expert guidance. Apply from India for investor or entrepreneur visas in EU countries.",
    },
  },

  eyebrow: "Schengen Business Visa",
  h1: { main: "Schengen Business Visa", em: "Global Visa Internationals" },
  lead: "Attend meetings and business events across Europe with a single visa.",
  chips: ["29 countries, one visa", "Up to 90 days", "VFS appointment handled", "Cover & invitation letters"],

  facts: [
    { icon: "Globe", value: "29", label: "Schengen countries", sub: "One visa for all member states" },
    { icon: "Calendar", value: "90 / 180", label: "Days of stay", sub: "Up to 90 days in any 180-day period" },
    { icon: "Coins", value: "€90", label: "Embassy visa fee", sub: "About ₹9,300, plus VFS service fee" },
    { icon: "Clock", value: "15–20 days", label: "Standard processing", sub: "30–45 working days in peak season" },
  ],

  intro: [
    "Planning to visit Europe for business meetings, trade fairs, or client visits? A **Schengen Business Visa** allows Indian professionals and entrepreneurs to attend official business activities across 29 European countries with one visa. At **Global Visa Internationals (GVI)**, we provide expert assistance to make your business travel smooth, compliant, and successful.",
  ],

  faqs: [
    {
      q: "What is a Schengen Business Visa?",
      a: "A Schengen Business Visa permits Indian citizens to travel to the Schengen Zone for official business purposes such as conferences, client meetings, training sessions, or signing contracts. It is valid for short stays of up to 90 days within a 180-day period.",
    },
    {
      q: "What are the general requirements for a Schengen Business Visa?",
      a: "You need a valid passport, an invitation letter from the host company in Europe, a cover letter from your Indian company, company registration documents, 6 months of bank statements, 3 years of ITR, a flight reservation, hotel confirmation, and Schengen travel insurance covering €30,000.",
    },
    {
      q: "How much does it cost to apply for a Schengen Business Visa?",
      a: "The embassy visa fee is €90 (about ₹9,300) for adults and €45 for children aged 6–12. A VFS service fee of roughly ₹1,000–₹2,000 applies, and GVI's end-to-end assistance starts from ₹6,999.",
    },
    {
      q: "How long does Schengen business visa processing take?",
      a: "Standard embassy processing takes 15–20 working days, and up to 30–45 working days in peak season. GVI prepares your file in 3–5 working days after receiving all documents.",
    },
    {
      q: "Can I get a multiple-entry visa with longer validity?",
      a: "Yes. Under the Schengen cascade system, regular and compliant travelers can progress to 2-year and then 5-year multiple-entry business visas. Initially you may get a single-entry visa.",
    },
  ],

  cta: {
    title: "Ready to Apply for Your Schengen Business Visa?",
    text: "Start your Schengen Business Visa application today with Global Visa Internationals and get professional guidance for faster approvals.",
    contactHref: "/contact-us",
    contactLabel: "Get a Free Consultation Now!",
  },

  sections: [
    {
      id: "what-is",
      nav: "What is it",
      kicker: "Overview",
      title: "What is a Schengen Business Visa?",
      blocks: [
        {
          type: "p",
          text: "The **Schengen Business Visa** permits Indian citizens to travel to the **Schengen Zone** for official business purposes — such as attending conferences, client meetings, training sessions, or signing contracts. It’s valid for short stays of up to 90 days within a 180-day period.",
        },
      ],
    },

    {
      id: "countries",
      nav: "29 countries",
      kicker: "Coverage",
      title: "29 Schengen Countries",
      sub: "Visit Europe with a single Business visa from India.",
      blocks: [
        {
          type: "countries",
          countries: [
            "Austria", "Belgium", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland",
            "France", "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Liechtenstein",
            "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Romania",
            "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
          ],
          highlightsTitle: "Newest Members & Key Additions",
          highlights: [
            ["Bulgaria", "Joined in 2024 (air & sea border)"],
            ["Croatia", "Joined in 2023"],
            ["Romania", "Joined in 2024 (air & sea border)"],
            ["Liechtenstein", "Joined in 2011"],
          ],
        },
      ],
    },

    {
      id: "validity",
      nav: "Validity",
      kicker: "Validity",
      title: "Visa Validity & Duration Rule",
      compact: true,
      blocks: [
        {
          type: "p",
          text: "The duration granted depends on your travel purpose, documentation, and history. Initially, you may get a single-entry visa, but regular, compliant travelers can progress to **2-year and 5-year multiple-entry business visas** under the Schengen “Cascade” system. Overstaying beyond your visa validity can lead to fines or bans — GVI ensures full compliance with **Schengen visa rules**.",
        },
      ],
    },

    {
      id: "cascade",
      nav: "Cascade system",
      kicker: "Cascade",
      title: "Schengen Visa 'Cascade' System for Business Travelers",
      blocks: [
        {
          type: "p",
          text: "The European Union’s **cascade system** rewards lawful, frequent business travelers with longer validity visas. For Indian nationals:",
        },
        {
          type: "timeline",
          items: [
            ["Initial Visa", "Short-term single or multiple-entry visa for up to 90 days."],
            ["2-Year Visa", "After lawfully using at least two Schengen visas in the past three years."],
            ["5-Year Visa", "After holding and lawfully using a two-year visa."],
          ],
        },
        {
          type: "p",
          text: "GVI helps you maintain compliance and prepares documentation for progressive, long-term Schengen business visas.",
        },
      ],
    },

    {
      id: "assistance",
      nav: "Our assistance",
      kicker: "Application Help",
      title: "Schengen Business Visa Application Assistance",
      blocks: [
        {
          type: "p",
          text: "Global Visa Internationals (GVI) handles your entire **business visa application process** — from documentation to embassy appointment — ensuring a professional, compliant, and successful submission.",
        },
        { type: "h3", text: "Our Services Include:" },
        {
          type: "ul",
          check: true,
          items: [
            "Filling the Schengen business visa application form",
            "Drafting of professional covering letter & business purpose letter",
            "Personalized checklist & document verification",
            "Assistance with invitation letter from the host company in Europe",
            "Flight, hotel & travel insurance arrangement",
            "Appointment scheduling with VFS Global",
          ],
        },
        {
          type: "assess",
          title: "Not sure your documents are embassy-ready?",
          text: "Share your travel plan with GVI and we will tell you what to prepare.",
        },
      ],
    },

    {
      id: "documents",
      nav: "Documents",
      kicker: "Checklist",
      title: "Schengen Business Visa Document Checklist (India 2025)",
      sub: "To apply for a Schengen business visa, you’ll need to submit the following verified documents. GVI ensures every file is embassy-compliant.",
      blocks: [
        {
          type: "checklist",
          groups: [
            {
              title: "1. Passport & Travel History",
              items: [
                "Valid passport (minimum 6 months validity beyond return date, 2 blank pages)",
                "Previous Schengen or international travel history",
              ],
            },
            {
              title: "2. Business Invitation & Purpose Documents",
              items: [
                "Invitation letter from the host company in Europe specifying business relationship and meeting purpose",
                "Cover letter from your Indian company stating travel reason, duration & expense responsibility",
                "Company registration certificate, GST & business profile",
              ],
            },
            {
              title: "3. Financial & Employment Proof",
              items: [
                "6 months of business/current account bank statements",
                "Income Tax Returns (ITR) for 3 years",
                "Salary slips or business income proof",
              ],
            },
            {
              title: "4. Travel Arrangements",
              items: [
                "Flight reservation (round-trip)",
                "Hotel/accommodation confirmation",
                "Schengen business travel insurance covering €30,000 (GVI arranges insurance meeting embassy standards)",
              ],
            },
          ],
        },
      ],
    },

    {
      id: "fees",
      nav: "Fees",
      kicker: "Cost & Fees",
      title: "Schengen Business Visa Fees (India 2025)",
      blocks: [
        {
          type: "table",
          head: ["Fee", "Amount"],
          rows: [
            ["Embassy Visa Fee", "€90 (~₹9,300)"],
            ["Children (6–12 years)", "€45"],
            ["VFS Service Fee", "₹1,000–₹2,000 approx."],
            ["GVI Service Fee", "₹6,999 onwards (end-to-end application assistance)"],
          ],
        },
      ],
    },

    {
      id: "processing",
      nav: "Processing time",
      kicker: "Timeline",
      title: "Schengen Business Visa Processing Time (India)",
      blocks: [
        {
          type: "table",
          head: ["Stage", "Time"],
          rows: [
            ["Standard Embassy Processing", "15–20 working days"],
            ["Peak Season", "30–45 working days"],
            ["GVI File Preparation", "3–5 working days after receiving all documents"],
          ],
        },
      ],
    },

    {
      id: "rejections",
      nav: "Rejections",
      kicker: "Avoid Refusal",
      title: "Common Business Visa Rejection Reasons (and How GVI Helps)",
      blocks: [
        {
          type: "table",
          head: ["Rejection reason", "How GVI helps"],
          rows: [
            ["Incomplete or mismatched documents", "GVI performs embassy-level document validation"],
            ["Unclear business purpose", "Professionally drafted cover & invitation letters"],
            ["Weak financial proof", "Pre-verification of bank & business income records"],
            ["Inconsistent travel plans", "Verified itinerary prepared by GVI experts"],
          ],
        },
      ],
    },

    {
      id: "vfs",
      nav: "VFS process",
      kicker: "Process",
      title: "VFS Global Schengen Business Visa Process (Step-by-Step)",
      blocks: [
        {
          type: "timeline",
          items: [
            "Online form filling & appointment booking by GVI",
            "Document verification & submission at VFS Global center",
            "Biometrics collection (fingerprints & photo)",
            "Tracking & passport collection",
          ],
        },
        {
          type: "links",
          items: [{ label: "Visit VFS Global – India", href: "https://visa.vfsglobal.com/" }],
        },
      ],
    },

    {
      id: "why-gvi",
      nav: "Why GVI",
      kicker: "Why Us",
      title: "Why Choose Global Visa Internationals (GVI)?",
      dark: true,
      blocks: [
        {
          type: "gvi",
          stats: [
            ["1,000+", "Schengen business visas"],
            ["98%", "Success rate on proper files"],
            ["{YEARS}+", "Years of experience"],
          ],
          items: [
            { icon: "Award", title: "1,000+ Schengen Business Visas", text: "Processed successfully." },
            { icon: "ClipboardCheck", title: "End-to-end file management", text: "With embassy compliance checks." },
            { icon: "Users", title: "Dedicated business visa experts", text: "With European documentation experience." },
            { icon: "ShieldCheck", title: "98% success rate", text: "For properly filed Schengen business applications." },
          ],
          about:
            "Whether you’re traveling for a trade show, client meeting, or investment visit — GVI ensures a seamless business visa experience from start to finish.",
        },
      ],
    },

    {
      id: "faq",
      nav: "FAQ",
      kicker: "FAQ",
      title: "Schengen Business Visa: Frequently Asked Questions",
      blocks: [{ type: "faq" }],
    },
  ],
};

export default schengen;
