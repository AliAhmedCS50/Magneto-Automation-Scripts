import {test as baseTest} from "@playwright/test"

type MyFixtures = {

  fixture1: any;

}

type MyWrokerFixture = {

  workerFixture1: any;

}


export const test = baseTest.extend<MyFixtures, MyWrokerFixture>({

  fixture1: async({}, use)=>{

    const fixture1 = "I'm fixture 1";
    console.log("Before part of fixture 1");
    await use(fixture1);
    console.log("After part of fixture 1");

  },


  workerFixture1: [async({}, use)=>{

    const workerFixture1 = "I'm worker fixture 1";
    console.log("Before part of worker fixture 1");
    await use(workerFixture1);
    console.log("After part of worker fixture 1");

  },{scope:"worker"}]

})


