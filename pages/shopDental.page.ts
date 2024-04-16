import {Page, Locator} from '@playwright/test';

export class ShopDentalPage{
    private readonly page: Page;
    readonly zipCode: Locator;
    readonly p_firstName: Locator;
    readonly p_lastName: Locator;
    readonly p_birthDate: Locator;

    readonly email: Locator;
    readonly userId: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly securityQuestion: Locator;
    readonly securityAnswer: Locator;

    readonly address: Locator;
    readonly city: Locator;
    readonly phone: Locator;

    readonly insurerName: Locator;
    readonly insurerAddress: Locator;
    readonly insurerCity: Locator;
    readonly insurerZipCode: Locator;
    readonly policyID: Locator;

    readonly acctHolderName: Locator;
    readonly bankName: Locator;
    readonly routingNum: Locator;
    readonly acctNum: Locator;


    constructor(page: Page){
        this.page = page;
        this.zipCode = this.page.locator('#zipCode11');
        this.p_firstName = this.page.locator('#firstName5');
        this.p_lastName = this.page.locator('#lastName6');
        this.p_birthDate = this.page.locator('#birthDate7');

        this.email = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_userProfile_user_emailAddress');
        this.userId = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_registrationInfo_userId');
        this.password  = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_registrationInfo_password');
        this.confirmPassword = this.page.locator('#priorToApplyingForm_priorToApplyingInfo_registrationInfo_confirmPassword');
        this.securityQuestion = this.page.locator('#secretQuestion');
        this.securityAnswer = this.page.locator('#secretAnswer');

        this.address = this.page.locator('input[name="Application\\.Applicant\\.Address_1"]');
        this.city = this.page.locator('input[name="Application\\.Applicant\\.City"]');
        this.phone = this.page.locator('input[name="Application\\.Applicant\\.Home_Phone"]');

        this.insurerName = this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Carrier_Name"]');
        this.insurerAddress = this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Address_1"]');
        this.insurerCity = this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.City"]');
        this.insurerZipCode = this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Zip"]');
        this.policyID = this.page.locator('input[name="Application\\.Applicant\\.Prior_Coverage\\.Policy_ID"]');

        this.acctHolderName = this.page.locator('input[name="Application\\.AutoPay_Setup\\.Account_Holder_Name"]');
        this.bankName = this.page.locator('input[name="Application\\.AutoPay_Setup\\.Bank_Name"]');
        this.routingNum = this.page.locator('input[name="Application\\.AutoPay_Setup\\.Bank_Routing_Number"]');
        this.acctNum = this.page.locator('input[name="Application\\.AutoPay_Setup\\.Bank_Account_Number"]');

    }

    async navigateToWelcomePage() {
        await this.page.goto('https://individualinsurance-stg.healthpartners.com/hp/shopping/anonymous.html#welcome');
        await this.page.waitForLoadState('networkidle');
      }

    //click Looking for Dental plans
    async clickDental(){
        await this.page.getByText('Dental').click();
        await this.page.waitForLoadState('networkidle');
    }

    //enter coverage date and policy holder info
    async selectCoverageDate(){
        await this.page.getByLabel('*When do you need coverage?').click();
        await this.page.selectOption('#coverageDate9', { index: 1 });
    }

    //fillout zip code
    async fillZipCode(zipCode: string){
        await this.zipCode.click();
        await this.zipCode.fill(zipCode);
    }

    async fillFirstName(firstName: string){
        await this.p_firstName.click();
        await this.p_firstName.fill('STG' + firstName); //added STG as the prefix
    }
    
    async fillLastName(lastName: string){
        await this.p_lastName.click();
        await this.p_lastName.fill(lastName);
    }
    
    async fillBirthDate(birthDate: string){
        await this.p_birthDate.click();
        await this.p_birthDate.fill(birthDate);
    }

    //click CONTINUE 
    async clickContinue(){
        await this.page.getByRole('link', { name: 'Continue' }).click();
        await this.page.waitForLoadState('networkidle');
    }

    //select the first plan, add to cart, go to cart and click enroll
    async addToCart(){
        await this.page.getByRole('link', { name: 'Add to cart' }).first().click();
        await this.page.waitForLoadState('networkidle');
    }

    async viewCartAndEnroll(){
        await this.page.getByRole('link', { name: 'View Cart & Enroll' }).click();
        await this.page.waitForLoadState('networkidle');
    }
    
    async enrollNow(){
        await this.page.getByRole('link', { name: 'Enroll Now' }).click();
        await this.page.waitForLoadState('networkidle');
    }

