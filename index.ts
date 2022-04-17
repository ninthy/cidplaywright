import { chromium, firefox, webkit } from "playwright";

import express from "express";

/*
https://microsoft.gointeract.io/interact/index?interaction=1461173234028-3884f8602eccbe259104553afa8415434b4581-05d1&accountId=microsoft&loadFrom=CDN&appkey=196de13c-e946-4531-98f6-2719ec8405ce&Language=English&name=pana&CountryCode=en-US&Click%20To%20Call%20Caller%20Id=+14794592272&startedFromSmsToken=lsz3qQr&dnis=24&token=pMU2Ok

*/
(async () => {
  const app = express();
  const browser = await webkit.launch({ headless: false });

  // let test =
  //   "1414353-2668831-4695712-0989406-3613636-9938175-7787742-1922923-7934405";

  app.get("/cid", async (req, res) => {
    const { id } = req.query;
    if ((id as string).split("-").length != 9) {
      return res.json({ status: false, error: "id is not correct" });
    }

    const lid = (id as string).split("-");
    const page = await browser.newPage();
    try {
      await page.goto(
        "https://microsoft.gointeract.io/interact/index?interaction=1461173234028-3884f8602eccbe259104553afa8415434b4581-05d1&accountId=microsoft&loadFrom=CDN&appkey=196de13c-e946-4531-98f6-2719ec8405ce&Language=English&name=pana&CountryCode=en-US&Click%20To%20Call%20Caller%20Id=+14794592272&startedFromSmsToken=lsz3qQr&dnis=24&token=pMU2Ok",
        { waitUntil: "networkidle" }
      );
      await page.waitForSelector("text=7 Digits");
      await page.locator("text=7 Digits").click();
      await page.waitForSelector("#field1");
      const codes = lid;
      for (let i = 1; i <= 9; i++) {
        await page.locator(`#field${i}`).type(codes[i - 1]);
      }
      await page.locator("text=Submit").click({ force: true });
      await page.waitForSelector("text=Confirmation ID", { timeout: 5000 });
      await page.waitForSelector('td[align="center"]');
      const cid = await page.evaluate(() => {
        return (
          Array.from(document.querySelectorAll('td[align="center"]'))
            //@ts-ignore
            .filter((e) => !isNaN(e.textContent))
            .map((e) => e.textContent)
        );
      });
      return res.json({ status: true, cid });
    } catch (err) {
      console.log(err);
      return res.json({ status: false, error: err });
    } finally {
      await page.close();
    }
  });

  app.listen(3000, () => {
    console.log(`listening on port ${3000}`);
  });

  // await page.screenshot({ path: `example.png` });
  // await browser.close();
})();
