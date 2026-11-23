import React from 'react';

/**
 * Pill component
 * Status badges and new indicators.
 * 
 * @param {'green' | 'navy' | 'gray' | 'amber' | 'red' | 'dark'} variant
 * @param {boolean} dot - Render a colored status dot
 * @param {boolean} pulse - Add pulsing animation to dot
 */
export default function Pill({
  children,
  variant = 'green',
  dot = false,
  pulse = false,
  size = 'md',
  className = ''
}) {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm',
  };

  const variantClasses = {
    green: {
      pill: 'bg-[#E8F3ED] text-[#2C6E49] border border-[#2C6E49]/20',
      dot: 'bg-[#2C6E49]',
    },
    navy: {
      pill: 'bg-[#10233F]/10 text-[#10233F] border border-[#10233F]/20',
      dot: 'bg-[#10233F]',
    },
    gray: {
      pill: 'bg-[#F2F4F6] text-[#5A6472] border border-[#E4E7EC]',
      dot: 'bg-[#5A6472]',
    },
    amber: {
      pill: 'bg-amber-50 text-amber-700 border border-amber-200',
      dot: 'bg-amber-500',
    },
    red: {
      pill: 'bg-red-50 text-red-700 border border-red-200',
      dot: 'bg-red-500',
    },
    dark: {
      pill: 'bg-white/10 text-white/90 border border-white/15 backdrop-blur-sm',
      dot: 'bg-green-light',
    },
  };

  const style = variantClasses[variant] || variantClasses.green;

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium uppercase tracking-[0.05em] rounded-pill select-none ${sizeClasses[size] || sizeClasses.md} ${style.pill} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2 shrink-0">
          {pulse && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${style.dot}`}
            />
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${style.dot}`}
          />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
