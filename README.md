# Holzhandlung Obert

Website for [Holzhandlung Obert](https://www.holzhandlung-obert.de/) — a family-run timber business in Oberwolfach, Black Forest.

Built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Statically exported (`output: "export"`).

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

Static files are generated in the `out/` directory, ready for deployment.

## Project Structure

```
src/
  app/          # Pages (Next.js App Router)
  components/   # Reusable UI components
  lib/          # Shared data & utilities
public/static/  # Images (products, gallery, partners, wood types)
```