    /*consumer enters the following fields:
     - email address
     - user id and password
     - select first option for security question, and enters an answer
     - click CONTINUE button*/
    async fillEmailAddress(emailAddress: string){
        await this.email.click();
        await this.email.fill(emailAddress + '@team70856.testinator.com'); //hard coded to have my email address
    }
    
    async userIDAndPassword(id: string, password: string){
        await this.userId.click();
        await this.userId.fill(id);
        await this.password.click();
        await this.password.fill(password);
        await this.confirmPassword.click();
        await this.confirmPassword.fill(password);
    }

    async securityQuestionAndBroker(answer: string){
        await this.securityQuestion.selectOption('What was your childhood nickname?');
        await this.securityAnswer.click();
        await this.securityAnswer.fill(answer);
        await this.page.getByLabel('No').check(); //working w/broker = No
        await this.page.getByRole('link', { name: 'Continue ' }).click();
    }

    //fill out policy holder info
    async startEnrolment(address: string, city: string, phone: string){
        await this.page.getByRole('link',{ name: 'Start enrollment' }).click();
        await this.page.waitForLoadState('networkidle');
        await this.address.click();
        await this.address.fill(address);
        await this.city.click();
        await this.city.fill(city);
        await this.phone.click();
        await this.phone.fill(phone);
        await this.page.getByLabel('Check this box if applicant').check(); //we need to enter unique SSN
        await this.page.getByLabel('Male', { exact: true }).click(); //select gender = Male
        await this.page.getByRole('group', { name: 'Primary applicant information' }).getByLabel('No', { exact: true }).click(); //HP Mbr = No
        await this.page.getByRole('group', { name: 'Mailing address' }).getByLabel('Yes').click(); //mailing address the same = yes
        await this.page.getByRole('link', { name: 'Continue ' }).click();
    }

        //current med insurance info
        async currentMedInfo(insName: string, insAddress: string, insCity: string, insZip: string, policyID: string){
        await this.page.getByLabel('Yes').first().check();
        await this.insurerName.click();
        await this.insurerName.fill(insName);
        await this.insurerAddress.click();
        await this.insurerAddress.fill(insAddress)
        await this.insurerCity.click();
        await this.insurerCity.fill(insCity);

        await this.page.getByRole('combobox').click();

        /*****************************************************************************************************************************
         * 
         * 
         * 
         * Note to Prashanth:
         * Please find the element to select "MN" for the State within the Current med insurance information page
         * 
         * 
         * 
         ****************************************************************************************************************************/

        //await this.page.locator('[state = "#FELECDDE2737B0298E4D826"]').selectOption('MN');

        /*
        const state = await this.page.$('#FELECDDE2737B0298E4D826');
        state?.selectOption("MN"); //unable to select MN because element is not visible
        */

        //await this.page.selectOption('#FELECDDE2737B0298E4D826', { value: "MN" });

        await this.insurerZipCode.click();
        await this.insurerZipCode.fill(insZip);
        await this.policyID.click();
        await this.policyID.fill(policyID);
        await this.page.getByRole('link', { name: 'Continue ' }).click();

    }

    //current and/or previous dent insurance info
    async currentPreviousDentIns(){
        await this.page.getByLabel('No').first().check(); //no current or previous dent covg w/in last 3 months
        await this.page.getByRole('link', { name: 'Continue ' }).click();
    }

    //pymt option = autopay w/checking
    async autoPay(acctHolderName: string, bankName: string, routingNum: string, acctNum: string){
        await this.page.getByLabel('Yes, I want my ongoing').first().check();
        await this.page.getByRole('radio', { name: 'Checking' }).first().check();
        await this.acctHolderName.click();
        await this.acctHolderName.fill(acctHolderName);
        await this.bankName.click();
        await this.bankName.fill(bankName);
        await this.routingNum.click();
        await this.routingNum.fill(routingNum);
        await this.acctNum.click();
        await this.acctNum.fill(acctNum);
        await this.page.getByRole('link', { name: 'Continue ' }).click();
    }

    //verify the page and do not make any changes and click CONTINUE
    async verifySubmission() {
        await this.page.getByRole('link', { name: 'Continue ' }).click();
    }

    //submit dent app
    /*****************************************************************************************************************************
    * 
    * 
    * 
    * Note to Prashanth:
    * Please finish this piece for consumer to submit the dental application agreeing to the terms and condition with their
    * signatures. Please make sure all printed signature matches with their names.
    * 
    * 
    * 
    ****************************************************************************************************************************/

}
