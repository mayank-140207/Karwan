import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';

export default function SignupStep2Page() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Password strength calculation
  const getStrengthLevel = () => {
    if (!password) return 0;
    if (password.length < 4) return 1;
    if (password.length < 8) return 2;
    if (password.length >= 8 && (/[A-Z]/.test(password) || /[0-9]/.test(password))) return 4;
    return 3;
  };

  const strength = getStrengthLevel();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/auth/otp');
  };

  return (
    <AuthLayout
      title="Sign Up Step 2"
      headline="Create your verified identity."
      subline="Join an authentic network of trusted travelers with verified reputation scores."
      image="/images/auth_heritage_fort.webp"
      imageAlt="Heritage Fort Traveler in Rajasthan"
    >
      <div className="w-full">
        {/* Header */}
        <div className="mb-8 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">Step 2 of 3</span>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-2">
            Set your login credentials.
          </h1>
          <p className="text-text-gray text-sm">
            Choose a unique username and strong password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                <span className="material-symbols-outlined text-lg">alternate_email</span>
              </div>
              <input
                id="username"
                type="text"
                required
                defaultValue={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
                className="block w-full pl-11 pr-4 py-3 bg-surface border border-outline-variant rounded-xl font-body-md text-sm text-on-surface placeholder:text-text-gray/50 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Password with Strength Indicator */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                <span className="material-symbols-outlined text-lg">lock</span>
              </div>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="block w-full pl-11 pr-11 py-3 bg-surface border border-outline-variant rounded-xl font-body-md text-sm text-on-surface placeholder:text-text-gray/50 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-primary transition-colors"
                aria-label="Toggle password visibility"
              >
                <span className="material-symbols-outlined text-lg">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>

            {/* Password Strength Bar */}
            <div className="flex items-center space-x-1.5 mt-2">
              <div className={`h-1.5 w-1/4 rounded-full transition-colors ${strength >= 1 ? (strength === 1 ? 'bg-error' : 'bg-amber-400') : 'bg-surface-variant'}`}></div>
              <div className={`h-1.5 w-1/4 rounded-full transition-colors ${strength >= 2 ? (strength <= 2 ? 'bg-amber-400' : 'bg-secondary') : 'bg-surface-variant'}`}></div>
              <div className={`h-1.5 w-1/4 rounded-full transition-colors ${strength >= 3 ? 'bg-secondary' : 'bg-surface-variant'}`}></div>
              <div className={`h-1.5 w-1/4 rounded-full transition-colors ${strength >= 4 ? 'bg-secondary' : 'bg-surface-variant'}`}></div>
            </div>
            <p className="text-[11px] text-text-gray mt-1">Must be at least 8 characters.</p>
          </div>

          {/* Terms & Conditions */}
          <div className="py-2">
            <p className="text-xs text-text-gray leading-relaxed text-center">
              By joining, you agree to Karwan’s{' '}
              <Link to="/settings" className="text-secondary font-semibold hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/settings/privacy" className="text-secondary font-semibold hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl shadow-sm font-semibold text-sm text-pure-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all flex items-center justify-center gap-2"
          >
            <span>Join Karwan</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </form>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link
            to="/auth/signup-step-1"
            className="inline-flex items-center text-xs font-semibold text-primary hover:text-secondary transition-colors group"
          >
            <span className="material-symbols-outlined mr-1 text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to step 1
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
