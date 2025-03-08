import { test } from "@playwright/test";
import {Interactions} from "../page-objects/webElements";

let page;


test.beforeAll('Automation Practice', async({browser})=>{

  page = await browser.newPage();
  test.setTimeout(300000);


});

test("Handle select dropdown with value and visible text", async() =>{

    const drpdwn = new Interactions(page);
    await drpdwn.dropdownHandling();
    


});

test("Handle select dropdown with label", async()=>{



})