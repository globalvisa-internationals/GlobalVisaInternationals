// Components/BusinessVisa/data/new-zealand.js
// Plain data for the shared BusinessVisaPage template. Text is carried over from the old page.
//
// ⚠ REVIEW BEFORE PUBLISHING (found while converting, not changed here):
//  - Immigration NZ announced (27 Aug 2025) that the Entrepreneur Work Visa category is closed to
//    new applications, and a new Business Investor Work Visa opened from November 2025.
//  - Active Investor Plus was refreshed in April 2025, and the old page still lists Investor 1 and
//    Investor 2 fees and thresholds. All the fee rows, thresholds and requirement rows need re-checking.
//  - The old page had FAQ schema but no visible FAQ. A visible FAQ section is added below
//    (3 original questions + 2 answered from the page's own text).
//  - The old page printed stray "---" lines. They are gone.

const newZealand = {
  country: "New Zealand",
  pagePath: "/Visa/business-visa/new-zealand",
  heroImg: "/business-visa/New-Zealand_Business_Visa_Assistance.webp",
  heroAlt: "New Zealand Business Visa",
  serviceType: "New Zealand Business Visa Application Assistance",
  serviceOffers: [
    "New Zealand Entrepreneur Visa Assistance",
    "New Zealand Investor Visa Guidance",
    "New Zealand Business Migration Consulting",
  ],
  dates: { published: "2025-01-05", modified: "2025-11-05" },

  meta: {
    title: "New Zealand Business Visa Assistance | Requirements, Process & Cost",
    description:
      "Apply for a New Zealand Business Visa with expert help from Global Visa Internationals. Learn about visa requirements, eligibility, documentation, and the application process.",
    keywords:
      "New Zealand business visa, apply business visa New Zealand, New Zealand business visa from India, investor visa, entrepreneur visa, business migration to New Zealand",
    og: {
      title: "Apply for New Zealand Business Visa | Global Visa Internationals",
      description:
        "Get complete assistance in applying for a New Zealand Business Visa from India. Learn about visa types, eligibility, and process with Global Visa Internationals.",
      imageAlt: "New Zealand Business Visa Banner",
    },
    tw: {
      title: "New Zealand Business Visa | Application, Cost & Requirements",
      description:
        "Explore New Zealand Business Visa options with expert guidance. Apply from India for investor or entrepreneur visas to New Zealand.",
    },
  },

  eyebrow: "New Zealand Business Visa Assistance",
  h1: { main: "New Zealand Business Visas & Immigration Assistance", em: "Global Visa Internationals" },
  lead:
    "Expand your business or invest in New Zealand's dynamic economy. We guide entrepreneurs, investors and business owners through every step of the process.",
  chips: ["Entrepreneur Work Visa", "Investor Visas", "Active Investor Plus", "Residence Pathway"],

  facts: [
    { icon: "Briefcase", value: "5", label: "Visa pathways covered", sub: "Entrepreneur, Investor 1 & 2, Active Investor Plus" },
    { icon: "Coins", value: "NZD 100K", label: "Entrepreneur minimum investment", sub: "Excluding working capital" },
    { icon: "Languages", value: "IELTS 4.0", label: "Entrepreneur Work Visa English", sub: "Not required for Investor 1 or Active Investor Plus" },
    { icon: "Award", value: "PR", label: "Route to residency", sub: "Entrepreneur Residence and Investor routes" },
  ],

  intro: [
    "Dreaming of expanding your business horizons or investing in a dynamic economy? New Zealand, a land of stable economic growth, strategic global connections, and abundant opportunities, is calling! Securing a New Zealand Business Visa opens doors to an exceptional environment for entrepreneurs, investors, and business professionals. It's more than just a visa; it's a chance to establish a brighter future for your enterprise and potentially your family in the Land of the Long White Cloud.",
  ],

  faqs: [
    {
      q: "Who is eligible for a New Zealand Business Visa?",
      a: "Entrepreneurs, investors, and business owners with a valid business plan and sufficient financial capacity can apply for a New Zealand Business Visa.",
    },
    {
      q: "What are the requirements for a New Zealand Business Visa?",
      a: "Applicants must present a solid business plan, investment funds, proof of clean background, and relevant experience. Requirements vary by visa stream, such as Entrepreneur Work Visa or Investor Visa.",
    },
    {
      q: "How much does a New Zealand Business Visa cost?",
      a: "Application fees typically range between NZD 3,000 and 5,000 depending on the visa type. Additional documentation, consulting, and legal service charges may apply.",
    },
    {
      q: "Which New Zealand business visa leads to permanent residence?",
      a: "The Entrepreneur Residence Visa is the permanent residency pathway for those who have established a business on an Entrepreneur Work Visa, and the Investor 1 Category Visa is a direct pathway to permanent residency for those who invest NZD 10 million.",
    },
    {
      q: "How much do I need to invest?",
      a: "It depends on the visa. The Entrepreneur Work Visa needs a minimum investment of NZD 100,000 (excluding working capital), while the investor categories range from NZD 3 million (Investor 2) and NZD 10 million (Investor 1) to NZD 15 million for the Active Investor Plus Visa.",
    },
  ],

  sections: [
    {
      id: "pathways",
      nav: "Visa pathways",
      kicker: "Visa Pathways",
      title: "Applying for New Zealand Business Visas: Your Pathways to Opportunity",
      sub: "Navigating the various routes for New Zealand Business Visas can seem daunting, but we're here to simplify it. Immigration New Zealand offers several key pathways for entrepreneurs and investors seeking to establish a presence.",
      blocks: [
        {
          type: "routes",
          items: [
            {
              icon: "Rocket",
              name: "Entrepreneur Work Visa",
              tag: "Temporary · up to 3 years",
              desc: "This visa allows you to buy or set up a business in New Zealand. It's a temporary visa (up to 3 years) that can lead to the Entrepreneur Residence Visa.",
              req: "Minimum investment of NZD 100,000 (excluding working capital), score at least 120 points on the points scale, provide a robust business plan, and meet English language, health, and character requirements.",
            },
            {
              icon: "BadgeCheck",
              name: "Entrepreneur Residence Visa",
              tag: "Permanent residence",
              desc: "This is the permanent residency pathway for those who have successfully established a business in New Zealand on an Entrepreneur Work Visa for at least six months or two years, depending on specific criteria.",
              req: "Demonstrate the success of your business, meet specific turnover or job creation criteria, and have a clear pathway to a successful long-term business in NZ.",
            },
            {
              icon: "Wallet",
              name: "Investor 1 Category Visa",
              tag: "NZD 10 million",
              desc: "For individuals who can invest at least NZD 10 million in New Zealand over a three-year period. This is a direct pathway to permanent residency.",
              req: "Invest NZD 10 million into acceptable investments (e.g., bonds, equities, property development, or growth investments), meet health and character requirements. No age limit or English language requirement.",
            },
            {
              icon: "Coins",
              name: "Investor 2 Category Visa",
              tag: "NZD 3 million",
              desc: "For individuals who can invest at least NZD 3 million in New Zealand over a four-year period. This visa has more specific requirements regarding age and English language.",
              req: "Invest NZD 3 million into acceptable investments, be 65 years or under, meet English language (IELTS 3.0 overall), health, and character requirements. Points are awarded for factors like age, business experience, and investment amount.",
            },
            {
              icon: "TrendingUp",
              name: "Active Investor Plus Visa (New for 2022)",
              tag: "NZD 15 million",
              desc: "This new category replaces the Investor 1 and Investor 2 visas, aiming to attract more active and direct investments. It requires an investment of NZD 15 million, with a greater weighting for direct investments in New Zealand companies.",
              req: "Invest NZD 15 million into a mix of eligible investments (e.g., direct investments, managed funds, listed equities), meet health and character requirements. No age or English language requirement.",
            },
          ],
        },
        {
          type: "assess",
          title: "Tailor Your New Zealand Business Visa Pathway: Find Your Best Fit!",
          text: "Feeling overwhelmed by the options for a New Zealand Business Visa? Don't worry! We can help you navigate the various New Zealand immigration programs for entrepreneurs and investors. Contact Global Visa Internationals today for a personalized assessment.",
          cta: "Get my free assessment",
        },
      ],
    },

    {
      id: "requirements",
      nav: "Requirements",
      kicker: "Eligibility",
      title: "Key Requirements for New Zealand Business Visa Programs",
      sub: "General requirements for 2025. They vary by visa type.",
      blocks: [
        {
          type: "table",
          head: ["Factor", "Requirement (General)", "Notes for New Zealand Business Visa"],
          rows: [
            ["Age", "Under 65 years for most Entrepreneur/Investor 2 streams.", "No age limit for Investor 1 and Active Investor Plus. Age points for Entrepreneur and Investor 2."],
            ["Business Plan", "Comprehensive, viable, and innovative business plan (for Entrepreneur visas).", "Must demonstrate significant benefit to New Zealand."],
            ["Investment Funds", "Specific thresholds vary by visa stream.", "Ranges from NZD 100,000 for Entrepreneur to NZD 15 million for Active Investor Plus. Must be legally acquired."],
            ["Business Experience", "Demonstrable successful business ownership/management experience.", "Crucial for Entrepreneur visas; less strict for Investor visas."],
            ["English Language", "IELTS 4.0 for Entrepreneur Work Visa; IELTS 3.0 for Investor 2.", "Not required for Investor 1 or Active Investor Plus."],
            ["Health & Character", "Must meet New Zealand's health and character requirements.", "Medical exams and police certificates are mandatory for all applicants and dependents."],
            ["Genuine Intent", "Clear intention to establish or participate in a qualifying business/investment in New Zealand.", "Evidenced through detailed plans, market research, and demonstrable commitment."],
          ],
          note: "Providing accurate information and all necessary documents, especially regarding your business history and financial standing, is paramount to avoid delays or even rejection of your New Zealand Business Visa application. That's where expert guidance from Global Visa Internationals comes in handy!",
        },
      ],
    },

    {
      id: "cost",
      nav: "Cost & fees",
      kicker: "Cost & Fees",
      title: "Understanding the Cost of New Zealand Business Visas in 2025",
      sub: "Investing in your future in New Zealand is a significant step, and understanding the financial aspects is crucial. The total cost of applying can vary based on the specific visa subclass, the number of applicants, and other associated expenses. Figures are as of June 2025 and subject to change by Immigration New Zealand.",
      blocks: [
        {
          type: "costLayout",
          tableTitle: "Estimated Core Application Costs (Visa Application Charges - VACs)",
          tableIntro: "These are the official fees paid to Immigration New Zealand for key business and investment migration visas.",
          head: ["Visa Type", "Estimated Cost (NZD)", "Approx. Cost (INR, @ ₹50/NZD)"],
          rows: [
            ["Entrepreneur Work Visa", "NZD 3,360", "₹1,68,000"],
            ["Entrepreneur Residence Visa", "NZD 3,360", "₹1,68,000"],
            ["Investor 1 Category Visa", "NZD 4,775", "₹2,38,750"],
            ["Investor 2 Category Visa", "NZD 4,775", "₹2,38,750"],
            ["Additional Applicant (18+ years)", "NZD 1,680 (approx.)", "₹84,000"],
            ["Additional Applicant (under 18 years)", "NZD 840 (approx.)", "₹42,000"],
          ],
          note: "*Note: These are Visa Application Charges (VACs) only and do not include other associated costs or the mandatory investment amounts. Fees are subject to change by Immigration New Zealand. Investor visas require substantial investment funds (e.g., NZD 10 million for Investor 1, NZD 3 million for Investor 2).",
          receipt: {
            title: "Example estimated out-of-pocket costs for a single applicant",
            sub: "Excluding consultancy fees and required business/investment funds.",
            items: [
              ["Visa Application Charge (VAC – Entrepreneur Work Visa)", "NZD 3,360"],
              ["English Language Test", "~NZD 370"],
              ["Medical Exam", "~NZD 130"],
              ["Police Certificates", "Variable"],
            ],
            totalLabel: "Total estimated out-of-pocket costs (excluding business/investment funds, which are extra)",
            total: "NZD 3,860 – 4,200 (about ₹1.9 – ₹2.1 lakh)",
            note: "Please remember, these are rough estimates, and actual costs can vary. It's always essential to check the official Immigration New Zealand website for the most up-to-date fees and requirements. For a personalized cost breakdown and detailed guidance on financial requirements, reach out to Global Visa Internationals!",
          },
        },
        { type: "h3", text: "Other Associated Costs for New Zealand Business Visas" },
        {
          type: "infoGrid",
          items: [
            ["English Language Proficiency Tests (IELTS/PTE)", "Required for most principal applicants and often for adult dependents to meet English language requirements. Cost is typically around INR 17,000-20,000 per test (approximately NZD 340-400)."],
            ["Medical Examination", "A medical exam is required for all applicants and their dependents to ensure you meet health requirements for New Zealand immigration. The cost varies by clinic and location in India, generally INR 5,000-8,000 per person (approximately NZD 100-160)."],
            ["Police Certificates", "You'll need police certificates from every country you've lived in for 12 months or more over the last 10 years since turning 17. Costs vary depending on the issuing authority in each country."],
            ["Translation Fees", "If any of your supporting documents are not in English, you'll need certified translations. Costs for these services will vary."],
            ["Business and Investment Funds", "A crucial requirement for business and investor visas. The amount varies significantly by visa subclass, ranging from demonstrating sufficient capital for a new business to making substantial designated investments for investor visas. This is a core component of the business visa application and needs to be clearly demonstrated."],
            ["Consultancy Fees (if applicable)", "If you choose to leverage the expertise of an immigration consultant like Global Visa Internationals, their professional fees will be an additional cost. These fees vary based on the comprehensive services provided to guide you through your New Zealand business visa journey, including business plan assistance, investment guidance, and application management. We encourage you to contact Global Visa Internationals for a transparent breakdown of all costs."],
          ],
        },
      ],
    },

    {
      id: "why-nz",
      nav: "Why New Zealand",
      kicker: "Why New Zealand",
      title: "Why Choose New Zealand for Business? What Makes It So Special?",
      sub: "New Zealand isn't just another country; it's a promise of significant business potential. Here's what makes it a premier destination for business immigration.",
      blocks: [
        {
          type: "bento",
          items: [
            { icon: "TrendingUp", title: "Strong & Stable Economy", text: "New Zealand boasts a resilient and diverse economy, consistently performing well on the global stage. This stability provides a secure environment for business operations and investments." },
            { icon: "Globe", title: "Strategic Location & Trade Hub", text: "Positioned within the Asia-Pacific region, New Zealand offers valuable trade links and opportunities within a thriving global economic zone." },
            { icon: "Landmark", title: "Pro-Business Environment", text: "The New Zealand government actively supports business and innovation, offering various incentives and a streamlined regulatory framework designed to foster growth and attract foreign investment." },
            { icon: "Lightbulb", title: "Skilled Workforce & Innovation", text: "Access to a highly educated and skilled workforce, coupled with a strong focus on research and development and a culture of innovation, makes New Zealand an ideal place for forward-thinking businesses." },
            { icon: "Heart", title: "High Quality of Life", text: "Beyond business, New Zealand consistently ranks among the top countries globally for its high quality of life, offering pristine natural environments, a safe and welcoming society, and excellent social infrastructure, which is a significant draw for business owners and their families." },
            { icon: "Building2", title: "Access to World-Class Infrastructure", text: "Benefit from state-of-the-art infrastructure, including advanced telecommunications, efficient transport networks, and modern commercial facilities." },
            { icon: "Award", title: "Path to Residency", text: "Many New Zealand business visas offer a clear pathway to permanent residency, allowing successful business migrants to eventually gain full rights and privileges in their new home." },
          ],
        },
      ],
    },

    {
      id: "cities",
      nav: "Top cities",
      kicker: "Where to Start",
      title: "Key New Zealand Cities and Regions for Business Visa Seekers",
      sub: "While business opportunities exist nationwide, some cities and regions are particularly attractive for foreign investors and entrepreneurs due to their economic vibrancy, innovation ecosystems, and support systems. Consider these top destinations for your New Zealand business journey.",
      blocks: [
        {
          type: "rail",
          label: "Key New Zealand cities and regions",
          items: [
            ["Auckland", "New Zealand's largest city and economic powerhouse. A major hub for finance, technology, international trade, and creative industries. Offers diverse opportunities and a large talent pool."],
            ["Wellington", "The capital city, known for its strong government sector, creative industries, technology, and innovation. Often considered New Zealand's cultural and digital hub."],
            ["Christchurch, Canterbury", "The largest city in the South Island, undergoing significant revitalization. Strong opportunities in technology, agri-business, manufacturing, and tourism."],
            ["Queenstown, Otago", "Primarily a tourism and hospitality hub, but also offers opportunities in related services, adventure tourism, and property development."],
            ["Tauranga, Bay of Plenty", "A rapidly growing city with strong opportunities in horticulture (kiwifruit), forestry, logistics, and marine industries."],
            ["Hamilton, Waikato", "Known as New Zealand's agricultural heartland, offering opportunities in agri-tech, food processing, and research. Also boasts a growing education sector."],
            ["Dunedin, Otago", "A vibrant university city with a growing tech scene, especially in health tech and gaming, and strong links to research and education."],
          ],
        },
      ],
    },

    {
      id: "tips",
      nav: "Application tips",
      kicker: "Application Tips",
      title: "Tips for a Successful New Zealand Business Visa Application: Your Pathway to Success",
      blocks: [
        {
          type: "timeline",
          items: [
            ["Develop a Robust Business Plan", "For entrepreneur visas, a comprehensive, well-researched, and realistic business plan demonstrating innovation, growth potential, and benefit to New Zealand is critical."],
            ["Demonstrate Genuine Intent", "Clearly articulate your commitment to establishing or investing in a business in New Zealand and your active participation in its management."],
            ["Meet Financial Requirements Strictly", "Ensure you can clearly demonstrate the required business capital, investment funds, and/or settlement funds as stipulated by your chosen visa subclass."],
            ["Gather Documents Early & Accurately", "New Zealand business visa applications require extensive detailed financial, business, and personal documentation. Start collecting all required documents well in advance and ensure they are accurate and complete."],
            ["Meet English Language Requirements", "Most New Zealand business visa streams require a minimum level of English proficiency. Plan to take an approved English test (IELTS or PTE) if you haven't already."],
            ["Maintain a Clean Record", "A clean financial and criminal record is essential for New Zealand immigration."],
            ["Seek Professional Guidance", "The New Zealand Business Visa process is complex and requires meticulous preparation. Consulting with experienced immigration professionals like Global Visa Internationals is crucial to navigate the intricacies, optimize your application, and maximize your chances of success."],
          ],
        },
      ],
    },

    {
      id: "beyond",
      nav: "Beyond the visa",
      kicker: "Beyond the Visa",
      title: "Top Considerations for Your New Zealand Business Venture: Beyond the Visa Application",
      blocks: [
        {
          type: "twoCol",
          items: [
            { icon: "TrendingUp", title: "Market Research & Local Regulations", points: ["Thoroughly research the New Zealand market for your intended business or investment. Understand local regulations, competition, industry trends, and opportunities.", "Ensure your business proposal is commercially viable and aligns with New Zealand's economic needs and priorities."] },
            { icon: "Users", title: "Networking & Local Connections", points: ["Building a network within your industry in New Zealand can be invaluable. Connect with local business associations, chambers of commerce, and industry-specific groups.", "Local connections can provide crucial insights, facilitate partnerships, and offer support for your business venture."] },
            { icon: "FileText", title: "Legal & Financial Advice", points: ["Engage with New Zealand legal and financial professionals to understand tax implications, business registration, employment law, and compliance requirements.", "Global Visa Internationals can connect you with trusted partners for these specialized services."] },
            { icon: "Heart", title: "Cultural Integration", points: ["Familiarize yourself with New Zealand's business culture and practices. Understanding the local way of doing business, which values integrity and direct communication, can significantly aid your success.", "Embrace the unique Kiwi lifestyle, known for its love of the outdoors, strong community spirit, and a relaxed, friendly atmosphere."] },
          ],
        },
        { type: "h3", text: "Additional Tips for Your New Zealand Business Journey: Making the Most of Your Visa" },
        {
          type: "pills",
          items: [
            ["Stay Updated", "New Zealand immigration policies and business regulations can change. Regularly check official government websites (Immigration New Zealand) for the latest information."],
            ["Be Patient & Persistent", "The New Zealand Business Visa application process can be lengthy due to its thorough assessment. Patience, persistence, and a positive outlook are key."],
            ["Prepare for Interview (if applicable)", "Some business visa streams may require an interview. Be prepared to discuss your business plan, experience, and intentions in detail."],
            ["Maintain Valid Documents", "Ensure your passport and all other required documents remain valid throughout the entire application process and beyond."],
            ["Embrace the Adventure", "Starting a business or investing in a new country is a significant step, full of challenges and incredible opportunities. Embrace the journey, learn from new experiences, and enjoy building your new life and enterprise in New Zealand! Let Global Visa Internationals guide you every step of the way."],
          ],
        },
      ],
    },

    {
      id: "why-gvi",
      nav: "Why GVI",
      kicker: "Why Us",
      title: "Why Choose Global Visa Internationals? Your Trusted Partner for New Zealand Business Visas",
      sub: "At Global Visa Internationals, we understand that securing a New Zealand Business Visa can be a complex and highly strategic process. That's why we're dedicated to making your journey to New Zealand business immigration smooth and successful.",
      dark: true,
      blocks: [
        {
          type: "gvi",
          stats: [
            ["{YEARS}+", "Years of experience"],
            ["55,000+", "Visas processed"],
            ["75,000+", "Advice sessions"],
          ],
          items: [
            { icon: "Shield", title: "Specialized New Zealand Business Visa Expertise", text: "Our team of experienced New Zealand Business Visa consultants possesses in-depth knowledge of the various business and investment streams, helping you identify the most suitable pathway for your profile and objectives." },
            { icon: "FileText", title: "Tailored Business Plan & Investment Guidance", text: "We provide expert assistance in developing robust and compliant business plans that meet Immigration New Zealand's stringent requirements and highlight your venture's potential. We also guide you through the intricacies of investment criteria for Investor visas." },
            { icon: "ClipboardCheck", title: "Meticulous Document Preparation", text: "Say goodbye to paperwork headaches! We handle the intricacies, guide you through each step, and assist with meticulous document preparation, including financial records, business proofs, and English language test requirements, saving you invaluable time and stress." },
            { icon: "Clock", title: "Up-to-Date Knowledge", text: "The world of New Zealand immigration is constantly evolving. We stay rigorously up-to-date with the latest visa regulations and program changes to ensure your application is always accurate, compliant, and complete." },
            { icon: "Award", title: "High Success Rate", text: "Your success is our priority. We are committed to maximizing your chances of a successful New Zealand Business Visa outcome with our meticulous approach and deep understanding of the immigration landscape." },
            { icon: "Globe", title: "Additional Services", text: "Beyond core application support, we offer valuable services like guidance on English language requirements, insights into the New Zealand business environment, and essential settlement advice to help your business thrive in New Zealand." },
          ],
          about: [
            "We at Global Visa Internationals are proud to be India's finest visa consultants. We're dedicated to turning your dreams of establishing or investing in a business in New Zealand into reality. With over {YEARS}+ years of experience as leading visa consultants in Bangalore, we have successfully processed over 55,000+ visas and offered over 75,000 expert visa advice sessions to date. You can confidently rely on our vast experience in New Zealand business immigration consulting in India.",
            "Don't let the complexities of the New Zealand Business Visa process deter your entrepreneurial spirit! Let Global Visa Internationals be your trusted partner in navigating the application and planning your exciting new business venture and life in New Zealand. Contact us today for a free consultation and take the first step towards your New Zealand business dream!",
          ],
        },
      ],
    },

    {
      id: "faq",
      nav: "FAQ",
      kicker: "FAQ",
      title: "New Zealand Business Visa: Frequently Asked Questions",
      blocks: [{ type: "faq" }],
    },
  ],
};

export default newZealand;
