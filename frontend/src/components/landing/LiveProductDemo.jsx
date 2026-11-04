import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function LiveProductDemo({ activeTab, onTabChange }) {
  const [currentTab, setCurrentTab] = useState(activeTab || 0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const DURATION_MS = 6000;
  const INTERVAL_MS = 60;

  // Sync external tab changes if passed
  useEffect(() => {
    if (activeTab !== undefined && activeTab !== currentTab) {
      setCurrentTab(activeTab);
      setProgress(0);
    }
  }, [activeTab]);

  // Tab auto-play timer and progress bar
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => prev + (INTERVAL_MS / DURATION_MS) * 100);
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // When progress completes, cleanly advance to next tab
  useEffect(() => {
    if (progress >= 100) {
      setProgress(0);
      setCurrentTab((prev) => {
        const next = (prev + 1) % 4;
        if (onTabChange) {
          // Defer callback to avoid synchronous setState during render
          setTimeout(() => onTabChange(next), 0);
        }
        return next;
      });
    }
  }, [progress, onTabChange]);

  const handleSelectTab = (idx) => {
    setCurrentTab(idx);
    setProgress(0);
    setIsPlaying(false); // Pause on user click so they can inspect
    if (onTabChange) {
      setTimeout(() => onTabChange(idx), 0);
    }
  };

  const tabs = [
    {
      id: 0,
      name: 'LiveTrail',
      tagline: 'Transit & Fares',
      icon: 'navigation',
      toast: {
        title: 'Fare verified by 12 riders',
        sub: 'Mathura Jn. → Vrindavan: ₹20-25',
        icon: 'verified',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
      },
      link: '/trip/livetrail'
    },
    {
      id: 1,
      name: 'TrustRadar',
      tagline: 'Safety Scores',
      icon: 'shield_with_heart',
      toast: {
        title: 'Trust score updated: 94/100',
        sub: 'Well-lit corridor verified on Vidyapeeth Marg',
        icon: 'security',
        color: 'text-blue-700 bg-blue-50 border-blue-200'
      },
      link: '/trip/trustradar'
    },
    {
      id: 2,
      name: 'Auto-heal',
      tagline: 'Itinerary Sync',
      icon: 'auto_fix_high',
      toast: {
        title: 'Plan re-routed: stop closed',
        sub: 'Parikrama Marg bypassed · +4 mins only',
        icon: 'alt_route',
        color: 'text-amber-700 bg-amber-50 border-amber-200'
      },
      link: '/trip/itinerary'
    },
    {
      id: 3,
      name: 'Ground Truth',
      tagline: 'Verified Stays',
      icon: 'verified_user',
      toast: {
        title: 'Water: working · Power: on',
        sub: 'Live sensor telemetry confirmed 14m ago',
        icon: 'sensors',
        color: 'text-purple-700 bg-purple-50 border-purple-200'
      },
      link: '/directory'
    }
  ];

  const activeTabData = tabs[currentTab];

  return (
    <section id="live-demo" className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low/60 border-t border-surface-container-high/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary mb-3">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span>INTERACTIVE PRODUCT SIMULATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            The Karwan protocol in action.
          </h2>
          <p className="font-sans text-base sm:text-lg text-text-gray mt-3">
            Four interconnected engines working simultaneously to verify every mile of your journey.
          </p>
        </div>

        {/* Browser Frame Mockup */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-floating border border-surface-container-high overflow-hidden">
          {/* Browser Header Bar */}
          <div className="px-5 py-3.5 bg-surface-container-lowest border-b border-surface-container-high flex items-center justify-between gap-4">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
            </div>

            {/* URL Pill */}
            <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-surface-container text-xs text-text-gray font-mono border border-surface-container-high">
              <span className="material-symbols-outlined text-xs text-secondary">lock</span>
              <span>karwan.app/live-demo/braj-corridor</span>
            </div>

            {/* Play / Pause Toggle Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-primary transition-colors"
                title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
              >
                <span className="material-symbols-outlined text-sm">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
                <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
            </div>
          </div>

          {/* Tab Navigation with Progress Bars */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-surface-container-high bg-surface-container-low/40">
            {tabs.map((tab, idx) => {
              const isSelected = idx === currentTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(idx)}
                  className={`relative p-3.5 md:p-4 text-left transition-all ${
                    isSelected ? 'bg-white' : 'hover:bg-white/60 text-text-gray'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`material-symbols-outlined text-base ${isSelected ? 'text-secondary' : 'text-text-gray'}`}>
                      {tab.icon}
                    </span>
                    <span className={`font-serif font-bold text-sm ${isSelected ? 'text-primary' : 'text-text-gray'}`}>
                      {tab.name}
                    </span>
                  </div>
                  <div className="text-[11px] text-text-gray mt-0.5 hidden sm:block">
                    {tab.tagline}
                  </div>

                  {/* Active Progress Bar */}
                  {isSelected && (
                    <div className="absolute bottom-0 inset-x-0 h-0.5 bg-surface-container-high overflow-hidden">
                      <div
                        className="h-full bg-secondary transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Screen Content Container with Relative Toast Placement */}
          <div className="relative min-h-[460px] p-6 md:p-10 bg-background/50 flex flex-col justify-between">
            {/* Dynamic Floating Toast Card */}
            <div className="absolute top-6 right-6 z-20 transition-all duration-300 animate-fadeIn">
              <div className={`p-3.5 rounded-xl border shadow-ambient backdrop-blur-md flex items-center gap-3 bg-white/95 ${activeTabData.toast.color}`}>
                <span className="material-symbols-outlined text-xl shrink-0">
                  {activeTabData.toast.icon}
                </span>
                <div>
                  <div className="font-serif font-bold text-xs text-primary">
                    {activeTabData.toast.title}
                  </div>
                  <div className="text-[11px] text-text-gray">
                    {activeTabData.toast.sub}
                  </div>
                </div>
              </div>
            </div>

            {/* TAB 0: LiveTrail Real Screen Mockup */}
            {currentTab === 0 && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-container-high">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                      Active Corridor Telemetry
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-primary mt-1">
                      Mathura Jn. → Vrindavan Bankey Bihari
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      14 Verified Riders Online
                    </span>
                  </div>
                </div>

                {/* Live Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Fare Intelligence Box */}
                  <div className="p-4 rounded-xl bg-white border border-surface-container-high shadow-sm">
                    <div className="flex items-center justify-between text-xs text-text-gray mb-1">
                      <span>Verified Auto Going-Rate</span>
                      <span className="text-secondary font-semibold">98% Consensus</span>
                    </div>
                    <div className="text-2xl font-serif font-bold text-primary">
                      ₹20 – ₹25 <span className="text-xs font-sans font-normal text-text-gray">/ passenger</span>
                    </div>
                    <div className="text-[11px] text-emerald-700 bg-emerald-50 rounded px-2 py-1 mt-2 inline-block">
                      Tourist quote without Karwan: ₹120 (4x markup averted)
                    </div>
                  </div>

                  {/* Crowding Gauge */}
                  <div className="p-4 rounded-xl bg-white border border-surface-container-high shadow-sm">
                    <div className="flex items-center justify-between text-xs text-text-gray mb-1">
                      <span>Corridor Crowding</span>
                      <span className="text-amber-700 font-semibold">Moderate</span>
                    </div>
                    <div className="text-2xl font-serif font-bold text-primary">
                      42% <span className="text-xs font-sans font-normal text-text-gray">capacity</span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-1.5 mt-3">
                      <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '42%' }} />
                    </div>
                  </div>

                  {/* Next Vehicle ETA */}
                  <div className="p-4 rounded-xl bg-white border border-surface-container-high shadow-sm">
                    <div className="flex items-center justify-between text-xs text-text-gray mb-1">
                      <span>Next Verified Electric Auto</span>
                      <span className="text-secondary font-semibold">Reg #UP85-AT-4019</span>
                    </div>
                    <div className="text-2xl font-serif font-bold text-secondary">
                      3 mins <span className="text-xs font-sans font-normal text-text-gray">away at Gate 2</span>
                    </div>
                    <div className="text-[11px] text-text-gray mt-2">
                      Driver: Ram Kishan (4.9★ · 840 verified trips)
                    </div>
                  </div>
                </div>

                {/* Waypoint Trail Progress */}
                <div className="p-4 rounded-xl bg-white border border-surface-container-high shadow-sm">
                  <div className="text-xs font-semibold text-text-gray uppercase tracking-wider mb-3">
                    Active Waypoints on NH-19 Transit Lane
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-secondary" />
                      <span className="font-semibold text-primary">Mathura Jn. (P1)</span>
                      <span className="text-text-gray">11:15 AM (Departed)</span>
                    </div>
                    <div className="hidden sm:block flex-1 border-t-2 border-dashed border-secondary/40 mx-2" />
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                      <span className="font-semibold text-primary">Chhatikara Crossing</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">On Track</span>
                    </div>
                    <div className="hidden sm:block flex-1 border-t-2 border-dashed border-surface-container-high mx-2" />
                    <div className="flex items-center gap-2 text-text-gray">
                      <span className="w-3 h-3 rounded-full bg-surface-container-high" />
                      <span>Vrindavan Vidyapeeth</span>
                      <span>ETA 11:42 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: TrustRadar Real Screen Mockup */}
            {currentTab === 1 && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-container-high">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                      Community Safety & Guide Discovery
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-primary mt-1">
                      Bankey Bihari Mandir Sector TrustRadar
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">shield</span>
                    Community Confidence Score: 94/100
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Safety Radar Checklist */}
                  <div className="p-4 rounded-xl bg-white border border-surface-container-high shadow-sm space-y-3">
                    <div className="text-xs font-semibold text-text-gray uppercase tracking-wider">
                      Ground Safety Indicators
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
                        <span className="flex items-center gap-2 text-primary font-medium">
                          <span className="material-symbols-outlined text-base text-secondary">lightbulb</span>
                          Vidyapeeth Marg Street Lighting
                        </span>
                        <span className="font-semibold text-emerald-700">100% Verified Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
                        <span className="flex items-center gap-2 text-primary font-medium">
                          <span className="material-symbols-outlined text-base text-secondary">group</span>
                          Solo Traveller Friendly Corridor
                        </span>
                        <span className="font-semibold text-emerald-700">High Presence</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
                        <span className="flex items-center gap-2 text-primary font-medium">
                          <span className="material-symbols-outlined text-base text-secondary">local_police</span>
                          Tourist Assistance Booth
                        </span>
                        <span className="text-text-gray">Gate 3 (120m away)</span>
                      </div>
                    </div>
                  </div>

                  {/* Accredited Guide Card */}
                  <div className="p-4 rounded-xl bg-white border border-surface-container-high shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-text-gray mb-2">
                        <span>Verified Cultural Guide</span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-[11px] font-semibold">
                          KARWAN ID #9821
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-lg text-primary">Rajesh Gupta</h4>
                      <p className="text-xs text-text-gray mt-1 leading-relaxed">
                        Licensed Archaeological Survey of India guide specializing in Braj heritage architecture and temple history.
                      </p>
                      <div className="flex items-center gap-3 mt-3 text-xs text-text-gray">
                        <span className="font-semibold text-primary">★ 4.9 (340 audits)</span>
                        <span>· Hindi, English, Sanskrit</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-surface-container-high flex items-center justify-between text-xs mt-3">
                      <span className="text-text-gray">Government fixed rate guarantee</span>
                      <span className="text-secondary font-semibold">Zero Commission Scheme</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Auto-heal Real Screen Mockup */}
            {currentTab === 2 && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-container-high">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                      Dynamic Itinerary Recalibration
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-primary mt-1">
                      Adaptive Detour: Religious Procession Detected
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">healing</span>
                    Itinerary Recalibrated Automatically
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <strong>Live Obstruction Alert:</strong> Chhatikara Road pedestrian density surged past 85% due to an impromptu Janmashtami sankirtan procession. Estimated traditional delay: <strong>38 minutes</strong>.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-white border border-surface-container-high opacity-75">
                    <div className="text-text-gray font-semibold line-through mb-1">Original Route (Congested)</div>
                    <p className="text-primary font-medium">Chhatikara Main Road → Parikrama Marg</p>
                    <div className="mt-3 text-red-600 font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">block</span>
                      Gridlocked (Avg speed: 3 km/h)
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border-2 border-secondary shadow-sm">
                    <div className="text-secondary font-semibold mb-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      Auto-heal Suggested Detour (Active)
                    </div>
                    <p className="text-primary font-medium font-serif">Vrindavan Bypass → Bhaktivedanta Swami Marg</p>
                    <div className="mt-3 text-emerald-700 font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      Clear transit · 34 mins preserved
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Ground Truth Real Screen Mockup */}
            {currentTab === 3 && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-container-high">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">
                      Stay Utility Telemetry & Audits
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-primary mt-1">
                      The Heritage Haveli · Live Stay Verification
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200 text-xs font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    KARWAN ID #HS-4012 Certified
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-surface-container-high shadow-sm">
                    <div className="flex items-center gap-2 text-xs text-text-gray mb-1">
                      <span className="material-symbols-outlined text-secondary text-base">wifi</span>
                      <span>Wi-Fi Telemetry</span>
                    </div>
                    <div className="text-xl font-serif font-bold text-primary">78 Mbps</div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-1">Fiber Speed Verified</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-surface-container-high shadow-sm">
                    <div className="flex items-center gap-2 text-xs text-text-gray mb-1">
                      <span className="material-symbols-outlined text-secondary text-base">water_drop</span>
                      <span>Water Continuity</span>
                    </div>
                    <div className="text-xl font-serif font-bold text-primary">Continuous</div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-1">Hot Water Sensor: Active</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-surface-container-high shadow-sm">
                    <div className="flex items-center gap-2 text-xs text-text-gray mb-1">
                      <span className="material-symbols-outlined text-secondary text-base">bolt</span>
                      <span>Power Backup</span>
                    </div>
                    <div className="text-xl font-serif font-bold text-primary">100% Up</div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-1">25kVA Genset Standby</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-surface-container-high shadow-sm flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold">
                      📸
                    </span>
                    <div>
                      <div className="font-semibold text-primary">Geotagged Guest Audit Proof</div>
                      <div className="text-text-gray">Verified 4 hours ago by guest Priya S. (No filters, raw EXIF match)</div>
                    </div>
                  </div>
                  <Link to="/directory/stays/heritage-haveli" className="text-secondary font-semibold hover:underline hidden sm:inline">
                    View Full Stay Telemetry →
                  </Link>
                </div>
              </div>
            )}

            {/* Bottom Actions and Sample Data Caption */}
            <div className="pt-6 border-t border-surface-container-high/60 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <span className="text-xs text-text-gray/80 italic">
                * Sample data shown for prototype demonstration purposes.
              </span>
              <Link
                to={activeTabData.link}
                className="px-5 py-2 rounded-full bg-primary hover:bg-primary-container text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Launch {activeTabData.name} in App</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

