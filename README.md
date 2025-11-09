# Blog Dinâmico - Next.js 15 (App Router)

Projeto pronto para estudo/entrega:

- App Router (pasta `app`)
- Rotas dinâmicas para artigos
- Carregamento de dados via JSON local
- SEO dinâmico com `generateMetadata`
- Pronto para deploy na Vercel

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse:

```text
http://localhost:3000
```

## Onde editar os artigos

Os artigos estão em:

```text
/data/artigos.json
```

Cada artigo precisa de:

- `id`: número único
- `title`: título
- `author`: autor
- `publishedAt`: data em formato `YYYY-MM-DD`
- `excerpt` (opcional): texto curto para listagem
- `content`: conteúdo completo do artigo

Os slugs são gerados automaticamente a partir do `title` usando `slugify`.

## Rotas principais

- `/` — Lista todos os artigos
- `/artigos/[slug]` — Página de cada artigo com:
  - Conteúdo completo
  - Metadados dinâmicos (`generateMetadata`)
  - Geração estática via `generateStaticParams`

## Deploy na Vercel

1. Suba este projeto em um repositório no GitHub.
2. No painel da Vercel:
   - `Add New Project` → selecione o repositório.
   - Confirme o framework `Next.js`.
   - Deploy.

Depois disso, envie:

- **Link do GitHub** com o código
- **Link do Vercel** com a aplicação rodando
