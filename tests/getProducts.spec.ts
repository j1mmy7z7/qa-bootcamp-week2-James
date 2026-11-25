import { test, expect } from '@playwright/test'

test('send get request to products page', async ({ request }) => {
  const response = await request.get('https://api.practicesoftwaretesting.com/products')

  expect(response.ok())
  expect(response.status()).toBe(200)

  expect(await response.json()).toMatchObject({
    current_page: 1
  })

})
