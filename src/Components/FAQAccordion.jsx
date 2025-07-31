'use client';

import { useState, useEffect } from 'react';
import styles from './FAQAccordion.module.css';

const FAQAccordion = ({ faqs = [] }) => {
  // Choose a random FAQ as initially open
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (faqs.length > 0) {
      const randomIndex = Math.floor(Math.random() * faqs.length);
      setActiveIndex(randomIndex);
    }
  }, [faqs]);

  const handleToggle = (index) => {
    // If the clicked one is already active, do nothing (always keep one open)
    if (activeIndex === index) return;
    setActiveIndex(index);
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
