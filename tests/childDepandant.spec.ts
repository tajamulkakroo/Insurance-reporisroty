import {test,expect} from '@playwright/test';
import {ChildDepandantPage} from '../pages/childDepandantPage';
import { HealthPartners as fakehealthPartners } from '../fixtures/InsuranceFixture'

const fakeValue = {
  ...fakehealthPartners(),
};

test.setTimeout(180000)
test('Ensure that the form cannot be submitted unless a dependent is added', async ({ page }) => {

const childDepandantPage = new ChildDepandantPage(page);
    await childDepandantPage.navigateToWelcomePage();
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome");
    await childDepandantPage.clickGetStartedLink();
    await childDepandantPage.SeeIfYouQualify();
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/SpecialEnrollment");
    await childDepandantPage.fillZipCode('55413');
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await childDepandantPage.fillFirstName('Test');
    await childDepandantPage.fillLastName(fakeValue.lastNameLocator);
    await childDepandantPage.fillBirthDate('12/19/1989');
    await childDepandantPage.selectGender(fakeValue.genderLocator);
    await childDepandantPage.selectSmokerOption(fakeValue.smokerLocator);
    const validation = page.locator('.validation-errors _errors');      //Created a locator to validate that the form cannot be submitted without adding a dependant
    await expect(validation).toHaveClass('.validation-errors _errors'),{ timeout: 60000 };


});