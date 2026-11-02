import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';

export default function DetailLayout({ 
  children, 
  title, 
  subtitle, 
  breadcrumbs = [], 
  backUrl,
  actions,
  badge
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backUrl) {
      navigate(backUrl);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      {/* 1. Detail Top Bar */}
      <header className="sticky top-0 z-40 bg-pure-white/95 backdrop-blur-md border-b border-surface-container-high transition-all shadow-sm">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16 flex items-center justify-between">
          
          {/* Back & Logo & Breadcrumbs */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handleBack}
              className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-primary transition-colors"
              title="Go back"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
            </button>

            <Logo variant="color" size="sm" to="/" className="hidden xs:inline-flex" />

            <div className="hidden sm:flex items-center gap-2 text-xs text-text-gray pl-2 border-l border-surface-container">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              {breadcrumbs.map((b, i) => (
                <React.Fragment key={i}>
                  <span>/</span>
                  {b.path ? (
                    <Link to={b.path} className="hover:text-primary transition-colors">{b.label}</Link>
                  ) : (
                    <span className="text-primary font-medium">{b.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {title && (
              <span className="sm:hidden font-serif font-bold text-sm text-primary truncate max-w-[160px]">
                {title}
              </span>
            )}
          </div>

          {/* Title in center on desktop if given */}
          {title && (
            <div className="hidden md:flex items-center gap-2">
              <span className="font-serif font-bold text-base text-primary">
                {title}
              </span>
              {badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-semibold text-[11px]">
                  {badge}
                </span>
              )}
            </div>
          )}

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {actions}
            <Link 
              to="/directory" 
              className="p-2 rounded-full text-text-gray hover:text-primary hover:bg-surface-container transition-colors"
              title="Back to Directory"
            >
              <span className="material-symbols-outlined text-xl">search</span>
            </Link>
            <Link 
              to="/dashboard" 
              className="w-8 h-8 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary font-bold text-xs"
              title="Dashboard"
            >
              AV
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Subheader if subtitle exists */}
      {subtitle && (
        <div className="bg-surface-container-low border-b border-surface-container py-3 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto flex items-center justify-between">
            <p className="text-xs text-text-gray">{subtitle}</p>
          </div>
        </div>
      )}

      {/* 3. Main Detail Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* 4. Minimal Detail Footer */}
      <footer className="border-t border-surface-container-high bg-pure-white py-6 text-center text-xs text-text-gray mt-auto">
        <div className="max-w-container-max mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Logo variant="color" size="sm" to="/" />
            <span>— Verified Ground Truth</span>
          </div>
          <div className="flex gap-4">
            <Link to="/directory" className="hover:text-primary">Directory</Link>
            <Link to="/trip/itinerary" className="hover:text-primary">Itinerary</Link>
            <Link to="/settings/help" className="hover:text-primary">Help</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
