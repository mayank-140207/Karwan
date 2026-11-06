const { chromium } = require('playwright');

async function runAudit() {
  console.log('--- STARTING LAYOUT & ALIGNMENT AUDIT ---');

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
      console.log('BROWSER ERROR:', msg.text());
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.message);
    pageErrors.push(err.message);
  });

  const url = 'http://127.0.0.1:5173/';
  console.log('Navigating to', url);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

  // 1. Check Header --header-h and html scroll-padding-top
  const headerStyles = await page.evaluate(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    const headerH = rootStyle.getPropertyValue('--header-h').trim();
    const scrollPaddingTop = rootStyle.getPropertyValue('scroll-padding-top').trim();
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl ? headerEl.offsetHeight : 0;
    return { headerH, scrollPaddingTop, headerHeight };
  });
  console.log('1. Header & HTML Scroll Padding:', headerStyles);

  // 2. Check Search button with ⌘K and Command Palette
  const searchBtn = page.locator('header button:has-text("⌘K")').first();
  const searchBtnExists = await searchBtn.isVisible();
  console.log('2. Search button showing ⌘K is visible:', searchBtnExists);

  // Click Search button
  await searchBtn.click();
  await page.waitForTimeout(300);
  const paletteModal = page.locator('[role="dialog"][aria-label="City search command palette"]');
  const paletteOpen = await paletteModal.isVisible();
  console.log('   Command Palette opened:', paletteOpen);

  // Type in palette search
  const paletteInput = paletteModal.locator('input');
  await paletteInput.fill('Vrindavan');
  await page.waitForTimeout(300);
  const vrindavanSuggestion = paletteModal.locator('text=Mathura & Vrindavan').first();
  const vrindavanVisible = await vrindavanSuggestion.isVisible();
  console.log('   Search autocomplete suggestion visible:', vrindavanVisible);

  // Press Escape to close
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);
  const paletteClosed = !(await paletteModal.isVisible());
  console.log('   Command Palette closed on Escape:', paletteClosed);

  // Also test Cmd+K / Ctrl+K keyboard shortcut
  await page.keyboard.press('Control+k');
  await page.waitForTimeout(200);
  const reopenedViaShortcut = await paletteModal.isVisible();
  console.log('   Command Palette opened via shortcut:', reopenedViaShortcut);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);

  // 3. Check 2px green scroll-progress line
  const progressLine = page.locator('[role="progressbar"]');
  const progressLineVisible = await progressLine.isVisible();
  const progressLineHeight = await progressLine.evaluate(el => el.offsetHeight);
  console.log('3. Top scroll-progress line visible:', progressLineVisible, `(Height: ${progressLineHeight}px)`);

  // 4. Check Headings: Noto Serif + italic accent phrase in every section
  const headingsAudit = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, blockquote'));
    return headings.map(h => {
      const text = h.innerText.replace(/\n/g, ' ');
      const italic = h.querySelector('span.italic, em, i');
      const italicText = italic ? italic.innerText : null;
      const computed = getComputedStyle(h);
      return {
        tag: h.tagName,
        text: text.substring(0, 40) + '...',
        fontFamily: computed.fontFamily.includes('Noto Serif') ? 'Noto Serif' : computed.fontFamily,
        hasItalicAccent: Boolean(italic),
        italicText,
        textWrap: computed.textWrap
      };
    });
  });
  console.log('4. Headings Audit (sample):', headingsAudit.slice(0, 6));

  // 5. "How Karwan works" cards benefit check
  const howCardsAudit = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('#how-it-works [class*="rounded-3xl"]'));
    const hasOldProtocol = document.body.innerText.includes('KARWAN PROTOCOL') || document.body.innerText.includes('Verified Step');
    return {
      cardsCount: cards.length,
      hasOldProtocolBadge: hasOldProtocol,
      cardBenefits: cards.map(c => {
        const benefitEl = c.querySelector('.text-secondary');
        return benefitEl ? benefitEl.innerText : null;
      })
    };
  });
  console.log('5. How It Works Cards Audit:', howCardsAudit);

  // 6. Layout Alignment Audit: Left edge of logo vs headings vs cards
  const alignmentAudit = await page.evaluate(() => {
    const logo = document.querySelector('header a[href="/"]');
    const heroH1 = document.querySelector('h1');
    const demoH2 = document.querySelector('#live-demo h2');
    const storyH2 = document.querySelector('#trip-story h2');
    const howH2 = document.querySelector('#how-it-works h2');

    const getX = el => el ? Math.round(el.getBoundingClientRect().left) : null;
    return {
      logoX: getX(logo),
      heroH1X: getX(heroH1),
      demoH2X: getX(demoH2),
      storyH2X: getX(storyH2),
      howH2X: getX(howH2)
    };
  });
  console.log('6. Left Alignment Audit (Bounding Rect X):', alignmentAudit);

  // 7. Back-to-top button appearing after 600px scroll
  let backToTop = page.locator('button[title="Back to top"]');
  const bttInitial = await backToTop.evaluate(el => el.classList.contains('opacity-100'));
  console.log('7. Back-to-top initial visibility (at top):', bttInitial);

  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(300);
  const bttScrolled = await backToTop.evaluate(el => el.classList.contains('opacity-100'));
  console.log('   Back-to-top after scrolling >600px:', bttScrolled);

  // 8. Footer oversized faded wordmark
  const footerWordmark = await page.evaluate(() => {
    const footer = document.querySelector('footer');
    const spans = footer ? Array.from(footer.querySelectorAll('span')) : [];
    const wordmark = spans.find(s => s.innerText.trim() === 'Karwan' && s.className.includes('leading-none'));
    return {
      footerExists: Boolean(footer),
      hasWordmark: Boolean(wordmark),
      wordmarkText: wordmark ? wordmark.innerText : null,
      isBackground: wordmark ? wordmark.parentElement.classList.contains('absolute') : false
    };
  });
  console.log('8. Footer Wordmark Audit:', footerWordmark);

  console.log('Console Errors:', consoleErrors.length);
  console.log('Page Errors:', pageErrors.length);

  await browser.close();
  console.log('--- AUDIT COMPLETED ---');
}

runAudit().catch(err => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
