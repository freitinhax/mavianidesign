# Jornadas Guiadas — Hero

- Figma: https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portf%C3%B3lio?node-id=3455-2244
- Captura: `references/jornadas-guiadas-hero-3455-2244.png`
- Viewport de referência: 1366 × 631 px
- Escopo de código: primitiva compartilhada de capa de case e capa de Jornadas Guiadas

## Estrutura e conteúdo

- Frame `Hero` (3455:2244) contém o banner decorativo e um frame de conteúdo de 1126 px (3455:2245).
- O layout (3455:2246) posiciona o bloco de introdução à esquerda e os metadados à direita, com `justify-between`.
- O bloco esquerdo (3455:2247) mede 550 px e contém o título “JORNADAS GUIADAS” e o contexto.
- O bloco direito `Right-Metadata` (3455:2252) mede 450 px e contém Cliente, Duração, Atuação e Atividades.
- O aviso de NDA não está contido neste nó.

## Layout e responsividade

- O banner `Banner Image Section` (3582:718) mede 1366 × 631 px e tem borda inferior de 2 px.
- O frame de conteúdo tem 1126 px; sua primeira aresta está a 120 px do viewport de referência.
- Título e contexto têm 40 px entre si; label e cópia do contexto têm 16 px.
- Metadados têm 24 px entre linhas. Cada linha usa borda inferior de 1 px e padding inferior de 12 px.
- Responsividade: não especificada no nó.

## Estilo e assets

- Título: Cal Sans Regular, 68 px, line-height 85 px e letter-spacing -1.5 px, cor `#f2f2f2`.
- Label e rótulos dos metadados: Plus Jakarta Sans Bold, 12 px, tracking 0.6 px, caixa alta, cor `#c0ae98`.
- Cópia do contexto: Lora Regular, 13 px, line-height 1.55, cor `#c7c7c7`.
- Valores dos metadados: Lora Regular, 16 px, line-height 1.55, cor `#f2f2f2`.
- Borda dos metadados: `#4e575a`. Borda inferior do banner: `#c0ae98`.
- A camada visual interna é rotacionada em -1.73° e o retorno declara um overlay `rgba(29, 39, 43, 0.9)`; o recorte e a imagem permanecem locais ao case.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| Nenhum asset novo | `Background Image`, dentro de 3582:719; ID não especificado no retorno | Decoração da capa | Não especificado no nó | Rotação -1.73°; recorte não especificado no nó | Banner 1366 × 631 px | Vazio |

## Interações e estados

- Não especificados no nó.

## Checklist de comparação

- [x] Estrutura e conteúdo conferem com o nó.
- [x] Tipografia, cores, espaçamento e composição da primitiva foram conferidos com a captura.
- [x] Nenhum asset novo foi introduzido.
- [x] A responsividade foi tratada sem contradizer o nó desktop.
