"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLang } from "./providers";

export default function TopControls() {
  const { resolvedTheme, setTheme } = useTheme();
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-2">
      {/* Idioma — solo texto, sin ícono */}
      <button
        type="button"
        aria-label="Cambiar idioma"
        title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
        onClick={() => setLang(lang === "es" ? "en" : "es")}
        className="btn btn-ghost"
        style={{ color: "var(--accent)" }}
      >
        <span className="font-medium">{lang.toUpperCase()}</span>
      </button>

      {/* Tema */}
      <button
        type="button"
        aria-label="Cambiar tema"
        title="Tema"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="btn btn-ghost"
      >
        {resolvedTheme === "dark" ? (
          <>
            <Sun className="h-4 w-4" />
            <span className="font-medium">Light</span>
          </>
        ) : (
          <>
            <Moon className="h-4 w-4" />
            <span className="font-medium">Dark</span>
          </>
        )}
      </button>
    </div>
  );
}
