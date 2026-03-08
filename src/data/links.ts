// IMPORTANT: Do NOT change these URLs without explicit approval from the project owner.
// BETA_PAGE_URL is the local landing page. BETA_CHECKOUT_URL is the Stripe checkout in the app.
// All CTA buttons, nav links, and blog links should use getBetaPageUrl() (not the app URL directly).

import type { Locale } from '../i18n/config';
import { defaultLocale } from '../i18n/config';
import { localizedUrl } from '../i18n/utils';

export const BETA_CHECKOUT_URL = 'https://app.aitherapy.support/betatester';

/** Returns the localized beta landing page URL */
export function getBetaPageUrl(locale: Locale = defaultLocale): string {
  return localizedUrl('/betatester/', locale);
}

/** Legacy export for backwards compat */
export const BETA_PAGE_URL = '/betatester/';
