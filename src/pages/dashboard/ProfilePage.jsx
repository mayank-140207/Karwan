import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/layout/SharedLayout';

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <SharedLayout title="Your Profile (KARWAN ID)">
      <div className="karwan-profilepage">
        
<div className="max-w-container-max mx-auto px-4">
{/*  Page Title  */}
<div className="mb-stack-lg">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">KARWAN ID</h1>
<p className="font-body-md text-text-gray mt-2">Manage your verified traveler profile and reputation.</p>
</div>
{/*  Profile Header Card (Glassmorphism/Bento feel)  */}
<div className="bg-pure-white rounded-xl ambient-shadow p-stack-lg md:p-margin-desktop flex flex-col md:flex-row items-center md:items-start gap-stack-lg mb-section-gap relative overflow-hidden border border-surface-container-lowest">
{/*  Avatar  */}
<div className="relative shrink-0">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-surface shadow-sm relative z-10">
<img alt="Arjun Singh Profile Picture" className="w-full h-full object-cover" data-alt="A high-quality, professional headshot of a modern Indian male traveler in his early 30s. He has a warm, confident smile and is wearing casual but premium outdoor travel gear. The background is a brightly lit, modern architectural space with a soft light-mode aesthetic, utilizing clean whites and very subtle neutral tones. The mood is friendly, reliable, and adventurous, matching a premium travel service." src="/images/img_6890a867db12.jpg" />
</div>
{/*  Decorative background blur  */}
<div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full z-0 transform scale-110 translate-y-2"></div>
</div>
{/*  Info  */}
<div className="flex-1 text-center md:text-left flex flex-col justify-center mt-2 md:mt-4 z-10">
<h2 className="font-headline-md text-headline-md text-primary mb-1">Arjun Singh</h2>
<p className="font-body-md text-text-gray mb-4 flex items-center justify-center md:justify-start gap-1">
<span className="material-symbols-outlined text-sm">calendar_month</span>
                        Member since Jan 2024
                    </p>
<div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
<span className="bg-secondary/10 text-secondary font-label-md text-label-md px-4 py-1.5 rounded-full flex items-center gap-1 border border-secondary/20">
<span className="material-symbols-outlined text-[16px] icon-fill">verified</span>
                            Verified Traveller
                        </span>
<span className="bg-primary/5 text-primary font-label-md text-label-md px-4 py-1.5 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">map</span>
                            Rajasthan Explorer
                        </span>
</div>
</div>
{/*  Trust Score Ring  */}
<div className="mt-6 md:mt-0 flex flex-col items-center justify-center shrink-0 z-10 bg-surface-bright rounded-2xl p-6 border-surface-container-highest">
<h3 className="font-label-md text-label-md text-primary mb-4 uppercase tracking-wider">Trust Score</h3>
<div className="relative w-28 h-28 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
{/*  Background Track  */}
<path className="text-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="2.5"></path>
{/*  Progress Arc (4.9/5 approx 98%)  */}
<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="98, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="font-headline-md text-headline-md text-primary">4.9</span>
<span className="font-label-sm text-label-sm text-text-gray -mt-1">/ 5.0</span>
</div>
</div>
</div>
</div>
{/*  Stats Row  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-section-gap">
{/*  Stat Card 1  */}
<div className="bg-pure-white rounded-xl ambient-shadow p-stack-lg flex items-center gap-5 border border-surface-container-lowest transition-transform hover:-translate-y-1 duration-300">
<div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[28px]">route</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-primary mb-1">12</div>
<div className="font-body-md text-text-gray">Trips Completed</div>
</div>
</div>
{/*  Stat Card 2  */}
<div className="bg-pure-white rounded-xl ambient-shadow p-stack-lg flex items-center gap-5 border border-surface-container-lowest transition-transform hover:-translate-y-1 duration-300">
<div className="w-14 h-14 rounded-full bg-error/10 flex items-center justify-center text-error shrink-0">
<span className="material-symbols-outlined text-[28px]">report</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-primary mb-1">8</div>
<div className="font-body-md text-text-gray">Incidents Reported</div>
</div>
</div>
{/*  Stat Card 3  */}
<div className="bg-pure-white rounded-xl ambient-shadow p-stack-lg flex items-center gap-5 border border-surface-container-lowest transition-transform hover:-translate-y-1 duration-300">
<div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[28px] icon-fill">how_to_reg</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-primary mb-1">45</div>
<div className="font-body-md text-text-gray">Verifications Given</div>
</div>
</div>
</div>
{/*  Tabs Navigation  */}
<div className="flex gap-8 border-b border-surface-container-high mb-stack-lg overflow-x-auto no-scrollbar">
<button className="py-4 font-label-md text-label-md text-secondary border-b-2 border-secondary whitespace-nowrap">
                    Activity
                </button>
