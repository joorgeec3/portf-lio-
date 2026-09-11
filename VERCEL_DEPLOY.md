# NEXCODE — Deploy na Vercel

Esta cópia é um export estático do portfólio NEXCODE. Os assets visuais estão em `client/public/assets` e não dependem do storage do Manus. O runtime, o coletor de debug e o analytics do Manus foram removidos desta cópia para evitar overlay, tela escura e chamadas externas incompatíveis.

## Importação recomendada

No painel da Vercel, importe o repositório ou a pasta deste projeto e mantenha as configurações detectadas pelo arquivo `vercel.json`.

| Configuração | Valor |
|---|---|
| Framework | Vite |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm build` |
| Output Directory | `dist/public` |

Não é necessário configurar variáveis de ambiente para o funcionamento visual do portfólio. O botão de contato usa o link público do WhatsApp já definido no componente.

## Teste local de produção

Execute `pnpm install`, depois `pnpm build` e `pnpm exec vite preview --host`. Abra o endereço exibido pelo Vite e confira o carregamento do avatar, capas dos projetos, referências, menu móvel e links.

A hospedagem nativa do Manus continua sendo a opção mais direta para esta versão, mas este export foi separado para reduzir dependências específicas do Manus quando usado na Vercel.

## Validação adicional

O comando `pnpm build` concluiu e `vite preview` respondeu localmente com o título NEXCODE. A URL temporária de exposição do sandbox pode mostrar indisponibilidade mesmo quando o processo local está saudável; esse proxy não faz parte do deploy Vercel. A validação confiável foi feita via HTTP local, incluindo o HTML, o avatar, a capa Cibelly e a varredura do bundle sem `manus-storage`, `Made with Manus` ou `VITE_ANALYTICS`.

## Ajustes finais desta versão

O topo agora inclui um seletor de idioma com Português, Português de Portugal, Inglês, Francês e Alemão. O hero ganhou o CTA “Ver serviços”. Os links de WhatsApp e “Contar minha ideia” abrem uma conversa com uma mensagem inicial pronta, que o cliente só precisa enviar ou editar. No mobile, a faixa do hero foi ampliada e a frase inferior foi reposicionada depois do personagem e da assinatura, antes dos botões, para evitar sobreposição.
