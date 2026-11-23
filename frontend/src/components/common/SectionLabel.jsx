import React from 'react';

/**
 * SectionLabel component
 * Small green dot plus a short uppercase mono label above section headings.
 * 
 * @param {string} text - The label text
 * @param {boolean} dark - Whether rendering on dark background
 * @param {string} dotColor - Custom dot color (defaults to green #2C6E49)
 * @param {string} className - Extra classes
 */
export default function SectionLabel({
  text,
  dark = false,
  dotColor = 'bg-green',
  className = ''
}) {
  if (!text) return null;

  return (
    <div className={`inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.08em] font-medium select-none ${dark ? 'text-white/70' : 'text-muted'} ${className}`}>
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 ${dark ? 'bg-green-light' : dotColor}`}
        aria-hidden="true"
      />
      <span>{text}</span>
    </div>
  );
}
