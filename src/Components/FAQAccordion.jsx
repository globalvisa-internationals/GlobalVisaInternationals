'use client';

import { useState } from 'react';
import styles from './FAQAccordion.module.css';

const FAQAccordion = ({ faqs = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
        >
          <div className={styles.faqQuestion} onClick={() => handleToggle(index)}>
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
