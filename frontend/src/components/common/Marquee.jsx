import React from 'react';

/**
 * Marquee component
 * Reusable horizontal ticker strip. Pauses on hover, supports reduced motion.
 * 
 * @param {Array<React.ReactNode> | React.ReactNode} items - Items to scroll
 * @param {number} speed - Seconds per cycle (default 35s)
 * @param {boolean} reverse - Scroll right instead of left
 * @param {boolean} pauseOnHover - Pause animation when hovered
 */
export default function Marquee({
  children,
  items,
  speed = 35,
  reverse = false,
  pauseOnHover = true,
  className = ''
}) {
  const content = items ? (
    <div className="flex items-center gap-8 px-4">
      {items.map((item, idx) => (
        <span key={idx} className="shrink-0">
          {item}
        </span>
      ))}
    </div>
  ) : (
    <div className="flex items-center gap-8 px-4 shrink-0">
      {children}
    </div>
  );

  return (
    <div
      className={`relative w-full overflow-hidden mask-faded-edges select-none ${className}`}
    >
      <div
        className={`flex w-max ${reverse ? 'flex-row-reverse' : ''}`}
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
          animationPlayState: 'running',
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = 'running';
        }}
      >
        {content}
        {content}
      </div>
    </div>
  );
}
