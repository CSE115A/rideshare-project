/* eslint-disable jest/no-disabled-tests */
const puppeteer = require("puppeteer");

let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({});
});

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto(`http://localhost:3000`);
  await page.waitForSelector(".LandingPage");
});

afterAll(async () => {
  await browser.close();
});

describe("Loading Components Tests", () => {
  test("GET Map element", async () => {
    await page.waitForSelector(".Map");
    const map = await page.$(".Map");
    expect(map).toBeDefined();
  });

  test("Location pin and its address shows up when an address is entered and cleared when address is cleared", async () => {
    const form_boxes = await page.$$("input");
    for (const box of form_boxes) {
      await box.click();
      await box.type("112");
      await page.waitForSelector("div[id$=option-0]");

      const first_option = await page.$("div[id$=option-0]");
      const option_val = await first_option.evaluate((el) => el.innerText);
      await first_option.click();

      await page.waitForSelector(".LocationPin");
      const location = await page.$(".LocationPin");
      expect(location).not.toBe(null);
      const location_text = await page.$eval(
        ".LocationPin__text",
        (el) => el.innerText
      );
      expect(location_text).toBeDefined();
      await box.click();
      await page.keyboard.press("Delete");
    }
  });

  test("Two location pins show up when both addresses are entered", async () => {
    const form_boxes = await page.$$("input");
    const pickup_box = form_boxes[0];
    const dropoff_box = form_boxes[1];

    box_inputs = ["San Francisco", "San Jose"];
    for (let id = 0; id < form_boxes.length; id++) {
      await form_boxes[id].click();
      await form_boxes[id].type(box_inputs[id]);
      await page.waitForSelector("div[id$=option-0]");

      let first_option = await page.$("div[id$=option-0]");
      await first_option.click();
    }
    await page.waitForTimeout(700);
    const locations = await page.$$(".LocationPin");
    expect(locations.length).toBe(2);
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

  test("Uber and Lyft Price Lists do not appear on loading", async () => {
    const prices = await page.$(".PricesOutput");
    expect(prices).toBe(null);
  });
});

describe("Address Form Input tests", () => {
  test("clicking off of a box after typing in it will clear it", async () => {
    const form_boxes = await page.$$("input");
    const pickup_box = form_boxes[0];
    const dropoff_box = form_boxes[1];
    await pickup_box.click();
    await pickup_box.type("unrelated text");
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
    await dropoff_box.type("random text");
    let dropoffVal = await dropoff_box.evaluate((el) => {
      return el.value;
    });

    expect(dropoffVal).not.toBe("");

    await pickup_box.click();
    dropoffVal = await dropoff_box.evaluate((el) => {
      return el.value;
    });
    expect(dropoffVal).toEqual("");
  });

  test("a selected address from the drop down will be displayed in the text box", async () => {
    const form_boxes = await page.$$("input");
    for (const box of form_boxes) {
      await box.click();
      await box.type("112");
      await page.waitForSelector("div[id$=option-0]");

      const first_option = await page.$("div[id$=option-0]");
      await first_option.click();
      const option_val = await first_option.evaluate((el) => el.innerText);

      await page.waitForSelector("div[class$=singleValue]");
      let pickupVal = await page.$eval(
        "div[class$=singleValue]",
        (el) => el.innerText
      );

      expect(pickupVal).toEqual(option_val);
    }
  });
});

describe("Map Tests", () => {
  test("Both the location pin and its address shows up when an address is entered and cleared when address is cleared", async () => {
    const form_boxes = await page.$$("input");
    for (const box of form_boxes) {
      await box.click();
      await box.type("112");
      await page.waitForSelector("div[id$=option-0]");

      const first_option = await page.$("div[id$=option-0]");
      const option_val = await first_option.evaluate((el) => el.innerText);
      await first_option.click();

      await page.waitForSelector(".LocationPin");
      let location = await page.$(".LocationPin");
      expect(location).not.toBe(null);
      let location_text = await page.$eval(
        ".LocationPin__text",
        (el) => el.innerText
      );
      expect(location_text).toBeDefined();

      await box.click();
      await page.keyboard.press("Delete");
      await page.waitForSelector(".LocationPin", { hidden: true });
      location = await page.$(".LocationPin");
      expect(location).toBe(null);
    }
  });

  test("Two location pins show up when both addresses are selected from each box", async () => {
    const form_boxes = await page.$$("input");
    const pickup_box = form_boxes[0];
    const dropoff_box = form_boxes[1];

    box_inputs = ["San Francisco", "San Jose"];
    for (let id = 0; id < form_boxes.length; id++) {
      await form_boxes[id].click();
      await form_boxes[id].type(box_inputs[id]);
      await page.waitForSelector("div[id$=option-0]");

      let first_option = await page.$("div[id$=option-0]");
      await first_option.click();
    }
    await page.waitForTimeout(700);
    const locations = await page.$$(".LocationPin");
    expect(locations.length).toBe(2);
  });
});

async function outputPrices(box_inputs) {
  for (const boxInput of box_inputs) {
    await boxInput.box.click();
    await boxInput.box.type(boxInput.location);
    await page.waitForSelector("div[id$=option-0]");

    let first_option = await page.$("div[id$=option-0]");
    await first_option.click();
  }

  await page.waitForTimeout(8000);

  await page.click(".PricingButton__button");
}

describe("PricesOutput tests", () => {
  test("display prices when both addresses are filled out and the button is clicked", async () => {
    const form_boxes = await page.$$("input");
    const pickup_box = form_boxes[0];
    const dropoff_box = form_boxes[1];

    const box_inputs = [
      { location: "Santa Cruz", box: pickup_box },
      { location: "Capitola", box: dropoff_box },
    ];

    outputPrices(box_inputs);

    await page.waitForSelector(".PricesOutput");
    const prices_display = await page.$(".PricesOutput");
    expect(prices_display).not.toBe(null);
  });

  test.skip("prices list does not display on bad request", async () => {
    const form_boxes = await page.$$("input");
    const pickup_box = form_boxes[0];
    const box_inputs = [{ location: "Santa Cruz", box: pickup_box }];

    outputPrices(box_inputs);
    await page.waitForTimeout(2000);
    const prices_display = await page.$(".PricesOutput");
    expect(prices_display).toBe(null);
  });

  test.skip("after one good request, prices list clears after button hit", async () => {
    const form_boxes = await page.$$("input");
    const pickup_box = form_boxes[0];
    const dropoff_box = form_boxes[1];
    const box_inputs = [
      { location: "Santa Cruz", box: pickup_box },
      { location: "Capitola", box: dropoff_box },
    ];

    outputPrices(box_inputs);

    await page.waitForSelector(".PricesOutput");
    let prices_display = await page.$(".PricesOutput");
    expect(prices_display).not.toBe(null);

    await dropoff_box.click();
    await page.keyboard.press("Delete");

    await page.waitForTimeout(2000);
    await page.click(".PricingButton__button");
    await page.waitForTimeout(4000);

    prices_display = await page.$(".PricesOutput");
    expect(prices_display).toBe(null);
  });

  test.skip("prices list clears after button hit, and displays afterwards", async () => {
    const form_boxes = await page.$$("input");
    const pickup_box = form_boxes[0];
    const dropoff_box = form_boxes[1];
    const button = await page.$("button");

    await pickup_box.click();
    await pickup_box.type("Santa Cruz");
    await page.keyboard.press("Enter");

    await dropoff_box.click();
    await dropoff_box.type("Capitola");
    await page.keyboard.press("Enter");

    await button.click();

    await page.click(".PricingButton__button");
    let prices_display = await page.$(".PricesOutput");

    expect(prices_display).toBe(null);
    prices_display = await page.$(".PricesOutput");

    expect(prices_display).not.toBe(null);
  });
});
