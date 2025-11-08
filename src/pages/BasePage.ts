import{Page,Locator,expect} from '@playwright/test'

export abstract class BasePage {
    protected page: Page;
    protected url: string;

constructor(page: Page,url:string=''){
    this.page =page;
    this.url = url

}

async goto():Promise<void>{
    const baseURL= this.url;
    await this.page.goto(baseURL);
}

}