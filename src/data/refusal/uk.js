const uk = {
  slug: 'uk',
  name: 'UK',
  accent: '#ff9f43',
  updated: '2026-10-30',
  image: '/images/uk-visa-refusal-banner.png',

  seoTitle: 'UK Visa Refusal Help | Global Visa Internationals',
  seoDescription:
    'UK visa refused? Learn why UKVI refuses applications, when an administrative review is possible and how to reapply. Free case review for Indian applicants.',

  h1: 'UK visa refused? Check your review rights, then rebuild your case',
  lead:
    'UKVI refusal letters cite specific paragraphs of the Immigration Rules. Reading them correctly tells you whether to seek a review or reapply, and what evidence to add.',
  quickAnswer:
    'Review rights depend on the route. Administrative review is available for some categories, such as Skilled Worker and Student, with a 28-day deadline for applicants outside the UK. Most visitor visa refusals have no appeal or review right, so the usual route is a new application that fixes the problems. Judicial review is a last resort for unlawful decisions.',
  glance: [
    { label: 'Administrative review', value: 'Some routes only, usually 28 days if you applied from outside the UK' },
    { label: 'Visitor refusals', value: 'Usually no appeal; reapply with better evidence' },
    { label: 'Deception finding', value: 'Can lead to a re-entry ban of up to 10 years' },
  ],

  reasonsIntro:
    'The letter quotes the rule you failed. These are the issues behind it most often.',
  reasons: [
    { t: 'Not a genuine visitor or student', d: 'UKVI must believe you will do what you say and leave when your stay ends. Doubts about purpose or credibility lead to refusal.' },
    { t: 'Financial requirements not met', d: 'Funds that are too low, held for too short a time, or held in the wrong form or account.' },
    { t: 'Ties to India not shown', d: 'Weak evidence of employment, family responsibilities or property that gives you a reason to return.' },
    { t: 'Documents missing or inconsistent', d: 'Out-of-date statements, mismatched details or vague letters from employers and hosts.' },
    { t: 'False representation', d: 'Wrong or misleading information or documents can result in refusal and a ban of up to 10 years.' },
    { t: 'Eligibility not met', d: 'English language, qualifications, sponsorship or experience that do not match the route’s requirements.' },
    { t: 'Sponsor or host concerns', d: 'A host or sponsor who cannot show their own status, finances or relationship to you.' },
    { t: 'Previous immigration history', d: 'Earlier refusals, overstays or breaches that are not addressed in the new application.' },
  ],

  options: [
    { t: 'Read the refusal letter carefully', d: 'It names the rules you failed and says whether you can ask for an administrative review. Missing the deadline usually closes that option.' },
    { t: 'Administrative review, if available', d: 'You can ask UKVI to review a decision if you believe it contains a casework error, for example a document you sent was overlooked. You cannot add new evidence.' },
    { t: 'Reapply with a stronger application', d: 'The common route. Fix each issue, add the evidence that was missing and declare all previous refusals honestly on the form.' },
    { t: 'Judicial review as a last resort', d: 'A court challenge where a decision was unlawful or irrational, not just disappointing. It needs a UK immigration solicitor and moves fast.' },
  ],

  services: ['Visitor visa', 'Student visa', 'Work visa', 'Business visa'],

  faqs: [
    { q: 'Can I appeal a UK visa refusal?', a: 'Rights of appeal are limited. Some routes allow an administrative review, which is only for casework errors. Most visitor refusals have no review or appeal right, so reapplying is the usual route.' },
    { q: 'What is an administrative review and what is the deadline?', a: 'It is a UKVI check for errors in how your application was decided. For applicants outside the UK the deadline is usually 28 days from the decision, but check your letter.' },
    { q: 'Must I declare a previous refusal?', a: 'Yes. The application form asks about earlier refusals, and not declaring one can itself be treated as deception. Address the reasons in your cover letter.' },
    { q: 'How do I strengthen a UK visa reapplication?', a: 'Answer every point in the refusal with new evidence: updated finances, a clear itinerary or study plan, proof of ties to India and an honest explanation of what was missing before.' },
    { q: 'Should I use a solicitor or adviser?', a: 'An experienced adviser helps you fix and organise the application. For judicial review or deception allegations you need a solicitor or an OISC-regulated adviser at the right level.' },
  ],

  sources: [
    { label: 'GOV.UK: Visas and immigration', href: 'https://www.gov.uk/browse/visas-immigration' },
  ],
};

export default uk;
