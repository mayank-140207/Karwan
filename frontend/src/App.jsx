import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// 1. Landing & Core (3)
const LandingPage = lazy(() => import('./pages/LandingPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// 2. Auth Flow (6)
const ImmersiveLoginPage = lazy(() => import('./pages/auth/ImmersiveLoginPage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RoleSelectionPage = lazy(() => import('./pages/auth/RoleSelectionPage'));
const SignupStep1Page = lazy(() => import('./pages/auth/SignupStep1Page'));
const SignupStep2Page = lazy(() => import('./pages/auth/SignupStep2Page'));
const OtpVerificationPage = lazy(() => import('./pages/auth/OtpVerificationPage'));

// 3. Trip Planning & Experience (7)
const PlanRoutePage = lazy(() => import('./pages/trip/PlanRoutePage'));
const PlanPreferencesPage = lazy(() => import('./pages/trip/PlanPreferencesPage'));
const PlanReviewPage = lazy(() => import('./pages/trip/PlanReviewPage'));
const AdaptiveItineraryPage = lazy(() => import('./pages/trip/AdaptiveItineraryPage'));
const LiveTrailPage = lazy(() => import('./pages/trip/LiveTrailPage'));
const TrustRadarPage = lazy(() => import('./pages/trip/TrustRadarPage'));
const TripCompletionPage = lazy(() => import('./pages/trip/TripCompletionPage'));

// 4. Ground Truth Directory (7)
const GroundTruthDirectoryPage = lazy(() => import('./pages/directory/GroundTruthDirectoryPage'));
const PineRidgeCabinPage = lazy(() => import('./pages/directory/PineRidgeCabinPage'));
const HeritageHaveliPage = lazy(() => import('./pages/directory/HeritageHaveliPage'));
const MewarPalaceVillaPage = lazy(() => import('./pages/directory/MewarPalaceVillaPage'));
const RajeshGuptaGuidePage = lazy(() => import('./pages/directory/RajeshGuptaGuidePage'));
const VendorDetailsPage = lazy(() => import('./pages/directory/VendorDetailsPage'));
const MarketSquareSouvenirsPage = lazy(() => import('./pages/directory/MarketSquareSouvenirsPage'));

// 5. Dashboards & Settings (7)
const TravellerDashboardPage = lazy(() => import('./pages/dashboard/TravellerDashboardPage'));
const ProfilePage = lazy(() => import('./pages/dashboard/ProfilePage'));
const SettingsPage = lazy(() => import('./pages/dashboard/SettingsPage'));
const PrivacySettingsPage = lazy(() => import('./pages/dashboard/PrivacySettingsPage'));
const NotificationsSettingsPage = lazy(() => import('./pages/dashboard/NotificationsSettingsPage'));
const HelpSupportPage = lazy(() => import('./pages/dashboard/HelpSupportPage'));
const NotificationsPage = lazy(() => import('./pages/dashboard/NotificationsPage'));

// 6. Partner Portal (5)
const PartnerDashboardPage = lazy(() => import('./pages/partner/PartnerDashboardPage'));
const PartnerKycStep1Page = lazy(() => import('./pages/partner/PartnerKycStep1Page'));
const PartnerKycStep2Page = lazy(() => import('./pages/partner/PartnerKycStep2Page'));
const PartnerKycStep3Page = lazy(() => import('./pages/partner/PartnerKycStep3Page'));
const EditListingPage = lazy(() => import('./pages/partner/EditListingPage'));

// Loading skeleton fallback
function RouteLoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-3 border-secondary/20 border-t-secondary rounded-full animate-spin"></div>
        <span className="font-serif text-sm font-semibold text-primary">Loading Karwan...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          {/* Landing / Core (3) */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/404" element={<NotFoundPage />} />

          {/* Auth Flow (6 screens with primary & alias routes) */}
          <Route path="/login" element={<ImmersiveLoginPage />} />
          <Route path="/login-classic" element={<LoginPage />} />
          <Route path="/auth/immersive-login" element={<ImmersiveLoginPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/role-selection" element={<RoleSelectionPage />} />
          <Route path="/auth/signup-step-1" element={<SignupStep1Page />} />
          <Route path="/auth/signup-step-2" element={<SignupStep2Page />} />
          <Route path="/auth/otp" element={<OtpVerificationPage />} />

          {/* Trip (7) */}
          <Route path="/trip/plan/route" element={<PlanRoutePage />} />
          <Route path="/trip/plan/preferences" element={<PlanPreferencesPage />} />
          <Route path="/trip/plan/review" element={<PlanReviewPage />} />
          <Route path="/trip/itinerary" element={<AdaptiveItineraryPage />} />
          <Route path="/trip/livetrail" element={<LiveTrailPage />} />
          <Route path="/trip/trustradar" element={<TrustRadarPage />} />
          <Route path="/trip/complete" element={<TripCompletionPage />} />

          {/* Directory (7) */}
          <Route path="/directory" element={<GroundTruthDirectoryPage />} />
          <Route path="/directory/stays/pine-ridge-cabin" element={<PineRidgeCabinPage />} />
          <Route path="/directory/stays/heritage-haveli" element={<HeritageHaveliPage />} />
          <Route path="/directory/stays/mewar-palace-villa" element={<MewarPalaceVillaPage />} />
          <Route path="/directory/guides/rajesh-gupta" element={<RajeshGuptaGuidePage />} />
          <Route path="/directory/vendors/details" element={<VendorDetailsPage />} />
          <Route path="/directory/vendors/market-square-souvenirs" element={<MarketSquareSouvenirsPage />} />

          {/* Dashboards & Settings (7) */}
          <Route path="/dashboard" element={<TravellerDashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/privacy" element={<PrivacySettingsPage />} />
          <Route path="/settings/notifications" element={<NotificationsSettingsPage />} />
          <Route path="/settings/help" element={<HelpSupportPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />

          {/* Partner Portal (5) */}
          <Route path="/partner/dashboard" element={<PartnerDashboardPage />} />
          <Route path="/partner/kyc/step-1" element={<PartnerKycStep1Page />} />
          <Route path="/partner/kyc/step-2" element={<PartnerKycStep2Page />} />
          <Route path="/partner/kyc/step-3" element={<PartnerKycStep3Page />} />
          <Route path="/partner/listing/edit" element={<EditListingPage />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
