import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = "http://127.0.0.1:4173";
const sizes = [
  { name: "mobile-small", width: 320, height: 720 },
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "tablet-landscape", width: 1024, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
];
const browser = await chromium.launch({ headless: true });
await mkdir("responsive-screenshots", { recursive: true });
const errors = [];
try {
  for (const size of sizes) {
    const page = await browser.newPage({
      viewport: { width: size.width, height: size.height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    page.on("pageerror", (error) => errors.push(size.name + ": " + error.message));
    try {
      await page.goto(base, { waitUntil: "domcontentloaded", timeout: 45000 });
      await page.locator("h1#hero-title").waitFor({ state: "visible" });
      const socials = page.locator(".floating-socials a");
      if (await socials.count() !== 2) throw new Error("Expected Instagram and WhatsApp buttons");
      const logo = page.locator(".site-header .brand-symbol");
      if (!(await logo.getAttribute("src"))?.includes("nexcode-n-mark.svg")) throw new Error("Wrong branding symbol");
      await logo.evaluate(async (image) => {
        if (!image.complete) await new Promise((resolve) => image.addEventListener("load", resolve, { once: true }));
        if (image.naturalWidth < 50) throw new Error("Branding logo did not load");
      });
      const theme = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--mineral").trim());
      if (theme !== "#090909") throw new Error("Brand palette not monochrome: " + theme);
      const ig = page.locator(".floating-instagram");
      if (!(await ig.getAttribute("href"))?.includes("instagram.com/nexcode_systems")) throw new Error("Wrong Instagram link");
      for (const selector of [".floating-instagram", ".floating-whatsapp"]) {
        const box = await page.locator(selector).boundingBox();
        if (!box || box.x < 0 || box.y < 0 || box.x + box.width > size.width + 2 || box.y + box.height > size.height + 2)
          throw new Error(selector + " is outside the viewport");
      }
      const widths = await page.evaluate(() => ({
        viewport: window.innerWidth,
        document: document.documentElement.scrollWidth,
        body: document.body.scrollWidth,
      }));
      if (widths.document > widths.viewport + 4) throw new Error("Horizontal overflow: " + JSON.stringify(widths));
      const menu = page.locator(".menu-toggle");
      if (size.width <= 1100) {
        if (!(await menu.isVisible())) throw new Error("Mobile/tablet menu hidden");
        await menu.click();
        if (await menu.getAttribute("aria-expanded") !== "true") throw new Error("Menu failed to open");
        const nav = page.locator("#mobile-navigation");
        try {
          await nav.waitFor({ state: "visible", timeout: 1500 });
        } catch {
          const details = await nav.evaluate((node) => ({
            classes: node.className,
            ariaHidden: node.getAttribute("aria-hidden"),
            inert: node.hasAttribute("inert"),
            computed: {
              display: getComputedStyle(node).display,
              visibility: getComputedStyle(node).visibility,
              opacity: getComputedStyle(node).opacity,
              position: getComputedStyle(node).position,
              transform: getComputedStyle(node).transform,
            },
            bounding: node.getBoundingClientRect().toJSON(),
          }));
          throw new Error("Opened menu not visible: " + JSON.stringify(details));
        }
        await nav.locator('a[href="#projetos"]').click();
        if (await menu.getAttribute("aria-expanded") !== "false") throw new Error("Menu did not close on navigation");
      } else if (await menu.isVisible()) {
        throw new Error("Mobile menu should be hidden on desktop");
      }
      const josyCard = page.locator(".project-card").filter({ hasText: "Josyenne Rodrigues Nails" });
      if (await josyCard.count() !== 1) throw new Error("Josyenne Rodrigues card missing or duplicated");
      const josyUrl = await josyCard.locator(".project-card-link").getAttribute("href");
      if (josyUrl !== "https://site-josy-two.vercel.app/") throw new Error("Josyenne website URL incorrect: " + josyUrl);
      const spaCard = page.locator(".project-card").filter({ hasText: "Le Jardin Spa" });
      if (await spaCard.count() !== 1) throw new Error("Le Jardin Spa card missing or repeated");
      if (!(await spaCard.locator('.project-card-link').getAttribute('href'))?.includes('www.lejardimspa.site/')) throw new Error("Le Jardin Spa link incorrect");
      await page.locator(".project-card").first().scrollIntoViewIfNeeded();
      await page.waitForFunction(() => {
        const firstImage = document.querySelector(".project-card img");
        return firstImage instanceof HTMLImageElement && firstImage.complete && firstImage.naturalWidth > 0;
      }, null, { timeout: 8000 });
      const firstCard = await page.locator(".project-card").first().boundingBox();
      if (!firstCard || firstCard.width < 150) throw new Error("Project card collapsed");
      await page.screenshot({ path: `responsive-screenshots/${size.name}.png`, fullPage: false });
      console.log("PASS", size.name, JSON.stringify(widths), "firstCardWidth", Math.round(firstCard.width));
    } catch (error) {
      errors.push(size.name + ": " + String(error));
      await page.screenshot({ path: `responsive-screenshots/${size.name}-failed.png` }).catch(() => {});
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
if (errors.length) {
  console.error("RESPONSIVE ISSUES\n" + errors.join("\n"));
  process.exitCode = 1;
}
