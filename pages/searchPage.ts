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
    /* the locator here is important for search results
      If you remove the locator part and leave getByRole for hammer it works regardless of any item you search
      fill the search with saw should fail this test but it passes, so locator is needed here
    */
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
