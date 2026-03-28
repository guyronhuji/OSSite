import { getCollection } from 'astro:content';
import { entryHref } from '../lib/content';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET({ site }: { site: URL | undefined }) {
  if (!site) {
    throw new Error('Astro site URL is required to generate sitemap.xml');
  }

  const pages = await getCollection('pages');
  const hrefs = pages
    .map((entry) => entryHref(entry))
    .filter((href): href is string => Boolean(href));

  const uniqueHrefs = Array.from(new Set(hrefs)).sort((a, b) => a.localeCompare(b));

  const urls = uniqueHrefs
    .map((href) => new URL(href, site).toString())
    .map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
