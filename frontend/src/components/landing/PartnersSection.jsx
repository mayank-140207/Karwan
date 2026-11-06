import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export default function PartnersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const mockupRef = useRef(null);

  const partners = [
    {
      id: 'autostand',
      name: 'Auto Stand',
      category: 'Transit Partner',
      title: 'Mathura Junction Prepaid Auto Union',
      badge: 'UNION #42 ACCREDITED',
      rating: '4.8★ (1,240 verified trips)',
      desc: 'Registered union of 42 electric and CNG auto-rickshaw drivers committing to transparent, meter-aligned going-fares with zero tourist price gouging.',
      metrics: [
        { label: 'Active Drivers', val: '42 Registered' },
        { label: 'Fare Compliance', val: '99.4%' },
        { label: 'Trip Dispute Rate', val: '< 0.2%' }
      ],
      credentials: 'KARWAN ID #AU-2841 · Municipal Counter Gate 2',
      quote: '"Before Karwan, tourists were wary and negotiations caused friction. Now everyone knows the fair going-rate upfront, and our trips have doubled."'
    },
    {
      id: 'guide',
      name: 'Guide',
      category: 'Cultural Guide Partner',
      title: 'Rajesh Gupta — Heritage & History Guide',
      badge: 'ASI LICENSED GUIDE',
      rating: '4.9★ (340 verified audits)',
      desc: 'Master of Arts in Ancient Indian History. 14 years introducing travelers to the temples, ghats, and hidden architectural treasures of Braj without commissions.',
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
      desc: 'Restored 120-year-old courtyard residence. Automated IoT sensors monitor continuous hot water, solar power, and 25kVA generator backup.',
      metrics: [
        { label: 'Water Continuity', val: '100% Running' },
        { label: 'Power Backup', val: 'Dual Genset' },
        { label: 'Wi-Fi Speed', val: '78 Mbps Fiber' }
      ],
      credentials: 'KARWAN ID #HS-4012 · Host: Brajraj Sharma',
      quote: '"Our guests know exactly what to expect before stepping through the doors. Ground Truth eliminates false complaints and rewards real hospitality."'
    },
    {
      id: 'vendor',
      name: 'Vendor',
      category: 'Artisan Partner',
      title: 'Market Square Souvenirs & Brass Handicrafts',
      badge: 'ARTISAN GUILD CERTIFIED',
      rating: '4.8★ (890 community audits)',
      desc: 'Traditional family foundry producing hand-carved bell-metal idols and brass lamps. Dedicated to authentic craft preservation with fixed artisan pricing.',
      metrics: [
        { label: 'Purity Guarantee', val: 'Certified Brass' },
        { label: 'Fixed Pricing', val: 'No Tour Kickbacks' },
        { label: 'Artisan Lineage', val: 'Est. 1974' }
      ],
      credentials: 'KARWAN ID #VN-1092 · Chowk Bazaar, Mathura',
      quote: '"Tour buses take 50% commission cuts at commercial gift shops. Karwan helps conscious travelers discover the real craftsmen in the narrow alleys."'
    }
  ];

  const current = partners[activeTab];

  // Tab change 3D tilt crossfade animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile || !mockupRef.current) return;

    gsap.fromTo(
      mockupRef.current,
      { opacity: 0, rotateY: -14, rotateX: 8, scale: 0.96 },
      { opacity: 1, rotateY: -8, rotateX: 6, scale: 1, duration: 0.35, ease: 'power2.out' }
    );
  }, [activeTab]);

  return (
    <section id="for-partners" className="pt-16 md:pt-24 pb-2 md:pb-4 bg-background">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        {/* Section Header - Left Aligned to match container & logo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-container-high text-xs font-semibold text-secondary mb-3">
              <span className="material-symbols-outlined text-sm">handshake</span>
              <span>LOCAL ECONOMIC EMPOWERMENT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight [text-wrap:balance] max-w-[18ch]">
              Built for genuine{' '}
              <span className="italic font-normal text-secondary inline-block">
                local&nbsp;providers.
              </span>
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

        {/* 8. SHOWCASE Layout: Tab List on Left, Browser + Phone Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Tab list & Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-surface-container-high">
              {partners.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-full font-serif font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 ${
                    activeTab === idx
                      ? 'bg-primary text-white shadow-ambient'
                      : 'bg-white border border-surface-container-high text-text-gray hover:text-primary hover:bg-surface-container-low'
                  }`}
                >
                  <span>{p.name}</span>
                </button>
              ))}
            </div>

            {/* Active Partner Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-floating border border-surface-container-high space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20">
                  {current.badge}
                </span>
                <span className="text-xs font-semibold text-text-gray">
                  {current.rating}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-primary">
                  {current.title}
                </h3>
                <div className="text-xs text-text-gray mt-1 font-mono">
                  {current.credentials}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-text-gray leading-relaxed">
                {current.desc}
              </p>

              {/* 3 Metrics */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-surface-container-high/60 text-center">
                {current.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="font-serif font-bold text-sm text-primary">{m.val}</div>
                    <div className="text-[10px] text-text-gray mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <blockquote className="text-xs italic text-text-gray border-l-2 border-secondary pl-3">
                {current.quote}
              </blockquote>
            </div>
          </div>

          {/* Right Column: Browser Plus Phone Mockup (Crossfade with slight 3D tilt) */}
          <div className="lg:col-span-7 flex items-center justify-center pt-2">
            <div
              ref={mockupRef}
              className="showcase-mockup-wrap relative w-full max-w-xl preserve-3d transition-all duration-300"
              style={{
                perspective: '1200px',
                transform: 'rotateY(-8deg) rotateX(6deg)'
              }}
            >
              {/* Back Mockup: Browser Window */}
              <div className="bg-white rounded-2xl shadow-2xl border border-surface-container-high overflow-hidden">
                {/* Browser Top Bar */}
                <div className="px-4 py-2.5 bg-surface-container-low border-b border-surface-container-high flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="px-3 py-0.5 rounded-full bg-white text-[10px] font-mono text-text-gray border border-surface-container-high">
                    partner.karwan.app/{current.id}/audit-feed
                  </div>
                  <span className="w-3" />
                </div>

                {/* Browser Content */}
                <div className="p-6 bg-surface-container-lowest space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-secondary font-semibold">
                        VERIFIED PARTNER CONSOLE
                      </span>
                      <h4 className="font-serif font-bold text-lg text-primary">
                        {current.title}
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                      Live Telemetry Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container-high">
                      <div className="text-[10px] text-text-gray">Verified Passenger Trips</div>
                      <div className="font-serif font-bold text-base text-primary mt-0.5">1,240 Trips</div>
                    </div>
                    <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container-high">
                      <div className="text-[10px] text-text-gray">Rider Trust Rating</div>
                      <div className="font-serif font-bold text-base text-secondary mt-0.5">4.9 / 5.0 (100% genuine)</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-surface-container-high bg-white text-xs text-text-gray flex items-center justify-between">
                    <span>Cryptographic Credential: <strong>{current.credentials}</strong></span>
                    <span className="text-secondary font-semibold">Verified ✓</span>
                  </div>
                </div>
              </div>

              {/* Front Mockup: Overlapping Mobile Phone with 3D Offset */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-56 sm:w-64 bg-primary text-white rounded-3xl p-3 shadow-2xl border-2 border-white/20 z-20 backdrop-blur-md">
                <div className="flex items-center justify-between px-2 pb-2 pt-0.5 border-b border-white/10 text-[9px] font-mono text-white/50">
                  <span>KARWAN PASS</span>
                  <span className="text-secondary-fixed">LIVE AUDIT</span>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl my-1.5 space-y-2">
                  <div className="text-[10px] text-secondary-fixed font-semibold uppercase">
                    Traveller Verified Feed
                  </div>
                  <div className="font-serif font-bold text-xs text-white">
                    {current.name} Verified Status
                  </div>
                  <div className="text-[10px] text-white/70 line-clamp-2">
                    {current.quote}
                  </div>
                </div>
                <div className="w-16 h-1 rounded-full bg-white/20 mx-auto mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
