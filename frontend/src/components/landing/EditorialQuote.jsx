import React from 'react';

export default function EditorialQuote() {
  return (
    <section className="pt-16 md:pt-24 pb-2 md:pb-4 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="text-left py-4">
          <span className="text-secondary text-5xl md:text-6xl font-serif block leading-none mb-4 select-none opacity-40">
            “
          </span>
          <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.18] [text-wrap:balance] max-w-[18ch]">
            Maps help you find a place.{' '}
            <span className="italic font-normal text-secondary inline-block">
              Karwan tells you whether to&nbsp;trust it.
            </span>
          </blockquote>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-12 bg-secondary/30" />
            <span className="text-xs uppercase tracking-widest font-semibold text-text-gray">
              The Karwan Verification Promise
            </span>
            <div className="h-px w-12 bg-secondary/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
