# Portfólio Mateus Aviani

## Stack
- HTML5, CSS3 e JavaScript puro.
- Sem framework, Tailwind ou dependências novas sem aprovação.
- Priorizar HTML semântico, CSS responsivo e JavaScript progressivo.

## Direção visual
- Tema escuro editorial.
- Fundo: #1d272b.
- Títulos: Cal Sans e Plus Jakarta Sans.
- Corpo: Lora.
- Usar tokens em css/tokens.css; não repetir valores brutos sem necessidade.

## Estrutura
- Páginas em HTML estático.
- Componentes recorrentes definidos em css/components.css.
- JavaScript separado por responsabilidade.
- Projetos e cards devem usar dados estruturados quando houver repetição.

## Arquitetura CSS e reutilização
- Carregar os estilos nesta ordem: `tokens.css` → `base.css` → `layout.css` → `components.css` → CSS específico da página. Uma página nunca deve importar o stylesheet de outra página.
- `css/tokens.css` contém apenas valores semânticos realmente compartilhados (cores, tipografia, raios, sombras e espaçamentos). Não criar token para uma medida de recorte, posição decorativa ou exceção de um único case.
- `css/base.css` define fundamentos globais; `css/layout.css`, primitivas de fluxo e largura; `css/components.css`, componentes reutilizáveis. O CSS de cada projeto deve conter somente sua geometria, composição, assets, recortes, overlays e exceções responsivas.
- Preferir as primitivas e componentes existentes: `.container`, `.section`, `.case-study`, `.case-cover`, `.case-title`, `.eyebrow`, `.notice`, `.back-link`, `.surface-card`, `.icon-badge`, `.media-frame`, `.tag`, `.project-button`, header e footer.
- As capas de case usam `.case-cover`, `.case-cover__layout`, `.case-cover__intro`, `.case-cover__context`, `.case-cover__copy` e `.case-cover__meta`. Imagem, filtro e composição editorial da capa continuam no CSS do case; altura, grid, tipografia, metadados, borda e aviso seguem a API compartilhada.
- Globalizar uma regra somente quando ela tiver semântica estável e uso atual ou previsto em mais de um contexto. Caso contrário, mantê-la com prefixo da página ou da seção no stylesheet local.
- Não transformar coordenadas de crop, transformações artísticas, imagens de fundo, overlays ou ajustes exclusivos de breakpoint em componentes globais. Não criar aliases para classes removidas nem utilitários genéricos que alterem elementos HTML indiscriminadamente.
- Antes de criar um componente ou token, pesquisar a API existente e verificar se uma composição dos componentes atuais resolve o caso.

## Implementação de páginas e seções
- Antes de editar, identificar o documento HTML alvo, o stylesheet específico e os componentes globais que podem ser compostos.
- Quando houver nó Figma, seguir integralmente o fluxo de especificação abaixo. Sem nó Figma, não inventar medidas ou fatos atribuídos ao Figma; usar as diretrizes visuais e o contexto fornecido.
- Usar elementos HTML semânticos e preservar a estrutura geral das páginas de projeto que já estejam adequadas no desktop.
- Imagens de conteúdo usam `<img>` ou `<picture>`; decoração pode usar background. Informar dimensões explícitas quando conhecidas e manter o recorte no CSS local quando ele for específico.
- Registrar mudanças de arquitetura, componentes ou tokens em `docs/implementation-standards.md`. Usar `docs/new-page-section-prompt.md` como ponto de partida para novas solicitações.

## Figma MCP
1. Trabalhar apenas com o nó Figma fornecido.
2. Rodar get_design_context primeiro.
3. Se o retorno for grande, usar get_metadata e buscar apenas seções necessárias.
4. Usar screenshot como referência visual.
5. Tratar React/Tailwind retornado pelo Figma somente como referência estrutural.
6. Converter para HTML/CSS/JS puro.
7. Reutilizar assets fornecidos pelo Figma; salvar localmente antes de publicar.
8. Não usar posicionamento absoluto para layout normal.
9. Implementar responsividade, mesmo quando o Figma trouxer apenas desktop.

