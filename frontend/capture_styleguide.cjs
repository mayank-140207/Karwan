const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const os = require('os');
const { spawn } = require('child_process');

async function main() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const artifactDir = 'C:\\Users\\MAYANK\\.gemini\\antigravity\\brain\\d0cb3920-5633-4c2e-96da-0a23555afc59';

  console.log('Starting preview server on port 4173...');
  const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    cwd: path.join(__dirname),
    shell: true,
    stdio: 'pipe'
  });

  server.stdout.on('data', (d) => console.log('[preview]', d.toString()));
  server.stderr.on('data', (d) => console.error('[preview err]', d.toString()));

  await new Promise(r => setTimeout(r, 2200));

  const tempUserDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge_sg2_'));

  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    userDataDir: tempUserDataDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  try {
    const page = await browser.newPage();

    // 1. Desktop Viewport (1280 x 800)
    console.log('\n--- Capturing Styleguide at 1280px ---');
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
    await page.goto('http://localhost:4173/styleguide', { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 800));

    // Section 1: Hero & Tokens
    await page.screenshot({ path: path.join(artifactDir, 'styleguide_1280px.png'), fullPage: false });

    // Section 2: Typography & Buttons
    await page.evaluate(() => window.scrollTo({ top: 920, behavior: 'instant' }));
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(artifactDir, 'styleguide_components_1280px.png'), fullPage: false });

    // Section 3: Cards, StatTiles & Motion
    await page.evaluate(() => window.scrollTo({ top: 1750, behavior: 'instant' }));
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(artifactDir, 'styleguide_cards_1280px.png'), fullPage: false });

    // Section 4: DeviceFrames & Dark Section
    await page.evaluate(() => window.scrollTo({ top: 2750, behavior: 'instant' }));
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(artifactDir, 'styleguide_devices_dark_1280px.png'), fullPage: false });

    // 2. Mobile Viewport (375 x 812)
    console.log('\n--- Capturing Styleguide at 375px ---');
    await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2, isMobile: true });
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(artifactDir, 'styleguide_375px.png'), fullPage: false });

    // Mobile components
    await page.evaluate(() => window.scrollTo({ top: 1300, behavior: 'instant' }));
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(artifactDir, 'styleguide_mobile_components_375px.png'), fullPage: false });

    // Mobile devices & dark section
    await page.evaluate(() => window.scrollTo({ top: 3800, behavior: 'instant' }));
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(artifactDir, 'styleguide_mobile_dark_375px.png'), fullPage: false });

    console.log('All screenshots saved successfully.');
  } catch (err) {
    console.error('Error during screenshot capture:', err);
  } finally {
    await browser.close();
    server.kill();
    process.exit(0);
  }
}

main();
