import { test, expect, Page, Locator } from '@playwright/test';


export class HealthPartnersPage {
  private readonly page: Page;
  readonly zipCodeLocator: Locator;
  readonly firstNameLocator: Locator;
  readonly lastNameLocator: Locator;
  readonly birthDateLocator: Locator;
  readonly genderLocator: Locator;
  readonly childGenderLocator: Locator;
  readonly smokerLocator: Locator;
  readonly dependentFirstNameLocator: Locator;
  readonly dependentLastNameLocator: Locator;
  readonly dependentBirthDateLocator: Locator;
  readonly relationshipLocator: Locator;
  readonly emailLocator: Locator;
  readonly childSmokerLocator: Locator;
  readonly userIdLocator: Locator;
  readonly passwordLocator: Locator;
  readonly confirmPasswordLocator: Locator;
  readonly securityQuestionLocator: Locator;
  readonly  answerLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.zipCodeLocator = this.page.locator('#zipCode29');
    this.firstNameLocator = this.page.locator('#firstName22');
    this.lastNameLocator = this.page.locator('#lastName23');
    this.birthDateLocator = this.page.locator('#birthDate24');
    this.genderLocator = this.page.locator('#gender26');
    this.childGenderLocator = this.page.locator('#gender42');
    this.smokerLocator = this.page.locator('#isSmoker27');
    this.dependentFirstNameLocator = this.page.locator('#firstName38');
    this.dependentLastNameLocator = this.page.locator('#lastName39');
    this.dependentBirthDateLocator = this.page.locator('#birthDate40');
    this.relationshipLocator = this.page.locator('#memberRelationship41');
    this.childSmokerLocator = this.page.locator('#isSmoker43')
    this.emailLocator = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_userProfile_user_emailAddress');
    this.userIdLocator = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_registrationInfo_userId');
    this.passwordLocator  = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_registrationInfo_password');
    this.confirmPasswordLocator = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_registrationInfo_confirmPassword');
    this.securityQuestionLocator = this.page.locator('#secretQuestion');
    this.answerLocator = this.page.locator('#secretAnswer');


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
  await this.page.waitForLoadState('networkidle');
  await this.page.getByText('Birth of child, adoption of').click();
  await this.page.getByRole('checkbox').check();
  await this.page.getByLabel('Enter the date of your event:').click();
  await this.page.getByRole('cell', { name: '4' }).nth(1).click();
  await this.page.getByRole('link', { name: 'Save & Continue' }).click();
  await this.page.waitForLoadState('networkidle');
  await this.page.getByRole('link', { name: 'Save & Continue' }).click();
  
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
    await this.childGenderLocator.selectOption(gender);
  }

  async selectSmokerOptionForDepandant(option: string) {
    await this.childSmokerLocator.click();
    await this.childSmokerLocator.selectOption(option);
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

  async fillEmailAddress(emailAddress: string) {
    await this.emailLocator.click();
    await this.emailLocator.fill(emailAddress);
  }

  async userIDAndPassword(id: string, password: string){
    await this.userIdLocator.click();
    await this.userIdLocator.fill(id);
    await this.passwordLocator.click();
    await this.passwordLocator.fill(password);
    await this.confirmPasswordLocator.click();
    await this.confirmPasswordLocator.fill(password);
}
async securityQuestionAndBroker(answer: string) {
  await this.securityQuestionLocator.selectOption('What was your childhood nickname?');
  await this.answerLocator.click();
  await this.answerLocator.fill(answer);
  await this.page.getByLabel('No').check();
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}

async startEnrolment(){
  await this.page.getByRole('link',{ name: 'Start enrollment'}).click();
  await this.page.waitForLoadState('networkidle');
  await this.page.locator('input[name="Application\\.Applicant\\.Address_1"]').click();
  await this.page.locator('input[name="Application\\.Applicant\\.Address_1"]').fill('House number 1566');
  await this.page.locator('input[name="Application\\.Applicant\\.City"]').click();
  await this.page.locator('input[name="Application\\.Applicant\\.City"]').fill('Chicago');
  await this.page.locator('input[name="Application\\.Applicant\\.Home_Phone"]').click();
  await this.page.locator('input[name="Application\\.Applicant\\.Home_Phone"]').fill('123456789')
  await this.page.getByLabel('Check this box if applicant').check();
  await this.page.getByRole('link', { name: 'Continue ' }).click();
  await this.page.waitForLoadState('networkidle');
  //await this.page.goto('https://individualinsurance.healthpartners.com/hp/applicationservice/Application.action?appResponseCode=b3b3e6b1-6bc5-4037-a1b5-01069bce9a47#PAGE36C2D0AC7G95A4E40239');
  //await this.page.locator('div').filter({ hasText: /^\*Same address as primary applicant\? YesNo$/ }).getByLabel('Yes').check();
  //await this.page.getByLabel('Check this box if applicant').check();
  //await this.page.getByRole('link', { name: 'Continue ' }).click();
  //await this.page.getByLabel('No').first().check();
  //await this.page.getByLabel('No').nth(2).check();
  //await this.page.getByRole('link', { name: 'Continue ' }).click();

}

}

