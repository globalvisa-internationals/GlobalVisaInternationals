const australia = {
  slug: 'australia',
  name: 'Australia',
  accent: '#ffcd00',
  updated: '2026-10-30',
  image: '/images/Australia1.png',
  reviewsWidgetId: 'f560162c-1e98-4995-97af-3da789ac6ec5', // Elfsight widget; script must be loaded in your layout

  seoTitle: 'Australia Visa Refusal Help | Global Visa Internationals',
  seoDescription:
    'Australia visa refused? Understand the Genuine Student and Genuine Visitor tests, your review rights and how to reapply. Free case review for Indian applicants.',

  h1: 'Australia visa refused? Turn the refusal into a stronger application',
  lead:
    'Many Australian refusals come down to evidence that was unclear, incomplete or inconsistent. Once you know which criterion failed, you can build a much stronger case.',
  quickAnswer:
    'For many Australian visa refusals, especially visitor and student visas applied for from outside Australia, there is no right of review, so the usual route is a new, stronger application. Some refusals can be reviewed by the Administrative Review Tribunal (ART), which replaced the AAT in October 2024, and the deadline is strict.',
  glance: [
    { label: 'Review right', value: 'Only for some visa types, through the ART' },
    { label: 'Key tests', value: 'Genuine Student for students and Genuine Visitor for visitors' },
    { label: 'Best first step', value: 'Read the refusal notice for the exact criterion and time limit' },
  ],

  reasonsIntro:
    'The refusal notice names the criterion that was not met. These are the problems behind it most often.',
  reasons: [
    { t: 'Genuine Student requirement', d: 'Since March 2024 this test replaced the GTE for students. Your reasons for choosing the course, provider and Australia over home options must be convincing.' },
    { t: 'Genuine Visitor concerns', d: 'For visitors, the officer must be satisfied you intend a genuine temporary stay, which depends on your ties, finances and travel history.' },
    { t: 'Weak financial evidence', d: 'Funds that are too low, recently deposited or not clearly sourced make it hard to show you can support yourself.' },
    { t: 'Incomplete or incorrect documents', d: 'Missing items, wrong forms or uncertified translations are avoidable causes of refusal.' },
    { t: 'Health or character issues', d: 'Medical conditions, police records or inconsistencies with past applications can lead to refusal.' },
    { t: 'False or misleading information', d: 'Providing incorrect information or documents can trigger an exclusion period of up to three years.' },
    { t: 'Wrong visa subclass', d: 'Applying under a category that does not match your real purpose can be refused even when the documents are strong.' },
    { t: 'English or skills requirements not met', d: 'Test scores, skills assessments or employer documents that do not satisfy the visa criteria.' },
  ],

  options: [
    { t: 'Understand the refusal notice', d: 'The notice states the legal criterion, the reasons and whether you have review rights. It also gives the time limit, which is short and cannot be extended.' },
    { t: 'Apply for review at the ART where available', d: 'If your visa type has merits review, you can ask the Administrative Review Tribunal to look at the decision afresh. Check eligibility and the deadline straight away.' },
    { t: 'Reapply with a corrected, stronger application', d: 'Often the best route. Address each concern with new evidence, a clear personal statement and consistent documents, and declare the previous refusal accurately.' },
    { t: 'Take legal advice for complex cases', d: 'For character issues, misleading-information findings or court challenges, speak to a registered migration agent or immigration lawyer.' },
  ],

  services: ['Visitor visa', 'Student visa', 'Work visa', 'Skilled visa', 'Family visa'],

  faqs: [
    { q: 'Can I appeal an Australian visa refusal?', a: 'Only some refusals can be reviewed. Review is usually through the Administrative Review Tribunal (ART), and many visitor and student refusals made outside Australia have no review right. Your refusal notice says what applies.' },
    { q: 'Is the GTE requirement still used?', a: 'For student visas, the GTE was replaced by the Genuine Student requirement in March 2024. Visitor visas assess whether you are a genuine visitor. Always check the current rules on the Home Affairs website.' },
    { q: 'Should I reapply or seek review?', a: 'It depends on whether you have review rights and what the refusal criterion was. If review is not available, or the problem is missing evidence, a stronger new application is usually the best option.' },
    { q: 'Will a refusal affect my next application?', a: 'You must declare it, and the new application will be assessed with that history in mind. A refusal alone does not bar you, but unexplained repeats of the same weakness usually lead to the same result.' },
    { q: 'How long do I have to act?', a: 'Review deadlines are strict and set out in your refusal notice, so check it straight away. Reapplication has no general waiting period, but you should fix the gaps first.' },
  ],

  sources: [
    { label: 'Department of Home Affairs: Visas', href: 'https://immi.homeaffairs.gov.au' },
    { label: 'Administrative Review Tribunal', href: 'https://www.art.gov.au' },
  ],
};

export default australia;
