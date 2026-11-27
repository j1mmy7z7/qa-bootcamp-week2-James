import { test, expect } from '@playwright/test'
import { SearchPage } from "../pages/searchPage"

test('C1 search by name', async ({ page }) => {
  const searchPage = new SearchPage(page)

  await searchPage.goto()
  await searchPage.fillSearchBox()
  await expect(searchPage.result).toBeVisible()


})
