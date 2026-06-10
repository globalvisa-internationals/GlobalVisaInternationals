// src/Components/GalleryCarousel.jsx
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import AnimatedSection from '@/Components/AnimatedSection';
import clsx from 'clsx';

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
      <section id="gallery" className="w-full relative overflow-hidden">
        <div className="relative w-full">
          {/* Carousel container */}
          <div className="flex justify-center items-center relative h-60 md:h-[450px] overflow-hidden">
            {slides.map((src, index) => {
              let positionClass = '';
              let zIndex = '';
              let transformClass = '';
              let opacityClass = 'opacity-0';

              if (index === currentIndex) {
                positionClass = 'block';
                zIndex = 'z-10';
                transformClass = 'translate-x-0 scale-100';
                opacityClass = 'opacity-100';
              } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                positionClass = 'block';
                zIndex = 'z-5';
                transformClass = '-translate-x-2/3 md:-translate-x-[60%] scale-90 md:scale-85';
                opacityClass = 'opacity-70';
              } else if (index === (currentIndex + 1) % slides.length) {
                positionClass = 'block';
                zIndex = 'z-5';
                transformClass = 'translate-x-2/3 md:translate-x-[60%] scale-90 md:scale-85';
                opacityClass = 'opacity-70';
              } else {
                positionClass = 'hidden';
              }

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ease-in-out cursor-pointer w-64 md:w-[500px] h-48 md:h-[400px] ${positionClass} ${zIndex} ${opacityClass} ${transformClass}`}
                >
                  <img
                    src={src}
                    loading="lazy"
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center text-xl font-bold transition-transform hover:scale-110 z-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => moveGallerySlide(-1)}
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center text-xl font-bold transition-transform hover:scale-110 z-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => moveGallerySlide(1)}
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default GalleryCarousel;