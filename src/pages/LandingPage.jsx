import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SharedLayout from '../components/layout/SharedLayout';
import Logo from '../components/common/Logo';

export default function LandingPage() {
  // Traveller Types Data & State
  const travelerTabs = [
    {
      name: 'Solo Explorer',
      image: '/images/tab_solo_explorer.webp',
      objectPosition: 'object-[center_28%]',
      caption: 'Navigate chaotic streets and hidden alleys with confidence, knowing verified data has your back.',
      stat: '10,000+ Verified Fares Checked This Month',
      alt: 'Solo explorer navigating vibrant streets with real-time verified data'
    },
    {
      name: 'Family Traveller',
      image: '/images/tab_family_traveller.webp',
      objectPosition: 'object-[center_20%]',
      caption: 'Keep your family safe and comfortable with verified homestays and self-healing itineraries.',
      stat: '5,000+ Safe Stays Verified',
      alt: 'Family traveling safely with verified stays and itineraries'
    },
    {
      name: 'Backpacker',
      image: '/images/tab_backpacker.webp',
      objectPosition: 'object-[center_15%]',
      caption: 'Explore the hidden gems of India with real-time crowd alerts and verified low-cost transport.',
      stat: '15,000+ Hidden Gems Mapped',
      alt: 'Backpacker exploring hidden gems across India with crowd alerts'
    },
    {
      name: 'Business Traveller',
      image: '/images/tab_business_traveller.webp',
      objectPosition: 'object-[65%_top]',
      caption: 'Never miss a meeting with auto-healing transit and high-speed Wi-Fi verification for all stays.',
      stat: '99% On-Time Arrival Rate',
      alt: 'Business traveler in modern cafe with high-speed Wi-Fi verified'
    }
  ];

  const [activeTravelerTab, setActiveTravelerTab] = useState(0);
  const currentTraveler = travelerTabs[activeTravelerTab];

  // Testimonials Data & State
  const testimonials = [
    {
      name: 'Priya S.',
      type: 'Solo Traveller, Jaipur',
      quote: '"I used to get scammed on auto fares constantly. Karwan\'s LiveTrail feature gave me the exact amount I should be paying. Total game changer."',
      date: 'Oct 12, 2025',
      img: '/images/img_718e83601b40.webp'
    },
    {
      name: 'Arjun V.',
      type: 'Backpacker, Varanasi',
      quote: '"When the evening train was delayed by 3 hours, Auto-heal rerouted me instantly to an express sleeper bus. Saved my entire trip."',
      date: 'Nov 03, 2025',
      img: '/images/img_f48e076774bf.webp'
    },
    {
      name: 'Meera K.',
      type: 'Family Vacation, Kerala',
      quote: '"Finding stays that actually had reliable hot water and power backup was effortless. The verified 48-hour ground truth photos don\'t lie."',
      date: 'Dec 18, 2025',
      img: '/images/img_212659e9d103.webp'
    },
    {
      name: 'Rahul M.',
      type: 'Business Traveller, Bengaluru',
      quote: '"Karwan\'s live transit monitoring kept my client meetings strictly on track. Seamless offline access meant zero hiccups."',
      date: 'Jan 08, 2026',
      img: '/images/img_bfd02b1e1054.webp'
    },
    {
      name: 'Ayesha K.',
      type: 'Cultural Explorer, Udaipur',
      quote: '"The TrustRadar score gave me the confidence to hire an independent heritage guide. Most authentic cultural tour I\'ve ever experienced."',
      date: 'Feb 14, 2026',
      img: '/images/img_622fa9a22eef.webp'
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentTestimonial = testimonials[activeTestimonial];

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How does Auto-heal work?',
      a: 'Auto-heal monitors your itinerary in real-time. If a train is delayed or a site closes early, it automatically suggests the best immediate alternatives like bus routes or nearby stays.'
    },
    {
      q: 'What makes TrustRadar different from standard reviews?',
      a: 'Unlike static stars, TrustRadar uses a dynamic score based on verified recent interactions, GPS-verified visits, and anomaly detection to prevent fake reviews.'
    },
    {
      q: 'Does the app work offline?',
      a: 'Yes! You can download your verified itinerary, trust scores for your route, and essential safety maps to use without an active data connection.'
    },
    {
      q: 'How do I verify my ID with DigiLocker?',
      a: 'Simply connect your DigiLocker account through the app. We verify your identity instantly to unlock premium trust layers and verified traveller status.'
    },
    {
      q: 'Are live fares available in all cities?',
      a: 'Live fares for autos and cabs are currently available in all major Indian metros and 50+ heritage cities, with more being added weekly.'
    },
    {
      q: 'Can I book stays directly through Karwan?',
      a: 'Karwan connects you with verified homestays and hotels. You can view their trust scores and book through our partners while keeping your safety data synced.'
    },
    {
      q: 'Is there a premium subscription?',
      a: "Karwan is free for essential safety. Our 'Explorer Pro' plan offers advanced features like 24/7 human concierge, multi-user collaboration, and offline map packs."
    },
    {
      q: 'How do I report a scam or issue?',
      a: "Use the 'SOS' or 'Report' button in the app. This instantly alerts our community team and updates the TrustRadar score for that location to warn other travellers."
    }
  ];

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.style.opacity = '0';
  };

  return (
    <SharedLayout title="Karwan - Travel with the trust of a local">
      <div className="karwan-landingpage">
        {/* 2. Hero Full Width Photo */}
        <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-16 pb-16 overflow-hidden bg-primary">
          {/* Background Image with Fallback */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#000D23] to-[#2C6E49]">
            <img
              alt="Modern traveler at the Amber Fort in India enjoying sunrise."
              className="object-cover w-full h-full object-[68%_top] sm:object-[68%_5%] lg:object-[68%_10%]"
              src="/images/img_e1521375da51.webp"
              width="1600"
              height="900"
              fetchpriority="high"
              onError={handleImageError}
            />
            {/* Dark Gradient Overlay for text readability: deep contrast on left for copy, transparent on right for traveler face & fort */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 via-40% to-transparent lg:bg-gradient-to-r lg:from-primary/95 lg:via-primary/80 lg:via-35% lg:to-transparent lg:to-60% pointer-events-none"></div>
          </div>

          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
              <div className="flex flex-col gap-stack-lg">
                <h1 className="font-display-lg text-display-lg text-white max-w-2xl drop-shadow-lg leading-tight">
                  Travel with the trust of a local who's already been there.
                </h1>
                <p className="font-body-lg text-body-lg text-white/90 max-w-xl drop-shadow-md">
                  Karwan connects you to real-time ground truth. Access live fares, verified trust scores, and self-healing itineraries that adapt when things go wrong—so you can explore India with absolute confidence.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/trip/plan/route"
                    className="px-8 py-3.5 rounded-[20px] bg-secondary text-pure-white font-label-md text-label-md hover:bg-success-green transition-colors shadow-ambient"
                  >
                    Start Your Trip
                  </Link>
                  <Link
                    to="/partner/kyc/step-1"
                    className="px-8 py-3.5 rounded-[20px] border-2 border-white/30 text-white font-label-md text-label-md hover:bg-white/10 transition-colors backdrop-blur-sm"
                  >
                    Become a Verified Partner
                  </Link>
                </div>
              </div>

              <div className="relative h-[500px] w-full hidden lg:block">
                {/* Floating Cards over Hero Image */}
                <div className="absolute right-12 top-1/4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-floating flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">local_taxi</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-text-gray">Live Fare Alert</p>
                    <p className="font-label-md text-label-md text-primary font-bold">Auto fare to Fort Gate: ₹80</p>
                  </div>
                </div>

                <div className="absolute right-32 top-1/2 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-floating flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_1s]">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-primary font-bold">Rambaba Guides</p>
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                      <span className="font-label-sm text-label-sm font-semibold">Trust Score 4.8</span>
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 bottom-24 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-floating flex items-center gap-3 animate-[float_4.5s_ease-in-out_infinite_0.5s]">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">sync_alt</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-text-gray">Auto-Heal Active</p>
                    <p className="font-label-md text-label-md text-primary font-bold">Route updated - Fort closes early</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Stats strip */}
        <section className="bg-primary py-8 px-margin-mobile md:px-margin-desktop border-t border-white/10">
          <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-2">
              <span className="material-symbols-outlined text-secondary text-3xl mb-1" style={{ fontVariationSettings: '"FILL" 1' }}>currency_rupee</span>
              <p className="font-headline-md text-[22px] font-semibold text-pure-white">Real-Time</p>
              <p className="font-label-sm text-label-sm text-white/60 uppercase tracking-wider">Fare Data</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <span className="material-symbols-outlined text-secondary text-3xl mb-1" style={{ fontVariationSettings: '"FILL" 1' }}>radar</span>
              <p className="font-headline-md text-[22px] font-semibold text-pure-white">Live</p>
              <p className="font-label-sm text-label-sm text-white/60 uppercase tracking-wider">Trust Scores</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <span className="material-symbols-outlined text-secondary text-3xl mb-1" style={{ fontVariationSettings: '"FILL" 1' }}>route</span>
              <p className="font-headline-md text-[22px] font-semibold text-pure-white">Self-Healing</p>
              <p className="font-label-sm text-label-sm text-white/60 uppercase tracking-wider">Itineraries</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <span className="material-symbols-outlined text-secondary text-3xl mb-1" style={{ fontVariationSettings: '"FILL" 1' }}>hotel</span>
              <p className="font-headline-md text-[22px] font-semibold text-pure-white">Verified</p>
              <p className="font-label-sm text-label-sm text-white/60 uppercase tracking-wider">Local Stays</p>
            </div>
          </div>
        </section>

        {/* 4. Problem */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div className="rounded-2xl overflow-hidden shadow-ambient h-[500px] bg-gradient-to-br from-[#000D23] to-[#2C6E49]">
              <img
                alt="A desaturated candid photo of a traveler checking routes."
                className="object-cover w-full h-full object-[center_20%] grayscale-[80%] opacity-90 hover:grayscale-[30%] transition-all duration-700"
                src="/images/img_641e1c8c6695.webp"
                width="800"
                height="500"
                loading="lazy"
                onError={handleImageError}
              />
            </div>
            <div className="flex flex-col gap-stack-lg md:pl-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
                Every trip starts from zero.
              </h2>
              <p className="font-body-lg text-body-lg text-text-gray">
                Star ratings are slow and easy to game. What one traveller learns about an overcharging stand or a jammed road never reaches the next person who needs it — until now.
              </p>
              <div className="border-l-4 border-secondary pl-6 py-4 bg-primary/5 rounded-r-xl">
                <p className="font-body-md text-body-md text-primary italic">
                  Karwan captures the live pulse of the ground, turning fleeting local knowledge into a persistent, protective layer for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Features / Modules */}
        <section id="modules" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-surface-container-lowest to-transparent pointer-events-none"></div>
          <div className="max-w-container-max mx-auto relative z-10">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
                One trust layer. Four ways it protects you.
              </h2>
              <p className="font-body-lg text-body-lg text-text-gray">Everything you need to navigate the real world, seamlessly integrated.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-white/70 backdrop-blur-md rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:shadow-floating transition-all duration-300 flex flex-col gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center text-primary mb-2 shadow-inner">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>insights</span>
                </div>
                <h3 className="font-headline-md text-[24px] text-primary">LiveTrail</h3>
                <p className="font-body-md text-body-md text-text-gray flex-grow leading-relaxed">
                  Stop guessing. See live auto and cab fares based on real recent trips, plus real-time crowding data for monuments and transit hubs.
                </p>
                <Link className="text-secondary font-label-md text-label-md flex items-center gap-1 hover:gap-2 transition-all mt-2 font-semibold" to="/trip/livetrail">
                  See it in action <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/70 backdrop-blur-md rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:shadow-floating transition-all duration-300 flex flex-col gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center text-primary mb-2 shadow-inner">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>policy</span>
                </div>
                <h3 className="font-headline-md text-[24px] text-primary">TrustRadar</h3>
                <p className="font-body-md text-body-md text-text-gray flex-grow leading-relaxed">
                  Go beyond basic stars. We assign dynamic trust scores to vendors, guides, and stays based on verified recent interactions and anomaly detection.
                </p>
                <Link className="text-secondary font-label-md text-label-md flex items-center gap-1 hover:gap-2 transition-all mt-2 font-semibold" to="/trip/trustradar">
                  See it in action <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/70 backdrop-blur-md rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:shadow-floating transition-all duration-300 flex flex-col gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center text-primary mb-2 shadow-inner">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>healing</span>
                </div>
                <h3 className="font-headline-md text-[24px] text-primary">Auto-heal</h3>
                <p className="font-body-md text-body-md text-text-gray flex-grow leading-relaxed">
                  When a train is late or a site closes early, your itinerary doesn't break. It instantly self-repairs, offering the best immediate alternatives.
                </p>
                <Link className="text-secondary font-label-md text-label-md flex items-center gap-1 hover:gap-2 transition-all mt-2 font-semibold" to="/trip/itinerary">
                  See it in action <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

              {/* Feature 4 */}
              <div className="bg-white/70 backdrop-blur-md rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:shadow-floating transition-all duration-300 flex flex-col gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center text-primary mb-2 shadow-inner">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>where_to_vote</span>
                </div>
                <h3 className="font-headline-md text-[24px] text-primary">Ground Truth</h3>
                <p className="font-body-md text-body-md text-text-gray flex-grow leading-relaxed">
                  No more outdated glossy photos. Access verified snapshots from the last 48 hours and live status updates on amenities like Wi-Fi and power.
                </p>
                <Link className="text-secondary font-label-md text-label-md flex items-center gap-1 hover:gap-2 transition-all mt-2 font-semibold" to="/directory">
                  See it in action <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* For Vendors & Guides */}
        <section id="for-partners" className="bg-primary py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-stack-lg z-10 text-pure-white">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">For Vendors & Guides</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight">
                Your reputation, finally worth something.
              </h2>
              <p className="font-body-lg text-body-lg text-white/70">
                Stop competing on a race to the bottom. Karwan's TrustRadar rewards consistent, honest service. Whether you're a local guide, a homestay host, or an auto driver, we verify your good work and connect you directly with travellers who value trust over the cheapest price.
              </p>
              <div className="pt-6">
                <Link
                  to="/partner/kyc/step-1"
                  className="inline-flex px-8 py-3.5 rounded-[20px] bg-secondary text-pure-white font-label-md text-label-md hover:bg-success-green transition-all shadow-ambient hover:shadow-floating font-semibold"
                >
                  Register as a Partner
                </Link>
              </div>
            </div>
            <div className="relative h-[550px] mt-8 md:mt-0 rounded-[32px] overflow-hidden shadow-floating bg-gradient-to-br from-[#000D23] to-[#2C6E49]">
              <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply pointer-events-none"></div>
              <img
                alt="A warm, engaging portrait of an authentic Indian local guide."
                className="object-cover w-full h-full object-[center_top]"
                src="/images/img_04e3a18665ab.webp"
                width="800"
                height="550"
                loading="lazy"
                onError={handleImageError}
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-ambient">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                  </div>
                  <div>
                    <p className="font-label-md text-[16px] text-primary font-bold">Verified Partner Status</p>
                    <p className="font-label-sm text-sm text-text-gray mt-0.5">+40% booking consistency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. How It Works */}
        <section id="how-it-works" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                How It Works
              </h2>
            </div>
            <div className="relative mt-12">
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-secondary/10 via-secondary/50 to-secondary/10 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary text-pure-white flex items-center justify-center font-headline-md text-headline-md font-bold shadow-lg border-4 border-white z-10">1</div>
                  <h4 className="font-label-md text-[18px] text-primary font-bold mt-2">Verify your ID</h4>
                  <p className="font-body-sm text-sm text-text-gray px-4">Secure onboard process to unlock premium trust layers.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary text-pure-white flex items-center justify-center font-headline-md text-headline-md font-bold shadow-lg border-4 border-white z-10">2</div>
                  <h4 className="font-label-md text-[18px] text-primary font-bold mt-2">Plan your trip</h4>
                  <p className="font-body-sm text-sm text-text-gray px-4">Build your itinerary with verified data and live insights.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary text-pure-white flex items-center justify-center font-headline-md text-headline-md font-bold shadow-lg border-4 border-white z-10">3</div>
                  <h4 className="font-label-md text-[18px] text-primary font-bold mt-2">Travel with guidance</h4>
                  <p className="font-body-sm text-sm text-text-gray px-4">Get real-time alerts on fares, crowding, and route changes.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary text-pure-white flex items-center justify-center font-headline-md text-headline-md font-bold shadow-lg border-4 border-white z-10">4</div>
                  <h4 className="font-label-md text-[18px] text-primary font-bold mt-2">Let Auto-heal handle</h4>
                  <p className="font-body-sm text-sm text-text-gray px-4">Relax as your plan self-repairs when disruptions occur.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRAVELLER-TYPE TABS SECTION: relative z-10 (never overlaps header), pills scroll with section */}
        <section id="for-travellers" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background relative z-10">
          <div className="max-w-container-max mx-auto flex flex-col items-center gap-8">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-sm text-label-sm font-semibold tracking-wide">
              Built for Every Traveller
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary text-center">
              Guidance That Adapts to How You Travel
            </h2>

            {/* Tab Pills: Static / normal flow, no sticky, fixed or absolute positioning */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
              {travelerTabs.map((tab, idx) => {
                const isActive = activeTravelerTab === idx;
                return (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setActiveTravelerTab(idx)}
                    className={`px-6 py-2.5 rounded-full font-label-md text-label-md font-medium transition-all ${
                      isActive
                        ? 'bg-secondary text-white font-semibold shadow-md border border-transparent'
                        : 'bg-white text-text-gray hover:text-primary hover:bg-surface-container-low border border-outline-variant shadow-sm'
                    }`}
                  >
                    {tab.name}
                  </button>
                );
              })}
            </div>

            {/* Active Tab Card with Navy-to-Green Gradient Fallback */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-floating aspect-video max-h-[600px] bg-gradient-to-br from-[#000D23] to-[#2C6E49]">
              <img
                key={currentTraveler.image}
                src={currentTraveler.image}
                alt={currentTraveler.alt}
                width="1280"
                height="720"
                loading="lazy"
                className={`w-full h-full object-cover transition-opacity duration-300 ${currentTraveler.objectPosition || 'object-[center_top]'}`}
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-2 z-10">
                <p className="text-white/90 font-body-lg text-body-lg drop-shadow-md transition-opacity duration-300">
                  {currentTraveler.caption}
                </p>
                <p className="text-white font-headline-md text-headline-md font-bold drop-shadow-md transition-opacity duration-300">
                  {currentTraveler.stat}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof carousel */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-sm text-label-sm font-semibold tracking-wide">
                Real Travellers
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                Trusted by Travellers Across India
              </h2>
            </div>

            <div className="flex items-center justify-center gap-4 md:gap-8 w-full overflow-hidden py-8 relative">
              <button
                type="button"
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-surface-container-low transition-colors z-30"
                aria-label="Previous Testimonial"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <div className="flex items-center justify-center gap-4 md:gap-6 w-full max-w-3xl overflow-hidden">
                {testimonials.map((item, idx) => {
                  const isSelected = activeTestimonial === idx;
                  return (
                    <div
                      key={item.name}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`carousel-avatar relative rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'w-20 h-20 md:w-28 md:h-28 ring-4 ring-secondary ring-offset-2 scale-110 shadow-lg'
                          : 'w-12 h-12 md:w-16 md:h-16 opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover object-[center_20%]"
                        onError={handleImageError}
                      />
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-surface-container-low transition-colors z-30"
                aria-label="Next Testimonial"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            <div className="flex justify-center w-full max-w-2xl">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-[20px] shadow-floating border border-white/50 flex flex-col gap-6 w-full transition-all duration-300">
                <div className="flex items-center gap-4">
                  <img
                    src={currentTestimonial.img}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-[center_20%] border-2 border-secondary/30"
                    onError={handleImageError}
                  />
                  <div>
                    <p className="font-headline-md font-bold text-[20px] text-primary">{currentTestimonial.name}</p>
                    <p className="font-label-sm text-secondary font-semibold tracking-wide uppercase mt-1">{currentTestimonial.type}</p>
                  </div>
                </div>
                <p className="font-body-lg text-text-gray italic leading-relaxed">
                  {currentTestimonial.quote}
                </p>
                <div className="mt-auto pt-4 border-t border-outline-variant/50 flex justify-end">
                  <p className="font-label-sm text-outline">{currentTestimonial.date}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 flex flex-col gap-6">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-sm text-label-sm font-semibold tracking-wide w-max">
                FAQ
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                Common Questions, Quick Answers
              </h2>
              <p className="font-body-lg text-text-gray mb-6">
                Everything you need to know about using Karwan for your next adventure.
              </p>
              <div className="bg-primary-fixed p-6 rounded-2xl flex flex-col gap-4 items-start shadow-sm mt-auto">
                <h4 className="font-headline-md text-primary text-[20px] font-bold">Still have questions?</h4>
                <p className="font-body-sm text-on-primary-container">Our team is here to help you navigate your journey.</p>
                <Link
                  to="/settings/help"
                  className="px-6 py-2.5 rounded-[20px] bg-primary text-white font-label-md hover:bg-tertiary transition-colors mt-2 font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col gap-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-white rounded-2xl border border-outline-variant flex flex-col overflow-hidden transition-all duration-300 shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="p-5 flex justify-between items-center w-full text-left hover:bg-surface-container-lowest transition-colors focus:outline-none"
                    >
                      <h4 className="font-label-md text-primary font-bold text-[16px]">{faq.q}</h4>
                      <span
                        className={`material-symbols-outlined text-text-gray transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-0">
                        <p className="font-body-sm text-text-gray leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Get the app (3-step) */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto flex flex-col items-center gap-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden flex flex-col text-center">
                <div className="h-48 bg-surface-container flex items-center justify-center p-4">
                  <img
                    alt="Destination collage"
                    className="w-full h-full object-cover rounded-xl"
                    src="/images/img_5bb7c7a62d46.webp"
                    width="400"
                    height="200"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-headline-md text-[20px] text-primary">1. Set Your Route</h4>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden flex flex-col text-center">
                <div className="h-48 bg-surface-container flex items-center justify-center p-4">
                  <div className="w-32 h-40 bg-white rounded-xl shadow-lg border-4 border-gray-100 flex flex-col p-2 gap-2">
                    <div className="h-8 bg-gray-100 rounded"></div>
                    <div className="h-16 bg-primary-fixed rounded"></div>
                    <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-headline-md text-[20px] text-primary">2. Get Verified Data Instantly</h4>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden flex flex-col text-center">
                <div className="h-48 bg-surface-container flex items-center justify-center p-4">
                  <div className="w-32 h-40 bg-white rounded-xl shadow-lg border-4 border-gray-100 flex flex-col p-2 gap-2 relative">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-sm">notifications</span>
                    </div>
                    <div className="h-12 bg-secondary/20 rounded mt-4"></div>
                    <div className="h-8 bg-gray-100 rounded mt-auto"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-headline-md text-[20px] text-primary">3. Travel with Live Alerts</h4>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full mt-4">
              <Link
                to="/trip/plan/route"
                className="px-10 py-4 rounded-[20px] bg-secondary text-pure-white font-label-md shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 font-semibold"
              >
                <span className="material-symbols-outlined">download</span>
                Download Application
              </Link>
            </div>
          </div>
        </section>

        {/* Field notes / Stories from the road */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
          <div className="max-w-container-max mx-auto flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-sm text-label-sm font-semibold tracking-wide">
                Field Notes
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                Stories from the Road
              </h2>
            </div>

            <div className="w-full relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full" id="blog-carousel">
                {/* Article 1 */}
                <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden flex flex-col group cursor-pointer hover:shadow-floating transition-all">
                  <div className="h-48 overflow-hidden relative bg-gradient-to-br from-[#000D23] to-[#2C6E49]">
                    <img
                      alt="Train travel in India"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="/images/img_5ceed00c37eb.webp"
                      width="400"
                      height="200"
                      loading="lazy"
                      onError={handleImageError}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                        Safety
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-grow">
                    <h4 className="font-headline-md text-[20px] text-primary group-hover:text-secondary transition-colors leading-tight">
                      Navigating Indian Railways Like a Pro: 5 Essential Tips
                    </h4>
                    <div className="flex items-center gap-2 text-text-gray font-label-sm mt-auto pt-4">
                      <span>Jan 12, 2026</span>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden flex flex-col group cursor-pointer hover:shadow-floating transition-all">
                  <div className="h-48 overflow-hidden relative bg-gradient-to-br from-[#000D23] to-[#2C6E49]">
                    <img
                      alt="Local market in India"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="/images/img_76ed3e7dff4c.webp"
                      width="400"
                      height="200"
                      loading="lazy"
                      onError={handleImageError}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-tertiary-container text-white px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                        Local Tips
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-grow">
                    <h4 className="font-headline-md text-[20px] text-primary group-hover:text-secondary transition-colors leading-tight">
                      The Art of Bargaining: When to Push and When to Pay
                    </h4>
                    <div className="flex items-center gap-2 text-text-gray font-label-sm mt-auto pt-4">
                      <span>Jan 05, 2026</span>
                      <span>•</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden flex flex-col group cursor-pointer hover:shadow-floating transition-all">
                  <div className="h-48 overflow-hidden relative bg-gradient-to-br from-[#000D23] to-[#2C6E49]">
                    <img
                      alt="Taj Mahal at sunrise"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="/images/img_38f36e970c6c.webp"
                      width="400"
                      height="200"
                      loading="lazy"
                      onError={handleImageError}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-primary-fixed text-primary px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                        First-Timer
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-grow">
                    <h4 className="font-headline-md text-[20px] text-primary group-hover:text-secondary transition-colors leading-tight">
                      Golden Triangle Guide: Avoiding Common Tourist Traps
                    </h4>
                    <div className="flex items-center gap-2 text-text-gray font-label-sm mt-auto pt-4">
                      <span>Dec 28, 2025</span>
                      <span>•</span>
                      <span>7 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carry Karwan With You, Everywhere */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background pb-32">
          <div className="max-w-container-max mx-auto">
            <div className="bg-primary-fixed rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-ambient">
              <div className="md:w-1/2 flex flex-col gap-6 z-10">
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
                  Carry Karwan With You, Everywhere
                </h2>
                <p className="font-body-lg text-on-primary-container">
                  Get live alerts, access verified trust scores offline, and let Auto-heal watch your back while you explore.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/trip/plan/route"
                    className="px-8 py-3.5 rounded-[20px] bg-primary text-white font-label-md shadow-lg hover:bg-tertiary transition-all duration-300 hover:scale-105 flex items-center gap-2 font-semibold"
                  >
                    <span className="material-symbols-outlined">download</span>
                    Download Application
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 relative h-[300px] md:h-[400px] w-full flex justify-center items-center z-10">
                {/* Phone mockup */}
                <div className="w-[200px] h-[400px] bg-white rounded-[30px] shadow-2xl border-8 border-gray-800 rotate-12 absolute transform translate-y-10 flex flex-col overflow-hidden">
                  <div className="bg-primary h-16 w-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm font-serif">KARWAN</span>
                  </div>
                  <div className="p-4 flex flex-col gap-3 flex-grow bg-surface-container-lowest">
                    <div className="bg-surface-container rounded-lg p-3">
                      <p className="text-xs text-text-gray">Current Route</p>
                      <p className="text-sm font-bold text-primary">Delhi to Agra</p>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-3">
                      <p className="text-xs text-secondary font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">warning</span> Live Alert
                      </p>
                      <p className="text-sm text-primary">Heavy traffic ahead. Route updated to save 45 mins.</p>
                    </div>
                    <div className="bg-surface-container rounded-lg p-3 mt-auto">
                      <p className="text-xs text-text-gray">Verified Guide</p>
                      <p className="text-sm font-bold text-primary">Anil Sharma (4.9★)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl z-0 pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Dedicated Landing Page Footer with reusable Logo */}
        <footer id="footer" className="bg-primary w-full pt-20 pb-8 border-t border-white/5 text-pure-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            {/* Col 1: Logo & Mission */}
            <div className="md:col-span-3 flex flex-col gap-6">
              <div className="mb-2">
                <Logo variant="white" size="md" to="/" />
              </div>
              <p className="text-white/70 font-body-sm leading-relaxed">
                Travel with the trust of a local who's already been there. Empowering smarter, safer journeys across India.
              </p>
              <div className="flex gap-4 mt-2">
                <Link className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary transition-colors" to="/directory">
                  <span className="material-symbols-outlined text-[20px]">public</span>
                </Link>
                <Link className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary transition-colors" to="/directory">
                  <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                </Link>
                <Link className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary transition-colors" to="/directory">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </Link>
              </div>
            </div>

            {/* Col 2: Pages */}
            <div className="md:col-span-2 flex flex-col gap-3">
              <h4 className="font-label-md text-[16px] text-pure-white font-bold mb-2">Pages</h4>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/home">Traveler Home</Link>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/directory">Ground Truth</Link>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/trip/itinerary">Adaptive Itinerary</Link>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/trip/livetrail">LiveTrail Transit</Link>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/dashboard">Dashboard</Link>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/partner/dashboard">Partner Portal</Link>
            </div>

            {/* Col 3: Utility */}
            <div className="md:col-span-3 flex flex-col gap-3">
              <h4 className="font-label-md text-[16px] text-pure-white font-bold mb-2">Utility</h4>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/settings">Settings</Link>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/settings/privacy">Privacy Policy</Link>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/settings/help">Help & Support</Link>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/404">404 Page</Link>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/login">Sign In</Link>
              <Link className="font-body-sm text-white/60 hover:text-white transition-colors" to="/auth/signup-step-1">Sign Up</Link>
            </div>

            {/* Col 4: Newsletter */}
            <div className="md:col-span-4">
              <div className="bg-primary-fixed rounded-2xl p-6 flex flex-col gap-4 shadow-sm text-primary">
                <h4 className="font-headline-md text-[20px] font-bold">Subscribe to Updates</h4>
                <p className="font-body-sm text-on-primary-container leading-relaxed">
                  Get the latest travel tips, local insights, and platform updates delivered straight to your inbox.
                </p>
                <form className="flex flex-col gap-3 mt-1" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-white border border-outline-variant text-primary placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                    placeholder="Enter your email"
                    required
                    type="email"
                  />
                  <button
                    className="w-full px-6 py-3 rounded-[20px] bg-secondary text-white font-label-md font-semibold hover:bg-success-green transition-colors"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>© 2026 Karwan. All rights reserved.</p>
            <p>Built for Smart India Hackathon</p>
          </div>
        </footer>
      </div>
    </SharedLayout>
  );
}
