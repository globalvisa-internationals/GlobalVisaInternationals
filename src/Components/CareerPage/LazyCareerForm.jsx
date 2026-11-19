'use client';
// Loads your existing CareerPageForm only when its box is near the viewport (same idea as LazyVisaForm).
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const CareerPageForm = dynamic(() => import('@/Components/CareerPageForm'), { ssr: false });

export default function LazyCareerForm({ minHeight = 440 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setShow(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } }, { rootMargin: '400px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={show ? undefined : { minHeight }}>
      {show && <CareerPageForm />}
    </div>
  );
}
