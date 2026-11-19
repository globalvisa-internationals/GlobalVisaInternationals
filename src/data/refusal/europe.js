const europe = {
  slug: 'europe',
  name: 'Europe',
  accent: '#5b8cff',
  updated: '2026-10-30',
  image: '/images/Europe1.png',

  seoTitle: 'Europe Visa Refusal Help | Global Visa Internationals',
  seoDescription:
    'Schengen or Europe visa refused? Understand your refusal form, national appeal rights and how to reapply. Free case review for Indian applicants.',

  h1: 'Schengen or Europe visa refused? Start with your refusal form',
  lead:
    'Every Schengen refusal comes with a standard form that ticks the reasons. Matching each tick to the right evidence is the fastest way to a stronger second application.',
  quickAnswer:
    'If a Schengen state refuses your short-stay visa, you have a right to challenge the decision under that country’s national procedure, but deadlines and steps differ by country and are stated on your refusal form. You can also reapply with new evidence. Refusals are stored in the Visa Information System (VIS), so always declare them on your next application.',
  glance: [
    { label: 'Appeal right', value: 'Yes, under the national law of the refusing country' },
    { label: 'Deadline', value: 'Varies by country, so check your refusal form straight away' },
    { label: 'Record', value: 'Refusals are kept in the VIS, so declare them next time' },
  ],

  reasonsIntro:
    'The standard refusal form uses numbered boxes. These are the situations behind the ones we see most.',
  reasons: [
    { t: 'Purpose and conditions of stay not justified', d: 'The itinerary, bookings or invitation do not clearly support the reason you gave for travelling.' },
    { t: 'Insufficient means of subsistence', d: 'Bank statements that do not show enough funds for the full trip, or that show unexplained large deposits.' },
    { t: 'Doubts about intention to leave', d: 'The consulate is not satisfied you will return before the visa expires, usually due to weak ties to India.' },
    { t: 'Accommodation or insurance missing', d: 'No proof of where you will stay, or no valid travel medical insurance for the whole Schengen area.' },
    { t: 'Unreliable or inconsistent information', d: 'Documents whose details do not match each other, or that the consulate could not verify.' },
    { t: 'Previous overstay or misuse of visas', d: 'Earlier breaches of a Schengen visa or other immigration violations.' },
    { t: 'Applying to the wrong country', d: 'Your main destination or longest stay should decide which consulate you apply to. Mismatches create doubt.' },
    { t: 'Invitation or sponsor concerns', d: 'A host letter without the required detail, or a sponsor who cannot show they can cover your costs.' },
  ],

  options: [
    { t: 'Read the refusal form and note the deadline', d: 'It lists the ticked reasons and tells you how and where to appeal. Appeal windows in some countries are as short as two weeks.' },
    { t: 'Appeal under national law', d: 'Each Schengen state sets its own procedure, such as a remonstration, administrative appeal or court review. An appeal works best when the refusal was based on a mistake of fact or missing information you had already sent.' },
    { t: 'Reapply with a stronger application', d: 'There is usually no fixed waiting period. Fix each ticked reason, add clearer proof of ties and funds, and apply to the right country for your main destination.' },
    { t: 'Be consistent with the VIS record', d: 'Always declare previous refusals. Differences between your old and new applications are visible to the consulate.' },
  ],

  services: ['Schengen visitor visa', 'Student visa', 'Work visa', 'Family visit visa'],

  faqs: [
    { q: 'Can I appeal a Schengen visa refusal?', a: 'Yes. You have a right to challenge a refusal under the national procedure of the country that refused you. The method and deadline vary and are stated on your refusal form.' },
    { q: 'Should I appeal or reapply?', a: 'Appeal when the refusal looks wrong on the facts or ignored documents you sent. Reapply when evidence was weak or missing, which is the more common case.' },
    { q: 'Does a refusal affect future Schengen applications?', a: 'Refusals are stored in the VIS and visible to other Schengen states. A refusal does not bar you, but you must declare it, and the new file should clearly answer the earlier concerns.' },
    { q: 'Can I apply to a different Schengen country after a refusal?', a: 'You should apply to the country of your main destination. Switching only to avoid a refusal is easily spotted in the VIS and can count against you.' },
    { q: 'Should I hire a consultant after a refusal?', a: 'A consultant can help you read the form, decide between appeal and reapplication, and prepare stronger evidence. For formal appeals, a lawyer in the refusing country may be needed.' },
  ],

  sources: [
    { label: 'European Commission: Schengen visa policy', href: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa_en' },
  ],
};

export default europe;
