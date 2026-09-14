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

const LANGUAGE_OPTIONS = [
  { value: "pt-BR", label: "Português" },
  { value: "pt-PT", label: "Português de Portugal" },
  { value: "en", label: "Inglês" },
  { value: "fr", label: "Francês" },
  { value: "de", label: "Alemão" },
] as const;
type LanguageCode = (typeof LANGUAGE_OPTIONS)[number]["value"];
type Copy = Record<string, string>;

const COPY: Record<LanguageCode, Copy> = {
  "pt-BR": {
    navServices: "Serviços", navProjects: "Projetos", navFeedback: "Depoimento", navProcess: "Como funciona", navContact: "Contato",
    chooseLanguage: "Escolher idioma", letsTalk: "Vamos conversar", openMenu: "Abrir menu", closeMenu: "Fechar menu", mobileReferences: "Referências",
    heroKicker: "SITES • SISTEMAS • APLICATIVOS", heroWord1: "DIGITAL", heroWord2: "PARA", heroWord3: "SER LEMBRADO.",
    heroIntro: "Crio sites, sistemas e aplicativos sob medida, sem complicação. Você me explica sua ideia e eu cuido de todo o processo até a entrega.",
    heroOnline: "Atendimento online para clientes no Brasil e em qualquer lugar do mundo.", heroSignature: "NEXCODE SYSTEMS",
    heroBottom: "Sites, sistemas e aplicativos com", heroBottomStrong: "presença, performance e precisão.",
    ctaServices: "Ver serviços", ctaProjects: "Ver meus projetos", ctaReferences: "Ver referências", ctaIdea: "Contar minha ideia",
    railPortfolio: "PORTFÓLIO", railWhat: "O QUE EU FAÇO", railProcess: "COMO FUNCIONA", railSelection: "SELEÇÃO", railFeedback: "DEPOIMENTO", railQuestions: "DÚVIDAS", railContact: "CONTATO",
    presenceEyebrow: "PRESENÇA QUE FUNCIONA", introTitle: "Design e código para negócios que não querem passar despercebidos.", introStatement: "Cada projeto começa com clareza de objetivo e termina em uma experiência que parece natural para quem usa — e impossível de ignorar para quem vê.",
    specialty1Title: "Sites e presença digital", specialty1Desc: "Para apresentar sua marca, seus serviços e seus produtos de forma clara e profissional.", specialty1a: "Criação de Sites Portfólio", specialty1b: "Criação de E-Commerce", specialty1c: "Criação de Cardápio Digital", specialty1d: "Criação de Loja Virtual",
    specialty2Title: "Automação e conexões", specialty2Desc: "Para aproximar clientes, reduzir tarefas repetitivas e conectar ferramentas do seu negócio.", specialty2a: "Gestor de tráfego", specialty2b: "Automação (WhatsApp, Telegram)", specialty2c: "Integração de API",
    specialty3Title: "Gestão e sistemas", specialty3Desc: "Ferramentas para acompanhar números, organizar processos e tomar decisões com mais clareza.", specialty3a: "Painel de Gestão Financeira Empresarial", specialty3b: "Dashboard Administrativo e Gerencial", specialty3c: "Sistemas e aplicativos sob medida",
    processEyebrow: "SEM COMPLICAÇÃO", processTitle: "DA SUA IDEIA AO PROJETO PRONTO.", step1Title: "Você conta sua ideia", step1Desc: "Você explica o que precisa, mesmo que ainda esteja no começo.", step2Title: "Eu organizo o projeto", step2Desc: "Eu transformo sua ideia em um caminho claro para tirar tudo do papel.", step3Title: "Você acompanha", step3Desc: "Você acompanha as etapas e participa das decisões importantes.", step4Title: "Tudo pronto", step4Desc: "Você recebe a solução funcionando e pronta para usar.",
    selectionEyebrow: "PROJETOS SELECIONADOS", projectsTitle: "Veja projetos reais sem complicação.", projectsIntro: "Escolha um projeto, veja o resultado e abra o site quando quiser.", projectLive: "PROJETO NO AR", viewProject: "Ver projeto",
    project1Category: "Site profissional", project1Desc: "Site em português simples para apresentar o salão, divulgar seus serviços e facilitar o contato com novas clientes.", project2Category: "Site personalizado", project2Desc: "Site claro e elegante para apresentar serviços, portfólio e caminhos simples para novas reservas.", project3Category: "Site de beleza e atendimento", project3Desc: "Experiência premium para apresentar serviços, fortalecer a marca e facilitar o agendamento online.",
    realReference: "REFERÊNCIA REAL · MARA HAIR", feedbackTitle: "O que uma cliente disse após receber o projeto.", quote: "“Estou muito feliz com seu trabalho”", maraCaption: "Mensagem recebida após a entrega · Mara Hair", daniCaption: "Feedback visual do projeto · Dani Caye Beauty", cibellyCaption: "Feedback visual do projeto · Cibelly Studio",
    questionsEyebrow: "ANTES DE COMEÇAR", faqTitle: "Dúvidas comuns, respostas simples.", faq1q: "Preciso entender de tecnologia?", faq1a: "Não. Você só precisa explicar o que deseja; eu cuido da parte técnica.", faq2q: "Preciso ter textos e imagens prontos?", faq2a: "Não necessariamente. Podemos organizar o que já existe e definir juntos o que ainda falta.", faq3q: "Como funciona o acompanhamento?", faq3a: "Você acompanha cada etapa com explicações claras e aprova as decisões importantes.", faq4q: "Você atende outros países?", faq4a: "Sim. O atendimento é online para clientes no Brasil e em qualquer lugar do mundo.", faq5q: "Como funciona o orçamento?", faq5a: "Você conta sua ideia e eu entendo o que precisa para preparar uma proposta clara e personalizada.",
    contactEyebrow: "SE A IDEIA IMPORTA, O ACABAMENTO TAMBÉM.", contactTitle: "Vamos criar algo que a sua marca vai querer assinar.", contactDesc: "Você não precisa chegar com tudo definido. Conte-me sobre o seu negócio e eu ajudo a transformar sua ideia em uma solução profissional.", contactCta: "Explicar minha ideia no WhatsApp", footerServices: "Sites · Sistemas · Aplicativos", footerBuilt: "Construído com precisão.", brandAlt: "Símbolo geométrico da marca", avatarAlt: "Cabeça 3D estilizada do desenvolvedor", contactAlt: "Escultura abstrata de anéis interligados", maraAlt: "Captura de tela de uma conversa de WhatsApp com a cliente Mara Hair", daniAlt: "Captura de tela de uma conversa de WhatsApp com a cliente Dani Caye Beauty, incluindo o link do projeto e mensagens de feedback", cibellyAlt: "Captura de tela de mensagens de voz e feedback da cliente Cibelly sobre o projeto entregue",
  },
  "pt-PT": {
    navServices: "Serviços", navProjects: "Projetos", navFeedback: "Testemunho", navProcess: "Como funciona", navContact: "Contacto", chooseLanguage: "Escolher idioma", letsTalk: "Vamos conversar", openMenu: "Abrir menu", closeMenu: "Fechar menu", mobileReferences: "Referências",
    heroKicker: "SITES • SISTEMAS • APLICAÇÕES", heroWord1: "DIGITAL", heroWord2: "PARA", heroWord3: "SER LEMBRADO.", heroIntro: "Crio sites, sistemas e aplicações à medida, sem complicações. Explica-me a sua ideia e trato de todo o processo até à entrega.", heroOnline: "Atendimento online para clientes no Brasil e em qualquer parte do mundo.", heroSignature: "NEXCODE SYSTEMS", heroBottom: "Sites, sistemas e aplicações com", heroBottomStrong: "presença, desempenho e precisão.", ctaServices: "Ver serviços", ctaProjects: "Ver os meus projetos", ctaReferences: "Ver referências", ctaIdea: "Contar-me a sua ideia",
    railPortfolio: "PORTFÓLIO", railWhat: "O QUE FAÇO", railProcess: "COMO FUNCIONA", railSelection: "SELEÇÃO", railFeedback: "TESTEMUNHO", railQuestions: "DÚVIDAS", railContact: "CONTACTO", presenceEyebrow: "PRESENÇA QUE FUNCIONA", introTitle: "Design e código para negócios que não querem passar despercebidos.", introStatement: "Cada projeto começa com um objetivo claro e termina numa experiência natural para quem utiliza — e impossível de ignorar para quem vê.", specialty1Title: "Sites e presença digital", specialty1Desc: "Para apresentar a sua marca, os seus serviços e os seus produtos de forma clara e profissional.", specialty1a: "Criação de Sites Portfólio", specialty1b: "Criação de E-Commerce", specialty1c: "Criação de Menu Digital", specialty1d: "Criação de Loja Online", specialty2Title: "Automação e ligações", specialty2Desc: "Para aproximar clientes, reduzir tarefas repetitivas e ligar as ferramentas do seu negócio.", specialty2a: "Gestão de tráfego", specialty2b: "Automação (WhatsApp, Telegram)", specialty2c: "Integração de API", specialty3Title: "Gestão e sistemas", specialty3Desc: "Ferramentas para acompanhar números, organizar processos e tomar decisões com mais clareza.", specialty3a: "Painel de Gestão Financeira Empresarial", specialty3b: "Dashboard Administrativo e de Gestão", specialty3c: "Sistemas e aplicações à medida",
    processEyebrow: "SEM COMPLICAÇÕES", processTitle: "DA SUA IDEIA AO PROJETO PRONTO.", step1Title: "Conta a sua ideia", step1Desc: "Explica o que precisa, mesmo que ainda esteja no início.", step2Title: "Organizo o projeto", step2Desc: "Transformo a sua ideia num caminho claro para tirar tudo do papel.", step3Title: "Acompanha", step3Desc: "Acompanha cada etapa e participa nas decisões importantes.", step4Title: "Tudo pronto", step4Desc: "Recebe a solução a funcionar e pronta a utilizar.", selectionEyebrow: "PROJETOS SELECIONADOS", projectsTitle: "Veja projetos reais sem complicações.", projectsIntro: "Escolha um projeto, veja o resultado e abra o site quando quiser.", projectLive: "PROJETO ONLINE", viewProject: "Ver projeto", project1Category: "Site profissional", project1Desc: "Site simples para apresentar o salão, divulgar os serviços e facilitar o contacto com novas clientes.", project2Category: "Site personalizado", project2Desc: "Site claro e elegante para apresentar serviços, portfólio e caminhos simples para novas reservas.", project3Category: "Site de beleza e atendimento", project3Desc: "Experiência premium para apresentar serviços, reforçar a marca e facilitar o agendamento online.", realReference: "REFERÊNCIA REAL · MARA HAIR", feedbackTitle: "O que uma cliente disse depois de receber o projeto.", quote: "“Estou muito feliz com o seu trabalho”", maraCaption: "Mensagem recebida depois da entrega · Mara Hair", daniCaption: "Feedback visual do projeto · Dani Caye Beauty", cibellyCaption: "Feedback visual do projeto · Cibelly Studio", questionsEyebrow: "ANTES DE COMEÇAR", faqTitle: "Dúvidas comuns, respostas simples.", faq1q: "Preciso de perceber de tecnologia?", faq1a: "Não. Só precisa de explicar o que pretende; eu trato da parte técnica.", faq2q: "Preciso de ter textos e imagens prontos?", faq2a: "Não necessariamente. Podemos organizar o que já existe e definir juntos o que falta.", faq3q: "Como funciona o acompanhamento?", faq3a: "Acompanha cada etapa com explicações claras e aprova as decisões importantes.", faq4q: "Atende outros países?", faq4a: "Sim. O atendimento é online para clientes no Brasil e em qualquer parte do mundo.", faq5q: "Como funciona o orçamento?", faq5a: "Conta a sua ideia e preparo uma proposta clara e personalizada.", contactEyebrow: "SE A IDEIA IMPORTA, O ACABAMENTO TAMBÉM.", contactTitle: "Vamos criar algo que a sua marca vai querer assinar.", contactDesc: "Não precisa de chegar com tudo definido. Fale-me do seu negócio e ajudo a transformar a sua ideia numa solução profissional.", contactCta: "Explicar a minha ideia no WhatsApp", footerServices: "Sites · Sistemas · Aplicações", footerBuilt: "Construído com precisão.", brandAlt: "Símbolo geométrico da marca", avatarAlt: "Cabeça 3D estilizada do programador", contactAlt: "Escultura abstrata de anéis interligados", maraAlt: "Captura de uma conversa de WhatsApp com a cliente Mara Hair", daniAlt: "Captura de uma conversa de WhatsApp com a cliente Dani Caye Beauty", cibellyAlt: "Captura de mensagens de voz e feedback da cliente Cibelly",
  },
  en: {
    navServices: "Services", navProjects: "Projects", navFeedback: "Testimonial", navProcess: "How it works", navContact: "Contact", chooseLanguage: "Choose language", letsTalk: "Let's talk", openMenu: "Open menu", closeMenu: "Close menu", mobileReferences: "References", heroKicker: "WEBSITES • SYSTEMS • APPS", heroWord1: "DIGITAL", heroWord2: "TO BE", heroWord3: "REMEMBERED.", heroIntro: "I create custom websites, systems and apps without complications. You share your idea and I take care of the whole process until delivery.", heroOnline: "Online service for clients in Brazil and anywhere in the world.", heroSignature: "NEXCODE SYSTEMS", heroBottom: "Websites, systems and apps with", heroBottomStrong: "presence, performance and precision.", ctaServices: "View services", ctaProjects: "View my projects", ctaReferences: "View testimonials", ctaIdea: "Share my idea", railPortfolio: "PORTFOLIO", railWhat: "WHAT I DO", railProcess: "HOW IT WORKS", railSelection: "SELECTION", railFeedback: "TESTIMONIAL", railQuestions: "QUESTIONS", railContact: "CONTACT", presenceEyebrow: "PRESENCE THAT WORKS", introTitle: "Design and code for businesses that refuse to go unnoticed.", introStatement: "Every project starts with a clear goal and ends in an experience that feels natural to use — and impossible to ignore.", specialty1Title: "Websites and digital presence", specialty1Desc: "To present your brand, services and products clearly and professionally.", specialty1a: "Portfolio Website Creation", specialty1b: "E-Commerce Creation", specialty1c: "Digital Menu Creation", specialty1d: "Online Store Creation", specialty2Title: "Automation and connections", specialty2Desc: "To get closer to customers, reduce repetitive tasks and connect your business tools.", specialty2a: "Traffic management", specialty2b: "Automation (WhatsApp, Telegram)", specialty2c: "API integration", specialty3Title: "Management and systems", specialty3Desc: "Tools to track numbers, organize processes and make clearer decisions.", specialty3a: "Business Financial Management Panel", specialty3b: "Administrative and Management Dashboard", specialty3c: "Custom systems and apps", processEyebrow: "NO COMPLICATIONS", processTitle: "FROM YOUR IDEA TO A READY PROJECT.", step1Title: "You share your idea", step1Desc: "Explain what you need, even if you are just getting started.", step2Title: "I organize the project", step2Desc: "I turn your idea into a clear path to bring it to life.", step3Title: "You follow along", step3Desc: "You follow each stage and take part in the important decisions.", step4Title: "Everything ready", step4Desc: "You receive a working solution ready to use.", selectionEyebrow: "SELECTED PROJECTS", projectsTitle: "See real projects without the hassle.", projectsIntro: "Choose a project, see the result and open the website whenever you want.", projectLive: "LIVE PROJECT", viewProject: "View project", project1Category: "Professional website", project1Desc: "A simple website to present the salon, promote its services and make it easier for new clients to get in touch.", project2Category: "Custom website", project2Desc: "A clear, elegant website to present services, portfolio and simple paths to new bookings.", project3Category: "Beauty and booking website", project3Desc: "A premium experience to present services, strengthen the brand and make online booking easier.", realReference: "REAL TESTIMONIAL · MARA HAIR", feedbackTitle: "What a client said after receiving the project.", quote: "“I am very happy with your work”", maraCaption: "Message received after delivery · Mara Hair", daniCaption: "Project feedback · Dani Caye Beauty", cibellyCaption: "Project feedback · Cibelly Studio", questionsEyebrow: "BEFORE WE START", faqTitle: "Common questions, simple answers.", faq1q: "Do I need to understand technology?", faq1a: "No. You only need to explain what you want; I take care of the technical side.", faq2q: "Do I need to have text and images ready?", faq2a: "Not necessarily. We can organize what already exists and define what is still missing together.", faq3q: "How does the follow-up work?", faq3a: "You follow every stage with clear explanations and approve the important decisions.", faq4q: "Do you serve other countries?", faq4a: "Yes. I work online with clients in Brazil and anywhere in the world.", faq5q: "How does the quote work?", faq5a: "You share your idea and I prepare a clear, personalized proposal.", contactEyebrow: "WHEN THE IDEA MATTERS, SO DOES THE FINISH.", contactTitle: "Let's create something your brand will be proud to sign.", contactDesc: "You do not need to arrive with everything defined. Tell me about your business and I will help turn your idea into a professional solution.", contactCta: "Explain my idea on WhatsApp", footerServices: "Websites · Systems · Apps", footerBuilt: "Built with precision.", brandAlt: "Geometric brand symbol", avatarAlt: "Stylized 3D developer head", contactAlt: "Abstract sculpture of interlocking rings", maraAlt: "WhatsApp conversation screenshot with Mara Hair", daniAlt: "WhatsApp conversation screenshot with Dani Caye Beauty", cibellyAlt: "Voice messages and feedback screenshot from Cibelly",
  },
  fr: {
    navServices: "Services", navProjects: "Projets", navFeedback: "Témoignage", navProcess: "Comment ça marche", navContact: "Contact", chooseLanguage: "Choisir la langue", letsTalk: "Parlons-en", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", mobileReferences: "Références", heroKicker: "SITES • SYSTÈMES • APPLICATIONS", heroWord1: "DIGITAL", heroWord2: "À", heroWord3: "RETENIR.", heroIntro: "Je crée des sites, des systèmes et des applications sur mesure, sans complication. Vous expliquez votre idée et je m'occupe de tout jusqu'à la livraison.", heroOnline: "Service en ligne pour les clients au Brésil et partout dans le monde.", heroSignature: "NEXCODE SYSTEMS", heroBottom: "Des sites, systèmes et applications avec", heroBottomStrong: "présence, performance et précision.", ctaServices: "Voir les services", ctaProjects: "Voir mes projets", ctaReferences: "Voir les témoignages", ctaIdea: "Partager mon idée", railPortfolio: "PORTFOLIO", railWhat: "CE QUE JE FAIS", railProcess: "COMMENT ÇA MARCHE", railSelection: "SÉLECTION", railFeedback: "TÉMOIGNAGE", railQuestions: "QUESTIONS", railContact: "CONTACT", presenceEyebrow: "UNE PRÉSENCE QUI FONCTIONNE", introTitle: "Design et code pour les entreprises qui refusent de passer inaperçues.", introStatement: "Chaque projet commence par un objectif clair et se termine par une expérience naturelle à utiliser — et impossible à ignorer.", specialty1Title: "Sites et présence numérique", specialty1Desc: "Pour présenter votre marque, vos services et vos produits de façon claire et professionnelle.", specialty1a: "Création de site portfolio", specialty1b: "Création d'e-commerce", specialty1c: "Création de menu digital", specialty1d: "Création de boutique en ligne", specialty2Title: "Automatisation et connexions", specialty2Desc: "Pour rapprocher les clients, réduire les tâches répétitives et connecter vos outils.", specialty2a: "Gestion du trafic", specialty2b: "Automatisation (WhatsApp, Telegram)", specialty2c: "Intégration API", specialty3Title: "Gestion et systèmes", specialty3Desc: "Des outils pour suivre les chiffres, organiser les processus et décider plus clairement.", specialty3a: "Panneau de gestion financière", specialty3b: "Tableau de bord administratif et de gestion", specialty3c: "Systèmes et applications sur mesure", processEyebrow: "SANS COMPLICATION", processTitle: "DE VOTRE IDÉE AU PROJET PRÊT.", step1Title: "Vous expliquez votre idée", step1Desc: "Dites ce dont vous avez besoin, même si vous débutez.", step2Title: "J'organise le projet", step2Desc: "Je transforme votre idée en un chemin clair pour la réaliser.", step3Title: "Vous suivez l'avancement", step3Desc: "Vous suivez chaque étape et participez aux décisions importantes.", step4Title: "Tout est prêt", step4Desc: "Vous recevez une solution fonctionnelle, prête à l'emploi.", selectionEyebrow: "PROJETS SÉLECTIONNÉS", projectsTitle: "Découvrez de vrais projets, simplement.", projectsIntro: "Choisissez un projet, voyez le résultat et ouvrez le site quand vous le souhaitez.", projectLive: "PROJET EN LIGNE", viewProject: "Voir le projet", project1Category: "Site professionnel", project1Desc: "Un site simple pour présenter le salon, ses services et faciliter le contact avec de nouvelles clientes.", project2Category: "Site personnalisé", project2Desc: "Un site clair et élégant pour présenter les services, le portfolio et faciliter les réservations.", project3Category: "Site beauté et réservation", project3Desc: "Une expérience premium pour présenter les services, renforcer la marque et faciliter les rendez-vous en ligne.", realReference: "TÉMOIGNAGE RÉEL · MARA HAIR", feedbackTitle: "Ce qu'une cliente a dit après avoir reçu le projet.", quote: "« Je suis très heureuse de votre travail »", maraCaption: "Message reçu après la livraison · Mara Hair", daniCaption: "Retour sur le projet · Dani Caye Beauty", cibellyCaption: "Retour sur le projet · Cibelly Studio", questionsEyebrow: "AVANT DE COMMENCER", faqTitle: "Questions fréquentes, réponses simples.", faq1q: "Dois-je comprendre la technologie ?", faq1a: "Non. Il suffit d'expliquer ce que vous souhaitez ; je m'occupe de la partie technique.", faq2q: "Dois-je avoir les textes et les images prêts ?", faq2a: "Pas forcément. Nous pouvons organiser ce qui existe déjà et définir ensemble ce qui manque.", faq3q: "Comment se passe le suivi ?", faq3a: "Vous suivez chaque étape avec des explications claires et validez les décisions importantes.", faq4q: "Travaillez-vous avec d'autres pays ?", faq4a: "Oui. Je travaille en ligne avec des clients au Brésil et partout dans le monde.", faq5q: "Comment fonctionne le devis ?", faq5a: "Vous partagez votre idée et je prépare une proposition claire et personnalisée.", contactEyebrow: "QUAND L'IDÉE COMPTE, LA FINITION AUSSI.", contactTitle: "Créons quelque chose que votre marque sera fière de signer.", contactDesc: "Vous n'avez pas besoin d'arriver avec tout défini. Parlez-moi de votre activité et je vous aide à transformer votre idée en solution professionnelle.", contactCta: "Expliquer mon idée sur WhatsApp", footerServices: "Sites · Systèmes · Applications", footerBuilt: "Construit avec précision.", brandAlt: "Symbole géométrique de la marque", avatarAlt: "Tête 3D stylisée du développeur", contactAlt: "Sculpture abstraite d'anneaux entrelacés", maraAlt: "Capture d'une conversation WhatsApp avec Mara Hair", daniAlt: "Capture d'une conversation WhatsApp avec Dani Caye Beauty", cibellyAlt: "Capture de messages vocaux et de retours de Cibelly",
  },
  de: {
    navServices: "Leistungen", navProjects: "Projekte", navFeedback: "Kundenstimme", navProcess: "So funktioniert es", navContact: "Kontakt", chooseLanguage: "Sprache wählen", letsTalk: "Lass uns sprechen", openMenu: "Menü öffnen", closeMenu: "Menü schließen", mobileReferences: "Referenzen", heroKicker: "WEBSITES • SYSTEME • APPS", heroWord1: "DIGITAL", heroWord2: "ZUM", heroWord3: "MERKEN.", heroIntro: "Ich entwickle maßgeschneiderte Websites, Systeme und Apps ohne komplizierte Abläufe. Sie erklären Ihre Idee und ich kümmere mich um den gesamten Prozess bis zur Übergabe.", heroOnline: "Online-Betreuung für Kunden in Brasilien und überall auf der Welt.", heroSignature: "NEXCODE SYSTEMS", heroBottom: "Websites, Systeme und Apps mit", heroBottomStrong: "Präsenz, Leistung und Präzision.", ctaServices: "Leistungen ansehen", ctaProjects: "Meine Projekte", ctaReferences: "Referenzen ansehen", ctaIdea: "Meine Idee teilen", railPortfolio: "PORTFOLIO", railWhat: "MEIN ANGEBOT", railProcess: "SO FUNKTIONIERT ES", railSelection: "AUSWAHL", railFeedback: "KUNDENSTIMME", railQuestions: "FRAGEN", railContact: "KONTAKT", presenceEyebrow: "PRÄSENZ, DIE FUNKTIONIERT", introTitle: "Design und Code für Unternehmen, die nicht übersehen werden wollen.", introStatement: "Jedes Projekt beginnt mit einem klaren Ziel und endet mit einer Erfahrung, die sich natürlich anfühlt — und im Gedächtnis bleibt.", specialty1Title: "Websites und digitale Präsenz", specialty1Desc: "Um Marke, Leistungen und Produkte klar und professionell zu präsentieren.", specialty1a: "Portfolio-Website", specialty1b: "E-Commerce-Erstellung", specialty1c: "Digitale Speisekarte", specialty1d: "Online-Shop", specialty2Title: "Automatisierung und Verbindungen", specialty2Desc: "Um Kunden näher zu sein, wiederkehrende Aufgaben zu reduzieren und Tools zu verbinden.", specialty2a: "Traffic-Management", specialty2b: "Automatisierung (WhatsApp, Telegram)", specialty2c: "API-Integration", specialty3Title: "Management und Systeme", specialty3Desc: "Werkzeuge für Zahlen, Prozesse und klarere Entscheidungen.", specialty3a: "Finanzmanagement-Panel", specialty3b: "Administratives und Management-Dashboard", specialty3c: "Individuelle Systeme und Apps", processEyebrow: "OHNE KOMPLIKATIONEN", processTitle: "VON IHRER IDEE ZUM FERTIGEN PROJEKT.", step1Title: "Sie erzählen Ihre Idee", step1Desc: "Erklären Sie, was Sie brauchen, auch wenn Sie gerade erst anfangen.", step2Title: "Ich organisiere das Projekt", step2Desc: "Ich mache aus Ihrer Idee einen klaren Weg zur Umsetzung.", step3Title: "Sie verfolgen den Prozess", step3Desc: "Sie verfolgen jede Phase und entscheiden bei wichtigen Punkten mit.", step4Title: "Alles fertig", step4Desc: "Sie erhalten eine funktionierende, einsatzbereite Lösung.", selectionEyebrow: "AUSGEWÄHLTE PROJEKTE", projectsTitle: "Echte Projekte, einfach erklärt.", projectsIntro: "Wählen Sie ein Projekt, sehen Sie das Ergebnis und öffnen Sie die Website jederzeit.", projectLive: "LIVE-PROJEKT", viewProject: "Projekt ansehen", project1Category: "Professionelle Website", project1Desc: "Eine einfache Website, die den Salon präsentiert, Leistungen zeigt und den Kontakt erleichtert.", project2Category: "Individuelle Website", project2Desc: "Eine klare, elegante Website für Leistungen, Portfolio und einfache Buchungen.", project3Category: "Beauty- und Buchungswebsite", project3Desc: "Eine hochwertige Erfahrung für Leistungen, Marke und einfachere Online-Termine.", realReference: "ECHTE KUNDENSTIMME · MARA HAIR", feedbackTitle: "Was eine Kundin nach dem Projekt gesagt hat.", quote: "„Ich bin sehr glücklich mit Ihrer Arbeit“", maraCaption: "Nach der Übergabe erhaltene Nachricht · Mara Hair", daniCaption: "Feedback zum Projekt · Dani Caye Beauty", cibellyCaption: "Feedback zum Projekt · Cibelly Studio", questionsEyebrow: "VOR DEM START", faqTitle: "Häufige Fragen, einfache Antworten.", faq1q: "Muss ich Technik verstehen?", faq1a: "Nein. Sie erklären nur, was Sie möchten; ich kümmere mich um die Technik.", faq2q: "Muss ich Texte und Bilder fertig haben?", faq2a: "Nicht unbedingt. Wir ordnen das Vorhandene und legen gemeinsam fest, was noch fehlt.", faq3q: "Wie funktioniert die Begleitung?", faq3a: "Sie verfolgen jede Phase mit klaren Erklärungen und bestätigen wichtige Entscheidungen.", faq4q: "Arbeiten Sie mit anderen Ländern?", faq4a: "Ja. Ich arbeite online mit Kunden in Brasilien und überall auf der Welt.", faq5q: "Wie funktioniert das Angebot?", faq5a: "Sie erzählen Ihre Idee und ich erstelle ein klares, individuelles Angebot.", contactEyebrow: "WENN DIE IDEE ZÄHLT, ZÄHLT AUCH DIE AUSFÜHRUNG.", contactTitle: "Lassen Sie uns etwas schaffen, das Ihre Marke gerne unterschreibt.", contactDesc: "Sie müssen nicht mit allem fertig sein. Erzählen Sie mir von Ihrem Unternehmen und ich helfe, Ihre Idee in eine professionelle Lösung zu verwandeln.", contactCta: "Meine Idee über WhatsApp erklären", footerServices: "Websites · Systeme · Apps", footerBuilt: "Mit Präzision gebaut.", brandAlt: "Geometrisches Markensymbol", avatarAlt: "Stilisierter 3D-Kopf des Entwicklers", contactAlt: "Abstrakte Skulptur ineinandergreifender Ringe", maraAlt: "Screenshot eines WhatsApp-Gesprächs mit Mara Hair", daniAlt: "Screenshot eines WhatsApp-Gesprächs mit Dani Caye Beauty", cibellyAlt: "Screenshot von Sprachnachrichten und Feedback von Cibelly",
  },
};

