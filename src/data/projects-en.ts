import type { Project } from "@/lib/types";
import { biomedicalProjects, softwareProjects } from "@/data/projects";

const softwareCopy: Record<string, Partial<Project>> = {
  "sw-enterprise-data-warehouse": {
    title: "Enterprise data warehouse and executive dashboard",
    summary:
      "Corporate system consolidating information so leadership can assess company status, analyze growth and work from consistent indicators. Its planned evolution adds area-level KPIs with access segmented by responsibility and data domain.",
    problem:
      "Leadership needs a reliable, shared view of company status and growth.",
    highlights: [
      "My role: principal engineer of the data platform, with approximately 93% of the contributions recorded in the repository",
      "Dimensional modeling with a star schema and SQL transformation layer to maintain consistent metrics",
      "Service API and infrastructure as code for reproducible deployment and operation",
      "Automated reconciliation across multiple sources to the cent, with access segmented by data domain and responsibility"
    ],
    metrics: ["~93% of contributions", "Executive reporting", "Segmented access"],
    stack: ["Dimensional modeling", "SQL", "Service API", "Infrastructure as code"]
  },
  "sw-space-planning-software": {
    title: "Internal space-planning and catalog software",
    summary:
      "Internal product combining the corporate catalog with a tool integrated into the design environment. It lets designers insert products, finishes and pricing while planning spaces and reduces dependence on specialized external licenses.",
    problem:
      "Space planning depended on external licenses and information distributed across separate sources.",
    highlights: [
      "Moved from MVP to production and supports a workflow for approximately 17 users",
      "My responsibility: information architecture, catalog administration, imports, cleanup and implementation",
      "Rebuilt the product hierarchy from legacy CAD catalog formats; drawing-resource coverage increased from approximately 78% to nearly 98%",
      "US$21.7k+ annual base cost potentially avoidable; scenario modeled from public 2026 pricing and pending internal validation"
    ],
    metrics: ["US$21.7k+ annual potential", "In production", "Nearly 98% coverage"],
    stack: ["Information architecture", "Data migration", "CAD catalog reconstruction"]
  },
  "sw-modular-enterprise-platform": {
    title: "Master platform for internal applications",
    summary:
      "Internal platform bringing operational, sales, human-resources, finance and automation applications into a shared foundation for several companies in the group. I contribute to its co-architecture and evolution as a cross-functional product.",
    problem:
      "Each business area addressed operational needs in separate tools, duplicating effort and maintenance.",
    highlights: [
      "My role: core engineer and one of the top-two contributors across backend and frontend of a platform developed by multiple teams",
      "Multi-company architecture and shared services for applications used across operational areas",
      "Shared CI/CD for coordinated deployment and evolution of internal products",
      "Covers operations, sales, human resources, finance and automation"
    ],
    metrics: ["Core engineer", "In production", "Multi-company"],
    stack: ["Multi-company architecture", "Shared services", "CI/CD"]
  },
  "sw-packaging-operations-system": {
    title: "Packaging operations system",
    summary:
      "Shop-floor application organizing shipment preparation, centralizing packaging progress and maintaining a shared view by customer and destination to reduce operational friction.",
    problem:
      "Packaging progress and shipment preparation lacked a shared shop-floor view.",
    highlights: [
      "Structures packaging and shipment preparation in a shared operational flow",
      "Groups work by customer and destination for clearer shop-floor execution",
      "Synchronizes progress across devices while preserving shipment traceability",
      "Integrates label generation into the operational workflow"
    ],
    metrics: ["Shop-floor operation", "Synchronized workflow", "Shipment traceability"],
    stack: []
  },
  "sw-industrial-sales-crm": {
    title: "Industrial Sales CRM Platform",
    summary:
      "B2B commercial product centralizing follow-up, opportunities, quotations and communication across a multi-brand and multi-branch operation. I led product design and implemented the frontend and AI agent; the backend was built with a development partner.",
    problem:
      "The commercial operation was fragmented across brands, branches, channels and follow-up stages.",
    highlights: [
      "My role: product design and end-to-end implementation of the frontend and AI agent, with the backend built by a development partner",
      "Real-time AI agent using RAG and tool calling, integrated into the sales workflow",
      "Centralized commercial process from initial contact through quotation",
      "Multi-brand and multi-branch follow-up in a shared operational flow",
      "Communication-channel automation and commercial-performance dashboards"
    ],
    metrics: ["Frontend + AI agent", "Multi-brand", "Multi-branch"],
    stack: ["Product design", "Frontend", "RAG", "Tool calling"]
  },
  "sw-content-intelligence-system": {
    title: "Content Intelligence and Publishing System",
    summary:
      "Internal system connecting market research, assisted content preparation, brand calendars and authorized multi-channel publishing. It is under active development.",
    problem:
      "Research, scheduling, content production and publishing operated as disconnected processes.",
    highlights: [
      "Three-stage workflow: market research, AI-assisted generation and multi-channel publishing",
      "Calendar entries aligned with market signals and brand context",
      "Automated publishing across authorized channels",
      "Simultaneous support for multiple brands in the group"
    ],
    metrics: ["3-stage workflow", "Multi-brand", "Multi-channel publishing"],
    stack: []
  },
  "sw-autonomous-ads-agent": {
    title: "Ads Optimization Automation",
    summary:
      "Internal service that analyzes digital campaigns and supports bid, budget and creative adjustments according to configurable criteria and operational supervision points.",
    problem:
      "Campaigns required constant manual review to detect budget and performance deviations.",
    highlights: [
      "Decision orchestration with configurable optimization criteria",
      "Continuous monitoring of bids, budgets and creative assets",
      "Integration with digital-campaign operations",
      "Scheduled execution with operational supervision points"
    ],
    metrics: ["Scheduled automation", "Continuous monitoring", "Operational supervision"],
    stack: []
  },
  "sw-erp-quoting-tool": {
    title: "ERP-Integrated Quoting Tool",
    summary:
      "The first product launched within the internal platform. It centralizes the information required for quotations and keeps operational data synchronized.",
    problem:
      "Quoting required gathering information from several sources, slowing commercial response.",
    highlights: [
      "First corporate-platform module launched in February-March 2025",
      "Controlled synchronization with the corporate information source",
      "Up-to-date data available to the quotation process",
      "Deployment within company-authorized infrastructure"
    ],
    metrics: ["40% shorter response cycle (internal measurement)", "Updated quotation data"],
    stack: []
  }
};

