import { test, expect } from '@playwright/test';
import * as csv from "fast-csv";

test("Download PDF Test", async () => {
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

    test(`Test case ${row[0]}`, async ({ page }) => {
      console.log("Test ", row);

      // Navigate to the web page
      await page.goto(row.url);
      await page.waitForLoadState('networkidle');

      // Validating Employer information section
      const nameElement = await page.waitForSelector("#guideContainer-rootPanel-panel-guidetextbox___widget");
      const nameValue = await nameElement.getAttribute("value");
      console.log("Actual nameValue:", nameValue);
      expect(nameValue).toBe(row[1]);

      const renewalDateElement = await page.waitForSelector("#guideContainer-rootPanel-panel-guidetextbox_5670568___widget");
      const renewalDateValue = await renewalDateElement.getAttribute("value");
      console.log("Actual renewalDateValue:", renewalDateValue);
      expect(renewalDateValue).toBe(row[2]);

      const groupNumberElement = await page.waitForSelector("#guideContainer-rootPanel-panel-guidetextbox_1208233___widget");
      const groupNumberValue = await groupNumberElement.getAttribute("value");
      console.log("Actual groupNumberValue:", groupNumberValue);
      expect(groupNumberValue).toBe(row[3]);

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
        return Array.from(document.querySelectorAll("a")).map(e => e.getAttribute("href"));
      });
      const latestFile = list_of_files.reduce((prev, curr) => (new Date(prev.ctime) > new Date(curr.ctime)) ? prev : curr);
      console.log("Latest file:", latestFile);
      // Perform renaming (Implement renaming logic here)

    });
  }

  console.log("Done");
});