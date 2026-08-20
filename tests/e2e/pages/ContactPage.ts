import { Page, Locator } from '@playwright/test';

/** Page Object for the #contact form (custom JS validation, no native HTML5 popups). */
export class ContactPage {
  readonly page: Page;
  readonly section: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly serviceSelect: Locator;
  readonly messageTextarea: Locator;
  readonly consentCheckbox: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.section = page.locator('#contact');
    this.nameInput = this.section.locator('input[name="name"]');
    this.emailInput = this.section.locator('input[name="email"]');
    this.serviceSelect = this.section.locator('select[name="service"]');
    this.messageTextarea = this.section.locator('textarea[name="message"]');
    this.consentCheckbox = this.section.locator('input[name="consent"]');
    this.submitButton = this.section.getByRole('button', { name: 'Send Inquiry' });
  }

  async goto(): Promise<void> {
    await this.section.scrollIntoViewIfNeeded();
  }

  async submitEmpty(): Promise<void> {
    await this.submitButton.click();
  }

  async fillValid(overrides: Partial<{ name: string; email: string; message: string }> = {}): Promise<void> {
    await this.nameInput.fill(overrides.name ?? 'Jane Smith');
    await this.emailInput.fill(overrides.email ?? 'jane@clinic.com');
    await this.serviceSelect.selectOption({ index: 1 });
    await this.messageTextarea.fill(overrides.message ?? 'This is a test message about our workflow needs.');
    await this.consentCheckbox.check();
  }

  /**
   * Clicks submit. The handler synchronously does `window.location.href = 'mailto:...'`
   * before setting the success message. In a real browser with no mail client this
   * is inert, but some environments may raise a navigation-related error — swallow
   * only that specific class of error so the success-message assertion still runs.
   */
  async submit(): Promise<void> {
    try {
      await this.submitButton.click();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const isNavigationRelated = /mailto|navigation|frame was detached|Target closed/i.test(message);
      if (!isNavigationRelated) throw error;
    }
  }

  errorFor(field: 'name' | 'email' | 'service' | 'message' | 'consent'): Locator {
    const messages: Record<typeof field, string | RegExp> = {
      name: 'Full Name is required.',
      email: 'Valid email required.',
      service: 'Please select a topic.',
      message: /Message must be at least/,
      consent: 'Consent is required.',
    };
    return this.section.getByText(messages[field]);
  }

  get successMessage(): Locator {
    return this.section.getByText('Draft email opened.');
  }
}
