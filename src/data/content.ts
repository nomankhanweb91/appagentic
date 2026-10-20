export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  services: string[];
  description: string;
  fullStory?: string;
  image: string;
  metrics?: { label: string; value: string }[];
}

export interface IndustryItem {
  id: string;
  title: string;
  category: string;
  services: string[];
  bullets: string[];
  image: string;
}

export interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    initials: string;
    avatarBg: string;
  };
  image?: string;
  featured?: boolean;
}

export const SOLUTIONS_DATA = [
  {
    id: 'ai-agentic',
    name: 'AI & Agentic Engineering',
    tagline: 'AI & Agentic Engineering',
    description: 'Agentic workflows, LLM integrations, and process automation connected to the systems you already run, with guardrails, testing, and human sign-off where decisions matter.',
    metrics: [
      { label: '99.8% Deterministic Precision', icon: 'check' },
      { label: '<18ms Pipeline Latency', icon: 'zap' },
      { label: 'SOC 2 & HIPAA Aligned', icon: 'shield' }
    ],
    ctaPrimary: 'Explore AISolutions',
    ctaSecondary: 'Book a Technical Consultation',
    stackTitle: 'Agentic AI Stack',
    stackSubtitle: 'Production-ready system modules',
    modules: [
      {
        title: 'Autonomous Agents:',
        desc: 'Task & workflow automation with self-healing sub-routines',
        icon: 'bot',
        color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/30'
      },
      {
        title: 'LLM Integration:',
        desc: 'GenAI, enterprise copilots & conversational orchestration',
        icon: 'message',
        color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/30'
      },
      {
        title: 'Responsible AI:',
        desc: 'Deterministic guardrails, evals, and strict user privacy',
        icon: 'shield',
        color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/30'
      },
      {
        title: 'RAG & Search:',
        desc: 'Answers and grounded synthesis from your own private data',
        icon: 'search',
        color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/30'
      }
    ],
    footerLeft: 'Hybrid deployment: Cloud VPC or On-Prem',
    footerRight: 'v4.8 Architecture'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Digital Care',
    tagline: 'Healthcare & Digital Care Systems',
    description: 'HIPAA-compliant telehealth platforms, EHR integrations, FHIR interoperability pipelines, and clinical AI assistants engineered for rigorous patient data protection.',
    metrics: [
      { label: '100% HIPAA & HITECH Compliant', icon: 'shield' },
      { label: 'Sub-second FHIR API Response', icon: 'zap' },
      { label: '99.99% Critical System Uptime', icon: 'check' }
    ],
    ctaPrimary: 'Explore Healthcare Solutions',
    ctaSecondary: 'Book a Compliance Review',
    stackTitle: 'Digital Health Core',
    stackSubtitle: 'Clinical-grade infrastructure',
    modules: [
      {
        title: 'FHIR Interoperability:',
        desc: 'HL7 & SMART on FHIR pipeline orchestration with legacy EHRs',
        icon: 'network',
        color: 'text-emerald-500 bg-emerald-50'
      },
      {
        title: 'Clinical AI Note Assist:',
        desc: 'Ambient physician dictation and automated structured note generation',
        icon: 'message',
        color: 'text-indigo-500 bg-indigo-50'
      },
      {
        title: 'Zero-Trust Patient Portal:',
        desc: 'End-to-end encrypted telehealth visits and biometric auth',
        icon: 'shield',
        color: 'text-rose-500 bg-rose-50'
      },
      {
        title: 'IoMT Device Telemetry:',
        desc: 'Real-time vitals monitoring from certified edge medical monitors',
        icon: 'cpu',
        color: 'text-cyan-500 bg-cyan-50'
      }
    ],
    footerLeft: 'HIPAA BAA & SOC 2 Type II Certified',
    footerRight: 'FHIR R4 Aligned'
  },
  {
    id: 'fintech',
    name: 'FinTech & Banking',
    tagline: 'FinTech & High-Frequency Banking Systems',
    description: 'High-throughput payment orchestration, ledger architecture, automated KYC/AML verification, and real-time fraud mitigation with zero downtime migrations.',
    metrics: [
      { label: 'PCI DSS Level 1 Certified', icon: 'shield' },
      { label: '15,000+ TPS Real-Time Ledger', icon: 'zap' },
      { label: '0.0001% False Positive Fraud Rate', icon: 'check' }
    ],
    ctaPrimary: 'Explore FinTech Solutions',
    ctaSecondary: 'Consult a FinTech Architect',
    stackTitle: 'Banking Transaction Core',
    stackSubtitle: 'Double-entry distributed ledger',
    modules: [
      {
        title: 'Real-Time Clearing:',
        desc: 'Automated FedNow, SEPA & ACH transaction routing engines',
        icon: 'refresh',
        color: 'text-violet-500 bg-violet-50'
      },
      {
        title: 'AI Fraud Detection:',
        desc: 'Streaming graph neural nets spotting anomalous transaction clusters',
        icon: 'eye',
        color: 'text-amber-500 bg-amber-50'
      },
      {
        title: 'Automated AML & KYC:',
        desc: 'Biometric liveness verification and sanction screening integrations',
        icon: 'shield',
        color: 'text-emerald-500 bg-emerald-50'
      },
      {
        title: 'Immutable Audit Vault:',
        desc: 'Cryptographically signed audit logs conforming to SOX regulations',
        icon: 'lock',
        color: 'text-blue-500 bg-blue-50'
      }
    ],
    footerLeft: 'Deployment: Multi-Region Active-Active VPC',
    footerRight: 'ISO 27001 Verified'
  },
  {
    id: 'erp',
    name: 'ERP & Enterprise Software',
    tagline: 'ERP & Mission-Critical Enterprise Software',
    description: 'Modernizing legacy monoliths into composable micro-frontends and event-driven services with custom workflow automation and bi-directional ERP syncing.',
    metrics: [
      { label: 'Zero Migration Downtime', icon: 'check' },
      { label: '4.8x Faster Release Cycles', icon: 'zap' },
      { label: 'SAP, NetSuite & Salesforce Sync', icon: 'network' }
    ],
    ctaPrimary: 'Explore ERP Modernization',
    ctaSecondary: 'Request Architectural Audit',
    stackTitle: 'Enterprise Integration Hub',
    stackSubtitle: 'Event-driven service orchestration',
    modules: [
      {
        title: 'Legacy Facade Layer:',
        desc: 'Strangler fig migration patterns avoiding sudden vendor lock-in',
        icon: 'layers',
        color: 'text-purple-500 bg-purple-50'
      },
      {
        title: 'Workflow Automation Engine:',
        desc: 'BPMN-compliant dynamic approval chains and webhook routing',
        icon: 'git-branch',
        color: 'text-cyan-500 bg-cyan-50'
      },
      {
        title: 'Master Data Hub:',
        desc: 'De-duplicated single source of truth across ERP, CRM & WMS',
        icon: 'database',
        color: 'text-rose-500 bg-rose-50'
      },
      {
        title: 'Enterprise Role RBAC:',
        desc: 'Fine-grained attribute-based access control with SAML & Okta SSO',
        icon: 'shield',
        color: 'text-emerald-500 bg-emerald-50'
      }
    ],
    footerLeft: 'Supports: On-Premise, Hybrid & Multi-Cloud',
    footerRight: 'v3.2 Composability'
  },
  {
    id: 'logistics',
    name: 'Logistics & Mobile',
    tagline: 'Logistics, Fleet & Offline-First Mobile',
    description: 'End-to-end supply chain visibility, intelligent route optimization, WMS dock scheduling, and offline-first mobile apps for field workers and drivers.',
    metrics: [
      { label: '34% Lower Detention Costs', icon: 'check' },
      { label: 'Sub-second Offline Sync', icon: 'zap' },
      { label: '100% Cross-Platform Parity', icon: 'shield' }
    ],
    ctaPrimary: 'Explore Logistics Tech',
    ctaSecondary: 'Talk to a Supply Chain Specialist',
    stackTitle: 'Fleet & Dock Engine',
    stackSubtitle: 'Sub-second telemetry & dispatch',
    modules: [
      {
        title: 'Automated Dispatch:',
        desc: 'Constraint-based route optimization with live traffic integration',
        icon: 'navigation',
        color: 'text-blue-500 bg-blue-50'
      },
      {
        title: 'Dock Scheduling Portal:',
        desc: 'Live bay visibility and driver self-checkin reducing turnaround',
        icon: 'calendar',
        color: 'text-emerald-500 bg-emerald-50'
      },
      {
        title: 'Offline-First Mobile App:',
        desc: 'Local SQLite caching with automated sync upon re-connection',
        icon: 'smartphone',
        color: 'text-amber-500 bg-amber-50'
      },
      {
        title: 'IoT Cold Chain Telemetry:',
        desc: 'Real-time temperature and shock anomaly detection in transit',
        icon: 'activity',
        color: 'text-pink-500 bg-pink-50'
      }
    ],
    footerLeft: 'Fleet size: 10 to 50,000+ Connected Units',
    footerRight: 'Offline-Ready'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'dockline',
    title: 'Dockline',
    category: 'Logistics',
    services: ['CUSTOM SOFTWARE', 'SYSTEM INTEGRATION', 'MOBILE APP'],
    description: 'A logistics provider had no live dock visibility - drivers idled, detention costs climbed, and dispatchers coordinated by phone and spreadsheet. We built a WMS-connected scheduling platform giving dispatchers and drivers one live view of every bay, delivered in under four months.',
    fullStory: 'Dockline transformed freight coordination across 42 distribution centers. Before our engagement, uncoordinated arrivals caused severe yard congestion, costing over $1.8M annually in driver detention fees. In 14 weeks, we developed a real-time bay scheduling engine paired with an offline-first mobile check-in app. Drivers receive automated slot assignments 30 miles out, and dispatchers monitor turnover on an interactive live yard map. The result was a 41% decrease in dock dwell time and 100% elimination of manual phone scheduling.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Detention Cost Reduction', value: '-41%' },
      { label: 'Time to Market', value: '3.8 Months' },
      { label: 'Active Facilities', value: '42 Yards' }
    ]
  },
  {
    id: 'vaultwise',
    title: 'Vaultwise',
    category: 'FinTech',
    services: ['LEGACY MODERNISATION', 'CLOUD & DEVOPS', 'SECURITY'],
    description: 'A payments technology company was running on an ageing monolith that slowed every release and couldn\'t meet SOC 2 controls. We migrated it in phases to a modular cloud architecture, with built-in audit logging, access controls, and encryption, while the existing system kept processing live transactions.',
    fullStory: 'Vaultwise was processing over $2.4B in annual card transactions on a decade-old legacy codebase where deployments took 12 hours and risked downtime. We established a strangler-fig migration architecture on AWS, carving out payment processing, reconciliation, and customer verification into secure microservices. We implemented zero-downtime database replication, mutual TLS encryption, and automated SOC 2 compliance evidence collection. Releases now occur multiple times daily without touching transaction flow.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Deployment Frequency', value: '18x Faster' },
      { label: 'Transaction Uptime', value: '99.999%' },
      { label: 'Compliance Audit', value: 'Clean SOC 2' }
    ]
  },
  {
    id: 'carenote-ai',
    title: 'CareNote AI',
    category: 'Healthcare',
    services: ['ENTERPRISE AI', 'MOBILE EHR', 'HIPAA SECURITY'],
    description: 'Physicians spent 2.5 hours every evening completing medical charts. We engineered an ambient clinical dictation platform with on-device speech processing, generating structured SOAP notes directly mapped to FHIR schemas.',
    fullStory: 'CareNote AI operates in sensitive clinical rooms where internet connectivity cannot be guaranteed and privacy is paramount. Using custom distilled whisper models running locally with SQLite encryption, doctor-patient consultations are transcribed on-device. Structured summaries with ICD-10 medical coding are generated and pushed securely to Epic and Cerner EHRs with physician one-click signoff.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Physician Charting Time', value: '-65%' },
      { label: 'Note Accuracy Rate', value: '99.4%' },
      { label: 'HIPAA Audits Passed', value: '100%' }
    ]
  }
];

