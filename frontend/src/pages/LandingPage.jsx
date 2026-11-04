import React, { useState, useEffect, Suspense, lazy } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Eagerly loaded above-the-fold components for instant First Contentful Paint
import LandingNav from '../components/landing/LandingNav';
import HeroSection from '../components/landing/HeroSection';
import LiveProductDemo from '../components/landing/LiveProductDemo';
import StatsRow from '../components/landing/StatsRow';
import ScreensCatalogModal from '../components/landing/ScreensCatalogModal';

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
  const [screensModalOpen, setScreensModalOpen] = useState(false);
  const [selectedDemoTab, setSelectedDemoTab] = useState(0);

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

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased font-sans selection:bg-secondary/20 selection:text-primary">
      {/* 1. Nav (Fixed, with Modules mega-menu, logo, login, get started) */}
      <LandingNav onOpenScreensModal={() => setScreensModalOpen(true)} />

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

        {/* 10. How It Works: Pinned horizontal scroll / responsive cards (01 Plan, 02 Travel with live data, 03 Auto-heal, 04 Verify and give back) */}
        <Suspense fallback={<SectionLoadingFallback height="h-[500px]" />}>
          <HowItWorksSection />
        </Suspense>

        {/* 11. For Partners: Profile mockup tabs (Auto stand, Guide, Homestay, Vendor) with "Become a verified partner" button */}
        <Suspense fallback={<SectionLoadingFallback height="h-[500px]" />}>
          <PartnersSection />
        </Suspense>

        {/* 12. Final Dark CTA Card ("See it running on your route.") + Footer with oversized faded Karwan wordmark */}
        <Suspense fallback={<SectionLoadingFallback height="h-[600px]" />}>
          <FinalCtaFooter onOpenScreensModal={() => setScreensModalOpen(true)} />
        </Suspense>
      </main>

      {/* 35 Screens Catalog Modal */}
      <ScreensCatalogModal
        isOpen={screensModalOpen}
        onClose={() => setScreensModalOpen(false)}
      />
    </div>
  );
}
