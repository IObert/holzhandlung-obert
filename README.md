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

## FTP deployment

`basic-ftp` handles FTP/FTPS and `ssh2-sftp-client` handles SFTP over SSH. Set `FTP_PROTOCOL=ftp` or `FTP_PROTOCOL=sftp` to match FileZilla. The prepared Telekom connection uses SFTP on port 22.

The local `.env.deploy.local` contains the connection settings and is ignored by Git. On another checkout, create it from the tracked template:

```bash
cp .env.deploy.example .env.deploy.local
chmod 600 .env.deploy.local
```

Fill in `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`, and `FTP_REMOTE_DIR` from your FileZilla connection settings. Use just the hostname, without `ftp://`. The remote path must point to this site's document root within the FTP account: for example `/public_html`, `/htdocs`, or `/` if the account already opens at the website root. Quote a password that contains `#` or spaces using the appropriate dotenv quotes.

`FTP_SECURE=true` uses explicit FTPS with certificate verification and port 21. For implicit FTPS, set `FTP_SECURE=implicit` and `FTP_PORT=990`. Set `FTP_SECURE=false` only if the host requires plain FTP. These settings apply only to FTP/FTPS. For SFTP, use `FTP_PROTOCOL=sftp` and `FTP_PORT=22`; `FTP_SECURE` is ignored. Set `SFTP_HOST_KEY_SHA256` to the SHA256 host-key fingerprint already verified in FileZilla (format `SHA256:...`). It is not part of the Site Manager XML export. The client checks that fingerprint before authenticating.

The configured document root is `/home/www/public_html`. Its downloaded `index.html` was byte-for-byte identical to the public website during the read-only inspection on 2026-10-21. The SSH ED25519 fingerprint was independently checked against [Telekom's official fingerprint documentation](https://homepagecenter.telekom.de/hilfe/webseite/auf-den-webspace-zugreifen-ftp-und-co/ssh/fingerabdruck-/-fingerprint) and pinned locally:

```text
SHA256:89n1iYXwnueGbEMW4LTeqR1615iqwiiyMgn+/0i+2Bc
```

To download another read-only snapshot of the existing site, including dotfiles, into a private temporary folder:

```bash
pnpm deploy:inspect
```

This command prints the local snapshot path, writes a file manifest, checks whether `.htaccess` matches the repository, and compares the remote index with `DEPLOY_PUBLIC_URL` when configured. It does not modify the server. Snapshots are local temporary files, not committed backups; copy one to a durable location yourself if you need to retain it.

Preview a fresh build and its upload list, without a connection or credentials:

```bash
pnpm deploy:plan
```

When the settings are ready, run this yourself to publish:

```bash
pnpm deploy
```

Both commands build and check the static export first. Deployment uploads only the contents of `out/`, including `.htaccess`, with assets before HTML and hosting rules last. It requires the destination directory to exist, overwrites matching files, and checks every uploaded file size before reporting success. It never deletes remote files. This also means old hashed assets and removed pages remain on the server until you remove them separately. Required hidden files such as `.htaccess` and `.well-known/` are included; desktop junk (`.DS_Store`, `Thumbs.db`) and Vercel project metadata are excluded. The export tests require the generated `.htaccess` to match `tk_hosting_files/.htaccess` exactly. The remote hosting rules matched this source during inspection and were kept unchanged.

Deployment is not atomic: an interrupted upload can be partial; rerun the command after fixing the connection. FTP debug logging is disabled, and failures do not print credentials or raw server responses.

The local credentials file, export of FileZilla settings, and passwords must not be placed in `public/`, `out/`, or version control. You do not need to send credentials through chat. No live deployment was performed during setup.

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

`pnpm test` builds a fresh static export, runs three Node.js export checks and six deployment checks, and runs ten Playwright checks against the exported files. The test server uses port 4174 and returns a real 404 for missing files, with no Next.js runtime or home-page fallback.

- Export checks verify required pages, sitemap, `.htaccess`, and every local link, image, asset, and anchor in the HTML.
- Browser checks cover gallery navigation, thumbnails, wraparound, closing, keyboard focus, and navigation from a subpage to the contact section.
- Responsive checks cover the home page and all six footer pages from 320 to 1440 pixels.
- Four screenshot comparisons cover the home page and AGB page on desktop and mobile.

To rerun individual groups against an existing, up-to-date `out/` directory:

```bash
pnpm test:export
pnpm test:deploy
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