export const SERVICES_DATA = [
  {
    id: 'consulting',
    title: 'Digital Transformation Consulting',
    description: 'Architecture audits, modernisation roadmaps, and build-versus-buy decisions. We start by understanding what you already run before recommending anything new.',
    icon: 'cubes',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'mobile-product',
    title: 'Mobile & Product Engineering',
    description: 'Native and cross-platform mobile apps, web platforms, and SaaS products, from UX and first MVP to production scale.',
    icon: 'smartphone',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'enterprise-software',
    title: 'Custom Software & Enterprise Systems',
    description: 'Custom platforms, CRM and ERP builds, system integration, and legacy modernisation for organisations that have outgrown off-the-shelf software.',
    icon: 'layers',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'ai-automation',
    title: 'AI & Intelligent Automation',
    description: 'AI built into your products and workflows where it measurably saves time or improves decisions. See how we embed AI in the section below.',
    icon: 'sparkles',
    color: 'from-fuchsia-500 to-purple-600'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud, Data & DevOps',
    description: 'Cloud migration and cloud-native engineering, data platforms and analytics, CI/CD pipelines and infrastructure automation.',
    icon: 'cloud',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'managed-teams',
    title: 'Managed Services & Dedicated Teams',
    description: 'Ongoing support, maintenance, and embedded engineering teams that extend your capacity without the hiring cycle.',
    icon: 'shield-check',
    color: 'from-emerald-500 to-teal-500'
  }
];

