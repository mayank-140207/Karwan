import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailLayout from '../../components/layout/DetailLayout';

export default function AdaptiveItineraryPage() {
  const navigate = useNavigate();

  return (
    <DetailLayout title="Your Adaptive Itinerary">
      <div className="karwan-adaptiveitinerarypage">
        
{/*  TopNavBar  */}
<header className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] z-40 bg-surface/80 dark:bg-surface/80 backdrop-blur-md shadow-sm flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20">
{/*  Mobile Brand (Hidden on Desktop)  */}
<div className="md:hidden flex items-center gap-2">
<h1 className="font-headline-md text-headline-md text-primary m-0">Karwan</h1>
</div>
{/*  Empty div for alignment on desktop since search is on_left but brand is in sidebar  */}
<div className="hidden md:flex items-center flex-1 max-w-md ml-8">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input type="text" placeholder="Search places, guides, or vendors..." className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-label-md focus:ring-2 focus:ring-primary/20 transition-all" />
</div>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined">settings</span>
</button>
<img className="w-10 h-10 rounded-full object-cover ml-2" data-alt="A small, circular profile avatar showing a smiling traveler in a bright, modern setting. The style is professional and clean, fitting a premium corporate travel app." src="/images/img_4863bbaaa6eb.jpg" />
</div>
</header>
{/*  Canvas  */}
<div className="pt-28 px-margin-mobile md:px-margin-desktop pb-section-gap max-w-container-max mx-auto">
{/*  Header Section  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-section-gap gap-6">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Your Adaptive Itinerary</h2>
<div className="flex items-center gap-3 text-text-gray font-body-lg text-body-lg">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[20px]">location_on</span> Exploring Jaipur</span>
<span className="w-1 h-1 rounded-full bg-text-gray"></span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[20px]">calendar_today</span> Oct 12-16, 2024</span>
</div>
</div>
<button className="self-start md:self-auto bg-success-green text-pure-white font-label-md text-label-md py-3 px-6 rounded-voyentra hover:bg-secondary-fixed-variant transition-colors shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">edit</span>
                    Adjust Plan
                </button>
</div>
{/*  Bento Layout Container  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Main Timeline Column  */}
<div className="lg:col-span-8 flex flex-col gap-gutter">
{/*  Timeline Card  */}
<div className="bg-pure-white rounded-[24px] p-voyentra-pad voyentra-card relative overflow-hidden">
{/*  Decorative top gradient  */}
<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-success-green to-secondary-fixed opacity-50"></div>
<h3 className="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-2">
<span className="material-symbols-outlined text-success-green">route</span>
                            Today's Route
                        </h3>
<div className="relative pl-4 md:pl-8">
{/*  Vertical Dotted Line  */}
<div className="absolute left-[38px] md:left-[54px] top-4 bottom-4 w-[2px] dashed-line z-0"></div>
{/*  Stop 1: Completed  */}
<div className="relative z-10 flex gap-4 md:gap-6 mb-10 group">
<div className="w-12 h-12 rounded-full bg-surface-container-high border-4 border-pure-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-text-gray">check</span>
</div>
<div className="flex-1 bg-surface rounded-xl p-4 md:p-6 voyentra-shadow-low opacity-75">
<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
<h4 className="font-label-md text-label-md text-text-gray line-through">09:00 AM - Amber Fort</h4>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-dim text-text-gray font-label-sm text-label-sm mt-2 md:mt-0">
                                            Confirmed
                                        </span>
</div>
<p className="font-body-md text-body-md text-text-gray m-0">Visit completed successfully.</p>
</div>
</div>
{/*  Stop 2: Re-routed (Active)  */}
<div className="relative z-10 flex gap-4 md:gap-6 mb-10 group">
<div className="w-12 h-12 rounded-full bg-[#FFF3E0] border-4 border-pure-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-[#E65100]">swap_horiz</span>
</div>
<div className="flex-1 bg-pure-white border border-[#FFE0B2] rounded-xl p-4 md:p-6 voyentra-card relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFB74D]"></div>
<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
<h4 className="font-headline-md text-[20px] text-primary">11:30 AM - City Palace</h4>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFF3E0] text-[#E65100] font-label-sm text-label-sm mt-2 md:mt-0 gap-1 border border-[#FFE0B2]">
<span className="material-symbols-outlined text-[14px]">warning</span>
                                            Re-routed
                                        </span>
</div>
<div className="bg-surface rounded-lg p-3 mb-3 border border-outline-variant/30 flex items-start gap-3">
<span className="material-symbols-outlined text-text-gray mt-0.5 text-[18px]">info</span>
<p className="font-body-md text-body-md text-on-surface-variant m-0 text-sm">
                                            Hawa Mahal closed for VIP visit — swapped order with City Palace.
                                        </p>
</div>
<Link to="/directory" className="inline-flex items-center text-success-green hover:text-secondary-fixed-variant font-label-md text-label-md gap-1 transition-colors">
                                        Why did this change?
                                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</Link>
</div>
</div>
{/*  Stop 3: Upcoming  */}
<div className="relative z-10 flex gap-4 md:gap-6 group">
<div className="w-12 h-12 rounded-full bg-pure-white border-4 border-pure-white flex items-center justify-center shrink-0 shadow-sm ring-2 ring-outline-variant transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-primary">schedule</span>
</div>
<div className="flex-1 bg-pure-white border border-outline-variant/30 rounded-xl p-4 md:p-6 voyentra-shadow-low hover:border-secondary-fixed transition-colors">
<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
<h4 className="font-label-md text-label-md text-primary text-lg">02:00 PM - Hawa Mahal</h4>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm mt-2 md:mt-0">
                                            Upcoming
                                        </span>
</div>
<p className="font-body-md text-body-md text-text-gray m-0">Expected travel time: 15 mins via auto-rickshaw.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Side Column  */}
<div className="lg:col-span-4 flex flex-col gap-gutter">
{/*  Budget Card  */}
<div className="bg-pure-white rounded-[24px] p-6 voyentra-shadow-low">
<div className="flex items-center justify-between mb-4">
<h3 className="font-label-md text-label-md text-primary text-lg flex items-center gap-2">
<span className="material-symbols-outlined text-text-gray">account_balance_wallet</span>
                                Daily Budget
                            </h3>
