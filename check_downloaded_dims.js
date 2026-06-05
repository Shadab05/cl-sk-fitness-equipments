const fs = require('fs');
const path = require('path');
const https = require('https');
const { Jimp } = require('jimp');

const brainDir = 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/9ddc3c63-4100-4df1-8780-ae704c60e151';
const tempDir = path.join(brainDir, 'scratch/temp_download_full');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const url = 'https://5.imimg.com/data5/SELLER/Default/2021/5/YV/AF/RI/51701144/adjustable-weight-bench.jpg';
const dest = path.join(tempDir, 'adjustable-weight-bench.jpg');

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

async function start() {
  try {
    console.log("Downloading full image...");
    await downloadFile(url, dest);
    console.log("Downloaded successfully. Reading image details...");
    const img = await Jimp.read(dest);
    console.log(`Dimensions: ${img.bitmap.width}x${img.bitmap.height}`);
  } catch (e) {
    console.error("Error:", e.message || e);
  }
}

start();
