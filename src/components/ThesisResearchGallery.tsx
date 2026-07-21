import Image from "next/image";
import { ThesisResults } from "@/components/ThesisResults";
import { ThesisTrainingCharts } from "@/components/ThesisTrainingCharts";

type Language = "es" | "en";

type Item = {
  src: string;
  alt: Record<Language, string>;
  caption: Record<Language, string>;
  kind?: "photo" | "data" | "diagram";
  wide?: boolean;
  portrait?: boolean;
};

type Stage = {
  index: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  items: Item[];
};

const stages: Stage[] = [
  {
    index: "01",
    title: { es: "Datos y entrenamiento", en: "Data and training" },
    description: {
      es: "Las imágenes se etiquetaron en Label Studio y alimentaron el entrenamiento supervisado del detector YOLOv8.",
      en: "Images were labeled in Label Studio and used for supervised training of the YOLOv8 detector."
    },
    items: [
      {
        src: "/images/thesis/label-studio.png",
        alt: { es: "Interfaz de Label Studio utilizada para etiquetar dedos", en: "Label Studio interface used to annotate fingers" },
        caption: { es: "Flujo de anotación en Label Studio.", en: "Annotation workflow in Label Studio." },
        wide: true
      },
      {
        src: "/images/thesis/labeled-example.png",
        alt: { es: "Imagen con los dedos delimitados mediante cajas de anotación", en: "Image with fingers delimited by annotation boxes" },
        caption: { es: "Muestra etiquetada para la clase dedo.", en: "Labeled sample for the finger class." },
        wide: true
      }
    ]
  },
  {
    index: "02",
    title: { es: "Despliegue edge y validación", en: "Edge deployment and validation" },
    description: {
      es: "El modelo YOLOv8 entrenado se ejecutó localmente en una NVIDIA Jetson Nano. Las pruebas controladas usaron una mano artificial y un guante industrial, sin exponer a una persona al punto de operación.",
      en: "The trained YOLOv8 model ran locally on an NVIDIA Jetson Nano. Controlled tests used an artificial hand and an industrial glove, without exposing a person at the point of operation."
    },
    items: [
      {
        src: "/images/thesis/validation-hand.jpg",
        alt: { es: "Validación con mano artificial y detección visible en el monitor", en: "Validation with an artificial hand and detection visible on the monitor" },
        caption: { es: "Prueba funcional con mano artificial y detección en tiempo real.", en: "Functional test with an artificial hand and real-time detection." },
        kind: "photo",
        portrait: true
      },
      {
        src: "/images/thesis/validation-glove.jpg",
        alt: { es: "Validación del detector con un guante industrial", en: "Detector validation with an industrial glove" },
        caption: { es: "Prueba con guante industrial dentro de la región de riesgo.", en: "Industrial-glove test inside the hazard zone." },
        kind: "photo",
        portrait: true
      }
    ]
  },
  {
    index: "03",
    title: { es: "Resultados por entorno", en: "Results by environment" },
    description: {
      es: "Las matrices y gráficas separan el desempeño en la dobladora representada en el entrenamiento del resultado obtenido en una segunda máquina no incluida en ese dominio.",
      en: "The matrices and plots separate performance on the press brake represented in training from the result on a second machine outside that domain."
    },
    items: []
  },
  {
    index: "04",
    title: { es: "Interbloqueo físico", en: "Physical interlock" },
    description: {
      es: "En el prototipo, la salida de detección se conecta a un circuito con aislamiento eléctrico que inhibe la señal del pedal cuando identifica una intrusión en la región de riesgo.",
      en: "In the prototype, the detection output connects to an electrically isolated circuit that inhibits the pedal signal when it identifies an intrusion inside the hazard region."
    },
    items: [
      {
        src: "/images/thesis/interlock-schematic.png",
        alt: { es: "Esquema electrónico del interbloqueo conectado a la Jetson Nano", en: "Electronic schematic of the interlock connected to the Jetson Nano" },
        caption: { es: "Esquema del circuito experimental. No representa una arquitectura certificada de seguridad funcional.", en: "Experimental circuit schematic. It does not represent a certified functional-safety architecture." },
        kind: "diagram",
        wide: true
      }
    ]
  }
];

export function ThesisResearchGallery({ language = "es" }: { language?: Language }) {
  return (
    <div className="research-gallery">
      {stages.map((stage) => (
        <section className={`research-gallery-stage stage-${stage.index}`} key={stage.index}>
          <header className="research-gallery-header">
            <span>{stage.index}</span>
            <div>
              <h3>{stage.title[language]}</h3>
              <p>{stage.description[language]}</p>
            </div>
          </header>
          {stage.items.length > 0 ? (
            <div className="research-gallery-grid">
              {stage.items.map((item) => (
                <figure className={`research-gallery-item${item.wide ? " is-wide" : ""}${item.portrait ? " is-portrait" : ""} is-${item.kind ?? "screen"}`} key={item.src}>
                  <div className="research-gallery-image">
                    <Image src={item.src} alt={item.alt[language]} fill sizes={item.wide ? "(max-width: 767px) 100vw, 980px" : "(max-width: 767px) 100vw, 490px"} />
                  </div>
                  <figcaption>{item.caption[language]}</figcaption>
                </figure>
              ))}
            </div>
          ) : null}
          {stage.index === "01" ? <ThesisTrainingCharts language={language} /> : null}
          {stage.index === "03" ? <ThesisResults language={language} /> : null}
        </section>
      ))}
    </div>
  );
}
