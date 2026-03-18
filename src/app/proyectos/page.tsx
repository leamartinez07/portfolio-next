"use client";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { projects, type ProjectIcon } from "@/data/projects";
import { useLang } from "@/app/providers";

const iconColor: Record<ProjectIcon, string> = {
  zap:   "var(--lilac)",
  users: "var(--pink)",
  bot:   "var(--accent)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Proyectos() {
  const { lang } = useLang();
  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: "2.5rem" }}
      >
        <p className="section-label" style={{ marginBottom: "0.75rem" }}>
          <LayoutGrid size={14} strokeWidth={2.2} style={{ flexShrink: 0 }} />
          {lang === "es" ? "Proyectos" : "Projects"}
        </p>
        <p style={{ fontSize: "0.9rem", color: "var(--muted)", maxWidth: "480px", lineHeight: 1.65 }}>
          {lang === "es"
            ? "Trabajos personales y de práctica en diseño y desarrollo web."
            : "Personal and practice projects in web design and development."}
        </p>
      </motion.div>

      {/* List + overlay */}
      <div className="coming-soon-wrap">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.slug}
              variants={item}
              style={{
                background: "var(--panel)",
                border: "1px solid var(--panel-border)",
                borderRadius: "13px",
                padding: "clamp(14px, 3vw, 22px) clamp(14px, 3vw, 24px)",
                cursor: "default",
              }}
            >
              {/* Top row: number + category badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{
                  fontFamily: "var(--font-barlow, sans-serif)",
                  fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  background: "linear-gradient(135deg, var(--lilac), var(--pink))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.01em",
                }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <span style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: iconColor[proj.icon],
                  background: "rgba(124,58,237,0.08)",
                  border: `1px solid ${iconColor[proj.icon]}44`,
                  borderRadius: "6px",
                  padding: "3px 8px",
                }}>
                  {lang === "es" ? proj.category_es : proj.category_en}
                </span>
              </div>

              {/* Title */}
              <div style={{ marginBottom: "8px" }}>
                <span style={{
                  fontFamily: "var(--font-syne, 'Arial Black', sans-serif)",
                  fontSize: "clamp(0.92rem, 2.5vw, 1.05rem)",
                  fontWeight: 700,
                  color: "var(--text)",
                  lineHeight: 1.35,
                }}>
                  {lang === "es" ? proj.title_es : proj.title_en}
                </span>
              </div>


              {/* Description */}
              <p style={{
                fontSize: "clamp(0.8rem, 2vw, 0.88rem)",
                color: "var(--muted)",
                lineHeight: 1.6,
                marginBottom: "10px",
              }}>
                {lang === "es" ? proj.desc_es : proj.desc_en}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {proj.tags.map((tag) => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming soon overlay */}
        <div className="coming-soon-overlay">
          <span className="coming-soon-text">{lang === "es" ? "Próximamente" : "Coming Soon"}</span>
        </div>
      </div>
    </div>
  );
}
