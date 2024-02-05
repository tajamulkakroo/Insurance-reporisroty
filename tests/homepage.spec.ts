import { test, expect } from '@playwright/test';
import { HealthPartnersPage } from '../pages/InsurancePage';
import { HealthPartners as fakehealthPartners } from '../fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(120000);
test('Health Partners Test', async ({ page }) => {
  const healthPartnersPage = new HealthPartnersPage(page);
    await healthPartnersPage.navigateToWelcomePage();
    await healthPartnersPage.clickGetStartedLink();
    await healthPartnersPage.SeeIfYouQualify();
    await healthPartnersPage.fillZipCode('55413');
    await healthPartnersPage.fillFirstName(fakeValue.firstNameLocator);
    await healthPartnersPage.fillLastName(fakeValue.lastNameLocator);
    await healthPartnersPage.fillBirthDate(fakeValue.birthDateLocator);
    await healthPartnersPage.selectGender(fakeValue.genderLocator);
    await healthPartnersPage.selectSmokerOption(fakeValue.smokerLocator);
    




  // Continue with the rest of the interactions...

  // Example usage of a method from a different section
  await healthPartnersPage.fillEmailAddress('abc@gmail.com');
  
  // Continue with the rest of the test... */
});
