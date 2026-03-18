"use client";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers";
import { GraduationCap, Briefcase } from "lucide-react";

type Item = {
  dateES: string;
  dateEN: string;
  title_es: string;
  title_en: string;
  place?: string;
  desc_es: string;
  desc_en: string;
  isCurrent?: boolean;
};

const formacion: Item[] = [
  {
    dateES: "Actual",
    dateEN: "Current",
    title_es: "Tecnicatura Superior en Diseño y Desarrollo Web",
    title_en: "Higher Technical Degree in Web Design & Dev",
    place: "Escuela Da Vinci · Buenos Aires",
    desc_es: "Estudiante activo.",
    desc_en: "Currently enrolled.",
    isCurrent: true,
  },
  {
    dateES: "Certificados —  67 hs c/u",
    dateEN: "Certificates —  67h each",
    place: "UTN FRBA · Buenos Aires",
    title_es: "HTML5 & CSS3 · JavaScript",
    title_en: "HTML5 & CSS3 · JavaScript",
    desc_es: "Formación en HTML5 y CSS3 · Desarrollo Web con JavaScript",
    desc_en: "HTML5 & CSS3 Training · Web Development with JavaScript",
  },
  {
    dateES: "2017 – 2021",
    dateEN: "2017 – 2021",
    place: "Instituto Comercial PS-207 Pío X",
    title_es: "Bachiller en Economía y Administración",
    title_en: "High School Diploma (Economy & Management)",
    desc_es: "Formación secundaria.",
    desc_en: "Secondary education.",
  },
];

const trabajos: Item[] = [
  {
    dateES: "2025 – 2026",
    dateEN: "2025 – 2026",
    title_es: "Asistente a Consultor de Salesforce",
    title_en: "Salesforce Consultant Assistant",
    place: "Freelance",
    desc_es: "Asistencia técnica a consultor Salesforce con foco en desarrollo y automatización. Implementación de soluciones utilizando Apex, desarrollo de componentes Lightning Web Components (LWC), creación de Flows y desarrollo de chatbots. Configuración e integración de herramientas de inteligencia artificial aplicadas a la plataforma. Participación en la optimización de procesos, integraciones y personalización avanzada.",
    desc_en: "Technical assistance to a Salesforce consultant focused on development and automation. Solution implementation using Apex, Lightning Web Components (LWC), Flows, and chatbot development. Configuration and integration of AI tools on the platform. Participation in process optimization, integrations, and advanced customization.",
  },
];

function TimelineBlock({ items, lang }: { items: Item[]; lang: "es" | "en" }) {
  return (
    <ol style={{ display: "flex", flexDirection: "column", gap: "22px", marginLeft: "0.38rem" }}>
      {items.map((it, i) => (
        <li key={i} style={{ position: "relative", paddingLeft: "22px", borderLeft: "1px solid var(--dim)" }}>
          {/* Dot */}
          <span
            style={{
              position: "absolute",
              left: "-4.5px",
              top: "7px",
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background: it.isCurrent ? "var(--lilac)" : "var(--accent)",
              border: it.isCurrent ? "1.5px solid var(--pink)" : "1.5px solid var(--chip-border)",
              boxShadow: it.isCurrent ? "0 0 10px rgba(192,132,252,0.6)" : "none",
            }}
          />
          {/* Date */}
          <p style={{ fontSize: "0.78rem", color: "var(--muted)", letterSpacing: "0.06em", marginBottom: "5px" }}>
            {lang === "es" ? it.dateES : it.dateEN}
          </p>
          {/* Title */}
          <p style={{ fontFamily: "var(--font-syne, Arial Black, sans-serif)", fontSize: "1rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.35, marginBottom: "4px" }}>
            {lang === "es" ? it.title_es : it.title_en}
          </p>
          {/* Place */}
          {it.place && (
            <p style={{ fontSize: "0.88rem", color: "var(--accent)", marginBottom: "6px" }}>
              {it.place}
            </p>
          )}
          {/* Desc */}
          <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.65 }}>
            {lang === "es" ? it.desc_es : it.desc_en}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  const { lang } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid md:grid-cols-2 gap-10">
        {/* Formación */}
        <div>
          <p className="section-label mb-6">
            <GraduationCap size={14} strokeWidth={2.2} style={{ flexShrink: 0 }} />
            {lang === "es" ? "Formación" : "Education"}
          </p>
          <TimelineBlock items={formacion} lang={lang} />
        </div>

        {/* Experiencia */}
        <div>
          <p className="section-label mb-6">
            <Briefcase size={14} strokeWidth={2.2} style={{ flexShrink: 0 }} />
            {lang === "es" ? "Experiencia" : "Experience"}
          </p>
          <TimelineBlock items={trabajos} lang={lang} />
        </div>
      </div>
    </motion.div>
  );
}
