const fs = require('fs');
const path = require('path');
const https = require('https');
const { Jimp } = require('jimp');

const assetsDir = 'd:/AI Work/client-websites/sk-fitness-equipments/assets';

const products = [
  { id: "adjustable-weight-bench", dest: "adjustable-weight-bench.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/YV/AF/RI/51701144/adjustable-weight-bench.jpg" },
  { id: "leg-curl-machine", dest: "leg-curl-machine.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/WS/RC/QV/51701144/leg-curl-machine.jpg" },
  { id: "abdominal-exercises-machines", dest: "abdominal-exercises-machines.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/QB/FT/ID/51701144/abdominal-exercises-machines.jpg" },
  { id: "curl-bar-stand", dest: "curl-bar-stand.jpg", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/RJ/CR/HB/51701144/curl-bar-stand.jpg" },
  { id: "gym-smith-machine", dest: "gym-smith-machine.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/FU/DK/NP/51701144/gym-smith-machine.jpg" },
  { id: "hack-squat-machines", dest: "hack-squat-machines.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/ZO/OB/QM/51701144/hack-squat-machines.jpg" },
  { id: "inclined-t-bar-machine", dest: "inclined-t-bar-machine.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/KT/KD/JT/51701144/inclined-t-bar-machine.jpg" },
  { id: "pec-deck-machine", dest: "pec-deck-machine.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/OV/RU/AD/51701144/pec-deck-machine.jpg" },
  { id: "olympic-flat-bench", dest: "olympic-flat-bench.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/TV/AE/MU/51701144/olympic-flat-bench.jpg" },
  { id: "decline-weight-bench", dest: "decline-weight-bench.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/VH/RV/NG/51701144/decline-weight-bench.jpg" },
  { id: "shoulder-press-free-weight", dest: "shoulder-press-free-weight.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/EH/XW/RD/51701144/shoulder-press-free-weight.jpg" },
  { id: "multi-adjustable-bench-machine", dest: "multi-adjustable-bench-machine.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/NP/EO/TB/51701144/multi-adjustable-bench-machine.jpg" },
  { id: "free-squat-rack", dest: "free-squat-rack.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/LW/LH/MQ/51701144/free-squat-rack.jpg" },
  { id: "gym-dumbbell-stand", dest: "gym-dumbbell-stand.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/LF/PX/QF/51701144/gym-machine.jpg" },
  { id: "horizontal-dumbbell-rack", dest: "horizontal-dumbbell-rack.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/UX/BV/XO/51701144/horizontal-dumbbell-rack.jpg" },
  { id: "functional-trainer-gym-machine", dest: "functional-trainer-gym-machine.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/YU/CN/VJ/51701144/gym-machine.jpg" },
  { id: "multi-functional-trainer-machine", dest: "multi-functional-trainer-machine.png", url: "https://5.imimg.com/data5/SELLER/Default/2021/5/MD/TV/RV/51701144/gym-machine.jpg" }
];

function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download, status: ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function start() {
  console.log("Downloading and converting product images...");
  for (const prod of products) {
    const destPath = path.join(assetsDir, prod.dest);
    console.log(`Processing ${prod.id} (${prod.dest}) from ${prod.url}...`);
    try {
      const buffer = await downloadFile(prod.url);
      const img = await Jimp.read(buffer);
      await img.write(destPath);
      console.log(`Success! Saved to ${destPath}`);
    } catch (e) {
      console.error(`Error for ${prod.id}:`, e.message || e);
    }
  }
  console.log("All product images updated!");
}

start().catch(console.error);
