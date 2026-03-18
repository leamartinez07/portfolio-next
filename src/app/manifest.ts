import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Leandro Martinez — Desarrollador Web",
    short_name: "LM Portfolio",
    description: "Portfolio de Leandro Martinez, Desarrollador Web Jr. basado en Argentina.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0812",
    theme_color: "#0a0812",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
