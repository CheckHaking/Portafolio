type Language = "es" | "en";

const trainingData = {
  boxLoss: [1.89039, 1.91305, 1.71525, 1.63826, 1.56908, 1.51221, 1.47491, 1.40098, 1.38088, 1.28147, 1.27139, 1.22424, 1.17733, 1.10995, 1.12164, 1.03834, 0.9776, 0.94391, 0.90282, 0.88564, 0.86495],
  classLoss: [1.62311, 1.26343, 1.10826, 1.02445, 0.98603, 0.9571, 0.9197, 0.87574, 0.87211, 0.79544, 0.79434, 0.77103, 0.73719, 0.67732, 0.70477, 0.67174, 0.62301, 0.59067, 0.58171, 0.56813, 0.55292],
  dflLoss: [1.12255, 1.12639, 1.03724, 1.01099, 0.99264, 0.9844, 0.97335, 0.9659, 0.95952, 0.93707, 0.92752, 0.92114, 0.91022, 0.89624, 0.90563, 0.89368, 0.88648, 0.87732, 0.86519, 0.8824, 0.8788],
  precision: [0.82154, 0.93229, 0.97538, 0.98671, 0.96537, 0.91122, 0.96715, 0.98088, 0.98434, 0.96204, 0.95715, 0.97886, 0.97163, 0.96231, 0.97153, 0.987, 0.97163, 0.95368, 0.9982, 0.9877, 1.0],
  recall: [0.58593, 0.87625, 0.88182, 0.90909, 0.9, 0.93311, 0.92727, 0.93291, 0.93636, 0.96364, 0.95455, 0.89091, 0.93406, 0.92844, 0.93079, 0.90909, 0.95455, 0.93583, 0.92727, 0.91818, 0.91637],
  map50: [0.62099, 0.90634, 0.94476, 0.96506, 0.95355, 0.96035, 0.9856, 0.97454, 0.97923, 0.9878, 0.98096, 0.96753, 0.96815, 0.97334, 0.96995, 0.9853, 0.98078, 0.97091, 0.98047, 0.97241, 0.98047],
  map5095: [0.26875, 0.42666, 0.4953, 0.53424, 0.53676, 0.49517, 0.52846, 0.5594, 0.55317, 0.5461, 0.54475, 0.54856, 0.53335, 0.5728, 0.55151, 0.58285, 0.56785, 0.57225, 0.58262, 0.56857, 0.57565]
};

type Series = {
  label: string;
  values: number[];
  tone: "a" | "b" | "c";
  dash?: string;
};

