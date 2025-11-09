import artigosData from "@/data/artigos.json";
import slugify from "slugify";

export type Article = {
  id: number;
  title: string;
  author: string;
  publishedAt: string;
  excerpt?: string;
  content: string;
  slug: string;
};

function createSlug(title: string): string {
  return slugify(title, {
    lower: true,
    strict: true,
    trim: true,
  });
}

const articles: Article[] = (artigosData as Omit<Article, "slug">[]).map(
  (article) => ({
    ...article,
    slug: createSlug(article.title),
  })
);

export async function getAllArticles(): Promise<Article[]> {
  return articles;
}

export async function getArticleBySlug(
  slug: string
): Promise<Article | undefined> {
  return articles.find((article) => article.slug === slug);
}
