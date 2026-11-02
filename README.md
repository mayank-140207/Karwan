# Karwan

**A real-time, community-verified trust layer for safe and adaptive domestic travel.**

---

## Overview

Karwan is a travel-tech platform concept designed to make domestic travel in India more transparent, informed, and trustworthy. It brings together community-sourced journey intelligence, local trust indicators, adaptive itinerary assistance, and evidence-based stay verification.

Rather than focusing only on travel bookings and recommendations, Karwan focuses on helping travellers make better-informed decisions throughout their journeys.

Domestic travel frequently involves navigating fragmented information sources, unverified reviews, unpredictable transit fares, unexpected route disruptions, and uncertainties regarding basic stay amenities. Karwan addresses these friction points by providing structured, community-backed intelligence that helps travellers assess on-ground realities before and during their trips.

---

## Core Modules

Karwan is organized around four core conceptual modules, each addressing a critical aspect of domestic travel reliability:

### 1. LiveTrail — Real-Time Journey Intelligence

LiveTrail provides community-sourced journey intelligence and transit monitoring along active domestic travel routes.

* **Journey & Waypoint Monitoring**: Tracks transit progress, active waypoints, transfer points, and estimated arrival milestones.
* **Actual Going-Fare Intelligence**: Aggregates community-reported fare rates from recent riders across local transit modes (autos, shared taxis, regional buses, and ferries) to protect travellers from arbitrary overcharging.
* **Live Crowding Insights**: Surfaces real-time crowd levels and vehicle occupancy so travellers can make informed decisions about when and how to transit.
* **Route & Transit Alerts**: Delivers relevant route advisories, platform shifts, and operational status updates across transit corridors.

### 2. TrustRadar — Community-Verified Local Intelligence

TrustRadar serves as a community-driven trust and safety intelligence layer for destinations, transit hubs, and local service providers.

* **Safety & Confidence Indicators**: Provides community-verified confidence scores and situational indicators for neighborhoods, walking routes, and transit stops.
* **Situational Awareness**: Highlights localized ground conditions, well-lit corridors, active community presence, and nearby emergency services.
* **Verified Local Recommendations**: Curates crowd-audited regional advice, safety tips, and travel guidance tailored to different traveller profiles.
* **Trusted Guides & Artisan Discovery**: Connects travellers directly with vetted local guides and authentic artisan vendors, ensuring fair compensation for local experts and reliable experiences for travellers.

### 3. Auto-heal — Adaptive Itinerary Recalibration

Auto-heal assists travellers when unforeseen events disrupt their scheduled plans.

* **Dynamic Itinerary Recalibration**: Helps restructure daily timelines when travel plans are interrupted by transit delays, weather events, or road closures.
* **Alternative Route Suggestions**: Proposes viable secondary routes and transit combinations to bypass disruptions safely.
* **Alternative Verified Stay Recommendations**: Recommends nearby verified accommodations if a traveller cannot reach their intended destination on schedule.
* **Context-Aware Suggestions**: Adapts recommendations to traveller preferences, remaining daylight, and transit feasibility without requiring manual re-planning from scratch.

### 4. Ground Truth — Verified Stay Intelligence

Ground Truth provides an evidence-based verification layer specifically focused on accommodations and homestays.

* **Geotagged Guest Evidence**: Collects recent, authentic geotagged guest photographs to verify that physical spaces match advertised listings.
* **Live Utility Status**: Tracks verified, real-time availability of essential utilities:
  * **Wi-Fi Connectivity**: Verified network availability and functional connection status.
  * **Water Supply**: Reported running water availability and schedule.
  * **Power / Electricity**: Real-time electricity status and backup generator availability.
* **Ground-Level Transparency**: Helps travellers independently evaluate whether a stay matches its operational claims before booking or checking in.

---

## Project Status

Karwan is currently under development as a functional prototype. The project demonstrates its core travel-trust concepts through an evolving frontend and simulated/mock data in selected modules. Real-world integrations, live data sources, and production-scale deployment are subject to further development.

| Module | Prototype Status | Data Source |
|---|---|---|
| **LiveTrail** | Functional UI & Corridor Simulation | Simulated Transit & Fare Models |
| **TrustRadar** | Functional UI & Safety Radar Views | Mock Confidence & Guide Datasets |
| **Auto-heal** | Interactive Recalibration Workflows | Mock Disruption & Alternative Logic |
| **Ground Truth** | Detailed Stay Views & Verification Badges | Mock Utility & Photographic Data |

---

## Technology Stack

The Karwan prototype is built on a modern, decoupled web architecture:

| Technology | Purpose | Version |
|---|---|---|
| **React** | Component-based UI framework and view rendering | `^19.0.0` |
| **Vite** | Build tooling, bundling, and local development server | `^6.2.0` |
| **React Router DOM** | Client-side routing, nested layouts, and route navigation | `^7.2.0` |
| **Tailwind CSS** | Utility-first styling and custom design token system | `^3.4.17` |
| **PostCSS & Autoprefixer** | CSS transformation and automated vendor prefixing | `PostCSS 8.5` / `Autoprefixer 10.4` |
| **Lucide React & React Icons** | Vector iconography for indicators, metrics, and navigation | `lucide-react 1.16` / `react-icons 5.7` |
| **Fontsource Typography** | Self-hosted typography (Inter for UI, Noto Serif for Display) | `^5.3.0` |
| **Supabase** *(Planned)* | Backend database, authentication, and real-time state | *Environment variables configured* |

