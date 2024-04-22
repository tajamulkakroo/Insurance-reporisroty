import { test, expect } from '@playwright/test';
import { ChildCoveragePage} from '../pages/childCoveragePage';
import { HealthPartners as fakehealthPartners } from '../fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000);
test('Child Coverage Only', async ({ page }) => {
  const  childCoveragePage = new ChildCoveragePage(page);
    await childCoveragePage.navigateToWelcomePage();
    await expect(page).toHaveURL('https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await childCoveragePage.clickGetStartedLink();
    await childCoveragePage.SeeIfYouQualify();
    await childCoveragePage.saveAndContinue();
    await childCoveragePage.fillZipCode('55413');
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await childCoveragePage.fillFirstName();
    await childCoveragePage.fillLastName(fakeValue.lastNameLocator);
    await childCoveragePage.fillBirthDate('02/16/2015');
    await childCoveragePage.selectGender(fakeValue.genderLocator);
    await childCoveragePage.clickAddDependentLink();
    await childCoveragePage.fillDependentFirstName(fakeValue.dependentFirstNameLocator);
    await childCoveragePage.fillDependentLastName(fakeValue.dependentLastNameLocator);
    await childCoveragePage.fillDependentBirthDate('12/18/2014');
    await childCoveragePage.selectDependentRelationship(fakeValue.relationshipLocator);
    await childCoveragePage.selectDependentGender(fakeValue.childGenderLocator);
    await childCoveragePage.clickContinueLink();
    await childCoveragePage.selectBrowseAllPlans();
    await childCoveragePage.addToCart();
    await childCoveragePage.viewCartAndEnroll();
    await childCoveragePage.enrollNow();
    await childCoveragePage.fillEmailAddress(fakeValue.emailLocator);
    await childCoveragePage.userIDAndPassword(fakeValue.userIdLocator, fakeValue.passwordLocator);
    await childCoveragePage.securityQuestionAndBroker(fakeValue.answerLocator);
    await childCoveragePage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator);
    await childCoveragePage.familyMembers();
    await childCoveragePage.guardianDetails();
    await childCoveragePage.planInformation();
    await childCoveragePage.uploadFile();
    await childCoveragePage.paymentOptions(fakeValue.lastNameLocator);
    await childCoveragePage.verifySubmission();
    await childCoveragePage.submitForm(fakeValue.lastNameLocator);

});
