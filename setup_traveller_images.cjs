const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');
const pairs = [
  ['tab_solo_explorer', 'solo-traveller'],
  ['tab_family_traveller', 'family'],
  ['tab_backpacker', 'backpacker'],
  ['tab_business_traveller', 'business'],
  // Also support underscore and other variations
  ['tab_solo_explorer', 'solo_traveller'],
  ['tab_family_traveller', 'family_traveller'],
  ['tab_business_traveller', 'business_traveller']
];

for (const [srcPrefix, dstPrefix] of pairs) {
  const srcWebp = path.join(imgDir, `${srcPrefix}.webp`);
  const srcPng = path.join(imgDir, `${srcPrefix}.png`);

  if (fs.existsSync(srcWebp)) {
    fs.copyFileSync(srcWebp, path.join(imgDir, `${dstPrefix}.webp`));
    fs.copyFileSync(srcWebp, path.join(imgDir, `${dstPrefix}.jpg`));
  }
  if (fs.existsSync(srcPng)) {
    fs.copyFileSync(srcPng, path.join(imgDir, `${dstPrefix}.png`));
  }
}

const checkFiles = [
  'solo-traveller.webp', 'solo-traveller.png', 'solo-traveller.jpg',
  'family.webp', 'family.png', 'family.jpg',
  'backpacker.webp', 'backpacker.png', 'backpacker.jpg',
  'business.webp', 'business.png', 'business.jpg',
  'tab_solo_explorer.webp', 'tab_family_traveller.webp',
  'tab_backpacker.webp', 'tab_business_traveller.webp'
];

console.log('--- Checking Image Files in /public/images ---');
for (const file of checkFiles) {
  const p = path.join(imgDir, file);
  if (fs.existsSync(p)) {
    const size = fs.statSync(p).size;
    console.log(`${file}: ${size} bytes (${(size / 1024).toFixed(1)} KB) - ${size > 10240 ? 'OK (>10KB)' : 'TOO SMALL'}`);
  } else {
    console.error(`MISSING: ${file}`);
  }
}

