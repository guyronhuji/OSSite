import { defineConfig } from 'astro/config';

const owner = process.env.GITHUB_REPOSITORY_OWNER || 'guyronhuji';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'OSSite';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: isGitHubActions ? `/${repo}` : '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'he', 'de', 'ar'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
