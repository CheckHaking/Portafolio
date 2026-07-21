type Language = "es" | "en";

const copy = {
  es: {
    title: "Alcance y seguridad",
    body:
      "Prototipo académico evaluado bajo condiciones controladas. No es un sistema de seguridad certificado y no sustituye resguardos, controles industriales ni procedimientos exigidos por la normativa aplicable."
  },
  en: {
    title: "Scope and safety",
    body:
      "Academic prototype evaluated under controlled conditions. It is not a certified safety system and does not replace guarding, industrial safety controls or procedures required by applicable standards."
  }
};

export function ResearchScopeNote({
  language = "es",
  compact = false
}: {
  language?: Language;
  compact?: boolean;
}) {
  const labels = copy[language];

  return (
    <aside className={`research-scope-note${compact ? " is-compact" : ""}`}>
      <strong>{labels.title}</strong>
      <p>{labels.body}</p>
    </aside>
  );
}
