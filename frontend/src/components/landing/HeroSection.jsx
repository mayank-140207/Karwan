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

  // Dynamic green grid cells (at most 5 at once, 70px cells)
  // Pure DOM manipulation to eliminate React re-renders and reduce main-thread TBT
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

  // GSAP Headline animation: lines slide up 24px and fade in, stagger 80ms, 700ms, power3.out
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

  // Handle input search changes with debounce
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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-20 md:pt-28 pb-4 overflow-hidden bg-background"
    >
      {/* 1. Background: Faint 1px grid of 70px cells */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden bg-grid-70 opacity-70">
        {/* Soft Radial Ambient Gradient over grid */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/60 to-background" />

        {/* Dynamic green cells container: pure DOM manipulation avoids React re-renders */}
        <div ref={gridContainerRef} className="absolute inset-0 pointer-events-none" />
      </div>

      {/* Shared Container max-w 1280px with 64px desktop / 20px mobile margins */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 w-full flex-1 flex flex-col justify-between relative z-10">
        {/* Main Hero Editorial Content - Left Aligned to match Logo edge */}
        <div className="max-w-3xl text-left my-auto pt-6 pb-8">
          {/* Pill badge above the headline linking to trip story */}
          <div>
            <a
              href="#trip-story"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high border border-surface-container-high text-xs font-semibold text-primary mb-6 shadow-sm transition-all hover:scale-[1.02] group cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="tracking-wide">COMMUNITY-VERIFIED DOMESTIC TRAVEL PROTOCOL</span>
              <span className="material-symbols-outlined text-xs text-secondary group-hover:translate-y-0.5 transition-transform">
                arrow_downward
              </span>
            </a>
          </div>

          {/* Headline: lines slide up 24px and fade in, stagger 80ms, 700ms, power3.out */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-[1.08] mb-6 [text-wrap:balance] max-w-[18ch]">
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

          {/* One-Line Subhead */}
          <p className="font-sans text-lg sm:text-xl text-text-gray max-w-2xl leading-relaxed mb-10">
            Real-time transit fares, community safety radar, and verified homestays across India.
          </p>

          {/* Primary Action: Location Search with Autocomplete */}
          <div ref={searchContainerRef} className="relative max-w-xl mb-6 min-h-[58px]">
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
                <span className="material-symbols-outlined text-sm w-4 h-4 shrink-0 flex items-center justify-center overflow-hidden">arrow_forward</span>
              </button>
            </form>

            {/* Autocomplete Dropdown */}
            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-surface-container-high shadow-floating py-2 z-30 text-left overflow-hidden">
                <div className="px-4 py-1.5 text-[11px] font-semibold text-text-gray uppercase tracking-wider border-b border-surface-container-high/60 flex items-center justify-between">
                  <span>Verified Destination Corridors</span>
                  <span className="text-secondary">Autocompleted from live registry</span>
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
          <div className="hero-fade-item flex items-center">
            <button
              onClick={() => scrollToDemo(0)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-gray hover:text-primary transition-colors py-2 px-4 rounded-full hover:bg-surface-container/60 -ml-4"
            >
              <span>See how it works</span>
              <span className="material-symbols-outlined text-base animate-bounce">
                arrow_downward
              </span>
            </button>
          </div>
        </div>

        {/* Bottom: Four Module Chips (Left aligned across container) */}
        <div className="hero-fade-item w-full pt-6 pb-6 border-t border-surface-container-high/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {moduleChips.map((chip) => (
              <button
                key={chip.id}
                onClick={() => scrollToDemo(chip.id)}
                className="p-3.5 rounded-xl bg-white/80 hover:bg-white border border-surface-container-high hover:border-secondary/40 shadow-sm transition-all text-left flex items-center gap-3 group hover:-translate-y-0.5"
              >
                <span className="w-9 h-9 rounded-lg bg-surface-container group-hover:bg-secondary/15 flex items-center justify-center text-secondary shrink-0 transition-colors">
                  <span className="material-symbols-outlined text-xl">{chip.icon}</span>
                </span>
                <div className="min-w-0">
                  <div className="font-serif font-bold text-xs sm:text-sm text-primary group-hover:text-secondary transition-colors truncate">
                    {chip.label}
                  </div>
                  <div className="text-[11px] text-text-gray truncate">
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
