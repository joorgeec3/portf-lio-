# Validação dos ajustes de conteúdo

## Computador e tablet

A revisão em 1440px e 768px confirmou que o hero mantém a composição original com a nova copy organizada, o menu recebe os rótulos solicitados, os serviços permanecem no mesmo padrão visual e a seção compacta de processo entra depois dos serviços. Os projetos continuam com o tratamento visual existente e o FAQ aparece antes do contato. Não foram identificados cortes horizontais ou mudanças indevidas de identidade visual nessas larguras.

## Celular

A revisão em 390px confirmou que a nova descrição do hero, o CTA “Contar minha ideia”, a seção de processo, os projetos, o depoimento, o FAQ e a chamada final aparecem em sequência sem cortes horizontais. O acordeão permanece compacto e legível, e a composição visual existente foi preservada.

## Acessibilidade e contrato de conteúdo

Os novos CTAs permanecem como links semânticos com rótulos claros, e o FAQ usa o componente Accordion existente, com `AccordionTrigger` nativo e estilo `focus-visible` para navegação por teclado. As seções têm `aria-labelledby`, os projetos mantêm `aria-label` e os links externos preservam `target="_blank"` com `rel="noreferrer"`. A busca na interface pública não encontrou os textos antigos; a única ocorrência técnica restante está no teste que verifica sua ausência.

O contrato de conteúdo foi executado com Vitest: 1 arquivo, 2 testes aprovados.

## Contorno dos textos pequenos

A revisão em 1440px e 390px confirmou que os microtextos receberam definição adicional por contorno tipográfico sutil e sombra mínima baseada na própria cor. O contorno foi aplicado nos rótulos do cabeçalho, hero, rails, assinatura, categorias, notas, legendas e rodapé, sem alteração de paleta, layout, personagem, tracking ou animações. Não foram identificados cortes ou peso visual excessivo.

## Tablet — contorno tipográfico

A revisão em 768px confirmou que o contorno discreto mantém os textos pequenos definidos no cabeçalho, hero, rails, assinatura, projetos, legendas e rodapé. O ajuste não gerou cortes, sobreposição ou alteração perceptível da identidade visual.

## Correção mobile — frase e microtextos

A revisão em 390px confirmou que a frase introdutória não cobre mais o rosto: ela permanece acima do personagem, com espaço visual claro entre texto, cabeça e assinatura. A cabeça foi reposicionada para uma área própria, sem alterar o personagem ou o tracking. Em 768px, a composição também permaneceu separada e sem cortes. Os microtextos ficaram mais definidos com contorno e leve sombra, mantendo a mesma identidade visual.

## Revisão desktop após correção mobile

A revisão em 1440px confirmou que o ajuste de espaçamento do breakpoint mobile não alterou a composição desktop: o texto permanece separado do personagem, o rosto está livre e a hierarquia do hero continua preservada.

## Personagem mais baixo no mobile

A revisão em 390px confirmou que o personagem foi deslocado para baixo e a frase introdutória permanece acima do rosto, sem sobreposição. A assinatura NEXCODE SYSTEMS ficou abaixo da cabeça, em uma faixa opaca própria, sem desaparecer no cabelo nem colidir com o texto inferior. Em 768px, a composição intermediária permaneceu estável e sem cortes.

## Fontes ampliadas e personagem ajustado

A revisão em 390px confirmou que a frase não cobre o rosto, a assinatura permanece visível e os textos pequenos estão maiores e mais legíveis. O personagem foi reduzido e posicionado com uma faixa de respiro para não colidir com a frase inferior nem com os CTAs. Em 768px, a composição permanece estável, sem cortes ou regressões.

## Restauração da composição anterior

A composição anterior do hero foi restaurada no breakpoint mobile: o avatar voltou às proporções e à posição anteriores, enquanto os ajustes de tipografia permaneceram. Tablet e desktop mantiveram a composição editorial original, sem mudanças em navegação, conteúdo, tracking ou animações.

## Referência Dani Caye Beauty

O print enviado foi adicionado ao lado da referência da Mara Hair, com legenda própria, alt text descritivo e layout responsivo. A seção foi verificada em celular, tablet e desktop; as duas imagens permanecem visíveis sem cortes indevidos.
