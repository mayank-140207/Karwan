import React from 'react';
import SectionLabel from './SectionLabel';
import AccentHeading from './AccentHeading';

/**
 * PageHeader component
 * Standardized header for dashboard, trip, directory, and partner pages.
 * Combines SectionLabel + AccentHeading + Subtitle + Action buttons.
 */
export default function PageHeader({
  label,
  title,
  italicPhrase,
  subtitle,
  actions,
  dark = false,
  className = ''
}) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b ${dark ? 'border-[#162238]' : 'border-border'} ${className}`}>
      <div className="max-w-2xl">
        {label && (
          <div className="mb-2">
            <SectionLabel text={label} dark={dark} />
          </div>
        )}
        <AccentHeading
          as="h1"
          size="h1"
          text={title}
          italicPhrase={italicPhrase}
          dark={dark}
        />
        {subtitle && (
          <p className={`mt-2 text-base leading-relaxed ${dark ? 'text-white/70' : 'text-muted'}`}>
            {subtitle}
          </p>
        )}
      </div>

      {actions && (
        <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
          {actions}
        </div>
      )}
    </div>
  );
}
