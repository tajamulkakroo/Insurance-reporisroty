import { test, expect } from '@playwright/test';
import { InsurancePageWithBroker } from '../pages/InsurancePageWithBroker';
import { HealthPartners as fakehealthPartners } from '../fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('Insurance test with Broker', async ({ page }) => {
    const insurancePage = new InsurancePageWithBroker(page);
    await insurancePage.navigateToWelcomePage();
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome");
    
    await insurancePage.clickGetStartedLink();
    await insurancePage.SeeIfYouQualify();
    await insurancePage.saveAndContinue();
    await insurancePage.fillZipCode('55413');
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await insurancePage.fillFirstName('Test');
    await insurancePage.fillLastName(fakeValue.lastNameLocator);
    await insurancePage.fillBirthDate('02/16/1987');
    await insurancePage.selectGender(fakeValue.genderLocator);
    await insurancePage.selectSmokerOption(fakeValue.smokerLocator);
    await insurancePage.clickAddDependentLink();
    await insurancePage.fillDependentFirstName(fakeValue.dependentFirstNameLocator);
    await insurancePage.fillDependentLastName(fakeValue.dependentLastNameLocator);
    await insurancePage.fillDependentBirthDate('12/18/2001');
    await insurancePage.selectDependentRelationship(fakeValue.relationshipLocator);
    await insurancePage.selectDependentGender(fakeValue.childGenderLocator);
    await insurancePage.selectSmokerOptionForDepandant(fakeValue.childSmokerLocator);
    await insurancePage.clickContinueLink();
    await insurancePage.selectBrowseAllPlans();
    await insurancePage.addToCart();
    await insurancePage.viewCartAndEnroll();
    await insurancePage.enrollNow();
    await insurancePage.fillEmailAddress(fakeValue.emailLocator);
    await insurancePage.userIDAndPassword(fakeValue.userIdLocator, fakeValue.passwordLocator);
    await insurancePage.securityQuestionAndBroker(fakeValue.answerLocator);
    await insurancePage.brokerDetails();
    await insurancePage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator);
    await insurancePage.familyMembers();
    await insurancePage.planInformation();
    await insurancePage.uploadFile();
    await insurancePage.paymentOptions(fakeValue.firstNameLocator, fakeValue.lastNameLocator);
    await insurancePage.verifySubmission();
    await insurancePage.submitForm(fakeValue.firstNameLocator, fakeValue.lastNameLocator);

});
