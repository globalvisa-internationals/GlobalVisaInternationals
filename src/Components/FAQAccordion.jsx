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
      <h2 className={styles.textXl}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
        >
          <div className={styles.faqQuestion} onClick={() => handleToggle(index)}>
            {faq.question}
          </div>
          <div
            className={styles.faqAnswer}
            style={{ maxHeight: activeIndex === index ? '500px' : '0' }}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
