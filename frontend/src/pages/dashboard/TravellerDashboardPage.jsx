import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function TravellerDashboardPage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Karwan - Traveller Dashboard">
      <div className="karwan-travellerdashboardpage">
        
{/*  Top Header  */}
<header className="bg-surface/80 dark:bg-surface-container/80 backdrop-blur-md shadow-sm shrink-0 flex justify-between items-center w-full px-margin-desktop py-stack-md z-10 sticky top-0">
<div>
<h2 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Good morning, Arjun</h2>
<p className="text-text-gray font-body-md text-body-md">Here is your travel overview for today.</p>
</div>
<div className="flex items-center space-x-6">
{/*  Search Bar  */}
<div className="relative hidden lg:block w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Search places, trips..." type="text" />
</div>
{/*  Actions  */}
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 active:opacity-100 relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 active:opacity-100">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<img className="w-10 h-10 rounded-full object-cover border-2 border-surface-container-high hidden md:block" data-alt="A small circular avatar portrait of a young professional Indian man named Arjun, smiling warmly in a bright, modern setting. The aesthetic is clean and corporate. 50-100 words." src="/images/img_7a46285fa4bb.jpg" />
</div>
</header>
{/*  Scrollable Canvas  */}
<div className="flex-1 overflow-y-auto p-margin-desktop bg-background">
<div className="max-w-[1200px] mx-auto space-y-gutter pb-section-gap">
{/*  Active Trip Card  */}
<section className="bg-pure-white rounded-[20px] shadow-[0_4px_24px_rgba(16,35,63,0.06)] overflow-hidden relative group">
{/*  Gradient Border Top  */}
<div className="h-2 w-full bg-gradient-to-r from-primary to-success-green absolute top-0 left-0"></div>
<div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
<div className="flex-1 space-y-4">
<div className="flex items-center space-x-3 mb-2">
<span className="px-3 py-1 bg-secondary-container/20 text-on-secondary-container rounded-full text-xs font-bold tracking-wide uppercase">Active Trip</span>
<span className="text-text-gray text-sm flex items-center"><span className="material-symbols-outlined text-[16px] mr-1">calendar_today</span> Day 3 of 5</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary font-bold">Exploring Jaipur</h3>
{/*  Auto-heal Alert  */}
<div className="flex items-start space-x-3 p-4 bg-primary-fixed/30 rounded-xl border border-primary-fixed">
<span className="material-symbols-outlined text-primary mt-0.5">rebase_edit</span>
<div>
<p className="font-label-md text-label-md text-primary font-bold">Auto-heal Active</p>
<p className="text-sm text-on-surface-variant">Route updated — Fort closes early today. Adjusted itinerary to visit City Palace first.</p>
</div>
</div>
{/*  Progress Bar  */}
<div className="space-y-2 mt-4 max-w-md">
<div className="flex justify-between text-sm text-text-gray font-medium">
<span className="">Trip Progress</span>
<span className="">65%</span>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-success-green rounded-full" style={{ width: "65%" }}></div>
</div>
</div>
</div>
<div className="flex-shrink-0 relative w-full md:w-64 h-48 rounded-[16px] overflow-hidden shadow-sm">
<div className="bg-cover bg-center w-full h-full" data-alt="A beautiful, vibrant photo of the Hawa Mahal in Jaipur during early morning light. The intricate pink sandstone architecture glows warmly. Shot in a premium, modern travel editorial style with high clarity. 50-100 words." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDebp40oia3iZO_HVFnHNF7AFytbsFlFrwBvQ82eZZGbonxvWgYpKa3jHZ9CIF-lVIpe10aZDtjuMKsUp3OGM2Bxj1AV8Hs4WkDV_qcyZM2BNDY8joUNXdvWwj0PvfignRduZ_OY2wDFFYP_6T28_SJn2PrU5ZwwDSKurMtHteG5qn_SdzwkJWrH753is_gYDBY_E7oP8StXI0cwugEWP0E4R7PCt4mT8XqNP-SUN9Zowe22pqQQg0pew')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
<button className="w-full py-2.5 bg-pure-white text-primary rounded-[12px] font-label-md text-label-md hover:bg-surface-container-low transition-colors shadow-sm">
                                    View Itinerary
                                </button>
