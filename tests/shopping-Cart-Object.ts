import { expect, type Locator, type Page } from '@playwright/test';


export class ShoppingCartActions {
  readonly page: Page;
  readonly productLink: Locator;
  readonly addToCart: Locator;
  readonly cartPage: Locator;
  readonly removeItemButton: Locator;
  readonly cartRow: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productLink = page.getByRole('link', { name: 'Samsung galaxy s6' });
    this.cartPage = page.getByRole('link', { name: 'Cart', exact: true  });
    this.addToCart = page.getByRole('link', { name: 'Add to cart' });
    this.removeItemButton = page.getByRole('link', { name: 'Delete' });
    this.cartRow = page.getByRole('cell', { name: 'Samsung galaxy s6' });
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/')
  }

  async addProductTocart() {
    // this waits and handles the dialog for accepting products to cart
    this.page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added');
        await dialog.accept();
      });
    await this.productLink.click()
    await this.addToCart.click()

  }

  async moveToCartPage() {
    await this.cartPage.click()
  }

  async removeFromCart() {
    await this.removeItemButton.click()
  }

}
