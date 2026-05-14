"use client";

import * as SI from "react-icons/si";
import type { IconType } from "react-icons";
import TechIcon from "./TechIcon";

function toReactIconsKey(slug: string) {
  const pascal = slug
    .toLowerCase()
    .replace(/[^a-z0-9]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^./, (c) => c.toUpperCase());
  return `Si${pascal}`;
}
const OVERRIDES: Record<string, string> = {
  vue: "SiVuedotjs",
  "vue.js": "SiVuedotjs",
  wordpress: "SiWordpress",
  tailwindcss: "SiTailwindcss",
  phpmyadmin: "SiPhpmyadmin",
  googlechrome: "SiGooglechrome",
};

export default function BrandIcon({
  slug,
  size = 20,
  color,
  useBrand = true,      // solo para fallback
  className = "",
  title,
}: {
  slug: string;
  size?: number;
  color?: string;
  useBrand?: boolean;
  className?: string;
  title?: string;
}) {
  const key = OVERRIDES[slug.toLowerCase()] ?? toReactIconsKey(slug);
  const IconCmp = (SI as unknown as Record<string, IconType>)[key];

  if (IconCmp) {
    return (
      <span
        data-icon={slug.toLowerCase()}
        className={className}
        style={color ? { color } : undefined}   // color via currentColor
        title={title ?? slug}
        aria-label={title ?? slug}
      >
        <IconCmp size={size} />
      </span>
    );
  }
  return (
    <TechIcon
      slug={slug}
      size={size}
      className={className}
      title={title}
      useBrand={useBrand}
      color={color}
    />
  );
}
