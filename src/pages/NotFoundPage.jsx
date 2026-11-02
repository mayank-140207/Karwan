import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/common/Logo';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md">
      {/* 404 Header with Logo */}
      <header className="w-full bg-pure-white h-20 flex items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto shadow-sm sticky top-0 z-50">
        <div className="flex items-center">
          <Logo variant="color" size="md" to="/" />
        </div>
      </header>

      {/* Main Centered 404 Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="text-center flex flex-col items-center max-w-lg">
          <h1 className="font-display-lg text-display-lg text-primary mb-2 tracking-tight">404</h1>
          <div className="w-16 h-1 bg-secondary rounded-full mb-8"></div>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">Looks like this route doesn't exist</h2>
          <p className="font-body-lg text-body-lg text-text-gray mb-10 max-w-md mx-auto">
            The page you're looking for may have moved or the trail went cold
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-secondary hover:bg-on-secondary-container text-on-primary font-label-md text-label-md px-8 py-3 rounded-[20px] transition-colors shadow-[0_2px_8px_rgba(0,13,35,0.08)]"
          >
            Back to Home
          </Link>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-4 text-center text-xs text-text-gray border-t border-surface-container">
        <span>© 2026 Karwan. Travel with the trust of a local.</span>
      </footer>
    </div>
  );
}
