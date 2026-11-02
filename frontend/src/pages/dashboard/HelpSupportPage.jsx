import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function HelpSupportPage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Settings - Help & Support">
      <div className="karwan-helpsupportpage">
        
<div className="max-w-container-max mx-auto">
{/*  Settings Header & Sub-nav (Simplified for this view)  */}
<div className="mb-stack-lg">
<h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">Settings</h2>
<div className="flex gap-gutter border-b border-surface-variant">
<Link to="/settings" className="py-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Account</Link>
<Link to="/trip/plan/preferences" className="py-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Preferences</Link>
<Link to="/settings/help" className="py-2 font-label-md text-label-md text-secondary border-b-2 border-secondary font-bold">Help & Support</Link>
</div>
</div>
{/*  Help & Support Content  */}
<div className="bg-pure-white rounded-xl shadow-ambient-low p-stack-lg md:p-8">
{/*  Search Articles  */}
<div className="mb-stack-lg">
<h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">How can we help you today?</h3>
<div className="relative max-w-2xl">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-background border border-outline-variant rounded-lg pl-12 pr-4 py-3 font-body-lg text-body-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Search for help articles..." type="text" />
</div>
</div>
{/*  Topic Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-section-gap">
{/*  Card 1  */}
<Link to="/directory" className="block bg-background rounded-lg p-stack-lg border border-transparent hover:border-outline-variant transition-colors group">
<div className="flex items-start gap-4">
<div className="bg-surface-container-highest p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-pure-white transition-colors">
<span className="material-symbols-outlined">receipt_long</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary mb-1">Fare Disputes</h4>
<p className="font-body-md text-body-md text-text-gray">Issues with a recent charge or requesting a refund for a trip.</p>
</div>
</div>
</Link>
{/*  Card 2  */}
<Link to="/profile" className="block bg-background rounded-lg p-stack-lg border border-transparent hover:border-outline-variant transition-colors group">
<div className="flex items-start gap-4">
<div className="bg-surface-container-highest p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-pure-white transition-colors">
<span className="material-symbols-outlined">manage_accounts</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary mb-1">Account & Verification</h4>
<p className="font-body-md text-body-md text-text-gray">Updating your profile, document verification, and login issues.</p>
</div>
</div>
</Link>
{/*  Card 3  */}
<Link to="/trip/trustradar" className="block bg-background rounded-lg p-stack-lg border border-transparent hover:border-outline-variant transition-colors group">
<div className="flex items-start gap-4">
<div className="bg-surface-container-highest p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-pure-white transition-colors">
<span className="material-symbols-outlined">military_tech</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary mb-1">Trust Scores Explained</h4>
<p className="font-body-md text-body-md text-text-gray">Learn how TrustRadar scores are calculated and how to improve yours.</p>
</div>
</div>
</Link>
{/*  Card 4  */}
<Link to="/directory" className="block bg-background rounded-lg p-stack-lg border border-transparent hover:border-outline-variant transition-colors group">
<div className="flex items-start gap-4">
<div className="bg-surface-container-highest p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-pure-white transition-colors">
<span className="material-symbols-outlined">security</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary mb-1">Safety Reporting</h4>
<p className="font-body-md text-body-md text-text-gray">Report an incident during a trip or learn about our safety protocols.</p>
</div>
</div>
</Link>
</div>
{/*  Still Need Help  */}
<div className="bg-surface-container-low rounded-xl p-stack-lg flex flex-col md:flex-row items-center justify-between gap-stack-lg border border-surface-variant">
<div>
<h4 className="font-headline-md text-headline-md text-primary mb-2">Still need help?</h4>
<p className="font-body-md text-body-md text-text-gray">Our premium support team is available 24/7 to assist you with any inquiries.</p>
</div>
<button className="bg-[#2C6E49] text-pure-white font-label-md text-label-md px-6 py-3 rounded-[20px] hover:bg-on-secondary-container transition-colors whitespace-nowrap shadow-ambient-low">
                            Contact Support
                        </button>
</div>
</div>
</div>

      </div>
    </SharedLayout>
  );
}
