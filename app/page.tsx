import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function HomePage() {
  const artigos = await getAllArticles();

  return (
    <section>
      <h1
        style={{
          fontSize: "2.4rem",
          marginBottom: "0.5rem",
          fontWeight: 700,
        }}
      >
        Últimos artigos
      </h1>
      <p
        style={{
          marginBottom: "2rem",
          color: "#9ca3af",
        }}
      >
        Conteúdo dinâmico com rotas estáticas, SEO por página e App Router.
      </p>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
        }}
      >
        {artigos.map((artigo) => (
          <Link
            key={artigo.id}
            href={`/artigos/${artigo.slug}`}
            style={{
              display: "block",
              padding: "1.25rem 1.5rem",
              borderRadius: "1rem",
              border: "1px solid rgba(148,163,253,0.18)",
              background:
                "radial-gradient(circle at top left, rgba(79,70,229,0.10), transparent)",
              textDecoration: "none",
              color: "#e5e7eb",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 600,
                margin: 0,
                marginBottom: ".25rem",
              }}
            >
              {artigo.title}
            </h2>
            <div
              style={{
                fontSize: ".8rem",
                color: "#9ca3af",
                marginBottom: ".35rem",
              }}
            >
              {artigo.author} •{" "}
              {new Date(artigo.publishedAt).toLocaleDateString("pt-BR")}
            </div>
            <p
              style={{
                margin: 0,
                fontSize: ".95rem",
                color: "#d1d5db",
              }}
            >
              {artigo.excerpt ?? artigo.content.slice(0, 120).concat("...")}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
