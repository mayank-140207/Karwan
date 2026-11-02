import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailLayout from '../../components/layout/DetailLayout';

export default function TrustRadarPage() {
  const navigate = useNavigate();

  return (
    <DetailLayout title="TrustRadar Dashboard">
      <div className="karwan-trustradarpage">
        
<div className="flex flex-col md:flex-row md:items-center justify-between mb-stack-lg gap-4">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Trust Scores Near You</h2>
<div className="relative w-full md:w-auto md:min-w-[300px] md:hidden">
<span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-text-gray">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-pure-white border border-outline-variant rounded-full text-on-surface focus:outline-none focus:border-primary transition-colors font-body-md text-body-md" placeholder="Search..." type="text" />
</div>
</div>
{/*  Filters  */}
<div className="flex overflow-x-auto pb-4 mb-stack-lg gap-3 hide-scrollbar">
<button className="px-6 py-2 rounded-full bg-primary text-pure-white font-label-md text-label-md whitespace-nowrap">All</button>
<button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors font-label-md text-label-md whitespace-nowrap">Vendors</button>
<button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors font-label-md text-label-md whitespace-nowrap">Guides</button>
<button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors font-label-md text-label-md whitespace-nowrap">Transit Stands</button>
<button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors font-label-md text-label-md whitespace-nowrap">Stays</button>
</div>
{/*  Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-section-gap">
{/*  Card 1  */}
<div className="bg-pure-white p-stack-lg rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
<div className="flex items-start gap-4 mb-4">
<img className="w-16 h-16 rounded-full object-cover" data-alt="A well lit photograph of a bustling city auto-rickshaw stand in India. Yellow and green auto-rickshaws are lined up under a clear blue sky. The scene conveys motion, local transport vibes, and a vibrant, authentic travel experience." src="/images/img_4abb372dd439.jpg" />
<div className="flex-1">
<h3 className="font-label-md text-label-md text-primary mb-1">City Palace Auto Stand</h3>
<span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm rounded-full w-fit">Transit</span>
</div>
<div className="relative w-14 h-14 flex items-center justify-center rounded-full border-4 border-success-green">
<span className="font-label-md text-label-md text-success-green font-bold">4.8</span>
</div>
</div>
<p className="font-body-md text-body-md text-text-gray mb-4">3 verified incidents resolved, 0 open.</p>
<Link to="/directory" className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1">View Details <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
</div>
{/*  Card 2  */}
<div className="bg-pure-white p-stack-lg rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
<div className="flex items-start gap-4 mb-4">
<img className="w-16 h-16 rounded-full object-cover" data-alt="A professional yet approachable portrait of an Indian male tour guide in his 40s. He is wearing a neat polo shirt and smiling warmly in front of a slightly blurred historical monument background. High-quality daylight lighting." src="/images/img_cf143527a32f.jpg" />
<div className="flex-1">
<h3 className="font-label-md text-label-md text-primary mb-1">Rajesh Gupta</h3>
<span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface-variant text-label-sm font-label-md rounded-full w-fit">LocalGuide</span>
</div>
<div className="relative w-14 h-14 flex items-center justify-center rounded-full border-4 border-success-green">
<span className="font-label-md text-label-md text-success-green font-bold">4.9</span>
</div>
</div>
<p className="font-body-md text-body-md text-text-gray mb-4">5 verified incidents resolved, 0 open.</p>
<Link to="/directory" className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1">View Details <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
</div>
{/*  Card 3  */}
<div className="bg-pure-white p-stack-lg rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
<div className="flex items-start gap-4 mb-4">
<img className="w-16 h-16 rounded-full object-cover" data-alt="A photo of a quaint souvenir shop in a busy market alley. The shop is filled with colorful local textiles and handicrafts. The lighting is warm, inviting, and captures the vibrant essence of exploring local markets." src="/images/img_07ab177b9853.jpg" />
<div className="flex-1">
<h3 className="font-label-md text-label-md text-primary mb-1">Market Square Souvenirs</h3>
<span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm rounded-full w-fit">Vendor</span>
</div>
<div className="relative w-14 h-14 flex items-center justify-center rounded-full border-4 border-amber-500">
<span className="font-label-md text-label-md text-amber-600 font-bold">3.2</span>
</div>
</div>
<p className="font-body-md text-body-md text-text-gray mb-4">12 verified incidents resolved, 2 open (Overcharging).</p>
<Link to="/directory" className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1">View Details <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
</div>
</div>
{/*  Report Banner  */}
<div className="bg-secondary-fixed-dim/20 rounded-xl p-stack-lg flex flex-col md:flex-row items-center justify-between gap-4 border border-secondary-fixed-dim/30 shadow-sm">
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">See something that needs flagging?</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Help keep the community safe and informed. Report overcharging, safety concerns, or unprofessional behavior instantly.</p>
</div>
<button className="px-6 py-3 bg-success-green text-pure-white rounded-lg font-label-md text-label-md hover:bg-secondary transition-colors whitespace-nowrap shadow-sm" >
                    Report Now
                </button>
</div>

      </div>
    </DetailLayout>
  );
}
