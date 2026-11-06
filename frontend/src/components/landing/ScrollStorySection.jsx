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
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile || !triggerRef.current || !deviceRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      // 3. Pin with end: "+=300%", scrub 0.6
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

      // Starting at perspective(1600px) rotateX(18deg) rotateY(-14deg) rotateZ(2deg) scale(.9)
      // Flattening to about rotateX(4deg) rotateY(-4deg) scale(1) by 15% progress (0.15)
      tl.fromTo(
        deviceRef.current,
        {
          rotateX: 18,
          rotateY: -14,
          rotateZ: 2,
          scale: 0.9,
          transformPerspective: 1600
        },
        {
          rotateX: 4,
          rotateY: -4,
          rotateZ: 0,
          scale: 1,
          ease: 'none',
          duration: 0.15
        },
        0
      );

      // Keep flattened for the rest of scrub (0.15 to 1.0)
      tl.to(
        deviceRef.current,
        {
          rotateX: 2,
          rotateY: -2,
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
      className="bg-[#000918] text-white pt-16 md:pt-24 pb-2 md:pb-4 relative overflow-hidden"
    >
      {/* Background: Near-black with subtle grid and soft green + navy radial glow behind device */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#2C6E49_1px,transparent_1px)] [background-size:28px_28px]" />

      <div
        ref={triggerRef}
        className="max-w-[1280px] mx-auto px-5 md:px-16 relative z-10 lg:h-[calc(100vh-var(--header-h))] lg:min-h-[calc(100vh-var(--header-h))] flex flex-col justify-center"
      >
        {/* Soft green and navy radial glow positioned behind the device */}
        <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full bg-[radial-gradient(circle,rgba(40,106,70,0.22)_0%,rgba(5,36,67,0.38)_45%,transparent_70%)] pointer-events-none blur-3xl z-0" />

        {/* 2-Column Layout: Text and Device Vertically Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
          {/* Left Column: Mono label, Headline, and Plain Step List (No Boxes) */}
          <div className="lg:col-span-6 text-left space-y-6">
            {/* Small mono label that updates */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
              <span className="text-secondary-fixed font-semibold uppercase">
                Scroll to play · {stepFormatted}
              </span>
            </div>

            {/* Headline with Noto Serif & italic accent */}
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-pure-white leading-tight [text-wrap:balance] max-w-[18ch]">
              A trip, played by{' '}
              <span className="italic font-normal text-secondary-fixed inline-block">
                your&nbsp;scroll.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">
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
                        className={`text-xs font-mono font-bold tracking-wider ${
                          isActive ? 'text-secondary-fixed' : 'text-white/60'
                        }`}
                      >
                        {step.num}
                      </span>
                      <div>
                        <h4
                          className={`font-serif text-base sm:text-lg transition-colors ${
                            isActive
                              ? 'text-pure-white font-bold text-secondary-fixed'
                              : 'text-white/80 font-medium'
                          }`}
                        >
                          {step.title}
                        </h4>
                        {isActive && (
                          <p className="text-xs text-white/70 mt-1 leading-relaxed animate-fadeIn">
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

          {/* Right Column: Whole Device, Never Cropped, Starting in 3D Perspective */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div
              ref={deviceRef}
              className="w-full max-w-[340px] sm:max-w-[380px] bg-primary-container/90 rounded-[38px] p-4 border border-white/20 shadow-2xl backdrop-blur-md transition-transform will-change-transform preserve-3d"
            >
              {/* Device Bezel Header (Speaker & Camera) */}
              <div className="flex items-center justify-between px-4 pb-3 pt-1 border-b border-white/10">
                <span className="text-[11px] font-mono text-white/60">09:41</span>
                <div className="w-16 h-3 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-black/60" />
                </div>
                <div className="flex items-center gap-1 text-white/60">
                  <span className="material-symbols-outlined text-xs">signal_cellular_alt</span>
                  <span className="material-symbols-outlined text-xs">wifi</span>
                  <span className="material-symbols-outlined text-xs">battery_full</span>
                </div>
              </div>

              {/* Screen Content Container with 300ms Crossfade */}
              <div
                key={activeStep}
                className="bg-primary/95 rounded-[26px] p-5 my-2 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between border border-white/10 transition-opacity duration-300 ease-in-out opacity-100 shadow-inner"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${active.screen.badgeColor}`}
                    >
                      {active.screen.badge}
                    </span>
                    <span className="text-xs font-mono text-white/50">
                      STEP {active.num}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary-fixed mb-4">
                    <span className="material-symbols-outlined text-2xl">
                      {active.screen.icon}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-pure-white mb-2">
                    {active.screen.title}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-4">
                    <div className="text-xs font-semibold text-secondary-fixed">
                      {active.screen.highlight}
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-white/70">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-sm text-secondary-fixed shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{active.screen.detail1}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-sm text-secondary-fixed shrink-0 mt-0.5">
                        verified
                      </span>
                      <span>{active.screen.detail2}</span>
                    </div>
                  </div>
                </div>

                {/* Micro Telemetry Footer inside phone */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50 font-mono">
                  <span>KARWAN OS 2.4</span>
                  <span className="text-secondary-fixed">ENCRYPTED FEED</span>
                </div>
              </div>

              {/* Bottom Phone Bar */}
              <div className="w-28 h-1 rounded-full bg-white/30 mx-auto mt-2" />
            </div>

            {/* Hairline Progress Bar Under Device */}
            <div className="w-full max-w-[340px] sm:max-w-[380px] h-[2px] bg-white/15 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full bg-secondary-fixed transition-all duration-75 ease-out"
                style={{ width: `${Math.min(100, Math.max(0, storyProgress * 100))}%` }}
              />
            </div>
            <div className="flex items-center justify-between w-full max-w-[340px] sm:max-w-[380px] text-[10px] font-mono text-white/50 mt-1.5 px-0.5">
              <span>TRIP INITIATION</span>
              <span>VERIFIED ARRIVAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
