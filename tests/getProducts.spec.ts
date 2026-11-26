import { test, expect } from '@playwright/test'

test('send get request to products page', async ({ request }) => {
  const response = await request.get('https://api.practicesoftwaretesting.com/products')

  expect(response.status()).toBe(200)

  const responseBody = await response.json()

  expect(responseBody).toMatchObject({
    current_page: 1
  })

  expect(responseBody.data.length).toBeGreaterThan(0)
})
