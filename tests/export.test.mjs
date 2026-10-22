import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { resolve, relative, sep } from "node:path";
import { parse } from "parse5";
import sharp from "sharp";

const root = resolve("out");
async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = resolve(directory, entry.name);
      return entry.isDirectory()
        ? htmlFiles(path)
        : path.endsWith(".html")
          ? [path]
          : [];
    }),
  );
  return files.flat();
}
function elements(node, result = []) {
  if (node.tagName) result.push(node);
  for (const child of node.childNodes || []) elements(child, result);
  return result;
}
const attribute = (element, name) =>
  element.attrs.find((attr) => attr.name === name)?.value;
const urlFor = (file) =>
  new URL(relative(root, file).split(sep).join("/"), "http://export.test/");

async function documentAt(path) {
  const info = await stat(path);
  const file = info.isDirectory() ? resolve(path, "index.html") : path;
  return { file, nodes: elements(parse(await readFile(file, "utf8"))) };
}

test("FTP export contains pages, sitemap and hosting rules", async () => {
  for (const path of [
    "index.html",
    "404.html",
    "sitemap.xml",
    ".htaccess",
    "partner/index.html",
    "team/index.html",
    "agb/index.html",
    "datenschutz/index.html",
    "impressum/index.html",
    "haftungsausschluss/index.html",
  ]) {
    assert.ok((await stat(resolve(root, path))).isFile(), `Missing ${path}`);
  }
  assert.ok((await stat(resolve(root, "produkte"))).isDirectory());
  assert.ok((await stat(resolve(root, "galerie"))).isDirectory());
});

test("every exported page has working local links, images, assets and anchors", async () => {
  const files = await htmlFiles(root);
  const documents = new Map();
  for (const file of files) documents.set(file, await documentAt(file));
  const failures = [];
  for (const [file, { nodes }] of documents) {
    for (const element of nodes) {
      const targets = ["href", "src"].map((name) => ({
        name,
        value: attribute(element, name),
      }));
      for (const name of ["srcset", "imagesrcset"]) {
        for (const candidate of (attribute(element, name) || "")
          .split(",")
          .filter(Boolean)) {
          targets.push({ name, value: candidate.trim().split(/\s+/)[0] });
        }
      }
      for (const { name, value } of targets) {
        if (!value) continue;
        const url = new URL(value, urlFor(file));
        if (url.origin !== "http://export.test") continue;
        const target = resolve(root, `.${decodeURIComponent(url.pathname)}`);
        try {
          assert.ok(target === root || target.startsWith(root + sep));
          const info = await stat(target);
          const destination = info.isDirectory()
            ? resolve(target, "index.html")
            : target;
          assert.ok((await stat(destination)).isFile());
          if (url.hash && destination.endsWith(".html")) {
            const document =
              documents.get(destination) || (await documentAt(destination));
            const id = decodeURIComponent(url.hash.slice(1));
            assert.ok(
              document.nodes.some(
                (node) =>
                  attribute(node, "id") === id ||
                  attribute(node, "name") === id,
              ),
            );
          }
        } catch {
          failures.push(`${relative(root, file)}: ${name}="${value}"`);
        }
      }
    }
  }
  assert.deepEqual(failures, [], "Broken local export targets");
});

test("exported .htaccess matches the version-controlled hosting rules exactly", async () => {
  assert.deepEqual(
    await readFile(resolve(root, ".htaccess")),
    await readFile(resolve("tk_hosting_files/.htaccess")),
  );
});

test("responsive image variants exist with correct dimensions and bounded preview sizes", async () => {
  const manifest = JSON.parse(
    await readFile("src/lib/generated-images.json", "utf8"),
  );
  for (const [source, image] of Object.entries(manifest)) {
    assert.ok(image.variants.length > 0, source);
    for (const variant of image.variants) {
      assert.ok(
        variant.width <= image.width,
        `Image must not be upscaled: ${source}`,
      );
      assert.match(
        variant.src,
        /^\/generated-images\/[^/]+-[a-f0-9]{12}-\d+\.webp$/,
      );
      const file = resolve(root, `.${variant.src}`);
      const metadata = await sharp(file).metadata();
      assert.equal(metadata.width, variant.width, source);
      assert.equal(metadata.format, "webp", source);
      assert.equal((await stat(file)).size, variant.bytes, source);
      if (source.includes("/galerie/") && variant.width === 160)
        assert.ok(
          variant.bytes < 20_000,
          `Gallery thumbnail too large: ${source}`,
        );
    }
  }
  const hero = manifest["/static/galerie/Regale.webp"].variants;
  assert.ok(hero.at(-1).bytes < 350_000, "Hero budget exceeded");
  const home = (await documentAt(resolve(root, "index.html"))).nodes;
  for (const image of home.filter((node) => node.tagName === "img")) {
    assert.match(
      attribute(image, "src"),
      /^\/generated-images\//,
      "Home page must not fetch original photographs",
    );
    assert.ok(attribute(image, "srcset"));
    assert.ok(attribute(image, "sizes"));
    assert.ok(attribute(image, "width"));
    assert.ok(attribute(image, "height"));
  }
});
