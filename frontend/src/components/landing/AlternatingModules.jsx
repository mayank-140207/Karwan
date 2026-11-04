import React from 'react';
import { Link } from 'react-router-dom';

export default function AlternatingModules() {
  const modules = [
    {
      id: 'livetrail',
      step: '01',
      name: 'LiveTrail',
      tagline: 'Real-Time Transit & Actual Going-Fares',
      desc: 'Eliminate transit anxiety and unverified tourist markups. LiveTrail collects verified going-fares directly from recent riders, showing real crowd levels and dynamic arrival estimates across local transit corridors.',
      bullets: [
        'Verified going-fare rates crowdsourced from recent riders (last 2 hours)',
        'Live passenger crowding meters before boarding local buses, autos, or ferries',
        'Corridor progress tracking with proactive transfer notifications'
      ],
      link: '/trip/livetrail',
      linkText: 'Explore LiveTrail',
      reversed: false,
      mockup: {
        badge: 'CORRIDOR TELEMETRY',
        title: 'Mathura Junction → Vrindavan',
        statLabel: 'Rider Verified Going-Rate',
        statValue: '₹20 – ₹25',
        crowd: 'Moderate Crowding (42%)',
        meta: 'Reported by 14 recent passengers today',
        accentColor: 'border-emerald-500/30 bg-emerald-50/50'
      }
    },
    {
      id: 'trustradar',
      step: '02',
      name: 'TrustRadar',
      tagline: 'Community Safety & Local Guide Discovery',
      desc: 'Navigate unfamiliar streets and heritage quarters with confidence. TrustRadar scores street-level safety indicators and connects you with accredited local cultural guides who pledge zero commission kickbacks.',
      bullets: [
        'Real-time neighborhood safety confidence index and street-lighting telemetry',
        'Discovery of accredited cultural guides with verified KARWAN IDs',
        'Fair-trade artisan vendor directory protected from inflated commission markups'
      ],
      link: '/trip/trustradar',
      linkText: 'Explore TrustRadar',
      reversed: true,
      mockup: {
        badge: 'COMMUNITY SAFETY RADAR',
        title: 'Vidyapeeth Marg & Temple Quarter',
        statLabel: 'Safety Confidence Score',
        statValue: '94 / 100',
        crowd: 'Solo Traveller Friendly Presence',
        meta: 'Verified Cultural Guide: Rajesh Gupta (#UP-9821)',
        accentColor: 'border-blue-500/30 bg-blue-50/50'
      }
    },
    {
      id: 'autoheal',
      step: '03',
      name: 'Auto-heal',
      tagline: 'Dynamic Itinerary Recalibration',
      desc: 'Domestic travel in India is dynamic. When roads, ghats, or temples close for festivals or weather events, Auto-heal instantly suggests verified detour routes and alternate stays so your journey stays on schedule.',
      bullets: [
        'Instant detour calculation bypassing roadblocks and religious processions',
        'Alternate verified stay recommendations within your chosen budget',
        'Seamless schedule synchronization without requiring manual replanning from scratch'
      ],
      link: '/trip/itinerary',
      linkText: 'Explore Auto-heal',
      reversed: false,
      mockup: {
        badge: 'ADAPTIVE RE-ROUTE',
        title: 'Chhatikara Obstruction Bypassed',
        statLabel: 'Delay Averted',
        statValue: '34 Minutes',
        crowd: 'Gandhi Marg Alternative Route Active',
        meta: 'Seamlessly updated across all daily waypoints',
        accentColor: 'border-amber-500/30 bg-amber-50/50'
      }
    },
    {
      id: 'groundtruth',
      step: '04',
      name: 'Ground Truth',
      tagline: 'Stay Utility Telemetry & Guest Audits',
      desc: 'Never arrive to cold water or dead power. Ground Truth tracks live sensors for continuous water, Wi-Fi speed, and electricity backup, backed by recent geotagged guest photographs captured on-site.',
      bullets: [
        'Recent geotagged guest photographs captured within the past 48 hours',
        'Live telemetry confirming continuous water, Wi-Fi speed, and power backup',
        '100% objective accommodation audits independent of sponsored placement'
      ],
      link: '/directory',
      linkText: 'Explore Ground Truth',
      reversed: true,
      mockup: {
        badge: 'LIVE SENSOR TELEMETRY',
        title: 'The Heritage Haveli Stay',
        statLabel: 'Utility Continuity Score',
        statValue: '100% Operational',
        crowd: 'Fiber Wi-Fi: 78 Mbps · Solar Water Active',
        meta: 'Dual generator backup standing by on grid drop',
        accentColor: 'border-purple-500/30 bg-purple-50/50'
      }
    }
  ];

  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low/40">
      <div className="max-w-6xl mx-auto space-y-24">
        {modules.map((m) => (
          <div
            key={m.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              m.reversed ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text Side */}
            <div className={`lg:col-span-6 space-y-5 ${m.reversed ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-container-high text-xs font-mono font-bold text-secondary">
                <span>MODULE {m.step}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                {m.name}: <span className="text-secondary">{m.tagline}</span>
              </h3>
              <p className="font-sans text-base text-text-gray leading-relaxed">
                {m.desc}
              </p>

              {/* 3 Check Bullets */}
              <ul className="space-y-3 pt-2">
                {m.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-primary">
                    <span className="w-5 h-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </span>
                    <span className="leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  to={m.link}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-container text-white text-sm font-semibold transition-colors shadow-ambient"
                >
                  <span>{m.linkText}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Device Mockup Side */}
            <div className={`lg:col-span-6 ${m.reversed ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-floating border border-surface-container-high relative overflow-hidden group hover:border-secondary/40 transition-colors">
                <div className="flex items-center justify-between pb-4 border-b border-surface-container-high/60 text-xs text-text-gray">
                  <span className="font-mono font-semibold uppercase tracking-wider text-secondary">
                    {m.mockup.badge}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Verified Live
                  </span>
                </div>

                <div className="my-6 space-y-4">
                  <h4 className="font-serif text-2xl font-bold text-primary">
                    {m.mockup.title}
                  </h4>

                  <div className={`p-5 rounded-2xl border ${m.mockup.accentColor}`}>
                    <div className="text-xs text-text-gray">{m.mockup.statLabel}</div>
                    <div className="text-3xl font-serif font-bold text-primary mt-1">
                      {m.mockup.statValue}
                    </div>
                    <div className="text-xs text-secondary font-semibold mt-2">
                      {m.mockup.crowd}
                    </div>
                  </div>

                  <div className="text-xs text-text-gray flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-secondary">info</span>
                    <span>{m.mockup.meta}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-container-high/60 flex items-center justify-between text-xs">
                  <span className="text-text-gray font-mono">KARWAN ID PROTOCOL</span>
                  <Link to={m.link} className="text-secondary font-semibold hover:underline flex items-center gap-1">
                    <span>Inspect screen</span>
                    <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

