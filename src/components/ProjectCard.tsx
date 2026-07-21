import type { Project } from "@/lib/types";
import {
  ArrowRight,
  ArrowUpRight,
  ChartLineUp,
  Cube,
  Database,
  FileText,
  Handshake,
  Megaphone,
  Package,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

const projectVisuals = {
  "sw-enterprise-data-warehouse": { Icon: Database, tone: "tone-mineral" },
  "sw-space-planning-software": { Icon: Cube, tone: "tone-sand" },
  "sw-modular-enterprise-platform": { Icon: SquaresFour, tone: "tone-olive" },
  "sw-industrial-sales-crm": { Icon: Handshake, tone: "tone-clay" },
  "sw-content-intelligence-system": { Icon: Megaphone, tone: "tone-clay" },
  "sw-autonomous-ads-agent": { Icon: ChartLineUp, tone: "tone-mineral" },
  "sw-erp-quoting-tool": { Icon: FileText, tone: "tone-sand" },
  "sw-packaging-operations-system": { Icon: Package, tone: "tone-olive" }
} as const;

export function ProjectCard({
  project,
  language = "es"
}: {
  project: Project;
  language?: "es" | "en";
}) {
  const visual = projectVisuals[project.id as keyof typeof projectVisuals];
  const Icon = visual?.Icon ?? SquaresFour;

  return (
    <article className="work-card">
      <div className="work-card-aside">
        <span className={`work-card-icon ${visual?.tone ?? "tone-olive"}`} aria-hidden="true">
          <Icon size={38} weight="duotone" />
        </span>
        <div className="work-card-period">
          {project.metrics?.[0] ?? ""}
        </div>
      </div>
      <div>
        <h3 className="work-card-title">
          {project.title}
          {(project.repo || project.link || project.demo) && (
            <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
          )}
        </h3>

        {project.problem && (
          <div className="work-card-problem">
            <span>{language === "en" ? "Problem addressed" : "Problema que resuelve"}</span>
            <strong>{project.problem}</strong>
          </div>
        )}

        <p className="work-card-summary">{project.summary}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="simple-list" style={{ marginTop: "12px" }}>
            {project.highlights.slice(0, 4).map((item) => (
              <li key={item} style={{ borderBottom: "none", padding: "4px 0" }}>
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.stack && project.stack.length > 0 && (
          <div className="work-card-tags">
            {project.stack.slice(0, 8).map((tech) => (
              <span key={tech} className="tag-pill">
                {tech}
              </span>
            ))}
          </div>
        )}

        {(project.repo || project.link || project.demo) && (
          <div style={{ marginTop: "16px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary"
                style={{ fontSize: "13px" }}
              >
                Repo <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary"
                style={{ fontSize: "13px" }}
              >
                Live <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary"
                style={{ fontSize: "13px" }}
              >
                Demo <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
