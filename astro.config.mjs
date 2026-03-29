import { defineConfig } from 'astro/config';

const siteUrl = process.env.SITE_URL || 'https://www.odedsteinberg.org';

export default defineConfig({
  site: siteUrl,
  base: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'he', 'de', 'ar'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
