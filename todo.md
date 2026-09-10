# Atualização do avatar interativo

- [x] Gerar cabeça 3D estilizada baseada na foto enviada, preservando rosto, pele, sobrancelhas, olhos, nariz, boca e cabelo curto alinhado.
- [x] Remover visualmente o corpo inteiro do hero e usar somente a cabeça do personagem.
- [x] Implementar acompanhamento suave da cabeça ao mouse e ao toque.
- [x] Implementar acompanhamento independente e sutil dos olhos ao ponto de interação.
- [x] Garantir retorno suave à posição neutra e não bloquear o scroll vertical no mobile.
- [x] Validar desktop, mobile, compilação e acessibilidade.
- [x] Aguardar a conclusão automática do ativo visual com transparência nativa.
- [x] Salvar checkpoint atualizado.

## Decisões

A estética editorial premium e o fundo branco fosco foram preservados. O novo ativo está sendo gerado com transparência nativa para evitar qualquer fundo quadriculado. O tracking usa variáveis CSS compartilhadas para mover a cabeça e as pupilas com suavidade em mouse e toque.

## Pendências verificáveis

- [x] Confirmar que a geração assíncrona substituiu o placeholder pela imagem final.
- [x] Inspecionar visualmente o asset final para confirmar identidade, cabelo alinhado e recorte limpo.
- [x] Revalidar desktop e mobile após o asset final estar disponível.


## Nova rodada — fidelidade facial e Look At Cursor

- [x] Gerar nova cabeça 3D baseada na foto IMG_4238.jpeg, preservando o cabelo e a barba já aprovados.
- [x] Corrigir a orientação da cabeça para ficar reta, frontal e natural.
- [x] Remover as duas bolinhas brancas sobre os olhos.
- [x] Reforçar rotação real da cabeça seguindo o cursor/toque, não apenas deslocamento parallax.
- [x] Ajustar os olhos para acompanharem suavemente o ponto do cursor/toque.
- [x] Manter touch tracking natural sem impedir o scroll vertical.
- [x] Validar visualmente desktop/mobile, tipos e build.
- [x] Salvar novo checkpoint.

## Nova rodada — cartoon e tracking refinado

- [x] Gerar variação cartoon sofisticada preservando rosto, cabelo, barba, enquadramento e fundo atuais.
- [x] Tornar o movimento da cabeça mais responsivo, natural e tridimensional ao mouse.
- [x] Tornar o touch tracking mais direto e suave durante o arraste horizontal.
- [x] Fazer os olhos seguirem o cursor/toque com maior precisão, sem bolinhas brancas.
- [x] Preservar layout, textos, projetos e composição do portfólio sem alterações.
- [x] Validar desktop/mobile e compilação.
- [x] Salvar novo checkpoint.

## Nova rodada — hero organizado, projetos e topo

- [x] Reposicionar o título inicial para não cobrir o rosto nem ficar sobre o personagem.
- [x] Corrigir cortes e overflow horizontal no layout mobile.
- [x] Adicionar botão frontal “Ver meus projetos” com navegação automática para a seção de projetos.
- [x] Fazer os cards dos projetos abrirem os sites realizados em nova aba.
- [x] Adicionar botão flutuante “Subir ao topo” com retorno suave ao início.
- [x] Validar desktop/mobile, links, acessibilidade e compilação.
- [x] Salvar novo checkpoint.

## Nova rodada — assinatura da marca

- [x] Adicionar “NEXCODE SYSTEMS” em tamanho pequeno e centralizado abaixo do personagem.
- [x] Garantir legibilidade e espaçamento correto no desktop e no mobile sem alterar a composição.
- [x] Validar compilação e salvar novo checkpoint.

## Nova rodada — referência real Mara Hair

- [x] Adicionar seção de referências reais com a mensagem comprovada da cliente Mara Hair.
- [x] Identificar claramente a cliente e não incluir avaliações, notas ou frases não fornecidas.
- [x] Validar responsividade, legibilidade e compilação.
- [x] Salvar novo checkpoint.

## Nova rodada — marca NEXCODE

