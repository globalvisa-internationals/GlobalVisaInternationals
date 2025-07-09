'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * @param {ReactNode} children - The content to animate.
 * @param {'up' | 'down' | 'left' | 'right'} direction - Direction of entrance animation.
 * @param {boolean} triggerOnce - If true, animation runs only once.
 * @param {number} threshold - % of element visible to trigger animation (0 to 1).
 * @param {number} delay - Animation delay in seconds.
 * @param {number} duration - Animation duration in seconds.
 * @param {number} scale - Initial scale value.
 * @param {boolean} reverseOnExit - If true, animate out when not in view
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
  const { ref, inView } = useInView({
    triggerOnce,
    threshold: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.05 : threshold,
  });

  // Set initial x/y offset
  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 40 };
      case 'down':
        return { y: -40 };
      case 'left':
        return { x: 60 };
      case 'right':
        return { x: -60 };
      default:
        return { y: 40 };
    }
  };

  const initial = { opacity: 0, scale, ...getInitialOffset() };

  const visible = { opacity: 1, x: 0, y: 0, scale: 1 };
  const hidden = initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? visible : reverseOnExit ? hidden : visible}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.8, 0.25, 1], // easeOutQuart
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
