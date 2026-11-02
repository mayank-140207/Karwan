import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import BrandIcon from '../../components/common/BrandIcon';

export default function ImmersiveLoginPage() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('arjun.verma@example.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <AuthLayout
      title="Log in to Karwan"
      headline="Embark on your journey with Karwan."
      subline="Connect with the largest community of explorers and professionals worldwide."
      image="/images/auth_taj_mahal.webp"
      imageAlt="Taj Mahal at sunrise, Golden Hour travel photography"
    >
      <div className="w-full">
        {/* Minimal Back Button */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-8 group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Login Header */}
        <div className="mb-8">
          <h1 className="text-on-surface font-serif text-3xl md:text-4xl font-bold mb-2">
            Log in to Karwan.
          </h1>
          <p className="text-on-surface-variant text-sm">
            Welcome back to the community.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email/Username Field */}
          <div className="space-y-1.5">
            <label className="text-on-surface text-sm font-medium block">
              Email or Username
            </label>
            <input
              type="text"
              defaultValue={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-outline-variant bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline text-sm"
              placeholder="Enter your email or username"
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="text-on-surface text-sm font-medium block">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-outline-variant bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline text-sm pr-12"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-outline hover:text-on-surface-variant transition-colors"
                aria-label="Toggle password visibility"
              >
                <span className="material-symbols-outlined text-xl">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            <div className="flex justify-end pt-1">
              <Link to="/auth/otp" className="text-secondary text-xs font-semibold hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="w-full h-12 bg-secondary text-pure-white rounded-xl font-bold text-base hover:bg-secondary/90 active:scale-[0.98] transition-all shadow-md shadow-secondary/20 flex items-center justify-center gap-2"
          >
            <span>Log In</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>

          {/* Divider */}
          <div className="relative py-2 flex items-center">
            <div className="flex-grow border-t border-outline-variant"></div>
            <span className="flex-shrink mx-4 text-outline text-xs uppercase tracking-widest font-medium">or</span>
            <div className="flex-grow border-t border-outline-variant"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="flex-1 h-11 flex items-center justify-center gap-2.5 border border-outline-variant rounded-xl hover:bg-surface-container transition-colors text-xs font-semibold text-on-surface"
            >
              <BrandIcon name="google" />
              <span>Google</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="flex-1 h-11 flex items-center justify-center gap-2.5 border border-outline-variant rounded-xl hover:bg-surface-container transition-colors text-xs font-semibold text-on-surface"
            >
              <BrandIcon name="apple" mode="light" />
              <span>Apple</span>
            </button>
          </div>
        </form>

        {/* Bottom Redirect */}
        <div className="mt-8 text-center">
          <p className="text-on-surface-variant text-xs">
            New to Karwan?{' '}
            <Link to="/auth/signup-step-1" className="text-secondary font-bold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
