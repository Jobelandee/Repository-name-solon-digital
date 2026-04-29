const fs = require('fs');
const path = require('path');

const filesToFix = [
  './src/components/CostOfWaiting.jsx',
  './src/components/HiddenCost.jsx',
  './src/components/IndustriesScale.jsx',
  './src/components/OurStory.jsx',
  './src/components/ServicesOverview.jsx',
  './src/components/ReviewsSection.jsx',
];

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const original = content;
    
    // More aggressive removal - also remove the properties from JSX
    content = content.replace(/\s+whileHover=\{\{[^}]+\}\}/g, '');
    content = content.replace(/\s+whileTap=\{\{[^}]+\}\}/g, '');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Fixed: ${path.basename(filePath)}`);
    }
  }
});
