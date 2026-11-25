import { test, expect } from '@playwright/test'

test('search for pliers', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/')

  await page.getByRole('textbox', { name: 'Search' }).fill("pliers")

  const firstProduct = page.getByRole('img', { name: 'pliers' }).first();
  await expect(firstProduct).toBeVisible();
})