export const AI_CAPABILITIES_TABS = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    icon: 'sparkles',
    cards: [
      {
        title: 'Generative AI Integration',
        description: 'Add LLM-powered features like summaries, drafting, and chat directly inside your product.',
        cta: 'Add GenAI Features →',
        icon: 'brain',
        color: 'text-rose-500 bg-rose-50'
      },
      {
        title: 'Knowledge Search & Assistants',
        description: 'Give teams answers drawn from your own documents and data, with sources cited.',
        cta: 'Build a Knowledge Assistant →',
        icon: 'message',
        color: 'text-purple-500 bg-purple-50'
      },
      {
        title: 'Document Intelligence',
        description: 'Read, validate, and route invoices, claims, contracts, and KYC documents automatically.',
        cta: 'Automate Documents →',
        icon: 'scan',
        color: 'text-violet-500 bg-violet-50'
      }
    ]
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    icon: 'cpu',
    cards: [
      {
        title: 'Predictive Modeling & Churn',
        description: 'Anticipate customer departures, demand spikes, and equipment failures before they hit bottom lines.',
        cta: 'Explore Predictive ML →',
        icon: 'trending-up',
        color: 'text-amber-500 bg-amber-50'
      },
      {
        title: 'Computer Vision & Quality Inspection',
        description: 'Automate visual inspection on manufacturing lines, site photos, and ID verification pipelines.',
        cta: 'Deploy Vision AI →',
        icon: 'eye',
        color: 'text-cyan-500 bg-cyan-50'
      },
      {
        title: 'Recommendation & Ranking Engines',
        description: 'Deliver personalized product and content recommendations with reinforcement learning loops.',
        cta: 'Build Recommender →',
        icon: 'layers',
        color: 'text-emerald-500 bg-emerald-50'
      }
    ]
  },
  {
    id: 'data-eng',
    name: 'Data Engineering',
    icon: 'database',
    cards: [
      {
        title: 'Unified Lakehouses & Warehousing',
        description: 'Architect scalable Snowflake, BigQuery, and Databricks lakes with automated transformation models.',
        cta: 'Design Lakehouse →',
        icon: 'database',
        color: 'text-blue-500 bg-blue-50'
      },
      {
        title: 'Real-Time Streaming Pipelines',
        description: 'Sub-second event streaming with Apache Kafka, Flink, and Pub/Sub for immediate business reactions.',
        cta: 'Build Streaming Engine →',
        icon: 'zap',
        color: 'text-indigo-500 bg-indigo-50'
      },
      {
        title: 'Data Governance & Lineage',
        description: 'Automated data classification, GDPR compliance masking, and dbt documentation frameworks.',
        cta: 'Implement Governance →',
        icon: 'shield',
        color: 'text-pink-500 bg-pink-50'
      }
    ]
  },
  {
    id: 'bi',
    name: 'Data Analytics & BI',
    icon: 'bar-chart',
    cards: [
      {
        title: 'Executive Decision Cockpits',
        description: 'Real-time financial, operational, and customer telemetry dashboards built for leadership clarity.',
        cta: 'Build Cockpits →',
        icon: 'pie-chart',
        color: 'text-purple-500 bg-purple-50'
      },
      {
        title: 'Embedded Customer Portals',
        description: 'Provide your B2B customers with branded reporting portals directly inside your SaaS product.',
        cta: 'Embed Analytics →',
        icon: 'layout',
        color: 'text-emerald-500 bg-emerald-50'
      },
      {
        title: 'Automated Root-Cause Diagnostic',
        description: 'AI-driven regression diagnostics that pinpoint why metrics shifted without manual digging.',
        cta: 'Diagnose Anomalies →',
        icon: 'activity',
        color: 'text-rose-500 bg-rose-50'
      }
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'retail',
    title: 'Retail & eCommerce',
    category: 'eCommerce',
    services: ['INVENTORY SYNC', 'HEADLESS COMMERCE', 'LOYALTY'],
    bullets: [
      'Omnichannel inventory sync platform',
      'Headless eCommerce storefront and CMS',
      'Customer loyalty and rewards app'
    ],
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'on-demand',
    title: 'On-Demand & Marketplaces',
    category: 'On-Demand',
    services: ['MATCHING ENGINE', 'DISPATCH TECH', 'PROVIDER PORTAL'],
    bullets: [
      'Two-sided service marketplace platform',
      'Real-time dispatch and matching engine',
      'Provider onboarding and verification portal'
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'construction',
    title: 'Construction & Field Services',
    category: 'Field Tech',
    services: ['SITE INSPECTIONS', 'COMPLIANCE', 'ASSET TRACKING'],
    bullets: [
      'Offline site inspection mobile app',
      'Safety compliance and reporting workflow',
      'Equipment and asset tracking system'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial',
    category: 'Industry 4.0',
    services: ['PRODUCTION PLANNING', 'IOT TELEMETRY', 'QA APPS'],
    bullets: [
      'Production planning and scheduling system',
      'IoT machine monitoring dashboard',
      'Quality control inspection app'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'education',
    title: 'Education & EdTech',
    category: 'EdTech',
    services: ['CUSTOM LMS', 'VIRTUAL CLASSROOMS', 'MOBILE PORTALS'],
    bullets: [
      'Custom learning management system',
      'Live virtual classroom platform',
      'Student and parent mobile portal'
    ],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
  }
];

export const HOW_WE_WORK_STEPS = [
  {
    num: '{01}',
    title: 'Discovery',
    desc: 'We map your real process, not the documented one. Two weeks, fixed scope, delivered as a written roadmap you keep whether or not we continue.',
    theme: 'orange',
    color: '#FF6B4A',
    icon: 'compass'
  },
  {
    num: '{02}',
    title: 'Architecture & Planning',
    desc: 'Technical design, stack decisions, and a prioritised backlog scored on impact against effort.',
    theme: 'pink',
    color: '#EC4899',
    icon: 'git-merge'
  },
  {
    num: '{03}',
    title: 'Design & Prototyping',
    desc: 'Interactive prototypes tested with real users before a line of production code is written.',
    theme: 'magenta',
    color: '#D946EF',
    icon: 'pen-tool'
  },
  {
    num: '{04}',
    title: 'Agile Delivery',
    desc: 'Two-week sprints, working software every release, direct access to the engineers building it.',
    theme: 'purple',
    color: '#8B5CF6',
    icon: 'terminal'
  },
  {
    num: '{05}',
    title: 'QA & Hardening',
    desc: 'Functional, performance, device, and security testing throughout, not bolted on at the end.',
    theme: 'cyan',
    color: '#06B6D4',
    icon: 'shield-alert'
  },
  {
    num: '{06}',
    title: 'Launch & Adoption',
    desc: 'Deployment, training, and the change management that decides whether a platform gets used.',
    theme: 'emerald',
    color: '#10B981',
    icon: 'rocket'
  },
  {
    num: '{07}',
    title: 'Support & Iteration',
    desc: 'SLA-backed support and continuous improvement once you\'re live.',
    theme: 'amber',
    color: '#F59E0B',
    icon: 'infinity'
  }
];

export const TECH_STACK_CATEGORIES = [
  {
    id: 'ai-data',
    name: 'AI & Data',
    icon: 'bot',
    title: 'AI & Data',
    description: 'Advanced LLMs, agentic workflows, and predictive models integration.',
    techs: [
      { name: 'OpenAI GPT-4', logo: 'openai' },
      { name: 'Anthropic Claude', logo: 'claude' },
      { name: 'Google Gemini', logo: 'gemini' },
      { name: 'Meta Llama 3', logo: 'llama' },
      { name: 'Pinecone', logo: 'pinecone' },
      { name: 'LangChain', logo: 'langchain' }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'layout',
    title: 'Frontend Engineering',
    description: 'Sub-second web performance, accessible interactive UIs, and design systems.',
    techs: [
      { name: 'React 19', logo: 'react' },
      { name: 'Next.js 15', logo: 'nextjs' },
      { name: 'TypeScript', logo: 'typescript' },
      { name: 'Tailwind CSS', logo: 'tailwind' },
      { name: 'Vite', logo: 'vite' },
      { name: 'Motion / Framer', logo: 'framer' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'server',
    title: 'Backend Systems & Storage',
    description: 'Resilient APIs, event streams, and relational data integrity at enterprise scale.',
    techs: [
      { name: 'Node.js & Express', logo: 'nodejs' },
      { name: 'Python FastAPI', logo: 'python' },
      { name: 'Go Microservices', logo: 'go' },
      { name: 'PostgreSQL', logo: 'postgres' },
      { name: 'Redis Cache', logo: 'redis' },
      { name: 'Apache Kafka', logo: 'kafka' }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile',
    icon: 'smartphone',
    title: 'Mobile & Edge Engineering',
    description: 'Offline-capable apps with fluid native gestures and biometric security.',
    techs: [
      { name: 'React Native', logo: 'react' },
      { name: 'Flutter', logo: 'flutter' },
      { name: 'Swift (iOS)', logo: 'swift' },
      { name: 'Kotlin (Android)', logo: 'kotlin' },
      { name: 'SQLite Encrypted', logo: 'sqlite' },
      { name: 'Expo SDK', logo: 'expo' }
    ]
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Zero-downtime CI/CD pipelines, container orchestration, and multi-cloud VPCs.',
    techs: [
      { name: 'Amazon Web Services', logo: 'aws' },
      { name: 'Google Cloud Platform', logo: 'gcp' },
      { name: 'Microsoft Azure', logo: 'azure' },
      { name: 'Docker Containers', logo: 'docker' },
      { name: 'Kubernetes', logo: 'kubernetes' },
      { name: 'Terraform IaC', logo: 'terraform' }
    ]
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Tech',
    icon: 'radio',
    title: 'Emerging & Spatial Tech',
    description: 'IoT telemetry, edge inferencing, WebSockets, and spatial interfaces.',
    techs: [
      { name: 'WebSockets / Realtime', logo: 'websocket' },
      { name: 'WebRTC Audio/Video', logo: 'webrtc' },
      { name: 'Three.js / WebGL', logo: 'threejs' },
      { name: 'MQTT Edge Telemetry', logo: 'mqtt' },
      { name: 'WebAssembly (WASM)', logo: 'wasm' },
      { name: 'Graph Databases (Neo4j)', logo: 'neo4j' }
    ]
  },
  {
    id: 'generative-ai',
    name: 'Generative AI',
    icon: 'sparkles',
    title: 'Generative AI & Agentic Tooling',
    description: 'Evaluation frameworks, deterministic guardrails, and multi-agent coordination.',
    techs: [
      { name: 'LlamaIndex RAG', logo: 'llamaindex' },
      { name: 'Pydantic Evals', logo: 'pydantic' },
      { name: 'DeepSeek R1', logo: 'deepseek' },
      { name: 'Qdrant Vector DB', logo: 'qdrant' },
      { name: 'Ollama Edge LLMs', logo: 'ollama' },
      { name: 'vLLM Serving', logo: 'vllm' }
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 'test-1',
    category: 'Logistics',
    categoryTheme: 'text-amber-700 bg-amber-50 border-amber-200',
    quote: '“Our previous system had no real-time visibility into dock scheduling - drivers were idling for hours, and we had no way to fix it. AppAgentix rebuilt the whole workflow in under four months. We cut detention costs significantly in the first quarter alone.”',
    author: 'Operations Director',
    company: 'regional logistics provider',
    initials: 'OD',
    color: 'border-orange-500 text-orange-600'
  },
  {
    id: 'test-2',
    category: 'FinTech',
    categoryTheme: 'text-purple-700 bg-purple-50 border-purple-200',
    quote: '“We needed a platform that could pass a SOC 2 audit without slowing down our engineering team. AppAgentix understood both the compliance and architecture sides from day one; that combination is rare.”',
    author: 'CTO',
    company: 'payments technology company',
    initials: 'CT',
    color: 'border-purple-500 text-purple-600'
  },
  {
    id: 'test-3',
    category: 'Healthcare',
    categoryTheme: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    quote: '“Patient data compliance isn\'t something you bolt on later. AppAgentix built HIPAA requirements into the architecture from day one, not as an afterthought. That gave our leadership confidence signing off on the project.”',
    author: 'VP of Product',
    company: 'healthcare technology company',
    initials: 'VP',
    color: 'border-indigo-500 text-indigo-600'
  }
];

export const COMPLIANCE_ITEMS = [
  { name: 'GDPR', desc: 'EU Data Protection & Governance', icon: 'shield-heart', color: 'from-orange-100 to-rose-100 text-rose-600' },
  { name: 'HIPAA', desc: 'Health Data Security & Privacy', icon: 'shield-plus', color: 'from-pink-100 to-purple-100 text-pink-600' },
  { name: 'PCI DSS', desc: 'Payment Security Standards', icon: 'credit-card', color: 'from-purple-100 to-indigo-100 text-purple-600' },
  { name: 'SOC 2', desc: 'Trust Services Criteria & Audit', icon: 'shield-check', color: 'from-blue-100 to-cyan-100 text-blue-600' },
  { name: 'CCPA', desc: 'Consumer Privacy Compliance', icon: 'shield-lock', color: 'from-indigo-100 to-purple-100 text-indigo-600' }
];

export const PRACTICE_ITEMS = [
  { num: '01', title: 'ISO 27001 aligned', icon: 'shield-check' },
  { num: '02', title: 'OWASP secure coding', icon: 'code' },
  { num: '03', title: 'NDA on every engagement', icon: 'handshake' },
  { num: '04', title: 'Client owns all IP and source code', icon: 'copyright' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'zero-downtime-migration',
    category: 'COMPLIANCE & FINTECH',
    readTime: '5 min read',
    date: 'March 2026',
    title: 'Zero-Downtime Core Migration for SOC 2 Type II Banking Platforms',
    excerpt: 'Phased database synchronization, backward-compatible API contracts, and automated audit trails under live transaction load without losing a single financial record.',
    tags: ['FinTech', 'Database Sync', 'SOC 2'],
    author: {
      name: 'Maya Kovacs',
      role: 'Fintech Architect',
      initials: 'MK',
      avatarBg: 'bg-slate-900 text-white'
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'offline-first-ehr',
    category: 'HEALTHCARE & HIPAA',
    readTime: '6 min read',
    date: 'March 2026',
    title: 'Building Offline-First Clinical Speech Dictation for Mobile EHRs',
    excerpt: 'On-device whisper transcription pipelines with local SQLite encryption, dual-key recovery, and zero-knowledge synchronization when connecting to hospital networks.',
    tags: ['Healthcare', 'Offline-First', 'HIPAA'],
    author: {
      name: 'Devon Rao',
      role: 'Staff Mobile Eng',
      initials: 'DR',
      avatarBg: 'bg-purple-600 text-white'
    },
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prompt-to-production',
    category: 'AI ENGINEERING',
    readTime: '8 min read',
    date: 'February 2026',
    title: 'From Prompt to Production: Evals, Guardrails, and Human-in-the-Loop Design',
    excerpt: 'A pragmatic guide to continuous model evaluation, synthetic testing datasets, regression detection, and graceful degradation in production enterprise workflows.',
    tags: ['AI Evals', 'LLMOps', 'Guardrails'],
    author: {
      name: 'Sofia Lin',
      role: 'Director of AI Evals',
      initials: 'SL',
      avatarBg: 'bg-rose-500 text-white'
    },
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    num: '01',
    question: 'How much does a project cost, and how long does it take?',
    answer: 'MVPs typically start from $15,000 and launch in 8 to 12 weeks. Mid-complexity platforms usually cost $25,000 to $120,000 and take 4 to 6 months. Enterprise systems with heavy integration or compliance work are scoped individually and can run 6+ months. Every project starts with a fixed-scope Discovery, so you have a firm cost and timeline before committing to the build.'
  },
  {
    id: 'faq-2',
    num: '02',
    question: 'What happens in the two-week Discovery, and what do I get from it?',
    answer: 'During our two-week Discovery phase, senior software architects evaluate your current systems, interview core stakeholders, and map out realistic technical requirements. You receive an exhaustive Architecture Blueprint, prioritized delivery milestones, stack selections, security posture evaluation, and a guaranteed fixed-price estimate. The roadmap belongs entirely to you.'
  },
  {
    id: 'faq-3',
    num: '03',
    question: 'Will the engineers who scope my project be the ones who build it?',
    answer: 'Yes, 100%. We categorically reject the bait-and-switch agency model. The very senior architects and lead engineers who design your technical architecture and run discovery sessions remain assigned to your codebase through development, QA hardening, deployment, and ongoing post-launch SLA support.'
  },
  {
    id: 'faq-4',
    num: '04',
    question: 'Can you take over a project another vendor left unfinished?',
    answer: 'Yes. Approximately 35% of our engagements involve taking over stalled, fragile, or partially built codebases from previous agencies. We begin with a rigorous Code & Architecture Audit to pinpoint vulnerabilities, technical debt, and missing test coverage before formulating an incremental modernization plan.'
  },
  {
    id: 'faq-5',
    num: '05',
    question: 'What happens after launch?',
    answer: 'After release, we provide dedicated SLA-backed maintenance and monitoring teams. This includes 24/7 incident response, security patch updates, performance monitoring, infrastructure management, and regular feature iteration sprints based on user telemetry.'
  },
  {
    id: 'faq-6',
    num: '06',
    question: 'What engagement models do you offer?',
    answer: 'We provide three transparent engagement structures: 1) Fixed-Scope Product Delivery (ideal for MVPs and discrete platform milestones), 2) Dedicated Embedded Engineering Pods (senior cross-functional teams integrating directly into your organization), and 3) Phased Modernization Retainers (for enterprise migration and continuous compliance audits).'
  },
  {
    id: 'faq-7',
    num: '07',
    question: 'Can you build for regulated industries like healthcare and finance?',
    answer: 'Yes. Our core engineering standards were forged in high-stakes environments. We routinely construct and audit architectures complying with HIPAA, PCI DSS Level 1, SOC 2 Type II, ISO 27001, and GDPR, signing formal BAAs and bilateral confidentiality agreements before any architectural review.'
  },
  {
    id: 'faq-8',
    num: '08',
    question: 'Do you sign an NDA, and who owns the code?',
    answer: 'You own 100% of all intellectual property, source code, data pipelines, infrastructure scripts, and design artifacts from day one. We sign bilateral non-disclosure agreements before reviewing any specifications, ensuring your proprietary ideas and trade secrets remain strictly protected.'
  }
];
