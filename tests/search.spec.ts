import { test, expect } from '@playwright/test'

test('search for pliers', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/')

  await page.getByRole('textbox', { name: 'Search' }).fill("pliers")

  /* the locator here is important for search results
    If you remove the locator part and leave getByRole for hammer it works regardless of any item you search
    fill the search with saw should fail this test but it passes, so locator is needed here
  */
  // this.result = page.locator('[data-test="search_completed"]').getByRole('img', { name: 'hammer' }).first()
  const firstProduct = page.getByRole('img', { name: 'pliers' }).first();
  await expect(firstProduct).toBeVisible();
})
