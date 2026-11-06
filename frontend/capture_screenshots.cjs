const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function capture() {
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const outDir = path.join(__dirname, 'screenshots', 'landing-aligned');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const viewports = [
    { name: 'landing_aligned_1280px.png', width: 1280, height: 900 },
    { name: 'landing_aligned_768px.png', width: 768, height: 1024 },
    { name: 'landing_aligned_375px.png', width: 375, height: 812 }
  ];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1000);
    const filePath = path.join(outDir, vp.name);
    await page.screenshot({ path: filePath, fullPage: true });
    console.log(`Saved screenshot: ${filePath}`);
    await page.close();
  }

  await browser.close();
}

capture().catch(console.error);

