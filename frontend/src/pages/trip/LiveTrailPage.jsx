import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailLayout from '../../components/layout/DetailLayout';

export default function LiveTrailPage() {
  const navigate = useNavigate();

  return (
    <DetailLayout title="LiveTrail Transit Dashboard">
      <div className="karwan-livetrailpage">
        
{/*  Left Column: Map (~65%)  */}
<div className="w-[65%] h-full relative">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A detailed overhead map view of Jaipur in a crisp, modern light-mode style. The map uses soft off-white backgrounds, subtle navy blue road lines, and pops of green and amber for points of interest, fitting a corporate travel tech aesthetic." data-location="Jaipur" src="/images/img_e2398ddb5b55.jpg" />
{/*  Floating Search over Map  */}
<div className="absolute top-6 left-1/2 -translate-x-1/2 w-[80%] max-w-lg bg-pure-white rounded-full shadow-[0_12px_24px_rgba(16,35,63,0.08)] p-2 flex items-center z-10">
<span className="material-symbols-outlined text-text-gray ml-3">search</span>
<input className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md ml-2 outline-none" placeholder="Where to in Jaipur?" type="text" />
<button className="w-10 h-10 rounded-full bg-primary text-pure-white flex items-center justify-center hover:bg-primary/90 transition-colors">
<span className="material-symbols-outlined">directions</span>
</button>
</div>
{/*  Map Pins (Static for Demo)  */}
<div className="absolute top-[40%] left-[30%] flex flex-col items-center group cursor-pointer">
<div className="bg-success-green text-pure-white px-2 py-1 rounded-md text-xs font-bold shadow-md mb-1 opacity-0 group-hover:opacity-100 transition-opacity">₹60 (Fair)</div>
<span className="material-symbols-outlined text-success-green bg-pure-white rounded-full p-1 shadow-md" style={{ fontVariationSettings: "'FILL' 1" }}>local_taxi</span>
</div>
<div className="absolute top-[55%] left-[60%] flex flex-col items-center group cursor-pointer">
<div className="bg-[#F59E0B] text-pure-white px-2 py-1 rounded-md text-xs font-bold shadow-md mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Mod. Crowd</div>
<span className="material-symbols-outlined text-[#F59E0B] bg-pure-white rounded-full p-1 shadow-md" style={{ fontVariationSettings: "'FILL' 1" }}>directions_bus</span>
</div>
<div className="absolute top-[20%] left-[70%] flex flex-col items-center group cursor-pointer">
<div className="bg-primary-container text-pure-white px-2 py-1 rounded-md text-xs font-bold shadow-md mb-1 opacity-0 group-hover:opacity-100 transition-opacity">High Fare</div>
<span className="material-symbols-outlined text-primary-container bg-pure-white rounded-full p-1 shadow-md" style={{ fontVariationSettings: "'FILL' 1" }}>subway</span>
</div>
</div>
{/*  Right Column: Scrollable List (~35%)  */}
<div className="w-[35%] h-full bg-surface border-l border-outline-variant overflow-y-auto p-6 flex flex-col">
<div className="mb-6">
<h2 className="font-headline-md text-headline-md text-primary mb-4">Live Routes Near You</h2>
{/*  Filter Row  */}
<div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
<button className="px-4 py-1.5 rounded-full bg-primary text-pure-white font-label-sm text-label-sm whitespace-nowrap">All</button>
<button className="px-4 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-colors">Auto</button>
<button className="px-4 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-colors">Bus</button>
<button className="px-4 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-colors">Metro</button>
</div>
</div>
{/*  Report Button  */}
<button className="w-full mb-6 py-3 border-2 border-success-green text-success-green rounded-[20px] font-label-md text-label-md hover:bg-success-green/5 transition-colors flex items-center justify-center space-x-2">
<span className="material-symbols-outlined">add_circle</span>
<span className="">Report a Fare</span>
</button>
{/*  Route Cards  */}
<div className="space-y-4 flex-1">
{/*  Card 1  */}
<div className="bg-pure-white rounded-[16px] p-stack-md shadow-[0_2px_8px_rgba(16,35,63,0.04)] border border-surface-container-highest hover:shadow-[0_8px_16px_rgba(16,35,63,0.08)] transition-shadow cursor-pointer">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-success-green/10 flex items-center justify-center text-success-green">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_taxi</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface">City Palace to Johari Bazaar</h3>
<p className="font-label-sm text-label-sm text-text-gray">Updated 4 min ago</p>
</div>
</div>
</div>
<div className="mb-3">
<span className="font-headline-md text-[20px] font-bold text-primary">₹80</span>
<span className="font-label-sm text-label-sm text-text-gray ml-2">— verified by 12 riders today</span>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm text-text-gray mb-1">
<span className="">Crowding</span>
<span className="text-success-green font-medium">Low</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-success-green h-full w-1/4 rounded-full"></div>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="bg-pure-white rounded-[16px] p-stack-md shadow-[0_2px_8px_rgba(16,35,63,0.04)] border border-surface-container-highest hover:shadow-[0_8px_16px_rgba(16,35,63,0.08)] transition-shadow cursor-pointer">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>directions_bus</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface">Route 12B - Hawa Mahal</h3>
<p className="font-label-sm text-label-sm text-text-gray">Updated 10 min ago</p>
</div>
</div>
</div>
<div className="mb-3">
<span className="font-headline-md text-[20px] font-bold text-primary">₹15</span>
<span className="font-label-sm text-label-sm text-text-gray ml-2">— standard fare</span>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm text-text-gray mb-1">
<span className="">Crowding</span>
<span className="text-[#F59E0B] font-medium">Moderate</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-[#F59E0B] h-full w-1/2 rounded-full"></div>
</div>
</div>
</div>
{/*  Card 3  */}
<div className="bg-pure-white rounded-[16px] p-stack-md shadow-[0_2px_8px_rgba(16,35,63,0.04)] border border-surface-container-highest hover:shadow-[0_8px_16px_rgba(16,35,63,0.08)] transition-shadow cursor-pointer">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>subway</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface">Pink Line - Chandpole to Mansarovar</h3>
<p className="font-label-sm text-label-sm text-text-gray">Updated 2 min ago</p>
</div>
</div>
</div>
<div className="mb-3">
<span className="font-headline-md text-[20px] font-bold text-primary">₹40</span>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm text-text-gray mb-1">
<span className="">Crowding</span>
<span className="text-primary-container font-medium">High</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full w-[90%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

      </div>
    </DetailLayout>
  );
}
