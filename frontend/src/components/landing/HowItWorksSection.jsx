import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowItWorksSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const cards = [
    {
      step: '01',
      title: 'Plan the Route',
      tagline: 'Set corridor, pace & priorities',
      desc: 'Define your journey waypoints and customize transit preferences. Karwan instantly identifies active transit corridors, verified homestays, and community-audited stops along the way.',
      icon: 'map',
      badge: 'PRE-TRIP PLANNING',
      color: 'border-emerald-500/30 bg-emerald-50/40 text-emerald-800',
      benefit: 'No tout markups'
    },
    {
      step: '02',
      title: 'Travel with Live Data',
      tagline: 'Real going-fares & crowding',
      desc: 'Before stepping into an auto or bus, check real going-fares reported by recent riders. Avoid tourist markups and board with confidence, backed by live street-lighting and safety alerts.',
      icon: 'navigation',
      badge: 'ACTIVE TRANSIT',
      color: 'border-blue-500/30 bg-blue-50/40 text-blue-800',
      benefit: 'Fare shown before you ride'
    },
    {
      step: '03',
      title: 'Auto-heal Recalibration',
      tagline: 'Instant detours when disruptions strike',
      desc: 'Unexpected roadblocks, temple crowds, or transit strikes? Auto-heal rebalances your timeline in seconds, proposing verified alternate bypasses and stays so your day stays on track.',
      icon: 'auto_fix_high',
      badge: 'RESILIENCE ENGINE',
      color: 'border-amber-500/30 bg-amber-50/40 text-amber-800',
      benefit: 'Plan fixes itself'
    },
    {
      step: '04',
      title: 'Verify & Give Back',
      tagline: 'Quick audits for the next traveller',
      desc: 'Take 15 seconds to log a paid fare or verify a homestay’s hot water and backup power. Your ground-level audit strengthens community trust and earns KARWAN ID contributor credentials.',
      icon: 'verified',
      badge: 'COMMUNITY AUDIT',
      color: 'border-purple-500/30 bg-purple-50/40 text-purple-800',
      benefit: 'Every report counts'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile || !trackRef.current || !containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // 7. Pinned horizontal scroll with x: () => -(track.scrollWidth - window.innerWidth), scrub: .5, invalidateOnRefresh: true
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current.scrollWidth - window.innerWidth + 80),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top+=80',
          end: () => `+=${trackRef.current.scrollWidth - window.innerWidth + 900}`,
          pin: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setProgress(self.progress);
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="pt-16 md:pt-24 pb-2 md:pb-4 bg-surface-container-low/60 border-t border-surface-container-high/80 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 w-full lg:h-[calc(100vh-var(--header-h))] lg:min-h-[calc(100vh-var(--header-h))] flex flex-col justify-center">
        {/* Section Header - Left Aligned to match container & logo */}
        <div className="text-left mb-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary mb-3">
            <span className="material-symbols-outlined text-sm">linear_scale</span>
            <span>END-TO-END WORKFLOW</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight [text-wrap:balance] max-w-[18ch]">
            How Karwan works on{' '}
            <span className="italic font-normal text-secondary inline-block">
              your&nbsp;trip.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-text-gray mt-2">
            Four seamless phases that transform travel uncertainty into verifiable confidence.
          </p>
        </div>

        {/* 7. Horizontal Track: Four Cards + Final Dark Card */}
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 will-change-transform lg:w-max pb-4 items-stretch"
        >
          {/* Cards 01 to 04 */}
          {cards.map((card) => (
            <div
              key={card.step}
              className="w-full lg:w-[360px] bg-white rounded-3xl p-7 shadow-floating border border-surface-container-high flex flex-col justify-between shrink-0 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-serif font-bold text-secondary">
                    {card.step}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${card.color}`}
                  >
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

              {/* Benefit in green at the bottom of each card */}
              <div className="pt-4 border-t border-surface-container-high/60 mt-6 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xs font-bold">check</span>
                </span>
                <span className="font-medium text-xs sm:text-sm text-secondary">
                  {card.benefit}
                </span>
              </div>
            </div>
          ))}

          {/* Card 05: Final Dark Card ("Your trip, verified." with a working button) */}
          <div className="w-full lg:w-[380px] bg-primary text-white rounded-3xl p-8 shadow-2xl border border-white/10 flex flex-col justify-between shrink-0 relative overflow-hidden">
            {/* Subtle Glow inside card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl font-serif font-bold text-secondary-fixed">
                  05
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/10 text-secondary-fixed border border-white/15">
                  READY TO ROLL
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-secondary-fixed mb-4">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-pure-white mb-2 leading-tight">
                Your trip, verified.
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                Join thousands of domestic travellers navigating India with authentic, crowdsourced confidence.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/15 mt-6 space-y-3">
              <Link
                to="/trip/plan/route"
                className="w-full py-3 rounded-full bg-secondary text-white font-semibold text-xs sm:text-sm hover:bg-success-green transition-colors shadow-ambient flex items-center justify-center gap-2"
              >
                <span>Launch Route Planner</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <div className="text-[11px] text-center text-white/50 font-mono">
                ZERO TOUT COMMISSIONS GUARANTEE
              </div>
            </div>
          </div>
        </div>

        {/* Hairline Progress Line Below Horizontal Track */}
        <div className="hidden lg:block w-full max-w-md mt-6">
          <div className="h-[2px] bg-surface-container-high rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary transition-all duration-75 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-text-gray mt-1">
            <span>01 PLAN</span>
            <span>05 VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
