import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { Icons } from '../common/Icons';

export default function OrbitTrustLayer() {
  const [hoveredModule, setHoveredModule] = useState(null);

  const modules = {
    livetrail: {
      name: 'LiveTrail',
      tagline: 'Real-Time Transit & Fares',
      metric: '98% Fare Consensus',
      desc: 'Crowdsourced going-fare benchmark and crowding telemetry reported by live riders.',
      color: 'border-emerald-400 text-emerald-400 bg-emerald-950/80'
    },
    trustradar: {
      name: 'TrustRadar',
      tagline: 'Community Safety Scoring',
      metric: '94/100 Street Safety Score',
      desc: 'Real-time street lighting intelligence and accredited local cultural guide discovery.',
      color: 'border-blue-400 text-blue-400 bg-blue-950/80'
    },
    autoheal: {
      name: 'Auto-heal',
      tagline: 'Dynamic Itinerary Recalibration',
      metric: '38 Mins Saved on Detour',
      desc: 'Proactive alternate routing and verified homestay rebalancing during sudden closures.',
      color: 'border-amber-400 text-amber-400 bg-amber-950/80'
    },
    groundtruth: {
      name: 'Ground Truth',
      tagline: 'Stay Utility Telemetry',
      desc: 'Live IoT telemetry and geotagged guest audits verifying continuous water and electricity.',
      metric: '100% Utility Score Verified',
      color: 'border-purple-400 text-purple-400 bg-purple-950/80'
    }
  };

  const protocolPillars = [
    {
      title: '1,280+ Audited Nodes',
      desc: 'Cryptographically verified data points across the Braj corridor.'
    },
    {
      title: 'Zero Tout Kickbacks',
      desc: 'Direct connection to municipal stands and artisan guilds.'
    },
    {
      title: 'Dynamic Recalibration',
      desc: 'Proactive route healing without manual intervention.'
    },
    {
      title: 'IoT Utility Telemetry',
      desc: 'Continuous auditing of water, backup power, and Wi-Fi.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#090e14] text-white border-y border-white/10 relative overflow-hidden">
      {/* Background Subtle Grid & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#2C6E49_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(44,110,73,0.20)_0%,rgba(14,40,75,0.28)_50%,transparent_75%)] pointer-events-none blur-3xl z-0" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Protocol Architecture Editorial Content */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-emerald-400 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>PROTOCOL ARCHITECTURE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
              One trust layer. Four{' '}
              <span className="italic font-normal text-emerald-400 inline-block">
                interconnected&nbsp;engines.
              </span>
            </h2>

            <p className="font-sans text-base text-white/70 max-w-xl leading-relaxed">
              Every fare submission, safety alert, itinerary recalibration, and homestay audit is anchored to a cryptographic KARWAN ID protocol.
            </p>

            {/* 2x2 Protocol Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {protocolPillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2">
                    <Icons.CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h4 className="font-serif font-bold text-sm text-white">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed pl-6">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Active Hover Tooltip or White Button */}
            {hoveredModule ? (
              <div className="p-4 rounded-2xl border bg-white/10 backdrop-blur-md border-white/20 shadow-floating animate-fadeIn transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-serif font-bold text-base text-white">
                    {modules[hoveredModule].name}
                  </h4>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${modules[hoveredModule].color}`}>
                    {modules[hoveredModule].metric}
                  </span>
                </div>
                <div className="text-xs font-medium text-emerald-400 mb-1">
                  {modules[hoveredModule].tagline}
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  {modules[hoveredModule].desc}
                </p>
              </div>
            ) : (
              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/directory"
                  className="px-6 py-3 rounded-full bg-white text-primary font-semibold text-xs sm:text-sm hover:bg-emerald-400 hover:text-primary transition-all shadow-ambient flex items-center gap-2 group"
                >
                  <span>Explore Braj Corridor</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#how-it-works"
                  className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                >
                  How it works ↓
                </a>
              </div>
            )}
          </div>

          {/* Right Side: Orbit Graphic with Concentric Rings */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] md:w-[520px] md:h-[520px] flex items-center justify-center group select-none">
              {/* Ring 3 (Ground Truth) */}
              <div className="absolute w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-white/15 animate-orbit-ring-3 group-hover:[animation-play-state:paused]">
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 cursor-pointer"
                  onMouseEnter={() => setHoveredModule('groundtruth')}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div
                    className="w-11 h-11 rounded-full bg-[#111927] border border-purple-400 shadow-md flex items-center justify-center text-purple-400 animate-counter-rotate-3 group-hover:[animation-play-state:paused] hover:scale-110 transition-transform"
                    title="Ground Truth: Stay Utility Telemetry"
                  >
                    <Icons.ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Ring 2 (Auto-heal & TrustRadar) */}
              <div className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[370px] md:h-[370px] rounded-full border border-dashed border-white/20 animate-orbit-ring-2 group-hover:[animation-play-state:paused]">
                {/* Auto-heal */}
                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 cursor-pointer"
                  onMouseEnter={() => setHoveredModule('autoheal')}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div
                    className="w-11 h-11 rounded-full bg-[#111927] border border-amber-400 shadow-md flex items-center justify-center text-amber-400 animate-counter-rotate-2 group-hover:[animation-play-state:paused] hover:scale-110 transition-transform"
                    title="Auto-heal: Dynamic Recalibration"
                  >
                    <Icons.Refresh className="w-5 h-5" />
                  </div>
                </div>

                {/* TrustRadar */}
                <div
                  className="absolute -right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                  onMouseEnter={() => setHoveredModule('trustradar')}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div
                    className="w-11 h-11 rounded-full bg-[#111927] border border-blue-400 shadow-md flex items-center justify-center text-blue-400 animate-counter-rotate-2 group-hover:[animation-play-state:paused] hover:scale-110 transition-transform"
                    title="TrustRadar: Community Safety"
                  >
                    <Icons.Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Ring 1 (LiveTrail) */}
              <div className="absolute w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-white/25 animate-orbit-ring-1 group-hover:[animation-play-state:paused]">
                <div
                  className="absolute -left-5 top-1/2 -translate-y-1/2 cursor-pointer"
                  onMouseEnter={() => setHoveredModule('livetrail')}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div
                    className="w-11 h-11 rounded-full bg-[#111927] border border-emerald-400 shadow-md flex items-center justify-center text-emerald-400 animate-counter-rotate-1 group-hover:[animation-play-state:paused] hover:scale-110 transition-transform"
                    title="LiveTrail: Transit & Going-Fares"
                  >
                    <Icons.Location className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Center KARWAN ID Seal with Slow Pulse */}
              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#0a0f18] text-white shadow-2xl flex flex-col items-center justify-center p-3 border-2 border-emerald-400 text-center animate-pulse-subtle">
                <div className="scale-75 sm:scale-90 origin-center">
                  <Logo variant="white" size="sm" to="/" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase text-emerald-400 mt-1">
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