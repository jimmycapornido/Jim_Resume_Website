import { test, expect } from '@playwright/test';
import { ContactPage } from './pages/ContactPage';
import { captureErrors } from './utils/pageErrors';

test.describe('Contact form', () => {
  test('empty submit shows custom inline validation errors (no native popups)', async ({ page }) => {
    await page.goto('/');
    const contact = new ContactPage(page);
    await contact.goto();

    await contact.submitEmpty();

    await expect(contact.errorFor('name')).toBeVisible();
    await expect(contact.errorFor('email')).toBeVisible();
    await expect(contact.errorFor('service')).toBeVisible();
    await expect(contact.errorFor('message')).toBeVisible();
    await expect(contact.errorFor('consent')).toBeVisible();

    // Confirm the form opts out of native HTML5 validation.
    await expect(contact.section.locator('form')).toHaveAttribute('novalidate', '');
  });

  test('valid submission shows the mailto success message', async ({ page }) => {
    const captured = captureErrors(page);

    await page.goto('/');
    const contact = new ContactPage(page);
    await contact.goto();

    await contact.fillValid();
    await contact.submit();

    await expect(contact.successMessage).toBeVisible();

    const unrelatedErrors = [...captured.consoleErrors, ...captured.pageErrors].filter(
      (message) => !/mailto|navigation|Not allowed to launch/i.test(message)
    );
    expect(unrelatedErrors, `Unrelated console/page errors: ${JSON.stringify(unrelatedErrors)}`).toEqual([]);
  });
});
