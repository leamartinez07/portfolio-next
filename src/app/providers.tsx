"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "es" | "en";
type LangCtx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<LangCtx | null>(null);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("LangContext not found");
  return ctx;
}

/** Evita parpadeo/hidratación antes de montar (necesario para next-themes) */
export function ClientMounted({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
}

export default function Providers({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LangContext.Provider value={{ lang, setLang }}>
        <ClientMounted>{children}</ClientMounted>
      </LangContext.Provider>
    </ThemeProvider>
  );
}
