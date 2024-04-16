import { test, expect } from '@playwright/test';
import ShopDentalPage from '../pages/shopDental.page';
import { consumerData as fakeConsumerData} from '../Fixtures/faker.fixture';

const fakeData = {
    ...fakeConsumerData(),
};

test.describe('Consumer submits a dental application.',() => {
    let shopDentalPage: ShopDentalPage;
    
    test('Shopping for a dental plan.', async({page}) => {
        shopDentalPage = new ShopDentalPage(page);

        //open url
        await page.goto('https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#welcome');

        //verify title
        await expect(page).toHaveTitle('Shopping');

        //click looking for dental plans
        await shopDentalPage.clickDental();

        //enter coverage info
        await shopDentalPage.selectCoverageDate();
        await shopDentalPage.fillZipCode('55425'); //zip code is hardcoded
        await shopDentalPage.fillFirstName(fakeData.p_firstName);
        await shopDentalPage.fillLastName(fakeData.p_lastName);
        await shopDentalPage.fillBirthDate('01/01/1990');

        //click CONTINUE
        await shopDentalPage.clickContinue();

        //select the first plan, add to cart, go to cart and click enroll
        await shopDentalPage.addToCart();
        await shopDentalPage.viewCartAndEnroll();
        await shopDentalPage.enrollNow();

        //consumer creates an account for medical application
        await shopDentalPage.fillEmailAddress(fakeData.email);
        await shopDentalPage.userIDAndPassword(fakeData.userId, 'QATester123'); //password is hardcoded so consumer can log back to their acct to review the status of their app
        await shopDentalPage.securityQuestionAndBroker(fakeData.answer);

        //start enrollment and enter applicant info
        await shopDentalPage.startEnrolment(fakeData.address, fakeData.city, fakeData.phone);
        
        //enter current med insurance info
        await shopDentalPage.currentMedInfo(fakeData.insName, fakeData.insAddress, fakeData.insCity, '55444', fakeData.policyID);

        //enter current and/or previous dent insurance info
        await shopDentalPage.currentPreviousDentIns();

        //select autopay w/checking
        await shopDentalPage.autoPay(fakeData.acctHolderName, fakeData.bankName, '091000019', '41120240229');

        //verify app and submit
        await shopDentalPage.verifySubmission();
    })

})
