import React, { useEffect, useRef } from 'react';

/**
 * SnakeCursor
 * A high-performance, physics-based interactive snake-like cursor trail.
 * - Multi-segment spine with inverse kinematics + spring lerp delays.
 * - Generates natural organic curves and slithers in response to real cursor velocity.
 * - Smooth Catmull-Rom / Bézier spline body rendering with tapered vertebrae.
 * - Reactive state on interactive hover targets (buttons, links, inputs).
 * - Zero React state updates on animation frame (runs entirely via requestAnimationFrame & Canvas).
 * - Disables automatically on touch devices and prefers-reduced-motion.
 */
export default function SnakeCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check for touch device or reduced motion preference
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

    // Track window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Snake configuration
    const NUM_SEGMENTS = 22;
    const BASE_SPACING = 12; // Target spacing between segments
    const segments = [];

    // Initialize segments at center
    const startX = width / 2;
    const startY = height / 2;
    for (let i = 0; i < NUM_SEGMENTS; i++) {
      segments.push({
        x: startX - i * BASE_SPACING,
        y: startY,
        vx: 0,
        vy: 0,
        radius: Math.max(2, 7.5 * (1 - (i / NUM_SEGMENTS) * 0.75)),
        angle: 0
      });
    }

    const mouse = {
      x: startX,
      y: startY,
      prevX: startX,
      prevY: startY,
      speed: 0,
      isHoveringInteractive: false,
      isMoving: false,
      isVisible: false,
      lastMoveTime: performance.now()
    };

    let opacity = 0;
    let animId = null;

    // Mouse event handlers
    const handleMouseMove = (e) => {
      mouse.isVisible = true;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dx = mouse.x - mouse.prevX;
      const dy = mouse.y - mouse.prevY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);
      mouse.lastMoveTime = performance.now();
      mouse.isMoving = true;

      // Check if hovering an interactive element
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
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.lastMoveTime = performance.now();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Animation Loop
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      const idleDuration = (currentTime - mouse.lastMoveTime) / 1000;
      if (idleDuration > 0.15) {
        mouse.isMoving = false;
        mouse.speed *= 0.9;
      }

      // Smooth opacity fade in/out
      const targetOpacity = mouse.isVisible ? 1 : 0;
      opacity += (targetOpacity - opacity) * 0.1;

      ctx.clearRect(0, 0, width, height);

      if (opacity > 0.01) {
        // 1. Update Head
        const head = segments[0];
        // Head follows cursor with snappy yet fluid damping
        const headLerp = mouse.isHoveringInteractive ? 0.35 : 0.28;
        head.x += (mouse.x - head.x) * headLerp;
        head.y += (mouse.y - head.y) * headLerp;

        const headDx = mouse.x - head.x;
        const headDy = mouse.y - head.y;
        head.angle = Math.atan2(headDy, headDx);

        // 2. Update subsequent body segments with progressive spring delays
        for (let i = 1; i < NUM_SEGMENTS; i++) {
          const prev = segments[i - 1];
          const curr = segments[i];

          // Compute angle to previous segment
          const dx = prev.x - curr.x;
          const dy = prev.y - curr.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);
          curr.angle = angle;

          // Target distance constraint
          const targetDist = BASE_SPACING;
          const targetX = prev.x - Math.cos(angle) * targetDist;
          const targetY = prev.y - Math.sin(angle) * targetDist;

          // Progressive follow delay: head is fastest, tail is delayed and undulating
          // Tapered follow factor creates authentic snake wave propagation
          const t = i / NUM_SEGMENTS;
          const followRate = Math.max(0.18, 0.48 - t * 0.25);

          // Add a tiny organic lateral ripple when moving fast
          let rippleX = 0;
          let rippleY = 0;
          if (mouse.speed > 2 && i > 2) {
            const wave = Math.sin(currentTime * 0.012 - i * 0.45) * Math.min(mouse.speed * 0.18, 3.5);
            // Perpendicular to spine direction
            rippleX = -Math.sin(angle) * wave;
            rippleY = Math.cos(angle) * wave;
          }

          curr.x += (targetX + rippleX - curr.x) * followRate;
          curr.y += (targetY + rippleY - curr.y) * followRate;
        }

        ctx.save();
        ctx.globalAlpha = opacity;

        // 3. Render Connecting Spine Ribbon (Smooth Spine Curve)
        if (NUM_SEGMENTS > 2) {
          ctx.beginPath();
          ctx.moveTo(segments[0].x, segments[0].y);

          // Draw quadratic bezier through midpoints for silky smooth curve
          for (let i = 1; i < NUM_SEGMENTS - 1; i++) {
            const xc = (segments[i].x + segments[i + 1].x) / 2;
            const yc = (segments[i].y + segments[i + 1].y) / 2;
            ctx.quadraticCurveTo(segments[i].x, segments[i].y, xc, yc);
          }
          ctx.lineTo(segments[NUM_SEGMENTS - 1].x, segments[NUM_SEGMENTS - 1].y);

          // Spine gradient stroke
          const headGrad = ctx.createLinearGradient(
            segments[0].x,
            segments[0].y,
            segments[NUM_SEGMENTS - 1].x,
            segments[NUM_SEGMENTS - 1].y
          );
          headGrad.addColorStop(0, 'rgba(40, 106, 70, 0.75)'); // Emerald Green
          headGrad.addColorStop(0.4, 'rgba(52, 139, 92, 0.55)');
          headGrad.addColorStop(1, 'rgba(40, 106, 70, 0.05)');

          ctx.strokeStyle = headGrad;
          ctx.lineWidth = mouse.isHoveringInteractive ? 7 : 5;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }

        // 4. Render Vertebrae Nodes (Individual Tapered Discs)
        for (let i = NUM_SEGMENTS - 1; i >= 0; i--) {
          const seg = segments[i];
          const progress = i / NUM_SEGMENTS;
          const radius = mouse.isHoveringInteractive && i === 0 ? seg.radius * 1.35 : seg.radius;

          ctx.beginPath();
          ctx.arc(seg.x, seg.y, radius, 0, Math.PI * 2);

          if (i === 0) {
            // Head Node: Vibrant emerald core with soft aura
            ctx.fillStyle = mouse.isHoveringInteractive ? '#3EA86A' : '#286A46';
            ctx.shadowColor = 'rgba(40, 106, 70, 0.6)';
            ctx.shadowBlur = mouse.isHoveringInteractive ? 14 : 8;
            ctx.fill();

            // Head outer halo ring on interactive hover
            if (mouse.isHoveringInteractive) {
              ctx.beginPath();
              ctx.arc(seg.x, seg.y, radius + 4, 0, Math.PI * 2);
              ctx.strokeStyle = 'rgba(62, 168, 106, 0.6)';
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }

            // Head directional eye-dots aligned with velocity angle
            const eyeDist = radius * 0.55;
            const eyeOffsetAngle = 0.55;
            const eye1X = seg.x + Math.cos(seg.angle + eyeOffsetAngle) * eyeDist;
            const eye1Y = seg.y + Math.sin(seg.angle + eyeOffsetAngle) * eyeDist;
            const eye2X = seg.x + Math.cos(seg.angle - eyeOffsetAngle) * eyeDist;
            const eye2Y = seg.y + Math.sin(seg.angle - eyeOffsetAngle) * eyeDist;

            ctx.shadowBlur = 0;
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(eye1X, eye1Y, 1.2, 0, Math.PI * 2);
            ctx.arc(eye2X, eye2Y, 1.2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Body Discs: Smoothly fading opacity & size
            const alpha = Math.max(0.08, (1 - progress) * 0.7);
            ctx.fillStyle = `rgba(40, 106, 70, ${alpha})`;
            ctx.shadowBlur = 0;
            ctx.fill();
          }
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

