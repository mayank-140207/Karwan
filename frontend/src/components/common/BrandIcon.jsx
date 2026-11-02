import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

/**
 * Reusable BrandIcon component using official react-icons.
 * No hand-drawn SVG paths.
 * 
 * @param {'google' | 'apple'} name - brand icon name
 * @param {'light' | 'dark'} mode - background tone (for Apple icon: black on light, white on dark)
 * @param {string} className - extra classes
 */
export default function BrandIcon({ name, mode = 'light', className = 'text-xl shrink-0' }) {
  if (name === 'google') {
    return <FcGoogle className={className} aria-label="Google" />;
  }

  if (name === 'apple') {
    const colorClass = mode === 'dark' ? 'text-pure-white' : 'text-on-surface';
    return <FaApple className={`${className} ${colorClass}`} aria-label="Apple" />;
  }

  return null;
}

