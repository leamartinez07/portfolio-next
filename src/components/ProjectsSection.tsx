"use client";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

// First project is live; show 3 total slots
const LIVE_COUNT = 1;
const TOTAL_SLOTS = 3;

const badgeStyle = {
  fontSize: "0.65rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  borderRadius: "7px",
  padding: "5px 10px",
};

const previewFrameStyle = {
  borderRadius: "12px",
  overflow: "hidden" as const,
  border: "1px solid var(--panel-border)",
  lineHeight: 0,
};

const homeCardStyle = {
  gap: "1rem",
};

export default function ProjectsSection() {
  const { lang } = useLang();
  const liveProjects = projects.slice(0, LIVE_COUNT);
  const comingSoonProjects = projects.slice(LIVE_COUNT, TOTAL_SLOTS);
  const hasMoreProjects = projects.length > TOTAL_SLOTS;

  return (
    <div>
      <p className="section-label mb-6">
        <LayoutGrid size={14} strokeWidth={2.2} style={{ flexShrink: 0 }} />
        {lang === "es" ? "Proyectos" : "Projects"}
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6"
      >
        {/* Live project cards */}
        {liveProjects.map((proj) => (
          <motion.div key={proj.slug} variants={item} className="h-full">
            <Link
              href={`/proyectos/${proj.slug}`}
              className="proj-card block h-full"
              style={{ ...homeCardStyle, textDecoration: "none", cursor: "pointer" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span style={{
                  ...badgeStyle,
                  color: iconColor[proj.icon],
                  background: "rgba(124,58,237,0.08)",
                  border: `1px solid ${iconColor[proj.icon]}44`,
                  alignSelf: "flex-start",
                }}>
                  {lang === "es" ? proj.category_es : proj.category_en}
                </span>
              </div>

              <div className="proj-name">{lang === "es" ? proj.title_es : proj.title_en}</div>

              {/* Vertical screenshot preview */}
              {proj.thumb && (
                <div style={previewFrameStyle}>
                  <Image
                    src={proj.thumb}
                    alt={`Preview de ${proj.title_es}`}
                    width={716}
                    height={807}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              )}

              <div className="proj-desc">{lang === "es" ? proj.desc_es : proj.desc_en}</div>

              <div className="proj-tags">
                {proj.tags.map((tag) => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Coming soon cards — blurred overlay over real project data */}
        {comingSoonProjects.map((proj) => (
          <motion.div key={proj.slug} variants={item} className="h-full">
            <div className="coming-soon-wrap" style={{ height: "100%" }}>
              <div className="proj-card h-full" style={{ ...homeCardStyle, cursor: "default", userSelect: "none" }}>
                <div className="flex items-center justify-between mb-3">
                  <span style={{
                    ...badgeStyle,
                    color: iconColor[proj.icon],
                    background: "rgba(124,58,237,0.08)",
                    border: `1px solid ${iconColor[proj.icon]}44`,
                  }}>
                    {lang === "es" ? proj.category_es : proj.category_en}
                  </span>
                </div>
                <div className="proj-name">{lang === "es" ? proj.title_es : proj.title_en}</div>
                <div className="proj-desc">{lang === "es" ? proj.desc_es : proj.desc_en}</div>
                <div className="proj-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="proj-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="coming-soon-overlay">
                <span
                  className="coming-soon-text"
                  style={{
                    fontSize: "clamp(0.86rem, 1.7vw, 1.05rem)",
                    letterSpacing: "0.14em",
                    lineHeight: 1.1,
                    padding: "0 10px",
                  }}
                >
                  {lang === "es" ? "Próximamente" : "Coming Soon"}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {hasMoreProjects && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "clamp(1.4rem, 3vw, 2rem)" }}>
          <Link
            href="/proyectos"
            className="btn btn-ghost"
            style={{
              padding: "10px 18px",
              fontSize: "0.78rem",
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            {lang === "es" ? "Ver todos los proyectos" : "View all projects"}
          </Link>
        </div>
      )}
    </div>
  );
}
