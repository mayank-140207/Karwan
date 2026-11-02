import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailLayout from '../../components/layout/DetailLayout';

export default function MarketSquareSouvenirsPage() {
  const navigate = useNavigate();

  return (
    <DetailLayout title="Market Square Souvenirs">
      <div className="karwan-marketsquaresouvenirspage">
        
{/*  Top Header Bar  */}
<header className="h-16 px-8 bg-white border-b border-slate-200/80 flex items-center justify-between sticky top-0 z-20 shadow-sm" data-purpose="top-navigation-bar">
{/*  Search Input  */}
<div className="relative w-96">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<input className="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0f1d32] focus:bg-white transition-all" placeholder="Search TrustRadar directory..." type="search" defaultValue="Market Square Souvenirs" />
</div>
{/*  Right Header Actions  */}
<div className="flex items-center gap-4">
<button aria-label="Notifications" className="relative p-2 text-slate-500 hover:text-slate-800 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white"></span>
</button>
<button aria-label="Settings" className="p-2 text-slate-500 hover:text-slate-800 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
{/*  Traveler Avatar  */}
<div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300 ring-2 ring-slate-100 flex items-center justify-center font-medium text-xs text-slate-600">
<span className="sr-only">User profile</span>
          JD
        </div>
</div>
</header>
{/*  Page Body Container  */}
<div className="p-8 max-w-7xl w-full mx-auto space-y-6">
{/*  Breadcrumbs  */}
<nav aria-label="Breadcrumb" className="flex items-center text-xs font-medium text-slate-500">
<Link to="/trip/trustradar" className="hover:text-slate-800 flex items-center gap-1 transition-colors">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
          TrustRadar Directory
        </Link>
<span className="mx-2 text-slate-300">/</span>
<span className="text-slate-800 font-semibold">Market Square Souvenirs (Artisan Vendor)</span>
</nav>
{/*  BEGIN: HeroVendorCard  */}
<section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 overflow-hidden relative" data-purpose="vendor-hero-card">
<div className="flex flex-col lg:flex-row gap-6">
{/*  Vendor Image with Badge  */}
<div className="relative w-full lg:w-96 h-56 rounded-xl overflow-hidden shrink-0 shadow-inner bg-slate-100">
<img alt="Close up photo of an Indian boutique souvenir shop in Jaipur called Market Square Souvenirs, showcasing colorful textiles, brass handicrafts, puppets, traditional blue pottery and wooden art" className="w-full h-full object-cover object-center" src="/images/img_3e8a8116e45c.jpg" />
{/*  Overlay Badge  */}
<div className="absolute top-3 left-3 bg-[#0f1d32]/85 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 shadow">
<svg className="w-3.5 h-3.5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Handicraft & Souvenirs
            </div>
</div>
{/*  Vendor Information & Main Badges  */}
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex flex-wrap items-center gap-2 mb-2 pr-20"><span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-emerald-200/60 whitespace-nowrap">Vendor</span><span className="bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-amber-200/60 flex items-center gap-1 whitespace-nowrap"><svg className="w-3 h-3 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" fillRule="evenodd"></path></svg>Status: Under Review / Flagged</span><span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-slate-200 whitespace-nowrap">Amber Fort Bazaar, Jaipur</span></div>
{/*  Vendor Title and Location  */}
<h1 className="serif-title text-3xl font-bold text-slate-900 tracking-tight mb-1">
                Market Square Souvenirs
              </h1>
<p className="text-sm text-slate-500 flex items-center gap-1">
<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Amber Fort Courtyard Market, Jaipur, Rajasthan
              </p>
</div>
{/*  Trust Score Badge  */}
<div className="absolute top-6 right-6 hidden md:flex flex-col items-center z-10"><div className="w-16 h-16 rounded-full border-4 border-amber-500 flex items-center justify-center bg-amber-50/50 shadow-sm"><span className="text-2xl font-bold text-amber-700 font-sans tracking-tighter">3.8</span></div><span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">TRUST SCORE</span></div>
{/*  Metric Statistics Row  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-4 border-t border-slate-100">
<div>
<p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">TOTAL INTERACTIONS</p>
<p className="text-xl font-bold text-slate-800 tracking-tight mt-0.5">2,410</p>
</div>
<div>
<p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">INCIDENTS RESOLVED</p>
<p className="text-xl font-bold text-emerald-700 tracking-tight mt-0.5">18 Verified</p>
</div>
<div>
<p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">OPEN REPORTS</p>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="text-xl font-bold text-red-600 tracking-tight">2</span>
<span className="text-xs font-semibold px-2 py-0.5 bg-red-100 text-red-700 rounded-md">Under Review</span>
</div>
</div>
<div>
<p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">MEMBER SINCE</p>
<p className="text-xl font-bold text-slate-800 tracking-tight mt-0.5">Nov 2023</p>
</div>
</div>
</div>
</div>
</section>
{/*  END: HeroVendorCard  */}
{/*  BEGIN: TwoColumnContent  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
{/*  Left Column: Trust & Incident History (2 cols wide)  */}
<section className="lg:col-span-2 space-y-4" data-purpose="incident-history-section">
<div className="flex items-center justify-between">
<h2 className="serif-title text-xl font-bold text-slate-900">Incident & Trust History</h2>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              2 Active Flagged Reports
            </span>
</div>
<div className="space-y-3">
{/*  Timeline Item 1: Open Report 1  */}
<article className="bg-white rounded-xl border border-red-200/90 p-4 shadow-sm relative overflow-hidden">
<div className="flex items-start gap-3.5">
<div className="p-2 rounded-lg bg-red-50 text-red-600 shrink-0 border border-red-100 mt-0.5">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex flex-wrap items-center justify-between gap-2 mb-1">
<h3 className="text-xs font-bold text-red-700 tracking-wide">OPEN REPORT • OVERCHARGING ON EMBROIDERED SHAWLS</h3>
<span className="text-xs font-medium text-slate-400">Oct 14, 2024</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-2">
                    Reported 2 days ago. Traveler charged ₹4,500 for pashmina priced on certified Karwan catalogue at ₹1,800. Digital receipt logged and vendor explanation requested.
                  </p>
<div className="flex items-center gap-2">
<span className="text-[11px] font-semibold bg-red-50 text-red-600 px-2 py-0.5 rounded border border-red-100">Investigation Pending</span>
<span className="text-[11px] text-slate-400">• Evidence ID: #KRN-8492</span>
</div>
</div>
</div>
</article>
{/*  Timeline Item 2: Open Report 2  */}
<article className="bg-white rounded-xl border border-amber-200/90 p-4 shadow-sm relative overflow-hidden">
<div className="flex items-start gap-3.5">
<div className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0 border border-amber-100 mt-0.5">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex flex-wrap items-center justify-between gap-2 mb-1">
<h3 className="text-xs font-bold text-amber-800 tracking-wide">OPEN REPORT • PRICE DISCREPANCY ON BRASS ARTIFACTS</h3>
<span className="text-xs font-medium text-slate-400">Oct 6, 2024</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-2">
                    Dual pricing structure reported for domestic vs foreign travelers without mandated display board.
                  </p>
<div className="flex items-center gap-2">
<span className="text-[11px] font-semibold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">Field Audit Assigned</span>
<span className="text-[11px] text-slate-400">• Jaipur Tourism Board Notified</span>
</div>
</div>
</div>
</article>
{/*  Timeline Item 3: Resolved Incident  */}
<article className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm relative overflow-hidden">
<div className="flex items-start gap-3.5">
<div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-100 mt-0.5">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex flex-wrap items-center justify-between gap-2 mb-1">
<h3 className="text-xs font-bold text-emerald-800 tracking-wide">RESOLVED • FARE & PACKAGING AUDIT</h3>
<span className="text-xs font-medium text-slate-400">Aug 12, 2024</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                    Weight discrepancy on marble souvenirs rectified with digital weighing scale installation.
                  </p>
</div>
</div>
</article>
{/*  Timeline Item 4: Verified Shield  */}
<article className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm relative overflow-hidden">
<div className="flex items-start gap-3.5">
<div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0 border border-blue-100 mt-0.5">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex flex-wrap items-center justify-between gap-2 mb-1">
<h3 className="text-xs font-bold text-blue-800 tracking-wide">AUTHENTICITY VERIFICATION COMPLETED</h3>
<span className="text-xs font-medium text-slate-400">May 19, 2024</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                    Handloom mark authenticity certification verified by Rajasthan Crafts Council.
                  </p>
</div>
</div>
</article>
</div>
</section>
{/*  Right Column: Operating Location Card  */}
<section className="space-y-4" data-purpose="location-details-section">
<h2 className="serif-title text-xl font-bold text-slate-900">Operating Location</h2>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
{/*  Simulated Map Container  */}
<div className="h-48 bg-[#e8ecf2] relative overflow-hidden flex items-center justify-center">
{/*  Map schematic styling lines  */}
<svg className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="none" viewBox="0 0 400 200">
<path d="M-20 60 Q 150 120 420 50" fill="none" stroke="#cbd5e1" strokeWidth="12"></path>
<path d="M120 -20 Q 200 100 240 220" fill="none" stroke="#cbd5e1" strokeWidth="10"></path>
<path d="M-10 140 Q 220 160 410 130" fill="none" stroke="#fcd34d" strokeWidth="6"></path>
<circle cx="220" cy="110" fill="#a7f3d0" fillOpacity="0.35" r="45"></circle>
</svg>
{/*  Map Pin Point  */}
<div className="relative z-10 flex flex-col items-center">
<div className="w-9 h-9 rounded-full bg-[#10233f] border-2 border-white shadow-lg flex items-center justify-center text-white">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="w-2 h-1 bg-black/20 rounded-full blur-[1px] mt-0.5"></span>
</div>
{/*  Map Label Overlay  */}
<span className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-wider text-slate-700 bg-white/90 px-2 py-0.5 rounded shadow-sm">
                Amber Heritage Bazaar Zone
              </span>
</div>
{/*  Details Block  */}
<div className="p-5 space-y-4">
<div className="flex items-start gap-3">
<div className="p-1.5 rounded bg-slate-100 text-slate-600 mt-0.5">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="text-xs font-bold text-slate-900">Registered Shop Location</h4>
<p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Shop #42, Main Courtyard Bazaar, Near Jaleb Chowk, Amber, Jaipur, Rajasthan 302001
                  </p>
</div>
</div>
<div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
<span className="text-slate-500 font-medium">License / Reg #:</span>
<span className="font-mono font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                  RJ-JPR-HND-9042
                </span>
</div>
</div>
</div>
</section>
</div>
{/*  END: TwoColumnContent  */}
{/*  BEGIN: BottomReportBanner  */}
<aside className="bg-[#0f1d32] rounded-2xl p-6 lg:p-7 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md mt-6" data-purpose="report-callout-banner">
<div className="space-y-1.5 max-w-2xl text-center md:text-left">
<h2 className="serif-title text-xl font-bold tracking-tight text-white">See something that needs flagging?</h2>
<p className="text-sm text-slate-300 leading-relaxed">
            Help keep the Karwan community safe by reporting suspicious activity, fare disputes, or verifying good experiences with this vendor.
          </p>
</div>
<button className="bg-white hover:bg-slate-100 text-[#0f1d32] font-semibold text-sm px-6 py-2.5 rounded-lg flex items-center gap-2 shrink-0 shadow transition duration-150">
<svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
          Report Now
        </button>
</aside>
{/*  END: BottomReportBanner  */}
</div>

      </div>
    </DetailLayout>
  );
}
