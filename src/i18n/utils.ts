import { defaultLocale, locales, type Locale } from './config';
import en from './translations/en';
import type { TranslationKeys } from './translations/en';

// Lazy-loaded translations (en is always available)
const translationModules: Record<Locale, () => Promise<{ default: TranslationKeys }>> = {
  en: () => Promise.resolve({ default: en }),
  pl: () => import('./translations/pl'),
  sk: () => import('./translations/sk'),
  ca: () => import('./translations/ca'),
  ru: () => import('./translations/ru'),
  uk: () => import('./translations/uk'),
  lt: () => import('./translations/lt'),
};

const cache: Partial<Record<Locale, TranslationKeys>> = { en };

export async function loadTranslations(locale: Locale): Promise<TranslationKeys> {
  if (cache[locale]) return cache[locale]!;
  const mod = await translationModules[locale]();
  cache[locale] = mod.default;
  return mod.default;
}

/** Synchronous access — only use after loadTranslations or for 'en' */
export function useTranslations(locale: Locale): TranslationKeys {
  return cache[locale] || en;
}

/** Extract locale from the [...lang] rest parameter */
export function getLocaleFromParams(lang: string | undefined): Locale {
  if (!lang) return defaultLocale;
  if ((locales as readonly string[]).includes(lang)) return lang as Locale;
  return defaultLocale;
}

/** Build a localized URL path */
export function localizedUrl(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return `/${locale}${clean}`;
}

/** Return getStaticPaths entries for all locales */
export function getStaticLocalePaths() {
  return [
    { params: { lang: undefined } },
    ...locales
      .filter((l) => l !== defaultLocale)
      .map((lang) => ({ params: { lang } })),
  ];
}
