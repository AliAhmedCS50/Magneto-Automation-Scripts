import { test, BrowserContext } from "@playwright/test";
import {Interactions} from "../page-objects/webElements";

let page;
//let context;


test.beforeAll('Automation Practice', async({browser})=>{
    
    page = await browser.newPage();
  //context = await browser.newContext();
  test.setTimeout(300000);


});

test("Handle select dropdown with value and visible text", async() =>{

    const drpdwn = new Interactions(page);
    await drpdwn.dropdownHandling();
    
});

test("Handle multi select dropdown", async()=>{

    const multi = new Interactions(page);
    await multi.multiSelect();

})

test("Handle Alert Dialog", async()=>{

    const alert = new Interactions(page);
    await alert.handleAlertDialogs();

})

test.skip("Handle Confirm Dialog", async()=>{

    const confirmation = new Interactions(page);
    await confirmation.confirmDialog();

})

test("Handle Prompt Dialog", async()=>{

    const prompt = new Interactions(page);
    await prompt.promptDialog();


});


test.skip('Handle New Page', async({context})=>{

    const newPage = new Interactions(page);
    await newPage.handleNewPage(context);

})


test("Mouse Hover", async()=>{

    const hover = new Interactions(page);
    await hover.mouseHover();

});

test('Drag & Drop', async()=>{

    const drag = new Interactions(page);
    await drag.dragDrop();

});

test('Keyboard Actions', async()=>{
    
    const key = new Interactions(page);
    await key.keyboardActions();

});

test('File uploading', async()=>{

    const file = new Interactions(page);
    await file.fileUpload();

});

test('File uploading (without file tag in DOM)', async()=>{

    const noFile = new Interactions(page);
    await noFile.noFileTagInHtml();

});

