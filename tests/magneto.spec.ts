import {test, expect, BrowserContext} from "@playwright/test"
import { Authentication } from "../page-objects/authentication";
import { SmokeTest } from "../page-objects/smoke_test";

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






test("Crreate Account", async()=>{


  // await page.getByText('Create an Account').first().click();
  // await page.getByText("First Name").fill("Muhammad");
  // await page.getByText("Last Name").fill("Ali");
  // await page.getByRole('textbox', {name: "Email"}).fill("mohdalikareem669@gmail.com");
  // await page.locator('//*[@id="password"]').fill("No Password");
  // await page.locator('//*[@id="password-confirmation"]').fill("No Password");
  // await page.getByRole('button', {name:"Create an Account"}).click();



      // const lg = new Authentication(page);
      // await lg.Login();

      const smk = new SmokeTest(page);
      await smk.accountInformation();




});