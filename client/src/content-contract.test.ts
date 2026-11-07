import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const homeSource = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");
const siteCss = readFileSync(resolve(process.cwd(), "client/src/index.css"), "utf8");
const indexHtml = readFileSync(resolve(process.cwd(), "client/index.html"), "utf8");

 describe("contrato de conteúdo do portfólio", () => {
  it("mantém as mensagens comerciais e as seções solicitadas", () => {
    expect(homeSource).toContain("SITES • SISTEMAS • APLICATIVOS");
    expect(homeSource).toContain("Atendimento online para clientes no Brasil e em qualquer lugar do mundo.");
    expect(homeSource).toContain("Contar minha ideia");
    expect(homeSource).toContain("WHATSAPP_MESSAGE");
    expect(homeSource).toContain("Português de Portugal");
    expect(homeSource).toContain("Francês");
    expect(homeSource).toContain("Alemão");
    expect(homeSource).toContain("Ver serviços");
    expect(homeSource).toContain("Ver feedbacks");
    expect(homeSource).toContain('href="#depoimento"');
    expect(homeSource).toContain('href="#como-funciona"');
    expect(homeSource).toContain("DA SUA IDEIA AO PROJETO PRONTO.");
    expect(homeSource).toContain("O que uma cliente disse após receber o projeto.");
    expect(homeSource).toContain("Explicar minha ideia no WhatsApp");
    expect(homeSource).toContain("Cibelly Studio");
    expect(homeSource).toContain("https://cibellystudi-dxsgadjg.manus.space");
    expect(homeSource).toContain("cibelly-cover-hero.webp");
    expect(homeSource).toContain("Ver projeto");
    expect(homeSource).toContain("Criação de Sites Portfólio");
    expect(homeSource).toContain("Gestão de tráfego pago");
    expect(homeSource).toContain("Criação de lojas virtuais");
    expect(homeSource).toContain("Atendimento inteligente com IA");
    expect(homeSource).toContain("https://www.instagram.com/nexcode_systems/");
    expect(homeSource).toContain('className="floating-socials"');
    expect(homeSource).toContain('className="floating-instagram"');
    expect(homeSource).toContain("Automação (WhatsApp, Telegram)");
    expect(homeSource).toContain("Dashboard Administrativo e Gerencial");
  });

  it("mantém a referência real e não exibe instruções antigas de interação", () => {
    expect(homeSource).toContain("Estou muito feliz com seu trabalho");
    expect(existsSync(resolve(process.cwd(), "client/public/assets/IMG_4264.PNG"))).toBe(true);
    expect(existsSync(resolve(process.cwd(), "client/public/assets/IMG_4525.PNG"))).toBe(true);
    expect(homeSource).toContain("Dani Caye Beauty");
    expect(homeSource).not.toContain("Daniana · Austrália");
    for (const file of ["feedback-daniana.jpeg", "feedback-mara-hair.jpeg", "feedback-cibelly.jpeg", "feedback-marian-travel.webp", "feedback-mariane-brito.webp"]) {
      expect(homeSource).toContain(file);
    }
    expect(homeSource).toContain("Cibelly Studio");
    expect(homeSource).toContain("mobile-navigation");
    expect(homeSource).toContain("language-picker");
    expect(homeSource).not.toMatch(/MOVA PARA INTERAGIR|DESLIZE PARA MOVIMENTAR/i);
    expect(homeSource).toContain('projectLive: "LIVE PROJECT"');
  });
  it("exibe doze projetos sem Gestão Multinichos e mostra prévias em tela de computador", () => {
    const cards = homeSource.match(/number: "\d{2}", title:/g) ?? [];
    expect(cards).toHaveLength(12);
    for (const url of [
      "https://marianespa-crcp32cn.manus.space/",
      "https://mariantrip-ynjer5ku.manus.space/",
      "https://jarlene-chaves-beauty.vercel.app/",
      "https://hair-brazil-extensions-two.vercel.app/",
      "https://site-sheila-wjra.vercel.app",
      "https://www.allintegrative.site/",
      "https://www.lejardimspa.site/",
    ]) {
      expect(homeSource).toContain(url);
    }
    expect(homeSource).not.toContain("Gestão Multinichos");
    expect(homeSource).not.toContain("project-appcrm.svg");
    expect(homeSource).toContain("image.thum.io/get/noanimate");
    expect(homeSource).toContain("s0.wp.com/mshots/v1");
    expect(homeSource).toContain("projectGroups.map");
    for (const group of ["beauty", "travel", "health"]) expect(homeSource).toContain(`group: "${group}"`);
    expect(homeSource).toContain("ProjectCoverImage");
    expect(homeSource).toContain('preferLocal={project.coverMode === "local"}');
    expect(homeSource).toContain('coverPath={project.coverPath}');
    for (const file of [
      "project-hero-all-integrative.webp",
      "project-hero-inslandtour.webp",
      "project-hero-jarlene-chaves.webp",
      "project-hero-le-jardin-spa.webp",
    ]) expect(homeSource).toContain(file);
    expect(homeSource).toContain('title: "Jarlene Chaves Beauty", group: "beauty"');
    expect(homeSource).toContain("/assets/project-jarlene-chaves.svg");
    const localCoverCount = (homeSource.match(/coverMode: "local"/g) ?? []).length;
    expect(localCoverCount).toBe(4);
    expect(homeSource).toContain('title: "Le Jardin Spa", group: "beauty"');
    expect(existsSync(resolve(process.cwd(), "client/public/assets/project-le-jardin-spa.svg"))).toBe(true);
    expect((homeSource.match(/project12Category:/g) ?? [])).toHaveLength(5);
  });

  it("mantém a nova identidade preta e branca e utiliza apenas o N como símbolo", () => {
    expect(homeSource.match(/\/assets\/nexcode-n-mark\.svg/g)).toHaveLength(2);
    expect(indexHtml).toContain("/assets/nexcode-n-favicon.svg");
    expect(existsSync(resolve(process.cwd(), "client/public/assets/nexcode-n-mark.svg"))).toBe(true);
    expect(existsSync(resolve(process.cwd(), "client/public/assets/nexcode-n-favicon.svg"))).toBe(true);
    expect(siteCss).toContain("--mineral: #090909;");
    expect(siteCss).toContain("--chalk: #ffffff;");
    expect(siteCss).toContain(".floating-instagram { background: #111111; }");
    expect(siteCss).not.toContain("#173c36");
    expect(siteCss).not.toContain("#3c5548");
  });

});
