# QA Bootcamp Week 2 Starter

This is the starting point for Week 2 of the QA bootcamp. During the week you will use it to practise:

- TypeScript
- Playwright (UI testing)
- Postman (API testing)
- The Toolshop REST API

There are no tests in this repo. You will write them during the week.

## Prerequisites

Install these before you start:

- [Node.js](https://nodejs.org/) (the current LTS version)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

## Setup

Run these steps in order from a terminal.

1. Clone the repo and open the folder:

   ```bash
   git clone <repo-url>
   cd qa-bootcamp-week2-starter
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Install the Chromium browser for Playwright:

   ```bash
   npx playwright install chromium
   ```

4. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

   `.env` already contains the Toolshop website URL (`TOOLSHOP_URL`) and the Toolshop API URL (`TOOLSHOP_API_URL`). Only change them if your trainer gives you different URLs.

5. Check that your setup works:

   ```bash
   npm run check
   ```

   This sends a GET request to the Toolshop API's `/products` endpoint (no login needed). If everything is set up correctly, it prints your Node version, the HTTP status (200), the number of products, and a last line that says `PASS`.

> **Warning:** never commit `.env`. It is where your own settings and, later in the course, your secrets (keys, tokens, passwords) live. It is listed in `.gitignore` so Git ignores it. Do not remove it from there.

## Folders

| Folder     | What it is for |
|------------|----------------|
| `tests/`   | Your Playwright tests |
| `scripts/` | Helper scripts. `check.ts` checks your setup and is run by `npm run check`. |
| `test-results/` | not present but generated when you run tests, it stores your traces and error.md files | 

## Scripts

- `npm run check`: checks your `.env` and that you can reach the Toolshop API.
- `npm test`: runs the Playwright tests in `tests/`.


## Running the Tests
- To run test that are in the test directory either run
```bash
npx playwright test
```
or you can run 
```bash
npm test
```

- for testing individual tests that end with .spec.ts files just run 
```bash
npx playwright test {filename}.spec.ts
```

- for running test (just one test ) with tracing you can run this command
```bash
npx playwright test {filename}.spec.ts --trace on
```
and then to access you trace report of your test just run
```bash
npx playwright show-trace test-results/{name-of-test}-{browser}/trace.zip
```
here with name of test being the name description when you write you tests i.e

test('search for pliers', async ({ page }) => {}
and the browser being the browser playwright installed, for our case chromium
hence you get a command like this
```bash
npx playwright show-trace test-results/search-search-for-pliers-chromium/trace.zip
```

Optional Cucumber file left for now
