import React, { useEffect, useRef, useState } from 'react';

/**
 * StatTile component
 * Large number with green underline, uppercase mono label, and optional subtext.
 * Counts up once when scrolled into view.
 * 
 * @param {string | number} value - The display value (e.g., "99.4%", 240, "< 2 min")
 * @param {number} numericTarget - If value has a numeric part to animate
 * @param {string} suffix - Suffix to append to count-up (e.g., "%", "+", "ms")
 * @param {string} prefix - Prefix to prepend (e.g., "₹", "< ")
 * @param {string} label - Small uppercase label
 * @param {string} subtext - Optional helper description
 * @param {boolean} dark - Dark theme variant
 */
export default function StatTile({
  value,
  numericTarget,
  prefix = '',
  suffix = '',
  label,
  subtext,
  dark = false,
  className = ''
}) {
  const [displayedValue, setDisplayedValue] = useState(
    numericTarget !== undefined ? 0 : value
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (numericTarget === undefined || hasAnimated) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedValue(numericTarget);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1200; // ms
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * numericTarget);
            setDisplayedValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayedValue(numericTarget);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericTarget, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className={`flex flex-col select-none ${dark ? 'text-white' : 'text-ink'} ${className}`}
    >
      {/* Number Value */}
      <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] leading-none">
        {prefix}
        {numericTarget !== undefined ? displayedValue : value}
        {suffix}
      </div>

      {/* Signature Green Underline */}
      <div className="w-9 h-1 bg-green rounded-full mt-3 mb-2 shrink-0" />

      {/* JetBrains Mono Label */}
      {label && (
        <div className={`font-mono text-xs uppercase tracking-[0.08em] font-medium ${dark ? 'text-white/70' : 'text-muted'}`}>
          {label}
        </div>
      )}

      {/* Optional Subtext */}
      {subtext && (
        <div className={`text-xs mt-1 ${dark ? 'text-white/50' : 'text-muted/80'}`}>
          {subtext}
        </div>
      )}
    </div>
  );
}
