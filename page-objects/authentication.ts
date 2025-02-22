import { Page, expect} from "@playwright/test";

export class Authentication{

    readonly page: Page;
    
    constructor(page:Page){

      this.page = page;

    }

 async Login(){
  
  await this.page.goto("https://magento.softwaretestingboard.com");
  await this.page.locator('div.panel.header a:has-text("Sign In")').click();
  await this.page.getByRole("textbox", {name: "Email"}).fill('mohdalikareem669@gmail.com');
  await this.page.getByRole("textbox", {name: "Password"}).fill("No Password");
  await this.page.getByRole("button", {name: "Sign In"}).click();  


 }   



}