# Design System — Fundamentos visuais

- Figma: `https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portfólio?node-id=2906-2377`
- Nó: `2906:2377` (`Visual Fundamentals Section`)
- Captura: `references/design-system-fundamentos-visuais.png`
- Viewport de referência: 1126 × 863 px
- Escopo de código: section Fundamentos Visuais de `projetos/design-system.html`

## Estrutura e conteúdo

- Título, descrição, duas paletas de oito amostras e exemplos de estilos Heading e Body.
- Cada amostra de cor contém índice, hexadecimal, área de 60 px e indicador circular de contraste.
- O exemplo Heading contém H1 a H6; o exemplo Body contém Body default e Body Small com textos de amostra.

## Layout e responsividade

- A section usa grupos verticais separados por 80 px; as paletas primária e secundária têm 40 px entre si.
- Paletas: rótulo a 12 px, 8 px até as amostras e 8 px entre amostras. Cada amostra tem padding externo de 4 px, padding do rótulo de 4 px, gap de 4 px, raio de 8 px e área de cor de 60 px.
- Exemplos tipográficos: colunas de 513 px e 548 px, com 65 px entre elas.
- Em telas estreitas, manter as amostras horizontalmente roláveis e empilhar os exemplos tipográficos sem ocultar conteúdo.

## Estilo e assets

- Título: Cal Sans regular, 68 px/85 px, tracking -1,5 px, `#f2f2f2`.
- Descrição: Lora medium, 16 px, line-height 1,55, `#c7c7c7`.
- Rótulos das paletas: Plus Jakarta Sans bold, 12 px, tracking 0,6 px, `#f2f2f2`.
- Exemplos: Roboto; título de grupo bold 36 px `#8c8c8c`, divisores `#adadad`, amostras em `#f2f2f2`.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/icons/design-system-swatch-circle-dark.svg` | `circle` / `2906:1979` | indicador de contraste para tons claros | SVG; 12 × 12 px no layout | sem recorte | 12 × 12 px | vazio |
| `assets/icons/design-system-swatch-circle-light.svg` | `circle` / `2906:2009` | indicador de contraste para tons escuros | SVG; 12 × 12 px no layout | sem recorte | 12 × 12 px | vazio |
| `docs/figma-specs/references/design-system-fundamentos-visuais.png` | `Visual Fundamentals Section` / `2906:2377` | referência comparativa | PNG; 1126 × 863 px | captura integral; não usar em produção | somente comparação | vazio |

## Interações e estados

- Não especificados no nó.

## Checklist de comparação

- [ ] Estrutura e conteúdo conferem com o nó.
- [ ] Tipografia, cores, espaçamento e composição conferem com a captura.
- [ ] Nenhum elemento ou conteúdo foi inventado.
- [ ] Arquivo, proporção, escala, alinhamento e contraste conferem com a captura.
- [ ] Responsividade foi implementada sem contradizer o nó.
