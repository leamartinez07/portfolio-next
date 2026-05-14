export type ProjectKind = "image" | "pdf" | "design" | "web" | "web-live";
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
  url?: string;
  github?: string;
  thumb?: string;
  preview?: string; // full-size screenshot for detail page
};

export const projects: Project[] = [
  {
    slug: "callm",
    title_es: "callm — App de Chat en Tiempo Real",
    title_en: "callm — Real-Time Chat App",
    desc_es: "Aplicación de chat en tiempo real construida con Next.js 15, TypeScript, MongoDB y Pusher. Incluye salas de chat, mensajes directos 1-a-1, sistema de amigos con links de invitación, llamadas de audio y video vía WebRTC, autenticación JWT con verificación de email, inicio de sesión con Google, subida de archivos e internacionalización EN/ES.",
    desc_en: "Full-stack real-time chat app built with Next.js 15, TypeScript, MongoDB and Pusher. Features chat rooms, direct messages, friends system with invite links, audio and video calls via WebRTC, JWT auth with email verification, Google sign-in, file uploads, and EN/ES internationalization.",
    category_es: "Full Stack · Tiempo Real",
    category_en: "Full Stack · Real-Time",
    icon: "users",
    tags: ["Next.js 15", "TypeScript", "MongoDB", "Pusher", "WebRTC", "JWT", "Google OAuth"],
    kind: "image",
    src: "/proyectos/callm-preview.png",
    thumb: "/proyectos/callm-thumb.png",
    preview: "/proyectos/callm-preview.png",
    github: "https://github.com/leamartinez07/callm",
  },
  {
    slug: "taskflow-api",
    title_es: "TaskFlow API — Plataforma REST",
    title_en: "TaskFlow API — REST Platform",
    desc_es: "API REST lista para producción para gestión de tareas y proyectos, construida con Next.js 15, TypeScript y Supabase (PostgreSQL). Incluye autenticación JWT, CRUD completo de proyectos y tareas con filtros, comentarios, control de acceso basado en roles, validación con Zod y documentación interactiva de la API en la ruta raíz.",
    desc_en: "Production-ready REST API for task and project management, built with Next.js 15, TypeScript and Supabase (PostgreSQL). Features JWT authentication, full CRUD for projects and tasks with filters, comments, role-based access control, Zod validation, and interactive API docs at the root route.",
    category_es: "Backend · API REST",
    category_en: "Backend · REST API",
    icon: "zap",
    tags: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "JWT", "Zod", "Vercel"],
    kind: "web-live",
    src: "/proyectos/taskflow-api-preview.png",
    thumb: "/proyectos/taskflow-api-thumb.png",
    preview: "/proyectos/taskflow-api-preview.png",
    url: "https://taskflow-api-pied.vercel.app",
    github: "https://github.com/leamartinez07/taskflow-api",
  },
  {
    slug: "nexus-agency",
    title_es: "Landing Page — Nexus Agency",
    title_en: "Landing Page — Nexus Agency",
    desc_es: "Landing page completa para una agencia de marketing digital. Incluye navegación fija con scroll suave, secciones de servicios, proceso de trabajo con timeline animado, preguntas frecuentes con acordeón, formulario de contacto y diseño responsive. Construida con WordPress, PHP, CSS3 y JavaScript vanilla, con optimizaciones de SEO (Schema.org, Open Graph) y accesibilidad WCAG 2.1.",
    desc_en: "Full landing page for a digital marketing agency. Features fixed navigation with smooth scroll, services section, animated timeline process, FAQ accordion, contact form, and responsive design. Built with WordPress, PHP, CSS3 and vanilla JavaScript, with SEO optimizations (Schema.org, Open Graph) and WCAG 2.1 accessibility.",
    category_es: "Web · Diseño",
    category_en: "Web · Design",
    icon: "zap",
    tags: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO", "WCAG 2.1"],
    kind: "web",
    src: "nexus-agency.html",
    url: "https://nexus-agency.page.gd/nexus-agency/",
    thumb: "/ScreenshotWPNexusShort.png",
    preview: "/ScreenshotWPNexus.png",
  },
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
