import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function PlanRoutePage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Plan Trip - Route">
      <div className="karwan-planroutepage">
        
<div className="mb-12">
<h2 className="font-headline-lg text-headline-lg text-primary mb-6 hidden md:block">Plan a New Trip</h2>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-6 md:hidden">Plan a New Trip</h2>
{/*  Step Indicator  */}
<div className="flex items-center gap-2 md:gap-4 mb-stack-lg overflow-x-auto pb-2">
<div className="flex items-center gap-2 px-4 py-2 bg-primary text-pure-white rounded-full font-label-md text-label-md shrink-0 shadow-ambient">
<span className="material-symbols-outlined text-sm">route</span>
<span className="">1. Route</span>
</div>
<div className="h-px w-8 bg-surface-variant shrink-0"></div>
<div className="flex items-center gap-2 px-4 py-2 bg-surface-container text-on-surface-variant rounded-full font-label-md text-label-md shrink-0">
<span className="">2. Preferences</span>
</div>
<div className="h-px w-8 bg-surface-variant shrink-0"></div>
<div className="flex items-center gap-2 px-4 py-2 bg-surface-container text-on-surface-variant rounded-full font-label-md text-label-md shrink-0">
<span className="">3. Review</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Main Form Form  */}
<div className="lg:col-span-7 space-y-gutter">
<div className="bg-pure-white rounded-card p-stack-lg shadow-ambient">
<h3 className="font-headline-md text-headline-md text-primary mb-stack-md text-xl">Journey Details</h3>
<div className="space-y-6">
{/*  Locations  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block font-label-sm text-label-sm text-text-gray mb-1">From</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-gray">flight_takeoff</span>
<input className="w-full bg-background border border-surface-variant rounded-lg py-3 pl-12 pr-10 font-body-md text-on-surface focus:border-primary focus:ring-0 transition-colors" placeholder="Departure City" type="text" />
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-gray cursor-pointer">arrow_drop_down</span>
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-text-gray mb-1">To</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-gray">flight_land</span>
<input className="w-full bg-background border border-surface-variant rounded-lg py-3 pl-12 pr-10 font-body-md text-on-surface focus:border-primary focus:ring-0 transition-colors" placeholder="Destination City" type="text" />
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-gray cursor-pointer">arrow_drop_down</span>
</div>
</div>
</div>
{/*  Dates  */}
<div>
<label className="block font-label-sm text-label-sm text-text-gray mb-1">Travel Dates</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-gray">calendar_month</span>
<input className="w-full bg-background border border-surface-variant rounded-lg py-3 pl-12 pr-4 font-body-md text-on-surface focus:border-primary focus:ring-0 transition-colors" placeholder="Select date range" type="text" />
</div>
</div>
{/*  Budget  */}
<div>
<div className="flex justify-between items-end mb-2">
<label className="block font-label-sm text-label-sm text-text-gray">Estimated Budget</label>
<span className="font-label-md text-label-md text-primary">₹2,500</span>
</div>
<input className="w-full accent-primary h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer" max="10000" min="500" type="range" defaultValue="2500" />
<div className="flex justify-between mt-2 font-label-sm text-label-sm text-text-gray">
<span className="">₹500</span>
<span className="">₹10,000+</span>
</div>
</div>
</div>
</div>
</div>
{/*  Suggested Stops Sidebar  */}
<div className="lg:col-span-5 space-y-gutter">
<div className="bg-pure-white rounded-card p-stack-lg shadow-ambient h-full flex flex-col">
<div className="flex justify-between items-center mb-stack-md">
<h3 className="font-headline-md text-headline-md text-primary text-xl">Suggested Stops</h3>
<span className="px-3 py-1 bg-primary-fixed rounded-full text-primary font-label-sm text-label-sm">Golden Triangle</span>
</div>
<p className="text-text-gray font-body-md text-body-md mb-6 text-sm">Enhance your route with these curated historical landmarks.</p>
<div className="space-y-4 flex-1">
{/*  Card 1  */}
<label className="flex items-start gap-4 p-4 border border-surface-variant rounded-xl cursor-pointer hover:border-primary transition-colors hover:shadow-ambient bg-background group">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img alt="Amber Fort" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/images/img_919d66ddaf74.jpg" />
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-on-surface mb-1">Amber Fort</h4>
<p className="font-label-sm text-label-sm text-text-gray">Majestic hilltop fort with intricate carvings.</p>
</div>
<div className="pt-1">
<input className="w-5 h-5 text-success-green border-surface-variant rounded focus:ring-success-green focus:ring-offset-0" type="checkbox" />
</div>
</label>
{/*  Card 2  */}
<label className="flex items-start gap-4 p-4 border border-surface-variant rounded-xl cursor-pointer hover:border-primary transition-colors hover:shadow-ambient bg-background group">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img alt="Taj Mahal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="/images/img_fc4b4f6d9282.jpg" />
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-on-surface mb-1">Taj Mahal</h4>
<p className="font-label-sm text-label-sm text-text-gray">Iconic sunrise view of the ivory-white marble mausoleum.</p>
</div>
<div className="pt-1">
<input defaultChecked className="w-5 h-5 text-success-green border-surface-variant rounded focus:ring-success-green focus:ring-offset-0" type="checkbox" />
</div>
</label>
{/*  Card 3  */}
<label className="flex items-start gap-4 p-4 border border-surface-variant rounded-xl cursor-pointer hover:border-primary transition-colors hover:shadow-ambient bg-background group">
<div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
<img alt="Hawa Mahal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A vibrant wide shot of Hawa Mahal in Jaipur at dusk, featuring glowing pink sandstone and intricate lattice windows, capturing an authentic heritage travel atmosphere." src="/images/img_feaba8ca37d3.jpg" />
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-on-surface mb-1">Hawa Mahal</h4>
<p className="font-label-sm text-label-sm text-text-gray">Palace of Winds with its unique honeycomb facade.</p>
</div>
<div className="pt-1">
<input className="w-5 h-5 text-success-green border-surface-variant rounded focus:ring-success-green focus:ring-offset-0" type="checkbox" />
</div>
</label>
</div>
</div>
</div>
</div>
{/*  Bottom Action  */}
<div className="mt-section-gap flex justify-end">
<button className="bg-success-green hover:bg-on-secondary-fixed-variant text-pure-white px-8 py-3 rounded-card font-label-md text-label-md transition-colors shadow-floating flex items-center gap-2 group">
<span className="">Next: Preferences</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>

      </div>
    </SharedLayout>
  );
}
