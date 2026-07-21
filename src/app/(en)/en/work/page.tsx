import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { TopNav } from "@/components/TopNav";
import { softwareProjectsEn } from "@/data/projects-en";

export const metadata: Metadata = {
  title: "Selected Software Work | Sergio Antunez Rios",
  description: "Enterprise products, B2B software and internal automation focused on measurable operational value.",
  alternates: {
    canonical: "/en/work",
    languages: { "es-MX": "/software", en: "/en/work" }
  }
};

export default function EnglishWorkPage() {
  const masterPieces = softwareProjectsEn.filter((project) =>
    ["sw-enterprise-data-warehouse", "sw-space-planning-software", "sw-modular-enterprise-platform", "sw-industrial-sales-crm"].includes(project.id)
  );
  const platformApps = softwareProjectsEn.filter((project) =>
    ["sw-content-intelligence-system", "sw-autonomous-ads-agent", "sw-erp-quoting-tool", "sw-packaging-operations-system"].includes(project.id)
  );
  const otherProjects = softwareProjectsEn.filter(
    (project) => !masterPieces.includes(project) && !platformApps.includes(project)
  );

  return (
    <div lang="en">
      <TopNav language="en" />
      <main className="container-wide" style={{ paddingTop: "48px", paddingBottom: "96px" }}>
        <header style={{ marginBottom: "64px" }}>
          <Link href="/en" className="link-primary" style={{ fontSize: "13px", marginBottom: "32px", display: "inline-flex" }}>
            <ArrowLeft size={16} weight="bold" aria-hidden="true" />
            Back to home
          </Link>
          <div className="section-block-label" style={{ marginTop: "32px" }}>Selected work</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Enterprise platforms and applied AI systems
          </h1>
          <p className="about-prose" style={{ maxWidth: "65ch" }}>
            These cases are selected for the value they create: space-planning software with
            an integrated catalog that reduces dependence on external licenses, a shared platform for several business
            areas and an end-to-end B2B commercial product. Public descriptions intentionally
            omit architecture, vendors and internal implementation details.
          </p>
        </header>

        <section className="section-block">
          <h2 className="section-block-label">Anchor projects</h2>
          {masterPieces.map((project) => <ProjectCard key={project.id} project={project} language="en" />)}
          <p className="method-note">
            <strong>Financial-scenario basis:</strong> 17 licenses at US$1,420 per year
            with a 10% volume discount equal US$21,726 annually, before extensions.
            This represents a potentially avoidable cost reference, not confirmed
            accounting savings. Source: {" "}
            <a href="https://support.configura.com/hc/en-us/articles/1500001985381-CET-Industry-Products-Pricing-and-Discounts" target="_blank" rel="noopener noreferrer" className="link-primary">
              public 2026 pricing
            </a>.
          </p>
        </section>

        <section className="section-block">
          <h2 className="section-block-label">Applications within the platform</h2>
          {platformApps.map((project) => <ProjectCard key={project.id} project={project} language="en" />)}
        </section>

        {otherProjects.length > 0 ? (
          <section className="section-block">
            <h2 className="section-block-label">Other work</h2>
            {otherProjects.map((project) => <ProjectCard key={project.id} project={project} language="en" />)}
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
