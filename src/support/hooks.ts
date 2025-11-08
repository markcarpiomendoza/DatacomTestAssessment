import { Before,After } from "@cucumber/cucumber";
import { PageObjects } from "./pageobjectHelper";


Before(async function(this: PageObjects,scenario )
{
    console.log(`Starting test scenario: ${scenario.pickle.name}`);
    await this.init();
});

After(async function(this: PageObjects,scenario )
{
    console.log(`Test completed: ${scenario.pickle.name} - Status: ${scenario.result?.status}`);

if(scenario.result?.status==='FAILED' && this.page)
{
    console.log('Test $scenarioName failed');
}
    await this.teardown();

});