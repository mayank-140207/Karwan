const fs = require('fs');
const https = require('https');
const path = require('path');
const crypto = require('crypto');

const missingUrls = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDebp40oia3iZO_HVFnHNF7AFytbsFlFrwBvQ82eZZGbonxvWgYpKa3jHZ9CIF-lVIpe10aZDtjuMKsUp3OGM2Bxj1AV8Hs4WkDV_qcyZM2BNDY8joUNXdvWwj0PvfignRduZ_OY2wDFFYP_6T28_SJn2PrU5ZwwDSKurMtHteG5qn_SdzwkJWrH753is_gYDBY_E7oP8StXI0cwugEWP0E4R7PCt4mT8XqNP-SUN9Zowe22pqQQg0pew",
  "https://lh3.googleusercontent.com/aida/AEtjO1V0vupePwskolCgzGLUvZGtjIRsHVsBAvow38wAqgW7YyHqFbFEr3xpvDGdaUytyAaf_24j1s2xcuJCluwomCN-zjcfKTxgPwVrF2ry5JWgo7DnrTYO7KB-ppLx__eYI9MlET4nsVC8d0ZaNd24w6FO_Pm8AOYvvTdn0vZBCRIVWBAxetrV9CYkY83vgB0PM3xfQJVqw1-5njI7IaKEDIDg6tWMvt0dHntyWYXADDAbSccDKeHCs-h29hfX",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDU-udMjPYWB40iFU11yhgQFWJJM8ntQzKU2Y4RaWcSAqyIkT71Da8vPAPzKvNo4RZggpbvEgnMQ6jJgeiiuPOj-AhUo2qOABRJTw9d7oN-0IXdZ2ayeGSLx2j_1YnjnZfMS4FGknZkEWnuIXQYhq0DVWebfCQHpdAEd7wHsf01G4kN_agvx4toG6FLnYWXudXPXvN4d04MGhRMEo3xhyZaSruoyQ8vHDpdnwx6wepYuy9wOEJLsMexYQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlHN1s0MUfhn7IGKJZZO7zwC1sjo-VIS8sXt8xYmyQ3J4Wyf_oGaAXROX8MSZaxDQokoIVQp5XSPypUV37RmGax8v_qhOPcxaS6rVUC90AXKeTYrH60nEUUy3jhK1E0YioKq0i5nn_AtxUUnbj8BvmgUHR86ysMXdPZyoW_pyyov5pdKPj18wzbDRgS3YbOieNPHrcX4OC6Hai_z1qw11KYoNRpgrC-PkUMd6B5Gg9f_JMdLCH67JKEw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCStxXi3NH1jCPiweJEePH0qdy2nQqHRr05M8cKtg5kJyNU9TzGCN2xenJhacBYP38FhdLiF9MWmTO5m2gLHhhEMWzCRu15de9OyWqVT_MOIaFA8jtN26hYcGB85NJK4sdgRI1RpG1LsOi8vcIOPV49lDWMPzb2ek_r6Kxcoih7_qBC_yUE_HaHrXJ91rZmvnAqQ6TSEr1RY7f8YXillMTvwMXpV-Ib4qhdhTx89vtKtLpXZuMMUakRVA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9ZWQVUlQjjJfVhQjURQmDN_5fisdMS2Lv3QaM1IG43UXMhovIgUrQmrhKjMYX3A3FdQDZU74PxeMO6N9vNhvGize00FpjrVA_D0WKiANlYWmoNAeJLMlE196bZtjljIvQFTaGAOjwHcFUTE9PD4NCrIxO1muRLgFW-alHYaNcUuhXr1RxL_S3pyYTNqCXRGs2dfxqjALKghC-mJCLMJWM8njlA2FQWM3aj4XVQiOitXzVksugBKTM7A",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBUCkap-KREwhR83rcjnbNJ0xS36CCy9k2skv3o0wIf6foU6scox0_SIH9xC1QLEA4n6CAx2tSsdZU83nRjEQFvbYlyoJeaL1ZXbA1xMRa2I9dRuA7ELgBCox0ikOQysOj0_HzF1m0wer6mc_bir0ePilsoTPwV0vC8Gba-OyDH3gE3t4PyPEQAnn-o8Vcdb9lDA1I9a-C9smDuDMe5QAwdpYZVigIYkn7ert-l3gNPd3q-zmamBgn2OQ"
];

const mapPath = path.join(__dirname, 'url_to_local_image.json');
let urlMap = {};
if (fs.existsSync(mapPath)) {
  urlMap = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
}

async function downloadOne(url) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 12);
    const filename = `img_${hash}.jpg`;
    const dest = path.join(__dirname, 'public', 'images', filename);
    const relPath = `/images/${filename}`;

    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          urlMap[url] = relPath;
          console.log(`Saved ${filename} for ${url.slice(0, 50)}...`);
          resolve();
        });
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const url of missingUrls) {
    if (!urlMap[url]) {
      try {
        await downloadOne(url);
      } catch (e) {
        console.error('Error downloading:', e.message);
      }
    }
  }
  fs.writeFileSync(mapPath, JSON.stringify(urlMap, null, 2), 'utf8');
  console.log('Updated url_to_local_image.json');
}

main();