## Especificação de implementação Figma
- Esta etapa é obrigatória somente antes de criar código novo a partir de um nó Figma; não criar, atualizar ou consultar specs em correções isoladas, refactors, conteúdo ou JavaScript sem referência Figma.
- O nó Figma fornecido é a única fonte de verdade. Não inferir conteúdo, elementos, estados, medidas ou estilos que não estejam no nó.
- Antes de escrever código, criar ou atualizar `docs/figma-specs/<slug-do-no>.md` conforme o modelo em `docs/figma-specs/README.md` e salvar uma captura comparativa em `docs/figma-specs/references/<slug-do-no>.png`.
- A spec deve registrar apenas fatos observáveis no nó: hierarquia, conteúdo, assets, tipografia, cores, espaçamento, dimensões, layout, comportamento responsivo e interações. Valores devem ser exatos quando o Figma os expuser; caso contrário, marcar como “não especificado no nó”, sem estimar.
- Após implementar, comparar a renderização com a captura. Corrigir somente divergências comprováveis; o código final deve reproduzir fielmente o protótipo no viewport de referência e adaptar-se responsivamente sem alterar seu conteúdo ou intenção visual.
- Specs e capturas são artefatos de suporte, não fontes de verdade alternativas: quando houver conflito, atualizar os artefatos para refletir o nó, nunca o contrário.

## Assets extraídos do Figma
- Para cada imagem ou ícone de código novo vindo de um nó Figma, identificar e exportar a camada exata do nó. Nunca recortar a screenshot, reutilizar um arquivo apenas por semelhança visual ou substituir um asset existente sem confirmar sua camada de origem.
- Registrar cada asset na spec com: caminho local, nome/ID da camada Figma, função, formato e dimensões exportadas, proporção, recorte/posição focal, dimensão de exibição e alt text. Se o nó não especificar algum dado, registrar “não especificado no nó”.
- Salvar vetores e ícones em `assets/icons/` como SVG. Salvar imagens em `assets/images/<slug-do-no>/`; preferir WebP para fotos e manter PNG somente quando transparência ou fidelidade visual exigir. Usar nomes descritivos da função, nunca nomes genéricos de exportação.
- Implementar conteúdo visual com `<img>` ou `<picture>`, com `width` e `height` explícitos, `loading="lazy"` fora do hero e `object-fit`/`object-position` compatíveis com o nó. `background-image` é reservado a decoração sem conteúdo essencial.
- Não distorcer a proporção intrínseca de imagens ou SVGs. Criar variantes responsivas apenas quando houver uma necessidade de exibição comprovada e registrá-las na spec.
- Antes de concluir, conferir na captura se o arquivo correto, recorte, escala, alinhamento e contraste correspondem ao nó.

## Responsividade e validação
- Definir breakpoints pelo ponto em que o conteúdo deixa de caber, não por um valor arbitrário. Preservar a geometria desktop já aprovada, salvo correção comprovada.
- Em grids e flex containers com texto ou mídia redimensionável, permitir encolhimento com `minmax(0, 1fr)` e/ou `min-width: 0` quando necessário.
- Conter o overflow de decoração no componente ou moldura responsável; não esconder indiscriminadamente o overflow do documento. Rolagem horizontal só é permitida para conteúdo que a exija explicitamente, como a paleta do Design System.
- Validar a página alterada em 1366, 1024, 900, 768, 640, 390 e 320 px, quando aplicável ao escopo. Conferir containers, títulos longos, metadados, cards, mídia, áreas de toque e ausência de overflow horizontal visível.
- Fazer uma busca estática final para imports entre CSS de páginas, seletores legados removidos e dependências não utilizadas. Não adicionar bibliotecas, JavaScript, assets ou efeitos sem necessidade do escopo.

## Acessibilidade e desempenho
- Imagens com alt útil; decorativas com alt vazio.
- Respeitar prefers-reduced-motion.
- Imagens com loading="lazy", exceto hero.
- Não inserir texto essencial dentro de imagens.
- Não expor dados, telas ou nomenclaturas cobertas por NDA.
