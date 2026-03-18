"use client";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers";

export default function About() {
  const { lang } = useLang();

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="card"
    >
      <p className="section-label mb-6">
        {lang === "es" ? "Sobre mí" : "About me"}
      </p>

      <div className="flex flex-col sm:flex-row gap-10 sm:items-start">
        <p className="flex-1 text-base leading-relaxed" style={{ opacity: 0.88 }}>
          {lang === "es"
            ? "Tengo 22 años, soy de Mendoza, Argentina. Cuento con inglés B2 (Cambridge) y estudio Tecnicatura en Diseño y Desarrollo Web en la Escuela Da Vinci. Me apasiona crear productos digitales bien hechos y seguir creciendo como desarrollador."
            : "I'm 22 years old, from Mendoza, Argentina. I have B2 English (Cambridge) and I'm studying Web Design & Development at Escuela Da Vinci. I'm passionate about building well-crafted digital products and keep growing as a developer."}
        </p>

        <div className="flex sm:flex-col gap-8 sm:gap-6 shrink-0">
          {(lang === "es"
            ? [{ label: "Años", value: "22" }, { label: "Inglés", value: "B2" }]
            : [{ label: "Age", value: "22" }, { label: "English", value: "B2" }]
          ).map((s) => (
            <div key={s.label} className="text-center sm:text-right">
              <div className="text-3xl font-black leading-none" style={{ color: "var(--accent)" }}>
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
