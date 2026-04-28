const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1350 }
  });
  
  await page.goto('http://localhost:8000/instagram-carousel.html');
  await page.waitForLoadState('networkidle');
  
  for (let i = 0; i < 5; i++) {
    if (i > 0) {
      await page.click('button#next');
      await page.waitForTimeout(1000);
    }
    
    await page.screenshot({
      path: `/Users/jobeland/Downloads/solon-slide-${i + 1}.jpg`,
      type: 'jpeg',
      quality: 100
    });
    console.log(`✓ Slide ${i + 1}`);
  }
  
  await browser.close();
})();
