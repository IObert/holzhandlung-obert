import { test } from "node:test";
import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  connectionOptions,
  uploadPlan,
  uploadFiles,
  verifyDestination,
} from "../scripts/deploy.mjs";

const env = {
  FTP_HOST: "ftp.example.test",
  FTP_USER: "example",
  FTP_PASSWORD: "not-a-real-password",
  FTP_REMOTE_DIR: "/website",
};

test("FTP setup validates credentials, protocol and destination before connecting", () => {
  assert.throws(() => connectionOptions({}), /FTP_HOST/);
  assert.throws(
    () => connectionOptions({ ...env, FTP_PASSWORD: "" }),
    /FTP_PASSWORD/,
  );
  assert.throws(
    () => connectionOptions({ ...env, FTP_PORT: "bad" }),
    /FTP_PORT/,
  );
  assert.throws(
    () => connectionOptions({ ...env, FTP_SECURE: "sftp" }),
    /FTP_SECURE/,
  );
  assert.throws(
    () => connectionOptions({ ...env, FTP_REMOTE_DIR: "/../other" }),
    /FTP_REMOTE_DIR/,
  );
  assert.throws(
    () => connectionOptions({ ...env, FTP_USER: "user\r\ncommand" }),
    /control character/,
  );
  assert.equal(connectionOptions(env).access.secure, true);
  assert.equal(
    connectionOptions({ ...env, FTP_SECURE: "implicit" }).access.port,
    990,
  );
});

test("upload includes dotfiles, sends assets before HTML and never deletes remote files", async (t) => {
  const directory = await mkdtemp(join(tmpdir(), "obert-deploy-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  await mkdir(join(directory, "_next"));
  for (const path of ["index.html", ".htaccess", "_next/app.js"])
    await writeFile(join(directory, path), "fixture");
  const files = await uploadPlan(directory);
  assert.deepEqual(
    files.map((file) => file.path),
    ["_next/app.js", "index.html", ".htaccess"],
  );
  const uploads = [];
  // The fake client exposes only non-destructive methods; any deletion fails.
  await uploadFiles(
    {
      ensureDir: async () => {},
      uploadFrom: async (local, remote) => uploads.push([local, remote]),
      size: async () => Buffer.byteLength("fixture"),
    },
    files,
    "/website",
  );
  assert.deepEqual(
    uploads.map(([, remote]) => remote),
    ["/website/_next/app.js", "/website/index.html", "/website/.htaccess"],
  );
  await writeFile(join(directory, ".env.local"), "fixture");
  await assert.rejects(uploadPlan(directory), /private configuration/);
  await rm(join(directory, ".env.local"));
  await symlink(join(directory, "index.html"), join(directory, "linked.html"));
  await assert.rejects(uploadPlan(directory), /symbolic link/);
});

test("an incomplete export cannot be uploaded", async (t) => {
  const directory = await mkdtemp(join(tmpdir(), "obert-incomplete-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  await assert.rejects(uploadPlan(directory), /Missing out\/index.html/);
});

test("SFTP checks the server identity and uses the SFTP upload API", async () => {
  const key = Buffer.from("fixture server host key");
  const fingerprint =
    "SHA256:" +
    createHash("sha256").update(key).digest("base64").replace(/=+$/, "");
  assert.throws(
    () => connectionOptions({ ...env, FTP_PROTOCOL: "sftp" }),
    /SFTP_HOST_KEY_SHA256/,
  );
  const options = connectionOptions({
    ...env,
    FTP_PROTOCOL: "sftp",
    SFTP_HOST_KEY_SHA256: fingerprint,
  });
  assert.equal(options.access.port, 22);
  assert.equal(options.access.username, env.FTP_USER);
  assert.equal(options.access.hostVerifier(key), true);
  assert.equal(options.access.hostVerifier(Buffer.from("other server")), false);
  const uploads = [];
  await uploadFiles(
    {
      mkdir: async () => {},
      put: async (local, remote) => uploads.push(remote),
      stat: async () => ({ size: 7 }),
    },
    [{ localPath: "/tmp/fixture", path: "index.html", bytes: 7 }],
    "/website",
    "sftp",
  );
  assert.deepEqual(uploads, ["/website/index.html"]);
});

test("deployment refuses a missing destination and detects incomplete transfers", async () => {
  await assert.rejects(
    verifyDestination({ exists: async () => false }, "/wrong", "sftp"),
    /does not exist/,
  );
  await verifyDestination({ exists: async () => "d" }, "/website", "sftp");
  await assert.rejects(
    uploadFiles(
      { put: async () => {}, stat: async () => ({ size: 1 }) },
      [{ localPath: "/tmp/fixture", path: "index.html", bytes: 99 }],
      "/website",
      "sftp",
    ),
    /size mismatch/,
  );
});

test("required hidden web files survive the upload plan while desktop junk is excluded", async (t) => {
  const directory = await mkdtemp(join(tmpdir(), "obert-dotfiles-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  await mkdir(join(directory, ".well-known"));
  for (const path of [
    "index.html",
    ".htaccess",
    ".DS_Store",
    ".well-known/security.txt",
  ])
    await writeFile(join(directory, path), "fixture");
  const files = await uploadPlan(directory);
  assert.deepEqual(
    files.map((file) => file.path),
    [".well-known/security.txt", "index.html", ".htaccess"],
  );
});