</div>
</div>
</div>
</section>
{/*  Module Row (4 Columns)  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  LiveTrail  */}
<div className="bg-pure-white p-6 rounded-[20px] shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_8px_24px_rgba(16,35,63,0.08)] transition-shadow border border-surface-container">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-secondary-container/20 flex items-center justify-center text-success-green">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
</div>
<span className="px-2.5 py-1 bg-success-green/10 text-success-green rounded-full text-xs font-bold">Live</span>
</div>
<h4 className="font-label-md text-label-md text-text-gray mb-1">LiveTrail</h4>
<p className="font-body-lg text-body-lg text-primary font-semibold mb-3">Check live fares</p>
<div className="p-3 bg-surface rounded-lg border border-surface-variant">
<p className="text-sm font-medium text-on-surface">Fort Gate auto — ₹80</p>
<p className="text-xs text-text-gray mt-1 flex items-center"><span className="w-2 h-2 rounded-full bg-success-green mr-1.5 animate-pulse"></span> Verified 2m ago</p>
</div>
</div>
{/*  TrustRadar  */}
<div className="bg-pure-white p-6 rounded-[20px] shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_8px_24px_rgba(16,35,63,0.08)] transition-shadow border border-surface-container">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
</div>
</div>
<h4 className="font-label-md text-label-md text-text-gray mb-1">TrustRadar</h4>
<p className="font-body-lg text-body-lg text-primary font-semibold mb-3">Nearby trust scores</p>
<div className="p-3 bg-surface rounded-lg border border-surface-variant flex items-center justify-between">
<div>
<p className="text-sm font-medium text-on-surface">City Palace</p>
<p className="text-xs text-text-gray mt-1">Cultural Site</p>
</div>
<div className="text-right">
<span className="text-lg font-bold text-success-green">9.2</span>
<span className="text-xs text-text-gray block">/10</span>
</div>
</div>
</div>
{/*  Auto-heal  */}
<div className="bg-pure-white p-6 rounded-[20px] shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_8px_24px_rgba(16,35,63,0.08)] transition-shadow border border-surface-container">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-secondary-container/20 flex items-center justify-center text-success-green">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>rebase_edit</span>
</div>
<span className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Active</span>
</div>
<h4 className="font-label-md text-label-md text-text-gray mb-1">Auto-heal</h4>
<p className="font-body-lg text-body-lg text-primary font-semibold mb-3">Your adaptive plan</p>
<div className="p-3 bg-surface rounded-lg border border-surface-variant flex items-center space-x-3">
<span className="material-symbols-outlined text-text-gray text-[20px]">schedule</span>
<div>
<p className="text-sm font-medium text-on-surface">Next check in 15m</p>
<p className="text-xs text-text-gray mt-1">Monitoring traffic</p>
</div>
</div>
</div>
{/*  Ground Truth  */}
<div className="bg-pure-white p-6 rounded-[20px] shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_8px_24px_rgba(16,35,63,0.08)] transition-shadow border border-surface-container">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fact_check</span>
</div>
</div>
<h4 className="font-label-md text-label-md text-text-gray mb-1">Ground Truth</h4>
<p className="font-body-lg text-body-lg text-primary font-semibold mb-3">Verified stays nearby</p>
<div className="p-3 bg-surface rounded-lg border border-surface-variant flex items-center space-x-3">
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full border-2 border-pure-white" data-alt="A tiny thumbnail of a premium hotel facade in Jaipur, clean modern style. 50-100 words." src="/images/img_e92be3030294.jpg" />
<img className="w-8 h-8 rounded-full border-2 border-pure-white" data-alt="A tiny thumbnail of a boutique guesthouse courtyard in Jaipur, clean modern style. 50-100 words." src="/images/img_cc934b7500e5.jpg" />
<div className="w-8 h-8 rounded-full border-2 border-pure-white bg-surface-container-high flex items-center justify-center text-[10px] font-bold text-text-gray">+2</div>
</div>
<div>
<p className="text-sm font-medium text-on-surface">4 safe stays</p>
<p className="text-xs text-text-gray mt-1">Within 2km radius</p>
</div>
</div>
</div>
</section>
{/*  Two-Column Bottom Section  */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/*  Left Column (60%)  */}
<div className="lg:col-span-7 bg-pure-white p-8 rounded-[20px] shadow-[0_2px_12px_rgba(16,35,63,0.04)] border border-surface-container">
<div className="flex justify-between items-end mb-6">
<div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Trust Alerts Near You</h3>
<p className="text-text-gray font-body-md mt-1">Community verified updates in real-time</p>
</div>
<button className="text-sm font-semibold text-primary hover:text-secondary transition-colors">View All</button>
</div>
<div className="space-y-4">
{/*  Alert Item 1  */}
<div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-variant">
<div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">trending_up</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<h4 className="font-label-md text-label-md font-bold text-on-surface">Fare spike reported</h4>
<span className="text-xs text-text-gray whitespace-nowrap">12m ago</span>
</div>
<p className="text-sm text-on-surface-variant mb-2 truncate">Auto rickshaw fares elevated near Johari Bazaar due to festival crowd.</p>
<div className="flex items-center text-xs text-text-gray space-x-3">
<span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">location_on</span> Johari Bazaar</span>
<span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">group</span> Verified by 8 travelers</span>
</div>
</div>
</div>
<hr className="border-surface-variant" />
{/*  Alert Item 2  */}
<div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-variant">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">verified</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<h4 className="font-label-md text-label-md font-bold text-on-surface">Safe zone confirmed</h4>
<span className="text-xs text-text-gray whitespace-nowrap">1h ago</span>
</div>
<p className="text-sm text-on-surface-variant mb-2 truncate">Well-lit pathways and active security presence noted.</p>
<div className="flex items-center text-xs text-text-gray space-x-3">
<span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">location_on</span> Albert Hall Museum</span>
<span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">group</span> Verified by Ground Truth</span>
</div>
</div>
</div>
<hr className="border-surface-variant" />
{/*  Alert Item 3  */}
<div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-variant">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">info</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<h4 className="font-label-md text-label-md font-bold text-on-surface">Route diversion</h4>
<span className="text-xs text-text-gray whitespace-nowrap">2h ago</span>
</div>
<p className="text-sm text-on-surface-variant mb-2 truncate">Main approach to Amer Fort congested. Auto-heal suggests alternative route.</p>
<div className="flex items-center text-xs text-text-gray space-x-3">
<span className="flex items-center"><span className="material-symbols-outlined text-[14px] mr-1">location_on</span> Amer Fort</span>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column (40%)  */}
<div className="lg:col-span-5 bg-pure-white p-8 rounded-[20px] shadow-[0_2px_12px_rgba(16,35,63,0.04)] border border-surface-container flex flex-col">
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">Nearby Safety Map</h3>
<p className="text-text-gray font-body-md mb-6">Jaipur contextual overview</p>
<div className="flex-1 w-full bg-surface-container-low rounded-2xl overflow-hidden relative min-h-[300px] border border-surface-variant">
{/*  Map Placeholder Image  */}
<div className="w-full h-full bg-cover bg-center absolute inset-0 opacity-80" data-alt="A stylized, clean, minimalist digital map of Jaipur city center. It uses a light color palette with soft greys and off-whites, featuring subtle blue and green highlights indicating safe zones and major landmarks. The aesthetic is highly polished and professional, resembling a premium corporate travel app interface. 50-100 words." data-location="Jaipur" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlHN1s0MUfhn7IGKJZZO7zwC1sjo-VIS8sXt8xYmyQ3J4Wyf_oGaAXROX8MSZaxDQokoIVQp5XSPypUV37RmGax8v_qhOPcxaS6rVUC90AXKeTYrH60nEUUy3jhK1E0YioKq0i5nn_AtxUUnbj8BvmgUHR86ysMXdPZyoW_pyyov5pdKPj18wzbDRgS3YbOieNPHrcX4OC6Hai_z1qw11KYoNRpgrC-PkUMd6B5Gg9f_JMdLCH67JKEw')" }}></div>
{/*  Overlay UI elements on Map  */}
<div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
<div className="flex justify-end">
<div className="bg-pure-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-surface pointer-events-auto">
<div className="flex items-center space-x-2 text-xs font-semibold">
<span className="w-3 h-3 rounded-full bg-success-green"></span>
<span className="">High Trust</span>
</div>
<div className="flex items-center space-x-2 text-xs font-semibold mt-1">
<span className="w-3 h-3 rounded-full bg-error"></span>
<span className="">Alerts</span>
</div>
</div>
</div>
<div className="flex justify-center pointer-events-auto">
<button className="px-6 py-2 bg-primary text-pure-white rounded-full font-label-md text-label-md shadow-md hover:bg-primary/90 transition-colors flex items-center space-x-2">
<span className="material-symbols-outlined text-[18px]">explore</span>
<span className="">Open Full Map</span>
</button>
</div>
</div>
{/*  Mock Pins (CSS positioned over background)  */}
<div className="absolute top-[30%] left-[40%] w-8 h-8 pointer-events-auto group">
<div className="w-8 h-8 bg-success-green text-pure-white rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 border-2 border-pure-white z-10 relative">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
</div>
<div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-pure-white p-2 rounded shadow-lg text-xs z-20 text-center border border-surface-variant">
<p className="font-bold text-primary">City Palace</p>
<p className="text-text-gray">Score: 9.2</p>
</div>
</div>
<div className="absolute top-[60%] left-[70%] w-8 h-8 pointer-events-auto group">
<div className="w-8 h-8 bg-error text-pure-white rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 border-2 border-pure-white z-10 relative animate-bounce">
<span className="material-symbols-outlined text-[16px]">warning</span>
</div>
</div>
</div>
</div>
</section>
</div>
</div>

      </div>
    </SharedLayout>
  );
}
