"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useLang } from "./providers";

const links = [
  { href: "/",          label: { es: "Inicio",    en: "Home"     } },
  { href: "/proyectos", label: { es: "Proyectos", en: "Projects" } },
];

export default function Nav() {
  const pathname = usePathname();
  const { lang } = useLang();

  const items = useMemo(
    () =>
      links.map((l) => {
        const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
        return { ...l, active };
      }),
    [pathname]
  );

  return (
    <ul className="desktop-nav gap-2">
      {items.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            aria-current={l.active ? "page" : undefined}
            className="btn btn-ghost px-3 py-1.5 transition-all"
            style={
              l.active
                ? { background: "var(--accent)", borderColor: "transparent", color: "#ffffff" }
                : {}
            }
          >
            {l.label[lang]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
