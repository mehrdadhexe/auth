const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 3000;

app.get('/scrape', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();
  await browser.close();
  res.send(`Page title is: ${title}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});