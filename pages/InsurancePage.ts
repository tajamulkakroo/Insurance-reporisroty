import { test, expect, Page, Locator } from '@playwright/test';

export class HealthPartnersPage {
  private readonly page: Page;
  readonly zipCodeLocator: Locator;
  readonly firstNameLocator: Locator;
  readonly lastNameLocator: Locator;
  readonly birthDateLocator: Locator;
  readonly genderLocator: Locator;
  readonly smokerLocator: Locator;
  readonly dependentFirstNameLocator: Locator;
  readonly dependentLastNameLocator: Locator;
  readonly dependentBirthDateLocator: Locator;
  readonly relationshipLocator: Locator;
  readonly emailLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.zipCodeLocator = this.page.locator('#zipCode29');
    this.firstNameLocator = this.page.locator('#firstName22');
    this.lastNameLocator = this.page.locator('#lastName23');
    this.birthDateLocator = this.page.locator('#birthDate24');
    this.genderLocator = this.page.locator('#gender26');
    this.smokerLocator = this.page.locator('#isSmoker27');
    this.dependentFirstNameLocator = this.page.locator('#firstName38');
    this.dependentLastNameLocator = this.page.locator('#lastName39');
    this.dependentBirthDateLocator = this.page.locator('#birthDate40');
    this.relationshipLocator = this.page.locator('#memberRelationship41');
    this.emailLocator = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_userProfile_user_emailAddress');
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

  async clickAddDependentLink() {
    await this.page.getByRole('link', { name: 'Add Dependent' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async fillDependentFirstName(firstName: string) {
    await this.dependentFirstNameLocator.click();
    await this.dependentFirstNameLocator.fill(firstName);
  }

  async fillDependentLastName(lastName: string) {
    await this.dependentLastNameLocator.click();
    await this.dependentLastNameLocator.fill(lastName);
  }

  async fillDependentBirthDate(birthDate: string) {
    await this.dependentBirthDateLocator.click();
    await this.dependentBirthDateLocator.fill(birthDate);
  }

  async selectDependentRelationship(relationship: string) {
    await this.relationshipLocator.selectOption(relationship);
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