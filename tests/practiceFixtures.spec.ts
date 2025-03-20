import {test} from "../fixtures/myCustomFixtures";


test("Practice Test fixture", async({fixture1, workerFixture1})=>{

    console.log(fixture1);
    console.log(workerFixture1);


});

test("Practice Worker fixture", async({workerFixture1})=>{

    console.log(workerFixture1);

});