import {Page, expect, BrowserContext} from "@playwright/test"

// type MyFixtures = {
//   context: BrowserContext; // Custom context fixture
//   page: Page; // Custom page fixture

// };

export class Interactions {

  readonly page: Page;
  readonly context: BrowserContext;
  
    constructor(page:Page, ){

      this.page = page;
      
    }

// Drop downs     
async dropdownHandling(){

  await this.page.goto('https://artoftesting.com/samplesiteforselenium');
  await this.page.locator('#testingDropdown').selectOption('Manual');
  // You can select drop down item 
  // by html value, label, visible text 
  // i.e await this.page.locator('#testingDropdown').selectOption(value:'Performance');
  // i.e await this.page.locator('#testingDropdown').selectOption(label:'Audi');
  // i.e await this.page.locator('#testingDropdown').selectOption(index:2);


}

async multiSelect(){

  await this.page.goto('https://demoqa.com/select-menu',{ waitUntil: 'load' });
  await this.page.locator('#cars').selectOption(['Saab', 'Opel', 'Audi']);

}


//Handling Alert, confirm alert, and prompt dialogs

//Handling Simple Alert 
async handleAlertDialogs(){

  await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  //Interaction with alert
  this.page.on("dialog", dialog =>{
    
    expect(dialog.type()).toEqual("alert");
    expect(dialog.message()).toEqual("I am a JS Alert");
    console.log(dialog.type());
    dialog.accept(); //used to close the dialog 
  

  })
   
  await this.page.getByRole('button',{name:"Click for JS Alert"}).click();
  //await expect(this.page.locator('#result')).toHaveText('You successfully clicked an alert');

}


//Handling confirm dialog
async confirmDialog(){

  await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  //await this.page.waitForTimeout(15000);

      this.page.on("dialog", dialog =>{
        
        if (dialog.type() === "confirm") {
          expect(dialog.message()).toEqual("I am a JS Confirm");
          dialog.accept(); // Accept the confirm dialog
        } else if (dialog.type() === "alert") {
          expect(dialog.message()).toEqual("I am a JS Alert");
          dialog.accept(); // Accept the alert dialog
        } else {
          throw new Error(`Unexpected dialog type: ${dialog.type()}`);
        }

      

      })
  
  await this.page.getByRole('button', {name:'Click for JS Confirm'}).click();
  //await expect(this.page.locator('#result')).toHaveText('You clicked: Cancel');

}

//Handling Prompt Dialog
async promptDialog(){

  await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');

      this.page.on("dialog", dialog =>{
        
        expect(dialog.type()).toEqual("prompt");
        expect(dialog.message()).toEqual("I am a JS prompt");
        dialog.accept("Test Automation by Muhammad Ali"); //used to click OK on the dialog 
      

      })
  
  await this.page.getByRole('button', {name:"Click for JS Prompt"}).click();
  //await expect(this.page.locator('#result')).toHaveText('You clicked: Cancel');

}


async handleNewPage(context){

  const page1 = await context.newPage();
  await this.page.goto('https://testpages.eviltester.com/styled/index.html');
  //await expect(page).toHaveTitle('Windows Example Test');
  const pagePromise = context.waitForEvent(this.page);
  await this.page.locator('#basicajaxtest').click();
  const newPage1 = await pagePromise;
  await this.page.locator("[name = 'submitbutton']").click();
    
   
}

}