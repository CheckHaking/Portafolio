import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { softwareProjects } from "@/data/projects";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Plataformas empresariales e IA aplicada | Sergio Antunez Rios",
  description: "Casos de software empresarial, automatización e IA aplicada con valor operativo documentado.",
  alternates: {
    canonical: "/software",
    languages: { "es-MX": "/software", en: "/en/work" }
  }
};

export default function SoftwarePage() {
  // Separar piezas maestras de apps específicas
  const masterPieces = softwareProjects.filter((p) =>
    ["sw-enterprise-data-warehouse", "sw-space-planning-software", "sw-modular-enterprise-platform", "sw-industrial-sales-crm"].includes(p.id)
  );

  const platformApps = softwareProjects.filter((p) =>
    [
      "sw-content-intelligence-system",
      "sw-autonomous-ads-agent",
      "sw-erp-quoting-tool",
      "sw-packaging-operations-system"
    ].includes(p.id)
  );

  const otherProjects = softwareProjects.filter(
    (p) => !masterPieces.includes(p) && !platformApps.includes(p)
  );

  return (
    <div>
      <TopNav />
      <main className="container-wide" style={{ paddingTop: "48px", paddingBottom: "96px" }}>
        {/* Header */}
        <header style={{ marginBottom: "64px" }}>
          <Link
            href="/"
            className="link-primary"
            style={{ fontSize: "13px", marginBottom: "32px", display: "inline-flex" }}
          >
            <ArrowLeft size={16} weight="bold" aria-hidden="true" />
            Volver al inicio
          </Link>
          <div className="section-block-label" style={{ marginTop: "32px" }}>
            Trabajo seleccionado
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Plataformas empresariales y aplicaciones de IA
          </h1>
          <p className="about-prose" style={{ maxWidth: "65ch" }}>
            Casos seleccionados por el valor que generan: un software de sembrado con
            catálogo integrado que reduce dependencia de licencias externas, una plataforma compartida para distintas áreas
            y un producto comercial B2B desarrollado de extremo a extremo. La información
            pública omite deliberadamente arquitectura, proveedores y detalles internos.
          </p>
        </header>

        {/* Piezas maestras */}
        <section className="section-block">
          <h2 className="section-block-label">Piezas maestras</h2>
          {masterPieces.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <p className="method-note">
            <strong>Base del escenario financiero:</strong> 17 licencias por US$1,420
            anuales con 10% de descuento por volumen equivalen a US$21,726 al año,
            antes de extensiones. Es una referencia de costo potencialmente evitable,
            no un ahorro contable confirmado. Fuente: {" "}
            <a href="https://support.configura.com/hc/en-us/articles/1500001985381-CET-Industry-Products-Pricing-and-Discounts" target="_blank" rel="noopener noreferrer" className="link-primary">
              precios públicos 2026
            </a>.
          </p>
        </section>

        {/* Apps dentro de la plataforma */}
        <section className="section-block">
          <h2 className="section-block-label">Aplicaciones dentro de la plataforma</h2>
          {platformApps.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        {/* Otros proyectos */}
        {otherProjects.length > 0 && (
          <section className="section-block">
            <h2 className="section-block-label">Otros proyectos</h2>
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
