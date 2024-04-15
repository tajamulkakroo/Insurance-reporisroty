import {Page, expect, Locator } from '@playwright/test';


export class ChildDepandantPage {
  private readonly page: Page;
  readonly zipCodeLocator: Locator;
  readonly firstNameLocator: Locator;
  readonly lastNameLocator: Locator;
  readonly birthDateLocator: Locator;
  readonly genderLocator: Locator;
  readonly childGenderLocator: Locator;
  readonly smokerLocator: Locator;



  constructor(page: Page) {
    this.page = page;
    this.zipCodeLocator = this.page.locator('#zipCode29');
    this.firstNameLocator = this.page.locator('#firstName22');
    this.lastNameLocator = this.page.locator('#lastName23');
    this.birthDateLocator = this.page.locator('#birthDate24');
    this.genderLocator = this.page.locator('#gender26');
    this.smokerLocator = this.page.locator('#isSmoker27');
  }



  async navigateToWelcomePage() {
    await this.page.goto('https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickGetStartedLink() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async SeeIfYouQualify() {
      
    await this.page.getByRole('link', { name: 'See if you qualify' }).click(),{ timeout: 30000 };
    await this.page.getByText('Birth of child, adoption of').click();
    await this.page.getByLabel('Enter the date of your event:').click();
    await this.page.getByRole('cell', { name: '2', exact: true }).first().click();
    await this.page.getByRole('checkbox').check();
  }
 
  async saveAndContinue(){

    await expect(async () => {
      await this.page.getByRole('link', { name: "SAVE & CONTINUE" }).click()
      await expect(this.page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics")
      }).toPass()
  }

  async fillZipCode(zipCode: string) {
    await this.zipCodeLocator.waitFor({ state: 'visible' }); // Wait for element to be visible
    await this.zipCodeLocator.click();
    await this.zipCodeLocator.fill(zipCode);
  }

  async fillFirstName(firstName: string) {
    await this.firstNameLocator.click();
    await this.firstNameLocator.fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.lastNameLocator.click();
    await this.lastNameLocator.fill(lastName);
  }

  async fillBirthDate(birthDate: string) {
    await this.birthDateLocator.click();
    await this.birthDateLocator.fill(birthDate);
  }

  async selectGender(gender: string) {
    await this.genderLocator.selectOption(gender);
  }

  async selectSmokerOption(option: string) {
    await this.smokerLocator.click();
    await this.smokerLocator.selectOption(option);
  }
  async clickContinueLink() {
    await this.page.getByRole('link', { name: 'Continue' }).click();
    await this.page.waitForLoadState('networkidle');
  }
  












}

