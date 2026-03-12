// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aitherapy.support',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl', 'sk', 'ca', 'ru', 'uk', 'lt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
          pl: 'pl-PL',
          sk: 'sk-SK',
          ca: 'ca-ES',
          ru: 'ru-RU',
          uk: 'uk-UA',
          lt: 'lt-LT',
        },
      },
    }),
  ],
  redirects: {
    '/funkcjonalnosci/': '/pl/features/',
    '/bezpieczenstwo/': '/pl/security/',
    '/o-firmie/': '/pl/about/',
    '/kontakt/': '/pl/contact/',
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