---

## Project Structure

```text
Karwan/
├── frontend/
│   ├── public/
│   │   ├── images/               # Local photography and destination assets
│   │   ├── _redirects            # SPA client-side routing fallback configuration
│   │   └── favicon.svg           # Karwan brand mark
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/           # Reusable UI components (Logo, BrandIcon)
│   │   │   └── layout/           # Shared wrappers (AuthLayout, SharedLayout, DetailLayout)
│   │   ├── data/
│   │   │   └── mockData.js       # Structured mock models for prototype simulation
│   │   ├── pages/
│   │   │   ├── auth/             # Authentication, registration, and OTP views
│   │   │   ├── dashboard/        # Traveller dashboard, profile, and account settings
│   │   │   ├── directory/        # Ground Truth stay details and listing views
│   │   │   ├── partner/          # Partner portal, multi-step KYC, and listing manager
│   │   │   ├── trip/             # Route planner, preferences, itinerary, LiveTrail, TrustRadar
│   │   │   ├── HomePage.jsx      # Post-login homepage view (no active trip state)
│   │   │   ├── LandingPage.jsx   # Public landing page with persona showcase
│   │   │   └── NotFoundPage.jsx  # Branded 404 route fallback
│   │   ├── App.jsx               # Central route configuration (35 screens)
│   │   ├── index.css             # Tailwind directives and utility classes
│   │   └── main.jsx              # React application entry point
│   ├── .env.example              # Environment variable template
│   ├── DESIGN.md                 # Design system tokens and specifications
│   ├── SCREENS.md                # 35-screen specification registry
│   ├── index.html                # HTML document entry point
│   ├── package.json              # NPM dependencies and script definitions
│   ├── package-lock.json         # Pinned dependency tree
│   ├── postcss.config.js         # PostCSS plugin configuration
│   ├── tailwind.config.js        # Tailwind theme extensions and color definitions
│   └── vite.config.js            # Vite build configuration
├── .gitignore                    # Root Git ignore rules
└── README.md                     # Project documentation
```

### Key Directories

* **`frontend/src/pages/`**: Houses all 35 application screens organized by domain (`auth`, `trip`, `directory`, `dashboard`, `partner`).
* **`frontend/src/components/layout/`**: Provides consistent structural page framing (`SharedLayout` for navigation/footer, `AuthLayout` for onboarding).
* **`frontend/src/data/mockData.js`**: Central repository of mock entities representing transit corridors, fares, stay utility statuses, and safety scores.
* **`frontend/public/images/`**: Contains self-hosted, optimized image assets to ensure local rendering without external hotlinks.

---

## Getting Started

### Prerequisites

Ensure you have the following installed locally:

* **Node.js**: `v18.0.0` or higher (LTS recommended)
* **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)
* **Git**: `v2.30+`

### Installation & Execution

#### 1. Clone Repository

```bash
git clone https://github.com/mayank-140207/Karwan.git
cd Karwan
```

#### 2. Install Dependencies

Navigate to the `frontend/` directory and install project dependencies:

**macOS / Linux:**
```bash
cd frontend
npm install
```

**Windows (PowerShell):**
```powershell
Set-Location frontend
npm install
```

#### 3. Environment Configuration

Create a local `.env` file from the provided template:

**macOS / Linux:**
```bash
cp .env.example .env
```

**Windows (PowerShell):**
```powershell
Copy-Item .env.example .env
```

The template defines the following client variables:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

*Note: For prototype exploration and UI testing, these variables may remain empty; the application defaults to local simulated datasets.*

#### 4. Run Development Server

```bash
npm run dev
```

The development server will start locally at `http://localhost:5173/`.

#### 5. Production Build

To compile and bundle the frontend for production deployment:

```bash
npm run build
```

Compiled static output is generated in `frontend/dist/`. To preview the production bundle locally:

```bash
npm run preview
```

---

## Security

* **No Secret Exposure**: Never commit `.env` or files containing live credentials to version control. The repository `.gitignore` explicitly excludes all `.env` files except `.env.example`.
* **Client Key Isolation**: Do not place administrative credentials (such as Supabase `service_role` keys or backend database passwords) into client environment files or frontend code.
* **Pre-Commit Verification**: Review staged changes with `git diff --cached` prior to committing to ensure accidental credential exposure does not occur.

---

## Project Vision

Karwan envisions a domestic travel ecosystem where travellers explore with confidence and local communities benefit directly from verified, transparent tourism. By replacing unverified reviews with verifiable ground-truth intelligence, democratizing real-time transit and fare data, and providing adaptive itinerary support, Karwan aims to make Indian domestic journeys safer, more predictable, and deeply authentic.

---

**Know. Navigate. Arrive.**