const WHATSAPP_MESSAGES: Record<LanguageCode, string> = {
  "pt-BR": "Olá! Quero explicar minha ideia para criar um site, sistema ou aplicativo. Podemos conversar?",
  "pt-PT": "Olá! Quero explicar a minha ideia para criar um site, sistema ou aplicação. Podemos conversar?",
  en: "Hello! I would like to explain my idea for a website, system or app. Can we talk?",
  fr: "Bonjour ! Je voudrais expliquer mon idée pour un site, un système ou une application. Pouvons-nous discuter ?",
  de: "Hallo! Ich möchte meine Idee für eine Website, ein System oder eine App erklären. Können wir sprechen?",
};

const projectData = [
  { number: "01", title: "Shine Brazilian Salon", categoryKey: "project1Category", descriptionKey: "project1Desc", image: "/assets/shine-editorial-material.png", url: "https://www.shinebraziliansalon.com.au", palette: "sand" },
  { number: "02", title: "Dani Caye Beauty", categoryKey: "project2Category", descriptionKey: "project2Desc", image: "/assets/dani-editorial-material.png", url: "https://www.danicayebeauty.com/", palette: "rose" },
  { number: "03", title: "Cibelly Studio", categoryKey: "project3Category", descriptionKey: "project3Desc", image: "/assets/cibelly-cover-hero.webp", url: "https://cibellystudi-dxsgadjg.manus.space", palette: "clay" },
];

