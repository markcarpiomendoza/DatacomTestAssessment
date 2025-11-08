import{ Given,When,Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PageObjects } from '../support/pageobjectHelper';

Given('the user is on the registration page', async function (this: PageObjects) {
    await this.registrationPage?.navigateToRegistrationPage();
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

Then('the registration form should be displayed', async function (this: PageObjects) {
    const isVisible = await this.registrationPage?.isRegistrationFormVisible();
    expect(isVisible).toBeTruthy();
});

Then('the first name label should be correct', async function (this: PageObjects) {
    const label = await this.registrationPage?.getFirstNameLabel();
    expect(label).toBe('First Name');
});

Then('the last name label should be correct', async function (this: PageObjects) {
    const label = await this.registrationPage?.getLastNameLabel();
    expect(label).toBe('Last Name');
});

Then('the phone label should be correct', async function (this: PageObjects) {
    const label = await this.registrationPage?.getPhoneLabel();
    expect(label).toBe('Phone');
});

Then('the email label should be correct', async function (this: PageObjects) {
    const label = await this.registrationPage?.getEmailLabel();
    expect(label).toBe('Email address');
});

Then('the password label should be correct', async function (this: PageObjects) {
    const label = await this.registrationPage?.getPasswordLabel();
    expect(label).toBe('Password');
});