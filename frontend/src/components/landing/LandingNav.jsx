import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';

export default function LandingNav({ onOpenScreensModal }) {
  const [modulesMenuOpen, setModulesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

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
      name: 'LiveTrail',
      tagline: 'Real-time transit & actual going-fares',
      desc: 'Crowdsourced going-fare intelligence and live passenger crowding for local autos, buses, and ferries.',
      icon: 'navigation',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      to: '/trip/livetrail',
      badge: 'Live Telemetry'
    },
    {
      id: 'trustradar',
      name: 'TrustRadar',
      tagline: 'Community safety & verified guides',
      desc: 'Real-time safety confidence scoring, localized advisories, and accredited cultural guides.',
      icon: 'shield_with_heart',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      to: '/trip/trustradar',
      badge: 'Safety Layer'
    },
    {
      id: 'autoheal',
      name: 'Auto-heal',
      tagline: 'Dynamic itinerary recalibration',
      desc: 'Automatic detour suggestions and stay rebalancing when unexpected road or temple closures strike.',
      icon: 'auto_fix_high',
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      to: '/trip/itinerary',
      badge: 'Resilience'
    },
    {
      id: 'groundtruth',
      name: 'Ground Truth',
      tagline: 'Stay utility telemetry & audits',
      desc: 'Evidence-based stay verification: continuous water, backup power, Wi-Fi speed, and geotagged guest photos.',
      icon: 'verified_user',
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      to: '/directory',
      badge: 'Utility Sensor'
    }
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-surface-container-high/80 shadow-sm transition-all h-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full flex items-center justify-between">
        {/* Karwan Logo on SAME LINE */}
        <Logo variant="color" size="md" to="/" />

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 font-medium text-sm">
          {/* Modules Mega Menu Trigger */}
          <div 
            className="relative" 
            ref={menuRef}
            onMouseEnter={() => setModulesMenuOpen(true)}
            onMouseLeave={() => setModulesMenuOpen(false)}
          >
            <button
              type="button"
              onClick={() => setModulesMenuOpen(!modulesMenuOpen)}
              className={`inline-flex items-center gap-1.5 py-2 px-3 rounded-lg transition-colors ${
                modulesMenuOpen ? 'text-secondary bg-surface-container' : 'text-text-gray hover:text-primary hover:bg-surface-container-low'
              }`}
              aria-expanded={modulesMenuOpen}
              aria-haspopup="true"
            >
              <span>Modules</span>
              <span className={`material-symbols-outlined text-base transition-transform duration-200 ${modulesMenuOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {/* Mega Menu Dropdown */}
            {modulesMenuOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px]"
              >
                <div className="bg-white rounded-2xl shadow-floating border border-surface-container-high p-5 grid grid-cols-2 gap-4">
                  {modules.map((m) => (
                    <Link
                      key={m.id}
                      to={m.to}
                      onClick={() => setModulesMenuOpen(false)}
                      className="group p-3.5 rounded-xl border border-surface-container-high/70 hover:border-secondary/50 hover:bg-surface-container-lowest transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center border ${m.color}`}>
                            <span className="material-symbols-outlined text-lg">{m.icon}</span>
                          </span>
                          <span className="text-[11px] font-semibold tracking-wider uppercase text-text-gray px-2 py-0.5 rounded-full bg-surface-container">
                            {m.badge}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-base text-primary group-hover:text-secondary transition-colors">
                          {m.name}
                        </h4>
                        <p className="text-xs text-text-gray leading-relaxed mt-1 line-clamp-2">
                          {m.desc}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-secondary mt-3">
                        <span>Open module</span>
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
                          arrow_forward
                        </span>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-surface-container-high/60 flex items-center justify-between text-xs text-text-gray px-1">
                    <span>Protocol anchored by verified KARWAN ID credentials</span>
                    <Link 
                      to="/directory" 
                      onClick={() => setModulesMenuOpen(false)} 
                      className="text-primary font-semibold hover:text-secondary inline-flex items-center gap-1"
                    >
                      View Ground Truth Directory
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="#how-it-works" className="text-text-gray hover:text-primary transition-colors py-1">
            How It Works
          </a>
          <a href="#trip-story" className="text-text-gray hover:text-primary transition-colors py-1">
            Trip Story
          </a>
          <a href="#for-partners" className="text-text-gray hover:text-primary transition-colors py-1">
            For Partners
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* 35 Screens Catalog Trigger Button */}
          {onOpenScreensModal && (
            <button
              onClick={onOpenScreensModal}
              className="px-3.5 py-1.5 rounded-full bg-surface-container hover:bg-secondary/15 text-primary text-xs font-semibold flex items-center gap-1.5 transition-colors border border-outline-variant/60"
              title="Click to view all 35 screens catalog"
            >
              <span className="material-symbols-outlined text-sm text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                apps
              </span>
              <span className="hidden sm:inline">35 Screens</span>
            </button>
          )}

          {/* Log In = outline button */}
          <Link
            to="/login"
            className="hidden sm:inline-flex px-5 py-2 rounded-[20px] border border-primary text-primary hover:bg-primary/5 font-label-md text-sm font-semibold transition-colors"
          >
            Log In
          </Link>

          {/* Get Started = solid green button */}
          <Link
            to="/auth/signup-step-1"
            className="inline-flex px-5 py-2 rounded-[20px] bg-secondary text-pure-white font-label-md text-sm font-semibold hover:bg-success-green transition-colors shadow-ambient"
          >
            Get Started
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-white border-b border-surface-container-high shadow-floating max-h-[calc(100vh-5rem)] overflow-y-auto p-6 space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-wider text-text-gray uppercase">Core Modules</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {modules.map((m) => (
                <Link
                  key={m.id}
                  to={m.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-xl border border-surface-container-high flex items-center gap-3 hover:bg-surface-container-low transition-colors"
                >
                  <span className={`w-9 h-9 rounded-lg flex items-center justify-center border shrink-0 ${m.color}`}>
                    <span className="material-symbols-outlined text-lg">{m.icon}</span>
                  </span>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-primary">{m.name}</h5>
                    <p className="text-xs text-text-gray">{m.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-surface-container-high text-base font-medium">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-primary hover:text-secondary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#trip-story"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-primary hover:text-secondary transition-colors"
            >
              Trip Story
            </a>
            <a
              href="#for-partners"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-primary hover:text-secondary transition-colors"
            >
              For Partners
            </a>
          </div>

          <div className="pt-4 border-t border-surface-container-high flex flex-col sm:flex-row gap-3">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-[20px] border border-primary text-primary font-semibold text-sm"
            >
              Log In
            </Link>
            <Link
              to="/auth/signup-step-1"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-[20px] bg-secondary text-white font-semibold text-sm shadow-ambient"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

