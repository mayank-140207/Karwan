import React, { useEffect, useRef } from 'react';

/**
 * SquareCursor
 * Minimal, elegant geometric square cursor inspired by Concilio Solutions.
 * - Single subtle square element following the pointer with smooth inertia / slight delay.
 * - Restrained aesthetic: 16x16px subtle bordered square with minimal translucent fill.
 * - Scales smoothly when hovering interactive elements (buttons, links, inputs).
 * - Zero interference with clicks, selections, or native browser cursors (pointer-events: none).
 * - Completely disabled on touch devices and prefers-reduced-motion.
 * - Zero React re-renders: driven entirely via requestAnimationFrame & GPU transforms.
 */
export default function SquareCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion preference and touch devices
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    if (prefersReducedMotion || isTouch) {
      return;
    }

    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    // Position state
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isVisible = false;
    let isHovering = false;
    let animId = null;

    // Follow delay lerp factor (0.18 gives a silky, natural inertia delay)
    const LERP_FACTOR = 0.18;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        // Snap immediately on first entry so it doesn't fly across the screen
        currentX = targetX;
        currentY = targetY;
        cursorEl.style.opacity = '1';
      }

      // Check if hovering interactive target
      const target = e.target;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
        isHovering = !!interactive;
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (cursorEl) {
        cursorEl.style.opacity = '0';
      }
    };

    const handleMouseEnter = (e) => {
      isVisible = true;
      targetX = e.clientX;
      targetY = e.clientY;
      currentX = targetX;
      currentY = targetY;
      if (cursorEl) {
        cursorEl.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // RAF loop
    const render = () => {
      if (isVisible) {
        // Linear interpolation for smooth follow delay
        currentX += (targetX - currentX) * LERP_FACTOR;
        currentY += (targetY - currentY) * LERP_FACTOR;

        const scale = isHovering ? 1.45 : 1;
        const rotate = isHovering ? 45 : 0;

        cursorEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[100] border border-secondary/60 bg-secondary/[0.04] rounded-[2px] transition-[transform,border-color,background-color] duration-150 ease-out opacity-0 will-change-transform hidden lg:block"
      aria-hidden="true"
    />
  );
}

