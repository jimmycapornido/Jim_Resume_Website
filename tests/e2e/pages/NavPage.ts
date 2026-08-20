import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the fixed floating Nav pill.
 * The nav intercepts clicks with `preventDefault()` and performs a
 * `scrollIntoView({ behavior: 'smooth' })` instead of a native anchor
 * navigation, so the URL must never end up with a `#hash` suffix.
 */
export class NavPage {
  readonly page: Page;
  readonly nav: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nav = page.locator('nav').first();
  }

  /** Desktop nav link (visible at default 1280x720 viewport). */
  link(label: string): Locator {
    return this.nav.getByRole('link', { name: label, exact: true });
  }

  async clickLink(label: string): Promise<void> {
    await this.link(label).click();
  }

  async navHeight(): Promise<number> {
    const box = await this.nav.boundingBox();
    return box?.height ?? 90;
  }

  /**
   * Waits for the CSS smooth-scroll triggered by scrollIntoView to finish,
   * by polling `window.scrollY` until it stops changing between reads —
   * avoids a blind `waitForTimeout`.
   */
  async waitForScrollToSettle(page: Page): Promise<void> {
    let lastY: number | null = null;
    await expect
      .poll(
        async () => {
          const y = await page.evaluate(() => window.scrollY);
          const settled = lastY !== null && Math.abs(y - lastY) < 1;
          lastY = y;
          return settled;
        },
        { timeout: 5_000 }
      )
      .toBe(true);
  }

  /**
   * Asserts the URL has no `#` fragment anywhere, and that the target
   * section has been scrolled into (or very near) the top of the viewport.
   */
  async expectScrolledWithoutHash(page: Page, sectionSelector: string): Promise<void> {
    await expect.poll(() => page.url()).not.toContain('#');

    const section = page.locator(sectionSelector);
    // A low ratio is intentional: sections are taller than the viewport, so
    // scrollIntoView aligning the section's top edge to the viewport top
    // only guarantees a sliver of it (not most of it) is visible.
    await expect(section).toBeInViewport({ ratio: 0.05 });

    const navHeight = await this.navHeight();
    const box = await section.boundingBox();
    expect(box).not.toBeNull();
    // The section's top edge (bounding box `y`, relative to the viewport)
    // should land near the top of the viewport, roughly within the fixed
    // nav's floating height (with generous slack for the smooth-scroll
    // easing/rounding and section top padding).
    expect(box!.y).toBeGreaterThan(-50);
    expect(box!.y).toBeLessThan(navHeight + 100);
  }
}
