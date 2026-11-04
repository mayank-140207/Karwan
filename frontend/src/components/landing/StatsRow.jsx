import React, { useState, useEffect } from 'react';
import { fetchLiveStats } from '../../lib/supabase';

export default function StatsRow() {
  const [stats, setStats] = useState({
    citiesLive: 0,
    placesVerified: 0,
    fareReports: 0,
    modules: 4
  });

  useEffect(() => {
    let isCancelled = false;
    async function loadStats() {
      const data = await fetchLiveStats();
      if (!isCancelled) {
        setStats(data);
      }
    }
    loadStats();
    return () => {
      isCancelled = true;
    };
  }, []);

  // Filter out any counter whose value is 0 (strict requirement: No invented numbers, hide if 0)
  const items = [
    { id: 'modules', label: 'Core Trust Engines', value: stats.modules, sub: 'LiveTrail · TrustRadar · Auto-heal · Ground Truth' },
    { id: 'cities', label: 'Active Heritage Corridors', value: stats.citiesLive, sub: 'Audited transit networks' },
    { id: 'places', label: 'Verified Stays & Places', value: stats.placesVerified, sub: 'Telemetric utility verification' },
    { id: 'fares', label: 'Crowdsourced Fare Reports', value: stats.fareReports, sub: 'Rider verified going-rates' }
  ].filter((item) => item.value > 0);

  if (items.length === 0) return null;

  return (
    <section className="py-12 bg-white border-y border-surface-container-high/70 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-6xl mx-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${items.length >= 4 ? 'lg:grid-cols-4' : items.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 divide-y sm:divide-y-0 sm:divide-x divide-surface-container-high/80`}>
          {items.map((item, idx) => (
            <div key={item.id} className={`${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''} text-center sm:text-left`}>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
                <span className="text-secondary text-2xl ml-0.5">+</span>
              </div>
              <div className="font-sans font-semibold text-sm text-primary mt-1">
                {item.label}
              </div>
              <div className="text-xs text-text-gray mt-0.5">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

