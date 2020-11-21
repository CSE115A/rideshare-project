const puppeteer = require("puppeteer");

let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({});
});

afterAll(async () => {
  await browser.close();
});

describe("First Test", () => {
  test("GET Map element", async () => {
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000`);
    await page.waitForSelector(".Map");
    const element = await page.$(".Map");
    expect(element).toBeDefined();
  });
});
