import { test, expect } from '@playwright/test';
import { ShoppingCartActions } from './shopping-Cart-Object';


test('add and remove an item to the Cart', async ({ page }) => {
  const shoppingAction = new ShoppingCartActions(page);
  await shoppingAction.goto()

  await shoppingAction.addProductTocart()
  await shoppingAction.moveToCartPage()
  // test to see if the product is on the page
  await expect(shoppingAction.cartRow).toBeVisible();

  await shoppingAction.removeFromCart()

  //test to see if the itme is removed form the page
   await expect(shoppingAction.cartRow).not.toBeVisible();
})
