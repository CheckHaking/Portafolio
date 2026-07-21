import { profile } from "@/data/profile";

const baseUrl = "https://portafolio-henna-five.vercel.app";

const descriptions = {
  es: "Ingeniero Electromédico y Analista de Innovación e Inteligencia Artificial especializado en Computer Vision, IA aplicada, sistemas embebidos y software empresarial.",
  en: "Electromedical Engineer and Innovation and Artificial Intelligence Analyst specializing in Computer Vision, applied AI, embedded systems and enterprise software."
};

export function ProfileStructuredData({ language = "es" }: { language?: "es" | "en" }) {
  const pageUrl = language === "es" ? baseUrl : `${baseUrl}/en`;
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}#profile-page`,
    url: pageUrl,
    name:
      language === "es"
        ? "Sergio Antunez Rios | IA aplicada e Ingeniería Electromédica"
        : "Sergio Antunez Rios | Applied AI and Electromedical Engineering",
    inLanguage: language === "es" ? "es-MX" : "en",
    mainEntity: {
      "@type": "Person",
      "@id": `${baseUrl}/#sergio-antunez-rios`,
      name: profile.name,
      url: baseUrl,
      image: `${baseUrl}/images/perfil.jpeg`,
      jobTitle:
        language === "es"
          ? "Analista de Innovación e Inteligencia Artificial"
          : "Innovation and Artificial Intelligence Analyst",
      description: descriptions[language],
      sameAs: [profile.links.linkedin, profile.links.github, profile.links.orcid],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: profile.education.university
      },
      knowsAbout: [
        "Computer Vision",
        "Artificial Intelligence",
        "Electromedical Engineering",
        "Biomedical Engineering",
        "Edge AI",
        "Embedded Systems",
        "Industrial Software"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
