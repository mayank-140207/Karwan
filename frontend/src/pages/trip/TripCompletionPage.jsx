import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function TripCompletionPage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Trip Completion (Rate & Verify)">
      <div className="karwan-tripcompletionpage">
        
{/*  Header  */}
<header className="p-8 pb-6 border-b border-surface-variant flex flex-col items-center justify-center relative">
{/*  Close Button (Simulated Modal)  */}
<button aria-label="Close" className="absolute top-6 right-6 text-text-gray hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-low">
<span className="material-symbols-outlined text-[24px]">close</span>
</button>
<div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 overflow-hidden"><img src="/images/img_188ceadd6616.jpg" alt="Karwan Logo" className="w-full h-full object-contain" /></div>
<h1 className="font-headline-lg text-headline-lg text-primary-container text-center mb-2">How was your trip?</h1>
<p className="font-body-lg text-body-lg text-text-gray text-center max-w-md">Your insights help us maintain a secure and reliable travel network.</p>
</header>
{/*  Content  */}
<div className="p-8 flex flex-col gap-10">
{/*  Overall Rating  */}
<section className="flex flex-col items-center">
<div aria-label="Overall Trip Rating" className="star-rating flex gap-4" role="radiogroup">
<span aria-checked="false" className="material-symbols-outlined" role="radio" tabIndex="0">star</span>
<span aria-checked="false" className="material-symbols-outlined" role="radio" tabIndex="0">star</span>
<span aria-checked="false" className="material-symbols-outlined" role="radio" tabIndex="0">star</span>
<span aria-checked="false" className="material-symbols-outlined" role="radio" tabIndex="0">star</span>
<span aria-checked="false" className="material-symbols-outlined" role="radio" tabIndex="0">star</span>
</div>
<span className="font-label-md text-label-md text-text-gray mt-3">Select a rating</span>
</section>
{/*  Verify Your Stops  */}
<section>
<div className="mb-4 flex items-center justify-between">
<h2 className="font-headline-md text-headline-md text-primary">Verify Your Stops</h2>
<span className="bg-secondary-container/20 text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified_user</span> TrustRadar
                    </span>
</div>
<p className="font-body-md text-body-md text-text-gray mb-6">Was the fare and service as expected at these locations?</p>
<div className="flex flex-col gap-4">
{/*  Stop 1: Delhi  */}
<div className="bg-surface rounded-xl p-4 border border-surface-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">location_on</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-primary">Delhi</h3>
<p className="font-label-sm text-label-sm text-text-gray">Transit Hub</p>
</div>
</div>
<div className="flex items-center gap-3 self-end sm:self-auto">
<button aria-label="Thumbs Down" className="trust-btn flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant text-text-gray hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[20px]">thumb_down</span>
</button>
<button aria-label="Thumbs Up" className="trust-btn flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant text-text-gray hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[20px]">thumb_up</span>
</button>
<div className="w-px h-6 bg-outline-variant mx-1"></div>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors border border-transparent hover:border-outline-variant" title="Add Ground Truth Photo">
<span className="material-symbols-outlined text-[18px]">add_a_photo</span>
<span className="hidden sm:inline">Photo</span>
</button>
</div>
</div>
{/*  Stop 2: Jaipur  */}
<div className="bg-surface rounded-xl p-4 border border-surface-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">location_on</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-primary">Jaipur</h3>
<p className="font-label-sm text-label-sm text-text-gray">Local Guide Service</p>
</div>
</div>
<div className="flex items-center gap-3 self-end sm:self-auto">
<button aria-label="Thumbs Down" className="trust-btn flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant text-text-gray hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[20px]">thumb_down</span>
</button>
<button aria-label="Thumbs Up" className="trust-btn flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant text-text-gray hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[20px]">thumb_up</span>
</button>
<div className="w-px h-6 bg-outline-variant mx-1"></div>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors border border-transparent hover:border-outline-variant" title="Add Ground Truth Photo">
<span className="material-symbols-outlined text-[18px]">add_a_photo</span>
<span className="hidden sm:inline">Photo</span>
</button>
</div>
</div>
{/*  Stop 3: Agra  */}
<div className="bg-surface rounded-xl p-4 border border-surface-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">location_on</span>
</div>
<div>
<h3 className="font-label-md text-label-md text-primary">Agra</h3>
<p className="font-label-sm text-label-sm text-text-gray">Accommodation</p>
</div>
</div>
<div className="flex items-center gap-3 self-end sm:self-auto">
<button aria-label="Thumbs Down" className="trust-btn flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant text-text-gray hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[20px]">thumb_down</span>
</button>
<button aria-label="Thumbs Up" className="trust-btn flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant text-text-gray hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[20px]">thumb_up</span>
</button>
<div className="w-px h-6 bg-outline-variant mx-1"></div>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors border border-transparent hover:border-outline-variant" title="Add Ground Truth Photo">
<span className="material-symbols-outlined text-[18px]">add_a_photo</span>
<span className="hidden sm:inline">Photo</span>
</button>
</div>
</div>
</div>
</section>
{/*  Text Area  */}
<section>
<label className="block font-label-md text-label-md text-primary mb-2" htmlFor="feedback-text">Anything else other travellers should know?</label>
<textarea className="w-full bg-surface-bright border border-outline-variant rounded-xl p-4 font-body-md text-body-md text-on-surface placeholder:text-text-gray focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" id="feedback-text" placeholder="Share your experience, tips, or any issues..." rows="3"></textarea>
</section>
</div>
{/*  Footer Actions  */}
<footer className="p-8 pt-0 flex flex-col items-center">
<button className="w-full py-4 bg-success-green hover:bg-[#23583a] text-pure-white rounded-[20px] font-label-md text-label-md transition-colors shadow-sm flex items-center justify-center gap-2">
                Submit & Update KARWAN ID
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<p className="font-label-sm text-label-sm text-text-gray mt-4 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">update</span>
                Your verified feedback updates trust scores in real time.
            </p>
</footer>

      </div>
    </SharedLayout>
  );
}
