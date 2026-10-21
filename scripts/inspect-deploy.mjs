import { mkdtemp, mkdir, writeFile, chmod, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, posix } from "node:path";
import SftpClient from "ssh2-sftp-client";
import { createHash } from "node:crypto";
import { connectionOptions } from "./deploy.mjs";

const { protocol, access, directory } = connectionOptions(process.env);
if (protocol !== "sftp") throw new Error("Inspection currently requires SFTP.");
const client = new SftpClient();
const snapshot = await mkdtemp(join(tmpdir(), "obert-remote-"));
await chmod(snapshot, 0o700);
const files = [];
const skipped = [];
let total = 0;
try {
  await client.connect(access);
  console.log(
    "Connected with pinned SSH fingerprint. Reading remote directory only.",
  );
  const realPath = await client.realPath(directory);
  console.log(`Remote directory: ${realPath}`);
  async function download(relative = "") {
    const remote = posix.join(directory, relative);
    const local = join(snapshot, "site", relative);
    await mkdir(local, { recursive: true, mode: 0o700 });
    for (const entry of await client.list(remote)) {
      if (
        [".", ".."].includes(entry.name) ||
        entry.name.includes("/") ||
        entry.name.includes("\\")
      )
        throw new Error("Invalid remote entry name.");
      const path = posix.join(relative, entry.name);
      if (entry.type === "d") await download(path);
      else if (entry.type === "-") {
        const destination = join(snapshot, "site", path);
        await client.get(posix.join(directory, path), destination);
        await chmod(destination, 0o600);
        files.push({ path, bytes: entry.size, modified: entry.modifyTime });
        total += entry.size;
        if (files.length % 50 === 0)
          console.log(
            `Downloaded ${files.length} files (${(total / 1024 / 1024).toFixed(1)} MiB).`,
          );
      } else skipped.push({ path, type: entry.type });
    }
  }
  await download();
  const summary = {
    hasIndex: files.some((file) => file.path === "index.html"),
    hasHtaccess: files.some((file) => file.path === ".htaccess"),
    htaccessMatchesRepository: false,
  };
  if (summary.hasHtaccess) {
    summary.htaccessMatchesRepository = (
      await readFile(join(snapshot, "site", ".htaccess"))
    ).equals(await readFile("tk_hosting_files/.htaccess"));
  }
  if (summary.hasIndex && process.env.DEPLOY_PUBLIC_URL) {
    const url = new URL(process.env.DEPLOY_PUBLIC_URL);
    if (url.protocol !== "https:")
      throw new Error("Use HTTPS for DEPLOY_PUBLIC_URL.");
    const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
    const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
    summary.publicIndexMatches =
      response.ok &&
      hash(Buffer.from(await response.arrayBuffer())) ===
        hash(await readFile(join(snapshot, "site", "index.html")));
  }
  console.log(`Inspection: ${JSON.stringify(summary)}`);
  await writeFile(
    join(snapshot, "manifest.json"),
    JSON.stringify(
      { directory, realPath, files, skipped, totalBytes: total, summary },
      null,
      2,
    ),
    { mode: 0o600 },
  );
  console.log(`Snapshot: ${snapshot}`);
  console.log(
    `Downloaded ${files.length} files (${(total / 1024 / 1024).toFixed(1)} MiB), including hidden files. Skipped ${skipped.length} non-regular entries. No remote changes.`,
  );
} catch (error) {
  const code = String(error.code || "");
  console.error(
    `Inspection failed${/^[A-Z0-9_-]+$/.test(code) ? ` (${code})` : ""}. Check connection settings. Partial local snapshot: ${snapshot}`,
  );
  process.exitCode = 1;
} finally {
  await client.end();
}
