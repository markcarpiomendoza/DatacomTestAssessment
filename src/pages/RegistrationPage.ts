import{Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage'
import { expect } from '@playwright/test';
export class RegistrationPage extends BasePage
{
    //ElementLocators

    //url
    private registrationPageUrl: string='http://qa-practice.netlify.app/bugs-form';

    //Fields
    private firstNameInput: Locator=this.page.locator('#firstName');
    private lastNameInput: Locator=this.page.locator('#lastName');
    private phoneInput: Locator=this.page.locator('#phone');
    private countryDropdown: Locator=this.page.locator('#countries_dropdown_menu');
    private emailInput: Locator=this.page.locator('#email');
    private passwordInput: Locator=this.page.locator('#password');
    private registerButton: Locator=this.page.locator('#registerBtn');
    private registrationForm: Locator=this.page.locator('#registerForm');
    private termsCheckbox: Locator=this.page.locator('#exampleCheck1');

    //Labels
    private firstNameLabel: Locator=this.page.locator('label[for="firstName"]');
    private lastNameLabel: Locator=this.page.locator('label[for="lastName"]');
    private phoneLabel: Locator=this.page.locator('label[for="phone"]');
    private emailLabel: Locator=this.page.locator('label[for="exampleInputEmail"]');
    private passwordLabel: Locator=this.page.locator('label[for="exampleInputPassword"]');


    //Results / Messages
    private messageResult: Locator=this.page.locator('#message');
    private firstNameResult: Locator=this.page.locator('#resultFn');
    private lastNameResult: Locator=this.page.locator('#resultLn');
    private phoneResult: Locator=this.page.locator('#resultPhone');
    private countryDropdownResult: Locator=this.page.locator('#country');
    private emailResult: Locator=this.page.locator('#resultEmail');


    constructor(page: Page)
    {super(page)}

    async navigateToRegistrationPage():Promise<void>{
        await this.page.goto(this.registrationPageUrl);
    }

    async enterFirstName(firstName: string):Promise<void>{
        await this.firstNameInput.fill(firstName);
    }

    async enterLasttName(lastName: string):Promise<void>{
        await this.lastNameInput.fill(lastName);
    }

    async enterPhoneNumber(phone: string):Promise<void>{
        await this.phoneInput.fill(phone);
    }

    async selectCountry(country: string):Promise<void>{
        await this.countryDropdown.fill(country);
    }

    async enterEmail(email: string):Promise<void>{
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string):Promise<void>{
        await this.passwordInput.fill(password);
    }
    
    async checkTermsAndConditions():Promise<void>{
        await this.termsCheckbox.check();
    }
    async clickRegisterButton():Promise<void>{
        await this.registerButton.click();
    }

    async verifyAllLabelsAndFieldsAreVisible():Promise<void>{
        
        //Labels
            await expect(this.firstNameLabel).toBeVisible();
            await expect(this.lastNameLabel).toBeVisible();
            await expect(this.phoneLabel).toBeVisible();
            await expect(this.emailLabel).toBeVisible();
            await expect(this.passwordLabel).toBeVisible();
        //Fields
            await expect(this.firstNameInput).toBeVisible();
            await expect(this.lastNameInput).toBeVisible();
            await expect(this.phoneInput).toBeVisible();
            await expect(this.countryDropdown).toBeVisible();
            await expect(this.emailInput).toBeVisible();
            await expect(this.passwordInput).toBeVisible();
            await expect(this.termsCheckbox).toBeVisible();

    }


    async fillupRegistrationForm(
        firstName:string,
        lastName:string,
        phone:string,
        country:string,
        email:string,
        password:string):Promise<void>{
        await this.enterFirstName(firstName);
        await this.enterLasttName(lastName);
        await this.enterPhoneNumber(phone);
        await this.selectCountry(country);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.checkTermsAndConditions();
    }

    async verifySuccessfulRegistrationMessage():Promise<void>{
        await expect(this.messageResult).toHaveText('Successfully registered the following information')
    }

    async verifyFailedRegistrationMessage():Promise<void>{
        await expect(this.messageResult).toHaveText('Registration failed')
    }

}