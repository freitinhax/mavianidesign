# Container — galeria de resultados

- Figma: `https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portf%C3%B3lio?node-id=3487-1285`
- Nó: `3487:1285`
- Captura: `references/jornadas-guiadas-resultados-galeria-3487-1285.png`
- Viewport de referência: `1126 × 2277 px` no export do nó.
- Escopo de código: composição das molduras da galeria de resultados em `projetos/jornadas-guiadas.html`.

## Estrutura e conteúdo

- Contêiner vertical com uma linha superior e um grupo inferior.
- A linha superior contém `Project Screenshot 1` e uma coluna de `Project Screenshot 2`/`Project Screenshot 3`.
- O grupo inferior contém `Project Chart Image` e `Project Details Image`.

## Layout e responsividade

- O contêiner usa flex em coluna, alinhado ao início, com gap de `36.156 px`.
- A linha superior ocupa toda a largura, é flex e tem gap de `33 px`.
- `Project Screenshot 1` não encolhe e mede `550 × 662 px`.
- A coluna direita usa `flex: 1 0 0`, largura mínima de `1 px`, direção vertical e gap de `36.5 px`.
- Os itens da coluna direita não encolhem e têm proporções `2732/1836` e `2732/1394`.
- O grupo inferior ocupa toda a largura, é flex em coluna, não encolhe e tem gap de `58 px`; suas proporções são `2732/2256` e `2732/1394`.
- O nó não especifica responsividade. Para não exceder a viewport, a linha superior passa a uma coluna abaixo de `900 px`, mantendo as proporções.

## Estilo e assets

- As molduras têm raio de `8 px`, overflow recortado e as imagens do nó usam blur de `8 px`.
- Por solicitação do usuário, nenhum asset foi salvo. Cada área interna mantém uma tag `<img>` sem `src`, com dimensões explícitas, e fundo claro; quando receber um arquivo, a imagem preencherá a área com `object-fit: cover`.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| Não salvo | `Project Screenshot Image` / `3366:830` | moldura principal | não especificado no nó | preencher com `cover`; foco não especificado | `550 × 662 px` | vazio |
| Não salvo | `Project Screenshot Image 2` / `3366:831` | primeira moldura lateral | não especificado no nó | `2732/1836`; preencher com `cover` | largura restante | vazio |
| Não salvo | `Project Screenshot Image 3` / `3366:832` | segunda moldura lateral | não especificado no nó | `2732/1394`; preencher com `cover` | largura restante | vazio |
| Não salvo | `Project Chart Image` / `3366:833` | primeira moldura inferior | não especificado no nó | `2732/2256`; preencher com `cover` | largura total | vazio |
| Não salvo | `Project Details Image` / `3366:834` | segunda moldura inferior | não especificado no nó | `2732/1394`; preencher com `cover` | largura total | vazio |

## Interações e estados

- Não especificados no nó.

## Checklist de comparação

- [x] Hierarquia e geometrias foram registradas a partir do nó isolado.
- [x] As regras do layout usam somente flex para a galeria.
- [x] As tags de imagem não receberam assets de produção, conforme solicitado.
- [ ] Comparar a renderização nos viewports de validação.
