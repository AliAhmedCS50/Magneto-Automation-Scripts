import {Page, expect} from "@playwright/test"

export class Interactions {

  readonly page: Page;
    constructor(page:Page){

      this.page = page;

    }

async dropdownHandling(){

  await this.page.goto('https://artoftesting.com/samplesiteforselenium');
  await this.page.locator('#testingDropdown').selectOption('Manual');
  // You can select drop down item 
  // by html value, label, visible text 
  // i.e await this.page.locator('#testingDropdown').selectOption(value:'Performance');
  // i.e await this.page.locator('#testingDropdown').selectOption(label:'Audi');
  // i.e await this.page.locator('#testingDropdown').selectOption(index:2);




}

}