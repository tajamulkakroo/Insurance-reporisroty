import { test, expect, Page, Locator } from '@playwright/test';
import { healthPartners as fakehealthPartners } from '../fixtures/InsuranceFixture'

class HealthPartnersPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToWelcomePage() {
    await this.page.goto('https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await this.page.waitForLoadState('networkidle');
  }

  async clickGetStartedLink() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickSkipAndShopPlansLink() {
    await this.page.getByRole('link', { name: 'Skip & Shop Plans' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async fillZipCode(zipCode: string) {
    const zipCodeLocator: Locator = this.page.locator('#zipCode29');
    await zipCodeLocator.click();
    await zipCodeLocator.fill(zipCode);
  }

  async fillFirstName(firstName: string) {
    const firstNameLocator: Locator = this.page.locator('#firstName22');
    await firstNameLocator.click();
    await firstNameLocator.fill(firstName);
  }

  async fillLastName(lastName: string) {
    const lastNameLocator: Locator = this.page.locator('#lastName23');
    await lastNameLocator.click();
    await lastNameLocator.fill(lastName);
  }

  async fillBirthDate(birthDate: string) {
    const birthDateLocator: Locator = this.page.locator('#birthDate24');
    await birthDateLocator.click();
    await birthDateLocator.fill(birthDate);
  }

  async selectGender(gender: string) {
    const genderLocator: Locator = this.page.locator('#gender26');
    await genderLocator.selectOption(gender);
  }

  async selectSmokerOption(option: string) {
    const smokerLocator: Locator = this.page.locator('#isSmoker27');
    await smokerLocator.click();
    await smokerLocator.selectOption(option);
  }

  async clickAddDependentLink() {
    await this.page.getByRole('link', { name: 'Add Dependent' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async fillDependentFirstName(firstName: string) {
    const dependentFirstNameLocator: Locator = this.page.locator('#firstName38');
    await dependentFirstNameLocator.click();
    await dependentFirstNameLocator.fill(firstName);
  }

  async fillDependentLastName(lastName: string) {
    const dependentLastNameLocator: Locator = this.page.locator('#lastName39');
    await dependentLastNameLocator.click();
    await dependentLastNameLocator.fill(lastName);
  }

  async fillDependentBirthDate(birthDate: string) {
    const dependentBirthDateLocator: Locator = this.page.locator('#birthDate40');
    await dependentBirthDateLocator.click();
    await dependentBirthDateLocator.fill(birthDate);
  }

  async selectDependentRelationship(relationship: string) {
    const relationshipLocator: Locator = this.page.locator('#memberRelationship41');
    await relationshipLocator.selectOption(relationship);
  }

  async selectDependentGender(gender: string) {
    const genderLocator: Locator = this.page.locator('#gender42');
    await genderLocator.selectOption(gender);
  }

  async clickContinueLink() {
    await this.page.getByRole('link', { name: 'Continue' }).click();
    await this.page.waitForLoadState('networkidle');
  }
  
  async selectBrowseAllPlans () {

    await this.page.getByRole('link', { name: 'Browse all plans' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async addToCart () {

  await this.page.getByRole('link', { name: 'Add to cart' }).first().click();
  await this.page.waitForLoadState('networkidle');

  }

  async viewCartAndEnroll () {

    await this.page.getByRole('link', { name: 'View Cart & Enroll' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async enrollNow () {

    await this.page.getByRole('link', { name: 'Enroll Now' }).click();
    await this.page.waitForLoadState('networkidle');
  }
  // Add more methods for other interactions as needed

  // Example method to fill in the email address field
  async fillEmailAddress(emailAddress: string) {
    const emailLocator: Locator = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_userProfile_user_emailAddress');
    await emailLocator.click();
    await emailLocator.fill(emailAddress);
  }

  // Add more methods for other interactions as needed
}

test('Health Partners Test', async ({ page }) => {
  const healthPartnersPage = new HealthPartnersPage(page);

  await healthPartnersPage.navigateToWelcomePage();
  await healthPartnersPage.clickGetStartedLink();
  await healthPartnersPage.clickSkipAndShopPlansLink();
  await healthPartnersPage.fillZipCode('55413');
  await healthPartnersPage.fillFirstName('Hans');
  await healthPartnersPage.fillLastName('Ellis');
  await healthPartnersPage.fillBirthDate('12/12/2000');
  await healthPartnersPage.selectGender('M');
  await healthPartnersPage.selectSmokerOption('n');
  await healthPartnersPage.clickAddDependentLink();
  await healthPartnersPage.fillDependentFirstName('Chris');
  await healthPartnersPage.fillDependentLastName('coenen');
  await healthPartnersPage.fillDependentBirthDate('12/12/2020');
  await healthPartnersPage.selectDependentRelationship('CHILD');
  await healthPartnersPage.selectDependentGender('M');
  await healthPartnersPage.clickContinueLink();
  await healthPartnersPage.selectBrowseAllPlans();
  await healthPartnersPage.addToCart();
  await healthPartnersPage.viewCartAndEnroll();
  await healthPartnersPage.enrollNow();



  // Continue with the rest of the interactions...

  // Example usage of a method from a different section
  await healthPartnersPage.fillEmailAddress('abc@gmail.com');
  
  // Continue with the rest of the test...
});
