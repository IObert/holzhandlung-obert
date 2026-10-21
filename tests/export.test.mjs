import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { resolve, relative, sep } from "node:path";
import { parse } from "parse5";

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
      for (const name of ["href", "src"]) {
        const value = attribute(element, name);
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
