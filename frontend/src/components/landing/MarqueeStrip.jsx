import React from 'react';

export default function MarqueeStrip() {
  const keywords = [
    'Live Fares',
    'Trust Scores',
    'Verified Stays',
    'Auto-heal',
    'Local Guides',
    'Crowding Telemetry',
    'Zero Tout Markup',
    'Geotagged Audits',
    'Ground Truth Sensors',
    'Karwan ID'
  ];

  return (
    <section className="py-8 bg-surface-container/50 border-y border-surface-container-high/60 overflow-hidden select-none">
      {/* 4. Marquee with faded edges mask and 40s linear loop */}
      <div className="flex w-full overflow-hidden mask-faded-edges">
        <div className="animate-marquee-40 flex items-center gap-10 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-on-surface-variant/20 uppercase">
          {/* Repeated items for seamless infinite scroll */}
          {[...keywords, ...keywords, ...keywords].map((keyword, index) => (
            <React.Fragment key={index}>
              <span className="whitespace-nowrap hover:text-secondary/60 transition-colors cursor-default">
                {keyword}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-secondary/30 shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
