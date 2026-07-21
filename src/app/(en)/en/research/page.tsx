import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Footer } from "@/components/Footer";
import { ThesisResearchGallery } from "@/components/ThesisResearchGallery";
import { TopNav } from "@/components/TopNav";
import { profile } from "@/data/profile";
import { ResearchScopeNote } from "@/components/ResearchScopeNote";
import { ThesisTechnicalSummary } from "@/components/ThesisTechnicalSummary";
import { createPortfolioPageMetadata } from "@/lib/metadata";

export const metadata = createPortfolioPageMetadata({
  title: "Industrial Computer Vision Research | Sergio Antunez Rios",
  description:
    "Technical case study of a YOLOv8 and Jetson Nano safety-interlock prototype, including in-domain results and transfer limitations.",
  canonical: "/en/research",
  spanishPath: "/interseccion",
  englishPath: "/en/research",
  locale: "en_US",
  image: { url: "/images/thesis/detection.png", width: 1386, height: 788, alt: "Computer Vision hand detection on a press brake" }
});

export default function EnglishResearchPage() {
  const thesis = profile.education.thesis;

  return (
    <div lang="en">
      <TopNav language="en" />
      <main className="container-wide" style={{ paddingTop: "48px", paddingBottom: "96px" }}>
        <header style={{ marginBottom: "64px" }}>
          <Link
            href="/en"
            className="link-primary"
            style={{ fontSize: "13px", marginBottom: "32px", display: "inline-flex" }}
          >
            <ArrowLeft size={16} weight="bold" aria-hidden="true" />
            Back to home
          </Link>
          <div className="section-block-label" style={{ marginTop: "32px" }}>
            Applied research
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Computer Vision at the intersection of occupational health and Industry 4.0
          </h1>
          <p className="about-prose" style={{ maxWidth: "65ch" }}>
            This thesis connects software, embedded electronics and physical machinery.
            Its contribution is a functional prototype that detects fingers in a defined
            hazard zone and interrupts the press brake pedal circuit under controlled conditions.
          </p>
        </header>

        <section id="thesis" className="section-block">
          <div className="section-block-label">Undergraduate thesis</div>

          <article style={{ background: "var(--bg-card)", padding: "32px", borderRadius: "4px", marginBottom: "24px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "16px", lineHeight: 1.3 }}>
              AI-based Computer Vision system proposed to reduce occupational amputation risk
            </h2>
            <p className="about-prose">
              A YOLOv8 detector runs on an NVIDIA Jetson Nano and controls an electrically
              isolated interlock connected to the press brake pedal. The prototype was
              evaluated with an artificial hand and work glove, without exposing an operator
              to the hazard. The claims below distinguish in-domain performance from transfer
              to a second machine.
            </p>
          </article>

          <ResearchScopeNote language="en" />

          <div className="thesis-evidence-detail">
            <div className="section-block-label" style={{ fontSize: "11px", marginBottom: "16px" }}>
              Prototype and validation evidence
            </div>
            <ThesisResearchGallery language="en" />
          </div>

          <p className="method-note">
            The comparison supports technical feasibility in a calibrated environment,
            but not general performance across machines. Transfer requires a broader
            dataset and environment-specific retraining. These results do not establish
            universal performance or functional-safety validity.
          </p>

          <ThesisTechnicalSummary language="en" stack={thesis.stack} />
        </section>

      </main>
      <Footer />
    </div>
  );
}
