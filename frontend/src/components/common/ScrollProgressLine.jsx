import React, { useEffect, useState } from 'react';

/**
 * ScrollProgressLine component
 * Thin green line fixed below the header indicating page scroll progress.
 */
export default function ScrollProgressLine({
  color = 'bg-green',
  height = 'h-[2px]',
  top = 'top-0',
  className = ''
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight === 0) return setProgress(0);
      const scrollPercent = (totalScroll / windowHeight) * 100;
      setProgress(Math.min(Math.max(scrollPercent, 0), 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 ${top} z-50 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div
        className={`${height} ${color} transition-[width] duration-75 ease-out`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
