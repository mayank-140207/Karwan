import React from 'react';

export default function EditorialQuote() {
  return (
    <section className="py-20 md:py-28 px-margin-mobile md:px-margin-desktop bg-background text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <span className="text-secondary text-5xl md:text-6xl font-serif block leading-none mb-4 select-none opacity-40">
          “
        </span>
        <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.18]">
          Maps help you find a place.{' '}
          <span className="italic font-normal text-secondary block sm:inline mt-2 sm:mt-0">
            Karwan tells you whether to trust it.
          </span>
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-secondary/30" />
          <span className="text-xs uppercase tracking-widest font-semibold text-text-gray">
            The Karwan Verification Promise
          </span>
          <div className="h-px w-12 bg-secondary/30" />
        </div>
      </div>
    </section>
  );
}

