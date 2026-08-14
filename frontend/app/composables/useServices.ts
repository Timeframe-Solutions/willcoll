// app/composables/useServices.ts
// Single source of truth for Willcoll's commercial media services.

export interface SubService {
  name: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  navLabel: string;
  name: string;
  subhead: string;
  outcome: string;
  description: string;
  coreMessage: string;
  icon: string;
  whoIsFor: string;
  ctaText: string;
  to: string;
  bgImage: string;
  accentColor: string;
  problem: string[];
  solution: string;
  subServices: SubService[];
  faqs: ServiceFaq[];
}

export const useServices = () => {
  const services: Service[] = [
    {
      id: "advertise",
      slug: "advertise",
      navLabel: "Advertise",
      name: "Media Advertising & Placement",
      subhead:
        "Plan, place and manage your advertising across Kenya's leading media platforms through one commercial partner.",
      outcome:
        "Plan, place and manage brand advertising across TV, print and digital media through a single point of contact.",
      description:
        "Willcoll helps brands and organizations access, plan, purchase and coordinate advertising across Kenya's leading television, print and digital media platforms — from campaign planning and media selection through to placement and coordination.",
      coreMessage: "Put your brand in front of the audiences that matter.",
      icon: "lucide:megaphone",
      whoIsFor:
        "Marketing directors, brand managers, business owners and communications teams running awareness or campaign activity.",
      ctaText: "Plan My Campaign",
      to: "/services/advertise",
      bgImage:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=80",
      accentColor: "#2B6CB0",
      problem: [
        "Your message needs to reach the right audience on the platforms they trust.",
        "Media buying involves multiple platforms, formats and requirements that are hard to coordinate in-house.",
        "Without a clear media plan, budgets can be spent without measurable reach or consistency.",
      ],
      solution:
        "Willcoll acts as your commercial media partner — recommending the right platforms and formats, planning the campaign, coordinating artwork and placement, and managing the process end to end so your team has one accountable point of contact.",
      subServices: [
        {
          name: "Television advertising",
          description:
            "TV advertising across Kenya's leading free-to-air channels, planned and coordinated for your audience.",
        },
        {
          name: "Print advertising",
          description:
            "Print advertising in Kenya's most-read daily and weekly newspapers.",
        },
        {
          name: "Digital advertising",
          description: "Advertising across trusted Kenyan digital news and media platforms.",
        },
        {
          name: "Media placement",
          description:
            "Placement of your campaign on the right platforms and formats.",
        },
        {
          name: "Campaign planning",
          description:
            "A clear plan that matches your objective, audience and budget.",
        },
        {
          name: "Media buying",
          description: "Purchasing of airtime and space on your behalf.",
        },
        {
          name: "Advertising coordination",
          description:
            "One point of contact managing your campaign end to end.",
        },
      ],
      faqs: [
        {
          question: "How do I get a quote for advertising?",
          answer:
            "Send us your campaign requirements — target audience, preferred platform and timing — and our team will prepare a media recommendation and quote. Final rates and availability are confirmed by the respective media house.",
        },
        {
          question: "Which platforms can Willcoll place advertising on?",
          answer:
            "We coordinate advertising across Kenya's leading television, print and digital media platforms. We advise the right mix based on your audience, objectives and budget.",
        },
        {
          question: "How far in advance should I book?",
          answer:
            "Lead times vary by platform and format. Contact us early with your timeline and we will advise a realistic booking and publication schedule.",
        },
      ],
    },
    {
      id: "recruit",
      slug: "recruit",
      navLabel: "Recruit",
      name: "Recruitment Advertising",
      subhead:
        "Advertise your vacancies where qualified candidates are looking  in trusted Kenyan print and digital media.",
      outcome:
        "Reach qualified candidates through job advertisements placed in Kenya's most trusted media.",
      description:
        "Willcoll coordinates recruitment advertising across newspaper and digital platforms  preparing artwork, planning campaigns and managing publication so your vacancies reach the right candidates on time.",
      coreMessage: "Reach qualified candidates through trusted Kenyan media.",
      icon: "lucide:user-search",
      whoIsFor:
        "HR managers, recruitment managers, talent teams and business owners hiring across Kenya.",
      ctaText: "Place a Recruitment Ad",
      to: "/services/recruit",
      bgImage:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80",
      accentColor: "#1E8E5A",
      problem: [
        "The best candidates only apply when they see your role in media they trust.",
        "Preparing recruitment artwork and coordinating publication across print and digital takes time and attention.",
        "A poorly planned recruitment campaign can miss the right audience and delay hiring.",
      ],
      solution:
        "We plan, prepare and place your recruitment advertising across the platforms candidates trust handling artwork preparation, media selection and publication coordination, so your team can focus on shortlisting.",
      subServices: [
        {
          name: "Job advertisements",
          description:
            "Clear, well-placed job adverts that attract the right applicants.",
        },
        {
          name: "Recruitment campaigns",
          description:
            "Planned campaigns for single roles or bulk hiring drives.",
        },
        {
          name: "Newspaper recruitment advertising",
          description: "Print job adverts in Kenya's leading newspapers.",
        },
        {
          name: "Digital recruitment advertising",
          description: "Job adverts placed across trusted digital platforms.",
        },
        {
          name: "Employer-brand visibility",
          description:
            "Placement that reinforces your reputation as an employer.",
        },
        {
          name: "Recruitment artwork preparation",
          description: "Artwork prepared to each platform's specifications.",
        },
        {
          name: "Publication coordination",
          description: "Timing and placement managed for you end to end.",
        },
      ],
      faqs: [
        {
          question: "Where can Willcoll place my job advertisement?",
          answer:
            "We place recruitment advertising in Kenya's leading newspapers and digital platforms, and we advise the right mix for your role, seniority and location.",
        },
        {
          question: "Can you prepare the artwork for our job ad?",
          answer:
            "Yes. We coordinate recruitment artwork preparation and ensure it meets each platform's specifications before publication.",
        },
        {
          question: "How quickly can a recruitment ad run?",
          answer:
            "Timelines depend on the platform and your artwork readiness. Contact us with your vacancy details and we will confirm a realistic publication schedule.",
        },
      ],
    },
    {
      id: "publish",
      slug: "publish",
      navLabel: "Publish",
      name: "Public Notices & Corporate Publications",
      subhead:
        "Publish statutory, legal and corporate notices correctly and on time across trusted media.",
      outcome:
        "Get public notices, tender notices, financial statements and corporate announcements published accurately and on schedule.",
      description:
        "Willcoll coordinates the publication of public, statutory, legal and corporate notices  preparing materials, confirming requirements and managing submission so your notices appear correctly and on time.",
      coreMessage:
        "Get important corporate and statutory information published correctly and on time.",
      icon: "lucide:newspaper",
      whoIsFor:
        "Corporate secretaries, legal teams, procurement officers, compliance teams and administrators publishing statutory or corporate information.",
      ctaText: "Submit a Notice",
      to: "/services/publish",
      bgImage:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
      accentColor: "#B8862E",
      problem: [
        "Statutory and legal notices must meet specific formatting and timing requirements.",
        "Missed or incorrect publication can delay compliance, tenders and corporate decisions.",
        "Coordinating notices across multiple media outlets is time-consuming and detail-heavy.",
      ],
      solution:
        "Willcoll manages the publication process reviewing your notice, confirming requirements, preparing it for submission and coordinating with the relevant media to publish it correctly and on time.",
      subServices: [
        {
          name: "Public notices",
          description:
            "Public announcements published in the appropriate media.",
        },
        {
          name: "Statutory notices",
          description:
            "Notices required by law or regulation, prepared and placed correctly.",
        },
        {
          name: "Tender notices",
          description:
            "Procurement and tender announcements that reach the right bidders.",
        },
        {
          name: "Legal notices",
          description:
            "Legal publications coordinated with the relevant requirements.",
        },
        {
          name: "Financial statements",
          description:
            "Publication of audited and statutory financial statements.",
        },
        {
          name: "AGM notices",
          description: "Annual general meeting notices published on schedule.",
        },
        {
          name: "Corporate announcements",
          description: "Board, structural and corporate announcements.",
        },
        {
          name: "Compliance-related publications",
          description:
            "Regulatory and compliance disclosures managed end to end.",
        },
      ],
      faqs: [
        {
          question: "What types of notices can Willcoll publish?",
          answer:
            "We coordinate public notices, statutory notices, tender notices, legal notices, financial statements, AGM notices, corporate announcements and other compliance-related publications.",
        },
        {
          question: "What do you need from me to publish a notice?",
          answer:
            "The notice text or document, the intended publication date, and any formatting or compliance requirements. We will confirm the rest and manage submission.",
        },
        {
          question: "Who confirms the final publication date?",
          answer:
            "Publication dates and availability are confirmed by the relevant media house. We coordinate the process and keep you informed of the confirmed schedule.",
        },
        {
          question: "I am an existing client how do I submit materials?",
          answer:
            "Use our secure Submit Notice page to send your publication materials, and our team will process them for you.",
        },
      ],
    },
    {
      id: "subscribe",
      slug: "subscribe",
      navLabel: "Subscribe",
      name: "Corporate Digital & Print Subscriptions",
      subhead:
        "Give your team reliable access to trusted news  digitally, in print, or both.",
      outcome:
        "Set up and manage corporate digital and print news subscriptions for your organization.",
      description:
        "Willcoll coordinates corporate digital subscriptions, e-paper access, bulk user packages and office newspaper delivery managing setup, access and recurring distribution for your organization.",
      coreMessage:
        "Give your organization reliable access to trusted news digitally or in print.",
      icon: "lucide:book-open",
      whoIsFor:
        "Office administrators, procurement teams, HR teams and operations leaders providing news access to staff.",
      ctaText: "Build a Corporate Package",
      to: "/services/subscribe",
      bgImage:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1800&q=80",
      accentColor: "#7C3AED",
      problem: [
        "Employees need reliable, consistent access to trusted news for their work.",
        "Managing individual subscriptions, seats and deliveries across a team is administratively heavy.",
        "Growing teams need packages that can scale without renegotiating from scratch each time.",
      ],
      solution:
        "We coordinate the setup and management of corporate subscriptions digital seats, e-paper access and print delivery  so your organization has one point of contact for news access and distribution.",
      subServices: [
        {
          name: "Corporate digital subscriptions",
          description: "Digital news access configured for your organization.",
        },
        {
          name: "E-paper access",
          description: "Replica newspaper editions for teams and executives.",
        },
        {
          name: "Employee access management",
          description: "Seats added, moved and managed as your team changes.",
        },
        {
          name: "Bulk user packages",
          description: "Multi-user pricing structured around your headcount.",
        },
        {
          name: "Corporate newspaper subscriptions",
          description: "Print subscriptions for offices and boardrooms.",
        },
        {
          name: "Office newspaper delivery",
          description: "Scheduled physical delivery to your premises.",
        },
        {
          name: "Recurring institutional distribution",
          description: "Consistent, managed distribution over time.",
        },
      ],
      faqs: [
        {
          question: "Can Willcoll set up bulk digital access for our team?",
          answer:
            "Yes. We coordinate corporate digital subscriptions and bulk user packages, including employee access management, based on your organization's needs.",
        },
        {
          question: "Do you deliver newspapers to our office?",
          answer:
            "Yes. We coordinate office newspaper delivery and recurring institutional distribution as part of a corporate package.",
        },
        {
          question: "Can we start small and scale later?",
          answer:
            "Yes. We structure packages around your current needs and can add users or deliveries as your organization grows.",
        },
      ],
    },
    {
      id: "media-buying-advisory",
      slug: "media-buying-advisory",
      navLabel: "Media Buying & Advisory",
      name: "Media Buying & Advisory",
      subhead:
        "Commercial expertise that connects planning, buying and coordination across every campaign.",
      outcome:
        "Strategic media planning, buying and coordination that turns a budget into a well-run campaign.",
      description:
        "Willcoll's media buying and advisory expertise underpins every service we provide helping organizations choose the right media, allocate budget, buy efficiently and coordinate campaigns end to end.",
      coreMessage: "The commercial expertise behind every Willcoll service.",
      icon: "lucide:compass",
      whoIsFor:
        "Marketing and procurement teams that want independent commercial guidance on media planning and buying.",
      ctaText: "Talk to an Advisor",
      to: "/services/media-buying-advisory",
      bgImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
      accentColor: "#F37321",
      problem: [
        "Choosing the right media mix without independent guidance is difficult.",
        "Budgets can leak when media is bought without a plan or negotiation discipline.",
        "Campaigns stall when no single party coordinates planning, buying and delivery.",
      ],
      solution:
        "Willcoll provides commercial media advisory  strategy, selection, budget allocation, buying and coordination as the expertise that connects our advertising, recruitment, publishing and subscription services.",
      subServices: [
        {
          name: "Media strategy",
          description:
            "A clear media approach tied to your business objectives.",
        },
        {
          name: "Campaign planning",
          description: "End-to-end planning across platforms and timelines.",
        },
        {
          name: "Media selection",
          description: "The right platforms and formats for your audience.",
        },
        {
          name: "Budget allocation",
          description: "Budget directed where it will deliver the most value.",
        },
        {
          name: "Media buying",
          description: "Airtime and space purchased on your behalf.",
        },
        {
          name: "Rate/package negotiation where applicable",
          description: "Negotiation with media houses where it applies.",
        },
        {
          name: "Campaign coordination",
          description: "One point of contact managing your campaign.",
        },
        {
          name: "Commercial advisory",
          description: "Independent guidance on your media decisions.",
        },
      ],
      faqs: [
        {
          question: "How do you select media for a campaign?",
          answer:
            "We start with your objective, audience and budget, then recommend the platforms and formats most likely to deliver your outcome.",
        },
        {
          question: "Do you negotiate rates?",
          answer:
            "Where applicable, we negotiate rates and packages with media houses on your behalf. Final rates are confirmed by the respective media house.",
        },
        {
          question: "How is advisory billed?",
          answer:
            "Advisory is scoped to the work required and quoted up front, so you know what to expect before we begin.",
        },
      ],
    },
  ];

  const getServiceById = (id: string) => services.find((s) => s.id === id);
  const getServiceBySlug = (slug: string) =>
    services.find((s) => s.slug === slug);
  const primaryServices = services.filter(
    (s) => s.id !== "media-buying-advisory",
  );

  return { services, primaryServices, getServiceById, getServiceBySlug };
};
