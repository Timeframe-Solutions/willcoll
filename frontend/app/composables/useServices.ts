export interface SubService {
  name: string
  description: string
}

export interface Service {
  id: string
  name: string
  subhead: string
  outcome: string
  description: string
  icon: string
  whoIsFor: string
  ctaText: string
  to: string
  subServices: SubService[]
}

export const useServices = () => {
  const services: Service[] = [
    {
      id: 'business-advisory',
      name: 'Business Advisory',
      subhead: 'Strategic clarity for founders and boards making their next major decision.',
      outcome: 'Strategy, planning, and growth advisory for organizations making their next big decision.',
      description: 'Growing organizations face recurring inflection points — entering a new market, restructuring for growth, or simply needing an outside perspective on performance. Our Business Advisory practice provides structured, evidence-based guidance at exactly these moments.',
      icon: 'lucide:trending-up',
      whoIsFor: 'Founders, boards, and executive teams at an inflection point in strategy, market position, or performance.',
      ctaText: 'Book a Business Advisory Consultation',
      to: '/services/business-advisory',
      subServices: [
        { name: 'Business Strategy', description: 'Define a clear, resourced strategic direction aligned to market realities.' },
        { name: 'Business Planning', description: 'Build actionable business plans that hold up under investor or lender scrutiny.' },
        { name: 'Market Entry Strategy', description: 'Assess and plan entry into new markets or customer segments with reduced risk.' },
        { name: 'Performance Improvement', description: 'Identify and close the specific gaps limiting operational or financial performance.' },
        { name: 'Growth Advisory', description: "Structure sustainable growth plans that match your organization's actual capacity." }
      ]
    },
    {
      id: 'corporate-governance-compliance',
      name: 'Corporate Governance & Compliance',
      subhead: 'Get compliant, stay compliant, and build governance that satisfies regulators, boards, and investors alike.',
      outcome: 'Registration, governance frameworks, and compliance audits that keep you legally sound and board-ready.',
      description: 'Regulatory exposure is one of the highest-risk, highest-anxiety issues facing Kenyan businesses today. We help organizations build the legal and governance foundation to operate confidently — from initial registration through ongoing compliance audits.',
      icon: 'lucide:shield-check',
      whoIsFor: 'SMEs formalizing operations, NGOs and SACCOs with donor or regulator obligations, and corporates undergoing governance review.',
      ctaText: 'Book a Compliance Consultation',
      to: '/services/corporate-governance-compliance',
      subServices: [
        { name: 'Company Registration', description: 'End-to-end registration and legal structuring support.' },
        { name: 'Regulatory Compliance', description: 'Ongoing compliance management across relevant regulatory bodies.' },
        { name: 'Governance Frameworks', description: "Board structures, charters, and governance policies matched to your organization's stage." },
        { name: 'Policy Development', description: 'Internal policies that meet regulatory and operational requirements.' },
        { name: 'Compliance Audits', description: 'Independent review identifying and closing compliance gaps before they become liabilities.' }
      ]
    },
    {
      id: 'risk-assurance',
      name: 'Risk & Assurance',
      subhead: "Protect what you've built with disciplined risk management and internal controls.",
      outcome: "Enterprise risk assessments, internal controls, and fraud prevention that protect what you've built.",
      description: 'Unmanaged risk — operational, financial, or reputational — quietly erodes even well-run organizations. Our Risk & Assurance practice identifies exposure before it becomes a crisis and builds the internal controls to keep it that way.',
      icon: 'lucide:scale',
      whoIsFor: 'Boards, finance leaders, and operations directors accountable for organizational risk exposure.',
      ctaText: 'Book a Risk Assessment Consultation',
      to: '/services/risk-assurance',
      subServices: [
        { name: 'Enterprise Risk Assessments', description: 'Comprehensive review of risk exposure across your organization.' },
        { name: 'Internal Controls', description: 'Design and implementation of controls matched to your operational reality.' },
        { name: 'Operational Risk', description: 'Identification and mitigation of day-to-day operational vulnerabilities.' },
        { name: 'Fraud Prevention', description: 'Controls and monitoring frameworks that reduce fraud exposure.' },
        { name: 'Business Continuity', description: 'Planning that keeps your organization operating through disruption.' }
      ]
    },
    {
      id: 'business-transformation',
      name: 'Business Transformation',
      subhead: 'Structured change for organizations outgrowing the way they currently operate.',
      outcome: 'Change management, process redesign, and digital transformation for organizations outgrowing old systems.',
      description: 'As organizations grow, the informal systems that once worked become the bottleneck. Our Business Transformation practice redesigns processes, structures, and operating models so growth doesn\'t outpace capability.',
      icon: 'lucide:refresh-cw',
      whoIsFor: 'Organizations scaling past founder-led management or preparing for their next stage of growth.',
      ctaText: 'Book a Transformation Consultation',
      to: '/services/business-transformation',
      subServices: [
        { name: 'Change Management', description: 'Structured approaches to organizational change that reduce disruption and resistance.' },
        { name: 'Process Improvement', description: 'Redesign of core processes for efficiency and scale.' },
        { name: 'Organizational Development', description: 'Structures and capability building matched to your growth stage.' },
        { name: 'Digital Transformation', description: 'Practical adoption of digital tools and systems, sequenced to your readiness.' },
        { name: 'Operating Model Design', description: 'Redesigning how your organization actually runs, from decision rights to workflows.' }
      ]
    },
    {
      id: 'transaction-advisory',
      name: 'Transaction Advisory',
      subhead: 'Rigorous support for investment, acquisition, and partnership decisions.',
      outcome: 'Due diligence, valuation, and deal structuring for investors, buyers, and sellers.',
      description: 'Transactions carry real financial and reputational risk when approached without disciplined due diligence. We support investors, buyers, sellers, and partners through every stage of a transaction with independent, evidence-based advisory.',
      icon: 'lucide:landmark',
      whoIsFor: 'Investors, property developers, business owners preparing for sale, and organizations evaluating M&A.',
      ctaText: 'Book a Transaction Advisory Consultation',
      to: '/services/transaction-advisory',
      subServices: [
        { name: 'Investment Advisory', description: 'Guidance for organizations and investors evaluating capital deployment decisions.' },
        { name: 'Due Diligence', description: 'Rigorous review of financial, legal, and operational risk ahead of a transaction.' },
        { name: 'Business Valuation', description: 'Defensible valuations for transactions, disputes, or planning purposes.' },
        { name: 'Partnership Structuring', description: "Structuring partnerships and joint ventures to protect all parties' interests." },
        { name: 'M&A Support', description: 'End-to-end advisory across acquisition and merger processes.' }
      ]
    },
    {
      id: 'corporate-events-brand-activation',
      name: 'Corporate Events & Brand Activation',
      subhead: 'Corporate-grade execution for events that represent your brand.',
      outcome: 'Conferences, product launches, and activations executed with corporate-grade precision.',
      description: 'A corporate event, launch, or activation is a visible extension of your brand — and it needs to be executed with the same discipline as any other strategic initiative. Our team manages the full lifecycle, from concept to logistics.',
      icon: 'lucide:sparkles',
      whoIsFor: 'Corporates, public sector agencies, and organizations planning a visible brand moment.',
      ctaText: 'Book an Events Consultation',
      to: '/services/corporate-events-brand-activation',
      subServices: [
        { name: 'Corporate Events', description: 'Planning and execution of corporate gatherings, from AGMs to leadership retreats.' },
        { name: 'Conferences', description: 'Full-scale conference planning and delivery.' },
        { name: 'Product Launches', description: 'Launch events designed to generate market attention and credibility.' },
        { name: 'Brand Activations', description: 'Experiential activations that connect your brand to your audience.' },
        { name: 'Event Logistics', description: 'Venue, vendor, and on-the-day logistics management.' }
      ]
    },
    {
      id: 'media-advertising-solutions',
      name: 'Media & Advertising Solutions',
      subhead: 'Strategic media planning and buying that extends your brand with intent.',
      outcome: 'Strategic media buying and campaign planning that extends your brand with intent, not guesswork.',
      description: 'Media spend without strategy is wasted spend. Our Media & Advertising practice plans and executes campaigns across radio, TV, and outdoor channels, grounded in the same strategic discipline we bring to advisory engagements.',
      icon: 'lucide:megaphone',
      whoIsFor: 'Organizations launching products, running brand campaigns, or requiring coordinated media buying.',
      ctaText: 'Book a Media Strategy Consultation',
      to: '/services/media-advertising-solutions',
      subServices: [
        { name: 'Media Buying', description: 'Efficient, well-negotiated media placement across channels.' },
        { name: 'Radio Campaigns', description: 'Campaign planning and execution across Kenyan radio.' },
        { name: 'TV Campaigns', description: 'Television campaign strategy and buying.' },
        { name: 'Outdoor Advertising', description: 'Billboard and out-of-home campaign planning.' },
        { name: 'Campaign Planning', description: 'Integrated campaign strategy tying media spend to business objectives.' }
      ]
    }
  ]

  const getServiceById = (id: string) => services.find(s => s.id === id)

  return { services, getServiceById }
}
