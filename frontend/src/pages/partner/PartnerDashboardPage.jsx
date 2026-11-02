import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function PartnerDashboardPage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Karwan - Partner Dashboard">
      <div className="karwan-partnerdashboardpage">
        
{/*  Header Section  */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-section-gap border-b border-outline-variant/20 pb-stack-lg gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Welcome back, Jaipur Auto Association</h2>
<p className="text-text-gray font-body-md">Manage your service presence and track regional interactions.</p>
</div>
<div className="flex flex-col items-start sm:items-end">
<span className="font-label-sm text-label-sm text-text-gray uppercase tracking-wider mb-1">Provider Status</span>
<div className="flex items-center bg-secondary-fixed-dim/10 border border-secondary-fixed/30 rounded-full px-4 py-2 shadow-sm">
<span className="material-symbols-outlined text-secondary mr-2 text-[20px]">verified</span>
<span className="font-headline-md text-headline-md text-primary mr-1">4.7</span>
<span className="font-label-md text-label-md text-secondary">Trust Score</span>
</div>
</div>
</div>
{/*  3-Card Stat Row  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-section-gap">
{/*  Stat Card 1  */}
<div className="bg-surface-container-lowest rounded-xl p-stack-lg shadow-[0_4px_16px_rgba(0,13,35,0.03)] border border-outline-variant/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-5xl text-primary">group</span>
</div>
<p className="font-label-sm text-label-sm text-text-gray mb-2 uppercase tracking-wide">Total Interactions</p>
<h3 className="font-display-lg text-display-lg text-primary mb-2">1,240</h3>
<div className="flex items-center text-success-green">
<span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
<span className="font-label-sm text-label-sm">+12% this month</span>
</div>
</div>
{/*  Stat Card 2  */}
<div className="bg-surface-container-lowest rounded-xl p-stack-lg shadow-[0_4px_16px_rgba(0,13,35,0.03)] border border-outline-variant/10">
<p className="font-label-sm text-label-sm text-text-gray mb-2 uppercase tracking-wide">Trust Score Trend</p>
<div className="flex justify-between items-end mb-2">
<h3 className="font-headline-md text-headline-md text-primary">Stable</h3>
<span className="font-label-md text-label-md text-success-green bg-success-green/10 px-2 py-1 rounded">Top 5%</span>
</div>
{/*  Mini Sparkline SVG  */}
<div className="w-full h-16 mt-4 relative">
<svg className="w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 100 30">
<defs>
<linearGradient id="sparkline-gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#286a46" stopOpacity="0.2"></stop>
<stop offset="100%" stopColor="#286a46" stopOpacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,25 L10,22 L20,24 L30,15 L40,18 L50,10 L60,12 L70,5 L80,8 L90,2 L100,4 L100,30 L0,30 Z" fill="url(#sparkline-gradient)"></path>
<path d="M0,25 L10,22 L20,24 L30,15 L40,18 L50,10 L60,12 L70,5 L80,8 L90,2 L100,4" fill="none" stroke="#286a46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
{/*  Stat Card 3  */}
<div className="bg-surface-container-lowest rounded-xl p-stack-lg shadow-[0_4px_16px_rgba(0,13,35,0.03)] border border-outline-variant/10 relative overflow-hidden">
<p className="font-label-sm text-label-sm text-text-gray mb-2 uppercase tracking-wide">Open Reports</p>
<h3 className="font-display-lg text-display-lg text-primary mb-2">0</h3>
<div className="flex items-center text-text-gray">
<span className="material-symbols-outlined text-[16px] mr-1 text-secondary-fixed">check_circle</span>
<span className="font-label-sm text-label-sm">All clear. Excellent response time.</span>
</div>
</div>
</div>
{/*  Main Two-Column Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Left Column (60%): Recent Incidents  */}
<div className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(0,13,35,0.04)] border border-outline-variant/10 overflow-hidden">
<div className="p-stack-lg border-b border-outline-variant/20 flex justify-between items-center bg-surface-bright">
<h3 className="font-headline-md text-headline-md text-primary">Recent Interactions</h3>
<button className="text-text-gray hover:text-primary transition-colors">
<span className="material-symbols-outlined">filter_list</span>
</button>
</div>
<div className="divide-y divide-outline-variant/10">
{/*  Incident Item 1  */}
<div className="p-stack-lg hover:bg-surface-container-low/50 transition-colors flex items-center justify-between group">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-full bg-error-container/30 flex items-center justify-center flex-shrink-0 mt-1">
<span className="material-symbols-outlined text-error text-[20px]">warning</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary mb-1 group-hover:text-secondary transition-colors">Route Delay Assistance</h4>
<p className="font-label-sm text-label-sm text-text-gray mb-2">User: RJ-45-Convoy • NH-48 Sector</p>
<span className="inline-block bg-error-container/40 text-on-error-container rounded-full px-3 py-1 font-label-sm text-[11px] font-semibold tracking-wide">FLAGGED</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-text-gray block mb-2">10 mins ago</span>
<button className="text-secondary font-label-sm text-label-sm hover:underline">Review</button>
</div>
</div>
{/*  Incident Item 2  */}
<div className="p-stack-lg hover:bg-surface-container-low/50 transition-colors flex items-center justify-between group">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-full bg-secondary-fixed/30 flex items-center justify-center flex-shrink-0 mt-1">
<span className="material-symbols-outlined text-on-secondary-fixed-variant text-[20px]">handshake</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary mb-1 group-hover:text-secondary transition-colors">Emergency Tow Dispatched</h4>
<p className="font-label-sm text-label-sm text-text-gray mb-2">User: MK-Solo • Ajmer Road</p>
<span className="inline-block bg-secondary-fixed/20 text-on-secondary-fixed-variant rounded-full px-3 py-1 font-label-sm text-[11px] font-semibold tracking-wide">RESOLVED</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-text-gray block mb-2">2 hours ago</span>
<button className="text-text-gray font-label-sm text-label-sm hover:text-primary transition-colors">Details</button>
</div>
</div>
{/*  Incident Item 3  */}
<div className="p-stack-lg hover:bg-surface-container-low/50 transition-colors flex items-center justify-between group">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-full bg-secondary-fixed/30 flex items-center justify-center flex-shrink-0 mt-1">
<span className="material-symbols-outlined text-on-secondary-fixed-variant text-[20px]">task_alt</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary mb-1 group-hover:text-secondary transition-colors">Standard Maintenance Check</h4>
<p className="font-label-sm text-label-sm text-text-gray mb-2">Fleet Vehicle • Central Hub</p>
<span className="inline-block bg-secondary-fixed/20 text-on-secondary-fixed-variant rounded-full px-3 py-1 font-label-sm text-[11px] font-semibold tracking-wide">RESOLVED</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-text-gray block mb-2">Yesterday</span>
<button className="text-text-gray font-label-sm text-label-sm hover:text-primary transition-colors">Details</button>
</div>
</div>
<div className="p-4 text-center bg-surface-bright">
<button className="font-label-md text-label-md text-secondary hover:underline">View All Logged Interactions</button>
</div>
</div>
</div>
{/*  Right Column (40%): Listing Preview  */}
<div className="lg:col-span-5">
<div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_rgba(0,13,35,0.06)] border border-outline-variant/10 overflow-hidden sticky top-28">
<div className="p-stack-lg border-b border-outline-variant/20 bg-surface-bright flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-primary">Your Listing Preview</h3>
<span className="material-symbols-outlined text-text-gray text-[20px]" title="How users see you on TrustRadar">info</span>
</div>
<div className="p-stack-lg">
{/*  Mock Listing Card inside  */}
<div className="border border-outline-variant/20 rounded-lg overflow-hidden bg-white mb-6">
<div className="bg-cover bg-center w-full h-48 relative" data-alt="A wide, editorial photograph of a premium, modern auto repair facility located in Jaipur, India. The exterior features clean architectural lines, large spotless glass bays revealing organized diagnostic workstations, and refined, understated corporate branding. The bright, natural daytime lighting casts soft shadows, enhancing the clean, Heritage Tech aesthetic. Deep navy blues and crisp greens accent the immaculate concrete and glass surfaces, conveying absolute professional authority and premium service quality." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUCkap-KREwhR83rcjnbNJ0xS36CCy9k2skv3o0wIf6foU6scox0_SIH9xC1QLEA4n6CAx2tSsdZU83nRjEQFvbYlyoJeaL1ZXbA1xMRa2I9dRuA7ELgBCox0ikOQysOj0_HzF1m0wer6mc_bir0ePilsoTPwV0vC8Gba-OyDH3gE3t4PyPEQAnn-o8Vcdb9lDA1I9a-C9smDuDMe5QAwdpYZVigIYkn7ert-l3gNPd3q-zmamBgn2OQ')" }}>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-sm">
<span className="material-symbols-outlined text-secondary text-[16px] mr-1">star</span>
<span className="font-label-sm text-label-sm font-bold text-primary">4.7</span>
</div>
<div className="absolute bottom-3 right-3 bg-primary/80 backdrop-blur-md rounded px-2 py-1 text-pure-white font-label-sm text-[11px] tracking-wide uppercase">
                                        Verified Partner
                                    </div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="font-headline-md text-[20px] text-primary leading-tight">Jaipur Auto Association</h4>
