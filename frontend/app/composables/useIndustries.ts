export interface Industry {
  name: string;
  description: string;
  icon: string;
}

export const useIndustries = () => {
  const industries: Industry[] = [
    {
      name: "SMEs & Startups",
      description:
        "Practical, right-sized advisory for businesses formalizing operations or preparing for their next growth stage.",
      icon: "lucide:building-2",
    },
    {
      name: "Family-Owned Businesses",
      description:
        "Governance, succession, and professionalization support for businesses navigating the transition from founder-led to institutionally run.",
      icon: "lucide:users",
    },
    {
      name: "NGOs",
      description:
        "Governance and compliance frameworks aligned to donor requirements and regulatory obligations.",
      icon: "lucide:heart-handshake",
    },
    {
      name: "SACCOs",
      description:
        "Regulatory, risk, and operational advisory for savings and credit cooperative organizations.",
      icon: "lucide:coins",
    },
    {
      name: "Investors & Property Developers",
      description:
        "Due diligence, valuation, and transaction structuring support for capital deployment decisions.",
      icon: "lucide:bar-chart-2",
    },
    {
      name: "Corporate ",
      description:
        "Specialized advisory support that extends internal teams without the overhead of a full in-house function.",
      icon: "lucide:briefcase",
    },
    {
      name: "Public Sector",
      description:
        "Advisory, events, and media support for public sector procurement and initiatives.",
      icon: "lucide:landmark",
    },
  ];

  return { industries };
};
