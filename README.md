# Holzhandlung Obert

Website for [Holzhandlung Obert](https://www.holzhandlung-obert.de/) — a family-run timber business in Oberwolfach, Black Forest.

Built with **Next.js**, **Tailwind CSS**, and **TypeScript**. Statically exported (`output: "export"`).

## Getting Started

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

To preview the actual export locally, run `python3 -m http.server 4173 -d out` and open http://localhost:4173. `next start` is not used for static exports.

## Project Structure

```
src/
  app/          # Pages (Next.js App Router)
  components/   # Reusable UI components
  lib/          # Shared data & utilities
public/static/  # Images (products, gallery, partners, wood types)
```
