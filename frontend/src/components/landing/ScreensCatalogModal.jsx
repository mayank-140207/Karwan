import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ScreensCatalogModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const screens = [
    { num: 1, cat: 'Landing', name: 'Landing (Product Story)', route: '/' },
    { num: 2, cat: 'Landing', name: 'Home (No Active Trip)', route: '/home' },
    { num: 3, cat: 'Landing', name: '404 Not Found', route: '/404' },
    { num: 4, cat: 'Auth', name: 'Immersive Login Screen', route: '/auth/immersive-login' },
    { num: 5, cat: 'Auth', name: 'Login (Classic)', route: '/auth/login' },
    { num: 6, cat: 'Auth', name: 'Role Selection', route: '/auth/role-selection' },
    { num: 7, cat: 'Auth', name: 'Signup Step 1', route: '/auth/signup-step-1' },
    { num: 8, cat: 'Auth', name: 'Signup Step 2', route: '/auth/signup-step-2' },
    { num: 9, cat: 'Auth', name: 'OTP Verification', route: '/auth/otp' },
    { num: 10, cat: 'Trip', name: 'Plan New Trip (Route)', route: '/trip/plan/route' },
    { num: 11, cat: 'Trip', name: 'Plan New Trip (Preferences)', route: '/trip/plan/preferences' },
    { num: 12, cat: 'Trip', name: 'Plan New Trip (Review Refined)', route: '/trip/plan/review' },
    { num: 13, cat: 'Trip', name: 'Your Adaptive Itinerary', route: '/trip/itinerary' },
    { num: 14, cat: 'Trip', name: 'LiveTrail Transit Dashboard', route: '/trip/livetrail' },
    { num: 15, cat: 'Trip', name: 'TrustRadar Dashboard', route: '/trip/trustradar' },
    { num: 16, cat: 'Trip', name: 'Trip Completion (Rate & Verify)', route: '/trip/complete' },
    { num: 17, cat: 'Directory', name: 'Ground Truth Directory', route: '/directory' },
    { num: 18, cat: 'Directory', name: 'Pine Ridge Cabin (Stay Details)', route: '/directory/stays/pine-ridge-cabin' },
    { num: 19, cat: 'Directory', name: 'The Heritage Haveli (Stay Details)', route: '/directory/stays/heritage-haveli' },
    { num: 20, cat: 'Directory', name: 'Mewar Palace Villa (Stay Details)', route: '/directory/stays/mewar-palace-villa' },
    { num: 21, cat: 'Directory', name: 'Rajesh Gupta (Guide Details)', route: '/directory/guides/rajesh-gupta' },
    { num: 22, cat: 'Directory', name: 'Vendor Details', route: '/directory/vendors/details' },
    { num: 23, cat: 'Directory', name: 'Market Square Souvenirs', route: '/directory/vendors/market-square-souvenirs' },
    { num: 24, cat: 'Dashboard', name: 'Traveller Dashboard', route: '/dashboard' },
    { num: 25, cat: 'Dashboard', name: 'Your Profile (KARWAN ID)', route: '/profile' },
    { num: 26, cat: 'Dashboard', name: 'Settings', route: '/settings' },
    { num: 27, cat: 'Dashboard', name: 'Settings (Privacy & Verification)', route: '/settings/privacy' },
    { num: 28, cat: 'Dashboard', name: 'Settings (Notifications)', route: '/settings/notifications' },
    { num: 29, cat: 'Dashboard', name: 'Settings (Help & Support)', route: '/settings/help' },
    { num: 30, cat: 'Dashboard', name: 'Notifications', route: '/notifications' },
    { num: 31, cat: 'Partner', name: 'Partner Dashboard', route: '/partner/dashboard' },
    { num: 32, cat: 'Partner', name: 'Partner Verification (KYC Step 1)', route: '/partner/kyc/step-1' },
    { num: 33, cat: 'Partner', name: 'Partner Verification (Step 2: Documents)', route: '/partner/kyc/step-2' },
    { num: 34, cat: 'Partner', name: 'Partner Verification (Step 3: Review)', route: '/partner/kyc/step-3' },
    { num: 35, cat: 'Partner', name: 'Edit Listing (Provider)', route: '/partner/listing/edit' }
  ];

  const categories = ['All', 'Landing', 'Auth', 'Trip', 'Directory', 'Dashboard', 'Partner'];

  const filtered = screens.filter((s) => {
    const matchesCat = activeCategory === 'All' || s.cat === activeCategory;
    const matchesSearch =
      search === '' ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.route.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-floating border border-surface-container-high w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-surface-container-high flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span>35 SCREENS CATALOG</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary">
              All Verified Karwan UI Screens
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-primary transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Filters */}
        <div className="p-5 border-b border-surface-container-high bg-surface-container-low/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  activeCategory === c
                    ? 'bg-primary text-white'
                    : 'bg-white border border-surface-container-high text-text-gray hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-64 relative">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-gray text-sm">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search screen or route..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-full border border-surface-container-high outline-none focus:border-secondary bg-white"
            />
          </div>
        </div>

        {/* Screens Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh] divide-y divide-surface-container-high">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {filtered.map((s) => (
              <Link
                key={s.num}
                to={s.route}
                onClick={onClose}
                className="p-3.5 rounded-2xl border border-surface-container-high hover:border-secondary/60 hover:bg-surface-container-lowest transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-text-gray mb-1">
                    <span>#{String(s.num).padStart(2, '0')}</span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-text-gray font-sans font-medium">
                      {s.cat}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-primary group-hover:text-secondary transition-colors">
                    {s.name}
                  </h4>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container-high/60 flex items-center justify-between text-[11px] font-mono text-text-gray">
                  <span className="truncate max-w-[170px]">{s.route}</span>
                  <span className="material-symbols-outlined text-xs text-secondary group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-surface-container-high bg-surface-container-low/30 text-xs text-text-gray text-center">
          Showing {filtered.length} of 35 verified screens · Built to Google Stitch specifications
        </div>
      </div>
    </div>
  );
}

