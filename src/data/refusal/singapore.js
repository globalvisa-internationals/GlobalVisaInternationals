const singapore = {
  slug: 'singapore',
  name: 'Singapore',
  accent: '#ff7a90',
  updated: '2026-10-30',
  image: null, // add e.g. '/images/singapore-visa-refusal-banner.jpg' when you have one; a clean fallback shows until then

  seoTitle: 'Singapore Visa Refusal Help | Global Visa Internationals',
  seoDescription:
    'Singapore visa rejected? ICA rarely states why. Learn the likely reasons, how to appeal and how to build a stronger reapplication. Free case review from India.',

  h1: 'Singapore visa rejected? Work out the likely reason, then fix it',
  lead:
    'ICA usually does not explain why an application was rejected. That makes a careful review of your original file the most useful first step.',
  quickAnswer:
    'You can submit an appeal to the Immigration & Checkpoints Authority (ICA) online, generally within about a month of the rejection, with supporting documents that address the likely cause. If that fails, or the problem is clear, a corrected new application is often the better option.',
  glance: [
    { label: 'Reason given', value: 'ICA usually does not state specific reasons' },
    { label: 'Appeal', value: 'Online appeal to ICA, commonly within about one month' },
    { label: 'Quick check', value: 'Passport valid at least six months with blank pages' },
  ],

  reasonsIntro:
    'Because the reason is rarely stated, we compare your file against the points below to find the likely cause.',
  reasons: [
    { t: 'Incorrect or incomplete application details', d: 'Wrong passport numbers or dates, or answers left blank, and details that differ between forms and documents.' },
    { t: 'Insufficient financial proof', d: 'Not enough evidence that you can pay for your stay and accommodation.' },
    { t: 'Unclear purpose or itinerary', d: 'No hotel booking, flight plan or invitation to support the reason for your trip.' },
    { t: 'Weak ties to India', d: 'Little to show you have employment, family or other reasons to return after the visit.' },
    { t: 'Past rejections or violations', d: 'Earlier refusals, overstays or immigration problems in Singapore or elsewhere.' },
    { t: 'Passport issues', d: 'Less than six months’ validity, too few blank pages or visible damage.' },
    { t: 'Photo or document problems', d: 'Photos that do not meet the specifications, or documents that look altered or invalid.' },
    { t: 'A valid Singapore visa already held', d: 'A new application while a previous visa is still valid is likely to be rejected.' },
  ],

  options: [
    { t: 'Review the rejection and your file', d: 'ICA does not usually give detailed reasons, so compare your application with the list of common causes to find the most likely one.' },
    { t: 'Submit an appeal to ICA', d: 'Use ICA’s online appeal process, generally within a month, and attach a clear explanation and documents that directly address the likely issue. Appeals can take a couple of weeks or more to be answered.' },
    { t: 'Reapply with a corrected application', d: 'Where the cause is clear, such as a passport or document problem, fix it and submit a new application with complete, consistent evidence.' },
    { t: 'Do not apply repeatedly without changes', d: 'Several rejections in a short time can count against you. Change something meaningful before each attempt.' },
  ],

  services: ['Visitor visa', 'Business visa', 'Student pass', 'Work pass'],

  faqs: [
    { q: 'Why does ICA not tell me why my visa was rejected?', a: 'ICA typically does not give specific reasons for visa decisions. That is why a careful review of your application and documents is needed to identify the likely cause.' },
    { q: 'Can I appeal a Singapore visa rejection?', a: 'Yes. You can submit an appeal to ICA online, usually within one month of the rejection, with supporting documents that address the likely cause. Check ICA’s current process before you file.' },
    { q: 'Should I appeal or reapply?', a: 'If you can identify and fix a clear problem, such as missing documents or passport issues, a new application is often faster. An appeal suits cases where you believe the decision overlooked something.' },
    { q: 'How do I strengthen a reapplication?', a: 'Provide clear proof of funds, a confirmed itinerary with bookings, strong evidence of ties to India and complete, consistent forms. Explain what has changed since the rejection.' },
    { q: 'Can a consultant help if ICA gives no reasons?', a: 'Yes. A consultant can audit your original application, spot the likely weakness and prepare the appeal or new file so it answers the right concerns.' },
  ],

  sources: [
    { label: 'Immigration & Checkpoints Authority (ICA), Singapore', href: 'https://www.ica.gov.sg' },
  ],
};

export default singapore;
