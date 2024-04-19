import { test, expect } from '@playwright/test';
test.setTimeout(60000);

test('checking the locator for qualify', async ({page}) => {
     await page.goto('https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome');
     await expect(page).toHaveURL('https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome');
     await page.getByRole('link', { name: 'Get started' }).click();
     await page.getByRole('link', { name: 'See if you qualify' }).click();
     await  page.getByText('Birth of child, adoption of').click();
     await page.getByRole('checkbox').check();
      await page.getByLabel('Enter the date of your event:').click();
      await page.getByRole('cell', { name: '2', exact: true }).first().click();
      await expect(async () => {
      await page.getByRole('link', { name: "SAVE & CONTINUE" }).click()
      await expect(page).toHaveURL("https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics")
      }).toPass()
      await page.waitForURL('https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#view/account/WhosCoveredSE/Demographics');
      await page.locator('#zipCode29').fill('55413');

});


/* import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
      await page.goto('https://individualinsurance.healthpartners.com/hp/shopping/anonymous.html#welcome');
      await page.getByRole('link', { name: 'Get started' }).click();
      await page.getByRole('link', { name: 'See if you qualify' }).click();
      await page.getByLabel('Marriage').check();
      await page.getByLabel('Enter the date of your event:').click();
      await page.getByRole('cell', { name: '17' }).click();
      await page.getByRole('link', { name: 'Save & Continue' }).click();
    }); */