import { expect, test } from "@playwright/test";

test("Galerie blättert, schließt und gibt den Fokus zurück", async ({
  page,
}) => {
  await page.goto("/");
  const opener = page.getByRole("button", {
    name: "Regale in der Galerie öffnen",
  });
  await opener.click();
  const dialog = page.getByRole("dialog", {
    name: "Bildergalerie unseres Lagers",
  });
  await expect(dialog).toBeVisible();
  await expect(dialog.locator(".gallery-caption")).toHaveText("Regale3 / 7");
  await dialog
    .getByRole("button", { name: "Nächstes Bild", exact: true })
    .click();
  await expect(dialog.locator(".gallery-caption")).toHaveText(
    "Halle hinten4 / 7",
  );
  await page.keyboard.press("ArrowLeft");
  await expect(dialog.locator(".gallery-caption")).toHaveText("Regale3 / 7");
  await dialog.getByRole("button", { name: "Pavatex", exact: true }).click();
  await dialog
    .getByRole("button", { name: "Nächstes Bild", exact: true })
    .click();
  await expect(dialog.locator(".gallery-caption")).toHaveText(
    "Gesamtansicht1 / 7",
  );
  await dialog
    .getByRole("button", { name: "Vorheriges Bild", exact: true })
    .click();
  await expect(dialog.locator(".gallery-caption")).toHaveText("Pavatex7 / 7");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(opener).toBeFocused();
  await opener.click();
  await dialog.getByRole("button", { name: "Galerie schließen" }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});

test("Navigation funktioniert vom Unterseiten-Einstieg bis zum Kontakt", async ({
  page,
}, testInfo) => {
  await page.goto("/impressum/");
  if (testInfo.project.name === "mobile") {
    const menu = page.locator(".mobile-menu");
    await menu.locator("summary").click();
    await expect(menu).toHaveAttribute("open", "");
    await page
      .getByRole("navigation", { name: "Mobile Navigation" })
      .getByRole("link", { name: "Kontakt", exact: true })
      .click();
    await expect(menu).not.toHaveAttribute("open", "");
  } else {
    await page.locator(".header-contact").click();
  }
  await expect(page).toHaveURL(/\/#kontakt$/);
  await expect(page.locator("#kontakt")).toBeInViewport();
});

test("Startseite und Footer-Unterseiten passen auf schmale und breite Displays", async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/partner/",
      "/team/",
      "/agb/",
      "/datenschutz/",
      "/impressum/",
      "/haftungsausschluss/",
    ]) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
      await expect(page.locator("main")).toBeVisible();
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(overflow, `${path} at ${width}px`).toBe(false);
      const headerFits = await page
        .locator(".header-inner")
        .evaluate((header) => {
          const children = [...header.children].filter(
            (child) => getComputedStyle(child).display !== "none",
          );
          return children.every(
            (child) => child.getBoundingClientRect().right <= innerWidth,
          );
        });
      expect(headerFits, `Header at ${width}px`).toBe(true);
    }
  }
});

for (const [name, path] of [
  ["startseite", "/"],
  ["agb", "/agb/"],
]) {
  test(`Screenshot: ${name}`, async ({ page }) => {
    await page.goto(path);
    // Full-page screenshots must include images below the lazy-loading threshold.
    await page.evaluate(async () => {
      document.querySelectorAll("img").forEach((image) => {
        image.loading = "eager";
      });
      await Promise.all([...document.images].map((image) => image.decode()));
      await document.fonts.ready;
    });
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
  });
}

test("Bilder nutzen kleine Varianten und die Galerie lädt große Ansichten erst beim Öffnen", async ({
  page,
}) => {
  const requested = new Set<string>();
  page.on("request", (request) => {
    if (request.resourceType() === "image") requested.add(request.url());
  });
  await page.goto("/");
  const hero = page.locator(".hero-photo");
  await hero.evaluate(async (image) => {
    await (image as HTMLImageElement).decode();
  });
  const current = await hero.evaluate(
    (image) => (image as HTMLImageElement).currentSrc,
  );
  expect(current).toContain("/generated-images/");
  expect((await (await page.request.get(current)).body()).length).toBeLessThan(
    350_000,
  );
  expect([...requested].some((url) => /pavatex-.*-1920\.webp/.test(url))).toBe(
    false,
  );
  await page
    .getByRole("button", { name: "Pavatex in der Galerie öffnen" })
    .click();
  const large = page.locator(".gallery-stage > img");
  await large.evaluate(async (image) => {
    await (image as HTMLImageElement).decode();
  });
  expect(
    await large.evaluate((image) => (image as HTMLImageElement).currentSrc),
  ).toContain("/generated-images/");
  const widths = await page
    .locator(".gallery-thumbnails img")
    .evaluateAll((images) =>
      images.map((image) => image.getAttribute("srcset")),
    );
  expect(widths).toHaveLength(7);
  for (const srcSet of widths) expect(srcSet).toMatch(/-160\.webp 160w$/);
  expect(
    [...requested].filter((url) => /\/static\/.*\.(webp|png|jpe?g)/i.test(url)),
  ).toEqual([]);
});
