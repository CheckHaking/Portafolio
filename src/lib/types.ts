export type ProjectTag =
  | "servicio"
  | "normativa"
  | "odontologia"
  | "equipos"
  | "full-stack"
  | "saas"
  | "api"
  | "hardware"
  | "signal-processing"
  | "salud"
  | "enterprise"
  | "docker"
  | "backend"
  | "ai"
  | "automation"
  | "workflow"
  | "productivity"
  | "portfolio"
  | "nextjs";

export type Project = {
  id: string;
  title: string;
  summary: string;
  problem?: string;
  tags: ProjectTag[];
  highlights: string[];
  metrics?: string[];
  stack?: string[];
  link?: string;
  demo?: string;
  repo?: string;
};

export type ServiceReport = {
  id: string;
  equipo: string;
  ubicacion: string;
  fecha: string;
  diagnostico: string;
  actividades: string[];
  validacion: string[];
  normas: string[];
  parametros: string[];
  entregado: boolean;
};

export type Repo = {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  updatedAt: string;
  language: string | null;
};
