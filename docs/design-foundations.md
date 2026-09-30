# Fundações do design

> Este documento registra a direção visual. Para regras de implementação, arquitetura de CSS e reutilização de componentes, consulte `docs/implementation-standards.md`.

Análise consolidada dos nós `2867:1134`, `3455:2237`, `2867:1513`, `2867:1613` e `2867:1700` do arquivo Figma Portfólio. Esta etapa registra fundações; não representa páginas completas.

## 1. Inventário de tokens

Os tokens estão em [`css/tokens.css`](../css/tokens.css): fundo `#1d272b`; superfícies `#252e32` e `#1e2a2b`; texto principal `#f2f2f2`; texto suave `#c7c7c7`; texto secundário `#c0ae98`; texto discreto `#8c8c8c`; acento `#a99985`; borda clara `#ddc6aa`; alerta `#d17a22` sobre `#36210a`.

As famílias recorrentes são Cal Sans (display), Lora (corpo), Plus Jakarta Sans (interface) e IBM Plex Mono (números). Títulos usam escala fluida, tracking negativo e line-height próximo de 1.2; corpo usa 1.55; labels usam tracking positivo e line-height próximo de 1.35. A escala de espaçamento parte de 4 px. O container desktop observado é de aproximadamente 1126 px, com gutter de 120 px. Tags e CTAs são pills; cards usam raios de 4–8 px.

## 2. Fontes necessárias

Adicionar versões licenciadas ou locais de Cal Sans, Lora, Plus Jakarta Sans e IBM Plex Mono em `assets/fonts`. Urbanist/Roboto aparecem em trechos específicos do Design System e só devem ser adicionadas se forem confirmadas como necessárias. Nenhuma fonte externa foi importada.

## 3. Componentes recorrentes identificados

Header com marca e navegação; footer com contato e informações de horário; CTA em pill; tag de habilidade; card de projeto com índice, título, descrição, CTA e tags; bloco de metadados com divisórias; título de seção; timeline de experiências com data, empresa, ponto, linha e detalhes.

## 4. Regras de responsividade inferidas

O container deve ser centralizado e fluido. O grid de duas colunas deve colapsar em tablet/mobile; gutters, títulos e espaçamentos devem reduzir com `clamp()`. Cards e metadados precisam quebrar linha. Imagens permanecem proporcionais. Breakpoints só alteram composição: aproximadamente 768 px e 1024 px.

## 5. Assets necessários

Marca, ícones de navegação/LinkedIn/download/setas, imagens de capa e projetos, ilustrações decorativas, logos das empresas da timeline e fontes locais. Assets exportados do Figma são temporários e devem ser baixados para `assets/` antes da implementação. Nenhum asset foi copiado nesta etapa.

## 6. Elementos que precisam de decisão manual

Confirmar fontes e pesos licenciados; contrastes e estados interativos; comportamento mobile do header e timeline; projetos publicáveis sem violar NDA; e se a página de Design System terá namespace próprio.

## 7. Elementos que não devem usar CSS absoluto

Header, navegação, grids, cards, metadados, timeline, footer e espaçamento normal devem permanecer no fluxo com Grid/Flex. Absolute fica reservado a decoração independente, overlays e ícones quando necessário, sem remover conteúdo essencial do fluxo acessível.
