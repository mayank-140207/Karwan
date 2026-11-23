import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import CommandPaletteModal from '../landing/CommandPaletteModal';
import ScrollProgressLine from './ScrollProgressLine';
import BackToTop from './BackToTop';

const NAV_ITEMS = [
  { label: 'Traveller Dashboard', path: '/dashboard', icon: 'dashboard' },
  { label: 'Ground Truth Directory', path: '/directory', icon: 'travel_explore' },
  { label: 'LiveTrail Transit', path: '/trip/livetrail', icon: 'alt_route' },
  { label: 'TrustRadar', path: '/trip/trustradar', icon: 'radar' },
  { label: 'Plan Trip', path: '/trip/plan/route', icon: 'add_road' },
  { label: 'Itinerary', path: '/trip/itinerary', icon: 'view_timeline' },
  { label: 'Notifications', path: '/notifications', icon: 'notifications' },
  { label: 'Settings', path: '/settings', icon: 'settings' },
  { label: 'Partner Portal', path: '/partner/dashboard', icon: 'storefront' },
];

/**
 * AppShell component
 * White sidebar with thin borders (#E4E7EC), green dot on active item,
 * top bar with Search (⌘K command palette that searches cities) and notification bell.
 */
export default function AppShell({
  children,
  currentRoute,
  title,
  subtitle,
  actions
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const activePath = currentRoute || location.pathname;

  // Listen for ⌘K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-page text-ink flex flex-col font-sans">
      <ScrollProgressLine />

      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Container */}
      <div className="flex-1 flex w-full">
        {/* White Sidebar with Thin Borders (#E4E7EC) */}
        <aside
          className={`
            fixed top-0 bottom-0 left-0 z-40 w-64 bg-white border-r border-border flex flex-col justify-between
            transition-transform duration-200 ease-in-out lg:translate-x-0
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `.trim()}
        >
          {/* Logo Header */}
          <div>
            <div className="h-16 flex items-center justify-between px-6 border-b border-border">
              <Logo variant="color" size="md" to="/" />
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 text-muted hover:text-ink rounded-md"
                aria-label="Close sidebar"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation links with green active dot */}
            <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-160px)]">
              {NAV_ITEMS.map((item) => {
                const isActive = activePath === item.path || activePath.startsWith(`${item.path}/`);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-center gap-3 px-3.5 py-2.5 rounded-button text-xs sm:text-sm font-medium transition-all duration-150 group
                      ${
                        isActive
                          ? 'bg-green/10 text-green font-semibold'
                          : 'text-muted hover:text-ink hover:bg-[#F2F4F6]'
                      }
                    `.trim()}
                  >
                    {/* Green Dot on active item */}
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-green shrink-0 shadow-sm" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-border shrink-0 transition-colors" />
                    )}

                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom user / logout / quick links */}
          <div className="p-4 border-t border-border bg-[#FAFAFA]">
            <Link
              to="/profile"
              className="flex items-center gap-3 p-2 rounded-button hover:bg-white border border-transparent hover:border-border transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-green text-white font-semibold text-xs flex items-center justify-center shrink-0">
                KW
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-ink truncate">Karwan Traveller</p>
                <p className="text-[11px] font-mono text-muted truncate">Verified #9042</p>
              </div>
            </Link>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col lg:pl-64 min-w-0">
          {/* Top Bar with Search (⌘K) & Notifications */}
          <header className="sticky top-0 z-30 h-16 bg-white/95 backdrop-blur-md border-b border-border flex items-center justify-between px-4 sm:px-8">
            <div className="flex items-center gap-3 flex-1">
              {/* Mobile hamburger button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-button text-muted hover:text-ink hover:bg-page"
                aria-label="Open navigation menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* ⌘K Command Palette Search Bar */}
              <button
                onClick={() => setCommandPaletteOpen(true)}
                className="flex items-center justify-between gap-3 w-full max-w-md px-3.5 py-2 text-xs sm:text-sm text-muted bg-[#F8F9FB] border border-border rounded-button hover:border-[#D0D5DD] hover:bg-white transition-all text-left group"
              >
                <div className="flex items-center gap-2 truncate">
                  <svg className="w-4 h-4 text-muted group-hover:text-green transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="truncate">Search verified cities, routes & stays...</span>
                </div>
                <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono uppercase bg-white border border-border rounded text-muted shadow-sm shrink-0">
                  <span>⌘</span><span>K</span>
                </kbd>
              </button>
            </div>

            {/* Right Top Bar Utilities */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Notification Bell */}
              <Link
                to="/notifications"
                className="relative p-2 rounded-button text-muted hover:text-ink hover:bg-page transition-colors"
                aria-label="View notifications"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {/* Unread indicator green dot */}
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-green ring-2 ring-white" />
              </Link>

              {/* Quick Action / Avatar */}
              <Link
                to="/profile"
                className="w-8 h-8 rounded-full bg-green/10 border border-green/30 text-green font-bold text-xs flex items-center justify-center hover:bg-green hover:text-white transition-colors"
                title="Profile & KARWAN ID"
              >
                KW
              </Link>
            </div>
          </header>

          {/* Main Page Canvas */}
          <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-container-max w-full mx-auto">
            {children}
          </main>
        </div>
      </div>

      {/* Back to top floating utility */}
      <BackToTop />

      {/* ⌘K Command Palette Modal */}
      <CommandPaletteModal
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
