import { readdir, stat } from "node:fs/promises";
import { resolve, posix } from "node:path";
import { pathToFileURL } from "node:url";
import { Client } from "basic-ftp";
import SftpClient from "ssh2-sftp-client";
import { createHash, timingSafeEqual } from "node:crypto";

class SetupError extends Error {}

export function connectionOptions(env) {
  for (const name of [
    "FTP_HOST",
    "FTP_USER",
    "FTP_PASSWORD",
    "FTP_REMOTE_DIR",
  ]) {
    if (!env[name]?.trim())
      throw new SetupError(`Set ${name} in .env.deploy.local.`);
    if (/[\r\n\0]/.test(env[name]))
      throw new SetupError(`${name} contains an invalid control character.`);
  }
  if (env.FTP_HOST.includes("://"))
    throw new SetupError(
      "FTP_HOST must be a hostname, without a protocol prefix.",
    );
  const protocol = env.FTP_PROTOCOL || "ftp";
  if (!["ftp", "sftp"].includes(protocol))
    throw new SetupError("FTP_PROTOCOL must be ftp or sftp.");
  const modes = { true: true, false: false, implicit: "implicit" };
  const mode = env.FTP_SECURE || "true";
  if (protocol === "ftp" && !Object.hasOwn(modes, mode))
    throw new SetupError("FTP_SECURE must be true, implicit, or false.");
  const port = Number(
    env.FTP_PORT || (protocol === "sftp" ? 22 : mode === "implicit" ? 990 : 21),
  );
  if (!Number.isInteger(port) || port < 1 || port > 65535)
    throw new SetupError("FTP_PORT must be a valid port number.");
  const directory = env.FTP_REMOTE_DIR.trim();
  if (
    !directory.startsWith("/") ||
    directory.includes("\\") ||
    directory.split("/").includes("..")
  ) {
    throw new SetupError(
      "FTP_REMOTE_DIR must be an absolute FTP path, such as /public_html or /.",
    );
  }
  const access = {
    host: env.FTP_HOST,
    port,
    user: env.FTP_USER,
    password: env.FTP_PASSWORD,
  };
  if (protocol === "sftp") {
    const fingerprint = (env.SFTP_HOST_KEY_SHA256 || "")
      .replace(/^SHA256:/, "")
      .replace(/=+$/, "");
    if (!/^[A-Za-z0-9+/]{43}$/.test(fingerprint))
      throw new SetupError(
        "Set SFTP_HOST_KEY_SHA256 to the verified SHA256 server fingerprint shown by FileZilla.",
      );
    const expected = Buffer.from(fingerprint, "base64");
    return {
      protocol,
      directory: posix.normalize(directory),
      access: {
        host: access.host,
        port,
        username: access.user,
        password: access.password,
        readyTimeout: 30_000,
        hostVerifier: (key) =>
          timingSafeEqual(createHash("sha256").update(key).digest(), expected),
      },
    };
  }
  return {
    protocol,
    access: { ...access, secure: modes[mode] },
    directory: posix.normalize(directory),
  };
}

export async function uploadPlan(root = resolve("out")) {
  for (const name of ["index.html", ".htaccess"]) {
    try {
      if (!(await stat(resolve(root, name))).isFile()) throw new Error();
    } catch {
      throw new SetupError(
        `Missing out/${name}. Run pnpm build before deploying.`,
      );
    }
  }
  const files = [];
  async function walk(directory = "") {
    for (const entry of await readdir(resolve(root, directory), {
      withFileTypes: true,
    })) {
      const path = posix.join(directory, entry.name);
      if ([".DS_Store", "Thumbs.db", ".vercel"].includes(entry.name)) continue;
      if (entry.isSymbolicLink())
        throw new SetupError(
          "The export contains a symbolic link; upload cancelled.",
        );
      if (entry.name.startsWith(".env") || entry.name === ".git")
        throw new SetupError(
          "The export contains a private configuration file; upload cancelled.",
        );
      if (entry.isDirectory()) await walk(path);
      else if (entry.isFile())
        files.push({
          path,
          localPath: resolve(root, path),
          bytes: (await stat(resolve(root, path))).size,
        });
    }
  }
  await walk();
  // Upload hashed assets before the HTML that refers to them; hosting rules last.
  const phase = (path) =>
    path === ".htaccess" ? 2 : path.endsWith(".html") ? 1 : 0;
  return files.sort(
    (a, b) => phase(a.path) - phase(b.path) || a.path.localeCompare(b.path),
  );
}

export async function verifyDestination(client, directory, protocol) {
  if (protocol === "sftp") {
    if ((await client.exists(directory)) !== "d")
      throw new SetupError(
        "The configured remote directory does not exist. Check FTP_REMOTE_DIR; deployment will not create a new document root.",
      );
  } else {
    await client.cd(directory);
  }
}

export async function uploadFiles(client, files, directory, protocol = "ftp") {
  const preparedDirectories = new Set([directory]);
  for (const file of files) {
    const remote = posix.join(directory, file.path);
    const parent = posix.dirname(remote);
    if (!preparedDirectories.has(parent)) {
      if (protocol === "sftp") await client.mkdir(parent, true);
      else await client.ensureDir(parent);
      preparedDirectories.add(parent);
    }
    if (protocol === "sftp") await client.put(file.localPath, remote);
    else await client.uploadFrom(file.localPath, remote);
    const remoteSize =
      protocol === "sftp"
        ? (await client.stat(remote)).size
        : await client.size(remote);
    if (remoteSize !== file.bytes)
      throw new SetupError(
        `Uploaded size mismatch for ${file.path}. Deployment stopped; rerun after checking the connection.`,
      );
  }
}

async function main() {
  const args = process.argv.slice(2);
  if (args.some((arg) => arg !== "--dry-run"))
    throw new SetupError("Usage: deploy.mjs [--dry-run]");
  const files = await uploadPlan();
  const megabytes =
    files.reduce((sum, file) => sum + file.bytes, 0) / 1024 / 1024;
  console.log(
    `Export: ${files.length} files (${megabytes.toFixed(1)} MiB), including .htaccess.`,
  );
  if (args.includes("--dry-run")) {
    console.log("Dry run: no connection and no remote changes. Upload order:");
    for (const file of files) console.log(`  ${file.path}`);
    console.log(
      "Set FTP_HOST, FTP_USER, FTP_PASSWORD and FTP_REMOTE_DIR in .env.deploy.local, then run pnpm deploy.",
    );
    return;
  }
  const { access, directory, protocol } = connectionOptions(process.env);
  const client = protocol === "sftp" ? new SftpClient() : new Client(30_000);
  try {
    // Verbose FTP logging is deliberately disabled to keep credentials private.
    if (protocol === "sftp") await client.connect(access);
    else await client.access(access);
    await verifyDestination(client, directory, protocol);
    await uploadFiles(client, files, directory, protocol);
    console.log(
      `Uploaded and size-verified ${files.length} files, including .htaccess. No remote files were deleted.`,
    );
  } finally {
    if (protocol === "sftp") await client.end();
    else client.close();
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  main().catch((error) => {
    if (error instanceof SetupError) console.error(error.message);
    else {
      const code = String(error.code || "");
      console.error(
        `Deployment failed${/^[A-Z0-9_-]+$/.test(code) ? ` (${code})` : ""}. Check your FTP settings and connection. An interrupted upload may have transferred some files; rerun pnpm deploy after resolving the issue.`,
      );
    }
    process.exitCode = 1;
  });
}
