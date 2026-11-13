import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollStorySection() {
  const [activeStep, setActiveStep] = useState(0);
  const [storyProgress, setStoryProgress] = useState(0);
  const sectionRef = useRef(null);
  const deviceRef = useRef(null);
  const triggerRef = useRef(null);

  // Exactly 4 steps matching "01 / 04" specification
  const steps = [
    {
      num: '01',
      title: 'Plan the Corridor',
      subtitle: 'Mathura Junction → Vrindavan Bankey Bihari',
      desc: 'Set your domestic route and transit pace. Karwan identifies active corridors, transfer waypoints, and verified travel stops before departure.',
      screen: {
        badge: 'CORRIDOR INITIATION',
        badgeColor: 'text-emerald-400 bg-emerald-950/80 border-emerald-800',
        title: 'Braj Heritage Corridor',
        highlight: '14.2 km · 32 mins est.',
        detail1: 'Mathura Jn. (Gate 1 Exit) → Chhatikara → Vidyapeeth Marg',
        detail2: '3 local transit options available · 100% verified corridor safety score',
        icon: 'map'
      }
    },
    {
      num: '02',
      title: 'Check the Going-Fare',
      subtitle: 'Eliminate tourist markups with verified rider data',
      desc: 'Before boarding an e-rickshaw or shared auto, check actual rates crowdsourced from recent riders in the last 2 hours. Pay the fair rate.',
      screen: {
        badge: 'FARE BENCHMARK VERIFIED',
        badgeColor: 'text-amber-400 bg-amber-950/80 border-amber-800',
        title: 'Prepaid E-Rickshaw Fare',
        highlight: '₹20 – ₹25 per seat',
        detail1: 'Reported by 18 riders today · Tourist quote without Karwan: ₹120',
        detail2: 'Auto Stand: Mathura Jn. Gate 2 · Union #42 registered',
        icon: 'payments'
      }
    },
    {
      num: '03',
      title: 'Trust the Local Vendor',
      subtitle: 'Discover verified artisans and heritage guides',
      desc: 'Avoid commission emporiums. TrustRadar maps independent local vendors and cultural guides authenticated by community consensus.',
      screen: {
        badge: 'COMMUNITY ACCREDITATION',
        badgeColor: 'text-blue-400 bg-blue-950/80 border-blue-800',
        title: 'Radhe Shyam Peda Bhandar',
        highlight: 'KARWAN ID #VN-2041 · 4.9★',
        detail1: 'Chowk Bazaar, Mathura · Traditional pure khoya sweets since 1968',
        detail2: 'Guide: Rajesh Gupta (#UP-9821) · Zero tour bus commission kickbacks',
        icon: 'storefront'
      }
    },
    {
      num: '04',
      title: 'Auto-heal & Stay Telemetry',
      subtitle: 'Dynamic bypass and verified utility continuity',
      desc: 'A spontaneous procession blocks Chhatikara. Auto-heal alerts you and rebalances route via Gandhi Marg, while stay sensors confirm water & power.',
      screen: {
        badge: 'AUTO-HEAL & STAY AUDIT',
        badgeColor: 'text-purple-400 bg-purple-950/80 border-purple-800',
        title: 'Bypass Active & Stay Ready',
        highlight: '38-Min Gridlock Averted · 100% Stay Score',
        detail1: 'Procession detected 4m ago · Re-routed via Bhaktivedanta Marg',
        detail2: 'The Heritage Haveli: 100% solar water running & dual genset standby',
        icon: 'alt_route'
      }
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 1024;

    if (prefersReducedMotion || isMobile || !triggerRef.current || !deviceRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // Pin with end: "+=300%", scrub 0.6
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top+=80',
          end: '+=300%',
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

      // Starting at perspective(1400px) rotateX(14deg) rotateY(-10deg) scale(.95)
      // Flattening smoothly to rotateX(2deg) rotateY(-2deg) scale(1) by 15% progress
      tl.fromTo(
        deviceRef.current,
        {
          rotateX: 14,
          rotateY: -10,
          scale: 0.95,
          transformPerspective: 1400
        },
        {
          rotateX: 2,
          rotateY: -2,
          scale: 1,
          ease: 'none',
          duration: 0.15
        },
        0
      );

      // Keep flattened and stable for remainder of scrub
      tl.to(
        deviceRef.current,
        {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          ease: 'none',
          duration: 0.85
        },
        0.15
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const active = steps[activeStep];
  const stepFormatted = `0${activeStep + 1} / 04`;

  return (
    <section
      id="trip-story"
      ref={sectionRef}
      className="bg-[#000918] text-white py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background: Near-black with subtle grid and soft green + navy radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#2C6E49_1px,transparent_1px)] [background-size:28px_28px]" />

      <div
        ref={triggerRef}
        className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10 w-full"
      >
        {/* DESKTOP PINNED VIEW (1024px and up) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center min-h-[calc(100vh-var(--header-h)-4rem)] py-6">
          {/* Left Column: Mono label, Headline, and Plain Step List */}
          <div className="col-span-6 text-left space-y-6">
            {/* Small mono label that updates */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
              <span className="text-secondary-fixed font-semibold uppercase">
                Scroll to play · {stepFormatted}
              </span>
            </div>

            {/* Headline with Noto Serif & italic accent */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-pure-white leading-tight [text-wrap:balance]">
              A trip, played by{' '}
              <span className="italic font-normal text-secondary-fixed inline-block">
                your&nbsp;scroll.
              </span>
            </h2>

            <p className="font-sans text-base text-white/70 leading-relaxed max-w-lg">
              Follow a real journey from Mathura Junction to Vrindavan to see how Karwan’s trust engines keep domestic travellers secure, informed, and on track.
            </p>

            {/* Plain Step List (Active step in green at full opacity, others at 35% opacity, NO BOXES) */}
            <div className="space-y-4 pt-4 border-t border-white/10 max-w-lg">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className={`transition-all duration-300 cursor-pointer ${
                      isActive ? 'opacity-100' : 'opacity-35 hover:opacity-60'
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-sm font-bold ${
                          isActive ? 'text-secondary-fixed' : 'text-white/60'
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
                        <div className="text-xs text-secondary-fixed mt-0.5">
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

          {/* Right Column: Whole Device, Never Cropped */}
          <div className="col-span-6 flex flex-col items-center justify-center relative">
            {/* Soft radial glow behind device */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(40,106,70,0.25)_0%,rgba(5,36,67,0.35)_50%,transparent_75%)] pointer-events-none blur-2xl z-0" />

            {/* Device Frame: strictly proportioned so it never overflows */}
            <div
              ref={deviceRef}
              className="relative z-10 w-[300px] sm:w-[320px] max-h-[500px] aspect-[9/18.5] bg-[#0c121e] rounded-[36px] p-3 shadow-2xl border-4 border-[#1f293d] flex flex-col justify-between overflow-hidden"
            >
              {/* Phone Speaker Notch */}
              <div className="w-20 h-4 bg-[#1f293d] rounded-full mx-auto mb-2 shrink-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black/60 mr-2" />
                <div className="w-8 h-1 rounded-full bg-black/60" />
              </div>

              {/* Screen Content: Crossfade over 300ms */}
              <div
                key={activeStep}
                className="flex-1 bg-gradient-to-b from-[#141e30] to-[#0f172a] rounded-[26px] p-4 flex flex-col justify-between text-left overflow-hidden transition-all duration-300 animate-fadeIn"
              >
                {/* Top Telemetry Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span
                      className={`px-2 py-0.5 rounded-full font-bold uppercase border ${active.screen.badgeColor}`}
                    >
                      {active.screen.badge}
                    </span>
                    <span className="text-white/60">LIVE FEED</span>
                  </div>

                  <div>
                    <h5 className="font-serif font-bold text-base text-white mt-1">
                      {active.screen.title}
                    </h5>
                    <div className="text-xs font-semibold text-secondary-fixed mt-0.5">
                      {active.screen.highlight}
                    </div>
                  </div>
                </div>

                {/* Central Screen Graphic/Detail Box */}
                <div className="my-auto py-3 space-y-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="text-[10px] text-white/50 font-mono">PRIMARY TELEMETRY</div>
                    <div className="text-white/90 text-xs mt-0.5 leading-snug">
                      {active.screen.detail1}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="text-[10px] text-white/50 font-mono">GROUND TRUTH AUDIT</div>
                    <div className="text-secondary-fixed text-xs mt-0.5 leading-snug">
                      {active.screen.detail2}
                    </div>
                  </div>
                </div>

                {/* Bottom Screen Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                  <span>KARWAN PASS #ST-0{activeStep + 1}</span>
                  <span className="text-secondary-fixed flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />
                    Verified
                  </span>
                </div>
              </div>

              {/* Phone Home Bar */}
              <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-2 shrink-0" />
            </div>

            {/* Hairline Progress Bar Under Device */}
            <div className="w-[300px] mt-4">
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary-fixed transition-all duration-75 ease-out"
                  style={{ width: `${Math.min(100, Math.max(0, storyProgress * 100))}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mt-1">
                <span>01 PLAN</span>
                <span>04 AUTO-HEAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET STACKED VIEW (< 1024px) */}
        <div className="lg:hidden space-y-12">
          <div className="text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold text-secondary-fixed">
              <span>01 TO 04 · END-TO-END JOURNEY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              A trip, played by{' '}
              <span className="italic font-normal text-secondary-fixed inline-block">
                your&nbsp;journey.
              </span>
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              How Karwan keeps domestic travellers secure, informed, and on track across every corridor.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#0f172a] rounded-2xl p-6 border border-white/10 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-secondary-fixed font-bold text-sm">
                    STEP {step.num}
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
                  <div className="text-xs text-secondary-fixed mt-0.5 font-medium">
                    {step.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                  <div className="text-white/90 font-medium">
                    {step.screen.detail1}
                  </div>
                  <div className="text-secondary-fixed text-[11px]">
                    ✓ {step.screen.detail2}
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
