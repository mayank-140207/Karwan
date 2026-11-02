import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailLayout from '../../components/layout/DetailLayout';

export default function PartnerKycStep2Page() {
  const navigate = useNavigate();

  return (
    <DetailLayout title="Partner KYC - Step 2 (Documents)">
      <div className="karwan-partnerkycstep2page">
        
{/*  Verification Card  */}
<div className="bg-pure-white rounded-xl soft-shadow overflow-hidden relative">
{/*  Top Accent Bar  */}
<div className="h-2 w-full bg-success-green absolute top-0 left-0"></div>
<div className="p-stack-lg md:p-[32px] pt-[40px]">
{/*  Step Indicator  */}
<div className="flex items-center justify-center mb-stack-lg">
<div className="flex items-center space-x-4 w-full max-w-sm">
{/*  Step 1: Details (Completed)  */}
<div className="flex flex-col items-center flex-1">
<div className="w-8 h-8 rounded-full bg-success-green text-pure-white flex items-center justify-center mb-2">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<span className="font-label-sm text-label-sm text-success-green">Details</span>
</div>
<div className="flex-1 h-px bg-success-green opacity-50 mb-6"></div>
{/*  Step 2: Documents (Active)  */}
<div className="flex flex-col items-center flex-1">
<div className="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center mb-2 font-label-md text-label-md">
                                2
                            </div>
<span className="font-label-sm text-label-sm text-primary">Documents</span>
</div>
<div className="flex-1 h-px bg-outline-variant mb-6"></div>
{/*  Step 3: Review (Inactive)  */}
<div className="flex flex-col items-center flex-1">
<div className="w-8 h-8 rounded-full border-2 border-outline-variant text-outline-variant flex items-center justify-center mb-2 font-label-md text-label-md">
                                3
                            </div>
<span className="font-label-sm text-label-sm text-outline-variant">Review</span>
</div>
</div>
</div>
{/*  Header  */}
<div className="text-center mb-stack-lg">
<h1 className="font-headline-md text-headline-md text-primary mb-stack-sm">Upload Your Documents</h1>
<p className="font-body-md text-body-md text-text-gray max-w-lg mx-auto">We use these to verify your identity and business — this typically takes 24-48 hours.</p>
</div>
{/*  Upload Blocks Grid  */}
<div className="grid grid-cols-1 gap-stack-md mb-stack-lg">
{/*  Block 1: Government ID  */}
<div className="border-2 border-dashed border-outline-variant rounded-lg p-stack-md flex flex-col items-center justify-center text-center bg-surface transition-colors hover:bg-surface-bright hover:border-primary cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-primary mb-stack-sm group-hover:bg-primary-container group-hover:text-pure-white transition-colors">
<span className="material-symbols-outlined">badge</span>
</div>
<h3 className="font-label-md text-label-md text-primary mb-1">Government ID</h3>
<p className="font-body-md text-body-md text-text-gray mb-2">(Aadhaar/PAN/Driving License)</p>
<p className="font-label-sm text-label-sm text-outline mb-stack-md">Accepted: JPG, PNG, PDF (max 5MB)</p>
<button className="font-label-md text-label-md text-primary border border-primary rounded-[20px] px-4 py-2 hover:bg-primary hover:text-pure-white transition-colors" type="button">
                            + Upload File
                        </button>
</div>
{/*  Block 2: Business Proof  */}
<div className="border-2 border-dashed border-outline-variant rounded-lg p-stack-md flex flex-col items-center justify-center text-center bg-surface transition-colors hover:bg-surface-bright hover:border-primary cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-primary mb-stack-sm group-hover:bg-primary-container group-hover:text-pure-white transition-colors">
<span className="material-symbols-outlined">storefront</span>
</div>
<h3 className="font-label-md text-label-md text-primary mb-1">Business Proof</h3>
<p className="font-body-md text-body-md text-text-gray mb-2">(License, GST, or Registration)</p>
<p className="font-label-sm text-label-sm text-outline mb-stack-md">Accepted: JPG, PNG, PDF (max 5MB)</p>
<button className="font-label-md text-label-md text-primary border border-primary rounded-[20px] px-4 py-2 hover:bg-primary hover:text-pure-white transition-colors" type="button">
                            + Upload File
                        </button>
</div>
{/*  Block 3: Recent Photo  */}
<div className="border-2 border-dashed border-outline-variant rounded-lg p-stack-md flex flex-col items-center justify-center text-center bg-surface transition-colors hover:bg-surface-bright hover:border-primary cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-primary mb-stack-sm group-hover:bg-primary-container group-hover:text-pure-white transition-colors">
<span className="material-symbols-outlined">account_circle</span>
</div>
<h3 className="font-label-md text-label-md text-primary mb-1">A Recent Photo</h3>
<p className="font-body-md text-body-md text-text-gray mb-2">(for your TrustRadar profile)</p>
<p className="font-label-sm text-label-sm text-outline mb-stack-md">Accepted: JPG, PNG (max 5MB)</p>
<button className="font-label-md text-label-md text-primary border border-primary rounded-[20px] px-4 py-2 hover:bg-primary hover:text-pure-white transition-colors" type="button">
                            + Upload File
                        </button>
</div>
</div>
{/*  Info Box  */}
<div className="bg-[#10233F]/5 border border-[#10233F]/10 rounded-lg p-stack-md flex items-start space-x-stack-sm mb-stack-lg">
<span className="material-symbols-outlined text-primary-container mt-0.5">lock</span>
<p className="font-body-md text-body-md text-primary-container">
                        Your documents are encrypted and only used for verification — never shown publicly.
                    </p>
</div>
{/*  Footer Actions  */}
<div className="flex flex-col sm:flex-row justify-between items-center pt-stack-md border-t border-outline-variant gap-stack-md">
<button className="w-full sm:w-auto font-label-md text-label-md text-primary border border-primary rounded-[20px] px-8 py-3 hover:bg-primary hover:text-pure-white transition-colors" type="button">
                        Back
                    </button>
<button className="w-full sm:w-auto font-label-md text-label-md text-pure-white bg-success-green rounded-[20px] px-8 py-3 hover:bg-[#205236] transition-colors shadow-sm" type="button">
                        Next: Review
                    </button>
</div>
</div>
</div>

      </div>
    </DetailLayout>
  );
}
