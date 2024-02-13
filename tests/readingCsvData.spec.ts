import { test } from '@playwright/test';
import * as csv from "fast-csv";

test("CSV Test", async () => {
    let dataArray: JSON[] = [];
    await new Promise((resolve) => {
        csv.parseFile("./Test.csv", {headers: true})
            .on("data", (data) => {
                dataArray.push(data);
            })
            .on("end", () => {
                resolve(dataArray);
            });
    });
    console.log(dataArray);
});
