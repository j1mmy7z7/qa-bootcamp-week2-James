import { type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly search: Locator;
  readonly searchBtn: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    this.page = page,
    this.search = page.getByRole('textbox', { name: 'Search' })
    this.searchBtn = page.getByRole('button', { name: 'Search' })
    this.result = page.locator('[data-test="search_completed"]').getByRole('img', { name: 'hammer' }).first()
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/')
  }

  async fillSearchBox() {
    await this.search.fill('hammer')
    await this.searchBtn.click()
  }

}
