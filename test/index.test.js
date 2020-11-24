const puppeteer = require("puppeteer");

let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({});
});

afterAll(async () => {
  await browser.close();
});

describe("Map Test", () => {
  test("GET Map element", async () => {
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000`);
    await page.waitForSelector(".Map");
    const element = await page.$(".Map");
    expect(element).toBeDefined();
  });
});

describe("Components Test", () => {
  test("Clicking Button", async () => {
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000`);
    await page.waitForSelector(".PricingButton__button");
    const button = await page.$(".PricingButton__button");
    const clicked = await button.evaluate((button) => {
      button.click();
    });
    expect(clicked).toBeDefined();
  });
});
