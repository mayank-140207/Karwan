import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailLayout from '../../components/layout/DetailLayout';

export default function PartnerKycStep3Page() {
  const navigate = useNavigate();

  return (
    <DetailLayout title="Partner KYC - Step 3 (Review)">
      <div className="karwan-partnerkycstep3page">
        
<div className="w-full max-w-2xl bg-pure-white rounded-[20px] shadow-[0_12px_24px_rgba(0,13,35,0.08)] overflow-hidden relative border border-surface-container">
{/*  Top Green Accent Bar  */}
<div className="absolute top-0 left-0 w-full h-2 bg-success-green"></div>
<div className="p-stack-lg md:p-8 pt-10">
{/*  Step Indicator  */}
<div className="flex items-center justify-center mb-10 space-x-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-success-green text-pure-white flex items-center justify-center font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined filled text-[18px]">check</span>
</div>
<span className="mt-2 font-label-sm text-label-sm text-success-green">Details</span>
</div>
<div className="w-12 h-[2px] bg-success-green -mt-6"></div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-success-green text-pure-white flex items-center justify-center font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined filled text-[18px]">check</span>
</div>
<span className="mt-2 font-label-sm text-label-sm text-success-green">Documents</span>
</div>
<div className="w-12 h-[2px] bg-surface-container-high -mt-6"></div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary text-pure-white flex items-center justify-center font-label-md text-label-md shadow-sm border-2 border-primary ring-4 ring-primary/10">
                            3
                        </div>
<span className="mt-2 font-label-sm text-label-sm text-primary font-bold">Review</span>
</div>
</div>
{/*  Heading  */}
<div className="text-center mb-stack-lg">
<h1 className="font-headline-md text-headline-md text-primary mb-2 hidden md:block">Review Your Application</h1>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2 md:hidden">Review Application</h1>
<p className="font-body-md text-body-md text-text-gray">Please review your submitted information before final approval.</p>
</div>
{/*  Summary Section  */}
<div className="space-y-stack-md mb-stack-lg">
{/*  Business Details Recap  */}
<div className="bg-surface p-stack-md rounded-xl border border-surface-container-highest">
<div className="flex justify-between items-center mb-4 border-b border-surface-container pb-2">
<h3 className="font-label-md text-label-md text-primary">Business Details</h3>
<button className="font-label-sm text-label-sm text-success-green hover:text-success-green/80 flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">edit</span> Edit
                            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
<div>
<p className="font-label-sm text-label-sm text-text-gray mb-1">Business Type</p>
<p className="font-body-md text-body-md text-primary">Tour Operator</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-text-gray mb-1">Business Name</p>
<p className="font-body-md text-body-md text-primary">Highland Treks Ltd.</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-text-gray mb-1">Location</p>
<p className="font-body-md text-body-md text-primary">Kathmandu, Nepal</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-text-gray mb-1">Experience</p>
<p className="font-body-md text-body-md text-primary">5-10 Years</p>
</div>
</div>
</div>
{/*  Documents Recap  */}
<div className="bg-surface p-stack-md rounded-xl border border-surface-container-highest">
<div className="flex justify-between items-center mb-4 border-b border-surface-container pb-2">
<h3 className="font-label-md text-label-md text-primary">Documents Submitted</h3>
<button className="font-label-sm text-label-sm text-success-green hover:text-success-green/80 flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">edit</span> Edit
                            </button>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-success-green filled">check_circle</span>
<span className="font-body-md text-body-md text-primary truncate flex-grow">Business_Registration_Certificate.pdf</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-success-green filled">check_circle</span>
<span className="font-body-md text-body-md text-primary truncate flex-grow">Director_ID_Scan.jpg</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-success-green filled">check_circle</span>
<span className="font-body-md text-body-md text-primary truncate flex-grow">Liability_Insurance_Policy.pdf</span>
</li>
</ul>
</div>
</div>
{/*  Terms Confirmation  */}
<div className="mb-stack-lg flex items-start gap-3">
<div className="flex items-center h-6">
<input className="w-5 h-5 rounded border-outline-variant text-success-green focus:ring-success-green bg-pure-white transition-colors cursor-pointer" id="terms" type="checkbox" />
</div>
<label className="font-body-md text-body-md text-text-gray cursor-pointer" htmlFor="terms">
                        I confirm this information is accurate and I agree to Karwan's Partner Terms of Service.
                    </label>
</div>
{/*  Actions  */}
<div className="flex flex-col-reverse md:flex-row gap-4 mb-4">
<button className="w-full md:w-auto px-6 py-3 rounded-[20px] border border-primary text-primary font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center justify-center">
                        Back
                    </button>
<button className="w-full md:flex-1 px-6 py-3 rounded-[20px] bg-success-green text-pure-white font-label-md text-label-md hover:bg-[#23583a] transition-colors shadow-sm flex items-center justify-center">
                        Submit for Verification
                    </button>
</div>
{/*  Footer Note  */}
<p className="font-label-sm text-label-sm text-text-gray text-center max-w-sm mx-auto">
                    You'll be notified once your verification is complete — usually within 24-48 hours.
                </p>
</div>
</div>

      </div>
    </DetailLayout>
  );
}
