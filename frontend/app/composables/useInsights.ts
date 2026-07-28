export interface InsightArticle {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readTime: string
  body: { heading: string; paragraphs: string[] }[]
}

export const useInsights = () => {
  const articles: InsightArticle[] = [
    {
      slug: 'building-a-compliance-ready-business-in-kenya',
      title: 'Building a Compliance-Ready Business in Kenya',
      description: 'A practical starting point for leaders turning regulatory obligations into a stronger operating foundation.',
      category: 'Compliance', date: 'May 14, 2026', readTime: '5 min read',
      body: [
        { heading: 'Compliance is an operating discipline', paragraphs: ['Compliance is most effective when it is built into the way a business makes decisions, keeps records, and assigns responsibility. It should not be a scramble reserved for a filing deadline or an audit.', 'For growing organizations, the first step is to map the obligations that apply to the business and make ownership clear.'] },
        { heading: 'Start with the fundamentals', paragraphs: ['Keep registrations and statutory records current, establish a calendar for recurring obligations, and document the internal policies that guide your people. A simple, maintained framework is more useful than a sophisticated policy that is never used.'] },
        { heading: 'Make it sustainable', paragraphs: ['Review the framework as the organization changes. New products, markets, funding arrangements, or employees can introduce new obligations. Regular checks help leaders deal with risks early and operate with confidence.'] }
      ]
    },
    {
      slug: 'what-good-governance-looks-like-for-growing-businesses',
      title: 'What Good Governance Looks Like for Growing Businesses',
      description: 'The practical governance habits that help founder-led organizations scale with clarity and accountability.',
      category: 'Governance', date: 'April 28, 2026', readTime: '4 min read',
      body: [
        { heading: 'Governance creates clarity', paragraphs: ['Good governance is not reserved for large corporations. It gives growing organizations a reliable way to make decisions, manage conflicts, and stay accountable as responsibilities expand.'] },
        { heading: 'Build the habits first', paragraphs: ['Define decision rights, record material decisions, and create a rhythm for reviewing performance and risk. These habits make it easier to add formal structures as the business grows.'] },
        { heading: 'Keep it proportionate', paragraphs: ['The right framework matches the size and complexity of the organization. It should bring useful discipline without slowing down the work that creates value.'] }
      ]
    },
    {
      slug: 'how-to-prepare-for-a-business-due-diligence-review',
      title: 'How to Prepare for a Business Due Diligence Review',
      description: 'Preparation that helps buyers, investors, and business owners move through a transaction with fewer surprises.',
      category: 'Transaction Advisory', date: 'March 31, 2026', readTime: '6 min read',
      body: [
        { heading: 'Preparation protects value', paragraphs: ['Due diligence is a structured look at the financial, legal, operational, and commercial reality of a business. Preparation gives all parties a clearer starting point and helps prevent avoidable delays.'] },
        { heading: 'Create a clean information base', paragraphs: ['Organize corporate records, financial information, key contracts, employee information, and evidence of compliance. Be clear about gaps rather than allowing them to surface late in the process.'] },
        { heading: 'Use findings constructively', paragraphs: ['A diligence review is also a chance to improve the business. Its findings can strengthen controls, clarify valuation assumptions, and inform a better transaction structure.'] }
      ]
    }
  ]
  return { articles, getArticle: (slug: string) => articles.find(article => article.slug === slug) }
}
