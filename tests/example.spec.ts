import { test, expect } from '@playwright/test'


test('Sample test', async ({ page }) => {

    await test.step("Open Broser", async () => {
        await page.goto("https://www.patternfly.org/components/modal")

    })
    await test.step("Open Modal", async () => {
        await page.locator("div[id='ws-react-c-modal-with-form'] button[type='button']").click();
    })
    await test.step("EnterDetails", async () => {

        await page.locator("#modal-with-form-form-name").fill("veerkumar")

        await page.locator('#modal-with-form-form-email').fill("veeer@gmail.com")

        await page.locator('#modal-with-form-form-address').fill("test address")

        await page.locator(".pf-v5-c-button.pf-m-primary[form='modal-with-form-form']").click();

        await page.waitForTimeout(7000)

    })

    // const pageTitle  = page.locator('h1')
    // await expect(pageTitle).toContainText('Example Domain')

})