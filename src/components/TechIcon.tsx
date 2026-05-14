"use client";

import * as si from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { HTMLAttributes } from "react";

/** genera varias claves posibles y prueba en orden */
function candidates(slug: string) {
  const n = slug.toLowerCase();
  const map: Record<string,string> = {
    vue: "siVuedotjs",
    "vue.js": "siVuedotjs",
    javascript: "siJavascript",
    js: "siJavascript",
    typescript: "siTypescript",
    css3: "siCss3",
    html5: "siHtml5",
    phpmyadmin: "siPhpmyadmin",
    mysql: "siMysql",
    mariadb: "siMariadb",
    sqlite: "siSqlite",
    supabase: "siSupabase",
    wordpress: "siWordpress",
    tailwindcss: "siTailwindcss",
    googlechrome: "siGooglechrome",
    adobephotoshop: "siAdobephotoshop",
    adobeillustrator: "siAdobeillustrator",
    express: "siExpress",
    php: "siPhp",
    react: "siReact",
    laravel: "siLaravel",
    vuejs: "siVuedotjs",
  };
  const base = "si" + n.charAt(0).toUpperCase() + n.slice(1);              // ej: react -> siReact
  const pascal = "si" + n.replace(/[^a-z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^./, c => c.toUpperCase());
  const list = [map[n], base, pascal].filter(Boolean) as string[];
  return Array.from(new Set(list)); // sin duplicados
}

export default function TechIcon({
  slug,
  className = "",
  title,
  size = 20,
  color,
  useBrand = true,
  ...rest
}: HTMLAttributes<SVGElement> & {
  slug: string;
  size?: number;
  color?: string;
  useBrand?: boolean;
}) {
  const ICONS = si as unknown as Record<string, SimpleIcon>;
  let icon: SimpleIcon | undefined;
  for (const k of candidates(slug)) {
    const found = ICONS[k];
    if (found) { icon = found; break; }
  }
  if (!icon) return null;

  const fill = useBrand && !color ? `#${icon.hex}` : (color ?? "currentColor");

  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={title || icon.title}
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      {...rest}
    >
      <title>{title || icon.title}</title>
      <path d={icon.path} fill={fill} />
    </svg>
  );
}
