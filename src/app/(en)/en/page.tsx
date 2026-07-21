import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight
} from "@phosphor-icons/react/dist/ssr";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { SocialLinks } from "@/components/SocialLinks";
import { ThesisEvidence } from "@/components/ThesisEvidence";
import { ResearchScopeNote } from "@/components/ResearchScopeNote";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Sergio Antunez Rios | Applied AI and Electromedical Engineering",
  description:
    "Portfolio of applied Computer Vision, enterprise software and embedded systems for industrial and healthcare problems."
};

const proof = [
  {
    value: "9.6/10",
    label: "Academic performance",
    detail: "Graduated with honors and held a 75% academic scholarship for 4.5 years",
    tone: "olive"
  },
  {
    value: "3+",
    label: "Years of applied experience",
    detail: "Since 2023, across biomedical service, product development and AI innovation",
    tone: "clay"
  },
  {
    value: "US$21.7k",
    label: "Projected annual savings",
    detail: "17-license replacement scenario, before extensions; pending internal validation",
    tone: "mineral"
  },
  {
    value: "5",
    label: "Business areas supported by software",
    detail: "Executive management, design, sales, operations and marketing",
    tone: "sand"
  }
];

const projects = [
  {
    title: "Computer Vision for industrial safety",
    description:
      "Thesis prototype combining detection, edge computing and a physical interlock to reduce amputation risk.",
    href: "/en/research#thesis",
    meta: "YOLOv8 / Jetson Nano / OpenCV",
    className: "project-featured",
    tone: "clay"
  },
  {
    title: "Internal space-planning and catalog software",
    description:
      "Production product connecting the catalog with space planning, consolidating thousands of records and reducing dependence on external licenses.",
    href: "/en/work",
    meta: "Space planning / In production",
    className: "project-platform",
    tone: "olive"
  },
  {
    title: "Master platform for internal applications",
    description:
      "Shared foundation for operational applications used across several areas of an industrial group.",
    href: "/en/work",
    meta: "Operations / Multi-company",
    className: "project-crm",
    tone: "mineral"
  }
];

