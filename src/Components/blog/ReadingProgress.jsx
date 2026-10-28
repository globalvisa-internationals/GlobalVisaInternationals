'use client';
import { useEffect, useState } from 'react';

// Thin progress bar fixed at the top of the viewport.
export default function ReadingProgress({ targetId = 'post-body' }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById(targetId);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.5;
      const done = Math.min(Math.max(-rect.top + window.innerHeight * 0.2, 0), total);
      setProgress(total > 0 ? (done / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [targetId]);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#057A7E] to-[#0383C9] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
