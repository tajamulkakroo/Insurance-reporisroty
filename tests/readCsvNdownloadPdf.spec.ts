import { test, expect, BrowserContext } from '@playwright/test';
import * as csv from "fast-csv";

test("Download PDF Test", async ({ browser }) => {
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
    // Call a separate function to perform the test for each row
    await performTestForRow(row, browser);
  }

  console.log("Done");
});

// Define a separate function to perform the test for each row
async function performTestForRow(row: any, browser: BrowserContext) {
  console.log("Test ", row);

  // Create a new page instance
  const page = await browser.newPage();

  // Navigate to the web page
  await page.goto(row.url);
  await page.waitForLoadState('networkidle');

  // Validating Employer information section
  const nameElement = await page.waitForSelector("#guideContainer-rootPanel-panel-guidetextbox___widget");
  const nameValue = await nameElement.getAttribute("value");
  console.log("Actual nameValue:", nameValue);
  expect(nameValue).toBe(row["Employer Name"]);

  const renewalDateElement = await page.waitForSelector("#guideContainer-rootPanel-panel-guidetextbox_5670568___widget");
  const renewalDateValue = await renewalDateElement.getAttribute("value");
  console.log("Actual renewalDateValue:", renewalDateValue);
  expect(renewalDateValue).toBe(row["Renewal Date"]);

  const groupNumberElement = await page.waitForSelector("#guideContainer-rootPanel-panel-guidetextbox_1208233___widget");
  const groupNumberValue = await groupNumberElement.getAttribute("value");
  console.log("Actual groupNumberValue:", groupNumberValue);
  expect(groupNumberValue).toBe(row["HealthPartners Group Number"]);

  // Fill in the Controlled groups section
if (row["Question1"] === "Yes") {
    const question_1 = await page.waitForSelector("#guideContainer-rootPanel-panel_284316770-guideradiobutton__-1_widget");
    await question_1.click();
    await page.waitForTimeout(5000); // 5 seconds delay
} else if (row["Question1"] === "No") {
    const question_1 = await page.waitForSelector("#guideContainer-rootPanel-panel_284316770-guideradiobutton__-2_widget");
    await question_1.click();
}

if (row["Question2"] === "Yes") {
    const question_2 = await page.waitForSelector("#guideContainer-rootPanel-panel_284316770-guideradiobutton_550__-1_widget");
    await question_2.click();
} else if (row["Question2"] === "No") {
    const question_2 = await page.waitForSelector("#guideContainer-rootPanel-panel_284316770-guideradiobutton_550__-2_widget");
    await question_2.click();
}

if (row["Question3"].trim() !== "") {
    if (row["Question3"] === "Yes") {
        const question_3 = await page.waitForSelector("#guideContainer-rootPanel-panel_284316770-guideradiobutton_984__-1_widget");
        await question_3.click();
    } else if (row["Question3"] === "No") {
        const question_3 = await page.waitForSelector("#guideContainer-rootPanel-panel_284316770-guideradiobutton_984__-2_widget");
        await question_3.click();
    }
}

// Fill in the Employee verification section
// January
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper___widget").then(async (element) => {
    await element.fill(row["Janurary"]);
});

// February
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper__343328283___widget").then(async (element) => {
    await element.fill(row["February"]);
});

// March
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper____widget").then(async (element) => {
    await element.fill(row["March"]);
});

// April
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper__2011243504___widget").then(async (element) => {
    await element.fill(row["April"]);
});

// May
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper__481035036___widget").then(async (element) => {
    await element.fill(row["May"]);
});

// June
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper__959041139___widget").then(async (element) => {
    await element.fill(row["June"]);
});

// July
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper__1900050031___widget").then(async (element) => {
    await element.fill(row["July"]);
});

// August
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper__1555020127___widget").then(async (element) => {
    await element.fill(row["August"]);
});

// September
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper__1761571255___widget").then(async (element) => {
    await element.fill(row["September"]);
});

// October
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper__587734068___widget").then(async (element) => {
    await element.fill(row["October"]);
});

// November
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper__1874409822___widget").then(async (element) => {
    await element.fill(row["November"]);
});

// December
await page.waitForSelector("#guideContainer-rootPanel-panel_447431182-guidenumericstepper__841231319___widget").then(async (element) => {
    await element.fill(row["December"]);
});

// Fill in the Employer signature section
// EmployeeName
if (!row["ALERT$$EmployeeName"]) {
    const employeeNameInput = await page.waitForSelector("input[aria-label='Name']");
    await employeeNameInput.fill(row["EmployeeName"]);
}

// EmployeeTitle
if (!row["ALERT$$EmployeeTitle"]) {
    const employeeTitleInput = await page.waitForSelector("input[aria-label='Title']");
    await employeeTitleInput.fill(row["EmployeeTitle"]);
}


  // Click the Submit button
  await page.click("button[aria-label='Submit']");

  // Handle error messages
  const errorMessage = row.error_message;
  if (errorMessage) {
    const errorObj = await page.$(`div:has-text("${errorMessage}")`);
    expect(errorObj).not.toBeNull();
  }

 // Wait for the page to fully load
await page.waitForLoadState('networkidle');

// Handle file download and renaming
const list_of_files = await page.evaluate(() => {
    // Check if anchor elements exist
    const anchors = document.querySelectorAll("a");
    if (anchors.length === 0) {
        return []; // Return an empty array if no anchor elements found
    }
    // Otherwise, map anchor elements to their href attributes
    return Array.from(anchors).map(e => e.getAttribute("href"));
});

  // Filter out null values from list_of_files
const validFiles = list_of_files.filter(file => file !== null);

if (validFiles.length > 0) {
    // Perform reduction only if there are valid files
    const latestFile = validFiles.reduce((prev, curr) => (new Date(prev.ctime) > new Date(curr.ctime)) ? prev : curr);
    console.log("Latest file:", latestFile);
    // Perform renaming logic here
} else {
    console.log("No files found on the page.");
}

  // Perform renaming (Implement renaming logic here)

  // Close the page
  await page.close();
}
