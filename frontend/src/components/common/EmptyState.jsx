import React from 'react';
import Button from './Button';
import AccentHeading from './AccentHeading';

/**
 * EmptyState component
 * Elegant empty state for tables, lists, itineraries, and search results.
 */
export default function EmptyState({
  icon,
  title = "No items *found*",
  italicPhrase = "found",
  description = "There are no records matching your request right now.",
  actionLabel,
  onAction,
  actionTo,
  className = ''
}) {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-card bg-white border border-border ${className}`}>
      {/* Icon circular container */}
      <div className="w-14 h-14 rounded-full bg-[#E8F3ED] text-green flex items-center justify-center mb-4 border border-green/20">
        {icon || (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        )}
      </div>

      {/* Heading */}
      <AccentHeading
        as="h3"
        size="h3"
        text={title}
        italicPhrase={italicPhrase}
        className="mb-2"
      />

      {/* Description */}
      <p className="text-sm text-muted max-w-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Action CTA */}
      {actionLabel && (
        <Button
          variant="primary"
          size="md"
          to={actionTo}
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
