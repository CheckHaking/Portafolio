import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";
import { hybridProjects } from "@/data/projects";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { ThesisResearchGallery } from "@/components/ThesisResearchGallery";
import { ResearchScopeNote } from "@/components/ResearchScopeNote";
import { ThesisTechnicalSummary } from "@/components/ThesisTechnicalSummary";

export const metadata: Metadata = {
  title: "Investigación en visión artificial industrial | Sergio Antunez Rios",
  description: "Caso técnico de un prototipo de visión artificial e interbloqueo para seguridad industrial, con resultados y limitaciones por entorno.",
  alternates: {
    canonical: "/interseccion",
    languages: { "es-MX": "/interseccion", en: "/en/research" }
  }
};

export default function InterseccionPage() {
  const thesis = profile.education.thesis;
  const otherHybrid = hybridProjects.filter((p) => p.id !== "hyb-vision-amputaciones");
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
            Investigación aplicada
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Visión artificial en el cruce entre salud ocupacional e Industria 4.0
          </h1>
          <p className="about-prose" style={{ maxWidth: "65ch" }}>
            Mi trabajo de investigación gira alrededor del{" "}
            <strong>cruce entre tres dominios</strong>: software, electrónica y
            hardware aplicados a problemas reales en seguridad ocupacional y
            salud. La pieza central es la tesis de licenciatura, que conecta la
            detección mediante visión artificial con un interbloqueo físico experimental
            instalado en una prensa industrial.
          </p>
        </header>

        {/* TESIS - pieza maestra */}
        <section id="tesis" className="section-block">
          <div className="section-block-label">Tesis de licenciatura</div>

          <article style={{ background: "var(--bg-card)", padding: "32px", borderRadius: "4px", marginBottom: "24px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "16px", lineHeight: 1.3 }}>
              {thesis.title}
            </h2>
            <p className="about-prose">
              Prototipo de visión artificial desplegado sobre una prensa industrial.
              Detecta dedos dentro de una región de riesgo y acciona un interbloqueo
              del pedal para reducir la exposición al peligro. El trabajo cruza tres
              dominios: <strong>salud ocupacional</strong> (objetivo),{" "}
              <strong>Computer Vision aplicada</strong> (técnica) y{" "}
              <strong>electrónica embebida</strong> (despliegue).
            </p>
          </article>

          <ResearchScopeNote />

          <div className="thesis-evidence-detail">
            <div className="section-block-label" style={{ fontSize: "11px", marginBottom: "16px" }}>
              Evidencia del prototipo y validación
            </div>
            <ThesisResearchGallery />
          </div>

          <p className="method-note">
            La comparación muestra viabilidad técnica en el entorno calibrado y una
            limitación de generalización. Para transferir el sistema se requiere ampliar
            el dataset y reentrenar con datos específicos de cada máquina. Estos resultados
            no demuestran desempeño universal ni validez de seguridad funcional.
          </p>

          <ThesisTechnicalSummary stack={thesis.stack} />
        </section>

        {/* Otros proyectos hybrid */}
        {otherHybrid.length > 0 && (
          <section className="section-block">
            <div className="section-block-label">Otros proyectos del cruce de dominios</div>
            <p className="about-prose" style={{ maxWidth: "65ch", marginBottom: "32px" }}>
              Proyectos académicos previos que también integran hardware,
              software y aplicación clínica.
            </p>
            {otherHybrid.map((project) => (
              <article key={project.id} className="work-card">
                <div className="work-card-period">Proyecto académico</div>
                <div>
                  <h3 className="work-card-title">{project.title}</h3>
                  <p className="work-card-summary">{project.summary}</p>
                  {project.highlights && (
                    <ul className="simple-list" style={{ marginTop: "12px" }}>
                      {project.highlights.slice(0, 4).map((h) => (
                        <li key={h} style={{ borderBottom: "none", padding: "4px 0" }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  {project.stack && (
                    <div className="work-card-tags">
                      {project.stack.map((t) => (
                        <span key={t} className="tag-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </section>
        )}

      </main>
      <Footer />
    </div>
  );
}
