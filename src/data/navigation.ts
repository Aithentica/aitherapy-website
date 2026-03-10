import type { Locale } from '../i18n/config';
import { useTranslations, localizedUrl } from '../i18n/utils';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export function getNavigation(locale: Locale): NavItem[] {
  const t = useTranslations(locale);
  return [
    { label: t.nav.home, href: localizedUrl('/', locale) },
    { label: t.nav.app, href: localizedUrl('/features/', locale) },
    { label: t.nav.joinBeta, href: localizedUrl('/betatester/', locale) },
    { label: t.nav.security, href: localizedUrl('/security/', locale) },
    { label: t.nav.team, href: localizedUrl('/about/', locale) },
    { label: t.nav.tutorials, href: localizedUrl('/tutorials/', locale) },
    { label: t.nav.careers, href: localizedUrl('/careers/', locale) },
    { label: t.nav.contact, href: localizedUrl('/contact/', locale) },
  ];
}
