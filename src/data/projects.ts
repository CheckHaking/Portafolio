import type { Project } from "@/lib/types";

/**
 * Proyectos biomédicos - experiencia de servicio técnico durante la carrera.
 * Sección secundaria. Los proyectos NOM se mantienen como evidencia de
 * cumplimiento normativo formal (no son centrales al posicionamiento DAAD).
 */
export const biomedicalProjects: Project[] = [
  {
    id: "bio-thesis",
    title:
      "Tesis: visión artificial e interbloqueo para seguridad industrial",
    summary:
      "Prototipo académico desplegado sobre una prensa industrial para detectar dedos dentro de una región de riesgo y accionar un interbloqueo experimental del pedal bajo condiciones controladas.",
    tags: ["ai", "hardware", "signal-processing", "salud", "automation"],
    highlights: [
      "YOLOv8 entrenado sobre 1,131 imágenes con aumentación (CutMix, rotaciones, brillo/contraste)",
      "Despliegue en NVIDIA Jetson Nano con latencia reportada por debajo de 120 ms en pruebas controladas",
      "Circuito experimental que inhibe la señal del pedal al detectar dedos dentro de la región de riesgo",
      "Calificación 10/10 - excelencia académica"
    ],
    metrics: [
      "Sensibilidad 95.3%",
      "Precisión 94.7%",
      "F1 95.0%",
      "Latencia reportada <120 ms"
    ],
    stack: [
      "YOLOv8 (Ultralytics)",
      "NVIDIA Jetson Nano",
      "OpenCV",
      "Python",
      "Hardware embebido",
      "Circuito de interbloqueo"
    ]
  },
  {
    id: "bio-service-experience",
    title: "Experiencia de servicio técnico biomédico (2023-2024)",
    summary:
      "Trabajo de campo durante la carrera en mantenimiento de equipo médico. Incluye unidades odontológicas, compresores de aire clínico y trazabilidad documental de las intervenciones.",
    tags: ["servicio", "equipos", "normativa", "salud"],
    highlights: [
      "Diagnóstico, mantenimiento preventivo y verificación funcional",
      "Aplicación de buenas prácticas de servicio y tecnovigilancia",
      "Trazabilidad documental de intervenciones",
      "Trabajo realizado durante prácticas profesionales y servicio técnico autónomo"
    ],
    metrics: ["Experiencia 2023-2024"],
    stack: ["Manuales OEM", "Trazabilidad", "Mantenimiento preventivo", "Seguridad eléctrica"]
  }
];

/**
 * Proyectos de software - piezas maestras del portafolio.
 * Pieza maestra #1: plataforma maestra de aplicaciones internas.
 * Pieza maestra #2: Industrial Sales CRM Platform (CRM_Drones).
 * Apps específicas dentro de la plataforma corporativa.
 */
