import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AlternatingModules() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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
    const isMobile = window.innerWidth < 1024;

    if (prefersReducedMotion || isMobile || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Controlled stagger & coordinated 3D rolling reveal
      const initialAngles = [-10, -3, 3, 10];
      const cardEls = cardsRef.current.filter(Boolean);

      cardEls.forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            rotateY: initialAngles[idx],
            rotateX: 8,
            y: 40,
            opacity: 0.8,
            transformPerspective: 1200
          },
          {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'center 45%',
              scrub: 0.6,
              invalidateOnRefresh: true
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Interactive 3D mouse tilt handlers per card
  const handleMouseMove = (e, idx) => {
    const card = cardsRef.current[idx];
    if (!card || window.innerWidth < 1024) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Subtle natural tilt: max 9 degrees rotation, subtle lift
    card.style.transform = `perspective(1000px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) translateY(-8px) translateZ(10px)`;
  };

  const handleMouseLeave = (idx) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) translateZ(0px)';
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-surface-container-low/40 border-b border-surface-container-high/60 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        {/* Section Header - Left Aligned to match container & logo */}
        <div className="text-left mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary mb-3">
            <span className="material-symbols-outlined text-sm">view_quilt</span>
            <span>MODULAR ARCHITECTURE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight [text-wrap:balance]">
            Four core engines for{' '}
            <span className="italic font-normal text-secondary inline-block">
              total journey&nbsp;trust.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-text-gray mt-2 leading-relaxed">
            Each engine addresses a critical point of vulnerability in domestic travel across transit, street safety, route continuity, and accommodations.
          </p>
        </div>

        {/* Four tall photo cards in 3D perspective with interactive tilt */}
        <div className="perspective-1200 preserve-3d grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
          {modules.map((m, idx) => (
            <div
              key={m.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              className="relative h-[480px] sm:h-[520px] rounded-3xl overflow-hidden shadow-floating border border-surface-container-high/80 flex flex-col justify-between p-6 sm:p-7 transition-all duration-200 ease-out group cursor-pointer will-change-transform"
            >
              {/* Background Photo */}
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for Readability */}
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
                  {m.chips.map((chip, chipIdx) => (
                    <span
                      key={chipIdx}
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
