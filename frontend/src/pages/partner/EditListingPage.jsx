import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailLayout from '../../components/layout/DetailLayout';

export default function EditListingPage() {
  const navigate = useNavigate();

  return (
    <DetailLayout title="Edit Listing (Provider)">
      <div className="karwan-editlistingpage">
        
<header className="mb-section-gap">
<h1 className="font-headline-lg md:font-headline-lg-mobile text-headline-lg md:text-headline-lg-mobile text-primary-container mb-2">Edit Your Listing</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Manage your travel service details and preview how it appears to customers on TrustRadar.</p>
</header>
<div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Left Column: Form  */}
<div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-stack-lg">
{/*  Photos Section  */}
<section className="bg-pure-white rounded-[20px] p-stack-lg shadow-[0_2px_8px_rgba(0,13,35,0.04)]">
<h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-outline">photo_library</span>
                        Listing Photos
                    </h3>
<p className="font-label-sm text-label-sm text-text-gray mb-4">Drag to reorder. The first image will be your cover photo.</p>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
{/*  Main Photo  */}
<div className="col-span-2 md:col-span-2 aspect-video rounded-lg overflow-hidden relative group border border-outline-variant cursor-grab">
<img alt="Cover Photo" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="A pristine luxury travel van parked near a scenic mountain overlook. Golden hour lighting, high resolution, professional real estate style photography, emphasizing the premium quality of the service." src="/images/img_a8955d026366.jpg" />
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-pure-white text-3xl">open_with</span>
</div>
<div className="absolute top-2 left-2 bg-primary/80 backdrop-blur-sm text-pure-white text-xs px-2 py-1 rounded font-label-sm">Cover</div>
</div>
{/*  Secondary Photos  */}
<div className="aspect-square rounded-lg overflow-hidden relative group border border-outline-variant cursor-grab">
<img alt="Interior Photo" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Interior shot of a luxury travel vehicle showing plush leather seats and ambient lighting. Clean, modern, high-end travel aesthetic." src="/images/img_78b8fd0e794c.jpg" />
</div>
<div className="aspect-square rounded-lg overflow-hidden relative group border border-outline-variant cursor-grab">
<img alt="Driver Photo" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="A smiling, professional driver standing confidently next to a premium travel vehicle. Corporate modern aesthetic, trustworthy and approachable." src="/images/img_9edd263739ae.jpg" />
</div>
<div className="aspect-square rounded-lg overflow-hidden relative group border border-outline-variant cursor-grab">
<img alt="Scenic Route" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="A scenic highway winding through a lush green valley, captured from the perspective of a road trip. Bright, optimistic lighting, clean aesthetic." src="/images/img_37682379e243.jpg" />
</div>
{/*  Upload Placeholder  */}
<button className="aspect-square rounded-lg border-2 border-dashed border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors flex flex-col items-center justify-center text-on-surface-variant gap-2">
<span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
<span className="font-label-sm text-label-sm">Add Photo</span>
</button>
</div>
</section>
{/*  Details Section  */}
<section className="bg-pure-white rounded-[20px] p-stack-lg shadow-[0_2px_8px_rgba(0,13,35,0.04)] space-y-stack-md">
<h3 className="font-headline-md text-headline-md text-primary mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-outline">info</span>
                        Service Details
                    </h3>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="businessName">Business Name</label>
<input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="businessName" type="text" defaultValue="Himalayan Premium Travels" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="description">Description</label>
<textarea className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" id="description" rows="4" defaultValue="Providing premium, safe, and comfortable intercity travel experiences across Northern India. Our fleet is maintained to the highest standards, driven by verified professionals." />
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="serviceArea">Primary Service Area</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">location_on</span>
<input className="w-full bg-surface border border-outline-variant rounded-lg pl-10 pr-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="serviceArea" type="text" defaultValue="Delhi NCR - Himachal" />
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="pricing">Base Fare (Per Km)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant font-label-md">₹</span>
<input className="w-full bg-surface border border-outline-variant rounded-lg pl-8 pr-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="pricing" type="number" defaultValue="18" />
</div>
</div>
</div>
</section>
{/*  Status Section  */}
<section className="bg-pure-white rounded-[20px] p-stack-lg shadow-[0_2px_8px_rgba(0,13,35,0.04)] flex items-center justify-between">
<div>
<h3 className="font-label-md text-label-md text-primary">Listing Status</h3>
<p className="font-label-sm text-label-sm text-text-gray">Control your visibility on TrustRadar</p>
</div>
<label className="flex items-center cursor-pointer gap-3">
<span className="font-label-md text-label-md text-success-green">Currently Active</span>
<div className="relative">
<input defaultChecked className="sr-only" type="checkbox" />
<div className="block bg-success-green w-14 h-8 rounded-full transition-colors"></div>
<div className="dot absolute left-1 top-1 bg-pure-white w-6 h-6 rounded-full transition-transform translate-x-6"></div>
</div>
</label>
</section>
<div className="flex justify-end mt-4">
<button className="bg-success-green hover:bg-success-green/90 text-pure-white rounded-[20px] py-3 px-8 font-label-md text-label-md shadow-[0_2px_8px_rgba(0,13,35,0.08)] transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm">save</span>
                        Save & Publish
                    </button>
</div>
</div>
{/*  Right Column: Live Preview  */}
<div className="lg:col-span-5 xl:col-span-4">
<div className="sticky top-24">
<h3 className="font-label-md text-label-md text-on-surface-variant mb-4 flex items-center gap-2 uppercase tracking-wider">
<span className="material-symbols-outlined text-outline text-sm">preview</span>
                        Live Preview (TrustRadar)
                    </h3>
{/*  Preview Card (Glassmorphism/Floating UI style)  */}
<div className="bg-pure-white rounded-[20px] p-stack-md shadow-[0_12px_24px_rgba(0,13,35,0.06)] border border-surface-container-high relative overflow-hidden">
{/*  Top Image area  */}
<div className="aspect-video rounded-xl overflow-hidden relative mb-4">
<img alt="Preview Cover" className="w-full h-full object-cover" data-alt="A pristine luxury travel van parked near a scenic mountain overlook. Golden hour lighting, high resolution, professional real estate style photography, emphasizing the premium quality of the service." src="/images/img_345e7decb513.jpg" />
{/*  Trust Badge Floating  */}
<div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1 border border-surface-container shadow-sm">
<span className="material-symbols-outlined text-success-green text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
<span className="font-label-sm text-label-sm text-primary">Verified</span>
</div>
</div>
{/*  Card Content  */}
<div className="space-y-3">
<div className="flex justify-between items-start">
<h4 className="font-headline-md text-headline-md text-primary text-[22px] leading-tight">Himalayan Premium Travels</h4>
<div className="flex items-center gap-1 bg-surface-container rounded-lg px-2 py-1">
<span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-md text-label-md text-primary">4.9</span>
</div>
</div>
<p className="font-label-sm text-label-sm text-text-gray flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                Delhi NCR - Himachal
                            </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="bg-primary/5 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm text-[11px] border border-primary/10">Premium Fleet</span>
<span className="bg-secondary/5 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm text-[11px] border border-secondary/10">Auto-heal Covered</span>
</div>
<div className="border-t border-surface-container-high pt-3 mt-4 flex justify-between items-center">
<div>
<p className="font-label-sm text-label-sm text-text-gray">Starting from</p>
<p className="font-headline-md text-headline-md text-primary text-xl">₹18 <span className="font-label-sm text-label-sm text-text-gray font-normal">/km</span></p>
</div>
<div className="text-right">
<div className="radial-progress text-success-green text-sm font-label-md flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">security</span>
                                         98% Trust Score
                                     </div>
</div>
</div>
</div>
{/*  Simulated interaction area  */}
<button className="w-full mt-4 bg-surface-container-low text-primary py-2 rounded-lg font-label-md text-label-md border border-surface-container hover:bg-surface-container transition-colors pointer-events-none opacity-80">
                             View Full Details
                         </button>
</div>
</div>
</div>
</div>

      </div>
    </DetailLayout>
  );
}
