'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import AnimatedSection from '@/Components/AnimatedSection';
import clsx from 'clsx';
import styles from './GalleryCarousel.module.css'; // You’ll need to define styles

const GalleryCarousel = ({
  slides = [],
  autoSlide = true,
  interval = 3000,
  animationDirection = 'up',
  reverseOnExit = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = useCallback(() => {
    if (!autoSlide) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
  }, [autoSlide, slides.length, interval]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [startAutoSlide]);

  const moveGallerySlide = (direction) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(
      (prev) => (prev + direction + slides.length) % slides.length
    );
    startAutoSlide();
  };

  return (
    <AnimatedSection direction={animationDirection} reverseOnExit={reverseOnExit}>
      <section id="gallery">
        
        <div className={styles.galleryCarouselWrapper}>
          <div className={styles.galleryCarousel}>
            {slides.map((src, index) => {
              let positionClass = styles.hidden;
              if (index === currentIndex) positionClass = styles.active;
              else if (
                index ===
                (currentIndex - 1 + slides.length) % slides.length
              )
                positionClass = styles.prev;
              else if (index === (currentIndex + 1) % slides.length)
                positionClass = styles.next;

              return (
                <div
                  key={index}
                  className={`${styles.gallerySlide} ${positionClass}`}
                >
                  <img
                    src={src}
                    loading="lazy"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              );
            })}
          </div>

          <button
            className={clsx(styles.galleryNavBtn, styles.galleryPrevBtn)}
            onClick={() => moveGallerySlide(-1)}
          >
            &#10094;
          </button>
          <button
            className={clsx(styles.galleryNavBtn, styles.galleryNextBtn)}
            onClick={() => moveGallerySlide(1)}
          >
            &#10095;
          </button>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default GalleryCarousel;
