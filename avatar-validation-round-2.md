# Validação visual — rodada 2

A captura desktop mostra a cabeça reta, centralizada e frontal, com proporções naturais, cabelo curto alinhado e barba preservada. As duas bolinhas brancas que apareciam na camada anterior não estão mais visíveis; o tracking permanece integrado às íris, sem brilho branco destacado.

A captura mobile confirma o enquadramento reto e a escala responsiva. O hero mantém a área de toque e o scroll vertical continua livre, pois o gesto só atualiza o alvo quando há intenção horizontal.

## Rodada cartoon e tracking refinado

As capturas desktop e mobile confirmam que a composição, a tipografia, o enquadramento e o fundo foram preservados. O personagem agora aparece em cartoon 3D mais limpo, com cabelo e barba mantidos, sem as duas bolinhas brancas. A cabeça permanece reta no estado neutro, enquanto o CSS aplica perspectiva, rotação X/Y/Z e deslocamento suave para responder ao cursor; o toque horizontal atualiza o mesmo alvo sem bloquear o scroll vertical.

## Rodada cartoon refinado e tracking mais responsivo

As capturas desktop e mobile confirmam que o restante da composição permaneceu inalterado. O personagem está mais claramente cartoon, sem perder a identidade visual, com cabelo e barba preservados e sem bolinhas brancas. O estado neutro está reto; o código usa perspectiva e rotação X/Y/Z para o cursor, interpolação mais rápida e ganho dedicado de 1.16x no arraste horizontal do toque, mantendo `touch-action: pan-y` para não bloquear o scroll vertical.

## Assinatura NEXCODE SYSTEMS

A conferência desktop confirmou a assinatura pequena, centralizada e abaixo da cabeça. A conferência mobile mostrou que a assinatura está legível, mas ficou próxima demais do texto “MOVA PARA INTERAGIR”; o ajuste seguinte moverá apenas esse indicador para cima no mobile, preservando a posição da assinatura e o restante da composição.

## Confirmação final da assinatura

A captura mobile após o ajuste mostra “NEXCODE SYSTEMS” pequeno, centralizado e separado do indicador “MOVA PARA INTERAGIR”, sem sobreposição ou corte. A cabeça e o restante do hero continuam visualmente inalterados. O build final foi executado com `pnpm check && pnpm build` sem erros de tipos ou compilação.

## Hero organizado e CTA de projetos

A captura desktop mostra o botão “Ver meus projetos” ao lado de “Iniciar um projeto”, com leitura clara. No mobile, os CTAs cabem sem corte e a assinatura permanece organizada, mas a palavra final do título ainda ultrapassa a largura direita; esse overflow será corrigido reduzindo apenas o tracking/tamanho tipográfico no breakpoint móvel.

## Confirmação final do hero e navegação

As capturas desktop e mobile finais mostram o título reduzido e separado do personagem; o rosto permanece livre, sem sobreposição. No mobile, “SER LEMBRADO.” cabe inteiro, os CTAs “VER MEUS PROJETOS” e “INICIAR UM PROJETO” permanecem dentro da largura disponível e “NEXCODE SYSTEMS” continua centrado abaixo da cabeça. Os cards dos projetos já usam os URLs reais em nova aba, e o botão “Subir ao topo” foi conectado a rolagem suave e aparece após a rolagem.

## Referência real da Mara Hair

As capturas full-page desktop e mobile confirmam a nova seção “REFERÊNCIA REAL · MARA HAIR”, com a frase exata “Estou muito feliz com seu trabalho” em destaque e identificação clara da cliente. O layout responsivo mantém a citação legível, sem cortes, e preserva as seções existentes.

## Marca NEXCODE

As capturas desktop e mobile confirmam a substituição de “DEV / STUDIO” por “NEXCODE” no cabeçalho e no rodapé, com símbolo, espaçamento, contraste e responsividade preservados.

## Aba de Referências com print

A aba “REFERÊNCIAS” foi adicionada ao cabeçalho e direciona para a seção correspondente. O print original da conversa da Mara Hair aparece em um cartão vertical com alt text descritivo e legenda contextual, ao lado da citação real. As capturas full-page desktop e mobile confirmam boa integração visual, leitura responsiva e ausência de cortes relevantes.

## Indicador de deslize

O bloco “DESLIZE PARA EXPLORAR” foi removido do hero; o tracking de cabeça e olhos continua implementado por mouse e toque, sem depender do indicador visual.

## Duas referências e remoção do texto de interação

As capturas desktop e mobile confirmam duas referências distintas na seção: o print da conversa da Mara Hair e o print visual enviado anteriormente. Ambos aparecem com legenda e alt text. O rótulo “mova para interagir” foi removido do hero, assim como o indicador anterior de deslize; a interação por mouse/toque permanece sem texto auxiliar visível.

## Identificação dos dois prints usados

A aba usa os dois arquivos de print enviados na conversa: **IMG_4256.PNG**, a captura da conversa de WhatsApp com Mara Hair, e **IMG_4237.PNG**, a captura visual do site de referência enviada anteriormente. A selfie IMG_4236.PNG e a foto IMG_4238.jpeg foram tratadas como referências de identidade do personagem, não como prints da aba.

## Remoção da imagem incorreta

As capturas desktop e mobile confirmam que a imagem inferior incorreta foi removida. A aba Referências agora mantém apenas o print correto da conversa da Mara Hair, com sua legenda e descrição acessível; o espaçamento da seção permanece consistente.

## Espaçamento após remoção da referência incorreta

Após a remoção do segundo print, a área de mídia foi explicitamente convertida para bloco único, com largura máxima de 230px no desktop e 330px no mobile. As novas capturas desktop/mobile confirmam que apenas o print correto da Mara Hair permanece e que a seção conserva espaçamento consistente.

## Auditoria de marcas d’água

A busca no HTML, CSS e componentes públicos não encontrou “Made in Framer”, “Made in Manus”, “Dev / Studio” ou instruções antigas de interação. As capturas desktop e mobile mostram somente a marca NEXCODE e os conteúdos do portfólio. As referências internas de infraestrutura e o coletor técnico não são elementos visuais da página pública e foram preservados para não quebrar o funcionamento do projeto.

## Verificação de badge externo de hospedagem

A inspeção do preview público em desktop e mobile não mostra badge, selo ou sobreposição visual de hospedagem da plataforma. Também não há referência a “Made in Manus” ou “Made in Framer” no HTML, CSS ou componentes públicos. Os arquivos `client/public/__manus__/debug-collector.js` e os caminhos `/manus-storage/` são infraestrutura técnica não visual; removê-los poderia quebrar diagnóstico ou carregamento de ativos, portanto não constituem marca d’água exibida ao visitante.
