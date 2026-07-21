import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { TopNav } from "@/components/TopNav";
import { biomedicalProjectsEn } from "@/data/projects-en";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Electromedical Background | Sergio Antunez Rios",
  description: "Electromedical engineering education, technical-service experience and an applied Computer Vision thesis.",
  alternates: {
    canonical: "/en/background",
    languages: { "es-MX": "/biomedica", en: "/en/background" }
  }
};

const distinctions = [
  "Final GPA: 9.6/10",
  "Graduated with honors",
  "Maintained a 75% academic scholarship for 4.5 years"
];

const certifications = [
  "Python Programmer - Tokio School (December 2025)",
  "Backend Development with Java and Spring - Oracle NEXT / Alura Latam"
];

export default function EnglishBackgroundPage() {
  return (
    <div lang="en">
      <TopNav language="en" />
      <main className="container-wide" style={{ paddingTop: "48px", paddingBottom: "96px" }}>
        <header style={{ marginBottom: "64px" }}>
          <Link href="/en" className="link-primary" style={{ fontSize: "13px", marginBottom: "32px", display: "inline-flex" }}>
            <ArrowLeft size={16} weight="bold" aria-hidden="true" />
            Back to home
          </Link>
          <div className="section-block-label" style={{ marginTop: "32px" }}>Background</div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Electromedical education and technical experience
          </h1>
          <p className="about-prose" style={{ maxWidth: "65ch" }}>
            I completed a degree in <strong>Electromedical Engineering</strong> with a
            9.6/10 final GPA, honors and a 75% academic scholarship maintained over
            4.5 years. This page connects that training with technical-service experience
            and my applied Computer Vision thesis.
          </p>
        </header>

        <section className="section-block">
          <h2 className="section-block-label">Education</h2>
          <div className="work-card">
            <div className="work-card-period">2021 - 2026</div>
            <div>
              <h3 className="work-card-title">Electromedical Engineering</h3>
              <p className="work-card-summary">
                {profile.education.university}, Gomez Palacio, Durango, Mexico. Graduated January 30, 2026.
              </p>
              <ul className="simple-list" style={{ marginTop: "16px" }}>
                {distinctions.map((item) => <li key={item} style={{ borderBottom: "none", padding: "4px 0" }}>{item}</li>)}
              </ul>
              <div style={{ marginTop: "20px" }}>
                <div className="section-block-label" style={{ fontSize: "11px", marginBottom: "12px", padding: 0 }}>Thesis (10/10)</div>
                <p className="work-card-summary"><strong>Computer Vision and interlock prototype for reducing occupational amputation exposure</strong></p>
                <Link href="/en/research#thesis" className="link-primary" style={{ marginTop: "12px", fontSize: "13px" }}>Read the research case</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2 className="section-block-label">Certifications</h2>
          <ul className="simple-list">{certifications.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="section-block">
          <h2 className="section-block-label">Technical-service experience (2023 - 2024)</h2>
          <p className="about-prose" style={{ marginBottom: "32px", maxWidth: "65ch" }}>
            Field work during my degree involving troubleshooting, preventive maintenance,
            functional verification and documented intervention traceability.
          </p>
          {biomedicalProjectsEn
            .filter((project) => project.id === "bio-service-experience")
            .map((project) => <ProjectCard key={project.id} project={project} />)}
        </section>
      </main>
      <Footer />
    </div>
  );
}
