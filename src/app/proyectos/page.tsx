"use client";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

const LIVE_COUNT = 1;

const rowBase = {
  background: "var(--panel)",
  border: "1px solid var(--panel-border)",
  borderRadius: "16px",
  padding: "clamp(20px, 3vw, 30px) clamp(18px, 3vw, 30px)",
};

const rowFlow = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "clamp(0.9rem, 1.6vw, 1.2rem)",
};

const rowDescription = {
  fontSize: "clamp(0.86rem, 1.7vw, 0.94rem)",
  color: "var(--muted)",
  lineHeight: 1.72,
  maxWidth: "min(100%, 88ch)",
  margin: 0,
};

const rowTags = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "8px",
  alignItems: "center",
};

export default function Proyectos() {
  const { lang } = useLang();
  const liveProjects = projects.slice(0, LIVE_COUNT);
  const comingSoonProjects = projects.slice(LIVE_COUNT);

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: "clamp(2.5rem, 5vw, 3.5rem)" }}
      >
        <p className="section-label" style={{ marginBottom: "0.75rem" }}>
          <LayoutGrid size={14} strokeWidth={2.2} style={{ flexShrink: 0 }} />
          {lang === "es" ? "Proyectos" : "Projects"}
        </p>
        <p style={{ fontSize: "0.92rem", color: "var(--muted)", maxWidth: "520px", lineHeight: 1.7, margin: 0 }}>
          {lang === "es"
            ? "Trabajos personales y de práctica en diseño y desarrollo web."
            : "Personal and practice projects in web design and development."}
        </p>
      </motion.div>

      {/* List */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 2vw, 18px)" }}
      >
        {/* Live project rows */}
        {liveProjects.map((proj, idx) => (
          <motion.div key={proj.slug} variants={item}>
            <Link
              href={`/proyectos/${proj.slug}`}
              style={{ ...rowBase, display: "block", cursor: "pointer", textDecoration: "none" }}
            >
              <div style={rowFlow}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px" }}>
                  <span style={{
                    fontFamily: "var(--font-barlow, sans-serif)",
                    fontSize: "clamp(1.45rem, 3vw, 1.8rem)",
                    fontWeight: 800,
                    lineHeight: 1,
                    background: "linear-gradient(135deg, var(--lilac), var(--pink))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                    flexShrink: 0,
                  }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span style={{
                    fontSize: "0.67rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: iconColor[proj.icon],
                    background: "rgba(124,58,237,0.08)",
                    border: `1px solid ${iconColor[proj.icon]}44`,
                    borderRadius: "7px",
                    padding: "5px 10px",
                  }}>
                    {lang === "es" ? proj.category_es : proj.category_en}
                  </span>
                </div>

                <div>
                  <span style={{
                    fontFamily: "var(--font-syne, 'Arial Black', sans-serif)",
                    fontSize: "clamp(1.02rem, 2.4vw, 1.2rem)",
                    fontWeight: 700,
                    color: "var(--text)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}>
                    {lang === "es" ? proj.title_es : proj.title_en}
                  </span>
                </div>

                {/* Screenshot preview */}
                {(proj.preview ?? proj.thumb) && (
                  <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--panel-border)", lineHeight: 0 }}>
                    <Image
                      src={proj.preview ?? proj.thumb ?? ""}
                      alt={`Preview de ${proj.title_es}`}
                      width={proj.preview ? 1901 : 716}
                      height={proj.preview ? 909 : 807}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                )}

                <p style={rowDescription}>
                  {lang === "es" ? proj.desc_es : proj.desc_en}
                </p>

                <div style={rowTags}>
                  {proj.tags.map((tag) => (
                    <span key={tag} className="proj-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Coming soon rows — blurred overlay over each row */}
        {comingSoonProjects.map((proj, idx) => (
          <motion.div key={proj.slug} variants={item}>
            <div className="coming-soon-wrap">
              <div style={{ ...rowBase, cursor: "default" }}>
                <div style={rowFlow}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px" }}>
                    <span style={{
                      fontFamily: "var(--font-barlow, sans-serif)",
                      fontSize: "clamp(1.45rem, 3vw, 1.8rem)",
                      fontWeight: 800,
                      lineHeight: 1,
                      background: "linear-gradient(135deg, var(--lilac), var(--pink))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      letterSpacing: "-0.02em",
                      flexShrink: 0,
                    }}>
                      {String(LIVE_COUNT + idx + 1).padStart(2, "0")}
                    </span>
                    <span style={{
                      fontSize: "0.67rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: iconColor[proj.icon],
                      background: "rgba(124,58,237,0.08)",
                      border: `1px solid ${iconColor[proj.icon]}44`,
                      borderRadius: "7px",
                      padding: "5px 10px",
                    }}>
                      {lang === "es" ? proj.category_es : proj.category_en}
                    </span>
                  </div>

                  <div>
                    <span style={{
                      fontFamily: "var(--font-syne, 'Arial Black', sans-serif)",
                      fontSize: "clamp(1.02rem, 2.4vw, 1.2rem)",
                      fontWeight: 700,
                      color: "var(--text)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                    }}>
                      {lang === "es" ? proj.title_es : proj.title_en}
                    </span>
                  </div>

                  <p style={rowDescription}>
                    {lang === "es" ? proj.desc_es : proj.desc_en}
                  </p>

                  <div style={rowTags}>
                    {proj.tags.map((tag) => (
                      <span key={tag} className="proj-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="coming-soon-overlay">
                <span className="coming-soon-text">
                  {lang === "es" ? "Próximamente" : "Coming Soon"}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
