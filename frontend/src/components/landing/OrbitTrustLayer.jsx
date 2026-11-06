import React, { useState } from 'react';
import Logo from '../common/Logo';

export default function OrbitTrustLayer() {
  const [hoveredModule, setHoveredModule] = useState(null);

  const modules = {
    livetrail: {
      name: 'LiveTrail',
      tagline: 'Real-Time Transit & Fares',
      metric: '98% Fare Consensus',
      desc: 'Crowdsourced going-fare benchmark and crowding telemetry reported by live riders.',
      color: 'border-emerald-300 text-emerald-700 bg-emerald-50'
    },
    trustradar: {
      name: 'TrustRadar',
      tagline: 'Community Safety Scoring',
      metric: '94/100 Street Safety Score',
      desc: 'Real-time street lighting intelligence and accredited local cultural guide discovery.',
      color: 'border-blue-300 text-blue-700 bg-blue-50'
    },
    autoheal: {
      name: 'Auto-heal',
      tagline: 'Dynamic Itinerary Recalibration',
      metric: '38 Mins Saved on Detour',
      desc: 'Proactive alternate routing and verified homestay rebalancing during sudden closures.',
      color: 'border-amber-300 text-amber-700 bg-amber-50'
    },
    groundtruth: {
      name: 'Ground Truth',
      tagline: 'Stay Utility Telemetry',
      desc: 'Live IoT telemetry and geotagged guest audits verifying continuous water and electricity.',
      metric: '100% Utility Score Verified',
      color: 'border-purple-300 text-purple-700 bg-purple-50'
    }
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-16 md:pt-24 pb-2 md:pb-4 bg-white border-y border-surface-container-high/80 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6">
          {/* Text Side - Left Aligned to match container & logo */}
          <div className="lg:col-span-6 text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary">
              <span className="material-symbols-outlined text-sm">hub</span>
              <span>UNIFIED ARCHITECTURE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary tracking-tight [text-wrap:balance] max-w-[18ch]">
              One trust layer. Four{' '}
              <span className="italic font-normal text-secondary inline-block">
                interconnected&nbsp;engines.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-text-gray max-w-xl leading-relaxed">
              Every fare submission, safety alert, itinerary recalibration, and homestay audit is anchored to a cryptographic KARWAN ID protocol.
            </p>

            {/* Active Tooltip Info Card if icon hovered */}
            {hoveredModule ? (
              <div className="p-4 rounded-2xl border bg-surface-container-lowest shadow-floating animate-fadeIn transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-serif font-bold text-base text-primary">
                    {modules[hoveredModule].name}
                  </h4>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${modules[hoveredModule].color}`}>
                    {modules[hoveredModule].metric}
                  </span>
                </div>
                <div className="text-xs font-medium text-secondary mb-1">
                  {modules[hoveredModule].tagline}
                </div>
                <p className="text-xs text-text-gray leading-relaxed">
                  {modules[hoveredModule].desc}
                </p>
              </div>
            ) : (
              <div className="pt-2">
                <button
                  onClick={scrollToHowItWorks}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                >
                  <span>See how it connects on your journey</span>
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </button>
              </div>
            )}
          </div>

          {/* 6. Concentric Rings Orbit Graphic: 3 rings (120px, 200px, 280px radius), speeds 20s, 30s, 40s, hover pauses */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] flex items-center justify-center group select-none">
              {/* Ring 3 (Radius ~280px, Diameter ~560px) - 40s linear speed */}
              <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[540px] md:h-[540px] rounded-full border border-dashed border-surface-container-highest animate-orbit-ring-3 group-hover:[animation-play-state:paused]">
                {/* Ground Truth Icon at bottom */}
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 cursor-pointer"
                  onMouseEnter={() => setHoveredModule('groundtruth')}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div
                    className="w-11 h-11 rounded-full bg-white border border-purple-300 shadow-md flex items-center justify-center text-purple-700 animate-counter-rotate-3 group-hover:[animation-play-state:paused] hover:scale-110 transition-transform"
                    title="Ground Truth: Stay Utility Telemetry"
                  >
                    <span className="material-symbols-outlined text-xl">verified_user</span>
                  </div>
                </div>
              </div>

              {/* Ring 2 (Radius ~200px, Diameter ~400px) - 30s linear speed */}
              <div className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[390px] md:h-[390px] rounded-full border border-dashed border-surface-container-high animate-orbit-ring-2 group-hover:[animation-play-state:paused]">
                {/* Auto-heal Icon at top */}
                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 cursor-pointer"
                  onMouseEnter={() => setHoveredModule('autoheal')}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div
                    className="w-11 h-11 rounded-full bg-white border border-amber-300 shadow-md flex items-center justify-center text-amber-700 animate-counter-rotate-2 group-hover:[animation-play-state:paused] hover:scale-110 transition-transform"
                    title="Auto-heal: Dynamic Recalibration"
                  >
                    <span className="material-symbols-outlined text-xl">auto_fix_high</span>
                  </div>
                </div>

                {/* TrustRadar Icon at right */}
                <div
                  className="absolute -right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                  onMouseEnter={() => setHoveredModule('trustradar')}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div
                    className="w-11 h-11 rounded-full bg-white border border-blue-300 shadow-md flex items-center justify-center text-blue-700 animate-counter-rotate-2 group-hover:[animation-play-state:paused] hover:scale-110 transition-transform"
                    title="TrustRadar: Community Safety"
                  >
                    <span className="material-symbols-outlined text-xl">shield_with_heart</span>
                  </div>
                </div>
              </div>

              {/* Ring 1 (Radius ~120px, Diameter ~240px) - 20s linear speed */}
              <div className="absolute w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-surface-container-high animate-orbit-ring-1 group-hover:[animation-play-state:paused]">
                {/* LiveTrail Icon at left */}
                <div
                  className="absolute -left-5 top-1/2 -translate-y-1/2 cursor-pointer"
                  onMouseEnter={() => setHoveredModule('livetrail')}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div
                    className="w-11 h-11 rounded-full bg-white border border-emerald-300 shadow-md flex items-center justify-center text-emerald-700 animate-counter-rotate-1 group-hover:[animation-play-state:paused] hover:scale-110 transition-transform"
                    title="LiveTrail: Transit & Going-Fares"
                  >
                    <span className="material-symbols-outlined text-xl">navigation</span>
                  </div>
                </div>
              </div>

              {/* Center KARWAN ID Seal with Slow Pulse */}
              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-primary text-white shadow-floating flex flex-col items-center justify-center p-3 border-2 border-secondary/40 text-center animate-pulse-subtle">
                <div className="scale-75 sm:scale-90 origin-center">
                  <Logo variant="white" size="sm" to="/" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase text-secondary-fixed mt-1">
                  KARWAN ID
                </span>
                <span className="text-[8px] sm:text-[9px] text-white/50 tracking-wider">
                  VERIFIED PROTOCOL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
