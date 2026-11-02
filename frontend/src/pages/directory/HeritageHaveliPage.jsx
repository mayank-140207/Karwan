import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailLayout from '../../components/layout/DetailLayout';

export default function HeritageHaveliPage() {
  const navigate = useNavigate();

  return (
    <DetailLayout title="The Heritage Haveli (Stay Details)">
      <div className="karwan-heritagehavelipage">
        
{/*  BEGIN: Breadcrumbs  */}
<nav className="flex items-center gap-2 text-sm text-gray-500" data-purpose="breadcrumbs">
<Link to="/directory" className="inline-flex items-center gap-1.5 font-medium text-gray-600 hover:text-[#2c6e49] transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            Ground Truth Directory
          </Link>
<span>/</span>
<span className="font-semibold text-slate-900">The Heritage Haveli (Bani Park, Jaipur)</span>
<span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
            Node ID: #GT-JAI-409
          </span>
</nav>
{/*  END: Breadcrumbs  */}
{/*  BEGIN: PropertyHeroCard  */}
<section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 overflow-hidden" data-purpose="hero-property-card">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*  Hero Image Block with Live Badge  */}
<div className="lg:col-span-5 relative group">
<div className="relative overflow-hidden rounded-2xl shadow-md aspect-[16/10] bg-slate-100">
<img alt="The Heritage Haveli courtyard fountain in Jaipur Rajasthan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_351d434c815d.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
{/*  Live Verification Floating Badge  */}
<div className="absolute top-3 left-3 bg-[#10233f]/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-2 border border-white/20 shadow-lg">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
<span>Ground Truth Verified • 2 hrs ago</span>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
<span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">Jaipur Heritage Zone #8</span>
<span className="bg-emerald-600/90 font-semibold px-2.5 py-1 rounded-lg">100% Inspection Passed</span>
</div>
</div>
</div>
{/*  Property Identification & Live Telemetry Details  */}
<div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5">
<div>
{/*  Badges Row  */}
<div className="flex flex-wrap items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-[#2c6e49] border border-emerald-200">
<svg className="w-3.5 h-3.5 text-[#2c6e49]" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    Verified Stay
                  </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Ground Truth Active
                  </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                    ★ Super-Host Certified
                  </span>
<span className="text-xs text-gray-400 font-mono ml-auto">EST. 1892</span>
</div>
{/*  Property Title & Subhead  */}
<h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                  The Heritage Haveli
                </h1>
<p className="text-sm text-gray-600 mt-1 flex items-center gap-1.5">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Bani Park, Jaipur, Rajasthan • Heritage Boutique Stay & Courtyard Haven
                </p>
</div>
{/*  Live Infrastructure Telemetry Cards Row  */}
<div>
<p className="text-[11px] uppercase tracking-wider font-bold text-gray-500 mb-2.5">Live Verified Infrastructure Telemetry</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
{/*  Wi-Fi Card  */}
<div className="bg-gray-50 hover:bg-emerald-50/40 p-3 rounded-xl border border-gray-200 transition-colors">
<div className="flex items-center justify-between text-xs text-gray-500 mb-1">
<span className="font-medium">Wi-Fi Speed</span>
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>
<div className="text-lg font-bold text-slate-900">120 Mbps</div>
<p className="text-[11px] text-emerald-700 font-medium mt-0.5">Ookla 2h ago • 14ms</p>
</div>
{/*  Water Card  */}
<div className="bg-gray-50 hover:bg-emerald-50/40 p-3 rounded-xl border border-gray-200 transition-colors">
<div className="flex items-center justify-between text-xs text-gray-500 mb-1">
<span className="font-medium">Water Supply</span>
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>
<div className="text-lg font-bold text-slate-900">24/7 Hot</div>
<p className="text-[11px] text-gray-600 font-medium mt-0.5">42°C constant flow</p>
</div>
{/*  Power Backup  */}
<div className="bg-gray-50 hover:bg-emerald-50/40 p-3 rounded-xl border border-gray-200 transition-colors">
<div className="flex items-center justify-between text-xs text-gray-500 mb-1">
<span className="font-medium">Power Backup</span>
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>
<div className="text-lg font-bold text-slate-900">100% Backup</div>
<p className="text-[11px] text-gray-600 font-medium mt-0.5">Dual Inverter + Genset</p>
</div>
{/*  Hygiene & Quiet Score  */}
<div className="bg-gray-50 hover:bg-emerald-50/40 p-3 rounded-xl border border-gray-200 transition-colors">
<div className="flex items-center justify-between text-xs text-gray-500 mb-1">
<span className="font-medium">Quiet Score</span>
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>
<div className="text-lg font-bold text-slate-900">4.9 <span className="text-xs font-normal text-gray-500">/ 5.0</span></div>
<p className="text-[11px] text-emerald-700 font-medium mt-0.5">32 dB acoustic level</p>
</div>
</div>
</div>
{/*  Stats & Audit Status Row  */}
<div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600">
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900">840</span> Verified Audits
                </div>
<div className="h-3 w-px bg-gray-200"></div>
<div className="flex items-center gap-1.5">
<span className="text-gray-400">Last Physical Check:</span>
<span className="font-semibold text-slate-900">Today, 11:30 AM</span>
</div>
<div className="h-3 w-px bg-gray-200"></div>
<div className="flex items-center gap-1.5 text-emerald-700">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-semibold">0 Active Discrepancies</span>
</div>
<div className="h-3 w-px bg-gray-200"></div>
<div className="text-gray-500">
                  Verified Node Since <span className="font-medium text-slate-700">Jan 2023</span>
</div>
</div>
</div>
</div>
</section>
{/*  END: PropertyHeroCard  */}
{/*  BEGIN: MainTwoColumnContent  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*  Left Column (w-7/12 desktop): Rolling 48-Hour Live Photo Feed  */}
<section className="lg:col-span-7 space-y-6" data-purpose="live-photo-feed">
{/*  Feed Header with Counter Pill  */}
<div className="flex items-center justify-between border-b border-gray-200 pb-4">
<div>
<h2 className="text-xl font-serif font-bold text-slate-900">Rolling 48-Hour Live Photo Feed</h2>
<p className="text-xs text-gray-500 mt-0.5">Real-time timestamped, geotagged photos submitted by past verified guests</p>
</div>
<span className="bg-[#2c6e49]/10 text-[#2c6e49] text-xs font-bold px-3 py-1.5 rounded-full border border-[#2c6e49]/20 shadow-xs flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-[#2c6e49]"></span>
                12 Guest Photos in Last 48 hrs
              </span>
</div>
{/*  Feed Items Grid / Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4"><article className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"><div className="relative aspect-[16/10] bg-slate-100 overflow-hidden"><img alt="Bathroom and geyser hot water audit test at The Heritage Haveli" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_e653894bcec9.jpg"/><div className="absolute top-3 right-3"><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-emerald-800 shadow-sm border border-emerald-200"><svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Water Temp: 42°C</span></div><div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md font-medium">Geyser: 42°C Instant Flow</div></div><div className="p-4 flex-1 flex flex-col justify-between space-y-3"><div className="flex items-start justify-between gap-2"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700 ring-2 ring-emerald-500/20">SM</div><div><p className="text-xs font-bold text-slate-900">Sarah M.</p><p className="text-[10px] text-gray-500">2 hours ago • <span className="text-emerald-700 font-medium">Verified Booking Room 204</span></p></div></div></div><p className="text-xs text-slate-700 leading-relaxed">"Bathroom pristine, hot water running instantly at 42°C. Water pressure is excellent and towels are brand fresh. Plugs & geyser defaultChecked."</p><div className="pt-2 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-gray-500"><span className="font-semibold text-slate-700">Check:</span><span className="truncate">Geyser On-Demand • Flow 9.2 L/min • No blockage</span></div></div></article><article className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"><div className="relative aspect-[16/10] bg-slate-100 overflow-hidden"><img alt="Ookla speed test and work desk at The Heritage Haveli courtyard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_dabc1e77b349.jpg"/><div className="absolute top-3 right-3"><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-blue-800 shadow-sm border border-blue-200"><svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Ookla: 120 Mbps • 14ms</span></div><div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md font-medium">Courtyard Wi-Fi 6 Mesh</div></div><div className="p-4 flex-1 flex flex-col justify-between space-y-3"><div className="flex items-start justify-between gap-2"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700 ring-2 ring-blue-500/20">AK</div><div><p className="text-xs font-bold text-slate-900">Arjun K.</p><p className="text-[10px] text-gray-500">5 hours ago • <span className="text-emerald-700 font-medium">Verified Stay • Remote Work</span></p></div></div></div><p className="text-xs text-slate-700 leading-relaxed">"120 Mbps Ookla verified at garden courtyard desk. Flawless video calls with seamless mesh Wi-Fi handover to my balcony."</p><div className="pt-2 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-gray-500"><span className="font-semibold text-slate-700">Speed:</span><span className="truncate">Down: 121.4 Mbps • Up: 84.1 Mbps • Jitter: 2ms</span></div></div></article><article className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"><div className="relative aspect-[16/10] bg-slate-100 overflow-hidden"><img alt="Bedroom acoustics and spotless linen audit at The Heritage Haveli" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_3a12c12c3042.jpg"/><div className="absolute top-3 right-3"><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-purple-800 shadow-sm border border-purple-200">Acoustics: 32 dB (Ultra Quiet)</span></div><div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md font-medium">Deluxe Suite • Soundproofed</div></div><div className="p-4 flex-1 flex flex-col justify-between space-y-3"><div className="flex items-start justify-between gap-2"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700 ring-2 ring-purple-500/20">DL</div><div><p className="text-xs font-bold text-slate-900">David L.</p><p className="text-[10px] text-gray-500">14 hours ago • <span className="text-emerald-700 font-medium">Heritage Deluxe Suite</span></p></div></div></div><p className="text-xs text-slate-700 leading-relaxed">"Fresh linen, spotless mattress audit, and noise level measured at 32 dB during midnight. Double sandstone walls block street noise."</p><div className="pt-2 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-gray-500"><span className="font-semibold text-slate-700">Check:</span><span className="truncate">Ambient 32 dB • Street Rejection: -24 dB</span></div></div></article><article className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"><div className="relative aspect-[16/10] bg-slate-100 overflow-hidden"><img alt="Dining courtyard and generator routine test at The Heritage Haveli" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/img_2c76cb50aadc.jpg"/><div className="absolute top-3 right-3"><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-emerald-800 shadow-sm border border-emerald-200">Generator Test: PASSED</span></div><div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md font-medium">Breakfast Courtyard • Genset</div></div><div className="p-4 flex-1 flex flex-col justify-between space-y-3"><div className="flex items-start justify-between gap-2"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700 ring-2 ring-emerald-500/20">PR</div><div><p className="text-xs font-bold text-slate-900">Pooja R.</p><p className="text-[10px] text-gray-500">Yesterday • <span className="text-emerald-700 font-medium">Breakfast & Dining Courtyard</span></p></div></div></div><p className="text-xs text-slate-700 leading-relaxed">"Fresh breakfast spread and witnessed standard generator switchover routine. Cutover took under 1.5s without dropping AC or Wi-Fi."</p><div className="pt-2 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-gray-500"><span className="font-semibold text-slate-700">Auto-heal:</span><span className="truncate">Voltage 230V steady • Zero dropped packets</span></div></div></article></div>
{/*  Interactive Upload Snapshot Box  */}
<div className="bg-gradient-to-br from-[#10233f] to-[#18365f] rounded-2xl p-6 text-white shadow-md relative overflow-hidden" data-purpose="guest-upload-cta">
<div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
<h3 className="font-serif font-bold text-lg">Are you currently at The Heritage Haveli?</h3>
</div>
<p className="text-xs text-slate-300 max-w-md">
                    Submit an amenities photo, Ookla speed screenshot, or hot water test to assist fellow travelers.
                  </p>
</div>
<button className="bg-[#2c6e49] hover:bg-[#245a3c] text-white font-medium text-xs px-4 py-2.5 rounded-xl transition-colors shrink-0 shadow-sm flex items-center gap-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Upload Snapshot (+50 Karma Points)</span>
</button>
</div>
</div>
</section>
{/*  Right Column (w-5/12 desktop): Location & Amenities Truth  */}
<aside className="lg:col-span-5 space-y-6" data-purpose="amenities-truth-sidebar">
{/*  Location & Map Preview Card  */}
<div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
<div className="flex items-center justify-between">
<h3 className="font-serif font-bold text-slate-900 text-base">Location & Geotag Truth</h3>
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md font-mono">26.9260° N, 75.7937° E</span>
</div>
{/*  Map Visual Mockup  */}
<div className="h-44 rounded-xl bg-slate-100 border border-gray-200 overflow-hidden relative flex flex-col justify-between p-3">
{/*  Visual Map Grid Graphic  */}
<div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10233f_1px,transparent_1px)] [background-size:12px_12px]"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-slate-800 px-2.5 py-1 rounded-md shadow-xs">
                    Bani Park Heritage Zone
                  </span>