export const softwareProjects: Project[] = [
  {
    id: "sw-enterprise-data-warehouse",
    title: "Data warehouse empresarial y dashboard ejecutivo",
    summary:
      "Sistema corporativo que consolida información para que Dirección consulte el estado de la empresa, analice su crecimiento y trabaje con indicadores consistentes. Su evolución contempla KPIs por área con acceso segmentado según responsabilidad y dominio de datos.",
    problem:
      "Dirección necesita una lectura confiable y compartida del estado y crecimiento de la empresa.",
    tags: ["enterprise", "workflow", "automation", "productivity"],
    highlights: [
      "Actualmente genera reportes ejecutivos para Dirección sobre estado y crecimiento de la empresa",
      "Centraliza definiciones e indicadores para reducir interpretaciones inconsistentes entre reportes",
      "Preparado para incorporar KPIs operativos y de gestión en distintos niveles de la organización",
      "El acceso se diseña por dominio y responsabilidad para proteger información sensible"
    ],
    metrics: ["Reportes para Dirección", "KPIs multinivel", "Acceso segmentado"],
    stack: []
  },
  {
    id: "sw-space-planning-software",
    title: "Software interno de sembrado y catálogo",
    summary:
      "Producto interno que combina el catálogo corporativo con una herramienta integrada al entorno de diseño. Permite insertar productos, acabados y precios durante el sembrado de espacios y reduce la dependencia de licencias especializadas externas.",
    problem:
      "El sembrado de espacios dependía de licencias externas y de información distribuida entre distintas fuentes.",
    tags: ["enterprise", "workflow", "productivity", "automation"],
    highlights: [
      "Pasó de MVP a producción y habilita el flujo de aproximadamente 17 usuarios",
      "Mi responsabilidad: arquitectura de información, administración del catálogo, importación, depuración e implementación",
      "Reconstrucción de miles de registros y cobertura de recursos de dibujo elevada de aproximadamente 78% a cerca de 98%",
      "Costo base potencialmente evitable de US$21.7k+ al año; escenario estimado con precios públicos de 2026, pendiente de validación interna"
    ],
    metrics: ["US$21.7k+ al año potenciales", "En producción", "Cobertura cercana al 98%"],
    stack: []
  },
  {
    id: "sw-modular-enterprise-platform",
    title: "Plataforma maestra de aplicaciones internas",
    summary:
      "Plataforma interna que reúne aplicaciones de operación, ventas, recursos humanos, finanzas y automatización en una base compartida para distintas empresas del grupo. Participé en su co-arquitectura y evolución como producto transversal.",
    problem:
      "Cada área resolvía necesidades operativas en herramientas separadas, duplicando esfuerzo y mantenimiento.",
    tags: ["full-stack", "enterprise", "api", "docker", "ai", "saas"],
    highlights: [
      "Base compartida para aplicaciones utilizadas por múltiples áreas operativas",
      "Reduce duplicidad entre soluciones y facilita la evolución coordinada de productos internos",
      "Soporte multiempresa dentro de un mismo grupo industrial",
      "Cubre operaciones, ventas, recursos humanos, finanzas y automatización"
    ],
    metrics: [
      "En producción",
      "Múltiples áreas operativas",
      "Soporte multiempresa"
    ],
    stack: []
  },
  {
    id: "sw-packaging-operations-system",
    title: "Sistema operativo de empaque",
    summary:
      "Aplicación de piso que organiza la preparación de embarques, centraliza el avance del empaque y mantiene una vista compartida por cliente y destino para reducir fricción operativa.",
    problem:
      "El avance del empaque y la preparación de embarques carecían de una vista compartida en piso.",
    tags: ["enterprise", "productivity", "workflow", "automation"],
    highlights: [
      "Estructura el flujo de empaque y preparación de embarques desde una misma interfaz",
      "Agrupa el trabajo por cliente y destino para facilitar la ejecución en piso",
      "Sincroniza el avance entre dispositivos y conserva la trazabilidad del embarque",
      "Integra la generación de etiquetas dentro del flujo operativo"
    ],
    metrics: ["Operación en piso", "Flujo sincronizado", "Trazabilidad por embarque"],
    stack: []
  },
  {
    id: "sw-industrial-sales-crm",
    title: "Plataforma CRM comercial B2B",
    summary:
      "Producto comercial B2B desarrollado de extremo a extremo para centralizar seguimiento, oportunidades, cotizaciones y comunicación en una operación multimarca y multisucursal.",
    problem:
      "La operación comercial estaba fragmentada entre marcas, sucursales, canales y etapas de seguimiento.",
    tags: ["full-stack", "saas", "api", "ai", "automation"],
    highlights: [
      "Autoría única - diseño y ejecución end-to-end del producto",
      "Centralización del proceso comercial desde el contacto hasta la cotización",
      "Seguimiento multimarca y multisucursal en un mismo flujo operativo",
      "Integración de canales de comunicación y automatizaciones",
      "Tableros para seguimiento de indicadores comerciales"
    ],
    metrics: [
      "Autoría end-to-end",
      "Operación multimarca",
      "Operación multisucursal"
    ],
    stack: []
  },
  {
    id: "sw-content-intelligence-system",
    title: "Sistema de inteligencia y publicación de contenido",
    summary:
      "Sistema interno que conecta investigación de mercado, preparación asistida de contenido, calendario por marca y publicación multicanal. Se encuentra en desarrollo activo.",
    problem:
      "Investigación, calendarización, producción y publicación de contenido funcionaban como procesos desconectados.",
    tags: ["ai", "automation", "workflow", "saas", "backend"],
    highlights: [
      "Pipeline en 3 fases: research de mercado → generación con IA → publicación multi-canal",
      "Agente IA crea entradas de calendario alineadas a insights de mercado por marca",
      "Publicación automatizada en canales autorizados",
      "Soporta múltiples marcas del grupo simultáneamente",
      "Estado: en desarrollo activo (parte en producción, módulo CMS en construcción)"
    ],
    stack: [],
    metrics: ["3 fases automatizadas", "Multi-marca", "Multi-canal social"]
  },
  {
    id: "sw-autonomous-ads-agent",
    title: "Agente de optimización de campañas",
    summary:
      "Servicio interno que analiza campañas digitales y apoya ajustes de pujas, presupuestos y materiales según criterios configurables y puntos de supervisión operativa.",
    problem:
      "Las campañas requerían revisión manual constante para detectar desviaciones de presupuesto y rendimiento.",
    tags: ["ai", "automation", "backend", "api"],
    highlights: [
      "Orquestación de decisiones de optimización con criterios configurables",
      "Monitoreo continuo de pujas, presupuestos y creativos",
      "Integración con la operación de campañas digitales",
      "Ejecución programada con puntos de supervisión operativa"
    ],
    stack: [],
    metrics: ["Automatización programada", "Monitoreo continuo", "Supervisión operativa"]
  },
  {
    id: "sw-erp-quoting-tool",
    title: "Cotizador integrado al ERP",
    summary:
      "Primer producto lanzado dentro de la plataforma interna. Centraliza información necesaria para cotizar y mantiene sincronizados los datos utilizados por la operación comercial.",
    problem:
      "Cotizar exigía reunir información de varias fuentes, ralentizando la respuesta comercial.",
    tags: ["full-stack", "enterprise", "api", "docker"],
    highlights: [
      "Primer módulo lanzado de la plataforma corporativa (febrero-marzo 2025)",
      "Sincronización controlada con la fuente corporativa de información",
      "Disponibilidad de datos actualizados para el proceso de cotización",
      "Despliegue dentro de la infraestructura autorizada por la empresa",
      "Redujo el ciclo de respuesta en 40% según medición interna"
    ],
    stack: [],
    metrics: ["Reducción 40% en tiempo de respuesta", "Cotizaciones en tiempo real"]
  }
];

