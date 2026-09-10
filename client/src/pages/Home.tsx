/**
 * Direção visual: Museu de Movimento — minimalismo editorial, branco calcário,
 * tipografia ampla e um avatar reativo como peça protagonista.
 */
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  CircleArrowDown,
  Code2,
  Layers3,
  MessageCircle,
  Menu,
  MoveDownRight,
  MousePointer2,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/5575999445156";

const projectData = [
  {
    number: "01",
    title: "Shine Brazilian Salon",
    category: "Site profissional",
    description:
      "Site em português simples para apresentar o salão, divulgar seus serviços e facilitar o contato com novas clientes.",
    image: "/assets/shine-editorial-material.png",
    url: "https://www.shinebraziliansalon.com.au",
    palette: "sand",
    notes: ["Direção visual", "Arquitetura de páginas", "Experiência de agendamento"],
  },
  {
    number: "02",
    title: "Dani Caye Beauty",
    category: "Site personalizado",
    description:
      "Site claro e elegante para apresentar serviços, portfólio e caminhos simples para novas reservas.",
    image: "/assets/dani-editorial-material.png",
    url: "https://www.danicayebeauty.com/",
    palette: "rose",
    notes: ["Design editorial", "Jornada de contato", "Vitrine de serviços"],
  },
  {
    number: "03",
    title: "Cibelly Studio",
    category: "Site de beleza e atendimento",
    description:
      "Experiência premium para apresentar serviços, fortalecer a marca e facilitar o agendamento online.",
    image: "/assets/cibelly-cover-hero.webp",
    url: "https://cibellystudi-dxsgadjg.manus.space",
    palette: "clay",
    notes: ["Direção de marca", "Serviços e preços", "Agendamento online"],
  },
];

const specialties = [
  {
    index: "01",
    title: "Sites e presença digital",
    description: "Para apresentar sua marca, seus serviços e seus produtos de forma clara e profissional.",
    icon: <Layers3 aria-hidden="true" />,
    items: ["Criação de Sites Portfólio", "Criação de E-Commerce", "Criação de Cardápio Digital", "Criação de Loja Virtual"],
  },
  {
    index: "02",
    title: "Automação e conexões",
    description: "Para aproximar clientes, reduzir tarefas repetitivas e conectar ferramentas do seu negócio.",
    icon: <MessageCircle aria-hidden="true" />,
    items: ["Gestor de tráfego", "Automação (WhatsApp, Telegram)", "Integração de API"],
  },
  {
    index: "03",
    title: "Gestão e sistemas",
    description: "Ferramentas para acompanhar números, organizar processos e tomar decisões com mais clareza.",
    icon: <Code2 aria-hidden="true" />,
    items: ["Painel de Gestão Financeira Empresarial", "Dashboard Administrativo e Gerencial", "Sistemas e aplicativos sob medida"],
  },
];

function useAvatarTracking() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame = 0;

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.14;
      current.current.y += (target.current.y - current.current.y) * 0.14;

      const node = avatarRef.current;
      if (node) {
        node.style.setProperty("--track-x", `${current.current.x}`);
        node.style.setProperty("--track-y", `${current.current.y}`);
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      target.current = {
        x: Math.max(-1, Math.min(1, (event.clientX / window.innerWidth - 0.5) * 2)),
        y: Math.max(-1, Math.min(1, (event.clientY / window.innerHeight - 0.5) * 2)),
      };
    };

    const reset = () => {
      target.current = { x: 0, y: 0 };
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", reset);
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", reset);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const setTrackingPoint = (clientX: number, clientY: number, strength = 1) => {
    target.current = {
      x: Math.max(-1, Math.min(1, (clientX / window.innerWidth - 0.5) * 2 * strength)),
      y: Math.max(-1, Math.min(1, (clientY / window.innerHeight - 0.5) * 2 * strength)),
    };
  };

  const resetTracking = () => {
    target.current = { x: 0, y: 0 };
  };

  return { avatarRef, setTrackingPoint, resetTracking };
}

