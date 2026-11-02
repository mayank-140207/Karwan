import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function GroundTruthDirectoryPage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Ground Truth Directory">
      <div className="karwan-groundtruthdirectorypage">
        
<div className="max-w-7xl mx-auto space-y-8">
{/*  Page Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-forest-green font-label-sm text-xs font-semibold">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            LIVE AUDIT TELEMETRY ACTIVE
          </span>
</div>
<h2 className="font-headline-lg text-4xl text-primary font-bold tracking-tight">Ground Truth Directory</h2>
<p className="font-body-lg text-base text-text-gray mt-2 max-w-3xl leading-relaxed">
          Real-time telemetry and guest-verified audits confirming live Wi-Fi, water continuity, and 100% power backup across stays.
        </p>
</div>
{/*  Category Filter Pills  */}
<div className="flex flex-wrap items-center gap-2.5">
<button className="px-5 py-2.5 rounded-full bg-[#10233f] text-pure-white font-label-md text-sm font-medium shadow-sm transition-all hover:bg-[#1a335a]">
          All Stays
        </button>
<button className="px-5 py-2.5 rounded-full bg-white border border-surface-container-high text-on-surface-variant hover:bg-surface-container hover:text-primary font-label-md text-sm font-medium transition-all">
          Heritage Haveli
        </button>
<button className="px-5 py-2.5 rounded-full bg-white border border-surface-container-high text-on-surface-variant hover:bg-surface-container hover:text-primary font-label-md text-sm font-medium transition-all">
          Mountain Cabins
        </button>
<button className="px-5 py-2.5 rounded-full bg-white border border-surface-container-high text-on-surface-variant hover:bg-surface-container hover:text-primary font-label-md text-sm font-medium transition-all">
          Eco Lodges
        </button>
<button className="px-5 py-2.5 rounded-full bg-white border border-surface-container-high text-on-surface-variant hover:bg-surface-container hover:text-primary font-label-md text-sm font-medium transition-all">
          Desert Retreats
        </button>
</div>
</div>
{/*  Verified Stays Grid (3 Cards)  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
{/*  Card 1: The Heritage Haveli  */}
<article className="bg-white rounded-[20px] ambient-card-shadow ambient-card-hover border border-surface-container-high/80 overflow-hidden flex flex-col transition-all duration-300 group">
<div className="relative h-60 w-full overflow-hidden">
<img alt="The Heritage Haveli" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_351d434c815d.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
{/*  Verified Badge  */}
<div className="absolute top-4 left-4 bg-forest-green/90 backdrop-blur-md text-pure-white font-label-sm text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/20">
<span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            Ground Truth Active • 2 hrs ago
          </div>
<div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
<span className="material-symbols-outlined text-[14px]">photo_camera</span> 12 Live Photos
            </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-white text-xs font-bold shadow-sm">
<span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.9
            </span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="mb-3">
<h3 className="font-headline-md text-2xl font-bold text-[#10233f] group-hover:text-forest-green transition-colors leading-tight">
              The Heritage Haveli
            </h3>
<div className="flex items-center gap-1.5 text-text-gray font-body-md text-sm mt-1">
<span className="material-symbols-outlined text-[17px] text-forest-green">location_on</span>
              Bani Park, Jaipur, Rajasthan
            </div>
</div>
{/*  Status Icons Row with telemetry labels  */}
<div className="mt-4 pt-4 border-t border-surface-variant/80">
<p className="font-label-sm text-xs font-semibold text-outline uppercase tracking-wider mb-3">Live Telemetry & Audits</p>
<div className="grid grid-cols-3 gap-2">
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col items-center text-center">
<span className="material-symbols-outlined text-forest-green text-[20px] mb-1">wifi</span>
<span className="text-[11px] font-medium text-text-gray">Wi-Fi</span>
<span className="text-xs font-bold text-[#10233f]">120 Mbps</span>
</div>
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col items-center text-center">
<span className="material-symbols-outlined text-forest-green text-[20px] mb-1">water_drop</span>
<span className="text-[11px] font-medium text-text-gray">Water</span>
<span className="text-xs font-bold text-[#10233f]">24/7 Hot</span>
</div>
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col items-center text-center">
<span className="material-symbols-outlined text-forest-green text-[20px] mb-1">bolt</span>
<span className="text-[11px] font-medium text-text-gray">Power</span>
<span className="text-xs font-bold text-[#10233f]">100% Dual Inv</span>
</div>
</div>
</div>
{/*  Card Action Button  */}
<div className="mt-6 pt-4 border-t border-surface-variant/60 flex items-center justify-between">
<div className="text-xs text-text-gray">
              Audited by 4 explorers
            </div>
<Link to="/trip/livetrail" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-green hover:text-forest-dark transition-colors group/link">
              View Live Telemetry
              <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
</div>
</article>
{/*  Card 2: Pine Ridge Cabin  */}
<article className="bg-white rounded-[20px] ambient-card-shadow ambient-card-hover border border-surface-container-high/80 overflow-hidden flex flex-col transition-all duration-300 group">
<div className="relative h-60 w-full overflow-hidden">
<img alt="Pine Ridge Cabin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_c36ce96a4ec6.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
{/*  Verified Badge  */}
<div className="absolute top-4 left-4 bg-forest-green/90 backdrop-blur-md text-pure-white font-label-sm text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/20">
<span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            Ground Truth Active • 45 mins ago
          </div>
<div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
<span className="material-symbols-outlined text-[14px]">photo_camera</span> 8 Live Photos
            </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-white text-xs font-bold shadow-sm">
<span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.8
            </span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="mb-3">
<h3 className="font-headline-md text-2xl font-bold text-[#10233f] group-hover:text-forest-green transition-colors leading-tight">
              Pine Ridge Cabin
            </h3>
