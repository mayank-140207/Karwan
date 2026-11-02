import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function NotificationsPage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Notifications">
      <div className="karwan-notificationspage">
        
{/*  TopAppBar  */}
<header className="bg-surface/80 dark:bg-surface-container/80 backdrop-blur-md text-on-surface dark:text-on-surface-variant font-label-md text-label-md sticky top-0 z-40 shadow-sm flex justify-between items-center w-full px-margin-desktop py-stack-md">
{/*  Mobile Brand / Search Area  */}
<div className="flex items-center gap-4 flex-1">
<span className="md:hidden font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Karwan</span>
<div className="hidden md:flex relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-gray" data-icon="search">search</span>
<input className="w-full bg-surface-container-low border border-text-gray/20 rounded-full py-2 pl-10 pr-4 text-body-md focus:outline-none focus:border-primary transition-colors" placeholder="Search..." type="text" />
</div>
</div>
{/*  Actions  */}
<div className="flex items-center gap-4">
<button className="text-primary dark:text-primary-fixed border-b-2 border-primary hover:text-primary transition-colors opacity-80 active:opacity-100 p-2">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary transition-colors opacity-80 active:opacity-100 p-2">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<img alt="Traveler Profile" className="w-10 h-10 rounded-full border-2 border-pure-white shadow-sm object-cover ml-2" data-alt="A professional headshot of a traveler in a modern, brightly lit airport terminal, wearing a neutral colored jacket. The image has a clean, high-contrast editorial look with soft background blur, fitting a premium travel tech platform." src="/images/img_c6e3c40c7b5a.jpg" />
</div>
</header>
{/*  Page Content  */}
<div className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto space-y-stack-lg">
{/*  Page Header  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Notifications</h2>
<button className="text-success-green font-label-md text-label-md hover:text-secondary transition-colors text-left sm:text-right self-start sm:self-center">
                    Mark all as read
                </button>
</div>
{/*  Filters  */}
<div className="flex overflow-x-auto pb-2 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 gap-3 no-scrollbar">
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-primary text-pure-white font-label-md text-label-md transition-colors">
                    All
                </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-low text-text-gray hover:bg-surface-container-highest transition-colors font-label-md text-label-md">
                    Trust Alerts
                </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-low text-text-gray hover:bg-surface-container-highest transition-colors font-label-md text-label-md">
                    Trip Updates
                </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-low text-text-gray hover:bg-surface-container-highest transition-colors font-label-md text-label-md">
                    Reports
                </button>
</div>
{/*  Notifications List  */}
<div className="space-y-4">
{/*  Unread Notification 1  */}
<div className="bg-pure-white rounded-[20px] p-stack-md sm:p-stack-lg shadow-[0_2px_8px_rgba(0,13,35,0.04)] border-l-4 border-success-green relative overflow-hidden transition-all hover:shadow-[0_4px_16px_rgba(0,13,35,0.06)] cursor-pointer flex gap-4">
<div className="w-3 h-3 rounded-full bg-success-green absolute top-stack-lg right-stack-lg"></div>
<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary" data-icon="refresh">refresh</span>
</div>
<div className="flex-1 pr-6">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-sm text-label-sm text-text-gray uppercase tracking-wider">Trip Update</span>
<span className="font-label-sm text-label-sm text-text-gray/50">• 2m ago</span>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface font-medium">Route updated — Fort closes early today</h3>
<p className="font-body-md text-body-md text-text-gray mt-1">Your planned route has been automatically adjusted to accommodate new operating hours at the historic site.</p>
</div>
</div>
{/*  Unread Notification 2  */}
<div className="bg-pure-white rounded-[20px] p-stack-md sm:p-stack-lg shadow-[0_2px_8px_rgba(0,13,35,0.04)] border-l-4 border-success-green relative overflow-hidden transition-all hover:shadow-[0_4px_16px_rgba(0,13,35,0.06)] cursor-pointer flex gap-4">
<div className="w-3 h-3 rounded-full bg-success-green absolute top-stack-lg right-stack-lg"></div>
<div className="w-12 h-12 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-success-green" data-icon="shield">shield</span>
</div>
<div className="flex-1 pr-6">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-sm text-label-sm text-text-gray uppercase tracking-wider">Trust Alert</span>
<span className="font-label-sm text-label-sm text-text-gray/50">• 15m ago</span>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface font-medium">New incident reported near City Palace Auto Stand</h3>
<p className="font-body-md text-body-md text-text-gray mt-1">A minor congestion event has been verified by the community. We recommend taking the alternate route suggested in LiveTrail.</p>
</div>
</div>
{/*  Read Notification 1  */}
<div className="bg-pure-white rounded-[20px] p-stack-md sm:p-stack-lg shadow-[0_2px_8px_rgba(0,13,35,0.02)] transition-all hover:shadow-[0_4px_16px_rgba(0,13,35,0.04)] cursor-pointer flex gap-4 opacity-80">
<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-text-gray" data-icon="flag">flag</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-sm text-label-sm text-text-gray uppercase tracking-wider">Report</span>
<span className="font-label-sm text-label-sm text-text-gray/50">• 2h ago</span>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface/80">Your report on Route 12B was verified</h3>
<p className="font-body-md text-body-md text-text-gray mt-1">Thank you for contributing to Ground Truth. Your report has helped 14 other travelers today.</p>
</div>
</div>
{/*  Read Notification 2  */}
<div className="bg-pure-white rounded-[20px] p-stack-md sm:p-stack-lg shadow-[0_2px_8px_rgba(0,13,35,0.02)] transition-all hover:shadow-[0_4px_16px_rgba(0,13,35,0.04)] cursor-pointer flex gap-4 opacity-80">
<div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-text-gray" data-icon="shield">shield</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-sm text-label-sm text-text-gray uppercase tracking-wider">Trust Alert</span>
<span className="font-label-sm text-label-sm text-text-gray/50">• 1d ago</span>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface/80">Trust score updated for Rambaba Guides</h3>
<p className="font-body-md text-body-md text-text-gray mt-1">Based on recent community feedback, this service provider's rating has been adjusted to ensure accuracy.</p>
</div>
</div>
</div>
{/*  Load More / End state  */}
<div className="text-center py-stack-lg">
<p className="font-body-md text-body-md text-text-gray">You're all caught up for the last 30 days.</p>
</div>
</div>

      </div>
    </SharedLayout>
  );
}
