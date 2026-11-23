import React, { useState } from 'react';
import {
  Logo,
  SectionLabel,
  AccentHeading,
  Button,
  Pill,
  Card,
  StatTile,
  Reveal,
  ToastCard,
  useToast,
  Marquee,
  DeviceFrame,
  PageHeader,
  EmptyState,
  Skeleton,
  ScrollProgressLine,
  BackToTop,
  GridBackground,
} from '../components/common';
import TOKENS from '../theme/tokens';
import { Link } from 'react-router-dom';

export default function StyleguidePage() {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('all');

  const triggerToast = (type) => {
    addToast({
      type,
      title: type === 'success' ? 'Telemetry verified' : type === 'warning' ? 'Schedule adjusted' : 'System notification',
      message: type === 'success'
        ? 'Ground truth consensus confirmed by 14 local nodes.'
        : 'Transit checkpoint delayed by 8 minutes on route.',
      timestamp: 'Just now',
    });
  };

  return (
    <div className="min-h-screen bg-page text-ink flex flex-col font-sans selection:bg-green/15 selection:text-green">
      <ScrollProgressLine />

      {/* Styleguide Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-container-max mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo variant="color" size="md" to="/" />
            <div className="h-5 w-px bg-border hidden sm:block" />
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted font-medium hidden sm:inline-block">
              Design System & Shared Components
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/screens"
              className="px-3.5 py-1.5 rounded-button text-xs font-mono uppercase tracking-[0.05em] text-muted hover:text-ink border border-border hover:bg-page transition-colors"
            >
              All 35 Screens
            </Link>
            <Button variant="primary" size="sm" to="/">
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with GridBackground */}
      <GridBackground className="border-b border-border py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-container-max mx-auto">
          <SectionLabel text="Design System v2.0" className="mb-3" />
          <AccentHeading
            as="h1"
            size="display"
            text="Unified design language for *Karwan* Web"
            className="max-w-3xl"
          />
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Master tokens, shared components, typography, and motion engineering powering all 35 screens in the Karwan platform.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
            <StatTile value="7" label="Core Color Tokens" subtext="Strict palette" />
            <StatTile value="16" label="Shared Components" subtext="Built once, reused" />
            <StatTile numericTarget={35} suffix=" Screens" label="Target Architecture" subtext="Full coverage" />
            <StatTile value="100%" label="Accessible" subtext="Keyboard & reduced motion" />
          </div>
        </div>
      </GridBackground>

      {/* Main Content Area */}
      <main className="max-w-container-max w-full mx-auto px-4 sm:px-8 py-16 space-y-24">
        
        {/* ========================================================= */}
        {/* 1. COLOR TOKENS */}
        {/* ========================================================= */}
        <section id="colors" className="scroll-mt-24">
          <SectionLabel text="01 / Foundations" className="mb-2" />
          <AccentHeading as="h2" size="h2" text="Color *Tokens* & Palette" className="mb-3" />
          <p className="text-muted text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            Engineered for high readability, contrast harmony, and distinct editorial hierarchy.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {/* Page */}
            <div className="p-4 rounded-card bg-white border border-border shadow-sm flex flex-col justify-between h-40">
              <div className="w-full h-14 rounded-button bg-page border border-border" />
              <div>
                <div className="font-semibold text-sm text-ink">Page</div>
                <div className="font-mono text-xs text-muted">#F8F9FB</div>
                <div className="text-[11px] text-muted/80 mt-1">Canvas background</div>
              </div>
            </div>

            {/* Ink */}
            <div className="p-4 rounded-card bg-white border border-border shadow-sm flex flex-col justify-between h-40">
              <div className="w-full h-14 rounded-button bg-ink" />
              <div>
                <div className="font-semibold text-sm text-ink">Ink</div>
                <div className="font-mono text-xs text-muted">#0B1220</div>
                <div className="text-[11px] text-muted/80 mt-1">Headings & body</div>
              </div>
            </div>

            {/* Muted */}
            <div className="p-4 rounded-card bg-white border border-border shadow-sm flex flex-col justify-between h-40">
              <div className="w-full h-14 rounded-button bg-muted" />
              <div>
                <div className="font-semibold text-sm text-ink">Muted</div>
                <div className="font-mono text-xs text-muted">#5A6472</div>
                <div className="text-[11px] text-muted/80 mt-1">Supporting labels</div>
              </div>
            </div>

            {/* Border */}
            <div className="p-4 rounded-card bg-white border border-border shadow-sm flex flex-col justify-between h-40">
              <div className="w-full h-14 rounded-button bg-border border border-muted/20" />
              <div>
                <div className="font-semibold text-sm text-ink">Border</div>
                <div className="font-mono text-xs text-muted">#E4E7EC</div>
                <div className="text-[11px] text-muted/80 mt-1">1px subtle borders</div>
              </div>
            </div>

            {/* Navy */}
            <div className="p-4 rounded-card bg-white border border-border shadow-sm flex flex-col justify-between h-40">
              <div className="w-full h-14 rounded-button bg-navy" />
              <div>
                <div className="font-semibold text-sm text-ink">Navy</div>
                <div className="font-mono text-xs text-muted">#10233F</div>
                <div className="text-[11px] text-muted/80 mt-1">Ground truth containers</div>
              </div>
            </div>

            {/* Green (Primary) */}
            <div className="p-4 rounded-card bg-white border border-border shadow-sm flex flex-col justify-between h-40">
              <div className="w-full h-14 rounded-button bg-green shadow-sm" />
              <div>
                <div className="font-semibold text-sm text-ink">Green</div>
                <div className="font-mono text-xs text-muted">#2C6E49</div>
                <div className="text-[11px] text-green font-medium mt-1">Primary action</div>
              </div>
            </div>

            {/* Dark Section */}
            <div className="p-4 rounded-card bg-[#070B14] border border-[#162238] shadow-sm flex flex-col justify-between h-40 text-white">
              <div className="w-full h-14 rounded-button bg-[#070B14] border border-[#162238]" />
              <div>
                <div className="font-semibold text-sm text-white">Dark</div>
                <div className="font-mono text-xs text-white/70">#070B14</div>
                <div className="text-[11px] text-white/50 mt-1">Radial glow areas</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. TYPOGRAPHY */}
        {/* ========================================================= */}
        <section id="typography" className="scroll-mt-24">
          <SectionLabel text="02 / Typography Hierarchy" className="mb-2" />
          <AccentHeading as="h2" size="h2" text="Editorial *Typographic* System" className="mb-3" />
          <p className="text-muted text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            Inter (700, tight line-height, letter-spacing -0.03em) paired with exactly ONE italic phrase in Noto Serif italic 400.
          </p>

          <div className="space-y-6 p-6 sm:p-8 bg-white border border-border rounded-card">
            {/* Display */}
            <div className="pb-6 border-b border-border">
              <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-2">Display (56px)</div>
              <AccentHeading
                as="h1"
                size="display"
                text="The verified ground truth for *Indian* journeys."
              />
            </div>

            {/* H1 */}
            <div className="pb-6 border-b border-border">
              <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-2">H1 (40px)</div>
              <AccentHeading
                as="h1"
                size="h1"
                text="From departure planning to *verified* arrival."
              />
            </div>

            {/* H2 */}
            <div className="pb-6 border-b border-border">
              <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-2">H2 (32px)</div>
              <AccentHeading
                as="h2"
                size="h2"
                text="Real-time consensus across *thousands* of nodes."
              />
            </div>

            {/* H3 */}
            <div className="pb-6 border-b border-border">
              <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-2">H3 (24px)</div>
              <AccentHeading
                as="h3"
                size="h3"
                text="Adaptive itineraries that heal *before* delays occur."
              />
            </div>

            {/* Body and Mono */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-2">Body (Inter 16/24)</div>
                <p className="text-ink text-base leading-6">
                  Karwan replaces unverified travel reviews with an immutable telemetry ledger. Local operators, transit stands, and heritage stays contribute authenticated observations to protect travellers from price gouging, ghost schedules, and sudden route closures.
                </p>
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-2">Mono Label (JetBrains Mono 12px, 0.08em)</div>
                <div className="space-y-2">
                  <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                    ROUTE // DEL-JAI-EXP-04 // LAT 26.9124 N
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.08em] text-green font-semibold">
                    STATUS // TELEMETRY VERIFIED // CONSENSUS 99.4%
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.08em] text-ink font-medium">
                    KARWAN ID // TRAVEL-PASS-2026-X8
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. BUTTONS & PILLS */}
        {/* ========================================================= */}
        <section id="interactive" className="scroll-mt-24">
          <SectionLabel text="03 / Actions & Indicators" className="mb-2" />
          <AccentHeading as="h2" size="h2" text="Buttons & *Status* Badges" className="mb-3" />
          <p className="text-muted text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            10px border radius, 2px translateY lift on hover, subtle ambient shadows, and semantic status indicators.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Button Variants */}
            <div className="p-6 sm:p-8 bg-white border border-border rounded-card space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted font-semibold">
                Button Styles (10px Radius, 2px Lift)
              </h3>

              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary" size="md">
                  Primary Action
                </Button>
                <Button variant="secondary" size="md">
                  Secondary Action
                </Button>
                <Button variant="dark" size="md">
                  Dark Action
                </Button>
                <Button variant="ghost" size="md">
                  Ghost Button
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 items-center pt-2">
                <Button variant="primary" size="sm">
                  Small Button
                </Button>
                <Button variant="secondary" size="sm">
                  Small Secondary
                </Button>
                <Button variant="primary" size="lg">
                  Large Primary
                </Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
                <Button variant="secondary" comingSoon>
                  Beta Feature
                </Button>
              </div>
            </div>

            {/* Pill Badges */}
            <div className="p-6 sm:p-8 bg-white border border-border rounded-card space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted font-semibold">
                Pill Badges (Status & Live Indicators)
              </h3>

              <div className="flex flex-wrap gap-2.5 items-center">
                <Pill variant="green" dot pulse>Live Verified</Pill>
                <Pill variant="navy">Ground Truth</Pill>
                <Pill variant="amber" dot>Audit Pending</Pill>
                <Pill variant="red" dot>Route Disruption</Pill>
                <Pill variant="gray">Archived</Pill>
              </div>

              <div className="p-4 rounded-card bg-[#070B14] text-white flex flex-wrap gap-2.5 items-center">
                <Pill variant="dark" dot pulse>Dark Surface Pill</Pill>
                <Pill variant="green" dot>Active Telemetry</Pill>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. CARDS & STEP NUMBERS */}
        {/* ========================================================= */}
        <section id="cards" className="scroll-mt-24">
          <SectionLabel text="04 / Containers & Ledger" className="mb-2" />
          <AccentHeading as="h2" size="h2" text="Cards with *Step* Ledger" className="mb-3" />
          <p className="text-muted text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            16px radius, 1px border (#E4E7EC), subtle hover elevation, and big light-gray step numbers (01, 02, 03).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card step="01" className="flex flex-col justify-between h-72">
              <div>
                <Pill variant="green" dot className="mb-4">Step 01</Pill>
                <h3 className="font-sans font-bold text-xl text-ink mb-2">
                  Plan & Simulate
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Enter origins, waypoints, and travel preferences. Our algorithmic engine calculates verified transit windows.
                </p>
              </div>
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-muted">Time: 1.2s</span>
                <span className="text-green text-xs font-semibold">Verified</span>
              </div>
            </Card>

            <Card step="02" className="flex flex-col justify-between h-72">
              <div>
                <Pill variant="navy" className="mb-4">Step 02</Pill>
                <h3 className="font-sans font-bold text-xl text-ink mb-2">
                  Monitor LiveTrail
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Real-time telemetry streams from local operators ensure continuous route surveillance and automated incident healing.
                </p>
              </div>
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-muted">Latency: 45ms</span>
                <span className="text-green text-xs font-semibold">99.4% Consensus</span>
              </div>
            </Card>

            <Card step="03" className="flex flex-col justify-between h-72">
              <div>
                <Pill variant="amber" dot className="mb-4">Step 03</Pill>
                <h3 className="font-sans font-bold text-xl text-ink mb-2">
                  Verify & Attest
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Travellers and guides complete trip attestation, unlocking ground truth rewards and updating local trust scores.
                </p>
              </div>
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-muted">Block: #89240</span>
                <span className="text-green text-xs font-semibold">Attested</span>
              </div>
            </Card>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. STAT TILES & REVEAL ANIMATIONS */}
        {/* ========================================================= */}
        <section id="stats-motion" className="scroll-mt-24">
          <SectionLabel text="05 / Metrics & Motion" className="mb-2" />
          <AccentHeading as="h2" size="h2" text="StatTiles & *Reveal* Animations" className="mb-3" />
          <p className="text-muted text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            Smooth count-up metrics with signature green underlines, and translateY 16px fade-ins with 80ms stagger.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white border border-border rounded-card mb-8">
            <StatTile numericTarget={2400} suffix="+" label="Verified Operators" subtext="Across 18 states" />
            <StatTile value="99.4%" label="Consensus Trust" subtext="Zero fraudulent entries" />
            <StatTile numericTarget={45} suffix="ms" label="Live Telemetry" subtext="Real-time latency" />
            <StatTile value="< 2 min" label="Auto-heal Resolution" subtext="Automated detour timing" />
          </div>

          {/* Staggered Reveal Demonstration */}
          <div className="p-6 sm:p-8 bg-[#F8F9FB] border border-border rounded-card">
            <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-4 font-semibold">
              Staggered Reveal Demo (Fade + 16px TranslateY)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Reveal staggerIndex={0}>
                <div className="p-5 bg-white border border-border rounded-card">
                  <div className="font-mono text-xs text-green font-semibold">STAGGER 00</div>
                  <h4 className="font-bold text-ink mt-1">First element reveals</h4>
                  <p className="text-xs text-muted mt-1">Triggers instantly upon entering viewport.</p>
                </div>
              </Reveal>

              <Reveal staggerIndex={1}>
                <div className="p-5 bg-white border border-border rounded-card">
                  <div className="font-mono text-xs text-green font-semibold">STAGGER 01 (+80ms)</div>
                  <h4 className="font-bold text-ink mt-1">Second element follows</h4>
                  <p className="text-xs text-muted mt-1">Offset by 80ms for harmonic rhythm.</p>
                </div>
              </Reveal>

              <Reveal staggerIndex={2}>
                <div className="p-5 bg-white border border-border rounded-card">
                  <div className="font-mono text-xs text-green font-semibold">STAGGER 02 (+160ms)</div>
                  <h4 className="font-bold text-ink mt-1">Third element resolves</h4>
                  <p className="text-xs text-muted mt-1">Respects prefers-reduced-motion.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. TOAST NOTIFICATIONS & MARQUEE */}
        {/* ========================================================= */}
        <section id="toast-marquee" className="scroll-mt-24">
          <SectionLabel text="06 / Floating Utilities & Ticker" className="mb-2" />
          <AccentHeading as="h2" size="h2" text="Floating *Toast* & Marquee" className="mb-3" />
          <p className="text-muted text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            Real-time interactive toast notifications and smooth horizontal ticker strips that pause on hover.
          </p>

          <div className="space-y-6">
            {/* Interactive Toast Triggers */}
            <div className="p-6 sm:p-8 bg-white border border-border rounded-card flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-sans font-bold text-base text-ink">Test Floating Toasts</h3>
                <p className="text-xs text-muted mt-0.5">Click to dispatch live floating notifications into the bottom-right viewport.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="sm" onClick={() => triggerToast('success')} showArrow={false}>
                  Trigger Success Toast
                </Button>
                <Button variant="secondary" size="sm" onClick={() => triggerToast('warning')} showArrow={false}>
                  Trigger Warning Toast
                </Button>
              </div>
            </div>

            {/* Static Toast Card Previews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ToastCard
                type="success"
                title="Ground Truth Node Verified"
                message="Chittorgarh Fort Stand #04 validated by 6 guides."
                timestamp="14:02 IST"
              />
              <ToastCard
                type="warning"
                title="Monsoon Road Caution"
                message="Speed limit 40 km/h applied between Jaipur and Ajmer."
                timestamp="14:00 IST"
              />
            </div>

            {/* Reusable Marquee */}
            <div className="py-4 border-y border-border bg-white">
              <Marquee speed={30}>
                <span className="font-mono text-xs uppercase tracking-[0.08em] font-semibold text-ink flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green" /> JAIPUR HERITAGE CORRIDOR
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.08em] font-semibold text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green" /> UDAIPUR LAKE TRANSIT
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.08em] font-semibold text-ink flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green" /> VARANASI GHAT WALKWAY
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.08em] font-semibold text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green" /> SPITI HIGH PASS TELEMETRY
                </span>
              </Marquee>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. DEVICE FRAMES (BROWSER & PHONE WITH 3D PERSPECTIVE) */}
        {/* ========================================================= */}
        <section id="devices" className="scroll-mt-24">
          <SectionLabel text="07 / Device Presentation" className="mb-2" />
          <AccentHeading as="h2" size="h2" text="DeviceFrames with *Perspective* Tilt" className="mb-3" />
          <p className="text-muted text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            Browser and Phone mockup frames with CSS perspective (subtle 3D angles on desktop, responsive stacked on mobile).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Browser Frame (2 cols) */}
            <div className="lg:col-span-2">
              <DeviceFrame type="browser" tilt="subtle" url="karwan.app/trip/livetrail">
                <div className="p-6 sm:p-8 bg-page min-h-[280px] flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div>
                      <SectionLabel text="Live Telemetry Stream" />
                      <h4 className="font-bold text-lg text-ink mt-1">Delhi → Agra Corridor #02</h4>
                    </div>
                    <Pill variant="green" dot pulse>99.4% Trust</Pill>
                  </div>
                  <div className="grid grid-cols-3 gap-4 my-6">
                    <div className="p-3 bg-white rounded-card border border-border">
                      <div className="text-xs text-muted font-mono">EST SPEED</div>
                      <div className="text-lg font-bold text-ink">74 km/h</div>
                    </div>
                    <div className="p-3 bg-white rounded-card border border-border">
                      <div className="text-xs text-muted font-mono">NEXT STOP</div>
                      <div className="text-lg font-bold text-ink">Mathura</div>
                    </div>
                    <div className="p-3 bg-white rounded-card border border-border">
                      <div className="text-xs text-muted font-mono">DELAYS</div>
                      <div className="text-lg font-bold text-green">0 min</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted font-mono">
                    LAST NODE PING: 24s ago via Mathura Junction Gateway
                  </div>
                </div>
              </DeviceFrame>
            </div>

            {/* Phone Frame (1 col) */}
            <div className="lg:col-span-1 flex justify-center">
              <DeviceFrame type="phone" tilt="left">
                <div className="p-5 flex flex-col justify-between h-full bg-white text-ink">
                  <div className="pt-8">
                    <SectionLabel text="Karwan Mobile" />
                    <h4 className="font-bold text-base mt-1">Verified Pass</h4>
                    <p className="text-xs text-muted mt-0.5">UID: #9042-RAJESH</p>
                  </div>
                  <div className="my-auto py-6 text-center">
                    <div className="w-24 h-24 mx-auto rounded-card bg-[#E8F3ED] border-2 border-green/30 flex items-center justify-center text-green font-mono font-bold text-lg">
                      [QR CODE]
                    </div>
                    <p className="text-[11px] text-muted mt-3 font-mono">Scannable by local ground verifiers</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <Button variant="primary" size="sm" className="w-full justify-center">
                      Present at Stand
                    </Button>
                  </div>
                </div>
              </DeviceFrame>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. PAGE HEADER, EMPTY STATE, SKELETON */}
        {/* ========================================================= */}
        <section id="patterns" className="scroll-mt-24">
          <SectionLabel text="08 / Layout Helpers & Skeletons" className="mb-2" />
          <AccentHeading as="h2" size="h2" text="PageHeader, EmptyState & *Skeleton*" className="mb-3" />
          <p className="text-muted text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            Production-ready layout patterns ensuring zero visual regressions across state changes.
          </p>

          <div className="space-y-8">
            {/* PageHeader Example */}
            <div className="p-6 bg-white border border-border rounded-card">
              <PageHeader
                label="Directory // Stays & Heritage"
                title="Verified *Heritage* Haveli Collection"
                italicPhrase="Heritage"
                subtitle="Curated, inspected and audit-backed heritage accommodations across Rajasthan and Madhya Pradesh."
                actions={
                  <>
                    <Button variant="secondary" size="sm">Export Data</Button>
                    <Button variant="primary" size="sm">Book Verified Stay</Button>
                  </>
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* EmptyState Example */}
              <div>
                <EmptyState
                  title="No active *itineraries* found"
                  italicPhrase="itineraries"
                  description="You have no current active journeys running on LiveTrail. Choose a curated route or design a customized journey."
                  actionLabel="Plan New Route"
                  actionTo="/trip/plan/route"
                />
              </div>

              {/* Skeleton Loaders Example */}
              <div className="p-6 bg-white border border-border rounded-card space-y-4">
                <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted font-semibold">
                  Skeleton Loading Placeholders
                </div>
                <Skeleton variant="heading" />
                <Skeleton variant="text" />
                <Skeleton variant="text" width="85%" />
                <div className="flex items-center gap-4 pt-3">
                  <Skeleton variant="avatar" />
                  <div className="space-y-2 flex-1">
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" />
                  </div>
                </div>
                <div className="pt-2">
                  <Skeleton variant="button" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. DARK SECTION DEMONSTRATION */}
        {/* ========================================================= */}
        <section id="dark-section" className="scroll-mt-24">
          <SectionLabel text="09 / Dark Surfaces" className="mb-2" />
          <AccentHeading as="h2" size="h2" text="Dark Section with *Radial* Glow" className="mb-3" />
          
          <div className="rounded-card bg-[#070B14] border border-[#162238] p-8 sm:p-12 relative overflow-hidden text-white shadow-floating">
            {/* Soft Green/Navy Radial Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(44, 110, 73, 0.22), rgba(16, 35, 63, 0.35), transparent)',
              }}
            />

            <div className="relative z-10 max-w-2xl">
              <Pill variant="dark" dot pulse className="mb-4">Secured Infrastructure</Pill>
              <AccentHeading
                as="h2"
                size="h1"
                text="The immutable backbone of *Indian* ground travel."
                italicPhrase="Indian"
                dark
                className="mb-4"
              />
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Operating in full harmony with dark and light contexts. Dark surfaces are anchored at #070B14 with a soft radial bloom of #2C6E49 and #10233F.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="md">
                  Explore Ground Truth
                </Button>
                <Button variant="secondary" size="md">
                  Operator Credentials
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Styleguide Footer */}
      <footer className="mt-20 border-t border-border bg-white py-10 px-4 sm:px-8">
        <div className="max-w-container-max mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-3">
            <Logo variant="color" size="sm" to="/" />
            <span>— Design System & Master Shared Components</span>
          </div>
          <div className="font-mono">
            Page #F8F9FB // Ink #0B1220 // Green #2C6E49 // Border #E4E7EC
          </div>
        </div>
      </footer>

      {/* Floating Back to Top */}
      <BackToTop />
    </div>
  );
}
