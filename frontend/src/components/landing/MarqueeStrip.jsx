import React from 'react';

export default function MarqueeStrip() {
  const keywords = [
    'Live fares',
    'Trust scores',
    'Verified stays',
    'Auto-heal',
    'Local guides',
    'Crowding',
    'Transit telemetry',
    'Zero tourist markup',
    'Geotagged audits'
  ];

  return (
    <section className="py-4 bg-surface-container border-y border-surface-container-high overflow-hidden select-none">
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-on-surface-variant/80">
          {/* Double set for seamless loop */}
          {[...keywords, ...keywords, ...keywords].map((keyword, index) => (
            <React.Fragment key={index}>
              <span className="whitespace-nowrap hover:text-secondary transition-colors cursor-default">
                {keyword}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 opacity-60" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

