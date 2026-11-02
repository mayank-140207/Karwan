const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const os = require('os');

async function main() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  console.log('Launching browser with:', edgePath);

  const tempUserDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge_audit_'));

  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    userDataDir: tempUserDataDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    console.log('Navigating to http://localhost:5173/ ...');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });

    // 1. Top of page verification (Desktop)
    console.log('\n--- 1. Top of Landing Page ---');
    await new Promise(r => setTimeout(r, 1000));
    const topScreenshotPath = path.join(__dirname, 'landing_top.png');
    await page.screenshot({ path: topScreenshotPath });
    console.log('Saved top screenshot:', topScreenshotPath, `(${fs.statSync(topScreenshotPath).size} bytes)`);

    // 2. Scroll to Traveller-type Section & capture each tab
    console.log('\n--- 2. Traveller-type Section ---');
    await page.evaluate(() => {
      const el = document.getElementById('for-travellers');
      if (el) {
        const headerOffset = 60;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        // Scroll so buttons and card are well visible
        window.scrollTo({ top: elementPosition - headerOffset + 80, behavior: 'instant' });
      }
    });
    await new Promise(r => setTimeout(r, 800));

    const travellerScreenshotPath = path.join(__dirname, 'landing_traveller_section.png');
    await page.screenshot({ path: travellerScreenshotPath });
    console.log('Saved traveller section screenshot (Solo Explorer):', travellerScreenshotPath);

    // Capture all 4 tabs to verify subject visibility
    const tabs = ['Solo Explorer', 'Family Traveller', 'Backpacker', 'Business Traveller'];
    for (let i = 0; i < tabs.length; i++) {
      const tabName = tabs[i];
      await page.evaluate((idx) => {
        const btns = Array.from(document.querySelectorAll('#for-travellers button'));
        if (btns[idx]) btns[idx].click();
      }, i);
      await new Promise(r => setTimeout(r, 500));
      const tabScreenshotPath = path.join(__dirname, `tab_${i}_${tabName.toLowerCase().replace(/\s+/g, '_')}.png`);
      await page.screenshot({ path: tabScreenshotPath });
      console.log(`Saved screenshot for ${tabName}:`, tabScreenshotPath);
    }

  // 3. Scroll to Footer
  console.log('\n--- 3. Footer Section ---');
  await page.evaluate(() => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'instant', block: 'end' });
    } else {
      window.scrollTo(0, document.body.scrollHeight);
    }
  });
  await new Promise(r => setTimeout(r, 800));

  const footerScreenshotPath = path.join(__dirname, 'landing_footer.png');
  await page.screenshot({ path: footerScreenshotPath });
  console.log('Saved footer screenshot:', footerScreenshotPath, `(${fs.statSync(footerScreenshotPath).size} bytes)`);

  // 4. Mobile Viewport Check (375x812 iPhone / Android standard)
  console.log('\n--- 4. Mobile Viewport Check (375x812) ---');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));

  const mobileScreenshotPath = path.join(__dirname, 'landing_mobile.png');
  await page.screenshot({ path: mobileScreenshotPath });
  console.log('Saved mobile screenshot:', mobileScreenshotPath, `(${fs.statSync(mobileScreenshotPath).size} bytes)`);

  // 5. Overall Broken Images Audit across whole page
  console.log('\n--- 5. Broken Images & Alt Text Audit ---');
  await page.setViewport({ width: 1440, height: 900 });
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
  await new Promise(r => setTimeout(r, 1000));

  const imageAudit = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => ({
      src: img.src,
      alt: img.alt,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      broken: !img.complete || img.naturalWidth === 0
    }));
  });

  const broken = imageAudit.filter(i => i.broken);
  console.log(`Total images on page: ${imageAudit.length}`);
  console.log(`Broken images: ${broken.length}`);
  if (broken.length > 0) {
    console.error('Broken images list:', broken);
  } else {
    console.log('All images verified cleanly with naturalWidth > 0!');
  }

  } finally {
    if (browser) {
      await browser.close();
    }
  }

  // Copy fresh screenshots to artifact directory
  const artifactDir = 'C:\\Users\\MAYANK\\.gemini\\antigravity\\brain\\d0cb3920-5633-4c2e-96da-0a23555afc59';
  if (fs.existsSync(artifactDir)) {
    const filesToCopy = [
      'landing_top.png',
      'landing_traveller_section.png',
      'landing_footer.png',
      'landing_mobile.png'
    ];
    for (const f of filesToCopy) {
      const src = path.join(__dirname, f);
      const dst = path.join(artifactDir, f);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dst);
        console.log(`Copied ${f} to artifact directory.`);
      }
    }
  }

  console.log('\nAll verification steps completed successfully.');
}

main().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
