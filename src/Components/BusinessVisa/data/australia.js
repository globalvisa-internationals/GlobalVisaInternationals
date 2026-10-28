// Components/BusinessVisa/data/australia.js
// Plain data for the shared BusinessVisaPage template. Text is carried over from the old page.
//
// ⚠ REVIEW BEFORE PUBLISHING (found while converting, not changed here):
//  - The Business Innovation & Investment program (Subclass 188 / 888 pathway) closed to new
//    applications from July 2024, with a National Innovation visa announced as the new route.
//    The "Types of visas", eligibility, cost and FAQ text below still describe 188A/B/C/E as open.
//  - "2025" appears in several headings and the cost table. Update once the facts are re-checked.
//  - The old page showed 3 FAQs in schema but a different 3 on screen; both sets are merged below
//    so the visible FAQ and the FAQ schema now always match.

const australia = {
  country: "Australia",
  pagePath: "/Visa/business-visa/australia",
  heroImg: "/business-visa/Australian_Business_Visa_Assistance.webp",
  heroAlt: "Australia Business Visa Assistance",
  serviceType: "Australia Business Visa Application Assistance",
  serviceOffers: [
    "Subclass 188 Business Innovation Visa Assistance",
    "Subclass 132 Business Talent Visa Guidance",
    "Subclass 888 Permanent Business Visa Support",
  ],
  rating: { value: "4.8", count: "240" },

  meta: {
    title: "Australia Business Visa and Immigration Assistance",
    description:
      "Apply for an Australia Business Visa with expert help from Global Visa Internationals. Learn about business visa requirements, eligibility, fees, and the application process.",
    keywords: [
      "Australia business visa",
      "apply business visa Australia",
      "Australia business visa from India",
      "Australia investor visa",
      "business visa consultants",
      "business migration to Australia",
    ],
    og: {
      title: "Apply for Australia Business Visa | Global Visa Internationals",
      description:
        "Get complete assistance in applying for an Australia Business Visa from India. Learn about visa types, requirements, eligibility, and costs with Global Visa Internationals.",
      imageAlt: "Australia Business Visa Assistance",
    },
    tw: {
      title: "Australia Business Visa | Application, Cost & Requirements",
      description:
        "Explore Australia Business Visa options with expert guidance. Apply from India for investor or business innovation visas.",
    },
  },

  eyebrow: "Australia Business Visa Assistance",
  h1: { main: "Australian Business Visa Assistance 2025", em: "Global Visa Internationals" },
  lead:
    "Looking to expand your business or invest in Australia? We simplify the visa process for entrepreneurs, investors and professionals.",
  chips: ["Subclass 188", "Business Visitor 600", "PR via Subclass 888"],

  facts: [
    { icon: "Briefcase", value: "6", label: "Visa subclasses covered", sub: "188A, 188B, 188C, 188E, 600 and 132" },
    { icon: "Award", value: "PR", label: "Route to residency", sub: "Via Subclass 888 after meeting conditions" },
    { icon: "Calendar", value: "6–9 mo", label: "188 series processing (est.)", sub: "600 Business Visitor: 10–25 working days (est.)" },
    { icon: "Coins", value: "AUD 800K+", label: "Minimum assets, from", sub: "Depends on the stream" },
  ],

  intro: [
    "Looking to expand your business or invest in Australia? The **Australian Business Visa** offers entrepreneurs, investors, and professionals the opportunity to establish, manage, or grow a business in one of the world’s strongest economies. At **Global Visa Internationals (GVI)**, we simplify the complex visa process and help you unlock Australia’s vast business potential.",
  ],

  faqs: [
    {
      q: "What types of Australia Business Visas are available?",
      a: "Australia offers various business visa subclasses, including Business Innovation and Investment (Subclass 188), Business Talent (Subclass 132), and Permanent Business Visas (Subclass 888).",
    },
    {
      q: "How much does an Australia Business Visa cost from India?",
      a: "Visa costs range from AUD 5,000–9,000 for main applicants, with extra charges for dependents and documentation.",
    },
    {
      q: "Who is eligible for an Australia Business Visa?",
      a: "Applicants with business or investment backgrounds, sufficient net assets, and intent to manage or own a business in Australia.",
    },
    {
      q: "How long does the visa take?",
      a: "188 series: 6–9 months (est.); 600 Business Visitor: 10–25 working days (est.).",
    },
    { q: "Can this visa lead to PR?", a: "Yes, via Subclass 888 after meeting conditions." },
    { q: "Do I need a business plan?", a: "Yes, mandatory for most business visa streams." },
  ],

  cta: {
    title: "Start Your Australian Business Journey Today!",
    text:
      "Take your first step toward establishing a business in Australia. Connect with Global Visa Internationals for a free consultation and personalized eligibility assessment. Our experts will guide you from documentation to visa approval for a seamless Australian Business Visa experience.",
  },

  sections: [
    {
      id: "types",
      nav: "Visa types",
      kicker: "Visa Types",
      title: "Types of Australian Business Visas 2025 – Explained in Detail",
      blocks: [
        {
          type: "routes",
          items: [
            {
              id: "188a",
              icon: "Rocket",
              name: "Subclass 188A – Business Innovation Stream",
              tag: "Provisional visa",
              desc: "Ideal for experienced business owners looking to establish or manage a new or existing business in Australia. Applicants typically must show previous business ownership with minimum turnover requirements and eligible assets. This provisional visa commonly leads to PR via Subclass 888A.",
            },
            {
              id: "188b",
              icon: "Wallet",
              name: "Subclass 188B – Investor Stream",
              tag: "Provisional visa",
              desc: "Designed for investors willing to invest in eligible Australian investments. Applicants must have a successful investment history and meet residency and business criteria for PR transition via Subclass 888B.",
            },
            {
              id: "188c",
              icon: "Coins",
              name: "Subclass 188C – Significant Investor Visa (SIV)",
              tag: "Provisional visa",
              desc: "Tailored for high-net-worth individuals investing into complying Australian investments. Offers flexible stay options and a direct route to permanent residency.",
            },
            {
              id: "188e",
              icon: "Lightbulb",
              name: "Subclass 188E – Entrepreneur Stream",
              tag: "Provisional visa",
              desc: "For entrepreneurs with a viable business plan backed by third-party funding. This visa encourages startup activity and innovation in Australia.",
            },
            {
              id: "600",
              icon: "Plane",
              name: "Subclass 600 – Business Visitor Visa",
              tag: "Short-term visit",
              desc: "Suitable for short-term business visits such as meetings, conferences, or negotiations.",
            },
            {
              id: "132",
              icon: "Briefcase",
              name: "Subclass 132 – Business Talent Visa",
              tag: "Closed to new applications",
              desc: "Previously offered direct PR for high-calibre entrepreneurs and investors. New applications are closed, but existing holders maintain their residency conditions.",
            },
          ],
        },
        {
          type: "assess",
          title: "Not sure which stream fits you?",
          text: "Get a tailored assessment for your Australian Business Visa with a free consultation from Global Visa Internationals.",
        },
      ],
    },

    {
      id: "eligibility",
      nav: "Eligibility",
      kicker: "Eligibility",
      title: "Eligibility Criteria for Australian Business Visa",
      blocks: [
        {
          type: "ul",
          check: true,
          items: [
            "Age below 55 years (unless exempt by exceptional business history)",
            "Proven business ownership or investment experience",
            "Minimum personal and business assets worth from AUD 800,000 depending on stream",
            "Functional English proficiency",
            "Genuine business intent and realistic business plan",
            "Nomination by an Australian state or territory",
            "No history of visa refusal or fraud",
          ],
        },
      ],
    },

    {
      id: "pr",
      nav: "Path to PR",
      kicker: "Permanent Residency",
      title: "Pathway to Australian Permanent Residency (PR)",
      compact: true,
      blocks: [
        {
          type: "p",
          text: "Most business and investor visa holders can transition to PR through the Subclass 888 Business Innovation and Investment (Permanent) Visa after meeting conditions.",
        },
      ],
    },

    {
      id: "opportunities",
      nav: "Opportunities",
      kicker: "Where to Invest",
      title: "Eligible Business & Investment Opportunities in Australia",
      compact: true,
      blocks: [
        {
          type: "ul",
          check: true,
          items: [
            "Agribusiness & food production",
            "Renewable energy & clean technologies",
            "Technology startups & innovation hubs",
            "Healthcare & biotechnology",
            "Regional infrastructure & manufacturing",
            "Education, training, and export-focused services",
          ],
        },
      ],
    },

    {
      id: "states",
      nav: "State nomination",
      kicker: "Nomination",
      title: "Australian State & Territory Nomination Requirements",
      blocks: [
        {
          type: "rail",
          label: "Australian states and territories",
          items: [
            ["New South Wales (NSW)", "Prefers innovation, technology, and advanced manufacturing businesses."],
            ["Victoria (VIC)", "Focus on startups, biotech and clean energy."],
            ["Queensland (QLD)", "Encourages regional investment and tourism-related projects."],
            ["South Australia (SA)", "Supports agribusiness and advanced manufacturing."],
            ["Western Australia (WA)", "Targets resources, mining, and renewable energy."],
            ["Tasmania (TAS)", "Open to smaller regional business investments."],
          ],
        },
      ],
    },

    {
      id: "process",
      nav: "Process",
      kicker: "How It Works",
      title: "Step-by-Step Application Process",
      blocks: [
        {
          type: "timeline",
          items: [
            "Determine eligibility and choose the suitable visa stream.",
            "Prepare a detailed business plan aligned with state nomination goals.",
            "Submit an Expression of Interest (EOI) via SkillSelect.",
            "Receive nomination from a state or territory government.",
            "Apply for the selected visa subclass online.",
            "Undergo health, character, and financial assessments.",
            "Receive visa grant and start your business journey in Australia.",
          ],
        },
      ],
    },

    {
      id: "cost",
      nav: "Costs",
      kicker: "Cost & Fees",
      title: "Estimated Costs (2025)",
      sub: "Core Visa Application Charges (VACs), indicative only. Check the Department of Home Affairs for official rates.",
      blocks: [
        {
          type: "table",
          head: ["Applicant Type", "Estimated Cost (AUD)", "Approx. Cost (INR)"],
          rows: [
            ["Principal Applicant (Business Innovation Stream)", "AUD 6,830", "₹3,75,650 (approx.)"],
            ["Additional Applicant (18+ years)", "AUD 3,420", "₹1,88,100 (approx.)"],
          ],
          note: "Fees are indicative and set by the Australian Department of Home Affairs. Confirm the current charge before you apply.",
        },
      ],
    },

    {
      id: "why-australia",
      nav: "Why Australia",
      kicker: "Why Australia",
      title: "Why Choose Australia for Business?",
      blocks: [
        {
          type: "bento",
          items: [
            { icon: "TrendingUp", title: "Strong & Stable Economy", text: "A resilient, diverse economy that supports long-term business." },
            { icon: "Globe", title: "Strategic Location & Trade Hub", text: "Gateway to Asia-Pacific markets." },
            { icon: "Landmark", title: "Pro-Business Environment", text: "Government incentives and supportive regulation." },
            { icon: "Lightbulb", title: "Skilled Workforce & Innovation", text: "Access to highly educated talent and R&D networks." },
            { icon: "Heart", title: "High Quality of Life", text: "Multicultural society and excellent living standards." },
          ],
        },
        { type: "h3", text: "Top Cities & Regions" },
        {
          type: "rail",
          label: "Top Australian cities and regions",
          items: [
            ["Sydney", "Finance & technology hub."],
            ["Melbourne", "Innovation, healthcare & education."],
            ["Brisbane", "Growing trade and tourism opportunities."],
            ["Perth", "Resources, mining and renewables."],
            ["Adelaide, Canberra, Hobart, Darwin", "Regional advantages."],
          ],
        },
      ],
    },

    {
      id: "stories",
      nav: "Success stories",
      kicker: "Client Results",
      title: "Success Stories",
      compact: true,
      blocks: [
        {
          type: "quotes",
          items: [
            "“Mr. Sharma from Delhi successfully secured his Subclass 188A visa in just 7 months with GVI’s expert documentation and business planning support.”",
            "“Our client from Hyderabad obtained a Significant Investor Visa (188C) with GVI’s guidance on compliant investment structures and fund preparation.”",
          ],
        },
      ],
    },

    {
      id: "why-gvi",
      nav: "Why GVI",
      kicker: "Why Us",
      title: "Why Choose Global Visa Internationals?",
      dark: true,
      blocks: [
        {
          type: "gvi",
          stats: [
            ["{YEARS}+", "Years of experience"],
            ["55,000+", "Visas processed"],
            ["75,000+", "Advice sessions"],
          ],
          about:
            "We are India's leading visa consultants with {YEARS}+ years experience, 55,000+ visas processed and 75,000+ advice sessions. We provide tailored business plans, state nomination guidance, and end-to-end application support.",
        },
      ],
    },

    {
      id: "faq",
      nav: "FAQ",
      kicker: "FAQ",
      title: "Australian Business Visa FAQs (2025 Edition)",
      blocks: [{ type: "faq" }],
    },

    {
      id: "resources",
      nav: "Official links",
      kicker: "Resources",
      title: "Useful Resources & Official Links",
      compact: true,
      blocks: [
        {
          type: "links",
          items: [
            { label: "Department of Home Affairs – Business Innovation and Investment Program", href: "https://immi.homeaffairs.gov.au/" },
            { label: "Austrade – Australian Trade and Investment Commission", href: "https://www.austrade.gov.au/" },
            { label: "Business.gov.au – Official Business Information Portal", href: "https://www.business.gov.au/" },
          ],
        },
      ],
    },
  ],
};

export default australia;
