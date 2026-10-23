import Link from 'next/link';

export const metadata = {
    title: 'New Zealand Post-Study Work Visa Changes 2026: Level 7 Rules',
    description:
        'Learn about New Zealand\'s Post-Study Work Visa changes from 16 November 2026, including new Level 7 Graduate Diploma eligibility for bachelor\'s degree holders.',
    excerpt: 'Understand the New Zealand PSWV updates from 16 November 2026 and what they mean for Indian students and graduates.',
    keywords: [
        'New Zealand post study work visa 2026',
        'New Zealand PSWV new rules',
        'New Zealand post study work visa changes',
        'New Zealand work visa after study',
        'New Zealand Graduate Diploma visa',
        'New Zealand visa for Indian students',
        'New Zealand post study work visa eligibility',
        'NZ Level 7 Graduate Diploma',
        'New Zealand immigration update 2026',
    ],
    author: 'Global Visa Internationals Team',
    date: '2026-09-24',
    image: '/BlogImages/New Zealand Post-Study Work Visa Changes 2026.png',
    category: 'Immigration News & Updates',
    twitter: {
        creator: '@GLOBALVISA1505',
    },
    faq: [
        {
            question: 'When do the new New Zealand Post-Study Work Visa rules start?',
            answer: 'The expanded eligibility for Level 7 Graduate Diploma graduates starts on 16 November 2026.',
        },
        {
            question: 'Can an Indian bachelor\'s degree be used?',
            answer: 'Yes. Under the new Level 7 Graduate Diploma pathway, the bachelor\'s degree can have been completed in New Zealand or overseas.',
        },
        {
            question: 'Does the Graduate Diploma have to be studied in New Zealand?',
            answer: 'Yes. The new pathway requires the Level 7 Graduate Diploma to be studied full-time in New Zealand for the full duration of the qualification.',
        },
        {
            question: 'Can previous credits be transferred into the Graduate Diploma?',
            answer: 'Students need to be careful. Immigration New Zealand states that cross-crediting or recognition of prior learning does not qualify for meeting the full-duration requirement under the new pathway.',
        },
        {
            question: 'How long is the Post-Study Work Visa for the new Graduate Diploma pathway?',
            answer: 'For this pathway, Immigration New Zealand states the visa can cover the duration spent studying the Graduate Diploma in New Zealand, up to a maximum of one year.',
        },
        {
            question: 'Is a Post-Study Work Visa guaranteed after completing the course?',
            answer: 'No. Completing a qualification does not automatically guarantee visa approval. Applicants must meet all applicable immigration requirements.',
        },
        {
            question: 'What is the new Short-Term Graduate Work Visa?',
            answer: 'It is a new visa introduced for certain graduates who do not qualify for a Post-Study Work Visa. It can provide up to 6 months of open work rights, subject to the visa requirements.',
        },
        {
            question: 'Can I get another Post-Study Work Visa after already holding one?',
            answer: 'Immigration New Zealand states that an individual can only be granted one Post-Study Work Visa.',
        },
    ],
};

/* ------------------------------------------------------------------ */
/* Static content                                                      */
/* ------------------------------------------------------------------ */

const TOC = [
    { id: 'overview', label: 'Quick overview' },
    { id: 'what-changes', label: 'What changes on 16 Nov 2026' },
    { id: 'eligibility', label: 'Eligibility & pre-enrolment checks' },
    { id: 'documents', label: 'Document checklist' },
    { id: 'steps', label: 'Application steps' },
    { id: 'mistakes', label: 'Common mistakes' },
    { id: 'duration', label: 'Duration & comparison' },
    { id: 'short-term', label: 'Short-Term Graduate Work Visa' },
    { id: 'good-to-know', label: 'Family, work rights & limits' },
    { id: 'official-links', label: 'Official links' },
    { id: 'faq', label: 'FAQ' },
];

const KEY_FACTS = [
    { value: '16 Nov 2026', label: 'New rules take effect' },
    { value: 'Level 7', label: 'NZQCF Graduate Diploma' },
    { value: '≤ 1 year', label: 'PSWV on this pathway' },
    { value: '6 months', label: 'Short-Term Graduate Work Visa' },
];

