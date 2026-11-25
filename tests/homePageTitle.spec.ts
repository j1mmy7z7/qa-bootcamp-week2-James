import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/')

  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toHaveText('Practice Software Testing - Toolshop');
})
