import { expect, test } from '@Playwright/test';

test('should render header', async ({ page }) => {
	await page.goto('/');

	const header = page.locator('id=header');

	await expect(header).toContainText('Industrial Project');
});
