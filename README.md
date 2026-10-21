# Holzhandlung Obert

Website for [Holzhandlung Obert](https://www.holzhandlung-obert.de/) — a family-run timber business in Oberwolfach, Black Forest.

Built with **Next.js**, **Tailwind CSS**, and **TypeScript**. Statically exported (`output: "export"`).

## Getting Started

Use Node.js 24 and pnpm 11.1.3 (the version recorded in `packageManager`).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Export

```bash
pnpm build
```

Static files are generated in the `out/` directory, ready for deployment. Upload the **contents** of `out/` (including `_next/`, `static/`, all page folders, and `.htaccess`) to the FTP document root. No Node.js server, API, or image optimization service is required. The site uses local images and system fonts.

To preview the actual export locally, run `pnpm preview` and open http://127.0.0.1:4174. `next start` is not used for static exports.

## Checks and tests

Install the Chromium test browser once:

```bash
pnpm exec playwright install chromium
```

Run the checks and the complete test suite:

```bash
pnpm lint
pnpm typecheck
pnpm test
```

`pnpm test` builds a fresh static export, runs two Node.js export checks, and runs ten Playwright checks against the exported files. The test server uses port 4174 and returns a real 404 for missing files, with no Next.js runtime or home-page fallback.

- Export checks verify required pages, sitemap, `.htaccess`, and every local link, image, asset, and anchor in the HTML.
- Browser checks cover gallery navigation, thumbnails, wraparound, closing, keyboard focus, and navigation from a subpage to the contact section.
- Responsive checks cover the home page and all six footer pages from 320 to 1440 pixels.
- Four screenshot comparisons cover the home page and AGB page on desktop and mobile.

To rerun individual groups against an existing, up-to-date `out/` directory:

```bash
pnpm test:export
pnpm test:e2e
```

Review the HTML report with `pnpm exec playwright show-report`. Reports, traces, and failure screenshots are ignored by Git; approved baseline images in `tests/screenshots/` belong in version control.

### Screenshot references

References for macOS are included. Screenshots depend on the operating system, fonts, and Playwright's Chromium version, so each platform has its own baseline folder. On another platform, create and visually review its references before adding them to version control. After an intentional design change, rebuild and update them:

```bash
pnpm build
pnpm test:visual:update
```

Review the changed PNGs, then run `pnpm test:e2e` again. Do not update references just to hide a regression. The tests preload lazy images and wait for fonts before taking screenshots.

### If pnpm cannot switch versions

`Failed to switch pnpm to ...` comes from the package-manager launcher, before the app starts. It can happen when `packageManager` requests a different version and pnpm's local copy of that version is missing. This project now declares pnpm 11.1.3, matching the local installation used for validation. Check `pnpm --version`; if using Corepack on another machine, `corepack pnpm install` uses the project version.

After changing the pnpm major version, a local `ERR_PNPM_UNEXPECTED_STORE` can be resolved by reinstalling only the generated dependencies with `pnpm install --force`. Keep the committed lockfile. pnpm 11's release-age protections remain enabled; the lockfile has been resolved with those checks in place.

## Project Structure

```
src/
  app/          # Pages (Next.js App Router)
  components/   # Reusable UI components
  lib/          # Shared data & utilities
public/static/  # Images (products, gallery, partners, wood types)
tests/          # Export checks, browser tests and screenshot references
scripts/        # Local static-export preview server
```
