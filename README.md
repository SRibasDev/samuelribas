# Portfólio de Samuel Ribas Castro

Site estático de uma página, com foco no trabalho de back-end em Java. O conteúdo foi baseado no currículo fornecido e conferido, para o projeto em destaque, com o repositório público [`sistema-cadastro-creche`](https://github.com/SRibasDev/sistema-cadastro-creche).

## Executar

Na raiz do projeto:

```bash
python3 -m http.server 4173
```

Abra `http://localhost:4173`. Não há dependências de build. Para publicar no GitHub Pages, configure a origem como a raiz da branch que receber estes arquivos. Os caminhos dos recursos são relativos e funcionam também em um endereço com subdiretório.

## Referência e método

O repositório [`inematds/rea-engenharia-reversa`](https://github.com/inematds/rea-engenharia-reversa) foi baixado para `/tmp` e seu guia de reconstrução foi usado como método: mapear o alvo, separar observação de inferência e criar uma implementação própria. O repositório é um guia para o REA (ferramenta de análise de programas), e não contém um `SKILL.md` instalável. A ferramenta REA de binários não é necessária para uma página cujo código-fonte é público.

O código aberto de [`brunorosilva/brunorosilva.github.io`](https://github.com/brunorosilva/brunorosilva.github.io), no commit `bf9ee301a15bff987650aded819ff0daca268acd`, foi analisado. Foram observados: página única com navegação por âncoras (`config.toml`), apresentação inicial com tipografia grande (`layouts/partials/showcase.html`), seções de experiência e formação (`experience.html`, `education.html`), projetos em blocos alternados (`client-and-work.html`) e fundo claro com recortes diagonais e acentos vermelhos (`static/css/main.css`). A página publicada não pôde ser aberta diretamente nesta rede, então comportamentos específicos de produção permanecem não verificados. Este site reaproveita apenas ideias de organização visual; textos, ilustrações e código foram criados para Samuel.

O currículo em `assets/curriculo-samuel-ribas-castro.pdf` é o arquivo fornecido pelo proprietário do portfólio. O botão de download e os links de contato usam esses dados.
