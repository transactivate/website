const fs = require('fs');
const path = require('path');

// Adjust 'dist' to 'build' if using Create React App instead of Vite
const outDir = path.join(__dirname, 'dist'); 
const targetDir = path.join(outDir, 'playbook-pdf');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.copyFileSync(path.join(outDir, 'index.html'), path.join(targetDir, 'index.html'));
fs.copyFileSync(path.join(outDir, 'index.html'), path.join(outDir, '404.html'));
console.log('Successfully cloned index.html for GitHub Pages SEO routing.');