const DOCUMENT_GROUPS = [
    {
        title: 'Identity & visa status',
        accent: 'border-indigo-200 bg-indigo-50/60',
        badge: 'bg-indigo-600',
        items: [
            'Valid passport (and any previous passports used for visas)',
            'Your current New Zealand student visa and its expiry date',
            'Recent passport-style digital photograph',
            'Evidence of any name change (marriage certificate, deed poll, etc.)',
        ],
    },
    {
        title: 'Graduate Diploma evidence',
        accent: 'border-emerald-200 bg-emerald-50/60',
        badge: 'bg-emerald-600',
        items: [
            'Completion letter or academic transcript for the NZQCF Level 7 Graduate Diploma',
            'Proof that the qualification was studied full-time in New Zealand',
            'Provider confirmation of the programme length and your enrolment for its full duration',
            'Confirmation that no cross-credits or recognition of prior learning shortened the programme',
        ],
    },
    {
        title: 'Bachelor\'s degree evidence',
        accent: 'border-amber-200 bg-amber-50/60',
        badge: 'bg-amber-500',
        items: [
            'Bachelor\'s degree certificate (India or overseas)',
            'Full transcripts / mark sheets for the bachelor\'s degree',
            'Certified English translations of any document not in English',
        ],
    },
    {
        title: 'Only if Immigration NZ asks',
        accent: 'border-rose-200 bg-rose-50/60',
        badge: 'bg-rose-500',
        items: [
            'Police certificate(s) to meet character requirements',
            'Medical or chest X-ray certificate for health requirements',
            'Any extra evidence listed on your own application checklist',
        ],
    },
];

const STEPS = [
    {
        title: 'Confirm you are eligible',
        body: 'Check that your programme is an NZQCF Level 7 Graduate Diploma, studied full-time in New Zealand for its full duration, and that you hold a bachelor\'s degree. Remember that cross-crediting and recognition of prior learning do not count.',
    },
    {
        title: 'Note the start date and your deadlines',
        body: 'The expanded Level 7 eligibility applies from 16 November 2026. Look up the time limit Immigration New Zealand sets for applying relative to your student visa expiry, and plan your documents backwards from it.',
    },
    {
        title: 'Collect and organise your documents',
        body: 'Use the checklist above. Scan every page clearly, keep file names consistent, and arrange certified translations early. They are often the slowest part.',
    },
    {
        title: 'Sign in to your Immigration NZ online account',
        body: 'Start the Post Study Work Visa application online through Immigration New Zealand. Check the official page for the current form, fee and any questions that apply to your qualification.',
    },
    {
        title: 'Complete the form, upload evidence and pay',
        body: 'Answer every question consistently with your passport and student records, upload your supporting documents, and pay the application fee.',
    },
    {
        title: 'Respond to any requests promptly',
        body: 'If Immigration New Zealand asks for medicals, police certificates or clarification, reply within the time given. Delays can cost you your work rights.',
    },
    {
        title: 'Receive your decision and check the conditions',
        body: 'If granted, read the visa conditions carefully, including work conditions and any occupational registration. Approval is never guaranteed, even when you meet the qualification rules.',
    },
];

const MISTAKES = [
    {
        mistake: 'Assuming every postgraduate course earns a 3-year visa',
        fix: 'Check the exact qualification. For this new pathway the visa is up to 1 year, not 3.',
    },
    {
        mistake: 'Using cross-credits or prior learning to shorten the diploma',
        fix: 'Confirm with your provider that you will study the full duration. INZ says these do not qualify.',
    },
    {
        mistake: 'Enrolling in a course that is not Level 7',
        fix: 'Verify the NZQCF level and the exact qualification type before paying fees.',
    },
    {
        mistake: 'Not keeping proof of the bachelor\'s degree',
        fix: 'Keep the certificate and full transcripts safe, with translations if needed.',
    },
    {
        mistake: 'Expecting the new pathway before 16 November 2026',
        fix: 'Plan around the start date and read the INZ announcement for how transition applies to you.',
    },
    {
        mistake: 'Missing the application window after the student visa',
        fix: 'Find the deadline on the INZ page and apply with time to spare.',
    },
    {
        mistake: 'Planning on a second Post-Study Work Visa',
        fix: 'Only one PSWV can be granted, so choose your qualification with that in mind.',
    },
    {
        mistake: 'Treating course completion as a guaranteed visa',
        fix: 'You must still meet every immigration requirement, including health and character.',
    },
];

