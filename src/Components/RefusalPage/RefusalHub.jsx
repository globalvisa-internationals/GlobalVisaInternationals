// Optional hub page: /Visa/refusal-visa  (gives the breadcrumb a real parent and links every country page)
import Link from 'next/link';
import styles from './RefusalPage.module.css';
import { SITE, DISCLAIMER } from '@/data/refusal/_shared';
import { COUNTRIES } from '@/data/refusal/countries';

export default function RefusalHub() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Visa refusal help</li>
            </ol>
          </nav>
          <p className={styles.eyebrow}>For Indian applicants</p>
          <h1 className={styles.h1}>Visa refused? Choose your destination</h1>
          <p className={styles.lead}>
            Every country has different refusal reasons, review rights and deadlines. Pick yours to see what applies and what to do next.
          </p>
          <div className={styles.ctaRow}>
            <a href={`tel:${SITE.phoneTel}`} className={`${styles.btn} ${styles.btnOnDark}`}>Call {SITE.phone}</a>
          </div>
        </div>
      </header>

      <div className={styles.hubWrap}>
        <ul className={styles.hubGrid}>
          {COUNTRIES.map((c) => (
            <li key={c.slug}>
              <Link href={`${SITE.refusalBasePath}/${c.slug}`} className={styles.hubCard}>
                <h2>{c.name} visa refusal</h2>
                <p>{c.blurb}</p>
                <span aria-hidden="true">Read the guide →</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.disclaimer}>{DISCLAIMER}</p>
      </div>
    </main>
  );
}