const biomedicalCopy: Record<string, Partial<Project>> = {
  "bio-thesis": {
    title: "Thesis: Computer Vision and interlock prototype for industrial safety",
    summary:
      "Academic prototype deployed on an industrial press brake to detect fingers inside a defined hazard region and actuate an experimental pedal interlock under controlled conditions.",
    highlights: [
      "YOLOv8 trained on 1,131 images, including augmentation",
      "NVIDIA Jetson Nano deployment with latency reported below 120 ms in controlled tests",
      "Experimental circuit that inhibits the pedal signal when fingers enter the hazard region",
      "Final thesis grade: 10/10"
    ],
    metrics: ["95.3% in-domain sensitivity", "94.7% precision", "95.0% F1"]
  },
  "bio-service-experience": {
    title: "Biomedical technical-service experience (2023-2024)",
    summary:
      "Field experience during my degree involving medical-equipment maintenance, including dental units, clinical air compressors and intervention traceability.",
    highlights: [
      "Troubleshooting, preventive maintenance and functional verification",
      "Application of service and technovigilance practices",
      "Documented intervention traceability",
      "Work completed through professional practice and independent technical service"
    ],
    metrics: ["Field experience: 2023-2024"]
  }
};

function localize(projects: Project[], translations: Record<string, Partial<Project>>) {
  return projects.map((project) => ({ ...project, ...translations[project.id] }));
}

export const softwareProjectsEn = localize(softwareProjects, softwareCopy);
export const biomedicalProjectsEn = localize(biomedicalProjects, biomedicalCopy);
