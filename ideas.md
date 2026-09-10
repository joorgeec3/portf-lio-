# Direção de Design — Portfólio Premium

## Referência como especificação de base

A referência principal, **Eneko / My Framer Site**, é a especificação visual de referência para a primeira dobra: uma composição editorial de grande impacto, com frase de apresentação em caixa alta no topo, personagem central dominante, muito espaço negativo e uma chamada compacta de contato próxima à base. A adaptação deve preservar esse senso de foco, escala tipográfica e reação direta do personagem ao cursor, sem copiar identidade, textos ou elementos gráficos proprietários.

O projeto **Shine Brazilian Salon by Mara** evidencia uma direção visual editorial, delicada e calorosa, baseada em fundo neutro, serifas elegantes, grande escala e blocos de conteúdo arejados. A sua vitrine deve refletir esses atributos por meio de uma moldura premium e uma prévia de tela em grande formato, sem reproduzir o layout do cliente.

O projeto **Dani Caye Beauty** combina uma proposta de beleza natural com uma direção editorial leve: fundo claro, tipografia serifada, fotografia de estúdio e navegação orientada a serviços, portfólio e reservas. A segunda vitrine deve capturar a sensação de refinamento e acolhimento sem reproduzir as peças de identidade do projeto.

## Abordagem escolhida: Museu de Movimento

### Movimento de design

**Minimalismo editorial contemporâneo** com influência de portfólios de creative developers e da direção de arte de revistas de arquitetura. A página não opera como uma landing page centralizada comum: ela é uma sequência de placas, molduras e colunas deslocadas, onde o vazio cria tensão e valoriza cada elemento.

### Princípios centrais

1. **Uma presença protagonista por vez:** o avatar é a peça principal do hero; projetos, especialidades e contato assumem o foco somente quando entram em cena.
2. **Escala como linguagem:** títulos amplos e compactos contrastam com microtipografia informativa e espaçada.
3. **Matéria discreta:** branco fosco, papel mineral, sombras difusas e linhas técnicas muito finas evitam uma aparência plana ou genérica.
4. **Movimento com intenção:** tracking, reveal e deslocamentos são lentos e silenciosos; a página não usa efeitos decorativos excessivos.

### Filosofia de cor

O fundo parte de um **branco calcário fosco** — nunca branco clínico — para transmitir calma e acabamento físico. Grafite profundo sustenta legibilidade e autoridade. Um verde mineral quase preto serve de acento proprietário, usado apenas para indicadores, linhas, botões e pequenos sinais de interação. Destaques quentes ficam restritos às prévias dos trabalhos, preservando a clareza do sistema.

### Paradigma de layout

A estrutura adota um **eixo editorial assimétrico**: um trilho estreito de informações e numeração lateral ancora a leitura enquanto painéis amplos invadem a tela em diferentes alinhamentos. O hero é um palco vertical, não um bloco de marketing. A área de projetos utiliza duas vitrines horizontais em sequência, com molduras amplas e texto flutuante; o conteúdo não é aprisionado em uma malha de cartões uniformes.

### Elementos de assinatura

1. **Trilho de coordenadas:** linhas finas, pequenos círculos e numeração de seção percorrem o site como um sistema de navegação visual.
2. **Halo de avatar:** luz e anéis concêntricos discretos enquadram o personagem e reagem ao ponteiro.
3. **Fitas de legenda:** rótulos pequenos, em caixa alta e com rastreamento amplo, identificam especialidades e projetos.

### Filosofia de interação

As interações devem se comportar como um estúdio sensível ao visitante. O avatar acompanha a posição horizontal e vertical do cursor com inércia e retorna ao centro de modo natural. Em telas de toque, o acompanhamento ocorre apenas durante o arrasto horizontal, sem interceptar o scroll vertical. Os projetos respondem com uma revelação suave da imagem, movimento mínimo do enquadramento e mudança de ênfase tipográfica.

### Animação

O ritmo de entrada usa opacidade e `transform` apenas: títulos sobem cerca de 18 px, detalhes surgem com atraso de 50–70 ms e elementos de interface escalam de 0,96 a 1. O avatar utiliza interpolação por `requestAnimationFrame` para produzir movimento amortecido. As animações respeitam `prefers-reduced-motion`; nessa condição, todo conteúdo permanece visível e o avatar fica estático.

### Sistema tipográfico

**Archivo Expanded** ou equivalente para títulos: caixa alta, peso alto e largura generosa, oferecendo presença escultórica. **DM Sans** ou equivalente para textos e controles: legível, leve e com contraste elegante. A hierarquia combina uma headline muito grande no hero, títulos de seção em uma escala editorial e microcopy com `letter-spacing` alto. A fonte Inter não deve ser utilizada.

### Essência da marca

**Um creative developer que cria experiências digitais premium — sites, sistemas e apps — para negócios que querem presença memorável.**

Personalidade: **precisa, inventiva, sofisticada**.

### Voz da marca

Títulos são diretos, visuais e confiantes. CTAs usam convites concretos, evitando clichês corporativos e promessas vagas.

> "Experiências digitais com precisão, presença e movimento."

> "Vamos transformar a sua presença digital."

### Wordmark e logo

O símbolo é um monograma geométrico abstrato formado por três módulos articulados — web, sistema e app — conectados por um eixo vertical. Não usa texto dentro do ícone e deve ser facilmente reconhecível em tamanho pequeno. O wordmark será tipográfico, com caracteres espaçados e um detalhe de corte no primeiro caractere.

### Cor de assinatura

**Verde Mineral — `#173C36`**. É um verde profundo, dessaturado e arquitetônico, capaz de ser sofisticado no fundo claro e memorável sem a agressividade de um acento fluorescente.

## Conteúdo e estrutura confirmados

| Seção | Função | Material disponível |
| --- | --- | --- |
| Hero | Apresentar a proposta, o avatar reativo e o contato | Copy e link de WhatsApp fornecidos; foto do usuário ainda não fornecida neste espaço |
| Especialidades | Sintetizar sites, sistemas, aplicativos e soluções personalizadas | Copy institucional fornecida |
| Projetos selecionados | Mostrar Shine Brazilian Salon e Dani Caye Beauty em vitrines de alto impacto | URLs dos dois projetos fornecidas |
| Feedbacks | Reservar estrutura visual sem inventar depoimentos | Conteúdo futuro, sem dados a preencher |
| Contato | Direcionar a conversa para WhatsApp | Link `https://wa.me/5575999445156` fornecido |

## Limite de fidelidade do avatar

Como não há uma fotografia do rosto anexada a este projeto, a primeira versão utilizará um **avatar artístico neutro e claramente substituível**, com o sistema de tracking plenamente implementado. Assim que a foto for enviada, o ativo poderá ser substituído por uma versão 3D baseada nos traços reais, sem alterar o layout ou a interação.
