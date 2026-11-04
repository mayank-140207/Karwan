import React from 'react';
import Logo from '../common/Logo';

export default function OrbitTrustLayer() {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-white border-y border-surface-container-high/80 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary">
          <span className="material-symbols-outlined text-sm">hub</span>
          <span>UNIFIED ARCHITECTURE</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary tracking-tight">
          One trust layer. Four interconnected engines.
        </h2>

        <p className="font-sans text-base sm:text-lg text-text-gray max-w-2xl mx-auto leading-relaxed">
          Every fare submission, safety alert, itinerary recalibration, and homestay audit is anchored to a cryptographic KARWAN ID protocol.
        </p>

        {/* Concentric Rings Orbit Graphic Container */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto my-12 flex items-center justify-center">
          {/* Outer Ring 2 (Largest) */}
          <div className="absolute inset-0 rounded-full border border-dashed border-surface-container-highest animate-orbit-ring-2">
            {/* Auto-heal Icon at top */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="w-10 h-10 rounded-full bg-white border border-amber-300 shadow-md flex items-center justify-center text-amber-700 animate-counter-rotate-2" title="Auto-heal">
                <span className="material-symbols-outlined text-xl">auto_fix_high</span>
              </div>
            </div>
            {/* Ground Truth Icon at bottom */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <div className="w-10 h-10 rounded-full bg-white border border-purple-300 shadow-md flex items-center justify-center text-purple-700 animate-counter-rotate-2" title="Ground Truth">
                <span className="material-symbols-outlined text-xl">verified_user</span>
              </div>
            </div>
          </div>

          {/* Inner Ring 1 */}
          <div className="absolute inset-8 sm:inset-10 rounded-full border border-surface-container-high animate-orbit-ring-1">
            {/* LiveTrail Icon at left */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-white border border-emerald-300 shadow-md flex items-center justify-center text-emerald-700 animate-counter-rotate-1" title="LiveTrail">
                <span className="material-symbols-outlined text-xl">navigation</span>
              </div>
            </div>
            {/* TrustRadar Icon at right */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-white border border-blue-300 shadow-md flex items-center justify-center text-blue-700 animate-counter-rotate-1" title="TrustRadar">
                <span className="material-symbols-outlined text-xl">shield_with_heart</span>
              </div>
            </div>
          </div>

          {/* Center KARWAN ID Seal */}
          <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-primary text-white shadow-floating border-4 border-white flex flex-col items-center justify-center p-2">
            <Logo variant="white" size="sm" to={false} />
            <span className="text-[10px] font-mono tracking-widest text-secondary-fixed mt-1 uppercase font-bold">
              ID PROTOCOL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-ping mt-1" />
          </div>
        </div>

        {/* Action Button: "How it works" */}
        <div className="pt-2">
          <button
            onClick={scrollToHowItWorks}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-success-green transition-colors shadow-ambient"
          >
            <span>See the step-by-step workflow</span>
            <span className="material-symbols-outlined text-base">arrow_downward</span>
          </button>
        </div>
      </div>
    </section>
  );
}

