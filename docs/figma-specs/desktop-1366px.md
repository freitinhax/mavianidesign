# Desktop 1366px

- Figma: https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portf%C3%B3lio?node-id=2867-1134
- Captura: `references/desktop-1366px.png`
- Viewport de referência: 1366 x 9118 px
- Escopo de código: página inicial estática e seus assets visuais

## Estrutura e conteúdo

- O nó é o frame `Desktop 1366px` (`2867:1134`), com Header, projetos de destaque, experiência profissional, formação educacional, sobre e Contact Form Section.
- O Header mede 1366 x 48 px. A marca contém o vetor `Vector (Stroke)` e o texto “Mateus Aviani Design”.
- A seção de experiência apresenta uma coluna de logos para Indra Company, Stefanini Group e Syscoin e marcadores `Timeline Dot Outer` de 20 x 20 px.
- A seção de formação contém as camadas `UnB image` (484.314 x 338.866 px no layout) e `UnB Logo` (207.907 x 95 px no layout).
- A seção sobre usa a composição `about-me group image` (`3702:783`), que reúne `About Section Photo`, a instância `010-10/04` e a instância `Crepe/65`, além de um vetor decorativo de 626 x 802 px.
- Após `About Section` (`3626:625`), o nó contém `Floating Image` (`3631:1090`) e `Project Container` (`3642:619`) com `Project Image` e `Project Image 2`.
- O rodapé contém o vetor decorativo `Vector (Stroke)` de 457 x 586 px, além dos ícones linkedin e Download CV.

## Layout e responsividade

- A composição observada é desktop, com largura de 1366 px e conteúdo recorrente de 1126 px a 120 px das laterais.
- A responsividade não é especificada no nó.
- Elementos decorativos flutuantes preservam as dimensões e a posição observadas dentro de seus respectivos blocos; o layout principal usa fluxo normal.
- A composição `about-me group image` mede 359 x 344 px. Nela, `About Section Photo` ocupa x=12, y=28, 335 x 316 px e tem máscara com raio de 8 px; `010-10/04` ocupa 359 x 316 px em y=28 e `Crepe/65` ocupa 144 x 50 px em x=107.5, y=0.
- `Floating Image` é exibida em x=68, y=6648.808, com 145.035 x 161.669 px. `Project Container` está em x=360, y=6896, mede 655 x 1251 px e reúne exports de 634 x 142 px e 655 x 1045 px, separados por 64 px.

## Estilo e assets

- Fundo observado: `#1D272B`; textos e bordas usam os tokens locais correspondentes.
- Tipografias observadas: Cal Sans, Lora, Plus Jakarta Sans, IBM Plex Mono e Urbanist.
- Ícones e vetores foram exportados das camadas do nó; imagens informativas são elementos `img` com dimensões intrínsecas explícitas e carregamento tardio fora do hero.
- Os PNGs auditados abaixo são renders exportados da camada/frame registrado (não os arquivos raw); o crop, as máscaras, os efeitos e a composição visíveis no canvas já estão incorporados ao arquivo.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/icons/logo-mateus-aviani.svg` | `Vector (Stroke)` / `3281:3854` | marca decorativa | SVG, 19 x 24 px | proporção intrínseca | 19 x 24 px | vazio |
| `assets/icons/linkedin.svg` | `linkedin` / `3642:635` | ícone do link Linkedin | SVG, 16 x 16 px | proporção intrínseca | 16 x 16 px | vazio |
| `assets/icons/download.svg` | `Download CV Icon` / `3642:677` | ícone de download | SVG, 24 x 24 px | proporção intrínseca | 24 x 24 px | vazio |
| `assets/icons/project-external-link.svg` | `Button Icon` / `3660:1244` | ícone dos botões de projeto | SVG, 24 x 24 px | proporção intrínseca | 24 x 24 px | vazio |
| `assets/icons/timeline-dot.svg` | `Timeline Dot Outer` / `3591:841` | marcador da linha do tempo | SVG, 20 x 20 px | proporção intrínseca | 20 x 20 px | vazio |
| `assets/icons/contact-pattern.svg` | `Vector (Stroke)` / `3642:640` | decoração do rodapé | SVG, 457 x 586 px | proporção intrínseca | 457 x 586 px | vazio |
| `assets/icons/about-pattern.svg` | `Vector (Stroke)` / `3627:627` | decoração da seção sobre | SVG, 626 x 802 px | proporção intrínseca | 626 x 802 px | vazio |
| `assets/images/desktop-1366px/project-jornadas.png` | `Project Image` / `3635:625` | arte decorativa “Designólogo” | PNG, 634 x 142 px | crop e composição incorporados ao export; foco não especificado no nó | 634 x 142 px | vazio |
| `assets/images/desktop-1366px/project-design-system.png` | `Project Image 2` / `3635:620` | ilustração informativa do processo criativo | PNG, 655 x 1045 px | crop e composição incorporados ao export; foco não especificado no nó | 655 x 1045 px | Ilustração do processo criativo em design |
| `assets/images/desktop-1366px/experience-indra.png` | `Company Logo Column` / `3593:944` | logo de experiência composto | PNG, 32 x 32 px | fundo e escala incorporados ao export | 32 x 32 px | vazio |
| `assets/images/desktop-1366px/experience-stefanini.png` | `Company Logo Column` / `3591:940` | logo de experiência composto | PNG, 32 x 32 px | fundo e escala incorporados ao export | 32 x 32 px | vazio |
| `assets/images/desktop-1366px/experience-syscoin.png` | `Company Logo Column` / `3591:812` | logo de experiência composto | PNG, 32 x 32 px | fundo e escala incorporados ao export | 32 x 32 px | vazio |
| `assets/images/desktop-1366px/education-unb.png` | `UnB image` / `3631:1083` | imagem informativa da formação | PNG, 485 x 339 px | crop e máscara incorporados ao export; foco não especificado no nó | 484.314 x 338.866 px | Vista aérea urbana de Brasília |
| `assets/images/desktop-1366px/education-unb-logo.png` | `UnB Logo` / `2867:1246` | logo informativo da formação | PNG, 208 x 95 px | crop e composição incorporados ao export; foco não especificado no nó | 207.907 x 95 px | Logo da Universidade de Brasília |
| `assets/images/desktop-1366px/about-composition.png` | `about-me group image` / `3702:783` | composição informativa e decorativa da seção sobre | PNG, 359 x 344 px | crop, máscara, textura rotacionada e faixa `Crepe/65` incorporados ao export | 359 x 344 px | Retrato de Mateus Aviani com composição gráfica decorativa |
| `assets/images/desktop-1366px/about-floating-image.png` | `Floating Image` / `3631:1090` | decoração flutuante | PNG, 146 x 162 px | composição incorporada ao export | 145.035 x 161.669 px | vazio |

## Interações e estados

- Há botões “VISUALIZAR PROJETO” com um ícone de seta; nenhum estado adicional foi especificado no nó.
- O nó não especifica os destinos dos links.

## Checklist de comparação

- [x] Estrutura e conteúdo conferidos com o nó.
- [x] Tipografia, cores, espaçamento e composição registrados a partir do nó e da captura.
- [x] Nenhum asset de produção foi derivado da captura.
- [x] Cada imagem e ícone usado foi exportado da camada Figma registrada.
- [x] Arquivo, proporção, recorte, escala, alinhamento e contraste conferidos contra o nó quando expostos.
- [x] Imagens informativas usam `img` com dimensões explícitas; decoração usa CSS quando adequada.
- [x] Responsividade existente foi preservada sem contradizer o nó desktop.
