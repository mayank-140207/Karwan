import React, { useEffect, useRef } from 'react';

/**
 * SnakeCursor / Magnetic Cursor
 * An ultra-refined, fluid interactive magnetic cursor designed for luxury editorial SaaS.
 * - Minimal, elegant emerald core with a silky smooth, rapid-decay trailing aura.
 * - Expands into an elegant magnetic focus ring over interactive targets (buttons, links, inputs).
 * - Smooth lerping with zero jitter or intrusive graphics.
 * - Automatically disabled on touch screens and prefers-reduced-motion.
 */
export default function SnakeCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    if (prefersReducedMotion || isTouch) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const NUM_SEGMENTS = 8;
    const segments = [];
    const startX = width / 2;
    const startY = height / 2;

    for (let i = 0; i < NUM_SEGMENTS; i++) {
      segments.push({
        x: startX,
        y: startY
      });
    }

    const mouse = {
      x: startX,
      y: startY,
      targetX: startX,
      targetY: startY,
      isHoveringInteractive: false,
      isVisible: false
    };

    let opacity = 0;
    let ringRadius = 4;
    let targetRingRadius = 4;
    let animId = null;

    const handleMouseMove = (e) => {
      mouse.isVisible = true;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      const target = e.target;
      if (target) {
        mouse.isHoveringInteractive = !!target.closest('a, button, input, textarea, select, [role="button"], .group');
      }
    };

    const handleMouseLeave = () => {
      mouse.isVisible = false;
    };

    const handleMouseEnter = (e) => {
      mouse.isVisible = true;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const animate = () => {
      // Damped follow for cursor target
      mouse.x += (mouse.targetX - mouse.x) * 0.45;
      mouse.y += (mouse.targetY - mouse.y) * 0.45;

      const targetOpacity = mouse.isVisible ? 1 : 0;
      opacity += (targetOpacity - opacity) * 0.15;

      targetRingRadius = mouse.isHoveringInteractive ? 20 : 4;
      ringRadius += (targetRingRadius - ringRadius) * 0.2;

      ctx.clearRect(0, 0, width, height);

      if (opacity > 0.01) {
        // Update spine trail
        segments[0].x = mouse.x;
        segments[0].y = mouse.y;

        for (let i = 1; i < NUM_SEGMENTS; i++) {
          const prev = segments[i - 1];
          const curr = segments[i];
          curr.x += (prev.x - curr.x) * 0.42;
          curr.y += (prev.y - curr.y) * 0.42;
        }

        ctx.save();
        ctx.globalAlpha = opacity;

        // Render silky subtle trail
        if (!mouse.isHoveringInteractive && NUM_SEGMENTS > 2) {
          ctx.beginPath();
          ctx.moveTo(segments[0].x, segments[0].y);
          for (let i = 1; i < NUM_SEGMENTS - 1; i++) {
            const xc = (segments[i].x + segments[i + 1].x) / 2;
            const yc = (segments[i].y + segments[i + 1].y) / 2;
            ctx.quadraticCurveTo(segments[i].x, segments[i].y, xc, yc);
          }
          ctx.lineTo(segments[NUM_SEGMENTS - 1].x, segments[NUM_SEGMENTS - 1].y);
          ctx.strokeStyle = 'rgba(44, 110, 73, 0.25)';
          ctx.lineWidth = 2.5;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        // Render Cursor Core / Ring
        const head = segments[0];
        ctx.beginPath();
        ctx.arc(head.x, head.y, ringRadius, 0, Math.PI * 2);

        if (mouse.isHoveringInteractive) {
          // Subtle interactive glass halo
          ctx.fillStyle = 'rgba(44, 110, 73, 0.12)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(44, 110, 73, 0.6)';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Center dot
          ctx.beginPath();
          ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#2C6E49';
          ctx.fill();
        } else {
          // Minimalist pinpoint dot
          ctx.fillStyle = '#2C6E49';
          ctx.shadowColor = 'rgba(44, 110, 73, 0.4)';
          ctx.shadowBlur = 4;
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[45] select-none"
      aria-hidden="true"
    />
  );
}