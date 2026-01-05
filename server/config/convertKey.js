const fs = require('fs');

const jsonPath = './serviceAccountKey.json';
const outputPath = './fb_key_base64.txt';

const jsonData = fs.readFileSync(jsonPath);
const base64 = Buffer.from(jsonData).toString('base64');

fs.writeFileSync(outputPath, base64);
console.log(base64);