const OFFICIAL_LINKS = [
    {
        title: 'INZ announcement: PSWV eligibility extended from 16 November 2026',
        desc: 'The official news item behind this article.',
        href: 'https://www.immigration.govt.nz/about-us/news-centre/post-study-work-visa-eligibility-extended-from-16-november-2026/',
    },
    {
        title: 'Immigration NZ: Post Study Work Visa',
        desc: 'Eligibility, conditions, fees and how to apply.',
        href: 'https://www.immigration.govt.nz/visas/post-study-work-visa/',
    },
    {
        title: 'Work Visa Guide (INZ 1016)',
        desc: 'The official guide to work visa requirements, as a PDF.',
        href: 'https://www.immigration.govt.nz/assets/inz/documents/forms-and-guides/Work-Visa-Guide-INZ-1016.pdf',
    },
    {
        title: 'Immigration New Zealand',
        desc: 'Home page for all visa information and your online account.',
        href: 'https://www.immigration.govt.nz/',
    },
    {
        title: 'NZQA',
        desc: 'Check how a qualification is levelled on the NZQCF.',
        href: 'https://www.nzqa.govt.nz/',
    },
];

const PRE_ENROL_CHECKS = [
    { label: 'Qualification level', text: 'Confirm the programme is an NZQCF Level 7 Graduate Diploma.' },
    { label: 'Study mode', text: 'Check it meets the full-time study requirements.' },
    { label: 'Study duration', text: 'Understand how long you must study in New Zealand.' },
    { label: 'Previous qualifications', text: 'Make sure you can evidence your overseas bachelor\'s degree.' },
    { label: 'Credit transfers', text: 'Ask whether prior study could count as cross-crediting or recognition of prior learning.' },
    { label: 'Visa duration', text: 'Do not assume every qualification provides a three-year PSWV.' },
    { label: 'Career plans', text: 'Check the course fits your longer-term plans in New Zealand.' },
];

const COMPARISON = [
    ['Level 7 Graduate Diploma + bachelor\'s degree', 'PSWV eligibility extended from 16 November 2026, subject to requirements'],
    ['Eligible Level 7 non-degree qualification', 'PSWV may apply under qualification-specific conditions'],
    ['Eligible Level 8 Postgraduate Diploma', 'Potential 1-year PSWV'],
    ['Eligible Level 9 Master\'s degree', 'Potential 3-year PSWV'],
    ['Eligible Level 10 Doctoral degree', 'PSWV pathway may apply under current rules'],
    ['Certain Level 5–7 qualifications not eligible for PSWV', 'New 6-month Short-Term Graduate Work Visa may be available'],
];

const SCHENGEN_URL = '/Visa/tourist-visa/schengen';

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function SectionHeading({ id, kicker, title, intro }) {
    return (
        <div id={id} className="scroll-mt-24">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">{kicker}</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{title}</h2>
            {intro && <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{intro}</p>}
        </div>
    );
}

function CheckItem({ children }) {
    return (
        <li>
            <label className="flex cursor-pointer items-start gap-3 rounded-lg p-1.5 transition hover:bg-white/70">
                <input type="checkbox" className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 accent-emerald-600" />
                <span className="leading-snug text-slate-700">{children}</span>
            </label>
        </li>
    );
}

