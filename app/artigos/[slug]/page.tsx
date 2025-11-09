import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";

// Gera as rotas estáticas com base nos slugs
export async function generateStaticParams() {
  const artigos = await getAllArticles();
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

// SEO dinâmico por artigo
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params; // ⬅️ aqui está o ajuste importante
  const artigo = await getArticleBySlug(slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado | Blog Dinâmico",
      description: "O artigo solicitado não foi encontrado.",
    };
  }

  const description =
    artigo.excerpt ??
    (artigo.content.slice(0, 155).replace(/\s+/g, " ") + "...");

  return {
    title: `${artigo.title} | Blog Dinâmico`,
    description,
  };
}

// Página do artigo
export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params; // ⬅️ e aqui também
  const artigo = await getArticleBySlug(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <article>
      <p
        style={{
          fontSize: ".8rem",
          color: "#9ca3af",
          marginBottom: ".75rem",
        }}
      >
        <a href="/" style={{ color: "#a5b4fc", textDecoration: "none" }}>
          ← Voltar para artigos
        </a>
      </p>

      <h1
        style={{
          fontSize: "2rem",
          marginBottom: ".25rem",
          fontWeight: 700,
        }}
      >
        {artigo!.title}
      </h1>

      <div
        style={{
          fontSize: ".85rem",
          color: "#9ca3af",
          marginBottom: "1.5rem",
        }}
      >
        Por {artigo!.author} •{" "}
        {new Date(artigo!.publishedAt).toLocaleDateString("pt-BR")}
      </div>

      <div
        style={{
          fontSize: "1rem",
          lineHeight: 1.7,
          color: "#e5e7eb",
          padding: "1.25rem 1.5rem",
          borderRadius: "1rem",
          border: "1px solid rgba(75,85,99,0.7)",
          background:
            "radial-gradient(circle at top, rgba(17,24,39,0.95), rgba(9,9,15,0.98))",
          whiteSpace: "pre-wrap",
        }}
      >
        {artigo!.content}
      </div>
    </article>
  );
}
