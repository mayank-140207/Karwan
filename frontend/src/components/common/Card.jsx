import React from 'react';

/**
 * Card component
 * White, 1px border (#E4E7EC), radius 16px, subtle shadow on hover.
 * Optional big light-gray step number (01, 02, 03).
 * 
 * @param {string} step - Step number e.g. "01", "02"
 * @param {boolean} hover - Whether to apply hover shadow and slight lift
 * @param {boolean} dark - Dark card variant (#0B1220 with subtle border)
 */
export default function Card({
  children,
  step,
  hover = true,
  dark = false,
  className = '',
  onClick,
  ...props
}) {
  const isClickable = Boolean(onClick);

  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-card p-6 md:p-8 transition-all duration-200
        ${dark ? 'bg-[#0B1220] text-white border border-[#162238]' : 'bg-white text-ink border border-border'}
        ${hover ? (dark ? 'hover:border-[#2C6E49]/40 hover:shadow-floating' : 'hover:shadow-card-hover hover:border-[#D0D5DD]') : ''}
        ${isClickable ? 'cursor-pointer' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {/* Big light-gray step number in top-right or behind */}
      {step && (
        <div className="absolute top-6 right-6 font-mono font-bold text-3xl sm:text-4xl text-[#E4E7EC] dark:text-white/10 select-none pointer-events-none leading-none">
          {step}
        </div>
      )}

      {children}
    </div>
  );
}