function Tick() {
    return (
        <svg className="mt-1 h-5 w-5 shrink-0 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function FlowChip({ children, tone = 'bg-white text-slate-800 border-slate-200' }) {
    return (
        <span className={`inline-flex items-center rounded-xl border px-4 py-2 text-sm font-semibold shadow-sm ${tone}`}>
            {children}
        </span>
    );
}

function Arrow() {
    return (
        <span className="text-slate-400 font-bold" aria-hidden="true">
            →
        </span>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function NewZealandPostStudyWorkVisaChanges2026() {
    return (
        <article className="space-y-14 text-slate-800">
            {/* ---------------------------- HERO ---------------------------- */}
            <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-6 text-white shadow-xl sm:p-12">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

                <div className="relative">
                    <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-900">
                        Immigration News &amp; Updates
                    </span>

                    <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                        New Zealand Post-Study Work Visa Changes 2026
                        <span className="mt-2 block bg-gradient-to-r from-emerald-300 to-amber-200 bg-clip-text text-transparent">
                            New rules for Level 7 graduates
                        </span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">
                        From <strong className="text-white">16 November 2026</strong>, eligible international students who complete an{' '}
                        <strong className="text-white">NZQCF Level 7 Graduate Diploma</strong> may qualify for a Post-Study Work Visa if they
                        also hold a bachelor&apos;s degree. Immigration New Zealand announced the change on{' '}
                        <strong className="text-white">10 September 2026</strong>.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300">
                        <span>By {metadata.author}</span>
                        <span aria-hidden="true">•</span>
                        <time dateTime={metadata.date}>24 September 2026</time>
                        <span aria-hidden="true">•</span>
                        <span>9 min read</span>
                    </div>

                    <dl className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
                        {KEY_FACTS.map((f) => (
                            <div key={f.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                                <dt className="text-xs uppercase tracking-wider text-slate-300">{f.label}</dt>
                                <dd className="mt-1 text-xl font-extrabold text-white sm:text-2xl">{f.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </header>

            {/* ------------------- BODY WITH STICKY TOC --------------------- */}
            <div className="grid gap-10 lg:grid-cols-[250px_minmax(0,1fr)]">
                {/* Table of contents */}
                <aside className="hidden lg:block">
                    <nav
                        aria-label="Table of contents"
                        className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">On this page</p>
                        <ol className="mt-4 space-y-1 text-sm">
                            {TOC.map((t, i) => (
                                <li key={t.id}>
                                    <a
                                        href={`#${t.id}`}
                                        className="flex gap-3 rounded-lg px-2 py-1.5 text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
                                    >
                                        <span className="w-5 font-bold text-indigo-400">{String(i + 1).padStart(2, '0')}</span>
                                        <span>{t.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </aside>

                <div className="min-w-0 space-y-16">
                    {/* ------------------------ OVERVIEW ------------------------ */}
                    <section className="space-y-6">
                        <SectionHeading
                            id="overview"
                            kicker="Start here"
                            title="What is the New Zealand Post-Study Work Visa?"
                        />
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="font-bold text-slate-900">It lets graduates stay and work</h3>
                                <p className="mt-2 leading-relaxed text-slate-600">
                                    The Post-Study Work Visa allows eligible international graduates to remain in New Zealand after
                                    their studies and work. Depending on the qualification, they may be able to stay for{' '}
                                    <strong>up to three years</strong>.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="font-bold text-slate-900">It is not a student visa</h3>
                                <p className="mt-2 leading-relaxed text-slate-600">
                                    A student visa is mainly for studying. The Post-Study Work Visa is a pathway to work after you
                                    complete eligible studies.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ----------------------- WHAT CHANGES --------------------- */}
                    <section className="space-y-6">
                        <SectionHeading
                            id="what-changes"
                            kicker="The update"
                            title="What is changing from 16 November 2026?"
                            intro="The major change extends Post-Study Work Visa eligibility to certain Level 7 Graduate Diploma graduates."
                        />

                        <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
                            <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">The new pathway</p>
                            <div className="mt-4 flex flex-wrap items-center gap-3">
                                <FlowChip>Bachelor&apos;s degree (India or overseas)</FlowChip>
                                <Arrow />
                                <FlowChip tone="bg-indigo-600 text-white border-indigo-600">Level 7 Graduate Diploma in NZ</FlowChip>
                                <Arrow />
                                <FlowChip>Full-time, full duration</FlowChip>
                                <Arrow />
                                <FlowChip tone="bg-emerald-600 text-white border-emerald-600">Potential PSWV</FlowChip>
                            </div>
                            <p className="mt-5 text-sm text-slate-600">
                                The bachelor&apos;s degree does not need to be from New Zealand, and INZ states there is no time limit on
                                when it was awarded.
                            </p>
                        </div>

                        <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5">
                            <p className="font-bold text-amber-900">Watch out</p>
                            <p className="mt-1 text-amber-900/90">
                                INZ specifically states that <strong>cross-crediting or recognition of prior learning does not qualify</strong>{' '}
                                for meeting the full-duration study requirement on this pathway.
                            </p>
                        </div>
                    </section>

                    {/* ----------------------- ELIGIBILITY ---------------------- */}
                    <section className="space-y-6">
                        <SectionHeading
                            id="eligibility"
                            kicker="Eligibility"
                            title="Eligibility and pre-enrolment checks"
                            intro="The change is most relevant to students who already hold a bachelor's degree and are considering a Level 7 Graduate Diploma in New Zealand."
                        />

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                ['1', 'A Level 7 Graduate Diploma', 'The qualification must be a Graduate Diploma at NZQCF Level 7. Confirm the exact level and type before enrolling.'],
                                ['2', 'Studied in New Zealand', 'It must be studied full-time in New Zealand. The pathway is designed for graduates who complete the programme there.'],
                                ['3', 'Full qualification completed', 'You must study the Graduate Diploma for its full duration. Cross-crediting and prior learning are not eligible.'],
                                ['4', 'A bachelor\'s degree', 'Completed in New Zealand or overseas, with no time limit on when it was awarded.'],
                            ].map(([n, t, d]) => (
                                <div key={n} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-lg font-extrabold text-white">
                                        {n}
                                    </span>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{t}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8">
                            <h3 className="text-lg font-extrabold text-slate-900">Before you enrol: a checklist for Indian students</h3>
                            <p className="mt-1 text-sm text-slate-600">Tick each item off before paying tuition fees.</p>
                            <ul className="mt-4 grid gap-1 md:grid-cols-2">
                                {PRE_ENROL_CHECKS.map((c) => (
                                    <CheckItem key={c.label}>
                                        <strong>{c.label}:</strong> {c.text}
                                    </CheckItem>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="font-bold text-slate-900">No bachelor&apos;s degree?</h3>
                            <p className="mt-2 leading-relaxed text-slate-600">
                                A Level 7 Graduate Diploma holder without a bachelor&apos;s degree may still qualify if that particular
                                Graduate Diploma is on New Zealand&apos;s eligible qualification list, and employment may need to be in the
                                occupation specified for the qualification. If the diploma is not on the list, the new Short-Term Graduate
                                Work Visa may be an option.
                            </p>
                        </div>
                    </section>

                    {/* ------------------------ DOCUMENTS ----------------------- */}
                    <section className="space-y-6">
                        <SectionHeading
                            id="documents"
                            kicker="Document checklist"
                            title="Documents to prepare for your application"
                            intro="These are the documents applicants typically gather. Immigration New Zealand may ask for more, so always follow the checklist shown in your own application."
                        />

                        <div className="grid gap-5 md:grid-cols-2">
                            {DOCUMENT_GROUPS.map((g) => (
                                <div key={g.title} className={`rounded-2xl border p-5 ${g.accent}`}>
                                    <div className="flex items-center gap-3">
                                        <span className={`h-3 w-3 rounded-full ${g.badge}`} />
                                        <h3 className="font-extrabold text-slate-900">{g.title}</h3>
                                    </div>
                                    <ul className="mt-3 space-y-1">
                                        {g.items.map((item) => (
                                            <CheckItem key={item}>{item}</CheckItem>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm italic text-slate-500">
                            For the Short-Term Graduate Work Visa you will also need evidence of at least NZD $5,000 in funds. See the
                            Short-Term Graduate Work Visa section below.
                        </p>
                    </section>

                    {/* ------------------------- STEPS -------------------------- */}
                    <section className="space-y-8">
                        <SectionHeading
                            id="steps"
                            kicker="How to apply"
                            title="Application steps, from eligibility to decision"
                            intro="A typical route to a Post-Study Work Visa application. Fees, forms and deadlines are set by Immigration New Zealand, so confirm them on the official page first."
                        />

                        <ol className="relative space-y-6 border-l-2 border-dashed border-indigo-200 pl-8">
                            {STEPS.map((s, i) => (
                                <li key={s.title} className="relative">
                                    <span className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-extrabold text-white ring-4 ring-white">
                                        {i + 1}
                                    </span>
                                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                        <h3 className="font-bold text-slate-900">{s.title}</h3>
                                        <p className="mt-1 leading-relaxed text-slate-600">{s.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-slate-900 p-6 text-white sm:flex-row sm:items-center">
                            <div>
                                <p className="text-lg font-extrabold">Want a second pair of eyes on your documents?</p>
                                <p className="mt-1 text-sm text-slate-300">Our team can review your file before you submit.</p>
                            </div>
                            <Link
                                href="/contact"
                                className="rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-amber-300"
                            >
                                Book a free consultation
                            </Link>
                        </div>
                    </section>

                    {/* ------------------------ MISTAKES ------------------------ */}
                    <section className="space-y-6">
                        <SectionHeading
                            id="mistakes"
                            kicker="Avoid these"
                            title="Common mistakes students make"
                            intro="Most problems come from assumptions made before enrolment. Here is what to avoid and what to do instead."
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            {MISTAKES.map((m) => (
                                <div key={m.mistake} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                    <div className="flex gap-3 border-b border-rose-100 bg-rose-50 p-4">
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500 text-sm font-bold text-white">
                                            ✕
                                        </span>
                                        <p className="font-bold text-rose-900">{m.mistake}</p>
                                    </div>
                                    <div className="flex gap-3 p-4">
                                        <Tick />
                                        <p className="text-slate-700">{m.fix}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ---------------------- DURATION / TABLE ------------------ */}
                    <section className="space-y-6">
                        <SectionHeading
                            id="duration"
                            kicker="Compare"
                            title="How long can you stay, and what each pathway offers"
                            intro="For the Level 7 Graduate Diploma pathway, the visa can cover the time you spent studying the diploma in New Zealand, up to a maximum of one year. Other qualifications differ."
                        />

                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                ['Up to 1 year', 'Level 7 Graduate Diploma (new pathway)'],
                                ['1 year', 'Eligible Level 8 Postgraduate Diploma'],
                                ['3 years', 'Eligible Level 9 Master\'s degree'],
                            ].map(([big, small]) => (
                                <div key={small} className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-5 text-white shadow">
                                    <p className="text-3xl font-extrabold">{big}</p>
                                    <p className="mt-1 text-sm text-indigo-100">{small}</p>
                                </div>
                            ))}
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm sm:text-base">
                                    <caption className="sr-only">New Zealand Post-Study Work Visa 2026 quick comparison</caption>
                                    <thead className="bg-slate-900 text-white">
                                        <tr>
                                            <th scope="col" className="p-4 font-bold">Study pathway</th>
                                            <th scope="col" className="p-4 font-bold">Potential post-study pathway</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {COMPARISON.map(([a, b], i) => (
                                            <tr key={a} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                                                <th scope="row" className="p-4 font-semibold text-slate-900">{a}</th>
                                                <td className="p-4 text-slate-700">{b}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-sm italic text-slate-500">
                            Exact eligibility and duration depend on the qualification, study pattern and the immigration rules that apply to
                            the applicant.
                        </p>
                    </section>

                    {/* ----------------------- SHORT TERM ----------------------- */}
                    <section className="space-y-6">
                        <SectionHeading
                            id="short-term"
                            kicker="New from 16 November 2026"
                            title="Short-Term Graduate Work Visa"
                            intro="A new visa for certain graduates who do not qualify for a Post-Study Work Visa. It gives up to 6 months of open work rights, so you have time to look for employment and possibly move to a longer-term option such as an Accredited Employer Work Visa."
                        />

                        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
                            <h3 className="font-extrabold text-slate-900">Who generally qualifies</h3>
                            <ul className="mt-4 grid gap-3 md:grid-cols-2">
                                {[
                                    'Hold an eligible NZQCF Level 5–7 qualification',
                                    'Studied full-time for at least 24 weeks in New Zealand',
                                    'Completed a qualification that does not make you eligible for a Post-Study Work Visa',
                                    'Have at least NZD $5,000 available for support',
                                    'Meet relevant health and character requirements',
                                    'Apply within the required timeframe after your student visa expires',
                                ].map((t) => (
                                    <li key={t} className="flex gap-3 text-slate-800">
                                        <Tick />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-5 text-sm font-semibold text-amber-900">
                                This visa cannot be extended, and you can only be granted it once.
                            </p>
                        </div>
                    </section>

                    {/* ------------------------ GOOD TO KNOW -------------------- */}
                    <section className="space-y-6">
                        <SectionHeading id="good-to-know" kicker="Good to know" title="Family, work rights and limits" />
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="font-bold text-slate-900">Work rights</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    For degree-level 7 or higher qualifications, holders can generally work in any legal job anywhere in New
                                    Zealand, subject to visa conditions and any occupational registration. Certain activities are restricted,
                                    including commercial sexual services. Some non-degree qualifications link work to a listed occupation.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="font-bold text-slate-900">Bringing family</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    PSWV holders can support a partner and dependent children for visitor, work or student visas where the
                                    requirements are met. Family options differ for the Short-Term Graduate Work Visa, so do not assume the
                                    same rights apply.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="font-bold text-slate-900">One PSWV only</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    INZ states a person can only be granted one Post-Study Work Visa. Completing another qualification later
                                    does not earn a second one, so choose your programme carefully.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ----------------------- OFFICIAL LINKS ------------------- */}
                    <section className="space-y-6">
                        <SectionHeading
                            id="official-links"
                            kicker="Sources"
                            title="Official links and where to verify"
                            intro="Rules can change, so confirm every detail with Immigration New Zealand before you apply."
                        />
                        <div className="grid gap-4 md:grid-cols-2">
                            {OFFICIAL_LINKS.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                                >
                                    <div>
                                        <p className="font-bold text-slate-900 group-hover:text-indigo-700">{l.title}</p>
                                        <p className="mt-1 text-sm text-slate-600">{l.desc}</p>
                                    </div>
                                    <span className="text-xl text-indigo-500 transition group-hover:translate-x-1" aria-hidden="true">
                                        ↗
                                    </span>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* ---------------------------- FAQ ------------------------- */}
                    <section className="space-y-6">
                        <SectionHeading id="faq" kicker="Questions" title="Frequently asked questions" />
                        <div className="space-y-3">
                            {metadata.faq.map(({ question, answer }) => (
                                <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                                        {question}
                                        <span className="text-2xl font-light text-indigo-500 transition group-open:rotate-45" aria-hidden="true">
                                            +
                                        </span>
                                    </summary>
                                    <p className="mt-3 leading-relaxed text-slate-600">{answer}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* -------------------------- TAKEAWAY ---------------------- */}
                    <section className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-lg sm:p-10">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-100">Final takeaway</p>
                        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">A new door opens on 16 November 2026</h2>
                        <p className="mt-4 max-w-3xl leading-relaxed text-emerald-50">
                            Graduates of an eligible <strong>Level 7 Graduate Diploma</strong> who also hold a{' '}
                            <strong>bachelor&apos;s degree</strong> gain a potential Post-Study Work Visa route, while the new{' '}
                            <strong>6-month Short-Term Graduate Work Visa</strong> supports certain graduates who do not qualify. Check the
                            latest Immigration New Zealand requirements before making any education or visa decision, and do not choose a
                            course solely because it appears to offer a post-study work option.
                        </p>
                    </section>

                    {/* ---------------------- SCHENGEN + CTA -------------------- */}
                    <section className="grid gap-5 md:grid-cols-2">
                        <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 sm:p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Also from us</p>
                            <h2 className="mt-2 text-xl font-extrabold text-slate-900">Planning a trip to Europe?</h2>
                            <p className="mt-3 leading-relaxed text-slate-700">
                                Whether it is a holiday before you start your studies or a break after graduation, our team also handles
                                Schengen visa applications, including documents, appointments and itinerary support.
                            </p>
                            <Link
                                href={SCHENGEN_URL}
                                className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700"
                            >
                                Explore our Schengen visa service <span aria-hidden="true">→</span>
                            </Link>
                        </div>

                        <div className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 to-blue-50 p-6 sm:p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Get help</p>
                            <h2 className="mt-2 text-xl font-extrabold text-slate-900">Planning to study in New Zealand?</h2>
                            <p className="mt-3 leading-relaxed text-slate-700">
                                Global Visa Internationals can help you understand the visa process, documentation and application
                                requirements for eligible applicants.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700"
                            >
                                Book a free consultation <span aria-hidden="true">→</span>
                            </Link>
                            <p className="mt-4 text-sm font-semibold text-slate-800">Global Visa Internationals · Visa &amp; Immigration Partner</p>
                        </div>
                    </section>

                    <p className="border-t border-slate-200 pt-6 text-xs italic leading-relaxed text-slate-500">
                        Disclaimer: Immigration rules, visa eligibility and requirements may change. The document list and application
                        steps above are general guidance and are not an official checklist. Visa approval is subject to the decision of
                        Immigration New Zealand. Global Visa Internationals does not guarantee visa approval.
                    </p>
                </div>
            </div>
        </article>
    );
}
