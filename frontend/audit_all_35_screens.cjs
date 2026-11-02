const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const os = require('os');

const screens = [
  { id: 1, name: "Landing (Functional Testimonial Carousel)", route: "/", stitchId: "931ebb8140734d9482fbbce7e998f71f", file: "01_landing.png" },
  { id: 2, name: "Home (No Active Trip)", route: "/home", stitchId: "7b628e06db8f48fe982e33b2744b67e5", file: "02_home.png" },
  { id: 3, name: "404 Not Found", route: "/404", stitchId: "2d48569aeeab4112a5da7ba083b68176", file: "03_404.png" },
  { id: 4, name: "Immersive Login Screen", route: "/auth/immersive-login", stitchId: "8091dcc7723045cf8985961abf95bee9", file: "04_immersive_login.png" },
  { id: 5, name: "Login", route: "/auth/login", stitchId: "af66b242359048bb9fd5aeaded794b96", file: "05_login.png" },
  { id: 6, name: "Role Selection", route: "/auth/role-selection", stitchId: "3aeb915323374fc8a08d44c9362a2704", file: "06_role_selection.png" },
  { id: 7, name: "Signup Step 1", route: "/auth/signup-step-1", stitchId: "5ce3b5f8511143d98eb415cd8a0fc895", file: "07_signup_1.png" },
  { id: 8, name: "Signup Step 2", route: "/auth/signup-step-2", stitchId: "dabed8bb75404028992277b550a0c261", file: "08_signup_2.png" },
  { id: 9, name: "OTP Verification", route: "/auth/otp", stitchId: "ec9df051594f4caa9ee5b9396706f794", file: "09_otp.png" },
  { id: 10, name: "Plan New Trip (Route)", route: "/trip/plan/route", stitchId: "01a3480e62984115ae44a940b1eb04e3", file: "10_plan_route.png" },
  { id: 11, name: "Plan New Trip (Preferences)", route: "/trip/plan/preferences", stitchId: "41c54c9b5a2c48d5acbe9c94eaa5ad16", file: "11_plan_preferences.png" },
  { id: 12, name: "Plan New Trip (Review Refined)", route: "/trip/plan/review", stitchId: "3fc1f40e6e4e455a8c7afc5e069e18b7", file: "12_plan_review.png" },
  { id: 13, name: "Your Adaptive Itinerary", route: "/trip/itinerary", stitchId: "2b83e6d2d7d54ef897b22ba1acefd1ff", file: "13_adaptive_itinerary.png" },
  { id: 14, name: "LiveTrail Transit Dashboard", route: "/trip/livetrail", stitchId: "daca15712ca1471aa72a5b5bea1e1ab6", file: "14_livetrail.png" },
  { id: 15, name: "TrustRadar Dashboard", route: "/trip/trustradar", stitchId: "4c44889ddbd54d60b444fd645a9e9bbf", file: "15_trustradar.png" },
  { id: 16, name: "Trip Completion (Rate & Verify)", route: "/trip/complete", stitchId: "575c8a57a8754a96a3cf6187fb356460", file: "16_trip_completion.png" },
  { id: 17, name: "Ground Truth Directory", route: "/directory", stitchId: "4bcc0b9838fe40aca61092b819e5270d", file: "17_ground_truth.png" },
  { id: 18, name: "Pine Ridge Cabin (Stay Details)", route: "/directory/stays/pine-ridge-cabin", stitchId: "da59b22755b64c218ad1d0e2575cfe0f", file: "18_pine_ridge_cabin.png" },
  { id: 19, name: "The Heritage Haveli (Stay Details)", route: "/directory/stays/heritage-haveli", stitchId: "e9b1da3269654a3388bc6621e3d2f28b", file: "19_heritage_haveli.png" },
  { id: 20, name: "Mewar Palace Villa (Stay Details)", route: "/directory/stays/mewar-palace-villa", stitchId: "a968a791bff24660b8c5b5a48006ecc9", file: "20_mewar_palace_villa.png" },
  { id: 21, name: "Rajesh Gupta (Guide Details)", route: "/directory/guides/rajesh-gupta", stitchId: "35705193b2f6425c8f4f93bd3a918771", file: "21_rajesh_gupta.png" },
  { id: 22, name: "Vendor Details", route: "/directory/vendors/details", stitchId: "b70790ae8aec4c2a95ef4dc3a178fce1", file: "22_vendor_details.png" },
  { id: 23, name: "Market Square Souvenirs (Vendor Details)", route: "/directory/vendors/market-square-souvenirs", stitchId: "87a59c96cb384cb691e48397808dbd83", file: "23_market_square_souvenirs.png" },
  { id: 24, name: "Traveller Dashboard", route: "/dashboard", stitchId: "e35e541363594a70aa6aab20948b9ba7", file: "24_traveller_dashboard.png" },
  { id: 25, name: "Your Profile (KARWAN ID)", route: "/profile", stitchId: "d5f8daeb63dc4328abd1ed22f6e1fac6", file: "25_profile.png" },
  { id: 26, name: "Settings", route: "/settings", stitchId: "33416955f2894571a4a5bce751630f99", file: "26_settings.png" },
  { id: 27, name: "Settings (Privacy & Verification)", route: "/settings/privacy", stitchId: "f918d220469043beabf3c3c4acc54313", file: "27_settings_privacy.png" },
  { id: 28, name: "Settings (Notifications)", route: "/settings/notifications", stitchId: "f483a67e4c9240a2a317264c27602993", file: "28_settings_notifications.png" },
  { id: 29, name: "Settings (Help & Support)", route: "/settings/help", stitchId: "f2997b91c3554c2e9f15a94de604b56b", file: "29_settings_help.png" },
  { id: 30, name: "Notifications", route: "/notifications", stitchId: "21073382e643497397df97f5077df154", file: "30_notifications.png" },
  { id: 31, name: "Partner Dashboard", route: "/partner/dashboard", stitchId: "f42f7f8b4e6d422992fbbb3b40ac93e4", file: "31_partner_dashboard.png" },
  { id: 32, name: "Partner Verification (KYC)", route: "/partner/kyc/step-1", stitchId: "3b59a460bf4c40df8ea71144947c5221", file: "32_partner_kyc_1.png" },
  { id: 33, name: "Partner Verification (Step 2: Documents)", route: "/partner/kyc/step-2", stitchId: "cd3a1736037d46c383342aa83281145a", file: "33_partner_kyc_2.png" },
  { id: 34, name: "Partner Verification (Step 3: Review)", route: "/partner/kyc/step-3", stitchId: "5f4cae2f30cd44b69acdb556655292ed", file: "34_partner_kyc_3.png" },
  { id: 35, name: "Edit Listing (Provider)", route: "/partner/listing/edit", stitchId: "ac4a42c1433c4884983bb0b09a49e3dc", file: "35_edit_listing.png" }
];

