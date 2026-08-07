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
  bgImage: string;
  accentColor: string;
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
        "Professional advice to help individuals, SMEs, and organizations legally acquire and structure asset ownership.",
      description:
        "We help clients acquire, structure, manage and safeguard valuable assets. From real estate to business investments, every decision is legally compliant, financially sound and aligned with long-term objectives.",
      icon: "lucide:landmark",
      whoIsFor:
        "Individuals, SMEs, corporates, investors and organizations acquiring or managing assets.",
      ctaText: "Book an Asset Ownership Consultation",
      to: "/services/transaction-advisory",
      bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80",
      accentColor: "#F37321",
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
        "Anticipate challenges before they become costly problems.",
      outcome:
        "Risk identification, planning and mitigation strategies throughout the project lifecycle.",
      description:
        "Projects succeed when risks are identified early. We help organizations plan ahead by spotting threats, evaluating impact and developing mitigation strategies that reduce delays, cost overruns and operational surprises.",
      icon: "lucide:shield-check",
      whoIsFor:
        "Businesses, NGOs, public sector organizations and project managers delivering projects.",
      ctaText: "Book a Project Risk Consultation",
      to: "/services/risk-assurance",
      bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80",
      accentColor: "#1E8E5A",
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
        "From concept to execution, we coordinate every stage of your event — conferences, product launches, corporate functions and celebrations — ensuring seamless delivery and a lasting impression.",
      icon: "lucide:sparkles",
      whoIsFor:
        "Corporates, organizations, institutions and individuals planning live events.",
      ctaText: "Book an Event Production Consultation",
      to: "/services/corporate-events-brand-activation",
      bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=80",
      accentColor: "#B8862E",
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
        "Invest in the right advertising channels with expert guidance.",
      outcome:
        "Expert advice on purchasing advertising airtime and physical advertising space.",
      description:
        "We advise on planning and purchasing advertising airtime and physical spaces that maximize campaign reach and value — covering media selection, budgeting and strategic placement across channels.",
      icon: "lucide:megaphone",
      whoIsFor:
        "Businesses, brands and organizations running marketing or awareness campaigns.",
      ctaText: "Book an Advertising Consultation",
      to: "/services/media-advertising-solutions",
      bgImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=80",
      accentColor: "#2B6CB0",
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
