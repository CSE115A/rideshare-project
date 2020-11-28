const puppeteer = require("puppeteer");

let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({});
});

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto(`http://localhost:3000`);
});

afterAll(async () => {
  await browser.close();
});

describe("Map Test", () => {
  test("GET Map element", async () => {
    await page.waitForSelector(".Map");
    const element = await page.$(".Map");
    expect(element).toBeDefined();
  });
});

describe("Components Test", () => {
  test("Form Components defined", async () => {
    const element = await page.$(".AddressForm");
    expect(element).toBeDefined();

    const form_boxes = await page.$$("input");
    const pickup_box = form_boxes[0];
    const dropoff_box = form_boxes[1];
    expect(pickup_box).toBeDefined();
    expect(dropoff_box).toBeDefined();
  });

  test("Clicking Button", async () => {

    const clicked_button = await page.click(".PricingButton__button");
    expect(clicked_button).not.toBeDefined();
  });
});

describe("Address Form Input tests", () => {
  test("clicking off of a box after typing in it will clear it", async () => {
    const form_boxes = await page.$$("input");
    const pickup_box = form_boxes[0];
    const dropoff_box = form_boxes[1];
    await pickup_box.click();
    await pickup_box.type("asdfsaefas");
    let pickupVal = await pickup_box.evaluate((el) => {
      return el.value;
    });
    expect(pickupVal).not.toBe("");
    await dropoff_box.click();
    pickupVal = await pickup_box.evaluate((el) => {
      return el.value;
    });
    expect(pickupVal).toBe("");

    await dropoff_box.click();
    await dropoff_box.type("asdfsaefas");
    let dropoffVal = await dropoff_box.evaluate((el) => {
      return el.value;
    });
    expect(dropoffVal).not.toBe("");
    await pickup_box.click();
    dropoffVal = await dropoff_box.evaluate((el) => {
      return el.value;
    });
    expect(dropoffVal).toBe("");
  });
  
  test("a selected address from the drop down will be displayed in the text box", async () => {
    const form_boxes = await page.$$("input");
    const pickup_box = form_boxes[0];
    
    await pickup_box.click();
    await pickup_box.type("112");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    let pickupVal = await pickup_box.evaluate((el) => {
      return el.value;
    });
    expect(pickupVal).not.toBe("");
  });
});

