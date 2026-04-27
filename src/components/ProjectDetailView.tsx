"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/app/providers";
import type { Project } from "@/data/projects";

type ProjectDetailViewProps = {
  project: Project;
  webPreviewHtml: string | null;
};

export default function ProjectDetailView({
  project,
  webPreviewHtml,
}: ProjectDetailViewProps) {
  const { lang } = useLang();
  const title = lang === "es" ? project.title_es : project.title_en;
  const description = lang === "es" ? project.desc_es : project.desc_en;
  const openSiteLabel = lang === "es" ? "Abrir sitio" : "Open site";
  const backLabel = lang === "es" ? "Volver a proyectos" : "Back to projects";
  const designNote =
    lang === "es"
      ? "Este es un archivo de Adobe Illustrator (.ai). No puede previsualizarse en el navegador."
      : "This is an Adobe Illustrator (.ai) file. It cannot be previewed in the browser.";
  const downloadLabel = lang === "es" ? "Descargar archivo" : "Download file";

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "clamp(1.5rem, 2.4vw, 2.1rem)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(0.9rem, 1.4vw, 1.2rem)" }}>
        <h1 style={{
          fontFamily: "var(--font-syne, 'Arial Black', sans-serif)",
          fontSize: "clamp(1.55rem, 4vw, 2.2rem)",
          fontWeight: 800,
          color: "var(--text)",
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          margin: 0,
        }}>
          {title}
        </h1>
        <p style={{
          fontSize: "clamp(0.96rem, 1.25vw, 1.08rem)",
          color: "var(--muted)",
          lineHeight: 1.7,
          width: "100%",
          maxWidth: "100%",
          margin: 0,
        }}>
          {description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="proj-tag">{tag}</span>
          ))}
        </div>
      </div>

      <div
        className="project-preview-shell"
        style={{
          background: "color-mix(in srgb, var(--chip) 76%, transparent)",
          border: "1px solid var(--panel-border)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {project.kind === "web" && webPreviewHtml && (
          <>
            <div style={{ padding: "16px 16px 0" }}>
              <div
                className="project-preview-frame"
                style={{
                  border: "1px solid var(--panel-border)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "color-mix(in srgb, var(--chip) 76%, transparent)",
                }}
              >
                <iframe
                  srcDoc={webPreviewHtml}
                  style={{ width: "100%", height: "75vh", border: 0, display: "block" }}
                  title={title}
                />
              </div>
            </div>
            {project.url && (
              <div className="project-preview-toolbar" style={{
                background: "color-mix(in srgb, var(--chip) 76%, transparent)",
                padding: "14px 16px",
                display: "flex",
                justifyContent: "flex-end",
              }}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn"
                  style={{ color: "#ffffff" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  {openSiteLabel}
                </a>
              </div>
            )}
          </>
        )}

        {project.kind === "image" && (
          <Image
            src={project.src}
            alt={title}
            width={1280}
            height={720}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        )}

        {project.kind === "pdf" && (
          <div style={{ padding: "16px 16px 0" }}>
            <div
              className="project-preview-frame"
              style={{
                border: "1px solid var(--panel-border)",
                borderRadius: "14px",
                overflow: "hidden",
                background: "color-mix(in srgb, var(--chip) 76%, transparent)",
              }}
            >
              <iframe
                src={project.src}
                style={{ width: "100%", height: "75vh", border: 0, display: "block" }}
                title={title}
              />
            </div>
          </div>
        )}

        {project.kind === "design" && (
          <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: 0 }}>
              {designNote}
            </p>
            <a
              href={project.src}
              download
              className="btn btn-primary"
              style={{ width: "fit-content", fontSize: "0.85rem" }}
            >
              {downloadLabel}
            </a>
          </div>
        )}
      </div>

      <Link href="/proyectos" className="project-back-link" style={{ width: "fit-content" }}>
        <span className="project-back-link__icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/><path d="M21 12H9"/></svg>
        </span>
        <span>{backLabel}</span>
      </Link>
    </main>
  );
}
