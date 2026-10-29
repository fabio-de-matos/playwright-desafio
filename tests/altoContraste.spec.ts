import { test, expect } from '@playwright/test';

test.describe('Validação de temas do menu', () => {
    test('CT-1 Deve validar layout padrão do menu', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        //locators 
        const menu = page.locator("nav[class*='theme-layout']");
        const systemIcon = page.locator("svg[class*='system']");

        // Cor de fundo do menu
        const backgroundColor = await menu.evaluate((el) =>
            getComputedStyle(el).backgroundColor
        );

        expect(backgroundColor).toBe('rgba(0, 0, 0, 0)');

        // Ícone visível
        await expect(systemIcon).toBeVisible();

        // Cor do ícone
        const iconColor = await systemIcon.evaluate((el) =>
            getComputedStyle(el).color
        );

        expect(iconColor).toBe('rgb(227, 227, 227)');

        // Local Storage NÃO deve possuir a chave
        const themeValue = await page.evaluate(() =>
            localStorage.getItem('theme-e2a')
        );

        expect(themeValue).toBeNull();
    });

    test('CT-2 Deve validar alto contraste com layout claro', async ({ page }) => {
        await page.goto('https://playwright.dev/');

        const switchThemeButton = page.locator(
            'button[aria-label*="Switch between dark and light mode"]'
        );

        await switchThemeButton.click();

        const menu = page.locator("nav[class*='theme-layout']");
        const lightIcon = page.locator("svg[class*='light']");

        // Cor de fundo do menu
        const backgroundColor = await menu.evaluate((el) =>
            getComputedStyle(el).backgroundColor
        );

        expect(backgroundColor).toBe('rgb(255, 255, 255)');

        // Ícone visível
        await expect(lightIcon).toBeVisible();

        // Cor do ícone
        const iconColor = await lightIcon.evaluate((el) =>
            getComputedStyle(el).color
        );

        expect(iconColor).toBe('rgb(28, 30, 33)');

        // Local Storage deve possuir a chave e o valor esperado
        const themeValue = await page.evaluate(() =>
            localStorage.getItem('theme-e2a')
        );

        expect(themeValue).toBe('light');
    });

    test('CT-3 Deve validar persistencia do alto contraste com layout claro', async ({ page }) => {
        await page.goto('https://playwright.dev/');

        // Gravar o tema no Local Storage
        await page.evaluate(() => {
            localStorage.setItem('theme-e2a', 'light');
        });

        await page.reload();

        const menu = page.locator("nav[class*='theme-layout']");
        const lightIcon = page.locator("svg[class*='light']");

        // Cor de fundo do menu
        const backgroundColor = await menu.evaluate((el) =>
            getComputedStyle(el).backgroundColor
        );

        expect(backgroundColor).toBe('rgb(255, 255, 255)');

        // Ícone visível
        await expect(lightIcon).toBeVisible();

        // Cor do ícone
        const iconColor = await lightIcon.evaluate((el) =>
            getComputedStyle(el).color
        );

        expect(iconColor).toBe('rgb(28, 30, 33)');

        // Local Storage deve possuir a chave e o valor esperado
        const themeValue = await page.evaluate(() =>
            localStorage.getItem('theme-e2a')
        );

        expect(themeValue).toBe('light');
    });

    test('CT-4 Deve validar alto contraste com layout escuro', async ({ page }) => {
        await page.goto('/');

        const switchThemeButton = page.locator(
            'button[aria-label*="Switch between dark and light mode"]'
        );

        await switchThemeButton.click();
        await page.waitForTimeout(2000);
        await switchThemeButton.click();

        const menu = page.locator("nav[class*='theme-layout']");
        const moonIcon = page.locator("svg[class*='dark']");

        // Cor de fundo do menu
        const backgroundColor = await menu.evaluate((el) =>
            getComputedStyle(el).backgroundColor
        );

        expect(backgroundColor).toBe('rgb(36, 37, 38)');

        // Ícone visível
        await expect(moonIcon).toBeVisible();

        // Cor do ícone
        const iconColor = await moonIcon.evaluate((el) =>
            getComputedStyle(el).color
        );

        expect(iconColor).toBe('rgb(227, 227, 227)');

        // Local Storage deve possuir a chave e o valor esperado
        const themeValue = await page.evaluate(() =>
            localStorage.getItem('theme-e2a')
        );

        expect(themeValue).toBe('dark');
    });

    test('CT-5 Deve validar persistencia do alto contraste com layout escuro', async ({ page }) => {
        await page.goto('https://playwright.dev/');

        // Gravar o tema no Local Storage
        await page.evaluate(() => {
            localStorage.setItem('theme-e2a', 'dark');
        });

        await page.reload();

        const menu = page.locator("nav[class*='theme-layout']");
        const moonIcon = page.locator("svg[class*='dark']");

        // Cor de fundo do menu
        const backgroundColor = await menu.evaluate((el) =>
            getComputedStyle(el).backgroundColor
        );

        expect(backgroundColor).toBe('rgb(36, 37, 38)');

        // Ícone visível
        await expect(moonIcon).toBeVisible();

        // Cor do ícone
        const iconColor = await moonIcon.evaluate((el) =>
            getComputedStyle(el).color
        );

        expect(iconColor).toBe('rgb(227, 227, 227)');

        // Local Storage deve possuir a chave e o valor esperado
        const themeValue = await page.evaluate(() =>
            localStorage.getItem('theme-e2a')
        );

        expect(themeValue).toBe('dark');
    });

});