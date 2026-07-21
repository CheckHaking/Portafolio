import {
  ArrowRight,
  BracketsAngle,
  Camera,
  Cpu,
  Crosshair,
  ShieldChevron
} from "@phosphor-icons/react/dist/ssr";

type Language = "es" | "en";

const content = {
  es: {
    eyebrow: "Resumen técnico",
    title: "De la imagen al interbloqueo físico.",
    introduction:
      "La contribución integra adquisición, inferencia edge y una respuesta física experimental. Las cifras distinguen el desempeño en el entorno de entrenamiento de la transferencia a otra máquina.",
    stack: "Stack técnico",
    findings: "Hallazgos clave",
    findingsList: [
      {
        value: "1,131",
        label: "imágenes",
        detail: "333 originales y 798 aumentadas; 1,064 para entrenamiento, 49 para validación y 18 para prueba."
      },
      {
        value: "<120 ms",
        label: "latencia reportada",
        detail: "Inferencia desplegada en NVIDIA Jetson Nano durante pruebas controladas."
      },
      {
        value: "Interbloqueo",
        label: "respuesta experimental",
        detail: "Inhibió la señal del pedal al detectar dedos dentro de la región de riesgo definida."
      },
      {
        value: "95.3%",
        label: "sensibilidad in-domain",
        detail: "Precisión de 94.7% y F1 calculado de 95.0% en el entorno representado durante el entrenamiento."
      },
      {
        value: "Límite",
        label: "dependencia del entorno",
        detail: "La sensibilidad y la precisión disminuyeron al evaluar una segunda máquina no incluida en el entrenamiento.",
        limitation: true
      }
    ],
    pipeline: "Pipeline de visión e interbloqueo",
    pipelineNote: "Pseudocódigo funcional, no código fuente",
    latency: "Latencia E2E reportada <120 ms",
    steps: [
      { title: "Captura", detail: "Fotograma", Icon: Camera },
      { title: "Preparación", detail: "640 × 640", Icon: BracketsAngle },
      { title: "Inferencia", detail: "YOLOv8 edge", Icon: Cpu },
      { title: "Región", detail: "ROI de riesgo", Icon: Crosshair },
      { title: "Respuesta", detail: "Interbloqueo", Icon: ShieldChevron }
    ]
  },
  en: {
    eyebrow: "Technical summary",
    title: "From image capture to physical interlock.",
    introduction:
      "The contribution integrates acquisition, edge inference and an experimental physical response. The evidence distinguishes in-domain performance from transfer to a second machine.",
    stack: "Technical stack",
    findings: "Key findings",
    findingsList: [
      {
        value: "1,131",
        label: "images",
        detail: "333 originals and 798 augmented images; 1,064 for training, 49 for validation and 18 for testing."
      },
      {
        value: "<120 ms",
        label: "reported latency",
        detail: "Inference deployed on an NVIDIA Jetson Nano during controlled tests."
      },
      {
        value: "Interlock",
        label: "experimental response",
        detail: "Inhibited the pedal signal when fingers were detected inside the defined hazard region."
      },
      {
        value: "95.3%",
        label: "in-domain sensitivity",
        detail: "94.7% precision and a calculated F1 score of 95.0% in the environment represented during training."
      },
      {
        value: "Limit",
        label: "environment dependence",
        detail: "Sensitivity and precision decreased on a second machine not represented during training.",
        limitation: true
      }
    ],
    pipeline: "Vision and interlock pipeline",
    pipelineNote: "Functional pseudocode, not source code",
    latency: "Reported E2E latency <120 ms",
    steps: [
      { title: "Capture", detail: "Camera frame", Icon: Camera },
      { title: "Prepare", detail: "640 × 640", Icon: BracketsAngle },
      { title: "Inference", detail: "YOLOv8 edge", Icon: Cpu },
      { title: "Region", detail: "Hazard ROI", Icon: Crosshair },
      { title: "Response", detail: "Interlock", Icon: ShieldChevron }
    ]
  }
};

const pseudocode = `frame             = capture()
input_image       = resize_normalize(frame, 640, 640)
predictions       = yolov8_inference(input_image)
fingers_detected  = filter_class(predictions, "finger")
hazard_intrusion  = check_zone(fingers_detected, ROI)

if hazard_intrusion:
    activate_interlock()
    log_event(timestamp, frame_id, confidence)`;

export function ThesisTechnicalSummary({
  language = "es",
  stack
}: {
  language?: Language;
  stack: string[];
}) {
  const copy = content[language];

  return (
    <section className="technical-summary" aria-labelledby={`technical-summary-${language}`}>
      <header className="technical-summary-header">
        <div className="section-block-label">{copy.eyebrow}</div>
        <h2 id={`technical-summary-${language}`}>{copy.title}</h2>
        <p>{copy.introduction}</p>
      </header>

      <div className="technical-summary-grid">
        <aside className="technical-stack-panel" aria-labelledby={`technical-stack-${language}`}>
          <h3 id={`technical-stack-${language}`}>{copy.stack}</h3>
          <div className="technical-stack-list">
            {stack.map((item, index) => (
              <span key={item}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {item}
              </span>
            ))}
          </div>
        </aside>

        <div className="technical-findings" aria-labelledby={`technical-findings-${language}`}>
          <h3 id={`technical-findings-${language}`}>{copy.findings}</h3>
          <ol>
            {copy.findingsList.map((finding) => (
              <li key={`${finding.value}-${finding.label}`} className={finding.limitation ? "is-limitation" : undefined}>
                <div>
                  <strong>{finding.value}</strong>
                  <span>{finding.label}</span>
                </div>
                <p>{finding.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="technical-pipeline">
        <div className="technical-pipeline-heading">
          <div>
            <h3>{copy.pipeline}</h3>
            <p>{copy.pipelineNote}</p>
          </div>
          <span>{copy.latency}</span>
        </div>

        <ol className="pipeline-steps" aria-label={copy.pipeline}>
          {copy.steps.map(({ title, detail, Icon }, index) => (
            <li key={title}>
              <Icon size={24} weight="duotone" aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <span>{detail}</span>
              </div>
              {index < copy.steps.length - 1 && <ArrowRight className="pipeline-arrow" size={18} aria-hidden="true" />}
            </li>
          ))}
        </ol>

        <pre className="technical-code"><code>{pseudocode}</code></pre>
      </div>
    </section>
  );
}
