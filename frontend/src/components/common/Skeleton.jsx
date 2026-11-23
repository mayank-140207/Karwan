import React from 'react';

/**
 * Skeleton loading placeholder
 * Shimmering placeholder following the design tokens.
 * 
 * @param {'text' | 'heading' | 'card' | 'avatar' | 'button'} variant
 */
export default function Skeleton({
  variant = 'text',
  className = '',
  width,
  height
}) {
  const variantClasses = {
    text: 'h-4 w-full rounded',
    heading: 'h-8 w-3/4 rounded',
    card: 'h-48 w-full rounded-card',
    avatar: 'w-10 h-10 rounded-full',
    button: 'h-10 w-32 rounded-button',
  };

  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      className={`bg-surface-container-high/80 animate-pulse select-none ${variantClasses[variant] || ''} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}
