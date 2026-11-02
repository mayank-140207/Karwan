import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailLayout from '../../components/layout/DetailLayout';

export default function RajeshGuptaGuidePage() {
  const navigate = useNavigate();

  return (
    <DetailLayout title="Rajesh Gupta (Guide Details)">
      <div className="karwan-rajeshguptaguidepage">
        

      {/*  Breadcrumb / Back Link  */}
      <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
        <Link to="/trip/trustradar" className="hover:text-[#10233f] flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          TrustRadar Directory
        </Link>
        <span className="">/</span>
        <span className="text-[#10233f] font-semibold">Rajesh Gupta (Local Guide)</span>
      </div>

      {/*  Header Card: Exact structure as City Palace Auto Stand  */}
      <section className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/*  Guide Photo  */}
          <div className="w-full md:w-80 h-52 rounded-xl overflow-hidden relative shadow-sm flex-shrink-0 bg-gray-100">
            <img src="/images/img_2366b6b9355f.jpg" alt="Rajesh Gupta" className="w-full h-full object-cover" />
            <span className="absolute top-3 left-3 bg-[#10233f]/85 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px] text-emerald-400">badge</span>
              Govt. Certified Guide
            </span>
          </div>

          {/*  Guide Info & Trust Score  */}
          <div className="flex-1 flex flex-col justify-between w-full h-full py-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#E8F5E9] text-[#2C6E49] text-xs font-semibold px-2.5 py-1 rounded-md">Guide</span>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 border border-emerald-200">
                    <span className="material-symbols-outlined text-[13px]">check_circle</span> Verified
                  </span>
                  <span className="bg-amber-50 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-md">Heritage & Architecture</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#10233f] tracking-tight">Rajesh Gupta</h2>
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-gray-400">location_on</span>
                  Jaipur & Amber Fort Circuit, Rajasthan
                </p>
              </div>

              {/*  Circular Trust Score Badge (4.9 / Green Ring)  */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-4 border-emerald-500 bg-white shadow-sm flex items-center justify-center text-center">
                  <span className="text-xl font-bold text-[#10233f]">4.9</span>
                </div>
                <span className="text-[11px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">Trust Score</span>
              </div>
            </div>

            {/*  Stats Row: 4 key metrics  */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-5 border-t border-gray-100 text-left">
              <div>
                <span className="text-xs text-gray-400 block uppercase font-medium">Total Tours</span>
                <span className="text-xl font-bold text-[#10233f]">1,850</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block uppercase font-medium">Verifications</span>
                <span className="text-xl font-bold text-emerald-600">58 Verified</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block uppercase font-medium">Open Reports</span>
                <span className="text-xl font-bold text-gray-900">0</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block uppercase font-medium">Member Since</span>
                <span className="text-xl font-bold text-gray-800">Mar 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Two-Column Layout: Incident History (Left) + Location Map (Right)  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/*  Left Column: Incident & Verification History  */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-[#10233f]">Trust & Activity History</h3>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              Zero Unresolved Incidents
            </span>
          </div>

          <div className="space-y-3">
            {/*  Item 1: Verified Experience  */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Fair Fare & Knowledge Verified</span>
                  <span className="text-xs text-gray-400">Nov 14, 2024</span>
                </div>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                  Transparent guided tour at Amber Fort with pre-agreed pricing verified through Karwan ID QR. Historical explanations highly rated by 4 travelers.
                </p>
              </div>
            </div>

            {/*  Item 2: Resolved Anomaly  */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Resolved • Schedule Discrepancy</span>
                  <span className="text-xs text-gray-400">Sep 28, 2024</span>
                </div>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                  Amber Fort light-show timing conflict reported; guide accommodated traveler with alternative City Palace evening walk at no extra fee.
                </p>
              </div>
            </div>

            {/*  Item 3: Verified Review  */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">shield_person</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-800 uppercase tracking-wide">Anti-Scam Protection Acknowledged</span>
                  <span className="text-xs text-gray-400">Aug 10, 2024</span>
                </div>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                  Helped a solo foreign traveler avoid commission-based gem stores in Johari Bazaar and guided them to certified authentic cooperative markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  Right Column: Location & Stand Information  */}
        <section className="space-y-4">
          <h3 className="font-serif text-xl font-bold text-[#10233f]">Operating Location</h3>
          
          <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden">
            {/*  Interactive Map Graphic Mockup  */}
            <div className="h-52 bg-slate-100 relative overflow-hidden flex items-center justify-center">
              {/*  Styled Map Background SVG  */}
              <svg className="w-full h-full object-cover opacity-80" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="200" fill="#e9eff5"></rect>
                {/*  Roads  */}
                <path d="M0,60 Q120,70 180,40 T300,50" stroke="#ffffff" strokeWidth="8" fill="none"></path>
                <path d="M50,0 Q60,100 120,200" stroke="#ffffff" strokeWidth="6" fill="none"></path>
                <path d="M140,20 Q160,110 260,180" stroke="#ffffff" strokeWidth="7" fill="none"></path>
                <path d="M20,130 L280,140" stroke="#f0d59e" strokeWidth="5" fill="none"></path>
                {/*  Heritage Area Polygon  */}
                <polygon points="120,60 190,45 220,110 140,120" fill="#dbe7d4" opacity="0.7"></polygon>
                <circle cx="165" cy="85" r="32" fill="#2C6E49" opacity="0.12"></circle>
              </svg>
              
              {/*  Map Pin on Amber Fort Hub  */}
              <div className="absolute flex flex-col items-center animate-bounce">
                <div className="w-8 h-8 rounded-full bg-[#2C6E49] text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="material-symbols-outlined text-[18px]">person_pin_circle</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-black/30 mt-1 blur-[1px]"></div>
              </div>

              <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-gray-700 px-2 py-0.5 rounded shadow-sm">
                Jaipur Heritage Zone
              </div>
            </div>

            {/*  Address Details  */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-gray-500 text-[20px] mt-0.5">signpost</span>
                <div>
                  <h4 className="text-sm font-bold text-[#10233f]">Primary Meeting Point</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Jaleb Chowk, Near Ticket Window, Amber Fort</p>
                  <p className="text-xs text-gray-400 mt-0.5">Jaipur, Rajasthan, 302001</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500">Official Badge #</span>
                <span className="font-mono font-semibold text-[#10233f]">RTDC-JPR-4892</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/*  Bottom Flagging / Report Banner (Matching exact dark-navy style)  */}
      <section className="bg-[#10233f] text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-serif text-xl font-bold tracking-wide">See something that needs flagging?</h4>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
            Help keep the Karwan community safe by reporting suspicious activity, fare disputes, or verifying good experiences with this guide.
          </p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-[#10233f] font-bold text-sm flex items-center gap-2 shadow-md transition active:scale-95 flex-shrink-0">
          <span className="material-symbols-outlined text-[18px]">flag</span>
          Report Now
        </button>
      </section>

    
      </div>
    </DetailLayout>
  );
}
