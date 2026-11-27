import { test, expect, APIRequestContext } from '@playwright/test'

let apiContext: APIRequestContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    baseURL: 'https://api.practicesoftwaretesting.com'
  })
})


test.afterAll(async ({ }) => {
  // Dispose all responses.
  await apiContext.dispose();
});


test('create cart, add product and check status code', async () => {
  let cartId: string | undefined;
  const quantity = 7

  try {
    const homePage = await apiContext.get('/products')
    expect(homePage.status()).toBe(200)

    // select the first product from the page json
    const products = await homePage.json()
    expect(products.data.length).toBeGreaterThan(0)
    const productId = products.data[0].id

    // generate cart id
    const createCartResponse = await apiContext.post('/carts')
    expect(createCartResponse.status()).toBe(201)
    cartId = (await createCartResponse.json()).id;


    // add product to the cart
    const addProductResponse = await apiContext.post(`/carts/${cartId}`, {
      data: {
        "product_id": productId,
        "quantity": quantity
      }
    })
    expect(addProductResponse.status()).toBe(200)

    // check for product in the cart
    const cartResponse = await apiContext.get(`/carts/${cartId}`)
    expect(cartResponse.status()).toBe(200)
    const cartInfo = (await cartResponse.json())
    expect(cartInfo).toMatchObject({
      cart_items: [
        expect.objectContaining({
          product_id: productId,
          quantity
        })
      ]
    })

  } finally {
    //delete cart id
    if (cartId) {
      const deleteCart = await apiContext.delete(`/carts/${cartId}`)
      expect(deleteCart.status()).toBe(204)
    }
  }

})


test('send request to non-existent carts', async () => {
  let randomCartId: string = 'aksjhfkjahfdkjahfdlkahfdklas'
  const quantity = 3

  // get an actual product from the page to use
  const homePage = await apiContext.get('/products')
  expect(homePage.status()).toBe(200)

  // get the product id
  const products = await homePage.json()
  expect(products.data.length).toBeGreaterThan(0)
  const productId = products.data[0].id


  // enter product for non-existent cart -- first request
  const addProductResponse = await apiContext.post(`/carts/${randomCartId}`, {
    data: {
      "product_id": productId,
      quantity
    }
  })
  expect(addProductResponse.status()).toBe(404)


  // send delete request for non-existent cart -- second request
  const deleteCart = await apiContext.delete(`/carts/${randomCartId}`)
  expect(deleteCart.status()).toBe(404)
})
