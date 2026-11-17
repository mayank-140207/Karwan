import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';
import { Icons } from '../common/Icons';
import { searchCities, FALLBACK_CITIES } from '../../lib/supabase';

export default function FinalCtaFooter() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState(FALLBACK_CITIES.slice(0, 5));
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  return (
    <footer className="bg-white border-t border-surface-container-high relative overflow-hidden">
      {/* Oversized Faded Karwan Wordmark across the bottom background */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none select-none overflow-hidden flex items-end justify-center z-0">
        <span className="font-serif font-bold text-[22vw] text-primary/[0.035] tracking-tighter leading-none translate-y-[24%] whitespace-nowrap">
          Karwan
        </span>
      </div>

      {/* Dark CTA Card Container */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-16 md:pt-24 pb-16 relative z-10">
        <div className="bg-primary text-white rounded-[32px] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Giant Faded K Watermark inside card */}
          <span className="absolute -right-8 -bottom-16 text-[32vw] md:text-[22vw] font-serif font-black text-white/[0.04] pointer-events-none select-none leading-none z-0">
            K
          </span>

          {/* Subtle Glow Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-950/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary-fixed text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
              READY FOR YOUR NEXT JOURNEY
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-pure-white leading-tight [text-wrap:balance] max-w-[18ch] mx-auto">
              Experience India with{' '}
              <span className="italic font-normal text-secondary-fixed inline-block">
                total journey&nbsp;trust.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
              Search any active corridor or launch the interactive route planner to experience ground-truth verification firsthand.
            </p>

            {/* Quick Destination Search Input */}
            <div ref={searchContainerRef} className="relative max-w-lg mx-auto pt-2">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-white rounded-full p-2 pl-5 border border-white/20 shadow-lg text-primary"
              >
                <Icons.Search className="w-4 h-4 text-text-gray mr-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Enter destination (e.g. Mathura, Vrindavan, Agra)"
                  className="w-full bg-transparent border-none outline-none text-primary font-medium text-xs sm:text-sm placeholder:text-text-gray/70"
                  aria-label="Search destination route"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-secondary text-white font-semibold text-xs hover:bg-success-green transition-colors shrink-0"
                >
                  Explore
                </button>
              </form>

              {/* Autocomplete Dropdown */}
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-surface-container-high shadow-2xl py-2 z-30 text-left text-primary">
                  <ul className="divide-y divide-surface-container-low max-h-56 overflow-y-auto">
                    {suggestions.map((city, idx) => (
                      <li key={idx}>
                        <button
                          type="button"
                          onClick={() => handleSelectCity(city.name)}
                          className="w-full px-4 py-2.5 hover:bg-surface-container-low text-left flex items-center justify-between text-xs"
                        >
                          <div>
                            <div className="font-serif font-bold text-primary">{city.name}</div>
                            <div className="text-[11px] text-text-gray">{city.state}</div>
                          </div>
                          <Icons.ArrowRight className="w-3.5 h-3.5 text-secondary" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/trip/plan/route"
                className="px-8 py-3.5 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-success-green transition-all shadow-ambient flex items-center gap-2 group"
              >
                <span>Launch Route Planner</span>
                <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/directory"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
              >
                Browse Corridors
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main 5-Column White Footer */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-14 border-t border-surface-container-high/60 relative z-10 text-left">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column (Span 2) */}
          <div className="col-span-2 space-y-4">
            <Logo variant="color" size="md" to="/" />
            <p className="text-xs text-text-gray max-w-sm leading-relaxed">
              A real-time, community-verified trust layer for safe and adaptive domestic travel. Eliminating tout exploitation through crowdsourced ground-truth telemetry.
            </p>
            <div className="pt-1 text-xs font-serif italic text-secondary">
              Know. Navigate. Arrive.
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-mono border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Braj Corridor Live Protocol v2.4</span>
            </div>
          </div>

          {/* Col 1: Engines */}
          <div>
            <h5 className="font-serif font-bold text-sm text-primary mb-3">Engines</h5>
            <ul className="space-y-2 text-xs text-text-gray">
              <li><Link to="/trip/livetrail" className="hover:text-secondary transition-colors">LiveTrail Fares</Link></li>
              <li><Link to="/trip/trustradar" className="hover:text-secondary transition-colors">TrustRadar Safety</Link></li>
              <li><Link to="/trip/itinerary" className="hover:text-secondary transition-colors">Auto-heal Itinerary</Link></li>
              <li><Link to="/directory" className="hover:text-secondary transition-colors">Ground Truth Stays</Link></li>
            </ul>
          </div>

          {/* Col 2: For Travellers */}
          <div>
            <h5 className="font-serif font-bold text-sm text-primary mb-3">Travellers</h5>
            <ul className="space-y-2 text-xs text-text-gray">
              <li><Link to="/trip/plan/route" className="hover:text-secondary transition-colors">Route Planner</Link></li>
              <li><Link to="/trip/plan/preferences" className="hover:text-secondary transition-colors">Trip Preferences</Link></li>
              <li><Link to="/dashboard" className="hover:text-secondary transition-colors">Traveller Dashboard</Link></li>
              <li><Link to="/profile" className="hover:text-secondary transition-colors">KARWAN ID Profile</Link></li>
            </ul>
          </div>

          {/* Col 3: Company & Partners */}
          <div>
            <h5 className="font-serif font-bold text-sm text-primary mb-3">Partners</h5>
            <ul className="space-y-2 text-xs text-text-gray">
              <li><Link to="/partner/dashboard" className="hover:text-secondary transition-colors">Partner Dashboard</Link></li>
              <li><Link to="/partner/kyc/step-1" className="hover:text-secondary transition-colors">Partner Verification</Link></li>
              <li><Link to="/settings/privacy" className="hover:text-secondary transition-colors">Privacy & Telemetry</Link></li>
              <li><Link to="/settings/help" className="hover:text-secondary transition-colors">Help & Assistance</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-6 border-t border-surface-container-high/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-gray">
          <span>© 2026 Karwan Travel Technologies. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link to="/settings/privacy" className="hover:text-primary transition-colors">Privacy Protocol</Link>
            <Link to="/settings/help" className="hover:text-primary transition-colors">Support</Link>
            <Link to="/directory" className="hover:text-primary transition-colors">Directory</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}