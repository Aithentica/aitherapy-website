export const defaultLocale = 'en' as const;
export const locales = ['en', 'pl', 'sk', 'ca', 'ru', 'uk', 'lt'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pl: 'Polski',
  sk: 'Slovenčina',
  ca: 'Català',
  ru: 'Русский',
  uk: 'Українська',
  lt: 'Lietuvių',
};

/** BCP 47 tags for html lang attribute and date formatting */
export const localeBcp47: Record<Locale, string> = {
  en: 'en-GB',
  pl: 'pl-PL',
  sk: 'sk-SK',
  ca: 'ca-ES',
  ru: 'ru-RU',
  uk: 'uk-UA',
  lt: 'lt-LT',
};

/** og:locale values */
export const localeOg: Record<Locale, string> = {
  en: 'en_GB',
  pl: 'pl_PL',
  sk: 'sk_SK',
  ca: 'ca_ES',
  ru: 'ru_RU',
  uk: 'uk_UA',
  lt: 'lt_LT',
};
