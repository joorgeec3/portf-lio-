import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const url = "https://www.lejardimspa.site/";
const output = "client/public/assets/project-hero-le-jardin-spa.webp";
await mkdir("client/public/assets", { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({
    viewport: { width: 1365, height: 768 },
    deviceScaleFactor: 1,
    locale: "pt-BR",
    reducedMotion: "reduce",
  });
  let response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  if (!response || response.status() >= 400) throw new Error("Site returned HTTP " + response?.status());
  await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(2500);
  const mainText = (await page.locator("body").innerText()).trim();
  if (mainText.length < 50) throw new Error("Página sem conteúdo suficiente: possível bloqueio");
  if (/vercel authentication|deployment protection|access denied|not found|404|domain configuration/i.test((await page.title()) + " " + mainText.slice(0,200))) {
    throw new Error("A página parece protegida, indisponível ou incorreta");
  }
  await page.addStyleTag({ content: "html { scrollbar-width: none !important } ::-webkit-scrollbar { display:none !important }" });
  const shot = await page.screenshot({ type: "png", animations: "disabled" });
  await sharp(shot).webp({ quality: 84, effort: 6 }).toFile(output);
  const dims = await sharp(output).metadata();
  if ((dims.width ?? 0) < 900 || (dims.height ?? 0) < 400) throw new Error("Captura com dimensão inesperada");
  console.log("CAPTURED", output, dims.width, dims.height, "bytes", dims.size, "title", await page.title());
} finally {
  await browser.close();
}