<span className="material-symbols-outlined text-text-gray hover:text-primary cursor-pointer transition-colors">more_vert</span>
</div>
<div className="flex justify-between items-end mb-2">
<div>
<p className="font-label-sm text-label-sm text-text-gray mb-1">Spent so far</p>
<p className="font-headline-md text-headline-md text-primary m-0">₹12,400</p>
</div>
<div className="text-right">
<p className="font-label-sm text-label-sm text-text-gray mb-1">Total Budget</p>
<p className="font-label-md text-label-md text-text-gray m-0">₹20,000</p>
</div>
</div>
{/*  Progress Bar  */}
<div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden mt-4 relative">
<div className="absolute top-0 left-0 h-full bg-success-green rounded-full transition-all duration-1000 ease-out" style={{ width: "62%" }}></div>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-3 text-right">62% used</p>
</div>
{/*  Map/Visual Element Placeholder  */}
<div className="bg-surface rounded-[24px] voyentra-shadow-low overflow-hidden h-64 relative group cursor-pointer">
<div className="bg-cover bg-center w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" data-alt="A detailed, modern map interface showing the city of Jaipur. The map uses a clean, light-mode palette with soft whites and greys. Highlighted routes in vibrant green connect key landmarks like City Palace and Hawa Mahal. A subtle drop shadow gives depth to the map markers. The overall aesthetic is premium, technological, and travel-oriented." data-location="Jaipur" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDU-udMjPYWB40iFU11yhgQFWJJM8ntQzKU2Y4RaWcSAqyIkT71Da8vPAPzKvNo4RZggpbvEgnMQ6jJgeiiuPOj-AhUo2qOABRJTw9d7oN-0IXdZ2ayeGSLx2j_1YnjnZfMS4FGknZkEWnuIXQYhq0DVWebfCQHpdAEd7wHsf01G4kN_agvx4toG6FLnYWXudXPXvN4d04MGhRMEo3xhyZaSruoyQ8vHDpdnwx6wepYuy9wOEJLsMexYQ')" }}></div>
<div className="absolute bottom-4 right-4 bg-pure-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">explore</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Live View</span>
</div>
</div>
</div>
</div>
</div>

      </div>
    </DetailLayout>
  );
}
