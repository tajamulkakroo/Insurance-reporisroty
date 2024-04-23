import { test, expect, Page, Locator } from '@playwright/test';


export class Familywith4childrenPage {
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
  readonly answerLocator: Locator;
  readonly addressLocator: Locator;
  readonly cityLocator: Locator;
  readonly phoneLocator: Locator;
  readonly creditCardFirstNameLocator: Locator;
  readonly creditCardLastNameLocator: Locator;
  readonly applicantFirstNameLocator: Locator;
  readonly applicantLastNameLocator: Locator;
  readonly confirmFirstNameLocator: Locator;
  readonly confirmLastNameLocator: Locator;


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
    this.addressLocator = this.page.locator('input[name="Application\\.Applicant\\.Address_1"]');
    this.cityLocator = this.page.locator('input[name="Application\\.Applicant\\.City"]');
    this.phoneLocator = this.page.locator('input[name="Application\\.Applicant\\.Home_Phone"]');
    this.creditCardFirstNameLocator = this.page.locator('input[name="Application\\.Initial_Credit_Card\\.Cardholder_First_Name"]');
    this.creditCardLastNameLocator = this.page.locator('input[name="Application\\.Initial_Credit_Card\\.Cardholder_Last_Name"]');
    this.applicantFirstNameLocator = this.page.locator('input[name="Application.Signature.First_Name"]');
    this.applicantLastNameLocator = this.page.locator('input[name="Application.Signature.Last_Name"]');
    this.confirmFirstNameLocator = this.page.locator('input[name="Application.Signature.Confirm_First_Name"]');
    this.confirmLastNameLocator = this.page.locator('input[name="Application.Signature.Confirm_Last_Name"]');
    }

  async navigateToWelcomePage() {
    await this.page.goto('https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await this.page.waitForLoadState('networkidle');
  }

  async clickGetStartedLink() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
    await this.page.waitForLoadState('networkidle');
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
      await expect(this.page).toHaveURL("https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics")
      }).toPass()
  }
  

  async fillZipCode(zipCode: string) {
    await this.zipCodeLocator.waitFor({ state: 'visible' });
    await this.zipCodeLocator.fill(zipCode);
  }

  async fillFirstName() {
    await this.firstNameLocator.click();
    await this.firstNameLocator.fill('TESTAUTO');
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

  async clickAddDependentLink1() {
    await this.page.getByRole('link', { name: 'Add Dependent' }).click();
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('#firstName56').click();
    await this.page.locator('#firstName56').fill('First Child');
    await this.page.locator('#lastName57').click();
    await this.page.locator('#lastName57').fill('Last name child1');
    await this.page.locator('#birthDate58').click();
    await this.page.locator('#birthDate58').fill('01/01/2010');
    await this.page.locator('#memberRelationship59').click();
    await this.page.locator('#memberRelationship59').selectOption('CHILD');
    await this.page.locator('#gender60').click();
    await this.page.locator('#gender60').selectOption('Female');
    //await this.page.locator('#isSmoker61').click();
   // await this.page.locator('#isSmoker61').selectOption('NO');

 }

 async clickAddDependentLink2() {
    await this.page.getByRole('link', { name: 'Add Dependent' }).click();
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('#firstName80').click();
    await this.page.locator('#firstName80').fill('Second Child');
    await this.page.locator('#lastName81').click();
    await this.page.locator('#lastName81').fill('Last name child2');
    await this.page.locator('#birthDate82').click();
    await this.page.locator('#birthDate82').fill('01/01/2012');
    await this.page.locator('#memberRelationship83').click();
    await this.page.locator('#memberRelationship83').selectOption('CHILD');
    await this.page.locator('#gender84').click();
    await this.page.locator('#gender84').selectOption('M');
    //await this.page.locator('#isSmoker85').click();
    //await this.page.locator('#isSmoker85').selectOption('NO');

 }

 async clickAddDependentLink3() {
    await this.page.getByRole('link', { name: 'Add Dependent' }).click();
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('#firstName110').click();
    await this.page.locator('#firstName110').fill('Third Child');
    await this.page.locator('#lastName111').click();
    await this.page.locator('#lastName111').fill('Last name child3');
    await this.page.locator('#birthDate112').click();
    await this.page.locator('#birthDate112').fill('01/01/2014');
    await this.page.locator('#memberRelationship113').click();
    await this.page.locator('#memberRelationship113').selectOption('CHILD');
    await this.page.locator('#gender114').click();
    await this.page.locator('#gender114').selectOption('F');
    //await this.page.locator('#isSmoker115').click();
    //await this.page.locator('#isSmoker115').selectOption('NO');

 }

 async clickAddDependentLink4() {
    await this.page.getByRole('link', { name: 'Add Dependent' }).click();
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('#firstName146').click();
    await this.page.locator('#firstName146').fill('Fourth Child');
    await this.page.locator('#lastName147').click();
    await this.page.locator('#lastName147').fill('Last name child4');
    await this.page.locator('#birthDate148').click();
    await this.page.locator('#birthDate148').fill('01/01/2016');
    await this.page.locator('#memberRelationship149').click();
    await this.page.locator('#memberRelationship149').selectOption('CHILD');
    await this.page.locator('#gender150').click();
    await this.page.locator('#gender150').selectOption('M');
    //await this.page.locator('#isSmoker151').click();
    //await this.page.locator('#isSmoker151').selectOption('NO');

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

async startEnrolment(address: string, city: string, phone: string){
  await this.page.getByRole('link',{ name: 'Start enrollment'}).click();
  await this.page.waitForLoadState('networkidle');
  await this.addressLocator.click();
  await this.addressLocator.fill(address);
  await this.cityLocator.click();
  await this.cityLocator.fill(city);
  await this.phoneLocator.click();
  await this.phoneLocator.fill(phone);
  await this.page.getByLabel('Check this box if applicant').check();
  await this.page.getByLabel('No, not of Hispanic, Latino/a, or Spanish origin').check();
  await this.page.getByLabel('White').check();
  await this.page.getByLabel('American Indian or Alaska Native').check();
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}

async familyMembers(){
   
   await this.page.locator('input[name="Application\\.Dependent\\[0\\]\\.Middle_Initial"]').click();
   await this.page.locator('[id="FEL52994447A65BE2D4283F\\[0\\]"] > .radioFields > div > .radio-choice-label').first().check();
   await this.page.waitForLoadState('networkidle');
   await this.page.locator('input[name="Application.Dependent[0].SSN_Not_Required"]').check();
   await this.page.locator('input[name="Application.Dependent[0].Ethnicities"]').first().check();
   await this.page.locator('input[name="Application.Dependent[0].Races"]').first().check();
   await this.page.locator('input[name="Application.Dependent[0].Races"]').nth(3).check();
//child1 member info
   await this.page.locator('input[name="Application.Dependent[1].Middle_Initial"]').click();
   await this.page.locator('[id="FEL52994447A65BE2D4283F\\[1\\]"] > .radioFields > div > .radio-choice-label').first().click();
   await this.page.waitForLoadState('networkidle');
   await this.page.locator('input[name="Application.Dependent[1].SSN_Not_Required"]').check();
   await this.page.locator('input[name="Application.Dependent[1].Ethnicities"]').first().check();
   await this.page.locator('input[name="Application.Dependent[1].Races"]').first().check();
   await this.page.locator('input[name="Application.Dependent[1].Races"]').nth(3).check();
   //child2 member info
   await this.page.locator('input[name="Application.Dependent[2].Middle_Initial"]').click();
   await this.page.locator('[id="FEL52994447A65BE2D4283F\\[2\\]"] > .radioFields > div > .radio-choice-label').first().click();
   await this.page.waitForLoadState('networkidle');
   await this.page.locator('input[name="Application.Dependent[2].SSN_Not_Required"]').check();
   await this.page.locator('input[name="Application.Dependent[2].Ethnicities"]').first().check();
   await this.page.locator('input[name="Application.Dependent[2].Races"]').first().check();
   await this.page.locator('input[name="Application.Dependent[2].Races"]').nth(3).check();
   
   //child3 member info
   await this.page.locator('input[name="Application.Dependent[3].Middle_Initial"]').click();
   await this.page.locator('[id="FEL52994447A65BE2D4283F\\[3\\]"] > .radioFields > div > .radio-choice-label').first().click();
   await this.page.waitForLoadState('networkidle');
   await this.page.locator('input[name="Application.Dependent[3].SSN_Not_Required"]').check();
   await this.page.locator('input[name="Application.Dependent[3].Ethnicities"]').first().check();
   await this.page.locator('input[name="Application.Dependent[3].Races"]').first().check();
   await this.page.locator('input[name="Application.Dependent[3].Races"]').nth(3).check();
 
   //child4 member info
   await this.page.locator('input[name="Application.Dependent[4].Middle_Initial"]').click();
   await this.page.locator('[id="FEL52994447A65BE2D4283F\\[4\\]"] > .radioFields > div > .radio-choice-label').first().click();
   await this.page.waitForLoadState('networkidle');
   await this.page.locator('input[name="Application.Dependent[4].SSN_Not_Required"]').check();
   await this.page.locator('input[name="Application.Dependent[4].Ethnicities"]').first().check();
   await this.page.locator('input[name="Application.Dependent[4].Races"]').first().check();
   await this.page.locator('input[name="Application.Dependent[4].Races"]').nth(3).check();
   await this.page.getByRole('link', { name: 'Continue ' }).click();
   
}

async planInformation(){

  //await this.page.locator('input[name="Application.Have_Previous_Coverage"]').nth(2).click();
  await this.page.getByLabel('No').first().check();
  await this.page.getByLabel('No').nth(2).check();
  await this.page.getByRole('group', { name: 'First Child Last name child' }).getByLabel('No').first().click();
  await this.page.getByRole('group', { name: 'lime calculating' }).getByLabel('No').first().click();
  await this.page.locator('input[name="Application.Dependent[2].Have_Previous_Coverage"]').nth(2).check();
  await this.page.locator('input[name="Application.Dependent[3].Have_Previous_Coverage"]').nth(2).check();;
  await this.page.locator('input[name="Application.Dependent[4].Have_Previous_Coverage"]').nth(2).click();
 // await this.page.getByLabel('No').nth(3).check();
  //await this.page.getByLabel('No').nth(4).check();
  //await this.page.getByLabel('No').nth(5).check();
  //await this.page.getByLabel('No').nth(6).check();
 //await this.page.locator('[id="FEL443E7861B61772D48A61\\[0\\]"] > .radioFields > div > .radio-choice-label').click();
  //await this.page.locator('[id="FEL443E7861B61772D48A61\\[1\\]"] > .radioFields > div > .radio-choice-label').click();
  //await this.page.locator('[id="FEL443E7861B61772D48A61\\[2\\]"] > .radioFields > div > .radio-choice-label').click();
  //await this.page.locator('[id="FEL443E7861B61772D48A61\\[3\\]"] > .radioFields > div > .radio-choice-label').click();
 // await this.page.locator('[id="FEL443E7861B61772D48A61\\[4\\]"] > .radioFields > div > .radio-choice-label').click(); 

  //await this.page.locator('input[name="Application.Dependent[0].Have_Previous_Coverage"]').nth(2).check();
  //await this.page.locator('input[name="Application.Dependent[1].Have_Previous_Coverage"]').nth(2).check();
 // await this.page.locator('input[name="Application.Dependent[2].Have_Previous_Coverage"]').nth(2).check();
 // await this.page.locator('input[name="Application.Dependent[3].Have_Previous_Coverage"]').nth(2).check();;
 // await this.page.locator('input[name="Application.Dependent[4].Have_Previous_Coverage"]').nth(2).click();
 await this.page.getByRole('link', { name: 'Continue ' }).click();
}

async uploadFile() {

  await this.page.getByRole('textbox').setInputFiles('./dummy.pdf');
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}

async paymentOptions(lastName: string) {

  await this.page.getByRole('radio', { name: 'NO', exact: true }).check();
  await this.page.getByLabel('No, I prefer to get and pay').check();
  await this.page.getByLabel('Credit/Debit Card').check(); 
  await this.creditCardFirstNameLocator.click();
  await this.creditCardFirstNameLocator.fill('TESTAUTO');
  await this.creditCardLastNameLocator.click();
  await this.creditCardLastNameLocator.fill(lastName);
  await this.page.getByLabel('Visa').check();
  await this.page.locator('input[name="Application\\.Initial_Credit_Card\\.CC_Number"]').click();
  await this.page.locator('input[name="Application\\.Initial_Credit_Card\\.CC_Number"]').fill('4111111111111111');
  await this.page.getByPlaceholder('mm/yyyy').click();
  await this.page.getByPlaceholder('mm/yyyy').fill('10/2030');
  await this.page.locator('div').filter({ hasText: /^Yes$/ }).click();
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}
async verifySubmission() {
  
  await this.page.getByRole('link', { name: 'Continue ' }).click();
}

async  submitForm(lastName: string){
  await this.page.locator('#CHECKBOX1FE4964A4AE79DA3DAF6').check;
  await this.page.locator('#CHECKBOX81B9EA3022BEAD60G1A4').check;
  /*await this.applicantFirstNameLocator.click();
  await this.applicantFirstNameLocator.fill(firstName);
  await this.applicantLastNameLocator.click();
  await this.applicantLastNameLocator.fill(lastName);
  await this.confirmFirstNameLocator.click();
  await this.confirmFirstNameLocator.fill(firstName);
  await this.confirmLastNameLocator.click();
  await this.confirmLastNameLocator.fill(lastName); */   
  //Please add inique IDs for these 4 elements
}

}
