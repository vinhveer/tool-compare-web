const puppeteer = require('puppeteer-core');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

(async () => {
  // 1. Khởi Puppeteer
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // 2. Giả lập desktop
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
    'AppleWebKit/537.36 (KHTML, like Gecko) ' +
    'Chrome/114.0.0.0 Safari/537.36'
  );

  console.log('Đang mở trang...');
  await page.goto('https://www.nybgplasticsurgery.com/', {
    waitUntil: 'networkidle2',
    timeout: 0
  });
  console.log('Trang đã load (networkidle2)');

  // 3. Cuộn trang để trigger lazy-load
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 500));
    }
    window.scrollTo(0, 0);
  });
  console.log('Đã cuộn hết trang');

  // 4. Chờ tĩnh thêm
  await new Promise(r => setTimeout(r, 5000));
  console.log('Chờ tĩnh 5s xong');

  // 5. Tìm tất cả div.class*="mod" và lấy thông tin vị trí
  await page.waitForSelector('div[class*="mod"]', { timeout: 60000 });
  const modInfo = await page.evaluate(() => {
    const divs = document.querySelectorAll('div[class*="mod"]');
    const results = [];
    
    divs.forEach((div, index) => {
      const rect = div.getBoundingClientRect();
      const style = window.getComputedStyle(div);
      results.push({
        index: index + 1,
        x: rect.x,
        y: rect.y + window.scrollY,
        width: rect.width,
        height: rect.height,
        minHeight: parseFloat(style.minHeight) || 0,
        className: div.className
      });
    });
    
    return results;
  });

  console.log(`Tìm thấy ${modInfo.length} khối mod`);

  // 6. Tính toán thống kê height
  const heights = modInfo.map(info => info.height);
  const minHeight = Math.min(...heights);
  const maxHeight = Math.max(...heights);
  const avgHeight = (minHeight + maxHeight) / 2;

  console.log('=== THỐNG KÊ HEIGHT ===');
  console.log(`Min height: ${minHeight}px`);
  console.log(`Max height: ${maxHeight}px`);
  console.log(`Avg height: ${avgHeight}px`);

  // 7. Chụp full page
  const fullBuffer = await page.screenshot({ fullPage: true });
  const outPath = path.join(__dirname, 'fullpage.png');
  await fs.promises.writeFile(outPath, fullBuffer);
  console.log(`✅ Đã lưu ảnh full page: ${outPath}`);

  // 8. Tính độ dài ảnh theo công thức
  const imageHeight = await page.evaluate(() => document.body.scrollHeight);
  const calculatedLength = imageHeight - minHeight + avgHeight;
  
  console.log('=== KẾT QUẢ TÍNH TOÁN ===');
  console.log(`Độ dài ảnh: ${imageHeight}px`);
  console.log(`Công thức: ${imageHeight} - ${minHeight} + ${avgHeight} = ${calculatedLength}px`);

  // 9. Ghi thông tin chi tiết
  const report = {
    timestamp: new Date().toISOString(),
    imageHeight,
    minHeight,
    maxHeight,
    avgHeight,
    calculatedLength,
    modBlocks: modInfo
  };

  await fs.promises.writeFile(
    path.join(__dirname, 'mod_analysis.json'),
    JSON.stringify(report, null, 2)
  );
  console.log('✅ Đã lưu báo cáo phân tích: mod_analysis.json');

  await browser.close();
  console.log('Hoàn thành!');
})();
