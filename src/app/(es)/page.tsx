import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight
} from "@phosphor-icons/react/dist/ssr";
import { ThesisEvidence } from "@/components/ThesisEvidence";
import { ResearchScopeNote } from "@/components/ResearchScopeNote";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";

const proof = [
  {
    value: "9.6/10",
    label: "Desempeño académico",
    detail: "Mención honorífica y beca académica del 75% durante 4.5 años",
    tone: "olive"
  },
  {
    value: "3+",
    label: "Años de experiencia aplicada",
    detail: "Desde 2023, entre servicio biomédico, desarrollo de producto e innovación con IA",
    tone: "clay"
  },
  {
    value: "US$21.7k",
    label: "Ahorro anual proyectado",
    detail: "Escenario de sustitución de 17 licencias, antes de extensiones; pendiente de validación interna",
    tone: "mineral"
  },
  {
    value: "5",
    label: "Áreas respaldadas por software",
    detail: "Dirección, diseño, ventas, operación y marketing",
    tone: "sand"
  }
];

const projects = [
  {
    title: "Computer Vision para seguridad industrial",
    description:
      "Prototipo de tesis que conecta detección, edge computing y un interbloqueo físico para reducir el riesgo de amputación.",
    href: "/interseccion#tesis",
    meta: "YOLOv8 / Jetson Nano / OpenCV",
    className: "project-featured",
    tone: "clay"
  },
  {
    title: "Software interno de sembrado y catálogo",
    description:
      "Producto en uso que conecta catálogo y sembrado de espacios, centraliza miles de registros y reduce dependencia de licencias externas.",
    href: "/software",
    meta: "Sembrado de espacios / En producción",
    className: "project-platform",
    tone: "olive"
  },
  {
    title: "Plataforma maestra de aplicaciones internas",
    description:
      "Base común para aplicaciones operativas de distintas áreas y empresas del mismo grupo industrial.",
    href: "/software",
    meta: "Operación / Multiempresa",
    className: "project-crm",
    tone: "mineral"
  }
];

