import sharp from "sharp";
import { createHash, randomUUID } from "node:crypto";
import {
  mkdir,
  readFile,
  readdir,
  rename,
  stat,
  unlink,
  writeFile,
} from "node:fs/promises";
import { basename, extname, resolve } from "node:path";

const sourceRoot = resolve("public/static");
const output = resolve("public/generated-images");
const manifestPath = resolve("src/lib/generated-images.json");
const profiles = {
  galerie: { widths: [160, 480, 768, 1280, 1920], quality: 78 },
  produkte: { widths: [320, 480, 768, 1280], quality: 80 },
  holz: { widths: [160, 320, 480, 768], quality: 80 },
  partner: { widths: [180, 360, 540], lossless: true },
  brand: { widths: [320, 640, 960], lossless: true },
};
sharp.concurrency(2);

async function atomicWrite(path, data) {
  const temporary = `${path}.${process.pid}.${randomUUID()}.tmp`;
  await writeFile(temporary, data);
  await rename(temporary, path);
}
async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}
async function sources(directory = sourceRoot, relative = "") {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const path = relative ? `${relative}/${entry.name}` : entry.name;
    if (entry.isDirectory())
      result.push(...(await sources(resolve(directory, entry.name), path)));
    else if (/\.(webp|png|jpe?g)$/i.test(entry.name)) result.push(path);
  }
  return result.sort();
}

await mkdir(output, { recursive: true });
const manifest = {};
const currentFiles = new Set();
let generated = 0;
let totalBytes = 0;
for (const path of await sources()) {
  const input = await readFile(resolve(sourceRoot, path));
  const metadata = await sharp(input).metadata();
  const profile = profiles[path.split("/")[0]] || profiles.brand;
  const widths = [
    ...new Set(profile.widths.map((width) => Math.min(width, metadata.width))),
  ];
  const options = profile.lossless
    ? { lossless: true, effort: 5 }
    : { quality: profile.quality, effort: 5 };
  const hash = createHash("sha256")
    .update(input)
    .update(JSON.stringify({ widths, options, encoder: sharp.versions }))
    .digest("hex")
    .slice(0, 12);
  const name = basename(path, extname(path))
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9_-]/g, "-")
    .toLowerCase();
  const variants = [];
  for (const width of widths) {
    const filename = `${name}-${hash}-${width}.webp`;
    const destination = resolve(output, filename);
    if (!(await exists(destination))) {
      const data = await sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp(options)
        .toBuffer();
      await atomicWrite(destination, data);
      generated++;
    }
    const bytes = (await stat(destination)).size;
    variants.push({ src: `/generated-images/${filename}`, width, bytes });
    totalBytes += bytes;
    currentFiles.add(filename);
  }
  manifest[`/static/${path}`] = {
    width: metadata.width,
    height: metadata.height,
    variants,
  };
}
const json = JSON.stringify(manifest, null, 2) + "\n";
if (
  !(await exists(manifestPath)) ||
  (await readFile(manifestPath, "utf8")) !== json
)
  await atomicWrite(manifestPath, json);
// Only this generated directory is pruned; original source files remain untouched.
for (const filename of await readdir(output)) {
  if (filename.endsWith(".webp") && !currentFiles.has(filename))
    await unlink(resolve(output, filename));
}
console.log(
  `Images: ${Object.keys(manifest).length} originals, ${currentFiles.size} responsive WebP variants (${(totalBytes / 1024 / 1024).toFixed(1)} MiB); ${generated} generated, remainder cached.`,
);
