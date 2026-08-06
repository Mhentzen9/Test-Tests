import { test, expect } from '@playwright/test';

//AAA

const URL = 'https://playwright.dev/';

test.beforeEach(async ({ page }) => {
    await page.goto(URL);

});

async function clickGetStarted(page:Page) {
    await page.getByRole('link', { name: 'Get started' }).click();
}

test('has title', async ({ page }) => {

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
    await clickGetStarted(page);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('check Java page', async ({ page }) => {
  await clickGetStarted(page);
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Node.js' }).hover();
  await page.getByText('Java', { exact: true }).click();
  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
  await expect(page.getByText('Installing Playwright', { exact: true })).not.toBeVisible();
  const javadescription = 'Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project\'s pom.xml as described below. If you\'re not familiar with Maven please refer to its documentation.';
  await expect(page.getByText(javadescription, { exact: true })).toBeVisible();


});