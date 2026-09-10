import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const homeSource = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");

 describe("contrato de conteúdo do portfólio", () => {
  it("mantém as mensagens comerciais e as seções solicitadas", () => {
    expect(homeSource).toContain("SITES • SISTEMAS • APLICATIVOS");
    expect(homeSource).toContain("Atendimento online para clientes no Brasil e em qualquer lugar do mundo.");
    expect(homeSource).toContain("Contar minha ideia");
    expect(homeSource).toContain("Ver referências");
    expect(homeSource).toContain('href="#depoimento"');
    expect(homeSource).toContain('href="#como-funciona"');
    expect(homeSource).toContain("DA SUA IDEIA AO PROJETO PRONTO.");
    expect(homeSource).toContain("O que uma cliente disse após receber o projeto.");
    expect(homeSource).toContain("Explicar minha ideia no WhatsApp");
    expect(homeSource).toContain("Cibelly Studio");
    expect(homeSource).toContain("https://cibellystudi-dxsgadjg.manus.space");
    expect(homeSource).toContain("cibelly-cover-hero_180f30b5.webp");
    expect(homeSource).toContain("Ver projeto");
    expect(homeSource).toContain("Criação de Sites Portfólio");
    expect(homeSource).toContain("Gestor de tráfego");
    expect(homeSource).toContain("Automação (WhatsApp, Telegram)");
    expect(homeSource).toContain("Dashboard Administrativo e Gerencial");
  });

  it("mantém a referência real e não exibe instruções antigas de interação", () => {
    expect(homeSource).toContain("Estou muito feliz com seu trabalho");
    expect(homeSource).toContain("IMG_4264_1c9561a9.PNG");
    expect(homeSource).toContain("IMG_4525_41182833.PNG");
    expect(homeSource).toContain("Dani Caye Beauty");
    expect(homeSource).toContain("Cibelly Studio");
    expect(homeSource).toContain("mobile-navigation");
    expect(homeSource).not.toMatch(/MOVA PARA INTERAGIR|DESLIZE PARA MOVIMENTAR|LIVE PROJECT/i);
  });
});
