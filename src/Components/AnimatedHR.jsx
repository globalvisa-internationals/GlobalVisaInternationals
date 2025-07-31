'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedHR = ({ direction = 'left', duration = 1, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,   // animate only once
    threshold: 0.2,       // animate when 20% visible
  });

  const isLeft = direction === 'left';

  return (
    <motion.hr
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        transformOrigin: isLeft ? 'left' : 'right',
        background: '#002B5B',
        height: '2px',
        border: 'none',
        margin: '1.5rem 0',
        width: '100%',
      }}
    />
  );
};

export default AnimatedHR;
