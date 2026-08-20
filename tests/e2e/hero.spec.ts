import { test, expect } from '@playwright/test';
import { captureErrors } from './utils/pageErrors';

test.describe('Hero loads cleanly', () => {
  test('h1, primary CTA and proof-point metrics render with no console/page errors', async ({ page }) => {
    const captured = captureErrors(page);

    await page.goto('/');

    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(h1).not.toHaveText('');

    const primaryCta = page.getByRole('button', { name: "Let's Discuss Your Workflow" });
    await expect(primaryCta).toBeVisible();

    const metricValues = ['500+', '20%', '2+'];
    for (const value of metricValues) {
      await expect(page.getByText(value, { exact: true }).first()).toBeVisible();
    }

    expect(captured.pageErrors, `Uncaught page errors: ${JSON.stringify(captured.pageErrors)}`).toEqual([]);
    expect(captured.consoleErrors, `Console errors: ${JSON.stringify(captured.consoleErrors)}`).toEqual([]);
  });
});
