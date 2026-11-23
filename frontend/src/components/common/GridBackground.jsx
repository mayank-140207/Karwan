import React, { useEffect, useState } from 'react';

/**
 * GridBackground component
 * Faint 1px grid (70px) on hero areas with random cells softly lighting green.
 * Very low CPU, disabled when prefers-reduced-motion is active.
 */
export default function GridBackground({
  dark = false,
  className = '',
  children
}) {
  const [litCells, setLitCells] = useState([]);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Set initial 3 random lit cell positions
    const randomize = () => {
      const cells = [];
      for (let i = 0; i < 4; i++) {
        cells.push({
          x: Math.floor(Math.random() * 8) * 70,
          y: Math.floor(Math.random() * 6) * 70,
          opacity: 0.15 + Math.random() * 0.25,
        });
      }
      setLitCells(cells);
    };

    randomize();
    const interval = setInterval(randomize, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${dark ? 'bg-[#070B14]' : 'bg-page'} ${className}`}
    >
      {/* 70px Faint Grid Layer */}
      <div
        className={`absolute inset-0 pointer-events-none ${dark ? 'opacity-20' : 'opacity-100'}`}
        style={{
          backgroundSize: '70px 70px',
          backgroundImage: dark
            ? 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)'
            : 'linear-gradient(to right, rgba(11, 18, 32, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11, 18, 32, 0.04) 1px, transparent 1px)',
        }}
        aria-hidden="true"
      >
        {/* Soft green glowing cells */}
        {litCells.map((cell, idx) => (
          <div
            key={idx}
            className="absolute w-[69px] h-[69px] bg-green transition-opacity duration-1000 ease-in-out pointer-events-none rounded-sm"
            style={{
              left: `${cell.x}px`,
              top: `${cell.y}px`,
              opacity: cell.opacity,
            }}
          />
        ))}
      </div>

      {/* Soft radial glow on dark backgrounds */}
      {dark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(44, 110, 73, 0.18), rgba(16, 35, 63, 0.25), transparent)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Children content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
