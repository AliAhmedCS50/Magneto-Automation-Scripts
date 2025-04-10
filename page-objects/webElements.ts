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

  const page = await context.newPage();
  await page.goto('https://testpages.eviltester.com/styled/index.html');
  //await expect(page).toHaveTitle('Windows Example Test');
  //const pagePromise = context.waitForEvent("page");
  await page.locator('#basicajaxtest').click();
  //const newPage = await pagePromise;
  await page.locator("[name = 'submitbutton']").click();
    
   
}

async mouseHover(){

  await this.page.goto("https://magento.softwaretestingboard.com/");
  await this.page.getByRole('menuitem', { name: ' Gear' }).hover({force: true});
  await this.page.getByRole('menuitem', { name: 'Watches' }).click();

}

async dragDrop(){

  // Approach 1: Manual way to drag and drop

  /*
  await this.page.goto('https://demoqa.com/droppable'); 
  await this.page.getByText('Drag me', { exact: true }).hover(); //pick location
  await this.page.mouse.down(); //Mouse hold
  await this.page.getByLabel('Simple').getByText('Drop here').hover(); //target location 
  await this.page.mouse.up(); //Mouse release 
  await expect(this.page.getByLabel('Simple').locator('#droppable')).toHaveText("Dropped!");
  */

  //Approach 2: 
  await this.page.goto('https://demoqa.com/droppable'); 
  await this.page.getByText('Drag me', { exact: true }).dragTo(this.page.getByLabel('Simple').getByText('Drop here'), {
    sourcePosition:{x:0, y:0},
    targetPosition: {x:45, y:15}
  })


}

async keyboardActions(){

  await this.page.goto('https://testpages.eviltester.com/styled/basic-html-form-test.html');
  const commentTextBox = this.page.locator("[name='comments']");
  await commentTextBox.press("Control+a");
  await commentTextBox.press("Backspace");
  await commentTextBox.press("T+e+s+t+i+n+g+ +K+e+y+b+o+a+r+d");
  await commentTextBox.press("Control+a+x"); //cutting the above value

  const userNameInput = this.page.locator("[name='username']");
  await userNameInput.press("Control+v"); //Pasting the above cutted value
  await userNameInput.press("ArrowLeft+ArrowLeft+ArrowLeft");
  await this.page.keyboard.press("PageDown");
  await this.page.keyboard.press("PageUp");

}


async fileUpload(){

  await this.page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
  //await this.page.locator("#filesToUpload").setInputFiles("upload-files\\movies.txt"); //To upload the single file
  await this.page.locator("#filesToUpload").setInputFiles(["upload-files\\movies.txt", "upload-files\\JulyLunch.xlsx", "upload-files\\PW.docx"]); //To upload the multuple files
  await this.page.locator("#filesToUpload").setInputFiles([]); //Remove files

}

async noFileTagInHtml() {

  await this.page.goto('https://the-internet.herokuapp.com/upload');
  const fileChooserPromise = this.page.waitForEvent("filechooser");
  await this.page.locator('#drag-drop-upload').click();
  const fileChooserResolved = await fileChooserPromise;
  await fileChooserResolved.setFiles('upload-files/movies.txt')





}




}