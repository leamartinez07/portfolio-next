import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos de desarrollo web y diseño de Leandro Martinez.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      paddingLeft:  "clamp(1.75rem, 3.2vw, 3.2rem)",
      paddingRight: "clamp(1.75rem, 3.2vw, 3.2rem)",
      paddingTop:    "clamp(3rem, 8vh, 5rem)",
      paddingBottom: "clamp(3rem, 8vh, 5rem)",
    }}>
      {children}
    </div>
  );
}
