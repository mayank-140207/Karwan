import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import BrandIcon from '../../components/common/BrandIcon';

export default function SignupStep1Page() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/auth/signup-step-2');
  };

  return (
    <AuthLayout
      title="Karwan - Sign Up"
      headline="Welcome to Karwan."
      subline="Join a community of 50,000+ trusted travelers and local experts across India."
      image="/images/auth_heritage_fort.webp"
      imageAlt="Heritage Fort Traveler in Rajasthan at Golden Hour"
    >
      <div className="w-full">
        {/* Header */}
        <div className="mb-8 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">Step 1 of 3</span>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-2">
            Create your Karwan account.
          </h1>
          <p className="text-text-gray text-sm">
            Please enter your details to sign up.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleContinue} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="email">Email address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-gray/70">
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              <input
                id="email"
                type="email"
                required
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-xl font-body-md text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors placeholder:text-text-gray/50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-secondary text-pure-white rounded-xl font-label-md text-sm font-semibold hover:bg-secondary/90 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <span>Continue</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-4 bg-pure-white text-text-gray uppercase tracking-wider font-medium">or</span>
          </div>
        </div>

        {/* Social Sign In */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => navigate('/auth/signup-step-2')}
            className="w-full py-3 px-6 bg-pure-white border border-outline-variant text-primary rounded-xl font-label-md text-xs font-semibold hover:bg-surface hover:border-outline transition-colors flex items-center justify-center gap-3"
          >
            <BrandIcon name="google" />
            <span>Continue with Google</span>
          </button>
          <button
            type="button"
            onClick={() => navigate('/auth/signup-step-2')}
            className="w-full py-3 px-6 bg-pure-white border border-outline-variant text-primary rounded-xl font-label-md text-xs font-semibold hover:bg-surface hover:border-outline transition-colors flex items-center justify-center gap-3"
          >
            <BrandIcon name="apple" mode="light" />
            <span>Continue with Apple</span>
          </button>
        </div>

        {/* Bottom Link to Login */}
        <div className="mt-8 text-center">
          <p className="text-text-gray text-xs">
            Already have an account?{' '}
            <Link to="/login" className="text-secondary font-bold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
