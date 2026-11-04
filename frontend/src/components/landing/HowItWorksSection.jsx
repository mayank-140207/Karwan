import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowItWorksSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const cards = [
    {
      step: '01',
      title: 'Plan the Route',
      tagline: 'Set corridor, pace & priorities',
      desc: 'Define your journey waypoints and customize transit preferences. Karwan instantly identifies active transit corridors, verified homestays, and community-audited stops along the way.',
      icon: 'map',
      badge: 'PRE-TRIP PLANNING',
      color: 'border-emerald-500/30 bg-emerald-50/40 text-emerald-800'
    },
    {
      step: '02',
      title: 'Travel with Live Data',
      tagline: 'Real going-fares & crowding',
      desc: 'Before stepping into an auto or bus, check real going-fares reported by recent riders. Avoid tourist markups and board with confidence, backed by live street-lighting and safety alerts.',
      icon: 'navigation',
      badge: 'ACTIVE TRANSIT',
      color: 'border-blue-500/30 bg-blue-50/40 text-blue-800'
    },
    {
      step: '03',
      title: 'Auto-heal Recalibration',
      tagline: 'Instant detours when disruptions strike',
      desc: 'Unexpected roadblocks, temple crowds, or transit strikes? Auto-heal rebalances your timeline in seconds, proposing verified alternate bypasses and stays so your day stays on track.',
      icon: 'auto_fix_high',
      badge: 'RESILIENCE ENGINE',
      color: 'border-amber-500/30 bg-amber-50/40 text-amber-800'
    },
    {
      step: '04',
      title: 'Verify & Give Back',
      tagline: 'Quick audits for the next traveller',
      desc: 'Take 15 seconds to log a paid fare or verify a homestay’s hot water and backup power. Your ground-level audit strengthens community trust and earns KARWAN ID contributor credentials.',
      icon: 'verified',
      badge: 'COMMUNITY AUDIT',
      color: 'border-purple-500/30 bg-purple-50/40 text-purple-800'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 1024;

    if (prefersReducedMotion || isMobile || !trackRef.current || !containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const scrollWidth = trackRef.current.scrollWidth - trackRef.current.clientWidth;

      if (scrollWidth > 0) {
        gsap.to(trackRef.current, {
          x: -scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top+=80',
            end: () => `+=${scrollWidth + 800}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-24 bg-surface-container-low/60 border-t border-surface-container-high/80 overflow-hidden px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary mb-3">
            <span className="material-symbols-outlined text-sm">linear_scale</span>
            <span>END-TO-END WORKFLOW</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            How Karwan works on your trip.
          </h2>
          <p className="font-sans text-base sm:text-lg text-text-gray mt-2">
            Four seamless phases that transform travel uncertainty into verifiable confidence.
          </p>
        </div>

        {/* Horizontal Track Container */}
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 will-change-transform lg:w-max pb-4"
        >
          {cards.map((card) => (
            <div
              key={card.step}
              className="w-full lg:w-[380px] bg-white rounded-3xl p-7 shadow-floating border border-surface-container-high flex flex-col justify-between shrink-0 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-serif font-bold text-secondary">
                    {card.step}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${card.color}`}>
                    {card.badge}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                </div>

                <h3 className="font-serif font-bold text-xl text-primary mb-1">
                  {card.title}
                </h3>
                <div className="text-xs font-medium text-secondary mb-3">
                  {card.tagline}
                </div>
                <p className="font-sans text-xs sm:text-sm text-text-gray leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-surface-container-high/60 mt-6 flex items-center justify-between text-xs text-text-gray">
                <span className="font-mono uppercase tracking-wider text-[11px]">Karwan Protocol</span>
                <span className="font-semibold text-primary">Verified Step</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