function chartPoints(values: number[], min: number, max: number) {
  const width = 320;
  const height = 148;
  const left = 28;
  const right = 10;
  const top = 10;
  const bottom = 24;

  return values
    .map((value, index) => {
      const x = left + (index / (values.length - 1)) * (width - left - right);
      const y = top + ((max - value) / (max - min)) * (height - top - bottom);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function LineChart({
  title,
  subtitle,
  series,
  min,
  max,
  format = "decimal",
  className = ""
}: {
  title: string;
  subtitle: string;
  series: Series[];
  min: number;
  max: number;
  format?: "decimal" | "percent";
  className?: string;
}) {
  const formatValue = (value: number) =>
    format === "percent" ? `${(value * 100).toFixed(1)}%` : value.toFixed(2);

  return (
    <figure className={`training-chart ${className}`}>
      <figcaption>
        <div>
          <strong>{title}</strong>
          <span>{subtitle}</span>
        </div>
        <div className="training-chart-legend" aria-label="Series">
          {series.map((item) => (
            <span key={item.label}>
              <i className={`tone-${item.tone}`} />
              {item.label} {formatValue(item.values[item.values.length - 1] ?? 0)}
            </span>
          ))}
        </div>
      </figcaption>

      <svg viewBox="0 0 320 148" role="img" aria-label={`${title}. ${subtitle}`}>
        <line x1="28" x2="310" y1="124" y2="124" className="chart-axis" />
        <line x1="28" x2="28" y1="10" y2="124" className="chart-axis" />
        <line x1="28" x2="310" y1="67" y2="67" className="chart-guide" />
        <text x="28" y="142" textAnchor="middle">1</text>
        <text x="169" y="142" textAnchor="middle">50</text>
        <text x="310" y="142" textAnchor="middle">100</text>
        <text x="23" y="14" textAnchor="end">{format === "percent" ? `${Math.round(max * 100)}%` : max.toFixed(1)}</text>
        <text x="23" y="127" textAnchor="end">{format === "percent" ? `${Math.round(min * 100)}%` : min.toFixed(1)}</text>
        {series.map((item) => (
          <polyline
            className={`chart-line tone-${item.tone}`}
            strokeDasharray={item.dash}
            points={chartPoints(item.values, min, max)}
            key={item.label}
          />
        ))}
      </svg>
    </figure>
  );
}

const copy = {
  es: {
    heading: "Evolución del entrenamiento",
    note: "21 puntos muestreados del registro de 100 épocas del checkpoint final.",
    scope: "Estas curvas corresponden al conjunto de validación usado durante el entrenamiento. No son las métricas de validación de campo sobre 3,000 fotogramas, presentadas en la sección 03.",
    lossTitle: "Pérdidas de entrenamiento",
    lossSubtitle: "Descenso de box, clasificación y distribución focal",
    qualityTitle: "Precisión y recall",
    qualitySubtitle: "Métricas de detección por época",
    mapTitle: "mAP del detector",
    mapSubtitle: "mAP50 y mAP50-95 por época"
  },
  en: {
    heading: "Training evolution",
    note: "21 points sampled from the final checkpoint's 100-epoch record.",
    scope: "These curves describe the validation split used during training. They are separate from the 3,000-frame field-validation metrics presented in section 03.",
    lossTitle: "Training losses",
    lossSubtitle: "Box, classification and distribution focal loss",
    qualityTitle: "Precision and recall",
    qualitySubtitle: "Detection metrics by epoch",
    mapTitle: "Detector mAP",
    mapSubtitle: "mAP50 and mAP50-95 by epoch"
  }
};

export function ThesisTrainingCharts({ language = "es" }: { language?: Language }) {
  const labels = copy[language];

  return (
    <section className="training-charts" aria-labelledby={`training-chart-title-${language}`}>
      <header>
        <h4 id={`training-chart-title-${language}`}>{labels.heading}</h4>
        <p>{labels.note}</p>
        <p className="training-scope-note">{labels.scope}</p>
      </header>
      <div className="training-charts-grid">
        <LineChart
          className="is-wide"
          title={labels.lossTitle}
          subtitle={labels.lossSubtitle}
          min={0.45}
          max={2.05}
          series={[
            { label: "box", values: trainingData.boxLoss, tone: "a" },
            { label: "cls", values: trainingData.classLoss, tone: "b", dash: "7 4" },
            { label: "dfl", values: trainingData.dflLoss, tone: "c", dash: "2 4" }
          ]}
        />
        <LineChart
          title={labels.qualityTitle}
          subtitle={labels.qualitySubtitle}
          min={0}
          max={1}
          format="percent"
          series={[
            { label: language === "es" ? "precisión" : "precision", values: trainingData.precision, tone: "a" },
            { label: "recall", values: trainingData.recall, tone: "b", dash: "7 4" }
          ]}
        />
        <LineChart
          title={labels.mapTitle}
          subtitle={labels.mapSubtitle}
          min={0}
          max={1}
          format="percent"
          series={[
            { label: "mAP50", values: trainingData.map50, tone: "a" },
            { label: "mAP50-95", values: trainingData.map5095, tone: "b", dash: "7 4" }
          ]}
        />
      </div>
    </section>
  );
}