export default function Home() {
  const { avatarRef, setTrackingPoint, resetTracking } = useAvatarTracking();
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    const start = touchStart.current;
    const touch = event.touches[0];
    if (!start || !touch) return;

    const horizontalIntent = Math.abs(touch.clientX - start.x) > Math.abs(touch.clientY - start.y);
    if (horizontalIntent) setTrackingPoint(touch.clientX, touch.clientY, 1.16);
  };

  const fadeUp = {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.72, ease: [0.23, 1, 0.32, 1] },
  } as const;

  return (
    <div className="portfolio-shell">
      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`} aria-label="Navegação principal">
        <a className="brand-lockup" href="#inicio" aria-label="Ir para o início" onClick={() => setMenuOpen(false)}>
          <img
            src="/assets/brand-mark-mineral.png"
            alt="Símbolo geométrico da marca"
            className="brand-symbol"
          />
          <span className="brand-wordmark">NEXCODE</span>
        </a>
        <nav className="header-nav" aria-label="Seções">
          <a href="#especialidades">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#depoimento">Depoimento</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <span>Vamos conversar</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="mobile-navigation" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-label="Navegação móvel">
          <a href="#especialidades" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
          <a href="#depoimento" onClick={() => setMenuOpen(false)}>Referências</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          <a className="mobile-menu-contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            <span>Vamos conversar</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main>
        <section
          id="inicio"
          className="hero-section"
          aria-labelledby="hero-title"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={resetTracking}
          onTouchCancel={resetTracking}
        >
          <div className="hero-rail" aria-hidden="true">
            <span>01</span>
            <i />
            <span>PORTFÓLIO</span>
          </div>
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            <span className="pulse-dot" />
            SITES • SISTEMAS • APLICATIVOS
          </motion.div>
          <motion.h1
            id="hero-title"
            className="hero-title"
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            DIGITAL <em>PARA</em>
            <br />
            SER LEMBRADO.
          </motion.h1>
          <motion.div className="hero-intro-copy" {...fadeUp}>
            <p>Crio sites, sistemas e aplicativos sob medida, sem complicação. Você me explica sua ideia e eu cuido de todo o processo até a entrega.</p>
            <span>Atendimento online para clientes no Brasil e em qualquer lugar do mundo.</span>
          </motion.div>

          <div className="hero-avatar-stage" aria-label="Avatar interativo do desenvolvedor">
            <div className="avatar-orbit orbit-one" aria-hidden="true" />
            <div className="avatar-orbit orbit-two" aria-hidden="true" />
            <div className="avatar-track" ref={avatarRef}>
              <div className="avatar-shadow" aria-hidden="true" />
              <div className="avatar-head-window">
                <img
                  className="avatar-image"
                  src="/assets/avatar-head-cartoon-user.png"
                  alt="Cabeça 3D estilizada do desenvolvedor"
                />
                <div className="eye-tracker" aria-hidden="true">
                  <span className="eye-pupil eye-pupil-left" />
                  <span className="eye-pupil eye-pupil-right" />
                </div>
              </div>
              <div className="avatar-glint" aria-hidden="true" />
            </div>
          </div>
          <p className="hero-signature">NEXCODE SYSTEMS</p>

          <motion.div
            className="hero-bottomline"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p>
              Sites, sistemas e aplicativos com <strong>presença, performance e precisão.</strong>
            </p>
            <div className="hero-actions">
              <a className="hero-projects-cta" href="#projetos">
                <span>Ver meus projetos</span>
                <ArrowDownRight aria-hidden="true" />
              </a>
              <a className="hero-reference-cta" href="#depoimento">
                <span>Ver referências</span>
                <ArrowDownRight aria-hidden="true" />
              </a>
              <a className="primary-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <span>Contar minha ideia</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </section>

        <section id="especialidades" className="intro-section" aria-labelledby="intro-title">
          <div className="section-rail" aria-hidden="true">
            <span>02</span>
            <i />
            <span>O QUE EU FAÇO</span>
          </div>
          <motion.div className="intro-heading" {...fadeUp}>
            <p className="eyebrow">PRESENÇA QUE FUNCIONA</p>
            <h2 id="intro-title">
              Design e código para negócios que não querem passar despercebidos.
            </h2>
          </motion.div>
          <motion.p className="intro-statement" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            Cada projeto começa com clareza de objetivo e termina em uma experiência que parece natural para quem usa — e impossível de ignorar para quem vê.
          </motion.p>

          <div className="specialty-list">
            {specialties.map((item, index) => (
              <motion.article
                className="specialty-item"
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="specialty-index">{item.index}</div>
                <div className="specialty-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul className="specialty-services">
                    {item.items.map((service) => <li key={service}>{service}</li>)}
                  </ul>
                </div>
                <MoveDownRight className="specialty-arrow" aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="process-section" aria-labelledby="process-title">
          <div className="section-rail" aria-hidden="true">
            <span>03</span>
            <i />
            <span>COMO FUNCIONA</span>
          </div>
          <motion.div className="process-heading" {...fadeUp}>
            <p className="eyebrow">SEM COMPLICAÇÃO</p>
            <h2 id="process-title">DA SUA IDEIA AO PROJETO PRONTO.</h2>
          </motion.div>
          <div className="process-list">
            <article><span>01</span><h3>Você conta sua ideia</h3><p>Você explica o que precisa, mesmo que ainda esteja no começo.</p></article>
            <article><span>02</span><h3>Eu organizo o projeto</h3><p>Eu transformo sua ideia em um caminho claro para tirar tudo do papel.</p></article>
            <article><span>03</span><h3>Você acompanha</h3><p>Você acompanha as etapas e participa das decisões importantes.</p></article>
            <article><span>04</span><h3>Tudo pronto</h3><p>Você recebe a solução funcionando e pronta para usar.</p></article>
          </div>
        </section>

        <section id="projetos" className="projects-section" aria-labelledby="projects-title">
          <div className="projects-heading">
            <div className="section-rail section-rail-dark" aria-hidden="true">
              <span>04</span>
              <i />
              <span>SELEÇÃO</span>
            </div>
            <motion.div {...fadeUp}>
              <p className="eyebrow eyebrow-light">PROJETOS SELECIONADOS</p>
              <h2 id="projects-title">Veja projetos reais sem complicação.</h2>
            </motion.div>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
              Escolha um projeto, veja o resultado e abra o site quando quiser.
            </motion.p>
          </div>

          <div className="project-list">
            {projectData.map((project, index) => (
              <motion.article
                className={`project-card project-${project.palette}`}
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
              >
                <a className="project-visual" href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`}>
                  <div className="project-browser" aria-hidden="true">
                    <div className="browser-chrome"><span /><span /><span /></div>
                    <div className="project-screen">
                      <img src={project.image} alt="" />
                      <div className="screen-copy">
                        <span>{project.number} / PROJETO NO AR</span>
                        <strong>{project.title}</strong>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="project-card-copy">
                  <div className="project-card-meta">
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <a className="project-card-link" href={project.url} target="_blank" rel="noreferrer">
                    Ver projeto <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="depoimento" className="feedback-section" aria-labelledby="feedback-title">
          <div className="section-rail" aria-hidden="true">
            <span>05</span>
            <i />
            <span>DEPOIMENTO</span>
          </div>
          <motion.div className="feedback-layout reference-layout" {...fadeUp}>
            <div>
              <p className="eyebrow">REFERÊNCIA REAL · MARA HAIR</p>
              <h2 id="feedback-title">O que uma cliente disse após receber o projeto.</h2>
            </div>
            <figure className="feedback-quote">
              <blockquote>“Estou muito feliz com seu trabalho”</blockquote>
              <figcaption><span>—</span> Mara Hair</figcaption>
            </figure>
            <div className="reference-media">
              <figure className="reference-shot">
                <img src="/assets/reference-mara-hair.png" alt="Captura de tela de uma conversa de WhatsApp com a cliente Mara Hair" />
                <figcaption>Mensagem recebida após a entrega · Mara Hair</figcaption>
              </figure>
              <figure className="reference-shot">
                <img src="/assets/IMG_4264.PNG" alt="Captura de tela de uma conversa de WhatsApp com a cliente Dani Caye Beauty, incluindo o link do projeto e mensagens de feedback" />
                <figcaption>Feedback visual do projeto · Dani Caye Beauty</figcaption>
              </figure>
              <figure className="reference-shot">
                <img src="/assets/IMG_4525.PNG" alt="Captura de tela de mensagens de voz e feedback da cliente Cibelly sobre o projeto entregue" />
                <figcaption>Feedback visual do projeto · Cibelly Studio</figcaption>
              </figure>
            </div>
          </motion.div>
        </section>

        <section id="duvidas" className="faq-section" aria-labelledby="faq-title">
          <div className="section-rail" aria-hidden="true">
            <span>06</span>
            <i />
            <span>DÚVIDAS</span>
          </div>
          <motion.div className="faq-layout" {...fadeUp}>
            <div>
              <p className="eyebrow">ANTES DE COMEÇAR</p>
              <h2 id="faq-title">Dúvidas comuns, respostas simples.</h2>
            </div>
            <Accordion type="single" collapsible className="faq-accordion">
              <AccordionItem value="tecnologia"><AccordionTrigger>Preciso entender de tecnologia?</AccordionTrigger><AccordionContent>Não. Você só precisa explicar o que deseja; eu cuido da parte técnica.</AccordionContent></AccordionItem>
              <AccordionItem value="materiais"><AccordionTrigger>Preciso ter textos e imagens prontos?</AccordionTrigger><AccordionContent>Não necessariamente. Podemos organizar o que já existe e definir juntos o que ainda falta.</AccordionContent></AccordionItem>
              <AccordionItem value="acompanhamento"><AccordionTrigger>Como funciona o acompanhamento?</AccordionTrigger><AccordionContent>Você acompanha cada etapa com explicações claras e aprova as decisões importantes.</AccordionContent></AccordionItem>
              <AccordionItem value="outros-paises"><AccordionTrigger>Você atende outros países?</AccordionTrigger><AccordionContent>Sim. O atendimento é online para clientes no Brasil e em qualquer lugar do mundo.</AccordionContent></AccordionItem>
              <AccordionItem value="orcamento"><AccordionTrigger>Como funciona o orçamento?</AccordionTrigger><AccordionContent>Você conta sua ideia e eu entendo o que precisa para preparar uma proposta clara e personalizada.</AccordionContent></AccordionItem>
            </Accordion>
          </motion.div>
        </section>

        <section id="contato" className="contact-section" aria-labelledby="contact-title">
          <img className="contact-art" src="/assets/contact-orbit-sculpture.png" alt="Escultura abstrata de anéis interligados" />
          <div className="section-rail" aria-hidden="true">
            <span>07</span>
            <i />
            <span>CONTATO</span>
          </div>
          <motion.div className="contact-content" {...fadeUp}>
            <p className="eyebrow">SE A IDEIA IMPORTA, O ACABAMENTO TAMBÉM.</p>
            <h2 id="contact-title">Vamos criar algo que a sua marca vai querer assinar.</h2>
            <p className="contact-description">Você não precisa chegar com tudo definido. Conte-me sobre o seu negócio e eu ajudo a transformar sua ideia em uma solução profissional.</p>
            <a className="contact-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <span>Explicar minha ideia no WhatsApp</span>
              <MessageCircle aria-hidden="true" />
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand-lockup" href="#inicio" aria-label="Voltar ao início">
          <img src="/assets/brand-mark-mineral.png" alt="" className="brand-symbol" />
          <span className="brand-wordmark">NEXCODE</span>
        </a>
        <p>Sites · Sistemas · Aplicativos</p>
        <p>© {new Date().getFullYear()} — Construído com precisão.</p>
      </footer>

      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp">
        <MessageCircle aria-hidden="true" />
      </a>
      <button
        className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Subir ao topo"
      >
        <ArrowUp aria-hidden="true" />
        <span>Topo</span>
      </button>
    </div>
  );
}