export default function HomePage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="site-brand" href="/" aria-label="Inicio">
          Sergio Antunez Rios
        </Link>
        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#trayectoria">Trayectoria</a>
          <a href="#investigacion">Investigación</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="header-actions">
          <LanguageSwitch href="/en" label="EN" ariaLabel="View portfolio in English" />
          <SocialLinks compact />
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">IA aplicada al mundo físico.</h1>
            <p>
              Conecto Computer Vision, software y hardware para resolver problemas de
              industria y salud.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">
                Ver proyectos
                <ArrowDownRight size={18} weight="bold" aria-hidden="true" />
              </a>
              <a className="button button-secondary" href={`mailto:${profile.email}`}>
                Escribir por correo
                <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="hero-portrait">
            <div className="hero-image-wrap">
              <Image
                src="/images/perfil.jpeg"
                alt="Retrato de Sergio Antunez Rios"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 38vw"
              />
            </div>
            <figcaption>
              <strong>Sergio Antunez Rios</strong>
              <span>Ingeniero Electromédico y Analista de Innovación e IA</span>
            </figcaption>
          </figure>
        </section>

        <section className="proof-grid" aria-label="Evidencia destacada">
          {proof.map((item) => (
            <article key={item.value} className={`proof-card tone-${item.tone}`}>
              <strong className={`proof-value${item.value.length > 8 ? " is-long" : item.value.length > 6 ? " is-medium" : ""}`}>{item.value}</strong>
              <div>
                <h2>{item.label}</h2>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="positioning-section" aria-labelledby="positioning-title">
          <div className="section-kicker">Perfil</div>
          <h2 id="positioning-title">
            Ingeniería aplicada que conecta investigación, producto y operación.
          </h2>
          <p>
            Mi formación electromédica me permite trabajar entre disciplinas. Diseño
            software, integro modelos de IA y entiendo las restricciones del sistema
            físico donde deben funcionar.
          </p>
        </section>

        <section id="sobre-mi" className="about-me-section" aria-labelledby="about-me-title">
          <div className="about-me-copy">
            <div className="section-kicker">Sobre mí</div>
            <h2 id="about-me-title">De la ingeniería electromédica a la IA aplicada.</h2>
            <p>
              Me gradué de Ingeniería Electromédica en la Universidad La Salle Laguna
              con promedio de 9.6/10, mención honorífica y una beca académica del 75%.
              Mi tesis convirtió esa formación interdisciplinaria en un prototipo de
              visión artificial orientado a seguridad industrial.
            </p>
            <p>
              Desde entonces trabajo entre investigación, producto y operación, con
              interés en sistemas que puedan validarse fuera del laboratorio y generar
              resultados observables en contextos reales.
            </p>
          </div>

          <div className="about-me-gallery" aria-label="Evidencia de formación académica">
            <figure className="about-me-photo about-me-photo-graduation">
              <div className="about-me-image-wrap">
                <Image
                  src="/images/about/graduacion-ulsa.jpeg"
                  alt="Sergio Antunez Rios durante su graduación de Ingeniería Electromédica en la Universidad La Salle Laguna"
                  fill
                  sizes="(max-width: 767px) 100vw, 30vw"
                />
              </div>
              <figcaption>Graduación de Ingeniería Electromédica, 2026.</figcaption>
            </figure>

            <figure className="about-me-photo about-me-photo-thesis">
              <div className="about-me-image-wrap">
                <Image
                  src="/images/about/presentacion-tesis.jpeg"
                  alt="Sergio Antunez Rios presentando su tesis de visión artificial para seguridad industrial"
                  fill
                  sizes="(max-width: 767px) 100vw, 46vw"
                />
              </div>
              <figcaption>Presentación de tesis sobre visión artificial y seguridad industrial.</figcaption>
            </figure>

            <figure className="about-me-photo about-me-photo-document">
              <div className="about-me-image-wrap">
                <Image
                  src="/images/about/tesis-documento-ulsa.jpeg"
                  alt="Sergio Antunez Rios sosteniendo el documento de su tesis en la Universidad La Salle Laguna"
                  fill
                  sizes="(max-width: 767px) 100vw, 56vw"
                />
              </div>
              <figcaption>Documento final de tesis, Universidad La Salle Laguna.</figcaption>
            </figure>
          </div>
        </section>

        <section id="proyectos" className="projects-section" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title">Trabajo seleccionado</h2>
            <p>Tres proyectos que muestran el rango completo de mi práctica.</p>
          </div>

          <div className="project-bento">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className={`bento-project ${project.className} tone-${project.tone}`}
              >
                <span className="project-meta">{project.meta}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="project-link">
                  Abrir caso
                  <ArrowUpRight size={20} weight="bold" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section id="investigacion" className="thesis-section" aria-labelledby="thesis-title">
          <div className="thesis-copy">
            <div className="section-kicker">Investigación aplicada</div>
            <h2 id="thesis-title">Visión artificial para reducir riesgos industriales.</h2>
            <p>
              Desarrollé y validé un prototipo orientado a seguridad industrial que combina
              visión artificial y procesamiento edge. El sistema detecta dedos dentro de una
              región de riesgo e inhibe la señal del pedal bajo condiciones controladas.
            </p>
            <dl className="thesis-facts">
              <div>
                <dt>Sensibilidad</dt>
                <dd>95.3%</dd>
              </div>
              <div>
                <dt>F1</dt>
                <dd>95.0%</dd>
              </div>
              <div>
                <dt>Precisión</dt>
                <dd>94.7%</dd>
              </div>
            </dl>
            <p className="research-caveat">
              Resultados in-domain sobre 3,000 fotogramas. En una segunda máquina, la
              sensibilidad fue 86.4% y la precisión 77.9%, lo que evidencia dependencia
              del entorno y necesidad de reentrenamiento.
            </p>
            <ResearchScopeNote compact />
            <Link className="text-link" href="/interseccion#tesis">
              Leer el caso técnico
              <ArrowRight size={19} weight="bold" aria-hidden="true" />
            </Link>
          </div>

          <ThesisEvidence />
        </section>

        <section id="trayectoria" className="trajectory-section" aria-labelledby="trajectory-title">
          <h2 id="trajectory-title">Trayectoria</h2>
          <div className="trajectory-grid">
            <article className="trajectory-primary">
              <span className="trajectory-date">2024 - Actualidad</span>
              <h3>Analista de Innovación e Inteligencia Artificial</h3>
              <p>
                Diseño y co-arquitectura de productos internos que centralizan información,
                automatizan procesos y apoyan la operación de distintas áreas.
              </p>
              <div className="tag-list" aria-label="Áreas de contribución">
                <span>Producto interno</span>
                <span>Automatización</span>
                <span>Integración de datos</span>
                <span>Operación</span>
              </div>
            </article>

            <article className="education-block">
              <span className="trajectory-date">2021 - 2026</span>
              <h3>Ingeniería Electromédica</h3>
              <p>Universidad La Salle Laguna</p>
              <ul>
                <li>Mención honorífica</li>
                <li>Promedio final de 9.6/10</li>
                <li>Beca académica del 75%</li>
              </ul>
              <Link className="text-link" href="/biomedica">
                Ver formación
                <ArrowRight size={19} weight="bold" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        <section id="contacto" className="contact-section" aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">Hablemos de investigación aplicada.</h2>
            <p>
              Disponible para conversaciones sobre Computer Vision, Industrial AI y
              sistemas biomédicos.
            </p>
          </div>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={26} weight="bold" aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>{profile.name}</strong>
          <span>Gómez Palacio, Durango, México</span>
        </div>
        <SocialLinks />
      </footer>
    </div>
  );
}
