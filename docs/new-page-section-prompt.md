# Prompt reutilizável para nova página ou seção

Copie o texto abaixo, preencha os campos entre colchetes e envie junto com os assets ou a referência necessária.

```text
Implemente [uma nova página / uma nova seção] no portfólio.

Escopo
- Documento HTML alvo: [caminho ou página a criar]
- Objetivo e conteúdo: [descreva a seção, textos, CTA e comportamento esperado]
- Referência visual: [URL e nó Figma, se houver; caso contrário, descreva a referência disponível]
- Assets fornecidos: [caminhos, links ou “nenhum”]
- Restrições de conteúdo/NDA: [detalhar ou “nenhuma”]
- Locais que não devem ser alterados: [descrever ou “nenhum”]

Siga obrigatoriamente `agents.md` e `docs/implementation-standards.md`.

Antes de implementar, inspecione os estilos e componentes existentes. Reutilize `.container`, `.section` e a API de `css/components.css` sempre que houver equivalência semântica. Só crie ou altere tokens e componentes globais se a solução for reutilizável em pelo menos dois contextos; explique brevemente essa decisão. Mantenha geometria exclusiva, recortes de imagem, ilustrações, overlays e exceções responsivas no CSS específico da página.

Se a página for um case com capa, use obrigatoriamente `.case-cover` e seus elementos `__layout`, `__intro`, `__context`, `__copy` e `__meta`. Não replique no CSS da página altura, grid, tipografia, metadados, borda ou posicionamento do aviso; deixe nesse CSS apenas a imagem, o filtro e a composição editorial próprios do case.

Carregue o CSS na ordem `tokens.css`, `base.css`, `layout.css`, `components.css` e CSS da página. Não importe CSS de outro case, não adicione dependências ou JavaScript sem necessidade e não crie aliases para classes removidas.

Se eu fornecer um nó Figma, execute o fluxo obrigatório de Figma descrito em `agents.md`, incluindo a spec e a captura de referência antes de codificar. Se não houver nó, não atribua medidas ou decisões inferidas ao Figma.

Preserve a aparência desktop aprovada e valide o resultado em 1366, 1024, 900, 768, 640, 390 e 320 px quando aplicável. Evite overflow horizontal visível; permita rolagem horizontal apenas em uma região específica quando ela for parte intencional do conteúdo. Verifique títulos longos, cards, grids, mídia, metadados, áreas de toque, `alt`, ARIA e `prefers-reduced-motion`.

Ao concluir, informe os arquivos alterados, quais componentes/tokens foram reutilizados ou criados, a validação executada e qualquer limitação objetiva.
```
