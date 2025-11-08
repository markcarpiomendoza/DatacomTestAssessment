import{ Given,When,Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PageObjects } from '../support/pageobjectHelper';
import { RegistrationPage } from '../pages/RegistrationPage';

Given('I navigate to the registration page', async function (this: PageObjects) {
    await this.registrationPage?.navigateToRegistrationPage();
});

Then ('All form fields should be visible and correctly labeled', async function (this: PageObjects) {
    const registrationPage = this.registrationPage;
    this.registrationPage?.verifyAllLabelsAndFieldsAreVisible()
    
});

Then ('I click terms and conditions checkbox', async function (this: PageObjects) {
    await this.registrationPage?.checkTermsAndConditions()

});


Then ('I submit the registration form', async function (this: PageObjects) {
await this.registrationPage?.clickRegisterButton()

});


Then ('Failed registration message is visible', async function (this: PageObjects) {
    await this.registrationPage?.verifyFailedRegistrationMessage()
});

Then ('Successful registration message is visible', async function (this: PageObjects) {
    await this.registrationPage?.verifySuccessfulRegistrationMessage()
});

When('I enter valid registration details with {string}, {string}, {string}, {string}, {string}, {string}', 
async function (this: PageObjects, firstName: string, lastName: string, phoneNumber: string, country: string, email: string, password: string) {
    await this.registrationPage?.fillupRegistrationForm(firstName, lastName, phoneNumber, country, email, password);
});

When('I enter invalid registration details with {string}, {string}, {string}, {string}, {string}, {string}', 
async function (this: PageObjects, firstName: string, lastName: string, phoneNumber: string, country: string, email: string, password: string) {
     await this.registrationPage?.fillupRegistrationForm(firstName, lastName, phoneNumber, country, email, password);

});


When('the user enters first name {string}', async function (this: PageObjects, firstName: string) {
    await this.registrationPage?.enterFirstName(firstName);
});

When('the user enters last name {string}', async function (this: PageObjects, lastName: string) {
    await this.registrationPage?.enterLasttName(lastName);
});

When('the user enters phone number {string}', async function (this: PageObjects, phone: string) {
    await this.registrationPage?.enterPhoneNumber(phone);
});

When('the user selects country {string}', async function (this: PageObjects, country: string) {
    await this.registrationPage?.selectCountry(country);
});

When('the user enters email {string}', async function (this: PageObjects, email: string) {
    await this.registrationPage?.enterEmail(email);
});

When('the user enters password {string}', async function (this: PageObjects, password: string) {
    await this.registrationPage?.enterPassword(password);
});

When('the user accepts the terms and conditions', async function (this: PageObjects) {
    await this.registrationPage?.checkTermsAndConditions();
});

When('the user clicks the register button', async function (this: PageObjects) {
    await this.registrationPage?.clickRegisterButton();
});


