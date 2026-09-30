# Design System — Desafios e soluções

- Figma: `https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portfólio?node-id=3114-5426`
- Nó: `3114:5426` (`Container`)
- Captura: `references/design-system-desafios-solucoes.png`
- Viewport de referência: 1203 × 539 px
- Escopo de código: section de desafios e soluções de `projetos/design-system.html`

## Estrutura e conteúdo

- Duas colunas: `DESAFIOS ENCONTRADOS` e `SOLUÇÕES PROPOSTAS`.
- Cada coluna contém um título e três cards de texto.
- A ilustração de interrogação é decorativa e sobrepõe o canto superior esquerdo da primeira coluna; a exclamação sobrepõe o canto superior direito da segunda.

## Layout e responsividade

- Contêiner com duas colunas de mesma largura e 80 px entre elas.
- Cada coluna possui 32 px entre o título e a lista; títulos centralizados, em 42 px, line-height 1,2 e tracking -0,5 px.
- Cards com 140 px de altura, 24 px de padding, 8 px entre cards, raio de 8 px e fundo `#252e32`.
- Texto dos cards em Lora regular, 20 px e line-height 1,45.
- Ilustração esquerda: 101 × 154 px, posição -51 × -21 px, opacidade 50%. Ilustração direita: 52 × 152 px, posição 497 × -21 px, opacidade 50%.
- Comportamento mobile: não especificado no nó; manter a ordem das colunas em uma coluna e conter as ilustrações no espaço disponível.

## Estilo e assets

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/design-system/challenges-question.png` | `Character Illustration` / `3576:2388` | decorativa | PNG; 101 × 154 px no layout | sem recorte | 101 × 154 px | vazio |
| `assets/images/design-system/challenges-exclamation.png` | `Character Illustration` / `3576:2392` | decorativa | PNG; 52 × 152 px no layout | sem recorte | 52 × 152 px | vazio |
| `docs/figma-specs/references/design-system-desafios-solucoes.png` | `Container` / `3114:5426` | referência comparativa | PNG; 1203 × 539 px | captura integral; não usar em produção | somente comparação | vazio |

## Interações e estados

- Não especificados no nó.

## Checklist de comparação

- [ ] Estrutura e conteúdo conferem com o nó.
- [ ] Tipografia, cores, espaçamento e composição conferem com a captura.
- [ ] Nenhum elemento ou conteúdo foi inventado.
- [ ] Arquivo, proporção, escala, alinhamento e contraste conferem com a captura.
- [ ] Responsividade foi implementada sem contradizer o nó.