export default function EnglishHomePage() {
  return (
    <div className="site-shell" lang="en">
      <header className="site-header">
        <Link className="site-brand" href="/en" aria-label="Home">
          Sergio Antunez Rios
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#about-me">About me</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <LanguageSwitch href="/" label="ES" ariaLabel="Ver portfolio en español" />
          <SocialLinks compact />
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Applied AI for physical systems.</h1>
            <p>
              I connect Computer Vision, software and hardware to address industrial
              and healthcare problems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects
                <ArrowDownRight size={18} weight="bold" aria-hidden="true" />
              </a>
              <a className="button button-secondary" href={`mailto:${profile.email}`}>
                Email me
                <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="hero-portrait">
            <div className="hero-image-wrap">
              <Image
                src="/images/perfil.jpeg"
                alt="Portrait of Sergio Antunez Rios"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 38vw"
              />
            </div>
            <figcaption>
              <strong>Sergio Antunez Rios</strong>
              <span>Electromedical Engineer and Innovation and AI Analyst</span>
            </figcaption>
          </figure>
        </section>

        <section className="proof-grid" aria-label="Selected evidence">
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
          <div className="section-kicker">Profile</div>
          <h2 id="positioning-title">
            Applied engineering across research, product and operations.
          </h2>
          <p>
            My electromedical background lets me work across disciplines. I design
            software, integrate AI models and account for the constraints of the
            physical systems in which they operate.
          </p>
        </section>

        <section id="about-me" className="about-me-section" aria-labelledby="about-me-title">
          <div className="about-me-copy">
            <div className="section-kicker">About me</div>
            <h2 id="about-me-title">From electromedical engineering to applied AI.</h2>
            <p>
              I graduated in Electromedical Engineering from Universidad La Salle Laguna
              with a final GPA of 9.6/10, honors and a 75% academic scholarship. My thesis
              translated that interdisciplinary background into a Computer Vision prototype
              for industrial safety.
            </p>
            <p>
              I now work across research, product and operations, focusing on systems that
              can be validated outside the laboratory and produce observable results in
              real operating environments.
            </p>
          </div>

          <div className="about-me-gallery" aria-label="Academic background evidence">
            <figure className="about-me-photo about-me-photo-graduation">
              <div className="about-me-image-wrap">
                <Image
                  src="/images/about/graduacion-ulsa.jpeg"
                  alt="Sergio Antunez Rios at his Electromedical Engineering graduation from Universidad La Salle Laguna"
                  fill
                  sizes="(max-width: 767px) 100vw, 30vw"
                />
              </div>
              <figcaption>Electromedical Engineering graduation, 2026.</figcaption>
            </figure>

            <figure className="about-me-photo about-me-photo-thesis">
              <div className="about-me-image-wrap">
                <Image
                  src="/images/about/presentacion-tesis.jpeg"
                  alt="Sergio Antunez Rios presenting his Computer Vision thesis for industrial safety"
                  fill
                  sizes="(max-width: 767px) 100vw, 46vw"
                />
              </div>
              <figcaption>Thesis presentation on Computer Vision and industrial safety.</figcaption>
            </figure>

            <figure className="about-me-photo about-me-photo-document">
              <div className="about-me-image-wrap">
                <Image
                  src="/images/about/tesis-documento-ulsa.jpeg"
                  alt="Sergio Antunez Rios holding his thesis document at Universidad La Salle Laguna"
                  fill
                  sizes="(max-width: 767px) 100vw, 56vw"
                />
              </div>
              <figcaption>Final thesis document, Universidad La Salle Laguna.</figcaption>
            </figure>
          </div>
        </section>

        <section id="projects" className="projects-section" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title">Selected work</h2>
            <p>Three projects that show the range of my technical practice.</p>
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
                  Open case study
                  <ArrowUpRight size={20} weight="bold" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section id="research" className="thesis-section" aria-labelledby="thesis-title">
          <div className="thesis-copy">
            <div className="section-kicker">Applied research</div>
            <h2 id="thesis-title">Computer Vision for industrial safety.</h2>
            <p>
              I developed and validated an industrial-safety prototype combining Computer
              Vision and edge processing. It detects fingers inside a defined hazard region
              and inhibits the pedal signal under controlled conditions.
            </p>
            <dl className="thesis-facts">
              <div>
                <dt>Sensitivity</dt>
                <dd>95.3%</dd>
              </div>
              <div>
                <dt>F1 score</dt>
                <dd>95.0%</dd>
              </div>
              <div>
                <dt>Precision</dt>
                <dd>94.7%</dd>
              </div>
            </dl>
            <p className="research-caveat">
              In-domain results on 3,000 frames. On a second machine, sensitivity was
              86.4% and precision 77.9%, showing domain dependence and the need for
              environment-specific retraining.
            </p>
            <ResearchScopeNote language="en" compact />
            <Link className="text-link" href="/en/research#thesis">
              Read the technical case
              <ArrowRight size={19} weight="bold" aria-hidden="true" />
            </Link>
          </div>

          <ThesisEvidence language="en" />
        </section>

        <section id="experience" className="trajectory-section" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <div className="trajectory-grid">
            <article className="trajectory-primary">
              <span className="trajectory-date">2024 - Present</span>
              <h3>Innovation and Artificial Intelligence Analyst</h3>
              <p>
                Product design and co-architecture of internal systems that centralize
                information, automate processes and support several operational areas.
              </p>
              <div className="tag-list" aria-label="Contribution areas">
                <span>Internal products</span>
                <span>Automation</span>
                <span>Data integration</span>
                <span>Operations</span>
              </div>
            </article>

            <article className="education-block">
              <span className="trajectory-date">2021 - 2026</span>
              <h3>Electromedical Engineering</h3>
              <p>Universidad La Salle Laguna</p>
              <ul>
                <li>Graduated with honors</li>
                <li>Final GPA of 9.6/10</li>
                <li>75% academic scholarship</li>
              </ul>
              <Link className="text-link" href="/en/background">
                View background
                <ArrowRight size={19} weight="bold" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">Let&apos;s discuss applied research.</h2>
            <p>
              Available for conversations about Computer Vision, Industrial AI and
              biomedical systems.
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
          <span>Gomez Palacio, Durango, Mexico</span>
        </div>
        <SocialLinks />
      </footer>
    </div>
  );
}
