# Design System — Cover hero

- Figma: `https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portfólio?node-id=3775-980`
- Nó: `3775:980` (`Cover hero`)
- Captura: `references/design-system-cover-hero.png`
- Viewport de referência: 1366 × 724 px
- Escopo de código: hero e aviso de confidencialidade de `projetos/design-system.html`

## Estrutura e conteúdo

- Banner visual de 1366 × 631 px com borda inferior de 2 px.
- Conteúdo em duas colunas: título e contexto à esquerda; metadados à direita.
- Título com duas linhas: `DESIGN` e `SYSTEM`.
- Contexto com rótulo, primeiro parágrafo, espaçador de 16 px e segundo parágrafo.
- Metadados: cliente, duração, atuação e atividades, separados por linhas horizontais.
- Aviso de confidencialidade sobreposto: ícone, título e texto descritivo.

## Layout e responsividade

- Contêiner central de 1126 px; colunas de 551 px e 455 px, com 120 px entre elas.
- Hero com padding horizontal de 120 px e padding superior de 143 px.
- Título: 68 px, line-height 85 px e tracking -1,5 px.
- Texto do contexto: Lora regular 13 px, line-height 1,55.
- Metadados: contêiner de 455 px, centralizado verticalmente; itens com padding vertical de 8 px, valores de 320 px alinhados à direita e 24 px entre itens e separadores.
- Aviso: largura de 830 px, centralizado horizontalmente a 523 px do topo; padding de 10 px, borda de 2 px, raio de 8 px e sombra `--shadow-200`.
- Comportamento mobile: não especificado no nó; adaptar sem contradizer a composição desktop.

## Estilo e assets

- Fundo: imagem com overlay `rgba(29, 39, 43, .9)`.
- Tipos: Cal Sans para o título, Lora para o contexto e metadados, Plus Jakarta Sans para rótulos.
- Cores observadas: `#1d272b`, `#f2f2f2`, `#c7c7c7`, `#c0ae98`, `#a99985`, `#36210a` e `#d17a22`.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/design-system/background-image.png` | `Background Image` / `3280:3848` | decorativo no hero | PNG; 1482,596 × 706,55 px no layout | `cover`, centralizado e rotacionado -1,73° | fundo de 1366 × 631 px | vazio |
| `assets/icons/confidentiality.svg` | `Confidentiality Icon` / `3775:983` | ícone de aviso | SVG; 24 × 24 px no layout | sem recorte | 24 × 24 px | vazio |
| `docs/figma-specs/references/design-system-cover-hero.png` | `Cover hero` / `3775:980` | referência comparativa | PNG; 1366 × 724 px | captura integral; não usar em produção | somente comparação | vazio |

## Interações e estados

- Não especificados no nó.

## Checklist de comparação

- [ ] Estrutura e conteúdo conferem com o nó.
- [ ] Tipografia, cores, espaçamento e composição conferem com a captura.
- [ ] Nenhum elemento ou conteúdo foi inventado.
- [ ] Arquivo, proporção, escala, alinhamento e contraste conferem com a captura.
- [ ] Responsividade foi implementada sem contradizer o nó.
