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


test('C4 add to a cart', async () => {
  let cartId: string | undefined;
  const quantity = 7

  try {
    const homePage = await apiContext.get('/products')
    expect(homePage.status()).toBe(200)

    // select the first product from the page json
    const products = await homePage.json()
    // check if there is more than one product before selecting  a product
    expect(products.data.length).toBeGreaterThan(1)
    const productId = products.data[0].id

    // generate cart id
    const createCartResponse = await apiContext.post('/carts')
    expect(createCartResponse.status()).toBe(201)
    cartId = (await createCartResponse.json()).id;


    // add product to the cart
    // also include json headers
    const addProductResponse = await apiContext.post(`/carts/${cartId}`, {
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
       },
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
