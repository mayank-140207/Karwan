import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icons } from '../common/Icons';

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
      desc: 'Define your journey waypoints and transit preferences. Karwan identifies active corridors, verified homestays, and community-audited stops.',
      badge: 'PRE-TRIP PLANNING',
      color: 'border-emerald-500/30 bg-emerald-50/50 text-emerald-800',
      benefit: 'No tout markups',
      icon: <Icons.Location className="w-5 h-5 text-emerald-600" />
    },
    {
      step: '02',
      title: 'Travel with Live Data',
      tagline: 'Real going-fares & crowding',
      desc: 'Before boarding an auto or bus, check real going-fares reported by recent riders. Avoid tourist markups, backed by live street-lighting alerts.',
      badge: 'ACTIVE TRANSIT',
      color: 'border-blue-500/30 bg-blue-50/50 text-blue-800',
      benefit: 'Fare shown before you ride',
      icon: <Icons.ArrowRight className="w-5 h-5 text-blue-600" />
    },
    {
      step: '03',
      title: 'Auto-heal Recalibration',
      tagline: 'Instant detours when disruptions strike',
      desc: 'Roadblocks or temple processions? Auto-heal rebalances your timeline in seconds, proposing verified alternate bypasses and stays.',
      badge: 'RESILIENCE ENGINE',
      color: 'border-amber-500/30 bg-amber-50/50 text-amber-800',
      benefit: 'Plan fixes itself',
      icon: <Icons.Refresh className="w-5 h-5 text-amber-600" />
    },
    {
      step: '04',
      title: 'Verify & Give Back',
      tagline: 'Quick audits for the next traveller',
      desc: 'Log a paid fare or verify a homestay’s hot water in 15 seconds. Your ground-level audit strengthens community trust with KARWAN ID credentials.',
      badge: 'COMMUNITY AUDIT',
      color: 'border-purple-500/30 bg-purple-50/50 text-purple-800',
      benefit: 'Every report counts',
      icon: <Icons.CheckCircle className="w-5 h-5 text-purple-600" />
    }
  ];

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const getScrollDistance = () => {
        // Calculate exact horizontal overflow so Card 05 lands fully inside with right padding
        return track.scrollWidth - container.clientWidth + 96;
      };

      const tween = gsap.fromTo(
        track,
        { x: 0 },
        {
          x: () => -getScrollDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top+=72',
            end: () => `+=${getScrollDistance() + 450}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setProgress(self.progress);
            }
          }
        }
      );

      return () => {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-12 md:py-16 bg-surface-container-low/60 border-t border-surface-container-high/80 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        {/* Section Header */}
        <div className="text-left mb-6 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight [text-wrap:balance]">
            From planning departure to{' '}
            <span className="italic font-normal text-secondary inline-block">
              verified&nbsp;arrival.
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-gray leading-relaxed">
            Four seamless phases that transform domestic travel friction into verifiable certainty.
          </p>
        </div>

        {/* Horizontal Track Container */}
        <div className="relative overflow-visible">
          {/* Track: On desktop it translates smoothly via GSAP; on mobile it supports smooth horizontal swipe */}
          <div
            ref={trackRef}
            className="flex flex-row gap-5 pb-4 items-stretch overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none no-scrollbar will-change-transform pr-6 lg:pr-12"
          >
            {/* Cards 01 to 04 */}
            {cards.map((card) => (
              <div
                key={card.step}
                className="w-[85vw] max-w-[320px] lg:w-[330px] h-[350px] md:h-[360px] bg-white rounded-3xl p-6 shadow-floating border border-surface-container-high flex flex-col justify-between shrink-0 snap-center transition-all duration-300 hover:shadow-lg text-left"
              >
                <div>
                  {/* Top: Large Number & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-serif font-bold text-slate-300">
                      {card.step}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${card.color}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center mb-3">
                    {card.icon}
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-primary mb-1">
                    {card.title}
                  </h3>
                  <div className="text-xs font-semibold text-secondary mb-2">
                    {card.tagline}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-text-gray leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom: Guaranteed Benefit Tag */}
                <div className="pt-3.5 border-t border-surface-container-high/60 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                    <Icons.Check className="w-2.5 h-2.5" />
                  </span>
                  <span className="font-semibold text-xs text-secondary truncate">
                    {card.benefit}
                  </span>
                </div>
              </div>
            ))}

            {/* Card 05: Final Dark Card ("Your trip, verified.") - 100% Fully Visible */}
            <div className="w-[85vw] max-w-[320px] lg:w-[340px] h-[350px] md:h-[360px] bg-primary text-white rounded-3xl p-6 shadow-2xl border border-white/10 flex flex-col justify-between shrink-0 snap-center relative overflow-hidden text-left">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/25 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-serif font-bold text-white/30">
                    05
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/10 text-secondary-fixed border border-white/15">
                    READY TO ROLL
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary-fixed mb-3">
                  <Icons.ShieldCheck className="w-5 h-5" />
                </div>

                <h3 className="font-serif font-bold text-xl text-pure-white mb-1.5 leading-tight">
                  Your trip, verified.
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-2 line-clamp-3">
                  Join thousands of domestic travellers navigating India with authentic, crowdsourced confidence.
                </p>
              </div>

              <div className="relative z-10 pt-3 border-t border-white/15 space-y-2">
                <Link
                  to="/trip/plan/route"
                  className="w-full py-3 rounded-full bg-secondary text-white font-semibold text-xs hover:bg-success-green transition-colors shadow-ambient flex items-center justify-center gap-2 group"
                >
                  <span>Launch Route Planner</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="text-[10px] text-center text-white/50 font-mono tracking-wider">
                  ZERO TOUT COMMISSIONS GUARANTEE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Line Below Horizontal Track on Desktop */}
        <div className="hidden lg:block w-full max-w-xs mt-6">
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

        {/* Mobile Swipe Hint */}
        <div className="lg:hidden flex items-center justify-center gap-1.5 text-[11px] font-mono text-text-gray mt-2">
          <span>Swipe cards →</span>
        </div>
      </div>
    </section>
  );
}
