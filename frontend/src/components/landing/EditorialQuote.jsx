import React from 'react';

export default function EditorialQuote() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden border-b border-surface-container-high/60">
      {/* Background Soft Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-secondary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Decorative Centered Quotation Mark */}
          <span className="text-secondary text-6xl md:text-7xl font-serif block leading-none mb-4 select-none opacity-40">
            “
          </span>

          {/* Centered Editorial Headline with Italic Accent */}
          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.18] [text-wrap:balance]">
            Maps help you find a place.{' '}
            <span className="italic font-normal text-secondary inline-block">
              Karwan tells you whether to&nbsp;trust it.
            </span>
          </blockquote>

          {/* Verification Promise Badge */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-10 sm:w-16 bg-secondary/30" />
            <span className="text-xs uppercase tracking-widest font-semibold text-text-gray font-mono">
              The Karwan Verification Promise
            </span>
            <div className="h-px w-10 sm:w-16 bg-secondary/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
