import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal component
 * Fades and translateY (16px, 600ms, stagger support).
 * Triggers once via IntersectionObserver. Respects prefers-reduced-motion.
 * 
 * @param {number} delay - Animation delay in ms
 * @param {number} staggerIndex - Multiplier for 80ms stagger
 * @param {string} className - Additional CSS classes
 */
export default function Reveal({
  children,
  delay = 0,
  staggerIndex = 0,
  className = '',
  as: Component = 'div',
  threshold = 0.15,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const totalDelay = delay + staggerIndex * 80;

  useEffect(() => {
    // Respect prefers-reduced-motion immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component
      ref={elementRef}
      className={`transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      } ${className}`}
      style={{
        transitionDuration: '600ms',
        transitionDelay: `${totalDelay}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
