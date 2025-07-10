'use client';

import { useEffect, useRef } from 'react';
import styles from './ClientVideoCarousel.module.css';

const ClientVideoCarousel = ({ videos = [] }) => {
  const videoCarouselRef = useRef(null);

  useEffect(() => {
    const duplicateCarouselItems = (carouselRef) => {
      if (carouselRef?.current) {
        const track = carouselRef.current;
        const items = Array.from(track.children);
        items.forEach((item) => {
          const clone = item.cloneNode(true);
          track.appendChild(clone);
        });
      }
    };

    duplicateCarouselItems(videoCarouselRef);
  }, []);

  return (
    <section id={styles.clientReview}>
      <h2 id={styles.clientVideo} className={styles.subtitle}>
        Client Testimonial
      </h2>
      <div className={styles.videoContainer}>
        <div className={styles.videoCarousel}>
          <div className={styles.carouselTrack} ref={videoCarouselRef}>
            {videos.map((src, index) => (
              <div className={styles.videoTestimonial} key={index}>
                <video
                  src={src}
                  controls
                  loop
                  autoPlay
                  muted
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientVideoCarousel;
