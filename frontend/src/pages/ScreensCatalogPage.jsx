import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SharedLayout from '../components/layout/SharedLayout';

export default function ScreensCatalogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const screens = [
    // 1. Landing & Core (3)
    { num: 1, cat: 'Landing & Core', name: 'Landing (Product Story)', route: '/', id: '931ebb8140734d9482fbbce7e998f71f' },
    { num: 2, cat: 'Landing & Core', name: 'Home (No Active Trip)', route: '/home', id: '7b628e06db8f48fe982e33b2744b67e5' },
    { num: 3, cat: 'Landing & Core', name: '404 Not Found', route: '/404', id: '2d48569aeeab4112a5da7ba083b68176' },

    // 2. Auth Flow (6)
    { num: 4, cat: 'Auth Flow', name: 'Immersive Login Screen', route: '/auth/immersive-login', id: '8091dcc7723045cf8985961abf95bee9' },
    { num: 5, cat: 'Auth Flow', name: 'Login (Classic)', route: '/auth/login', id: 'af66b242359048bb9fd5aeaded794b96' },
    { num: 6, cat: 'Auth Flow', name: 'Role Selection', route: '/auth/role-selection', id: '3aeb915323374fc8a08d44c9362a2704' },
    { num: 7, cat: 'Auth Flow', name: 'Signup Step 1', route: '/auth/signup-step-1', id: '5ce3b5f8511143d98eb415cd8a0fc895' },
    { num: 8, cat: 'Auth Flow', name: 'Signup Step 2 (DigiLocker)', route: '/auth/signup-step-2', id: 'dabed8bb75404028992277b550a0c261' },
    { num: 9, cat: 'Auth Flow', name: 'OTP Verification', route: '/auth/otp', id: 'ec9df051594f4caa9ee5b9396706f794' },

    // 3. Trip Planning & Experience (7)
    { num: 10, cat: 'Trip Planning & Experience', name: 'Plan New Trip (Route)', route: '/trip/plan/route', id: '01a3480e62984115ae44a940b1eb04e3' },
    { num: 11, cat: 'Trip Planning & Experience', name: 'Plan New Trip (Preferences)', route: '/trip/plan/preferences', id: '41c54c9b5a2c48d5acbe9c94eaa5ad16' },
    { num: 12, cat: 'Trip Planning & Experience', name: 'Plan New Trip (Review Refined)', route: '/trip/plan/review', id: '3fc1f40e6e4e455a8c7afc5e069e18b7' },
    { num: 13, cat: 'Trip Planning & Experience', name: 'Your Adaptive Itinerary', route: '/trip/itinerary', id: '2b83e6d2d7d54ef897b22ba1acefd1ff' },
    { num: 14, cat: 'Trip Planning & Experience', name: 'LiveTrail Transit Dashboard', route: '/trip/livetrail', id: 'daca15712ca1471aa72a5b5bea1e1ab6' },
    { num: 15, cat: 'Trip Planning & Experience', name: 'TrustRadar Dashboard', route: '/trip/trustradar', id: '4c44889ddbd54d60b444fd645a9e9bbf' },
    { num: 16, cat: 'Trip Planning & Experience', name: 'Trip Completion (Rate & Verify)', route: '/trip/complete', id: '575c8a57a8754a96a3cf6187fb356460' },

    // 4. Ground Truth Directory (7)
    { num: 17, cat: 'Ground Truth Directory', name: 'Ground Truth Directory', route: '/directory', id: '4bcc0b9838fe40aca61092b819e5270d' },
    { num: 18, cat: 'Ground Truth Directory', name: 'Pine Ridge Cabin (Stay Details)', route: '/directory/stays/pine-ridge-cabin', id: 'da59b22755b64c218ad1d0e2575cfe0f' },
    { num: 19, cat: 'Ground Truth Directory', name: 'The Heritage Haveli (Stay Details)', route: '/directory/stays/heritage-haveli', id: 'e9b1da3269654a3388bc6621e3d2f28b' },
    { num: 20, cat: 'Ground Truth Directory', name: 'Mewar Palace Villa (Stay Details)', route: '/directory/stays/mewar-palace-villa', id: 'a968a791bff24660b8c5b5a48006ecc9' },
    { num: 21, cat: 'Ground Truth Directory', name: 'Rajesh Gupta (Guide Details)', route: '/directory/guides/rajesh-gupta', id: '35705193b2f6425c8f4f93bd3a918771' },
    { num: 22, cat: 'Ground Truth Directory', name: 'Vendor Details', route: '/directory/vendors/details', id: 'b70790ae8aec4c2a95ef4dc3a178fce1' },
    { num: 23, cat: 'Ground Truth Directory', name: 'Market Square Souvenirs', route: '/directory/vendors/market-square-souvenirs', id: '87a59c96cb384cb691e48397808dbd83' },

    // 5. Dashboards & Settings (7)
    { num: 24, cat: 'Dashboards & Settings', name: 'Traveller Dashboard', route: '/dashboard', id: 'e35e541363594a70aa6aab20948b9ba7' },
    { num: 25, cat: 'Dashboards & Settings', name: 'Your Profile (KARWAN ID)', route: '/profile', id: 'd5f8daeb63dc4328abd1ed22f6e1fac6' },
    { num: 26, cat: 'Dashboards & Settings', name: 'Settings', route: '/settings', id: '33416955f2894571a4a5bce751630f99' },
    { num: 27, cat: 'Dashboards & Settings', name: 'Settings (Privacy & Verification)', route: '/settings/privacy', id: 'f918d220469043beabf3c3c4acc54313' },
    { num: 28, cat: 'Dashboards & Settings', name: 'Settings (Notifications)', route: '/settings/notifications', id: 'f483a67e4c9240a2a317264c27602993' },
    { num: 29, cat: 'Dashboards & Settings', name: 'Settings (Help & Support)', route: '/settings/help', id: 'f2997b91c3554c2e9f15a94de604b56b' },
    { num: 30, cat: 'Dashboards & Settings', name: 'Notifications', route: '/notifications', id: '21073382e643497397df97f5077df154' },

    // 6. Partner Portal (5)
    { num: 31, cat: 'Partner Portal', name: 'Partner Dashboard', route: '/partner/dashboard', id: 'f42f7f8b4e6d422992fbbb3b40ac93e4' },
    { num: 32, cat: 'Partner Portal', name: 'Partner Verification (KYC Step 1)', route: '/partner/kyc/step-1', id: '3b59a460bf4c40df8ea71144947c5221' },
    { num: 33, cat: 'Partner Portal', name: 'Partner Verification (Step 2: Documents)', route: '/partner/kyc/step-2', id: 'cd3a1736037d46c383342aa83281145a' },
    { num: 34, cat: 'Partner Portal', name: 'Partner Verification (Step 3: Review)', route: '/partner/kyc/step-3', id: '5f4cae2f30cd44b69acdb556655292ed' },
    { num: 35, cat: 'Partner Portal', name: 'Edit Listing (Provider)', route: '/partner/listing/edit', id: 'ac4a42c1433c4884983bb0b09a49e3dc' },
  ];

  const categories = [
    'All',
    'Landing & Core',
    'Auth Flow',
    'Trip Planning & Experience',
    'Ground Truth Directory',
    'Dashboards & Settings',
    'Partner Portal'
  ];

  const filtered = screens.filter((s) => {
    const matchesCat = activeCategory === 'All' || s.cat === activeCategory;
    const matchesSearch =
      search === '' ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.route.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <SharedLayout>
      <div className="bg-background min-h-screen py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-surface-container-high pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold text-secondary mb-3">
                <span className="material-symbols-outlined text-sm">grid_view</span>
                <span>Karwan 35 Screens Specification</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                All 35 Built Screens
              </h1>
              <p className="text-text-gray text-sm sm:text-base mt-2 max-w-2xl">
                Browse, search, and navigate across all 35 fully implemented screens of the Karwan travel intelligence application.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-text-gray">
                Showing <strong>{filtered.length}</strong> of <strong>35</strong> screens
              </span>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-gray text-lg">
                search
              </span>
              <input
                type="text"
                placeholder="Search screens by name, route, or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-surface-container-high bg-white text-sm text-primary placeholder:text-text-gray/60 focus:outline-none focus:border-secondary transition-colors"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-gray hover:text-primary text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? 'bg-secondary text-white shadow-sm'
                      : 'bg-surface-container hover:bg-surface-container-high text-text-gray hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Screens Grid */}
          <div id="screens-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s) => (
              <div
                key={s.num}
                className="group p-5 rounded-2xl bg-white border border-surface-container-high hover:border-secondary shadow-card hover:shadow-floating transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-secondary/10 text-secondary font-mono font-bold text-xs">
                      #{s.num.toString().padStart(2, '0')}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-text-gray text-[11px] font-medium">
                      {s.cat}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-primary group-hover:text-secondary transition-colors line-clamp-1">
                    {s.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-text-gray">
                    <code className="text-secondary font-mono text-[11px] bg-secondary/5 px-2 py-0.5 rounded border border-secondary/15">
                      {s.route}
                    </code>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-surface-container-low flex items-center justify-between text-xs">
                  <span className="text-[10px] text-text-gray font-mono">
                    ID: {s.id.slice(0, 8)}...
                  </span>
                  <Link
                    to={s.route}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:text-primary transition-colors group-hover:translate-x-0.5 transform duration-150"
                  >
                    <span>Launch</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-text-gray space-y-3">
              <span className="material-symbols-outlined text-4xl text-text-gray/40">search_off</span>
              <p className="text-sm">No screens matched your query "{search}".</p>
              <button
                type="button"
                onClick={() => { setSearch(''); setActiveCategory('All'); }}
                className="px-4 py-1.5 rounded-full bg-secondary text-white text-xs font-semibold hover:bg-secondary/90 transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </SharedLayout>
  );
}
