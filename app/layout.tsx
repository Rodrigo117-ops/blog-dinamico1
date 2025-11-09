import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Dinâmico | Next.js 15",
  description: "Um blog com rotas dinâmicas, SSG/SSR e SEO com App Router."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          background: "#050816",
          color: "#f9fafb",
        }}
      >
        <header
          style={{
            padding: "1.5rem 2rem",
            borderBottom: "1px solid rgba(148,163,253,0.25)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            backdropFilter: "blur(12px)",
            background:
              "linear-gradient(to right, rgba(10,10,25,0.98), rgba(17,24,39,0.96))",
            zIndex: 20,
          }}
        >
          <div style={{ fontWeight: 700, letterSpacing: "0.08em" }}>
            BLOG DINÂMICO
          </div>
          <nav style={{ fontSize: ".9rem", opacity: 0.9 }}>
            <a href="/" style={{ textDecoration: "none", color: "#e5e7eb" }}>
              Artigos
            </a>
          </nav>
        </header>
        <main
          style={{
            maxWidth: "900px",
            margin: "2rem auto",
            padding: "0 1.5rem 3rem",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
