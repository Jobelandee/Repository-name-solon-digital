const fs = require('fs');
const path = require('path');

const componentsDir = './src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('whileHover') || content.includes('whileTap')) {
    // Remove whileHover and whileTap properties (they trigger on scroll)
    // But keep meaningful animations that don't flash
    const original = content;
    
    // Remove whileHover and whileTap properties from motion components
    content = content.replace(/\s+whileHover=\{\{[^}]+\}\}/g, '');
    content = content.replace(/\s+whileTap=\{\{[^}]+\}\}/g, '');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      fixed++;
      console.log(`Fixed: ${file}`);
    }
  }
});

console.log(`\nTotal files fixed: ${fixed}`);
