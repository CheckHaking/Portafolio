# Auditoría integral del portafolio

Fecha: 21 de julio de 2026

Proyecto: `/Users/sergioantunez/Desktop/personal-portfolio`

Vista local: `http://localhost:3003`

Sitio que se reemplazará: `https://portafolio-henna-five.vercel.app/`

## Veredicto ejecutivo

El portafolio está listo para una publicación de prueba. Presenta una identidad editorial clara, narrativa bilingüe coherente, evidencia académica bien delimitada y casos empresariales centrados en valor sin exponer arquitectura ni nombres internos.

**Puntuación técnica posterior a correcciones: 19/20 — lista para preview y validación final en Vercel.**

| Dimensión | Puntuación | Estado |
|---|---:|---|
| Accesibilidad | 4/4 | Idioma correcto por ruta, contraste AA corregido y objetivos táctiles principales de 44 px |
| Rendimiento | 4/4 | Generación estática, Next/Image y cero vulnerabilidades en dependencias de producción |
| Responsividad | 4/4 | Sin desbordamiento en escritorio ni móvil; composición adaptada a 390 px |
| Sistema visual | 4/4 | Tipografía, radios, color y jerarquías consolidados |
| Contenido y confianza | 3/4 | Evidencia sólida; las métricas empresariales estimadas conservan su aclaración |

Incidencias abiertas: **0 P0 · 0 P1 · 0 P2 bloqueantes · 2 P3 opcionales**.

## Correcciones cerradas

- Las rutas españolas declaran `lang="es"` y las inglesas `lang="en"` mediante layouts raíz independientes.
- Metadata específica por página, canonical, alternates `hreflang`, Open Graph, Twitter, sitemap y robots.
- Contraste del texto secundario y de las tarjetas ajustado para lectura normal.
- Retirados el enlace roto, la tarjeta autorreferencial y el CTA de CV inconcluso.
- Jerarquía de encabezados corregida en las páginas de trabajo y formación.
- Títulos de proyectos normalizados en español e inglés.
- Selector de idioma, enlaces de navegación y controles principales con área táctil mínima de 44 px.
- Teléfono personal eliminado del código público.
- Componentes, rutas API y dependencias sin uso retirados.
- ESLint configurado directamente para Next.js 16.
- Next.js actualizado y dependencias de producción sin vulnerabilidades conocidas.

## Auditoría de contenido y evidencia

### Listo para compartir

- Promedio 9.6/10, mención honorífica y beca académica del 75%.
- Tesis presentada como prototipo de investigación, no como sistema certificado de seguridad.
- Resultados diferenciados por entorno, con denominadores, métricas y limitaciones visibles.
- Uso de NVIDIA Jetson Nano, YOLOv8 y edge computing limitado al caso académico, donde aporta credibilidad técnica.
- Casos empresariales descritos por problema, contribución e impacto, sin revelar arquitectura, proveedores o nombres internos.
- La contribución personal está delimitada frente al trabajo de equipo.

### Compartir con cautela

- **US$21.7k de ahorro anual estimado:** es un escenario de referencia calculado para 17 licencias con precio público; no equivale a ahorro contable confirmado. La cifra debe conservar siempre la etiqueta de estimación y su fuente.
- **3+ años de experiencia aplicada:** es defendible al integrar experiencia biomédica, investigación y producto desde 2023; no debe reinterpretarse como tres años exclusivos de desarrollo de software.
- Mantener agregadas las métricas empresariales para no revelar información operativa confidencial.

### Evidencia futura que aumentaría el impacto

- Usuarios activos, decisiones habilitadas u horas ahorradas por el data warehouse.
- Tiempo antes/después y volumen de uso del sistema operativo de empaque.
- Adopción o volumen procesado por CRM y cotización.
- Cotización o factura interna que convierta el ahorro estimado en ahorro validado.
- CV público redactado para web, si se decide publicarlo más adelante.

## Verificaciones superadas

- `npm run lint`: correcto.
- `npx tsc --noEmit`: correcto.
- `npm run build`: correcto con Next.js 16.2.11; todas las páginas se generan estáticamente.
- `npm audit --omit=dev`: 0 vulnerabilidades.
- Ocho rutas principales: HTTP 200, título específico e idioma correcto.
- Consola del navegador: 0 errores.
- Desbordamiento horizontal: 0 a 1440 px y 390 px.
- Imágenes principales cargan correctamente y tienen texto alternativo.
- Enlaces sin nombre accesible: 0.

## Pendientes P3 opcionales

1. Comprimir o redimensionar las imágenes fuente de tesis; Next/Image ya reduce el costo entregado al visitante.
2. Sustituir métricas estimadas por resultados internos validados cuando exista autorización documental.

## Publicación recomendada

El repositorio público `CheckHaking/Portafolio` conserva la URL actual y la integración de Vercel. Se reemplazará el contenido del sitio anterior conservando su historial Git. La secuencia segura es:

1. Publicar este proyecto en una rama nueva.
2. Verificar el preview generado por Vercel.
3. Integrar la rama en `main`.
4. Confirmar que `https://portafolio-henna-five.vercel.app/` sirve la nueva versión.