- [x] Substituir “DEV / STUDIO” por “NEXCODE” no cabeçalho.
- [x] Substituir “DEV / STUDIO” por “NEXCODE” no rodapé.
- [x] Validar visualmente, compilar e salvar novo checkpoint.

## Nova rodada — remover instrução de deslize

- [x] Remover o texto/indicador “DESLIZE PARA MOVIMENTAR” do hero.
- [x] Manter o tracking por mouse e toque funcionando sem a instrução visual.
- [x] Validar desktop/mobile, compilação e salvar novo checkpoint.

## Nova rodada — duas referências e remoção total dos indicadores

- [x] Remover o texto restante “MOVA PARA INTERAGIR” do hero.
- [x] Identificar os dois arquivos de referência enviados pelo usuário.
- [x] Exibir as duas referências distintas na aba Referências.
- [x] Validar que nenhuma instrução visual de interação ficou visível.
- [x] Validar desktop/mobile, compilação e salvar novo checkpoint.

## Nova rodada — remover referência incorreta

- [x] Remover a imagem inferior incorreta da aba Referências.
- [x] Manter somente o print correto da conversa da Mara Hair.
- [x] Ajustar o espaçamento da seção após a remoção.
- [x] Validar desktop/mobile, compilação e salvar novo checkpoint.

## Nova rodada — remover marcas d’água da Manus

- [x] Auditar código, HTML, CSS e ativos por textos ou badges da Manus.
- [x] Remover referências visuais removíveis da Manus sem alterar NEXCODE ou o conteúdo do portfólio.
- [x] Verificar se alguma marca pertence ao serviço de hospedagem e não pode ser removida pelo código.
- [x] Validar desktop/mobile, compilação e salvar novo checkpoint.

## Nova rodada — conteúdo, serviços, processo e FAQ

- [x] Atualizar o texto inicial, subtítulo, descrição e atendimento internacional sem alterar o layout.
- [x] Trocar os rótulos do menu e adicionar “Como funciona”.
- [x] Substituir as descrições de Sites, Sistemas e Aplicativos pelos textos simples fornecidos.
- [x] Adicionar a seção compacta “DA SUA IDEIA AO PROJETO PRONTO” com quatro etapas curtas.
- [x] Traduzir “LIVE PROJECT” para “PROJETO NO AR” e revisar descrições dos projetos em português simples.
- [x] Renomear a seção para “Depoimento” e atualizar o título mantendo frase e imagem atuais.
- [x] Adicionar FAQ em acordeão antes do contato com as cinco dúvidas fornecidas.
- [x] Atualizar a chamada final e o botão para “Explicar minha ideia no WhatsApp”, mantendo o link atual.
- [x] Remover o selo “Made with Manus” caso esteja presente no conteúdo público.
- [x] Validar computador, tablet, celular, acessibilidade, compilação e salvar novo checkpoint.

## Nova rodada — contorno para leitura

- [x] Identificar os textos pequenos que estão com baixo contraste.
- [x] Aplicar contorno sutil e contraste sem mudar a identidade visual.
- [x] Validar desktop, tablet e celular, compilar e salvar novo checkpoint.

## Nova rodada — correção de sobreposição no mobile

- [x] Tirar a frase que está sobre o rosto no mobile.
- [x] Criar espaçamento suficiente entre texto, personagem e assinatura.
- [x] Melhorar a legibilidade das fontes pequenas no celular sem alterar a identidade visual.
- [x] Revisar tablet e desktop para garantir que o ajuste não cause regressões.
- [x] Validar compilação e salvar novo checkpoint.

## Nova rodada — personagem mais baixo no mobile

- [x] Descer o personagem no mobile para liberar completamente o rosto do texto.
- [x] Garantir que a assinatura abaixo da cabeça não desapareça sobre o cabelo.
- [x] Preservar o desktop, o tracking, as cores e a composição geral.
- [x] Validar celular, tablet e desktop, compilar e salvar novo checkpoint.

## Nova rodada — fontes maiores e rosto totalmente livre

- [x] Descer mais o personagem no mobile para eliminar a sobreposição restante.
- [x] Aumentar as fontes pequenas do mobile para leitura confortável.
- [x] Preservar layout, cores, personagem, tracking e animações no desktop e tablet.
- [x] Validar celular, tablet e desktop, compilar e salvar novo checkpoint.

