const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function runTest() {
  console.log('--- STARTING PLAYWRIGHT LANDING PAGE AUDIT ---');

  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const consoleErrors = [];
  const pageErrors = [];

  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 }
  });

  const page = await context.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER CONSOLE ERROR:', msg.text());
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('BROWSER PAGE ERROR:', err.message);
    pageErrors.push(err.message);
  });

  const url = 'http://localhost:5173/';
  console.log('Navigating to', url);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

  // 1. Check title
  const title = await page.title();
  console.log('Page Title:', title);

  // 2. Click test: Modules Mega-Menu
  console.log('Testing Modules Mega-Menu...');
  const modulesBtn = page.locator('header button:has-text("Modules")').first();
  if (await modulesBtn.isVisible()) {
    await modulesBtn.hover();
    await page.waitForTimeout(400);
    let megaMenu = page.locator('text=Open module').first();
    let isVis = await megaMenu.isVisible();
    if (!isVis) {
      await modulesBtn.click();
      await page.waitForTimeout(400);
      isVis = await megaMenu.isVisible();
    }
    console.log('Mega Menu opened:', isVis);
    // Click outside to close
    await page.mouse.click(10, 10);
    await page.waitForTimeout(200);
  }

  // 3. Click test: 35 Screens Catalog Modal
  console.log('Testing 35 Screens Modal...');
  const screensBtn = page.locator('button:has-text("35 Screens")').first();
  if (await screensBtn.isVisible()) {
    await screensBtn.click();
    await page.waitForTimeout(400);
    const modalHeading = page.locator('text=All Verified Karwan UI Screens');
    console.log('35 Screens Modal visible:', await modalHeading.isVisible());

    // Click close button
    const closeBtn = page.locator('button:has-text("close")');
    await closeBtn.click();
    await page.waitForTimeout(300);
  }

  // 4. Click test: Live Product Demo Tabs
  console.log('Testing Product Demo Tabs...');
  const tabNames = ['LiveTrail', 'TrustRadar', 'Auto-heal', 'Ground Truth'];
  for (const name of tabNames) {
    const tabLocator = page.locator(`#live-demo button:has-text("${name}")`).first();
    if (await tabLocator.isVisible()) {
      await tabLocator.click();
      await page.waitForTimeout(300);
      console.log(`Switched to demo tab: ${name}`);
    }
  }

  // 5. Click test: Pause/Play toggle
  const playPauseBtn = page.locator('#live-demo button:has-text("Pause"), #live-demo button:has-text("Play")').first();
  if (await playPauseBtn.isVisible()) {
    await playPauseBtn.click();
    await page.waitForTimeout(200);
    console.log('Tested Demo Pause/Play toggle');
  }

  // 6. Click test: Scroll Story Steps
  console.log('Testing Scroll Story Steps...');
  const storySteps = page.locator('#trip-story div[class*="cursor-pointer"]');
  const count = await storySteps.count();
  console.log(`Found ${count} interactive steps in Scroll Story`);
  for (let i = 0; i < count; i++) {
    await storySteps.nth(i).click();
    await page.waitForTimeout(200);
  }

  // 7. Click test: Partner Profile Tabs
  console.log('Testing Partner Tabs...');
  const partnerTabs = ['Auto Stand', 'Guide', 'Homestay', 'Vendor'];
  for (const p of partnerTabs) {
    const pBtn = page.locator(`#for-partners button:has-text("${p}")`).first();
    if (await pBtn.isVisible()) {
      await pBtn.click();
      await page.waitForTimeout(200);
      console.log(`Switched to partner tab: ${p}`);
    }
  }

  // 8. Test Search Input with autocomplete
  console.log('Testing City Search input...');
  const searchInput = page.locator('input[placeholder*="Where are you going?"]').first();
  if (await searchInput.isVisible()) {
    await searchInput.fill('Varanasi');
    await page.waitForTimeout(400);
    const suggestion = page.locator('text=Ghats & Spiritual Heartland').first();
    console.log('Autocomplete suggestion visible:', await suggestion.isVisible());
    await searchInput.fill('');
  }

  // 9. Verify all interactive links and buttons
  const allButtons = await page.locator('button').count();
  const allLinks = await page.locator('a[href]').count();
  console.log(`Total Interactive Elements: ${allButtons} buttons, ${allLinks} links`);

  // 10. Capture Full Page Screenshots at 3 Viewports
  console.log('Capturing Viewport Screenshots...');

  // 1280px (Desktop)
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  const path1280 = path.join(__dirname, 'screenshots', 'landing-rebuild', 'landing_1280px.png');
  await page.screenshot({ path: path1280, fullPage: true });
  console.log('Saved 1280px screenshot:', path1280);

  // 768px (Tablet)
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  const path768 = path.join(__dirname, 'screenshots', 'landing-rebuild', 'landing_768px.png');
  await page.screenshot({ path: path768, fullPage: true });
  console.log('Saved 768px screenshot:', path768);

  // 375px (Mobile)
  await page.setViewportSize({ width: 375, height: 812 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  const path375 = path.join(__dirname, 'screenshots', 'landing-rebuild', 'landing_375px.png');
  await page.screenshot({ path: path375, fullPage: true });
  console.log('Saved 375px screenshot:', path375);

  await browser.close();

  const results = {
    url,
    title,
    allButtons,
    allLinks,
    consoleErrors,
    pageErrors,
    passed: consoleErrors.length === 0 && pageErrors.length === 0,
    screenshots: {
      desktop_1280: 'frontend/screenshots/landing-rebuild/landing_1280px.png',
      tablet_768: 'frontend/screenshots/landing-rebuild/landing_768px.png',
      mobile_375: 'frontend/screenshots/landing-rebuild/landing_375px.png'
    }
  };

  fs.writeFileSync(
    path.join(__dirname, 'click_test_results.json'),
    JSON.stringify(results, null, 2)
  );

  console.log('--- PLAYWRIGHT AUDIT COMPLETE ---');
  console.log('Console Errors:', consoleErrors.length);
  console.log('Page Errors:', pageErrors.length);
  console.log('Result:', results.passed ? 'PASSED' : 'FAILED');
}

runTest().catch(err => {
  console.error('Test run failed:', err);
  process.exit(1);
});
