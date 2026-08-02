export interface SubService {
  name: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  subhead: string;
  outcome: string;
  description: string;
  icon: string;
  whoIsFor: string;
  ctaText: string;
  to: string;
  subServices: SubService[];
}

export const useServices = () => {
  const services: Service[] = [
    {
      id: "asset-ownership-advisory",
      name: "Asset Ownership Advisory",
      subhead:
        "Strategic guidance for acquiring and protecting assets with confidence.",
      outcome:
        "Professional advice to help individuals, SMEs, corporates and organizations legally acquire and structure ownership of assets.",
      description:
        "We provide strategic advisory services to help clients acquire, structure, manage and safeguard different types of assets. Whether purchasing real estate, business assets, equipment, investments or other valuable property, we help ensure ownership decisions are legally compliant, financially sound and aligned with long-term objectives.",
      icon: "lucide:landmark",
      whoIsFor:
        "Individuals, SMEs, corporates, investors and organizations acquiring or managing assets.",
      ctaText: "Book an Asset Ownership Consultation",
      to: "/services/transaction-advisory",
      subServices: [
        {
          name: "Asset Acquisition Advisory",
          description:
            "Professional guidance before acquiring business or personal assets.",
        },
        {
          name: "Ownership Structuring",
          description: "Advice on appropriate legal ownership structures.",
        },
        {
          name: "Investment Advisory",
          description: "Support in evaluating investment opportunities.",
        },
        {
          name: "Due Diligence",
          description:
            "Assess legal, operational and financial risks before acquisition.",
        },
        {
          name: "Asset Protection",
          description:
            "Strategies to safeguard valuable assets over the long term.",
        },
      ],
    },

    {
      id: "project-risk-mitigation",
      name: "Project Risk Mitigation",
      subhead:
        "Helping organizations anticipate challenges before they become costly problems.",
      outcome:
        "Risk identification, planning and mitigation strategies throughout the project lifecycle.",
      description:
        "Projects succeed when risks are identified early and managed proactively. We help organizations plan ahead by identifying potential threats, evaluating their impact and developing practical mitigation strategies that reduce delays, cost overruns and operational surprises.",
      icon: "lucide:shield-check",
      whoIsFor:
        "Businesses, NGOs, public sector organizations and project managers delivering projects.",
      ctaText: "Book a Project Risk Consultation",
      to: "/services/risk-assurance",
      subServices: [
        {
          name: "Project Risk Assessment",
          description: "Identify risks before project execution.",
        },
        {
          name: "Risk Mitigation Planning",
          description: "Develop practical strategies to reduce project risks.",
        },
        {
          name: "Project Governance",
          description: "Establish oversight and accountability structures.",
        },
        {
          name: "Business Continuity Planning",
          description: "Prepare for disruptions during project execution.",
        },
        {
          name: "Operational Risk Management",
          description:
            "Reduce operational failures throughout project delivery.",
        },
      ],
    },

    {
      id: "event-production",
      name: "Event Production",
      subhead:
        "Professional planning and production for memorable live experiences.",
      outcome:
        "Planning, coordination and production support for corporate and social events.",
      description:
        "We provide strategic advice and production support for live events from concept to execution. Whether planning conferences, product launches, corporate functions or celebrations, we coordinate every stage to ensure seamless delivery and a memorable experience.",
      icon: "lucide:sparkles",
      whoIsFor:
        "Corporates, organizations, institutions and individuals planning live events.",
      ctaText: "Book an Event Production Consultation",
      to: "/services/corporate-events-brand-activation",
      subServices: [
        {
          name: "Corporate Events",
          description: "Planning and production of corporate functions.",
        },
        {
          name: "Product Launches",
          description: "Launch events that maximize visibility and impact.",
        },
        {
          name: "Conferences",
          description: "End-to-end conference planning and management.",
        },
        {
          name: "Social Events",
          description: "Professional production for parties and celebrations.",
        },
        {
          name: "Event Logistics",
          description: "Venue, suppliers, scheduling and on-site coordination.",
        },
      ],
    },

    {
      id: "advertising-airtime-space",
      name: "Advertising Airtime & Space",
      subhead:
        "Helping organizations invest in the right advertising channels.",
      outcome:
        "Expert advice on purchasing advertising airtime and physical advertising space.",
      description:
        "We advise organizations on planning and purchasing advertising airtime and physical advertising spaces that maximize campaign reach and value. Our advisory covers media selection, budgeting and strategic placement across multiple channels.",
      icon: "lucide:megaphone",
      whoIsFor:
        "Businesses, brands and organizations running marketing or awareness campaigns.",
      ctaText: "Book an Advertising Consultation",
      to: "/services/media-advertising-solutions",
      subServices: [
        {
          name: "Media Buying",
          description: "Advice on purchasing advertising airtime efficiently.",
        },
        {
          name: "Radio Advertising",
          description: "Planning and placement of radio campaigns.",
        },
        {
          name: "Television Advertising",
          description: "TV airtime planning and campaign strategy.",
        },
        {
          name: "Outdoor Advertising",
          description: "Billboards and other physical advertising locations.",
        },
        {
          name: "Campaign Planning",
          description:
            "Develop advertising strategies aligned to business goals.",
        },
      ],
    },
  ];

  const getServiceById = (id: string) => services.find((s) => s.id === id);

  return { services, getServiceById };
};
