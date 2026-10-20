import React from 'react';
import {
  Server,
  Code2,
  Smartphone,
  Cpu,
  Users2,
  Cloud,
  Infinity as InfinityIcon,
  Glasses,
  ShieldCheck,
  BarChart3,
  Blocks,
  Settings2,
  Gamepad2,
  Layout,
  Sparkles,
  Bot,
  Brain,
  CreditCard,
  ShoppingBag,
  GraduationCap,
  Calendar,
  CalendarDays,
  Truck,
  Package,
  Car,
  Heart,
  Zap,
  Clock,
  Building2,
  Video,
  SmartphoneNfc,
  PlusCircle,
  TrendingUp,
  Mail,
  UserCheck,
  Megaphone,
  Briefcase,
  Users,
  Receipt,
  BookOpenCheck,
  ShoppingCart,
  Search,
  FileText,
  GitBranch,
  Volume2,
  Database,
  Radio,
  Flame,
  Wrench,
  Sparkle,
  Plane,
  Store,
  Layers,
  FileSpreadsheet
} from 'lucide-react';

export interface MegaMenuItem {
  title: string;
  subtitle?: string;
  hashtag: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

export interface MegaMenuConfig {
  id: string;
  label: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  engineeringStandard: {
    tag: string;
    verifiedText: string;
    heading: string;
    body: string;
  };
  catalogTitle: string;
  catalogSubtitle: string;
  domainCountBadge: string;
  items: MegaMenuItem[];
  exploreAllButton?: {
    label: string;
    sublabel: string;
    hashtag: string;
  };
  trustBadges?: string[];
  ctaLink?: {
    text: string;
    hashtag: string;
  };
  clients?: Array<{
    name: string;
    subtext?: string;
  }>;
}

export const SERVICES_MEGA_MENU: MegaMenuConfig = {
  id: 'services',
  label: 'Services',
  badge: '• Comprehensive Suite of Capabilities',
  titlePrefix: 'Crafted for',
  titleHighlight: 'Growth',
  description:
    'Our ICT Services Provide Comprehensive Suite of Resources to Streamline The Development, Deployment, and Management of Your Project Comprehensively.',
  engineeringStandard: {
    tag: 'ENGINEERING STANDARD',
    verifiedText: 'Verified Delivery',
    heading: 'Senior-Led Architectures',
    body: 'Direct access to senior developers and architects. Zero junior handoffs, 100% production accountability.',
  },
  clients: [
    { name: 'BINGHATTI', subtext: 'Real Estate' },
    { name: 'ADCB', subtext: 'Banking' },
    { name: 'talabat', subtext: 'Food Delivery' },
    { name: 'ALMASAOOD', subtext: 'Enterprise' },
    { name: 'ahlam.net', subtext: 'Media' },
    { name: 'Careem', subtext: 'Mobility' },
  ],
  catalogTitle: 'FULL CAPABILITIES CATALOG',
  catalogSubtitle: 'Enterprise Services & Development',
  domainCountBadge: '15 Specialized Domains',
  items: [
    {
      title: 'ICT Services',
      hashtag: '#services-ict',
      icon: Server,
      iconBg: 'bg-orange-50 text-orange-600 border border-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Software Development',
      hashtag: '#services-software',
      icon: Code2,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      title: 'Mobile App Development',
      hashtag: '#services-mobile',
      icon: Smartphone,
      iconBg: 'bg-pink-50 text-pink-600 border border-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      title: 'IoT Development',
      hashtag: '#services-iot',
      icon: Cpu,
      iconBg: 'bg-teal-50 text-teal-600 border border-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      title: 'IT Consulting',
      hashtag: '#services-consulting',
      icon: Users2,
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Managed IT Services',
      hashtag: '#services-managed',
      icon: Server,
      iconBg: 'bg-slate-100 text-slate-700 border border-slate-200',
      iconColor: 'text-slate-700',
    },
    {
      title: 'Cloud Computing Services',
      hashtag: '#services-cloud',
      icon: Cloud,
      iconBg: 'bg-purple-50 text-purple-600 border border-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Devops',
      hashtag: '#services-devops',
      icon: InfinityIcon,
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      title: 'AR/VR Development',
      hashtag: '#services-ar-vr',
      icon: Glasses,
      iconBg: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'Cybersecurity Services',
      hashtag: '#services-cybersecurity',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Data Analytics',
      hashtag: '#services-data',
      icon: BarChart3,
      iconBg: 'bg-sky-50 text-sky-600 border border-sky-100',
      iconColor: 'text-sky-600',
    },
    {
      title: 'Blockchain Services',
      hashtag: '#services-blockchain',
      icon: Blocks,
      iconBg: 'bg-violet-50 text-violet-600 border border-violet-100',
      iconColor: 'text-violet-600',
    },
    {
      title: 'ERP Software Development',
      hashtag: '#services-erp',
      icon: Settings2,
      iconBg: 'bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100',
      iconColor: 'text-fuchsia-600',
    },
    {
      title: '2D/3D Game Development',
      hashtag: '#services-gaming',
      icon: Gamepad2,
      iconBg: 'bg-purple-50 text-purple-600 border border-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Web Dev & Design',
      hashtag: '#services-web',
      icon: Layout,
      iconBg: 'bg-teal-50 text-teal-600 border border-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Digital Transformation',
      hashtag: '#services-transformation',
      icon: Sparkles,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      title: 'Artificial Intelligence',
      hashtag: '#services-ai',
      icon: Brain,
      iconBg: 'bg-violet-50 text-violet-600 border border-violet-100',
      iconColor: 'text-violet-600',
    },
  ],
  exploreAllButton: {
    label: 'EXPLORE ALL',
    sublabel: 'Our Services',
    hashtag: '#services',
  },
  trustBadges: [
    'Fixed-Scope Discovery',
    '100% Code & IP Ownership',
    'NDA on Every Engagement',
  ],
  ctaLink: {
    text: 'Schedule a 30-min Technical Consultation',
    hashtag: '#contact',
  },
};

export const SOLUTIONS_MEGA_MENU: MegaMenuConfig = {
  id: 'solutions',
  label: 'Solutions',
  badge: '• Tailored Industry & Enterprise Systems',
  titlePrefix: 'Crafted for',
  titleHighlight: 'Solutions',
  description:
    'From Fintech and Telemedicine to Warehouse Logistics and Omnichannel Commerce, we architect and deliver mission-critical solutions tailored precisely to your enterprise operational models.',
  engineeringStandard: {
    tag: 'SENIOR-LED ARCHITECTURES',
    verifiedText: 'Verified Delivery',
    heading: 'Production-Ready Platforms',
    body: 'Direct access to senior architects and engineers. Zero junior handoffs, 100% compliant, secure, and production ready from Day 1.',
  },
  catalogTitle: 'FULL SOLUTIONS CATALOG',
  catalogSubtitle: 'Enterprise & Industry Solutions',
  domainCountBadge: '17 Specialized Domains',
  items: [
    {
      title: 'Banking Apps',
      hashtag: '#solutions-banking',
      icon: CreditCard,
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Grocery Delivery',
      hashtag: '#solutions-grocery',
      icon: ShoppingBag,
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'EdTech Apps',
      hashtag: '#solutions-edtech',
      icon: GraduationCap,
      iconBg: 'bg-teal-50 text-teal-600 border border-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Booking Apps',
      hashtag: '#solutions-booking',
      icon: Calendar,
      iconBg: 'bg-purple-50 text-purple-600 border border-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'CRM Software',
      hashtag: '#solutions-crm',
      icon: Users,
      iconBg: 'bg-sky-50 text-sky-600 border border-sky-100',
      iconColor: 'text-sky-600',
    },
    {
      title: 'Fleet Management',
      hashtag: '#solutions-fleet',
      icon: Truck,
      iconBg: 'bg-slate-100 text-slate-700 border border-slate-200',
      iconColor: 'text-slate-700',
    },
    {
      title: 'Warehouse Management',
      hashtag: '#solutions-warehouse',
      icon: Package,
      iconBg: 'bg-violet-50 text-violet-600 border border-violet-100',
      iconColor: 'text-violet-600',
    },
    {
      title: 'Insurance Apps',
      hashtag: '#solutions-insurance',
      icon: ShieldCheck,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      title: 'Ride-Sharing Apps',
      hashtag: '#solutions-ridesharing',
      icon: Car,
      iconBg: 'bg-teal-50 text-teal-600 border border-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Fitness Apps',
      hashtag: '#solutions-fitness',
      icon: Heart,
      iconBg: 'bg-orange-50 text-orange-600 border border-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      title: 'EV Charging Apps',
      hashtag: '#solutions-ev',
      icon: Zap,
      iconBg: 'bg-lime-50 text-lime-600 border border-lime-100',
      iconColor: 'text-lime-600',
    },
    {
      title: 'Sports Betting',
      hashtag: '#solutions-sports-betting',
      icon: Clock,
      iconBg: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'E-commerce Apps',
      hashtag: '#solutions-ecommerce',
      icon: ShoppingBag,
      iconBg: 'bg-pink-50 text-pink-600 border border-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      title: 'Property Management',
      hashtag: '#solutions-property',
      icon: Building2,
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Telemedicine',
      hashtag: '#solutions-telemedicine',
      icon: Video,
      iconBg: 'bg-sky-50 text-sky-600 border border-sky-100',
      iconColor: 'text-sky-600',
    },
    {
      title: 'POS Software',
      hashtag: '#solutions-pos',
      icon: SmartphoneNfc,
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Healthcare Apps',
      hashtag: '#solutions-healthcare',
      icon: PlusCircle,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
      iconColor: 'text-rose-600',
    },
  ],
  exploreAllButton: {
    label: 'EXPLORE ALL',
    sublabel: 'Our Solutions',
    hashtag: '#solutions',
  },
  trustBadges: [
    'Fixed-Scope Discovery',
    '100% Code & IP Ownership',
    'NDA on Every Engagement',
  ],
  ctaLink: {
    text: 'Schedule an Architectural Discovery Session',
    hashtag: '#contact',
  },
};

export const AI_AGENTS_MEGA_MENU: MegaMenuConfig = {
  id: 'agents',
  label: 'AI Agents',
  badge: '• TAILORED AI AGENTS',
  titlePrefix: 'Crafted for',
  titleHighlight: 'AI Agents',
  description:
    'From customer support and autonomous outbound sales to document intelligence and real-time RAG, we architect and deliver mission-critical solutions tailored precisely to your enterprise operational models and compliance standards.',
  engineeringStandard: {
    tag: 'ENGINEERING STANDARD',
    verifiedText: 'Verified Delivery',
    heading: 'Production-Ready Autonomous Agents',
    body: 'Direct access to senior architects and domain engineers. Zero junior handoffs, 100% compliant, secure, and production ready from Day 1.',
  },
  catalogTitle: 'FULL AI AGENTS CATALOG',
  catalogSubtitle: 'Autonomous & Copilot Agents',
  domainCountBadge: '18 Specialized Domains',
  items: [
    {
      title: 'Customer Service Agent',
      hashtag: '#ai-agent-customer-service',
      icon: Bot,
      iconBg: 'bg-purple-50 text-purple-600 border border-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Sales Agent',
      hashtag: '#ai-agent-sales',
      icon: TrendingUp,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      title: 'SDR Agent',
      hashtag: '#ai-agent-sdr',
      icon: Mail,
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Lead Generation Agent',
      hashtag: '#ai-agent-lead-gen',
      icon: UserCheck,
      iconBg: 'bg-sky-50 text-sky-600 border border-sky-100',
      iconColor: 'text-sky-600',
    },
    {
      title: 'Lead Qualification Agent',
      hashtag: '#ai-agent-lead-qualification',
      icon: Settings2,
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Appointment Booking Agent',
      hashtag: '#ai-agent-booking',
      icon: CalendarDays,
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Marketing Agent',
      hashtag: '#ai-agent-marketing',
      icon: Megaphone,
      iconBg: 'bg-pink-50 text-pink-600 border border-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      title: 'Recruitment Agent',
      hashtag: '#ai-agent-recruitment',
      icon: Briefcase,
      iconBg: 'bg-cyan-50 text-cyan-600 border border-cyan-100',
      iconColor: 'text-cyan-600',
    },
    {
      title: 'HR Agent',
      hashtag: '#ai-agent-hr',
      icon: Users,
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Finance Agent',
      hashtag: '#ai-agent-finance',
      icon: Receipt,
      iconBg: 'bg-violet-50 text-violet-600 border border-violet-100',
      iconColor: 'text-violet-600',
    },
    {
      title: 'Accounting Agent',
      hashtag: '#ai-agent-accounting',
      icon: BookOpenCheck,
      iconBg: 'bg-teal-50 text-teal-600 border border-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Procurement Agent',
      hashtag: '#ai-agent-procurement',
      icon: ShoppingCart,
      iconBg: 'bg-orange-50 text-orange-600 border border-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Research Agent',
      hashtag: '#ai-agent-research',
      icon: Search,
      iconBg: 'bg-sky-50 text-sky-600 border border-sky-100',
      iconColor: 'text-sky-600',
    },
    {
      title: 'Data Analysis Agent',
      hashtag: '#ai-agent-data-analysis',
      icon: BarChart3,
      iconBg: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'Document Processing Agent',
      hashtag: '#ai-agent-document-processing',
      icon: FileText,
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Workflow Automation Agent',
      hashtag: '#ai-agent-workflow-automation',
      icon: GitBranch,
      iconBg: 'bg-purple-50 text-purple-600 border border-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Voice Agent',
      hashtag: '#ai-agent-voice',
      icon: Volume2,
      iconBg: 'bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100',
      iconColor: 'text-fuchsia-600',
    },
    {
      title: 'RAG Agent',
      hashtag: '#ai-agent-rag',
      icon: Database,
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      iconColor: 'text-emerald-600',
    },
  ],
  exploreAllButton: {
    label: 'EXPLORE ALL',
    sublabel: 'Our AI Agents',
    hashtag: '#ai-capabilities',
  },
  trustBadges: [
    'Autonomous Multi-Agent Swarms',
    'Enterprise LLMOps & Guardrails',
    'SOC2 & HIPAA Compliant Models',
  ],
  ctaLink: {
    text: 'Test-Drive Agentic Pilots Today',
    hashtag: '#contact',
  },
};

export const CASE_STUDIES_MEGA_MENU: MegaMenuConfig = {
  id: 'portfolio',
  label: 'Case Studies',
  badge: '• VERIFIED CASE STUDIES & BUILDS',
  titlePrefix: 'Crafted for',
  titleHighlight: 'Impact & Scale',
  description:
    'From high-scale digital commerce and virtual health platforms to AI-driven logistics and fintech cores, explore real systems engineered by our senior team that drive tangible business metrics.',
  engineeringStandard: {
    tag: 'ENGINEERING STANDARD',
    verifiedText: 'Verified Delivery',
    heading: 'Production-Ready Platforms',
    body: 'Direct access to senior architects and domain engineers. Zero junior handoffs, 100% compliant, secure, and production ready from Day 1.',
  },
  catalogTitle: 'FULL PORTFOLIO SHOWCASE',
  catalogSubtitle: 'Featured Client Work & Case Studies',
  domainCountBadge: '12 Flagship Products',
  items: [
    {
      title: 'Dockline',
      subtitle: 'Logistics & WMS Systems',
      hashtag: '#case-study-dockline',
      icon: Truck,
      iconBg: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'CareNote AI',
      subtitle: 'Clinical Dictation & EHR',
      hashtag: '#case-study-carenote',
      icon: FileSpreadsheet,
      iconBg: 'bg-teal-50 text-teal-600 border border-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Expo City Dubai',
      subtitle: 'Autonomous Fleet Dispatch',
      hashtag: '#case-study-expo-city',
      icon: Zap,
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Keller Williams',
      subtitle: 'PropTech & Broker CRM',
      hashtag: '#case-study-keller-williams',
      icon: Building2,
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Vaultwise',
      subtitle: 'Fintech & Banking Core',
      hashtag: '#case-study-vaultwise',
      icon: CreditCard,
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Pulseboard',
      subtitle: 'Remote Patient Telemetry',
      hashtag: '#case-study-pulseboard',
      icon: Heart,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      title: 'Namshi',
      subtitle: 'High-Conversion Fashion',
      hashtag: '#case-study-namshi',
      icon: ShoppingBag,
      iconBg: 'bg-purple-50 text-purple-600 border border-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Tubi Stream',
      subtitle: 'Media & Video Delivery',
      hashtag: '#case-study-tubi-stream',
      icon: Video,
      iconBg: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'Servly',
      subtitle: 'On-Demand Marketplace',
      hashtag: '#case-study-servly',
      icon: Store,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      title: 'Majid Al Futtaim',
      subtitle: 'Unified Omnichannel Malls',
      hashtag: '#case-study-majid-al-futtaim',
      icon: ShoppingBag,
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Isuzu Connect',
      subtitle: 'Automotive Fleet IoT',
      hashtag: '#case-study-isuzu',
      icon: Car,
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Afiat Health',
      subtitle: 'Digital Clinic & Triage',
      hashtag: '#case-study-afiat-health',
      icon: ShieldCheck,
      iconBg: 'bg-sky-50 text-sky-600 border border-sky-100',
      iconColor: 'text-sky-600',
    },
  ],
  exploreAllButton: {
    label: 'EXPLORE ALL',
    sublabel: 'Case Studies',
    hashtag: '#portfolio',
  },
  trustBadges: [
    '30+ Production Deployments',
    '$120M+ Client Valuation Impact',
    'Zero Downtime Architecture',
  ],
  ctaLink: {
    text: 'Request Full Technical Case Study Decks',
    hashtag: '#contact',
  },
};

export const INDUSTRY_MEGA_MENU: MegaMenuConfig = {
  id: 'industry',
  label: 'Industry',
  badge: '• TAILORED DOMAIN EXPERTISE',
  titlePrefix: 'Crafted for',
  titleHighlight: 'Industries',
  description:
    "From Fintech and Healthcare to Logistics and Omnichannel Retail, we architect and deliver mission-critical solutions tailored precisely to your sector's operational frameworks and compliance standards.",
  engineeringStandard: {
    tag: 'ENGINEERING STANDARD',
    verifiedText: 'Verified Delivery',
    heading: 'Production-Ready Platforms',
    body: 'Direct access to senior architects and domain engineers. Zero junior handoffs, 100% compliant, secure, and production ready from Day 1.',
  },
  catalogTitle: 'FULL INDUSTRIES CATALOG',
  catalogSubtitle: 'Enterprise & Industry Verticals',
  domainCountBadge: '16 Specialized Domains',
  items: [
    {
      title: 'Dating & Social',
      hashtag: '#industry-social',
      icon: Heart,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      title: 'Education',
      hashtag: '#industry-education',
      icon: GraduationCap,
      iconBg: 'bg-teal-50 text-teal-600 border border-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Logistics',
      hashtag: '#industry-logistics',
      icon: Truck,
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Fitness & Wellness',
      hashtag: '#industry-fitness',
      icon: Sparkle,
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Energy & Utilities',
      hashtag: '#industry-energy',
      icon: Zap,
      iconBg: 'bg-lime-50 text-lime-600 border border-lime-100',
      iconColor: 'text-lime-600',
    },
    {
      title: 'Automotive',
      hashtag: '#industry-automotive',
      icon: Car,
      iconBg: 'bg-slate-100 text-slate-700 border border-slate-200',
      iconColor: 'text-slate-700',
    },
    {
      title: 'Retail',
      hashtag: '#industry-retail',
      icon: ShoppingBag,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      title: 'Construction',
      hashtag: '#industry-construction',
      icon: Wrench,
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Real Estate',
      hashtag: '#industry-real-estate',
      icon: Building2,
      iconBg: 'bg-orange-50 text-orange-600 border border-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Salon & Beauty',
      hashtag: '#industry-beauty',
      icon: Sparkles,
      iconBg: 'bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100',
      iconColor: 'text-fuchsia-600',
    },
    {
      title: 'Manufacturing',
      hashtag: '#industry-manufacturing',
      icon: Layers,
      iconBg: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'Media & Entertainment',
      hashtag: '#industry-media',
      icon: Video,
      iconBg: 'bg-purple-50 text-purple-600 border border-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Fintech',
      hashtag: '#industry-fintech',
      icon: CreditCard,
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Insurance',
      hashtag: '#industry-insurance',
      icon: ShieldCheck,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      title: 'Electric Vehicles',
      hashtag: '#industry-ev',
      icon: Radio,
      iconBg: 'bg-teal-50 text-teal-600 border border-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Travel & Hospitality',
      hashtag: '#industry-travel',
      icon: Plane,
      iconBg: 'bg-sky-50 text-sky-600 border border-sky-100',
      iconColor: 'text-sky-600',
    },
  ],
  exploreAllButton: {
    label: 'EXPLORE ALL',
    sublabel: 'Our Industries',
    hashtag: '#industry',
  },
  trustBadges: [
    'Domain Compliance Built-in',
    'SOC2, HIPAA & GDPR Ready',
    'Enterprise Scale Architecture',
  ],
  ctaLink: {
    text: 'Schedule an Industry Specialist Briefing',
    hashtag: '#contact',
  },
};
