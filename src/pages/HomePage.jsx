import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../components/layout/SharedLayout';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Karwan - Traveler Home">
      <div className="karwan-homepage">
        
<div className="mb-stack-lg">
<h2 className="font-headline-lg text-headline-lg text-primary">Welcome Back.</h2>
<p className="font-body-lg text-body-lg text-text-gray mt-2">Ready for your next journey?</p>
</div>
{/*  Bento Grid Layout for Empty State  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mt-section-gap">
{/*  Main Empty State Card (Span 2 cols)  */}
<div className="lg:col-span-2 bg-pure-white rounded-xl card-shadow p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
{/*  Illustration  */}
<div className="w-32 h-32 mb-8 relative">
{/*  Abstract Line Art Map/Route (Simulated with simple CSS shapes and icons for pure code approach, avoiding complex inline SVGs per instructions)  */}
<div className="absolute inset-0 bg-surface rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[64px] text-primary">map</span>
</div>
<div className="absolute -top-2 -right-2 bg-success-green/10 p-2 rounded-full">
<span className="material-symbols-outlined text-success-green">location_on</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">No Active Trip Yet</h3>
<p className="font-body-md text-body-md text-text-gray max-w-md mx-auto mb-8">
                        Plan your first trip and Karwan will guide you with live fares, trust scores, and an itinerary that adapts as you go.
                    </p>
<button className="bg-success-green hover:bg-secondary text-pure-white font-label-md text-label-md py-3 px-8 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
<span className="material-symbols-outlined">explore</span>
                        Plan New Trip
                    </button>
</div>
{/*  Secondary Info Column  */}
<div className="flex flex-col gap-gutter">
{/*  Wallet / Balance Card  */}
<div className="bg-pure-white rounded-xl card-shadow p-stack-lg">
<div className="flex items-center justify-between mb-4">
<h4 className="font-label-md text-label-md text-text-gray uppercase tracking-wider">Karwan Wallet</h4>
<span className="material-symbols-outlined text-text-gray text-sm">account_balance_wallet</span>
</div>
<div className="font-headline-lg text-headline-lg text-primary">
                            ₹0<span className="font-body-md text-body-md text-text-gray">.00</span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 py-2 border border-primary text-primary font-label-sm text-label-sm rounded-lg hover:bg-surface transition-colors">Add Funds</button>
</div>
</div>
{/*  Trending Destinations Placeholder  */}
<div className="bg-pure-white rounded-xl card-shadow p-stack-lg flex-grow">
<h4 className="font-label-md text-label-md text-text-gray uppercase tracking-wider mb-4">Explore Destinations</h4>
<div className="flex flex-col gap-4">
{/*  Destination 1  */}
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A stunning, bright landscape photograph of a serene mountain lake at sunrise, with crisp reflections and soft natural lighting, conveying a premium travel destination in a light-mode aesthetic." src="/images/img_3c6092006b39.jpg" />
</div>
<div>
<p className="font-label-md text-label-md text-primary">Himalayan Retreat</p>
<p className="font-label-sm text-label-sm text-text-gray">From ₹15,000</p>
</div>
</div>
{/*  Destination 2  */}
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A high-quality image of a modern, bustling cityscape at golden hour, featuring sleek architecture and warm lighting, fitting a corporate travel context." src="/images/img_2920b6b814d4.jpg" />
</div>
<div>
<p className="font-label-md text-label-md text-primary">Urban Business Hub</p>
<p className="font-label-sm text-label-sm text-text-gray">From ₹8,500</p>
</div>
</div>
</div>
</div>
</div>
</div>

      </div>
    </SharedLayout>
  );
}
