const industries = [
  {
    id: "fmcg",
    name: "Consumer Goods & FMCG",
    tagline: "Everyday essentials, crafted for a premium lifestyle.",
    accent: "#ffddcc", // pastel peach
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    tagline: "Precision engineering and smart factories of tomorrow.",
    accent: "#d4edda", // pastel mint
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563784462386-044fd95e9852?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "warehousing",
    name: "Warehousing & Logistics",
    tagline: "Seamless fulfillment centers driving global supply chains.",
    accent: "#cce5ff", // pastel blue
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553413719-875871274712?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "consumer-tech",
    name: "Consumer Tech & Apps",
    tagline: "Beautifully designed interfaces connecting people.",
    accent: "#f8d7da", // pastel rose
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551645121-d1034da75057?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580927751497-69f9c7e98a3c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "saas",
    name: "SaaS",
    tagline: "Enterprise workflows streamlined into single-pane control.",
    accent: "#e2e3e5", // pastel gray
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "ai-tools",
    name: "AI Tools & Agents",
    tagline: "The cognitive layer automating tasks and amplifying intellect.",
    accent: "#fff3cd", // pastel yellow
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "health",
    name: "Health & Wellness",
    tagline: "Nurturing minds and bodies with mindful digital touchpoints.",
    accent: "#d1ecf1", // pastel cyan
    images: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "education",
    name: "Education",
    tagline: "Empowering curious minds through intuitive learning platforms.",
    accent: "#e8dbfc", // pastel purple
    images: [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "agriculture",
    name: "Agriculture",
    tagline: "Sustainable food tech and vertical crop optimization.",
    accent: "#d4edda", // pastel mint green
    images: [
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560493527-3efd3243e023?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "media",
    name: "Media, News & Entertainment",
    tagline: "Culture-defining storytelling that shapes the zeitgeist.",
    accent: "#ffeeba", // pastel warm gold
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "social-media",
    name: "Social Media",
    tagline: "Enabling next-generation content creators and networks.",
    accent: "#f8d7da", // pastel rose pink
    images: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "marketing",
    name: "Marketing",
    tagline: "Performance strategies backed by behavioral economics.",
    accent: "#e8dbfc", // pastel lavender
    images: [
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "tech-research",
    name: "Technology & Research",
    tagline: "Pioneering studies and technological breakthroughs.",
    accent: "#cce5ff", // pastel ice blue
    images: [
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "finance",
    name: "Finance & Compliance",
    tagline: "Intelligent asset management and compliance systems.",
    accent: "#e2e3e5", // pastel silver grey
    images: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Architectural structures designed with human scale in mind.",
    accent: "#ffddcc", // pastel orange-peach
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    tagline: "Curating bespoke travel diaries and sensory hotels.",
    accent: "#d1ecf1", // pastel turquoise
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "ips",
    name: "IPs & Creative Assets",
    tagline: "Protecting, fostering, and monetizing unique design IPs.",
    accent: "#fff3cd", // pastel soft amber
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "events",
    name: "Events & Experiences",
    tagline: "Gathering communities in beautifully staged spaces.",
    accent: "#d4edda", // pastel pale mint
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop"
    ]
  }
];

export default industries;
