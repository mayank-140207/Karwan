import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../common/Icons';

export default function DispatchesSection() {
  const dispatches = [
    {
      id: 'fare-arbitrage',
      tag: 'TRANSIT ECONOMICS',
      date: 'OCT 28, 2026',
      readTime: '5 MIN READ',
      title: 'The Mathura-Vrindavan Fare Arbitrage: Why Tourist Quotes Diverge by 340%',
      desc: 'An empirical breakdown of 1,200 auto journeys between Gate 1 and Chhatikara, analyzing how informal tout cartels operate at domestic railheads.',
      author: 'Aaditya Sharma',
      role: 'Transit Telemetry Lead'
    },
    {
      id: 'street-lighting',
      tag: 'SAFETY TELEMETRY',
      date: 'NOV 04, 2026',
      readTime: '4 MIN READ',
      title: 'Mapping Street-Lighting Deficits Across Ancient Pilgrimage Alleys',
      desc: 'How community lux meters and pedestrian density sensors identified 14 unlit zones in the Braj parikrama path, prompting civic action.',
      author: 'Dr. Meera Patel',
      role: 'Urban Safety Researcher'
    },
    {
      id: 'utility-continuity',
      tag: 'HOSPITALITY PROTOCOL',
      date: 'NOV 12, 2026',
      readTime: '6 MIN READ',
      title: 'Why Online Star Ratings Fail Heritage Homestays in Tier-2 India',
      desc: 'Utility continuity audits prove guest trust in religious corridors depends on solar water heaters and generator failover, not luxury amenities.',
      author: 'Brajraj Sharma',
      role: 'Ground Truth Auditor'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-surface-container-low/30 border-b border-surface-container-high/60 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span>DISPATCHES & RESEARCH</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight [text-wrap:balance]">
              Notes from the{' '}
              <span className="italic font-normal text-secondary inline-block">
                ground truth&nbsp;network.
              </span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-text-gray leading-relaxed">
              Technical field dispatches, corridor telemetry reports, and transit research from our team and on-ground auditors.
            </p>
          </div>

          <Link
            to="/directory"
            className="text-sm font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1.5 self-start md:self-auto group"
          >
            <span>View all field reports</span>
            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Editorial Dispatch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dispatches.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl p-7 shadow-floating border border-surface-container-high flex flex-col justify-between text-left hover:border-secondary/40 transition-colors group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Meta Top Line */}
                <div className="flex items-center justify-between text-[11px] font-mono text-text-gray">
                  <span className="font-bold text-secondary tracking-wider uppercase">
                    {item.tag}
                  </span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="font-serif font-bold text-xl text-primary group-hover:text-secondary transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-text-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Author & Read Link */}
              <div className="pt-6 border-t border-surface-container-high/60 mt-6 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-xs text-primary">{item.author}</div>
                  <div className="text-[10px] text-text-gray">{item.role}</div>
                </div>
                <span className="text-xs font-semibold text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read</span>
                  <Icons.ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
