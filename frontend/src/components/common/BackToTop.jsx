import React, { useEffect, useState } from 'react';

/**
 * BackToTop component
 * Subtle floating button that smoothly scrolls to the top of the page.
 * Appears when user scrolls down > 350px.
 */
export default function BackToTop({
  threshold = 350,
  className = ''
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`
        fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-white border border-border shadow-ambient
        flex items-center justify-center text-ink hover:text-green hover:border-green/40 hover:-translate-y-0.5
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green/30
        ${className}
      `.trim()}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
