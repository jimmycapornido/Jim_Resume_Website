import { test, expect } from '@playwright/test';

test.describe('Workflow Portfolio', () => {
  test('all 7 workflow eyebrows are present in order and every image loads successfully', async ({ page }) => {
    await page.goto('/');

    const section = page.locator('#workflows');
    await section.scrollIntoViewIfNeeded();

    const eyebrows = await section.locator('text=/^Workflow 0[1-7]$/').allTextContents();
    const expected = Array.from({ length: 7 }, (_, i) => `Workflow 0${i + 1}`);
    expect(eyebrows).toEqual(expected);

    const images = section.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const src = await img.getAttribute('src');
      const loadedOk = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0);
      expect(loadedOk, `Image failed to load: ${src}`).toBe(true);
    }
  });
});
