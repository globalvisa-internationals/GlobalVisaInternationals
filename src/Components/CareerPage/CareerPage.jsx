// Careers page, editorial design. Server component; only the application form is client-side (lazy).
import { DM_Sans, Playfair_Display } from 'next/font/google';
import styles from './CareerPage.module.css';
import LazyCareerForm from './LazyCareerForm';
import { buildCareerJsonLd } from './careerSeo';
import { CAREER as C } from '@/data/career';
import { SITE } from '@/data/refusal/_shared';

// next/font self-hosts the fonts (no request to Google, no layout shift, no render-blocking @import)
const sans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap', variable: '--font-sans' });
const serif = Playfair_Display({ subsets: ['latin'], weight: ['500'], style: ['normal', 'italic'], display: 'swap', variable: '--font-serif' });

export default function CareerPage() {
  const n = C.roles.length;
  return (
    <main className={`${styles.careerPage} ${sans.variable} ${serif.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: buildCareerJsonLd() }} />

      {/* ---------- Hero ---------- */}
      <header className={styles.hero}>
        <div className={styles.heroPattern} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><i aria-hidden="true" />CAREERS AT {SITE.name.toUpperCase()}</p>
            <h1>{C.title.before}<em>{C.title.em}</em></h1>
            <p className={styles.heroText}>{C.lead}</p>
            <div className={styles.heroActions}>
              <a href="#roles" className={styles.primaryButton}>See open roles <span aria-hidden="true">→</span></a>
              <span className={styles.heroNote}>Freshers welcome · {n} open roles</span>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.visualOrb} />
            <div className={styles.visualCard}>
              <span className={styles.visualKicker}>{C.heroCard.kicker}</span>
              <strong>{C.heroCard.before}<em>{C.heroCard.em}</em></strong>
              <div>
                <div className={styles.visualLine} />
                <span className={styles.visualFooter}>{C.heroCard.footer}</span>
              </div>
            </div>
            <div className={styles.floatingTag}>
              <span className={styles.tagIcon}>↗</span>
              <div><b>{n} open roles</b><small>Freshers welcome</small></div>
            </div>
          </div>
        </div>
        <div className={styles.heroBottom}>
          <span>VISA COUNSELLING · DOCUMENTATION</span>
          <span>FULL-TIME · BENGALURU</span>
        </div>
      </header>

      {/* ---------- Intro ---------- */}
      <section className={styles.introSection} aria-labelledby="intro-h">
        <span className={styles.sectionLabel}>{C.intro.label}</span>
        <div className={styles.introContent}>
          <h2 id="intro-h">{C.intro.before}<em>{C.intro.em}</em></h2>
          <p>{C.intro.text}</p>
        </div>
        <ul className={styles.valueStrip}>
          {C.perks.map((p) => (
            <li key={p.t}>
              <b>{p.t}</b>
              <span>{p.d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Roles ---------- */}
      <section id="roles" className={styles.rolesSection} aria-labelledby="roles-h">
        <div className={styles.rolesHeading}>
          <div>
            <span className={styles.sectionLabel}>OPEN POSITIONS</span>
            <h2 id="roles-h">Open <em>roles</em></h2>
          </div>
          <p>{C.rolesText}</p>
        </div>

        <div className={styles.roleList}>
          {C.roles.map((r, i) => (
            <article key={r.id} className={styles.roleCard} aria-labelledby={`${r.id}-h`}>
              <div className={styles.roleTop}>
                <span className={styles.roleNumber} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.roleTitleBlock}>
                  <h3 id={`${r.id}-h`}>{r.title}</h3>
                  <span className={styles.roleType}>{r.tags.join(' · ')}</span>
                </div>
                <div className={styles.salaryBlock}>
                  <small>SALARY</small>
                  <strong>{r.salary.display}</strong>
                </div>
              </div>
              <p className={styles.roleSummary}>{r.overview}</p>
              <div className={styles.roleDetails}>
                <div>
                  <h4>Responsibilities</h4>
                  <ul>{r.responsibilities.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
                <div>
                  <h4>What we look for</h4>
                  <ul>{r.requirements.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </div>
              <a href="#apply" className={styles.roleApply}>Apply for this role <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Apply ---------- */}
      <section id="apply" className={styles.applySection} aria-labelledby="apply-h">
        <div className={styles.applyIntro}>
          <span className={styles.sectionLabel}>APPLY</span>
          <h2 id="apply-h">Ready to <em>apply?</em></h2>
          <p>{C.applyText}</p>
          <div className={styles.applyContact}>
            <span className={styles.contactMark} aria-hidden="true">✆</span>
            <div>
              <small>CALL HR</small>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
            </div>
          </div>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.formPanelHeading}>
            <span className={styles.helloBadge} aria-hidden="true">Hi</span>
            <div>
              <span className={styles.formKicker}>{C.form.kicker}</span>
              <h3>{C.form.before}<em>{C.form.em}</em></h3>
              <p>{C.form.text}</p>
            </div>
          </div>
          <LazyCareerForm />
        </div>
      </section>
    </main>
  );
}
