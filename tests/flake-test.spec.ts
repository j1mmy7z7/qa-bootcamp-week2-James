import { test, expect } from '@playwright/test'
import path from 'path'
import { pathToFileURL } from 'url'



test('flakiness test', async ({ page }) => {

  const filePath = path.resolve(__dirname, 'drill/index.html')
  const fileUrl = pathToFileURL(filePath).href

  await page.goto(fileUrl)
  const saveBtn = page.getByRole('button', {name : 'Save'})
  await expect(saveBtn).toBeVisible()

  await saveBtn.click()
  await expect(page.locator('#status')).toContainText('Saved')

});
