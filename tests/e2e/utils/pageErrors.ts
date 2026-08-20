import { Page } from '@playwright/test';

export interface CapturedErrors {
  consoleErrors: string[];
  pageErrors: string[];
}

/**
 * Attaches listeners that record uncaught page errors and console.error
 * messages for the lifetime of the page. Call before navigating.
 */
export function captureErrors(page: Page): CapturedErrors {
  const captured: CapturedErrors = { consoleErrors: [], pageErrors: [] };

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      captured.consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', (error) => {
    captured.pageErrors.push(error.message);
  });

  return captured;
}

export interface CapturedRequestFailure {
  url: string;
  status?: number;
  failure?: string;
}

/**
 * Attaches listeners that record failed network requests (status >= 400 or
 * request-level failures such as aborted/DNS errors) for the page.
 */
export function captureFailedRequests(page: Page): CapturedRequestFailure[] {
  const failures: CapturedRequestFailure[] = [];

  page.on('response', (response) => {
    if (response.status() >= 400) {
      failures.push({ url: response.url(), status: response.status() });
    }
  });

  page.on('requestfailed', (request) => {
    failures.push({ url: request.url(), failure: request.failure()?.errorText });
  });

  return failures;
}
