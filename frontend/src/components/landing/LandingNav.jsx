import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { SearchIcon, ChevronDownIcon, ArrowRightIcon, CloseIcon } from '../common/Icons';

export default function LandingNav({ onOpenSearchPalette }) {
  const [modulesMenuOpen, setModulesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setModulesMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const modules = [
    {
      id: 'livetrail',
      title: 'LiveTrail',
      tagline: 'Real-time transit fares & rider crowding consensus',
      badge: 'Transit Telemetry',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-600 text-white',
      letter: 'LT',
      link: '/trip/livetrail'
    },
    {
      id: 'trustradar',
      title: 'TrustRadar',
      tagline: 'Community safety scores & verified local guides',
      badge: 'Street Safety',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      iconBg: 'bg-teal-700 text-white',
      letter: 'TR',
      link: '/trip/trustradar'
    },
    {
      id: 'autoheal',
      title: 'Auto-heal',
      tagline: 'Adaptive itinerary recalibration & instant detours',
      badge: 'Resilience Engine',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-600 text-white',
      letter: 'AH',
      link: '/trip/itinerary'
    },
    {
      id: 'groundtruth',
      title: 'Ground Truth',
      tagline: 'Telemetry-audited heritage homestays & utilities',
      badge: 'Stay Verification',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      iconBg: 'bg-indigo-700 text-white',
      letter: 'GT',
      link: '/directory'
    }
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60'
      } h-[var(--header-h,72px)]`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 h-full flex items-center justify-between">
        {/* Karwan Brand Logo */}
        <div className="flex items-center gap-8">
          <Logo variant="color" size="md" to="/" />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-[13px] text-slate-600">
            {/* Engines Dropdown */}
            <div
              className="relative"
              ref={menuRef}
              onMouseEnter={() => setModulesMenuOpen(true)}
              onMouseLeave={() => setModulesMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setModulesMenuOpen(!modulesMenuOpen)}
                className={`inline-flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg transition-colors ${
                  modulesMenuOpen ? 'text-slate-900 bg-slate-100' : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={modulesMenuOpen}
              >
                <span>Engines</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    modulesMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Mega Menu Dropdown */}
              {modulesMenuOpen && (
                <div className="absolute top-full left-0 pt-2 w-[580px]">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 grid grid-cols-2 gap-3 animate-fadeIn">
                    {modules.map((m) => (
                      <Link
                        key={m.id}
                        to={m.link}
                        onClick={() => setModulesMenuOpen(false)}
                        className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-semibold text-sm text-slate-900 group-hover:text-primary transition-colors flex items-center gap-2">
                              <span className={`w-6 h-6 rounded-md ${m.iconBg} font-mono text-[10px] font-bold flex items-center justify-center shrink-0`}>
                                {m.letter}
                              </span>
                              <span>{m.title}</span>
                            </span>
                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${m.badgeColor}`}>
                              {m.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed pl-8">
                            {m.tagline}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-primary mt-2 pl-8">
                          <span>Open engine</span>
                          <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-1">
                      <span>Cryptographic verification protocol</span>
                      <Link
                        to="/directory"
                        onClick={() => setModulesMenuOpen(false)}
                        className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        <span>Browse directory</span>
                        <ArrowRightIcon className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#how-it-works" className="hover:text-slate-900 transition-colors py-1.5 px-2">
              How It Works
            </a>
            <a href="#trip-story" className="hover:text-slate-900 transition-colors py-1.5 px-2">
              Braj Story
            </a>
            <a href="#directory" className="hover:text-slate-900 transition-colors py-1.5 px-2">
              Ground Truth
            </a>
            <a href="#for-partners" className="hover:text-slate-900 transition-colors py-1.5 px-2">
              For Partners
            </a>
          </nav>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3">
          {/* Search Button with ⌘K */}
          <button
            type="button"
            onClick={onOpenSearchPalette}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 text-xs font-medium text-slate-600 hover:text-slate-900 transition-all group"
            aria-label="Search destinations (⌘K)"
            title="Search destinations (⌘K)"
          >
            <SearchIcon className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-800" />
            <span className="hidden sm:inline text-xs">Search</span>
            <kbd className="hidden sm:inline font-mono text-[10px] text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200">
              ⌘K
            </kbd>
          </button>

          {/* Secondary Ghost Button */}
          <Link
            to="/directory"
            className="hidden sm:inline-flex items-center text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Explore Corridors
          </Link>

          {/* Primary Action Button (Concilio-style dark pill) */}
          <Link
            to="/auth/role-selection"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs hover:shadow transition-all group active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors ml-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-5 h-5" />
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-fadeIn space-y-5">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-slate-100">
            {modules.map((m) => (
              <Link
                key={m.id}
                to={m.link}
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-1"
              >
                <span className="font-semibold text-xs text-slate-900 flex items-center gap-1.5">
                  <span className={`w-5 h-5 rounded ${m.iconBg} font-mono text-[9px] font-bold flex items-center justify-center`}>
                    {m.letter}
                  </span>
                  <span>{m.title}</span>
                </span>
                <span className="text-[10px] text-slate-500">{m.badge}</span>
              </Link>
            ))}
          </div>

          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="py-1">
              How It Works
            </a>
            <a href="#trip-story" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Braj Trip Story
            </a>
            <a href="#directory" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Ground Truth Directory
            </a>
            <a href="#for-partners" onClick={() => setMobileMenuOpen(false)} className="py-1">
              For Partners
            </a>
            <Link to="/screens" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-500">
              35 Screens Index
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl border border-slate-200 text-center text-xs font-semibold text-slate-700"
            >
              Log In
            </Link>
            <Link
              to="/auth/role-selection"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-center text-xs font-semibold"
            >
              Get Started Free →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
