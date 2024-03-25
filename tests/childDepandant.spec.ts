import {test,expect} from '@playwright/test';
import {ChildDepandantPage} from '../pages/childDepandantPage';
import {childDepandant as fakechildDepandant} from '../fixtures/childDependantFixture';

const fakeValue = {

...fakechildDepandant
};

test.setTimeout(18000)
test('child dependant test', async ({ page }) => {

const childDepandantPage = new ChildDepandantPage(page);
    await childDepandantPage.navigateToWelcomePage();
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome");
    await childDepandantPage.clickGetStartedLink();
    await childDepandantPage.SeeIfYouQualify();
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/SpecialEnrollment");
    await childDepandantPage.fillZipCode('55413');
    await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics");
    await childDepandantPage.fillFirstName(fakeValue.firstNameLocator);
    await childDepandantPage.fillLastName(fakeValue.lastNameLocator);
    await childDepandantPage.fillBirthDate('12/19/1989');
    await childDepandantPage.selectGender(fakeValue.genderLocator);
    await childDepandantPage.selectSmokerOption(fakeValue.smokerLocator);


});