import React from 'react';

export default function EditorialQuote() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-surface-container-high/60">
      {/* Background Soft Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-secondary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
          {/* Section Indicator Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-surface-container-high text-xs font-mono font-semibold text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span>THE KARWAN VERIFICATION PROMISE</span>
          </div>

          {/* Centered Editorial Headline with Italic Accent */}
          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.15] [text-wrap:balance]">
            Maps help you find a place.{' '}
            <span className="italic font-normal text-secondary inline-block">
              Karwan tells you whether to&nbsp;trust it.
            </span>
          </blockquote>

          {/* Detailed Contextual Subtext */}
          <p className="font-sans text-base sm:text-lg text-text-gray max-w-2xl leading-relaxed">
            Built for the auto stand at Mathura Junction at 6 AM, the temple alley in Vrindavan at dusk, and the heritage homestay with solar water backup.
          </p>

          {/* Verification Protocol Provenance Line */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 sm:w-16 bg-secondary/30" />
            <span className="text-[11px] uppercase tracking-widest font-semibold text-text-gray font-mono">
              Braj Corridor Pilot Protocol · 1,280+ Audited Data Points
            </span>
            <div className="h-px w-10 sm:w-16 bg-secondary/30" />
          </div>
        </div>
      </div>
    </section>
  );
}