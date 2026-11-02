import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function NotificationsSettingsPage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Settings - Notifications">
      <div className="karwan-notificationssettingspage">
        
<div className="max-w-container-max mx-auto">
{/*  Page Header  */}
<div className="mb-section-gap">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Settings</h2>
<p className="font-body-lg text-body-lg text-text-gray">Manage your account preferences and alert settings.</p>
</div>
{/*  Settings Layout (Sidebar + Content)  */}
<div className="flex flex-col lg:flex-row gap-gutter relative items-start">
{/*  Inner Settings Navigation Sidebar  */}
<aside className="w-full lg:w-64 shrink-0 sticky top-32">
<nav className="flex flex-col gap-2">
<Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">manage_accounts</span>
<span className="font-label-md text-label-md">Account</span>
</Link>
<Link to="/notifications" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-low text-primary relative">
<span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-secondary rounded-r-full"></span>
<span className="material-symbols-outlined text-secondary font-variation-settings-'FILL'-1">notifications_active</span>
<span className="font-label-md text-label-md font-bold">Notifications</span>
</Link>
<Link to="/settings/privacy" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">shield_lock</span>
<span className="font-label-md text-label-md">Privacy & Verification</span>
</Link>
<Link to="/settings/help" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors group">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">help</span>
<span className="font-label-md text-label-md">Help & Support</span>
</Link>
</nav>
</aside>
{/*  Main Settings Content Area  */}
<div className="flex-1 w-full">
{/*  White Floating Card  */}
<div className="bg-pure-white rounded-[20px] shadow-[0_2px_8px_rgba(0,13,35,0.04)] p-stack-lg lg:p-[32px]">
<div className="mb-stack-lg pb-stack-lg border-b border-surface-container-high">
<h3 className="font-headline-md text-headline-md text-primary mb-2">Notification Preferences</h3>
<p className="font-body-md text-body-md text-text-gray">Control how Karwan communicates with you about your trips, safety, and community updates.</p>
</div>
{/*  Toggle List  */}
<div className="flex flex-col gap-6">
{/*  Trust Alerts  */}
<div className="flex items-center justify-between group">
<div className="pr-8">
<h4 className="font-label-md text-label-md text-primary mb-1">Trust Alerts</h4>
<p className="font-body-md text-body-md text-text-gray">Get notified when a nearby vendor's score changes.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input defaultChecked className="sr-only peer" type="checkbox" defaultValue="" />
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary/50 rounded-full peer peer-defaultChecked:after:translate-x-full peer-defaultChecked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-defaultChecked:bg-success-green"></div>
</label>
</div>
<div className="h-px bg-surface-container-highest w-full opacity-50"></div>
{/*  Trip Updates  */}
<div className="flex items-center justify-between group">
<div className="pr-8">
<h4 className="font-label-md text-label-md text-primary mb-1">Trip Updates</h4>
<p className="font-body-md text-body-md text-text-gray">Auto-heal re-routing notifications and itinerary changes.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input defaultChecked className="sr-only peer" type="checkbox" defaultValue="" />
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary/50 rounded-full peer peer-defaultChecked:after:translate-x-full peer-defaultChecked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-defaultChecked:bg-success-green"></div>
</label>
</div>
<div className="h-px bg-surface-container-highest w-full opacity-50"></div>
{/*  New Reports Nearby  */}
<div className="flex items-center justify-between group">
<div className="pr-8">
<h4 className="font-label-md text-label-md text-primary mb-1">New Reports Nearby</h4>
<p className="font-body-md text-body-md text-text-gray">Alerts for community safety reports in your vicinity.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input defaultChecked className="sr-only peer" type="checkbox" defaultValue="" />
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary/50 rounded-full peer peer-defaultChecked:after:translate-x-full peer-defaultChecked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-defaultChecked:bg-success-green"></div>
</label>
</div>
<div className="h-px bg-surface-container-highest w-full opacity-50"></div>
{/*  Weekly Summary Email  */}
<div className="flex items-center justify-between group">
<div className="pr-8">
<h4 className="font-label-md text-label-md text-primary mb-1">Weekly Summary Email</h4>
<p className="font-body-md text-body-md text-text-gray">A recap of your travel activity and upcoming recommendations.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input className="sr-only peer" type="checkbox" defaultValue="" />
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary/50 rounded-full peer peer-defaultChecked:after:translate-x-full peer-defaultChecked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-defaultChecked:bg-success-green"></div>
</label>
</div>
</div>
</div>
{/*  Save Action Button  */}
<div className="mt-stack-lg flex justify-end">
<button className="px-8 py-3 rounded-full bg-success-green hover:bg-secondary text-pure-white font-label-md text-label-md transition-colors duration-200 shadow-sm">
                                    Save Changes
                                </button>
</div>
</div>
</div>
</div>

      </div>
    </SharedLayout>
  );
}
