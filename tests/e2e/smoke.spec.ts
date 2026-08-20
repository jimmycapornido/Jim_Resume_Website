import { test, expect } from '@playwright/test';
import { captureErrors, captureFailedRequests } from './utils/pageErrors';

test.describe('General smoke', () => {
  test('initial load has zero failed requests and zero uncaught page errors', async ({ page }) => {
    const captured = captureErrors(page);
    const failedRequests = captureFailedRequests(page);

    const response = await page.goto('/');
    expect(response?.ok()).toBe(true);

    // Let the app finish fetching site.json / resume.json and rendering.
    await expect(page.locator('h1')).toBeVisible();
    await page.waitForLoadState('networkidle');

    expect(failedRequests, `Failed requests: ${JSON.stringify(failedRequests)}`).toEqual([]);
    expect(captured.pageErrors, `Uncaught page errors: ${JSON.stringify(captured.pageErrors)}`).toEqual([]);
  });

  test('site.json and resume.json are fetched successfully', async ({ page }) => {
    const [siteResponse, resumeResponse] = await Promise.all([
      page.waitForResponse((res) => res.url().endsWith('/site.json')),
      page.waitForResponse((res) => res.url().endsWith('/resume.json')),
      page.goto('/'),
    ]);

    expect(siteResponse.ok()).toBe(true);
    expect(resumeResponse.ok()).toBe(true);
  });
});
