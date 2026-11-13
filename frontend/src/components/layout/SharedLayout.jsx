import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';

export default function SharedLayout({ children, isLanding: explicitLanding }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const location = useLocation();

  const isCurrent = (path) => location.pathname === path;
  const isLanding = explicitLanding !== undefined ? explicitLanding : location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      {/* 1. Global Navigation Bar */}
      {isLanding ? (
        /* Landing Page Header: Fixed top-0 inset-x-0 z-50, solid white bg, subtle border/shadow */
        <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-surface-container-high shadow-sm transition-all h-20">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full flex items-center justify-between">
            {/* Karwan Logo on SAME LINE (mark first, navy wordmark) */}
            <Logo variant="color" size="md" to="/" />

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
              <a 
                href="#home" 
                onClick={() => setActiveNav('Home')}
                className={`transition-colors py-1 ${activeNav === 'Home' ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                Home
              </a>
              <a 
                href="#how-it-works" 
                onClick={() => setActiveNav('How It Works')}
                className={`transition-colors py-1 ${activeNav === 'How It Works' ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                How It Works
              </a>
              <a 
                href="#modules" 
                onClick={() => setActiveNav('Modules')}
                className={`transition-colors py-1 ${activeNav === 'Modules' ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                Modules
              </a>
              <a 
                href="#for-travellers" 
                onClick={() => setActiveNav('For Travellers')}
                className={`transition-colors py-1 ${activeNav === 'For Travellers' ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                For Travellers
              </a>
              <a 
                href="#for-partners" 
                onClick={() => setActiveNav('For Partners')}
                className={`transition-colors py-1 ${activeNav === 'For Partners' ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                For Partners
              </a>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Log In = outline button */}
              <Link 
                to="/login"
                className="hidden sm:inline-flex px-6 py-2.5 rounded-[20px] border border-primary text-primary hover:bg-primary/5 font-label-md text-label-md font-semibold transition-colors"
              >
                Log In
              </Link>

              {/* Get Started = solid green button */}
              <Link 
                to="/auth/signup-step-1"
                className="inline-flex px-6 py-2.5 rounded-[20px] bg-secondary text-pure-white font-label-md text-label-md font-semibold hover:bg-success-green transition-colors shadow-ambient"
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

          {/* Mobile Dropdown Menu for Landing */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-surface-container-high bg-pure-white px-6 py-4 flex flex-col gap-3 shadow-lg">
              <a href="#home" onClick={() => { setActiveNav('Home'); setMobileMenuOpen(false); }} className="text-sm font-medium py-1 text-primary">Home</a>
              <a href="#how-it-works" onClick={() => { setActiveNav('How It Works'); setMobileMenuOpen(false); }} className="text-sm font-medium py-1 text-primary">How It Works</a>
              <a href="#modules" onClick={() => { setActiveNav('Modules'); setMobileMenuOpen(false); }} className="text-sm font-medium py-1 text-primary">Modules</a>
              <a href="#for-travellers" onClick={() => { setActiveNav('For Travellers'); setMobileMenuOpen(false); }} className="text-sm font-medium py-1 text-primary">For Travellers</a>
              <a href="#for-partners" onClick={() => { setActiveNav('For Partners'); setMobileMenuOpen(false); }} className="text-sm font-medium py-1 text-primary">For Partners</a>
              <div className="pt-3 border-t border-surface-container flex gap-3">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="flex-1 py-2.5 rounded-[20px] border border-primary text-center text-xs font-bold text-primary">Log In</Link>
                <Link to="/auth/signup-step-1" onClick={() => setMobileMenuOpen(false)} className="flex-1 py-2.5 rounded-[20px] bg-secondary text-center text-xs font-bold text-white shadow-sm">Get Started</Link>
              </div>
            </div>
          )}
        </header>
      ) : (
        /* Internal App Navigation Bar */
        <header className="sticky top-0 z-40 bg-pure-white/95 backdrop-blur-md border-b border-surface-container-high transition-all shadow-sm">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20 flex items-center justify-between">
            {/* Logo & Brand on the SAME LINE */}
            <Logo variant="color" size="md" to="/" />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
              <Link 
                to="/" 
                className={`transition-colors py-1 ${isCurrent('/') ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                Landing
              </Link>
              <Link 
                to="/home" 
                className={`transition-colors py-1 ${isCurrent('/home') ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                Home
              </Link>
              <Link 
                to="/directory" 
                className={`transition-colors py-1 ${location.pathname.startsWith('/directory') ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                Ground Truth
              </Link>
              <Link 
                to="/trip/itinerary" 
                className={`transition-colors py-1 ${location.pathname.startsWith('/trip') ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                Trip & LiveTrail
              </Link>
              <Link 
                to="/dashboard" 
                className={`transition-colors py-1 ${isCurrent('/dashboard') ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                Dashboard
              </Link>
              <Link 
                to="/partner/dashboard" 
                className={`transition-colors py-1 ${location.pathname.startsWith('/partner') ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                Partner
              </Link>
              <Link 
                to="/settings" 
                className={`transition-colors py-1 ${location.pathname.startsWith('/settings') ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-text-gray hover:text-primary'}`}
              >
                Settings
              </Link>
            </nav>

            {/* Right Action Icons & Auth */}
            <div className="flex items-center gap-3">
              {/* Quick Profile / Notifications Link */}
              <Link 
                to="/notifications" 
                className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-primary transition-colors relative"
                title="Notifications"
              >
                <span className="material-symbols-outlined text-lg">notifications</span>
                <span className="w-2 h-2 rounded-full bg-secondary absolute top-2 right-2 ring-2 ring-pure-white"></span>
              </Link>

              <Link 
                to="/profile" 
                className="w-9 h-9 rounded-full bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary font-bold text-xs transition-colors"
                title="Your Profile (KARWAN ID)"
              >
                AV
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

          {/* Mobile Dropdown Menu for Internal */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-surface-container-high bg-pure-white px-6 py-4 flex flex-col gap-3 shadow-lg">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1 text-primary">Landing Page</Link>
              <Link to="/home" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1 text-primary">Traveler Home</Link>
              <Link to="/directory" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1 text-primary">Ground Truth Directory</Link>
              <Link to="/trip/plan/route" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1 text-primary">Plan a New Trip</Link>
              <Link to="/trip/itinerary" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1 text-primary">Adaptive Itinerary</Link>
              <Link to="/trip/livetrail" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1 text-primary">LiveTrail Dashboard</Link>
              <Link to="/trip/trustradar" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1 text-primary">TrustRadar Dashboard</Link>
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1 text-primary">Traveller Dashboard</Link>
              <Link to="/partner/dashboard" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1 text-primary">Partner Portal</Link>
              <Link to="/settings" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium py-1 text-primary">Settings</Link>
              <div className="pt-3 border-t border-surface-container flex gap-3">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="flex-1 py-2 rounded-xl bg-surface text-center text-xs font-bold text-primary border border-outline-variant">Sign In</Link>
                <Link to="/auth/signup-step-1" onClick={() => setMobileMenuOpen(false)} className="flex-1 py-2 rounded-xl bg-secondary text-center text-xs font-bold text-white shadow-sm">Sign Up</Link>
              </div>
            </div>
          )}
        </header>
      )}

      {/* 2. Main Page Content: Top padding equal to header height (h-20 = 80px) on Landing so nothing hides underneath */}
      <main className={`flex-1 ${isLanding ? 'pt-20' : ''}`}>
        {children}
      </main>

      {/* 3. Global Footer (rendered only for internal pages, since LandingPage has its own dedicated footer) */}
      {!isLanding && (
        <footer className="bg-primary text-pure-white border-t border-white/10 mt-auto">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="mb-4">
                <Logo variant="white" size="md" to="/" />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Travel with the trust of a local who has already been there. Live fares, verified trust scores, and self-healing itineraries across India.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-secondary-fixed">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Ground Truth Verified Protocol</span>
              </div>
            </div>

            <div>
              <h5 className="font-serif text-sm font-bold text-pure-white mb-3">Core Modules</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/home" className="hover:text-pure-white transition-colors">Home (No Active Trip)</Link></li>
                <li><Link to="/directory" className="hover:text-pure-white transition-colors">Ground Truth Directory</Link></li>
                <li><Link to="/trip/itinerary" className="hover:text-pure-white transition-colors">Adaptive Itinerary</Link></li>
                <li><Link to="/trip/livetrail" className="hover:text-pure-white transition-colors">LiveTrail Transit</Link></li>
                <li><Link to="/trip/trustradar" className="hover:text-pure-white transition-colors">TrustRadar Dashboard</Link></li>
                <li><Link to="/trip/plan/route" className="hover:text-pure-white transition-colors">Plan Route</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-sm font-bold text-pure-white mb-3">Accounts & Dashboards</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/dashboard" className="hover:text-pure-white transition-colors">Traveller Dashboard</Link></li>
                <li><Link to="/profile" className="hover:text-pure-white transition-colors">Profile (KARWAN ID)</Link></li>
                <li><Link to="/partner/dashboard" className="hover:text-pure-white transition-colors">Partner Dashboard</Link></li>
                <li><Link to="/partner/kyc/step-1" className="hover:text-pure-white transition-colors">Partner KYC</Link></li>
                <li><Link to="/settings" className="hover:text-pure-white transition-colors">Settings</Link></li>
                <li><Link to="/notifications" className="hover:text-pure-white transition-colors">Notifications</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-sm font-bold text-pure-white mb-3">Authentication</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/login" className="hover:text-pure-white transition-colors">Immersive Login</Link></li>
                <li><Link to="/login-classic" className="hover:text-pure-white transition-colors">Login (Classic)</Link></li>
                <li><Link to="/auth/signup-step-1" className="hover:text-pure-white transition-colors">Sign Up</Link></li>
                <li><Link to="/auth/signup-step-2" className="hover:text-pure-white transition-colors">DigiLocker Verification</Link></li>
                <li><Link to="/auth/otp" className="hover:text-pure-white transition-colors">OTP Verification</Link></li>
                <li><Link to="/auth/role-selection" className="hover:text-pure-white transition-colors">Role Selection</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>© 2026 Karwan Technologies India Pvt Ltd. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <Link to="/screens" className="hover:text-white transition-colors">All 35 Screens</Link>
              <Link to="/settings/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/settings" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/settings/help" className="hover:text-white transition-colors">Trust Standards</Link>
              <Link to="/404" className="hover:text-white transition-colors">404 Page</Link>
            </div>
          </div>
        </div>
      </footer>
      )}
    </div>
  );
}