<button className="py-4 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">
                    Saved Places
                </button>
<button className="py-4 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">
                    Settings
                </button>
</div>
{/*  Activity List  */}
<div className="flex flex-col gap-stack-md max-w-4xl">
{/*  Activity Item 1  */}
<div className="bg-pure-white rounded-xl ambient-shadow p-stack-md flex flex-col md:flex-row md:items-center gap-4 border border-surface-container-lowest transition-all hover:border-surface-container-high cursor-default">
<div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[24px]">gavel</span>
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-primary mb-1">Verified Auto Fare for Route 12B</h4>
<p className="font-body-md text-text-gray text-sm">Helped maintain accurate pricing for the community network.</p>
</div>
<div className="font-label-sm text-label-sm text-outline shrink-0 md:text-right mt-2 md:mt-0">
                        Today, 10:30 AM
                    </div>
</div>
{/*  Activity Item 2  */}
<div className="bg-pure-white rounded-xl ambient-shadow p-stack-md flex flex-col md:flex-row md:items-center gap-4 border border-surface-container-lowest transition-all hover:border-surface-container-high cursor-default">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[24px]">local_taxi</span>
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-primary mb-1">Completed Jaipur Heritage Trip</h4>
<p className="font-body-md text-text-gray text-sm">Successfully defaultChecked in to 4 verified waypoints.</p>
</div>
<div className="font-label-sm text-label-sm text-outline shrink-0 md:text-right mt-2 md:mt-0">
                        Oct 12, 2024
                    </div>
</div>
{/*  Activity Item 3  */}
<div className="bg-pure-white rounded-xl ambient-shadow p-stack-md flex flex-col md:flex-row md:items-center gap-4 border border-surface-container-lowest transition-all hover:border-surface-container-high cursor-default">
<div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center text-error shrink-0">
<span className="material-symbols-outlined text-[24px]">report_problem</span>
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-primary mb-1">Reported Fare Spike at Fort Gate</h4>
<p className="font-body-md text-text-gray text-sm">Alert triggered Ground Truth verification for other travelers.</p>
</div>
<div className="font-label-sm text-label-sm text-outline shrink-0 md:text-right mt-2 md:mt-0">
                        Oct 10, 2024
                    </div>
</div>
{/*  Activity Item 4  */}
<div className="bg-pure-white rounded-xl ambient-shadow p-stack-md flex flex-col md:flex-row md:items-center gap-4 border border-surface-container-lowest transition-all hover:border-surface-container-high cursor-default opacity-80">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-text-gray shrink-0">
<span className="material-symbols-outlined text-[24px]">how_to_reg</span>
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-primary mb-1">Earned 'Traveller' Badge</h4>
<p className="font-body-md text-text-gray text-sm">Reached 10 completed trips milestone.</p>
</div>
<div className="font-label-sm text-label-sm text-outline shrink-0 md:text-right mt-2 md:mt-0">
                        Sep 28, 2024
                    </div>
</div>
<div className="mt-4 text-center">
<button className="font-label-md text-label-md text-primary hover:text-secondary transition-colors inline-flex items-center gap-2">
                        View Full History <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
</button>
</div>
</div>
</div>

      </div>
    </SharedLayout>
  );
}
