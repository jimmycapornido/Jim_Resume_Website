import { test } from '@playwright/test';
import { NavPage } from './pages/NavPage';

/**
 * Regression test for the nav-hash bug fix in src/sections/Nav.tsx.
 * Previously, clicking a nav link let the native `<a href="#...">` navigate,
 * which appended `#services` etc. to the URL. The fix calls
 * `e.preventDefault()` and scrolls manually via `scrollIntoView`, so the URL
 * must remain hash-free after every click.
 */
const NAV_LINKS: Array<{ label: string; section: string }> = [
  { label: 'Services', section: '#services' },
  { label: 'Workflows', section: '#workflows' },
  { label: 'Results', section: '#results' },
  { label: 'About', section: '#about' },
  { label: 'Training', section: '#training' },
  { label: 'Contact', section: '#contact' },
];

test.describe('Nav — no URL hash regression', () => {
  for (const { label, section } of NAV_LINKS) {
    test(`clicking "${label}" scrolls to ${section} without adding a URL hash`, async ({ page }) => {
      await page.goto('/');
      const nav = new NavPage(page);

      await nav.clickLink(label);
      await nav.waitForScrollToSettle(page);

      await nav.expectScrolledWithoutHash(page, section);
    });
  }

  test('clicking through all nav links in sequence never introduces a hash', async ({ page }) => {
    await page.goto('/');
    const nav = new NavPage(page);

    for (const { label, section } of NAV_LINKS) {
      await nav.clickLink(label);
      await nav.waitForScrollToSettle(page);
      await nav.expectScrolledWithoutHash(page, section);
    }
  });
});
