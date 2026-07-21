type Language = "es" | "en";

type Counts = {
  tp: number;
  fn: number;
  fp: number;
  tn: number;
};

const environments: Array<{
  id: string;
  label: Record<Language, string>;
  context: Record<Language, string>;
  counts: Counts;
  tone: "primary" | "transfer";
}> = [
  {
    id: "training-domain",
    label: {
      es: "Dobladora del dominio de entrenamiento",
      en: "Training-domain press brake"
    },
    context: {
      es: "Validación controlada en el entorno representado en el dataset.",
      en: "Controlled validation in the environment represented in the dataset."
    },
    counts: { tp: 286, fn: 14, fp: 16, tn: 2684 },
    tone: "primary"
  },
  {
    id: "second-machine",
    label: {
      es: "Segunda dobladora",
      en: "Second press brake"
    },
    context: {
      es: "Evaluación sin entrenamiento específico para esta máquina.",
      en: "Evaluation without machine-specific training data."
    },
    counts: { tp: 285, fn: 45, fp: 81, tn: 2589 },
    tone: "transfer"
  }
];

const copy = {
  es: {
    matrixTitle: "Matriz de confusión",
    matrixSubtitle: "Conteos sobre 3,000 fotogramas etiquetados",
    metricsTitle: "Métricas calculadas",
    metricsSubtitle: "Escala común de 0 a 100%",
    predictedPositive: "Predicho positivo",
    predictedNegative: "Predicho negativo",
    actualPositive: "Real positivo",
    actualNegative: "Real negativo",
    sensitivity: "Sensibilidad",
    precision: "Precisión",
    specificity: "Especificidad",
    accuracy: "Exactitud",
    f1: "F1",
    sample: "n = 3,000 fotogramas",
    source: "Métricas recalculadas a partir de las matrices de confusión reportadas en la tesis. El 95.8% de exactitud de la segunda máquina se obtiene directamente de sus conteos (2,874 aciertos de 3,000)."
  },
  en: {
    matrixTitle: "Confusion matrix",
    matrixSubtitle: "Counts across 3,000 labeled frames",
    metricsTitle: "Calculated metrics",
    metricsSubtitle: "Shared scale from 0 to 100%",
    predictedPositive: "Predicted positive",
    predictedNegative: "Predicted negative",
    actualPositive: "Actual positive",
    actualNegative: "Actual negative",
    sensitivity: "Sensitivity",
    precision: "Precision",
    specificity: "Specificity",
    accuracy: "Accuracy",
    f1: "F1",
    sample: "n = 3,000 frames",
    source: "Metrics recalculated from the confusion matrices reported in the thesis. The second machine's 95.8% accuracy follows directly from its counts (2,874 correct classifications out of 3,000)."
  }
};

function percentage(numerator: number, denominator: number) {
  return (numerator / denominator) * 100;
}

function metrics({ tp, fn, fp, tn }: Counts) {
  const precision = percentage(tp, tp + fp);
  const sensitivity = percentage(tp, tp + fn);
  return {
    sensitivity,
    precision,
    specificity: percentage(tn, tn + fp),
    accuracy: percentage(tp + tn, tp + fn + fp + tn),
    f1: (2 * precision * sensitivity) / (precision + sensitivity)
  };
}

export function ThesisResults({ language = "es" }: { language?: Language }) {
  const labels = copy[language];

  return (
    <div className="thesis-results">
      {environments.map((environment) => {
        const values = metrics(environment.counts);
        const metricRows = [
          [labels.sensitivity, values.sensitivity],
          [labels.precision, values.precision],
          [labels.f1, values.f1],
          [labels.specificity, values.specificity],
          [labels.accuracy, values.accuracy]
        ] as const;

        return (
          <article className={`results-environment is-${environment.tone}`} key={environment.id}>
            <header className="results-environment-header">
              <div>
                <h4>{environment.label[language]}</h4>
                <p>{environment.context[language]}</p>
              </div>
              <span>{labels.sample}</span>
            </header>

            <div className="results-visual-grid">
              <figure className="confusion-figure">
                <figcaption>
                  <strong>{labels.matrixTitle}</strong>
                  <span>{labels.matrixSubtitle}</span>
                </figcaption>
                <div className="confusion-layout">
                  <span className="confusion-corner" aria-hidden="true" />
                  <span className="confusion-axis-label">{labels.predictedPositive}</span>
                  <span className="confusion-axis-label">{labels.predictedNegative}</span>
                  <span className="confusion-axis-label">{labels.actualPositive}</span>
                  <div className="confusion-cell is-correct">
                    <span>TP</span>
                    <strong>{environment.counts.tp}</strong>
                  </div>
                  <div className="confusion-cell is-error">
                    <span>FN</span>
                    <strong>{environment.counts.fn}</strong>
                  </div>
                  <span className="confusion-axis-label">{labels.actualNegative}</span>
                  <div className="confusion-cell is-error">
                    <span>FP</span>
                    <strong>{environment.counts.fp}</strong>
                  </div>
                  <div className="confusion-cell is-correct is-majority">
                    <span>TN</span>
                    <strong>{environment.counts.tn}</strong>
                  </div>
                </div>
              </figure>

              <figure className="metrics-figure">
                <figcaption>
                  <strong>{labels.metricsTitle}</strong>
                  <span>{labels.metricsSubtitle}</span>
                </figcaption>
                <div className="metric-axis" aria-hidden="true">
                  <span>0</span>
                  <span>50</span>
                  <span>100%</span>
                </div>
                <div className="metric-bars">
                  {metricRows.map(([label, value]) => (
                    <div className="metric-bar-row" key={label}>
                      <span>{label}</span>
                      <div className="metric-bar-plot">
                        <i style={{ width: `${value}%` }} />
                      </div>
                      <strong>{value.toFixed(1)}%</strong>
                    </div>
                  ))}
                </div>
              </figure>
            </div>
          </article>
        );
      })}
      <p className="results-source-note">{labels.source}</p>
    </div>
  );
}
