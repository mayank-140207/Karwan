import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';
import { mockData } from '../../data/mockData';

/**
 * Shared AuthLayout for Login, Immersive Login, Signup 1, Signup 2, and OTP.
 * Left panel: <Logo variant="white"> on one line at top-left, headline, full-bleed photo with soft dark gradient.
 * Right panel: Form canvas with clean spacing and verified branding.
 */
export default function AuthLayout({
  children,
  title = "Karwan",
  headline = "Embark on your journey with Karwan.",
  subline = "Access real-time ground truth, verified trust scores, and self-healing itineraries across India.",
  image = "/images/auth_taj_mahal.webp",
  imageAlt = "Taj Mahal at sunrise in golden hour"
}) {
  const navigate = useNavigate();
  const [screenSwitcherOpen, setScreenSwitcherOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      {/* Main Auth Split Container */}
      <div className="flex-1 flex flex-col lg:flex-row w-full">
        {/* Left Panel: Peaceful, relevant full-bleed photo with soft dark gradient */}
        <section className="hidden lg:flex lg:w-1/2 relative bg-primary flex-col justify-between overflow-hidden min-h-screen">
          {/* Full-bleed background photo */}
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover object-center"
              width="1376"
              height="768"
              fetchpriority="high"
            />
            {/* Soft dark gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/30"></div>
          </div>

          {/* Top-left: White Logo on one line */}
          <div className="relative z-10 p-10 xl:p-12">
            <Logo variant="white" size="md" to="/" />
          </div>

          {/* Bottom Left: Headline & Subline */}
          <div className="relative z-10 p-10 xl:p-12 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pure-white/10 backdrop-blur-md text-xs font-semibold text-secondary-container mb-4 border border-pure-white/10">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
              <span>Ground Truth Architecture</span>
            </div>
            <h1 className="font-serif font-bold text-3xl xl:text-4xl text-pure-white mb-4 leading-tight">
              {headline}
            </h1>
            <p className="text-pure-white/80 text-sm xl:text-base leading-relaxed">
              {subline}
            </p>
          </div>
        </section>

        {/* Right Panel: Form Canvas */}
        <section className="w-full lg:w-1/2 flex flex-col justify-between bg-pure-white p-6 sm:p-10 md:p-16 min-h-screen overflow-y-auto">
          {/* Mobile Header with Logo & Screen Switcher */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-container-high lg:border-none lg:mb-4 lg:pb-0">
            <div className="lg:hidden">
              <Logo variant="color" size="md" to="/" />
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <button
                type="button"
                onClick={() => setScreenSwitcherOpen(true)}
                className="px-3 py-1.5 rounded-full bg-surface-container hover:bg-secondary/15 text-primary text-xs font-semibold flex items-center gap-1.5 transition-colors border border-outline-variant/60"
                title="Browse all 35 project screens"
              >
                <span className="material-symbols-outlined text-xs text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>apps</span>
                <span>35 Screens</span>
              </button>

              <Link
                to="/"
                className="text-xs font-semibold text-text-gray hover:text-primary transition-colors hidden sm:inline"
              >
                Exit to Home
              </Link>
            </div>
          </div>

          {/* Form Content */}
          <div className="my-auto w-full max-w-md mx-auto">
            {children}
          </div>

          {/* Minimal Auth Footer */}
          <div className="mt-8 pt-4 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-gray">
            <span>© 2026 Karwan. Secured by Ground Truth.</span>
            <div className="flex gap-4">
              <Link to="/settings/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link to="/settings/help" className="hover:text-primary transition-colors">Help</Link>
            </div>
          </div>
        </section>
      </div>

      {/* Screen Switcher Modal */}
      {screenSwitcherOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-pure-white rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="px-6 py-4 border-b border-surface-container flex items-center justify-between bg-surface-container-low">
              <div>
                <h3 className="font-serif font-bold text-lg text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                  <span>Karwan Project - Complete 35 Screen Index</span>
                </h3>
                <p className="text-xs text-text-gray mt-0.5">Click any screen to navigate directly</p>
              </div>
              <button
                type="button"
                onClick={() => setScreenSwitcherOpen(false)}
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-text-gray hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              {mockData.routesCatalog.map((cat, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secondary border-b border-surface-container pb-1">
                    {cat.category} ({cat.items.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {cat.items.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        onClick={() => setScreenSwitcherOpen(false)}
                        className="p-2.5 rounded-xl border text-left flex flex-col justify-between transition-all bg-surface-container-lowest border-outline-variant/60 hover:border-secondary hover:bg-surface"
                      >
                        <span className="text-xs font-medium text-primary line-clamp-1">{item.name}</span>
                        <div className="flex items-center justify-between text-[10px] text-text-gray mt-1">
                          <code className="text-secondary/80 font-mono">{item.path}</code>
                          <span className="text-[9px] text-text-gray/60">{item.id.slice(0, 6)}...</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-3 border-t border-surface-container bg-surface flex items-center justify-between text-xs text-text-gray">
              <span>Total screens verified: <strong>35 / 35</strong></span>
              <button
                type="button"
                onClick={() => setScreenSwitcherOpen(false)}
                className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-medium hover:bg-primary/90"
              >
                Close Switcher
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
