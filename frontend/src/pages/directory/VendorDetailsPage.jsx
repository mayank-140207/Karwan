import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailLayout from '../../components/layout/DetailLayout';

export default function VendorDetailsPage() {
  const navigate = useNavigate();

  return (
    <DetailLayout title="Vendor Details">
      <div className="karwan-vendordetailspage">
        
{/*  TopAppBar  */}
<header className="sticky top-0 z-40 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-md shadow-sm w-full flex justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-md">
<div className="flex items-center gap-4">
<div className="relative w-64 hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary rounded-full py-2 pl-10 pr-4 text-label-md font-label-md focus:ring-0 transition-colors outline-none" placeholder="Search TrustRadar..." type="text" />
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 active:opacity-100 p-2">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 active:opacity-100 p-2 hidden sm:block">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden cursor-pointer">
<img alt="Traveler Profile" className="w-full h-full object-cover" data-alt="A professional close up studio portrait of a confident female traveler in her late 20s. She is wearing a light, stylish travel scarf over a simple neutral tone blouse. The lighting is soft and flattering, creating a premium light-mode aesthetic with clean white backgrounds and soft shadows." src="/images/img_debaa21610a5.jpg" />
</div>
</div>
</header>
{/*  Content Canvas  */}
<div className="flex-1 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full pt-8">
{/*  Top Section: Vendor Profile  */}
<section className="mb-section-gap bg-pure-white rounded-[20px] shadow-sm border border-surface-variant overflow-hidden">
<div className="flex flex-col md:flex-row">
{/*  Vendor Image  */}
<div className="w-full md:w-1/3 h-64 md:h-auto relative">
<img alt="City Palace Auto Stand" className="w-full h-full object-cover" data-alt="A high quality, vibrant daytime photograph of an auto-rickshaw stand in Jaipur, India. The main focus is a well-maintained, brightly colored yellow and green auto-rickshaw. The driver, a middle-aged local Indian man, is standing proudly next to it, wearing a neat uniform. The background shows glimpses of historic pink sandstone architecture typical of Jaipur, with bright clear skies. The overall mood is authentic, reliable, and culturally rich, fitting a premium travel platform aesthetic." src="/images/img_c0592da82e66.jpg" />
</div>
{/*  Vendor Details  */}
<div className="p-stack-lg flex-1 flex flex-col justify-between">
<div>
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-3 py-1 bg-secondary/10 text-secondary-container font-label-sm text-label-sm rounded-full">Transit</span>
<span className="flex items-center gap-1 text-success-green font-label-sm text-label-sm bg-success-green/10 px-2 py-1 rounded-full">
<span className="material-symbols-outlined fill text-[14px]">verified</span> Verified
                                        </span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">City Palace Auto Stand</h2>
<p className="text-text-gray font-body-md mt-1">Jaipur, Rajasthan, India</p>
</div>
{/*  Trust Score  */}
<div className="flex flex-col items-center">
<div className="relative w-16 h-16 flex items-center justify-center rounded-full border-4 border-success-green/20">
<svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
<circle className="text-success-green" cx="50" cy="50" fill="none" r="46" stroke="currentColor" strokeDasharray="289" strokeDashoffset="10" strokeWidth="8"></circle>
</svg>
<span className="font-headline-md text-headline-md text-primary font-bold">4.8</span>
</div>
<span className="text-label-sm font-label-sm text-text-gray mt-1">Trust Score</span>
</div>
</div>
</div>
{/*  Stats Row  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-surface-variant">
<div>
<p className="text-label-sm font-label-sm text-text-gray">Total Interactions</p>
<p className="font-label-md text-label-md text-on-surface mt-1">1,240</p>
</div>
<div>
<p className="text-label-sm font-label-sm text-text-gray">Incidents Resolved</p>
<p className="font-label-md text-label-md text-success-green mt-1">32 Verified</p>
</div>
<div>
<p className="text-label-sm font-label-sm text-text-gray">Open Reports</p>
<p className="font-label-md text-label-md text-on-surface mt-1">0</p>
</div>
<div>
<p className="text-label-sm font-label-sm text-text-gray">Member Since</p>
<p className="font-label-md text-label-md text-on-surface mt-1">Jan 2024</p>
</div>
</div>
</div>
</div>
</section>
{/*  Main Content (Two Columns)  */}
<div className="flex flex-col lg:flex-row gap-gutter mb-section-gap">
{/*  Left Column (65%): Incident History  */}
<div className="lg:w-[65%]">
<h3 className="font-headline-md text-headline-md text-primary mb-6">Incident History</h3>
<div className="space-y-4">
{/*  Card 1  */}
<div className="bg-pure-white rounded-[16px] p-stack-md shadow-sm border border-surface-variant flex gap-4 items-start hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-success-green/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-success-green fill">check_circle</span>
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<span className="font-label-md text-label-md text-on-surface">Resolved</span>
<span className="text-label-sm font-label-sm text-text-gray">•</span>
<span className="text-label-sm font-label-sm text-text-gray">Oct 12, 2024</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Overcharging report investigated and resolved with fare adjustment.</p>
</div>
</div>
{/*  Card 2  */}
<div className="bg-pure-white rounded-[16px] p-stack-md shadow-sm border border-surface-variant flex gap-4 items-start hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary-container">shield_with_heart</span>
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<span className="font-label-md text-label-md text-on-surface">Verified Transaction</span>
<span className="text-label-sm font-label-sm text-text-gray">•</span>
<span className="text-label-sm font-label-sm text-text-gray">Sep 28, 2024</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Fair fare transaction verified by 5 independent travelers.</p>
</div>
</div>
{/*  Card 3  */}
<div className="bg-pure-white rounded-[16px] p-stack-md shadow-sm border border-surface-variant flex gap-4 items-start hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-success-green/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-success-green fill">check_circle</span>
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<span className="font-label-md text-label-md text-on-surface">Resolved</span>
<span className="text-label-sm font-label-sm text-text-gray">•</span>
<span className="text-label-sm font-label-sm text-text-gray">Aug 15, 2024</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Route confusion clarified; traveler assisted with correct destination without extra charge.</p>
</div>
</div>
</div>
</div>
{/*  Right Column (35%): Vendor Location  */}
<div className="lg:w-[35%]">
<h3 className="font-headline-md text-headline-md text-primary mb-6">Location</h3>
<div className="bg-pure-white rounded-[20px] shadow-sm border border-surface-variant overflow-hidden h-[300px] relative">
{/*  Map Image Placeholder using data-location  */}
<img alt="Map of Jaipur" className="w-full h-full object-cover" data-location="Jaipur" src="/images/img_31133dc2defd.jpg" />
{/*  Map Overlay Gradient for slight depth  */}
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/20 to-transparent pointer-events-none"></div>
{/*  Location Detail overlay  */}
<div className="absolute bottom-4 left-4 right-4 bg-pure-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-surface-variant/50">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">location_on</span>
<div>
<p className="font-label-md text-label-md text-on-surface">Near City Palace</p>
<p className="text-label-sm font-label-sm text-text-gray">Jaleb Chowk, Jaipur, 302002</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Bottom Section: Report Banner  */}
<section className="bg-primary rounded-[20px] p-stack-lg shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 py-8">
{/*  Decorative background elements  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-success-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md text-pure-white mb-2">See something that needs flagging?</h3>
<p className="font-body-md text-body-md text-inverse-primary/80">Help keep the Karwan community safe by reporting suspicious activity or verifying good experiences with this vendor.</p>
</div>
<button className="relative z-10 shrink-0 bg-pure-white text-primary font-label-md text-label-md py-3 px-8 rounded-[20px] hover:bg-surface-variant transition-colors shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined">flag</span>
                    Report Now
                </button>
</section>
</div>

      </div>
    </DetailLayout>
  );
}
