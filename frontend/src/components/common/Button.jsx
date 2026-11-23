import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Standard Arrow SVG Icon
 */
function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.167 10h11.666M10.833 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Button component
 * Radius 10px, 2px lift on hover, slight shadow.
 * Primary = solid green (#2C6E49) with arrow icon.
 * Secondary = white with 1px border (#E4E7EC).
 * Dark = navy #10233F.
 * Ghost = transparent.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  showArrow,
  icon,
  iconPosition = 'right',
  to,
  href,
  onClick,
  disabled = false,
  comingSoon = false,
  className = '',
  type = 'button',
  ...props
}) {
  const isPrimary = variant === 'primary';
  const shouldShowArrow = showArrow !== undefined ? showArrow : isPrimary;

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-medium gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold gap-2',
    lg: 'px-7 py-3 text-base font-semibold gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-green text-white shadow-sm hover:bg-green-hover hover:shadow-button-hover border border-transparent',
    secondary:
      'bg-white text-ink border border-border shadow-sm hover:bg-[#F8F9FB] hover:border-[#D0D5DD] hover:shadow-button-secondary-hover',
    dark:
      'bg-navy text-white border border-[#162238] shadow-sm hover:bg-[#162D50]',
    ghost:
      'bg-transparent text-ink hover:bg-surface-container-low border border-transparent',
    outlineGreen:
      'bg-transparent text-green border border-green hover:bg-green/10',
    danger:
      'bg-red-600 text-white hover:bg-red-700 shadow-sm',
  };

  const baseClasses = `
    inline-flex items-center justify-center rounded-button select-none transition-all duration-200
    ${sizeClasses[size] || sizeClasses.md}
    ${variantClasses[variant] || variantClasses.primary}
    ${disabled || comingSoon ? 'opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-none' : 'hover:-translate-y-0.5 active:translate-y-0'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      {shouldShowArrow && !icon && (
        <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
      )}
      {comingSoon && (
        <span className="ml-1.5 px-1.5 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-white/20 rounded">
          Soon
        </span>
      )}
    </>
  );

  if (disabled || comingSoon) {
    return (
      <button
        type="button"
        disabled
        className={baseClasses}
        title={comingSoon ? 'Feature coming soon' : props.title}
        {...props}
      >
        {content}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={`group ${baseClasses}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${baseClasses}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group ${baseClasses}`}
      {...props}
    >
      {content}
    </button>
  );
}
