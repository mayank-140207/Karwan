import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollStorySection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const deviceRef = useRef(null);
  const triggerRef = useRef(null);

  const steps = [
    {
      num: '01',
      title: 'Plan the Corridor',
      subtitle: 'Mathura Junction → Vrindavan Bankey Bihari',
      desc: 'Set your domestic route and customize your transit pace. Karwan identifies active corridors, transfer waypoints, and verified travel stops before departure.',
      screen: {
        badge: 'CORRIDOR INITIATION',
        badgeColor: 'text-emerald-400 bg-emerald-950/80 border-emerald-800',
        title: 'Braj Heritage Circuit',
        highlight: '14.2 km · Estimated: 32 mins',
        detail1: 'Mathura Jn. (Platform 1 Exit) → Chhatikara → Vidyapeeth Marg',
        detail2: '3 local transit options available · 100% verified corridor safety score',
        icon: 'map'
      }
    },
    {
      num: '02',
      title: 'Check the Going-Fare',
      subtitle: 'Eliminate arbitrary tourist markup with rider data',
      desc: 'Before boarding an e-rickshaw or shared auto, check actual rates crowdsourced from recent verified riders in the last 2 hours. Pay the exact fair going-rate.',
      screen: {
        badge: 'FARE BENCHMARK VERIFIED',
        badgeColor: 'text-amber-400 bg-amber-950/80 border-amber-800',
        title: 'Prepaid E-Rickshaw Fare',
        highlight: '₹20 – ₹25 per seat',
        detail1: 'Reported by 18 riders today · Standard quote to tourists: ₹100-150',
        detail2: 'Auto Stand: Mathura Jn. Gate 2 · Registered Driver Union #42',
        icon: 'payments'
      }
    },
    {
      num: '03',
      title: 'Trust the Local Vendor',
      subtitle: 'Discover verified artisans and heritage confectioners',
      desc: 'Avoid aggressive commercial commissions. TrustRadar maps independent local vendors and cultural guides authenticated by local community consensus.',
      screen: {
        badge: 'COMMUNITY ACCREDITATION',
        badgeColor: 'text-blue-400 bg-blue-950/80 border-blue-800',
        title: 'Radhe Shyam Peda Bhandar',
        highlight: 'KARWAN ID #VN-2041 · 4.9★',
        detail1: 'Chowk Bazaar, Mathura · Traditional pure khoya sweets since 1968',
        detail2: 'Verified pricing transparency · Zero tour bus commission kickbacks',
        icon: 'storefront'
      }
    },
    {
      num: '04',
      title: 'Auto-heal the Route',
      subtitle: 'Instant dynamic bypass when gridlock strikes',
      desc: 'A spontaneous religious sankirtan procession blocks Chhatikara crossing. Auto-heal alerts you instantly and rebalances your itinerary via Gandhi Marg bypass.',
      screen: {
        badge: 'AUTO-HEAL ADAPTIVE BYPASS',
        badgeColor: 'text-rose-400 bg-rose-950/80 border-rose-800',
        title: '38-Min Gridlock Averted',
        highlight: 'Re-routed via Bhaktivedanta Marg',
        detail1: 'Procession detected 4 mins ago by 6 transit logs',
        detail2: 'Alternative transit corridor clear · Arrival delay: +4 mins only',
        icon: 'alt_route'
      }
    },
    {
      num: '05',
      title: 'Verify the Stay on Arrival',
      subtitle: 'Continuous water, power backup, and fiber Wi-Fi',
      desc: 'Check in with zero surprises. Ground Truth sensors and recent geotagged guest photos confirm that hot water, power backup, and Wi-Fi are fully operational.',
      screen: {
        badge: 'GROUND TRUTH TELEMETRY',
        badgeColor: 'text-purple-400 bg-purple-950/80 border-purple-800',
        title: 'The Heritage Haveli Stay',
        highlight: '100% Utility Score · Verified Live',
        detail1: 'Solar water running continuous · 25kVA generator on standby',
        detail2: '78 Mbps verified fiber · Guest audit by Priya S. 4h ago',
        icon: 'hotel'
      }
    }
  ];

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 1024;

    if (prefersReducedMotion || isMobile) {
      // Static / normal stacked layout without pin
      return;
    }

    const ctx = gsap.context(() => {
      // GSAP ScrollTrigger timeline to pin and flatten 3D perspective
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top+=80',
          end: '+=2400',
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            const stepIndex = Math.min(
              steps.length - 1,
              Math.floor(self.progress * steps.length)
            );
            setActiveStep(stepIndex);
          }
        }
      });

      // Animate device from tilted 3D to flat perspective
      if (deviceRef.current) {
        tl.fromTo(
          deviceRef.current,
          {
            rotateX: 18,
            rotateY: -12,
            scale: 0.94,
            transformPerspective: 1200
          },
          {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            ease: 'none'
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [steps.length]);

  const active = steps[activeStep];

  return (
    <section
      id="trip-story"
      ref={sectionRef}
      className="bg-primary text-white py-24 px-margin-mobile md:px-margin-desktop relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#2C6E49_1px,transparent_1px)] [background-size:24px_24px]" />

      <div ref={triggerRef} className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-secondary-fixed mb-4">
            <span className="material-symbols-outlined text-sm">route</span>
            <span>SCROLL-DRIVEN JOURNEY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-pure-white leading-tight">
            A trip, played by your scroll.
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/70 mt-3 leading-relaxed">
            Follow a real journey from Mathura Junction to Vrindavan to see how Karwan’s trust engines keep domestic travellers secure, informed, and on track.
          </p>
        </div>

        {/* Desktop 2-Column Story View with 3D Perspective Device */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Step Selector */}
          <div className="col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const isCurrent = idx === activeStep;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-white/10 border-secondary shadow-lg translate-x-1'
                      : 'bg-white/5 border-white/10 hover:bg-white/[0.07] opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-secondary-fixed' : 'text-white/50'}`}>
                      STEP {step.num}
                    </span>
                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-secondary/30 text-secondary-fixed border border-secondary/40">
                        Active In Transit
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-lg text-pure-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-white/70 mt-1 line-clamp-2">
                    {step.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Perspective-Tilted Device Container */}
          <div className="col-span-7 flex justify-center">
            <div
              ref={deviceRef}
              className="w-full max-w-md bg-[#001438] rounded-[32px] p-4 border border-white/20 shadow-2xl transition-transform duration-300 preserve-3d"
              style={{
                perspective: '1200px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Device Bezel & Notch */}
              <div className="bg-[#051a3d] rounded-[24px] p-6 border border-white/10 min-h-[460px] flex flex-col justify-between relative overflow-hidden">
                {/* Device Speaker & Camera Notch */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-[11px] font-mono text-white/50">
                  <span>11:24 AM</span>
                  <div className="w-20 h-3 rounded-full bg-black/60 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  </div>
                  <span>5G · 98%</span>
                </div>

                {/* Animated Screen Details for Active Step */}
                <div className="py-6 space-y-5 my-auto">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${active.screen.badgeColor}`}>
                      {active.screen.badge}
                    </span>
                    <span className="material-symbols-outlined text-white/40 text-xl">
                      {active.screen.icon}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-2xl text-pure-white">
                      {active.screen.title}
                    </h3>
                    <div className="text-xl font-mono font-bold text-secondary-fixed mt-1">
                      {active.screen.highlight}
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary-fixed text-base shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="text-white/80">{active.screen.detail1}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary-fixed text-base shrink-0 mt-0.5">
                        verified_user
                      </span>
                      <span className="text-white/80">{active.screen.detail2}</span>
                    </div>
                  </div>
                </div>

                {/* Device Bottom Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span className="flex items-center gap-1.5 text-secondary-fixed font-semibold">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
                    Corridor Synced
                  </span>
                  <span>Step {active.num} of 05</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Reduced Motion: Clean Stacked Reveal Layout */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-secondary-fixed">
                  STEP {step.num}
                </span>
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border ${step.screen.badgeColor}`}>
                  {step.screen.badge}
                </span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl text-pure-white">{step.title}</h4>
                <p className="text-sm text-secondary-fixed font-medium mt-0.5">{step.subtitle}</p>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">{step.desc}</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs">
                <div className="font-serif font-bold text-base text-white">{step.screen.title}</div>
                <div className="font-mono text-secondary-fixed font-bold">{step.screen.highlight}</div>
                <div className="text-white/70">{step.screen.detail1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

