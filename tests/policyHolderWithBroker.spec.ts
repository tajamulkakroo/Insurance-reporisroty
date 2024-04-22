import { test, expect } from '@playwright/test';
import { PolicyHolderWithBrokerPage } from '../pages/policyHolderWithBrokerPage';
import { HealthPartners as fakehealthPartners } from '../fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('Insurance test with Broker', async ({ page }) => {
    const policyPageWithBroker = new PolicyHolderWithBrokerPage(page);
    await policyPageWithBroker.navigateToWelcomePage();
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome");
    await policyPageWithBroker.clickGetStartedLink();
    await policyPageWithBroker.SeeIfYouQualify();
    await policyPageWithBroker.saveAndContinue();
    await policyPageWithBroker.fillZipCode('55413');
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await policyPageWithBroker.fillFirstName();
    await policyPageWithBroker.fillLastName(fakeValue.lastNameLocator);
    await policyPageWithBroker.fillBirthDate('02/16/1987');
    await policyPageWithBroker.selectGender(fakeValue.genderLocator);
    await policyPageWithBroker.selectSmokerOption(fakeValue.smokerLocator);;
    await policyPageWithBroker.clickContinueLink();
    await policyPageWithBroker.selectBrowseAllPlans();
    await policyPageWithBroker.addToCart();
    await policyPageWithBroker.viewCartAndEnroll();
    await policyPageWithBroker.enrollNow();
    await policyPageWithBroker.fillEmailAddress(fakeValue.emailLocator);
    await policyPageWithBroker.userIDAndPassword(fakeValue.userIdLocator, fakeValue.passwordLocator);
    await policyPageWithBroker.securityQuestionAndBroker(fakeValue.answerLocator);
    await policyPageWithBroker.brokerDetails();
    await policyPageWithBroker.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator);
    await policyPageWithBroker.uploadFile();
    await policyPageWithBroker.paymentOptions(fakeValue.lastNameLocator);
    await policyPageWithBroker.verifySubmission();
    await policyPageWithBroker.submitForm( fakeValue.lastNameLocator);

});
