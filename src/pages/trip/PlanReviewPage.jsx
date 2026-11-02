import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function PlanReviewPage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Review Itinerary">
      <div className="karwan-planreviewpage">
        
<h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary-container mb-12 text-center">Review Your Trip</h1>
{/*  Two Column Content  */}
<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/*  Left Column: Summary  */}
<div className="flex flex-col gap-stack-md">
<div className="bg-pure-white rounded-[20px] p-stack-lg card-shadow">
<h2 className="font-headline-md text-headline-md text-primary-container mb-stack-md border-b border-surface-variant pb-4">Itinerary Summary</h2>
<div className="relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-variant space-y-8 my-6">
{/*  Stop 1  */}
<div className="relative">
<div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-success-green ring-4 ring-pure-white"></div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-label-md text-label-md text-primary-container">Delhi</h3>
<p className="font-body-md text-body-md text-text-gray text-sm mt-1">Starting Point</p>
</div>
<span className="font-label-sm text-label-sm text-text-gray bg-surface-container py-1 px-3 rounded-full">Day 1</span>
</div>
</div>
{/*  Stop 2  */}
<div className="relative">
<div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full border-2 border-primary-container bg-pure-white ring-4 ring-pure-white"></div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-label-md text-label-md text-primary-container">Jaipur</h3>
<p className="font-body-md text-body-md text-text-gray text-sm mt-1">2 Nights stay</p>
</div>
<span className="font-label-sm text-label-sm text-text-gray bg-surface-container py-1 px-3 rounded-full">Day 1-3</span>
</div>
</div>
{/*  Stop 3  */}
<div className="relative">
<div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-primary-container ring-4 ring-pure-white"></div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-label-md text-label-md text-primary-container">Agra</h3>
<p className="font-body-md text-body-md text-text-gray text-sm mt-1">Final Destination</p>
</div>
<span className="font-label-sm text-label-sm text-text-gray bg-surface-container py-1 px-3 rounded-full">Day 3-4</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-surface-variant flex justify-between items-center">
<span className="font-body-lg text-body-lg text-text-gray">Estimated Budget</span>
<span className="font-headline-md text-headline-md text-primary-container">₹2,500</span>
</div>
</div>
{/*  Info Note  */}
<div className="bg-primary-fixed-dim/20 rounded-[20px] p-4 flex gap-4 items-start border border-primary-fixed-dim/30">
<span className="material-symbols-outlined text-primary-container mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>rebase_edit</span>
<div>
<h4 className="font-label-md text-label-md text-primary-container">Auto-heal is active</h4>
<p className="font-body-md text-body-md text-sm text-on-surface-variant mt-1">Your plan will adjust automatically if conditions change during the trip.</p>
</div>
</div>
</div>
{/*  Right Column: Map & Action  */}
<div className="flex flex-col gap-stack-md h-full">
<div className="bg-pure-white rounded-[20px] overflow-hidden card-shadow flex-1 min-h-[400px] relative">
{/*  Map Image Placeholder  */}
<img alt="Route Map" className="w-full h-full object-cover absolute inset-0" data-alt="A clean, modern top-down map UI showing a route line connecting Delhi, Jaipur, and Agra in India. The map uses a minimalist light-mode aesthetic with soft off-white background (#f8f9fb), subtle light gray terrain features, and deep navy blue (#000d23) location markers and route line. Small green accents hint at national parks. The map looks crisp, professional, and slightly abstracted for a premium travel application." data-location="India Triangle Map Route Delhi Jaipur Agra" src="/images/img_490e7bb09774.jpg" />
{/*  Overlay Controls (Decorative)  */}
<div className="absolute bottom-4 right-4 flex flex-col gap-2">
<button className="w-10 h-10 bg-pure-white rounded-full soft-shadow flex items-center justify-center text-primary-container hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">add</span>
</button>
<button className="w-10 h-10 bg-pure-white rounded-full soft-shadow flex items-center justify-center text-primary-container hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">remove</span>
</button>
</div>
</div>
{/*  CTA Button  */}
<button className="w-full bg-success-green text-pure-white font-label-md text-label-md py-4 rounded-[20px] hover:bg-[#205236] transition-colors float-shadow flex justify-center items-center gap-2 mt-auto">
<span className="">Confirm & Start Trip</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</button>
</div>
</div>

      </div>
    </SharedLayout>
  );
}
