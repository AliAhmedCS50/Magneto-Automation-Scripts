import { Page, expect } from "@playwright/test";

export class SmokeTest {

    readonly page: Page;
    constructor(page:Page){

      this.page = page;

    }

async accountInformation(){

  await this.page.getByText('Gear').click();




}



}