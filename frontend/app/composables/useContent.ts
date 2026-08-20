// app/composables/useContent.ts
// Single source of truth for Willcoll's positioning, proof and educational content.
//
// IMPORTANT: This file publishes no fabricated data.
// - Metrics, testimonials and case studies are empty arrays until verified data
//   is provided by the Willcoll administrator. The UI hides these sections when
//   the arrays are empty.
// - No audience figures, pricing, savings or client names are invented.

export interface WorkflowStep {
  step: string
  title: string
  body: string
  icon: string
}

export interface Differentiator {
  icon: string
  title: string
  body: string
}

export interface ComparisonSet {
  title: string
  points: string[]
}

export interface MediaPlatform {
  name: string
  medium: 'Television' | 'Print' | 'Digital' | 'Radio'
}

export interface MediaPackage {
  name: string
  description: string
  components: string[]
}

export interface Department {
  icon: string
  name: string
  body: string
  points: string[]
}

export interface InsightTopic {
  title: string
  description: string
  icon: string
}

export const useContent = () => {
  const positioning = {
    eyebrow: 'Media Partner',
    headline: 'Strategic Media Solutions built for Growth.',
    subheadline:
      'Independent media planning, buying and execution for Kenyan organizations.',
    primaryCta: 'Get a Media Recommendation',
    secondaryCta: 'Talk to a Media Advisor',
  }

  // Plan -> Compare -> Buy -> Execute -> Manage -> Report
  const workflow: WorkflowStep[] = [
    { step: 'Plan', title: 'Plan', body: 'Clarify the objective, audience and budget.', icon: 'lucide:map' },
    { step: 'Compare', title: 'Compare', body: 'Evaluate the right platforms and formats.', icon: 'lucide:git-compare' },
    { step: 'Buy', title: 'Buy', body: 'Consolidate purchasing and quotes.', icon: 'lucide:shopping-cart' },
    { step: 'Execute', title: 'Execute', body: 'Coordinate placement and publication.', icon: 'lucide:workflow' },
    { step: 'Manage', title: 'Manage', body: 'Run the campaign and subscriptions.', icon: 'lucide:settings-2' },
    { step: 'Report', title: 'Report', body: 'Confirm delivery and documentation.', icon: 'lucide:file-check' },
  ]

  // Why Willcoll: five concrete, factual differentiators.
  const whyWillcoll: Differentiator[] = [
    {
      icon: 'lucide:scale',
      title: 'Independent guidance',
      body: 'We act in your commercial interest and recommend media on merit, not on house incentives.',
    },
    {
      icon: 'lucide:layers',
      title: 'Cross-platform media access',
      body: 'One partner across television, print and digital so you can compare options in one place.',
    },
    {
      icon: 'lucide:file-check-2',
      title: 'Procurement coordination',
      body: 'Consolidated quotes, documented handovers and a predictable commercial workflow for buying teams.',
    },
    {
      icon: 'lucide:map-pin',
      title: 'Kenyan media expertise',
      body: 'Practical understanding of how Kenyan media houses, formats and processes work.',
    },
    {
      icon: 'lucide:workflow',
      title: 'End-to-end execution',
      body: 'From planning and artwork to placement, publication and reporting through one point of contact.',
    },
  ]

  const comparison: { direct: ComparisonSet; willcoll: ComparisonSet } = {
    direct: {
      title: 'Sourcing from multiple media houses & event vendors',
      points: [
        'Multiple contacts and separate quotes',
        'Fragmented procurement across suppliers',
        'Multiple invoices and reconciliations',
        'Internal coordination burden',
        'Disconnect between media campaigns & physical events',
      ],
    },
    willcoll: {
      title: 'Working with Willcoll',
      points: [
        'One commercial point of contact',
        'Cross-platform recommendations',
        'Consolidated requirements and coordinated buying',
        'Procurement documentation',
        'Centralized management of both media & experiential events',
      ],
    },
  }

  // Media network. Platform names are listed for reference only.
  // Audience and reach data is not published until verified figures exist.
  const mediaPlatforms: MediaPlatform[] = [
    { name: 'NTV', medium: 'Television' },
    { name: 'Citizen TV', medium: 'Television' },
    { name: 'TV47', medium: 'Television' },
    { name: 'KTN', medium: 'Television' },
    { name: 'KBC', medium: 'Television' },
    { name: 'Daily Nation', medium: 'Print' },
    { name: 'The Standard', medium: 'Print' },
    { name: 'Business Daily', medium: 'Print' },
    { name: 'The Star', medium: 'Print' },
    { name: 'Nation.africa', medium: 'Digital' },
    { name: 'Standard Digital', medium: 'Digital' },
    { name: 'The Star Online', medium: 'Digital' },
  ]

  // Starter media packages. No pricing is published.
  const packages: MediaPackage[] = [
    {
      name: 'Brand Awareness Package',
      description: 'Multi-platform visibility for brand campaigns.',
      components: ['Television', 'Digital', 'Print'],
    },
    {
      name: 'Experiential & Event Production',
      description: 'Consolidated physical production, professional staging, AV setup, and logistics.',
      components: ['Staging & AV setup', 'Venue logistics', 'Fabrication', 'On-site execution'],
    },
    {
      name: 'Recruitment Campaign Package',
      description: 'Reach qualified candidates across trusted media.',
      components: ['Print', 'Digital'],
    },
    {
      name: 'Corporate Visibility Package',
      description: 'Sustained presence for organizations.',
      components: ['Business media', 'Digital', 'Corporate publications'],
    },
    {
      name: 'Public Notice Package',
      description: 'Statutory, tender and legal notices placed correctly.',
      components: ['Relevant publication channels'],
    },
    {
      name: 'Custom Media Plan',
      description: 'A plan built around your specific objectives.',
      components: ['Fully customized campaign & event production'],
    },
  ]

  // Department-specific landing content.
  const departments: Department[] = [
    {
      icon: 'lucide:megaphone',
      name: 'Marketing Teams',
      body: 'Own brand and campaign goals that need media placed to reach the right people, within budget and on time.',
      points: ['Media planning', 'Audience targeting', 'Campaign & event execution', 'Media mix and budget'],
    },
    {
      icon: 'lucide:user-search',
      name: 'HR Teams',
      body: 'Fill open roles faster by reaching qualified candidates through trusted, well-placed recruitment media.',
      points: ['Recruitment campaigns', 'Candidate reach', 'Recruitment artwork', 'Publication coordination'],
    },
    {
      icon: 'lucide:shopping-cart',
      name: 'Procurement Teams',
      body: 'Keep media & event purchasing compliant and predictable with one commercial partner instead of several.',
      points: ['Supplier coordination', 'Consolidated requirements', 'Documentation', 'Quotes and commercial workflow'],
    },
    {
      icon: 'lucide:newspaper',
      name: 'Corporate Communications',
      body: 'Publish statutory notices and coordinate official corporate events and announcements.',
      points: ['Notices & announcements', 'AGM event setups', 'Press conferences', 'Compliance communication'],
    },
    {
      icon: 'lucide:building-2',
      name: 'Administration',
      body: 'Keep teams supplied with the publications and digital access they depend on every day.',
      points: ['Corporate subscriptions', 'Newspaper delivery', 'Digital access', 'Recurring management'],
    },
  ]

  // Insights hub topic areas (authority structure for SEO).
  const insightTopics: InsightTopic[] = [
    { title: 'Media planning', description: 'How to plan and structure a media budget.', icon: 'lucide:map' },
    { title: 'Advertising', description: 'Choosing television, print and digital.', icon: 'lucide:megaphone' },
    { title: 'Event production', description: 'AV setups, staging, fabrication, and venue logistics.', icon: 'lucide:sparkles' },
    { title: 'Recruitment advertising', description: 'Reaching the right candidates efficiently.', icon: 'lucide:user-search' },
    { title: 'Public notices', description: 'Statutory, tender and legal publication.', icon: 'lucide:newspaper' },
    { title: 'Corporate communications', description: 'Announcements and compliance communication.', icon: 'lucide:landmark' },
    { title: 'Procurement', description: 'Consolidating media purchasing.', icon: 'lucide:shopping-cart' },
  ]

  // ---------------------------------------------------------------------------
  // Proof architecture.
  // Only verified data is published. Leave these arrays empty until the
  // Willcoll administrator provides verified figures. Empty sections are hidden.
  // ---------------------------------------------------------------------------
  const metrics: { value: string; label: string }[] = []
  const testimonials: { quote: string; name: string; title: string; organization: string }[] = []
  const caseStudies: { client: string; industry: string; challenge: string; result: string }[] = []

  return {
    positioning,
    workflow,
    whyWillcoll,
    comparison,
    mediaPlatforms,
    packages,
    departments,
    insightTopics,
    metrics,
    testimonials,
    caseStudies,
  }
}