/**
 * Proyectos híbridos / cruce de dominios - la pieza central del posicionamiento.
 * Aquí se materializa el diferenciador: software + electrónica + hardware aplicados
 * a problemas reales en salud e industria.
 */
export const hybridProjects: Project[] = [
  {
    id: "hyb-vision-amputaciones",
    title: "Visión artificial aplicada a seguridad industrial (tesis)",
    summary:
      "Prototipo académico desplegado sobre una prensa industrial: detección de dedos en una región de riesgo con YOLOv8 sobre Jetson Nano, conectada a un circuito experimental de interbloqueo del pedal.",
    tags: ["ai", "hardware", "signal-processing", "salud", "automation"],
    highlights: [
      "Cruce de tres dominios: salud ocupacional + Computer Vision + electrónica embebida",
      "YOLOv8 sobre 1,131 imágenes con aumentación (CutMix, rotaciones)",
      "Inferencia edge en NVIDIA Jetson Nano (latencia reportada <120 ms en pruebas controladas)",
      "Circuito experimental de interbloqueo sobre el pedal industrial",
      "Resultados: Sensibilidad 95.3%, Precisión 94.7%, F1 95.0%",
      "Calificación final de tesis: 10/10"
    ],
    stack: ["YOLOv8", "Jetson Nano", "OpenCV", "Python", "Electrónica embebida"],
    metrics: ["95.3% sensibilidad in-domain", "<120 ms reportados", "Calificación 10/10"]
  },
  {
    id: "hyb-protesis",
    title: "Prótesis mioeléctrica (proyecto de carrera)",
    summary:
      "Diseño y prototipo de prótesis controlada por señales EMG. Cubre adquisición de señal, procesamiento digital, control de actuadores y diseño mecánico iterativo.",
    tags: ["hardware", "signal-processing", "salud"],
    highlights: [
      "Adquisición de señal EMG con sensores superficiales",
      "Filtrado digital y detección de umbral",
      "Control de actuadores en C++/Python",
      "Diseño mecánico iterativo de la mano protésica"
    ],
    stack: ["C++", "Python", "EMG", "Diseño mecánico"]
  },
  {
    id: "hyb-ecg",
    title: "ECG con aislamiento galvánico (proyecto de carrera)",
    summary:
      "Prototipo académico de electrocardiografía con aislamiento galvánico, filtrado de ruido y visualización digital de señal.",
    tags: ["hardware", "signal-processing", "salud"],
    highlights: [
      "Aislamiento galvánico para seguridad eléctrica del paciente",
      "Filtro anti-ruido y amplificación de señal",
      "Interfaz de visualización digital",
      "Diseño guiado por principios de seguridad eléctrica; prototipo no certificado"
    ],
    stack: ["Electrónica analógica", "DSP", "UI", "Seguridad eléctrica"]
  }
];
