import { test, expect } from '@playwright/test';
import { ChildCoverageWithBrokerPage} from '../pages/childOnlyWithBrokerPage';
import { HealthPartners as fakehealthPartners } from '../fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('Child Coverage Only with broker', async ({ page }) => {
  const  childCoveragewithbrokerPage = new ChildCoverageWithBrokerPage(page);
    await childCoveragewithbrokerPage.navigateToWelcomePage();
    await expect(page).toHaveURL('https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await childCoveragewithbrokerPage.clickGetStartedLink();
    await childCoveragewithbrokerPage.SeeIfYouQualify();
    await childCoveragewithbrokerPage.saveAndContinue();
    await childCoveragewithbrokerPage.fillZipCode('55413');
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await childCoveragewithbrokerPage.fillFirstName();
    await childCoveragewithbrokerPage.fillLastName(fakeValue.lastNameLocator);
    await childCoveragewithbrokerPage.fillBirthDate('02/16/2015');
    await childCoveragewithbrokerPage.selectGender(fakeValue.genderLocator);
    await childCoveragewithbrokerPage.clickAddDependentLink();
    await childCoveragewithbrokerPage.fillDependentFirstName(fakeValue.dependentFirstNameLocator);
    await childCoveragewithbrokerPage.fillDependentLastName(fakeValue.dependentLastNameLocator);
    await childCoveragewithbrokerPage.fillDependentBirthDate('12/18/2014');
    await childCoveragewithbrokerPage.selectDependentRelationship(fakeValue.relationshipLocator);
    await childCoveragewithbrokerPage.selectDependentGender(fakeValue.childGenderLocator);
    await childCoveragewithbrokerPage.clickContinueLink();
    await childCoveragewithbrokerPage.selectBrowseAllPlans();
    await childCoveragewithbrokerPage.addToCart();
    await childCoveragewithbrokerPage.viewCartAndEnroll();
    await childCoveragewithbrokerPage.enrollNow();
    await childCoveragewithbrokerPage.fillEmailAddress(fakeValue.emailLocator);
    await childCoveragewithbrokerPage.userIDAndPassword(fakeValue.userIdLocator, fakeValue.passwordLocator);
    await childCoveragewithbrokerPage.securityQuestionAndBroker(fakeValue.answerLocator);
    await childCoveragewithbrokerPage.brokerDetails();
    await childCoveragewithbrokerPage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator);
    await childCoveragewithbrokerPage.familyMembers();
    await childCoveragewithbrokerPage.planInformation();
    await childCoveragewithbrokerPage.uploadFile();
    await childCoveragewithbrokerPage.paymentOptions(fakeValue.lastNameLocator);
    await childCoveragewithbrokerPage.verifySubmission();
    await childCoveragewithbrokerPage.submitForm(fakeValue.lastNameLocator);

});
