import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

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

  return (
    <main className="space-y-5">
      <h1 className="text-2xl font-bold tracking-tight">{project.title_es}</h1>
      <p className="muted">{project.desc_es}</p>

      <div className="card p-3">
        {project.kind === "image" && (
          <Image
            src={project.src}
            alt={project.title_es}
            width={1280}
            height={720}
            className="w-full h-auto rounded-xl"
            priority
          />
        )}

        {project.kind === "pdf" && (
          <iframe
            src={project.src}
            className="w-full h-[75vh] rounded-xl"
            title={project.title_es}
          />
        )}

        {project.kind === "design" && (
          <div className="p-6 text-sm space-y-3">
            <p className="muted">
              Este es un archivo de Adobe Illustrator. No puede previsualizarse en el navegador.
            </p>
            <a href={project.src} download className="btn btn-primary">
              Descargar archivo
            </a>
          </div>
        )}
      </div>

      <Link href="/proyectos" className="btn btn-ghost text-sm w-fit">
        ← Volver a proyectos
      </Link>
    </main>
  );
}
