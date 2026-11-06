import React, { useState, useEffect, Suspense, lazy } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Eagerly loaded above-the-fold components for instant First Contentful Paint
import LandingNav from '../components/landing/LandingNav';
import HeroSection from '../components/landing/HeroSection';
import LiveProductDemo from '../components/landing/LiveProductDemo';
import StatsRow from '../components/landing/StatsRow';
import CommandPaletteModal from '../components/landing/CommandPaletteModal';

// Lazy-load sections below the fold for optimal Lighthouse Performance (>85)
const ScrollStorySection = lazy(() => import('../components/landing/ScrollStorySection'));
const MarqueeStrip = lazy(() => import('../components/landing/MarqueeStrip'));
const EditorialQuote = lazy(() => import('../components/landing/EditorialQuote'));
const AlternatingModules = lazy(() => import('../components/landing/AlternatingModules'));
const OrbitTrustLayer = lazy(() => import('../components/landing/OrbitTrustLayer'));
const HowItWorksSection = lazy(() => import('../components/landing/HowItWorksSection'));
const PartnersSection = lazy(() => import('../components/landing/PartnersSection'));
const FinalCtaFooter = lazy(() => import('../components/landing/FinalCtaFooter'));

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Lightweight skeleton fallback for lazy-loaded sections
function SectionLoadingFallback({ height = 'h-64' }) {
  return (
    <div className={`w-full ${height} flex items-center justify-center bg-surface-container-low/30`}>
      <div className="w-6 h-6 border-2 border-secondary/20 border-t-secondary rounded-full animate-spin" />
    </div>
  );
}

export default function LandingPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedDemoTab, setSelectedDemoTab] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Initialize Lenis Smooth Scroll with GSAP ScrollTrigger Synchronization
  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  // Call ScrollTrigger.refresh() after images load to ensure exact trigger positions
  useEffect(() => {
    const handleImageLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleImageLoad);
    return () => window.removeEventListener('load', handleImageLoad);
  }, []);

  // Track scroll progress for 2px top bar and Back-To-Top button (>600px)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, currentScroll / totalScroll)));
      }
      setShowBackToTop(currentScroll > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcut for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased font-sans selection:bg-secondary/20 selection:text-primary relative">
      {/* 3. 2px green scroll-progress line along the top edge of the page */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[60] pointer-events-none"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress * 100)}
      >
        <div
          className="h-full bg-secondary origin-left transition-transform duration-75 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* 1. Nav (Fixed, with real --header-h, Modules mega-menu, logo, search button with ⌘K, login, get started) */}
      <LandingNav onOpenSearchPalette={() => setCommandPaletteOpen(true)} />

      <main>
        {/* 2. Hero Section: Editorial headline, italic accent phrase, city search, faint grid background, module chips */}
        <HeroSection onSelectDemoTab={(idx) => setSelectedDemoTab(idx)} />

        {/* 3. Live Product Demo: Browser-frame mockup, 4 tabs (LiveTrail, TrustRadar, Auto-heal, Ground Truth), progress bar, toast cards */}
        <LiveProductDemo
          activeTab={selectedDemoTab}
          onTabChange={(idx) => setSelectedDemoTab(idx)}
        />

        {/* 4. Stats Row: 4 counters read from Supabase (cities, places, fare reports, modules). Hides counter if 0 */}
        <StatsRow />

        {/* 5. Pinned Scroll Story (Dark section): Mathura to Vrindavan trip with perspective-tilted device flattening on scroll */}
        <Suspense fallback={<SectionLoadingFallback height="h-[600px]" />}>
          <ScrollStorySection />
        </Suspense>

        {/* 6. Marquee Strip: Slow keywords marquee with pause on hover */}
        <Suspense fallback={<SectionLoadingFallback height="h-16" />}>
          <MarqueeStrip />
        </Suspense>

        {/* 7. Editorial Statement: "Maps help you find a place. Karwan tells you whether to trust it." */}
        <Suspense fallback={<SectionLoadingFallback height="h-48" />}>
          <EditorialQuote />
        </Suspense>

        {/* 8. Four Alternating Rows: Text on one side, mockup on the other, 3 check bullets & explore links */}
        <Suspense fallback={<SectionLoadingFallback height="h-[800px]" />}>
          <AlternatingModules />
        </Suspense>

        {/* 9. One Trust Layer: KARWAN ID in center with 4 orbiting module icons on concentric rings */}
        <Suspense fallback={<SectionLoadingFallback height="h-[500px]" />}>
          <OrbitTrustLayer />
        </Suspense>

        {/* 10. How It Works: Pinned horizontal scroll / responsive cards with one-line green benefits */}
        <Suspense fallback={<SectionLoadingFallback height="h-[500px]" />}>
          <HowItWorksSection />
        </Suspense>

        {/* 11. For Partners: Profile mockup tabs (Auto stand, Guide, Homestay, Vendor) with "Become a verified partner" button */}
        <Suspense fallback={<SectionLoadingFallback height="h-[500px]" />}>
          <PartnersSection />
        </Suspense>

        {/* 12. Final Dark CTA Card ("See it running on your route.") + Footer with oversized faded Karwan wordmark */}
        <Suspense fallback={<SectionLoadingFallback height="h-[600px]" />}>
          <FinalCtaFooter />
        </Suspense>
      </main>

      {/* 7. Back-to-top button, bottom-right, appearing after 600px of scroll */}
      <button
        type="button"
        onClick={handleScrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-white border border-white/20 shadow-floating flex items-center justify-center transition-all duration-300 hover:bg-secondary hover:scale-105 active:scale-95 ${
          showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
        title="Back to top"
      >
        <span className="material-symbols-outlined text-xl">arrow_upward</span>
      </button>

      {/* 2. Command Palette Modal (⌘K / Ctrl+K) */}
      <CommandPaletteModal
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
