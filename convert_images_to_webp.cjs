const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'public', 'images');
const mapFile = path.join(__dirname, 'url_to_local_image.json');

async function convertAll() {
  const files = fs.readdirSync(imagesDir);
  console.log(`Found ${files.length} files in public/images`);

  let count = 0;
  for (const file of files) {
    if (file.endsWith('.webp')) continue;
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const baseName = path.basename(file, ext);
    const srcPath = path.join(imagesDir, file);
    const destPath = path.join(imagesDir, `${baseName}.webp`);

    try {
      const metadata = await sharp(srcPath).metadata();
      const targetWidth = metadata.width > 1600 ? 1600 : metadata.width;

      await sharp(srcPath)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(destPath);

      const stats = fs.statSync(destPath);
      // console.log(`Converted ${file} -> ${baseName}.webp (${Math.round(stats.size / 1024)} KB)`);
      count++;
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err.message);
    }
  }

  console.log(`Successfully converted ${count} images to WebP.`);

  // Update url_to_local_image.json
  if (fs.existsSync(mapFile)) {
    const map = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
    for (const key of Object.keys(map)) {
      map[key] = map[key].replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    fs.writeFileSync(mapFile, JSON.stringify(map, null, 2), 'utf8');
    console.log(`Updated url_to_local_image.json with .webp extensions.`);
  }
}

convertAll();

