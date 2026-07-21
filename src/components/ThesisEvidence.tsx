import Image from "next/image";

const evidence = {
  es: [
  {
    src: "/images/thesis/detection.png",
    alt: "Detección de dedos dentro de la zona de riesgo de una prensa industrial",
    caption: "Detección en operación: localización de dedos dentro de la zona de riesgo.",
    className: "thesis-media-main"
  },
  {
    src: "/images/thesis/label-studio.png",
    alt: "Interfaz de Label Studio utilizada para etiquetar imágenes del dataset",
    caption: "Etiquetado supervisado del dataset en Label Studio.",
    className: ""
  },
  {
    src: "/images/thesis/interlock-schematic.png",
    alt: "Diagrama del circuito electrónico de interbloqueo de seguridad",
    caption: "Esquema del interbloqueo experimental; prototipo no certificado.",
    className: "thesis-media-schematic"
  }
  ],
  en: [
    {
      src: "/images/thesis/detection.png",
      alt: "Finger detection inside the hazard zone of an industrial press brake",
      caption: "Operational detection: fingers localized inside the defined hazard zone.",
      className: "thesis-media-main"
    },
    {
      src: "/images/thesis/label-studio.png",
      alt: "Label Studio interface used to annotate the dataset",
      caption: "Supervised dataset annotation in Label Studio.",
      className: ""
    },
    {
      src: "/images/thesis/interlock-schematic.png",
      alt: "Electronic schematic of the physical safety interlock",
      caption: "Experimental interlock schematic; non-certified prototype.",
      className: "thesis-media-schematic"
    }
  ]
};

type ThesisEvidenceProps = {
  expanded?: boolean;
  language?: "es" | "en";
};

export function ThesisEvidence({ expanded = false, language = "es" }: ThesisEvidenceProps) {
  const items = expanded ? evidence[language] : evidence[language].slice(0, 3);

  return (
    <div className={`thesis-media-grid${expanded ? " thesis-media-grid-expanded" : ""}`}>
      {items.map((item, index) => (
        <figure className={`thesis-media-item ${item.className}`} key={item.src}>
          <div className="thesis-media-image" style={{ position: "relative" }}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={
                index === 0 || item.className.includes("wide")
                  ? "(max-width: 767px) 100vw, 900px"
                  : "(max-width: 767px) 100vw, 450px"
              }
            />
          </div>
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
