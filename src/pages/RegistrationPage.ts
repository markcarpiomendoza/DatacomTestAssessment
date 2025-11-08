import{Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage'
export class RegistrationPage extends BasePage
{
    //ElementLocators

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

    //url
    private registrationPageUrl: string='http://qa-practice.netlify.app/bugs-form';

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

}