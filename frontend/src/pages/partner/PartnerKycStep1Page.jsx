import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailLayout from '../../components/layout/DetailLayout';

export default function PartnerKycStep1Page() {
  const navigate = useNavigate();

  return (
    <DetailLayout title="Partner KYC - Step 1">
      <div className="karwan-partnerkycstep1page">
        
{/*  TopNavBar Suppressed due to linear/transactional onboarding flow  */}
<div className="min-h-screen w-full flex items-center justify-center p-margin-mobile md:p-margin-desktop">
<div className="w-full max-w-2xl bg-pure-white rounded-[20px] shadow-high p-stack-lg md:p-10 relative overflow-hidden">
{/*  Subtle decorative top bar  */}
<div className="absolute top-0 left-0 w-full h-2 bg-success-green"></div>
{/*  Step Indicator  */}
<div className="flex items-center justify-between mb-stack-lg relative">
<div className="absolute top-1/2 left-0 w-full h-px bg-surface-variant -z-10 transform -translate-y-1/2"></div>
{/*  Step 1: Active  */}
<div className="flex flex-col items-center gap-2 bg-pure-white px-2">
<div className="w-8 h-8 rounded-full bg-primary-container text-pure-white flex items-center justify-center font-label-md text-label-md font-bold shadow-low">
                    1
                </div>
<span className="font-label-sm text-label-sm text-primary-container font-semibold">Details</span>
</div>
{/*  Step 2: Inactive  */}
<div className="flex flex-col items-center gap-2 bg-pure-white px-2">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-md text-label-md shadow-low">
                    2
                </div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Documents</span>
</div>
{/*  Step 3: Inactive  */}
<div className="flex flex-col items-center gap-2 bg-pure-white px-2">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-md text-label-md shadow-low">
                    3
                </div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Review</span>
</div>
</div>
{/*  Header  */}
<div className="mb-section-gap/2 text-center md:text-left">
<h1 className="font-headline-md text-headline-md text-primary-container mb-2">Become a Verified Partner</h1>
<p className="font-body-md text-body-md text-text-gray">Join the Karwan network and build trust with premium travelers.</p>
</div>
{/*  Form Fields  */}
<form className="space-y-stack-lg">
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
{/*  Business/Service Type  */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-primary-container" htmlFor="service-type">Business/Service Type</label>
<div className="relative">
<select defaultValue="" className="w-full bg-surface border border-outline-variant text-on-surface rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-colors font-body-md shadow-sm" id="service-type" name="service-type">
<option value="" disabled>Select service type...</option>
<option value="auto">Auto/Transit</option>
<option value="guide">Guide</option>
<option value="vendor">Vendor</option>
<option value="homestay">Homestay</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
</div>
</div>
{/*  Business Name  */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-primary-container" htmlFor="business-name">Business Name</label>
<input className="w-full bg-surface border border-outline-variant text-on-surface rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-colors font-body-md shadow-sm" id="business-name" name="business-name" placeholder="e.g. Royal Travels" type="text" />
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
{/*  Service Area/Location  */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-primary-container" htmlFor="location">Service Area/Location</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">location_on</span>
<input className="w-full bg-surface border border-outline-variant text-on-surface rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-colors font-body-md shadow-sm" id="location" name="location" placeholder="e.g. Jaipur, Rajasthan" type="text" />
</div>
</div>
{/*  Years of Experience  */}
<div className="flex flex-col gap-2">
<label className="font-label-md text-label-md text-primary-container" htmlFor="experience">Years of Experience</label>
<input className="w-full bg-surface border border-outline-variant text-on-surface rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-colors font-body-md shadow-sm" id="experience" min="0" name="experience" placeholder="0" type="number" />
</div>
</div>
{/*  Info Box  */}
<div className="bg-tertiary-fixed rounded-xl p-4 flex gap-4 items-start shadow-ambient mt-stack-lg">
<span className="material-symbols-outlined text-primary-container mt-1">verified</span>
<p className="font-body-md text-body-md text-on-primary-fixed-variant">
                    Verified partners get a visible trust badge and priority placement — verification typically takes 24-48 hours.
                </p>
</div>
{/*  Actions  */}
<div className="pt-stack-lg flex justify-end">
<button className="bg-success-green hover:bg-on-secondary-fixed-variant text-pure-white font-label-md text-label-md py-3 px-8 rounded-[20px] shadow-md transition-colors duration-200 flex items-center gap-2 group" type="button">
                    Next: Upload Documents
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</form>
</div>
</div>



      </div>
    </DetailLayout>
  );
}
