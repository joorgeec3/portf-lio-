import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const sites = [
  { name: "ALL Integrative", url: "https://www.allintegrative.site/", file: "project-hero-all-integrative.webp" },
  { name: "InslandTour", url: "https://fuzzy-friend-connect.lovable.app", file: "project-hero-inslandtour.webp" },
  { name: "Jarlene Chaves Beauty", url: "https://jarlene-chaves-beauty.vercel.app/", file: "project-hero-jarlene-chaves.webp" },
];

const outputDir = "client/public/assets";
await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
let count = 0;
try {
  for (const site of sites) {
    const page = await browser.newPage({
      viewport: { width: 1365, height: 768 },
      deviceScaleFactor: 1,
      locale: "pt-BR",
      reducedMotion: "reduce",
    });
    try {
      const response = await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 60000 });
      if (!response || response.status() >= 400) throw new Error("HTTP " + response?.status());
      await page.waitForLoadState("networkidle", { timeout: 18000 }).catch(() => {});
      await page.waitForTimeout(2400);
      const bodyText = await page.locator("body").innerText();
      if (bodyText.trim().length < 30) throw new Error("Página sem texto suficiente, possível bloqueio de captura");
      // screenshot do próprio viewport: nunca inclui abas, endereço ou barras do sistema operacional.
      await page.addStyleTag({ content: "html { scrollbar-width: none !important; } ::-webkit-scrollbar { display: none !important; }" });
      const screenshot = await page.screenshot({ type: "png", animations: "disabled" });
      const outPath = path.join(outputDir, site.file);
      await sharp(screenshot).webp({ quality: 82, effort: 6 }).toFile(outPath);
      console.log("Captured", site.name, "to", outPath, "text-length:", bodyText.length);
      count += 1;
    } catch (e) {
      console.error("Capture failed for", site.name, site.url, e);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
if (!count) process.exitCode = 1;
