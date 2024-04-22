import { test, expect } from '@playwright/test';
import { MedicalAndDentalPage } from '../pages/medicalAndDentalPage';
import { HealthPartners as fakehealthPartners } from '../fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('Health Partners Test', async ({ page }) => {
  const  medAndDentPage = new MedicalAndDentalPage(page);
    await medAndDentPage.navigateToWelcomePage();
    await expect(page).toHaveURL('https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await medAndDentPage.clickGetStartedLink();
    await medAndDentPage.SeeIfYouQualify();
    await medAndDentPage.saveAndContinue();
    await medAndDentPage.fillZipCode('55413');
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await medAndDentPage.fillFirstName();
    await medAndDentPage.fillLastName(fakeValue.lastNameLocator);
    await medAndDentPage.fillBirthDate('02/16/1987');
    await medAndDentPage.selectGender(fakeValue.genderLocator);
    await medAndDentPage.selectSmokerOption(fakeValue.smokerLocator);
    await medAndDentPage.clickAddDependentLink();
    await medAndDentPage.fillDependentFirstName(fakeValue.dependentFirstNameLocator);
    await medAndDentPage.fillDependentLastName(fakeValue.dependentLastNameLocator);
    await medAndDentPage.fillDependentBirthDate('12/18/2001');
    await medAndDentPage.selectDependentRelationship(fakeValue.relationshipLocator);
    await medAndDentPage.selectDependentGender(fakeValue.childGenderLocator);
    await medAndDentPage.selectSmokerOptionForDepandant(fakeValue.childSmokerLocator);
    await medAndDentPage.clickContinueLink();
    await medAndDentPage.selectBrowseAllPlans();
    await medAndDentPage.addToCart();
    await medAndDentPage.viewCartAndEnroll();
    await medAndDentPage.enrollNow();
    await medAndDentPage.fillEmailAddress(fakeValue.emailLocator);
    await medAndDentPage.userIDAndPassword(fakeValue.userIdLocator, fakeValue.passwordLocator);
    await medAndDentPage.securityQuestionAndBroker(fakeValue.answerLocator);
    await medAndDentPage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator);
    await medAndDentPage.familyMembers();
    await medAndDentPage.planInformation();
    await medAndDentPage.uploadFile();
    await medAndDentPage.paymentOptions(fakeValue.lastNameLocator);
    await medAndDentPage.verifySubmission();
    await medAndDentPage.submitForm(fakeValue.lastNameLocator);

});
