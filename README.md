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

- GSAP Core `3.15.0` é carregado pelo jsDelivr em `index.html`, com versão fixa e Subresource Integrity (SRI). A biblioteca fica disponível globalmente como `window.gsap` para animações futuras.
- Plugins do GSAP devem ser adicionados apenas quando uma funcionalidade precisar deles, também com versão fixa e SRI, para evitar bytes desnecessários no carregamento inicial.

## Padrões de implementação

As páginas usam a sequência `tokens.css` → `base.css` → `layout.css` → `components.css` → CSS específico do case. A camada específica não deve ser importada por outra página.

Consulte [docs/implementation-standards.md](docs/implementation-standards.md) para os critérios de reutilização, arquitetura e validação. Para solicitar uma nova página ou seção mantendo esse padrão, copie [docs/new-page-section-prompt.md](docs/new-page-section-prompt.md).
