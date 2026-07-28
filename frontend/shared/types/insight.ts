// shared/types/insight.ts
// Frontmatter interface for Nuxt Content insight articles.
export interface InsightArticle {
  title: string
  description: string
  date: string
  category: string
  seoTitle?: string
  seoDescription?: string
  slug?: string
}
