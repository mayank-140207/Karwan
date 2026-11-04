import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchCities, FALLBACK_CITIES } from '../../lib/supabase';

export default function HeroSection({ onSelectDemoTab }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState(FALLBACK_CITIES.slice(0, 5));
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef(null);

  // Randomly lighting up grid cells (low CPU)
  const [activeCellIndex, setActiveCellIndex] = useState(7);
  const [activeCellSecondary, setActiveCellSecondary] = useState(19);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCellIndex(Math.floor(Math.random() * 48));
      setActiveCellSecondary(Math.floor(Math.random() * 48));
    }, 2800);
    return () => clearInterval(timer);
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
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-margin-mobile md:px-margin-desktop overflow-hidden bg-background">
      {/* Background: Faint Grid with Softly Pulsing Green Cells (Low CPU) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-40">
        <div className="w-full h-full grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-px bg-surface-container-high/40">
          {Array.from({ length: 48 }).map((_, idx) => (
            <div
              key={idx}
              className={`h-28 transition-colors duration-1000 ${
                idx === activeCellIndex
                  ? 'bg-secondary/15'
                  : idx === activeCellSecondary
                  ? 'bg-secondary/10'
                  : 'bg-background'
              }`}
            />
          ))}
        </div>
        {/* Soft Radial Ambient Gradient over grid */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/60 to-background pointer-events-none" />
      </div>

      {/* Main Hero Editorial Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center my-auto pt-6 pb-8">
        {/* Subtle Live Protocol Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-primary mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="tracking-wide">COMMUNITY-VERIFIED DOMESTIC TRAVEL PROTOCOL</span>
        </div>

        {/* Large Editorial Headline with Italic Accent Phrase */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-[1.08] mb-6">
          Travel with the trust of a local who's{' '}
          <span className="italic font-normal text-secondary inline-block">
            already been there.
          </span>
        </h1>

        {/* One-Line Subhead */}
        <p className="font-sans text-lg sm:text-xl text-text-gray max-w-2xl mx-auto leading-relaxed mb-10">
          Real-time transit fares, community safety radar, and verified homestays across India.
        </p>

        {/* Primary Action: Location Search with Autocomplete */}
        <div ref={searchContainerRef} className="relative max-w-xl mx-auto mb-6">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-white rounded-full p-2 pl-5 border border-surface-container-high shadow-floating focus-within:border-secondary transition-all"
          >
            <span className="material-symbols-outlined text-text-gray mr-3 text-xl">
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
              className="px-6 py-2.5 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-success-green transition-colors shadow-ambient shrink-0 flex items-center gap-1.5"
            >
              <span>Explore</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
        <div className="flex items-center justify-center">
          <button
            onClick={() => scrollToDemo(0)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-gray hover:text-primary transition-colors py-2 px-4 rounded-full hover:bg-surface-container/60"
          >
            <span>See how it works</span>
            <span className="material-symbols-outlined text-base animate-bounce">
              arrow_downward
            </span>
          </button>
        </div>
      </div>

      {/* Bottom: Four Module Chips */}
      <div className="relative z-10 max-w-4xl mx-auto w-full pt-4 border-t border-surface-container-high/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {moduleChips.map((chip) => (
            <button
              key={chip.id}
              onClick={() => scrollToDemo(chip.id)}
              className="p-3 rounded-xl bg-white/80 hover:bg-white border border-surface-container-high hover:border-secondary/40 shadow-sm transition-all text-left flex items-center gap-2.5 group hover:-translate-y-0.5"
            >
              <span className="w-8 h-8 rounded-lg bg-surface-container group-hover:bg-secondary/15 flex items-center justify-center text-secondary shrink-0 transition-colors">
                <span className="material-symbols-outlined text-lg">{chip.icon}</span>
              </span>
              <div className="min-w-0">
                <div className="font-serif font-bold text-xs text-primary group-hover:text-secondary transition-colors truncate">
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
    </section>
  );
}

