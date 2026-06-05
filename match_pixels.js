const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const brainDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\9ddc3c63-4100-4df1-8780-ae704c60e151';
const tempDir = path.join(brainDir, 'scratch', 'temp_download');

const uniqueProducts = [
  { id: "adjustable-weight-bench", "prodname": "Adjustable Weight Bench", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/YV/AF/RI/51701144/adjustable-weight-bench-250x250.jpg" },
  { id: "leg-curl-machine", "prodname": "Leg Curl Machine", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/WS/RC/QV/51701144/leg-curl-machine-250x250.jpg" },
  { id: "abdominal-exercises-machines", "prodname": "Abdominal Exercises Machines", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/QB/FT/ID/51701144/abdominal-exercises-machines-250x250.jpg" },
  { id: "curl-bar-stand", "prodname": "Curl Bar Stand", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/RJ/CR/HB/51701144/curl-bar-stand-250x250.jpg" },
  { id: "gym-smith-machine", "prodname": "Gym Smith Machine", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/FU/DK/NP/51701144/gym-smith-machine-250x250.jpg" },
  { id: "hack-squat-machines", "prodname": "Hack Squat Machines", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/ZO/OB/QM/51701144/hack-squat-machines-250x250.jpg" },
  { id: "inclined-t-bar-machine", "prodname": "Inclined T Bar Machine", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/KT/KD/JT/51701144/inclined-t-bar-machine-250x250.jpg" },
  { id: "pec-deck-machine", "prodname": "Pec Deck Machine", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/OV/RU/AD/51701144/pec-deck-machine-250x250.jpg" },
  { id: "olympic-flat-bench", "prodname": "Olympic Flat Bench", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/TV/AE/MU/51701144/olympic-flat-bench-250x250.jpg" },
  { id: "decline-weight-bench", "prodname": "Decline Weight Bench", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/VH/RV/NG/51701144/decline-weight-bench-250x250.jpg" },
  { id: "shoulder-press-free-weight", "prodname": "Shoulder Press Free Weight", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/EH/XW/RD/51701144/shoulder-press-free-weight-250x250.jpg" },
  { id: "multi-adjustable-bench-machine", "prodname": "Multi Adjustable Bench Machine", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/NP/EO/TB/51701144/multi-adjustable-bench-machine-250x250.jpg" },
  { id: "free-squat-rack", "prodname": "Free Squat Rack", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/LW/LH/MQ/51701144/free-squat-rack-250x250.jpg" },
  { id: "gym-dumbbell-stand", "prodname": "Gym Dumbbell Stand", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/LF/PX/QF/51701144/gym-machine-250x250.jpg" },
  { id: "horizontal-dumbbell-rack", "prodname": "Horizontal Dumbbell Rack", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/UX/BV/XO/51701144/horizontal-dumbbell-rack-250x250.jpg" },
  { id: "functional-trainer-gym-machine", "prodname": "Functional Trainer Gym Machine", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/YU/CN/VJ/51701144/gym-machine-250x250.jpg" },
  { id: "multi-functional-trainer-machine", "prodname": "Multi Functional Trainer Machine", "url": "https://5.imimg.com/data5/SELLER/Default/2021/5/MD/TV/RV/51701144/gym-machine-250x250.jpg" }
];

const https = require('https');

function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed, status: ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(filePath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function getImageFingerprint(imagePath) {
  try {
    const image = await Jimp.read(imagePath);
    image.resize({ w: 16, h: 16 });
    image.greyscale();
    
    const fingerprint = [];
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const color = image.getPixelColor(x, y);
        const r = (color >> 24) & 0xff;
        fingerprint.push(r);
      }
    }
    return fingerprint;
  } catch (e) {
    console.error(`Error processing ${imagePath}:`, e.message || e);
    return null;
  }
}

function getDistance(fp1, fp2) {
  let diff = 0;
  for (let i = 0; i < fp1.length; i++) {
    diff += Math.abs(fp1[i] - fp2[i]);
  }
  return diff;
}

async function start() {
  console.log("Re-downloading thumbnails with unique names...");
  for (const prod of uniqueProducts) {
    prod.localPath = path.join(tempDir, `${prod.id}_thumb.jpg`);
    await downloadFile(prod.url, prod.localPath);
  }
  console.log("Finished downloading thumbnails.");

  console.log("Computing fingerprints for product thumbnails...");
  for (const prod of uniqueProducts) {
    prod.fingerprint = await getImageFingerprint(prod.localPath);
  }

  console.log("Reading media__ files from brain...");
  const brainFiles = fs.readdirSync(brainDir)
    .filter(f => f.startsWith('media__') && (f.endsWith('.jpg') || f.endsWith('.png')));
  
  console.log(`Found ${brainFiles.length} media__ files in brain.`);
  
  const brainFingerprints = [];
  for (const file of brainFiles) {
    const filePath = path.join(brainDir, file);
    const fp = await getImageFingerprint(filePath);
    if (fp) {
      brainFingerprints.push({ name: file, fingerprint: fp });
    }
  }

  console.log("\nMatching products to media__ files...");
  const mapping = {};
  for (const prod of uniqueProducts) {
    if (!prod.fingerprint) continue;
    let minDistance = Infinity;
    let bestMatch = null;
    
    for (const brain of brainFingerprints) {
      const dist = getDistance(prod.fingerprint, brain.fingerprint);
      if (dist < minDistance) {
        minDistance = dist;
        bestMatch = brain.name;
      }
    }
    
    mapping[prod.id] = {
      prodname: prod.prodname,
      bestMatch: bestMatch,
      distance: minDistance
    };
    
    console.log(`Match: ${prod.prodname} (${prod.id}) -> ${bestMatch} (distance: ${minDistance})`);
  }

  fs.writeFileSync(path.join(brainDir, 'scratch', 'image_mapping.json'), JSON.stringify(mapping, null, 2));
  console.log("\nSaved mapping to scratch/image_mapping.json");
}

start().catch(console.error);
