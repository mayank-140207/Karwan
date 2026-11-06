import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AlternatingModules() {
  const sectionRef = useRef(null);

  const modules = [
    {
      id: 'livetrail',
      step: '01',
      name: 'LiveTrail',
      tagline: 'Real-Time Transit & Fares',
      desc: 'Crowdsourced going-fare intelligence and live passenger crowding for local transit corridors.',
      chips: ['Going-fares', 'Live Crowding', 'Zero Tout Markup'],
      link: '/trip/livetrail',
      image: '/images/tab_solo_explorer.webp',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
    },
    {
      id: 'trustradar',
      step: '02',
      name: 'TrustRadar',
      tagline: 'Community Safety & Guides',
      desc: 'Real-time safety confidence scoring, street-lighting telemetry, and accredited cultural guides.',
      chips: ['Safety Radar', 'Accredited Guides', 'Artisan Guilds'],
      link: '/trip/trustradar',
      image: '/images/tab_family_traveller.webp',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-400/30'
    },
    {
      id: 'autoheal',
      step: '03',
      name: 'Auto-heal',
      tagline: 'Dynamic Itinerary Recalibration',
      desc: 'Automatic detour suggestions and stay rebalancing when unexpected temple or road closures strike.',
      chips: ['Dynamic Detours', 'Timeline Sync', 'Stay Fallbacks'],
      link: '/trip/itinerary',
      image: '/images/tab_business_traveller.webp',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/30'
    },
    {
      id: 'groundtruth',
      step: '04',
      name: 'Ground Truth',
      tagline: 'Stay Utility Telemetry',
      desc: 'Evidence-based stay verification: continuous water, backup power, Wi-Fi speed, and guest photos.',
      chips: ['Continuous Water', 'Dual Genset', 'Geotagged Audits'],
      link: '/directory',
      image: '/images/pine_ridge_cabin_exterior.webp',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/30'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // 5. Four tall photo cards with initial rotateY of -12°, -4°, 4°, 12°
      // Straighten to 0 as section scrolls into view (scrub)
      const angles = [-12, -4, 4, 12];
      const cardEls = gsap.utils.toArray('.module-perspective-card');

      cardEls.forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            rotateY: angles[idx],
            transformPerspective: 1200
          },
          {
            rotateY: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              end: 'center 45%',
              scrub: 0.8,
              invalidateOnRefresh: true
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-16 md:pt-24 pb-2 md:pb-4 bg-surface-container-low/40 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        {/* Section Header - Left Aligned to match container & logo */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary mb-3">
            <span className="material-symbols-outlined text-sm">view_quilt</span>
            <span>MODULAR ARCHITECTURE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight [text-wrap:balance] max-w-[18ch]">
            Four core engines for{' '}
            <span className="italic font-normal text-secondary inline-block">
              total journey&nbsp;trust.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-text-gray mt-2 max-w-2xl">
            Each engine solves an essential vulnerability in domestic travel across local transit, street safety, route continuity, and accommodations.
          </p>
        </div>

        {/* 5. Four tall photo cards in 3D perspective (straighten to 0 on scroll scrub, hover lifts 8px) */}
        <div className="perspective-1200 preserve-3d grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-6">
          {modules.map((m) => (
            <div
              key={m.id}
              className="module-perspective-card relative h-[480px] sm:h-[530px] rounded-3xl overflow-hidden shadow-floating border border-surface-container-high/80 flex flex-col justify-between p-6 sm:p-7 transition-transform duration-300 ease-out hover:-translate-y-2 group cursor-pointer will-change-transform"
            >
              {/* Background Photo */}
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-transparent/30 z-10" />

              {/* Card Top: Step Badge */}
              <div className="relative z-20 flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border backdrop-blur-md ${m.badgeColor}`}
                >
                  MODULE {m.step}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed opacity-75" />
              </div>

              {/* Card Bottom: Content, Chips, and Explore Link */}
              <div className="relative z-20 space-y-3.5">
                <div>
                  <h3 className="font-serif font-bold text-2xl text-pure-white group-hover:text-secondary-fixed transition-colors">
                    {m.name}
                  </h3>
                  <div className="text-xs font-medium text-secondary-fixed mt-0.5">
                    {m.tagline}
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed line-clamp-2">
                  {m.desc}
                </p>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {m.chips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/10 text-white/90 border border-white/15 backdrop-blur-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Explore Link */}
                <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                  <Link
                    to={m.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary-fixed group-hover:text-white transition-colors"
                  >
                    <span>Explore module</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                  <span className="text-[10px] font-mono text-white/50">KARWAN PROTOCOL</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
