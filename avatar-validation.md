# Validação visual do avatar

A captura desktop final mostra apenas a cabeça 3D baseada na foto enviada, com rosto reconhecível, cabelo escuro curto e alinhado, sobrancelhas e olhos visíveis, sem corpo inteiro e sem quadriculado no fundo. A composição integra a cabeça ao fundo editorial mineral sem retângulo aparente.

A captura mobile final confirma o mesmo recorte, escala adequada e legibilidade do hero. O gesto vertical permanece livre porque o tracking por toque só responde quando há intenção horizontal; ao terminar ou cancelar o toque, a posição retorna suavemente ao centro.

A validação técnica final executou `pnpm check` e `pnpm build` com sucesso. O build emite apenas o aviso de chunk JavaScript acima de 500 kB, sem erro de compilação.