## Nova rodada — restaurar composição e manter apenas letra/personagem

- [x] Restaurar a composição anterior do hero, desfazendo somente o reposicionamento mobile da última rodada.
- [x] Manter apenas os ajustes de tipografia e do personagem solicitados pelo usuário.
- [x] Preservar layout, cores, conteúdo, tracking, animações, projetos e demais seções.
- [x] Validar celular, tablet e desktop, compilação e testes.
- [x] Salvar novo checkpoint da versão revisada.

## Nova rodada — referência Dani Caye Beauty

- [x] Preparar o print enviado da Dani Caye Beauty para uso como ativo estático do projeto.
- [x] Adicionar a referência à seção existente sem remover a referência da Mara Hair nem alterar o restante do layout.
- [x] Garantir alt text e apresentação responsiva da nova imagem.
- [x] Validar celular, tablet, desktop, compilação e testes.
- [x] Salvar novo checkpoint com a nova referência.

## Nova rodada — CTA de referências no início

- [x] Adicionar a opção “Ver referências” no início do portfólio.
- [x] Fazer o CTA apontar diretamente para a seção de depoimentos e referências.
- [x] Preservar layout, conteúdo, cores e demais CTAs existentes.
- [x] Validar celular, tablet, desktop, compilação e testes.
- [x] Salvar novo checkpoint com a navegação atualizada.

## Nova rodada — projetos, serviços e menu simplificados

- [x] Simplificar a apresentação dos projetos para que o cliente veja título, resumo e botão sem precisar descer excessivamente.
- [x] Adicionar o site Cibelly Studio com link para https://cibellystudi-dxsgadjg.manus.space.
- [x] Preparar e adicionar a nova referência visual enviada da Cibelly.
- [x] Implementar menu hambúrguer acessível, organizado e funcional em telas menores.
- [x] Organizar os serviços solicitados sem poluir a página: gestor de tráfego; automações para WhatsApp e Telegram; sites portfólio; e-commerce; cardápio digital; integração de API; loja virtual; painel de gestão financeira empresarial; dashboard administrativo e gerencial.
- [x] Preservar a identidade NEXCODE, avatar, tracking, conteúdo existente e referências anteriores.
- [x] Validar celular, tablet e desktop, incluindo navegação do menu, links dos projetos, compilação e testes.
- [x] Salvar novo checkpoint da versão atualizada.

## Correção — alterações não refletidas na prévia

- [x] Comparar o estado publicado com o código local e confirmar quais mudanças ficaram ausentes.
- [x] Confirmar de forma verificável no código e na prévia o projeto Cibelly, a nova referência, os serviços organizados, os cartões compactos e o menu hambúrguer.
- [x] Confirmar que os ativos carregam na prévia publicada e que os links apontam para os destinos corretos.
- [x] Validar celular, tablet e desktop, incluindo interação do menu, sem entregar somente com base no checkpoint.
- [x] Salvar um novo checkpoint somente após confirmar visualmente as mudanças na prévia.

## Nova rodada — capa do terceiro projeto

- [x] Preparar uma nova capa real do Cibelly Studio, diferente do print de referência.
- [x] Aplicar à capa o mesmo tratamento visual dos outros cartões de projetos.
- [x] Manter o print da Cibelly apenas na seção de referências, sem substituí-lo.
- [x] Validar celular, tablet e desktop e salvar novo checkpoint.

## Nova rodada — pacote portátil para Vercel

- [ ] Auditar o motivo da tela escura e do texto padrão em produção externa.
- [ ] Garantir que todas as imagens e fontes usadas pelo portfólio tenham caminhos acessíveis fora do Manus.
- [ ] Criar configuração de build e fallback de rotas compatível com Vercel.
- [ ] Corrigir o servidor/build para não depender de caminhos exclusivos do ambiente Manus.
- [ ] Testar build e execução de produção local, incluindo carregamento de assets e rotas.
- [ ] Documentar as variáveis e o comando de deploy necessários para a Vercel.
- [ ] Salvar novo checkpoint com a versão preparada.
