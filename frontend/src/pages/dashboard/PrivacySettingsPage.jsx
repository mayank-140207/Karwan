import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function PrivacySettingsPage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Settings - Privacy & Verification">
      <div className="karwan-privacysettingspage">
        
<div className="max-w-4xl mx-auto pt-stack-lg">
{/*  Settings Header & Sub-nav  */}
<div className="mb-stack-lg">
<h2 className="font-headline-lg text-headline-lg text-primary mb-6">Settings</h2>
<div className="flex gap-6 border-b border-surface-variant overflow-x-auto no-scrollbar">
<Link to="/profile" className="pb-3 px-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Personal Info</Link>
<Link to="/settings/privacy" className="pb-3 px-2 font-label-md text-label-md text-secondary border-b-2 border-secondary">Privacy & Verification</Link>
<Link to="/trip/plan/preferences" className="pb-3 px-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Preferences</Link>
<Link to="/notifications" className="pb-3 px-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Notifications</Link>
</div>
</div>
<div className="grid grid-cols-1 gap-stack-lg">
{/*  Verification Status Card  */}
<section className="bg-pure-white rounded-xl p-stack-lg soft-shadow">
<h3 className="font-headline-md text-headline-md text-primary mb-6">Verification Status</h3>
<div className="flex flex-col gap-4">
{/*  Phone Verified  */}
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-surface-variant">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-success-green/10 flex items-center justify-center text-success-green">
<span className="material-symbols-outlined">smartphone</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Phone Number</p>
<p className="font-body-sm text-text-gray">+1 (555) ••• ••89</p>
</div>
</div>
<div className="flex items-center gap-2 text-success-green bg-success-green/10 px-3 py-1 rounded-full">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm">Verified</span>
</div>
</div>
{/*  DigiLocker  */}
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-surface-variant">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-outline">
<span className="material-symbols-outlined">folder_shared</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">DigiLocker</p>
<p className="font-body-sm text-text-gray">Not Linked</p>
</div>
</div>
<button className="bg-[#2C6E49] text-pure-white font-label-md text-label-md px-5 py-2 rounded-full hover:bg-secondary-container hover:text-on-secondary-container transition-colors">
                                Link Now
                            </button>
</div>
</div>
</section>
{/*  Data & Privacy Section  */}
<section className="bg-pure-white rounded-xl p-stack-lg soft-shadow">
<h3 className="font-headline-md text-headline-md text-primary mb-6">Data & Privacy</h3>
<div className="flex flex-col gap-6">
{/*  Toggle Row 1  */}
<div className="flex items-start justify-between gap-4">
<div>
<p className="font-label-md text-label-md text-on-surface">Show my trust score publicly</p>
<p className="font-body-md text-text-gray mt-1">Allow other travelers and hosts to see your verified trust score on your profile.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in mt-1">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-pure-white border-4 appearance-none cursor-pointer border-[#2C6E49]" id="toggle1" name="toggle" style={{ right: "0px", zIndex: "1", borderColor: "rgb(44, 110, 73)" }} type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-[#2C6E49] cursor-pointer" htmlFor="toggle1" style={{ backgroundColor: "rgb(44, 110, 73)" }}></label>
</div>
</div>
<hr className="border-surface-variant" />
{/*  Toggle Row 2  */}
<div className="flex items-start justify-between gap-4">
<div>
<p className="font-label-md text-label-md text-on-surface">Allow my trip data to improve Auto-heal for others</p>
<p className="font-body-md text-text-gray mt-1">Share anonymized delay and disruption data to help us predict and solve issues faster.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in mt-1">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-pure-white border-4 appearance-none cursor-pointer border-outline-variant" id="toggle2" name="toggle" style={{ right: "24px", zIndex: "1", borderColor: "rgb(197, 198, 206)" }} type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle2" style={{ backgroundColor: "rgb(225, 226, 228)" }}></label>
</div>
</div>
</div>
</section>
{/*  Bottom Action  */}
<div className="flex justify-start mt-4">
<button className="border-2 border-primary text-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary/5 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined">download</span>
                        Download My Data
                    </button>
</div>
</div>
</div>

      </div>
    </SharedLayout>
  );
}
