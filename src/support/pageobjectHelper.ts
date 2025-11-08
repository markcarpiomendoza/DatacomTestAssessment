import {World,IWorldOptions,setWorldConstructor} from'@cucumber/cucumber'
import { Browser,BrowserContext,Page,chromium,webkit } from '@playwright/test'
import { RegistrationPage } from '../pages/RegistrationPage'


export interface IPageObjects extends World
{
page?: Page;
browser?: Browser;
context?: BrowserContext;
registrationPage?: RegistrationPage;

}

export class PageObjects extends World implements IPageObjects
{
page?: Page;
browser?: Browser;
context?: BrowserContext;
registrationPage?: RegistrationPage;

constructor(options: IWorldOptions)
{super(options)}

async init(browser: string='chromium'):Promise<void>
{
const browserName =process.env.BROWSER||browser;

switch(browserName.toLowerCase()){
case'chromium':
this.browser = await chromium.launch(
    {
        headless: process.env.HEADLESS!=='false',
    }
);
break;
default:
    this.browser = await chromium.launch(
    {
        headless: process.env.HEADLESS!=='false',
    }
);
break;

}
const contextOptions: any = {
    viewport: {width: 1280,height:720}
}

// ensure context is created before creating a page
this.context = await this.browser?.newContext(contextOptions);
this.page = await this.context?.newPage();

this.registrationPage = new RegistrationPage(this.page);

}

async teardown(): Promise<void>
{
    if(this.page){
        await this.page.close();
    }
     if(this.context){
        await this.context.close();
    }
    if(this.browser){
        await this.browser.close();
    }

}

}

setWorldConstructor(PageObjects)