import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PartnersSection() {
  const [activeTab, setActiveTab] = useState(0);

  const partners = [
    {
      id: 'autostand',
      name: 'Auto Stand',
      category: 'Transit Partner',
      title: 'Mathura Junction Prepaid Auto Union',
      badge: 'UNION #42 ACCREDITED',
      rating: '4.8★ (1,240 verified trips)',
      desc: 'Registered association of 42 authorized electric and CNG auto-rickshaw drivers committing to transparent, meter-aligned going-fares with zero tourist price gouging.',
      metrics: [
        { label: 'Active Drivers', val: '42 Registered' },
        { label: 'Fare Compliance', val: '99.4%' },
        { label: 'Trip Dispute Rate', val: '< 0.2%' }
      ],
      credentials: 'KARWAN ID #AU-2841 · Municipal Prepaid Counter Gate 2',
      quote: '"Before Karwan, tourists were wary and negotiations caused fights. Now everyone knows the fair going-rate upfront, and our trips have doubled."'
    },
    {
      id: 'guide',
      name: 'Guide',
      category: 'Cultural Guide Partner',
      title: 'Rajesh Gupta — Heritage & Archaeological Guide',
      badge: 'ASI LICENSED GUIDE',
      rating: '4.9★ (340 verified audits)',
      desc: 'Master of Arts in Ancient Indian History & Culture. Over 14 years introducing visitors to the temples, ghats, and hidden architectural treasures of the Braj region.',
      metrics: [
        { label: 'Languages', val: 'Hindi, English, Sanskrit' },
        { label: 'Direct Booking', val: 'Zero Commission' },
        { label: 'Audit Rating', val: '4.9 / 5.0' }
      ],
      credentials: 'KARWAN ID #UP-9821 · Ministry of Tourism Accredited',
      quote: '"I do not take visitors to commission emporiums. Karwan connects me directly with travelers who value real history and authentic storytelling."'
    },
    {
      id: 'homestay',
      name: 'Homestay',
      category: 'Hospitality Partner',
      title: 'The Heritage Haveli — Mathura-Vrindavan Road',
      badge: 'TELEMETRICALLY VERIFIED',
      rating: '4.9★ (510 verified stays)',
      desc: 'Restored 120-year-old courtyard residence offering peaceful heritage hospitality. Features automated sensors for continuous hot water, solar power, and 25kVA generator backup.',
      metrics: [
        { label: 'Water Continuity', val: '100% Running' },
        { label: 'Power Backup', val: 'Dual Genset' },
        { label: 'Wi-Fi Speed', val: '78 Mbps Fiber' }
      ],
      credentials: 'KARWAN ID #HS-4012 · Host: Brajraj Sharma',
      quote: '"Our guests know exactly what to expect before stepping through the courtyard doors. Ground Truth eliminates false complaints and rewards real hospitality."'
    },
    {
      id: 'vendor',
      name: 'Vendor',
      category: 'Artisan Partner',
      title: 'Market Square Souvenirs & Brass Handicrafts',
      badge: 'ARTISAN GUILD CERTIFIED',
      rating: '4.8★ (890 community audits)',
      desc: 'Traditional family foundry producing hand-carved bell-metal idols and brass oil lamps. Dedicated to authentic craft preservation with fixed artisan pricing.',
      metrics: [
        { label: 'Purity Guarantee', val: 'Certified Brass' },
        { label: 'Fixed Pricing', val: 'No Tour Kickbacks' },
        { label: 'Artisan Lineage', val: 'Est. 1974' }
      ],
      credentials: 'KARWAN ID #VN-1092 · Chowk Bazaar, Mathura',
      quote: '"Tour buses take 50% commission cuts at modern gift shops. Karwan helps conscious travelers discover the real craftsmen in the narrow alleys."'
    }
  ];

  const current = partners[activeTab];

  return (
    <section id="for-partners" className="py-24 bg-background px-margin-mobile md:px-margin-desktop">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary mb-3">
              <span className="material-symbols-outlined text-sm">handshake</span>
              <span>LOCAL ECONOMIC EMPOWERMENT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Built for genuine local providers.
            </h2>
            <p className="font-sans text-base sm:text-lg text-text-gray mt-2">
              Rewarding honest drivers, accredited guides, heritage stays, and artisan vendors who uphold real standards.
            </p>
          </div>

          <Link
            to="/partner/kyc/step-1"
            className="px-6 py-3 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-success-green transition-colors shadow-ambient shrink-0 flex items-center gap-2 self-start md:self-auto"
          >
            <span>Become a verified partner</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pb-6 border-b border-surface-container-high">
          {partners.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full font-serif font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-primary text-white shadow-ambient'
                  : 'bg-white border border-surface-container-high text-text-gray hover:text-primary hover:bg-surface-container-low'
              }`}
            >
              <span>{p.name}</span>
              <span className="text-xs font-sans font-normal opacity-75 hidden sm:inline">
                ({p.category})
              </span>
            </button>
          ))}
        </div>

        {/* Profile Card Mockup */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-10 shadow-floating border border-surface-container-high">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-surface-container-high/80">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">
                  {current.badge}
                </span>
                <span className="text-xs font-semibold text-text-gray">
                  {current.rating}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                {current.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-text-gray leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Metrics Pill Card */}
            <div className="bg-surface-container-low p-5 rounded-2xl border border-surface-container-high/60 min-w-[260px] space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-text-gray font-semibold">
                Verified Credentials
              </div>
              <div className="space-y-2 text-xs">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-text-gray">{m.label}</span>
                    <span className="font-semibold text-primary">{m.val}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-surface-container-high/80 text-[11px] text-secondary font-mono">
                {current.credentials}
              </div>
            </div>
          </div>

          {/* Testimonial Quote from Partner */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-text-gray italic font-serif max-w-3xl">
              {current.quote}
            </div>
            <Link
              to="/partner/kyc/step-1"
              className="px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/5 font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>Apply for {current.name} Accreditation</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

