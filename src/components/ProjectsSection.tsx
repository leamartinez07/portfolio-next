"use client";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers";
import { LayoutGrid } from "lucide-react";
import { projects, type ProjectIcon } from "@/data/projects";

const iconColor: Record<ProjectIcon, string> = {
  zap:   "var(--lilac)",
  users: "var(--pink)",
  bot:   "var(--accent)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function ProjectsSection() {
  const { lang } = useLang();

  return (
    <div>
      <p className="section-label mb-6">
        <LayoutGrid size={14} strokeWidth={2.2} style={{ flexShrink: 0 }} />
        {lang === "es" ? "Proyectos" : "Projects"}
      </p>

      <div className="coming-soon-wrap">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.slug}
              variants={item}
              className="proj-card"
            >
              {/* Badge row */}
              <div className="flex items-center justify-between mb-3">
                <span style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: iconColor[proj.icon],
                  background: "rgba(124,58,237,0.08)",
                  border: `1px solid ${iconColor[proj.icon]}44`,
                  borderRadius: "5px",
                  padding: "2px 7px",
                  alignSelf: "flex-start",
                }}>
                  {lang === "es" ? proj.category_es : proj.category_en}
                </span>
              </div>


              {/* Name */}
              <div className="proj-name">{lang === "es" ? proj.title_es : proj.title_en}</div>

              {/* Description */}
              <div className="proj-desc">{lang === "es" ? proj.desc_es : proj.desc_en}</div>

              {/* Tags */}
              <div className="proj-tags">
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
