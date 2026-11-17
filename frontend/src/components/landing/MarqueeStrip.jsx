import React from 'react';

export default function MarqueeStrip() {
  const keywords = [
    'LiveTrail Telemetry',
    'TrustRadar Safety',
    'Auto-heal Recalibration',
    'Ground Truth Stays',
    'Zero Tout Markups',
    'Cryptographic Trust ID',
    'Braj Corridor Pilot',
    'Prepaid Fares Verified',
    'Accredited Cultural Guides',
    'Dual Genset Audit'
  ];

  return (
    <section className="py-7 bg-surface-container-low/40 border-y border-surface-container-high/60 overflow-hidden select-none">
      {/* Marquee with faded edges mask and 40s linear loop, pause on hover */}
      <div className="flex w-full overflow-hidden mask-faded-edges group">
        <div className="animate-marquee-40 group-hover:[animation-play-state:paused] flex items-center gap-10 font-serif text-2xl sm:text-4xl font-bold tracking-tight text-primary/20 uppercase">
          {/* Repeated items for seamless infinite scroll */}
          {[...keywords, ...keywords, ...keywords].map((keyword, index) => (
            <React.Fragment key={index}>
              <span className="whitespace-nowrap hover:text-secondary transition-colors cursor-default">
                {keyword}
              </span>
              <span className="w-2 h-2 rounded-full bg-secondary/40 shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}