# Portfólio Mateus Aviani

Base do portfólio em HTML5, CSS3 e JavaScript puro.

## Organização

- `index.html`: documento HTML-base.
- `css/tokens.css`: variáveis de design e tokens compartilhados.
- `css/base.css`: reset mínimo, tipografia e regras globais.
- `css/components.css`: componentes recorrentes.
- `js/main.js`: ponto de entrada do JavaScript.
- `assets/`: imagens, ícones e fontes locais.
- `docs/`: documentação do projeto.

## Dependências externas

O projeto não possui dependências JavaScript externas. As fontes tipográficas são carregadas do Google Fonts.

## Padrões de implementação

As páginas usam a sequência `tokens.css` → `base.css` → `layout.css` → `components.css` → CSS específico do case. A camada específica não deve ser importada por outra página.

Consulte [docs/implementation-standards.md](docs/implementation-standards.md) para os critérios de reutilização, arquitetura e validação. Para solicitar uma nova página ou seção mantendo esse padrão, copie [docs/new-page-section-prompt.md](docs/new-page-section-prompt.md).