</div>
<p className="font-body-md text-body-md text-text-gray mb-3 flex items-center">
<span className="material-symbols-outlined text-[16px] mr-1">location_on</span>
                                        NH-48, Jaipur Highway
                                    </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-surface-container-high text-on-surface-variant font-label-sm text-[12px] px-2 py-1 rounded">24/7 Towing</span>
<span className="bg-surface-container-high text-on-surface-variant font-label-sm text-[12px] px-2 py-1 rounded">Diagnostics</span>
<span className="bg-surface-container-high text-on-surface-variant font-label-sm text-[12px] px-2 py-1 rounded">EV Support</span>
</div>
<div className="border-t border-outline-variant/20 pt-4 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-success-green flex items-center">
<span className="material-symbols-outlined text-[16px] mr-1">bolt</span> Available Now
                                        </span>
<span className="font-label-sm text-label-sm text-text-gray">~15 min response</span>
</div>
</div>
</div>
<button className="w-full bg-success-green text-pure-white font-label-md text-label-md py-3 rounded-full hover:bg-secondary transition-colors shadow-sm flex items-center justify-center">
<span className="material-symbols-outlined mr-2 text-[18px]">edit</span>
                                Edit Listing Appearance
                            </button>
</div>
</div>
</div>
</div>

      </div>
    </SharedLayout>
  );
}
