# Specs de implementacao Figma

Esta pasta guarda artefatos de apoio para a criacao de codigo novo a partir de um no Figma. O no fornecido continua sendo a unica fonte de verdade.

## Quando usar

Crie uma spec e uma captura apenas antes de implementar uma nova pagina, secao ou componente a partir de um no Figma. Nao use este fluxo para ajustes sem referencia Figma, refactors, alteracoes de conteudo ou manutencao de JavaScript.

## Arquivos por no

- `docs/figma-specs/<slug-do-no>.md`: spec factual e concisa.
- `docs/figma-specs/references/<slug-do-no>.png`: captura do no usada para comparacao visual.

Use o mesmo slug nos dois arquivos, em kebab-case. Se o no mudar de forma relevante, atualize os dois artefatos antes de alterar o codigo.

## Modelo de spec

```md
# <Nome do no>

- Figma: <URL ou identificador do no>
- Captura: `references/<slug-do-no>.png`
- Viewport de referencia: <largura x altura, se fornecido>
- Escopo de codigo: <pagina, secao ou componente>

## Estrutura e conteudo

- <hierarquia semantica e textos exatamente como no no>

## Layout e responsividade

- <grid, alinhamento, dimensoes, espacamentos e breakpoints observaveis>
- <comportamento mobile; usar "nao especificado no no" quando necessario>

## Estilo e assets

- <tipografia, cores, bordas, efeitos e tokens correspondentes>

| Arquivo local | Camada/ID Figma | Funcao | Formato e dimensoes | Proporcao, recorte e foco | Exibicao | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/...` | <nome ou ID exato> | <informativo ou decorativo> | <SVG ou WxH> | <object-fit e object-position> | <WxH no layout> | <texto ou vazio> |

Exportar a camada exata do Figma; a captura e apenas comparativo visual, nunca um asset de producao. Icones e vetores vao para `assets/icons/` como SVG. Imagens vao para `assets/images/<slug-do-no>/`, em WebP quando possivel; PNG fica restrito a transparencia ou fidelidade que o WebP nao preserve. Nao distorcer proporcoes nem usar um arquivo por semelhanca visual.

## Interacoes e estados

- <interacoes e estados visiveis no no>

## Checklist de comparacao

- [ ] Estrutura e conteudo conferem com o no.
- [ ] Tipografia, cores, espacamento e composicao conferem com a captura.
- [ ] Nenhum elemento ou conteudo foi inventado.
- [ ] Cada imagem e icone foi exportado da camada Figma registrada, e nao da captura.
- [ ] Arquivo, proporcao, recorte, escala, alinhamento e contraste conferem com a captura.
- [ ] Imagens informativas usam `img`/`picture` com dimensoes explicitas; `background-image` e somente decorativo.
- [ ] Responsividade foi implementada sem contradizer o no.
```

Nao registrar suposicoes como fatos. Quando o Figma nao definir um dado necessario para a adaptacao responsiva, descreva a lacuna e aplique a menor decisao tecnica compativel com a composicao.
