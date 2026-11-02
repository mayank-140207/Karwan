import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Karwan Logo component
 * Features the K mark and "Karwan" wordmark on the SAME LINE (mark first, small gap).
 * No circle, no white box, no background.
 * 
 * @param {'color' | 'white'} variant - 'color' for light backgrounds, 'white' for dark/navy/photo backgrounds.
 * @param {'sm' | 'md' | 'lg'} size - size scale of the logo.
 * @param {string | false} to - link target route, default is '/' (or false for non-link).
 * @param {string} className - extra container classes.
 */
export default function Logo({
  variant = 'color',
  size = 'md',
  to = '/',
  className = ''
}) {
  const isWhite = variant === 'white';

  const markSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const content = (
    <span className={`inline-flex items-center gap-2.5 font-serif font-bold tracking-tight select-none ${isWhite ? 'text-pure-white' : 'text-primary'} ${className}`}>
      {/* Transparent K Mark SVG */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${markSizes[size] || markSizes.md} shrink-0`}
        aria-hidden="true"
      >
        {isWhite ? (
          // All-white variant for dark/navy/photo backgrounds
          <>
            <path
              d="M7 4C7 2.89543 7.89543 2 9 2H11C12.1046 2 13 2.89543 13 4V28C13 29.1046 12.1046 30 11 30H9C7.89543 30 7 29.1046 7 28V4Z"
              fill="#FFFFFF"
            />
            <path
              d="M13.5 17.5L22.2929 4.70711C23.083 3.91699 24.4571 4.47715 24.4571 5.59463V7.18058C24.4571 7.84362 24.129 8.46282 23.5791 8.83296L17.2 13.13"
              stroke="#FFFFFF"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 15.5L23.7071 26.2929C24.4853 27.0711 23.9351 28.4142 22.8358 28.4142H20.7574C20.2269 28.4142 19.7182 28.2035 19.3431 27.8284L13.5 22"
              stroke="#FFFFFF"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : (
          // Full-colour variant: Navy stem + Trust Green arms
          <>
            <path
              d="M7 4C7 2.89543 7.89543 2 9 2H11C12.1046 2 13 2.89543 13 4V28C13 29.1046 12.1046 30 11 30H9C7.89543 30 7 29.1046 7 28V4Z"
              fill="#000D23"
            />
            <path
              d="M13.5 17.5L22.2929 4.70711C23.083 3.91699 24.4571 4.47715 24.4571 5.59463V7.18058C24.4571 7.84362 24.129 8.46282 23.5791 8.83296L17.2 13.13"
              stroke="#2C6E49"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 15.5L23.7071 26.2929C24.4853 27.0711 23.9351 28.4142 22.8358 28.4142H20.7574C20.2269 28.4142 19.7182 28.2035 19.3431 27.8284L13.5 22"
              stroke="#2C6E49"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>

      {/* Wordmark */}
      <span
        className={`${textSizes[size] || textSizes.md} font-serif font-bold tracking-tight ${
          isWhite ? 'text-pure-white' : 'text-primary'
        }`}
      >
        Karwan
      </span>
    </span>
  );

  if (to) {
    return (
      <Link to={to} className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}

