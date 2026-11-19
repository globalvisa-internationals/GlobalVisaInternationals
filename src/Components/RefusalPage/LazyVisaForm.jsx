'use client';
// Loads your existing VisaForm only when its box is near the viewport.
// Desktop: loads straight away (the form sits beside the content).
// Mobile: the form is far down the page, so its JS is not fetched until the visitor gets close.
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const VisaForm = dynamic(() => import('@/Components/VisaForm'), { ssr: false });

export default function LazyVisaForm({ minHeight = 440 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // reserved height avoids layout shift while the form loads
  return (
    <div ref={ref} style={show ? undefined : { minHeight }}>
      {show && <VisaForm />}
    </div>
  );
}
