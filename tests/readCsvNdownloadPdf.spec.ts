import { test, expect } from '@playwright/test';
import * as csv from "fast-csv";

test("Download PDF Test", async ({ page }) => {
    let dataArray: any[] = [];

    // Parse CSV file
    await new Promise((resolve) => {
        csv.parseFile("./Test.csv", { headers: true })
            .on("data", (data: any) => {
                dataArray.push(data);
            })
            .on("end", () => {
                resolve(dataArray);
            });
    });

    // Loop through each row in the CSV
    for (const row of dataArray) {
        console.log("Test data:", row);

        // Navigate to the web page
        await page.goto(row.url);

        // Validating Employer information section
        const name = await page.waitForSelector("#guideContainer-rootPanel-panel-guidetextbox___widget");
        const nameValue = await name.getAttribute("value");
        expect(nameValue).toBe(row.name);
        
        const renewalDate = await page.$eval("#guideContainer-rootPanel-panel-guidetextbox_5670568___widget", el => el.getAttribute("value"));
        expect(renewalDate).toBe(row.renewal_date);

        const groupNumber = await page.$eval("#guideContainer-rootPanel-panel-guidetextbox_1208233___widget", el => el.getAttribute("value"));
        expect(groupNumber).toBe(row.health_partners_group_number);

        // Fill in Controlled groups section
        // Similar validation and filling in other sections

        // Click the Submit button
        await page.click("button[aria-label='Submit']");

        // Handle error messages
        const errorMessage = row.error_message;
        if (errorMessage) {
            const errorObj = await page.$(`div:has-text("${errorMessage}")`);
            expect(errorObj).not.toBeNull();
        }

        // Handle file download and renaming
        await page.waitForTimeout(20000); // Wait for download to complete
        const list_of_files = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("./downloads")).map(e => e.textContent);
        });
        const latestFile = list_of_files.reduce((prev, curr) => (new Date(prev.ctime) > new Date(curr.ctime)) ? prev : curr);
        console.log("Latest file:", latestFile);
        // Perform renaming
    }

    console.log("Done");
});
