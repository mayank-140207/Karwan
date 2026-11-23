import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SectionLabel from './SectionLabel';
import AccentHeading from './AccentHeading';
import Button from './Button';
import Pill from './Pill';
import Card from './Card';
import StatTile from './StatTile';
import ScrollProgressLine from './ScrollProgressLine';
import BackToTop from './BackToTop';

/**
 * DetailShell component
 * Standard layout for detail screens:
 * - Large header with AccentHeading & breadcrumbs
 * - StatTile row with green underlines
 * - Timeline ledger of incidents / history Cards
 * - Sticky side card (booking or contact)
 * - Report modal for Ground Truth reporting
 */
export default function DetailShell({
  breadcrumbs = [],
  label,
  title,
  italicPhrase,
  subtitle,
  stats = [],
  sideCard,
  reportSubject,
  children
}) {
  const navigate = useNavigate();
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportType, setReportType] = useState('pricing_discrepancy');
  const [reportNote, setReportNote] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const handleSubmitReport = (e) => {
    e.preventDefault();
    setReportSubmitted(true);
    setTimeout(() => {
      setReportSubmitted(false);
      setReportModalOpen(false);
      setReportNote('');
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-page text-ink flex flex-col font-sans">
      <ScrollProgressLine />

      {/* Detail Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-container-max mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Back & Breadcrumbs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-button bg-[#F2F4F6] hover:bg-border flex items-center justify-center text-ink transition-colors"
              title="Go back"
              aria-label="Go back"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            <Logo variant="color" size="sm" to="/" className="hidden sm:inline-flex" />

            {/* Breadcrumb links */}
            {breadcrumbs.length > 0 && (
              <nav className="hidden md:flex items-center gap-2 text-xs text-muted pl-3 border-l border-border">
                <Link to="/" className="hover:text-ink transition-colors">Home</Link>
                {breadcrumbs.map((b, idx) => (
                  <React.Fragment key={idx}>
                    <span>/</span>
                    {b.path ? (
                      <Link to={b.path} className="hover:text-ink transition-colors">{b.label}</Link>
                    ) : (
                      <span className="text-ink font-medium">{b.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setReportModalOpen(true)}
              icon={
                <svg className="w-3.5 h-3.5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              }
              iconPosition="left"
            >
              Report Discrepancy
            </Button>
            <Button variant="primary" size="sm" to="/directory">
              Directory
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 max-w-container-max w-full mx-auto px-4 sm:px-8 py-8 sm:py-10">
        {/* Header Block */}
        <div className="mb-8">
          {label && (
            <div className="mb-2">
              <SectionLabel text={label} />
            </div>
          )}
          <AccentHeading
            as="h1"
            size="h1"
            text={title}
            italicPhrase={italicPhrase}
          />
          {subtitle && (
            <p className="mt-2 text-base text-muted max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* StatTile Row */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white border border-border rounded-card mb-10 shadow-sm">
            {stats.map((stat, idx) => (
              <StatTile
                key={idx}
                value={stat.value}
                numericTarget={stat.numericTarget}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                subtext={stat.subtext}
              />
            ))}
          </div>
        )}

        {/* 2-Column Layout: Main Content (Timeline/Details) + Sticky Side Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Left Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {children}
          </div>

          {/* Sticky Side Card (1 col) */}
          {sideCard && (
            <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-4">
              {sideCard}
            </div>
          )}
        </div>
      </main>

      {/* Floating Back to Top */}
      <BackToTop />

      {/* Ground Truth Report Modal */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-card border border-border shadow-floating max-w-md w-full p-6 relative">
            <button
              onClick={() => setReportModalOpen(false)}
              className="absolute top-4 right-4 text-muted hover:text-ink p-1 rounded-md"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <SectionLabel text="Ground Truth Integrity" />
            <AccentHeading as="h3" size="h3" text="Submit *Audit* Report" italicPhrase="Audit" className="mt-1 mb-2" />
            <p className="text-xs text-muted mb-4 leading-relaxed">
              Report an anomaly or discrepancy for <strong className="text-ink">{reportSubject || title}</strong>. All submissions are cross-referenced against telemetry logs.
            </p>

            {reportSubmitted ? (
              <div className="p-4 rounded-card bg-[#E8F3ED] text-green border border-green/20 text-center">
                <div className="w-8 h-8 rounded-full bg-green text-white mx-auto flex items-center justify-center mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold">Report logged to Ground Truth ledger</p>
                <p className="text-xs opacity-80 mt-1">Thank you for keeping Karwan verified.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReport} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.08em] text-muted mb-1.5">
                    Discrepancy Category
                  </label>
                  <select
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#F8F9FB] border border-border rounded-button text-ink focus:outline-none focus:ring-2 focus:ring-green/30"
                  >
                    <option value="pricing_discrepancy">Price Mismatch or Surge</option>
                    <option value="schedule_delay">Route / Schedule Unannounced Change</option>
                    <option value="amenity_missing">Stated Amenity Not Available</option>
                    <option value="verification_challenge">Vendor ID Not Recognized</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-[0.08em] text-muted mb-1.5">
                    Field Notes
                  </label>
                  <textarea
                    rows={3}
                    value={reportNote}
                    onChange={(e) => setReportNote(e.target.value)}
                    placeholder="Describe what occurred on the ground..."
                    className="w-full px-3.5 py-2 text-sm bg-[#F8F9FB] border border-border rounded-button text-ink focus:outline-none focus:ring-2 focus:ring-green/30 resize-none"
                    required
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setReportModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    showArrow={false}
                  >
                    Submit Report
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
