import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';

export default function RoleSelectionPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('traveller');

  const handleContinue = () => {
    if (selectedRole === 'traveller') {
      navigate('/dashboard');
    } else {
      navigate('/partner/dashboard');
    }
  };

  return (
    <AuthLayout
      title="Select Your Role"
      headline="Welcome to Karwan."
      subline="Choose how you'll travel or serve travelers across the trusted network."
      image="/images/auth_heritage_fort.webp"
      imageAlt="Heritage traveler in India"
    >
      <div className="w-full">
        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">Account Setup</span>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-2">
            How will you use Karwan?
          </h1>
          <p className="text-text-gray text-sm">
            Select your primary role to get started. You can add the other anytime.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="space-y-4 mb-8">
          {/* Card 1: Traveller */}
          <button
            type="button"
            onClick={() => setSelectedRole('traveller')}
            className={`w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all ${
              selectedRole === 'traveller'
                ? 'bg-pure-white border-secondary ring-2 ring-secondary shadow-sm'
                : 'bg-surface border-outline-variant hover:border-secondary/50'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
              selectedRole === 'traveller' ? 'bg-secondary text-white' : 'bg-surface-container text-primary'
            }`}>
              <span className="material-symbols-outlined text-2xl">explore</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-serif font-bold text-lg text-primary">Traveller</h3>
                {selectedRole === 'traveller' && (
                  <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                )}
              </div>
              <p className="text-xs text-text-gray leading-relaxed">
                Get live fares, ground truth scores, and self-healing itineraries that adapt in real time.
              </p>
            </div>
          </button>

          {/* Card 2: Service Provider */}
          <button
            type="button"
            onClick={() => setSelectedRole('provider')}
            className={`w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all ${
              selectedRole === 'provider'
                ? 'bg-pure-white border-secondary ring-2 ring-secondary shadow-sm'
                : 'bg-surface border-outline-variant hover:border-secondary/50'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
              selectedRole === 'provider' ? 'bg-secondary text-white' : 'bg-surface-container text-primary'
            }`}>
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-serif font-bold text-lg text-primary">Service Provider</h3>
                {selectedRole === 'provider' && (
                  <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                )}
              </div>
              <p className="text-xs text-text-gray leading-relaxed">
                Build a verified reputation and earn trust karma as a guide, homestay host, or driver.
              </p>
            </div>
          </button>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleContinue}
          className="w-full py-3.5 px-6 rounded-xl bg-secondary text-pure-white font-semibold text-base hover:bg-secondary/90 transition-all shadow-sm flex items-center justify-center gap-2"
        >
          <span>Continue as {selectedRole === 'traveller' ? 'Traveller' : 'Provider'}</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>

        <p className="text-xs text-text-gray text-center mt-4">
          You can toggle roles anytime from your profile settings.
        </p>
      </div>
    </AuthLayout>
  );
}
