# Dr. Oded Steinberg Website (Astro + Pages CMS)

A multilingual academic website scaffold built with Astro for deployment on GitHub Pages and managed content through Pages CMS.

## Vision

- Professional and engaging academic presentation
- Light-blue visual language with clear typographic hierarchy
- Content-first architecture so pages and subpages can be added without code changes
- Full locale support: English (`en`), Hebrew (`he`), German (`de`), Arabic (`ar`)

## Tech Format

- Framework: Astro 6 (static output)
- Content layer: `src/content.config.ts` with Zod validation
- Page source: Markdown files in locale folders
- Data source: YAML files for profile and publications
- CMS: `.pages.yml` configured for Pages CMS tree editing
- Media: `public/uploads`

## URL Structure

- `/en`, `/he`, `/de`, `/ar`
- Nested pages are generated from folder structure, for example:
  - `src/content/pages/en/research/index.md` -> `/en/research`
  - `src/content/pages/en/research/time-periodization.md` -> `/en/research/time-periodization`

## Content Structure

```text
src/content/
  pages/
    en|he|de|ar/
      index.md
      research/
        index.md
        anglo-german-relations.md
        time-periodization.md
        humanitarian-networks.md
      publications/index.md
      contact/index.md
  profile/main.yaml
  publications/list.yaml
```

## Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Pages CMS Editing

1. Push repository to GitHub.
2. Open your repo in Pages CMS (app.pagescms.org).
3. Pages CMS will read `.pages.yml` and expose:
   - `Pages (English/Hebrew/German/Arabic)` as tree collections
   - `Profile Data`
   - `Publications Data`

### Add a New Subpage

In Pages CMS, open one of the locale page collections (for example English), then create a file in a subfolder:

- `src/content/pages/en/research/new-topic.md` -> `/en/research/new-topic`

Or add a new section node with `index.md` in a subfolder.

## Source Migration Notes

Initial biography text, contact details, and publication records were migrated from the current HUJI website and linked PDFs.

- Current site: `https://odedsteinberg.huji.ac.il/`
- Included documents:
  - `/public/docs/curriculum-vitae-oded-steinberg.pdf`
  - `/public/docs/list-of-publications-oded-steinberg.pdf`
