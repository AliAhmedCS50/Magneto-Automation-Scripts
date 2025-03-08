import {Page, expect} from "@playwright/test"

export class BrokenImages {

  readonly page: Page;
    
    constructor(page:Page){

      this.page = page;

    }

async findBrokenImages(){

//Navigate to the web page
  
    await this.page.goto('https://the-internet.herokuapp.com/broken_images');

//Enable network interception

    await this.page.route('**/*', (route)=>{
      
      route.continue().catch(()=>{});


    })

// Use page.evaluate to identify images and count broken images

    const brokeImages = await this.page.evaluate(async()=>{

      const images = Array.from(document.querySelectorAll('img'));
      const brokenImagesList = [];

      for (const image of images) {

        const response = await fetch(image.src, {method: 'HEAD'}).catch(() => null);
          if (!response || response.status !==200){

            brokenImagesList.push(image.src); 

          }

      }

      return brokenImagesList;

    })

    console.log(`Total broken Images: ${brokeImages.length}`);
    console.log(`Broken Images Names: `)

    for (const src of brokeImages){

      console.log(src)

    }




}


};
