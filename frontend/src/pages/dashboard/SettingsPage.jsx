import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function SettingsPage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Karwan - Settings">
      <div className="karwan-settingspage">
        
<div className="max-w-[1000px] mx-auto">
<h2 className="font-headline-lg text-headline-lg text-primary mb-section-gap">Settings</h2>
<div className="flex flex-col lg:flex-row gap-gutter">
{/*  Sub-navigation  */}
<aside className="w-full lg:w-64 flex-shrink-0">
<nav className="flex flex-col gap-stack-sm font-label-md text-label-md">
<Link to="/settings" className="px-stack-md py-stack-sm rounded-lg bg-surface-container-high text-primary font-bold shadow-sm flex items-center justify-between">
                                Account
                                <span className="material-symbols-outlined text-success-green">chevron_right</span>
</Link>
<Link to="/notifications" className="px-stack-md py-stack-sm rounded-lg text-text-gray hover:bg-surface-container hover:text-primary transition-colors flex items-center">
                                Notifications
                            </Link>
<Link to="/settings/privacy" className="px-stack-md py-stack-sm rounded-lg text-text-gray hover:bg-surface-container hover:text-primary transition-colors flex items-center">
                                Privacy & Verification
                            </Link>
<Link to="/settings" className="px-stack-md py-stack-sm rounded-lg text-text-gray hover:bg-surface-container hover:text-primary transition-colors flex items-center">
                                Payment
                            </Link>
<Link to="/settings/help" className="px-stack-md py-stack-sm rounded-lg text-text-gray hover:bg-surface-container hover:text-primary transition-colors flex items-center">
                                Help & Support
                            </Link>
</nav>
</aside>
{/*  Main Panel (Account)  */}
<div className="flex-1">
<div className="bg-pure-white rounded-[20px] shadow-[0_2px_8px_rgba(0,13,35,0.04)] p-stack-lg md:p-margin-desktop">
<h3 className="font-headline-md text-headline-md text-primary mb-stack-lg border-b border-surface-container-high pb-stack-sm">Account Information</h3>
<form className="space-y-stack-lg">
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="flex flex-col gap-stack-sm">
<label className="font-label-sm text-label-sm text-text-gray uppercase tracking-wider" htmlFor="fullName">Full Name</label>
<input className="bg-surface-container-lowest border border-text-gray/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 text-on-surface font-body-md transition-colors shadow-sm" id="fullName" type="text" defaultValue="Arjun Singh" />
</div>
<div className="flex flex-col gap-stack-sm">
<label className="font-label-sm text-label-sm text-text-gray uppercase tracking-wider" htmlFor="email">Email Address</label>
<input className="bg-surface-container-lowest border border-text-gray/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 text-on-surface font-body-md transition-colors shadow-sm" id="email" type="email" defaultValue="arjun.s@example.com" />
</div>
</div>
<div className="flex flex-col gap-stack-sm max-w-md">
<label className="font-label-sm text-label-sm text-text-gray uppercase tracking-wider" htmlFor="phone">Phone Number</label>
<input className="bg-surface-container-lowest border border-text-gray/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 text-on-surface font-body-md transition-colors shadow-sm" id="phone" type="tel" defaultValue="+91 98765 43210" />
</div>
<div className="pt-stack-md">
<button className="border-2 border-primary text-primary hover:bg-surface-container-low px-6 py-2 rounded-[20px] font-label-md text-label-md transition-colors px-8 whitespace-nowrap" type="button">
                                        Change Password
                                    </button>
</div>
<div className="border-t border-surface-container-high pt-stack-lg mt-section-gap flex items-center justify-between">
<div>
<h4 className="font-label-md text-label-md text-primary mb-1">Switch to Partner Mode</h4>
<p className="font-body-md text-body-md text-text-gray">Add a Service Provider role to your KARWAN ID</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" defaultValue="" />
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-defaultChecked:after:translate-x-full peer-defaultChecked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-defaultChecked:bg-success-green"></div>
</label>
</div>
<div className="border-t border-surface-container-high pt-stack-lg mt-section-gap">
<h4 className="font-headline-sm text-headline-sm text-error mb-stack-md">Danger Zone</h4>
<div className="flex items-center gap-stack-md">
<button className="border border-error text-error hover:bg-error-container px-6 py-2 rounded-[20px] font-label-md text-label-md transition-colors px-8 whitespace-nowrap" type="button">
                                            Delete Account
                                        </button>
<p className="font-label-sm text-label-sm text-error/70">This action is permanent and cannot be undone.</p>
</div>
</div>
<div className="pt-section-gap flex justify-end">
<button className="bg-success-green hover:bg-secondary text-pure-white px-8 py-3 rounded-[20px] font-label-md text-label-md transition-colors shadow-md" type="button">
                                        Save Changes
                                    </button>
</div>
</form>
</div>
</div>
</div>
</div>

      </div>
    </SharedLayout>
  );
}
