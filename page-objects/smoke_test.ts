import { Page, expect } from "@playwright/test";

export class SmokeTest {

    readonly page: Page;
    constructor(page:Page){

      this.page = page;

    }

async smkTests(){

  await this.page.getByText('Gear').click();
  await this.page.locator('//a[@id="ui-id-7"]//span[contains(text(),"Training")]').click();
  await this.page.getByText('Sale').click();
  await this.page.locator('//a[@href="https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"][normalize-space()="Hoodies and Sweatshirts"]').click();

}


async dropDown() {

  //Manipulating items from Gear dropdown 
     //await this.page.getByText('Gear').hover();
     await this.page.getByRole('menuitem', { name: ' Gear' }).click();
     await this.page.getByRole('menuitem', { name: ' Gear' }).click();
    


  //await expect(gearDropdwon).toHaveText(["Bags", "Fitness Equipment", "Watches"]);


}

}