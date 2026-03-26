import type { CollectionEntry } from 'astro:content';
import { isLocale, pageHref, type Locale } from './i18n';

export type PageEntry = CollectionEntry<'pages'>;

export interface ParsedPage {
  locale: Locale;
  slugParts: string[];
}

export function parsePageId(id: string): ParsedPage | null {
  const parts = id.split('/').filter(Boolean);
  if (parts.length === 0) {
    return null;
  }

  const locale = parts[0];
  if (!isLocale(locale)) {
    return null;
  }

  const rawSlug = parts.slice(1);
  const slugParts = rawSlug.at(-1) === 'index' ? rawSlug.slice(0, -1) : rawSlug;

  return {
    locale,
    slugParts,
  };
}

export function entryHref(entry: PageEntry): string | null {
  const parsed = parsePageId(entry.id);
  if (!parsed) {
    return null;
  }

  return pageHref(parsed.locale, parsed.slugParts);
}

export function compareByOrderThenTitle(a: PageEntry, b: PageEntry): number {
  const byOrder = a.data.order - b.data.order;
  if (byOrder !== 0) {
    return byOrder;
  }

  const aTitle = a.data.navTitle ?? a.data.title;
  const bTitle = b.data.navTitle ?? b.data.title;
  return aTitle.localeCompare(bTitle);
}

export function isDirectChild(parent: string[], child: string[]): boolean {
  if (child.length !== parent.length + 1) {
    return false;
  }

  return parent.every((part, index) => child[index] === part);
}
