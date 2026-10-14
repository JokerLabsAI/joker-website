import type { SiteContent } from "@/lib/locale-types";

export const en: SiteContent = {
  locale: "en",

  nav: {
    items: ["Home", "Product", "Services", "Process", "Team", "Contact"],
    cta: "Let's Talk",
  },

  hero: {
  "eyebrow": "JokerLabs · Artificial intelligence laboratory",
  "cyclePrefix": "AI to transform",
  "cycleWords": [
    "your operations"
  ],
  "sub": "We build our own products and AI solutions for businesses ready to move forward. Currency Exchange, our flagship product for exchange houses, brings the laboratory’s work into a real operational setting.",
  "cta": "Let’s discuss your project",
  "secondary": "Discover Currency Exchange",
  "scroll": "Explore the product"
},

  laboratory: {
    location: "FROM COLOMBIA · TO THE WORLD",
    heroNote: "Ambitious ideas. Applied engineering.",
    eyebrow: "The laboratory",
    title: "Curiosity moves us.",
    titleAccent: "Engineering takes us further.",
    description: "We explore possibilities, connect disciplines and build with purpose. We work with you from the first question to a solution that works in the real world.",
    link: "Meet the laboratory",
    explore: "Explore discipline",
    principle: "Progress starts when a good question becomes something you can use.",
    disciplines: [
      { title: "Artificial intelligence", description: "From data to new ways of thinking, deciding and creating." },
      { title: "Software", description: "From an idea to digital products designed to evolve." },
      { title: "Automation", description: "From repetitive tasks to time for the work that matters." },
      { title: "Systems", description: "From separate pieces to an architecture that connects everything." },
    ],
  },

  services: {
  "eyebrow": "02 / Laboratory services",
  "line1": "The capability behind our products.",
  "line2": "Applied to your business.",
  "sub": "If you need your own solution, we work with you to understand the problem, validate an approach and bring it into production. AI is at the center; software, automation and infrastructure make it usable.",
  "items": [
    {
      "title": "AI for your operations",
      "tag": "Data that informs decisions.",
      "desc": "Agents, models and analysis systems for specific processes. We start with the business need and define how to evaluate the outcome."
    },
    {
      "title": "Digital product development",
      "tag": "From an idea to a usable tool.",
      "desc": "Platforms, portals and APIs connecting users, data and processes. We design a foundation you can maintain and evolve."
    },
    {
      "title": "Process automation",
      "tag": "Less repetitive work.",
      "desc": "We connect tools and workflows to reduce manual tasks, with controls and visibility into what happens at each step."
    },
    {
      "title": "Integration and infrastructure",
      "tag": "Technology that works together.",
      "desc": "We integrate systems and infrastructure to deploy and operate your solution, agreeing on access, continuity and maintenance requirements."
    }
  ]
},

  work: {
    eyebrow: "Work in progress",
    line1: "Building now.",
    line2: "Shipping soon.",
    sub: "What hands is JokerLabs playing right now? We're solving high-impact real-world problems. One in fintech, another redefining AI-powered commerce.",
    liveBadge: "In development",
    visualLabel: "Visual exploration · Not a product screenshot",
    actionLabels: ["Explore Currency Exchange", "Let’s talk intelligent commerce"],
    items: [
      {
        industry: "Fintech · Cloud Platform",
        title: "Modern Currency Exchange Platform",
        desc: "A complete modernization of traditional foreign exchange operations. Replacing paper-based processes and manual workflows with a cloud-native platform accessible anywhere, anytime. Built with real-time compliance validation, centralized role management, and unified reporting.",
        stat: "In Progress",
        statLabel: "Automation Pipeline",
      },
      {
        industry: "Maverick · WildCart AI",
        title: "Intelligent Commerce Platform",
        desc: "An AI-powered commerce platform where merchants build and configure fully customized online stores through a conversational agent, no code required. Real-time personalization, product intelligence, and brand identity managed end-to-end by AI.",
        stat: "In Progress",
        statLabel: "AI-Powered Commerce",
      },
    ],
    cta: "Have a project in mind? Let's talk ♠",
  },

  currencyExchange: {
    assistant: {
    "eyebrow": "PRODUCT VISION · PLANNED",
    "title": "Your operation under control.",
    "accent": "Your team informed in time.",
    "description": "Our vision for Currency Exchange: an AI compliance assistant that helps identify relevant events, explain why they need attention and guide staff on the next step.",
    "events": [
        {
            "title": "Information to complete",
            "description": "Flag missing information needed to review a record."
        },
        {
            "title": "Transactions to review",
            "description": "Provide context for events that need attention from the responsible person."
        },
        {
            "title": "Dates to prepare for",
            "description": "Remind staff of report preparation dates according to business configuration."
        }
    ],
    "flow": "Detect → Alert → Guide → Team review",
    "note": "Planned capability. These examples illustrate the vision; they are not alerts available in the current trial. Scope, events and channels are yet to be defined. Staff retain decision-making responsibility.",
    "cta": "Discuss the assistant"
},
    trial: {
    "eyebrow": "YOUR FIRST STEP / CURRENCY EXCHANGE",
    "title": "See the difference",
    "accent": "in your own operation.",
    "description": "Bring your daily workflow into focus: currencies, customers, branch permissions and reports. Start with a 7-day trial and evaluate the fit for your exchange house.",
    "daysLabel": "days to explore",
    "monthLabel": "month total",
    "annualLabel": "WITH ANNUAL MEMBERSHIP",
    "startTitle": "Start with 7 days.",
    "startDescription": "Request your trial. We’ll review your operation and coordinate access so you can evaluate the current capabilities.",
    "startCta": "Request my 7-day trial",
    "annualTitle": "Give your team more time.",
    "annualDescription": "Purchase a one-year membership to extend your trial to one month total, including the initial 7 days.",
    "annualCta": "Explore annual membership",
    "steps": [
        {
            "title": "Define your workflow",
            "description": "Choose a daily process and the people who will evaluate it."
        },
        {
            "title": "Test what matters",
            "description": "Review currencies, customer records, permissions and reporting in your trial."
        },
        {
            "title": "Decide with clarity",
            "description": "Review the fit and annual membership with our team before purchasing."
        }
    ],
    "note": "Trial access is coordinated with our team. Annual membership is a paid purchase; the extended trial totals one month. We confirm pricing, plan scope, activation dates and membership terms before payment.",
    "requestLabel": "7-day trial requested",
    "annualRequestLabel": "Annual membership / one-month trial requested"
},
  "eyebrow": "01 / Our flagship product",
  "title": "Your entire operation.",
  "description": "Customers, currencies, cash and DIAN/UIAF reports connected in one platform. More visibility for operations and tools to support your compliance processes.",
  "problem": "When information is scattered, every close means reconstructing what happened.",
  "benefit": "Currency Exchange brings the pieces together so you can review movements, control access and make decisions with context.",
  "summaryLabel": "More clarity at every operational step",
  "capabilities": [
    {
      "title": "Every branch, under control",
      "description": "Assign role and branch access. Your team has the permissions it needs and you retain visibility."
    },
    {
      "title": "Less scattered information",
      "description": "Connect customers, transactions, currencies and receipts to review activity in one environment."
    },
    {
      "title": "Reports that support your business",
      "description": "Review cash by currency and prepare DIAN/UIAF files according to configuration. Keep information organized for review and follow-up."
    }
  ],
  "updatesLabel": "Control to operate. Tools to grow.",
  "updatesDescription": "These capabilities connect your team’s work with the information you need as an owner or administrator.",
  "updates": [
    {
      "title": "Traceable cash and currencies",
      "description": "Approved rates, inventory and branch reconciliation, with movement history to review what happened."
    },
    {
      "title": "Easier customer management",
      "description": "Search, update contact details and recover hidden records while preserving their history."
    },
    {
      "title": "Reports for your needs",
      "description": "Filter one or several currencies and export cash reports as PDFs for the period you want to review."
    },
    {
      "title": "A plan for your operation",
      "description": "Core for one branch or Growth for up to five, with four users per branch and membership management."
    }
  ],
  "boundary": "Capabilities depend on the plan and configuration. Regulatory files require review before submission.",
  "cta": "Request a demo",
  "moreLabel": "Working in a different industry?",
  "moreCta": "Explore our services",
  "headlineAccent": "One Currency Exchange.",
  "productLabel": "JOKERLABS FLAGSHIP PRODUCT",
  "ctaNote": "Tell us how your exchange house operates. We will review the fit and next steps together.",
  "tourCta": "Explore capabilities",
  "preview": {
    "label": "Illustrative view · Sample data",
    "title": "Your operations, in one view",
    "branch": "Central branch",
    "tabs": [
      "Cash & currencies",
      "Customers",
      "Reports"
    ],
    "views": [
      {
        "title": "Visibility into your cash",
        "description": "See inventory by currency and review branch movements.",
        "rows": [
          {
            "label": "USD · Available",
            "value": "1,250.00"
          },
          {
            "label": "EUR · Available",
            "value": "840.00"
          },
          {
            "label": "COP · Cash balance",
            "value": "4,800,000.00"
          }
        ]
      },
      {
        "title": "Connected customer information",
        "description": "Review customer details and screening status before continuing service.",
        "rows": [
          {
            "label": "Record",
            "value": "Contact details"
          },
          {
            "label": "Screening",
            "value": "List results"
          },
          {
            "label": "Traceability",
            "value": "Change history"
          }
        ]
      },
      {
        "title": "From transactions to reporting",
        "description": "Review operational reports and explore regulatory file generation.",
        "rows": [
          {
            "label": "Cash by currency",
            "value": "PDF"
          },
          {
            "label": "DIAN · Purchases / Sales",
            "value": "1099 / 1100"
          },
          {
            "label": "UIAF · Per configuration",
            "value": "Quarterly"
          }
        ]
      }
    ],
    "footnote": "An illustration of the workflow. Not a portal screenshot or live information."
  },
  "closingTitle": "Your next stage starts with a demo.",
  "closingDescription": "Explore current capabilities, review the plan that fits your branches and discover the product’s planned evolution.",
  "roadmapTitle": "What comes next changes the game too.",
  "roadmapDescription": "We are building a platform that evolves with you. Explore the next stage of the product, with each feature’s status visible.",
  "availableLabel": "Current capabilities",
  "roadmap": [
    {
      "title": "Electronic invoicing",
      "description": "A planned stage connecting operations to electronic invoice issuance and tracking. Integration and scope are yet to be defined.",
      "status": "Planned",
      "state": "planned",
      "tag": "THE NEXT STAGE"
    },
    {
      "title": "Automatic renewal",
      "description": "The recurring payment foundation is implemented. Automatic charging remains subject to provider eligibility and approval.",
      "status": "Under validation",
      "state": "validation",
      "tag": "CONTINUITY"
    },
    {
      "title": "Payment reconciliation",
      "description": "Service-payment tracking and reconciliation to expand membership traceability.",
      "status": "Planned",
      "state": "planned",
      "tag": "TRACEABILITY"
    }
  ],
  "invoicePreview": {
    "title": "Electronic invoice",
    "subtitle": "Upcoming feature concept",
    "issuer": "Your exchange house",
    "row": "Linked transaction",
    "total": "Total",
    "note": "Planned workflow · Does not issue invoices"
  },
  "heroBadges": [
    "Branch controls",
    "DIAN & UIAF reports",
    "Operational traceability"
  ],
  "compliance": {
    "eyebrow": "REPORTING & COMPLIANCE",
    "title": "Your operational information.",
    "accent": "Ready to prepare your reports.",
    "description": "Compliance needs organized information. Currency Exchange connects your operational records with DIAN and UIAF report generation, according to configuration and permissions.",
    "cards": [
      {
        "name": "DIAN",
        "title": "Purchases and sales, documented.",
        "description": "Generation of Format 1099 for currency purchases and Format 1100 for currency sales, using your operational records.",
        "tags": [
          "Format 1099",
          "Format 1100"
        ]
      },
      {
        "name": "UIAF",
        "title": "Tracking by reporting period.",
        "description": "Quarterly report generation for transactions above configured thresholds, when the module is enabled.",
        "tags": [
          "Quarterly reporting",
          "Configured thresholds"
        ]
      }
    ],
    "flow": [
      "Record the transaction",
      "Generate the file",
      "Review and submit"
    ],
    "note": "Tools to support compliance. Generating a file does not constitute submission, validation or acceptance by DIAN or UIAF.",
    "cta": "Explore reporting in a demo"
  }
},

  why: {
  "eyebrow": "03 / Why work with us",
  "line1": "We build our own product.",
  "line2": "We commit to yours.",
  "sub": "Currency Exchange makes our approach visible: turning operational needs into capabilities that can be used and reviewed.",
  "items": [
    {
      "title": "Product experience",
      "desc": "Building our own product means dealing with decisions about operations, integration and software evolution."
    },
    {
      "title": "A business problem first",
      "desc": "We define what needs to improve before choosing a model or tool."
    },
    {
      "title": "Clear scope and criteria",
      "desc": "We agree on deliverables, priorities and how to review whether the solution serves its purpose."
    },
    {
      "title": "Validation in stages",
      "desc": "We prototype, review with you and adjust before expanding implementation."
    },
    {
      "title": "Access to the builders",
      "desc": "You speak with the people designing and implementing the solution, with context for your questions."
    },
    {
      "title": "Agreed evolution",
      "desc": "We define support and further improvements together according to the project’s needs."
    }
  ]
},

  compare: {
    eyebrow: "Stack us against anyone",
    line1: "The hand",
    line2: "speaks for itself.",
    recommended: "★ Recommended",
    cols: ["JokerLabs", "Hiring Employees", "Other Agencies"],
    rows: [
      { label: "Cost", jl: "Fair and transparent", hire: "$$$ (salary + benefits)", agency: "$$$ – $$$$ per project" },
      { label: "Expertise", jl: "Senior talent across 4 disciplines", hire: "Varies by hire", agency: "Varies" },
      { label: "Turnaround", jl: "Fast and reliable", hire: "Weeks plus onboarding", agency: "Often slower" },
      { label: "Flexibility", jl: "Scale whenever you need", hire: "Contracts required", agency: "Project-based only" },
      { label: "Approach", jl: "Multidisciplinary lab", hire: "Siloed specialists", agency: "Depends on the agency" },
      { label: "Client Focus", jl: "Engineering for any challenge, scoped upfront", hire: "Internal priorities", agency: "Multiple clients at once" },
      { label: "Support", jl: "Ongoing partnership", hire: "Internal capacity", agency: "Often ends after delivery" },
    ],
  },

  about: {
    eyebrow: "About us",
    line1: "We're the lab",
    line2: "that holds every suit.",
    lead: "JokerLabs is a creative technology laboratory founded by five engineers from three engineering disciplines: Mechatronics, Biomedical Engineering, and Mechanical Engineering, specializing in artificial intelligence, software engineering, automation, and systems architecture.",
    body1: "We're not a traditional agency or a siloed consulting firm. We're a multidisciplinary technology lab built to solve problems that live at the intersection of software, hardware, AI, automation, and operations. The kind of challenges that require every suit in the deck.",
    body2: "Based in Colombia and working globally. We bring Latin American innovation, engineering talent, and world-class execution to projects anywhere in the world.",
    statsTitle: "The lab, by the numbers.",
    stats: [
      { value: "4", label: "Core disciplines" },
      { value: "5", label: "Founding experts" },
      { value: "∞", label: "Problems solved" },
      { value: "1", label: "Unified lab" },
    ],
  },

  process: {
  "eyebrow": "04 / Getting started",
  "line1": "From a business challenge",
  "line2": "to a validated solution.",
  "steps": [
    {
      "title": "Understand",
      "desc": "We review your process, tools and the business need you want to address."
    },
    {
      "title": "Define",
      "desc": "We agree on scope, priorities, budget and criteria for evaluating the outcome."
    },
    {
      "title": "Validate",
      "desc": "We build an initial version and review it with you before expanding development."
    },
    {
      "title": "Integrate",
      "desc": "We connect the solution to your systems and prepare it for operational use."
    },
    {
      "title": "Evolve",
      "desc": "We define support and further improvements according to your business needs."
    }
  ]
},

  faq: {
  "eyebrow": "Before we start",
  "line1": "Choose the path",
  "line2": "your business needs.",
  "selectLabel": "Select a question",
  "chatHeader": "JokerLabs · Frequently asked questions",
  "chatStatus": "General guidance",
  "chatEmpty": "Select a question to learn how we work.",
  "items": [
{
    "question": "How does the trial extension work?",
    "answer": "Purchase a one-year membership to extend your trial to one month total, including the initial 7 days. Trial access is coordinated with our team. Annual membership is a paid purchase; the extended trial totals one month. We confirm pricing, plan scope, activation dates and membership terms before payment."
},
    {
      "question": "Is JokerLabs a laboratory or exchange software?",
      "answer": "JokerLabs is an artificial intelligence laboratory. Currency Exchange is our flagship product for exchange houses. We also build AI, software and automation solutions for other businesses."
    },
    {
      "question": "How can I explore Currency Exchange?",
      "answer": "Request a demo using the form and select Currency Exchange. We will review your operation, available capabilities and the next implementation steps."
    },
    {
      "question": "Can you work in a different industry?",
      "answer": "Yes. Tell us about the process you need to improve and the tools you use. We will assess the fit and propose a scope before development begins."
    },
    {
      "question": "How are prices and timelines defined?",
      "answer": "They depend on scope, integrations and project requirements. We first review your needs, then agree on deliverables, budget and schedule."
    },
    {
      "question": "What happens after I send an inquiry?",
      "answer": "The team reviews your message and contacts you to understand the context. If there is a fit, we arrange a product demo or a scoping conversation for your project."
    }
  ]
},

  team: {
    eyebrow: "The lab",
    line1: "Five founders.",
    line2: "One mission.",
    sub: "Each founder brings a specialty. Together, we cover every angle of the problem, from the model to the machine.",
    roles: [
      "DevOps Engineer",
      "AI Engineer",
      "AI Engineer",
      "Frontend Engineer",
      "Fullstack Engineer"
    ],
  },

  contact: {
  "eyebrow": "The next step",
  "line1": "Let’s discuss",
  "line2": "your operations.",
  "sub": "Looking for Currency Exchange or a solution for your business? Select your interest and tell us what needs to improve. We will contact you to define the next step.",
  "nameLabel": "Your name",
  "emailLabel": "Email address",
  "messageLabel": "What needs to improve?",
  "messagePlaceholder": "Tell us about your industry, the process you want to improve and the tools you use today.",
  "submitLabel": "Request a conversation",
  "sendingLabel": "Sending…",
  "responseTime": "We review each inquiry to prepare a conversation with context.",
  "successTitle": "Inquiry received",
  "successMsg": "Thank you. The team will review your message and contact you about the next step.",
  "interestLabel": "I’m interested in",
  "interestOptions": [
    "An AI or development project",
    "A Currency Exchange demo"
  ]
},

  footer: {
  "tagline": "JokerLabs is an artificial intelligence laboratory. We build our own products and solutions for businesses. Currency Exchange is our flagship product.",
  "navigateLabel": "Explore",
  "contactLabel": "Contact",
  "cta": "Let’s discuss your project",
  "taglineBottom": "Artificial intelligence. Products. Progress."
},
};
