import { test, expect } from '@playwright/test'


test('test for invalid login', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login')

  await page.getByRole('textbox', {name: 'email'}).fill("username@email.com")
  await page.getByRole('textbox', {name: 'password'}).fill('password')
  await page.getByRole('button', { name: 'login' }).click()

  await expect(page.getByText('wrong email or password')).toBeVisible();

})
