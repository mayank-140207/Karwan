import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icons } from '../common/Icons';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollStorySection() {
  const [activeStep, setActiveStep] = useState(0);
  const [storyProgress, setStoryProgress] = useState(0);
  const sectionRef = useRef(null);
  const deviceRef = useRef(null);
  const contentRef = useRef(null);

  // Exactly 4 steps matching "01 / 04" specification
  const steps = [
    {
      num: '01',
      phase: 'DEPARTURE',
      title: 'Plan the Corridor',
      subtitle: 'Mathura Junction → Vrindavan Bankey Bihari',
      desc: 'Set your domestic route and transit pace. Karwan identifies active corridors, transfer waypoints, and verified travel stops before departure.',
      screen: {
        badge: 'CORRIDOR INITIATION',
        badgeColor: 'text-emerald-400 bg-emerald-950/80 border-emerald-800',
        title: 'Braj Heritage Corridor',
        route: 'Mathura Jn. (Gate 1 Exit) → Chhatikara → Vidyapeeth Marg',
        metric1: '14.2 km',
        metric1Label: 'Total Distance',
        metric2: '32 mins',
        metric2Label: 'Estimated Transit',
        metric3: '99/100',
        metric3Label: 'Safety Telemetry',
        telemetry: '3 verified transit modes available · Continuous street-lighting audited'
      }
    },
    {
      num: '02',
      phase: 'TRANSIT',
      title: 'Check the Going-Fare',
      subtitle: 'Eliminate tourist markups with verified rider data',
      desc: 'Before boarding an e-rickshaw or shared auto, check actual rates crowdsourced from recent riders in the last 2 hours. Pay the fair rate.',
      screen: {
        badge: 'FARE BENCHMARK VERIFIED',
        badgeColor: 'text-amber-400 bg-amber-950/80 border-amber-800',
        title: 'Prepaid E-Rickshaw Going-Fare',
        route: 'Mathura Junction Gate 2 → Vrindavan Chhatikara Stand',
        metric1: '₹20 – ₹25',
        metric1Label: 'Verified Seat Rate',
        metric2: '₹120',
        metric2Label: 'Standard Tout Quote',
        metric3: '18 Riders',
        metric3Label: 'Logged Today',
        telemetry: 'Auto Union #42 registered · Municipal tariff rate locked · Zero markup'
      }
    },
    {
      num: '03',
      phase: 'LOCAL COMMERCE',
      title: 'Trust the Local Vendor',
      subtitle: 'Discover verified artisans and heritage guides',
      desc: 'Avoid commission emporiums. TrustRadar maps independent local vendors and cultural guides authenticated by community consensus.',
      screen: {
        badge: 'COMMUNITY ACCREDITATION',
        badgeColor: 'text-blue-400 bg-blue-950/80 border-blue-800',
        title: 'Radhe Shyam Peda Bhandar',
        route: 'Chowk Bazaar, Mathura · Traditional sweets since 1968',
        metric1: '4.9 ★',
        metric1Label: 'Audit Rating',
        metric2: '0%',
        metric2Label: 'Bus Kickbacks',
        metric3: '#VN-2041',
        metric3Label: 'KARWAN Trust ID',
        telemetry: 'Accredited Guide: Rajesh Gupta (#UP-9821) · Certified pure khoya'
      }
    },
    {
      num: '04',
      phase: 'ADAPTATION',
      title: 'Auto-heal & Stay Telemetry',
      subtitle: 'Dynamic bypass and verified utility continuity',
      desc: 'A spontaneous procession blocks Chhatikara. Auto-heal alerts you and rebalances route via Gandhi Marg, while stay sensors confirm water & power.',
      screen: {
        badge: 'AUTO-HEAL & STAY AUDIT',
        badgeColor: 'text-purple-400 bg-purple-950/80 border-purple-800',
        title: 'Bypass Active & Stay Ready',
        route: 'Spontaneous procession averted via Bhaktivedanta Marg',
        metric1: '38 mins',
        metric1Label: 'Gridlock Saved',
        metric2: '100%',
        metric2Label: 'Hot Water Running',
        metric3: '25 kVA',
        metric3Label: 'Genset Standby',
        telemetry: 'The Heritage Haveli: 100% solar water running · 78 Mbps verified fiber'
      }
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      if (!contentRef.current || !deviceRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=180%',
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const stepIndex = Math.min(3, Math.floor(self.progress * 4));
            setActiveStep(stepIndex);
            setStoryProgress(self.progress);
          }
        }
      });

      // Starting at perspective(1600px) rotateX(14deg) rotateY(-10deg) scale(.95)
      // Flattening smoothly to rotateX(0deg) rotateY(0deg) scale(1)
      tl.fromTo(
        deviceRef.current,
        {
          rotateX: 14,
          rotateY: -10,
          scale: 0.95,
          transformPerspective: 1600
        },
        {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          ease: 'power2.out',
          duration: 0.25
        },
        0
      );

      tl.to(
        deviceRef.current,
        {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          ease: 'none',
          duration: 0.75
        },
        0.25
      );
    });

    return () => mm.revert();
  }, []);

  const active = steps[activeStep];
  const stepFormatted = `0${activeStep + 1} / 04`;

  return (
    <section
      id="trip-story"
      ref={sectionRef}
      className="bg-[#080d14] text-white py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background: Near-black with subtle 28px grid and soft green + navy radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#2C6E49_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(44,110,73,0.22)_0%,rgba(14,40,75,0.30)_50%,transparent_75%)] pointer-events-none blur-3xl z-0" />

      <div
        ref={contentRef}
        className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10 w-full"
      >
        {/* DESKTOP PINNED VIEW (1024px and up) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center min-h-[calc(100vh-var(--header-h)-2rem)] py-4">
          {/* Left Column: Mono label, Headline, and Plain Step List */}
          <div className="col-span-5 text-left space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold uppercase tracking-widest">
                Scroll to play · {stepFormatted}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight [text-wrap:balance]">
              A journey, played by{' '}
              <span className="italic font-normal text-emerald-400 inline-block">
                your&nbsp;scroll.
              </span>
            </h2>

            <p className="font-sans text-base text-white/70 leading-relaxed max-w-lg">
              Follow a real journey along the Mathura–Vrindavan corridor to see how Karwan’s trust engines keep domestic travellers secure, informed, and on track.
            </p>

            {/* Plain Step List */}
            <div className="space-y-4 pt-4 border-t border-white/10 max-w-lg">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className={`transition-all duration-300 cursor-pointer ${
                      isActive ? 'opacity-100' : 'opacity-35 hover:opacity-70'
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-sm font-bold ${
                          isActive ? 'text-emerald-400' : 'text-white/60'
                        }`}
                      >
                        {step.num}
                      </span>
                      <div>
                        <h4
                          className={`font-serif text-base sm:text-lg font-bold transition-colors ${
                            isActive ? 'text-white' : 'text-white/70'
                          }`}
                        >
                          {step.title}
                        </h4>
                        <div className="text-xs text-emerald-400/90 mt-0.5 font-medium">
                          {step.subtitle}
                        </div>
                        {isActive && (
                          <p className="text-xs text-white/80 mt-1.5 leading-relaxed animate-fadeIn">
                            {step.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Wide Landscape Device Mockup */}
          <div className="col-span-7 flex flex-col items-center justify-center relative">
            <div
              ref={deviceRef}
              className="relative z-10 w-full max-w-[620px] aspect-[16/10] bg-[#0c121e] rounded-3xl p-3 shadow-2xl border-2 border-white/15 flex flex-col justify-between overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Tablet Top Hardware Bar */}
              <div className="px-3 py-1 flex items-center justify-between text-[11px] font-mono text-white/40 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-bold uppercase tracking-wider">
                    KARWAN COCKPIT OS
                  </span>
                </div>
                <div className="w-10 h-1.5 bg-white/20 rounded-full" />
                <div className="flex items-center gap-2">
                  <span>STEP {stepFormatted}</span>
                  <span className="text-white/30">|</span>
                  <span>99% SIGNAL</span>
                </div>
              </div>

              {/* Screen Content: Crossfade */}
              <div
                key={activeStep}
                className="flex-1 bg-gradient-to-b from-[#111927] to-[#0a0f18] rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-left overflow-hidden transition-all duration-300 animate-fadeIn border border-white/10"
              >
                {/* Top Status Row */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${active.screen.badgeColor}`}
                  >
                    {active.screen.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <Icons.CheckCircle className="w-3.5 h-3.5" />
                    <span className="font-semibold">TELEMETRY VERIFIED</span>
                  </div>
                </div>

                {/* Primary Card Title & Route */}
                <div className="my-auto py-2 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                    PHASE {active.num} · {active.phase}
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                    {active.screen.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <Icons.Location className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{active.screen.route}</span>
                  </div>
                </div>

                {/* 3 Prominent Metrics Bar */}
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 my-1">
                  <div>
                    <div className="font-mono text-[10px] text-white/50 uppercase">
                      {active.screen.metric1Label}
                    </div>
                    <div className="font-serif font-bold text-base sm:text-lg text-emerald-400 mt-0.5">
                      {active.screen.metric1}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-white/50 uppercase">
                      {active.screen.metric2Label}
                    </div>
                    <div className="font-serif font-bold text-base sm:text-lg text-white mt-0.5">
                      {active.screen.metric2}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-white/50 uppercase">
                      {active.screen.metric3Label}
                    </div>
                    <div className="font-serif font-bold text-base sm:text-lg text-white mt-0.5">
                      {active.screen.metric3}
                    </div>
                  </div>
                </div>

                {/* Bottom Live Audit Status */}
                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-white/80">{active.screen.telemetry}</span>
                  </div>
                  <span className="text-emerald-400 font-bold shrink-0">LIVE FEED</span>
                </div>
              </div>
            </div>

            {/* Hairline Progress Bar Under Device */}
            <div className="w-full max-w-[620px] mt-4">
              <div className="h-[2px] bg-white/15 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-400 transition-all duration-75 ease-out"
                  style={{ width: `${Math.min(100, Math.max(0, storyProgress * 100))}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-white/50 mt-1.5">
                <span>01 DEPARTURE</span>
                <span>02 TRANSIT</span>
                <span>03 VENDOR</span>
                <span>04 AUTO-HEAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET STACKED VIEW (< 1024px) */}
        <div className="lg:hidden space-y-10">
          <div className="text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>01 TO 04 · END-TO-END JOURNEY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              A journey, played by{' '}
              <span className="italic font-normal text-emerald-400 inline-block">
                your&nbsp;journey.
              </span>
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              How Karwan keeps domestic travellers secure, informed, and on track across every corridor.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#0f172a] rounded-2xl p-6 border border-white/10 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-emerald-400 font-bold text-sm">
                    STEP {step.num} · {step.phase}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${step.screen.badgeColor}`}
                  >
                    {step.screen.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-xl text-white">
                    {step.title}
                  </h3>
                  <div className="text-xs text-emerald-400 mt-0.5 font-medium">
                    {step.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-white font-medium">
                    <span>{step.screen.metric1Label}: <strong className="text-emerald-400">{step.screen.metric1}</strong></span>
                    <span>{step.screen.metric2Label}: <strong>{step.screen.metric2}</strong></span>
                  </div>
                  <div className="text-emerald-400 text-[11px] pt-1 border-t border-white/10">
                    ✓ {step.screen.telemetry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}