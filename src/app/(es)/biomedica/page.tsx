import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { biomedicalProjects } from "@/data/projects";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Formación electromédica | Sergio Antunez Rios",
  description: "Formación en Ingeniería Electromédica, experiencia de servicio técnico y tesis de visión artificial aplicada.",
  alternates: {
    canonical: "/biomedica",
    languages: { "es-MX": "/biomedica", en: "/en/background" }
  }
};

export default function BiomedicaPage() {
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
            Formación
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Formación electromédica y experiencia técnica
          </h1>
          <p className="about-prose" style={{ maxWidth: "65ch" }}>
            Licenciatura en <strong>Ingeniería Electromédica</strong> con mención
            honorífica (promedio 9.6/10) y beca académica del 75% sostenida durante
            4.5 años. Esta sección documenta la formación académica y la
            experiencia de servicio técnico desarrollada durante la carrera. La pieza
            central de mi trabajo electromédico es la tesis con visión artificial
            para seguridad industrial - vive en{" "}
            <Link href="/interseccion" style={{ borderBottom: "1px solid var(--line-strong)" }}>
              Investigación
            </Link>
            .
          </p>
        </header>

        {/* Education */}
        <section className="section-block">
          <h2 className="section-block-label">Formación académica</h2>
          <div className="work-card">
            <div className="work-card-period">2021 - 2026</div>
            <div>
              <h3 className="work-card-title">{profile.education.degree}</h3>
              <p className="work-card-summary">
                {profile.education.university} - {profile.education.location}.{" "}
                Graduado el 30 de enero de 2026.
              </p>

              <ul className="simple-list" style={{ marginTop: "16px" }}>
                {profile.education.distinctions.map((d) => (
                  <li key={d} style={{ borderBottom: "none", padding: "4px 0" }}>
                    {d}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "20px" }}>
                <div className="section-block-label" style={{ fontSize: "11px", marginBottom: "12px", padding: 0 }}>
                  Tesis (10/10)
                </div>
                <p className="work-card-summary">
                  <strong>{profile.education.thesis.title}</strong>
                </p>
                <div className="work-card-tags" style={{ marginTop: "12px" }}>
                  {profile.education.thesis.stack.map((t) => (
                    <span key={t} className="tag-pill">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="work-card-tags" style={{ marginTop: "8px" }}>
                  {profile.education.thesis.metrics.map((m) => (
                    <span key={m} className="tag-pill">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-block">
          <h2 className="section-block-label">Certificaciones</h2>
          <ul className="simple-list">
            {profile.education.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Service Experience */}
        <section className="section-block">
          <h2 className="section-block-label">Experiencia de servicio (2023 - 2024)</h2>
          <p className="about-prose" style={{ marginBottom: "32px", maxWidth: "65ch" }}>
            Trabajo de campo durante la carrera en mantenimiento de equipo médico
            bajo normativa mexicana. Diagnóstico, calibración y trazabilidad
            documental de intervenciones.
          </p>
          {biomedicalProjects.filter((project) => project.id === "bio-service-experience").map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
