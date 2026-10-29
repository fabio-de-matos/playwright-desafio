import { test, expect } from '@playwright/test';

test.describe('Fluxos positivos', () => {
  const loginUrl = 'https://the-internet.herokuapp.com/login';
  test('CT-1 Validar carregamento da página inicial', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('CT-2 Validar clique no botão "Get started"', async ({ page }) => {
    // await page.goto('https://playwright.dev/');
    await page.goto('/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('CT-3 deve fazer uma pesquisa com um termo válido', async ({ page }) => {
    // await page.goto('https://playwright.dev/');
    await page.goto('/');
    await page.click('button[class*="DocSearch-Button"]');
    await page.fill('#docsearch-input', 'getByRole');
    await page.click('li a[href*="#locators-and-assertions"]');
    await expect(page).toHaveURL("https://playwright.dev/docs/release-notes#locators-and-assertions");
  });


  test('CT-4 Login com sucesso', async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');

    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page).toHaveURL(
      'https://the-internet.herokuapp.com/secure'
    );

    await expect(page.locator('#flash'))
      .toContainText('You logged into a secure area!');

    await expect(
      page.getByRole('link', { name: 'Logout' })
    ).toBeVisible();
  });


});
