import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, SearchIcon, LocationIcon, SparklesIcon } from '../common/Icons';

export default function HeroSection({ onSelectDemoTab }) {
  const [activePulseCells, setActivePulseCells] = useState([2, 5, 8, 12]);

  // Subtle randomized ambient tile glow (low CPU, purely visual like Concilio reference)
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndices = [];
      while (randomIndices.length < 3) {
        const r = Math.floor(Math.random() * 16);
        if (!randomIndices.includes(r)) randomIndices.push(r);
      }
      setActivePulseCells(randomIndices);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToDemo = (tabIndex = 0) => {
    if (typeof onSelectDemoTab === 'function') {
      onSelectDemoTab(tabIndex);
    }
    const demoSection = document.getElementById('live-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const engines = [
    {
      id: 'livetrail',
      title: 'LiveTrail',
      desc: 'Transit & Fares',
      color: 'bg-emerald-600 text-white',
      badge: 'LT',
      tabIndex: 0
    },
    {
      id: 'trustradar',
      title: 'TrustRadar',
      desc: 'Safety & Guides',
      color: 'bg-teal-700 text-white',
      badge: 'TR',
      tabIndex: 1
    },
    {
      id: 'autoheal',
      title: 'Auto-heal',
      desc: 'Itinerary Recalibration',
      color: 'bg-amber-600 text-white',
      badge: 'AH',
      tabIndex: 2
    },
    {
      id: 'groundtruth',
      title: 'Ground Truth',
      desc: 'Stay Verification',
      color: 'bg-indigo-700 text-white',
      badge: 'GT',
      tabIndex: 3
    }
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-white border-b border-slate-100">
      {/* 80px Faint Square Grid Background with Soft Illuminated Green Blocks (Concilio style) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Ambient glowing cluster behind headline */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[640px] h-[320px] pointer-events-none opacity-40 blur-3xl bg-gradient-to-r from-emerald-100/60 via-teal-100/40 to-transparent" />

        {/* Grid cluster cells with gentle green illumination */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[640px] grid grid-cols-4 gap-[80px] opacity-60">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={`w-[79px] h-[79px] rounded-sm transition-all duration-1000 ${
                activePulseCells.includes(i)
                  ? 'bg-emerald-300/30 shadow-sm'
                  : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Centered Hero Content */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full relative z-10 flex flex-col items-center text-center my-auto">
        {/* Top Pill Announcement Badge */}
        <Link
          to="/directory"
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow transition-all text-xs text-slate-600 mb-8 group"
        >
          <span className="px-2 py-0.5 rounded-full bg-primary text-white font-semibold text-[10px] tracking-wide uppercase">
            Live Protocol
          </span>
          <span className="font-medium text-slate-800">
            Real-time Braj corridor telemetry active
          </span>
          <ArrowRightIcon className="w-3 h-3 text-slate-400 group-hover:text-slate-800 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {/* Large Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-slate-900 tracking-tight leading-[1.08] max-w-5xl mx-auto text-balance">
          Travel with the trust of a local who’s{' '}
          <span className="font-serif italic font-normal text-primary">
            already been there.
          </span>
        </h1>

        {/* Supporting Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Real-time transit fares, community safety radar, and telemetrically verified heritage homestays across India.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            to="/trip/plan/route"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-sm hover:shadow transition-all group"
          >
            <span>Plan your route</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <button
            type="button"
            onClick={() => scrollToDemo(0)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 text-sm font-semibold shadow-xs hover:shadow-sm transition-all"
          >
            <span>See live product demo</span>
          </button>
        </div>

        {/* Micro-guarantee Subcaption */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
          <SparklesIcon className="w-3.5 h-3.5 text-primary" />
          <span>1,280+ community reports audited across Mathura, Vrindavan & Agra.</span>
        </div>
      </div>

      {/* Bottom Floating Module Dock (Concilio-style 4-Engine Segmented Bar) */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full relative z-10 pt-10">
        <div className="max-w-4xl mx-auto bg-slate-100/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/80 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-1.5">
          {engines.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => scrollToDemo(e.tabIndex)}
              className="p-3 rounded-xl bg-white/70 hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-xs transition-all text-left flex items-center gap-3 group"
            >
              <span
                className={`w-7 h-7 rounded-lg ${e.color} font-mono text-[10px] font-bold flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform`}
              >
                {e.badge}
              </span>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors truncate">
                  {e.title}
                </div>
                <div className="text-[11px] text-slate-500 truncate">
                  {e.desc}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