const specialties = [
  { index: "01", titleKey: "specialty1Title", descriptionKey: "specialty1Desc", itemKeys: ["specialty1a", "specialty1b", "specialty1c", "specialty1d"], icon: <Layers3 aria-hidden="true" /> },
  { index: "02", titleKey: "specialty2Title", descriptionKey: "specialty2Desc", itemKeys: ["specialty2a", "specialty2b", "specialty2c"], icon: <MessageCircle aria-hidden="true" /> },
  { index: "03", titleKey: "specialty3Title", descriptionKey: "specialty3Desc", itemKeys: ["specialty3a", "specialty3b", "specialty3c"], icon: <Code2 aria-hidden="true" /> },
];

const processSteps = [
  ["01", "step1Title", "step1Desc"], ["02", "step2Title", "step2Desc"], ["03", "step3Title", "step3Desc"], ["04", "step4Title", "step4Desc"],
] as const;

const faqItems = [
  ["tecnologia", "faq1q", "faq1a"], ["materiais", "faq2q", "faq2a"], ["acompanhamento", "faq3q", "faq3a"], ["outros-paises", "faq4q", "faq4a"], ["orcamento", "faq5q", "faq5a"],
] as const;

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
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const saved = window.localStorage.getItem("nexcode-language") as LanguageCode | null;
    return saved && LANGUAGE_OPTIONS.some((option) => option.value === saved) ? saved : "pt-BR";
  });
  const copy = COPY[language];
  const t = (key: string) => copy[key] ?? key;
  const whatsappUrl = `https://wa.me/5575999445156?text=${encodeURIComponent(WHATSAPP_MESSAGES[language])}`;
  const localizedProjects = projectData.map((project) => ({
    ...project,
    category: t(project.categoryKey),
    description: t(project.descriptionKey),
  }));
  const localizedSpecialties = specialties.map((item) => ({
    ...item,
    title: t(item.titleKey),
    description: t(item.descriptionKey),
    items: item.itemKeys.map(t),
  }));

  useEffect(() => {
    window.localStorage.setItem("nexcode-language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`} aria-label={t("navContact")}>
        <a className="brand-lockup" href="#inicio" aria-label="Ir para o início" onClick={() => setMenuOpen(false)}>
          <img
            src="/assets/brand-mark-mineral.png"
            alt={t("brandAlt")}
            className="brand-symbol"
          />
          <span className="brand-wordmark">NEXCODE</span>
        </a>
        <nav className="header-nav" aria-label={t("navContact")}>
          <a href="#especialidades">{t("navServices")}</a>
          <a href="#projetos">{t("navProjects")}</a>
          <a href="#depoimento">{t("navFeedback")}</a>
          <a href="#como-funciona">{t("navProcess")}</a>
          <a href="#contato">{t("navContact")}</a>
        </nav>
        <label className="language-picker">
          <span className="sr-only">{t("chooseLanguage")}</span>
          <select value={language} onChange={(event) => setLanguage(event.target.value as LanguageCode)} aria-label={t("chooseLanguage")}>
            {LANGUAGE_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
        <a className="header-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
          <span>{t("letsTalk")}</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="mobile-navigation" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-label="Navegação móvel">
          <a href="#especialidades" onClick={() => setMenuOpen(false)}>{t("navServices")}</a>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>{t("navProjects")}</a>
          <a href="#depoimento" onClick={() => setMenuOpen(false)}>{t("mobileReferences")}</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>{t("navProcess")}</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>{t("navContact")}</a>
          <a className="mobile-menu-contact" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            <span>{t("letsTalk")}</span>
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
            <span>{t("railPortfolio")}</span>
          </div>
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            <span className="pulse-dot" />
            {t("heroKicker")}
          </motion.div>
          <motion.h1
            id="hero-title"
            className="hero-title"
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            {t("heroWord1")} <em>{t("heroWord2")}</em>
            <br />
            {t("heroWord3")}
          </motion.h1>
          <motion.div className="hero-intro-copy" {...fadeUp}>
            <p>{t("heroIntro")}</p>
            <span>{t("heroOnline")}</span>
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
                  alt={t("avatarAlt")}
                />
                <div className="eye-tracker" aria-hidden="true">
                  <span className="eye-pupil eye-pupil-left" />
                  <span className="eye-pupil eye-pupil-right" />
                </div>
              </div>
              <div className="avatar-glint" aria-hidden="true" />
            </div>
          </div>
          <p className="hero-signature">{t("heroSignature")}</p>

          <motion.div
            className="hero-bottomline"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p>
              {t("heroBottom")} <strong>{t("heroBottomStrong")}</strong>
            </p>
            <div className="hero-actions">
              <a className="hero-services-cta" href="#especialidades">
                <span>{t("ctaServices")}</span>
                <ArrowDownRight aria-hidden="true" />
              </a>
              <a className="hero-projects-cta" href="#projetos">
                <span>{t("ctaProjects")}</span>
                <ArrowDownRight aria-hidden="true" />
              </a>
              <a className="hero-reference-cta" href="#depoimento">
                <span>{t("ctaReferences")}</span>
                <ArrowDownRight aria-hidden="true" />
              </a>
              <a className="primary-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
                <span>{t("ctaIdea")}</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </section>

        <section id="especialidades" className="intro-section" aria-labelledby="intro-title">
          <div className="section-rail" aria-hidden="true">
            <span>02</span>
            <i />
            <span>{t("railWhat")}</span>
          </div>
          <motion.div className="intro-heading" {...fadeUp}>
            <p className="eyebrow">{t("presenceEyebrow")}</p>
            <h2 id="intro-title">{t("introTitle")}</h2>
          </motion.div>
          <motion.p className="intro-statement" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            {t("introStatement")}
          </motion.p>

          <div className="specialty-list">
            {localizedSpecialties.map((item, index) => (
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
            <span>{t("railProcess")}</span>
          </div>
          <motion.div className="process-heading" {...fadeUp}>
            <p className="eyebrow">{t("processEyebrow")}</p>
            <h2 id="process-title">{t("processTitle")}</h2>
          </motion.div>
          <div className="process-list">
            {processSteps.map(([number, titleKey, descKey]) => <article key={number}><span>{number}</span><h3>{t(titleKey)}</h3><p>{t(descKey)}</p></article>)}
          </div>
        </section>

        <section id="projetos" className="projects-section" aria-labelledby="projects-title">
          <div className="projects-heading">
            <div className="section-rail section-rail-dark" aria-hidden="true">
              <span>04</span>
              <i />
              <span>{t("railSelection")}</span>
            </div>
            <motion.div {...fadeUp}>
              <p className="eyebrow eyebrow-light">{t("selectionEyebrow")}</p>
              <h2 id="projects-title">{t("projectsTitle")}</h2>
            </motion.div>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
              {t("projectsIntro")}
            </motion.p>
          </div>

          <div className="project-list">
            {localizedProjects.map((project, index) => (
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
                        <span>{project.number} / {t("projectLive")}</span>
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
                    {t("viewProject")} <ArrowUpRight aria-hidden="true" />
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
            <span>{t("railFeedback")}</span>
          </div>
          <motion.div className="feedback-layout reference-layout" {...fadeUp}>
            <div>
              <p className="eyebrow">{t("realReference")}</p>
              <h2 id="feedback-title">{t("feedbackTitle")}</h2>
            </div>
            <figure className="feedback-quote">
              <blockquote>{t("quote")}</blockquote>
              <figcaption><span>—</span> Mara Hair</figcaption>
            </figure>
            <div className="reference-media">
              <figure className="reference-shot">
                <img src="/assets/reference-mara-hair.png" alt={t("maraAlt")} />
                <figcaption>{t("maraCaption")}</figcaption>
              </figure>
              <figure className="reference-shot">
                <img src="/assets/IMG_4264.PNG" alt={t("daniAlt")} />
                <figcaption>{t("daniCaption")}</figcaption>
              </figure>
              <figure className="reference-shot">
                <img src="/assets/IMG_4525.PNG" alt={t("cibellyAlt")} />
                <figcaption>{t("cibellyCaption")}</figcaption>
              </figure>
            </div>
          </motion.div>
        </section>

        <section id="duvidas" className="faq-section" aria-labelledby="faq-title">
          <div className="section-rail" aria-hidden="true">
            <span>06</span>
            <i />
            <span>{t("railQuestions")}</span>
          </div>
          <motion.div className="faq-layout" {...fadeUp}>
            <div>
              <p className="eyebrow">{t("questionsEyebrow")}</p>
              <h2 id="faq-title">{t("faqTitle")}</h2>
            </div>
            <Accordion type="single" collapsible className="faq-accordion">
              {faqItems.map(([value, questionKey, answerKey]) => <AccordionItem key={value} value={value}><AccordionTrigger>{t(questionKey)}</AccordionTrigger><AccordionContent>{t(answerKey)}</AccordionContent></AccordionItem>)}
            </Accordion>
          </motion.div>
        </section>

        <section id="contato" className="contact-section" aria-labelledby="contact-title">
          <img className="contact-art" src="/assets/contact-orbit-sculpture.png" alt={t("contactAlt")} />
          <div className="section-rail" aria-hidden="true">
            <span>07</span>
            <i />
            <span>{t("railContact")}</span>
          </div>
          <motion.div className="contact-content" {...fadeUp}>
            <p className="eyebrow">{t("contactEyebrow")}</p>
            <h2 id="contact-title">{t("contactTitle")}</h2>
            <p className="contact-description">{t("contactDesc")}</p>
            <a className="contact-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span>{t("contactCta")}</span>
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
        <p>{t("footerServices")}</p>
        <p>© {new Date().getFullYear()} — {t("footerBuilt")}</p>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp">
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
