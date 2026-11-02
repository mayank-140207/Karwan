import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function PlanPreferencesPage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Plan Trip - Preferences">
      <div className="karwan-planpreferencespage">
        
{/*  Step Indicator  */}
<div className="flex items-center justify-center gap-4 mb-stack-lg text-text-gray font-label-md text-label-md w-full max-w-3xl mx-auto">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-xs">1</span>
<span className="">Route</span>
</div>
<span className="material-symbols-outlined text-[16px] text-outline-variant">arrow_forward</span>
<div className="flex items-center gap-2 text-primary font-bold">
<span className="w-6 h-6 rounded-full bg-primary text-pure-white flex items-center justify-center text-xs">2</span>
<span className="">Preferences</span>
</div>
<span className="material-symbols-outlined text-[16px] text-outline-variant">arrow_forward</span>
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-xs">3</span>
<span className="">Review</span>
</div>
</div>
{/*  Header  */}
<div className="text-center mb-section-gap w-full max-w-3xl mx-auto">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mb-stack-sm">Trip Preferences</h1>
<p className="font-body-lg text-body-lg text-text-gray">Tailor your journey to match your style and priorities.</p>
</div>
<div className="w-full max-w-4xl mx-auto space-y-section-gap flex-1">
{/*  Travel Style Bento Section  */}
<section>
<div className="flex items-center gap-2 mb-stack-lg">
<span className="material-symbols-outlined text-primary text-[24px]">explore</span>
<h3 className="font-headline-md text-headline-md text-primary">Travel Style</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Relaxed Card  */}
<div className="bg-pure-white rounded-xl p-stack-lg shadow-sm border border-outline-variant/30 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-surface-container-low text-text-gray flex items-center justify-center mb-stack-md group-hover:bg-primary/5 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[28px]">coffee</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface mb-1">Relaxed</h4>
<p className="font-body-md text-body-md text-text-gray text-sm leading-tight">Slow pace, more downtime</p>
</div>
{/*  Balanced Card (Selected Example)  */}
<div className="bg-pure-white rounded-xl p-stack-lg shadow-sm border-2 border-primary hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute top-3 right-3 text-primary">
<span className="material-symbols-outlined filled text-[20px]">check_circle</span>
</div>
<div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-stack-md">
<span className="material-symbols-outlined text-[28px]">balance</span>
</div>
<h4 className="font-label-md text-label-md text-primary mb-1">Balanced</h4>
<p className="font-body-md text-body-md text-text-gray text-sm leading-tight">Mix of activity and rest</p>
</div>
{/*  Packed Card  */}
<div className="bg-pure-white rounded-xl p-stack-lg shadow-sm border border-outline-variant/30 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-surface-container-low text-text-gray flex items-center justify-center mb-stack-md group-hover:bg-primary/5 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[28px]">speed</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface mb-1">Packed</h4>
<p className="font-body-md text-body-md text-text-gray text-sm leading-tight">See as much as possible</p>
</div>
{/*  Adventure Card  */}
<div className="bg-pure-white rounded-xl p-stack-lg shadow-sm border border-outline-variant/30 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-surface-container-low text-text-gray flex items-center justify-center mb-stack-md group-hover:bg-primary/5 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[28px]">terrain</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface mb-1">Adventure</h4>
<p className="font-body-md text-body-md text-text-gray text-sm leading-tight">Offbeat trails and hiking</p>
</div>
</div>
</section>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/*  Priorities Section  */}
<section className="bg-pure-white rounded-[20px] p-stack-lg shadow-sm border border-outline-variant/20 h-full flex flex-col">
<div className="flex items-center gap-2 mb-stack-lg">
<span className="material-symbols-outlined text-primary text-[24px]">tune</span>
<h3 className="font-headline-md text-headline-md text-primary">Priorities</h3>
</div>
<div className="space-y-4 flex-1">
{/*  Toggle 1 (On)  */}
<div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Prioritize verified stays</h4>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full peer peer-defaultChecked:after:translate-x-full peer-defaultChecked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-defaultChecked:bg-success-green"></div>
</label>
</div>
{/*  Toggle 2 (Off)  */}
<div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Prefer lower-crowding routes</h4>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full peer peer-defaultChecked:after:translate-x-full peer-defaultChecked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-defaultChecked:bg-success-green"></div>
</label>
</div>
{/*  Toggle 3 (On)  */}
<div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
<div>
<h4 className="font-label-md text-label-md text-on-surface">Alert me on any fare changes</h4>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant rounded-full peer peer-defaultChecked:after:translate-x-full peer-defaultChecked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-defaultChecked:bg-success-green"></div>
</label>
</div>
</div>
</section>
{/*  Group Size Section  */}
<section className="bg-pure-white rounded-[20px] p-stack-lg shadow-sm border border-outline-variant/20 h-full flex flex-col">
<div className="flex items-center gap-2 mb-stack-lg">
<span className="material-symbols-outlined text-primary text-[24px]">group</span>
<h3 className="font-headline-md text-headline-md text-primary">Group Size</h3>
</div>
<div className="flex-1 flex flex-col items-center justify-center py-stack-lg">
<p className="font-body-md text-body-md text-text-gray mb-6 text-center">How many travelers are joining?</p>
<div className="flex items-center justify-center gap-6">
<button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-text-gray hover:text-primary hover:border-primary hover:bg-surface transition-all active:scale-95">
<span className="material-symbols-outlined">remove</span>
</button>
<div className="w-20 text-center">
<span className="font-headline-lg text-headline-lg text-primary block leading-none">2</span>
</div>
<button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-text-gray hover:text-primary hover:border-primary hover:bg-surface transition-all active:scale-95">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</section>
</div>
</div>
{/*  Bottom Navigation Actions  */}
<div className="w-full max-w-4xl mx-auto mt-16 pt-8 border-t border-outline-variant/20 flex justify-end gap-4 pb-8">
<button className="px-6 py-3 rounded-[20px] border border-primary text-primary font-label-md text-label-md hover:bg-primary/5 transition-colors flex items-center gap-2">
                    Back
                </button>
<button className="px-8 py-3 rounded-[20px] bg-success-green hover:bg-secondary text-pure-white font-label-md text-label-md shadow-sm transition-colors flex items-center gap-2">
                    Next: Review
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>

      </div>
    </SharedLayout>
  );
}
