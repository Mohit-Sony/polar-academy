const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');
const path = require('path');

async function processImages() {
  const inputDir = path.join(__dirname, 'public', 'images', 'students');
  
  for (let i = 1; i <= 8; i++) {
    for (const prefix of ['m', 'w']) {
      const inputFile = path.join(inputDir, `${prefix}${i}.jpg`);
      const outputFile = path.join(inputDir, `${prefix}${i}.png`);
      
      if (!fs.existsSync(inputFile)) continue;
      
      console.log(`Processing ${inputFile}...`);
      try {
        const fileUri = `file://${inputFile}`;
        const resultBlob = await removeBackground(fileUri);
        const buffer = Buffer.from(await resultBlob.arrayBuffer());
        
        fs.writeFileSync(outputFile, buffer);
        console.log(`Saved ${outputFile}`);
      } catch (err) {
        console.error(`Error processing ${inputFile}:`, err.message || err);
      }
    }
  }
}

processImages().then(() => console.log('Done!'));
