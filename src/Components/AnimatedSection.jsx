'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * AnimatedSection: Cross-platform, SSR-safe entrance animation.
 *
 * @param {React.ReactNode} children - Content to animate
 * @param {'up' | 'down' | 'left' | 'right'} direction - Entrance direction
 * @param {boolean} triggerOnce - Animate only once
 * @param {number} threshold - % of element visible to trigger animation (0-1)
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @param {number} scale - Initial scale
 * @param {boolean} reverseOnExit - Animate out when not in view
 */
const AnimatedSection = ({
  children,
  direction = 'up',
  triggerOnce = false,
  threshold = 0.2,
  delay = 0,
  duration = 0.8,
  scale = 0.95,
  reverseOnExit = true,
}) => {
  const isClient = typeof window !== 'undefined';
  const mobileThreshold = 0.05;

  const { ref, inView } = useInView({
    triggerOnce,
    threshold: isClient && window.innerWidth < 768 ? mobileThreshold : threshold,
  });

  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 40, x: 0 };
      case 'down':
        return { y: -40, x: 0 };
      case 'left':
        return { x: 60, y: 0 };
      case 'right':
        return { x: -60, y: 0 };
      default:
        return { y: 40, x: 0 };
    }
  };

  const initial = { opacity: 0, scale, ...getInitialOffset() };
  const visible = { opacity: 1, x: 0, y: 0, scale: 1 };
  const hidden = reverseOnExit ? initial : visible;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? visible : hidden}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      style={{ willChange: 'transform, opacity' }} // improves mobile performance
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
