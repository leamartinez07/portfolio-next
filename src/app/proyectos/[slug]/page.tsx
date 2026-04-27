import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";
import ProjectDetailView from "@/components/ProjectDetailView";
import { projects } from "@/data/projects";

function buildWebPreviewHtml(html: string, projectUrl?: string) {
  if (!projectUrl) return html;

  const safeUrl = projectUrl.replace(/"/g, "&quot;");
  const baseTag = `<base href="${safeUrl}" target="_blank">`;
  const buttonRedirectScript = `
  <script>
    (() => {
      const projectUrl = ${JSON.stringify(projectUrl)};
      const openProject = () => window.open(projectUrl, "_blank", "noopener,noreferrer");

      document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;

        const button = target.closest("button");
        if (!button) return;

        event.preventDefault();
        openProject();
      }, true);
    })();
  </script>`;

  const htmlWithBase = html.includes("<head>")
    ? html.replace("<head>", `<head>\n  ${baseTag}`)
    : `${baseTag}${html}`;

  return htmlWithBase.includes("</body>")
    ? htmlWithBase.replace("</body>", `${buttonRedirectScript}\n</body>`)
    : `${htmlWithBase}${buttonRedirectScript}`;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title_es,
    description: project.desc_es,
  };
}

export default async function ProjectDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const webPreviewHtml =
    project.kind === "web"
      ? buildWebPreviewHtml(
          await readFile(path.join(process.cwd(), "public", project.src), "utf8"),
          project.url
        )
      : null;

  return <ProjectDetailView project={project} webPreviewHtml={webPreviewHtml} />;
}
