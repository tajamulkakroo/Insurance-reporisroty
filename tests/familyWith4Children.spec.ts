import { test, expect } from '@playwright/test';
import { Familywith4childrenPage } from '../pages/familyWith4ChildrenPage';
import { HealthPartners as fakehealthPartners } from '../fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(300000);
test('Family with 4 children test', async ({ page }) => {
  const  familyPage = new Familywith4childrenPage(page);
    await familyPage.navigateToWelcomePage();
    await expect(page).toHaveURL('https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#welcome');
    await familyPage.clickGetStartedLink();
    await familyPage.SeeIfYouQualify();
    await familyPage.saveAndContinue();
    await familyPage.fillZipCode('55413');
    await expect(page).toHaveURL("https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await familyPage.fillFirstName();
    await familyPage.fillLastName(fakeValue.lastNameLocator);
    await familyPage.fillBirthDate('02/16/1987');
    await familyPage.selectGender(fakeValue.genderLocator);
    await familyPage.selectSmokerOption(fakeValue.smokerLocator);
    await familyPage.clickAddDependentLink();
    await familyPage.fillDependentFirstName(fakeValue.dependentFirstNameLocator);
    await familyPage.fillDependentLastName(fakeValue.dependentLastNameLocator);
    await familyPage.fillDependentBirthDate('12/18/2001');
    await familyPage.selectDependentRelationship(fakeValue.relationshipLocator);
    await familyPage.selectDependentGender(fakeValue.childGenderLocator);
    await familyPage.selectSmokerOptionForDepandant(fakeValue.childSmokerLocator);
    await familyPage.clickAddDependentLink1();
    await familyPage.clickAddDependentLink2();
    await familyPage.clickAddDependentLink3();
    await familyPage.clickAddDependentLink4();
    await familyPage.clickContinueLink();
    await familyPage.selectBrowseAllPlans();
    await familyPage.addToCart();
    await familyPage.viewCartAndEnroll();
    await familyPage.enrollNow();
    await familyPage.fillEmailAddress(fakeValue.emailLocator);
    await familyPage.userIDAndPassword(fakeValue.userIdLocator, fakeValue.passwordLocator);
    await familyPage.securityQuestionAndBroker(fakeValue.answerLocator);
    await familyPage.startEnrolment(fakeValue.addressLocator, fakeValue.cityLocator, fakeValue.phoneLocator);
    await familyPage.familyMembers();
    await familyPage.planInformation();
    await familyPage.uploadFile();
    await familyPage.paymentOptions(fakeValue.lastNameLocator);
    await familyPage.verifySubmission();
    await familyPage.submitForm(fakeValue.lastNameLocator);

});
