import { test, expect } from '@playwright/test';
import { SpousePage } from '../pages/policyHolderWithSpousePage';
import { SpouseFixture as fakehealthPartners } from '../fixtures/spouseFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('Policy Holder with Spouse', async ({ page }) => {
  const spousePage = new SpousePage(page);
    await spousePage.navigateToWelcomePage();
    await expect(page).toHaveURL('https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await spousePage.clickGetStartedLink();
    await spousePage.SeeIfYouQualify();
    await spousePage.saveAndContinue();
    await spousePage.fillZipCode('55413');
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await spousePage.fillFirstName();
    await spousePage.fillLastName(fakeValue.lastNameLocator);
    await spousePage.fillBirthDate('02/16/1987');
    await spousePage.selectGender(fakeValue.genderLocator);
    await spousePage.selectSmokerOption(fakeValue.smokerLocator);
    await spousePage.clickAddDependentLink();
    await spousePage.fillDependentFirstName(fakeValue.dependentFirstNameLocator);
    await spousePage.fillDependentLastName(fakeValue.dependentLastNameLocator);
    await spousePage.fillDependentBirthDate('12/18/2001');
    await spousePage.selectDependentRelationship(fakeValue.relationshipLocator);
    await spousePage.selectDependentGender(fakeValue.childGenderLocator);
    await spousePage.selectSmokerOptionForDepandant(fakeValue.childSmokerLocator);
    await spousePage.clickContinueLink();
    await spousePage.selectBrowseAllPlans();
    await spousePage.addToCart();
    await spousePage.viewCartAndEnroll();
    await spousePage.enrollNow();
    await spousePage.fillEmailAddress(fakeValue.emailLocator);
    await spousePage.userIDAndPassword(fakeValue.userIdLocator, fakeValue.passwordLocator);
    await spousePage.securityQuestionAndBroker(fakeValue.answerLocator);
    await spousePage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator);
    await spousePage.familyMembers();
    await spousePage.planInformation();
    await spousePage.uploadFile();
    await spousePage.paymentOptions(fakeValue.lastNameLocator);
    await spousePage.verifySubmission();
    await spousePage.submitForm(fakeValue.lastNameLocator);

});
