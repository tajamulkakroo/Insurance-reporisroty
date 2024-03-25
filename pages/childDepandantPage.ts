import { test, expect, Page, Locator } from '@playwright/test';


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
    await this.page.waitForLoadState('networkidle');
  }

  async clickGetStartedLink() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async SeeIfYouQualify() {
      
      await this.page.getByRole('link', { name: 'See if you qualify' }).click();
      await this.page.waitForLoadState('domcontentloaded');
      //await this.page.waitForSelector('a.btn.btn-primary._saveEvent.pull-right.has-tooltip');
      await this.page.getByText('Birth of child, adoption of').click();
      await this.page.getByRole('checkbox').check();
      await this.page.getByLabel('Enter the date of your event:').click();
      await this.page.getByRole('cell', { name: '2', exact: true }).first().click();
      //await this.page.locator('a.btn.btn-primary._saveEvent.pull-right.has-tooltip').waitFor();
      //await this.page.locator('a.btn.btn-primary._saveEvent.pull-right.has-tooltip').click();
      //await this.page.getByText('Clear').click();
      //await this.page.getByRole('link', { name: 'SAVE & CONTINUE' }).waitFor();
      await this.page.getByRole('link', { name: 'SAVE & CONTINUE' }).click();
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            await this.page.getByRole('link', { name: 'SAVE & CONTINUE' }).click({ timeout: 3000 });
            console.log(`Attempt ${attempt}: Click successful`);
            return; // Exit the loop if the click is successful
        } catch (error) {
            console.error(`Attempt ${attempt}: ERROR waiting for or clicking: ${error.message}`);
            if (attempt < 3) {
                console.log(`Attempt ${attempt}: Trying again...`);
                // Wait for a short period before trying again
                await this.page.waitForTimeout(1000);
            } else {
                console.error(`Attempt ${attempt}: All attempts failed. Exiting.`);
                throw error; // Throw the error if all attempts fail
            }
        } 
        }

      //await this.page.waitForLoadState('domcontentloaded');
      //await this.page.waitForLoadState('networkidle');
    }
  

  async fillZipCode(zipCode: string) {
    await this.zipCodeLocator.waitFor({ state: 'visible' }); // Wait for element to be visible
    //await this.page.waitForSelector('#zipCode29', { timeout: 30000 });
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












}

