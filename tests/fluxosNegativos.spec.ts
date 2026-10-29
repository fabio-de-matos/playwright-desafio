import { test, expect } from '@playwright/test';

test.describe('Fluxos negativos', () => {
  const loginUrl = 'https://the-internet.herokuapp.com/login';

  test('CT-1 deve fazer uma pesquisa com um termo inválido', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.click('button[class*="DocSearch-Button"]');
    await page.fill('#docsearch-input', 'xpto123');
    await page.keyboard.press('Enter');
    await expect(page.getByText('No results found for \"xpto123\"')).toBeVisible();

  });


  test('CT-2 - Login com usuário inválido', async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator('#username').fill('usuario_invalido');
    await page.locator('#password').fill('SuperSecretPassword!');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#flash'))
      .toContainText('Your username is invalid!');

    await expect(page).toHaveURL(loginUrl);
  });

  test('CT-3 - Login com senha inválida', async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('senha_incorreta');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#flash'))
      .toContainText('Your password is invalid!');

    await expect(page).toHaveURL(loginUrl);
  });
});
