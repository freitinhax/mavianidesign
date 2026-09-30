# Container — Resultados obtidos

- Figma: `https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portf%C3%B3lio?node-id=3582-704`
- Nó: `3582:704`
- Captura: `references/jornadas-guiadas-resultados-obtidos.png`
- Viewport de referência: `1126 × 2442 px` no export do nó.
- Escopo de código: galeria de imagens da seção `RESULTADOS OBTIDOS` em `projetos/jornadas-guiadas.html`.

## Estrutura e conteúdo

- Contêiner vertical com o título `RESULTADOS OBTIDOS` e uma galeria.
- A galeria contém: uma composição superior, com `Project Screenshot 1` à esquerda e `Project Screenshot 2`/`Project Screenshot 3` empilhadas à direita; em seguida, `Project Chart Image` e `Project Details Image` em largura total.

## Layout e responsividade

- O contêiner tem gap vertical de `80 px` entre título e galeria.
- A galeria tem gap de `36.156 px` entre a composição superior e os quadros inferiores.
- Na composição superior, a coluna esquerda mede `550 × 662 px`; o gap horizontal é `33 px`.
- A coluna direita ocupa o espaço restante e tem gap de `36.5 px` entre os dois quadros.
- Os quadros direitos usam as proporções `2732/1836` e `2732/1394`; os quadros inferiores usam `2732/2256` e `2732/1394`, com gap de `58 px`.
- O comportamento responsivo não é especificado no nó. A implementação usa `display: flex`, empilhando a composição superior quando as duas colunas deixam de caber; as proporções dos quadros são preservadas.

## Estilo e assets

- Título: Cal Sans Regular, `68 px`, line-height `85 px`, letter-spacing `-1.5 px`, cor `#f2f2f2`.
- Os cinco quadros têm raio de `8 px`; as imagens do nó usam blur de `8 px`.
- Por solicitação do usuário, os assets do nó não foram adicionados ao projeto: as tags `<img>` permanecem sem `src` e suas molduras usam fundo claro. Quando forem definidos, os arquivos devem preencher a moldura com `object-fit: cover`.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| Não salvo | `Project Screenshot Image` / `3366:830` | primeira moldura | não especificado no nó | ocupar a moldura com `cover`; foco não especificado | `550 × 662 px` | vazio |
| Não salvo | `Project Screenshot Image 2` / `3366:831` | segunda moldura | não especificado no nó | `2732/1836`; ocupar a moldura com `cover` | largura restante | vazio |
| Não salvo | `Project Screenshot Image 3` / `3366:832` | terceira moldura | não especificado no nó | `2732/1394`; ocupar a moldura com `cover` | largura restante | vazio |
| Não salvo | `Project Chart Image` / `3366:833` | quarta moldura | não especificado no nó | `2732/2256`; ocupar a moldura com `cover` | largura total | vazio |
| Não salvo | `Project Details Image` / `3366:834` | quinta moldura | não especificado no nó | `2732/1394`; ocupar a moldura com `cover` | largura total | vazio |

## Interações e estados

- Não especificados no nó.

## Checklist de comparação

- [x] Estrutura e conteúdo conferem com o nó.
- [x] Tipografia, espaçamento e composição foram registrados a partir do nó.
- [x] Nenhum asset de produção foi adicionado, conforme solicitado.
- [x] As tags de imagem preservam dimensões explícitas e estão prontas para receber `src`.
- [ ] Comparar a renderização com a captura nos viewports de validação.
