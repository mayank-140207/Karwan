import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, CheckCircleIcon, LocationIcon, ShieldCheckIcon, RefreshIcon, HomeIcon } from '../common/Icons';

export default function LiveProductDemo({ activeTab = 0, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(activeTab);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setSelectedTab(activeTab);
  }, [activeTab]);

  const tabs = [
    {
      id: 'livetrail',
      title: 'LiveTrail',
      desc: 'Transit & Fares',
      pill: 'LT',
      pillBg: 'bg-emerald-600 text-white',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      tagline: 'Real going-fares. Zero tourist markups.',
      subline: 'Community-audited transit intelligence before stepping onto the street.',
      url: 'karwan.app/corridors/braj/livetrail',
      pillLabel: 'Now: Transit Telemetry'
    },
    {
      id: 'trustradar',
      title: 'TrustRadar',
      desc: 'Safety & Guides',
      pill: 'TR',
      pillBg: 'bg-teal-700 text-white',
      badgeColor: 'text-teal-700 bg-teal-50 border-teal-200',
      tagline: '94/100 street confidence. Audited guides.',
      subline: 'Crowd-verified safe corridors and accredited local artisans.',
      url: 'karwan.app/corridors/braj/trustradar',
      pillLabel: 'Now: Safety Audit'
    },
    {
      id: 'autoheal',
      title: 'Auto-heal',
      desc: 'Itinerary Recalibration',
      pill: 'AH',
      pillBg: 'bg-amber-600 text-white',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
      tagline: 'Your plan fixes itself when travel breaks.',
      subline: 'Dynamic bypass routes and alternative verified stays in seconds.',
      url: 'karwan.app/trip/itinerary/recalibrate',
      pillLabel: 'Now: Auto-heal Engine'
    },
    {
      id: 'groundtruth',
      title: 'Ground Truth',
      desc: 'Stay Verification',
      pill: 'GT',
      pillBg: 'bg-indigo-700 text-white',
      badgeColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      tagline: 'Sensor-proven water, power and room specs.',
      subline: 'Real IoT telemetry verified against physical room declarations.',
      url: 'karwan.app/directory/stays/heritage-haveli',
      pillLabel: 'Now: Stay Telemetry'
    }
  ];

  // Auto-play through tabs every 6 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = 50; // update progress frequently
    const step = (interval / 6000) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const next = (selectedTab + 1) % tabs.length;
          setSelectedTab(next);
          if (typeof onTabChange === 'function') onTabChange(next);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [selectedTab, isPaused, tabs.length, onTabChange]);

  const handleSelectTab = (idx) => {
    setSelectedTab(idx);
    setProgress(0);
    if (typeof onTabChange === 'function') {
      onTabChange(idx);
    }
  };

  const currentTab = tabs[selectedTab];

  return (
    <section id="live-demo" className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200/80 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        {/* Section Heading with Italic Accent */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/60 text-slate-700 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive Software Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
            The Karwan protocol in{' '}
            <span className="font-serif italic font-normal text-primary">
              verified action.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Four interconnected engines working simultaneously to verify every mile of your journey across transit, safety, and heritage stays.
          </p>
        </div>

        {/* Top Module Switcher Dock (Concilio-style tabs) */}
        <div className="max-w-3xl mx-auto bg-slate-200/70 p-1.5 rounded-2xl border border-slate-300/60 shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-8">
          {tabs.map((t, idx) => {
            const isCurrent = idx === selectedTab;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => handleSelectTab(idx)}
                className={`p-3 rounded-xl transition-all text-left flex flex-col justify-between relative overflow-hidden ${
                  isCurrent
                    ? 'bg-white shadow-sm border border-slate-200'
                    : 'hover:bg-white/60 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-md ${t.pillBg} font-mono text-[10px] font-bold flex items-center justify-center shrink-0`}
                  >
                    {t.pill}
                  </span>
                  <span className="text-xs font-bold text-slate-900 truncate">
                    {t.title}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 truncate mt-1">
                  {t.desc}
                </span>

                {/* Progress bar under active tab */}
                {isCurrent && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-100">
                    <div
                      className="h-full bg-primary transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Realistic Product Mockup Frame */}
        <div
          className="relative max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Browser Window Header */}
          <div className="px-5 py-3.5 bg-slate-100/90 border-b border-slate-200/80 flex items-center justify-between gap-4">
            {/* Traffic Lights */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 border border-red-500/30" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/30" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 border border-emerald-500/30" />
            </div>

            {/* URL Address Bar */}
            <div className="max-w-md w-full bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-center justify-center gap-2 font-mono shadow-2xs">
              <span className="text-slate-400 font-sans">🔒</span>
              <span className="truncate">{currentTab.url}</span>
            </div>

            {/* Now Badge & Pause/Play Indicator */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-slate-900 text-white text-[11px] font-semibold">
                {currentTab.pillLabel}
              </span>
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="text-[11px] font-medium text-slate-500 hover:text-slate-900 px-2 py-0.5 rounded border border-slate-200 bg-white"
                title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
              >
                {isPaused ? 'Play' : 'Pause'}
              </button>
            </div>
          </div>

          {/* Interactive Interface Content (Simulated Real Software Screens) */}
          <div className="p-6 sm:p-8 min-h-[460px] bg-slate-50/40 relative">
            {/* TAB 0: LIVETRAIL TRANSIT CONSOLE */}
            {selectedTab === 0 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider">
                      Active Corridor Telemetry · Braj Circuit
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      Mathura Jn. (Gate 1) → Vrindavan Bankey Bihari
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                      Live Transit Active
                    </span>
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Going-Fare (Shared)</div>
                    <div className="text-2xl font-bold text-slate-900 mt-1">₹20 – ₹25</div>
                    <div className="text-[11px] text-emerald-700 mt-0.5 font-medium">18 riders verified today</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Crowd Density</div>
                    <div className="text-2xl font-bold text-slate-900 mt-1">Moderate</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Avg 4 min auto wait</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Private Auto Estimate</div>
                    <div className="text-2xl font-bold text-slate-900 mt-1">₹120 – ₹140</div>
                    <div className="text-[11px] text-emerald-700 mt-0.5 font-medium">Zero tout markup enforced</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Corridor Safety</div>
                    <div className="text-2xl font-bold text-slate-900 mt-1">98 / 100</div>
                    <div className="text-[11px] text-emerald-700 mt-0.5 font-medium">Well-lit & patrol active</div>
                  </div>
                </div>

                {/* Waypoints Live Feed Table */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
                  <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-700 flex items-center justify-between">
                    <span>Waypoint Station</span>
                    <span>Consensus Fare & Status</span>
                  </div>
                  <div className="divide-y divide-slate-100 text-xs">
                    <div className="px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="font-semibold text-slate-900">Mathura Jn Gate 1 Auto Stand</span>
                      </div>
                      <span className="font-mono font-medium text-slate-700">₹20 fixed / rider · Prepaid Counter Verified</span>
                    </div>
                    <div className="px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="font-semibold text-slate-900">Chhatikara Intersection</span>
                      </div>
                      <span className="font-mono font-medium text-slate-700">₹15 connecting e-rickshaw · EV Hub active</span>
                    </div>
                    <div className="px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="font-semibold text-slate-900">Vidyapeeth Marg & Bankey Bihari</span>
                      </div>
                      <span className="font-mono font-medium text-slate-700">Pedestrianized · Electric cart access only</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: TRUSTRADAR COMMUNITY SAFETY */}
            {selectedTab === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-teal-700 uppercase tracking-wider">
                      Community Trust Radar · Street Audit
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      Mathura & Vrindavan Verified Confidence
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-semibold">
                    Audited by 342 Local Explorers
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-xs font-semibold text-slate-500">Night-Safety Score</span>
                    <div className="text-3xl font-bold text-slate-900 mt-1">94%</div>
                    <p className="text-xs text-slate-500 mt-2">Active street lighting verified on 98.4% of municipal poles along Mathura Road.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-xs font-semibold text-slate-500">Accredited Local Guides</span>
                    <div className="text-3xl font-bold text-slate-900 mt-1">12 Guides</div>
                    <p className="text-xs text-slate-500 mt-2">DigiLocker verified credentials, zero commission shops, fixed hourly rates.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-xs font-semibold text-slate-500">Authentic Artisans</span>
                    <div className="text-3xl font-bold text-slate-900 mt-1">38 Stalls</div>
                    <p className="text-xs text-slate-500 mt-2">Fair-price Brassware, Sanjhi paper crafts, and pure Peda sweet shops audited.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-800">RG</div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">Rajesh Gupta · Heritage Guide #G-9281</div>
                      <div className="text-xs text-slate-500">ASI Certified · 14 yrs experience · Mathura Archaeological Specialist</div>
                    </div>
                  </div>
                  <Link to="/directory/guides/rajesh-gupta" className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold">
                    View Verified Profile
                  </Link>
                </div>
              </div>
            )}

            {/* TAB 2: AUTO-HEAL RESILIENCE ENGINE */}
            {selectedTab === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-wider">
                      Resilience Engine · Dynamic Recalibration
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      Adaptive Itinerary Self-Healing
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold">
                    Auto-Heal Active
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-amber-900 uppercase">Disruption Detected · Chhatikara Chokepoint</div>
                    <div className="text-xs text-amber-800 mt-0.5">Heavy festival congestion reported on main approach road (+28 min delay).</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-xs font-semibold text-slate-500">Original Route</div>
                    <div className="text-base font-bold text-slate-400 line-through mt-1">Main Vrindavan Highway</div>
                    <div className="text-xs text-red-500 mt-1">Blocked by procession (Est. 42 min)</div>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 shadow-2xs">
                    <div className="text-xs font-semibold text-emerald-700">Auto-Healed Bypass (Recommended)</div>
                    <div className="text-base font-bold text-slate-900 mt-1">Vidyapeeth Marg Outer Ring</div>
                    <div className="text-xs text-emerald-700 mt-1">Clear transit (+4 min only) · 3 verified autos available</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: GROUND TRUTH STAY VERIFICATION */}
            {selectedTab === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-indigo-700 uppercase tracking-wider">
                      Ground Truth Verification · Heritage Stays
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      The Heritage Haveli · Telemetry Status
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200 text-xs font-semibold">
                    100% Verified Specifications
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-[11px] font-semibold text-slate-500">Water Continuity</span>
                    <div className="text-xl font-bold text-slate-900 mt-1">100% Solar Hot</div>
                    <div className="text-[11px] text-emerald-700 mt-0.5">Sensor confirmed 12m ago</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-[11px] font-semibold text-slate-500">Power Continuity</span>
                    <div className="text-xl font-bold text-slate-900 mt-1">24/7 Silent Gen</div>
                    <div className="text-[11px] text-emerald-700 mt-0.5">Inverter battery 99%</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-[11px] font-semibold text-slate-500">Wi-Fi Telemetry</span>
                    <div className="text-xl font-bold text-slate-900 mt-1">82 Mbps Fibernet</div>
                    <div className="text-[11px] text-emerald-700 mt-0.5">Tested in courtyard</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div className="text-xs text-slate-600">
                    <strong>Audited by Priya S. (4h ago):</strong> "Photos match actual courtyard specs. Hot water runs instantly."
                  </div>
                  <Link to="/directory/stays/heritage-haveli" className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold shrink-0 ml-4">
                    View Haveli
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Floating Toast Cards (Concilio-style layered interactive alerts) */}
          <div className="absolute top-16 left-4 pointer-events-none hidden md:block animate-bounce-subtle">
            <div className="p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center gap-2.5 max-w-xs">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <CheckIcon className="w-3.5 h-3.5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">₹25 Fare verified by 18 riders</div>
                <div className="text-[10px] text-slate-500">Zero tout markups detected</div>
              </div>
            </div>
          </div>

          <div className="absolute top-28 right-4 pointer-events-none hidden md:block animate-bounce-subtle">
            <div className="p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center gap-2.5 max-w-xs">
              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <CheckIcon className="w-3.5 h-3.5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">Trust score: 94/100</div>
                <div className="text-[10px] text-slate-500">Vidyapeeth Marg · Police patrol active</div>
              </div>
            </div>
          </div>

          {/* Bottom-left Docked Floating Dark Caption Card (Concilio-style 01/04 card) */}
          <div className="p-4 bg-slate-900 text-white border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                0{selectedTab + 1} / 04 · {currentTab.title}
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                {currentTab.tagline}
              </div>
              <div className="text-xs text-slate-400">
                {currentTab.subline}
              </div>
            </div>
            <Link
              to={currentTab.url}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors shrink-0"
            >
              <span>Explore engine</span>
              <ArrowRightIcon className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
