const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://google.com/');
  await page.setViewport({
    height: 1200,
    width: 1200,
  });

  await page.screenshot({
    path: 'image.png',
  });

  await browser.close();
})().catch((err) => {
  console.log(err.message);
});
