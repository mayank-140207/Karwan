import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { searchCities, FALLBACK_CITIES } from '../../lib/supabase';

export default function HeroSection({ onSelectDemoTab }) {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState(FALLBACK_CITIES.slice(0, 5));
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef(null);
  const gridContainerRef = useRef(null);
  const [activeTelemetryTab, setActiveTelemetryTab] = useState(0);

  // Dynamic green grid cells (at most 5 at once, 70px cells)
  // Pure DOM manipulation avoids React re-renders and eliminates main-thread TBT
  useEffect(() => {
    let isCancelled = false;
    let timerId = null;
    const activeDivs = new Set();

    const scheduleNext = () => {
      if (isCancelled) return;
      const delay = Math.floor(600 + Math.random() * 300); // 600 to 900ms

      timerId = setTimeout(() => {
        if (isCancelled) return;
        const container = gridContainerRef.current;
        if (activeDivs.size < 5 && container && sectionRef.current) {
          const width = sectionRef.current.clientWidth || 1280;
          const height = sectionRef.current.clientHeight || 700;
          const maxCols = Math.max(1, Math.floor(width / 70));
          const maxRows = Math.max(1, Math.floor(height / 70));

          const col = Math.floor(Math.random() * maxCols);
          const row = Math.floor(Math.random() * maxRows);

          const cellEl = document.createElement('div');
          cellEl.className = 'absolute rounded-sm pointer-events-none transition-opacity';
          cellEl.style.left = `${col * 70}px`;
          cellEl.style.top = `${row * 70}px`;
          cellEl.style.width = '70px';
          cellEl.style.height = '70px';
          cellEl.style.backgroundColor = 'rgba(40, 106, 70, 0.2)'; // 20% green opacity
          cellEl.style.opacity = '0';
          cellEl.style.transitionDuration = '400ms';
          cellEl.style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';

          container.appendChild(cellEl);
          activeDivs.add(cellEl);

          // Trigger fade in to 20% green
          requestAnimationFrame(() => {
            cellEl.style.opacity = '1';
          });

          // Hold for 400ms (fade-in) + 800ms (hold) = 1200ms, then fade out over 800ms
          const fadeOutTimer = setTimeout(() => {
            if (activeDivs.has(cellEl)) {
              cellEl.style.transitionDuration = '800ms';
              cellEl.style.opacity = '0';
            }
          }, 1200);

          // Remove element after 1200ms + 800ms = 2000ms
          const removeTimer = setTimeout(() => {
            if (activeDivs.has(cellEl)) {
              activeDivs.delete(cellEl);
              if (cellEl.parentNode) {
                cellEl.parentNode.removeChild(cellEl);
              }
            }
          }, 2000);

          cellEl._timers = [fadeOutTimer, removeTimer];
        }
        scheduleNext();
      }, delay);
    };

    scheduleNext();

    return () => {
      isCancelled = true;
      if (timerId) clearTimeout(timerId);
      activeDivs.forEach((div) => {
        if (div._timers) div._timers.forEach(clearTimeout);
        if (div.parentNode) div.parentNode.removeChild(div);
      });
      activeDivs.clear();
    };
  }, []);

  // GSAP Headline entrance animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-headline-line',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out'
        }
      );

      gsap.fromTo(
        '.hero-telemetry-card',
        { y: 30, opacity: 0, rotateY: -8, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 0.85,
          delay: 0.2,
          ease: 'power2.out'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Close search dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search cities with debounce
  useEffect(() => {
    let isCancelled = false;
    const timeout = setTimeout(async () => {
      const results = await searchCities(searchQuery);
      if (!isCancelled) {
        setSuggestions(results);
      }
    }, 180);
    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [searchQuery]);

  const handleSelectCity = (cityName) => {
    setShowDropdown(false);
    navigate(`/explore/${encodeURIComponent(cityName)}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim().length > 0) {
      handleSelectCity(searchQuery.trim());
    } else if (suggestions.length > 0) {
      handleSelectCity(suggestions[0].name);
    }
  };

  const moduleChips = [
    { id: 0, label: 'LiveTrail', sub: 'Transit & Fares', icon: 'navigation' },
    { id: 1, label: 'TrustRadar', sub: 'Safety Scores', icon: 'shield_with_heart' },
    { id: 2, label: 'Auto-heal', sub: 'Itinerary Sync', icon: 'auto_fix_high' },
    { id: 3, label: 'Ground Truth', sub: 'Verified Stays', icon: 'verified_user' }
  ];

  const scrollToDemo = (tabIndex) => {
    if (onSelectDemoTab !== undefined && tabIndex !== undefined) {
      onSelectDemoTab(tabIndex);
    }
    const el = document.getElementById('live-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const telemetryFeed = [
    {
      corridor: 'Mathura Jn. → Vrindavan',
      fare: '₹20 – ₹25',
      fareSub: 'Verified by 18 riders · Zero tout markup',
      safety: '94/100 Street Confidence',
      safetySub: 'Vidyapeeth Marg · Well-lit & police picket active',
      utility: '100% Water & Power Up',
      utilitySub: 'The Heritage Haveli · Continuous solar water verified',
      status: 'Active Telemetry'
    },
    {
      corridor: 'Jaipur Junction → Amer Fort',
      fare: '₹35 – ₹45',
      fareSub: 'Verified by 24 riders · Prepaid counter aligned',
      safety: '96/100 Street Confidence',
      safetySub: 'MI Road Corridor · ASI Guide Rajesh Accredited',
      utility: '100% Solar & Wi-Fi Active',
      utilitySub: 'Mewar Palace Villa · 84 Mbps fiber verified',
      status: 'Active Telemetry'
    }
  ];

  const currentTelemetry = telemetryFeed[activeTelemetryTab];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 md:pt-32 pb-8 overflow-hidden bg-background"
    >
      {/* 1. Background: Faint 1px grid of 70px cells */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden bg-grid-70 opacity-70">
        {/* Soft Radial Ambient Gradient over grid */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/60 to-background" />

        {/* Dynamic green cells container: pure DOM manipulation avoids React re-renders */}
        <div ref={gridContainerRef} className="absolute inset-0 pointer-events-none" />
      </div>

      {/* Shared Container max-w 1280px with consistent horizontal margins */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full flex-1 flex flex-col justify-between relative z-10">
        {/* Main Hero 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto py-8">
          {/* Left Column (7 cols): Editorial Text, Search, CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Pill badge above headline */}
            <div>
              <a
                href="#trip-story"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high border border-surface-container-high text-xs font-semibold text-primary shadow-sm transition-all hover:scale-[1.02] group cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="tracking-wide">COMMUNITY-VERIFIED DOMESTIC TRAVEL PROTOCOL</span>
                <span className="material-symbols-outlined text-xs text-secondary group-hover:translate-y-0.5 transition-transform">
                  arrow_downward
                </span>
              </a>
            </div>

            {/* Headline: balanced lines with Noto Serif & italic accent */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary tracking-tight leading-[1.08] [text-wrap:balance]">
              <span className="hero-headline-line block">
                Travel with the trust
              </span>
              <span className="hero-headline-line block">
                of a local who's{' '}
                <span className="italic font-normal text-secondary inline-block">
                  already been&nbsp;there.
                </span>
              </span>
            </h1>

            {/* Supporting Subhead */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-text-gray max-w-xl leading-relaxed">
              Real-time transit fares, community safety radar, and telemetrically verified heritage homestays across India.
            </p>

            {/* Primary Action: Location Search with Autocomplete */}
            <div ref={searchContainerRef} className="relative max-w-xl min-h-[58px] pt-1">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center min-h-[58px] bg-white rounded-full p-2 pl-5 border border-surface-container-high shadow-floating focus-within:border-secondary transition-all"
              >
                <span className="material-symbols-outlined text-text-gray mr-3 text-xl w-6 h-6 shrink-0 flex items-center justify-center overflow-hidden">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Where are you going? (e.g. Mathura, Vrindavan, Jaipur)"
                  className="w-full bg-transparent border-none outline-none text-primary font-medium text-sm sm:text-base placeholder:text-text-gray/70"
                  aria-label="Search destination city"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-success-green transition-colors shadow-ambient shrink-0 flex items-center gap-1.5 min-h-[42px]"
                >
                  <span>Explore</span>
                  <span className="material-symbols-outlined text-sm w-4 h-4 shrink-0 flex items-center justify-center overflow-hidden">
                    arrow_forward
                  </span>
                </button>
              </form>

              {/* Autocomplete Dropdown */}
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-surface-container-high shadow-floating py-2 z-30 text-left overflow-hidden">
                  <div className="px-4 py-1.5 text-[11px] font-semibold text-text-gray uppercase tracking-wider border-b border-surface-container-high/60 flex items-center justify-between">
                    <span>Verified Destination Corridors</span>
                    <span className="text-secondary">Live Ground-Truth</span>
                  </div>
                  <ul className="divide-y divide-surface-container-low max-h-64 overflow-y-auto">
                    {suggestions.map((city, idx) => (
                      <li key={idx}>
                        <button
                          type="button"
                          onClick={() => handleSelectCity(city.name)}
                          className="w-full px-4 py-2.5 hover:bg-surface-container-low text-left flex items-center justify-between transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary text-sm">
                              <span className="material-symbols-outlined text-base">
                                {city.icon || 'location_on'}
                              </span>
                            </span>
                            <div>
                              <div className="font-serif font-bold text-sm text-primary group-hover:text-secondary transition-colors">
                                {city.name}
                              </div>
                              <div className="text-xs text-text-gray">
                                {city.state} {city.region ? `· ${city.region}` : ''}
                              </div>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-text-gray/60 group-hover:text-secondary group-hover:translate-x-0.5 transition-all text-sm">
                            arrow_forward
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Secondary Action: "See how it works" */}
            <div className="flex items-center gap-4 pt-1">
              <button
                type="button"
                onClick={() => scrollToDemo(0)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-text-gray hover:text-primary transition-colors py-2 px-3 rounded-full hover:bg-surface-container/60"
              >
                <span>See live interactive demo</span>
                <span className="material-symbols-outlined text-base text-secondary">
                  arrow_downward
                </span>
              </button>
            </div>
          </div>

          {/* Right Column (5 cols, desktop): Live Ground-Truth Telemetry Radar Preview Card */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="hero-telemetry-card w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-floating border border-surface-container-high transition-transform duration-300 hover:-translate-y-1">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-4 border-b border-surface-container-high/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                    LIVE GROUND-TRUTH STREAM
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveTelemetryTab(0)}
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-colors ${
                      activeTelemetryTab === 0
                        ? 'bg-secondary text-white'
                        : 'bg-surface-container text-text-gray hover:text-primary'
                    }`}
                  >
                    Braj
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTelemetryTab(1)}
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-colors ${
                      activeTelemetryTab === 1
                        ? 'bg-secondary text-white'
                        : 'bg-surface-container text-text-gray hover:text-primary'
                    }`}
                  >
                    Jaipur
                  </button>
                </div>
              </div>

              {/* Corridor Title */}
              <div className="pt-4 pb-3">
                <div className="text-[11px] font-mono text-secondary font-semibold uppercase tracking-wider">
                  ACTIVE CORRIDOR TELEMETRY
                </div>
                <h3 className="font-serif font-bold text-xl text-primary mt-0.5">
                  {currentTelemetry.corridor}
                </h3>
              </div>

              {/* Real-Time Telemetry Items */}
              <div className="space-y-3 pt-1">
                {/* 1. Going-Fare */}
                <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 flex items-start gap-3">
                  <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base">payments</span>
                  </span>
                  <div>
                    <div className="text-xs font-serif font-bold text-primary flex items-center gap-2">
                      <span>Fare Consensus: {currentTelemetry.fare}</span>
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800">
                        VERIFIED
                      </span>
                    </div>
                    <div className="text-[11px] text-text-gray mt-0.5 leading-snug">
                      {currentTelemetry.fareSub}
                    </div>
                  </div>
                </div>

                {/* 2. Safety Radar */}
                <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 flex items-start gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base">shield_with_heart</span>
                  </span>
                  <div>
                    <div className="text-xs font-serif font-bold text-primary flex items-center gap-2">
                      <span>{currentTelemetry.safety}</span>
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-blue-100 text-blue-800">
                        AUDITED
                      </span>
                    </div>
                    <div className="text-[11px] text-text-gray mt-0.5 leading-snug">
                      {currentTelemetry.safetySub}
                    </div>
                  </div>
                </div>

                {/* 3. Stay Utility Sensor */}
                <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-surface-container-high/60 flex items-start gap-3">
                  <span className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base">verified_user</span>
                  </span>
                  <div>
                    <div className="text-xs font-serif font-bold text-primary flex items-center gap-2">
                      <span>{currentTelemetry.utility}</span>
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-purple-100 text-purple-800">
                        IOT PROVEN
                      </span>
                    </div>
                    <div className="text-[11px] text-text-gray mt-0.5 leading-snug">
                      {currentTelemetry.utilitySub}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3 border-t border-surface-container-high/60 flex items-center justify-between text-[11px] text-text-gray">
                <span className="font-mono">PROTOCOL #KW-9021</span>
                <span className="text-secondary font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  Telemetry synced 2m ago
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Four Module Chips (Full width across container) */}
        <div className="w-full pt-6 pb-2 border-t border-surface-container-high/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {moduleChips.map((chip) => (
              <button
                key={chip.id}
                onClick={() => scrollToDemo(chip.id)}
                className="p-3 sm:p-4 rounded-2xl bg-white/90 hover:bg-white border border-surface-container-high hover:border-secondary/40 shadow-sm transition-all text-left flex items-center gap-3 group hover:-translate-y-0.5"
              >
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-surface-container group-hover:bg-secondary/15 flex items-center justify-center text-secondary shrink-0 transition-colors">
                  <span className="material-symbols-outlined text-xl">{chip.icon}</span>
                </span>
                <div className="min-w-0">
                  <div className="font-serif font-bold text-xs sm:text-sm text-primary group-hover:text-secondary transition-colors truncate">
                    {chip.label}
                  </div>
                  <div className="text-[11px] text-text-gray truncate mt-0.5">
                    {chip.sub}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
