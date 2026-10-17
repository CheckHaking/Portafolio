import Image from "next/image";

const evidence = {
  es: [
  {
    src: "/images/thesis/detection.png",
    alt: "Muestra de una prensa industrial con dedos delimitados por recuadros rojos",
    caption: "Muestra etiquetada: dedos señalados en la zona de riesgo de una prensa industrial.",
    className: "thesis-media-main"
  },
  {
    src: "/images/thesis/label-studio.png",
    alt: "Interfaz de Label Studio con recuadros de la clase dedo sobre una imagen de la prensa",
    caption: "Etiquetado de dedos en Label Studio para el conjunto de datos.",
    className: ""
  },
  {
    src: "/images/thesis/interlock-schematic.png",
    alt: "Esquema del interbloqueo experimental entre la Jetson, el módulo de relé y el pedal",
    caption: "Esquema del interbloqueo experimental; prototipo no certificado.",
    className: "thesis-media-schematic"
  }
  ],
  en: [
    {
      src: "/images/thesis/detection.png",
      alt: "Sample image of an industrial press with fingers marked by red bounding boxes",
      caption: "Labeled sample: fingers marked in the hazard zone of an industrial press.",
      className: "thesis-media-main"
    },
    {
      src: "/images/thesis/label-studio.png",
      alt: "Label Studio interface with finger-class bounding boxes on an image of the press",
      caption: "Finger annotation in Label Studio for the dataset.",
      className: ""
    },
    {
      src: "/images/thesis/interlock-schematic.png",
      alt: "Experimental interlock schematic connecting the Jetson, relay module and pedal",
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
