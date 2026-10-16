export interface NavEntry { title: string; description: string }

export interface SiteContent {
  locale: "en" | "es";

  // Mega-menu navigation; link order matches NAV_MENU in constants.ts.
  nav: {
    label: string;
    toggle: string;
    home: string;
    portfolio: string;
    company: string;
    contact: string;
    productsLabel: string;
    servicesLabel: string;
    companyLabel: string;
    products: NavEntry[];
    companyItems: NavEntry[];
    allServices: string;
    productCta: string;
    demo: string;
    cta: string;
  };

  hero: {
    eyebrow: string;
    cyclePrefix: string;
    cycleWords: string[];
    sub: string;
    cta: string;
    secondary: string;
    scroll: string;
  };

  laboratory: {
    location: string;
    heroNote: string;
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    link: string;
    explore: string;
    principle: string;
    disciplines: Array<{ title: string; description: string }>;
  };

  services: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    items: Array<{ title: string; tag: string; desc: string }>;
  };

  work: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    liveBadge: string;
    visualLabel: string;
    actionLabels: string[];
    items: Array<{ industry: string; title: string; desc: string; stat: string; statLabel: string }>;
    cta: string;
  };

  currencyExchange: {
    dailyCases: {
      eyebrow: string; title: string; description: string; actionLabel: string;
      resultLabel: string; note: string; cta: string;
      items: Array<{ moment: string; title: string; situation: string; action: string; result: string }>;
    };
    assistant: { eyebrow: string; title: string; accent: string; description: string; events: Array<{ title: string; description: string }>; flow: string; note: string; cta: string };
    trial: {
      eyebrow: string; title: string; accent: string; description: string;
      daysLabel: string; monthLabel: string; annualLabel: string;
      startTitle: string; startDescription: string; startCta: string;
      annualTitle: string; annualDescription: string; annualCta: string;
      steps: Array<{ title: string; description: string }>;
      note: string; requestLabel: string; annualRequestLabel: string;
    };
    heroBadges: string[];
    compliance: {
      eyebrow: string;
      title: string;
      accent: string;
      description: string;
      cards: Array<{ name: string; title: string; description: string; tags: string[] }>;
      flow: string[];
      note: string;
      cta: string;
    };
    availableLabel: string;
    roadmapTitle: string;
    roadmapDescription: string;
    roadmap: Array<{ title: string; description: string; status: string; state: "planned" | "validation"; tag: string }>;
    invoicePreview: { title: string; subtitle: string; issuer: string; row: string; total: string; note: string };
    eyebrow: string;
    title: string;
    headlineAccent: string;
    productLabel: string;
    ctaNote: string;
    tourCta: string;
    closingTitle: string;
    closingDescription: string;
    preview: {
      label: string;
      title: string;
      branch: string;
      tabs: [string, string, string];
      views: Array<{ title: string; description: string; rows: Array<{ label: string; value: string }> }>;
      footnote: string;
    };
    description: string;
    problem: string;
    benefit: string;
    summaryLabel: string;
    capabilities: Array<{ title: string; description: string }>;
    updatesLabel: string;
    updatesDescription: string;
    updates: Array<{ title: string; description: string }>;
    boundary: string;
    cta: string;
    moreLabel: string;
    moreCta: string;
  };

  why: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    items: Array<{ title: string; desc: string }>;
  };

  compare: {
    eyebrow: string;
    line1: string;
    line2: string;
    recommended: string;
    cols: [string, string, string];
    rows: Array<{ label: string; jl: string; hire: string; agency: string }>;
  };

  about: {
    eyebrow: string;
    line1: string;
    line2: string;
    lead: string;
    body1: string;
    body2: string;
    statsTitle: string;
    stats: Array<{ value: string; label: string }>;
  };

  process: {
    eyebrow: string;
    line1: string;
    line2: string;
    steps: Array<{ title: string; desc: string }>;
  };

  faq: {
    eyebrow: string;
    line1: string;
    line2: string;
    selectLabel: string;
    chatHeader: string;
    chatStatus: string;
    chatEmpty: string;
    items: Array<{ question: string; answer: string }>;
  };

  team: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    roles: string[];   // order matches TEAM in constants.ts
  };

  contact: {
    location: string;
    serviceArea: string;
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    interestLabel: string;
    interestOptions: [string, string];
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    sendingLabel: string;
    responseTime: string;
    successTitle: string;
    successMsg: string;
  };

  footer: {
    googleProfile: string;
    tagline: string;
    contactLabel: string;
    cta: string;
    taglineBottom: string;
  };
}