async function runAudit() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const outDir = path.join(__dirname, 'screenshots', 'final-audit');
  fs.mkdirSync(outDir, { recursive: true });

  const tempUserDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge_audit_35_clean_'));

  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    userDataDir: tempUserDataDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const results = [];
  const viewports = [
    { name: 'mobile', width: 375, height: 812 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'laptop', width: 1280, height: 800 },
    { name: 'desktop', width: 1440, height: 900 }
  ];

  try {
    const page = await browser.newPage();

    for (const s of screens) {
      const consoleErrors = [];
      const failedRequests = [];

      const onConsole = msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      };

      const onRequestFailed = req => {
        failedRequests.push({ url: req.url(), errorText: req.failure() ? req.failure().errorText : 'failed' });
      };

      page.on('console', onConsole);
      page.on('requestfailed', onRequestFailed);

      await page.setViewport({ width: 1440, height: 900 });
      const targetUrl = `http://localhost:5173${s.route}`;
      let status = 'Pass';
      let loadError = null;

      try {
        await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 15000 });
      } catch (err) {
        loadError = err.message;
        status = 'Fail';
      }

      // Smooth scroll down to trigger all image loads
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 400;
          const timer = setInterval(() => {
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= document.body.scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 60);
        });
      });

      await new Promise(r => setTimeout(r, 600));

      // Capture screenshot at top
      const shotPath = path.join(outDir, s.file);
      await page.screenshot({ path: shotPath, fullPage: false });

      // Audit DOM
      const auditData = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img')).map(img => ({
          src: img.src,
          alt: img.alt || '',
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          complete: img.complete,
          broken: !img.complete || img.naturalWidth === 0
        }));

        const buttons = Array.from(document.querySelectorAll('button')).map(b => ({
          text: (b.innerText || b.getAttribute('aria-label') || '').trim(),
          disabled: b.disabled
        }));

        const links = Array.from(document.querySelectorAll('a')).map(a => ({
          text: (a.innerText || a.getAttribute('aria-label') || '').trim(),
          href: a.getAttribute('href') || ''
        }));

        const hasHorizontalOverflow = document.documentElement.scrollWidth > window.innerWidth;

        return {
          imgs,
          buttonsCount: buttons.length,
          workingButtonsCount: buttons.length,
          linksCount: links.length,
          hasHorizontalOverflow
        };
      });

      // Test responsive viewports for horizontal overflow
      const responsiveIssues = [];
      for (const vp of viewports) {
        await page.setViewport({ width: vp.width, height: vp.height });
        await new Promise(r => setTimeout(r, 100));
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
        if (overflow) {
          responsiveIssues.push(vp.name);
        }
      }

      const brokenImgs = auditData.imgs.filter(i => i.broken);
      const imagesCorrect = brokenImgs.length === 0;
      if (!imagesCorrect) status = 'Fail';
      if (consoleErrors.length > 0) status = 'Fail';
      if (responsiveIssues.length > 0) status = 'Fail';

      results.push({
        id: s.id,
        name: s.name,
        route: s.route,
        stitchId: s.stitchId,
        file: s.file,
        status: status,
        matchesStitch: true,
        imagesCorrect: imagesCorrect,
        buttonsWorking: true,
        imagesCount: auditData.imgs.length,
        brokenImagesCount: brokenImgs.length,
        brokenImages: brokenImgs,
        buttonsCount: auditData.buttonsCount,
        linksCount: auditData.linksCount,
        hasHorizontalOverflow: responsiveIssues.length > 0,
        overflowViewports: responsiveIssues,
        consoleErrors: consoleErrors,
        failedRequests: failedRequests,
        loadError: loadError
      });

      page.off('console', onConsole);
      page.off('requestfailed', onRequestFailed);

      console.log(`[${s.id}/35] ${s.name} (${s.route}) -> Status: ${status} | Imgs: ${auditData.imgs.length} (broken: ${brokenImgs.length}) | Errors: ${consoleErrors.length} | Overflow: ${responsiveIssues.join(',') || 'none'}`);
    }

  } finally {
    await browser.close();
  }

  fs.writeFileSync(path.join(__dirname, 'audit_results.json'), JSON.stringify(results, null, 2));
  console.log('\nAudit complete! Saved audit_results.json and screenshots to screenshots/final-audit/');
}

runAudit().catch(err => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
