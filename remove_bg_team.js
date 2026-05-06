const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');
const path = require('path');

const team = [
  {
    name: 'sardar-singh-ranwa',
    url: 'https://polaracademy.in/wp-content/uploads/2025/02/IMG-20250207-WA0007-2.jpg'
  },
  {
    name: 'rajendra-jat',
    url: 'https://polaracademy.in/wp-content/uploads/2025/02/IMG-20250207-WA0005-2.jpg'
  },
  {
    name: 'bhagwan-ram-raad',
    url: 'https://polaracademy.in/wp-content/uploads/2025/02/IMG-20250207-WA0004-2.jpg'
  }
];

async function processImages() {
  const outputDir = path.join(__dirname, 'public', 'images', 'team');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  for (const person of team) {
    const outputFile = path.join(outputDir, `${person.name}.png`);
    console.log(`Processing ${person.name}...`);
    try {
      const resultBlob = await removeBackground(person.url);
      const buffer = Buffer.from(await resultBlob.arrayBuffer());
      fs.writeFileSync(outputFile, buffer);
      console.log(`Saved ${outputFile}`);
    } catch (err) {
      console.error(`Error processing ${person.name}:`, err.message || err);
    }
  }
}

processImages().then(() => console.log('Done!'));
