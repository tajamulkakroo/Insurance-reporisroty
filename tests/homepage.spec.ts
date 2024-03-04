import { test, expect } from '@playwright/test';
import { HealthPartnersPage } from '../pages/InsurancePage';
import { HealthPartners as fakehealthPartners } from '../fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('Health Partners Test', async ({ page }) => {
  const healthPartnersPage = new HealthPartnersPage(page);
    await healthPartnersPage.navigateToWelcomePage();
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome");
    await healthPartnersPage.clickGetStartedLink();
    await healthPartnersPage.SeeIfYouQualify();
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/SpecialEnrollment");
    await healthPartnersPage.fillZipCode('55413');
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await healthPartnersPage.fillFirstName(fakeValue.firstNameLocator);
    await healthPartnersPage.fillLastName(fakeValue.lastNameLocator);
    await healthPartnersPage.fillBirthDate('02/16/1987');
    await healthPartnersPage.selectGender(fakeValue.genderLocator);
    await healthPartnersPage.selectSmokerOption(fakeValue.smokerLocator);
    await healthPartnersPage.clickAddDependentLink();
    await healthPartnersPage.fillDependentFirstName(fakeValue.dependentFirstNameLocator);
    await healthPartnersPage.fillDependentLastName(fakeValue.dependentLastNameLocator);
    await healthPartnersPage.fillDependentBirthDate('12/18/2001');
    await healthPartnersPage.selectDependentRelationship(fakeValue.relationshipLocator);
    await healthPartnersPage.selectDependentGender(fakeValue.childGenderLocator);
    await healthPartnersPage.selectSmokerOptionForDepandant(fakeValue.childSmokerLocator);
    await healthPartnersPage.clickContinueLink();
    await healthPartnersPage.selectBrowseAllPlans();
    await healthPartnersPage.addToCart();
    await healthPartnersPage.viewCartAndEnroll();
    await healthPartnersPage.enrollNow();
    await healthPartnersPage.fillEmailAddress(fakeValue.emailLocator);
    await healthPartnersPage.userIDAndPassword(fakeValue.userIdLocator, fakeValue.passwordLocator);
    await healthPartnersPage.securityQuestionAndBroker(fakeValue.answerLocator);
    await healthPartnersPage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator);
    await healthPartnersPage.familyMembers();
    await healthPartnersPage.planInformation();
    await healthPartnersPage.uploadFile();
    await healthPartnersPage.paymentOptions(fakeValue.firstNameLocator, fakeValue.lastNameLocator);
    await healthPartnersPage.verifySubmission();
    await healthPartnersPage.submitForm(fakeValue.firstNameLocator, fakeValue.lastNameLocator);

});
