import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';

export default function OtpVerificationPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['4', '8', '2', '9', '1', '0']);
  const inputsRef = useRef([]);

  const handleChange = (val, idx) => {
    const newOtp = [...otp];
    newOtp[idx] = val.slice(-1);
    setOtp(newOtp);
    if (val && idx < 5) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/auth/role-selection');
  };

  return (
    <AuthLayout
      title="Verify OTP"
      headline="Verify Your KARWAN ID."
      subline="Your immutable proof of identity and local reputation score on the Karwan trust network."
      image="/images/auth_stepwell_baoli.webp"
      imageAlt="Ancient Indian Stepwell Baoli with intricate carvings"
    >
      <div className="w-full">
        {/* Header */}
        <div className="mb-6 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">Step 3 of 3</span>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-2">
            Verify Your KARWAN ID.
          </h1>
          <p className="text-text-gray text-sm">
            We've sent a 6-digit code to <span className="font-semibold text-primary">+91 98765 43210</span>.
          </p>
        </div>

        {/* OTP Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP 6-Digit Inputs */}
          <div className="flex justify-between gap-2 sm:gap-3 my-4">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (inputsRef.current[idx] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                defaultValue={digit}
                onChange={(e) => handleChange(e.target.value, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="w-11 h-14 sm:w-14 sm:h-16 text-center font-serif text-2xl font-bold text-primary bg-surface border border-outline-variant rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none transition-colors"
                autoFocus={idx === 0}
              />
            ))}
          </div>

          {/* Resend & Change Phone */}
          <div className="flex items-center justify-between text-xs text-text-gray">
            <p>
              Didn't receive it?{' '}
              <button type="button" className="text-secondary font-bold hover:underline">
                Resend code now
              </button>
            </p>
            <Link to="/auth/signup-step-1" className="text-primary hover:text-secondary transition-colors font-medium">
              Change Phone Number
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary/90 text-pure-white font-semibold text-base py-3.5 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <span>Verify & Continue</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-surface-variant"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-pure-white text-text-gray">or</span>
          </div>
        </div>

        {/* DigiLocker Banner */}
        <div className="bg-surface-container-low rounded-xl p-4 border border-surface-variant flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pure-white rounded-full flex items-center justify-center shadow-sm text-secondary shrink-0">
              <span className="material-symbols-outlined text-xl">verified_user</span>
            </div>
            <div>
              <p className="text-xs font-bold text-primary">DigiLocker Fast-Track</p>
              <p className="text-[11px] text-text-gray">Verify instantly with Aadhaar XML</p>
            </div>
          </div>
          <Link
            to="/auth/role-selection"
            className="text-xs font-semibold text-secondary hover:underline shrink-0"
          >
            Use DigiLocker →
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
