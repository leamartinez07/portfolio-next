"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "./providers";

const links = [
  { href: "/",          label: { es: "Inicio",    en: "Home"     } },
  { href: "/proyectos", label: { es: "Proyectos", en: "Projects" } },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang } = useLang();

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
        className="hamburger-btn btn btn-ghost"
        style={{ padding: "6px 10px" }}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 z-50"
          style={{
            top: "100%",
            background: "var(--bg)",
            borderBottom: "1px solid var(--panel-border)",
            backdropFilter: "blur(12px)",
            padding: "0.5rem 0",
          }}
        >
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 1.5rem",
                  fontFamily: "var(--font-syne, 'Arial Black', sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: active ? "var(--accent)" : "var(--text)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  borderLeft: active ? "2px solid var(--accent)" : "2px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {l.label[lang]}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