<div className="flex items-center gap-1.5 text-text-gray font-body-md text-sm mt-1">
<span className="material-symbols-outlined text-[17px] text-forest-green">location_on</span>
              Old Manali, Himachal Pradesh
            </div>
</div>
{/*  Status Icons Row with telemetry labels  */}
<div className="mt-4 pt-4 border-t border-surface-variant/80">
<p className="font-label-sm text-xs font-semibold text-outline uppercase tracking-wider mb-3">Live Telemetry & Audits</p>
<div className="grid grid-cols-3 gap-2">
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col items-center text-center">
<span className="material-symbols-outlined text-forest-green text-[20px] mb-1">wifi</span>
<span className="text-[11px] font-medium text-text-gray">Starlink</span>
<span className="text-xs font-bold text-[#10233f]">85 Mbps</span>
</div>
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col items-center text-center">
<span className="material-symbols-outlined text-forest-green text-[20px] mb-1">water_drop</span>
<span className="text-[11px] font-medium text-text-gray">Geyser</span>
<span className="text-xs font-bold text-[#10233f]">Continuous 45°C</span>
</div>
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col items-center text-center">
<span className="material-symbols-outlined text-forest-green text-[20px] mb-1">bolt</span>
<span className="text-[11px] font-medium text-text-gray">Power</span>
<span className="text-xs font-bold text-[#10233f]">Solar+Genset</span>
</div>
</div>
</div>
{/*  Card Action Button  */}
<div className="mt-6 pt-4 border-t border-surface-variant/60 flex items-center justify-between">
<div className="text-xs text-text-gray">
              Audited by 6 explorers
            </div>
<Link to="/trip/livetrail" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-green hover:text-forest-dark transition-colors group/link">
              View Live Telemetry
              <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
</div>
</article>
{/*  Card 3: Mewar Palace Villa  */}
<article className="bg-white rounded-[20px] ambient-card-shadow ambient-card-hover border border-surface-container-high/80 overflow-hidden flex flex-col transition-all duration-300 group">
<div className="relative h-60 w-full overflow-hidden">
<img alt="Mewar Palace Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="/images/img_cdce97b7380c.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
{/*  Verified Badge  */}
<div className="absolute top-4 left-4 bg-forest-green/90 backdrop-blur-md text-pure-white font-label-sm text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/20">
<span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            Ground Truth Active • 1 hr ago
          </div>
<div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
<span className="material-symbols-outlined text-[14px]">photo_camera</span> 16 Live Photos
            </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-white text-xs font-bold shadow-sm">
<span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.9
            </span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="mb-3">
<h3 className="font-headline-md text-2xl font-bold text-[#10233f] group-hover:text-forest-green transition-colors leading-tight">
              Mewar Palace Villa
            </h3>
<div className="flex items-center gap-1.5 text-text-gray font-body-md text-sm mt-1">
<span className="material-symbols-outlined text-[17px] text-forest-green">location_on</span>
              Jaisalmer / Udaipur, Rajasthan
            </div>
</div>
{/*  Status Icons Row with telemetry labels  */}
<div className="mt-4 pt-4 border-t border-surface-variant/80">
<p className="font-label-sm text-xs font-semibold text-outline uppercase tracking-wider mb-3">Live Telemetry & Audits</p>
<div className="grid grid-cols-3 gap-2">
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col items-center text-center">
<span className="material-symbols-outlined text-forest-green text-[20px] mb-1">wifi</span>
<span className="text-[11px] font-medium text-text-gray">Wi-Fi</span>
<span className="text-xs font-bold text-[#10233f]">100 Mbps</span>
</div>
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col items-center text-center">
<span className="material-symbols-outlined text-forest-green text-[20px] mb-1">water_drop</span>
<span className="text-[11px] font-medium text-text-gray">Water</span>
<span className="text-xs font-bold text-[#10233f]">24/7 Treated</span>
</div>
<div className="bg-surface-container-low rounded-xl p-2.5 flex flex-col items-center text-center">
<span className="material-symbols-outlined text-forest-green text-[20px] mb-1">bolt</span>
<span className="text-[11px] font-medium text-text-gray">Power</span>
<span className="text-xs font-bold text-[#10233f]">Grid+Backup</span>
</div>
</div>
</div>
{/*  Card Action Button  */}
<div className="mt-6 pt-4 border-t border-surface-variant/60 flex items-center justify-between">
<div className="text-xs text-text-gray">
              Audited by 9 explorers
            </div>
<Link to="/trip/livetrail" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-green hover:text-forest-dark transition-colors group/link">
              View Live Telemetry
              <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
</div>
</article>
</div>
{/*  Bottom Action Banner  */}
<div className="mt-12 bg-gradient-to-r from-[#10233f] via-[#152e53] to-[#1f4a32] rounded-[20px] p-8 text-pure-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[#adf2c3] text-[32px]">sensors</span>
</div>
<div>
<h4 className="font-headline-md text-xl font-bold text-pure-white">Are you currently at a verified stay?</h4>
<p className="font-body-md text-sm text-[#b5c7eb] mt-1">
            Submit a 48-hour live ground truth snapshot to earn <span className="text-[#adf2c3] font-semibold">+50 Karwan Karma Points</span>.
          </p>
</div>
</div>
<button className="shrink-0 bg-[#2c6e49] hover:bg-[#23583a] text-pure-white font-label-md font-semibold text-sm px-6 py-3.5 rounded-full shadow-md transition-colors flex items-center gap-2 border border-emerald-400/30">
<span className="material-symbols-outlined text-[18px]">add_a_photo</span>
        Submit Ground Truth Snapshot
      </button>
</div>
</div>

      </div>
    </SharedLayout>
  );
}