<span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    GPS Geofence: Active
                  </span>
</div>
{/*  Center Haveli Map Marker  */}
<div className="relative z-10 mx-auto text-center flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-[#10233f] text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
<svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd"></path></svg>
</div>
<span className="bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded-md font-medium mt-1">The Heritage Haveli</span>
</div>
<div className="relative z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[11px] text-gray-600 flex justify-between">
<span>Sindhi Camp Metro: <strong>1.2 km</strong></span>
<span>Jaipur Junction: <strong>2.1 km</strong></span>
</div>
</div>
<p className="text-xs text-gray-600 leading-relaxed">
                Quiet residential lane inside Bani Park. Verified zero construction within a 250m radius as of this morning's acoustic audit.
              </p>
</div>
{/*  Physical Amenities Live Check  */}
<div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
<div className="flex items-center justify-between border-b border-gray-100 pb-3">
<h3 className="font-serif font-bold text-slate-900 text-base">Physical Amenities Live Status</h3>
<span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span> 4 / 4 Live Checked
                </span>
</div>
<ul className="space-y-3 text-xs">
<li className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-[#2c6e49]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<p className="font-semibold text-slate-900">Wi-Fi 6 Routers in Each Room</p>
<p className="text-gray-500 text-[11px]">Uncapped high-priority optical fiber</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[10px]">Active</span>
</li>
<li className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-[#2c6e49]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<p className="font-semibold text-slate-900">Dedicated 15A Laptop Ports at Desk</p>
<p className="text-gray-500 text-[11px]">Surge protected universal sockets</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[10px]">Verified</span>
</li>
<li className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-[#2c6e49]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<p className="font-semibold text-slate-900">Courtyard Acoustic Double-Glazing</p>
<p className="text-gray-500 text-[11px]">Sealed silence during morning meditation</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[10px]">Verified</span>
</li>
<li className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-[#2c6e49]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<p className="font-semibold text-slate-900">Lift & Ground Wheelchair Access</p>
<p className="text-gray-500 text-[11px]">Ramp to dining courtyard verified</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[10px]">Verified</span>
</li>
</ul>
</div>
{/*  On-Site Host Profile Card  */}
<div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center gap-3.5">
<div className="w-12 h-12 rounded-full bg-[#10233f] text-white flex items-center justify-center font-serif text-lg font-bold">
                  MS
                </div>
<div>
<h4 className="text-sm font-bold text-slate-900">Mahendra Singh</h4>
<p className="text-xs text-gray-500">On-Site Host & General Manager</p>
<p className="text-[11px] text-[#2c6e49] font-medium mt-0.5">ID: #KRW-HST-781 • Direct Ground Contact</p>
</div>
</div>
<div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
<span className="text-gray-500">Avg Response Time: <strong>&lt; 5 mins</strong></span>
<button className="text-[#2c6e49] hover:text-[#245a3c] font-semibold flex items-center gap-1">
<span>Host Logs</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</aside>
</div>
{/*  END: MainTwoColumnContent  */}

      </div>
    </DetailLayout>
  );
}
