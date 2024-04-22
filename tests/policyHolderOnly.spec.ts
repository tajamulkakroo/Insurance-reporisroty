import { test, expect } from '@playwright/test';
import { PolicyHolderPage} from '../pages/policyHolderPage';
import { HealthPartners as fakehealthPartners } from '../fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('test for Policy holder only', async ({ page }) => {
  const policyHolderPage = new PolicyHolderPage(page);
    await policyHolderPage.navigateToWelcomePage();
    await expect(page).toHaveURL('https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await policyHolderPage.clickGetStartedLink();
    await policyHolderPage.SeeIfYouQualify();
    await policyHolderPage.saveAndContinue();
    await policyHolderPage.fillZipCode('55413');
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await policyHolderPage.fillFirstName();
    await policyHolderPage.fillLastName(fakeValue.lastNameLocator);
    await policyHolderPage.fillBirthDate('02/16/1987');
    await policyHolderPage.selectGender(fakeValue.genderLocator);
    await policyHolderPage.selectSmokerOption(fakeValue.smokerLocator);
    await policyHolderPage.clickContinueLink();
    await policyHolderPage.selectBrowseAllPlans();
    await policyHolderPage.addToCart();
    await policyHolderPage.viewCartAndEnroll();
    await policyHolderPage.enrollNow();
    await policyHolderPage.fillEmailAddress(fakeValue.emailLocator);
    await policyHolderPage.userIDAndPassword(fakeValue.userIdLocator, fakeValue.passwordLocator);
    await policyHolderPage.securityQuestionAndBroker(fakeValue.answerLocator);
    await policyHolderPage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator);
    await policyHolderPage.previousHealthPlan();
    await policyHolderPage.uploadFile();
    await policyHolderPage.paymentOptions(fakeValue.lastNameLocator);
    await policyHolderPage.verifySubmission();
    await policyHolderPage.submitForm(fakeValue.lastNameLocator);

});
