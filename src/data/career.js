// Edit roles here. The page, the schema.org JobPosting data and the salary text all read from this one place,
// so they can never disagree (Google requires structured data to match what visitors see).

export const CAREER = {
  datePosted: '2025-08-19', // update when you repost; also set validThrough ('YYYY-MM-DD') on a role if it has a closing date
  seoTitle: 'Visa Jobs in Bangalore | Global Visa Internationals',
  seoDescription:
    'Join Global Visa Internationals in Bangalore. Freshers can apply for Visa Counselor and Visa Documentation Executive roles and start a career in immigration.',
  ogImage: '/hiring/gvi-hiring-banner.webp', // your old file used /public/hiring/..., but Next serves public/ from the root

  title: { before: 'Start your visa career in ', em: 'Bengaluru' }, // h1; the italic part is the highlighted word
  lead:
    'We are hiring freshers to guide real applicants through visa applications, from the first enquiry to the final filing.',
  heroCard: { kicker: 'NOW HIRING', before: 'Guide people to their ', em: 'next country', footer: 'BENGALURU · MG ROAD' },

  intro: {
    label: 'WHY JOIN US',
    before: 'Help people move abroad with ',
    em: 'confidence',
    text:
      'Every application is someone’s plan for study, work or family. At Global Visa Internationals you will learn how visa cases actually work, with real clients and a team to learn from.',
  },
  rolesText: 'Both roles are full-time in Bengaluru and open to freshers. Pick the one that fits you and apply below.',
  applyText: 'Fill in your details and tell us which role you want. Prefer to talk first? Call our HR team.',

  form: { kicker: 'YOUR CAREER STARTS WITH A HELLO', before: 'Apply to ', em: 'join us', text: 'Fill in the form and our team will review your application.' },

  perks: [
    { t: 'Freshers welcome', d: 'Both open roles are for people starting their career. No prior experience needed.' },
    { t: 'Real client work', d: 'Work with applicants on actual cases, from eligibility checks to documentation.' },
    { t: 'Learn many countries', d: 'Build knowledge across visa routes for several destinations.' },
    { t: 'Central location', d: 'Our office is on MG Road, Bengaluru.' },
  ],

  roles: [
    {
      id: 'VC-001',
      title: 'Visa Counselor (Sales Executive)',
      tags: ['Full-time', 'Freshers only', 'Bengaluru'],
      salary: { min: 15000, max: 18000, unit: 'MONTH', display: '₹15,000 – ₹18,000 per month' },
      overview:
        'A client-facing role guiding applicants through visa procedures, documentation and eligibility assessments. A good start if you want a career in visa consultancy or the immigration services industry.',
      responsibilities: [
        'Guide clients through visa requirements, processes and documentation for various countries.',
        'Evaluate applicant profiles and suggest suitable visa options.',
        'Handle walk-in enquiries, phone leads and email queries professionally.',
        'Coordinate with the documentation team so applications are processed on time.',
        'Maintain and update client records.',
        'Support clients throughout their visa journey.',
      ],
      requirements: [
        'Freshers only',
        'Excellent English communication, spoken and written',
        'Proficient in MS Office (Word, Excel, Outlook)',
        'Strong interpersonal and counselling skills',
        'Ability to build trust and rapport with clients',
        'Detail-oriented, organised, goal-driven and proactive',
        'Any degree (Business, Marketing or Humanities preferred)',
      ],
    },
    {
      id: 'DE-002',
      title: 'Visa Documentation Executive',
      tags: ['Full-time', 'Freshers only', 'Bengaluru'],
      salary: { min: 15000, max: 18000, unit: 'MONTH', display: '₹15,000 – ₹18,000 per month' },
      overview:
        'A documentation-focused role preparing, reviewing and managing visa applications with accuracy and compliance. Ideal if you want to build expertise in visa documentation and processing.',
      responsibilities: [
        'Assist in preparing and reviewing visa applications and supporting documents.',
        'Coordinate with Visa Counselors to keep documentation complete and accurate.',
        'Maintain organised, up-to-date client files.',
        'Track application progress and update clients on status.',
        'Submit applications on time to meet deadlines.',
      ],
      requirements: [
        'Freshers only',
        'Strong attention to detail and organisation',
        'Good written communication',
        'Proficient in MS Office (Word, Excel, Outlook)',
        'Able to work independently and in a team',
        'Any degree (Business, Commerce or Humanities preferred)',
      ],
    },
  ],
};
