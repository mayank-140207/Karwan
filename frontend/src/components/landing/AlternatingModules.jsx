import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../common/Icons';

export default function AlternatingModules() {
  const modules = [
    {
      id: 'livetrail',
      step: '01',
      badge: 'ENGINE 01 · TRANSIT & FARES',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      dotColor: 'bg-emerald-500',
      title: 'LiveTrail',
      tagline: 'Real-time transit telemetry & crowdsourced going-fares',
      desc: 'Tired of negotiating inflated tourist quotes at railway stations? LiveTrail displays the actual going-fare reported by real passengers in the last 2 hours. See live crowding, vehicle types, and meter compliance before you take a single step.',
      link: '/trip/livetrail',
      actionText: 'Explore LiveTrail',
      points: [
        'Real passenger fare benchmarks refreshed hourly',
        'Transit crowding telemetry and boarding point guides',
        'Direct links to prepaid municipal stands with locked rates'
      ],
      preview: {
        type: 'fare',
        badge: 'LIVE GOING-FARE AUDIT',
        title: 'Mathura Junction → Vrindavan Gate',
        primaryMetric: '₹20 – ₹25',
        primaryLabel: 'Verified Passenger Fare',
        secondaryMetric: '₹120',
        secondaryLabel: 'Standard Tout Quote',
        tag: '18 reports in last 2h · Auto Union #42'
      }
    },
    {
      id: 'trustradar',
      step: '02',
      badge: 'ENGINE 02 · SAFETY & INTEGRITY',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
      dotColor: 'bg-blue-500',
      title: 'TrustRadar',
      tagline: 'Community street safety & accredited local guides',
      desc: 'Navigate temple alleys and ghats with verified peace of mind. TrustRadar combines street-lighting telemetry, pedestrian footfall density, and community safety ratings to illuminate safe walking corridors.',
      link: '/trip/trustradar',
      actionText: 'Explore TrustRadar',
      points: [
        'Street lighting and pedestrian footfall density audits',
        'Accredited local cultural guides with zero tour-bus kickbacks',
        'Verified artisan guilds with authentic heritage pricing'
      ],
      preview: {
        type: 'safety',
        badge: 'CORRIDOR INTEGRITY SCORE',
        title: 'Bankey Bihari Temple Approach Marg',
        primaryMetric: '94 / 100',
        primaryLabel: 'Street Safety Index',
        secondaryMetric: '98%',
        secondaryLabel: 'Lighting Continuity',
        tag: 'Accredited Guide: Rajesh Gupta #UP-9821'
      }
    },
    {
      id: 'autoheal',
      step: '03',
      badge: 'ENGINE 03 · DYNAMIC RECALIBRATION',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
      dotColor: 'bg-amber-500',
      title: 'Auto-heal',
      tagline: 'Intelligent detours when reality disrupts the itinerary',
      desc: 'In India, spontaneous temple processions, festival aartis, and unplanned roadblocks are routine. When delays strike, Auto-heal automatically shifts your timeline and routes you through verified bypasses.',
      link: '/trip/itinerary',
      actionText: 'Explore Auto-heal',
      points: [
        'Real-time road closure and procession crowd detection',
        'One-tap itinerary rebalancing with preserved reservation slots',
        'Automatic fallback stays and alternate transit waypoints'
      ],
      preview: {
        type: 'detour',
        badge: 'ACTIVE ROUTE RECOVERY',
        title: 'Chhatikara Procession Bypass',
        primaryMetric: '38 mins',
        primaryLabel: 'Estimated Delay Averted',
        secondaryMetric: '+1.4 km',
        secondaryLabel: 'Alternate Gandhi Marg',
        tag: 'Detour active · Auto-updated 4m ago'
      }
    },
    {
      id: 'groundtruth',
      step: '04',
      badge: 'ENGINE 04 · STAY UTILITY TELEMETRY',
      badgeColor: 'text-purple-700 bg-purple-50 border-purple-200',
      dotColor: 'bg-purple-500',
      title: 'Ground Truth',
      tagline: 'Evidence-based stay verification before you book',
      desc: 'Never get surprised by cold water in winter or power cuts during the summer heat. Ground Truth verifies running hot water, generator backup, Wi-Fi speed, and actual room photos audited by verified guests.',
      link: '/directory',
      actionText: 'Explore Ground Truth',
      points: [
        'Solar water heater and geyser continuity verified',
        'Dual 25 kVA genset backup confirmed for uninterrupted power',
        'Geotagged traveler audits stamped with cryptographic KARWAN IDs'
      ],
      preview: {
        type: 'stay',
        badge: 'UTILITY CONTINUITY AUDIT',
        title: 'The Heritage Haveli — Mathura-Vrindavan Road',
        primaryMetric: '100%',
        primaryLabel: 'Hot Water Running',
        secondaryMetric: '25 kVA',
        secondaryLabel: 'Generator Standby',
        tag: 'KARWAN ID #HS-4012 · Host: Brajraj Sharma'
      }
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-surface-container-low/30 border-b border-surface-container-high/60 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full space-y-20 md:space-y-32">
        {/* Section Header */}
        <div className="text-left max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span>MODULAR ARCHITECTURE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight [text-wrap:balance]">
            Four core engines,{' '}
            <span className="italic font-normal text-secondary inline-block">
              running right&nbsp;now.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-text-gray leading-relaxed">
            Each engine addresses a critical point of vulnerability in domestic travel across transit fares, street safety, itinerary resilience, and accommodations.
          </p>
        </div>

        {/* 4 Alternating Split-Screen Rows */}
        <div className="space-y-24 md:space-y-32">
          {modules.map((m, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={m.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Text Column */}
                <div
                  className={`lg:col-span-6 space-y-5 text-left ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border bg-white shadow-sm">
                    <span className={`w-2 h-2 rounded-full ${m.dotColor}`} />
                    <span className="text-primary">{m.badge}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    {m.title}
                  </h3>

                  <div className="text-sm font-semibold text-secondary font-sans">
                    {m.tagline}
                  </div>

                  <p className="font-sans text-sm sm:text-base text-text-gray leading-relaxed">
                    {m.desc}
                  </p>

                  {/* 3 Check Items with Clean Inline SVGs */}
                  <div className="space-y-2.5 pt-2">
                    {m.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary">
                        <div className="w-4 h-4 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                          <Icons.Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to={m.link}
                      className="px-6 py-3 rounded-full bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-secondary transition-all shadow-ambient flex items-center gap-2 group"
                    >
                      <span>{m.actionText}</span>
                      <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/directory"
                      className="text-xs sm:text-sm font-semibold text-text-gray hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span>Explore Corridors</span>
                      <Icons.ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* Interactive Software Graphic / Mockup Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-floating border border-surface-container-high space-y-6 text-left relative overflow-hidden group hover:border-secondary/40 transition-colors">
                    {/* Top Status Bar */}
                    <div className="flex items-center justify-between border-b border-surface-container-high/60 pb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-surface-container text-text-gray border border-surface-container-high">
                        {m.preview.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-secondary font-semibold">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span>LIVE ENGINE</span>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <div className="text-[11px] font-mono text-text-gray uppercase tracking-wider">
                        Active Node Telemetry
                      </div>
                      <h4 className="font-serif font-bold text-lg sm:text-xl text-primary mt-0.5">
                        {m.preview.title}
                      </h4>
                    </div>

                    {/* Metrics Comparison Box */}
                    <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-surface-container-low/70 border border-surface-container-high">
                      <div>
                        <div className="text-[10px] font-mono uppercase text-text-gray">
                          {m.preview.primaryLabel}
                        </div>
                        <div className="font-serif font-bold text-xl sm:text-2xl text-secondary mt-1">
                          {m.preview.primaryMetric}
                        </div>
                      </div>
                      <div className="border-l border-surface-container-high pl-4">
                        <div className="text-[10px] font-mono uppercase text-text-gray">
                          {m.preview.secondaryLabel}
                        </div>
                        <div className="font-serif font-bold text-xl sm:text-2xl text-primary mt-1">
                          {m.preview.secondaryMetric}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Status Feed */}
                    <div className="pt-2 flex items-center justify-between text-xs text-text-gray font-mono">
                      <span>{m.preview.tag}</span>
                      <span className="text-secondary font-bold">Verified ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}