export type ProjectKind = "image" | "pdf" | "design";
export type ProjectIcon = "zap" | "users" | "bot";

export type Project = {
  slug: string;
  title_es: string;
  title_en: string;
  desc_es: string;
  desc_en: string;
  category_es: string;
  category_en: string;
  icon: ProjectIcon;
  tags: string[];
  kind: ProjectKind;
  src: string;
  thumb?: string;
};

export const projects: Project[] = [
  {
    slug: "landing-tailwind",
    title_es: "Plataforma de Automatización de Procesos",
    title_en: "Process Automation Platform",
    desc_es: "Desarrollo de solución orientada a la optimización de flujos de trabajo mediante automatizaciones, validaciones y gestión eficiente de datos. Enfoque en escalabilidad y reducción de tareas manuales.",
    desc_en: "Solution development focused on workflow optimization through automations, validations, and efficient data management. Emphasis on scalability and reduction of manual tasks.",
    category_es: "Automatización",
    category_en: "Automation",
    icon: "zap",
    tags: ["Salesforce", "Apex", "Flow", "Automation"],
    kind: "image",
    src: "/proyectos/landing.jpg",
    thumb: "/proyectos/landing.jpg",
  },
  {
    slug: "crud-laravel",
    title_es: "Sistema de Gestión de Clientes (CRM)",
    title_en: "Customer Management System (CRM)",
    desc_es: "Aplicación web para administración de clientes, seguimiento de interacciones y gestión de información comercial. Implementación de lógica de negocio, autenticación y arquitectura estructurada.",
    desc_en: "Web application for client administration, interaction tracking, and commercial information management. Business logic, authentication, and structured architecture.",
    category_es: "Full Stack",
    category_en: "Full Stack",
    icon: "users",
    tags: ["PHP", "Laravel", "MySQL", "REST"],
    kind: "pdf",
    src: "/proyectos/crud-laravel.pdf",
    thumb: "/proyectos/crud-thumb.jpg",
  },
  {
    slug: "branding-illustrator",
    title_es: "Plataforma de Interacción con Chatbots e IA",
    title_en: "AI & Chatbot Interaction Platform",
    desc_es: "Desarrollo de sistema de comunicación automatizada con integración de inteligencia artificial para atención y procesamiento de consultas. Diseño orientado a experiencia de usuario y eficiencia operativa.",
    desc_en: "Automated communication system with AI integration for handling and processing queries. Designed with a focus on user experience and operational efficiency.",
    category_es: "IA · Chatbot",
    category_en: "AI · Chatbot",
    icon: "bot",
    tags: ["LWC", "Einstein AI", "Chatbot", "Integration"],
    kind: "design",
    src: "/proyectos/branding.ai",
    thumb: "/proyectos/branding-thumb.jpg",
  },
];
