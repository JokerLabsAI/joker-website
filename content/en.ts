import type { SiteContent } from "@/lib/locale-types";

export const en: SiteContent = {
  locale: "en",

  nav: {
    label: "Main navigation",
    toggle: "Toggle navigation",
    home: "Home",
    portfolio: "Portfolio",
    company: "Company",
    contact: "Contact",
    productsLabel: "Products",
    servicesLabel: "Services",
    companyLabel: "JokerLabs",
    products: [
      { title: "Currency Exchange", description: "Cash, currencies, customers and reports for exchange houses" },
    ],
    companyItems: [
      { title: "Why JokerLabs", description: "We build our own product and get involved in yours" },
      { title: "How we work", description: "From business challenge to a validated solution" },
      { title: "Team", description: "The people behind the laboratory" },
      { title: "FAQ", description: "Timing, pricing and what happens after you reach out" },
    ],
    allServices: "See all services",
    productCta: "Discover Currency Exchange",
    demo: "Request a demo",
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
  "eyebrow": "01 / Laboratory services",
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
    dailyCases: {
      "eyebrow": "EVERYDAY LIFE AT YOUR EXCHANGE HOUSE",
      "title": "Situations your team knows well.",
      "description": "From customer service to cash closing: here is how Currency Exchange can help you review what happens in your operation.",
      "actionLabel": "What you can do",
      "resultLabel": "What you can review",
      "note": "Illustrative cases of current capabilities, subject to permissions, plan and configuration. Your team reviews the information and makes the decisions.",
      "cta": "Request a demo of my workflow",
      "items": [
        {
          "moment": "At cash closing",
          "title": "“We are short 10 dollars. What happened?”",
          "situation": "The physical count is 1,240 USD, but the expected balance is 1,250 USD.",
          "action": "Compare both balances by currency and review recorded movements and adjustments.",
          "result": "A 10 USD shortage identified for investigation. The system shows the difference; your team determines the cause."
        },
        {
          "moment": "During the day",
          "title": "“Who changed the purchase rate?”",
          "situation": "The dollar purchase rate changed from 4,000 to 4,020 COP during the day.",
          "action": "Review the branch’s rate change history.",
          "result": "The previous rate, the new rate, the person responsible and the recorded reason, giving the change context."
        },
        {
          "moment": "When a customer returns",
          "title": "“I need my transaction receipt.”",
          "situation": "A customer requests a receipt for a currency sale that was already recorded.",
          "action": "Find the transaction in the history and generate its receipt.",
          "result": "A receipt with customer, operator, currency, rate and amount. This receipt is separate from an electronic invoice."
        },
        {
          "moment": "When registering a customer",
          "title": "“This name looks like one on a list.”",
          "situation": "Candidates with similar names appear during registration.",
          "action": "Review the candidates and available information before recording your decision.",
          "result": "Matches that need assessment. A similar name alone does not confirm that it is the same person."
        },
        {
          "moment": "When working with your advisor",
          "title": "“I need to review the branch reports.”",
          "situation": "Your advisor needs to consult information without changing daily operations.",
          "action": "Assign the read-only role and the appropriate branches.",
          "result": "History, receipts and reports within the authorized scope, without permission to modify transactions."
        },
        {
          "moment": "When preparing reports",
          "title": "“It is time to organize the records.”",
          "situation": "The person responsible needs to prepare files for review and later submission.",
          "action": "Generate DIAN 1099/1100 formats and quarterly UIAF files when the company configuration enables them.",
          "result": "Files for the responsible person to review. Generation does not imply submission or acceptance by an authority."
        }
      ]
    },
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
  "title": "Your exchange house.",
  "description": "Connect currency purchases and sales, customers and cash by branch. Review closing differences, see who changed rates and prepare reports from your operational records.",
  "problem": "When information is scattered, every close means reconstructing what happened.",
  "benefit": "Currency Exchange brings the pieces together so you can review movements, control access and make decisions with context.",
  "summaryLabel": "Clear answers to manage your operation",
  "capabilities": [
    {
      "title": "Understand cash differences",
      "description": "Compare expected balances with physical counts and identify shortages or surpluses by currency when closing the session."
    },
    {
      "title": "See who changed what",
      "description": "Review rate changes and cash deposits or withdrawals with the recorded person responsible and reason."
    },
    {
      "title": "Share information with control",
      "description": "Assign access by role and branch. The read-only role can review history, receipts and reports without permission to change operational records."
    }
  ],
  "updatesLabel": "From customer service to transaction records.",
  "updatesDescription": "Your team records and reviews activity; you have information to understand what happened at each branch.",
  "updates": [
    {
      "title": "A record for each transaction",
      "description": "Review a recorded transaction and generate its receipt with customer, operator, currency, rate and amount. A receipt is separate from an electronic invoice."
    },
    {
      "title": "Keep customer history connected",
      "description": "Find existing records, update contact details and recover hidden customers while preserving their history."
    },
    {
      "title": "Matches for human review",
      "description": "Customer registration includes candidate review when list matches are found. Your team assesses the result; a name match does not confirm identity."
    },
    {
      "title": "Connected rates and inventory",
      "description": "Record purchases and sales using approved branch rates, with available stock validation when selling."
    },
    {
      "title": "Reports to review your operation",
      "description": "Filter one or several currencies, review rate changes and cash adjustments, and export operational PDF reports. Prepare DIAN/UIAF files according to configuration."
    },
    {
      "title": "Clear capacity for your branches",
      "description": "Core for one branch or Growth for up to five, with four users per branch. We review which plan fits your operation together."
    }
  ],
  "boundary": "Core includes one branch and Growth up to five, with four users per branch. Capabilities depend on the plan and configuration. Regulatory files require review before submission.",
  "cta": "Request a demo",
  "moreLabel": "Working in a different industry?",
  "moreCta": "Explore our services",
  "headlineAccent": "Under control.",
  "productLabel": "SOFTWARE FOR COLOMBIAN EXCHANGE HOUSES",
  "ctaNote": "What do you need to review more clearly: cash, rate changes or reports? Tell us and we will coordinate a demonstration of that workflow.",
  "tourCta": "Explore capabilities",
  "preview": {
    "label": "Illustrative view · Sample data",
    "title": "Your operations, in one view",
    "branch": "Central branch",
    "tabs": [
      "Cash closing",
      "Rate changes",
      "Transaction & receipt"
    ],
    "views": [
      {
        "title": "Identify a difference at closing",
        "description": "Compare the expected balance with the physical count for a currency. Example in USD.",
        "rows": [
          {
            "label": "Expected balance · USD",
            "value": "1,250.00"
          },
          {
            "label": "Physical count · USD",
            "value": "1,240.00"
          },
          {
            "label": "Difference · USD",
            "value": "−10.00 · Shortage"
          }
        ]
      },
      {
        "title": "A change with context",
        "description": "Review the previous rate, the new rate and who recorded the change with a reason. USD purchase rate example in COP.",
        "rows": [
          {
            "label": "Previous rate → new rate",
            "value": "4,000 → 4,020"
          },
          {
            "label": "Recorded by",
            "value": "Example administrator"
          },
          {
            "label": "Reason",
            "value": "Purchase rate adjustment"
          }
        ]
      },
      {
        "title": "From transaction to receipt",
        "description": "Review the record and generate a transaction receipt. The receipt is not an electronic invoice.",
        "rows": [
          {
            "label": "Transaction",
            "value": "Sale · 100 USD"
          },
          {
            "label": "Rate · COP per USD",
            "value": "4,100"
          },
          {
            "label": "Amount · COP",
            "value": "410,000"
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
    "Reconciliation by currency",
    "Changes with a named actor",
    "Read-only access"
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
  "eyebrow": "01 / Why work with us",
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
  "eyebrow": "02 / Getting started",
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
  "contactLabel": "Contact",
  "cta": "Let’s discuss your project",
  "taglineBottom": "Artificial intelligence. Products. Progress."
},
};
