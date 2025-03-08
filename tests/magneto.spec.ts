import {test, expect, BrowserContext} from "@playwright/test"
import { Authentication } from "../page-objects/authentication";
import { SmokeTest } from "../page-objects/smoke_test";
import { BrokenImages } from "../page-objects/brokenImage";
test.use({viewport:{width:1366, height:768}}); // Sets browser height and width 

let page;
let context: BrowserContext;


test.beforeAll('Automation Practice', async({browser})=>{

  page = await browser.newPage();
  context = await browser.newContext(); 
  test.setTimeout(300000);
  await page.goto("https://magento.softwaretestingboard.com");

  await page.locator('div.panel.header a:has-text("Sign In")').click();
  await page.getByRole("textbox", {name: "Email"}).fill('mohdalikareem669@gmail.com');
  await page.getByRole("textbox", {name: "Password"}).fill("No Password");
  await page.getByRole("button", {name: "Sign In"}).click();

});

test.afterAll(async ({browser}) => {
  // Clean up after all tests
  await context.close(); 
});






test("Clicks", async()=>{

      const smk = new SmokeTest(page);
      await smk.smkTests();


});

test('Drop down handling', async()=>{

    const drp = new SmokeTest(page);
    await drp.dropDown();


});

test('Find Broken Images', async()=>{

    const brknImages = new BrokenImages(page);
    await brknImages.findBrokenImages();



})

