const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function main() {
  console.log('=== STARTING KARWAN ANIMATIONS QUALITY & VIDEO RECORDING AUDIT ===');

  const recDir = path.join(__dirname, 'recordings');
  if (!fs.existsSync(recDir)) {
    fs.mkdirSync(recDir, { recursive: true });
  }

  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = {
    desktop: {},
    mobile: {},
    consoleErrors: [],
    pageErrors: []
  };

  // --- 1. RECORD SCROLL VIDEO AT 1280px WIDE ---
  console.log('\n1. Recording scroll video at 1280px...');
  const desktopCtx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    recordVideo: {
      dir: recDir,
      size: { width: 1280, height: 900 }
    }
  });

  const desktopPage = await desktopCtx.newPage();

  desktopPage.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('DESKTOP CONSOLE ERROR:', msg.text());
      results.consoleErrors.push(msg.text());
    }
  });

  desktopPage.on('pageerror', err => {
    console.log('DESKTOP PAGE ERROR:', err.message);
    results.pageErrors.push(err.message);
  });

  // Setup CLS listener
  await desktopPage.addInitScript(() => {
    window.__cls = 0;
    try {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            window.__cls += entry.value;
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });
    } catch {}
  });

  await desktopPage.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle', timeout: 30000 });
  await desktopPage.waitForTimeout(1000);

  // Smooth step-by-step scroll recording to capture all animations
  const totalHeight = await desktopPage.evaluate(() => document.documentElement.scrollHeight);
  console.log(`   Page total height: ${totalHeight}px`);

  const scrollSteps = 24;
  for (let i = 1; i <= scrollSteps; i++) {
    const scrollY = (totalHeight / scrollSteps) * i;
    await desktopPage.evaluate(y => window.scrollTo({ top: y, behavior: 'smooth' }), scrollY);
    await desktopPage.waitForTimeout(400); // Allow GSAP scrub and crossfades to play
  }

  // Hover over Product Demo to verify hover pause
  const demoSection = desktopPage.locator('#live-demo');
  if (await demoSection.isVisible()) {
    await demoSection.hover();
    await desktopPage.waitForTimeout(800);
  }

  // Scroll back to top
  await desktopPage.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await desktopPage.waitForTimeout(1000);

  // Measure desktop metrics
  results.desktop = await desktopPage.evaluate(() => {
    const scrollWidth = document.documentElement.scrollWidth;
    const innerWidth = window.innerWidth;
    return {
      scrollWidth,
      innerWidth,
      hasHorizontalScroll: scrollWidth > innerWidth,
      cls: window.__cls || 0
    };
  });

  const desktopVideo = await desktopPage.video();
  await desktopPage.close();
  await desktopCtx.close();

  if (desktopVideo) {
    const desktopPath = await desktopVideo.path();
    const finalDesktopPath = path.join(recDir, 'scroll_1280px.webm');
    if (fs.existsSync(desktopPath)) {
      if (fs.existsSync(finalDesktopPath)) fs.unlinkSync(finalDesktopPath);
      fs.renameSync(desktopPath, finalDesktopPath);
      console.log(`   Desktop video saved to: ${finalDesktopPath}`);
    }
  }

  // --- 2. RECORD SCROLL VIDEO AT 375px WIDE (MOBILE) ---
  console.log('\n2. Recording scroll video at 375px (Mobile)...');
  const mobileCtx = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true,
    hasTouch: true,
    recordVideo: {
      dir: recDir,
      size: { width: 375, height: 812 }
    }
  });

  const mobilePage = await mobileCtx.newPage();

  mobilePage.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('MOBILE CONSOLE ERROR:', msg.text());
      results.consoleErrors.push(msg.text());
    }
  });

  mobilePage.on('pageerror', err => {
    console.log('MOBILE PAGE ERROR:', err.message);
    results.pageErrors.push(err.message);
  });

  await mobilePage.addInitScript(() => {
    window.__cls = 0;
    try {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            window.__cls += entry.value;
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });
    } catch {}
  });

  await mobilePage.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle', timeout: 30000 });
  await mobilePage.waitForTimeout(1000);

  const mobileTotalHeight = await mobilePage.evaluate(() => document.documentElement.scrollHeight);
  console.log(`   Mobile total height: ${mobileTotalHeight}px`);

  const mobileSteps = 20;
  for (let i = 1; i <= mobileSteps; i++) {
    const scrollY = (mobileTotalHeight / mobileSteps) * i;
    await mobilePage.evaluate(y => window.scrollTo({ top: y, behavior: 'smooth' }), scrollY);
    await mobilePage.waitForTimeout(350);
  }

  await mobilePage.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await mobilePage.waitForTimeout(800);

  results.mobile = await mobilePage.evaluate(() => {
    const scrollWidth = document.documentElement.scrollWidth;
    const innerWidth = window.innerWidth;
    return {
      scrollWidth,
      innerWidth,
      hasHorizontalScroll: scrollWidth > innerWidth,
      cls: window.__cls || 0
    };
  });

  const mobileVideo = await mobilePage.video();
  await mobilePage.close();
  await mobileCtx.close();

  if (mobileVideo) {
    const mobilePath = await mobileVideo.path();
    const finalMobilePath = path.join(recDir, 'scroll_375px.webm');
    if (fs.existsSync(mobilePath)) {
      if (fs.existsSync(finalMobilePath)) fs.unlinkSync(finalMobilePath);
      fs.renameSync(mobilePath, finalMobilePath);
      console.log(`   Mobile video saved to: ${finalMobilePath}`);
    }
  }

  await browser.close();

  console.log('\n=== QUALITY METRICS SUMMARY ===');
  console.log('Desktop Metrics (1280px):', results.desktop);
  console.log('Mobile Metrics (375px):', results.mobile);
  console.log('Console Errors:', results.consoleErrors.length);
  console.log('Page Errors:', results.pageErrors.length);

  fs.writeFileSync(
    path.join(__dirname, 'animation_audit_results.json'),
    JSON.stringify(results, null, 2)
  );
}

main().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});

